package cli

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"lottery/x/lottery/types"
)

var _ = strconv.Itoa(0)

func CmdUpdateSystemInfo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-system-info [fee] [min-bet] [bet-count]",
		Short: "Broadcast message updateSystemInfo",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argFee := args[0]
			argMinBet := args[1]
			argBetCount := cast.ToInt64(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			fee, err := sdk.ParseCoinNormalized(argFee)
			if err != nil {
				return err
			}
			minBet, err := sdk.ParseCoinNormalized(argMinBet)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSystemInfo(
				clientCtx.GetFromAddress().String(),
				fee,
				minBet,
				argBetCount,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
