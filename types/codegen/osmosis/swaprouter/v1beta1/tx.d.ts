import { SwapAmountInRoute, SwapAmountInRouteAmino, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteAmino, SwapAmountOutRouteSDKType } from "./swap_route";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn: Coin;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn";
    value: Uint8Array;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInAmino {
    sender: string;
    routes: SwapAmountInRouteAmino[];
    token_in?: CoinAmino;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInAminoMsg {
    type: "osmosis/swaprouter/swap-exact-amount-in";
    value: MsgSwapExactAmountInAmino;
}
/** ===================== MsgSwapExactAmountIn */
export interface MsgSwapExactAmountInSDKType {
    sender: string;
    routes: SwapAmountInRouteSDKType[];
    token_in: CoinSDKType;
    token_out_min_amount: string;
}
export interface MsgSwapExactAmountInResponse {
    tokenOutAmount: string;
}
export interface MsgSwapExactAmountInResponseProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountInResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountInResponseAmino {
    token_out_amount: string;
}
export interface MsgSwapExactAmountInResponseAminoMsg {
    type: "osmosis/swaprouter/swap-exact-amount-in-response";
    value: MsgSwapExactAmountInResponseAmino;
}
export interface MsgSwapExactAmountInResponseSDKType {
    token_out_amount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut: Coin;
}
export interface MsgSwapExactAmountOutProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut";
    value: Uint8Array;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutAmino {
    sender: string;
    routes: SwapAmountOutRouteAmino[];
    token_in_max_amount: string;
    token_out?: CoinAmino;
}
export interface MsgSwapExactAmountOutAminoMsg {
    type: "osmosis/swaprouter/swap-exact-amount-out";
    value: MsgSwapExactAmountOutAmino;
}
/** ===================== MsgSwapExactAmountOut */
export interface MsgSwapExactAmountOutSDKType {
    sender: string;
    routes: SwapAmountOutRouteSDKType[];
    token_in_max_amount: string;
    token_out: CoinSDKType;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface MsgSwapExactAmountOutResponseProtoMsg {
    typeUrl: "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOutResponse";
    value: Uint8Array;
}
export interface MsgSwapExactAmountOutResponseAmino {
    token_in_amount: string;
}
export interface MsgSwapExactAmountOutResponseAminoMsg {
    type: "osmosis/swaprouter/swap-exact-amount-out-response";
    value: MsgSwapExactAmountOutResponseAmino;
}
export interface MsgSwapExactAmountOutResponseSDKType {
    token_in_amount: string;
}
export declare const MsgSwapExactAmountIn: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountIn, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromJSON(object: any): MsgSwapExactAmountIn;
    toJSON(message: MsgSwapExactAmountIn): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountIn>): MsgSwapExactAmountIn;
    fromAmino(object: MsgSwapExactAmountInAmino): MsgSwapExactAmountIn;
    toAmino(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAmino;
    fromAminoMsg(object: MsgSwapExactAmountInAminoMsg): MsgSwapExactAmountIn;
    toAminoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInProtoMsg): MsgSwapExactAmountIn;
    toProto(message: MsgSwapExactAmountIn): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountIn): MsgSwapExactAmountInProtoMsg;
};
export declare const MsgSwapExactAmountInResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountInResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromJSON(object: any): MsgSwapExactAmountInResponse;
    toJSON(message: MsgSwapExactAmountInResponse): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountInResponse>): MsgSwapExactAmountInResponse;
    fromAmino(object: MsgSwapExactAmountInResponseAmino): MsgSwapExactAmountInResponse;
    toAmino(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAmino;
    fromAminoMsg(object: MsgSwapExactAmountInResponseAminoMsg): MsgSwapExactAmountInResponse;
    toAminoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountInResponseProtoMsg): MsgSwapExactAmountInResponse;
    toProto(message: MsgSwapExactAmountInResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountInResponse): MsgSwapExactAmountInResponseProtoMsg;
};
export declare const MsgSwapExactAmountOut: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOut, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromJSON(object: any): MsgSwapExactAmountOut;
    toJSON(message: MsgSwapExactAmountOut): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountOut>): MsgSwapExactAmountOut;
    fromAmino(object: MsgSwapExactAmountOutAmino): MsgSwapExactAmountOut;
    toAmino(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAmino;
    fromAminoMsg(object: MsgSwapExactAmountOutAminoMsg): MsgSwapExactAmountOut;
    toAminoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountOutProtoMsg): MsgSwapExactAmountOut;
    toProto(message: MsgSwapExactAmountOut): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountOut): MsgSwapExactAmountOutProtoMsg;
};
export declare const MsgSwapExactAmountOutResponse: {
    typeUrl: string;
    encode(message: MsgSwapExactAmountOutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromJSON(object: any): MsgSwapExactAmountOutResponse;
    toJSON(message: MsgSwapExactAmountOutResponse): unknown;
    fromPartial(object: Partial<MsgSwapExactAmountOutResponse>): MsgSwapExactAmountOutResponse;
    fromAmino(object: MsgSwapExactAmountOutResponseAmino): MsgSwapExactAmountOutResponse;
    toAmino(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAmino;
    fromAminoMsg(object: MsgSwapExactAmountOutResponseAminoMsg): MsgSwapExactAmountOutResponse;
    toAminoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseAminoMsg;
    fromProtoMsg(message: MsgSwapExactAmountOutResponseProtoMsg): MsgSwapExactAmountOutResponse;
    toProto(message: MsgSwapExactAmountOutResponse): Uint8Array;
    toProtoMsg(message: MsgSwapExactAmountOutResponse): MsgSwapExactAmountOutResponseProtoMsg;
};
