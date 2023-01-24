package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/mitchellh/hashstructure/v2"
	"golang.org/x/exp/slices"
	"lottery/x/lottery/types"
	"strconv"
)

func (k Keeper) CreateLottery(ctx sdk.Context) bool {
	for {
		// Get current system info
		info, found := k.GetSystemInfo(ctx)
		if !found {
			break
		}

		// Create new lottery
		lottery := types.Lottery{
			Index:     strconv.FormatUint(info.NextId, 10),
			StartAt:   ctx.BlockHeight(),
			Fee:       info.Fee,
			MinBet:    info.MinBet,
			BetCount:  info.BetCount,
			WinnerIdx: -1,
		}
		k.SetLottery(ctx, lottery)

		// Update next lottery id
		info.NextId++
		k.SetSystemInfo(ctx, info)

		// Fire event
		ctx.EventManager().EmitTypedEvent(&types.EvtLotteryBegan{
			Lottery: &lottery,
		})
		return true
	}
	return false
}
func (k Keeper) GetCurrentLottery(ctx sdk.Context) (types.Lottery, bool) {
	for {
		// Get current system info
		info, found := k.GetSystemInfo(ctx)
		if !found {
			break
		}
		// Get current lottery index
		if info.NextId == types.DefaultIndex {
			break
		}

		// Get current lottery and return
		lottery, found := k.GetLottery(ctx, strconv.FormatUint(info.NextId-1, 10))
		if !found {
			break
		}

		if lottery.EndAt >= 0 && lottery.WinnerIdx > -1 {
			break
		}
		return lottery, true
	}
	return types.Lottery{}, false
}
func (k Keeper) CompleteLottery(ctx sdk.Context) bool {
	for {
		// Get current lottery
		lottery, found := k.GetCurrentLottery(ctx)
		if !found {
			break
		}

		// Check if lottery could be completed
		if !canLotteryComplete(lottery) {
			break
		}

		// Calculate winner & rewards
		err, winnerIdx, reward := k.calculateWinnerAndRewards(ctx, lottery)
		if err != nil {
			break
		}

		// Complete lottery & event
		lottery.EndAt = ctx.BlockHeight()
		lottery.WinnerIdx = int64(winnerIdx)
		lottery.Reward = reward
		k.SetLottery(ctx, lottery)

		winnerBet := lottery.Bets[winnerIdx]
		ctx.EventManager().EmitTypedEvent(&types.EvtLotteryEnded{
			Lottery: &lottery,
		})

		// Send reward to better
		if !reward.IsZero() && reward.IsPositive() {
			addr, _ := sdk.AccAddressFromBech32(winnerBet.Creator)
			k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, sdk.NewCoins(reward))
		}
		return true
	}
	return false
}
func (k Keeper) DoBet(ctx sdk.Context, msg *types.MsgCreateBet) (lotteryId string, betIndex int64, err error) {
	// Get current lottery or create new lottery
	lottery, found := k.GetCurrentLottery(ctx)
	if !found {
		k.CreateLottery(ctx)
		return k.DoBet(ctx, msg)
	}

	// Check bet amount is valid
	if msg.Amount.IsLT(lottery.MinBet) {
		return "", -1, types.ErrBetAmountLessThanMin
	}
	if lottery.MaxBet.IsLT(msg.Amount) {
		return "", -1, types.ErrBetAmountMoreThanMax
	}

	// Check user balance
	addr, _ := sdk.AccAddressFromBech32(msg.Creator)
	found, balance := k.bankKeeper.SpendableCoins(ctx, addr).Find(types.LotDenom)
	if !found {
		return "", -1, types.ErrBalanceNotEnough
	}
	betIdx := slices.IndexFunc(lottery.Bets, func(bet *types.Bet) bool {
		return bet.Creator == msg.Creator
	})

	// Existing bet, no double fee
	if betIdx > -1 {
		existBet := &lottery.Bets[betIdx]
		balance = balance.Add((*existBet).Amount)

		if balance.IsLT(msg.Amount) {
			return "", -1, types.ErrBalanceNotEnough
		}

		// betAmount = existBet, no need change
		if msg.Amount.IsEqual((*existBet).Amount) {
			return lottery.Index, int64(betIdx), nil
		}
		if msg.Amount.IsLT((*existBet).Amount) {
			// betAmount < existBet, user <=diff== module
			diff := (*existBet).Amount.Sub(msg.Amount)
			k.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, addr, sdk.NewCoins(diff))
		} else {
			// betAmount > existBet, user ==diff=> module
			diff := msg.Amount.Sub((*existBet).Amount)
			k.bankKeeper.SendCoinsFromAccountToModule(ctx, addr, types.ModuleName, sdk.NewCoins(diff))
		}
		(*existBet).Amount = msg.Amount
	} else {
		// Create new bet
		transAmount := msg.Amount.Add(lottery.Fee)
		if balance.IsLT(transAmount) {
			return "", -1, types.ErrBalanceNotEnough
		}

		k.bankKeeper.SendCoinsFromAccountToModule(ctx, addr, types.ModuleName, sdk.NewCoins(transAmount))
		betIdx = len(lottery.Bets)
		lottery.Bets = append(lottery.Bets, &types.Bet{
			Creator: msg.Creator,
			Amount:  msg.Amount,
			At:      ctx.BlockHeight(),
		})
	}

	k.updateLottery(ctx, lottery, msg.Amount)
	return lottery.Index, int64(betIdx), nil
}

// Private methods ======================================================
func (k Keeper) getModuleBalance(ctx sdk.Context) sdk.Coin {
	moduleAddr := k.accountKeeper.GetModuleAddress(types.ModuleName)
	_, all := k.bankKeeper.SpendableCoins(ctx, moduleAddr).Find(types.LotDenom)
	return all
}
func canLotteryComplete(lottery types.Lottery) bool {
	for {
		// Check if lottery could be completed
		if int64(len(lottery.Bets)) < lottery.BetCount {
			break
		}
		// TODO: We can add more conditions here

		return true
	}
	return false
}
func (k Keeper) calculateWinnerAndRewards(ctx sdk.Context, lottery types.Lottery) (err error, winnerIdx int, rewards sdk.Coin) {
	hash, err := hashstructure.Hash(lottery, hashstructure.FormatV2, nil)
	if err != nil {
		return err, 0, sdk.Coin{}
	}

	winnerIdx = int(hash^0xFFFF) % len(lottery.Bets)
	bet := lottery.Bets[winnerIdx]

	// If the winner placed the highest bet the entire pool is paid to the winner (including fees)
	if bet.Amount.IsGTE(lottery.BetMax) {
		// Get all amount of module
		moduleAddr := k.accountKeeper.GetModuleAddress(types.ModuleName)
		_, all := k.bankKeeper.SpendableCoins(ctx, moduleAddr).Find(types.LotDenom)
		return nil, winnerIdx, all
	}

	// If the winner paid the lowest bet, no reward is given, lottery total pool is carried over
	if bet.Amount.IsLTE(lottery.BetMin) {
		return nil, winnerIdx, sdk.Coin{}
	}

	// All other results: winner is paid the sum of all bets (without fees) in the current lottery only
	summary := sdk.Coin{}
	for _, bet := range lottery.Bets {
		summary = summary.Add(bet.Amount)
	}
	return nil, winnerIdx, summary
}
func (k Keeper) updateLottery(ctx sdk.Context, lottery types.Lottery, amount sdk.Coin) {
	for {
		if lottery.BetMax.IsLT(amount) {
			lottery.BetMax = amount
			break
		}

		if amount.IsLT(lottery.BetMin) {
			lottery.BetMin = amount
			break
		}
	}
	k.SetLottery(ctx, lottery)
}
