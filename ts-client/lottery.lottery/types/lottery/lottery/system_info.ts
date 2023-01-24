/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "lottery.lottery";

export interface SystemInfo {
  nextId: number;
  fee: Coin | undefined;
  minBet: Coin | undefined;
  maxBet: Coin | undefined;
  betCount: number;
}

function createBaseSystemInfo(): SystemInfo {
  return { nextId: 0, fee: undefined, minBet: undefined, maxBet: undefined, betCount: 0 };
}

export const SystemInfo = {
  encode(message: SystemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextId !== 0) {
      writer.uint32(8).uint64(message.nextId);
    }
    if (message.fee !== undefined) {
      Coin.encode(message.fee, writer.uint32(18).fork()).ldelim();
    }
    if (message.minBet !== undefined) {
      Coin.encode(message.minBet, writer.uint32(26).fork()).ldelim();
    }
    if (message.maxBet !== undefined) {
      Coin.encode(message.maxBet, writer.uint32(34).fork()).ldelim();
    }
    if (message.betCount !== 0) {
      writer.uint32(40).int64(message.betCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.fee = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.minBet = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.maxBet = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.betCount = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SystemInfo {
    return {
      nextId: isSet(object.nextId) ? Number(object.nextId) : 0,
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      minBet: isSet(object.minBet) ? Coin.fromJSON(object.minBet) : undefined,
      maxBet: isSet(object.maxBet) ? Coin.fromJSON(object.maxBet) : undefined,
      betCount: isSet(object.betCount) ? Number(object.betCount) : 0,
    };
  },

  toJSON(message: SystemInfo): unknown {
    const obj: any = {};
    message.nextId !== undefined && (obj.nextId = Math.round(message.nextId));
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.minBet !== undefined && (obj.minBet = message.minBet ? Coin.toJSON(message.minBet) : undefined);
    message.maxBet !== undefined && (obj.maxBet = message.maxBet ? Coin.toJSON(message.maxBet) : undefined);
    message.betCount !== undefined && (obj.betCount = Math.round(message.betCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SystemInfo>, I>>(object: I): SystemInfo {
    const message = createBaseSystemInfo();
    message.nextId = object.nextId ?? 0;
    message.fee = (object.fee !== undefined && object.fee !== null) ? Coin.fromPartial(object.fee) : undefined;
    message.minBet = (object.minBet !== undefined && object.minBet !== null)
      ? Coin.fromPartial(object.minBet)
      : undefined;
    message.maxBet = (object.maxBet !== undefined && object.maxBet !== null)
      ? Coin.fromPartial(object.maxBet)
      : undefined;
    message.betCount = object.betCount ?? 0;
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
