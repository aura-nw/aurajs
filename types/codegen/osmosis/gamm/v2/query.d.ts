import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceRequest";
    value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestAmino {
    pool_id: string;
    base_asset_denom: string;
    quote_asset_denom: string;
}
export interface QuerySpotPriceRequestAminoMsg {
    type: "osmosis/gamm/v2/query-spot-price-request";
    value: QuerySpotPriceRequestAmino;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceRequestSDKType {
    pool_id: bigint;
    base_asset_denom: string;
    quote_asset_denom: string;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v2.QuerySpotPriceResponse";
    value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseAmino {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price: string;
}
export interface QuerySpotPriceResponseAminoMsg {
    type: "osmosis/gamm/v2/query-spot-price-response";
    value: QuerySpotPriceResponseAmino;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
export interface QuerySpotPriceResponseSDKType {
    spot_price: string;
}
export declare const QuerySpotPriceRequest: {
    typeUrl: string;
    encode(message: QuerySpotPriceRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromJSON(object: any): QuerySpotPriceRequest;
    toJSON(message: QuerySpotPriceRequest): unknown;
    fromPartial(object: Partial<QuerySpotPriceRequest>): QuerySpotPriceRequest;
    fromAmino(object: QuerySpotPriceRequestAmino): QuerySpotPriceRequest;
    toAmino(message: QuerySpotPriceRequest): QuerySpotPriceRequestAmino;
    fromAminoMsg(object: QuerySpotPriceRequestAminoMsg): QuerySpotPriceRequest;
    toAminoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestAminoMsg;
    fromProtoMsg(message: QuerySpotPriceRequestProtoMsg): QuerySpotPriceRequest;
    toProto(message: QuerySpotPriceRequest): Uint8Array;
    toProtoMsg(message: QuerySpotPriceRequest): QuerySpotPriceRequestProtoMsg;
};
export declare const QuerySpotPriceResponse: {
    typeUrl: string;
    encode(message: QuerySpotPriceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySpotPriceResponse;
    fromJSON(object: any): QuerySpotPriceResponse;
    toJSON(message: QuerySpotPriceResponse): unknown;
    fromPartial(object: Partial<QuerySpotPriceResponse>): QuerySpotPriceResponse;
    fromAmino(object: QuerySpotPriceResponseAmino): QuerySpotPriceResponse;
    toAmino(message: QuerySpotPriceResponse): QuerySpotPriceResponseAmino;
    fromAminoMsg(object: QuerySpotPriceResponseAminoMsg): QuerySpotPriceResponse;
    toAminoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseAminoMsg;
    fromProtoMsg(message: QuerySpotPriceResponseProtoMsg): QuerySpotPriceResponse;
    toProto(message: QuerySpotPriceResponse): Uint8Array;
    toProtoMsg(message: QuerySpotPriceResponse): QuerySpotPriceResponseProtoMsg;
};
