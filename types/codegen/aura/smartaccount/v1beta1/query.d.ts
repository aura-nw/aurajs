import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/aura.smartaccount.v1beta1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/aura.smartaccount.v1beta1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryGenerateAccountRequest {
    /** CodeID indicates which wasm binary code is to be used for creating account */
    codeId: bigint;
    /** an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /** InitMsg is the JSON-encoded instantiate message for creating account */
    initMsg: Uint8Array;
    /** PubKey of account */
    publicKey: Any;
}
export interface QueryGenerateAccountRequestProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.QueryGenerateAccountRequest";
    value: Uint8Array;
}
export interface QueryGenerateAccountRequestAmino {
    /** CodeID indicates which wasm binary code is to be used for creating account */
    code_id: string;
    /** an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /** InitMsg is the JSON-encoded instantiate message for creating account */
    init_msg: Uint8Array;
    /** PubKey of account */
    public_key?: AnyAmino;
}
export interface QueryGenerateAccountRequestAminoMsg {
    type: "/aura.smartaccount.v1beta1.QueryGenerateAccountRequest";
    value: QueryGenerateAccountRequestAmino;
}
export interface QueryGenerateAccountRequestSDKType {
    code_id: bigint;
    salt: Uint8Array;
    init_msg: Uint8Array;
    public_key: AnySDKType;
}
export interface QueryGenerateAccountResponse {
    address: string;
}
export interface QueryGenerateAccountResponseProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.QueryGenerateAccountResponse";
    value: Uint8Array;
}
export interface QueryGenerateAccountResponseAmino {
    address: string;
}
export interface QueryGenerateAccountResponseAminoMsg {
    type: "/aura.smartaccount.v1beta1.QueryGenerateAccountResponse";
    value: QueryGenerateAccountResponseAmino;
}
export interface QueryGenerateAccountResponseSDKType {
    address: string;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGenerateAccountRequest: {
    typeUrl: string;
    encode(message: QueryGenerateAccountRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGenerateAccountRequest;
    fromJSON(object: any): QueryGenerateAccountRequest;
    toJSON(message: QueryGenerateAccountRequest): unknown;
    fromPartial(object: Partial<QueryGenerateAccountRequest>): QueryGenerateAccountRequest;
    fromAmino(object: QueryGenerateAccountRequestAmino): QueryGenerateAccountRequest;
    toAmino(message: QueryGenerateAccountRequest): QueryGenerateAccountRequestAmino;
    fromAminoMsg(object: QueryGenerateAccountRequestAminoMsg): QueryGenerateAccountRequest;
    fromProtoMsg(message: QueryGenerateAccountRequestProtoMsg): QueryGenerateAccountRequest;
    toProto(message: QueryGenerateAccountRequest): Uint8Array;
    toProtoMsg(message: QueryGenerateAccountRequest): QueryGenerateAccountRequestProtoMsg;
};
export declare const QueryGenerateAccountResponse: {
    typeUrl: string;
    encode(message: QueryGenerateAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGenerateAccountResponse;
    fromJSON(object: any): QueryGenerateAccountResponse;
    toJSON(message: QueryGenerateAccountResponse): unknown;
    fromPartial(object: Partial<QueryGenerateAccountResponse>): QueryGenerateAccountResponse;
    fromAmino(object: QueryGenerateAccountResponseAmino): QueryGenerateAccountResponse;
    toAmino(message: QueryGenerateAccountResponse): QueryGenerateAccountResponseAmino;
    fromAminoMsg(object: QueryGenerateAccountResponseAminoMsg): QueryGenerateAccountResponse;
    fromProtoMsg(message: QueryGenerateAccountResponseProtoMsg): QueryGenerateAccountResponse;
    toProto(message: QueryGenerateAccountResponse): Uint8Array;
    toProtoMsg(message: QueryGenerateAccountResponse): QueryGenerateAccountResponseProtoMsg;
};
