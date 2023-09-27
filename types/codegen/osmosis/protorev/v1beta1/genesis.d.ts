import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisState {
    /** Module Parameters */
    params: Params;
    /** Hot routes that are configured on genesis */
    tokenPairs: TokenPairArbRoutes[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateAmino {
    /** Module Parameters */
    params?: ParamsAmino;
    /** Hot routes that are configured on genesis */
    token_pairs: TokenPairArbRoutesAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/protorev/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the protorev module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    token_pairs: TokenPairArbRoutesSDKType[];
}
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
