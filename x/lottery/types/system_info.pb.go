// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: lottery/lottery/system_info.proto

package types

import (
	fmt "fmt"
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

type SystemInfo struct {
	NextId   uint64     `protobuf:"varint,1,opt,name=nextId,proto3" json:"nextId,omitempty"`
	Fee      types.Coin `protobuf:"bytes,2,opt,name=fee,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"fee"`
	MinBet   types.Coin `protobuf:"bytes,3,opt,name=minBet,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"minBet"`
	MaxBet   types.Coin `protobuf:"bytes,4,opt,name=maxBet,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins" json:"maxBet"`
	BetCount int64      `protobuf:"varint,5,opt,name=betCount,proto3" json:"betCount,omitempty"`
}

func (m *SystemInfo) Reset()         { *m = SystemInfo{} }
func (m *SystemInfo) String() string { return proto.CompactTextString(m) }
func (*SystemInfo) ProtoMessage()    {}
func (*SystemInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_6c6c1eba232cb0f9, []int{0}
}
func (m *SystemInfo) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *SystemInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_SystemInfo.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *SystemInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SystemInfo.Merge(m, src)
}
func (m *SystemInfo) XXX_Size() int {
	return m.Size()
}
func (m *SystemInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_SystemInfo.DiscardUnknown(m)
}

var xxx_messageInfo_SystemInfo proto.InternalMessageInfo

func (m *SystemInfo) GetNextId() uint64 {
	if m != nil {
		return m.NextId
	}
	return 0
}

func (m *SystemInfo) GetFee() types.Coin {
	if m != nil {
		return m.Fee
	}
	return types.Coin{}
}

func (m *SystemInfo) GetMinBet() types.Coin {
	if m != nil {
		return m.MinBet
	}
	return types.Coin{}
}

func (m *SystemInfo) GetMaxBet() types.Coin {
	if m != nil {
		return m.MaxBet
	}
	return types.Coin{}
}

func (m *SystemInfo) GetBetCount() int64 {
	if m != nil {
		return m.BetCount
	}
	return 0
}

func init() {
	proto.RegisterType((*SystemInfo)(nil), "lottery.lottery.SystemInfo")
}

func init() { proto.RegisterFile("lottery/lottery/system_info.proto", fileDescriptor_6c6c1eba232cb0f9) }

var fileDescriptor_6c6c1eba232cb0f9 = []byte{
	// 290 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x91, 0x31, 0x4e, 0xc3, 0x30,
	0x18, 0x85, 0xe3, 0xb6, 0x44, 0xc8, 0x0c, 0x48, 0x11, 0x82, 0x90, 0xc1, 0x0d, 0x4c, 0x59, 0xb0,
	0x09, 0xdc, 0x20, 0x9d, 0xba, 0x86, 0x0d, 0x09, 0xa1, 0x24, 0x75, 0x42, 0x04, 0xf1, 0x5f, 0xd5,
	0x2e, 0x4a, 0x6e, 0xc1, 0x39, 0x38, 0x49, 0xc7, 0x8e, 0x4c, 0x80, 0x92, 0x89, 0x5b, 0xa0, 0x38,
	0x6e, 0x4f, 0x00, 0xd3, 0xf3, 0xd3, 0xb3, 0xbf, 0x67, 0xe9, 0xe1, 0x8b, 0x17, 0x50, 0x8a, 0xaf,
	0x1a, 0xb6, 0x53, 0xd9, 0x48, 0xc5, 0xab, 0xc7, 0x52, 0xe4, 0x40, 0x97, 0x2b, 0x50, 0xe0, 0x1c,
	0x9b, 0x88, 0x1a, 0xf5, 0x4e, 0x0a, 0x28, 0x40, 0x67, 0xac, 0x3f, 0x0d, 0xd7, 0x3c, 0x92, 0x81,
	0xac, 0x40, 0xb2, 0x34, 0x91, 0x9c, 0xbd, 0x86, 0x29, 0x57, 0x49, 0xc8, 0x32, 0x28, 0xc5, 0x90,
	0x5f, 0xfe, 0x8c, 0x30, 0xbe, 0xd3, 0xf0, 0xb9, 0xc8, 0xc1, 0x39, 0xc5, 0xb6, 0xe0, 0xb5, 0x9a,
	0x2f, 0x5c, 0xe4, 0xa3, 0x60, 0x12, 0x1b, 0xe7, 0x3c, 0xe0, 0x71, 0xce, 0xb9, 0x3b, 0xf2, 0x51,
	0x70, 0x74, 0x73, 0x4e, 0x07, 0x28, 0xed, 0xa1, 0xd4, 0x40, 0xe9, 0x0c, 0x4a, 0x11, 0x5d, 0x6f,
	0x3e, 0xa7, 0xd6, 0xfb, 0xd7, 0x34, 0x28, 0x4a, 0xf5, 0xb4, 0x4e, 0x69, 0x06, 0x15, 0x33, 0x3f,
	0x18, 0xe4, 0x4a, 0x2e, 0x9e, 0x99, 0x6a, 0x96, 0x5c, 0xea, 0x07, 0x32, 0xee, 0xb9, 0x4e, 0x86,
	0xed, 0xaa, 0x14, 0x11, 0x57, 0xee, 0xf8, 0xef, 0x1b, 0x0c, 0x5a, 0x97, 0x24, 0x75, 0x5f, 0x32,
	0xf9, 0x8f, 0x12, 0x8d, 0x76, 0x3c, 0x7c, 0x98, 0x72, 0x35, 0x83, 0xb5, 0x50, 0xee, 0x81, 0x8f,
	0x82, 0x71, 0xbc, 0xf7, 0x51, 0xb8, 0x69, 0x09, 0xda, 0xb6, 0x04, 0x7d, 0xb7, 0x04, 0xbd, 0x75,
	0xc4, 0xda, 0x76, 0xc4, 0xfa, 0xe8, 0x88, 0x75, 0x7f, 0xb6, 0xdb, 0xb9, 0xde, 0x2f, 0xae, 0xe1,
	0xa9, 0xad, 0x57, 0xba, 0xfd, 0x0d, 0x00, 0x00, 0xff, 0xff, 0xb3, 0x89, 0x6a, 0x2e, 0x11, 0x02,
	0x00, 0x00,
}

func (m *SystemInfo) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *SystemInfo) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *SystemInfo) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.BetCount != 0 {
		i = encodeVarintSystemInfo(dAtA, i, uint64(m.BetCount))
		i--
		dAtA[i] = 0x28
	}
	{
		size, err := m.MaxBet.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintSystemInfo(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x22
	{
		size, err := m.MinBet.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintSystemInfo(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x1a
	{
		size, err := m.Fee.MarshalToSizedBuffer(dAtA[:i])
		if err != nil {
			return 0, err
		}
		i -= size
		i = encodeVarintSystemInfo(dAtA, i, uint64(size))
	}
	i--
	dAtA[i] = 0x12
	if m.NextId != 0 {
		i = encodeVarintSystemInfo(dAtA, i, uint64(m.NextId))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintSystemInfo(dAtA []byte, offset int, v uint64) int {
	offset -= sovSystemInfo(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *SystemInfo) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.NextId != 0 {
		n += 1 + sovSystemInfo(uint64(m.NextId))
	}
	l = m.Fee.Size()
	n += 1 + l + sovSystemInfo(uint64(l))
	l = m.MinBet.Size()
	n += 1 + l + sovSystemInfo(uint64(l))
	l = m.MaxBet.Size()
	n += 1 + l + sovSystemInfo(uint64(l))
	if m.BetCount != 0 {
		n += 1 + sovSystemInfo(uint64(m.BetCount))
	}
	return n
}

func sovSystemInfo(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozSystemInfo(x uint64) (n int) {
	return sovSystemInfo(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *SystemInfo) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowSystemInfo
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
			return fmt.Errorf("proto: SystemInfo: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: SystemInfo: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field NextId", wireType)
			}
			m.NextId = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSystemInfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.NextId |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Fee", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSystemInfo
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
				return ErrInvalidLengthSystemInfo
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSystemInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.Fee.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MinBet", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSystemInfo
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
				return ErrInvalidLengthSystemInfo
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSystemInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.MinBet.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaxBet", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSystemInfo
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
				return ErrInvalidLengthSystemInfo
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthSystemInfo
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if err := m.MaxBet.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field BetCount", wireType)
			}
			m.BetCount = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowSystemInfo
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.BetCount |= int64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipSystemInfo(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthSystemInfo
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
func skipSystemInfo(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowSystemInfo
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
					return 0, ErrIntOverflowSystemInfo
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
					return 0, ErrIntOverflowSystemInfo
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
				return 0, ErrInvalidLengthSystemInfo
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupSystemInfo
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthSystemInfo
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthSystemInfo        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowSystemInfo          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupSystemInfo = fmt.Errorf("proto: unexpected end of group")
)
