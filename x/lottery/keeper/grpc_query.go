package keeper

import (
	"lottery/x/lottery/types"
)

var _ types.QueryServer = Keeper{}
