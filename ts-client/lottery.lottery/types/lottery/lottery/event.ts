/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Lottery } from "./lottery";
import { SystemInfo } from "./system_info";

export const protobufPackage = "lottery.lottery";

export interface EvtSystemInfoUpdated {
  systemInfo: SystemInfo | undefined;
}

export interface EvtLotteryBegan {
  lottery: Lottery | undefined;
}

export interface EvtLotteryEnded {
  lottery: Lottery | undefined;
}

export interface EvtCreateBet {
  lotteryId: string;
  betIndex: number;
  creator: string;
  amount: Coin | undefined;
  at: number;
}

function createBaseEvtSystemInfoUpdated(): EvtSystemInfoUpdated {
  return { systemInfo: undefined };
}

export const EvtSystemInfoUpdated = {
  encode(message: EvtSystemInfoUpdated, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.systemInfo !== undefined) {
      SystemInfo.encode(message.systemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvtSystemInfoUpdated {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvtSystemInfoUpdated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.systemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EvtSystemInfoUpdated {
    return { systemInfo: isSet(object.systemInfo) ? SystemInfo.fromJSON(object.systemInfo) : undefined };
  },

  toJSON(message: EvtSystemInfoUpdated): unknown {
    const obj: any = {};
    message.systemInfo !== undefined
      && (obj.systemInfo = message.systemInfo ? SystemInfo.toJSON(message.systemInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvtSystemInfoUpdated>, I>>(object: I): EvtSystemInfoUpdated {
    const message = createBaseEvtSystemInfoUpdated();
    message.systemInfo = (object.systemInfo !== undefined && object.systemInfo !== null)
      ? SystemInfo.fromPartial(object.systemInfo)
      : undefined;
    return message;
  },
};

function createBaseEvtLotteryBegan(): EvtLotteryBegan {
  return { lottery: undefined };
}

export const EvtLotteryBegan = {
  encode(message: EvtLotteryBegan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lottery !== undefined) {
      Lottery.encode(message.lottery, writer.uint32(10).fork()).ldelim();
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
          message.lottery = Lottery.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EvtLotteryBegan {
    return { lottery: isSet(object.lottery) ? Lottery.fromJSON(object.lottery) : undefined };
  },

  toJSON(message: EvtLotteryBegan): unknown {
    const obj: any = {};
    message.lottery !== undefined && (obj.lottery = message.lottery ? Lottery.toJSON(message.lottery) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvtLotteryBegan>, I>>(object: I): EvtLotteryBegan {
    const message = createBaseEvtLotteryBegan();
    message.lottery = (object.lottery !== undefined && object.lottery !== null)
      ? Lottery.fromPartial(object.lottery)
      : undefined;
    return message;
  },
};

function createBaseEvtLotteryEnded(): EvtLotteryEnded {
  return { lottery: undefined };
}

export const EvtLotteryEnded = {
  encode(message: EvtLotteryEnded, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lottery !== undefined) {
      Lottery.encode(message.lottery, writer.uint32(10).fork()).ldelim();
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
          message.lottery = Lottery.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EvtLotteryEnded {
    return { lottery: isSet(object.lottery) ? Lottery.fromJSON(object.lottery) : undefined };
  },

  toJSON(message: EvtLotteryEnded): unknown {
    const obj: any = {};
    message.lottery !== undefined && (obj.lottery = message.lottery ? Lottery.toJSON(message.lottery) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvtLotteryEnded>, I>>(object: I): EvtLotteryEnded {
    const message = createBaseEvtLotteryEnded();
    message.lottery = (object.lottery !== undefined && object.lottery !== null)
      ? Lottery.fromPartial(object.lottery)
      : undefined;
    return message;
  },
};

function createBaseEvtCreateBet(): EvtCreateBet {
  return { lotteryId: "", betIndex: 0, creator: "", amount: undefined, at: 0 };
}

export const EvtCreateBet = {
  encode(message: EvtCreateBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lotteryId !== "") {
      writer.uint32(10).string(message.lotteryId);
    }
    if (message.betIndex !== 0) {
      writer.uint32(16).int64(message.betIndex);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.at !== 0) {
      writer.uint32(40).int64(message.at);
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
          message.lotteryId = reader.string();
          break;
        case 2:
          message.betIndex = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.at = longToNumber(reader.int64() as Long);
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
      lotteryId: isSet(object.lotteryId) ? String(object.lotteryId) : "",
      betIndex: isSet(object.betIndex) ? Number(object.betIndex) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      at: isSet(object.at) ? Number(object.at) : 0,
    };
  },

  toJSON(message: EvtCreateBet): unknown {
    const obj: any = {};
    message.lotteryId !== undefined && (obj.lotteryId = message.lotteryId);
    message.betIndex !== undefined && (obj.betIndex = Math.round(message.betIndex));
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.at !== undefined && (obj.at = Math.round(message.at));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EvtCreateBet>, I>>(object: I): EvtCreateBet {
    const message = createBaseEvtCreateBet();
    message.lotteryId = object.lotteryId ?? "";
    message.betIndex = object.betIndex ?? 0;
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.at = object.at ?? 0;
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
