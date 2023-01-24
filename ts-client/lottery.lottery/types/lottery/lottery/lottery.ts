/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Bet } from "./bet";

export const protobufPackage = "lottery.lottery";

export interface Lottery {
  index: string;
  startAt: number;
  endAt: number;
  fee: Coin | undefined;
  minBet: Coin | undefined;
  maxBet: Coin | undefined;
  betCount: number;
  betMax: Coin | undefined;
  betMin: Coin | undefined;
  bets: Bet[];
  winnerIdx: number;
  reward: Coin | undefined;
}

function createBaseLottery(): Lottery {
  return {
    index: "",
    startAt: 0,
    endAt: 0,
    fee: undefined,
    minBet: undefined,
    maxBet: undefined,
    betCount: 0,
    betMax: undefined,
    betMin: undefined,
    bets: [],
    winnerIdx: 0,
    reward: undefined,
  };
}

export const Lottery = {
  encode(message: Lottery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.startAt !== 0) {
      writer.uint32(16).int64(message.startAt);
    }
    if (message.endAt !== 0) {
      writer.uint32(24).int64(message.endAt);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(34).fork()).ldelim();
    }
    if (message.minBet !== undefined) {
      Coin.encode(message.minBet, writer.uint32(42).fork()).ldelim();
    }
    if (message.maxBet !== undefined) {
      Coin.encode(message.maxBet, writer.uint32(50).fork()).ldelim();
    }
    if (message.betCount !== 0) {
      writer.uint32(56).int64(message.betCount);
    }
    if (message.betMax !== undefined) {
      Coin.encode(message.betMax, writer.uint32(66).fork()).ldelim();
    }
    if (message.betMin !== undefined) {
      Coin.encode(message.betMin, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.bets) {
      Bet.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.winnerIdx !== 0) {
      writer.uint32(88).int64(message.winnerIdx);
    }
    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Lottery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLottery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.startAt = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.endAt = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.minBet = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.maxBet = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.betCount = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.betMax = Coin.decode(reader, reader.uint32());
          break;
        case 9:
          message.betMin = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.bets.push(Bet.decode(reader, reader.uint32()));
          break;
        case 11:
          message.winnerIdx = longToNumber(reader.int64() as Long);
          break;
        case 12:
          message.reward = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Lottery {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      startAt: isSet(object.startAt) ? Number(object.startAt) : 0,
      endAt: isSet(object.endAt) ? Number(object.endAt) : 0,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      minBet: isSet(object.minBet) ? Coin.fromJSON(object.minBet) : undefined,
      maxBet: isSet(object.maxBet) ? Coin.fromJSON(object.maxBet) : undefined,
      betCount: isSet(object.betCount) ? Number(object.betCount) : 0,
      betMax: isSet(object.betMax) ? Coin.fromJSON(object.betMax) : undefined,
      betMin: isSet(object.betMin) ? Coin.fromJSON(object.betMin) : undefined,
      bets: Array.isArray(object?.bets) ? object.bets.map((e: any) => Bet.fromJSON(e)) : [],
      winnerIdx: isSet(object.winnerIdx) ? Number(object.winnerIdx) : 0,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined,
    };
  },

  toJSON(message: Lottery): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.startAt !== undefined && (obj.startAt = Math.round(message.startAt));
    message.endAt !== undefined && (obj.endAt = Math.round(message.endAt));
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.minBet !== undefined && (obj.minBet = message.minBet ? Coin.toJSON(message.minBet) : undefined);
    message.maxBet !== undefined && (obj.maxBet = message.maxBet ? Coin.toJSON(message.maxBet) : undefined);
    message.betCount !== undefined && (obj.betCount = Math.round(message.betCount));
    message.betMax !== undefined && (obj.betMax = message.betMax ? Coin.toJSON(message.betMax) : undefined);
    message.betMin !== undefined && (obj.betMin = message.betMin ? Coin.toJSON(message.betMin) : undefined);
    if (message.bets) {
      obj.bets = message.bets.map((e) => e ? Bet.toJSON(e) : undefined);
    } else {
      obj.bets = [];
    }
    message.winnerIdx !== undefined && (obj.winnerIdx = Math.round(message.winnerIdx));
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Lottery>, I>>(object: I): Lottery {
    const message = createBaseLottery();
    message.index = object.index ?? "";
    message.startAt = object.startAt ?? 0;
    message.endAt = object.endAt ?? 0;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    message.minBet = (object.minBet !== undefined && object.minBet !== null)
      ? Coin.fromPartial(object.minBet)
      : undefined;
    message.maxBet = (object.maxBet !== undefined && object.maxBet !== null)
      ? Coin.fromPartial(object.maxBet)
      : undefined;
    message.betCount = object.betCount ?? 0;
    message.betMax = (object.betMax !== undefined && object.betMax !== null)
      ? Coin.fromPartial(object.betMax)
      : undefined;
    message.betMin = (object.betMin !== undefined && object.betMin !== null)
      ? Coin.fromPartial(object.betMin)
      : undefined;
    message.bets = object.bets?.map((e) => Bet.fromPartial(e)) || [];
    message.winnerIdx = object.winnerIdx ?? 0;
    message.reward = (object.reward !== undefined && object.reward !== null)
      ? Coin.fromPartial(object.reward)
      : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
