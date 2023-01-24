package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		SystemInfo: &SystemInfo{
			NextId:   DefaultIndex,
			Fee:      sdk.NewInt64Coin(LotDenom, 5),
			MinBet:   sdk.NewInt64Coin(LotDenom, 1),
			MaxBet:   sdk.NewInt64Coin(LotDenom, 100),
			BetCount: 10,
		},
		LotteryList: []Lottery{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an event.proto upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in lottery
	lotteryIndexMap := make(map[string]struct{})

	for _, elem := range gs.LotteryList {
		index := string(LotteryKey(elem.Index))
		if _, ok := lotteryIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for lottery")
		}
		lotteryIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
