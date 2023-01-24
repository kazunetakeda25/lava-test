package types

import "cosmossdk.io/errors"

var (
	ErrAddressInvalid       = errors.Register(ModuleName, 1100, "Address is invalid")
	ErrBalanceNotEnough     = errors.Register(ModuleName, 1101, "Balance is not enough")
	ErrBetAmountLessThanMin = errors.Register(ModuleName, 1102, "Bet amount is less than min bet amount")
	ErrBetAmountMoreThanMax = errors.Register(ModuleName, 1103, "Bet amount is more than max bet amount")
)
