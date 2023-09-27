import { Params, ParamsAmino, ParamsSDKType } from "./aura";
import { BinaryReader, BinaryWriter } from "../../binary";
/** GenesisState defines the aura module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to aura. */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/aura.aura.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the aura module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of related to aura. */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/aura.aura.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the aura module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
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
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
