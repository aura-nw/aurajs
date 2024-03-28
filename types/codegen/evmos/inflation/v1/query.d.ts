import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {
}
export interface QueryPeriodRequestProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryPeriodRequest";
    value: Uint8Array;
}
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequestAmino {
}
export interface QueryPeriodRequestAminoMsg {
    type: "/evmos.inflation.v1.QueryPeriodRequest";
    value: QueryPeriodRequestAmino;
}
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequestSDKType {
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
    /** period is the current minting per epoch provision value. */
    period: Long;
}
export interface QueryPeriodResponseProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryPeriodResponse";
    value: Uint8Array;
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponseAmino {
    /** period is the current minting per epoch provision value. */
    period?: string;
}
export interface QueryPeriodResponseAminoMsg {
    type: "/evmos.inflation.v1.QueryPeriodResponse";
    value: QueryPeriodResponseAmino;
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponseSDKType {
    period: Long;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {
}
export interface QueryEpochMintProvisionRequestProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionRequest";
    value: Uint8Array;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequestAmino {
}
export interface QueryEpochMintProvisionRequestAminoMsg {
    type: "/evmos.inflation.v1.QueryEpochMintProvisionRequest";
    value: QueryEpochMintProvisionRequestAmino;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequestSDKType {
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
    /** epoch_mint_provision is the current minting per epoch provision value. */
    epochMintProvision: DecCoin;
}
export interface QueryEpochMintProvisionResponseProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryEpochMintProvisionResponse";
    value: Uint8Array;
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponseAmino {
    /** epoch_mint_provision is the current minting per epoch provision value. */
    epoch_mint_provision?: DecCoinAmino;
}
export interface QueryEpochMintProvisionResponseAminoMsg {
    type: "/evmos.inflation.v1.QueryEpochMintProvisionResponse";
    value: QueryEpochMintProvisionResponseAmino;
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponseSDKType {
    epoch_mint_provision: DecCoinSDKType;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {
}
export interface QuerySkippedEpochsRequestProtoMsg {
    typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsRequest";
    value: Uint8Array;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequestAmino {
}
export interface QuerySkippedEpochsRequestAminoMsg {
    type: "/evmos.inflation.v1.QuerySkippedEpochsRequest";
    value: QuerySkippedEpochsRequestAmino;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequestSDKType {
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
    /** skipped_epochs is the number of epochs that the inflation module has been disabled. */
    skippedEpochs: Long;
}
export interface QuerySkippedEpochsResponseProtoMsg {
    typeUrl: "/evmos.inflation.v1.QuerySkippedEpochsResponse";
    value: Uint8Array;
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponseAmino {
    /** skipped_epochs is the number of epochs that the inflation module has been disabled. */
    skipped_epochs?: string;
}
export interface QuerySkippedEpochsResponseAminoMsg {
    type: "/evmos.inflation.v1.QuerySkippedEpochsResponse";
    value: QuerySkippedEpochsResponseAmino;
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponseSDKType {
    skipped_epochs: Long;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequest {
}
export interface QueryCirculatingSupplyRequestProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyRequest";
    value: Uint8Array;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequestAmino {
}
export interface QueryCirculatingSupplyRequestAminoMsg {
    type: "/evmos.inflation.v1.QueryCirculatingSupplyRequest";
    value: QueryCirculatingSupplyRequestAmino;
}
/**
 * QueryCirculatingSupplyRequest is the request type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyRequestSDKType {
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponse {
    /** circulating_supply is the total amount of coins in circulation */
    circulatingSupply: DecCoin;
}
export interface QueryCirculatingSupplyResponseProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryCirculatingSupplyResponse";
    value: Uint8Array;
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponseAmino {
    /** circulating_supply is the total amount of coins in circulation */
    circulating_supply?: DecCoinAmino;
}
export interface QueryCirculatingSupplyResponseAminoMsg {
    type: "/evmos.inflation.v1.QueryCirculatingSupplyResponse";
    value: QueryCirculatingSupplyResponseAmino;
}
/**
 * QueryCirculatingSupplyResponse is the response type for the
 * Query/CirculatingSupply RPC method.
 */
export interface QueryCirculatingSupplyResponseSDKType {
    circulating_supply: DecCoinSDKType;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {
}
export interface QueryInflationRateRequestProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryInflationRateRequest";
    value: Uint8Array;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestAmino {
}
export interface QueryInflationRateRequestAminoMsg {
    type: "/evmos.inflation.v1.QueryInflationRateRequest";
    value: QueryInflationRateRequestAmino;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequestSDKType {
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
    /** inflation_rate by which the total supply increases within one period */
    inflationRate: string;
}
export interface QueryInflationRateResponseProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryInflationRateResponse";
    value: Uint8Array;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseAmino {
    /** inflation_rate by which the total supply increases within one period */
    inflation_rate?: string;
}
export interface QueryInflationRateResponseAminoMsg {
    type: "/evmos.inflation.v1.QueryInflationRateResponse";
    value: QueryInflationRateResponseAmino;
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponseSDKType {
    inflation_rate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/evmos.inflation.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/evmos.inflation.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/evmos.inflation.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryPeriodRequest: {
    typeUrl: string;
    encode(_: QueryPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPeriodRequest;
    fromJSON(_: any): QueryPeriodRequest;
    toJSON(_: QueryPeriodRequest): unknown;
    fromPartial(_: Partial<QueryPeriodRequest>): QueryPeriodRequest;
    fromAmino(_: QueryPeriodRequestAmino): QueryPeriodRequest;
    toAmino(_: QueryPeriodRequest): QueryPeriodRequestAmino;
    fromAminoMsg(object: QueryPeriodRequestAminoMsg): QueryPeriodRequest;
    fromProtoMsg(message: QueryPeriodRequestProtoMsg): QueryPeriodRequest;
    toProto(message: QueryPeriodRequest): Uint8Array;
    toProtoMsg(message: QueryPeriodRequest): QueryPeriodRequestProtoMsg;
};
export declare const QueryPeriodResponse: {
    typeUrl: string;
    encode(message: QueryPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPeriodResponse;
    fromJSON(object: any): QueryPeriodResponse;
    toJSON(message: QueryPeriodResponse): unknown;
    fromPartial(object: Partial<QueryPeriodResponse>): QueryPeriodResponse;
    fromAmino(object: QueryPeriodResponseAmino): QueryPeriodResponse;
    toAmino(message: QueryPeriodResponse): QueryPeriodResponseAmino;
    fromAminoMsg(object: QueryPeriodResponseAminoMsg): QueryPeriodResponse;
    fromProtoMsg(message: QueryPeriodResponseProtoMsg): QueryPeriodResponse;
    toProto(message: QueryPeriodResponse): Uint8Array;
    toProtoMsg(message: QueryPeriodResponse): QueryPeriodResponseProtoMsg;
};
export declare const QueryEpochMintProvisionRequest: {
    typeUrl: string;
    encode(_: QueryEpochMintProvisionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochMintProvisionRequest;
    fromJSON(_: any): QueryEpochMintProvisionRequest;
    toJSON(_: QueryEpochMintProvisionRequest): unknown;
    fromPartial(_: Partial<QueryEpochMintProvisionRequest>): QueryEpochMintProvisionRequest;
    fromAmino(_: QueryEpochMintProvisionRequestAmino): QueryEpochMintProvisionRequest;
    toAmino(_: QueryEpochMintProvisionRequest): QueryEpochMintProvisionRequestAmino;
    fromAminoMsg(object: QueryEpochMintProvisionRequestAminoMsg): QueryEpochMintProvisionRequest;
    fromProtoMsg(message: QueryEpochMintProvisionRequestProtoMsg): QueryEpochMintProvisionRequest;
    toProto(message: QueryEpochMintProvisionRequest): Uint8Array;
    toProtoMsg(message: QueryEpochMintProvisionRequest): QueryEpochMintProvisionRequestProtoMsg;
};
export declare const QueryEpochMintProvisionResponse: {
    typeUrl: string;
    encode(message: QueryEpochMintProvisionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochMintProvisionResponse;
    fromJSON(object: any): QueryEpochMintProvisionResponse;
    toJSON(message: QueryEpochMintProvisionResponse): unknown;
    fromPartial(object: Partial<QueryEpochMintProvisionResponse>): QueryEpochMintProvisionResponse;
    fromAmino(object: QueryEpochMintProvisionResponseAmino): QueryEpochMintProvisionResponse;
    toAmino(message: QueryEpochMintProvisionResponse): QueryEpochMintProvisionResponseAmino;
    fromAminoMsg(object: QueryEpochMintProvisionResponseAminoMsg): QueryEpochMintProvisionResponse;
    fromProtoMsg(message: QueryEpochMintProvisionResponseProtoMsg): QueryEpochMintProvisionResponse;
    toProto(message: QueryEpochMintProvisionResponse): Uint8Array;
    toProtoMsg(message: QueryEpochMintProvisionResponse): QueryEpochMintProvisionResponseProtoMsg;
};
export declare const QuerySkippedEpochsRequest: {
    typeUrl: string;
    encode(_: QuerySkippedEpochsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySkippedEpochsRequest;
    fromJSON(_: any): QuerySkippedEpochsRequest;
    toJSON(_: QuerySkippedEpochsRequest): unknown;
    fromPartial(_: Partial<QuerySkippedEpochsRequest>): QuerySkippedEpochsRequest;
    fromAmino(_: QuerySkippedEpochsRequestAmino): QuerySkippedEpochsRequest;
    toAmino(_: QuerySkippedEpochsRequest): QuerySkippedEpochsRequestAmino;
    fromAminoMsg(object: QuerySkippedEpochsRequestAminoMsg): QuerySkippedEpochsRequest;
    fromProtoMsg(message: QuerySkippedEpochsRequestProtoMsg): QuerySkippedEpochsRequest;
    toProto(message: QuerySkippedEpochsRequest): Uint8Array;
    toProtoMsg(message: QuerySkippedEpochsRequest): QuerySkippedEpochsRequestProtoMsg;
};
export declare const QuerySkippedEpochsResponse: {
    typeUrl: string;
    encode(message: QuerySkippedEpochsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySkippedEpochsResponse;
    fromJSON(object: any): QuerySkippedEpochsResponse;
    toJSON(message: QuerySkippedEpochsResponse): unknown;
    fromPartial(object: Partial<QuerySkippedEpochsResponse>): QuerySkippedEpochsResponse;
    fromAmino(object: QuerySkippedEpochsResponseAmino): QuerySkippedEpochsResponse;
    toAmino(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseAmino;
    fromAminoMsg(object: QuerySkippedEpochsResponseAminoMsg): QuerySkippedEpochsResponse;
    fromProtoMsg(message: QuerySkippedEpochsResponseProtoMsg): QuerySkippedEpochsResponse;
    toProto(message: QuerySkippedEpochsResponse): Uint8Array;
    toProtoMsg(message: QuerySkippedEpochsResponse): QuerySkippedEpochsResponseProtoMsg;
};
export declare const QueryCirculatingSupplyRequest: {
    typeUrl: string;
    encode(_: QueryCirculatingSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingSupplyRequest;
    fromJSON(_: any): QueryCirculatingSupplyRequest;
    toJSON(_: QueryCirculatingSupplyRequest): unknown;
    fromPartial(_: Partial<QueryCirculatingSupplyRequest>): QueryCirculatingSupplyRequest;
    fromAmino(_: QueryCirculatingSupplyRequestAmino): QueryCirculatingSupplyRequest;
    toAmino(_: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestAmino;
    fromAminoMsg(object: QueryCirculatingSupplyRequestAminoMsg): QueryCirculatingSupplyRequest;
    fromProtoMsg(message: QueryCirculatingSupplyRequestProtoMsg): QueryCirculatingSupplyRequest;
    toProto(message: QueryCirculatingSupplyRequest): Uint8Array;
    toProtoMsg(message: QueryCirculatingSupplyRequest): QueryCirculatingSupplyRequestProtoMsg;
};
export declare const QueryCirculatingSupplyResponse: {
    typeUrl: string;
    encode(message: QueryCirculatingSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCirculatingSupplyResponse;
    fromJSON(object: any): QueryCirculatingSupplyResponse;
    toJSON(message: QueryCirculatingSupplyResponse): unknown;
    fromPartial(object: Partial<QueryCirculatingSupplyResponse>): QueryCirculatingSupplyResponse;
    fromAmino(object: QueryCirculatingSupplyResponseAmino): QueryCirculatingSupplyResponse;
    toAmino(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseAmino;
    fromAminoMsg(object: QueryCirculatingSupplyResponseAminoMsg): QueryCirculatingSupplyResponse;
    fromProtoMsg(message: QueryCirculatingSupplyResponseProtoMsg): QueryCirculatingSupplyResponse;
    toProto(message: QueryCirculatingSupplyResponse): Uint8Array;
    toProtoMsg(message: QueryCirculatingSupplyResponse): QueryCirculatingSupplyResponseProtoMsg;
};
export declare const QueryInflationRateRequest: {
    typeUrl: string;
    encode(_: QueryInflationRateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRateRequest;
    fromJSON(_: any): QueryInflationRateRequest;
    toJSON(_: QueryInflationRateRequest): unknown;
    fromPartial(_: Partial<QueryInflationRateRequest>): QueryInflationRateRequest;
    fromAmino(_: QueryInflationRateRequestAmino): QueryInflationRateRequest;
    toAmino(_: QueryInflationRateRequest): QueryInflationRateRequestAmino;
    fromAminoMsg(object: QueryInflationRateRequestAminoMsg): QueryInflationRateRequest;
    fromProtoMsg(message: QueryInflationRateRequestProtoMsg): QueryInflationRateRequest;
    toProto(message: QueryInflationRateRequest): Uint8Array;
    toProtoMsg(message: QueryInflationRateRequest): QueryInflationRateRequestProtoMsg;
};
export declare const QueryInflationRateResponse: {
    typeUrl: string;
    encode(message: QueryInflationRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRateResponse;
    fromJSON(object: any): QueryInflationRateResponse;
    toJSON(message: QueryInflationRateResponse): unknown;
    fromPartial(object: Partial<QueryInflationRateResponse>): QueryInflationRateResponse;
    fromAmino(object: QueryInflationRateResponseAmino): QueryInflationRateResponse;
    toAmino(message: QueryInflationRateResponse): QueryInflationRateResponseAmino;
    fromAminoMsg(object: QueryInflationRateResponseAminoMsg): QueryInflationRateResponse;
    fromProtoMsg(message: QueryInflationRateResponseProtoMsg): QueryInflationRateResponse;
    toProto(message: QueryInflationRateResponse): Uint8Array;
    toProtoMsg(message: QueryInflationRateResponse): QueryInflationRateResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
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
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
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
