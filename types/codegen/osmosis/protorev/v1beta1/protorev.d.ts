import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutes {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arbRoutes: Route[];
    /** Token denomination of the first asset */
    tokenIn: string;
    /** Token denomination of the second asset */
    tokenOut: string;
}
export interface TokenPairArbRoutesProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.TokenPairArbRoutes";
    value: Uint8Array;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesAmino {
    /** Stores all of the possible hot paths for a given pair of tokens */
    arb_routes: RouteAmino[];
    /** Token denomination of the first asset */
    token_in: string;
    /** Token denomination of the second asset */
    token_out: string;
}
export interface TokenPairArbRoutesAminoMsg {
    type: "osmosis/protorev/token-pair-arb-routes";
    value: TokenPairArbRoutesAmino;
}
/** TokenPairArbRoutes tracks all of the hot routes for a given pair of tokens */
export interface TokenPairArbRoutesSDKType {
    arb_routes: RouteSDKType[];
    token_in: string;
    token_out: string;
}
/** Route is a hot route for a given pair of tokens */
export interface Route {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: Trade[];
}
export interface RouteProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.Route";
    value: Uint8Array;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteAmino {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    trades: TradeAmino[];
}
export interface RouteAminoMsg {
    type: "osmosis/protorev/route";
    value: RouteAmino;
}
/** Route is a hot route for a given pair of tokens */
export interface RouteSDKType {
    trades: TradeSDKType[];
}
/** Trade is a single trade in a route */
export interface Trade {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    pool: bigint;
    /** The denom of token A that is traded */
    tokenIn: string;
    /** The denom of token B that is traded */
    tokenOut: string;
}
export interface TradeProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.Trade";
    value: Uint8Array;
}
/** Trade is a single trade in a route */
export interface TradeAmino {
    /**
     * The pool IDs that are travered in the directed cyclic graph (traversed left
     * -> right)
     */
    pool: string;
    /** The denom of token A that is traded */
    token_in: string;
    /** The denom of token B that is traded */
    token_out: string;
}
export interface TradeAminoMsg {
    type: "osmosis/protorev/trade";
    value: TradeAmino;
}
/** Trade is a single trade in a route */
export interface TradeSDKType {
    pool: bigint;
    token_in: string;
    token_out: string;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatistics {
    /** profits is the total profit from all trades on this pool */
    profits: Coin[];
    /** number_of_trades is the number of trades the module has executed */
    numberOfTrades: string;
    /** pool_id is the id of the pool */
    poolId: bigint;
}
export interface PoolStatisticsProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.PoolStatistics";
    value: Uint8Array;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatisticsAmino {
    /** profits is the total profit from all trades on this pool */
    profits: CoinAmino[];
    /** number_of_trades is the number of trades the module has executed */
    number_of_trades: string;
    /** pool_id is the id of the pool */
    pool_id: string;
}
export interface PoolStatisticsAminoMsg {
    type: "osmosis/protorev/pool-statistics";
    value: PoolStatisticsAmino;
}
/**
 * PoolStatistics contains the number of trades the module has executed after a
 * swap on a given pool and the profits from the trades
 */
export interface PoolStatisticsSDKType {
    profits: CoinSDKType[];
    number_of_trades: string;
    pool_id: bigint;
}
export declare const TokenPairArbRoutes: {
    typeUrl: string;
    encode(message: TokenPairArbRoutes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TokenPairArbRoutes;
    fromJSON(object: any): TokenPairArbRoutes;
    toJSON(message: TokenPairArbRoutes): unknown;
    fromPartial(object: Partial<TokenPairArbRoutes>): TokenPairArbRoutes;
    fromAmino(object: TokenPairArbRoutesAmino): TokenPairArbRoutes;
    toAmino(message: TokenPairArbRoutes): TokenPairArbRoutesAmino;
    fromAminoMsg(object: TokenPairArbRoutesAminoMsg): TokenPairArbRoutes;
    toAminoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesAminoMsg;
    fromProtoMsg(message: TokenPairArbRoutesProtoMsg): TokenPairArbRoutes;
    toProto(message: TokenPairArbRoutes): Uint8Array;
    toProtoMsg(message: TokenPairArbRoutes): TokenPairArbRoutesProtoMsg;
};
export declare const Route: {
    typeUrl: string;
    encode(message: Route, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Route;
    fromJSON(object: any): Route;
    toJSON(message: Route): unknown;
    fromPartial(object: Partial<Route>): Route;
    fromAmino(object: RouteAmino): Route;
    toAmino(message: Route): RouteAmino;
    fromAminoMsg(object: RouteAminoMsg): Route;
    toAminoMsg(message: Route): RouteAminoMsg;
    fromProtoMsg(message: RouteProtoMsg): Route;
    toProto(message: Route): Uint8Array;
    toProtoMsg(message: Route): RouteProtoMsg;
};
export declare const Trade: {
    typeUrl: string;
    encode(message: Trade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Trade;
    fromJSON(object: any): Trade;
    toJSON(message: Trade): unknown;
    fromPartial(object: Partial<Trade>): Trade;
    fromAmino(object: TradeAmino): Trade;
    toAmino(message: Trade): TradeAmino;
    fromAminoMsg(object: TradeAminoMsg): Trade;
    toAminoMsg(message: Trade): TradeAminoMsg;
    fromProtoMsg(message: TradeProtoMsg): Trade;
    toProto(message: Trade): Uint8Array;
    toProtoMsg(message: Trade): TradeProtoMsg;
};
export declare const PoolStatistics: {
    typeUrl: string;
    encode(message: PoolStatistics, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolStatistics;
    fromJSON(object: any): PoolStatistics;
    toJSON(message: PoolStatistics): unknown;
    fromPartial(object: Partial<PoolStatistics>): PoolStatistics;
    fromAmino(object: PoolStatisticsAmino): PoolStatistics;
    toAmino(message: PoolStatistics): PoolStatisticsAmino;
    fromAminoMsg(object: PoolStatisticsAminoMsg): PoolStatistics;
    toAminoMsg(message: PoolStatistics): PoolStatisticsAminoMsg;
    fromProtoMsg(message: PoolStatisticsProtoMsg): PoolStatistics;
    toProto(message: PoolStatistics): Uint8Array;
    toProtoMsg(message: PoolStatistics): PoolStatisticsProtoMsg;
};
