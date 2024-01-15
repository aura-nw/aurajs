import { ResponseCheckTx, ResponseCheckTxAmino, ResponseCheckTxSDKType, ResponseDeliverTx, ResponseDeliverTxAmino, ResponseDeliverTxSDKType } from "../../abci/types";
import * as _m0 from "protobufjs/minimal";
export interface RequestPing {
}
export interface RequestPingProtoMsg {
    typeUrl: "/tendermint.rpc.grpc.RequestPing";
    value: Uint8Array;
}
export interface RequestPingAmino {
}
export interface RequestPingAminoMsg {
    type: "/tendermint.rpc.grpc.RequestPing";
    value: RequestPingAmino;
}
export interface RequestPingSDKType {
}
export interface RequestBroadcastTx {
    tx: Uint8Array;
}
export interface RequestBroadcastTxProtoMsg {
    typeUrl: "/tendermint.rpc.grpc.RequestBroadcastTx";
    value: Uint8Array;
}
export interface RequestBroadcastTxAmino {
    tx?: string;
}
export interface RequestBroadcastTxAminoMsg {
    type: "/tendermint.rpc.grpc.RequestBroadcastTx";
    value: RequestBroadcastTxAmino;
}
export interface RequestBroadcastTxSDKType {
    tx: Uint8Array;
}
export interface ResponsePing {
}
export interface ResponsePingProtoMsg {
    typeUrl: "/tendermint.rpc.grpc.ResponsePing";
    value: Uint8Array;
}
export interface ResponsePingAmino {
}
export interface ResponsePingAminoMsg {
    type: "/tendermint.rpc.grpc.ResponsePing";
    value: ResponsePingAmino;
}
export interface ResponsePingSDKType {
}
export interface ResponseBroadcastTx {
    checkTx?: ResponseCheckTx;
    deliverTx?: ResponseDeliverTx;
}
export interface ResponseBroadcastTxProtoMsg {
    typeUrl: "/tendermint.rpc.grpc.ResponseBroadcastTx";
    value: Uint8Array;
}
export interface ResponseBroadcastTxAmino {
    check_tx?: ResponseCheckTxAmino;
    deliver_tx?: ResponseDeliverTxAmino;
}
export interface ResponseBroadcastTxAminoMsg {
    type: "/tendermint.rpc.grpc.ResponseBroadcastTx";
    value: ResponseBroadcastTxAmino;
}
export interface ResponseBroadcastTxSDKType {
    check_tx?: ResponseCheckTxSDKType;
    deliver_tx?: ResponseDeliverTxSDKType;
}
export declare const RequestPing: {
    typeUrl: string;
    encode(_: RequestPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing;
    fromJSON(_: any): RequestPing;
    toJSON(_: RequestPing): unknown;
    fromPartial(_: Partial<RequestPing>): RequestPing;
    fromAmino(_: RequestPingAmino): RequestPing;
    toAmino(_: RequestPing): RequestPingAmino;
    fromAminoMsg(object: RequestPingAminoMsg): RequestPing;
    fromProtoMsg(message: RequestPingProtoMsg): RequestPing;
    toProto(message: RequestPing): Uint8Array;
    toProtoMsg(message: RequestPing): RequestPingProtoMsg;
};
export declare const RequestBroadcastTx: {
    typeUrl: string;
    encode(message: RequestBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RequestBroadcastTx;
    fromJSON(object: any): RequestBroadcastTx;
    toJSON(message: RequestBroadcastTx): unknown;
    fromPartial(object: Partial<RequestBroadcastTx>): RequestBroadcastTx;
    fromAmino(object: RequestBroadcastTxAmino): RequestBroadcastTx;
    toAmino(message: RequestBroadcastTx): RequestBroadcastTxAmino;
    fromAminoMsg(object: RequestBroadcastTxAminoMsg): RequestBroadcastTx;
    fromProtoMsg(message: RequestBroadcastTxProtoMsg): RequestBroadcastTx;
    toProto(message: RequestBroadcastTx): Uint8Array;
    toProtoMsg(message: RequestBroadcastTx): RequestBroadcastTxProtoMsg;
};
export declare const ResponsePing: {
    typeUrl: string;
    encode(_: ResponsePing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing;
    fromJSON(_: any): ResponsePing;
    toJSON(_: ResponsePing): unknown;
    fromPartial(_: Partial<ResponsePing>): ResponsePing;
    fromAmino(_: ResponsePingAmino): ResponsePing;
    toAmino(_: ResponsePing): ResponsePingAmino;
    fromAminoMsg(object: ResponsePingAminoMsg): ResponsePing;
    fromProtoMsg(message: ResponsePingProtoMsg): ResponsePing;
    toProto(message: ResponsePing): Uint8Array;
    toProtoMsg(message: ResponsePing): ResponsePingProtoMsg;
};
export declare const ResponseBroadcastTx: {
    typeUrl: string;
    encode(message: ResponseBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseBroadcastTx;
    fromJSON(object: any): ResponseBroadcastTx;
    toJSON(message: ResponseBroadcastTx): unknown;
    fromPartial(object: Partial<ResponseBroadcastTx>): ResponseBroadcastTx;
    fromAmino(object: ResponseBroadcastTxAmino): ResponseBroadcastTx;
    toAmino(message: ResponseBroadcastTx): ResponseBroadcastTxAmino;
    fromAminoMsg(object: ResponseBroadcastTxAminoMsg): ResponseBroadcastTx;
    fromProtoMsg(message: ResponseBroadcastTxProtoMsg): ResponseBroadcastTx;
    toProto(message: ResponseBroadcastTx): Uint8Array;
    toProtoMsg(message: ResponseBroadcastTx): ResponseBroadcastTxProtoMsg;
};
