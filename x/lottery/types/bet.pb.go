// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: lottery/lottery/bet.proto

package types

import (
	fmt "fmt"
	_ "github.com/cosmos/cosmos-proto"
	types "github.com/cosmos/cosmos-sdk/types"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Bet struct {
	Creator string     `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Amount  types.Coin `protobuf:"bytes,2,opt,name=amount,proto3" json:"amount"`
	At      int64      `protobuf:"varint,3,opt,name=at,proto3" json:"at,omitempty"`
}

func (m *Bet) Reset()         { *m = Bet{} }
func (m *Bet) String() string { return proto.CompactTextString(m) }
func (*Bet) ProtoMessage()    {}
func (*Bet) Descriptor() ([]byte, []int) {
	return fileDescriptor_b603a74e001fa14c, []int{0}
}
func (m *Bet) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Bet) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Bet.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Bet) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Bet.Merge(m, src)
}
func (m *Bet) XXX_Size() int {
	return m.Size()
}
func (m *Bet) XXX_DiscardUnknown() {
	xxx_messageInfo_Bet.DiscardUnknown(m)
}

var xxx_messageInfo_Bet proto.InternalMessageInfo

func (m *Bet) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Bet) GetAmount() types.Coin {
	if m != nil {
		return m.Amount
	}
	return types.Coin{}
}

func (m *Bet) GetAt() int64 {
	if m != nil {
		return m.At
	}
	return 0
}

func init() {
	proto.RegisterType((*Bet)(nil), "lottery.lottery.Bet")
}

func init() { proto.RegisterFile("lottery/lottery/bet.proto", fileDescriptor_b603a74e001fa14c) }

var fileDescriptor_b603a74e001fa14c = []byte{
	// 252 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xcc, 0xc9, 0x2f, 0x29,
	0x49, 0x2d, 0xaa, 0xd4, 0x87, 0xd1, 0x49, 0xa9, 0x25, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42,
	0xfc, 0x50, 0x21, 0x3d, 0x28, 0x2d, 0x25, 0x92, 0x9e, 0x9f, 0x9e, 0x0f, 0x96, 0xd3, 0x07, 0xb1,
	0x20, 0xca, 0xa4, 0x24, 0x93, 0xf3, 0x8b, 0x73, 0xf3, 0x8b, 0xe3, 0x21, 0x12, 0x10, 0x0e, 0x54,
	0x4a, 0x0e, 0xc2, 0xd3, 0x4f, 0x4a, 0x2c, 0x4e, 0xd5, 0x2f, 0x33, 0x4c, 0x4a, 0x2d, 0x49, 0x34,
	0xd4, 0x4f, 0xce, 0xcf, 0xcc, 0x83, 0xc8, 0x2b, 0x35, 0x31, 0x72, 0x31, 0x3b, 0xa5, 0x96, 0x08,
	0x19, 0x71, 0xb1, 0x27, 0x17, 0xa5, 0x26, 0x96, 0xe4, 0x17, 0x49, 0x30, 0x2a, 0x30, 0x6a, 0x70,
	0x3a, 0x49, 0x5c, 0xda, 0xa2, 0x2b, 0x02, 0x35, 0xca, 0x31, 0x25, 0xa5, 0x28, 0xb5, 0xb8, 0x38,
	0xb8, 0xa4, 0x28, 0x33, 0x2f, 0x3d, 0x08, 0xa6, 0x50, 0xc8, 0x9c, 0x8b, 0x2d, 0x31, 0x37, 0xbf,
	0x34, 0xaf, 0x44, 0x82, 0x49, 0x81, 0x51, 0x83, 0xdb, 0x48, 0x52, 0x0f, 0xaa, 0x1e, 0x64, 0x99,
	0x1e, 0xd4, 0x32, 0x3d, 0xe7, 0xfc, 0xcc, 0x3c, 0x27, 0x96, 0x13, 0xf7, 0xe4, 0x19, 0x82, 0xa0,
	0xca, 0x85, 0xf8, 0xb8, 0x98, 0x12, 0x4b, 0x24, 0x98, 0x15, 0x18, 0x35, 0x98, 0x83, 0x98, 0x12,
	0x4b, 0x9c, 0x0c, 0x4f, 0x3c, 0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6,
	0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0x4a, 0x1c, 0x16,
	0x26, 0x15, 0xf0, 0xd0, 0x29, 0xa9, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0x3b, 0xdf, 0x18, 0x10,
	0x00, 0x00, 0xff, 0xff, 0x51, 0x67, 0x7a, 0xa2, 0x3d, 0x01, 0x00, 0x00,
}

func (m *Bet) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Bet) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Bet) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.At != 0 {
		i = encodeVarintBet(dAtA, i, uint64(m.At))
		i--
		dAtA[i] = 0x18
	}
	{
		size, err := m.Amount.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintBet(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintBet(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintBet(dAtA []byte, offset int, v uint64) int {
	offset -= sovBet(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Bet) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovBet(uint64(l))
	}
	l = m.Amount.Size()
	n += 1 + l + sovBet(uint64(l))
	if m.At != 0 {
		n += 1 + sovBet(uint64(m.At))
	}
	return n
}

func sovBet(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozBet(x uint64) (n int) {
	return sovBet(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Bet) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowBet
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Bet: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Bet: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthBet
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthBet
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthBet
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthBet
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Amount.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field At", wireType)
			}
			m.At = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowBet
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.At |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipBet(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthBet
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipBet(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowBet
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBet
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowBet
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthBet
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupBet
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthBet
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthBet        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowBet          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupBet = fmt.Errorf("proto: unexpected end of group")
)