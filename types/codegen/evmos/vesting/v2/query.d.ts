import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequest {
    /** address of the clawback vesting account */
    address: string;
}
export interface QueryBalancesRequestProtoMsg {
    typeUrl: "/evmos.vesting.v2.QueryBalancesRequest";
    value: Uint8Array;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequestAmino {
    /** address of the clawback vesting account */
    address?: string;
}
export interface QueryBalancesRequestAminoMsg {
    type: "/evmos.vesting.v2.QueryBalancesRequest";
    value: QueryBalancesRequestAmino;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequestSDKType {
    address: string;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponse {
    /** locked defines the current amount of locked tokens */
    locked: Coin[];
    /** unvested defines the current amount of unvested tokens */
    unvested: Coin[];
    /** vested defines the current amount of vested tokens */
    vested: Coin[];
}
export interface QueryBalancesResponseProtoMsg {
    typeUrl: "/evmos.vesting.v2.QueryBalancesResponse";
    value: Uint8Array;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponseAmino {
    /** locked defines the current amount of locked tokens */
    locked?: CoinAmino[];
    /** unvested defines the current amount of unvested tokens */
    unvested?: CoinAmino[];
    /** vested defines the current amount of vested tokens */
    vested?: CoinAmino[];
}
export interface QueryBalancesResponseAminoMsg {
    type: "/evmos.vesting.v2.QueryBalancesResponse";
    value: QueryBalancesResponseAmino;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponseSDKType {
    locked: CoinSDKType[];
    unvested: CoinSDKType[];
    vested: CoinSDKType[];
}
export declare const QueryBalancesRequest: {
    typeUrl: string;
    encode(message: QueryBalancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesRequest;
    fromJSON(object: any): QueryBalancesRequest;
    toJSON(message: QueryBalancesRequest): unknown;
    fromPartial(object: Partial<QueryBalancesRequest>): QueryBalancesRequest;
    fromAmino(object: QueryBalancesRequestAmino): QueryBalancesRequest;
    toAmino(message: QueryBalancesRequest): QueryBalancesRequestAmino;
    fromAminoMsg(object: QueryBalancesRequestAminoMsg): QueryBalancesRequest;
    fromProtoMsg(message: QueryBalancesRequestProtoMsg): QueryBalancesRequest;
    toProto(message: QueryBalancesRequest): Uint8Array;
    toProtoMsg(message: QueryBalancesRequest): QueryBalancesRequestProtoMsg;
};
export declare const QueryBalancesResponse: {
    typeUrl: string;
    encode(message: QueryBalancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBalancesResponse;
    fromJSON(object: any): QueryBalancesResponse;
    toJSON(message: QueryBalancesResponse): unknown;
    fromPartial(object: Partial<QueryBalancesResponse>): QueryBalancesResponse;
    fromAmino(object: QueryBalancesResponseAmino): QueryBalancesResponse;
    toAmino(message: QueryBalancesResponse): QueryBalancesResponseAmino;
    fromAminoMsg(object: QueryBalancesResponseAminoMsg): QueryBalancesResponse;
    fromProtoMsg(message: QueryBalancesResponseProtoMsg): QueryBalancesResponse;
    toProto(message: QueryBalancesResponse): Uint8Array;
    toProtoMsg(message: QueryBalancesResponse): QueryBalancesResponseProtoMsg;
};
