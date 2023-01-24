package keeper

import (
	"context"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"lottery/x/lottery/types"
)

func (k msgServer) UpdateSystemInfo(goCtx context.Context, msg *types.MsgUpdateSystemInfo) (*types.MsgUpdateSystemInfoResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	info, found := k.GetSystemInfo(ctx)
	if found {
		if msg.Fee != nil {
			info.Fee = *msg.Fee
		}
		if msg.MinBet != nil {
			info.MinBet = *msg.MinBet
		}
		if msg.MaxBet != nil {
			info.MaxBet = *msg.MaxBet
		}
		info.BetCount = msg.BetCount
	}

	return &types.MsgUpdateSystemInfoResponse{Success: true}, nil
}
