import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** Params defines the parameters for the aura module. */

export interface Params {
  /** max_supply defines the max supply of aura coin. */
  maxSupply: string;
  excludeCirculatingAddr: string[];
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

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.maxSupply = object.maxSupply ?? "";
    message.excludeCirculatingAddr = object.excludeCirculatingAddr?.map(e => e) || [];
    return message;
  }

};