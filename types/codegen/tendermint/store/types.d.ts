import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface BlockStoreState {
    base: Long;
    height: Long;
}
export interface BlockStoreStateProtoMsg {
    typeUrl: "/tendermint.store.BlockStoreState";
    value: Uint8Array;
}
export interface BlockStoreStateAmino {
    base?: string;
    height?: string;
}
export interface BlockStoreStateAminoMsg {
    type: "/tendermint.store.BlockStoreState";
    value: BlockStoreStateAmino;
}
export interface BlockStoreStateSDKType {
    base: Long;
    height: Long;
}
export declare const BlockStoreState: {
    typeUrl: string;
    encode(message: BlockStoreState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlockStoreState;
    fromJSON(object: any): BlockStoreState;
    toJSON(message: BlockStoreState): unknown;
    fromPartial(object: Partial<BlockStoreState>): BlockStoreState;
    fromAmino(object: BlockStoreStateAmino): BlockStoreState;
    toAmino(message: BlockStoreState): BlockStoreStateAmino;
    fromAminoMsg(object: BlockStoreStateAminoMsg): BlockStoreState;
    fromProtoMsg(message: BlockStoreStateProtoMsg): BlockStoreState;
    toProto(message: BlockStoreState): Uint8Array;
    toProtoMsg(message: BlockStoreState): BlockStoreStateProtoMsg;
};
