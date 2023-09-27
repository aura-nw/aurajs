import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** Params holds parameters for the swaprouter module */
export interface Params {
    poolCreationFee: Coin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the swaprouter module */
export interface ParamsAmino {
    pool_creation_fee: CoinAmino[];
}
export interface ParamsAminoMsg {
    type: "osmosis/swaprouter/params";
    value: ParamsAmino;
}
/** Params holds parameters for the swaprouter module */
export interface ParamsSDKType {
    pool_creation_fee: CoinSDKType[];
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisState {
    /** the next_pool_id */
    nextPoolId: bigint;
    /** params is the container of swaprouter parameters. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisStateAmino {
    /** the next_pool_id */
    next_pool_id: string;
    /** params is the container of swaprouter parameters. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/swaprouter/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the swaprouter module's genesis state. */
export interface GenesisStateSDKType {
    next_pool_id: bigint;
    params: ParamsSDKType;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
