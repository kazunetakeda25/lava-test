package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"lottery/x/lottery/types"
)

func (k Keeper) LotteryAll(c context.Context, req *types.QueryAllLotteryRequest) (*types.QueryAllLotteryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var lotterys []types.Lottery
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	lotteryStore := prefix.NewStore(store, types.KeyPrefix(types.LotteryKeyPrefix))

	pageRes, err := query.Paginate(lotteryStore, req.Pagination, func(key []byte, value []byte) error {
		var lottery types.Lottery
		if err := k.cdc.Unmarshal(value, &lottery); err != nil {
			return err
		}

		lotterys = append(lotterys, lottery)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllLotteryResponse{Lottery: lotterys, Pagination: pageRes}, nil
}

func (k Keeper) Lottery(c context.Context, req *types.QueryGetLotteryRequest) (*types.QueryGetLotteryResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetLottery(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetLotteryResponse{Lottery: val}, nil
}
