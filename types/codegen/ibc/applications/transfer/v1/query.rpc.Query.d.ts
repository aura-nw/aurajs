import { Rpc } from "../../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** DenomTrace queries a denomination trace information. */
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    /** DenomTraces queries all denomination traces. */
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomHash queries a denomination hash information. */
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    /** TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom. */
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    denomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    escrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
    totalEscrowForDenom(request: QueryTotalEscrowForDenomRequest): Promise<QueryTotalEscrowForDenomResponse>;
};
