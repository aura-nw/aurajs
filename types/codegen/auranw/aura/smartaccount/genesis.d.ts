import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
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
