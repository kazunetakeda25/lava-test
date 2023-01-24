package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"lottery/x/lottery/types"
)

func (k msgServer) CreateBet(goCtx context.Context, msg *types.MsgCreateBet) (*types.MsgCreateBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	lotteryId, betIdx, err := k.DoBet(ctx, msg)
	if err == nil {
		ctx.EventManager().EmitTypedEvent(&types.EvtCreateBet{
			LotteryId: lotteryId,
			BetIndex:  betIdx,
			Creator:   msg.Creator,
			Amount:    msg.Amount,
			At:        ctx.BlockHeight(),
		})
	}

	return &types.MsgCreateBetResponse{
		LotteryId: lotteryId,
		BetIndex:  betIdx,
	}, err
}
