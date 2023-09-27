import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** =============================== Params */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** =============================== Params */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "osmosis/swaprouter/params-request";
    value: ParamsRequestAmino;
}
/** =============================== Params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "osmosis/swaprouter/params-response";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequest {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    poolId: bigint;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
export interface EstimateSwapExactAmountInRequestProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestAmino {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    pool_id: string;
    token_in: string;
    routes: SwapAmountInRouteAmino[];
}
export interface EstimateSwapExactAmountInRequestAminoMsg {
    type: "osmosis/swaprouter/estimate-swap-exact-amount-in-request";
    value: EstimateSwapExactAmountInRequestAmino;
}
/** =============================== EstimateSwapExactAmountIn */
export interface EstimateSwapExactAmountInRequestSDKType {
    sender: string;
    pool_id: bigint;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
export interface EstimateSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface EstimateSwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface EstimateSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface EstimateSwapExactAmountInResponseAminoMsg {
    type: "osmosis/swaprouter/estimate-swap-exact-amount-in-response";
    value: EstimateSwapExactAmountInResponseAmino;
}
export interface EstimateSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequest {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    poolId: bigint;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
export interface EstimateSwapExactAmountOutRequestProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestAmino {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    pool_id: string;
    routes: SwapAmountOutRouteAmino[];
    token_out: string;
}
export interface EstimateSwapExactAmountOutRequestAminoMsg {
    type: "osmosis/swaprouter/estimate-swap-exact-amount-out-request";
    value: EstimateSwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
export interface EstimateSwapExactAmountOutRequestSDKType {
    sender: string;
    pool_id: bigint;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
export interface EstimateSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface EstimateSwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.EstimateSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface EstimateSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface EstimateSwapExactAmountOutResponseAminoMsg {
    type: "osmosis/swaprouter/estimate-swap-exact-amount-out-response";
    value: EstimateSwapExactAmountOutResponseAmino;
}
export interface EstimateSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
/** =============================== NumPools */
export interface NumPoolsRequest {
}
export interface NumPoolsRequestProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsRequest";
    value: Uint8Array;
}
/** =============================== NumPools */
export interface NumPoolsRequestAmino {
}
export interface NumPoolsRequestAminoMsg {
    type: "osmosis/swaprouter/num-pools-request";
    value: NumPoolsRequestAmino;
}
/** =============================== NumPools */
export interface NumPoolsRequestSDKType {
}
export interface NumPoolsResponse {
    numPools: bigint;
}
export interface NumPoolsResponseProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.NumPoolsResponse";
    value: Uint8Array;
}
export interface NumPoolsResponseAmino {
    num_pools: string;
}
export interface NumPoolsResponseAminoMsg {
    type: "osmosis/swaprouter/num-pools-response";
    value: NumPoolsResponseAmino;
}
export interface NumPoolsResponseSDKType {
    num_pools: bigint;
}
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
export declare const EstimateSwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInRequest;
    fromJSON(object: any): EstimateSwapExactAmountInRequest;
    toJSON(message: EstimateSwapExactAmountInRequest): unknown;
    fromPartial(object: Partial<EstimateSwapExactAmountInRequest>): EstimateSwapExactAmountInRequest;
    fromAmino(object: EstimateSwapExactAmountInRequestAmino): EstimateSwapExactAmountInRequest;
    toAmino(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAmino;
    fromAminoMsg(object: EstimateSwapExactAmountInRequestAminoMsg): EstimateSwapExactAmountInRequest;
    toAminoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountInRequestProtoMsg): EstimateSwapExactAmountInRequest;
    toProto(message: EstimateSwapExactAmountInRequest): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountInRequest): EstimateSwapExactAmountInRequestProtoMsg;
};
export declare const EstimateSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountInResponse;
    fromJSON(object: any): EstimateSwapExactAmountInResponse;
    toJSON(message: EstimateSwapExactAmountInResponse): unknown;
    fromPartial(object: Partial<EstimateSwapExactAmountInResponse>): EstimateSwapExactAmountInResponse;
    fromAmino(object: EstimateSwapExactAmountInResponseAmino): EstimateSwapExactAmountInResponse;
    toAmino(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAmino;
    fromAminoMsg(object: EstimateSwapExactAmountInResponseAminoMsg): EstimateSwapExactAmountInResponse;
    toAminoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountInResponseProtoMsg): EstimateSwapExactAmountInResponse;
    toProto(message: EstimateSwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountInResponse): EstimateSwapExactAmountInResponseProtoMsg;
};
export declare const EstimateSwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutRequest;
    fromJSON(object: any): EstimateSwapExactAmountOutRequest;
    toJSON(message: EstimateSwapExactAmountOutRequest): unknown;
    fromPartial(object: Partial<EstimateSwapExactAmountOutRequest>): EstimateSwapExactAmountOutRequest;
    fromAmino(object: EstimateSwapExactAmountOutRequestAmino): EstimateSwapExactAmountOutRequest;
    toAmino(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAmino;
    fromAminoMsg(object: EstimateSwapExactAmountOutRequestAminoMsg): EstimateSwapExactAmountOutRequest;
    toAminoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountOutRequestProtoMsg): EstimateSwapExactAmountOutRequest;
    toProto(message: EstimateSwapExactAmountOutRequest): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountOutRequest): EstimateSwapExactAmountOutRequestProtoMsg;
};
export declare const EstimateSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: EstimateSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EstimateSwapExactAmountOutResponse;
    fromJSON(object: any): EstimateSwapExactAmountOutResponse;
    toJSON(message: EstimateSwapExactAmountOutResponse): unknown;
    fromPartial(object: Partial<EstimateSwapExactAmountOutResponse>): EstimateSwapExactAmountOutResponse;
    fromAmino(object: EstimateSwapExactAmountOutResponseAmino): EstimateSwapExactAmountOutResponse;
    toAmino(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAmino;
    fromAminoMsg(object: EstimateSwapExactAmountOutResponseAminoMsg): EstimateSwapExactAmountOutResponse;
    toAminoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: EstimateSwapExactAmountOutResponseProtoMsg): EstimateSwapExactAmountOutResponse;
    toProto(message: EstimateSwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: EstimateSwapExactAmountOutResponse): EstimateSwapExactAmountOutResponseProtoMsg;
};
export declare const NumPoolsRequest: {
    typeUrl: string;
    encode(_: NumPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsRequest;
    fromJSON(_: any): NumPoolsRequest;
    toJSON(_: NumPoolsRequest): unknown;
    fromPartial(_: Partial<NumPoolsRequest>): NumPoolsRequest;
    fromAmino(_: NumPoolsRequestAmino): NumPoolsRequest;
    toAmino(_: NumPoolsRequest): NumPoolsRequestAmino;
    fromAminoMsg(object: NumPoolsRequestAminoMsg): NumPoolsRequest;
    toAminoMsg(message: NumPoolsRequest): NumPoolsRequestAminoMsg;
    fromProtoMsg(message: NumPoolsRequestProtoMsg): NumPoolsRequest;
    toProto(message: NumPoolsRequest): Uint8Array;
    toProtoMsg(message: NumPoolsRequest): NumPoolsRequestProtoMsg;
};
export declare const NumPoolsResponse: {
    typeUrl: string;
    encode(message: NumPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NumPoolsResponse;
    fromJSON(object: any): NumPoolsResponse;
    toJSON(message: NumPoolsResponse): unknown;
    fromPartial(object: Partial<NumPoolsResponse>): NumPoolsResponse;
    fromAmino(object: NumPoolsResponseAmino): NumPoolsResponse;
    toAmino(message: NumPoolsResponse): NumPoolsResponseAmino;
    fromAminoMsg(object: NumPoolsResponseAminoMsg): NumPoolsResponse;
    toAminoMsg(message: NumPoolsResponse): NumPoolsResponseAminoMsg;
    fromProtoMsg(message: NumPoolsResponseProtoMsg): NumPoolsResponse;
    toProto(message: NumPoolsResponse): Uint8Array;
    toProtoMsg(message: NumPoolsResponse): NumPoolsResponseProtoMsg;
};
