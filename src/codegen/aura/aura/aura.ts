import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
/** Params defines the parameters for the aura module. */
export interface Params {
  /** max_supply defines the max supply of aura coin. */
  maxSupply: string;
  excludeCirculatingAddr: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/aura.aura.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the aura module. */
export interface ParamsAmino {
  /** max_supply defines the max supply of aura coin. */
  max_supply?: string;
  exclude_circulating_addr?: string[];
}
export interface ParamsAminoMsg {
  type: "/aura.aura.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the aura module. */
export interface ParamsSDKType {
  max_supply: string;
  exclude_circulating_addr: string[];
}
function createBaseParams(): Params {
  return {
    maxSupply: "",
    excludeCirculatingAddr: []
  };
}
export const Params = {
  typeUrl: "/aura.aura.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxSupply !== "") {
      writer.uint32(10).string(message.maxSupply);
    }
    for (const v of message.excludeCirculatingAddr) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxSupply = reader.string();
          break;
        case 2:
          message.excludeCirculatingAddr.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      maxSupply: isSet(object.maxSupply) ? String(object.maxSupply) : "",
      excludeCirculatingAddr: Array.isArray(object?.excludeCirculatingAddr) ? object.excludeCirculatingAddr.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxSupply !== undefined && (obj.maxSupply = message.maxSupply);
    if (message.excludeCirculatingAddr) {
      obj.excludeCirculatingAddr = message.excludeCirculatingAddr.map(e => e);
    } else {
      obj.excludeCirculatingAddr = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxSupply = object.maxSupply ?? "";
    message.excludeCirculatingAddr = object.excludeCirculatingAddr?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_supply !== undefined && object.max_supply !== null) {
      message.maxSupply = object.max_supply;
    }
    message.excludeCirculatingAddr = object.exclude_circulating_addr?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_supply = message.maxSupply;
    if (message.excludeCirculatingAddr) {
      obj.exclude_circulating_addr = message.excludeCirculatingAddr.map(e => e);
    } else {
      obj.exclude_circulating_addr = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/aura.aura.Params",
      value: Params.encode(message).finish()
    };
  }
};