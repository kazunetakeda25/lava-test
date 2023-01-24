package keeper

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	abci "github.com/tendermint/tendermint/abci/types"
)

func (k Keeper) OnBeginBlock(ctx sdk.Context, _ abci.RequestBeginBlock) {

}
func (k Keeper) OnEndBlock(ctx sdk.Context, _ abci.RequestEndBlock) {
	// Complete current lottery
	if !k.CompleteLottery(ctx) {
		return
	}

	// Start new lottery
	k.CreateLottery(ctx)
}
