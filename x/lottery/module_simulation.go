package lottery

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"lottery/testutil/sample"
	lotterysimulation "lottery/x/lottery/simulation"
	"lottery/x/lottery/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = lotterysimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateBet = "op_weight_msg_create_bet"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateBet int = 100

	opWeightMsgUpdateSystemInfo = "op_weight_msg_update_system_info"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateSystemInfo int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	lotteryGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&lotteryGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateBet int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateBet, &weightMsgCreateBet, nil,
		func(_ *rand.Rand) {
			weightMsgCreateBet = defaultWeightMsgCreateBet
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateBet,
		lotterysimulation.SimulateMsgCreateBet(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateSystemInfo int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateSystemInfo, &weightMsgUpdateSystemInfo, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateSystemInfo = defaultWeightMsgUpdateSystemInfo
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateSystemInfo,
		lotterysimulation.SimulateMsgUpdateSystemInfo(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
