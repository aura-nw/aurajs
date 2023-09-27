import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Long } from "../../../helpers";
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
    smart_account_id: string;
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
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
