import { BinaryReader, BinaryWriter } from "../../../binary";
export interface SwapAmountInRoute {
    poolId: bigint;
    tokenOutDenom: string;
}
export interface SwapAmountInRouteProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountInRoute";
    value: Uint8Array;
}
export interface SwapAmountInRouteAmino {
    pool_id: string;
    token_out_denom: string;
}
export interface SwapAmountInRouteAminoMsg {
    type: "osmosis/swaprouter/swap-amount-in-route";
    value: SwapAmountInRouteAmino;
}
export interface SwapAmountInRouteSDKType {
    pool_id: bigint;
    token_out_denom: string;
}
export interface SwapAmountOutRoute {
    poolId: bigint;
    tokenInDenom: string;
}
export interface SwapAmountOutRouteProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.SwapAmountOutRoute";
    value: Uint8Array;
}
export interface SwapAmountOutRouteAmino {
    pool_id: string;
    token_in_denom: string;
}
export interface SwapAmountOutRouteAminoMsg {
    type: "osmosis/swaprouter/swap-amount-out-route";
    value: SwapAmountOutRouteAmino;
}
export interface SwapAmountOutRouteSDKType {
    pool_id: bigint;
    token_in_denom: string;
}
export declare const SwapAmountInRoute: {
    typeUrl: string;
    encode(message: SwapAmountInRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountInRoute;
    fromJSON(object: any): SwapAmountInRoute;
    toJSON(message: SwapAmountInRoute): unknown;
    fromPartial(object: Partial<SwapAmountInRoute>): SwapAmountInRoute;
    fromAmino(object: SwapAmountInRouteAmino): SwapAmountInRoute;
    toAmino(message: SwapAmountInRoute): SwapAmountInRouteAmino;
    fromAminoMsg(object: SwapAmountInRouteAminoMsg): SwapAmountInRoute;
    toAminoMsg(message: SwapAmountInRoute): SwapAmountInRouteAminoMsg;
    fromProtoMsg(message: SwapAmountInRouteProtoMsg): SwapAmountInRoute;
    toProto(message: SwapAmountInRoute): Uint8Array;
    toProtoMsg(message: SwapAmountInRoute): SwapAmountInRouteProtoMsg;
};
export declare const SwapAmountOutRoute: {
    typeUrl: string;
    encode(message: SwapAmountOutRoute, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromJSON(object: any): SwapAmountOutRoute;
    toJSON(message: SwapAmountOutRoute): unknown;
    fromPartial(object: Partial<SwapAmountOutRoute>): SwapAmountOutRoute;
    fromAmino(object: SwapAmountOutRouteAmino): SwapAmountOutRoute;
    toAmino(message: SwapAmountOutRoute): SwapAmountOutRouteAmino;
    fromAminoMsg(object: SwapAmountOutRouteAminoMsg): SwapAmountOutRoute;
    toAminoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteAminoMsg;
    fromProtoMsg(message: SwapAmountOutRouteProtoMsg): SwapAmountOutRoute;
    toProto(message: SwapAmountOutRoute): Uint8Array;
    toProtoMsg(message: SwapAmountOutRoute): SwapAmountOutRouteProtoMsg;
};
