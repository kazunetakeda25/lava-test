/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "lottery.lottery";

export interface EvtLotteryBegan {
  lotteryId: string;
  beganAt: number;
  fee: Coin | undefined;
  minAmount: Coin | undefined;
}

export interface EvtLotteryEnded {
  lotteryId: string;
  beganAt: number;
  endedAt: number;
  winner: string;
  betAmount: Coin | undefined;
  rewards: Coin | undefined;
}

export interface EvtCreateBet {
  creator: string;
  at: number;
  amount: Coin | undefined;
}

function createBaseEvtLotteryBegan(): EvtLotteryBegan {
  return { lotteryId: "", beganAt: 0, fee: undefined, minAmount: undefined };
}

export const EvtLotteryBegan = {
  encode(message: EvtLotteryBegan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lotteryId !== "") {
      writer.uint32(10).string(message.lotteryId);
    }
    if (message.beganAt !== 0) {
      writer.uint32(16).int64(message.beganAt);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(26).fork()).ldelim();
    }
    if (message.minAmount !== undefined) {
      Coin.encode(message.minAmount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvtLotteryBegan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvtLotteryBegan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lotteryId = reader.string();
          break;
        case 2:
          message.beganAt = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.minAmount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EvtLotteryBegan {
    return {
      lotteryId: isSet(object.lotteryId) ? String(object.lotteryId) : "",
      beganAt: isSet(object.beganAt) ? Number(object.beganAt) : 0,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      minAmount: isSet(object.minAmount) ? Coin.fromJSON(object.minAmount) : undefined,
    };
  },

  toJSON(message: EvtLotteryBegan): unknown {
    const obj: any = {};
    message.lotteryId !== undefined && (obj.lotteryId = message.lotteryId);
    message.beganAt !== undefined && (obj.beganAt = Math.round(message.beganAt));
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.minAmount !== undefined && (obj.minAmount = message.minAmount ? Coin.toJSON(message.minAmount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvtLotteryBegan>, I>>(object: I): EvtLotteryBegan {
    const message = createBaseEvtLotteryBegan();
    message.lotteryId = object.lotteryId ?? "";
    message.beganAt = object.beganAt ?? 0;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    message.minAmount = (object.minAmount !== undefined && object.minAmount !== null)
      ? Coin.fromPartial(object.minAmount)
      : undefined;
    return message;
  },
};

function createBaseEvtLotteryEnded(): EvtLotteryEnded {
  return { lotteryId: "", beganAt: 0, endedAt: 0, winner: "", betAmount: undefined, rewards: undefined };
}

export const EvtLotteryEnded = {
  encode(message: EvtLotteryEnded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lotteryId !== "") {
      writer.uint32(10).string(message.lotteryId);
    }
    if (message.beganAt !== 0) {
      writer.uint32(16).int64(message.beganAt);
    }
    if (message.endedAt !== 0) {
      writer.uint32(24).int64(message.endedAt);
    }
    if (message.winner !== "") {
      writer.uint32(34).string(message.winner);
    }
    if (message.betAmount !== undefined) {
      Coin.encode(message.betAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewards !== undefined) {
      Coin.encode(message.rewards, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvtLotteryEnded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvtLotteryEnded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lotteryId = reader.string();
          break;
        case 2:
          message.beganAt = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.endedAt = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.winner = reader.string();
          break;
        case 5:
          message.betAmount = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.rewards = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EvtLotteryEnded {
    return {
      lotteryId: isSet(object.lotteryId) ? String(object.lotteryId) : "",
      beganAt: isSet(object.beganAt) ? Number(object.beganAt) : 0,
      endedAt: isSet(object.endedAt) ? Number(object.endedAt) : 0,
      winner: isSet(object.winner) ? String(object.winner) : "",
      betAmount: isSet(object.betAmount) ? Coin.fromJSON(object.betAmount) : undefined,
      rewards: isSet(object.rewards) ? Coin.fromJSON(object.rewards) : undefined,
    };
  },

  toJSON(message: EvtLotteryEnded): unknown {
    const obj: any = {};
    message.lotteryId !== undefined && (obj.lotteryId = message.lotteryId);
    message.beganAt !== undefined && (obj.beganAt = Math.round(message.beganAt));
    message.endedAt !== undefined && (obj.endedAt = Math.round(message.endedAt));
    message.winner !== undefined && (obj.winner = message.winner);
    message.betAmount !== undefined && (obj.betAmount = message.betAmount ? Coin.toJSON(message.betAmount) : undefined);
    message.rewards !== undefined && (obj.rewards = message.rewards ? Coin.toJSON(message.rewards) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvtLotteryEnded>, I>>(object: I): EvtLotteryEnded {
    const message = createBaseEvtLotteryEnded();
    message.lotteryId = object.lotteryId ?? "";
    message.beganAt = object.beganAt ?? 0;
    message.endedAt = object.endedAt ?? 0;
    message.winner = object.winner ?? "";
    message.betAmount = (object.betAmount !== undefined && object.betAmount !== null)
      ? Coin.fromPartial(object.betAmount)
      : undefined;
    message.rewards = (object.rewards !== undefined && object.rewards !== null)
      ? Coin.fromPartial(object.rewards)
      : undefined;
    return message;
  },
};

function createBaseEvtCreateBet(): EvtCreateBet {
  return { creator: "", at: 0, amount: undefined };
}

export const EvtCreateBet = {
  encode(message: EvtCreateBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.at !== 0) {
      writer.uint32(16).int64(message.at);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvtCreateBet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvtCreateBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.at = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EvtCreateBet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      at: isSet(object.at) ? Number(object.at) : 0,
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: EvtCreateBet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.at !== undefined && (obj.at = Math.round(message.at));
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvtCreateBet>, I>>(object: I): EvtCreateBet {
    const message = createBaseEvtCreateBet();
    message.creator = object.creator ?? "";
    message.at = object.at ?? 0;
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
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
