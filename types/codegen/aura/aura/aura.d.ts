import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the aura module. */
export interface Params {
    /** max_supply defines the max supply of aura coin. */
    maxSupply: string;
    excludeCirculatingAddr: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/aura.aura.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the aura module. */
export interface ParamsAmino {
    /** max_supply defines the max supply of aura coin. */
    max_supply?: string;
    exclude_circulating_addr?: string[];
}
export interface ParamsAminoMsg {
    type: "/aura.aura.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the aura module. */
export interface ParamsSDKType {
    max_supply: string;
    exclude_circulating_addr: string[];
}
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
