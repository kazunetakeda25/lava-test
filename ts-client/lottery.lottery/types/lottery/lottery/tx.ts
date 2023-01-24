/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";

export const protobufPackage = "lottery.lottery";

export interface MsgCreateBet {
  creator: string;
  amount: Coin | undefined;
}

export interface MsgCreateBetResponse {
  lotteryId: string;
  betIndex: number;
}

export interface MsgUpdateSystemInfo {
  creator: string;
  fee: Coin | undefined;
  minBet: Coin | undefined;
  maxBet: Coin | undefined;
  betCount: number;
}

export interface MsgUpdateSystemInfoResponse {
  success: boolean;
}

function createBaseMsgCreateBet(): MsgCreateBet {
  return { creator: "", amount: undefined };
}

export const MsgCreateBet = {
  encode(message: MsgCreateBet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBet {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: MsgCreateBet): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBet>, I>>(object: I): MsgCreateBet {
    const message = createBaseMsgCreateBet();
    message.creator = object.creator ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateBetResponse(): MsgCreateBetResponse {
  return { lotteryId: "", betIndex: 0 };
}

export const MsgCreateBetResponse = {
  encode(message: MsgCreateBetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lotteryId !== "") {
      writer.uint32(10).string(message.lotteryId);
    }
    if (message.betIndex !== 0) {
      writer.uint32(16).int64(message.betIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lotteryId = reader.string();
          break;
        case 2:
          message.betIndex = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBetResponse {
    return {
      lotteryId: isSet(object.lotteryId) ? String(object.lotteryId) : "",
      betIndex: isSet(object.betIndex) ? Number(object.betIndex) : 0,
    };
  },

  toJSON(message: MsgCreateBetResponse): unknown {
    const obj: any = {};
    message.lotteryId !== undefined && (obj.lotteryId = message.lotteryId);
    message.betIndex !== undefined && (obj.betIndex = Math.round(message.betIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBetResponse>, I>>(object: I): MsgCreateBetResponse {
    const message = createBaseMsgCreateBetResponse();
    message.lotteryId = object.lotteryId ?? "";
    message.betIndex = object.betIndex ?? 0;
    return message;
  },
};

function createBaseMsgUpdateSystemInfo(): MsgUpdateSystemInfo {
  return { creator: "", fee: undefined, minBet: undefined, maxBet: undefined, betCount: 0 };
}

export const MsgUpdateSystemInfo = {
  encode(message: MsgUpdateSystemInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSystemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSystemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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

  fromJSON(object: any): MsgUpdateSystemInfo {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fee: isSet(object.fee) ? Coin.fromJSON(object.fee) : undefined,
      minBet: isSet(object.minBet) ? Coin.fromJSON(object.minBet) : undefined,
      maxBet: isSet(object.maxBet) ? Coin.fromJSON(object.maxBet) : undefined,
      betCount: isSet(object.betCount) ? Number(object.betCount) : 0,
    };
  },

  toJSON(message: MsgUpdateSystemInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
    message.minBet !== undefined && (obj.minBet = message.minBet ? Coin.toJSON(message.minBet) : undefined);
    message.maxBet !== undefined && (obj.maxBet = message.maxBet ? Coin.toJSON(message.maxBet) : undefined);
    message.betCount !== undefined && (obj.betCount = Math.round(message.betCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSystemInfo>, I>>(object: I): MsgUpdateSystemInfo {
    const message = createBaseMsgUpdateSystemInfo();
    message.creator = object.creator ?? "";
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

function createBaseMsgUpdateSystemInfoResponse(): MsgUpdateSystemInfoResponse {
  return { success: false };
}

export const MsgUpdateSystemInfoResponse = {
  encode(message: MsgUpdateSystemInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSystemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSystemInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSystemInfoResponse {
    return { success: isSet(object.success) ? Boolean(object.success) : false };
  },

  toJSON(message: MsgUpdateSystemInfoResponse): unknown {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSystemInfoResponse>, I>>(object: I): MsgUpdateSystemInfoResponse {
    const message = createBaseMsgUpdateSystemInfoResponse();
    message.success = object.success ?? false;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateBet(request: MsgCreateBet): Promise<MsgCreateBetResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateSystemInfo(request: MsgUpdateSystemInfo): Promise<MsgUpdateSystemInfoResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateBet = this.CreateBet.bind(this);
    this.UpdateSystemInfo = this.UpdateSystemInfo.bind(this);
  }
  CreateBet(request: MsgCreateBet): Promise<MsgCreateBetResponse> {
    const data = MsgCreateBet.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "CreateBet", data);
    return promise.then((data) => MsgCreateBetResponse.decode(new _m0.Reader(data)));
  }

  UpdateSystemInfo(request: MsgUpdateSystemInfo): Promise<MsgUpdateSystemInfoResponse> {
    const data = MsgUpdateSystemInfo.encode(request).finish();
    const promise = this.rpc.request("lottery.lottery.Msg", "UpdateSystemInfo", data);
    return promise.then((data) => MsgUpdateSystemInfoResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
