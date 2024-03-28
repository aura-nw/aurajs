import * as _230 from "./epochs/v1/genesis";
import * as _231 from "./epochs/v1/query";
import * as _232 from "./erc20/v1/erc20";
import * as _233 from "./erc20/v1/events";
import * as _234 from "./erc20/v1/genesis";
import * as _235 from "./erc20/v1/query";
import * as _236 from "./erc20/v1/tx";
import * as _237 from "./incentives/v1/genesis";
import * as _238 from "./incentives/v1/incentives";
import * as _239 from "./inflation/v1/genesis";
import * as _240 from "./inflation/v1/inflation";
import * as _241 from "./inflation/v1/query";
import * as _242 from "./inflation/v1/tx";
import * as _243 from "./revenue/v1/events";
import * as _244 from "./revenue/v1/genesis";
import * as _245 from "./revenue/v1/query";
import * as _246 from "./revenue/v1/revenue";
import * as _247 from "./revenue/v1/tx";
import * as _248 from "./vesting/v1/vesting";
import * as _249 from "./vesting/v2/events";
import * as _250 from "./vesting/v2/query";
import * as _251 from "./vesting/v2/tx";
import * as _252 from "./vesting/v2/vesting";
import * as _406 from "./epochs/v1/query.lcd";
import * as _407 from "./erc20/v1/query.lcd";
import * as _408 from "./inflation/v1/query.lcd";
import * as _409 from "./revenue/v1/query.lcd";
import * as _410 from "./vesting/v2/query.lcd";
import * as _411 from "./epochs/v1/query.rpc.Query";
import * as _412 from "./erc20/v1/query.rpc.Query";
import * as _413 from "./inflation/v1/query.rpc.Query";
import * as _414 from "./revenue/v1/query.rpc.Query";
import * as _415 from "./vesting/v2/query.rpc.Query";
import * as _416 from "./erc20/v1/tx.rpc.msg";
import * as _417 from "./inflation/v1/tx.rpc.msg";
import * as _418 from "./revenue/v1/tx.rpc.msg";
import * as _419 from "./vesting/v2/tx.rpc.msg";
export declare namespace evmos {
    namespace epochs {
        const v1: {
            QueryClientImpl: typeof _411.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _231.QueryEpochsInfoRequest): Promise<_231.QueryEpochsInfoResponse>;
                currentEpoch(request: _231.QueryCurrentEpochRequest): Promise<_231.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _406.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(message: _231.QueryEpochsInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryEpochsInfoRequest;
                fromJSON(object: any): _231.QueryEpochsInfoRequest;
                toJSON(message: _231.QueryEpochsInfoRequest): unknown;
                fromPartial(object: Partial<_231.QueryEpochsInfoRequest>): _231.QueryEpochsInfoRequest;
                fromAmino(object: _231.QueryEpochsInfoRequestAmino): _231.QueryEpochsInfoRequest;
                toAmino(message: _231.QueryEpochsInfoRequest): _231.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _231.QueryEpochsInfoRequestAminoMsg): _231.QueryEpochsInfoRequest;
                fromProtoMsg(message: _231.QueryEpochsInfoRequestProtoMsg): _231.QueryEpochsInfoRequest;
                toProto(message: _231.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _231.QueryEpochsInfoRequest): _231.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _231.QueryEpochsInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryEpochsInfoResponse;
                fromJSON(object: any): _231.QueryEpochsInfoResponse;
                toJSON(message: _231.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_231.QueryEpochsInfoResponse>): _231.QueryEpochsInfoResponse;
                fromAmino(object: _231.QueryEpochsInfoResponseAmino): _231.QueryEpochsInfoResponse;
                toAmino(message: _231.QueryEpochsInfoResponse): _231.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _231.QueryEpochsInfoResponseAminoMsg): _231.QueryEpochsInfoResponse;
                fromProtoMsg(message: _231.QueryEpochsInfoResponseProtoMsg): _231.QueryEpochsInfoResponse;
                toProto(message: _231.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _231.QueryEpochsInfoResponse): _231.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _231.QueryCurrentEpochRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryCurrentEpochRequest;
                fromJSON(object: any): _231.QueryCurrentEpochRequest;
                toJSON(message: _231.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_231.QueryCurrentEpochRequest>): _231.QueryCurrentEpochRequest;
                fromAmino(object: _231.QueryCurrentEpochRequestAmino): _231.QueryCurrentEpochRequest;
                toAmino(message: _231.QueryCurrentEpochRequest): _231.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _231.QueryCurrentEpochRequestAminoMsg): _231.QueryCurrentEpochRequest;
                fromProtoMsg(message: _231.QueryCurrentEpochRequestProtoMsg): _231.QueryCurrentEpochRequest;
                toProto(message: _231.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _231.QueryCurrentEpochRequest): _231.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _231.QueryCurrentEpochResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryCurrentEpochResponse;
                fromJSON(object: any): _231.QueryCurrentEpochResponse;
                toJSON(message: _231.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_231.QueryCurrentEpochResponse>): _231.QueryCurrentEpochResponse;
                fromAmino(object: _231.QueryCurrentEpochResponseAmino): _231.QueryCurrentEpochResponse;
                toAmino(message: _231.QueryCurrentEpochResponse): _231.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _231.QueryCurrentEpochResponseAminoMsg): _231.QueryCurrentEpochResponse;
                fromProtoMsg(message: _231.QueryCurrentEpochResponseProtoMsg): _231.QueryCurrentEpochResponse;
                toProto(message: _231.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _231.QueryCurrentEpochResponse): _231.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _230.EpochInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.EpochInfo;
                fromJSON(object: any): _230.EpochInfo;
                toJSON(message: _230.EpochInfo): unknown;
                fromPartial(object: Partial<_230.EpochInfo>): _230.EpochInfo;
                fromAmino(object: _230.EpochInfoAmino): _230.EpochInfo;
                toAmino(message: _230.EpochInfo): _230.EpochInfoAmino;
                fromAminoMsg(object: _230.EpochInfoAminoMsg): _230.EpochInfo;
                fromProtoMsg(message: _230.EpochInfoProtoMsg): _230.EpochInfo;
                toProto(message: _230.EpochInfo): Uint8Array;
                toProtoMsg(message: _230.EpochInfo): _230.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _230.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.GenesisState;
                fromJSON(object: any): _230.GenesisState;
                toJSON(message: _230.GenesisState): unknown;
                fromPartial(object: Partial<_230.GenesisState>): _230.GenesisState;
                fromAmino(object: _230.GenesisStateAmino): _230.GenesisState;
                toAmino(message: _230.GenesisState): _230.GenesisStateAmino;
                fromAminoMsg(object: _230.GenesisStateAminoMsg): _230.GenesisState;
                fromProtoMsg(message: _230.GenesisStateProtoMsg): _230.GenesisState;
                toProto(message: _230.GenesisState): Uint8Array;
                toProtoMsg(message: _230.GenesisState): _230.GenesisStateProtoMsg;
            };
        };
    }
    namespace erc20 {
        const v1: {
            MsgClientImpl: typeof _416.MsgClientImpl;
            QueryClientImpl: typeof _412.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                tokenPairs(request?: _235.QueryTokenPairsRequest): Promise<_235.QueryTokenPairsResponse>;
                tokenPair(request: _235.QueryTokenPairRequest): Promise<_235.QueryTokenPairResponse>;
                params(request?: _235.QueryParamsRequest): Promise<_235.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _407.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    convertCoin(value: _236.MsgConvertCoin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertERC20(value: _236.MsgConvertERC20): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _236.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    convertCoin(value: _236.MsgConvertCoin): {
                        typeUrl: string;
                        value: _236.MsgConvertCoin;
                    };
                    convertERC20(value: _236.MsgConvertERC20): {
                        typeUrl: string;
                        value: _236.MsgConvertERC20;
                    };
                    updateParams(value: _236.MsgUpdateParams): {
                        typeUrl: string;
                        value: _236.MsgUpdateParams;
                    };
                };
                toJSON: {
                    convertCoin(value: _236.MsgConvertCoin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertERC20(value: _236.MsgConvertERC20): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _236.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    convertCoin(value: any): {
                        typeUrl: string;
                        value: _236.MsgConvertCoin;
                    };
                    convertERC20(value: any): {
                        typeUrl: string;
                        value: _236.MsgConvertERC20;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _236.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    convertCoin(value: _236.MsgConvertCoin): {
                        typeUrl: string;
                        value: _236.MsgConvertCoin;
                    };
                    convertERC20(value: _236.MsgConvertERC20): {
                        typeUrl: string;
                        value: _236.MsgConvertERC20;
                    };
                    updateParams(value: _236.MsgUpdateParams): {
                        typeUrl: string;
                        value: _236.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.erc20.v1.MsgConvertCoin": {
                    aminoType: string;
                    toAmino: (message: _236.MsgConvertCoin) => _236.MsgConvertCoinAmino;
                    fromAmino: (object: _236.MsgConvertCoinAmino) => _236.MsgConvertCoin;
                };
                "/evmos.erc20.v1.MsgConvertERC20": {
                    aminoType: string;
                    toAmino: (message: _236.MsgConvertERC20) => _236.MsgConvertERC20Amino;
                    fromAmino: (object: _236.MsgConvertERC20Amino) => _236.MsgConvertERC20;
                };
                "/evmos.erc20.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _236.MsgUpdateParams) => _236.MsgUpdateParamsAmino;
                    fromAmino: (object: _236.MsgUpdateParamsAmino) => _236.MsgUpdateParams;
                };
            };
            MsgConvertCoin: {
                typeUrl: string;
                encode(message: _236.MsgConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgConvertCoin;
                fromJSON(object: any): _236.MsgConvertCoin;
                toJSON(message: _236.MsgConvertCoin): unknown;
                fromPartial(object: Partial<_236.MsgConvertCoin>): _236.MsgConvertCoin;
                fromAmino(object: _236.MsgConvertCoinAmino): _236.MsgConvertCoin;
                toAmino(message: _236.MsgConvertCoin): _236.MsgConvertCoinAmino;
                fromAminoMsg(object: _236.MsgConvertCoinAminoMsg): _236.MsgConvertCoin;
                fromProtoMsg(message: _236.MsgConvertCoinProtoMsg): _236.MsgConvertCoin;
                toProto(message: _236.MsgConvertCoin): Uint8Array;
                toProtoMsg(message: _236.MsgConvertCoin): _236.MsgConvertCoinProtoMsg;
            };
            MsgConvertCoinResponse: {
                typeUrl: string;
                encode(_: _236.MsgConvertCoinResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgConvertCoinResponse;
                fromJSON(_: any): _236.MsgConvertCoinResponse;
                toJSON(_: _236.MsgConvertCoinResponse): unknown;
                fromPartial(_: Partial<_236.MsgConvertCoinResponse>): _236.MsgConvertCoinResponse;
                fromAmino(_: _236.MsgConvertCoinResponseAmino): _236.MsgConvertCoinResponse;
                toAmino(_: _236.MsgConvertCoinResponse): _236.MsgConvertCoinResponseAmino;
                fromAminoMsg(object: _236.MsgConvertCoinResponseAminoMsg): _236.MsgConvertCoinResponse;
                fromProtoMsg(message: _236.MsgConvertCoinResponseProtoMsg): _236.MsgConvertCoinResponse;
                toProto(message: _236.MsgConvertCoinResponse): Uint8Array;
                toProtoMsg(message: _236.MsgConvertCoinResponse): _236.MsgConvertCoinResponseProtoMsg;
            };
            MsgConvertERC20: {
                typeUrl: string;
                encode(message: _236.MsgConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgConvertERC20;
                fromJSON(object: any): _236.MsgConvertERC20;
                toJSON(message: _236.MsgConvertERC20): unknown;
                fromPartial(object: Partial<_236.MsgConvertERC20>): _236.MsgConvertERC20;
                fromAmino(object: _236.MsgConvertERC20Amino): _236.MsgConvertERC20;
                toAmino(message: _236.MsgConvertERC20): _236.MsgConvertERC20Amino;
                fromAminoMsg(object: _236.MsgConvertERC20AminoMsg): _236.MsgConvertERC20;
                fromProtoMsg(message: _236.MsgConvertERC20ProtoMsg): _236.MsgConvertERC20;
                toProto(message: _236.MsgConvertERC20): Uint8Array;
                toProtoMsg(message: _236.MsgConvertERC20): _236.MsgConvertERC20ProtoMsg;
            };
            MsgConvertERC20Response: {
                typeUrl: string;
                encode(_: _236.MsgConvertERC20Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgConvertERC20Response;
                fromJSON(_: any): _236.MsgConvertERC20Response;
                toJSON(_: _236.MsgConvertERC20Response): unknown;
                fromPartial(_: Partial<_236.MsgConvertERC20Response>): _236.MsgConvertERC20Response;
                fromAmino(_: _236.MsgConvertERC20ResponseAmino): _236.MsgConvertERC20Response;
                toAmino(_: _236.MsgConvertERC20Response): _236.MsgConvertERC20ResponseAmino;
                fromAminoMsg(object: _236.MsgConvertERC20ResponseAminoMsg): _236.MsgConvertERC20Response;
                fromProtoMsg(message: _236.MsgConvertERC20ResponseProtoMsg): _236.MsgConvertERC20Response;
                toProto(message: _236.MsgConvertERC20Response): Uint8Array;
                toProtoMsg(message: _236.MsgConvertERC20Response): _236.MsgConvertERC20ResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _236.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgUpdateParams;
                fromJSON(object: any): _236.MsgUpdateParams;
                toJSON(message: _236.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_236.MsgUpdateParams>): _236.MsgUpdateParams;
                fromAmino(object: _236.MsgUpdateParamsAmino): _236.MsgUpdateParams;
                toAmino(message: _236.MsgUpdateParams): _236.MsgUpdateParamsAmino;
                fromAminoMsg(object: _236.MsgUpdateParamsAminoMsg): _236.MsgUpdateParams;
                fromProtoMsg(message: _236.MsgUpdateParamsProtoMsg): _236.MsgUpdateParams;
                toProto(message: _236.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _236.MsgUpdateParams): _236.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _236.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.MsgUpdateParamsResponse;
                fromJSON(_: any): _236.MsgUpdateParamsResponse;
                toJSON(_: _236.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_236.MsgUpdateParamsResponse>): _236.MsgUpdateParamsResponse;
                fromAmino(_: _236.MsgUpdateParamsResponseAmino): _236.MsgUpdateParamsResponse;
                toAmino(_: _236.MsgUpdateParamsResponse): _236.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _236.MsgUpdateParamsResponseAminoMsg): _236.MsgUpdateParamsResponse;
                fromProtoMsg(message: _236.MsgUpdateParamsResponseProtoMsg): _236.MsgUpdateParamsResponse;
                toProto(message: _236.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _236.MsgUpdateParamsResponse): _236.MsgUpdateParamsResponseProtoMsg;
            };
            QueryTokenPairsRequest: {
                typeUrl: string;
                encode(message: _235.QueryTokenPairsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.QueryTokenPairsRequest;
                fromJSON(object: any): _235.QueryTokenPairsRequest;
                toJSON(message: _235.QueryTokenPairsRequest): unknown;
                fromPartial(object: Partial<_235.QueryTokenPairsRequest>): _235.QueryTokenPairsRequest;
                fromAmino(object: _235.QueryTokenPairsRequestAmino): _235.QueryTokenPairsRequest;
                toAmino(message: _235.QueryTokenPairsRequest): _235.QueryTokenPairsRequestAmino;
                fromAminoMsg(object: _235.QueryTokenPairsRequestAminoMsg): _235.QueryTokenPairsRequest;
                fromProtoMsg(message: _235.QueryTokenPairsRequestProtoMsg): _235.QueryTokenPairsRequest;
                toProto(message: _235.QueryTokenPairsRequest): Uint8Array;
                toProtoMsg(message: _235.QueryTokenPairsRequest): _235.QueryTokenPairsRequestProtoMsg;
            };
            QueryTokenPairsResponse: {
                typeUrl: string;
                encode(message: _235.QueryTokenPairsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.QueryTokenPairsResponse;
                fromJSON(object: any): _235.QueryTokenPairsResponse;
                toJSON(message: _235.QueryTokenPairsResponse): unknown;
                fromPartial(object: Partial<_235.QueryTokenPairsResponse>): _235.QueryTokenPairsResponse;
                fromAmino(object: _235.QueryTokenPairsResponseAmino): _235.QueryTokenPairsResponse;
                toAmino(message: _235.QueryTokenPairsResponse): _235.QueryTokenPairsResponseAmino;
                fromAminoMsg(object: _235.QueryTokenPairsResponseAminoMsg): _235.QueryTokenPairsResponse;
                fromProtoMsg(message: _235.QueryTokenPairsResponseProtoMsg): _235.QueryTokenPairsResponse;
                toProto(message: _235.QueryTokenPairsResponse): Uint8Array;
                toProtoMsg(message: _235.QueryTokenPairsResponse): _235.QueryTokenPairsResponseProtoMsg;
            };
            QueryTokenPairRequest: {
                typeUrl: string;
                encode(message: _235.QueryTokenPairRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.QueryTokenPairRequest;
                fromJSON(object: any): _235.QueryTokenPairRequest;
                toJSON(message: _235.QueryTokenPairRequest): unknown;
                fromPartial(object: Partial<_235.QueryTokenPairRequest>): _235.QueryTokenPairRequest;
                fromAmino(object: _235.QueryTokenPairRequestAmino): _235.QueryTokenPairRequest;
                toAmino(message: _235.QueryTokenPairRequest): _235.QueryTokenPairRequestAmino;
                fromAminoMsg(object: _235.QueryTokenPairRequestAminoMsg): _235.QueryTokenPairRequest;
                fromProtoMsg(message: _235.QueryTokenPairRequestProtoMsg): _235.QueryTokenPairRequest;
                toProto(message: _235.QueryTokenPairRequest): Uint8Array;
                toProtoMsg(message: _235.QueryTokenPairRequest): _235.QueryTokenPairRequestProtoMsg;
            };
            QueryTokenPairResponse: {
                typeUrl: string;
                encode(message: _235.QueryTokenPairResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.QueryTokenPairResponse;
                fromJSON(object: any): _235.QueryTokenPairResponse;
                toJSON(message: _235.QueryTokenPairResponse): unknown;
                fromPartial(object: Partial<_235.QueryTokenPairResponse>): _235.QueryTokenPairResponse;
                fromAmino(object: _235.QueryTokenPairResponseAmino): _235.QueryTokenPairResponse;
                toAmino(message: _235.QueryTokenPairResponse): _235.QueryTokenPairResponseAmino;
                fromAminoMsg(object: _235.QueryTokenPairResponseAminoMsg): _235.QueryTokenPairResponse;
                fromProtoMsg(message: _235.QueryTokenPairResponseProtoMsg): _235.QueryTokenPairResponse;
                toProto(message: _235.QueryTokenPairResponse): Uint8Array;
                toProtoMsg(message: _235.QueryTokenPairResponse): _235.QueryTokenPairResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _235.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.QueryParamsRequest;
                fromJSON(_: any): _235.QueryParamsRequest;
                toJSON(_: _235.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_235.QueryParamsRequest>): _235.QueryParamsRequest;
                fromAmino(_: _235.QueryParamsRequestAmino): _235.QueryParamsRequest;
                toAmino(_: _235.QueryParamsRequest): _235.QueryParamsRequestAmino;
                fromAminoMsg(object: _235.QueryParamsRequestAminoMsg): _235.QueryParamsRequest;
                fromProtoMsg(message: _235.QueryParamsRequestProtoMsg): _235.QueryParamsRequest;
                toProto(message: _235.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _235.QueryParamsRequest): _235.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _235.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.QueryParamsResponse;
                fromJSON(object: any): _235.QueryParamsResponse;
                toJSON(message: _235.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_235.QueryParamsResponse>): _235.QueryParamsResponse;
                fromAmino(object: _235.QueryParamsResponseAmino): _235.QueryParamsResponse;
                toAmino(message: _235.QueryParamsResponse): _235.QueryParamsResponseAmino;
                fromAminoMsg(object: _235.QueryParamsResponseAminoMsg): _235.QueryParamsResponse;
                fromProtoMsg(message: _235.QueryParamsResponseProtoMsg): _235.QueryParamsResponse;
                toProto(message: _235.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _235.QueryParamsResponse): _235.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _234.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.GenesisState;
                fromJSON(object: any): _234.GenesisState;
                toJSON(message: _234.GenesisState): unknown;
                fromPartial(object: Partial<_234.GenesisState>): _234.GenesisState;
                fromAmino(object: _234.GenesisStateAmino): _234.GenesisState;
                toAmino(message: _234.GenesisState): _234.GenesisStateAmino;
                fromAminoMsg(object: _234.GenesisStateAminoMsg): _234.GenesisState;
                fromProtoMsg(message: _234.GenesisStateProtoMsg): _234.GenesisState;
                toProto(message: _234.GenesisState): Uint8Array;
                toProtoMsg(message: _234.GenesisState): _234.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _234.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Params;
                fromJSON(object: any): _234.Params;
                toJSON(message: _234.Params): unknown;
                fromPartial(object: Partial<_234.Params>): _234.Params;
                fromAmino(object: _234.ParamsAmino): _234.Params;
                toAmino(message: _234.Params): _234.ParamsAmino;
                fromAminoMsg(object: _234.ParamsAminoMsg): _234.Params;
                fromProtoMsg(message: _234.ParamsProtoMsg): _234.Params;
                toProto(message: _234.Params): Uint8Array;
                toProtoMsg(message: _234.Params): _234.ParamsProtoMsg;
            };
            EventRegisterPair: {
                typeUrl: string;
                encode(message: _233.EventRegisterPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.EventRegisterPair;
                fromJSON(object: any): _233.EventRegisterPair;
                toJSON(message: _233.EventRegisterPair): unknown;
                fromPartial(object: Partial<_233.EventRegisterPair>): _233.EventRegisterPair;
                fromAmino(object: _233.EventRegisterPairAmino): _233.EventRegisterPair;
                toAmino(message: _233.EventRegisterPair): _233.EventRegisterPairAmino;
                fromAminoMsg(object: _233.EventRegisterPairAminoMsg): _233.EventRegisterPair;
                fromProtoMsg(message: _233.EventRegisterPairProtoMsg): _233.EventRegisterPair;
                toProto(message: _233.EventRegisterPair): Uint8Array;
                toProtoMsg(message: _233.EventRegisterPair): _233.EventRegisterPairProtoMsg;
            };
            EventToggleTokenConversion: {
                typeUrl: string;
                encode(message: _233.EventToggleTokenConversion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.EventToggleTokenConversion;
                fromJSON(object: any): _233.EventToggleTokenConversion;
                toJSON(message: _233.EventToggleTokenConversion): unknown;
                fromPartial(object: Partial<_233.EventToggleTokenConversion>): _233.EventToggleTokenConversion;
                fromAmino(object: _233.EventToggleTokenConversionAmino): _233.EventToggleTokenConversion;
                toAmino(message: _233.EventToggleTokenConversion): _233.EventToggleTokenConversionAmino;
                fromAminoMsg(object: _233.EventToggleTokenConversionAminoMsg): _233.EventToggleTokenConversion;
                fromProtoMsg(message: _233.EventToggleTokenConversionProtoMsg): _233.EventToggleTokenConversion;
                toProto(message: _233.EventToggleTokenConversion): Uint8Array;
                toProtoMsg(message: _233.EventToggleTokenConversion): _233.EventToggleTokenConversionProtoMsg;
            };
            EventConvertCoin: {
                typeUrl: string;
                encode(message: _233.EventConvertCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.EventConvertCoin;
                fromJSON(object: any): _233.EventConvertCoin;
                toJSON(message: _233.EventConvertCoin): unknown;
                fromPartial(object: Partial<_233.EventConvertCoin>): _233.EventConvertCoin;
                fromAmino(object: _233.EventConvertCoinAmino): _233.EventConvertCoin;
                toAmino(message: _233.EventConvertCoin): _233.EventConvertCoinAmino;
                fromAminoMsg(object: _233.EventConvertCoinAminoMsg): _233.EventConvertCoin;
                fromProtoMsg(message: _233.EventConvertCoinProtoMsg): _233.EventConvertCoin;
                toProto(message: _233.EventConvertCoin): Uint8Array;
                toProtoMsg(message: _233.EventConvertCoin): _233.EventConvertCoinProtoMsg;
            };
            EventConvertERC20: {
                typeUrl: string;
                encode(message: _233.EventConvertERC20, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.EventConvertERC20;
                fromJSON(object: any): _233.EventConvertERC20;
                toJSON(message: _233.EventConvertERC20): unknown;
                fromPartial(object: Partial<_233.EventConvertERC20>): _233.EventConvertERC20;
                fromAmino(object: _233.EventConvertERC20Amino): _233.EventConvertERC20;
                toAmino(message: _233.EventConvertERC20): _233.EventConvertERC20Amino;
                fromAminoMsg(object: _233.EventConvertERC20AminoMsg): _233.EventConvertERC20;
                fromProtoMsg(message: _233.EventConvertERC20ProtoMsg): _233.EventConvertERC20;
                toProto(message: _233.EventConvertERC20): Uint8Array;
                toProtoMsg(message: _233.EventConvertERC20): _233.EventConvertERC20ProtoMsg;
            };
            ownerFromJSON(object: any): _232.Owner;
            ownerToJSON(object: _232.Owner): string;
            Owner: typeof _232.Owner;
            OwnerSDKType: typeof _232.Owner;
            OwnerAmino: typeof _232.Owner;
            TokenPair: {
                typeUrl: string;
                encode(message: _232.TokenPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.TokenPair;
                fromJSON(object: any): _232.TokenPair;
                toJSON(message: _232.TokenPair): unknown;
                fromPartial(object: Partial<_232.TokenPair>): _232.TokenPair;
                fromAmino(object: _232.TokenPairAmino): _232.TokenPair;
                toAmino(message: _232.TokenPair): _232.TokenPairAmino;
                fromAminoMsg(object: _232.TokenPairAminoMsg): _232.TokenPair;
                fromProtoMsg(message: _232.TokenPairProtoMsg): _232.TokenPair;
                toProto(message: _232.TokenPair): Uint8Array;
                toProtoMsg(message: _232.TokenPair): _232.TokenPairProtoMsg;
            };
            RegisterCoinProposal: {
                typeUrl: string;
                encode(message: _232.RegisterCoinProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.RegisterCoinProposal;
                fromJSON(object: any): _232.RegisterCoinProposal;
                toJSON(message: _232.RegisterCoinProposal): unknown;
                fromPartial(object: Partial<_232.RegisterCoinProposal>): _232.RegisterCoinProposal;
                fromAmino(object: _232.RegisterCoinProposalAmino): _232.RegisterCoinProposal;
                toAmino(message: _232.RegisterCoinProposal): _232.RegisterCoinProposalAmino;
                fromAminoMsg(object: _232.RegisterCoinProposalAminoMsg): _232.RegisterCoinProposal;
                fromProtoMsg(message: _232.RegisterCoinProposalProtoMsg): _232.RegisterCoinProposal;
                toProto(message: _232.RegisterCoinProposal): Uint8Array;
                toProtoMsg(message: _232.RegisterCoinProposal): _232.RegisterCoinProposalProtoMsg;
            };
            RegisterERC20Proposal: {
                typeUrl: string;
                encode(message: _232.RegisterERC20Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.RegisterERC20Proposal;
                fromJSON(object: any): _232.RegisterERC20Proposal;
                toJSON(message: _232.RegisterERC20Proposal): unknown;
                fromPartial(object: Partial<_232.RegisterERC20Proposal>): _232.RegisterERC20Proposal;
                fromAmino(object: _232.RegisterERC20ProposalAmino): _232.RegisterERC20Proposal;
                toAmino(message: _232.RegisterERC20Proposal): _232.RegisterERC20ProposalAmino;
                fromAminoMsg(object: _232.RegisterERC20ProposalAminoMsg): _232.RegisterERC20Proposal;
                fromProtoMsg(message: _232.RegisterERC20ProposalProtoMsg): _232.RegisterERC20Proposal;
                toProto(message: _232.RegisterERC20Proposal): Uint8Array;
                toProtoMsg(message: _232.RegisterERC20Proposal): _232.RegisterERC20ProposalProtoMsg;
            };
            ToggleTokenConversionProposal: {
                typeUrl: string;
                encode(message: _232.ToggleTokenConversionProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.ToggleTokenConversionProposal;
                fromJSON(object: any): _232.ToggleTokenConversionProposal;
                toJSON(message: _232.ToggleTokenConversionProposal): unknown;
                fromPartial(object: Partial<_232.ToggleTokenConversionProposal>): _232.ToggleTokenConversionProposal;
                fromAmino(object: _232.ToggleTokenConversionProposalAmino): _232.ToggleTokenConversionProposal;
                toAmino(message: _232.ToggleTokenConversionProposal): _232.ToggleTokenConversionProposalAmino;
                fromAminoMsg(object: _232.ToggleTokenConversionProposalAminoMsg): _232.ToggleTokenConversionProposal;
                fromProtoMsg(message: _232.ToggleTokenConversionProposalProtoMsg): _232.ToggleTokenConversionProposal;
                toProto(message: _232.ToggleTokenConversionProposal): Uint8Array;
                toProtoMsg(message: _232.ToggleTokenConversionProposal): _232.ToggleTokenConversionProposalProtoMsg;
            };
            ProposalMetadata: {
                typeUrl: string;
                encode(message: _232.ProposalMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.ProposalMetadata;
                fromJSON(object: any): _232.ProposalMetadata;
                toJSON(message: _232.ProposalMetadata): unknown;
                fromPartial(object: Partial<_232.ProposalMetadata>): _232.ProposalMetadata;
                fromAmino(object: _232.ProposalMetadataAmino): _232.ProposalMetadata;
                toAmino(message: _232.ProposalMetadata): _232.ProposalMetadataAmino;
                fromAminoMsg(object: _232.ProposalMetadataAminoMsg): _232.ProposalMetadata;
                fromProtoMsg(message: _232.ProposalMetadataProtoMsg): _232.ProposalMetadata;
                toProto(message: _232.ProposalMetadata): Uint8Array;
                toProtoMsg(message: _232.ProposalMetadata): _232.ProposalMetadataProtoMsg;
            };
        };
    }
    namespace incentives {
        const v1: {
            Incentive: {
                typeUrl: string;
                encode(message: _238.Incentive, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Incentive;
                fromJSON(object: any): _238.Incentive;
                toJSON(message: _238.Incentive): unknown;
                fromPartial(object: Partial<_238.Incentive>): _238.Incentive;
                fromAmino(object: _238.IncentiveAmino): _238.Incentive;
                toAmino(message: _238.Incentive): _238.IncentiveAmino;
                fromAminoMsg(object: _238.IncentiveAminoMsg): _238.Incentive;
                fromProtoMsg(message: _238.IncentiveProtoMsg): _238.Incentive;
                toProto(message: _238.Incentive): Uint8Array;
                toProtoMsg(message: _238.Incentive): _238.IncentiveProtoMsg;
            };
            GasMeter: {
                typeUrl: string;
                encode(message: _238.GasMeter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.GasMeter;
                fromJSON(object: any): _238.GasMeter;
                toJSON(message: _238.GasMeter): unknown;
                fromPartial(object: Partial<_238.GasMeter>): _238.GasMeter;
                fromAmino(object: _238.GasMeterAmino): _238.GasMeter;
                toAmino(message: _238.GasMeter): _238.GasMeterAmino;
                fromAminoMsg(object: _238.GasMeterAminoMsg): _238.GasMeter;
                fromProtoMsg(message: _238.GasMeterProtoMsg): _238.GasMeter;
                toProto(message: _238.GasMeter): Uint8Array;
                toProtoMsg(message: _238.GasMeter): _238.GasMeterProtoMsg;
            };
            RegisterIncentiveProposal: {
                typeUrl: string;
                encode(message: _238.RegisterIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.RegisterIncentiveProposal;
                fromJSON(object: any): _238.RegisterIncentiveProposal;
                toJSON(message: _238.RegisterIncentiveProposal): unknown;
                fromPartial(object: Partial<_238.RegisterIncentiveProposal>): _238.RegisterIncentiveProposal;
                fromAmino(object: _238.RegisterIncentiveProposalAmino): _238.RegisterIncentiveProposal;
                toAmino(message: _238.RegisterIncentiveProposal): _238.RegisterIncentiveProposalAmino;
                fromAminoMsg(object: _238.RegisterIncentiveProposalAminoMsg): _238.RegisterIncentiveProposal;
                fromProtoMsg(message: _238.RegisterIncentiveProposalProtoMsg): _238.RegisterIncentiveProposal;
                toProto(message: _238.RegisterIncentiveProposal): Uint8Array;
                toProtoMsg(message: _238.RegisterIncentiveProposal): _238.RegisterIncentiveProposalProtoMsg;
            };
            CancelIncentiveProposal: {
                typeUrl: string;
                encode(message: _238.CancelIncentiveProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.CancelIncentiveProposal;
                fromJSON(object: any): _238.CancelIncentiveProposal;
                toJSON(message: _238.CancelIncentiveProposal): unknown;
                fromPartial(object: Partial<_238.CancelIncentiveProposal>): _238.CancelIncentiveProposal;
                fromAmino(object: _238.CancelIncentiveProposalAmino): _238.CancelIncentiveProposal;
                toAmino(message: _238.CancelIncentiveProposal): _238.CancelIncentiveProposalAmino;
                fromAminoMsg(object: _238.CancelIncentiveProposalAminoMsg): _238.CancelIncentiveProposal;
                fromProtoMsg(message: _238.CancelIncentiveProposalProtoMsg): _238.CancelIncentiveProposal;
                toProto(message: _238.CancelIncentiveProposal): Uint8Array;
                toProtoMsg(message: _238.CancelIncentiveProposal): _238.CancelIncentiveProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _237.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.GenesisState;
                fromJSON(object: any): _237.GenesisState;
                toJSON(message: _237.GenesisState): unknown;
                fromPartial(object: Partial<_237.GenesisState>): _237.GenesisState;
                fromAmino(object: _237.GenesisStateAmino): _237.GenesisState;
                toAmino(message: _237.GenesisState): _237.GenesisStateAmino;
                fromAminoMsg(object: _237.GenesisStateAminoMsg): _237.GenesisState;
                fromProtoMsg(message: _237.GenesisStateProtoMsg): _237.GenesisState;
                toProto(message: _237.GenesisState): Uint8Array;
                toProtoMsg(message: _237.GenesisState): _237.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _237.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.Params;
                fromJSON(object: any): _237.Params;
                toJSON(message: _237.Params): unknown;
                fromPartial(object: Partial<_237.Params>): _237.Params;
                fromAmino(object: _237.ParamsAmino): _237.Params;
                toAmino(message: _237.Params): _237.ParamsAmino;
                fromAminoMsg(object: _237.ParamsAminoMsg): _237.Params;
                fromProtoMsg(message: _237.ParamsProtoMsg): _237.Params;
                toProto(message: _237.Params): Uint8Array;
                toProtoMsg(message: _237.Params): _237.ParamsProtoMsg;
            };
        };
    }
    namespace inflation {
        const v1: {
            MsgClientImpl: typeof _417.MsgClientImpl;
            QueryClientImpl: typeof _413.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                period(request?: _241.QueryPeriodRequest): Promise<_241.QueryPeriodResponse>;
                epochMintProvision(request?: _241.QueryEpochMintProvisionRequest): Promise<_241.QueryEpochMintProvisionResponse>;
                skippedEpochs(request?: _241.QuerySkippedEpochsRequest): Promise<_241.QuerySkippedEpochsResponse>;
                circulatingSupply(request?: _241.QueryCirculatingSupplyRequest): Promise<_241.QueryCirculatingSupplyResponse>;
                inflationRate(request?: _241.QueryInflationRateRequest): Promise<_241.QueryInflationRateResponse>;
                params(request?: _241.QueryParamsRequest): Promise<_241.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _408.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _242.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _242.MsgUpdateParams): {
                        typeUrl: string;
                        value: _242.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _242.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _242.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _242.MsgUpdateParams): {
                        typeUrl: string;
                        value: _242.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.inflation.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _242.MsgUpdateParams) => _242.MsgUpdateParamsAmino;
                    fromAmino: (object: _242.MsgUpdateParamsAmino) => _242.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _242.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.MsgUpdateParams;
                fromJSON(object: any): _242.MsgUpdateParams;
                toJSON(message: _242.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_242.MsgUpdateParams>): _242.MsgUpdateParams;
                fromAmino(object: _242.MsgUpdateParamsAmino): _242.MsgUpdateParams;
                toAmino(message: _242.MsgUpdateParams): _242.MsgUpdateParamsAmino;
                fromAminoMsg(object: _242.MsgUpdateParamsAminoMsg): _242.MsgUpdateParams;
                fromProtoMsg(message: _242.MsgUpdateParamsProtoMsg): _242.MsgUpdateParams;
                toProto(message: _242.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _242.MsgUpdateParams): _242.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _242.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.MsgUpdateParamsResponse;
                fromJSON(_: any): _242.MsgUpdateParamsResponse;
                toJSON(_: _242.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_242.MsgUpdateParamsResponse>): _242.MsgUpdateParamsResponse;
                fromAmino(_: _242.MsgUpdateParamsResponseAmino): _242.MsgUpdateParamsResponse;
                toAmino(_: _242.MsgUpdateParamsResponse): _242.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _242.MsgUpdateParamsResponseAminoMsg): _242.MsgUpdateParamsResponse;
                fromProtoMsg(message: _242.MsgUpdateParamsResponseProtoMsg): _242.MsgUpdateParamsResponse;
                toProto(message: _242.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _242.MsgUpdateParamsResponse): _242.MsgUpdateParamsResponseProtoMsg;
            };
            QueryPeriodRequest: {
                typeUrl: string;
                encode(_: _241.QueryPeriodRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryPeriodRequest;
                fromJSON(_: any): _241.QueryPeriodRequest;
                toJSON(_: _241.QueryPeriodRequest): unknown;
                fromPartial(_: Partial<_241.QueryPeriodRequest>): _241.QueryPeriodRequest;
                fromAmino(_: _241.QueryPeriodRequestAmino): _241.QueryPeriodRequest;
                toAmino(_: _241.QueryPeriodRequest): _241.QueryPeriodRequestAmino;
                fromAminoMsg(object: _241.QueryPeriodRequestAminoMsg): _241.QueryPeriodRequest;
                fromProtoMsg(message: _241.QueryPeriodRequestProtoMsg): _241.QueryPeriodRequest;
                toProto(message: _241.QueryPeriodRequest): Uint8Array;
                toProtoMsg(message: _241.QueryPeriodRequest): _241.QueryPeriodRequestProtoMsg;
            };
            QueryPeriodResponse: {
                typeUrl: string;
                encode(message: _241.QueryPeriodResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryPeriodResponse;
                fromJSON(object: any): _241.QueryPeriodResponse;
                toJSON(message: _241.QueryPeriodResponse): unknown;
                fromPartial(object: Partial<_241.QueryPeriodResponse>): _241.QueryPeriodResponse;
                fromAmino(object: _241.QueryPeriodResponseAmino): _241.QueryPeriodResponse;
                toAmino(message: _241.QueryPeriodResponse): _241.QueryPeriodResponseAmino;
                fromAminoMsg(object: _241.QueryPeriodResponseAminoMsg): _241.QueryPeriodResponse;
                fromProtoMsg(message: _241.QueryPeriodResponseProtoMsg): _241.QueryPeriodResponse;
                toProto(message: _241.QueryPeriodResponse): Uint8Array;
                toProtoMsg(message: _241.QueryPeriodResponse): _241.QueryPeriodResponseProtoMsg;
            };
            QueryEpochMintProvisionRequest: {
                typeUrl: string;
                encode(_: _241.QueryEpochMintProvisionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryEpochMintProvisionRequest;
                fromJSON(_: any): _241.QueryEpochMintProvisionRequest;
                toJSON(_: _241.QueryEpochMintProvisionRequest): unknown;
                fromPartial(_: Partial<_241.QueryEpochMintProvisionRequest>): _241.QueryEpochMintProvisionRequest;
                fromAmino(_: _241.QueryEpochMintProvisionRequestAmino): _241.QueryEpochMintProvisionRequest;
                toAmino(_: _241.QueryEpochMintProvisionRequest): _241.QueryEpochMintProvisionRequestAmino;
                fromAminoMsg(object: _241.QueryEpochMintProvisionRequestAminoMsg): _241.QueryEpochMintProvisionRequest;
                fromProtoMsg(message: _241.QueryEpochMintProvisionRequestProtoMsg): _241.QueryEpochMintProvisionRequest;
                toProto(message: _241.QueryEpochMintProvisionRequest): Uint8Array;
                toProtoMsg(message: _241.QueryEpochMintProvisionRequest): _241.QueryEpochMintProvisionRequestProtoMsg;
            };
            QueryEpochMintProvisionResponse: {
                typeUrl: string;
                encode(message: _241.QueryEpochMintProvisionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryEpochMintProvisionResponse;
                fromJSON(object: any): _241.QueryEpochMintProvisionResponse;
                toJSON(message: _241.QueryEpochMintProvisionResponse): unknown;
                fromPartial(object: Partial<_241.QueryEpochMintProvisionResponse>): _241.QueryEpochMintProvisionResponse;
                fromAmino(object: _241.QueryEpochMintProvisionResponseAmino): _241.QueryEpochMintProvisionResponse;
                toAmino(message: _241.QueryEpochMintProvisionResponse): _241.QueryEpochMintProvisionResponseAmino;
                fromAminoMsg(object: _241.QueryEpochMintProvisionResponseAminoMsg): _241.QueryEpochMintProvisionResponse;
                fromProtoMsg(message: _241.QueryEpochMintProvisionResponseProtoMsg): _241.QueryEpochMintProvisionResponse;
                toProto(message: _241.QueryEpochMintProvisionResponse): Uint8Array;
                toProtoMsg(message: _241.QueryEpochMintProvisionResponse): _241.QueryEpochMintProvisionResponseProtoMsg;
            };
            QuerySkippedEpochsRequest: {
                typeUrl: string;
                encode(_: _241.QuerySkippedEpochsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QuerySkippedEpochsRequest;
                fromJSON(_: any): _241.QuerySkippedEpochsRequest;
                toJSON(_: _241.QuerySkippedEpochsRequest): unknown;
                fromPartial(_: Partial<_241.QuerySkippedEpochsRequest>): _241.QuerySkippedEpochsRequest;
                fromAmino(_: _241.QuerySkippedEpochsRequestAmino): _241.QuerySkippedEpochsRequest;
                toAmino(_: _241.QuerySkippedEpochsRequest): _241.QuerySkippedEpochsRequestAmino;
                fromAminoMsg(object: _241.QuerySkippedEpochsRequestAminoMsg): _241.QuerySkippedEpochsRequest;
                fromProtoMsg(message: _241.QuerySkippedEpochsRequestProtoMsg): _241.QuerySkippedEpochsRequest;
                toProto(message: _241.QuerySkippedEpochsRequest): Uint8Array;
                toProtoMsg(message: _241.QuerySkippedEpochsRequest): _241.QuerySkippedEpochsRequestProtoMsg;
            };
            QuerySkippedEpochsResponse: {
                typeUrl: string;
                encode(message: _241.QuerySkippedEpochsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QuerySkippedEpochsResponse;
                fromJSON(object: any): _241.QuerySkippedEpochsResponse;
                toJSON(message: _241.QuerySkippedEpochsResponse): unknown;
                fromPartial(object: Partial<_241.QuerySkippedEpochsResponse>): _241.QuerySkippedEpochsResponse;
                fromAmino(object: _241.QuerySkippedEpochsResponseAmino): _241.QuerySkippedEpochsResponse;
                toAmino(message: _241.QuerySkippedEpochsResponse): _241.QuerySkippedEpochsResponseAmino;
                fromAminoMsg(object: _241.QuerySkippedEpochsResponseAminoMsg): _241.QuerySkippedEpochsResponse;
                fromProtoMsg(message: _241.QuerySkippedEpochsResponseProtoMsg): _241.QuerySkippedEpochsResponse;
                toProto(message: _241.QuerySkippedEpochsResponse): Uint8Array;
                toProtoMsg(message: _241.QuerySkippedEpochsResponse): _241.QuerySkippedEpochsResponseProtoMsg;
            };
            QueryCirculatingSupplyRequest: {
                typeUrl: string;
                encode(_: _241.QueryCirculatingSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryCirculatingSupplyRequest;
                fromJSON(_: any): _241.QueryCirculatingSupplyRequest;
                toJSON(_: _241.QueryCirculatingSupplyRequest): unknown;
                fromPartial(_: Partial<_241.QueryCirculatingSupplyRequest>): _241.QueryCirculatingSupplyRequest;
                fromAmino(_: _241.QueryCirculatingSupplyRequestAmino): _241.QueryCirculatingSupplyRequest;
                toAmino(_: _241.QueryCirculatingSupplyRequest): _241.QueryCirculatingSupplyRequestAmino;
                fromAminoMsg(object: _241.QueryCirculatingSupplyRequestAminoMsg): _241.QueryCirculatingSupplyRequest;
                fromProtoMsg(message: _241.QueryCirculatingSupplyRequestProtoMsg): _241.QueryCirculatingSupplyRequest;
                toProto(message: _241.QueryCirculatingSupplyRequest): Uint8Array;
                toProtoMsg(message: _241.QueryCirculatingSupplyRequest): _241.QueryCirculatingSupplyRequestProtoMsg;
            };
            QueryCirculatingSupplyResponse: {
                typeUrl: string;
                encode(message: _241.QueryCirculatingSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryCirculatingSupplyResponse;
                fromJSON(object: any): _241.QueryCirculatingSupplyResponse;
                toJSON(message: _241.QueryCirculatingSupplyResponse): unknown;
                fromPartial(object: Partial<_241.QueryCirculatingSupplyResponse>): _241.QueryCirculatingSupplyResponse;
                fromAmino(object: _241.QueryCirculatingSupplyResponseAmino): _241.QueryCirculatingSupplyResponse;
                toAmino(message: _241.QueryCirculatingSupplyResponse): _241.QueryCirculatingSupplyResponseAmino;
                fromAminoMsg(object: _241.QueryCirculatingSupplyResponseAminoMsg): _241.QueryCirculatingSupplyResponse;
                fromProtoMsg(message: _241.QueryCirculatingSupplyResponseProtoMsg): _241.QueryCirculatingSupplyResponse;
                toProto(message: _241.QueryCirculatingSupplyResponse): Uint8Array;
                toProtoMsg(message: _241.QueryCirculatingSupplyResponse): _241.QueryCirculatingSupplyResponseProtoMsg;
            };
            QueryInflationRateRequest: {
                typeUrl: string;
                encode(_: _241.QueryInflationRateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryInflationRateRequest;
                fromJSON(_: any): _241.QueryInflationRateRequest;
                toJSON(_: _241.QueryInflationRateRequest): unknown;
                fromPartial(_: Partial<_241.QueryInflationRateRequest>): _241.QueryInflationRateRequest;
                fromAmino(_: _241.QueryInflationRateRequestAmino): _241.QueryInflationRateRequest;
                toAmino(_: _241.QueryInflationRateRequest): _241.QueryInflationRateRequestAmino;
                fromAminoMsg(object: _241.QueryInflationRateRequestAminoMsg): _241.QueryInflationRateRequest;
                fromProtoMsg(message: _241.QueryInflationRateRequestProtoMsg): _241.QueryInflationRateRequest;
                toProto(message: _241.QueryInflationRateRequest): Uint8Array;
                toProtoMsg(message: _241.QueryInflationRateRequest): _241.QueryInflationRateRequestProtoMsg;
            };
            QueryInflationRateResponse: {
                typeUrl: string;
                encode(message: _241.QueryInflationRateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryInflationRateResponse;
                fromJSON(object: any): _241.QueryInflationRateResponse;
                toJSON(message: _241.QueryInflationRateResponse): unknown;
                fromPartial(object: Partial<_241.QueryInflationRateResponse>): _241.QueryInflationRateResponse;
                fromAmino(object: _241.QueryInflationRateResponseAmino): _241.QueryInflationRateResponse;
                toAmino(message: _241.QueryInflationRateResponse): _241.QueryInflationRateResponseAmino;
                fromAminoMsg(object: _241.QueryInflationRateResponseAminoMsg): _241.QueryInflationRateResponse;
                fromProtoMsg(message: _241.QueryInflationRateResponseProtoMsg): _241.QueryInflationRateResponse;
                toProto(message: _241.QueryInflationRateResponse): Uint8Array;
                toProtoMsg(message: _241.QueryInflationRateResponse): _241.QueryInflationRateResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _241.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryParamsRequest;
                fromJSON(_: any): _241.QueryParamsRequest;
                toJSON(_: _241.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_241.QueryParamsRequest>): _241.QueryParamsRequest;
                fromAmino(_: _241.QueryParamsRequestAmino): _241.QueryParamsRequest;
                toAmino(_: _241.QueryParamsRequest): _241.QueryParamsRequestAmino;
                fromAminoMsg(object: _241.QueryParamsRequestAminoMsg): _241.QueryParamsRequest;
                fromProtoMsg(message: _241.QueryParamsRequestProtoMsg): _241.QueryParamsRequest;
                toProto(message: _241.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _241.QueryParamsRequest): _241.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _241.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.QueryParamsResponse;
                fromJSON(object: any): _241.QueryParamsResponse;
                toJSON(message: _241.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_241.QueryParamsResponse>): _241.QueryParamsResponse;
                fromAmino(object: _241.QueryParamsResponseAmino): _241.QueryParamsResponse;
                toAmino(message: _241.QueryParamsResponse): _241.QueryParamsResponseAmino;
                fromAminoMsg(object: _241.QueryParamsResponseAminoMsg): _241.QueryParamsResponse;
                fromProtoMsg(message: _241.QueryParamsResponseProtoMsg): _241.QueryParamsResponse;
                toProto(message: _241.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _241.QueryParamsResponse): _241.QueryParamsResponseProtoMsg;
            };
            InflationDistribution: {
                typeUrl: string;
                encode(message: _240.InflationDistribution, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.InflationDistribution;
                fromJSON(object: any): _240.InflationDistribution;
                toJSON(message: _240.InflationDistribution): unknown;
                fromPartial(object: Partial<_240.InflationDistribution>): _240.InflationDistribution;
                fromAmino(object: _240.InflationDistributionAmino): _240.InflationDistribution;
                toAmino(message: _240.InflationDistribution): _240.InflationDistributionAmino;
                fromAminoMsg(object: _240.InflationDistributionAminoMsg): _240.InflationDistribution;
                fromProtoMsg(message: _240.InflationDistributionProtoMsg): _240.InflationDistribution;
                toProto(message: _240.InflationDistribution): Uint8Array;
                toProtoMsg(message: _240.InflationDistribution): _240.InflationDistributionProtoMsg;
            };
            ExponentialCalculation: {
                typeUrl: string;
                encode(message: _240.ExponentialCalculation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.ExponentialCalculation;
                fromJSON(object: any): _240.ExponentialCalculation;
                toJSON(message: _240.ExponentialCalculation): unknown;
                fromPartial(object: Partial<_240.ExponentialCalculation>): _240.ExponentialCalculation;
                fromAmino(object: _240.ExponentialCalculationAmino): _240.ExponentialCalculation;
                toAmino(message: _240.ExponentialCalculation): _240.ExponentialCalculationAmino;
                fromAminoMsg(object: _240.ExponentialCalculationAminoMsg): _240.ExponentialCalculation;
                fromProtoMsg(message: _240.ExponentialCalculationProtoMsg): _240.ExponentialCalculation;
                toProto(message: _240.ExponentialCalculation): Uint8Array;
                toProtoMsg(message: _240.ExponentialCalculation): _240.ExponentialCalculationProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _239.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.GenesisState;
                fromJSON(object: any): _239.GenesisState;
                toJSON(message: _239.GenesisState): unknown;
                fromPartial(object: Partial<_239.GenesisState>): _239.GenesisState;
                fromAmino(object: _239.GenesisStateAmino): _239.GenesisState;
                toAmino(message: _239.GenesisState): _239.GenesisStateAmino;
                fromAminoMsg(object: _239.GenesisStateAminoMsg): _239.GenesisState;
                fromProtoMsg(message: _239.GenesisStateProtoMsg): _239.GenesisState;
                toProto(message: _239.GenesisState): Uint8Array;
                toProtoMsg(message: _239.GenesisState): _239.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _239.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.Params;
                fromJSON(object: any): _239.Params;
                toJSON(message: _239.Params): unknown;
                fromPartial(object: Partial<_239.Params>): _239.Params;
                fromAmino(object: _239.ParamsAmino): _239.Params;
                toAmino(message: _239.Params): _239.ParamsAmino;
                fromAminoMsg(object: _239.ParamsAminoMsg): _239.Params;
                fromProtoMsg(message: _239.ParamsProtoMsg): _239.Params;
                toProto(message: _239.Params): Uint8Array;
                toProtoMsg(message: _239.Params): _239.ParamsProtoMsg;
            };
        };
    }
    namespace revenue {
        const v1: {
            MsgClientImpl: typeof _418.MsgClientImpl;
            QueryClientImpl: typeof _414.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                revenues(request?: _245.QueryRevenuesRequest): Promise<_245.QueryRevenuesResponse>;
                revenue(request: _245.QueryRevenueRequest): Promise<_245.QueryRevenueResponse>;
                params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                deployerRevenues(request: _245.QueryDeployerRevenuesRequest): Promise<_245.QueryDeployerRevenuesResponse>;
                withdrawerRevenues(request: _245.QueryWithdrawerRevenuesRequest): Promise<_245.QueryWithdrawerRevenuesResponse>;
            };
            LCDQueryClient: typeof _409.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    registerRevenue(value: _247.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRevenue(value: _247.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelRevenue(value: _247.MsgCancelRevenue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _247.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    registerRevenue(value: _247.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _247.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _247.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _247.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _247.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _247.MsgCancelRevenue;
                    };
                    updateParams(value: _247.MsgUpdateParams): {
                        typeUrl: string;
                        value: _247.MsgUpdateParams;
                    };
                };
                toJSON: {
                    registerRevenue(value: _247.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateRevenue(value: _247.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelRevenue(value: _247.MsgCancelRevenue): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _247.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    registerRevenue(value: any): {
                        typeUrl: string;
                        value: _247.MsgRegisterRevenue;
                    };
                    updateRevenue(value: any): {
                        typeUrl: string;
                        value: _247.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: any): {
                        typeUrl: string;
                        value: _247.MsgCancelRevenue;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _247.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    registerRevenue(value: _247.MsgRegisterRevenue): {
                        typeUrl: string;
                        value: _247.MsgRegisterRevenue;
                    };
                    updateRevenue(value: _247.MsgUpdateRevenue): {
                        typeUrl: string;
                        value: _247.MsgUpdateRevenue;
                    };
                    cancelRevenue(value: _247.MsgCancelRevenue): {
                        typeUrl: string;
                        value: _247.MsgCancelRevenue;
                    };
                    updateParams(value: _247.MsgUpdateParams): {
                        typeUrl: string;
                        value: _247.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/evmos.revenue.v1.MsgRegisterRevenue": {
                    aminoType: string;
                    toAmino: (message: _247.MsgRegisterRevenue) => _247.MsgRegisterRevenueAmino;
                    fromAmino: (object: _247.MsgRegisterRevenueAmino) => _247.MsgRegisterRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateRevenue": {
                    aminoType: string;
                    toAmino: (message: _247.MsgUpdateRevenue) => _247.MsgUpdateRevenueAmino;
                    fromAmino: (object: _247.MsgUpdateRevenueAmino) => _247.MsgUpdateRevenue;
                };
                "/evmos.revenue.v1.MsgCancelRevenue": {
                    aminoType: string;
                    toAmino: (message: _247.MsgCancelRevenue) => _247.MsgCancelRevenueAmino;
                    fromAmino: (object: _247.MsgCancelRevenueAmino) => _247.MsgCancelRevenue;
                };
                "/evmos.revenue.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _247.MsgUpdateParams) => _247.MsgUpdateParamsAmino;
                    fromAmino: (object: _247.MsgUpdateParamsAmino) => _247.MsgUpdateParams;
                };
            };
            MsgRegisterRevenue: {
                typeUrl: string;
                encode(message: _247.MsgRegisterRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgRegisterRevenue;
                fromJSON(object: any): _247.MsgRegisterRevenue;
                toJSON(message: _247.MsgRegisterRevenue): unknown;
                fromPartial(object: Partial<_247.MsgRegisterRevenue>): _247.MsgRegisterRevenue;
                fromAmino(object: _247.MsgRegisterRevenueAmino): _247.MsgRegisterRevenue;
                toAmino(message: _247.MsgRegisterRevenue): _247.MsgRegisterRevenueAmino;
                fromAminoMsg(object: _247.MsgRegisterRevenueAminoMsg): _247.MsgRegisterRevenue;
                fromProtoMsg(message: _247.MsgRegisterRevenueProtoMsg): _247.MsgRegisterRevenue;
                toProto(message: _247.MsgRegisterRevenue): Uint8Array;
                toProtoMsg(message: _247.MsgRegisterRevenue): _247.MsgRegisterRevenueProtoMsg;
            };
            MsgRegisterRevenueResponse: {
                typeUrl: string;
                encode(_: _247.MsgRegisterRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgRegisterRevenueResponse;
                fromJSON(_: any): _247.MsgRegisterRevenueResponse;
                toJSON(_: _247.MsgRegisterRevenueResponse): unknown;
                fromPartial(_: Partial<_247.MsgRegisterRevenueResponse>): _247.MsgRegisterRevenueResponse;
                fromAmino(_: _247.MsgRegisterRevenueResponseAmino): _247.MsgRegisterRevenueResponse;
                toAmino(_: _247.MsgRegisterRevenueResponse): _247.MsgRegisterRevenueResponseAmino;
                fromAminoMsg(object: _247.MsgRegisterRevenueResponseAminoMsg): _247.MsgRegisterRevenueResponse;
                fromProtoMsg(message: _247.MsgRegisterRevenueResponseProtoMsg): _247.MsgRegisterRevenueResponse;
                toProto(message: _247.MsgRegisterRevenueResponse): Uint8Array;
                toProtoMsg(message: _247.MsgRegisterRevenueResponse): _247.MsgRegisterRevenueResponseProtoMsg;
            };
            MsgUpdateRevenue: {
                typeUrl: string;
                encode(message: _247.MsgUpdateRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgUpdateRevenue;
                fromJSON(object: any): _247.MsgUpdateRevenue;
                toJSON(message: _247.MsgUpdateRevenue): unknown;
                fromPartial(object: Partial<_247.MsgUpdateRevenue>): _247.MsgUpdateRevenue;
                fromAmino(object: _247.MsgUpdateRevenueAmino): _247.MsgUpdateRevenue;
                toAmino(message: _247.MsgUpdateRevenue): _247.MsgUpdateRevenueAmino;
                fromAminoMsg(object: _247.MsgUpdateRevenueAminoMsg): _247.MsgUpdateRevenue;
                fromProtoMsg(message: _247.MsgUpdateRevenueProtoMsg): _247.MsgUpdateRevenue;
                toProto(message: _247.MsgUpdateRevenue): Uint8Array;
                toProtoMsg(message: _247.MsgUpdateRevenue): _247.MsgUpdateRevenueProtoMsg;
            };
            MsgUpdateRevenueResponse: {
                typeUrl: string;
                encode(_: _247.MsgUpdateRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgUpdateRevenueResponse;
                fromJSON(_: any): _247.MsgUpdateRevenueResponse;
                toJSON(_: _247.MsgUpdateRevenueResponse): unknown;
                fromPartial(_: Partial<_247.MsgUpdateRevenueResponse>): _247.MsgUpdateRevenueResponse;
                fromAmino(_: _247.MsgUpdateRevenueResponseAmino): _247.MsgUpdateRevenueResponse;
                toAmino(_: _247.MsgUpdateRevenueResponse): _247.MsgUpdateRevenueResponseAmino;
                fromAminoMsg(object: _247.MsgUpdateRevenueResponseAminoMsg): _247.MsgUpdateRevenueResponse;
                fromProtoMsg(message: _247.MsgUpdateRevenueResponseProtoMsg): _247.MsgUpdateRevenueResponse;
                toProto(message: _247.MsgUpdateRevenueResponse): Uint8Array;
                toProtoMsg(message: _247.MsgUpdateRevenueResponse): _247.MsgUpdateRevenueResponseProtoMsg;
            };
            MsgCancelRevenue: {
                typeUrl: string;
                encode(message: _247.MsgCancelRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCancelRevenue;
                fromJSON(object: any): _247.MsgCancelRevenue;
                toJSON(message: _247.MsgCancelRevenue): unknown;
                fromPartial(object: Partial<_247.MsgCancelRevenue>): _247.MsgCancelRevenue;
                fromAmino(object: _247.MsgCancelRevenueAmino): _247.MsgCancelRevenue;
                toAmino(message: _247.MsgCancelRevenue): _247.MsgCancelRevenueAmino;
                fromAminoMsg(object: _247.MsgCancelRevenueAminoMsg): _247.MsgCancelRevenue;
                fromProtoMsg(message: _247.MsgCancelRevenueProtoMsg): _247.MsgCancelRevenue;
                toProto(message: _247.MsgCancelRevenue): Uint8Array;
                toProtoMsg(message: _247.MsgCancelRevenue): _247.MsgCancelRevenueProtoMsg;
            };
            MsgCancelRevenueResponse: {
                typeUrl: string;
                encode(_: _247.MsgCancelRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgCancelRevenueResponse;
                fromJSON(_: any): _247.MsgCancelRevenueResponse;
                toJSON(_: _247.MsgCancelRevenueResponse): unknown;
                fromPartial(_: Partial<_247.MsgCancelRevenueResponse>): _247.MsgCancelRevenueResponse;
                fromAmino(_: _247.MsgCancelRevenueResponseAmino): _247.MsgCancelRevenueResponse;
                toAmino(_: _247.MsgCancelRevenueResponse): _247.MsgCancelRevenueResponseAmino;
                fromAminoMsg(object: _247.MsgCancelRevenueResponseAminoMsg): _247.MsgCancelRevenueResponse;
                fromProtoMsg(message: _247.MsgCancelRevenueResponseProtoMsg): _247.MsgCancelRevenueResponse;
                toProto(message: _247.MsgCancelRevenueResponse): Uint8Array;
                toProtoMsg(message: _247.MsgCancelRevenueResponse): _247.MsgCancelRevenueResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _247.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgUpdateParams;
                fromJSON(object: any): _247.MsgUpdateParams;
                toJSON(message: _247.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_247.MsgUpdateParams>): _247.MsgUpdateParams;
                fromAmino(object: _247.MsgUpdateParamsAmino): _247.MsgUpdateParams;
                toAmino(message: _247.MsgUpdateParams): _247.MsgUpdateParamsAmino;
                fromAminoMsg(object: _247.MsgUpdateParamsAminoMsg): _247.MsgUpdateParams;
                fromProtoMsg(message: _247.MsgUpdateParamsProtoMsg): _247.MsgUpdateParams;
                toProto(message: _247.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _247.MsgUpdateParams): _247.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _247.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.MsgUpdateParamsResponse;
                fromJSON(_: any): _247.MsgUpdateParamsResponse;
                toJSON(_: _247.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_247.MsgUpdateParamsResponse>): _247.MsgUpdateParamsResponse;
                fromAmino(_: _247.MsgUpdateParamsResponseAmino): _247.MsgUpdateParamsResponse;
                toAmino(_: _247.MsgUpdateParamsResponse): _247.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _247.MsgUpdateParamsResponseAminoMsg): _247.MsgUpdateParamsResponse;
                fromProtoMsg(message: _247.MsgUpdateParamsResponseProtoMsg): _247.MsgUpdateParamsResponse;
                toProto(message: _247.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _247.MsgUpdateParamsResponse): _247.MsgUpdateParamsResponseProtoMsg;
            };
            Revenue: {
                typeUrl: string;
                encode(message: _246.Revenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.Revenue;
                fromJSON(object: any): _246.Revenue;
                toJSON(message: _246.Revenue): unknown;
                fromPartial(object: Partial<_246.Revenue>): _246.Revenue;
                fromAmino(object: _246.RevenueAmino): _246.Revenue;
                toAmino(message: _246.Revenue): _246.RevenueAmino;
                fromAminoMsg(object: _246.RevenueAminoMsg): _246.Revenue;
                fromProtoMsg(message: _246.RevenueProtoMsg): _246.Revenue;
                toProto(message: _246.Revenue): Uint8Array;
                toProtoMsg(message: _246.Revenue): _246.RevenueProtoMsg;
            };
            QueryRevenuesRequest: {
                typeUrl: string;
                encode(message: _245.QueryRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryRevenuesRequest;
                fromJSON(object: any): _245.QueryRevenuesRequest;
                toJSON(message: _245.QueryRevenuesRequest): unknown;
                fromPartial(object: Partial<_245.QueryRevenuesRequest>): _245.QueryRevenuesRequest;
                fromAmino(object: _245.QueryRevenuesRequestAmino): _245.QueryRevenuesRequest;
                toAmino(message: _245.QueryRevenuesRequest): _245.QueryRevenuesRequestAmino;
                fromAminoMsg(object: _245.QueryRevenuesRequestAminoMsg): _245.QueryRevenuesRequest;
                fromProtoMsg(message: _245.QueryRevenuesRequestProtoMsg): _245.QueryRevenuesRequest;
                toProto(message: _245.QueryRevenuesRequest): Uint8Array;
                toProtoMsg(message: _245.QueryRevenuesRequest): _245.QueryRevenuesRequestProtoMsg;
            };
            QueryRevenuesResponse: {
                typeUrl: string;
                encode(message: _245.QueryRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryRevenuesResponse;
                fromJSON(object: any): _245.QueryRevenuesResponse;
                toJSON(message: _245.QueryRevenuesResponse): unknown;
                fromPartial(object: Partial<_245.QueryRevenuesResponse>): _245.QueryRevenuesResponse;
                fromAmino(object: _245.QueryRevenuesResponseAmino): _245.QueryRevenuesResponse;
                toAmino(message: _245.QueryRevenuesResponse): _245.QueryRevenuesResponseAmino;
                fromAminoMsg(object: _245.QueryRevenuesResponseAminoMsg): _245.QueryRevenuesResponse;
                fromProtoMsg(message: _245.QueryRevenuesResponseProtoMsg): _245.QueryRevenuesResponse;
                toProto(message: _245.QueryRevenuesResponse): Uint8Array;
                toProtoMsg(message: _245.QueryRevenuesResponse): _245.QueryRevenuesResponseProtoMsg;
            };
            QueryRevenueRequest: {
                typeUrl: string;
                encode(message: _245.QueryRevenueRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryRevenueRequest;
                fromJSON(object: any): _245.QueryRevenueRequest;
                toJSON(message: _245.QueryRevenueRequest): unknown;
                fromPartial(object: Partial<_245.QueryRevenueRequest>): _245.QueryRevenueRequest;
                fromAmino(object: _245.QueryRevenueRequestAmino): _245.QueryRevenueRequest;
                toAmino(message: _245.QueryRevenueRequest): _245.QueryRevenueRequestAmino;
                fromAminoMsg(object: _245.QueryRevenueRequestAminoMsg): _245.QueryRevenueRequest;
                fromProtoMsg(message: _245.QueryRevenueRequestProtoMsg): _245.QueryRevenueRequest;
                toProto(message: _245.QueryRevenueRequest): Uint8Array;
                toProtoMsg(message: _245.QueryRevenueRequest): _245.QueryRevenueRequestProtoMsg;
            };
            QueryRevenueResponse: {
                typeUrl: string;
                encode(message: _245.QueryRevenueResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryRevenueResponse;
                fromJSON(object: any): _245.QueryRevenueResponse;
                toJSON(message: _245.QueryRevenueResponse): unknown;
                fromPartial(object: Partial<_245.QueryRevenueResponse>): _245.QueryRevenueResponse;
                fromAmino(object: _245.QueryRevenueResponseAmino): _245.QueryRevenueResponse;
                toAmino(message: _245.QueryRevenueResponse): _245.QueryRevenueResponseAmino;
                fromAminoMsg(object: _245.QueryRevenueResponseAminoMsg): _245.QueryRevenueResponse;
                fromProtoMsg(message: _245.QueryRevenueResponseProtoMsg): _245.QueryRevenueResponse;
                toProto(message: _245.QueryRevenueResponse): Uint8Array;
                toProtoMsg(message: _245.QueryRevenueResponse): _245.QueryRevenueResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _245.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryParamsRequest;
                fromJSON(_: any): _245.QueryParamsRequest;
                toJSON(_: _245.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_245.QueryParamsRequest>): _245.QueryParamsRequest;
                fromAmino(_: _245.QueryParamsRequestAmino): _245.QueryParamsRequest;
                toAmino(_: _245.QueryParamsRequest): _245.QueryParamsRequestAmino;
                fromAminoMsg(object: _245.QueryParamsRequestAminoMsg): _245.QueryParamsRequest;
                fromProtoMsg(message: _245.QueryParamsRequestProtoMsg): _245.QueryParamsRequest;
                toProto(message: _245.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _245.QueryParamsRequest): _245.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _245.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryParamsResponse;
                fromJSON(object: any): _245.QueryParamsResponse;
                toJSON(message: _245.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_245.QueryParamsResponse>): _245.QueryParamsResponse;
                fromAmino(object: _245.QueryParamsResponseAmino): _245.QueryParamsResponse;
                toAmino(message: _245.QueryParamsResponse): _245.QueryParamsResponseAmino;
                fromAminoMsg(object: _245.QueryParamsResponseAminoMsg): _245.QueryParamsResponse;
                fromProtoMsg(message: _245.QueryParamsResponseProtoMsg): _245.QueryParamsResponse;
                toProto(message: _245.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _245.QueryParamsResponse): _245.QueryParamsResponseProtoMsg;
            };
            QueryDeployerRevenuesRequest: {
                typeUrl: string;
                encode(message: _245.QueryDeployerRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDeployerRevenuesRequest;
                fromJSON(object: any): _245.QueryDeployerRevenuesRequest;
                toJSON(message: _245.QueryDeployerRevenuesRequest): unknown;
                fromPartial(object: Partial<_245.QueryDeployerRevenuesRequest>): _245.QueryDeployerRevenuesRequest;
                fromAmino(object: _245.QueryDeployerRevenuesRequestAmino): _245.QueryDeployerRevenuesRequest;
                toAmino(message: _245.QueryDeployerRevenuesRequest): _245.QueryDeployerRevenuesRequestAmino;
                fromAminoMsg(object: _245.QueryDeployerRevenuesRequestAminoMsg): _245.QueryDeployerRevenuesRequest;
                fromProtoMsg(message: _245.QueryDeployerRevenuesRequestProtoMsg): _245.QueryDeployerRevenuesRequest;
                toProto(message: _245.QueryDeployerRevenuesRequest): Uint8Array;
                toProtoMsg(message: _245.QueryDeployerRevenuesRequest): _245.QueryDeployerRevenuesRequestProtoMsg;
            };
            QueryDeployerRevenuesResponse: {
                typeUrl: string;
                encode(message: _245.QueryDeployerRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDeployerRevenuesResponse;
                fromJSON(object: any): _245.QueryDeployerRevenuesResponse;
                toJSON(message: _245.QueryDeployerRevenuesResponse): unknown;
                fromPartial(object: Partial<_245.QueryDeployerRevenuesResponse>): _245.QueryDeployerRevenuesResponse;
                fromAmino(object: _245.QueryDeployerRevenuesResponseAmino): _245.QueryDeployerRevenuesResponse;
                toAmino(message: _245.QueryDeployerRevenuesResponse): _245.QueryDeployerRevenuesResponseAmino;
                fromAminoMsg(object: _245.QueryDeployerRevenuesResponseAminoMsg): _245.QueryDeployerRevenuesResponse;
                fromProtoMsg(message: _245.QueryDeployerRevenuesResponseProtoMsg): _245.QueryDeployerRevenuesResponse;
                toProto(message: _245.QueryDeployerRevenuesResponse): Uint8Array;
                toProtoMsg(message: _245.QueryDeployerRevenuesResponse): _245.QueryDeployerRevenuesResponseProtoMsg;
            };
            QueryWithdrawerRevenuesRequest: {
                typeUrl: string;
                encode(message: _245.QueryWithdrawerRevenuesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryWithdrawerRevenuesRequest;
                fromJSON(object: any): _245.QueryWithdrawerRevenuesRequest;
                toJSON(message: _245.QueryWithdrawerRevenuesRequest): unknown;
                fromPartial(object: Partial<_245.QueryWithdrawerRevenuesRequest>): _245.QueryWithdrawerRevenuesRequest;
                fromAmino(object: _245.QueryWithdrawerRevenuesRequestAmino): _245.QueryWithdrawerRevenuesRequest;
                toAmino(message: _245.QueryWithdrawerRevenuesRequest): _245.QueryWithdrawerRevenuesRequestAmino;
                fromAminoMsg(object: _245.QueryWithdrawerRevenuesRequestAminoMsg): _245.QueryWithdrawerRevenuesRequest;
                fromProtoMsg(message: _245.QueryWithdrawerRevenuesRequestProtoMsg): _245.QueryWithdrawerRevenuesRequest;
                toProto(message: _245.QueryWithdrawerRevenuesRequest): Uint8Array;
                toProtoMsg(message: _245.QueryWithdrawerRevenuesRequest): _245.QueryWithdrawerRevenuesRequestProtoMsg;
            };
            QueryWithdrawerRevenuesResponse: {
                typeUrl: string;
                encode(message: _245.QueryWithdrawerRevenuesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryWithdrawerRevenuesResponse;
                fromJSON(object: any): _245.QueryWithdrawerRevenuesResponse;
                toJSON(message: _245.QueryWithdrawerRevenuesResponse): unknown;
                fromPartial(object: Partial<_245.QueryWithdrawerRevenuesResponse>): _245.QueryWithdrawerRevenuesResponse;
                fromAmino(object: _245.QueryWithdrawerRevenuesResponseAmino): _245.QueryWithdrawerRevenuesResponse;
                toAmino(message: _245.QueryWithdrawerRevenuesResponse): _245.QueryWithdrawerRevenuesResponseAmino;
                fromAminoMsg(object: _245.QueryWithdrawerRevenuesResponseAminoMsg): _245.QueryWithdrawerRevenuesResponse;
                fromProtoMsg(message: _245.QueryWithdrawerRevenuesResponseProtoMsg): _245.QueryWithdrawerRevenuesResponse;
                toProto(message: _245.QueryWithdrawerRevenuesResponse): Uint8Array;
                toProtoMsg(message: _245.QueryWithdrawerRevenuesResponse): _245.QueryWithdrawerRevenuesResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _244.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.GenesisState;
                fromJSON(object: any): _244.GenesisState;
                toJSON(message: _244.GenesisState): unknown;
                fromPartial(object: Partial<_244.GenesisState>): _244.GenesisState;
                fromAmino(object: _244.GenesisStateAmino): _244.GenesisState;
                toAmino(message: _244.GenesisState): _244.GenesisStateAmino;
                fromAminoMsg(object: _244.GenesisStateAminoMsg): _244.GenesisState;
                fromProtoMsg(message: _244.GenesisStateProtoMsg): _244.GenesisState;
                toProto(message: _244.GenesisState): Uint8Array;
                toProtoMsg(message: _244.GenesisState): _244.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _244.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Params;
                fromJSON(object: any): _244.Params;
                toJSON(message: _244.Params): unknown;
                fromPartial(object: Partial<_244.Params>): _244.Params;
                fromAmino(object: _244.ParamsAmino): _244.Params;
                toAmino(message: _244.Params): _244.ParamsAmino;
                fromAminoMsg(object: _244.ParamsAminoMsg): _244.Params;
                fromProtoMsg(message: _244.ParamsProtoMsg): _244.Params;
                toProto(message: _244.Params): Uint8Array;
                toProtoMsg(message: _244.Params): _244.ParamsProtoMsg;
            };
            EventRegisterRevenue: {
                typeUrl: string;
                encode(message: _243.EventRegisterRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.EventRegisterRevenue;
                fromJSON(object: any): _243.EventRegisterRevenue;
                toJSON(message: _243.EventRegisterRevenue): unknown;
                fromPartial(object: Partial<_243.EventRegisterRevenue>): _243.EventRegisterRevenue;
                fromAmino(object: _243.EventRegisterRevenueAmino): _243.EventRegisterRevenue;
                toAmino(message: _243.EventRegisterRevenue): _243.EventRegisterRevenueAmino;
                fromAminoMsg(object: _243.EventRegisterRevenueAminoMsg): _243.EventRegisterRevenue;
                fromProtoMsg(message: _243.EventRegisterRevenueProtoMsg): _243.EventRegisterRevenue;
                toProto(message: _243.EventRegisterRevenue): Uint8Array;
                toProtoMsg(message: _243.EventRegisterRevenue): _243.EventRegisterRevenueProtoMsg;
            };
            EventUpdateRevenue: {
                typeUrl: string;
                encode(message: _243.EventUpdateRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.EventUpdateRevenue;
                fromJSON(object: any): _243.EventUpdateRevenue;
                toJSON(message: _243.EventUpdateRevenue): unknown;
                fromPartial(object: Partial<_243.EventUpdateRevenue>): _243.EventUpdateRevenue;
                fromAmino(object: _243.EventUpdateRevenueAmino): _243.EventUpdateRevenue;
                toAmino(message: _243.EventUpdateRevenue): _243.EventUpdateRevenueAmino;
                fromAminoMsg(object: _243.EventUpdateRevenueAminoMsg): _243.EventUpdateRevenue;
                fromProtoMsg(message: _243.EventUpdateRevenueProtoMsg): _243.EventUpdateRevenue;
                toProto(message: _243.EventUpdateRevenue): Uint8Array;
                toProtoMsg(message: _243.EventUpdateRevenue): _243.EventUpdateRevenueProtoMsg;
            };
            EventCancelRevenue: {
                typeUrl: string;
                encode(message: _243.EventCancelRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.EventCancelRevenue;
                fromJSON(object: any): _243.EventCancelRevenue;
                toJSON(message: _243.EventCancelRevenue): unknown;
                fromPartial(object: Partial<_243.EventCancelRevenue>): _243.EventCancelRevenue;
                fromAmino(object: _243.EventCancelRevenueAmino): _243.EventCancelRevenue;
                toAmino(message: _243.EventCancelRevenue): _243.EventCancelRevenueAmino;
                fromAminoMsg(object: _243.EventCancelRevenueAminoMsg): _243.EventCancelRevenue;
                fromProtoMsg(message: _243.EventCancelRevenueProtoMsg): _243.EventCancelRevenue;
                toProto(message: _243.EventCancelRevenue): Uint8Array;
                toProtoMsg(message: _243.EventCancelRevenue): _243.EventCancelRevenueProtoMsg;
            };
            EventDistributeRevenue: {
                typeUrl: string;
                encode(message: _243.EventDistributeRevenue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.EventDistributeRevenue;
                fromJSON(object: any): _243.EventDistributeRevenue;
                toJSON(message: _243.EventDistributeRevenue): unknown;
                fromPartial(object: Partial<_243.EventDistributeRevenue>): _243.EventDistributeRevenue;
                fromAmino(object: _243.EventDistributeRevenueAmino): _243.EventDistributeRevenue;
                toAmino(message: _243.EventDistributeRevenue): _243.EventDistributeRevenueAmino;
                fromAminoMsg(object: _243.EventDistributeRevenueAminoMsg): _243.EventDistributeRevenue;
                fromProtoMsg(message: _243.EventDistributeRevenueProtoMsg): _243.EventDistributeRevenue;
                toProto(message: _243.EventDistributeRevenue): Uint8Array;
                toProtoMsg(message: _243.EventDistributeRevenue): _243.EventDistributeRevenueProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1: {
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _248.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.ClawbackVestingAccount;
                fromJSON(object: any): _248.ClawbackVestingAccount;
                toJSON(message: _248.ClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_248.ClawbackVestingAccount>): _248.ClawbackVestingAccount;
                fromAmino(object: _248.ClawbackVestingAccountAmino): _248.ClawbackVestingAccount;
                toAmino(message: _248.ClawbackVestingAccount): _248.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _248.ClawbackVestingAccountAminoMsg): _248.ClawbackVestingAccount;
                fromProtoMsg(message: _248.ClawbackVestingAccountProtoMsg): _248.ClawbackVestingAccount;
                toProto(message: _248.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _248.ClawbackVestingAccount): _248.ClawbackVestingAccountProtoMsg;
            };
        };
        const v2: {
            MsgClientImpl: typeof _419.MsgClientImpl;
            QueryClientImpl: typeof _415.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balances(request: _250.QueryBalancesRequest): Promise<_250.QueryBalancesResponse>;
            };
            LCDQueryClient: typeof _410.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createClawbackVestingAccount(value: _251.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundVestingAccount(value: _251.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clawback(value: _251.MsgClawback): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateVestingFunder(value: _251.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    convertVestingAccount(value: _251.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createClawbackVestingAccount(value: _251.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _251.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: _251.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: _251.MsgFundVestingAccount;
                    };
                    clawback(value: _251.MsgClawback): {
                        typeUrl: string;
                        value: _251.MsgClawback;
                    };
                    updateVestingFunder(value: _251.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _251.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _251.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _251.MsgConvertVestingAccount;
                    };
                };
                toJSON: {
                    createClawbackVestingAccount(value: _251.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundVestingAccount(value: _251.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clawback(value: _251.MsgClawback): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateVestingFunder(value: _251.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: unknown;
                    };
                    convertVestingAccount(value: _251.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createClawbackVestingAccount(value: any): {
                        typeUrl: string;
                        value: _251.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: any): {
                        typeUrl: string;
                        value: _251.MsgFundVestingAccount;
                    };
                    clawback(value: any): {
                        typeUrl: string;
                        value: _251.MsgClawback;
                    };
                    updateVestingFunder(value: any): {
                        typeUrl: string;
                        value: _251.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: any): {
                        typeUrl: string;
                        value: _251.MsgConvertVestingAccount;
                    };
                };
                fromPartial: {
                    createClawbackVestingAccount(value: _251.MsgCreateClawbackVestingAccount): {
                        typeUrl: string;
                        value: _251.MsgCreateClawbackVestingAccount;
                    };
                    fundVestingAccount(value: _251.MsgFundVestingAccount): {
                        typeUrl: string;
                        value: _251.MsgFundVestingAccount;
                    };
                    clawback(value: _251.MsgClawback): {
                        typeUrl: string;
                        value: _251.MsgClawback;
                    };
                    updateVestingFunder(value: _251.MsgUpdateVestingFunder): {
                        typeUrl: string;
                        value: _251.MsgUpdateVestingFunder;
                    };
                    convertVestingAccount(value: _251.MsgConvertVestingAccount): {
                        typeUrl: string;
                        value: _251.MsgConvertVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/evmos.vesting.v2.MsgCreateClawbackVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _251.MsgCreateClawbackVestingAccount) => _251.MsgCreateClawbackVestingAccountAmino;
                    fromAmino: (object: _251.MsgCreateClawbackVestingAccountAmino) => _251.MsgCreateClawbackVestingAccount;
                };
                "/evmos.vesting.v2.MsgFundVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _251.MsgFundVestingAccount) => _251.MsgFundVestingAccountAmino;
                    fromAmino: (object: _251.MsgFundVestingAccountAmino) => _251.MsgFundVestingAccount;
                };
                "/evmos.vesting.v2.MsgClawback": {
                    aminoType: string;
                    toAmino: (message: _251.MsgClawback) => _251.MsgClawbackAmino;
                    fromAmino: (object: _251.MsgClawbackAmino) => _251.MsgClawback;
                };
                "/evmos.vesting.v2.MsgUpdateVestingFunder": {
                    aminoType: string;
                    toAmino: (message: _251.MsgUpdateVestingFunder) => _251.MsgUpdateVestingFunderAmino;
                    fromAmino: (object: _251.MsgUpdateVestingFunderAmino) => _251.MsgUpdateVestingFunder;
                };
                "/evmos.vesting.v2.MsgConvertVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _251.MsgConvertVestingAccount) => _251.MsgConvertVestingAccountAmino;
                    fromAmino: (object: _251.MsgConvertVestingAccountAmino) => _251.MsgConvertVestingAccount;
                };
            };
            ClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _252.ClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.ClawbackVestingAccount;
                fromJSON(object: any): _252.ClawbackVestingAccount;
                toJSON(message: _252.ClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_252.ClawbackVestingAccount>): _252.ClawbackVestingAccount;
                fromAmino(object: _252.ClawbackVestingAccountAmino): _252.ClawbackVestingAccount;
                toAmino(message: _252.ClawbackVestingAccount): _252.ClawbackVestingAccountAmino;
                fromAminoMsg(object: _252.ClawbackVestingAccountAminoMsg): _252.ClawbackVestingAccount;
                fromProtoMsg(message: _252.ClawbackVestingAccountProtoMsg): _252.ClawbackVestingAccount;
                toProto(message: _252.ClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _252.ClawbackVestingAccount): _252.ClawbackVestingAccountProtoMsg;
            };
            ClawbackProposal: {
                typeUrl: string;
                encode(message: _252.ClawbackProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.ClawbackProposal;
                fromJSON(object: any): _252.ClawbackProposal;
                toJSON(message: _252.ClawbackProposal): unknown;
                fromPartial(object: Partial<_252.ClawbackProposal>): _252.ClawbackProposal;
                fromAmino(object: _252.ClawbackProposalAmino): _252.ClawbackProposal;
                toAmino(message: _252.ClawbackProposal): _252.ClawbackProposalAmino;
                fromAminoMsg(object: _252.ClawbackProposalAminoMsg): _252.ClawbackProposal;
                fromProtoMsg(message: _252.ClawbackProposalProtoMsg): _252.ClawbackProposal;
                toProto(message: _252.ClawbackProposal): Uint8Array;
                toProtoMsg(message: _252.ClawbackProposal): _252.ClawbackProposalProtoMsg;
            };
            MsgCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _251.MsgCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgCreateClawbackVestingAccount;
                fromJSON(object: any): _251.MsgCreateClawbackVestingAccount;
                toJSON(message: _251.MsgCreateClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_251.MsgCreateClawbackVestingAccount>): _251.MsgCreateClawbackVestingAccount;
                fromAmino(object: _251.MsgCreateClawbackVestingAccountAmino): _251.MsgCreateClawbackVestingAccount;
                toAmino(message: _251.MsgCreateClawbackVestingAccount): _251.MsgCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _251.MsgCreateClawbackVestingAccountAminoMsg): _251.MsgCreateClawbackVestingAccount;
                fromProtoMsg(message: _251.MsgCreateClawbackVestingAccountProtoMsg): _251.MsgCreateClawbackVestingAccount;
                toProto(message: _251.MsgCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _251.MsgCreateClawbackVestingAccount): _251.MsgCreateClawbackVestingAccountProtoMsg;
            };
            MsgCreateClawbackVestingAccountResponse: {
                typeUrl: string;
                encode(_: _251.MsgCreateClawbackVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgCreateClawbackVestingAccountResponse;
                fromJSON(_: any): _251.MsgCreateClawbackVestingAccountResponse;
                toJSON(_: _251.MsgCreateClawbackVestingAccountResponse): unknown;
                fromPartial(_: Partial<_251.MsgCreateClawbackVestingAccountResponse>): _251.MsgCreateClawbackVestingAccountResponse;
                fromAmino(_: _251.MsgCreateClawbackVestingAccountResponseAmino): _251.MsgCreateClawbackVestingAccountResponse;
                toAmino(_: _251.MsgCreateClawbackVestingAccountResponse): _251.MsgCreateClawbackVestingAccountResponseAmino;
                fromAminoMsg(object: _251.MsgCreateClawbackVestingAccountResponseAminoMsg): _251.MsgCreateClawbackVestingAccountResponse;
                fromProtoMsg(message: _251.MsgCreateClawbackVestingAccountResponseProtoMsg): _251.MsgCreateClawbackVestingAccountResponse;
                toProto(message: _251.MsgCreateClawbackVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _251.MsgCreateClawbackVestingAccountResponse): _251.MsgCreateClawbackVestingAccountResponseProtoMsg;
            };
            MsgFundVestingAccount: {
                typeUrl: string;
                encode(message: _251.MsgFundVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgFundVestingAccount;
                fromJSON(object: any): _251.MsgFundVestingAccount;
                toJSON(message: _251.MsgFundVestingAccount): unknown;
                fromPartial(object: Partial<_251.MsgFundVestingAccount>): _251.MsgFundVestingAccount;
                fromAmino(object: _251.MsgFundVestingAccountAmino): _251.MsgFundVestingAccount;
                toAmino(message: _251.MsgFundVestingAccount): _251.MsgFundVestingAccountAmino;
                fromAminoMsg(object: _251.MsgFundVestingAccountAminoMsg): _251.MsgFundVestingAccount;
                fromProtoMsg(message: _251.MsgFundVestingAccountProtoMsg): _251.MsgFundVestingAccount;
                toProto(message: _251.MsgFundVestingAccount): Uint8Array;
                toProtoMsg(message: _251.MsgFundVestingAccount): _251.MsgFundVestingAccountProtoMsg;
            };
            MsgFundVestingAccountResponse: {
                typeUrl: string;
                encode(_: _251.MsgFundVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgFundVestingAccountResponse;
                fromJSON(_: any): _251.MsgFundVestingAccountResponse;
                toJSON(_: _251.MsgFundVestingAccountResponse): unknown;
                fromPartial(_: Partial<_251.MsgFundVestingAccountResponse>): _251.MsgFundVestingAccountResponse;
                fromAmino(_: _251.MsgFundVestingAccountResponseAmino): _251.MsgFundVestingAccountResponse;
                toAmino(_: _251.MsgFundVestingAccountResponse): _251.MsgFundVestingAccountResponseAmino;
                fromAminoMsg(object: _251.MsgFundVestingAccountResponseAminoMsg): _251.MsgFundVestingAccountResponse;
                fromProtoMsg(message: _251.MsgFundVestingAccountResponseProtoMsg): _251.MsgFundVestingAccountResponse;
                toProto(message: _251.MsgFundVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _251.MsgFundVestingAccountResponse): _251.MsgFundVestingAccountResponseProtoMsg;
            };
            MsgClawback: {
                typeUrl: string;
                encode(message: _251.MsgClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgClawback;
                fromJSON(object: any): _251.MsgClawback;
                toJSON(message: _251.MsgClawback): unknown;
                fromPartial(object: Partial<_251.MsgClawback>): _251.MsgClawback;
                fromAmino(object: _251.MsgClawbackAmino): _251.MsgClawback;
                toAmino(message: _251.MsgClawback): _251.MsgClawbackAmino;
                fromAminoMsg(object: _251.MsgClawbackAminoMsg): _251.MsgClawback;
                fromProtoMsg(message: _251.MsgClawbackProtoMsg): _251.MsgClawback;
                toProto(message: _251.MsgClawback): Uint8Array;
                toProtoMsg(message: _251.MsgClawback): _251.MsgClawbackProtoMsg;
            };
            MsgClawbackResponse: {
                typeUrl: string;
                encode(message: _251.MsgClawbackResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgClawbackResponse;
                fromJSON(object: any): _251.MsgClawbackResponse;
                toJSON(message: _251.MsgClawbackResponse): unknown;
                fromPartial(object: Partial<_251.MsgClawbackResponse>): _251.MsgClawbackResponse;
                fromAmino(object: _251.MsgClawbackResponseAmino): _251.MsgClawbackResponse;
                toAmino(message: _251.MsgClawbackResponse): _251.MsgClawbackResponseAmino;
                fromAminoMsg(object: _251.MsgClawbackResponseAminoMsg): _251.MsgClawbackResponse;
                fromProtoMsg(message: _251.MsgClawbackResponseProtoMsg): _251.MsgClawbackResponse;
                toProto(message: _251.MsgClawbackResponse): Uint8Array;
                toProtoMsg(message: _251.MsgClawbackResponse): _251.MsgClawbackResponseProtoMsg;
            };
            MsgUpdateVestingFunder: {
                typeUrl: string;
                encode(message: _251.MsgUpdateVestingFunder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgUpdateVestingFunder;
                fromJSON(object: any): _251.MsgUpdateVestingFunder;
                toJSON(message: _251.MsgUpdateVestingFunder): unknown;
                fromPartial(object: Partial<_251.MsgUpdateVestingFunder>): _251.MsgUpdateVestingFunder;
                fromAmino(object: _251.MsgUpdateVestingFunderAmino): _251.MsgUpdateVestingFunder;
                toAmino(message: _251.MsgUpdateVestingFunder): _251.MsgUpdateVestingFunderAmino;
                fromAminoMsg(object: _251.MsgUpdateVestingFunderAminoMsg): _251.MsgUpdateVestingFunder;
                fromProtoMsg(message: _251.MsgUpdateVestingFunderProtoMsg): _251.MsgUpdateVestingFunder;
                toProto(message: _251.MsgUpdateVestingFunder): Uint8Array;
                toProtoMsg(message: _251.MsgUpdateVestingFunder): _251.MsgUpdateVestingFunderProtoMsg;
            };
            MsgUpdateVestingFunderResponse: {
                typeUrl: string;
                encode(_: _251.MsgUpdateVestingFunderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgUpdateVestingFunderResponse;
                fromJSON(_: any): _251.MsgUpdateVestingFunderResponse;
                toJSON(_: _251.MsgUpdateVestingFunderResponse): unknown;
                fromPartial(_: Partial<_251.MsgUpdateVestingFunderResponse>): _251.MsgUpdateVestingFunderResponse;
                fromAmino(_: _251.MsgUpdateVestingFunderResponseAmino): _251.MsgUpdateVestingFunderResponse;
                toAmino(_: _251.MsgUpdateVestingFunderResponse): _251.MsgUpdateVestingFunderResponseAmino;
                fromAminoMsg(object: _251.MsgUpdateVestingFunderResponseAminoMsg): _251.MsgUpdateVestingFunderResponse;
                fromProtoMsg(message: _251.MsgUpdateVestingFunderResponseProtoMsg): _251.MsgUpdateVestingFunderResponse;
                toProto(message: _251.MsgUpdateVestingFunderResponse): Uint8Array;
                toProtoMsg(message: _251.MsgUpdateVestingFunderResponse): _251.MsgUpdateVestingFunderResponseProtoMsg;
            };
            MsgConvertVestingAccount: {
                typeUrl: string;
                encode(message: _251.MsgConvertVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgConvertVestingAccount;
                fromJSON(object: any): _251.MsgConvertVestingAccount;
                toJSON(message: _251.MsgConvertVestingAccount): unknown;
                fromPartial(object: Partial<_251.MsgConvertVestingAccount>): _251.MsgConvertVestingAccount;
                fromAmino(object: _251.MsgConvertVestingAccountAmino): _251.MsgConvertVestingAccount;
                toAmino(message: _251.MsgConvertVestingAccount): _251.MsgConvertVestingAccountAmino;
                fromAminoMsg(object: _251.MsgConvertVestingAccountAminoMsg): _251.MsgConvertVestingAccount;
                fromProtoMsg(message: _251.MsgConvertVestingAccountProtoMsg): _251.MsgConvertVestingAccount;
                toProto(message: _251.MsgConvertVestingAccount): Uint8Array;
                toProtoMsg(message: _251.MsgConvertVestingAccount): _251.MsgConvertVestingAccountProtoMsg;
            };
            MsgConvertVestingAccountResponse: {
                typeUrl: string;
                encode(_: _251.MsgConvertVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.MsgConvertVestingAccountResponse;
                fromJSON(_: any): _251.MsgConvertVestingAccountResponse;
                toJSON(_: _251.MsgConvertVestingAccountResponse): unknown;
                fromPartial(_: Partial<_251.MsgConvertVestingAccountResponse>): _251.MsgConvertVestingAccountResponse;
                fromAmino(_: _251.MsgConvertVestingAccountResponseAmino): _251.MsgConvertVestingAccountResponse;
                toAmino(_: _251.MsgConvertVestingAccountResponse): _251.MsgConvertVestingAccountResponseAmino;
                fromAminoMsg(object: _251.MsgConvertVestingAccountResponseAminoMsg): _251.MsgConvertVestingAccountResponse;
                fromProtoMsg(message: _251.MsgConvertVestingAccountResponseProtoMsg): _251.MsgConvertVestingAccountResponse;
                toProto(message: _251.MsgConvertVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _251.MsgConvertVestingAccountResponse): _251.MsgConvertVestingAccountResponseProtoMsg;
            };
            QueryBalancesRequest: {
                typeUrl: string;
                encode(message: _250.QueryBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryBalancesRequest;
                fromJSON(object: any): _250.QueryBalancesRequest;
                toJSON(message: _250.QueryBalancesRequest): unknown;
                fromPartial(object: Partial<_250.QueryBalancesRequest>): _250.QueryBalancesRequest;
                fromAmino(object: _250.QueryBalancesRequestAmino): _250.QueryBalancesRequest;
                toAmino(message: _250.QueryBalancesRequest): _250.QueryBalancesRequestAmino;
                fromAminoMsg(object: _250.QueryBalancesRequestAminoMsg): _250.QueryBalancesRequest;
                fromProtoMsg(message: _250.QueryBalancesRequestProtoMsg): _250.QueryBalancesRequest;
                toProto(message: _250.QueryBalancesRequest): Uint8Array;
                toProtoMsg(message: _250.QueryBalancesRequest): _250.QueryBalancesRequestProtoMsg;
            };
            QueryBalancesResponse: {
                typeUrl: string;
                encode(message: _250.QueryBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.QueryBalancesResponse;
                fromJSON(object: any): _250.QueryBalancesResponse;
                toJSON(message: _250.QueryBalancesResponse): unknown;
                fromPartial(object: Partial<_250.QueryBalancesResponse>): _250.QueryBalancesResponse;
                fromAmino(object: _250.QueryBalancesResponseAmino): _250.QueryBalancesResponse;
                toAmino(message: _250.QueryBalancesResponse): _250.QueryBalancesResponseAmino;
                fromAminoMsg(object: _250.QueryBalancesResponseAminoMsg): _250.QueryBalancesResponse;
                fromProtoMsg(message: _250.QueryBalancesResponseProtoMsg): _250.QueryBalancesResponse;
                toProto(message: _250.QueryBalancesResponse): Uint8Array;
                toProtoMsg(message: _250.QueryBalancesResponse): _250.QueryBalancesResponseProtoMsg;
            };
            EventCreateClawbackVestingAccount: {
                typeUrl: string;
                encode(message: _249.EventCreateClawbackVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.EventCreateClawbackVestingAccount;
                fromJSON(object: any): _249.EventCreateClawbackVestingAccount;
                toJSON(message: _249.EventCreateClawbackVestingAccount): unknown;
                fromPartial(object: Partial<_249.EventCreateClawbackVestingAccount>): _249.EventCreateClawbackVestingAccount;
                fromAmino(object: _249.EventCreateClawbackVestingAccountAmino): _249.EventCreateClawbackVestingAccount;
                toAmino(message: _249.EventCreateClawbackVestingAccount): _249.EventCreateClawbackVestingAccountAmino;
                fromAminoMsg(object: _249.EventCreateClawbackVestingAccountAminoMsg): _249.EventCreateClawbackVestingAccount;
                fromProtoMsg(message: _249.EventCreateClawbackVestingAccountProtoMsg): _249.EventCreateClawbackVestingAccount;
                toProto(message: _249.EventCreateClawbackVestingAccount): Uint8Array;
                toProtoMsg(message: _249.EventCreateClawbackVestingAccount): _249.EventCreateClawbackVestingAccountProtoMsg;
            };
            EventFundVestingAccount: {
                typeUrl: string;
                encode(message: _249.EventFundVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.EventFundVestingAccount;
                fromJSON(object: any): _249.EventFundVestingAccount;
                toJSON(message: _249.EventFundVestingAccount): unknown;
                fromPartial(object: Partial<_249.EventFundVestingAccount>): _249.EventFundVestingAccount;
                fromAmino(object: _249.EventFundVestingAccountAmino): _249.EventFundVestingAccount;
                toAmino(message: _249.EventFundVestingAccount): _249.EventFundVestingAccountAmino;
                fromAminoMsg(object: _249.EventFundVestingAccountAminoMsg): _249.EventFundVestingAccount;
                fromProtoMsg(message: _249.EventFundVestingAccountProtoMsg): _249.EventFundVestingAccount;
                toProto(message: _249.EventFundVestingAccount): Uint8Array;
                toProtoMsg(message: _249.EventFundVestingAccount): _249.EventFundVestingAccountProtoMsg;
            };
            EventClawback: {
                typeUrl: string;
                encode(message: _249.EventClawback, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.EventClawback;
                fromJSON(object: any): _249.EventClawback;
                toJSON(message: _249.EventClawback): unknown;
                fromPartial(object: Partial<_249.EventClawback>): _249.EventClawback;
                fromAmino(object: _249.EventClawbackAmino): _249.EventClawback;
                toAmino(message: _249.EventClawback): _249.EventClawbackAmino;
                fromAminoMsg(object: _249.EventClawbackAminoMsg): _249.EventClawback;
                fromProtoMsg(message: _249.EventClawbackProtoMsg): _249.EventClawback;
                toProto(message: _249.EventClawback): Uint8Array;
                toProtoMsg(message: _249.EventClawback): _249.EventClawbackProtoMsg;
            };
            EventUpdateVestingFunder: {
                typeUrl: string;
                encode(message: _249.EventUpdateVestingFunder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.EventUpdateVestingFunder;
                fromJSON(object: any): _249.EventUpdateVestingFunder;
                toJSON(message: _249.EventUpdateVestingFunder): unknown;
                fromPartial(object: Partial<_249.EventUpdateVestingFunder>): _249.EventUpdateVestingFunder;
                fromAmino(object: _249.EventUpdateVestingFunderAmino): _249.EventUpdateVestingFunder;
                toAmino(message: _249.EventUpdateVestingFunder): _249.EventUpdateVestingFunderAmino;
                fromAminoMsg(object: _249.EventUpdateVestingFunderAminoMsg): _249.EventUpdateVestingFunder;
                fromProtoMsg(message: _249.EventUpdateVestingFunderProtoMsg): _249.EventUpdateVestingFunder;
                toProto(message: _249.EventUpdateVestingFunder): Uint8Array;
                toProtoMsg(message: _249.EventUpdateVestingFunder): _249.EventUpdateVestingFunderProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            evmos: {
                erc20: {
                    v1: _416.MsgClientImpl;
                };
                inflation: {
                    v1: _417.MsgClientImpl;
                };
                revenue: {
                    v1: _418.MsgClientImpl;
                };
                vesting: {
                    v2: _419.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        accountInfo(request: import("../cosmos/auth/v1beta1/query").QueryAccountInfoRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        sendEnabled(request: import("../cosmos/bank/v1beta1/query").QuerySendEnabledRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorDistributionInfo(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: import("../cosmos/orm/query/v1alpha1/query").GetRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").GetResponse>;
                            list(request: import("../cosmos/orm/query/v1alpha1/query").ListRequest): Promise<import("../cosmos/orm/query/v1alpha1/query").ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        txDecode(request: import("../cosmos/tx/v1beta1/service").TxDecodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeResponse>;
                        txEncode(request: import("../cosmos/tx/v1beta1/service").TxEncodeRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeResponse>;
                        txEncodeAmino(request: import("../cosmos/tx/v1beta1/service").TxEncodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxEncodeAminoResponse>;
                        txDecodeAmino(request: import("../cosmos/tx/v1beta1/service").TxDecodeAminoRequest): Promise<import("../cosmos/tx/v1beta1/service").TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
            evmos: {
                epochs: {
                    v1: {
                        epochInfos(request?: _231.QueryEpochsInfoRequest): Promise<_231.QueryEpochsInfoResponse>;
                        currentEpoch(request: _231.QueryCurrentEpochRequest): Promise<_231.QueryCurrentEpochResponse>;
                    };
                };
                erc20: {
                    v1: {
                        tokenPairs(request?: _235.QueryTokenPairsRequest): Promise<_235.QueryTokenPairsResponse>;
                        tokenPair(request: _235.QueryTokenPairRequest): Promise<_235.QueryTokenPairResponse>;
                        params(request?: _235.QueryParamsRequest): Promise<_235.QueryParamsResponse>;
                    };
                };
                inflation: {
                    v1: {
                        period(request?: _241.QueryPeriodRequest): Promise<_241.QueryPeriodResponse>;
                        epochMintProvision(request?: _241.QueryEpochMintProvisionRequest): Promise<_241.QueryEpochMintProvisionResponse>;
                        skippedEpochs(request?: _241.QuerySkippedEpochsRequest): Promise<_241.QuerySkippedEpochsResponse>;
                        circulatingSupply(request?: _241.QueryCirculatingSupplyRequest): Promise<_241.QueryCirculatingSupplyResponse>;
                        inflationRate(request?: _241.QueryInflationRateRequest): Promise<_241.QueryInflationRateResponse>;
                        params(request?: _241.QueryParamsRequest): Promise<_241.QueryParamsResponse>;
                    };
                };
                revenue: {
                    v1: {
                        revenues(request?: _245.QueryRevenuesRequest): Promise<_245.QueryRevenuesResponse>;
                        revenue(request: _245.QueryRevenueRequest): Promise<_245.QueryRevenueResponse>;
                        params(request?: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                        deployerRevenues(request: _245.QueryDeployerRevenuesRequest): Promise<_245.QueryDeployerRevenuesResponse>;
                        withdrawerRevenues(request: _245.QueryWithdrawerRevenuesRequest): Promise<_245.QueryWithdrawerRevenuesResponse>;
                    };
                };
                vesting: {
                    v2: {
                        balances(request: _250.QueryBalancesRequest): Promise<_250.QueryBalancesResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
            evmos: {
                epochs: {
                    v1: _406.LCDQueryClient;
                };
                erc20: {
                    v1: _407.LCDQueryClient;
                };
                inflation: {
                    v1: _408.LCDQueryClient;
                };
                revenue: {
                    v1: _409.LCDQueryClient;
                };
                vesting: {
                    v2: _410.LCDQueryClient;
                };
            };
        }>;
    };
}
