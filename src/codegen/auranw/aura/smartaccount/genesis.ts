import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** GenesisState defines the smartaccount module's genesis state. */
export interface GenesisState {
  params: Params;
  /** this line is used by starport scaffolding # genesis/proto/state */
  smartAccountId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/auranw.aura.smartaccount.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the smartaccount module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  /** this line is used by starport scaffolding # genesis/proto/state */
  smart_account_id: string;
}
export interface GenesisStateAminoMsg {
  type: "/auranw.aura.smartaccount.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the smartaccount module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  smart_account_id: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    smartAccountId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/auranw.aura.smartaccount.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.smartAccountId !== BigInt(0)) {
      writer.uint32(16).uint64(message.smartAccountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.smartAccountId = reader.uint64();
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
      smartAccountId: isSet(object.smartAccountId) ? BigInt(object.smartAccountId.toString()) : BigInt(0)
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.smartAccountId !== undefined && (obj.smartAccountId = (message.smartAccountId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.smartAccountId = object.smartAccountId !== undefined && object.smartAccountId !== null ? BigInt(object.smartAccountId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      smartAccountId: BigInt(object.smart_account_id)
    };
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
      typeUrl: "/auranw.aura.smartaccount.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};