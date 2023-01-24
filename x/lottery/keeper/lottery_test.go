package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "lottery/testutil/keeper"
	"lottery/testutil/nullify"
	"lottery/x/lottery/keeper"
	"lottery/x/lottery/types"
)

// Prevent strconv unused event.proto
var _ = strconv.IntSize

func createNLottery(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Lottery {
	items := make([]types.Lottery, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetLottery(ctx, items[i])
	}
	return items
}

func TestLotteryGet(t *testing.T) {
	keeper, ctx := keepertest.LotteryKeeper(t)
	items := createNLottery(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetLottery(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestLotteryRemove(t *testing.T) {
	keeper, ctx := keepertest.LotteryKeeper(t)
	items := createNLottery(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveLottery(ctx,
			item.Index,
		)
		_, found := keeper.GetLottery(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestLotteryGetAll(t *testing.T) {
	keeper, ctx := keepertest.LotteryKeeper(t)
	items := createNLottery(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllLottery(ctx)),
	)
}
