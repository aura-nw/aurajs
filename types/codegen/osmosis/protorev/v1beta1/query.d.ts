import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PoolStatistics, PoolStatisticsAmino, PoolStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "osmosis/protorev/query-params-request";
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
    typeUrl: "/osmosis.protorev.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "osmosis/protorev/query-params-response";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequest {
}
export interface QueryGetProtoRevNumberOfTradesRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestAmino {
}
export interface QueryGetProtoRevNumberOfTradesRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-number-of-trades-request";
    value: QueryGetProtoRevNumberOfTradesRequestAmino;
}
/**
 * QueryGetProtoRevNumberOfTradesRequest is request type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesRequestSDKType {
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponse {
    /** number_of_trades is the number of trades the module has executed */
    numberOfTrades: string;
}
export interface QueryGetProtoRevNumberOfTradesResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevNumberOfTradesResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseAmino {
    /** number_of_trades is the number of trades the module has executed */
    number_of_trades: string;
}
export interface QueryGetProtoRevNumberOfTradesResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-number-of-trades-response";
    value: QueryGetProtoRevNumberOfTradesResponseAmino;
}
/**
 * QueryGetProtoRevNumberOfTradesResponse is response type for the
 * Query/GetProtoRevNumberOfTrades RPC method.
 */
export interface QueryGetProtoRevNumberOfTradesResponseSDKType {
    number_of_trades: string;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequest {
    /** denom is the denom to query profits by */
    denom: string;
}
export interface QueryGetProtoRevProfitsByDenomRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestAmino {
    /** denom is the denom to query profits by */
    denom: string;
}
export interface QueryGetProtoRevProfitsByDenomRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-request";
    value: QueryGetProtoRevProfitsByDenomRequestAmino;
}
/**
 * QueryGetProtoRevProfitsByDenomRequest is request type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomRequestSDKType {
    denom: string;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponse {
    /** profit is the profits of the module by the selected denom */
    profit: Coin;
}
export interface QueryGetProtoRevProfitsByDenomResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevProfitsByDenomResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseAmino {
    /** profit is the profits of the module by the selected denom */
    profit?: CoinAmino;
}
export interface QueryGetProtoRevProfitsByDenomResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-profits-by-denom-response";
    value: QueryGetProtoRevProfitsByDenomResponseAmino;
}
/**
 * QueryGetProtoRevProfitsByDenomResponse is response type for the
 * Query/GetProtoRevProfitsByDenom RPC method.
 */
export interface QueryGetProtoRevProfitsByDenomResponseSDKType {
    profit: CoinSDKType;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequest {
}
export interface QueryGetProtoRevAllProfitsRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestAmino {
}
export interface QueryGetProtoRevAllProfitsRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-all-profits-request";
    value: QueryGetProtoRevAllProfitsRequestAmino;
}
/**
 * QueryGetProtoRevAllProfitsRequest is request type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsRequestSDKType {
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponse {
    /** profits is a list of all of the profits from the module */
    profits: Coin[];
}
export interface QueryGetProtoRevAllProfitsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllProfitsResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseAmino {
    /** profits is a list of all of the profits from the module */
    profits: CoinAmino[];
}
export interface QueryGetProtoRevAllProfitsResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-all-profits-response";
    value: QueryGetProtoRevAllProfitsResponseAmino;
}
/**
 * QueryGetProtoRevAllProfitsResponse is response type for the
 * Query/GetProtoRevAllProfits RPC method.
 */
export interface QueryGetProtoRevAllProfitsResponseSDKType {
    profits: CoinSDKType[];
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolRequest {
    /** pool_id is the pool id to query statistics by */
    poolId: bigint;
}
export interface QueryGetProtoRevStatisticsByPoolRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolRequestAmino {
    /** pool_id is the pool id to query statistics by */
    pool_id: string;
}
export interface QueryGetProtoRevStatisticsByPoolRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-statistics-by-pool-request";
    value: QueryGetProtoRevStatisticsByPoolRequestAmino;
}
/**
 * QueryGetProtoRevStatisticsByPoolRequest is request type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolRequestSDKType {
    pool_id: bigint;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolResponse {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     */
    statistics: PoolStatistics;
}
export interface QueryGetProtoRevStatisticsByPoolResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevStatisticsByPoolResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolResponseAmino {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades
     */
    statistics?: PoolStatisticsAmino;
}
export interface QueryGetProtoRevStatisticsByPoolResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-statistics-by-pool-response";
    value: QueryGetProtoRevStatisticsByPoolResponseAmino;
}
/**
 * QueryGetProtoRevStatisticsByPoolResponse is response type for the
 * Query/GetProtoRevStatisticsByPool RPC method.
 */
export interface QueryGetProtoRevStatisticsByPoolResponseSDKType {
    statistics: PoolStatisticsSDKType;
}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsRequest {
}
export interface QueryGetProtoRevAllStatisticsRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsRequestAmino {
}
export interface QueryGetProtoRevAllStatisticsRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-all-statistics-request";
    value: QueryGetProtoRevAllStatisticsRequestAmino;
}
/**
 * QueryGetProtoRevAllStatisticsRequest is request type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsRequestSDKType {
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsResponse {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades for all pools
     */
    statistics: PoolStatistics[];
}
export interface QueryGetProtoRevAllStatisticsResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevAllStatisticsResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsResponseAmino {
    /**
     * statistics contains the number of trades the module has executed after a
     * swap on a given pool and the profits from the trades for all pools
     */
    statistics: PoolStatisticsAmino[];
}
export interface QueryGetProtoRevAllStatisticsResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-all-statistics-response";
    value: QueryGetProtoRevAllStatisticsResponseAmino;
}
/**
 * QueryGetProtoRevAllStatisticsResponse is response type for the
 * Query/GetProtoRevAllStatistics RPC method.
 */
export interface QueryGetProtoRevAllStatisticsResponseSDKType {
    statistics: PoolStatisticsSDKType[];
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequest {
}
export interface QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesRequest";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestAmino {
}
export interface QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-request";
    value: QueryGetProtoRevTokenPairArbRoutesRequestAmino;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesRequest is request type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesRequestSDKType {
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponse {
    /**
     * routes is a list of all of the hot routes that the module is currently
     * arbitraging
     */
    routes: TokenPairArbRoutes[];
}
export interface QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.QueryGetProtoRevTokenPairArbRoutesResponse";
    value: Uint8Array;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseAmino {
    /**
     * routes is a list of all of the hot routes that the module is currently
     * arbitraging
     */
    routes: TokenPairArbRoutesAmino[];
}
export interface QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg {
    type: "osmosis/protorev/query-get-proto-rev-token-pair-arb-routes-response";
    value: QueryGetProtoRevTokenPairArbRoutesResponseAmino;
}
/**
 * QueryGetProtoRevTokenPairArbRoutesResponse is response type for the
 * Query/GetProtoRevTokenPairArbRoutes RPC method.
 */
export interface QueryGetProtoRevTokenPairArbRoutesResponseSDKType {
    routes: TokenPairArbRoutesSDKType[];
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
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
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
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryGetProtoRevNumberOfTradesRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevNumberOfTradesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesRequest;
    fromJSON(_: any): QueryGetProtoRevNumberOfTradesRequest;
    toJSON(_: QueryGetProtoRevNumberOfTradesRequest): unknown;
    fromPartial(_: Partial<QueryGetProtoRevNumberOfTradesRequest>): QueryGetProtoRevNumberOfTradesRequest;
    fromAmino(_: QueryGetProtoRevNumberOfTradesRequestAmino): QueryGetProtoRevNumberOfTradesRequest;
    toAmino(_: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevNumberOfTradesRequestAminoMsg): QueryGetProtoRevNumberOfTradesRequest;
    toAminoMsg(message: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevNumberOfTradesRequestProtoMsg): QueryGetProtoRevNumberOfTradesRequest;
    toProto(message: QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevNumberOfTradesRequest): QueryGetProtoRevNumberOfTradesRequestProtoMsg;
};
export declare const QueryGetProtoRevNumberOfTradesResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevNumberOfTradesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevNumberOfTradesResponse;
    fromJSON(object: any): QueryGetProtoRevNumberOfTradesResponse;
    toJSON(message: QueryGetProtoRevNumberOfTradesResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevNumberOfTradesResponse>): QueryGetProtoRevNumberOfTradesResponse;
    fromAmino(object: QueryGetProtoRevNumberOfTradesResponseAmino): QueryGetProtoRevNumberOfTradesResponse;
    toAmino(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevNumberOfTradesResponseAminoMsg): QueryGetProtoRevNumberOfTradesResponse;
    toAminoMsg(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevNumberOfTradesResponseProtoMsg): QueryGetProtoRevNumberOfTradesResponse;
    toProto(message: QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevNumberOfTradesResponse): QueryGetProtoRevNumberOfTradesResponseProtoMsg;
};
export declare const QueryGetProtoRevProfitsByDenomRequest: {
    typeUrl: string;
    encode(message: QueryGetProtoRevProfitsByDenomRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomRequest;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomRequest;
    toJSON(message: QueryGetProtoRevProfitsByDenomRequest): unknown;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomRequest>): QueryGetProtoRevProfitsByDenomRequest;
    fromAmino(object: QueryGetProtoRevProfitsByDenomRequestAmino): QueryGetProtoRevProfitsByDenomRequest;
    toAmino(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevProfitsByDenomRequestAminoMsg): QueryGetProtoRevProfitsByDenomRequest;
    toAminoMsg(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevProfitsByDenomRequestProtoMsg): QueryGetProtoRevProfitsByDenomRequest;
    toProto(message: QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevProfitsByDenomRequest): QueryGetProtoRevProfitsByDenomRequestProtoMsg;
};
export declare const QueryGetProtoRevProfitsByDenomResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevProfitsByDenomResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevProfitsByDenomResponse;
    fromJSON(object: any): QueryGetProtoRevProfitsByDenomResponse;
    toJSON(message: QueryGetProtoRevProfitsByDenomResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevProfitsByDenomResponse>): QueryGetProtoRevProfitsByDenomResponse;
    fromAmino(object: QueryGetProtoRevProfitsByDenomResponseAmino): QueryGetProtoRevProfitsByDenomResponse;
    toAmino(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevProfitsByDenomResponseAminoMsg): QueryGetProtoRevProfitsByDenomResponse;
    toAminoMsg(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevProfitsByDenomResponseProtoMsg): QueryGetProtoRevProfitsByDenomResponse;
    toProto(message: QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevProfitsByDenomResponse): QueryGetProtoRevProfitsByDenomResponseProtoMsg;
};
export declare const QueryGetProtoRevAllProfitsRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevAllProfitsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsRequest;
    fromJSON(_: any): QueryGetProtoRevAllProfitsRequest;
    toJSON(_: QueryGetProtoRevAllProfitsRequest): unknown;
    fromPartial(_: Partial<QueryGetProtoRevAllProfitsRequest>): QueryGetProtoRevAllProfitsRequest;
    fromAmino(_: QueryGetProtoRevAllProfitsRequestAmino): QueryGetProtoRevAllProfitsRequest;
    toAmino(_: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevAllProfitsRequestAminoMsg): QueryGetProtoRevAllProfitsRequest;
    toAminoMsg(message: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAllProfitsRequestProtoMsg): QueryGetProtoRevAllProfitsRequest;
    toProto(message: QueryGetProtoRevAllProfitsRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAllProfitsRequest): QueryGetProtoRevAllProfitsRequestProtoMsg;
};
export declare const QueryGetProtoRevAllProfitsResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevAllProfitsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllProfitsResponse;
    fromJSON(object: any): QueryGetProtoRevAllProfitsResponse;
    toJSON(message: QueryGetProtoRevAllProfitsResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevAllProfitsResponse>): QueryGetProtoRevAllProfitsResponse;
    fromAmino(object: QueryGetProtoRevAllProfitsResponseAmino): QueryGetProtoRevAllProfitsResponse;
    toAmino(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevAllProfitsResponseAminoMsg): QueryGetProtoRevAllProfitsResponse;
    toAminoMsg(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAllProfitsResponseProtoMsg): QueryGetProtoRevAllProfitsResponse;
    toProto(message: QueryGetProtoRevAllProfitsResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAllProfitsResponse): QueryGetProtoRevAllProfitsResponseProtoMsg;
};
export declare const QueryGetProtoRevStatisticsByPoolRequest: {
    typeUrl: string;
    encode(message: QueryGetProtoRevStatisticsByPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByPoolRequest;
    fromJSON(object: any): QueryGetProtoRevStatisticsByPoolRequest;
    toJSON(message: QueryGetProtoRevStatisticsByPoolRequest): unknown;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByPoolRequest>): QueryGetProtoRevStatisticsByPoolRequest;
    fromAmino(object: QueryGetProtoRevStatisticsByPoolRequestAmino): QueryGetProtoRevStatisticsByPoolRequest;
    toAmino(message: QueryGetProtoRevStatisticsByPoolRequest): QueryGetProtoRevStatisticsByPoolRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevStatisticsByPoolRequestAminoMsg): QueryGetProtoRevStatisticsByPoolRequest;
    toAminoMsg(message: QueryGetProtoRevStatisticsByPoolRequest): QueryGetProtoRevStatisticsByPoolRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevStatisticsByPoolRequestProtoMsg): QueryGetProtoRevStatisticsByPoolRequest;
    toProto(message: QueryGetProtoRevStatisticsByPoolRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevStatisticsByPoolRequest): QueryGetProtoRevStatisticsByPoolRequestProtoMsg;
};
export declare const QueryGetProtoRevStatisticsByPoolResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevStatisticsByPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevStatisticsByPoolResponse;
    fromJSON(object: any): QueryGetProtoRevStatisticsByPoolResponse;
    toJSON(message: QueryGetProtoRevStatisticsByPoolResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevStatisticsByPoolResponse>): QueryGetProtoRevStatisticsByPoolResponse;
    fromAmino(object: QueryGetProtoRevStatisticsByPoolResponseAmino): QueryGetProtoRevStatisticsByPoolResponse;
    toAmino(message: QueryGetProtoRevStatisticsByPoolResponse): QueryGetProtoRevStatisticsByPoolResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevStatisticsByPoolResponseAminoMsg): QueryGetProtoRevStatisticsByPoolResponse;
    toAminoMsg(message: QueryGetProtoRevStatisticsByPoolResponse): QueryGetProtoRevStatisticsByPoolResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevStatisticsByPoolResponseProtoMsg): QueryGetProtoRevStatisticsByPoolResponse;
    toProto(message: QueryGetProtoRevStatisticsByPoolResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevStatisticsByPoolResponse): QueryGetProtoRevStatisticsByPoolResponseProtoMsg;
};
export declare const QueryGetProtoRevAllStatisticsRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevAllStatisticsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllStatisticsRequest;
    fromJSON(_: any): QueryGetProtoRevAllStatisticsRequest;
    toJSON(_: QueryGetProtoRevAllStatisticsRequest): unknown;
    fromPartial(_: Partial<QueryGetProtoRevAllStatisticsRequest>): QueryGetProtoRevAllStatisticsRequest;
    fromAmino(_: QueryGetProtoRevAllStatisticsRequestAmino): QueryGetProtoRevAllStatisticsRequest;
    toAmino(_: QueryGetProtoRevAllStatisticsRequest): QueryGetProtoRevAllStatisticsRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevAllStatisticsRequestAminoMsg): QueryGetProtoRevAllStatisticsRequest;
    toAminoMsg(message: QueryGetProtoRevAllStatisticsRequest): QueryGetProtoRevAllStatisticsRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAllStatisticsRequestProtoMsg): QueryGetProtoRevAllStatisticsRequest;
    toProto(message: QueryGetProtoRevAllStatisticsRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAllStatisticsRequest): QueryGetProtoRevAllStatisticsRequestProtoMsg;
};
export declare const QueryGetProtoRevAllStatisticsResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevAllStatisticsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevAllStatisticsResponse;
    fromJSON(object: any): QueryGetProtoRevAllStatisticsResponse;
    toJSON(message: QueryGetProtoRevAllStatisticsResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevAllStatisticsResponse>): QueryGetProtoRevAllStatisticsResponse;
    fromAmino(object: QueryGetProtoRevAllStatisticsResponseAmino): QueryGetProtoRevAllStatisticsResponse;
    toAmino(message: QueryGetProtoRevAllStatisticsResponse): QueryGetProtoRevAllStatisticsResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevAllStatisticsResponseAminoMsg): QueryGetProtoRevAllStatisticsResponse;
    toAminoMsg(message: QueryGetProtoRevAllStatisticsResponse): QueryGetProtoRevAllStatisticsResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevAllStatisticsResponseProtoMsg): QueryGetProtoRevAllStatisticsResponse;
    toProto(message: QueryGetProtoRevAllStatisticsResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevAllStatisticsResponse): QueryGetProtoRevAllStatisticsResponseProtoMsg;
};
export declare const QueryGetProtoRevTokenPairArbRoutesRequest: {
    typeUrl: string;
    encode(_: QueryGetProtoRevTokenPairArbRoutesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesRequest;
    fromJSON(_: any): QueryGetProtoRevTokenPairArbRoutesRequest;
    toJSON(_: QueryGetProtoRevTokenPairArbRoutesRequest): unknown;
    fromPartial(_: Partial<QueryGetProtoRevTokenPairArbRoutesRequest>): QueryGetProtoRevTokenPairArbRoutesRequest;
    fromAmino(_: QueryGetProtoRevTokenPairArbRoutesRequestAmino): QueryGetProtoRevTokenPairArbRoutesRequest;
    toAmino(_: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAmino;
    fromAminoMsg(object: QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): QueryGetProtoRevTokenPairArbRoutesRequest;
    toAminoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): QueryGetProtoRevTokenPairArbRoutesRequest;
    toProto(message: QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesRequest): QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
};
export declare const QueryGetProtoRevTokenPairArbRoutesResponse: {
    typeUrl: string;
    encode(message: QueryGetProtoRevTokenPairArbRoutesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryGetProtoRevTokenPairArbRoutesResponse;
    fromJSON(object: any): QueryGetProtoRevTokenPairArbRoutesResponse;
    toJSON(message: QueryGetProtoRevTokenPairArbRoutesResponse): unknown;
    fromPartial(object: Partial<QueryGetProtoRevTokenPairArbRoutesResponse>): QueryGetProtoRevTokenPairArbRoutesResponse;
    fromAmino(object: QueryGetProtoRevTokenPairArbRoutesResponseAmino): QueryGetProtoRevTokenPairArbRoutesResponse;
    toAmino(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAmino;
    fromAminoMsg(object: QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): QueryGetProtoRevTokenPairArbRoutesResponse;
    toAminoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
    fromProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): QueryGetProtoRevTokenPairArbRoutesResponse;
    toProto(message: QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
    toProtoMsg(message: QueryGetProtoRevTokenPairArbRoutesResponse): QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
};
