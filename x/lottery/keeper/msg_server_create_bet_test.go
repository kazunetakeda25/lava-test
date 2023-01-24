package keeper_test

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"lottery/testutil"
	"lottery/x/lottery/types"
	"testing"
)

func TestCreateBet(t *testing.T) {
	msgServer, context := setupMsgServer(t)

	resp, err := msgServer.CreateBet(context, &types.MsgCreateBet{
		Creator: testutil.Alice,
		Amount:  sdk.NewInt64Coin(types.LotDenom, 5),
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgCreateBetResponse{
		LotteryId: "1",
		BetIndex:  0,
	}, *resp)
}
