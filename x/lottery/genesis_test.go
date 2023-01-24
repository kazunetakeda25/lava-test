package lottery_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "lottery/testutil/keeper"
	"lottery/testutil/nullify"
	"lottery/x/lottery"
	"lottery/x/lottery/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		SystemInfo: &types.SystemInfo{
			NextId: 41,
		},
		LotteryList: []types.Lottery{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.LotteryKeeper(t)
	lottery.InitGenesis(ctx, *k, genesisState)
	got := lottery.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.SystemInfo, got.SystemInfo)
	require.ElementsMatch(t, genesisState.LotteryList, got.LotteryList)
	// this line is used by starport scaffolding # genesis/test/assert
}
