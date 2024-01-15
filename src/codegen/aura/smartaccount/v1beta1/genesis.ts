import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the smartaccount module's genesis state. */
export interface GenesisState {
  params: Params;
  /** this line is used by starport scaffolding # genesis/proto/state */
  smartAccountId: Long;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/aura.smartaccount.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the smartaccount module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /** this line is used by starport scaffolding # genesis/proto/state */
  smart_account_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "/aura.smartaccount.v1beta1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the smartaccount module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  smart_account_id: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    smartAccountId: Long.UZERO
  };
}
export const GenesisState = {
  typeUrl: "/aura.smartaccount.v1beta1.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.smartAccountId.isZero()) {
      writer.uint32(16).uint64(message.smartAccountId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.smartAccountId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      smartAccountId: isSet(object.smartAccountId) ? Long.fromValue(object.smartAccountId) : Long.UZERO
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.smartAccountId !== undefined && (obj.smartAccountId = (message.smartAccountId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.smartAccountId = object.smartAccountId !== undefined && object.smartAccountId !== null ? Long.fromValue(object.smartAccountId) : Long.UZERO;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.smart_account_id !== undefined && object.smart_account_id !== null) {
      message.smartAccountId = Long.fromString(object.smart_account_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.smart_account_id = message.smartAccountId ? message.smartAccountId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};