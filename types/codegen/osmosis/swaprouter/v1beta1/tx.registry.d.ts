import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSwapExactAmountIn, MsgSwapExactAmountOut } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: Uint8Array;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: MsgSwapExactAmountIn;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: MsgSwapExactAmountOut;
        };
    };
    toJSON: {
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: unknown;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        swapExactAmountIn(value: any): {
            typeUrl: string;
            value: MsgSwapExactAmountIn;
        };
        swapExactAmountOut(value: any): {
            typeUrl: string;
            value: MsgSwapExactAmountOut;
        };
    };
    fromPartial: {
        swapExactAmountIn(value: MsgSwapExactAmountIn): {
            typeUrl: string;
            value: MsgSwapExactAmountIn;
        };
        swapExactAmountOut(value: MsgSwapExactAmountOut): {
            typeUrl: string;
            value: MsgSwapExactAmountOut;
        };
    };
};
