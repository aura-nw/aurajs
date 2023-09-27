import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
export interface ArithmeticTwapRequest {
    poolId: bigint;
    baseAsset: string;
    quoteAsset: string;
    startTime: Date;
    endTime?: Date;
}
export interface ArithmeticTwapRequestProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest";
    value: Uint8Array;
}
export interface ArithmeticTwapRequestAmino {
    pool_id: string;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
    end_time?: Date;
}
export interface ArithmeticTwapRequestAminoMsg {
    type: "osmosis/twap/arithmetic-twap-request";
    value: ArithmeticTwapRequestAmino;
}
export interface ArithmeticTwapRequestSDKType {
    pool_id: bigint;
    base_asset: string;
    quote_asset: string;
    start_time: Date;
    end_time?: Date;
}
export interface ArithmeticTwapResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapResponseProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse";
    value: Uint8Array;
}
export interface ArithmeticTwapResponseAmino {
    arithmetic_twap: string;
}
export interface ArithmeticTwapResponseAminoMsg {
    type: "osmosis/twap/arithmetic-twap-response";
    value: ArithmeticTwapResponseAmino;
}
export interface ArithmeticTwapResponseSDKType {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
    poolId: bigint;
    baseAsset: string;
    quoteAsset: string;
    startTime: Date;
}
export interface ArithmeticTwapToNowRequestProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
    value: Uint8Array;
}
export interface ArithmeticTwapToNowRequestAmino {
    pool_id: string;
    base_asset: string;
    quote_asset: string;
    start_time?: Date;
}
export interface ArithmeticTwapToNowRequestAminoMsg {
    type: "osmosis/twap/arithmetic-twap-to-now-request";
    value: ArithmeticTwapToNowRequestAmino;
}
export interface ArithmeticTwapToNowRequestSDKType {
    pool_id: bigint;
    base_asset: string;
    quote_asset: string;
    start_time: Date;
}
export interface ArithmeticTwapToNowResponse {
    arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
    value: Uint8Array;
}
export interface ArithmeticTwapToNowResponseAmino {
    arithmetic_twap: string;
}
export interface ArithmeticTwapToNowResponseAminoMsg {
    type: "osmosis/twap/arithmetic-twap-to-now-response";
    value: ArithmeticTwapToNowResponseAmino;
}
export interface ArithmeticTwapToNowResponseSDKType {
    arithmetic_twap: string;
}
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ParamsRequest";
    value: Uint8Array;
}
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "osmosis/twap/params-request";
    value: ParamsRequestAmino;
}
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "osmosis/twap/params-response";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const ArithmeticTwapRequest: {
    typeUrl: string;
    encode(message: ArithmeticTwapRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapRequest;
    fromJSON(object: any): ArithmeticTwapRequest;
    toJSON(message: ArithmeticTwapRequest): unknown;
    fromPartial(object: Partial<ArithmeticTwapRequest>): ArithmeticTwapRequest;
    fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest;
    toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestAmino;
    fromAminoMsg(object: ArithmeticTwapRequestAminoMsg): ArithmeticTwapRequest;
    toAminoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestAminoMsg;
    fromProtoMsg(message: ArithmeticTwapRequestProtoMsg): ArithmeticTwapRequest;
    toProto(message: ArithmeticTwapRequest): Uint8Array;
    toProtoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestProtoMsg;
};
export declare const ArithmeticTwapResponse: {
    typeUrl: string;
    encode(message: ArithmeticTwapResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapResponse;
    fromJSON(object: any): ArithmeticTwapResponse;
    toJSON(message: ArithmeticTwapResponse): unknown;
    fromPartial(object: Partial<ArithmeticTwapResponse>): ArithmeticTwapResponse;
    fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse;
    toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseAmino;
    fromAminoMsg(object: ArithmeticTwapResponseAminoMsg): ArithmeticTwapResponse;
    toAminoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseAminoMsg;
    fromProtoMsg(message: ArithmeticTwapResponseProtoMsg): ArithmeticTwapResponse;
    toProto(message: ArithmeticTwapResponse): Uint8Array;
    toProtoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseProtoMsg;
};
export declare const ArithmeticTwapToNowRequest: {
    typeUrl: string;
    encode(message: ArithmeticTwapToNowRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapToNowRequest;
    fromJSON(object: any): ArithmeticTwapToNowRequest;
    toJSON(message: ArithmeticTwapToNowRequest): unknown;
    fromPartial(object: Partial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest;
    fromAmino(object: ArithmeticTwapToNowRequestAmino): ArithmeticTwapToNowRequest;
    toAmino(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAmino;
    fromAminoMsg(object: ArithmeticTwapToNowRequestAminoMsg): ArithmeticTwapToNowRequest;
    toAminoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAminoMsg;
    fromProtoMsg(message: ArithmeticTwapToNowRequestProtoMsg): ArithmeticTwapToNowRequest;
    toProto(message: ArithmeticTwapToNowRequest): Uint8Array;
    toProtoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestProtoMsg;
};
export declare const ArithmeticTwapToNowResponse: {
    typeUrl: string;
    encode(message: ArithmeticTwapToNowResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ArithmeticTwapToNowResponse;
    fromJSON(object: any): ArithmeticTwapToNowResponse;
    toJSON(message: ArithmeticTwapToNowResponse): unknown;
    fromPartial(object: Partial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse;
    fromAmino(object: ArithmeticTwapToNowResponseAmino): ArithmeticTwapToNowResponse;
    toAmino(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAmino;
    fromAminoMsg(object: ArithmeticTwapToNowResponseAminoMsg): ArithmeticTwapToNowResponse;
    toAminoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAminoMsg;
    fromProtoMsg(message: ArithmeticTwapToNowResponseProtoMsg): ArithmeticTwapToNowResponse;
    toProto(message: ArithmeticTwapToNowResponse): Uint8Array;
    toProtoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseProtoMsg;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
