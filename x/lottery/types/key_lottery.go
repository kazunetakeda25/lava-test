package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// LotteryKeyPrefix is the prefix to retrieve all Lottery
	LotteryKeyPrefix = "Lottery/value/"
)

// LotteryKey returns the store key to retrieve a Lottery from the index fields
func LotteryKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
