import { Params, ParamsAmino, ParamsSDKType } from "./feemarket";
import * as _m0 from "protobufjs/minimal";
/** MsgUpdateParams defines a Msg for updating the x/feemarket module parameters. */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/feemarket parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.MsgUpdateParams";
    value: Uint8Array;
}
/** MsgUpdateParams defines a Msg for updating the x/feemarket module parameters. */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /**
     * params defines the x/feemarket parameters to update.
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/ethermint.feemarket.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/** MsgUpdateParams defines a Msg for updating the x/feemarket module parameters. */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/ethermint.feemarket.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/ethermint.feemarket.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
