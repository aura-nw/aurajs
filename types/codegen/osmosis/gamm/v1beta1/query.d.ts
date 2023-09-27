import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolProtoMsg as Pool1ProtoMsg } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolProtoMsg as Pool2ProtoMsg } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** =============================== Pool */
export interface QueryPoolRequest {
    poolId: bigint;
}
export interface QueryPoolRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolRequest";
    value: Uint8Array;
}
/** =============================== Pool */
export interface QueryPoolRequestAmino {
    pool_id: string;
}
export interface QueryPoolRequestAminoMsg {
    type: "osmosis/gamm/query-pool-request";
    value: QueryPoolRequestAmino;
}
/** =============================== Pool */
export interface QueryPoolRequestSDKType {
    pool_id: bigint;
}
export interface QueryPoolResponse {
    pool: (Pool1 & Pool2 & Any) | undefined;
}
export interface QueryPoolResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolResponse";
    value: Uint8Array;
}
export type QueryPoolResponseEncoded = Omit<QueryPoolResponse, "pool"> & {
    pool?: Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg | undefined;
};
export interface QueryPoolResponseAmino {
    pool?: AnyAmino;
}
export interface QueryPoolResponseAminoMsg {
    type: "osmosis/gamm/query-pool-response";
    value: QueryPoolResponseAmino;
}
export interface QueryPoolResponseSDKType {
    pool: Pool1SDKType | Pool2SDKType | AnySDKType | undefined;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsRequest";
    value: Uint8Array;
}
/** =============================== Pools */
export interface QueryPoolsRequestAmino {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
    type: "osmosis/gamm/query-pools-request";
    value: QueryPoolsRequestAmino;
}
/** =============================== Pools */
export interface QueryPoolsRequestSDKType {
    pagination: PageRequestSDKType;
}
export interface QueryPoolsResponse {
    pools: (Pool1 & Pool2 & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsResponse";
    value: Uint8Array;
}
export type QueryPoolsResponseEncoded = Omit<QueryPoolsResponse, "pools"> & {
    pools: (Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsResponseAmino {
    pools: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
    type: "osmosis/gamm/query-pools-response";
    value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
    pools: (Pool1SDKType | Pool2SDKType | AnySDKType)[];
    pagination: PageResponseSDKType;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {
}
export interface QueryNumPoolsRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsRequest";
    value: Uint8Array;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestAmino {
}
export interface QueryNumPoolsRequestAminoMsg {
    type: "osmosis/gamm/query-num-pools-request";
    value: QueryNumPoolsRequestAmino;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequestSDKType {
}
export interface QueryNumPoolsResponse {
    numPools: bigint;
}
export interface QueryNumPoolsResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryNumPoolsResponse";
    value: Uint8Array;
}
export interface QueryNumPoolsResponseAmino {
    num_pools: string;
}
export interface QueryNumPoolsResponseAminoMsg {
    type: "osmosis/gamm/query-num-pools-response";
    value: QueryNumPoolsResponseAmino;
}
export interface QueryNumPoolsResponseSDKType {
    num_pools: bigint;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequest {
    poolId: bigint;
}
export interface QueryPoolTypeRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeRequest";
    value: Uint8Array;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestAmino {
    pool_id: string;
}
export interface QueryPoolTypeRequestAminoMsg {
    type: "osmosis/gamm/query-pool-type-request";
    value: QueryPoolTypeRequestAmino;
}
/** =============================== PoolType */
export interface QueryPoolTypeRequestSDKType {
    pool_id: bigint;
}
export interface QueryPoolTypeResponse {
    poolType: string;
}
export interface QueryPoolTypeResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolTypeResponse";
    value: Uint8Array;
}
export interface QueryPoolTypeResponseAmino {
    pool_type: string;
}
export interface QueryPoolTypeResponseAminoMsg {
    type: "osmosis/gamm/query-pool-type-response";
    value: QueryPoolTypeResponseAmino;
}
export interface QueryPoolTypeResponseSDKType {
    pool_type: string;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequest {
    poolId: bigint;
    tokensIn: Coin[];
}
export interface QueryCalcJoinPoolSharesRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesRequest";
    value: Uint8Array;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestAmino {
    pool_id: string;
    tokens_in: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesRequestAminoMsg {
    type: "osmosis/gamm/query-calc-join-pool-shares-request";
    value: QueryCalcJoinPoolSharesRequestAmino;
}
/** =============================== CalcJoinPoolShares */
export interface QueryCalcJoinPoolSharesRequestSDKType {
    pool_id: bigint;
    tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolSharesResponse {
    shareOutAmount: string;
    tokensOut: Coin[];
}
export interface QueryCalcJoinPoolSharesResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolSharesResponse";
    value: Uint8Array;
}
export interface QueryCalcJoinPoolSharesResponseAmino {
    share_out_amount: string;
    tokens_out: CoinAmino[];
}
export interface QueryCalcJoinPoolSharesResponseAminoMsg {
    type: "osmosis/gamm/query-calc-join-pool-shares-response";
    value: QueryCalcJoinPoolSharesResponseAmino;
}
export interface QueryCalcJoinPoolSharesResponseSDKType {
    share_out_amount: string;
    tokens_out: CoinSDKType[];
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequest {
    poolId: bigint;
    shareInAmount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesRequest";
    value: Uint8Array;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestAmino {
    pool_id: string;
    share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesRequestAminoMsg {
    type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-request";
    value: QueryCalcExitPoolCoinsFromSharesRequestAmino;
}
/** =============================== CalcExitPoolCoinsFromShares */
export interface QueryCalcExitPoolCoinsFromSharesRequestSDKType {
    pool_id: bigint;
    share_in_amount: string;
}
export interface QueryCalcExitPoolCoinsFromSharesResponse {
    tokensOut: Coin[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcExitPoolCoinsFromSharesResponse";
    value: Uint8Array;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAmino {
    tokens_out: CoinAmino[];
}
export interface QueryCalcExitPoolCoinsFromSharesResponseAminoMsg {
    type: "osmosis/gamm/query-calc-exit-pool-coins-from-shares-response";
    value: QueryCalcExitPoolCoinsFromSharesResponseAmino;
}
export interface QueryCalcExitPoolCoinsFromSharesResponseSDKType {
    tokens_out: CoinSDKType[];
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: bigint;
}
export interface QueryPoolParamsRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsRequest";
    value: Uint8Array;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestAmino {
    pool_id: string;
}
export interface QueryPoolParamsRequestAminoMsg {
    type: "osmosis/gamm/query-pool-params-request";
    value: QueryPoolParamsRequestAmino;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequestSDKType {
    pool_id: bigint;
}
export interface QueryPoolParamsResponse {
    params: Any;
}
export interface QueryPoolParamsResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolParamsResponse";
    value: Uint8Array;
}
export interface QueryPoolParamsResponseAmino {
    params?: AnyAmino;
}
export interface QueryPoolParamsResponseAminoMsg {
    type: "osmosis/gamm/query-pool-params-response";
    value: QueryPoolParamsResponseAmino;
}
export interface QueryPoolParamsResponseSDKType {
    params: AnySDKType;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
    poolId: bigint;
}
export interface QueryTotalPoolLiquidityRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityRequest";
    value: Uint8Array;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestAmino {
    pool_id: string;
}
export interface QueryTotalPoolLiquidityRequestAminoMsg {
    type: "osmosis/gamm/query-total-pool-liquidity-request";
    value: QueryTotalPoolLiquidityRequestAmino;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequestSDKType {
    pool_id: bigint;
}
export interface QueryTotalPoolLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalPoolLiquidityResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalPoolLiquidityResponse";
    value: Uint8Array;
}
export interface QueryTotalPoolLiquidityResponseAmino {
    liquidity: CoinAmino[];
}
export interface QueryTotalPoolLiquidityResponseAminoMsg {
    type: "osmosis/gamm/query-total-pool-liquidity-response";
    value: QueryTotalPoolLiquidityResponseAmino;
}
export interface QueryTotalPoolLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
    poolId: bigint;
}
export interface QueryTotalSharesRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesRequest";
    value: Uint8Array;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestAmino {
    pool_id: string;
}
export interface QueryTotalSharesRequestAminoMsg {
    type: "osmosis/gamm/query-total-shares-request";
    value: QueryTotalSharesRequestAmino;
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequestSDKType {
    pool_id: bigint;
}
export interface QueryTotalSharesResponse {
    totalShares: Coin;
}
export interface QueryTotalSharesResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalSharesResponse";
    value: Uint8Array;
}
export interface QueryTotalSharesResponseAmino {
    total_shares?: CoinAmino;
}
export interface QueryTotalSharesResponseAminoMsg {
    type: "osmosis/gamm/query-total-shares-response";
    value: QueryTotalSharesResponseAmino;
}
export interface QueryTotalSharesResponseSDKType {
    total_shares: CoinSDKType;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequest {
    poolId: bigint;
    tokensIn: Coin[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesRequest";
    value: Uint8Array;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestAmino {
    pool_id: string;
    tokens_in: CoinAmino[];
}
export interface QueryCalcJoinPoolNoSwapSharesRequestAminoMsg {
    type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-request";
    value: QueryCalcJoinPoolNoSwapSharesRequestAmino;
}
/** =============================== CalcJoinPoolNoSwapShares */
export interface QueryCalcJoinPoolNoSwapSharesRequestSDKType {
    pool_id: bigint;
    tokens_in: CoinSDKType[];
}
export interface QueryCalcJoinPoolNoSwapSharesResponse {
    tokensOut: Coin[];
    sharesOut: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryCalcJoinPoolNoSwapSharesResponse";
    value: Uint8Array;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAmino {
    tokens_out: CoinAmino[];
    shares_out: string;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseAminoMsg {
    type: "osmosis/gamm/query-calc-join-pool-no-swap-shares-response";
    value: QueryCalcJoinPoolNoSwapSharesResponseAmino;
}
export interface QueryCalcJoinPoolNoSwapSharesResponseSDKType {
    tokens_out: CoinSDKType[];
    shares_out: string;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequest {
    poolId: bigint;
    baseAssetDenom: string;
    quoteAssetDenom: string;
}
export interface QuerySpotPriceRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceRequest";
    value: Uint8Array;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestAmino {
    pool_id: string;
    base_asset_denom: string;
    quote_asset_denom: string;
}
export interface QuerySpotPriceRequestAminoMsg {
    type: "osmosis/gamm/query-spot-price-request";
    value: QuerySpotPriceRequestAmino;
}
/**
 * QuerySpotPriceRequest defines the gRPC request structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceRequestSDKType {
    pool_id: bigint;
    base_asset_denom: string;
    quote_asset_denom: string;
}
export interface QueryPoolsWithFilterRequest {
    minLiquidity: Coin[];
    poolType: string;
    pagination: PageRequest;
}
export interface QueryPoolsWithFilterRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterRequest";
    value: Uint8Array;
}
export interface QueryPoolsWithFilterRequestAmino {
    min_liquidity: CoinAmino[];
    pool_type: string;
    pagination?: PageRequestAmino;
}
export interface QueryPoolsWithFilterRequestAminoMsg {
    type: "osmosis/gamm/query-pools-with-filter-request";
    value: QueryPoolsWithFilterRequestAmino;
}
export interface QueryPoolsWithFilterRequestSDKType {
    min_liquidity: CoinSDKType[];
    pool_type: string;
    pagination: PageRequestSDKType;
}
export interface QueryPoolsWithFilterResponse {
    pools: (Pool1 & Pool2 & Any)[] | Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export interface QueryPoolsWithFilterResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryPoolsWithFilterResponse";
    value: Uint8Array;
}
export type QueryPoolsWithFilterResponseEncoded = Omit<QueryPoolsWithFilterResponse, "pools"> & {
    pools: (Pool1ProtoMsg | Pool2ProtoMsg | AnyProtoMsg)[];
};
export interface QueryPoolsWithFilterResponseAmino {
    pools: AnyAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryPoolsWithFilterResponseAminoMsg {
    type: "osmosis/gamm/query-pools-with-filter-response";
    value: QueryPoolsWithFilterResponseAmino;
}
export interface QueryPoolsWithFilterResponseSDKType {
    pools: (Pool1SDKType | Pool2SDKType | AnySDKType)[];
    pagination: PageResponseSDKType;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
export interface QuerySpotPriceResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySpotPriceResponse";
    value: Uint8Array;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseAmino {
    /** String of the Dec. Ex) 10.203uatom */
    spot_price: string;
}
export interface QuerySpotPriceResponseAminoMsg {
    type: "osmosis/gamm/query-spot-price-response";
    value: QuerySpotPriceResponseAmino;
}
/**
 * QuerySpotPriceResponse defines the gRPC response structure for a SpotPrice
 * query.
 */
/** @deprecated */
export interface QuerySpotPriceResponseSDKType {
    spot_price: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    poolId: bigint;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
export interface QuerySwapExactAmountInRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestAmino {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    pool_id: string;
    token_in: string;
    routes: SwapAmountInRouteAmino[];
}
export interface QuerySwapExactAmountInRequestAminoMsg {
    type: "osmosis/gamm/query-swap-exact-amount-in-request";
    value: QuerySwapExactAmountInRequestAmino;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequestSDKType {
    sender: string;
    pool_id: bigint;
    token_in: string;
    routes: SwapAmountInRouteSDKType[];
}
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface QuerySwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountInResponse";
    value: Uint8Array;
}
export interface QuerySwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface QuerySwapExactAmountInResponseAminoMsg {
    type: "osmosis/gamm/query-swap-exact-amount-in-response";
    value: QuerySwapExactAmountInResponseAmino;
}
export interface QuerySwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    poolId: bigint;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
export interface QuerySwapExactAmountOutRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutRequest";
    value: Uint8Array;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestAmino {
    /** TODO: CHANGE THIS TO RESERVED IN A PATCH RELEASE */
    sender: string;
    pool_id: string;
    routes: SwapAmountOutRouteAmino[];
    token_out: string;
}
export interface QuerySwapExactAmountOutRequestAminoMsg {
    type: "osmosis/gamm/query-swap-exact-amount-out-request";
    value: QuerySwapExactAmountOutRequestAmino;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequestSDKType {
    sender: string;
    pool_id: bigint;
    routes: SwapAmountOutRouteSDKType[];
    token_out: string;
}
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface QuerySwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QuerySwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface QuerySwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface QuerySwapExactAmountOutResponseAminoMsg {
    type: "osmosis/gamm/query-swap-exact-amount-out-response";
    value: QuerySwapExactAmountOutResponseAmino;
}
export interface QuerySwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
export interface QueryTotalLiquidityRequest {
}
export interface QueryTotalLiquidityRequestProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityRequest";
    value: Uint8Array;
}
export interface QueryTotalLiquidityRequestAmino {
}
export interface QueryTotalLiquidityRequestAminoMsg {
    type: "osmosis/gamm/query-total-liquidity-request";
    value: QueryTotalLiquidityRequestAmino;
}
export interface QueryTotalLiquidityRequestSDKType {
}
export interface QueryTotalLiquidityResponse {
    liquidity: Coin[];
}
export interface QueryTotalLiquidityResponseProtoMsg {
    typeUrl: "/osmosis.gamm.v1beta1.QueryTotalLiquidityResponse";
    value: Uint8Array;
}
export interface QueryTotalLiquidityResponseAmino {
    liquidity: CoinAmino[];
}
export interface QueryTotalLiquidityResponseAminoMsg {
    type: "osmosis/gamm/query-total-liquidity-response";
    value: QueryTotalLiquidityResponseAmino;
}
export interface QueryTotalLiquidityResponseSDKType {
    liquidity: CoinSDKType[];
}
export declare const QueryPoolRequest: {
    typeUrl: string;
    encode(message: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): unknown;
    fromPartial(object: Partial<QueryPoolRequest>): QueryPoolRequest;
    fromAmino(object: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(message: QueryPoolRequest): QueryPoolRequestAmino;
    fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest;
    toAminoMsg(message: QueryPoolRequest): QueryPoolRequestAminoMsg;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial(object: Partial<QueryPoolResponse>): QueryPoolResponse;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    toAminoMsg(message: QueryPoolResponse): QueryPoolResponseAminoMsg;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(message: QueryPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    toAminoMsg(message: QueryPoolsRequest): QueryPoolsRequestAminoMsg;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    toAminoMsg(message: QueryPoolsResponse): QueryPoolsResponseAminoMsg;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
export declare const QueryNumPoolsRequest: {
    typeUrl: string;
    encode(_: QueryNumPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsRequest;
    fromJSON(_: any): QueryNumPoolsRequest;
    toJSON(_: QueryNumPoolsRequest): unknown;
    fromPartial(_: Partial<QueryNumPoolsRequest>): QueryNumPoolsRequest;
    fromAmino(_: QueryNumPoolsRequestAmino): QueryNumPoolsRequest;
    toAmino(_: QueryNumPoolsRequest): QueryNumPoolsRequestAmino;
    fromAminoMsg(object: QueryNumPoolsRequestAminoMsg): QueryNumPoolsRequest;
    toAminoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestAminoMsg;
    fromProtoMsg(message: QueryNumPoolsRequestProtoMsg): QueryNumPoolsRequest;
    toProto(message: QueryNumPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryNumPoolsRequest): QueryNumPoolsRequestProtoMsg;
};
export declare const QueryNumPoolsResponse: {
    typeUrl: string;
    encode(message: QueryNumPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryNumPoolsResponse;
    fromJSON(object: any): QueryNumPoolsResponse;
    toJSON(message: QueryNumPoolsResponse): unknown;
    fromPartial(object: Partial<QueryNumPoolsResponse>): QueryNumPoolsResponse;
    fromAmino(object: QueryNumPoolsResponseAmino): QueryNumPoolsResponse;
    toAmino(message: QueryNumPoolsResponse): QueryNumPoolsResponseAmino;
    fromAminoMsg(object: QueryNumPoolsResponseAminoMsg): QueryNumPoolsResponse;
    toAminoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseAminoMsg;
    fromProtoMsg(message: QueryNumPoolsResponseProtoMsg): QueryNumPoolsResponse;
    toProto(message: QueryNumPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryNumPoolsResponse): QueryNumPoolsResponseProtoMsg;
};
export declare const QueryPoolTypeRequest: {
    typeUrl: string;
    encode(message: QueryPoolTypeRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeRequest;
    fromJSON(object: any): QueryPoolTypeRequest;
    toJSON(message: QueryPoolTypeRequest): unknown;
    fromPartial(object: Partial<QueryPoolTypeRequest>): QueryPoolTypeRequest;
    fromAmino(object: QueryPoolTypeRequestAmino): QueryPoolTypeRequest;
    toAmino(message: QueryPoolTypeRequest): QueryPoolTypeRequestAmino;
    fromAminoMsg(object: QueryPoolTypeRequestAminoMsg): QueryPoolTypeRequest;
    toAminoMsg(message: QueryPoolTypeRequest): QueryPoolTypeRequestAminoMsg;
    fromProtoMsg(message: QueryPoolTypeRequestProtoMsg): QueryPoolTypeRequest;
    toProto(message: QueryPoolTypeRequest): Uint8Array;
    toProtoMsg(message: QueryPoolTypeRequest): QueryPoolTypeRequestProtoMsg;
};
export declare const QueryPoolTypeResponse: {
    typeUrl: string;
    encode(message: QueryPoolTypeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolTypeResponse;
    fromJSON(object: any): QueryPoolTypeResponse;
    toJSON(message: QueryPoolTypeResponse): unknown;
    fromPartial(object: Partial<QueryPoolTypeResponse>): QueryPoolTypeResponse;
    fromAmino(object: QueryPoolTypeResponseAmino): QueryPoolTypeResponse;
    toAmino(message: QueryPoolTypeResponse): QueryPoolTypeResponseAmino;
    fromAminoMsg(object: QueryPoolTypeResponseAminoMsg): QueryPoolTypeResponse;
    toAminoMsg(message: QueryPoolTypeResponse): QueryPoolTypeResponseAminoMsg;
    fromProtoMsg(message: QueryPoolTypeResponseProtoMsg): QueryPoolTypeResponse;
    toProto(message: QueryPoolTypeResponse): Uint8Array;
    toProtoMsg(message: QueryPoolTypeResponse): QueryPoolTypeResponseProtoMsg;
};
export declare const QueryCalcJoinPoolSharesRequest: {
    typeUrl: string;
    encode(message: QueryCalcJoinPoolSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesRequest;
    fromJSON(object: any): QueryCalcJoinPoolSharesRequest;
    toJSON(message: QueryCalcJoinPoolSharesRequest): unknown;
    fromPartial(object: Partial<QueryCalcJoinPoolSharesRequest>): QueryCalcJoinPoolSharesRequest;
    fromAmino(object: QueryCalcJoinPoolSharesRequestAmino): QueryCalcJoinPoolSharesRequest;
    toAmino(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestAmino;
    fromAminoMsg(object: QueryCalcJoinPoolSharesRequestAminoMsg): QueryCalcJoinPoolSharesRequest;
    toAminoMsg(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestAminoMsg;
    fromProtoMsg(message: QueryCalcJoinPoolSharesRequestProtoMsg): QueryCalcJoinPoolSharesRequest;
    toProto(message: QueryCalcJoinPoolSharesRequest): Uint8Array;
    toProtoMsg(message: QueryCalcJoinPoolSharesRequest): QueryCalcJoinPoolSharesRequestProtoMsg;
};
export declare const QueryCalcJoinPoolSharesResponse: {
    typeUrl: string;
    encode(message: QueryCalcJoinPoolSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolSharesResponse;
    fromJSON(object: any): QueryCalcJoinPoolSharesResponse;
    toJSON(message: QueryCalcJoinPoolSharesResponse): unknown;
    fromPartial(object: Partial<QueryCalcJoinPoolSharesResponse>): QueryCalcJoinPoolSharesResponse;
    fromAmino(object: QueryCalcJoinPoolSharesResponseAmino): QueryCalcJoinPoolSharesResponse;
    toAmino(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseAmino;
    fromAminoMsg(object: QueryCalcJoinPoolSharesResponseAminoMsg): QueryCalcJoinPoolSharesResponse;
    toAminoMsg(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseAminoMsg;
    fromProtoMsg(message: QueryCalcJoinPoolSharesResponseProtoMsg): QueryCalcJoinPoolSharesResponse;
    toProto(message: QueryCalcJoinPoolSharesResponse): Uint8Array;
    toProtoMsg(message: QueryCalcJoinPoolSharesResponse): QueryCalcJoinPoolSharesResponseProtoMsg;
};
export declare const QueryCalcExitPoolCoinsFromSharesRequest: {
    typeUrl: string;
    encode(message: QueryCalcExitPoolCoinsFromSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesRequest;
    fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesRequest;
    toJSON(message: QueryCalcExitPoolCoinsFromSharesRequest): unknown;
    fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesRequest>): QueryCalcExitPoolCoinsFromSharesRequest;
    fromAmino(object: QueryCalcExitPoolCoinsFromSharesRequestAmino): QueryCalcExitPoolCoinsFromSharesRequest;
    toAmino(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestAmino;
    fromAminoMsg(object: QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): QueryCalcExitPoolCoinsFromSharesRequest;
    toAminoMsg(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
    fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): QueryCalcExitPoolCoinsFromSharesRequest;
    toProto(message: QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
    toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesRequest): QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
};
export declare const QueryCalcExitPoolCoinsFromSharesResponse: {
    typeUrl: string;
    encode(message: QueryCalcExitPoolCoinsFromSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcExitPoolCoinsFromSharesResponse;
    fromJSON(object: any): QueryCalcExitPoolCoinsFromSharesResponse;
    toJSON(message: QueryCalcExitPoolCoinsFromSharesResponse): unknown;
    fromPartial(object: Partial<QueryCalcExitPoolCoinsFromSharesResponse>): QueryCalcExitPoolCoinsFromSharesResponse;
    fromAmino(object: QueryCalcExitPoolCoinsFromSharesResponseAmino): QueryCalcExitPoolCoinsFromSharesResponse;
    toAmino(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseAmino;
    fromAminoMsg(object: QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): QueryCalcExitPoolCoinsFromSharesResponse;
    toAminoMsg(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
    fromProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): QueryCalcExitPoolCoinsFromSharesResponse;
    toProto(message: QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
    toProtoMsg(message: QueryCalcExitPoolCoinsFromSharesResponse): QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
};
export declare const QueryPoolParamsRequest: {
    typeUrl: string;
    encode(message: QueryPoolParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsRequest;
    fromJSON(object: any): QueryPoolParamsRequest;
    toJSON(message: QueryPoolParamsRequest): unknown;
    fromPartial(object: Partial<QueryPoolParamsRequest>): QueryPoolParamsRequest;
    fromAmino(object: QueryPoolParamsRequestAmino): QueryPoolParamsRequest;
    toAmino(message: QueryPoolParamsRequest): QueryPoolParamsRequestAmino;
    fromAminoMsg(object: QueryPoolParamsRequestAminoMsg): QueryPoolParamsRequest;
    toAminoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestAminoMsg;
    fromProtoMsg(message: QueryPoolParamsRequestProtoMsg): QueryPoolParamsRequest;
    toProto(message: QueryPoolParamsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolParamsRequest): QueryPoolParamsRequestProtoMsg;
};
export declare const QueryPoolParamsResponse: {
    typeUrl: string;
    encode(message: QueryPoolParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolParamsResponse;
    fromJSON(object: any): QueryPoolParamsResponse;
    toJSON(message: QueryPoolParamsResponse): unknown;
    fromPartial(object: Partial<QueryPoolParamsResponse>): QueryPoolParamsResponse;
    fromAmino(object: QueryPoolParamsResponseAmino): QueryPoolParamsResponse;
    toAmino(message: QueryPoolParamsResponse): QueryPoolParamsResponseAmino;
    fromAminoMsg(object: QueryPoolParamsResponseAminoMsg): QueryPoolParamsResponse;
    toAminoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseAminoMsg;
    fromProtoMsg(message: QueryPoolParamsResponseProtoMsg): QueryPoolParamsResponse;
    toProto(message: QueryPoolParamsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolParamsResponse): QueryPoolParamsResponseProtoMsg;
};
export declare const QueryTotalPoolLiquidityRequest: {
    typeUrl: string;
    encode(message: QueryTotalPoolLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest;
    fromJSON(object: any): QueryTotalPoolLiquidityRequest;
    toJSON(message: QueryTotalPoolLiquidityRequest): unknown;
    fromPartial(object: Partial<QueryTotalPoolLiquidityRequest>): QueryTotalPoolLiquidityRequest;
    fromAmino(object: QueryTotalPoolLiquidityRequestAmino): QueryTotalPoolLiquidityRequest;
    toAmino(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAmino;
    fromAminoMsg(object: QueryTotalPoolLiquidityRequestAminoMsg): QueryTotalPoolLiquidityRequest;
    toAminoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestAminoMsg;
    fromProtoMsg(message: QueryTotalPoolLiquidityRequestProtoMsg): QueryTotalPoolLiquidityRequest;
    toProto(message: QueryTotalPoolLiquidityRequest): Uint8Array;
    toProtoMsg(message: QueryTotalPoolLiquidityRequest): QueryTotalPoolLiquidityRequestProtoMsg;
};
export declare const QueryTotalPoolLiquidityResponse: {
    typeUrl: string;
    encode(message: QueryTotalPoolLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse;
    fromJSON(object: any): QueryTotalPoolLiquidityResponse;
    toJSON(message: QueryTotalPoolLiquidityResponse): unknown;
    fromPartial(object: Partial<QueryTotalPoolLiquidityResponse>): QueryTotalPoolLiquidityResponse;
    fromAmino(object: QueryTotalPoolLiquidityResponseAmino): QueryTotalPoolLiquidityResponse;
    toAmino(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAmino;
    fromAminoMsg(object: QueryTotalPoolLiquidityResponseAminoMsg): QueryTotalPoolLiquidityResponse;
    toAminoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseAminoMsg;
    fromProtoMsg(message: QueryTotalPoolLiquidityResponseProtoMsg): QueryTotalPoolLiquidityResponse;
    toProto(message: QueryTotalPoolLiquidityResponse): Uint8Array;
    toProtoMsg(message: QueryTotalPoolLiquidityResponse): QueryTotalPoolLiquidityResponseProtoMsg;
};
export declare const QueryTotalSharesRequest: {
    typeUrl: string;
    encode(message: QueryTotalSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesRequest;
    fromJSON(object: any): QueryTotalSharesRequest;
    toJSON(message: QueryTotalSharesRequest): unknown;
    fromPartial(object: Partial<QueryTotalSharesRequest>): QueryTotalSharesRequest;
    fromAmino(object: QueryTotalSharesRequestAmino): QueryTotalSharesRequest;
    toAmino(message: QueryTotalSharesRequest): QueryTotalSharesRequestAmino;
    fromAminoMsg(object: QueryTotalSharesRequestAminoMsg): QueryTotalSharesRequest;
    toAminoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestAminoMsg;
    fromProtoMsg(message: QueryTotalSharesRequestProtoMsg): QueryTotalSharesRequest;
    toProto(message: QueryTotalSharesRequest): Uint8Array;
    toProtoMsg(message: QueryTotalSharesRequest): QueryTotalSharesRequestProtoMsg;
};
export declare const QueryTotalSharesResponse: {
    typeUrl: string;
    encode(message: QueryTotalSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalSharesResponse;
    fromJSON(object: any): QueryTotalSharesResponse;
    toJSON(message: QueryTotalSharesResponse): unknown;
    fromPartial(object: Partial<QueryTotalSharesResponse>): QueryTotalSharesResponse;
    fromAmino(object: QueryTotalSharesResponseAmino): QueryTotalSharesResponse;
    toAmino(message: QueryTotalSharesResponse): QueryTotalSharesResponseAmino;
    fromAminoMsg(object: QueryTotalSharesResponseAminoMsg): QueryTotalSharesResponse;
    toAminoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseAminoMsg;
    fromProtoMsg(message: QueryTotalSharesResponseProtoMsg): QueryTotalSharesResponse;
    toProto(message: QueryTotalSharesResponse): Uint8Array;
    toProtoMsg(message: QueryTotalSharesResponse): QueryTotalSharesResponseProtoMsg;
};
export declare const QueryCalcJoinPoolNoSwapSharesRequest: {
    typeUrl: string;
    encode(message: QueryCalcJoinPoolNoSwapSharesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesRequest;
    fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesRequest;
    toJSON(message: QueryCalcJoinPoolNoSwapSharesRequest): unknown;
    fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesRequest>): QueryCalcJoinPoolNoSwapSharesRequest;
    fromAmino(object: QueryCalcJoinPoolNoSwapSharesRequestAmino): QueryCalcJoinPoolNoSwapSharesRequest;
    toAmino(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestAmino;
    fromAminoMsg(object: QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): QueryCalcJoinPoolNoSwapSharesRequest;
    toAminoMsg(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
    fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): QueryCalcJoinPoolNoSwapSharesRequest;
    toProto(message: QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
    toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesRequest): QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
};
export declare const QueryCalcJoinPoolNoSwapSharesResponse: {
    typeUrl: string;
    encode(message: QueryCalcJoinPoolNoSwapSharesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCalcJoinPoolNoSwapSharesResponse;
    fromJSON(object: any): QueryCalcJoinPoolNoSwapSharesResponse;
    toJSON(message: QueryCalcJoinPoolNoSwapSharesResponse): unknown;
    fromPartial(object: Partial<QueryCalcJoinPoolNoSwapSharesResponse>): QueryCalcJoinPoolNoSwapSharesResponse;
    fromAmino(object: QueryCalcJoinPoolNoSwapSharesResponseAmino): QueryCalcJoinPoolNoSwapSharesResponse;
    toAmino(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseAmino;
    fromAminoMsg(object: QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): QueryCalcJoinPoolNoSwapSharesResponse;
    toAminoMsg(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
    fromProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): QueryCalcJoinPoolNoSwapSharesResponse;
    toProto(message: QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
    toProtoMsg(message: QueryCalcJoinPoolNoSwapSharesResponse): QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
};
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
export declare const QueryPoolsWithFilterRequest: {
    typeUrl: string;
    encode(message: QueryPoolsWithFilterRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterRequest;
    fromJSON(object: any): QueryPoolsWithFilterRequest;
    toJSON(message: QueryPoolsWithFilterRequest): unknown;
    fromPartial(object: Partial<QueryPoolsWithFilterRequest>): QueryPoolsWithFilterRequest;
    fromAmino(object: QueryPoolsWithFilterRequestAmino): QueryPoolsWithFilterRequest;
    toAmino(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestAmino;
    fromAminoMsg(object: QueryPoolsWithFilterRequestAminoMsg): QueryPoolsWithFilterRequest;
    toAminoMsg(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestAminoMsg;
    fromProtoMsg(message: QueryPoolsWithFilterRequestProtoMsg): QueryPoolsWithFilterRequest;
    toProto(message: QueryPoolsWithFilterRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsWithFilterRequest): QueryPoolsWithFilterRequestProtoMsg;
};
export declare const QueryPoolsWithFilterResponse: {
    typeUrl: string;
    encode(message: QueryPoolsWithFilterResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolsWithFilterResponse;
    fromJSON(object: any): QueryPoolsWithFilterResponse;
    toJSON(message: QueryPoolsWithFilterResponse): unknown;
    fromPartial(object: Partial<QueryPoolsWithFilterResponse>): QueryPoolsWithFilterResponse;
    fromAmino(object: QueryPoolsWithFilterResponseAmino): QueryPoolsWithFilterResponse;
    toAmino(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseAmino;
    fromAminoMsg(object: QueryPoolsWithFilterResponseAminoMsg): QueryPoolsWithFilterResponse;
    toAminoMsg(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseAminoMsg;
    fromProtoMsg(message: QueryPoolsWithFilterResponseProtoMsg): QueryPoolsWithFilterResponse;
    toProto(message: QueryPoolsWithFilterResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsWithFilterResponse): QueryPoolsWithFilterResponseProtoMsg;
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
export declare const QuerySwapExactAmountInRequest: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountInRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInRequest;
    fromJSON(object: any): QuerySwapExactAmountInRequest;
    toJSON(message: QuerySwapExactAmountInRequest): unknown;
    fromPartial(object: Partial<QuerySwapExactAmountInRequest>): QuerySwapExactAmountInRequest;
    fromAmino(object: QuerySwapExactAmountInRequestAmino): QuerySwapExactAmountInRequest;
    toAmino(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestAmino;
    fromAminoMsg(object: QuerySwapExactAmountInRequestAminoMsg): QuerySwapExactAmountInRequest;
    toAminoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestAminoMsg;
    fromProtoMsg(message: QuerySwapExactAmountInRequestProtoMsg): QuerySwapExactAmountInRequest;
    toProto(message: QuerySwapExactAmountInRequest): Uint8Array;
    toProtoMsg(message: QuerySwapExactAmountInRequest): QuerySwapExactAmountInRequestProtoMsg;
};
export declare const QuerySwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountInResponse;
    fromJSON(object: any): QuerySwapExactAmountInResponse;
    toJSON(message: QuerySwapExactAmountInResponse): unknown;
    fromPartial(object: Partial<QuerySwapExactAmountInResponse>): QuerySwapExactAmountInResponse;
    fromAmino(object: QuerySwapExactAmountInResponseAmino): QuerySwapExactAmountInResponse;
    toAmino(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseAmino;
    fromAminoMsg(object: QuerySwapExactAmountInResponseAminoMsg): QuerySwapExactAmountInResponse;
    toAminoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: QuerySwapExactAmountInResponseProtoMsg): QuerySwapExactAmountInResponse;
    toProto(message: QuerySwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: QuerySwapExactAmountInResponse): QuerySwapExactAmountInResponseProtoMsg;
};
export declare const QuerySwapExactAmountOutRequest: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountOutRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest;
    fromJSON(object: any): QuerySwapExactAmountOutRequest;
    toJSON(message: QuerySwapExactAmountOutRequest): unknown;
    fromPartial(object: Partial<QuerySwapExactAmountOutRequest>): QuerySwapExactAmountOutRequest;
    fromAmino(object: QuerySwapExactAmountOutRequestAmino): QuerySwapExactAmountOutRequest;
    toAmino(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestAmino;
    fromAminoMsg(object: QuerySwapExactAmountOutRequestAminoMsg): QuerySwapExactAmountOutRequest;
    toAminoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestAminoMsg;
    fromProtoMsg(message: QuerySwapExactAmountOutRequestProtoMsg): QuerySwapExactAmountOutRequest;
    toProto(message: QuerySwapExactAmountOutRequest): Uint8Array;
    toProtoMsg(message: QuerySwapExactAmountOutRequest): QuerySwapExactAmountOutRequestProtoMsg;
};
export declare const QuerySwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: QuerySwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse;
    fromJSON(object: any): QuerySwapExactAmountOutResponse;
    toJSON(message: QuerySwapExactAmountOutResponse): unknown;
    fromPartial(object: Partial<QuerySwapExactAmountOutResponse>): QuerySwapExactAmountOutResponse;
    fromAmino(object: QuerySwapExactAmountOutResponseAmino): QuerySwapExactAmountOutResponse;
    toAmino(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseAmino;
    fromAminoMsg(object: QuerySwapExactAmountOutResponseAminoMsg): QuerySwapExactAmountOutResponse;
    toAminoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: QuerySwapExactAmountOutResponseProtoMsg): QuerySwapExactAmountOutResponse;
    toProto(message: QuerySwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: QuerySwapExactAmountOutResponse): QuerySwapExactAmountOutResponseProtoMsg;
};
export declare const QueryTotalLiquidityRequest: {
    typeUrl: string;
    encode(_: QueryTotalLiquidityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityRequest;
    fromJSON(_: any): QueryTotalLiquidityRequest;
    toJSON(_: QueryTotalLiquidityRequest): unknown;
    fromPartial(_: Partial<QueryTotalLiquidityRequest>): QueryTotalLiquidityRequest;
    fromAmino(_: QueryTotalLiquidityRequestAmino): QueryTotalLiquidityRequest;
    toAmino(_: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAmino;
    fromAminoMsg(object: QueryTotalLiquidityRequestAminoMsg): QueryTotalLiquidityRequest;
    toAminoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidityRequestProtoMsg): QueryTotalLiquidityRequest;
    toProto(message: QueryTotalLiquidityRequest): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidityRequest): QueryTotalLiquidityRequestProtoMsg;
};
export declare const QueryTotalLiquidityResponse: {
    typeUrl: string;
    encode(message: QueryTotalLiquidityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryTotalLiquidityResponse;
    fromJSON(object: any): QueryTotalLiquidityResponse;
    toJSON(message: QueryTotalLiquidityResponse): unknown;
    fromPartial(object: Partial<QueryTotalLiquidityResponse>): QueryTotalLiquidityResponse;
    fromAmino(object: QueryTotalLiquidityResponseAmino): QueryTotalLiquidityResponse;
    toAmino(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAmino;
    fromAminoMsg(object: QueryTotalLiquidityResponseAminoMsg): QueryTotalLiquidityResponse;
    toAminoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidityResponseProtoMsg): QueryTotalLiquidityResponse;
    toProto(message: QueryTotalLiquidityResponse): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidityResponse): QueryTotalLiquidityResponseProtoMsg;
};
export declare const PoolI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Pool1 | Pool2 | Any;
export declare const PoolI_FromAmino: (content: AnyAmino) => Any;
export declare const PoolI_ToAmino: (content: Any) => AnyAmino;
