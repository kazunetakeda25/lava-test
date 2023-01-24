package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateSystemInfo = "update_system_info"

var _ sdk.Msg = &MsgUpdateSystemInfo{}

func NewMsgUpdateSystemInfo(creator string, fee sdk.Coin, minBet sdk.Coin, betCount int64) *MsgUpdateSystemInfo {
	return &MsgUpdateSystemInfo{
		Creator:  creator,
		Fee:      &fee,
		MinBet:   &minBet,
		BetCount: betCount,
	}
}

func (msg *MsgUpdateSystemInfo) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSystemInfo) Type() string {
	return TypeMsgUpdateSystemInfo
}

func (msg *MsgUpdateSystemInfo) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSystemInfo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSystemInfo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
