import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CodeID {
    /** whitelist code id */
    codeId: Long;
    /** status of code id */
    status: boolean;
}
export interface CodeIDProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.CodeID";
    value: Uint8Array;
}
export interface CodeIDAmino {
    /** whitelist code id */
    code_id: string;
    /** status of code id */
    status: boolean;
}
export interface CodeIDAminoMsg {
    type: "/aura.smartaccount.v1beta1.CodeID";
    value: CodeIDAmino;
}
export interface CodeIDSDKType {
    code_id: Long;
    status: boolean;
}
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * code_id whitelist indicates which contract can be initialized as smart account
     * using gov proposal for updates
     */
    whitelistCodeId: CodeID[];
    /** list of diable messages for smartaccount */
    disableMsgsList: string[];
    /** limit how much gas can be consumed by the `pre_execute` method */
    maxGasExecute: Long;
}
export interface ParamsProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * code_id whitelist indicates which contract can be initialized as smart account
     * using gov proposal for updates
     */
    whitelist_code_id: CodeIDAmino[];
    /** list of diable messages for smartaccount */
    disable_msgs_list: string[];
    /** limit how much gas can be consumed by the `pre_execute` method */
    max_gas_execute: string;
}
export interface ParamsAminoMsg {
    type: "/aura.smartaccount.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    whitelist_code_id: CodeIDSDKType[];
    disable_msgs_list: string[];
    max_gas_execute: Long;
}
export declare const CodeID: {
    typeUrl: string;
    encode(message: CodeID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CodeID;
    fromJSON(object: any): CodeID;
    toJSON(message: CodeID): unknown;
    fromPartial(object: Partial<CodeID>): CodeID;
    fromAmino(object: CodeIDAmino): CodeID;
    toAmino(message: CodeID): CodeIDAmino;
    fromAminoMsg(object: CodeIDAminoMsg): CodeID;
    fromProtoMsg(message: CodeIDProtoMsg): CodeID;
    toProto(message: CodeID): Uint8Array;
    toProtoMsg(message: CodeID): CodeIDProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
