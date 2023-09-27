import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface BlockStoreState {
  base: bigint;
  height: bigint;
}
export interface BlockStoreStateProtoMsg {
  typeUrl: "/tendermint.store.BlockStoreState";
  value: Uint8Array;
}
export interface BlockStoreStateAmino {
  base: string;
  height: string;
}
export interface BlockStoreStateAminoMsg {
  type: "/tendermint.store.BlockStoreState";
  value: BlockStoreStateAmino;
}
export interface BlockStoreStateSDKType {
  base: bigint;
  height: bigint;
}
function createBaseBlockStoreState(): BlockStoreState {
  return {
    base: BigInt(0),
    height: BigInt(0)
  };
}
export const BlockStoreState = {
  typeUrl: "/tendermint.store.BlockStoreState",
  encode(message: BlockStoreState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.base !== BigInt(0)) {
      writer.uint32(8).int64(message.base);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockStoreState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockStoreState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.base = reader.int64();
          break;
        case 2:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockStoreState {
    return {
      base: isSet(object.base) ? BigInt(object.base.toString()) : BigInt(0),
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toJSON(message: BlockStoreState): unknown {
    const obj: any = {};
    message.base !== undefined && (obj.base = (message.base || BigInt(0)).toString());
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<BlockStoreState>): BlockStoreState {
    const message = createBaseBlockStoreState();
    message.base = object.base !== undefined && object.base !== null ? BigInt(object.base.toString()) : BigInt(0);
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BlockStoreStateAmino): BlockStoreState {
    return {
      base: BigInt(object.base),
      height: BigInt(object.height)
    };
  },
  toAmino(message: BlockStoreState): BlockStoreStateAmino {
    const obj: any = {};
    obj.base = message.base ? message.base.toString() : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockStoreStateAminoMsg): BlockStoreState {
    return BlockStoreState.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockStoreStateProtoMsg): BlockStoreState {
    return BlockStoreState.decode(message.value);
  },
  toProto(message: BlockStoreState): Uint8Array {
    return BlockStoreState.encode(message).finish();
  },
  toProtoMsg(message: BlockStoreState): BlockStoreStateProtoMsg {
    return {
      typeUrl: "/tendermint.store.BlockStoreState",
      value: BlockStoreState.encode(message).finish()
    };
  }
};