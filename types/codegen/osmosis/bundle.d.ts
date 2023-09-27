import * as _136 from "./downtime-detector/v1beta1/downtime_duration";
import * as _137 from "./downtime-detector/v1beta1/genesis";
import * as _138 from "./downtime-detector/v1beta1/query";
import * as _139 from "./epochs/genesis";
import * as _140 from "./epochs/query";
import * as _141 from "./gamm/pool-models/balancer/balancerPool";
import * as _142 from "./gamm/v1beta1/genesis";
import * as _143 from "./gamm/v1beta1/query";
import * as _144 from "./gamm/v1beta1/tx";
import * as _145 from "./gamm/pool-models/balancer/tx/tx";
import * as _146 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _147 from "./gamm/pool-models/stableswap/tx";
import * as _148 from "./gamm/v2/query";
import * as _149 from "./ibc-rate-limit/v1beta1/params";
import * as _150 from "./ibc-rate-limit/v1beta1/query";
import * as _151 from "./incentives/gauge";
import * as _152 from "./incentives/genesis";
import * as _153 from "./incentives/params";
import * as _154 from "./incentives/query";
import * as _155 from "./incentives/tx";
import * as _156 from "./lockup/genesis";
import * as _157 from "./lockup/lock";
import * as _158 from "./lockup/params";
import * as _159 from "./lockup/query";
import * as _160 from "./lockup/tx";
import * as _161 from "./mint/v1beta1/genesis";
import * as _162 from "./mint/v1beta1/mint";
import * as _163 from "./mint/v1beta1/query";
import * as _164 from "./pool-incentives/v1beta1/genesis";
import * as _165 from "./pool-incentives/v1beta1/gov";
import * as _166 from "./pool-incentives/v1beta1/incentives";
import * as _167 from "./pool-incentives/v1beta1/query";
import * as _168 from "./protorev/v1beta1/genesis";
import * as _169 from "./protorev/v1beta1/gov";
import * as _170 from "./protorev/v1beta1/params";
import * as _171 from "./protorev/v1beta1/protorev";
import * as _172 from "./protorev/v1beta1/query";
import * as _173 from "./protorev/v1beta1/tx";
import * as _174 from "./sumtree/v1beta1/tree";
import * as _175 from "./superfluid/genesis";
import * as _176 from "./superfluid/params";
import * as _177 from "./superfluid/query";
import * as _178 from "./superfluid/superfluid";
import * as _179 from "./superfluid/tx";
import * as _180 from "./swaprouter/v1beta1/genesis";
import * as _181 from "./swaprouter/v1beta1/module_route";
import * as _182 from "./swaprouter/v1beta1/query";
import * as _183 from "./swaprouter/v1beta1/swap_route";
import * as _184 from "./swaprouter/v1beta1/tx";
import * as _185 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _186 from "./tokenfactory/v1beta1/genesis";
import * as _187 from "./tokenfactory/v1beta1/params";
import * as _188 from "./tokenfactory/v1beta1/query";
import * as _189 from "./tokenfactory/v1beta1/tx";
import * as _190 from "./twap/v1beta1/genesis";
import * as _191 from "./twap/v1beta1/query";
import * as _192 from "./twap/v1beta1/twap_record";
import * as _193 from "./txfees/v1beta1/feetoken";
import * as _194 from "./txfees/v1beta1/genesis";
import * as _195 from "./txfees/v1beta1/gov";
import * as _196 from "./txfees/v1beta1/query";
import * as _197 from "./valset-pref/v1beta1/query";
import * as _198 from "./valset-pref/v1beta1/state";
import * as _199 from "./valset-pref/v1beta1/tx";
import * as _383 from "./downtime-detector/v1beta1/query.lcd";
import * as _384 from "./epochs/query.lcd";
import * as _385 from "./gamm/v1beta1/query.lcd";
import * as _386 from "./gamm/v2/query.lcd";
import * as _387 from "./ibc-rate-limit/v1beta1/query.lcd";
import * as _388 from "./incentives/query.lcd";
import * as _389 from "./lockup/query.lcd";
import * as _390 from "./mint/v1beta1/query.lcd";
import * as _391 from "./pool-incentives/v1beta1/query.lcd";
import * as _392 from "./protorev/v1beta1/query.lcd";
import * as _393 from "./superfluid/query.lcd";
import * as _394 from "./swaprouter/v1beta1/query.lcd";
import * as _395 from "./tokenfactory/v1beta1/query.lcd";
import * as _396 from "./twap/v1beta1/query.lcd";
import * as _397 from "./txfees/v1beta1/query.lcd";
import * as _398 from "./valset-pref/v1beta1/query.lcd";
import * as _399 from "./downtime-detector/v1beta1/query.rpc.Query";
import * as _400 from "./epochs/query.rpc.Query";
import * as _401 from "./gamm/v1beta1/query.rpc.Query";
import * as _402 from "./gamm/v2/query.rpc.Query";
import * as _403 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _404 from "./incentives/query.rpc.Query";
import * as _405 from "./lockup/query.rpc.Query";
import * as _406 from "./mint/v1beta1/query.rpc.Query";
import * as _407 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _408 from "./protorev/v1beta1/query.rpc.Query";
import * as _409 from "./superfluid/query.rpc.Query";
import * as _410 from "./swaprouter/v1beta1/query.rpc.Query";
import * as _411 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _412 from "./twap/v1beta1/query.rpc.Query";
import * as _413 from "./txfees/v1beta1/query.rpc.Query";
import * as _414 from "./valset-pref/v1beta1/query.rpc.Query";
import * as _415 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _416 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _417 from "./gamm/v1beta1/tx.rpc.msg";
import * as _418 from "./incentives/tx.rpc.msg";
import * as _419 from "./lockup/tx.rpc.msg";
import * as _420 from "./protorev/v1beta1/tx.rpc.msg";
import * as _421 from "./superfluid/tx.rpc.msg";
import * as _422 from "./swaprouter/v1beta1/tx.rpc.msg";
import * as _423 from "./tokenfactory/v1beta1/tx.rpc.msg";
import * as _424 from "./valset-pref/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace downtimedetector {
        const v1beta1: {
            QueryClientImpl: typeof _399.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                recoveredSinceDowntimeOfLength(request: _138.RecoveredSinceDowntimeOfLengthRequest): Promise<_138.RecoveredSinceDowntimeOfLengthResponse>;
            };
            LCDQueryClient: typeof _383.LCDQueryClient;
            RecoveredSinceDowntimeOfLengthRequest: {
                typeUrl: string;
                encode(message: _138.RecoveredSinceDowntimeOfLengthRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.RecoveredSinceDowntimeOfLengthRequest;
                fromJSON(object: any): _138.RecoveredSinceDowntimeOfLengthRequest;
                toJSON(message: _138.RecoveredSinceDowntimeOfLengthRequest): unknown;
                fromPartial(object: Partial<_138.RecoveredSinceDowntimeOfLengthRequest>): _138.RecoveredSinceDowntimeOfLengthRequest;
                fromAmino(object: _138.RecoveredSinceDowntimeOfLengthRequestAmino): _138.RecoveredSinceDowntimeOfLengthRequest;
                toAmino(message: _138.RecoveredSinceDowntimeOfLengthRequest): _138.RecoveredSinceDowntimeOfLengthRequestAmino;
                fromAminoMsg(object: _138.RecoveredSinceDowntimeOfLengthRequestAminoMsg): _138.RecoveredSinceDowntimeOfLengthRequest;
                toAminoMsg(message: _138.RecoveredSinceDowntimeOfLengthRequest): _138.RecoveredSinceDowntimeOfLengthRequestAminoMsg;
                fromProtoMsg(message: _138.RecoveredSinceDowntimeOfLengthRequestProtoMsg): _138.RecoveredSinceDowntimeOfLengthRequest;
                toProto(message: _138.RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
                toProtoMsg(message: _138.RecoveredSinceDowntimeOfLengthRequest): _138.RecoveredSinceDowntimeOfLengthRequestProtoMsg;
            };
            RecoveredSinceDowntimeOfLengthResponse: {
                typeUrl: string;
                encode(message: _138.RecoveredSinceDowntimeOfLengthResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.RecoveredSinceDowntimeOfLengthResponse;
                fromJSON(object: any): _138.RecoveredSinceDowntimeOfLengthResponse;
                toJSON(message: _138.RecoveredSinceDowntimeOfLengthResponse): unknown;
                fromPartial(object: Partial<_138.RecoveredSinceDowntimeOfLengthResponse>): _138.RecoveredSinceDowntimeOfLengthResponse;
                fromAmino(object: _138.RecoveredSinceDowntimeOfLengthResponseAmino): _138.RecoveredSinceDowntimeOfLengthResponse;
                toAmino(message: _138.RecoveredSinceDowntimeOfLengthResponse): _138.RecoveredSinceDowntimeOfLengthResponseAmino;
                fromAminoMsg(object: _138.RecoveredSinceDowntimeOfLengthResponseAminoMsg): _138.RecoveredSinceDowntimeOfLengthResponse;
                toAminoMsg(message: _138.RecoveredSinceDowntimeOfLengthResponse): _138.RecoveredSinceDowntimeOfLengthResponseAminoMsg;
                fromProtoMsg(message: _138.RecoveredSinceDowntimeOfLengthResponseProtoMsg): _138.RecoveredSinceDowntimeOfLengthResponse;
                toProto(message: _138.RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
                toProtoMsg(message: _138.RecoveredSinceDowntimeOfLengthResponse): _138.RecoveredSinceDowntimeOfLengthResponseProtoMsg;
            };
            GenesisDowntimeEntry: {
                typeUrl: string;
                encode(message: _137.GenesisDowntimeEntry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.GenesisDowntimeEntry;
                fromJSON(object: any): _137.GenesisDowntimeEntry;
                toJSON(message: _137.GenesisDowntimeEntry): unknown;
                fromPartial(object: Partial<_137.GenesisDowntimeEntry>): _137.GenesisDowntimeEntry;
                fromAmino(object: _137.GenesisDowntimeEntryAmino): _137.GenesisDowntimeEntry;
                toAmino(message: _137.GenesisDowntimeEntry): _137.GenesisDowntimeEntryAmino;
                fromAminoMsg(object: _137.GenesisDowntimeEntryAminoMsg): _137.GenesisDowntimeEntry;
                toAminoMsg(message: _137.GenesisDowntimeEntry): _137.GenesisDowntimeEntryAminoMsg;
                fromProtoMsg(message: _137.GenesisDowntimeEntryProtoMsg): _137.GenesisDowntimeEntry;
                toProto(message: _137.GenesisDowntimeEntry): Uint8Array;
                toProtoMsg(message: _137.GenesisDowntimeEntry): _137.GenesisDowntimeEntryProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _137.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.GenesisState;
                fromJSON(object: any): _137.GenesisState;
                toJSON(message: _137.GenesisState): unknown;
                fromPartial(object: Partial<_137.GenesisState>): _137.GenesisState;
                fromAmino(object: _137.GenesisStateAmino): _137.GenesisState;
                toAmino(message: _137.GenesisState): _137.GenesisStateAmino;
                fromAminoMsg(object: _137.GenesisStateAminoMsg): _137.GenesisState;
                toAminoMsg(message: _137.GenesisState): _137.GenesisStateAminoMsg;
                fromProtoMsg(message: _137.GenesisStateProtoMsg): _137.GenesisState;
                toProto(message: _137.GenesisState): Uint8Array;
                toProtoMsg(message: _137.GenesisState): _137.GenesisStateProtoMsg;
            };
            downtimeFromJSON(object: any): _136.Downtime;
            downtimeToJSON(object: _136.Downtime): string;
            Downtime: typeof _136.Downtime;
            DowntimeSDKType: typeof _136.Downtime;
            DowntimeAmino: typeof _136.Downtime;
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _400.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                epochInfos(request?: _140.QueryEpochsInfoRequest): Promise<_140.QueryEpochsInfoResponse>;
                currentEpoch(request: _140.QueryCurrentEpochRequest): Promise<_140.QueryCurrentEpochResponse>;
            };
            LCDQueryClient: typeof _384.LCDQueryClient;
            QueryEpochsInfoRequest: {
                typeUrl: string;
                encode(_: _140.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryEpochsInfoRequest;
                fromJSON(_: any): _140.QueryEpochsInfoRequest;
                toJSON(_: _140.QueryEpochsInfoRequest): unknown;
                fromPartial(_: Partial<_140.QueryEpochsInfoRequest>): _140.QueryEpochsInfoRequest;
                fromAmino(_: _140.QueryEpochsInfoRequestAmino): _140.QueryEpochsInfoRequest;
                toAmino(_: _140.QueryEpochsInfoRequest): _140.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _140.QueryEpochsInfoRequestAminoMsg): _140.QueryEpochsInfoRequest;
                toAminoMsg(message: _140.QueryEpochsInfoRequest): _140.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _140.QueryEpochsInfoRequestProtoMsg): _140.QueryEpochsInfoRequest;
                toProto(message: _140.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _140.QueryEpochsInfoRequest): _140.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                encode(message: _140.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryEpochsInfoResponse;
                fromJSON(object: any): _140.QueryEpochsInfoResponse;
                toJSON(message: _140.QueryEpochsInfoResponse): unknown;
                fromPartial(object: Partial<_140.QueryEpochsInfoResponse>): _140.QueryEpochsInfoResponse;
                fromAmino(object: _140.QueryEpochsInfoResponseAmino): _140.QueryEpochsInfoResponse;
                toAmino(message: _140.QueryEpochsInfoResponse): _140.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _140.QueryEpochsInfoResponseAminoMsg): _140.QueryEpochsInfoResponse;
                toAminoMsg(message: _140.QueryEpochsInfoResponse): _140.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _140.QueryEpochsInfoResponseProtoMsg): _140.QueryEpochsInfoResponse;
                toProto(message: _140.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _140.QueryEpochsInfoResponse): _140.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                encode(message: _140.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryCurrentEpochRequest;
                fromJSON(object: any): _140.QueryCurrentEpochRequest;
                toJSON(message: _140.QueryCurrentEpochRequest): unknown;
                fromPartial(object: Partial<_140.QueryCurrentEpochRequest>): _140.QueryCurrentEpochRequest;
                fromAmino(object: _140.QueryCurrentEpochRequestAmino): _140.QueryCurrentEpochRequest;
                toAmino(message: _140.QueryCurrentEpochRequest): _140.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _140.QueryCurrentEpochRequestAminoMsg): _140.QueryCurrentEpochRequest;
                toAminoMsg(message: _140.QueryCurrentEpochRequest): _140.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _140.QueryCurrentEpochRequestProtoMsg): _140.QueryCurrentEpochRequest;
                toProto(message: _140.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _140.QueryCurrentEpochRequest): _140.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                encode(message: _140.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.QueryCurrentEpochResponse;
                fromJSON(object: any): _140.QueryCurrentEpochResponse;
                toJSON(message: _140.QueryCurrentEpochResponse): unknown;
                fromPartial(object: Partial<_140.QueryCurrentEpochResponse>): _140.QueryCurrentEpochResponse;
                fromAmino(object: _140.QueryCurrentEpochResponseAmino): _140.QueryCurrentEpochResponse;
                toAmino(message: _140.QueryCurrentEpochResponse): _140.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _140.QueryCurrentEpochResponseAminoMsg): _140.QueryCurrentEpochResponse;
                toAminoMsg(message: _140.QueryCurrentEpochResponse): _140.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _140.QueryCurrentEpochResponseProtoMsg): _140.QueryCurrentEpochResponse;
                toProto(message: _140.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _140.QueryCurrentEpochResponse): _140.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                encode(message: _139.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.EpochInfo;
                fromJSON(object: any): _139.EpochInfo;
                toJSON(message: _139.EpochInfo): unknown;
                fromPartial(object: Partial<_139.EpochInfo>): _139.EpochInfo;
                fromAmino(object: _139.EpochInfoAmino): _139.EpochInfo;
                toAmino(message: _139.EpochInfo): _139.EpochInfoAmino;
                fromAminoMsg(object: _139.EpochInfoAminoMsg): _139.EpochInfo;
                toAminoMsg(message: _139.EpochInfo): _139.EpochInfoAminoMsg;
                fromProtoMsg(message: _139.EpochInfoProtoMsg): _139.EpochInfo;
                toProto(message: _139.EpochInfo): Uint8Array;
                toProtoMsg(message: _139.EpochInfo): _139.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _139.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.GenesisState;
                fromJSON(object: any): _139.GenesisState;
                toJSON(message: _139.GenesisState): unknown;
                fromPartial(object: Partial<_139.GenesisState>): _139.GenesisState;
                fromAmino(object: _139.GenesisStateAmino): _139.GenesisState;
                toAmino(message: _139.GenesisState): _139.GenesisStateAmino;
                fromAminoMsg(object: _139.GenesisStateAminoMsg): _139.GenesisState;
                toAminoMsg(message: _139.GenesisState): _139.GenesisStateAminoMsg;
                fromProtoMsg(message: _139.GenesisStateProtoMsg): _139.GenesisState;
                toProto(message: _139.GenesisState): Uint8Array;
                toProtoMsg(message: _139.GenesisState): _139.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        const v1beta1: {
            MsgClientImpl: typeof _417.MsgClientImpl;
            QueryClientImpl: typeof _401.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                pools(request?: _143.QueryPoolsRequest): Promise<_143.QueryPoolsResponse>;
                numPools(request?: _143.QueryNumPoolsRequest): Promise<_143.QueryNumPoolsResponse>;
                totalLiquidity(request?: _143.QueryTotalLiquidityRequest): Promise<_143.QueryTotalLiquidityResponse>;
                poolsWithFilter(request: _143.QueryPoolsWithFilterRequest): Promise<_143.QueryPoolsWithFilterResponse>;
                pool(request: _143.QueryPoolRequest): Promise<_143.QueryPoolResponse>;
                poolType(request: _143.QueryPoolTypeRequest): Promise<_143.QueryPoolTypeResponse>;
                calcJoinPoolNoSwapShares(request: _143.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_143.QueryCalcJoinPoolNoSwapSharesResponse>;
                calcJoinPoolShares(request: _143.QueryCalcJoinPoolSharesRequest): Promise<_143.QueryCalcJoinPoolSharesResponse>;
                calcExitPoolCoinsFromShares(request: _143.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_143.QueryCalcExitPoolCoinsFromSharesResponse>;
                poolParams(request: _143.QueryPoolParamsRequest): Promise<_143.QueryPoolParamsResponse>;
                totalPoolLiquidity(request: _143.QueryTotalPoolLiquidityRequest): Promise<_143.QueryTotalPoolLiquidityResponse>;
                totalShares(request: _143.QueryTotalSharesRequest): Promise<_143.QueryTotalSharesResponse>;
                spotPrice(request: _143.QuerySpotPriceRequest): Promise<_143.QuerySpotPriceResponse>;
                estimateSwapExactAmountIn(request: _143.QuerySwapExactAmountInRequest): Promise<_143.QuerySwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _143.QuerySwapExactAmountOutRequest): Promise<_143.QuerySwapExactAmountOutResponse>;
            };
            LCDQueryClient: typeof _385.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    joinPool(value: _144.MsgJoinPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitPool(value: _144.MsgExitPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountIn(value: _144.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _144.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapExternAmountIn(value: _144.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    joinSwapShareAmountOut(value: _144.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapExternAmountOut(value: _144.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exitSwapShareAmountIn(value: _144.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    joinPool(value: _144.MsgJoinPool): {
                        typeUrl: string;
                        value: _144.MsgJoinPool;
                    };
                    exitPool(value: _144.MsgExitPool): {
                        typeUrl: string;
                        value: _144.MsgExitPool;
                    };
                    swapExactAmountIn(value: _144.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _144.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _144.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _144.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _144.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _144.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _144.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _144.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _144.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _144.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _144.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _144.MsgExitSwapShareAmountIn;
                    };
                };
                toJSON: {
                    joinPool(value: _144.MsgJoinPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitPool(value: _144.MsgExitPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountIn(value: _144.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _144.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapExternAmountIn(value: _144.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    joinSwapShareAmountOut(value: _144.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapExternAmountOut(value: _144.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exitSwapShareAmountIn(value: _144.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    joinPool(value: any): {
                        typeUrl: string;
                        value: _144.MsgJoinPool;
                    };
                    exitPool(value: any): {
                        typeUrl: string;
                        value: _144.MsgExitPool;
                    };
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _144.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _144.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: any): {
                        typeUrl: string;
                        value: _144.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: any): {
                        typeUrl: string;
                        value: _144.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: any): {
                        typeUrl: string;
                        value: _144.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: any): {
                        typeUrl: string;
                        value: _144.MsgExitSwapShareAmountIn;
                    };
                };
                fromPartial: {
                    joinPool(value: _144.MsgJoinPool): {
                        typeUrl: string;
                        value: _144.MsgJoinPool;
                    };
                    exitPool(value: _144.MsgExitPool): {
                        typeUrl: string;
                        value: _144.MsgExitPool;
                    };
                    swapExactAmountIn(value: _144.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _144.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _144.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _144.MsgSwapExactAmountOut;
                    };
                    joinSwapExternAmountIn(value: _144.MsgJoinSwapExternAmountIn): {
                        typeUrl: string;
                        value: _144.MsgJoinSwapExternAmountIn;
                    };
                    joinSwapShareAmountOut(value: _144.MsgJoinSwapShareAmountOut): {
                        typeUrl: string;
                        value: _144.MsgJoinSwapShareAmountOut;
                    };
                    exitSwapExternAmountOut(value: _144.MsgExitSwapExternAmountOut): {
                        typeUrl: string;
                        value: _144.MsgExitSwapExternAmountOut;
                    };
                    exitSwapShareAmountIn(value: _144.MsgExitSwapShareAmountIn): {
                        typeUrl: string;
                        value: _144.MsgExitSwapShareAmountIn;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: _144.MsgJoinPool) => _144.MsgJoinPoolAmino;
                    fromAmino: (object: _144.MsgJoinPoolAmino) => _144.MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: _144.MsgExitPool) => _144.MsgExitPoolAmino;
                    fromAmino: (object: _144.MsgExitPoolAmino) => _144.MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSwapExactAmountIn) => _144.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _144.MsgSwapExactAmountInAmino) => _144.MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _144.MsgSwapExactAmountOut) => _144.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _144.MsgSwapExactAmountOutAmino) => _144.MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: _144.MsgJoinSwapExternAmountIn) => _144.MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: _144.MsgJoinSwapExternAmountInAmino) => _144.MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: _144.MsgJoinSwapShareAmountOut) => _144.MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: _144.MsgJoinSwapShareAmountOutAmino) => _144.MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: _144.MsgExitSwapExternAmountOut) => _144.MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: _144.MsgExitSwapExternAmountOutAmino) => _144.MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: _144.MsgExitSwapShareAmountIn) => _144.MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: _144.MsgExitSwapShareAmountInAmino) => _144.MsgExitSwapShareAmountIn;
                };
            };
            MsgJoinPool: {
                typeUrl: string;
                encode(message: _144.MsgJoinPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgJoinPool;
                fromJSON(object: any): _144.MsgJoinPool;
                toJSON(message: _144.MsgJoinPool): unknown;
                fromPartial(object: Partial<_144.MsgJoinPool>): _144.MsgJoinPool;
                fromAmino(object: _144.MsgJoinPoolAmino): _144.MsgJoinPool;
                toAmino(message: _144.MsgJoinPool): _144.MsgJoinPoolAmino;
                fromAminoMsg(object: _144.MsgJoinPoolAminoMsg): _144.MsgJoinPool;
                toAminoMsg(message: _144.MsgJoinPool): _144.MsgJoinPoolAminoMsg;
                fromProtoMsg(message: _144.MsgJoinPoolProtoMsg): _144.MsgJoinPool;
                toProto(message: _144.MsgJoinPool): Uint8Array;
                toProtoMsg(message: _144.MsgJoinPool): _144.MsgJoinPoolProtoMsg;
            };
            MsgJoinPoolResponse: {
                typeUrl: string;
                encode(message: _144.MsgJoinPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgJoinPoolResponse;
                fromJSON(object: any): _144.MsgJoinPoolResponse;
                toJSON(message: _144.MsgJoinPoolResponse): unknown;
                fromPartial(object: Partial<_144.MsgJoinPoolResponse>): _144.MsgJoinPoolResponse;
                fromAmino(object: _144.MsgJoinPoolResponseAmino): _144.MsgJoinPoolResponse;
                toAmino(message: _144.MsgJoinPoolResponse): _144.MsgJoinPoolResponseAmino;
                fromAminoMsg(object: _144.MsgJoinPoolResponseAminoMsg): _144.MsgJoinPoolResponse;
                toAminoMsg(message: _144.MsgJoinPoolResponse): _144.MsgJoinPoolResponseAminoMsg;
                fromProtoMsg(message: _144.MsgJoinPoolResponseProtoMsg): _144.MsgJoinPoolResponse;
                toProto(message: _144.MsgJoinPoolResponse): Uint8Array;
                toProtoMsg(message: _144.MsgJoinPoolResponse): _144.MsgJoinPoolResponseProtoMsg;
            };
            MsgExitPool: {
                typeUrl: string;
                encode(message: _144.MsgExitPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgExitPool;
                fromJSON(object: any): _144.MsgExitPool;
                toJSON(message: _144.MsgExitPool): unknown;
                fromPartial(object: Partial<_144.MsgExitPool>): _144.MsgExitPool;
                fromAmino(object: _144.MsgExitPoolAmino): _144.MsgExitPool;
                toAmino(message: _144.MsgExitPool): _144.MsgExitPoolAmino;
                fromAminoMsg(object: _144.MsgExitPoolAminoMsg): _144.MsgExitPool;
                toAminoMsg(message: _144.MsgExitPool): _144.MsgExitPoolAminoMsg;
                fromProtoMsg(message: _144.MsgExitPoolProtoMsg): _144.MsgExitPool;
                toProto(message: _144.MsgExitPool): Uint8Array;
                toProtoMsg(message: _144.MsgExitPool): _144.MsgExitPoolProtoMsg;
            };
            MsgExitPoolResponse: {
                typeUrl: string;
                encode(message: _144.MsgExitPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgExitPoolResponse;
                fromJSON(object: any): _144.MsgExitPoolResponse;
                toJSON(message: _144.MsgExitPoolResponse): unknown;
                fromPartial(object: Partial<_144.MsgExitPoolResponse>): _144.MsgExitPoolResponse;
                fromAmino(object: _144.MsgExitPoolResponseAmino): _144.MsgExitPoolResponse;
                toAmino(message: _144.MsgExitPoolResponse): _144.MsgExitPoolResponseAmino;
                fromAminoMsg(object: _144.MsgExitPoolResponseAminoMsg): _144.MsgExitPoolResponse;
                toAminoMsg(message: _144.MsgExitPoolResponse): _144.MsgExitPoolResponseAminoMsg;
                fromProtoMsg(message: _144.MsgExitPoolResponseProtoMsg): _144.MsgExitPoolResponse;
                toProto(message: _144.MsgExitPoolResponse): Uint8Array;
                toProtoMsg(message: _144.MsgExitPoolResponse): _144.MsgExitPoolResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _144.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.SwapAmountInRoute;
                fromJSON(object: any): _144.SwapAmountInRoute;
                toJSON(message: _144.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_144.SwapAmountInRoute>): _144.SwapAmountInRoute;
                fromAmino(object: _144.SwapAmountInRouteAmino): _144.SwapAmountInRoute;
                toAmino(message: _144.SwapAmountInRoute): _144.SwapAmountInRouteAmino;
                fromAminoMsg(object: _144.SwapAmountInRouteAminoMsg): _144.SwapAmountInRoute;
                toAminoMsg(message: _144.SwapAmountInRoute): _144.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _144.SwapAmountInRouteProtoMsg): _144.SwapAmountInRoute;
                toProto(message: _144.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _144.SwapAmountInRoute): _144.SwapAmountInRouteProtoMsg;
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _144.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgSwapExactAmountIn;
                fromJSON(object: any): _144.MsgSwapExactAmountIn;
                toJSON(message: _144.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_144.MsgSwapExactAmountIn>): _144.MsgSwapExactAmountIn;
                fromAmino(object: _144.MsgSwapExactAmountInAmino): _144.MsgSwapExactAmountIn;
                toAmino(message: _144.MsgSwapExactAmountIn): _144.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _144.MsgSwapExactAmountInAminoMsg): _144.MsgSwapExactAmountIn;
                toAminoMsg(message: _144.MsgSwapExactAmountIn): _144.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _144.MsgSwapExactAmountInProtoMsg): _144.MsgSwapExactAmountIn;
                toProto(message: _144.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _144.MsgSwapExactAmountIn): _144.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _144.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _144.MsgSwapExactAmountInResponse;
                toJSON(message: _144.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_144.MsgSwapExactAmountInResponse>): _144.MsgSwapExactAmountInResponse;
                fromAmino(object: _144.MsgSwapExactAmountInResponseAmino): _144.MsgSwapExactAmountInResponse;
                toAmino(message: _144.MsgSwapExactAmountInResponse): _144.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _144.MsgSwapExactAmountInResponseAminoMsg): _144.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _144.MsgSwapExactAmountInResponse): _144.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSwapExactAmountInResponseProtoMsg): _144.MsgSwapExactAmountInResponse;
                toProto(message: _144.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSwapExactAmountInResponse): _144.MsgSwapExactAmountInResponseProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _144.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.SwapAmountOutRoute;
                fromJSON(object: any): _144.SwapAmountOutRoute;
                toJSON(message: _144.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_144.SwapAmountOutRoute>): _144.SwapAmountOutRoute;
                fromAmino(object: _144.SwapAmountOutRouteAmino): _144.SwapAmountOutRoute;
                toAmino(message: _144.SwapAmountOutRoute): _144.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _144.SwapAmountOutRouteAminoMsg): _144.SwapAmountOutRoute;
                toAminoMsg(message: _144.SwapAmountOutRoute): _144.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _144.SwapAmountOutRouteProtoMsg): _144.SwapAmountOutRoute;
                toProto(message: _144.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _144.SwapAmountOutRoute): _144.SwapAmountOutRouteProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _144.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgSwapExactAmountOut;
                fromJSON(object: any): _144.MsgSwapExactAmountOut;
                toJSON(message: _144.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_144.MsgSwapExactAmountOut>): _144.MsgSwapExactAmountOut;
                fromAmino(object: _144.MsgSwapExactAmountOutAmino): _144.MsgSwapExactAmountOut;
                toAmino(message: _144.MsgSwapExactAmountOut): _144.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _144.MsgSwapExactAmountOutAminoMsg): _144.MsgSwapExactAmountOut;
                toAminoMsg(message: _144.MsgSwapExactAmountOut): _144.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _144.MsgSwapExactAmountOutProtoMsg): _144.MsgSwapExactAmountOut;
                toProto(message: _144.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _144.MsgSwapExactAmountOut): _144.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _144.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _144.MsgSwapExactAmountOutResponse;
                toJSON(message: _144.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_144.MsgSwapExactAmountOutResponse>): _144.MsgSwapExactAmountOutResponse;
                fromAmino(object: _144.MsgSwapExactAmountOutResponseAmino): _144.MsgSwapExactAmountOutResponse;
                toAmino(message: _144.MsgSwapExactAmountOutResponse): _144.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _144.MsgSwapExactAmountOutResponseAminoMsg): _144.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _144.MsgSwapExactAmountOutResponse): _144.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _144.MsgSwapExactAmountOutResponseProtoMsg): _144.MsgSwapExactAmountOutResponse;
                toProto(message: _144.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _144.MsgSwapExactAmountOutResponse): _144.MsgSwapExactAmountOutResponseProtoMsg;
            };
            MsgJoinSwapExternAmountIn: {
                typeUrl: string;
                encode(message: _144.MsgJoinSwapExternAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgJoinSwapExternAmountIn;
                fromJSON(object: any): _144.MsgJoinSwapExternAmountIn;
                toJSON(message: _144.MsgJoinSwapExternAmountIn): unknown;
                fromPartial(object: Partial<_144.MsgJoinSwapExternAmountIn>): _144.MsgJoinSwapExternAmountIn;
                fromAmino(object: _144.MsgJoinSwapExternAmountInAmino): _144.MsgJoinSwapExternAmountIn;
                toAmino(message: _144.MsgJoinSwapExternAmountIn): _144.MsgJoinSwapExternAmountInAmino;
                fromAminoMsg(object: _144.MsgJoinSwapExternAmountInAminoMsg): _144.MsgJoinSwapExternAmountIn;
                toAminoMsg(message: _144.MsgJoinSwapExternAmountIn): _144.MsgJoinSwapExternAmountInAminoMsg;
                fromProtoMsg(message: _144.MsgJoinSwapExternAmountInProtoMsg): _144.MsgJoinSwapExternAmountIn;
                toProto(message: _144.MsgJoinSwapExternAmountIn): Uint8Array;
                toProtoMsg(message: _144.MsgJoinSwapExternAmountIn): _144.MsgJoinSwapExternAmountInProtoMsg;
            };
            MsgJoinSwapExternAmountInResponse: {
                typeUrl: string;
                encode(message: _144.MsgJoinSwapExternAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgJoinSwapExternAmountInResponse;
                fromJSON(object: any): _144.MsgJoinSwapExternAmountInResponse;
                toJSON(message: _144.MsgJoinSwapExternAmountInResponse): unknown;
                fromPartial(object: Partial<_144.MsgJoinSwapExternAmountInResponse>): _144.MsgJoinSwapExternAmountInResponse;
                fromAmino(object: _144.MsgJoinSwapExternAmountInResponseAmino): _144.MsgJoinSwapExternAmountInResponse;
                toAmino(message: _144.MsgJoinSwapExternAmountInResponse): _144.MsgJoinSwapExternAmountInResponseAmino;
                fromAminoMsg(object: _144.MsgJoinSwapExternAmountInResponseAminoMsg): _144.MsgJoinSwapExternAmountInResponse;
                toAminoMsg(message: _144.MsgJoinSwapExternAmountInResponse): _144.MsgJoinSwapExternAmountInResponseAminoMsg;
                fromProtoMsg(message: _144.MsgJoinSwapExternAmountInResponseProtoMsg): _144.MsgJoinSwapExternAmountInResponse;
                toProto(message: _144.MsgJoinSwapExternAmountInResponse): Uint8Array;
                toProtoMsg(message: _144.MsgJoinSwapExternAmountInResponse): _144.MsgJoinSwapExternAmountInResponseProtoMsg;
            };
            MsgJoinSwapShareAmountOut: {
                typeUrl: string;
                encode(message: _144.MsgJoinSwapShareAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgJoinSwapShareAmountOut;
                fromJSON(object: any): _144.MsgJoinSwapShareAmountOut;
                toJSON(message: _144.MsgJoinSwapShareAmountOut): unknown;
                fromPartial(object: Partial<_144.MsgJoinSwapShareAmountOut>): _144.MsgJoinSwapShareAmountOut;
                fromAmino(object: _144.MsgJoinSwapShareAmountOutAmino): _144.MsgJoinSwapShareAmountOut;
                toAmino(message: _144.MsgJoinSwapShareAmountOut): _144.MsgJoinSwapShareAmountOutAmino;
                fromAminoMsg(object: _144.MsgJoinSwapShareAmountOutAminoMsg): _144.MsgJoinSwapShareAmountOut;
                toAminoMsg(message: _144.MsgJoinSwapShareAmountOut): _144.MsgJoinSwapShareAmountOutAminoMsg;
                fromProtoMsg(message: _144.MsgJoinSwapShareAmountOutProtoMsg): _144.MsgJoinSwapShareAmountOut;
                toProto(message: _144.MsgJoinSwapShareAmountOut): Uint8Array;
                toProtoMsg(message: _144.MsgJoinSwapShareAmountOut): _144.MsgJoinSwapShareAmountOutProtoMsg;
            };
            MsgJoinSwapShareAmountOutResponse: {
                typeUrl: string;
                encode(message: _144.MsgJoinSwapShareAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgJoinSwapShareAmountOutResponse;
                fromJSON(object: any): _144.MsgJoinSwapShareAmountOutResponse;
                toJSON(message: _144.MsgJoinSwapShareAmountOutResponse): unknown;
                fromPartial(object: Partial<_144.MsgJoinSwapShareAmountOutResponse>): _144.MsgJoinSwapShareAmountOutResponse;
                fromAmino(object: _144.MsgJoinSwapShareAmountOutResponseAmino): _144.MsgJoinSwapShareAmountOutResponse;
                toAmino(message: _144.MsgJoinSwapShareAmountOutResponse): _144.MsgJoinSwapShareAmountOutResponseAmino;
                fromAminoMsg(object: _144.MsgJoinSwapShareAmountOutResponseAminoMsg): _144.MsgJoinSwapShareAmountOutResponse;
                toAminoMsg(message: _144.MsgJoinSwapShareAmountOutResponse): _144.MsgJoinSwapShareAmountOutResponseAminoMsg;
                fromProtoMsg(message: _144.MsgJoinSwapShareAmountOutResponseProtoMsg): _144.MsgJoinSwapShareAmountOutResponse;
                toProto(message: _144.MsgJoinSwapShareAmountOutResponse): Uint8Array;
                toProtoMsg(message: _144.MsgJoinSwapShareAmountOutResponse): _144.MsgJoinSwapShareAmountOutResponseProtoMsg;
            };
            MsgExitSwapShareAmountIn: {
                typeUrl: string;
                encode(message: _144.MsgExitSwapShareAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgExitSwapShareAmountIn;
                fromJSON(object: any): _144.MsgExitSwapShareAmountIn;
                toJSON(message: _144.MsgExitSwapShareAmountIn): unknown;
                fromPartial(object: Partial<_144.MsgExitSwapShareAmountIn>): _144.MsgExitSwapShareAmountIn;
                fromAmino(object: _144.MsgExitSwapShareAmountInAmino): _144.MsgExitSwapShareAmountIn;
                toAmino(message: _144.MsgExitSwapShareAmountIn): _144.MsgExitSwapShareAmountInAmino;
                fromAminoMsg(object: _144.MsgExitSwapShareAmountInAminoMsg): _144.MsgExitSwapShareAmountIn;
                toAminoMsg(message: _144.MsgExitSwapShareAmountIn): _144.MsgExitSwapShareAmountInAminoMsg;
                fromProtoMsg(message: _144.MsgExitSwapShareAmountInProtoMsg): _144.MsgExitSwapShareAmountIn;
                toProto(message: _144.MsgExitSwapShareAmountIn): Uint8Array;
                toProtoMsg(message: _144.MsgExitSwapShareAmountIn): _144.MsgExitSwapShareAmountInProtoMsg;
            };
            MsgExitSwapShareAmountInResponse: {
                typeUrl: string;
                encode(message: _144.MsgExitSwapShareAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgExitSwapShareAmountInResponse;
                fromJSON(object: any): _144.MsgExitSwapShareAmountInResponse;
                toJSON(message: _144.MsgExitSwapShareAmountInResponse): unknown;
                fromPartial(object: Partial<_144.MsgExitSwapShareAmountInResponse>): _144.MsgExitSwapShareAmountInResponse;
                fromAmino(object: _144.MsgExitSwapShareAmountInResponseAmino): _144.MsgExitSwapShareAmountInResponse;
                toAmino(message: _144.MsgExitSwapShareAmountInResponse): _144.MsgExitSwapShareAmountInResponseAmino;
                fromAminoMsg(object: _144.MsgExitSwapShareAmountInResponseAminoMsg): _144.MsgExitSwapShareAmountInResponse;
                toAminoMsg(message: _144.MsgExitSwapShareAmountInResponse): _144.MsgExitSwapShareAmountInResponseAminoMsg;
                fromProtoMsg(message: _144.MsgExitSwapShareAmountInResponseProtoMsg): _144.MsgExitSwapShareAmountInResponse;
                toProto(message: _144.MsgExitSwapShareAmountInResponse): Uint8Array;
                toProtoMsg(message: _144.MsgExitSwapShareAmountInResponse): _144.MsgExitSwapShareAmountInResponseProtoMsg;
            };
            MsgExitSwapExternAmountOut: {
                typeUrl: string;
                encode(message: _144.MsgExitSwapExternAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgExitSwapExternAmountOut;
                fromJSON(object: any): _144.MsgExitSwapExternAmountOut;
                toJSON(message: _144.MsgExitSwapExternAmountOut): unknown;
                fromPartial(object: Partial<_144.MsgExitSwapExternAmountOut>): _144.MsgExitSwapExternAmountOut;
                fromAmino(object: _144.MsgExitSwapExternAmountOutAmino): _144.MsgExitSwapExternAmountOut;
                toAmino(message: _144.MsgExitSwapExternAmountOut): _144.MsgExitSwapExternAmountOutAmino;
                fromAminoMsg(object: _144.MsgExitSwapExternAmountOutAminoMsg): _144.MsgExitSwapExternAmountOut;
                toAminoMsg(message: _144.MsgExitSwapExternAmountOut): _144.MsgExitSwapExternAmountOutAminoMsg;
                fromProtoMsg(message: _144.MsgExitSwapExternAmountOutProtoMsg): _144.MsgExitSwapExternAmountOut;
                toProto(message: _144.MsgExitSwapExternAmountOut): Uint8Array;
                toProtoMsg(message: _144.MsgExitSwapExternAmountOut): _144.MsgExitSwapExternAmountOutProtoMsg;
            };
            MsgExitSwapExternAmountOutResponse: {
                typeUrl: string;
                encode(message: _144.MsgExitSwapExternAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.MsgExitSwapExternAmountOutResponse;
                fromJSON(object: any): _144.MsgExitSwapExternAmountOutResponse;
                toJSON(message: _144.MsgExitSwapExternAmountOutResponse): unknown;
                fromPartial(object: Partial<_144.MsgExitSwapExternAmountOutResponse>): _144.MsgExitSwapExternAmountOutResponse;
                fromAmino(object: _144.MsgExitSwapExternAmountOutResponseAmino): _144.MsgExitSwapExternAmountOutResponse;
                toAmino(message: _144.MsgExitSwapExternAmountOutResponse): _144.MsgExitSwapExternAmountOutResponseAmino;
                fromAminoMsg(object: _144.MsgExitSwapExternAmountOutResponseAminoMsg): _144.MsgExitSwapExternAmountOutResponse;
                toAminoMsg(message: _144.MsgExitSwapExternAmountOutResponse): _144.MsgExitSwapExternAmountOutResponseAminoMsg;
                fromProtoMsg(message: _144.MsgExitSwapExternAmountOutResponseProtoMsg): _144.MsgExitSwapExternAmountOutResponse;
                toProto(message: _144.MsgExitSwapExternAmountOutResponse): Uint8Array;
                toProtoMsg(message: _144.MsgExitSwapExternAmountOutResponse): _144.MsgExitSwapExternAmountOutResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(message: _143.QueryPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolRequest;
                fromJSON(object: any): _143.QueryPoolRequest;
                toJSON(message: _143.QueryPoolRequest): unknown;
                fromPartial(object: Partial<_143.QueryPoolRequest>): _143.QueryPoolRequest;
                fromAmino(object: _143.QueryPoolRequestAmino): _143.QueryPoolRequest;
                toAmino(message: _143.QueryPoolRequest): _143.QueryPoolRequestAmino;
                fromAminoMsg(object: _143.QueryPoolRequestAminoMsg): _143.QueryPoolRequest;
                toAminoMsg(message: _143.QueryPoolRequest): _143.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _143.QueryPoolRequestProtoMsg): _143.QueryPoolRequest;
                toProto(message: _143.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _143.QueryPoolRequest): _143.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _143.QueryPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolResponse;
                fromJSON(object: any): _143.QueryPoolResponse;
                toJSON(message: _143.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_143.QueryPoolResponse>): _143.QueryPoolResponse;
                fromAmino(object: _143.QueryPoolResponseAmino): _143.QueryPoolResponse;
                toAmino(message: _143.QueryPoolResponse): _143.QueryPoolResponseAmino;
                fromAminoMsg(object: _143.QueryPoolResponseAminoMsg): _143.QueryPoolResponse;
                toAminoMsg(message: _143.QueryPoolResponse): _143.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _143.QueryPoolResponseProtoMsg): _143.QueryPoolResponse;
                toProto(message: _143.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _143.QueryPoolResponse): _143.QueryPoolResponseProtoMsg;
            };
            QueryPoolsRequest: {
                typeUrl: string;
                encode(message: _143.QueryPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolsRequest;
                fromJSON(object: any): _143.QueryPoolsRequest;
                toJSON(message: _143.QueryPoolsRequest): unknown;
                fromPartial(object: Partial<_143.QueryPoolsRequest>): _143.QueryPoolsRequest;
                fromAmino(object: _143.QueryPoolsRequestAmino): _143.QueryPoolsRequest;
                toAmino(message: _143.QueryPoolsRequest): _143.QueryPoolsRequestAmino;
                fromAminoMsg(object: _143.QueryPoolsRequestAminoMsg): _143.QueryPoolsRequest;
                toAminoMsg(message: _143.QueryPoolsRequest): _143.QueryPoolsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryPoolsRequestProtoMsg): _143.QueryPoolsRequest;
                toProto(message: _143.QueryPoolsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryPoolsRequest): _143.QueryPoolsRequestProtoMsg;
            };
            QueryPoolsResponse: {
                typeUrl: string;
                encode(message: _143.QueryPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolsResponse;
                fromJSON(object: any): _143.QueryPoolsResponse;
                toJSON(message: _143.QueryPoolsResponse): unknown;
                fromPartial(object: Partial<_143.QueryPoolsResponse>): _143.QueryPoolsResponse;
                fromAmino(object: _143.QueryPoolsResponseAmino): _143.QueryPoolsResponse;
                toAmino(message: _143.QueryPoolsResponse): _143.QueryPoolsResponseAmino;
                fromAminoMsg(object: _143.QueryPoolsResponseAminoMsg): _143.QueryPoolsResponse;
                toAminoMsg(message: _143.QueryPoolsResponse): _143.QueryPoolsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryPoolsResponseProtoMsg): _143.QueryPoolsResponse;
                toProto(message: _143.QueryPoolsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryPoolsResponse): _143.QueryPoolsResponseProtoMsg;
            };
            QueryNumPoolsRequest: {
                typeUrl: string;
                encode(_: _143.QueryNumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryNumPoolsRequest;
                fromJSON(_: any): _143.QueryNumPoolsRequest;
                toJSON(_: _143.QueryNumPoolsRequest): unknown;
                fromPartial(_: Partial<_143.QueryNumPoolsRequest>): _143.QueryNumPoolsRequest;
                fromAmino(_: _143.QueryNumPoolsRequestAmino): _143.QueryNumPoolsRequest;
                toAmino(_: _143.QueryNumPoolsRequest): _143.QueryNumPoolsRequestAmino;
                fromAminoMsg(object: _143.QueryNumPoolsRequestAminoMsg): _143.QueryNumPoolsRequest;
                toAminoMsg(message: _143.QueryNumPoolsRequest): _143.QueryNumPoolsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryNumPoolsRequestProtoMsg): _143.QueryNumPoolsRequest;
                toProto(message: _143.QueryNumPoolsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryNumPoolsRequest): _143.QueryNumPoolsRequestProtoMsg;
            };
            QueryNumPoolsResponse: {
                typeUrl: string;
                encode(message: _143.QueryNumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryNumPoolsResponse;
                fromJSON(object: any): _143.QueryNumPoolsResponse;
                toJSON(message: _143.QueryNumPoolsResponse): unknown;
                fromPartial(object: Partial<_143.QueryNumPoolsResponse>): _143.QueryNumPoolsResponse;
                fromAmino(object: _143.QueryNumPoolsResponseAmino): _143.QueryNumPoolsResponse;
                toAmino(message: _143.QueryNumPoolsResponse): _143.QueryNumPoolsResponseAmino;
                fromAminoMsg(object: _143.QueryNumPoolsResponseAminoMsg): _143.QueryNumPoolsResponse;
                toAminoMsg(message: _143.QueryNumPoolsResponse): _143.QueryNumPoolsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryNumPoolsResponseProtoMsg): _143.QueryNumPoolsResponse;
                toProto(message: _143.QueryNumPoolsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryNumPoolsResponse): _143.QueryNumPoolsResponseProtoMsg;
            };
            QueryPoolTypeRequest: {
                typeUrl: string;
                encode(message: _143.QueryPoolTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolTypeRequest;
                fromJSON(object: any): _143.QueryPoolTypeRequest;
                toJSON(message: _143.QueryPoolTypeRequest): unknown;
                fromPartial(object: Partial<_143.QueryPoolTypeRequest>): _143.QueryPoolTypeRequest;
                fromAmino(object: _143.QueryPoolTypeRequestAmino): _143.QueryPoolTypeRequest;
                toAmino(message: _143.QueryPoolTypeRequest): _143.QueryPoolTypeRequestAmino;
                fromAminoMsg(object: _143.QueryPoolTypeRequestAminoMsg): _143.QueryPoolTypeRequest;
                toAminoMsg(message: _143.QueryPoolTypeRequest): _143.QueryPoolTypeRequestAminoMsg;
                fromProtoMsg(message: _143.QueryPoolTypeRequestProtoMsg): _143.QueryPoolTypeRequest;
                toProto(message: _143.QueryPoolTypeRequest): Uint8Array;
                toProtoMsg(message: _143.QueryPoolTypeRequest): _143.QueryPoolTypeRequestProtoMsg;
            };
            QueryPoolTypeResponse: {
                typeUrl: string;
                encode(message: _143.QueryPoolTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolTypeResponse;
                fromJSON(object: any): _143.QueryPoolTypeResponse;
                toJSON(message: _143.QueryPoolTypeResponse): unknown;
                fromPartial(object: Partial<_143.QueryPoolTypeResponse>): _143.QueryPoolTypeResponse;
                fromAmino(object: _143.QueryPoolTypeResponseAmino): _143.QueryPoolTypeResponse;
                toAmino(message: _143.QueryPoolTypeResponse): _143.QueryPoolTypeResponseAmino;
                fromAminoMsg(object: _143.QueryPoolTypeResponseAminoMsg): _143.QueryPoolTypeResponse;
                toAminoMsg(message: _143.QueryPoolTypeResponse): _143.QueryPoolTypeResponseAminoMsg;
                fromProtoMsg(message: _143.QueryPoolTypeResponseProtoMsg): _143.QueryPoolTypeResponse;
                toProto(message: _143.QueryPoolTypeResponse): Uint8Array;
                toProtoMsg(message: _143.QueryPoolTypeResponse): _143.QueryPoolTypeResponseProtoMsg;
            };
            QueryCalcJoinPoolSharesRequest: {
                typeUrl: string;
                encode(message: _143.QueryCalcJoinPoolSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryCalcJoinPoolSharesRequest;
                fromJSON(object: any): _143.QueryCalcJoinPoolSharesRequest;
                toJSON(message: _143.QueryCalcJoinPoolSharesRequest): unknown;
                fromPartial(object: Partial<_143.QueryCalcJoinPoolSharesRequest>): _143.QueryCalcJoinPoolSharesRequest;
                fromAmino(object: _143.QueryCalcJoinPoolSharesRequestAmino): _143.QueryCalcJoinPoolSharesRequest;
                toAmino(message: _143.QueryCalcJoinPoolSharesRequest): _143.QueryCalcJoinPoolSharesRequestAmino;
                fromAminoMsg(object: _143.QueryCalcJoinPoolSharesRequestAminoMsg): _143.QueryCalcJoinPoolSharesRequest;
                toAminoMsg(message: _143.QueryCalcJoinPoolSharesRequest): _143.QueryCalcJoinPoolSharesRequestAminoMsg;
                fromProtoMsg(message: _143.QueryCalcJoinPoolSharesRequestProtoMsg): _143.QueryCalcJoinPoolSharesRequest;
                toProto(message: _143.QueryCalcJoinPoolSharesRequest): Uint8Array;
                toProtoMsg(message: _143.QueryCalcJoinPoolSharesRequest): _143.QueryCalcJoinPoolSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolSharesResponse: {
                typeUrl: string;
                encode(message: _143.QueryCalcJoinPoolSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryCalcJoinPoolSharesResponse;
                fromJSON(object: any): _143.QueryCalcJoinPoolSharesResponse;
                toJSON(message: _143.QueryCalcJoinPoolSharesResponse): unknown;
                fromPartial(object: Partial<_143.QueryCalcJoinPoolSharesResponse>): _143.QueryCalcJoinPoolSharesResponse;
                fromAmino(object: _143.QueryCalcJoinPoolSharesResponseAmino): _143.QueryCalcJoinPoolSharesResponse;
                toAmino(message: _143.QueryCalcJoinPoolSharesResponse): _143.QueryCalcJoinPoolSharesResponseAmino;
                fromAminoMsg(object: _143.QueryCalcJoinPoolSharesResponseAminoMsg): _143.QueryCalcJoinPoolSharesResponse;
                toAminoMsg(message: _143.QueryCalcJoinPoolSharesResponse): _143.QueryCalcJoinPoolSharesResponseAminoMsg;
                fromProtoMsg(message: _143.QueryCalcJoinPoolSharesResponseProtoMsg): _143.QueryCalcJoinPoolSharesResponse;
                toProto(message: _143.QueryCalcJoinPoolSharesResponse): Uint8Array;
                toProtoMsg(message: _143.QueryCalcJoinPoolSharesResponse): _143.QueryCalcJoinPoolSharesResponseProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesRequest: {
                typeUrl: string;
                encode(message: _143.QueryCalcExitPoolCoinsFromSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryCalcExitPoolCoinsFromSharesRequest;
                fromJSON(object: any): _143.QueryCalcExitPoolCoinsFromSharesRequest;
                toJSON(message: _143.QueryCalcExitPoolCoinsFromSharesRequest): unknown;
                fromPartial(object: Partial<_143.QueryCalcExitPoolCoinsFromSharesRequest>): _143.QueryCalcExitPoolCoinsFromSharesRequest;
                fromAmino(object: _143.QueryCalcExitPoolCoinsFromSharesRequestAmino): _143.QueryCalcExitPoolCoinsFromSharesRequest;
                toAmino(message: _143.QueryCalcExitPoolCoinsFromSharesRequest): _143.QueryCalcExitPoolCoinsFromSharesRequestAmino;
                fromAminoMsg(object: _143.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg): _143.QueryCalcExitPoolCoinsFromSharesRequest;
                toAminoMsg(message: _143.QueryCalcExitPoolCoinsFromSharesRequest): _143.QueryCalcExitPoolCoinsFromSharesRequestAminoMsg;
                fromProtoMsg(message: _143.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg): _143.QueryCalcExitPoolCoinsFromSharesRequest;
                toProto(message: _143.QueryCalcExitPoolCoinsFromSharesRequest): Uint8Array;
                toProtoMsg(message: _143.QueryCalcExitPoolCoinsFromSharesRequest): _143.QueryCalcExitPoolCoinsFromSharesRequestProtoMsg;
            };
            QueryCalcExitPoolCoinsFromSharesResponse: {
                typeUrl: string;
                encode(message: _143.QueryCalcExitPoolCoinsFromSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryCalcExitPoolCoinsFromSharesResponse;
                fromJSON(object: any): _143.QueryCalcExitPoolCoinsFromSharesResponse;
                toJSON(message: _143.QueryCalcExitPoolCoinsFromSharesResponse): unknown;
                fromPartial(object: Partial<_143.QueryCalcExitPoolCoinsFromSharesResponse>): _143.QueryCalcExitPoolCoinsFromSharesResponse;
                fromAmino(object: _143.QueryCalcExitPoolCoinsFromSharesResponseAmino): _143.QueryCalcExitPoolCoinsFromSharesResponse;
                toAmino(message: _143.QueryCalcExitPoolCoinsFromSharesResponse): _143.QueryCalcExitPoolCoinsFromSharesResponseAmino;
                fromAminoMsg(object: _143.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg): _143.QueryCalcExitPoolCoinsFromSharesResponse;
                toAminoMsg(message: _143.QueryCalcExitPoolCoinsFromSharesResponse): _143.QueryCalcExitPoolCoinsFromSharesResponseAminoMsg;
                fromProtoMsg(message: _143.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg): _143.QueryCalcExitPoolCoinsFromSharesResponse;
                toProto(message: _143.QueryCalcExitPoolCoinsFromSharesResponse): Uint8Array;
                toProtoMsg(message: _143.QueryCalcExitPoolCoinsFromSharesResponse): _143.QueryCalcExitPoolCoinsFromSharesResponseProtoMsg;
            };
            QueryPoolParamsRequest: {
                typeUrl: string;
                encode(message: _143.QueryPoolParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolParamsRequest;
                fromJSON(object: any): _143.QueryPoolParamsRequest;
                toJSON(message: _143.QueryPoolParamsRequest): unknown;
                fromPartial(object: Partial<_143.QueryPoolParamsRequest>): _143.QueryPoolParamsRequest;
                fromAmino(object: _143.QueryPoolParamsRequestAmino): _143.QueryPoolParamsRequest;
                toAmino(message: _143.QueryPoolParamsRequest): _143.QueryPoolParamsRequestAmino;
                fromAminoMsg(object: _143.QueryPoolParamsRequestAminoMsg): _143.QueryPoolParamsRequest;
                toAminoMsg(message: _143.QueryPoolParamsRequest): _143.QueryPoolParamsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryPoolParamsRequestProtoMsg): _143.QueryPoolParamsRequest;
                toProto(message: _143.QueryPoolParamsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryPoolParamsRequest): _143.QueryPoolParamsRequestProtoMsg;
            };
            QueryPoolParamsResponse: {
                typeUrl: string;
                encode(message: _143.QueryPoolParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolParamsResponse;
                fromJSON(object: any): _143.QueryPoolParamsResponse;
                toJSON(message: _143.QueryPoolParamsResponse): unknown;
                fromPartial(object: Partial<_143.QueryPoolParamsResponse>): _143.QueryPoolParamsResponse;
                fromAmino(object: _143.QueryPoolParamsResponseAmino): _143.QueryPoolParamsResponse;
                toAmino(message: _143.QueryPoolParamsResponse): _143.QueryPoolParamsResponseAmino;
                fromAminoMsg(object: _143.QueryPoolParamsResponseAminoMsg): _143.QueryPoolParamsResponse;
                toAminoMsg(message: _143.QueryPoolParamsResponse): _143.QueryPoolParamsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryPoolParamsResponseProtoMsg): _143.QueryPoolParamsResponse;
                toProto(message: _143.QueryPoolParamsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryPoolParamsResponse): _143.QueryPoolParamsResponseProtoMsg;
            };
            QueryTotalPoolLiquidityRequest: {
                typeUrl: string;
                encode(message: _143.QueryTotalPoolLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryTotalPoolLiquidityRequest;
                fromJSON(object: any): _143.QueryTotalPoolLiquidityRequest;
                toJSON(message: _143.QueryTotalPoolLiquidityRequest): unknown;
                fromPartial(object: Partial<_143.QueryTotalPoolLiquidityRequest>): _143.QueryTotalPoolLiquidityRequest;
                fromAmino(object: _143.QueryTotalPoolLiquidityRequestAmino): _143.QueryTotalPoolLiquidityRequest;
                toAmino(message: _143.QueryTotalPoolLiquidityRequest): _143.QueryTotalPoolLiquidityRequestAmino;
                fromAminoMsg(object: _143.QueryTotalPoolLiquidityRequestAminoMsg): _143.QueryTotalPoolLiquidityRequest;
                toAminoMsg(message: _143.QueryTotalPoolLiquidityRequest): _143.QueryTotalPoolLiquidityRequestAminoMsg;
                fromProtoMsg(message: _143.QueryTotalPoolLiquidityRequestProtoMsg): _143.QueryTotalPoolLiquidityRequest;
                toProto(message: _143.QueryTotalPoolLiquidityRequest): Uint8Array;
                toProtoMsg(message: _143.QueryTotalPoolLiquidityRequest): _143.QueryTotalPoolLiquidityRequestProtoMsg;
            };
            QueryTotalPoolLiquidityResponse: {
                typeUrl: string;
                encode(message: _143.QueryTotalPoolLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryTotalPoolLiquidityResponse;
                fromJSON(object: any): _143.QueryTotalPoolLiquidityResponse;
                toJSON(message: _143.QueryTotalPoolLiquidityResponse): unknown;
                fromPartial(object: Partial<_143.QueryTotalPoolLiquidityResponse>): _143.QueryTotalPoolLiquidityResponse;
                fromAmino(object: _143.QueryTotalPoolLiquidityResponseAmino): _143.QueryTotalPoolLiquidityResponse;
                toAmino(message: _143.QueryTotalPoolLiquidityResponse): _143.QueryTotalPoolLiquidityResponseAmino;
                fromAminoMsg(object: _143.QueryTotalPoolLiquidityResponseAminoMsg): _143.QueryTotalPoolLiquidityResponse;
                toAminoMsg(message: _143.QueryTotalPoolLiquidityResponse): _143.QueryTotalPoolLiquidityResponseAminoMsg;
                fromProtoMsg(message: _143.QueryTotalPoolLiquidityResponseProtoMsg): _143.QueryTotalPoolLiquidityResponse;
                toProto(message: _143.QueryTotalPoolLiquidityResponse): Uint8Array;
                toProtoMsg(message: _143.QueryTotalPoolLiquidityResponse): _143.QueryTotalPoolLiquidityResponseProtoMsg;
            };
            QueryTotalSharesRequest: {
                typeUrl: string;
                encode(message: _143.QueryTotalSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryTotalSharesRequest;
                fromJSON(object: any): _143.QueryTotalSharesRequest;
                toJSON(message: _143.QueryTotalSharesRequest): unknown;
                fromPartial(object: Partial<_143.QueryTotalSharesRequest>): _143.QueryTotalSharesRequest;
                fromAmino(object: _143.QueryTotalSharesRequestAmino): _143.QueryTotalSharesRequest;
                toAmino(message: _143.QueryTotalSharesRequest): _143.QueryTotalSharesRequestAmino;
                fromAminoMsg(object: _143.QueryTotalSharesRequestAminoMsg): _143.QueryTotalSharesRequest;
                toAminoMsg(message: _143.QueryTotalSharesRequest): _143.QueryTotalSharesRequestAminoMsg;
                fromProtoMsg(message: _143.QueryTotalSharesRequestProtoMsg): _143.QueryTotalSharesRequest;
                toProto(message: _143.QueryTotalSharesRequest): Uint8Array;
                toProtoMsg(message: _143.QueryTotalSharesRequest): _143.QueryTotalSharesRequestProtoMsg;
            };
            QueryTotalSharesResponse: {
                typeUrl: string;
                encode(message: _143.QueryTotalSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryTotalSharesResponse;
                fromJSON(object: any): _143.QueryTotalSharesResponse;
                toJSON(message: _143.QueryTotalSharesResponse): unknown;
                fromPartial(object: Partial<_143.QueryTotalSharesResponse>): _143.QueryTotalSharesResponse;
                fromAmino(object: _143.QueryTotalSharesResponseAmino): _143.QueryTotalSharesResponse;
                toAmino(message: _143.QueryTotalSharesResponse): _143.QueryTotalSharesResponseAmino;
                fromAminoMsg(object: _143.QueryTotalSharesResponseAminoMsg): _143.QueryTotalSharesResponse;
                toAminoMsg(message: _143.QueryTotalSharesResponse): _143.QueryTotalSharesResponseAminoMsg;
                fromProtoMsg(message: _143.QueryTotalSharesResponseProtoMsg): _143.QueryTotalSharesResponse;
                toProto(message: _143.QueryTotalSharesResponse): Uint8Array;
                toProtoMsg(message: _143.QueryTotalSharesResponse): _143.QueryTotalSharesResponseProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesRequest: {
                typeUrl: string;
                encode(message: _143.QueryCalcJoinPoolNoSwapSharesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryCalcJoinPoolNoSwapSharesRequest;
                fromJSON(object: any): _143.QueryCalcJoinPoolNoSwapSharesRequest;
                toJSON(message: _143.QueryCalcJoinPoolNoSwapSharesRequest): unknown;
                fromPartial(object: Partial<_143.QueryCalcJoinPoolNoSwapSharesRequest>): _143.QueryCalcJoinPoolNoSwapSharesRequest;
                fromAmino(object: _143.QueryCalcJoinPoolNoSwapSharesRequestAmino): _143.QueryCalcJoinPoolNoSwapSharesRequest;
                toAmino(message: _143.QueryCalcJoinPoolNoSwapSharesRequest): _143.QueryCalcJoinPoolNoSwapSharesRequestAmino;
                fromAminoMsg(object: _143.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg): _143.QueryCalcJoinPoolNoSwapSharesRequest;
                toAminoMsg(message: _143.QueryCalcJoinPoolNoSwapSharesRequest): _143.QueryCalcJoinPoolNoSwapSharesRequestAminoMsg;
                fromProtoMsg(message: _143.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg): _143.QueryCalcJoinPoolNoSwapSharesRequest;
                toProto(message: _143.QueryCalcJoinPoolNoSwapSharesRequest): Uint8Array;
                toProtoMsg(message: _143.QueryCalcJoinPoolNoSwapSharesRequest): _143.QueryCalcJoinPoolNoSwapSharesRequestProtoMsg;
            };
            QueryCalcJoinPoolNoSwapSharesResponse: {
                typeUrl: string;
                encode(message: _143.QueryCalcJoinPoolNoSwapSharesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryCalcJoinPoolNoSwapSharesResponse;
                fromJSON(object: any): _143.QueryCalcJoinPoolNoSwapSharesResponse;
                toJSON(message: _143.QueryCalcJoinPoolNoSwapSharesResponse): unknown;
                fromPartial(object: Partial<_143.QueryCalcJoinPoolNoSwapSharesResponse>): _143.QueryCalcJoinPoolNoSwapSharesResponse;
                fromAmino(object: _143.QueryCalcJoinPoolNoSwapSharesResponseAmino): _143.QueryCalcJoinPoolNoSwapSharesResponse;
                toAmino(message: _143.QueryCalcJoinPoolNoSwapSharesResponse): _143.QueryCalcJoinPoolNoSwapSharesResponseAmino;
                fromAminoMsg(object: _143.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg): _143.QueryCalcJoinPoolNoSwapSharesResponse;
                toAminoMsg(message: _143.QueryCalcJoinPoolNoSwapSharesResponse): _143.QueryCalcJoinPoolNoSwapSharesResponseAminoMsg;
                fromProtoMsg(message: _143.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg): _143.QueryCalcJoinPoolNoSwapSharesResponse;
                toProto(message: _143.QueryCalcJoinPoolNoSwapSharesResponse): Uint8Array;
                toProtoMsg(message: _143.QueryCalcJoinPoolNoSwapSharesResponse): _143.QueryCalcJoinPoolNoSwapSharesResponseProtoMsg;
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _143.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QuerySpotPriceRequest;
                fromJSON(object: any): _143.QuerySpotPriceRequest;
                toJSON(message: _143.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_143.QuerySpotPriceRequest>): _143.QuerySpotPriceRequest;
                fromAmino(object: _143.QuerySpotPriceRequestAmino): _143.QuerySpotPriceRequest;
                toAmino(message: _143.QuerySpotPriceRequest): _143.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _143.QuerySpotPriceRequestAminoMsg): _143.QuerySpotPriceRequest;
                toAminoMsg(message: _143.QuerySpotPriceRequest): _143.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _143.QuerySpotPriceRequestProtoMsg): _143.QuerySpotPriceRequest;
                toProto(message: _143.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _143.QuerySpotPriceRequest): _143.QuerySpotPriceRequestProtoMsg;
            };
            QueryPoolsWithFilterRequest: {
                typeUrl: string;
                encode(message: _143.QueryPoolsWithFilterRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolsWithFilterRequest;
                fromJSON(object: any): _143.QueryPoolsWithFilterRequest;
                toJSON(message: _143.QueryPoolsWithFilterRequest): unknown;
                fromPartial(object: Partial<_143.QueryPoolsWithFilterRequest>): _143.QueryPoolsWithFilterRequest;
                fromAmino(object: _143.QueryPoolsWithFilterRequestAmino): _143.QueryPoolsWithFilterRequest;
                toAmino(message: _143.QueryPoolsWithFilterRequest): _143.QueryPoolsWithFilterRequestAmino;
                fromAminoMsg(object: _143.QueryPoolsWithFilterRequestAminoMsg): _143.QueryPoolsWithFilterRequest;
                toAminoMsg(message: _143.QueryPoolsWithFilterRequest): _143.QueryPoolsWithFilterRequestAminoMsg;
                fromProtoMsg(message: _143.QueryPoolsWithFilterRequestProtoMsg): _143.QueryPoolsWithFilterRequest;
                toProto(message: _143.QueryPoolsWithFilterRequest): Uint8Array;
                toProtoMsg(message: _143.QueryPoolsWithFilterRequest): _143.QueryPoolsWithFilterRequestProtoMsg;
            };
            QueryPoolsWithFilterResponse: {
                typeUrl: string;
                encode(message: _143.QueryPoolsWithFilterResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryPoolsWithFilterResponse;
                fromJSON(object: any): _143.QueryPoolsWithFilterResponse;
                toJSON(message: _143.QueryPoolsWithFilterResponse): unknown;
                fromPartial(object: Partial<_143.QueryPoolsWithFilterResponse>): _143.QueryPoolsWithFilterResponse;
                fromAmino(object: _143.QueryPoolsWithFilterResponseAmino): _143.QueryPoolsWithFilterResponse;
                toAmino(message: _143.QueryPoolsWithFilterResponse): _143.QueryPoolsWithFilterResponseAmino;
                fromAminoMsg(object: _143.QueryPoolsWithFilterResponseAminoMsg): _143.QueryPoolsWithFilterResponse;
                toAminoMsg(message: _143.QueryPoolsWithFilterResponse): _143.QueryPoolsWithFilterResponseAminoMsg;
                fromProtoMsg(message: _143.QueryPoolsWithFilterResponseProtoMsg): _143.QueryPoolsWithFilterResponse;
                toProto(message: _143.QueryPoolsWithFilterResponse): Uint8Array;
                toProtoMsg(message: _143.QueryPoolsWithFilterResponse): _143.QueryPoolsWithFilterResponseProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _143.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QuerySpotPriceResponse;
                fromJSON(object: any): _143.QuerySpotPriceResponse;
                toJSON(message: _143.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_143.QuerySpotPriceResponse>): _143.QuerySpotPriceResponse;
                fromAmino(object: _143.QuerySpotPriceResponseAmino): _143.QuerySpotPriceResponse;
                toAmino(message: _143.QuerySpotPriceResponse): _143.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _143.QuerySpotPriceResponseAminoMsg): _143.QuerySpotPriceResponse;
                toAminoMsg(message: _143.QuerySpotPriceResponse): _143.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _143.QuerySpotPriceResponseProtoMsg): _143.QuerySpotPriceResponse;
                toProto(message: _143.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _143.QuerySpotPriceResponse): _143.QuerySpotPriceResponseProtoMsg;
            };
            QuerySwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _143.QuerySwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QuerySwapExactAmountInRequest;
                fromJSON(object: any): _143.QuerySwapExactAmountInRequest;
                toJSON(message: _143.QuerySwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_143.QuerySwapExactAmountInRequest>): _143.QuerySwapExactAmountInRequest;
                fromAmino(object: _143.QuerySwapExactAmountInRequestAmino): _143.QuerySwapExactAmountInRequest;
                toAmino(message: _143.QuerySwapExactAmountInRequest): _143.QuerySwapExactAmountInRequestAmino;
                fromAminoMsg(object: _143.QuerySwapExactAmountInRequestAminoMsg): _143.QuerySwapExactAmountInRequest;
                toAminoMsg(message: _143.QuerySwapExactAmountInRequest): _143.QuerySwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _143.QuerySwapExactAmountInRequestProtoMsg): _143.QuerySwapExactAmountInRequest;
                toProto(message: _143.QuerySwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _143.QuerySwapExactAmountInRequest): _143.QuerySwapExactAmountInRequestProtoMsg;
            };
            QuerySwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _143.QuerySwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QuerySwapExactAmountInResponse;
                fromJSON(object: any): _143.QuerySwapExactAmountInResponse;
                toJSON(message: _143.QuerySwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_143.QuerySwapExactAmountInResponse>): _143.QuerySwapExactAmountInResponse;
                fromAmino(object: _143.QuerySwapExactAmountInResponseAmino): _143.QuerySwapExactAmountInResponse;
                toAmino(message: _143.QuerySwapExactAmountInResponse): _143.QuerySwapExactAmountInResponseAmino;
                fromAminoMsg(object: _143.QuerySwapExactAmountInResponseAminoMsg): _143.QuerySwapExactAmountInResponse;
                toAminoMsg(message: _143.QuerySwapExactAmountInResponse): _143.QuerySwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _143.QuerySwapExactAmountInResponseProtoMsg): _143.QuerySwapExactAmountInResponse;
                toProto(message: _143.QuerySwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _143.QuerySwapExactAmountInResponse): _143.QuerySwapExactAmountInResponseProtoMsg;
            };
            QuerySwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _143.QuerySwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QuerySwapExactAmountOutRequest;
                fromJSON(object: any): _143.QuerySwapExactAmountOutRequest;
                toJSON(message: _143.QuerySwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_143.QuerySwapExactAmountOutRequest>): _143.QuerySwapExactAmountOutRequest;
                fromAmino(object: _143.QuerySwapExactAmountOutRequestAmino): _143.QuerySwapExactAmountOutRequest;
                toAmino(message: _143.QuerySwapExactAmountOutRequest): _143.QuerySwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _143.QuerySwapExactAmountOutRequestAminoMsg): _143.QuerySwapExactAmountOutRequest;
                toAminoMsg(message: _143.QuerySwapExactAmountOutRequest): _143.QuerySwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _143.QuerySwapExactAmountOutRequestProtoMsg): _143.QuerySwapExactAmountOutRequest;
                toProto(message: _143.QuerySwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _143.QuerySwapExactAmountOutRequest): _143.QuerySwapExactAmountOutRequestProtoMsg;
            };
            QuerySwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _143.QuerySwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QuerySwapExactAmountOutResponse;
                fromJSON(object: any): _143.QuerySwapExactAmountOutResponse;
                toJSON(message: _143.QuerySwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_143.QuerySwapExactAmountOutResponse>): _143.QuerySwapExactAmountOutResponse;
                fromAmino(object: _143.QuerySwapExactAmountOutResponseAmino): _143.QuerySwapExactAmountOutResponse;
                toAmino(message: _143.QuerySwapExactAmountOutResponse): _143.QuerySwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _143.QuerySwapExactAmountOutResponseAminoMsg): _143.QuerySwapExactAmountOutResponse;
                toAminoMsg(message: _143.QuerySwapExactAmountOutResponse): _143.QuerySwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _143.QuerySwapExactAmountOutResponseProtoMsg): _143.QuerySwapExactAmountOutResponse;
                toProto(message: _143.QuerySwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _143.QuerySwapExactAmountOutResponse): _143.QuerySwapExactAmountOutResponseProtoMsg;
            };
            QueryTotalLiquidityRequest: {
                typeUrl: string;
                encode(_: _143.QueryTotalLiquidityRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryTotalLiquidityRequest;
                fromJSON(_: any): _143.QueryTotalLiquidityRequest;
                toJSON(_: _143.QueryTotalLiquidityRequest): unknown;
                fromPartial(_: Partial<_143.QueryTotalLiquidityRequest>): _143.QueryTotalLiquidityRequest;
                fromAmino(_: _143.QueryTotalLiquidityRequestAmino): _143.QueryTotalLiquidityRequest;
                toAmino(_: _143.QueryTotalLiquidityRequest): _143.QueryTotalLiquidityRequestAmino;
                fromAminoMsg(object: _143.QueryTotalLiquidityRequestAminoMsg): _143.QueryTotalLiquidityRequest;
                toAminoMsg(message: _143.QueryTotalLiquidityRequest): _143.QueryTotalLiquidityRequestAminoMsg;
                fromProtoMsg(message: _143.QueryTotalLiquidityRequestProtoMsg): _143.QueryTotalLiquidityRequest;
                toProto(message: _143.QueryTotalLiquidityRequest): Uint8Array;
                toProtoMsg(message: _143.QueryTotalLiquidityRequest): _143.QueryTotalLiquidityRequestProtoMsg;
            };
            QueryTotalLiquidityResponse: {
                typeUrl: string;
                encode(message: _143.QueryTotalLiquidityResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryTotalLiquidityResponse;
                fromJSON(object: any): _143.QueryTotalLiquidityResponse;
                toJSON(message: _143.QueryTotalLiquidityResponse): unknown;
                fromPartial(object: Partial<_143.QueryTotalLiquidityResponse>): _143.QueryTotalLiquidityResponse;
                fromAmino(object: _143.QueryTotalLiquidityResponseAmino): _143.QueryTotalLiquidityResponse;
                toAmino(message: _143.QueryTotalLiquidityResponse): _143.QueryTotalLiquidityResponseAmino;
                fromAminoMsg(object: _143.QueryTotalLiquidityResponseAminoMsg): _143.QueryTotalLiquidityResponse;
                toAminoMsg(message: _143.QueryTotalLiquidityResponse): _143.QueryTotalLiquidityResponseAminoMsg;
                fromProtoMsg(message: _143.QueryTotalLiquidityResponseProtoMsg): _143.QueryTotalLiquidityResponse;
                toProto(message: _143.QueryTotalLiquidityResponse): Uint8Array;
                toProtoMsg(message: _143.QueryTotalLiquidityResponse): _143.QueryTotalLiquidityResponseProtoMsg;
            };
            PoolI_InterfaceDecoder: (input: Uint8Array | import("..").BinaryReader) => import("../google/protobuf/any").Any | _141.Pool | _146.Pool;
            PoolI_FromAmino: (content: import("../google/protobuf/any").AnyAmino) => import("../google/protobuf/any").Any;
            PoolI_ToAmino: (content: import("../google/protobuf/any").Any) => import("../google/protobuf/any").AnyAmino;
            Params: {
                typeUrl: string;
                encode(message: _142.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Params;
                fromJSON(object: any): _142.Params;
                toJSON(message: _142.Params): unknown;
                fromPartial(object: Partial<_142.Params>): _142.Params;
                fromAmino(object: _142.ParamsAmino): _142.Params;
                toAmino(message: _142.Params): _142.ParamsAmino;
                fromAminoMsg(object: _142.ParamsAminoMsg): _142.Params;
                toAminoMsg(message: _142.Params): _142.ParamsAminoMsg;
                fromProtoMsg(message: _142.ParamsProtoMsg): _142.Params;
                toProto(message: _142.Params): Uint8Array;
                toProtoMsg(message: _142.Params): _142.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _142.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.GenesisState;
                fromJSON(object: any): _142.GenesisState;
                toJSON(message: _142.GenesisState): unknown;
                fromPartial(object: Partial<_142.GenesisState>): _142.GenesisState;
                fromAmino(object: _142.GenesisStateAmino): _142.GenesisState;
                toAmino(message: _142.GenesisState): _142.GenesisStateAmino;
                fromAminoMsg(object: _142.GenesisStateAminoMsg): _142.GenesisState;
                toAminoMsg(message: _142.GenesisState): _142.GenesisStateAminoMsg;
                fromProtoMsg(message: _142.GenesisStateProtoMsg): _142.GenesisState;
                toProto(message: _142.GenesisState): Uint8Array;
                toProtoMsg(message: _142.GenesisState): _142.GenesisStateProtoMsg;
            };
            SmoothWeightChangeParams: {
                typeUrl: string;
                encode(message: _141.SmoothWeightChangeParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.SmoothWeightChangeParams;
                fromJSON(object: any): _141.SmoothWeightChangeParams;
                toJSON(message: _141.SmoothWeightChangeParams): unknown;
                fromPartial(object: Partial<_141.SmoothWeightChangeParams>): _141.SmoothWeightChangeParams;
                fromAmino(object: _141.SmoothWeightChangeParamsAmino): _141.SmoothWeightChangeParams;
                toAmino(message: _141.SmoothWeightChangeParams): _141.SmoothWeightChangeParamsAmino;
                fromAminoMsg(object: _141.SmoothWeightChangeParamsAminoMsg): _141.SmoothWeightChangeParams;
                toAminoMsg(message: _141.SmoothWeightChangeParams): _141.SmoothWeightChangeParamsAminoMsg;
                fromProtoMsg(message: _141.SmoothWeightChangeParamsProtoMsg): _141.SmoothWeightChangeParams;
                toProto(message: _141.SmoothWeightChangeParams): Uint8Array;
                toProtoMsg(message: _141.SmoothWeightChangeParams): _141.SmoothWeightChangeParamsProtoMsg;
            };
            PoolParams: {
                typeUrl: string;
                encode(message: _141.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.PoolParams;
                fromJSON(object: any): _141.PoolParams;
                toJSON(message: _141.PoolParams): unknown;
                fromPartial(object: Partial<_141.PoolParams>): _141.PoolParams;
                fromAmino(object: _141.PoolParamsAmino): _141.PoolParams;
                toAmino(message: _141.PoolParams): _141.PoolParamsAmino;
                fromAminoMsg(object: _141.PoolParamsAminoMsg): _141.PoolParams;
                toAminoMsg(message: _141.PoolParams): _141.PoolParamsAminoMsg;
                fromProtoMsg(message: _141.PoolParamsProtoMsg): _141.PoolParams;
                toProto(message: _141.PoolParams): Uint8Array;
                toProtoMsg(message: _141.PoolParams): _141.PoolParamsProtoMsg;
            };
            PoolAsset: {
                typeUrl: string;
                encode(message: _141.PoolAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.PoolAsset;
                fromJSON(object: any): _141.PoolAsset;
                toJSON(message: _141.PoolAsset): unknown;
                fromPartial(object: Partial<_141.PoolAsset>): _141.PoolAsset;
                fromAmino(object: _141.PoolAssetAmino): _141.PoolAsset;
                toAmino(message: _141.PoolAsset): _141.PoolAssetAmino;
                fromAminoMsg(object: _141.PoolAssetAminoMsg): _141.PoolAsset;
                toAminoMsg(message: _141.PoolAsset): _141.PoolAssetAminoMsg;
                fromProtoMsg(message: _141.PoolAssetProtoMsg): _141.PoolAsset;
                toProto(message: _141.PoolAsset): Uint8Array;
                toProtoMsg(message: _141.PoolAsset): _141.PoolAssetProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _141.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.Pool;
                fromJSON(object: any): _141.Pool;
                toJSON(message: _141.Pool): unknown;
                fromPartial(object: Partial<_141.Pool>): _141.Pool;
                fromAmino(object: _141.PoolAmino): _141.Pool;
                toAmino(message: _141.Pool): _141.PoolAmino;
                fromAminoMsg(object: _141.PoolAminoMsg): _141.Pool;
                toAminoMsg(message: _141.Pool): _141.PoolAminoMsg;
                fromProtoMsg(message: _141.PoolProtoMsg): _141.Pool;
                toProto(message: _141.Pool): Uint8Array;
                toProtoMsg(message: _141.Pool): _141.PoolProtoMsg;
            };
        };
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _415.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _145.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _145.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _145.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _145.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _145.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _145.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _145.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _145.MsgCreateBalancerPool) => _145.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _145.MsgCreateBalancerPoolAmino) => _145.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        encode(message: _145.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgCreateBalancerPool;
                        fromJSON(object: any): _145.MsgCreateBalancerPool;
                        toJSON(message: _145.MsgCreateBalancerPool): unknown;
                        fromPartial(object: Partial<_145.MsgCreateBalancerPool>): _145.MsgCreateBalancerPool;
                        fromAmino(object: _145.MsgCreateBalancerPoolAmino): _145.MsgCreateBalancerPool;
                        toAmino(message: _145.MsgCreateBalancerPool): _145.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _145.MsgCreateBalancerPoolAminoMsg): _145.MsgCreateBalancerPool;
                        toAminoMsg(message: _145.MsgCreateBalancerPool): _145.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _145.MsgCreateBalancerPoolProtoMsg): _145.MsgCreateBalancerPool;
                        toProto(message: _145.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _145.MsgCreateBalancerPool): _145.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        encode(message: _145.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _145.MsgCreateBalancerPoolResponse;
                        toJSON(message: _145.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: Partial<_145.MsgCreateBalancerPoolResponse>): _145.MsgCreateBalancerPoolResponse;
                        fromAmino(object: _145.MsgCreateBalancerPoolResponseAmino): _145.MsgCreateBalancerPoolResponse;
                        toAmino(message: _145.MsgCreateBalancerPoolResponse): _145.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _145.MsgCreateBalancerPoolResponseAminoMsg): _145.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _145.MsgCreateBalancerPoolResponse): _145.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _145.MsgCreateBalancerPoolResponseProtoMsg): _145.MsgCreateBalancerPoolResponse;
                        toProto(message: _145.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _145.MsgCreateBalancerPoolResponse): _145.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _416.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _147.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _147.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _147.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _147.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _147.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _147.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _147.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _147.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _147.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _147.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _147.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _147.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _147.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _147.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _147.MsgCreateStableswapPool) => _147.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _147.MsgCreateStableswapPoolAmino) => _147.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _147.MsgStableSwapAdjustScalingFactors) => _147.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _147.MsgStableSwapAdjustScalingFactorsAmino) => _147.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        encode(message: _147.MsgCreateStableswapPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.MsgCreateStableswapPool;
                        fromJSON(object: any): _147.MsgCreateStableswapPool;
                        toJSON(message: _147.MsgCreateStableswapPool): unknown;
                        fromPartial(object: Partial<_147.MsgCreateStableswapPool>): _147.MsgCreateStableswapPool;
                        fromAmino(object: _147.MsgCreateStableswapPoolAmino): _147.MsgCreateStableswapPool;
                        toAmino(message: _147.MsgCreateStableswapPool): _147.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _147.MsgCreateStableswapPoolAminoMsg): _147.MsgCreateStableswapPool;
                        toAminoMsg(message: _147.MsgCreateStableswapPool): _147.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _147.MsgCreateStableswapPoolProtoMsg): _147.MsgCreateStableswapPool;
                        toProto(message: _147.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _147.MsgCreateStableswapPool): _147.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        encode(message: _147.MsgCreateStableswapPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _147.MsgCreateStableswapPoolResponse;
                        toJSON(message: _147.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: Partial<_147.MsgCreateStableswapPoolResponse>): _147.MsgCreateStableswapPoolResponse;
                        fromAmino(object: _147.MsgCreateStableswapPoolResponseAmino): _147.MsgCreateStableswapPoolResponse;
                        toAmino(message: _147.MsgCreateStableswapPoolResponse): _147.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _147.MsgCreateStableswapPoolResponseAminoMsg): _147.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _147.MsgCreateStableswapPoolResponse): _147.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _147.MsgCreateStableswapPoolResponseProtoMsg): _147.MsgCreateStableswapPoolResponse;
                        toProto(message: _147.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _147.MsgCreateStableswapPoolResponse): _147.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        encode(message: _147.MsgStableSwapAdjustScalingFactors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _147.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _147.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: Partial<_147.MsgStableSwapAdjustScalingFactors>): _147.MsgStableSwapAdjustScalingFactors;
                        fromAmino(object: _147.MsgStableSwapAdjustScalingFactorsAmino): _147.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _147.MsgStableSwapAdjustScalingFactors): _147.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _147.MsgStableSwapAdjustScalingFactorsAminoMsg): _147.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _147.MsgStableSwapAdjustScalingFactors): _147.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _147.MsgStableSwapAdjustScalingFactorsProtoMsg): _147.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _147.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _147.MsgStableSwapAdjustScalingFactors): _147.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        encode(_: _147.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _147.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _147.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: Partial<_147.MsgStableSwapAdjustScalingFactorsResponse>): _147.MsgStableSwapAdjustScalingFactorsResponse;
                        fromAmino(_: _147.MsgStableSwapAdjustScalingFactorsResponseAmino): _147.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _147.MsgStableSwapAdjustScalingFactorsResponse): _147.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _147.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _147.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _147.MsgStableSwapAdjustScalingFactorsResponse): _147.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _147.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _147.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _147.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _147.MsgStableSwapAdjustScalingFactorsResponse): _147.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        encode(message: _146.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.PoolParams;
                        fromJSON(object: any): _146.PoolParams;
                        toJSON(message: _146.PoolParams): unknown;
                        fromPartial(object: Partial<_146.PoolParams>): _146.PoolParams;
                        fromAmino(object: _146.PoolParamsAmino): _146.PoolParams;
                        toAmino(message: _146.PoolParams): _146.PoolParamsAmino;
                        fromAminoMsg(object: _146.PoolParamsAminoMsg): _146.PoolParams;
                        toAminoMsg(message: _146.PoolParams): _146.PoolParamsAminoMsg;
                        fromProtoMsg(message: _146.PoolParamsProtoMsg): _146.PoolParams;
                        toProto(message: _146.PoolParams): Uint8Array;
                        toProtoMsg(message: _146.PoolParams): _146.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        encode(message: _146.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Pool;
                        fromJSON(object: any): _146.Pool;
                        toJSON(message: _146.Pool): unknown;
                        fromPartial(object: Partial<_146.Pool>): _146.Pool;
                        fromAmino(object: _146.PoolAmino): _146.Pool;
                        toAmino(message: _146.Pool): _146.PoolAmino;
                        fromAminoMsg(object: _146.PoolAminoMsg): _146.Pool;
                        toAminoMsg(message: _146.Pool): _146.PoolAminoMsg;
                        fromProtoMsg(message: _146.PoolProtoMsg): _146.Pool;
                        toProto(message: _146.Pool): Uint8Array;
                        toProtoMsg(message: _146.Pool): _146.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _402.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                spotPrice(request: _148.QuerySpotPriceRequest): Promise<_148.QuerySpotPriceResponse>;
            };
            LCDQueryClient: typeof _386.LCDQueryClient;
            QuerySpotPriceRequest: {
                typeUrl: string;
                encode(message: _148.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QuerySpotPriceRequest;
                fromJSON(object: any): _148.QuerySpotPriceRequest;
                toJSON(message: _148.QuerySpotPriceRequest): unknown;
                fromPartial(object: Partial<_148.QuerySpotPriceRequest>): _148.QuerySpotPriceRequest;
                fromAmino(object: _148.QuerySpotPriceRequestAmino): _148.QuerySpotPriceRequest;
                toAmino(message: _148.QuerySpotPriceRequest): _148.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _148.QuerySpotPriceRequestAminoMsg): _148.QuerySpotPriceRequest;
                toAminoMsg(message: _148.QuerySpotPriceRequest): _148.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _148.QuerySpotPriceRequestProtoMsg): _148.QuerySpotPriceRequest;
                toProto(message: _148.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _148.QuerySpotPriceRequest): _148.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                encode(message: _148.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.QuerySpotPriceResponse;
                fromJSON(object: any): _148.QuerySpotPriceResponse;
                toJSON(message: _148.QuerySpotPriceResponse): unknown;
                fromPartial(object: Partial<_148.QuerySpotPriceResponse>): _148.QuerySpotPriceResponse;
                fromAmino(object: _148.QuerySpotPriceResponseAmino): _148.QuerySpotPriceResponse;
                toAmino(message: _148.QuerySpotPriceResponse): _148.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _148.QuerySpotPriceResponseAminoMsg): _148.QuerySpotPriceResponse;
                toAminoMsg(message: _148.QuerySpotPriceResponse): _148.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _148.QuerySpotPriceResponseProtoMsg): _148.QuerySpotPriceResponse;
                toProto(message: _148.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _148.QuerySpotPriceResponse): _148.QuerySpotPriceResponseProtoMsg;
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _403.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _387.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _150.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryParamsRequest;
                fromJSON(_: any): _150.QueryParamsRequest;
                toJSON(_: _150.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_150.QueryParamsRequest>): _150.QueryParamsRequest;
                fromAmino(_: _150.QueryParamsRequestAmino): _150.QueryParamsRequest;
                toAmino(_: _150.QueryParamsRequest): _150.QueryParamsRequestAmino;
                fromAminoMsg(object: _150.QueryParamsRequestAminoMsg): _150.QueryParamsRequest;
                toAminoMsg(message: _150.QueryParamsRequest): _150.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _150.QueryParamsRequestProtoMsg): _150.QueryParamsRequest;
                toProto(message: _150.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _150.QueryParamsRequest): _150.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _150.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryParamsResponse;
                fromJSON(object: any): _150.QueryParamsResponse;
                toJSON(message: _150.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_150.QueryParamsResponse>): _150.QueryParamsResponse;
                fromAmino(object: _150.QueryParamsResponseAmino): _150.QueryParamsResponse;
                toAmino(message: _150.QueryParamsResponse): _150.QueryParamsResponseAmino;
                fromAminoMsg(object: _150.QueryParamsResponseAminoMsg): _150.QueryParamsResponse;
                toAminoMsg(message: _150.QueryParamsResponse): _150.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _150.QueryParamsResponseProtoMsg): _150.QueryParamsResponse;
                toProto(message: _150.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _150.QueryParamsResponse): _150.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _149.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.Params;
                fromJSON(object: any): _149.Params;
                toJSON(message: _149.Params): unknown;
                fromPartial(object: Partial<_149.Params>): _149.Params;
                fromAmino(object: _149.ParamsAmino): _149.Params;
                toAmino(message: _149.Params): _149.ParamsAmino;
                fromAminoMsg(object: _149.ParamsAminoMsg): _149.Params;
                toAminoMsg(message: _149.Params): _149.ParamsAminoMsg;
                fromProtoMsg(message: _149.ParamsProtoMsg): _149.Params;
                toProto(message: _149.Params): Uint8Array;
                toProtoMsg(message: _149.Params): _149.ParamsProtoMsg;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _418.MsgClientImpl;
        QueryClientImpl: typeof _404.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleToDistributeCoins(request?: _154.ModuleToDistributeCoinsRequest): Promise<_154.ModuleToDistributeCoinsResponse>;
            gaugeByID(request: _154.GaugeByIDRequest): Promise<_154.GaugeByIDResponse>;
            gauges(request?: _154.GaugesRequest): Promise<_154.GaugesResponse>;
            activeGauges(request?: _154.ActiveGaugesRequest): Promise<_154.ActiveGaugesResponse>;
            activeGaugesPerDenom(request: _154.ActiveGaugesPerDenomRequest): Promise<_154.ActiveGaugesPerDenomResponse>;
            upcomingGauges(request?: _154.UpcomingGaugesRequest): Promise<_154.UpcomingGaugesResponse>;
            upcomingGaugesPerDenom(request: _154.UpcomingGaugesPerDenomRequest): Promise<_154.UpcomingGaugesPerDenomResponse>;
            rewardsEst(request: _154.RewardsEstRequest): Promise<_154.RewardsEstResponse>;
            lockableDurations(request?: _154.QueryLockableDurationsRequest): Promise<_154.QueryLockableDurationsResponse>;
        };
        LCDQueryClient: typeof _388.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _155.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _155.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _155.MsgCreateGauge): {
                    typeUrl: string;
                    value: _155.MsgCreateGauge;
                };
                addToGauge(value: _155.MsgAddToGauge): {
                    typeUrl: string;
                    value: _155.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _155.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _155.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _155.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _155.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _155.MsgCreateGauge): {
                    typeUrl: string;
                    value: _155.MsgCreateGauge;
                };
                addToGauge(value: _155.MsgAddToGauge): {
                    typeUrl: string;
                    value: _155.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _155.MsgCreateGauge) => _155.MsgCreateGaugeAmino;
                fromAmino: (object: _155.MsgCreateGaugeAmino) => _155.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _155.MsgAddToGauge) => _155.MsgAddToGaugeAmino;
                fromAmino: (object: _155.MsgAddToGaugeAmino) => _155.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            encode(message: _155.MsgCreateGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgCreateGauge;
            fromJSON(object: any): _155.MsgCreateGauge;
            toJSON(message: _155.MsgCreateGauge): unknown;
            fromPartial(object: Partial<_155.MsgCreateGauge>): _155.MsgCreateGauge;
            fromAmino(object: _155.MsgCreateGaugeAmino): _155.MsgCreateGauge;
            toAmino(message: _155.MsgCreateGauge): _155.MsgCreateGaugeAmino;
            fromAminoMsg(object: _155.MsgCreateGaugeAminoMsg): _155.MsgCreateGauge;
            toAminoMsg(message: _155.MsgCreateGauge): _155.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _155.MsgCreateGaugeProtoMsg): _155.MsgCreateGauge;
            toProto(message: _155.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _155.MsgCreateGauge): _155.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            encode(_: _155.MsgCreateGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgCreateGaugeResponse;
            fromJSON(_: any): _155.MsgCreateGaugeResponse;
            toJSON(_: _155.MsgCreateGaugeResponse): unknown;
            fromPartial(_: Partial<_155.MsgCreateGaugeResponse>): _155.MsgCreateGaugeResponse;
            fromAmino(_: _155.MsgCreateGaugeResponseAmino): _155.MsgCreateGaugeResponse;
            toAmino(_: _155.MsgCreateGaugeResponse): _155.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _155.MsgCreateGaugeResponseAminoMsg): _155.MsgCreateGaugeResponse;
            toAminoMsg(message: _155.MsgCreateGaugeResponse): _155.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _155.MsgCreateGaugeResponseProtoMsg): _155.MsgCreateGaugeResponse;
            toProto(message: _155.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _155.MsgCreateGaugeResponse): _155.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            encode(message: _155.MsgAddToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgAddToGauge;
            fromJSON(object: any): _155.MsgAddToGauge;
            toJSON(message: _155.MsgAddToGauge): unknown;
            fromPartial(object: Partial<_155.MsgAddToGauge>): _155.MsgAddToGauge;
            fromAmino(object: _155.MsgAddToGaugeAmino): _155.MsgAddToGauge;
            toAmino(message: _155.MsgAddToGauge): _155.MsgAddToGaugeAmino;
            fromAminoMsg(object: _155.MsgAddToGaugeAminoMsg): _155.MsgAddToGauge;
            toAminoMsg(message: _155.MsgAddToGauge): _155.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _155.MsgAddToGaugeProtoMsg): _155.MsgAddToGauge;
            toProto(message: _155.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _155.MsgAddToGauge): _155.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            encode(_: _155.MsgAddToGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.MsgAddToGaugeResponse;
            fromJSON(_: any): _155.MsgAddToGaugeResponse;
            toJSON(_: _155.MsgAddToGaugeResponse): unknown;
            fromPartial(_: Partial<_155.MsgAddToGaugeResponse>): _155.MsgAddToGaugeResponse;
            fromAmino(_: _155.MsgAddToGaugeResponseAmino): _155.MsgAddToGaugeResponse;
            toAmino(_: _155.MsgAddToGaugeResponse): _155.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _155.MsgAddToGaugeResponseAminoMsg): _155.MsgAddToGaugeResponse;
            toAminoMsg(message: _155.MsgAddToGaugeResponse): _155.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _155.MsgAddToGaugeResponseProtoMsg): _155.MsgAddToGaugeResponse;
            toProto(message: _155.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _155.MsgAddToGaugeResponse): _155.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            encode(_: _154.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _154.ModuleToDistributeCoinsRequest;
            toJSON(_: _154.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: Partial<_154.ModuleToDistributeCoinsRequest>): _154.ModuleToDistributeCoinsRequest;
            fromAmino(_: _154.ModuleToDistributeCoinsRequestAmino): _154.ModuleToDistributeCoinsRequest;
            toAmino(_: _154.ModuleToDistributeCoinsRequest): _154.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _154.ModuleToDistributeCoinsRequestAminoMsg): _154.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _154.ModuleToDistributeCoinsRequest): _154.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _154.ModuleToDistributeCoinsRequestProtoMsg): _154.ModuleToDistributeCoinsRequest;
            toProto(message: _154.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _154.ModuleToDistributeCoinsRequest): _154.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            encode(message: _154.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _154.ModuleToDistributeCoinsResponse;
            toJSON(message: _154.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: Partial<_154.ModuleToDistributeCoinsResponse>): _154.ModuleToDistributeCoinsResponse;
            fromAmino(object: _154.ModuleToDistributeCoinsResponseAmino): _154.ModuleToDistributeCoinsResponse;
            toAmino(message: _154.ModuleToDistributeCoinsResponse): _154.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _154.ModuleToDistributeCoinsResponseAminoMsg): _154.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _154.ModuleToDistributeCoinsResponse): _154.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _154.ModuleToDistributeCoinsResponseProtoMsg): _154.ModuleToDistributeCoinsResponse;
            toProto(message: _154.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _154.ModuleToDistributeCoinsResponse): _154.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            encode(message: _154.GaugeByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.GaugeByIDRequest;
            fromJSON(object: any): _154.GaugeByIDRequest;
            toJSON(message: _154.GaugeByIDRequest): unknown;
            fromPartial(object: Partial<_154.GaugeByIDRequest>): _154.GaugeByIDRequest;
            fromAmino(object: _154.GaugeByIDRequestAmino): _154.GaugeByIDRequest;
            toAmino(message: _154.GaugeByIDRequest): _154.GaugeByIDRequestAmino;
            fromAminoMsg(object: _154.GaugeByIDRequestAminoMsg): _154.GaugeByIDRequest;
            toAminoMsg(message: _154.GaugeByIDRequest): _154.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _154.GaugeByIDRequestProtoMsg): _154.GaugeByIDRequest;
            toProto(message: _154.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _154.GaugeByIDRequest): _154.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            encode(message: _154.GaugeByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.GaugeByIDResponse;
            fromJSON(object: any): _154.GaugeByIDResponse;
            toJSON(message: _154.GaugeByIDResponse): unknown;
            fromPartial(object: Partial<_154.GaugeByIDResponse>): _154.GaugeByIDResponse;
            fromAmino(object: _154.GaugeByIDResponseAmino): _154.GaugeByIDResponse;
            toAmino(message: _154.GaugeByIDResponse): _154.GaugeByIDResponseAmino;
            fromAminoMsg(object: _154.GaugeByIDResponseAminoMsg): _154.GaugeByIDResponse;
            toAminoMsg(message: _154.GaugeByIDResponse): _154.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _154.GaugeByIDResponseProtoMsg): _154.GaugeByIDResponse;
            toProto(message: _154.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _154.GaugeByIDResponse): _154.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            encode(message: _154.GaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.GaugesRequest;
            fromJSON(object: any): _154.GaugesRequest;
            toJSON(message: _154.GaugesRequest): unknown;
            fromPartial(object: Partial<_154.GaugesRequest>): _154.GaugesRequest;
            fromAmino(object: _154.GaugesRequestAmino): _154.GaugesRequest;
            toAmino(message: _154.GaugesRequest): _154.GaugesRequestAmino;
            fromAminoMsg(object: _154.GaugesRequestAminoMsg): _154.GaugesRequest;
            toAminoMsg(message: _154.GaugesRequest): _154.GaugesRequestAminoMsg;
            fromProtoMsg(message: _154.GaugesRequestProtoMsg): _154.GaugesRequest;
            toProto(message: _154.GaugesRequest): Uint8Array;
            toProtoMsg(message: _154.GaugesRequest): _154.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            encode(message: _154.GaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.GaugesResponse;
            fromJSON(object: any): _154.GaugesResponse;
            toJSON(message: _154.GaugesResponse): unknown;
            fromPartial(object: Partial<_154.GaugesResponse>): _154.GaugesResponse;
            fromAmino(object: _154.GaugesResponseAmino): _154.GaugesResponse;
            toAmino(message: _154.GaugesResponse): _154.GaugesResponseAmino;
            fromAminoMsg(object: _154.GaugesResponseAminoMsg): _154.GaugesResponse;
            toAminoMsg(message: _154.GaugesResponse): _154.GaugesResponseAminoMsg;
            fromProtoMsg(message: _154.GaugesResponseProtoMsg): _154.GaugesResponse;
            toProto(message: _154.GaugesResponse): Uint8Array;
            toProtoMsg(message: _154.GaugesResponse): _154.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            encode(message: _154.ActiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ActiveGaugesRequest;
            fromJSON(object: any): _154.ActiveGaugesRequest;
            toJSON(message: _154.ActiveGaugesRequest): unknown;
            fromPartial(object: Partial<_154.ActiveGaugesRequest>): _154.ActiveGaugesRequest;
            fromAmino(object: _154.ActiveGaugesRequestAmino): _154.ActiveGaugesRequest;
            toAmino(message: _154.ActiveGaugesRequest): _154.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _154.ActiveGaugesRequestAminoMsg): _154.ActiveGaugesRequest;
            toAminoMsg(message: _154.ActiveGaugesRequest): _154.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _154.ActiveGaugesRequestProtoMsg): _154.ActiveGaugesRequest;
            toProto(message: _154.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _154.ActiveGaugesRequest): _154.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            encode(message: _154.ActiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ActiveGaugesResponse;
            fromJSON(object: any): _154.ActiveGaugesResponse;
            toJSON(message: _154.ActiveGaugesResponse): unknown;
            fromPartial(object: Partial<_154.ActiveGaugesResponse>): _154.ActiveGaugesResponse;
            fromAmino(object: _154.ActiveGaugesResponseAmino): _154.ActiveGaugesResponse;
            toAmino(message: _154.ActiveGaugesResponse): _154.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _154.ActiveGaugesResponseAminoMsg): _154.ActiveGaugesResponse;
            toAminoMsg(message: _154.ActiveGaugesResponse): _154.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _154.ActiveGaugesResponseProtoMsg): _154.ActiveGaugesResponse;
            toProto(message: _154.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _154.ActiveGaugesResponse): _154.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _154.ActiveGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _154.ActiveGaugesPerDenomRequest;
            toJSON(message: _154.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_154.ActiveGaugesPerDenomRequest>): _154.ActiveGaugesPerDenomRequest;
            fromAmino(object: _154.ActiveGaugesPerDenomRequestAmino): _154.ActiveGaugesPerDenomRequest;
            toAmino(message: _154.ActiveGaugesPerDenomRequest): _154.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _154.ActiveGaugesPerDenomRequestAminoMsg): _154.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _154.ActiveGaugesPerDenomRequest): _154.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _154.ActiveGaugesPerDenomRequestProtoMsg): _154.ActiveGaugesPerDenomRequest;
            toProto(message: _154.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _154.ActiveGaugesPerDenomRequest): _154.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _154.ActiveGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _154.ActiveGaugesPerDenomResponse;
            toJSON(message: _154.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_154.ActiveGaugesPerDenomResponse>): _154.ActiveGaugesPerDenomResponse;
            fromAmino(object: _154.ActiveGaugesPerDenomResponseAmino): _154.ActiveGaugesPerDenomResponse;
            toAmino(message: _154.ActiveGaugesPerDenomResponse): _154.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _154.ActiveGaugesPerDenomResponseAminoMsg): _154.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _154.ActiveGaugesPerDenomResponse): _154.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _154.ActiveGaugesPerDenomResponseProtoMsg): _154.ActiveGaugesPerDenomResponse;
            toProto(message: _154.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _154.ActiveGaugesPerDenomResponse): _154.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            encode(message: _154.UpcomingGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.UpcomingGaugesRequest;
            fromJSON(object: any): _154.UpcomingGaugesRequest;
            toJSON(message: _154.UpcomingGaugesRequest): unknown;
            fromPartial(object: Partial<_154.UpcomingGaugesRequest>): _154.UpcomingGaugesRequest;
            fromAmino(object: _154.UpcomingGaugesRequestAmino): _154.UpcomingGaugesRequest;
            toAmino(message: _154.UpcomingGaugesRequest): _154.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _154.UpcomingGaugesRequestAminoMsg): _154.UpcomingGaugesRequest;
            toAminoMsg(message: _154.UpcomingGaugesRequest): _154.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _154.UpcomingGaugesRequestProtoMsg): _154.UpcomingGaugesRequest;
            toProto(message: _154.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _154.UpcomingGaugesRequest): _154.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            encode(message: _154.UpcomingGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.UpcomingGaugesResponse;
            fromJSON(object: any): _154.UpcomingGaugesResponse;
            toJSON(message: _154.UpcomingGaugesResponse): unknown;
            fromPartial(object: Partial<_154.UpcomingGaugesResponse>): _154.UpcomingGaugesResponse;
            fromAmino(object: _154.UpcomingGaugesResponseAmino): _154.UpcomingGaugesResponse;
            toAmino(message: _154.UpcomingGaugesResponse): _154.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _154.UpcomingGaugesResponseAminoMsg): _154.UpcomingGaugesResponse;
            toAminoMsg(message: _154.UpcomingGaugesResponse): _154.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _154.UpcomingGaugesResponseProtoMsg): _154.UpcomingGaugesResponse;
            toProto(message: _154.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _154.UpcomingGaugesResponse): _154.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            encode(message: _154.UpcomingGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _154.UpcomingGaugesPerDenomRequest;
            toJSON(message: _154.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: Partial<_154.UpcomingGaugesPerDenomRequest>): _154.UpcomingGaugesPerDenomRequest;
            fromAmino(object: _154.UpcomingGaugesPerDenomRequestAmino): _154.UpcomingGaugesPerDenomRequest;
            toAmino(message: _154.UpcomingGaugesPerDenomRequest): _154.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _154.UpcomingGaugesPerDenomRequestAminoMsg): _154.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _154.UpcomingGaugesPerDenomRequest): _154.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _154.UpcomingGaugesPerDenomRequestProtoMsg): _154.UpcomingGaugesPerDenomRequest;
            toProto(message: _154.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _154.UpcomingGaugesPerDenomRequest): _154.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            encode(message: _154.UpcomingGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _154.UpcomingGaugesPerDenomResponse;
            toJSON(message: _154.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: Partial<_154.UpcomingGaugesPerDenomResponse>): _154.UpcomingGaugesPerDenomResponse;
            fromAmino(object: _154.UpcomingGaugesPerDenomResponseAmino): _154.UpcomingGaugesPerDenomResponse;
            toAmino(message: _154.UpcomingGaugesPerDenomResponse): _154.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _154.UpcomingGaugesPerDenomResponseAminoMsg): _154.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _154.UpcomingGaugesPerDenomResponse): _154.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _154.UpcomingGaugesPerDenomResponseProtoMsg): _154.UpcomingGaugesPerDenomResponse;
            toProto(message: _154.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _154.UpcomingGaugesPerDenomResponse): _154.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            encode(message: _154.RewardsEstRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RewardsEstRequest;
            fromJSON(object: any): _154.RewardsEstRequest;
            toJSON(message: _154.RewardsEstRequest): unknown;
            fromPartial(object: Partial<_154.RewardsEstRequest>): _154.RewardsEstRequest;
            fromAmino(object: _154.RewardsEstRequestAmino): _154.RewardsEstRequest;
            toAmino(message: _154.RewardsEstRequest): _154.RewardsEstRequestAmino;
            fromAminoMsg(object: _154.RewardsEstRequestAminoMsg): _154.RewardsEstRequest;
            toAminoMsg(message: _154.RewardsEstRequest): _154.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _154.RewardsEstRequestProtoMsg): _154.RewardsEstRequest;
            toProto(message: _154.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _154.RewardsEstRequest): _154.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            encode(message: _154.RewardsEstResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.RewardsEstResponse;
            fromJSON(object: any): _154.RewardsEstResponse;
            toJSON(message: _154.RewardsEstResponse): unknown;
            fromPartial(object: Partial<_154.RewardsEstResponse>): _154.RewardsEstResponse;
            fromAmino(object: _154.RewardsEstResponseAmino): _154.RewardsEstResponse;
            toAmino(message: _154.RewardsEstResponse): _154.RewardsEstResponseAmino;
            fromAminoMsg(object: _154.RewardsEstResponseAminoMsg): _154.RewardsEstResponse;
            toAminoMsg(message: _154.RewardsEstResponse): _154.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _154.RewardsEstResponseProtoMsg): _154.RewardsEstResponse;
            toProto(message: _154.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _154.RewardsEstResponse): _154.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            encode(_: _154.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.QueryLockableDurationsRequest;
            fromJSON(_: any): _154.QueryLockableDurationsRequest;
            toJSON(_: _154.QueryLockableDurationsRequest): unknown;
            fromPartial(_: Partial<_154.QueryLockableDurationsRequest>): _154.QueryLockableDurationsRequest;
            fromAmino(_: _154.QueryLockableDurationsRequestAmino): _154.QueryLockableDurationsRequest;
            toAmino(_: _154.QueryLockableDurationsRequest): _154.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _154.QueryLockableDurationsRequestAminoMsg): _154.QueryLockableDurationsRequest;
            toAminoMsg(message: _154.QueryLockableDurationsRequest): _154.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _154.QueryLockableDurationsRequestProtoMsg): _154.QueryLockableDurationsRequest;
            toProto(message: _154.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _154.QueryLockableDurationsRequest): _154.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            encode(message: _154.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.QueryLockableDurationsResponse;
            fromJSON(object: any): _154.QueryLockableDurationsResponse;
            toJSON(message: _154.QueryLockableDurationsResponse): unknown;
            fromPartial(object: Partial<_154.QueryLockableDurationsResponse>): _154.QueryLockableDurationsResponse;
            fromAmino(object: _154.QueryLockableDurationsResponseAmino): _154.QueryLockableDurationsResponse;
            toAmino(message: _154.QueryLockableDurationsResponse): _154.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _154.QueryLockableDurationsResponseAminoMsg): _154.QueryLockableDurationsResponse;
            toAminoMsg(message: _154.QueryLockableDurationsResponse): _154.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _154.QueryLockableDurationsResponseProtoMsg): _154.QueryLockableDurationsResponse;
            toProto(message: _154.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _154.QueryLockableDurationsResponse): _154.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _153.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.Params;
            fromJSON(object: any): _153.Params;
            toJSON(message: _153.Params): unknown;
            fromPartial(object: Partial<_153.Params>): _153.Params;
            fromAmino(object: _153.ParamsAmino): _153.Params;
            toAmino(message: _153.Params): _153.ParamsAmino;
            fromAminoMsg(object: _153.ParamsAminoMsg): _153.Params;
            toAminoMsg(message: _153.Params): _153.ParamsAminoMsg;
            fromProtoMsg(message: _153.ParamsProtoMsg): _153.Params;
            toProto(message: _153.Params): Uint8Array;
            toProtoMsg(message: _153.Params): _153.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _152.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.GenesisState;
            fromJSON(object: any): _152.GenesisState;
            toJSON(message: _152.GenesisState): unknown;
            fromPartial(object: Partial<_152.GenesisState>): _152.GenesisState;
            fromAmino(object: _152.GenesisStateAmino): _152.GenesisState;
            toAmino(message: _152.GenesisState): _152.GenesisStateAmino;
            fromAminoMsg(object: _152.GenesisStateAminoMsg): _152.GenesisState;
            toAminoMsg(message: _152.GenesisState): _152.GenesisStateAminoMsg;
            fromProtoMsg(message: _152.GenesisStateProtoMsg): _152.GenesisState;
            toProto(message: _152.GenesisState): Uint8Array;
            toProtoMsg(message: _152.GenesisState): _152.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            encode(message: _151.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.Gauge;
            fromJSON(object: any): _151.Gauge;
            toJSON(message: _151.Gauge): unknown;
            fromPartial(object: Partial<_151.Gauge>): _151.Gauge;
            fromAmino(object: _151.GaugeAmino): _151.Gauge;
            toAmino(message: _151.Gauge): _151.GaugeAmino;
            fromAminoMsg(object: _151.GaugeAminoMsg): _151.Gauge;
            toAminoMsg(message: _151.Gauge): _151.GaugeAminoMsg;
            fromProtoMsg(message: _151.GaugeProtoMsg): _151.Gauge;
            toProto(message: _151.Gauge): Uint8Array;
            toProtoMsg(message: _151.Gauge): _151.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            encode(message: _151.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.LockableDurationsInfo;
            fromJSON(object: any): _151.LockableDurationsInfo;
            toJSON(message: _151.LockableDurationsInfo): unknown;
            fromPartial(object: Partial<_151.LockableDurationsInfo>): _151.LockableDurationsInfo;
            fromAmino(object: _151.LockableDurationsInfoAmino): _151.LockableDurationsInfo;
            toAmino(message: _151.LockableDurationsInfo): _151.LockableDurationsInfoAmino;
            fromAminoMsg(object: _151.LockableDurationsInfoAminoMsg): _151.LockableDurationsInfo;
            toAminoMsg(message: _151.LockableDurationsInfo): _151.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _151.LockableDurationsInfoProtoMsg): _151.LockableDurationsInfo;
            toProto(message: _151.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _151.LockableDurationsInfo): _151.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _419.MsgClientImpl;
        QueryClientImpl: typeof _405.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            moduleBalance(request?: _159.ModuleBalanceRequest): Promise<_159.ModuleBalanceResponse>;
            moduleLockedAmount(request?: _159.ModuleLockedAmountRequest): Promise<_159.ModuleLockedAmountResponse>;
            accountUnlockableCoins(request: _159.AccountUnlockableCoinsRequest): Promise<_159.AccountUnlockableCoinsResponse>;
            accountUnlockingCoins(request: _159.AccountUnlockingCoinsRequest): Promise<_159.AccountUnlockingCoinsResponse>;
            accountLockedCoins(request: _159.AccountLockedCoinsRequest): Promise<_159.AccountLockedCoinsResponse>;
            accountLockedPastTime(request: _159.AccountLockedPastTimeRequest): Promise<_159.AccountLockedPastTimeResponse>;
            accountLockedPastTimeNotUnlockingOnly(request: _159.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_159.AccountLockedPastTimeNotUnlockingOnlyResponse>;
            accountUnlockedBeforeTime(request: _159.AccountUnlockedBeforeTimeRequest): Promise<_159.AccountUnlockedBeforeTimeResponse>;
            accountLockedPastTimeDenom(request: _159.AccountLockedPastTimeDenomRequest): Promise<_159.AccountLockedPastTimeDenomResponse>;
            lockedDenom(request: _159.LockedDenomRequest): Promise<_159.LockedDenomResponse>;
            lockedByID(request: _159.LockedRequest): Promise<_159.LockedResponse>;
            syntheticLockupsByLockupID(request: _159.SyntheticLockupsByLockupIDRequest): Promise<_159.SyntheticLockupsByLockupIDResponse>;
            accountLockedLongerDuration(request: _159.AccountLockedLongerDurationRequest): Promise<_159.AccountLockedLongerDurationResponse>;
            accountLockedDuration(request: _159.AccountLockedDurationRequest): Promise<_159.AccountLockedDurationResponse>;
            accountLockedLongerDurationNotUnlockingOnly(request: _159.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_159.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
            accountLockedLongerDurationDenom(request: _159.AccountLockedLongerDurationDenomRequest): Promise<_159.AccountLockedLongerDurationDenomResponse>;
            params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
        };
        LCDQueryClient: typeof _389.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _160.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _160.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _160.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _160.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _160.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _160.MsgLockTokens): {
                    typeUrl: string;
                    value: _160.MsgLockTokens;
                };
                beginUnlockingAll(value: _160.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _160.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _160.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _160.MsgBeginUnlocking;
                };
                extendLockup(value: _160.MsgExtendLockup): {
                    typeUrl: string;
                    value: _160.MsgExtendLockup;
                };
                forceUnlock(value: _160.MsgForceUnlock): {
                    typeUrl: string;
                    value: _160.MsgForceUnlock;
                };
            };
            toJSON: {
                lockTokens(value: _160.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _160.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _160.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _160.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
                forceUnlock(value: _160.MsgForceUnlock): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _160.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _160.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _160.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _160.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _160.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _160.MsgLockTokens): {
                    typeUrl: string;
                    value: _160.MsgLockTokens;
                };
                beginUnlockingAll(value: _160.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _160.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _160.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _160.MsgBeginUnlocking;
                };
                extendLockup(value: _160.MsgExtendLockup): {
                    typeUrl: string;
                    value: _160.MsgExtendLockup;
                };
                forceUnlock(value: _160.MsgForceUnlock): {
                    typeUrl: string;
                    value: _160.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _160.MsgLockTokens) => _160.MsgLockTokensAmino;
                fromAmino: (object: _160.MsgLockTokensAmino) => _160.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _160.MsgBeginUnlockingAll) => _160.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _160.MsgBeginUnlockingAllAmino) => _160.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _160.MsgBeginUnlocking) => _160.MsgBeginUnlockingAmino;
                fromAmino: (object: _160.MsgBeginUnlockingAmino) => _160.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _160.MsgExtendLockup) => _160.MsgExtendLockupAmino;
                fromAmino: (object: _160.MsgExtendLockupAmino) => _160.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _160.MsgForceUnlock) => _160.MsgForceUnlockAmino;
                fromAmino: (object: _160.MsgForceUnlockAmino) => _160.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            encode(message: _160.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgLockTokens;
            fromJSON(object: any): _160.MsgLockTokens;
            toJSON(message: _160.MsgLockTokens): unknown;
            fromPartial(object: Partial<_160.MsgLockTokens>): _160.MsgLockTokens;
            fromAmino(object: _160.MsgLockTokensAmino): _160.MsgLockTokens;
            toAmino(message: _160.MsgLockTokens): _160.MsgLockTokensAmino;
            fromAminoMsg(object: _160.MsgLockTokensAminoMsg): _160.MsgLockTokens;
            toAminoMsg(message: _160.MsgLockTokens): _160.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _160.MsgLockTokensProtoMsg): _160.MsgLockTokens;
            toProto(message: _160.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _160.MsgLockTokens): _160.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            encode(message: _160.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgLockTokensResponse;
            fromJSON(object: any): _160.MsgLockTokensResponse;
            toJSON(message: _160.MsgLockTokensResponse): unknown;
            fromPartial(object: Partial<_160.MsgLockTokensResponse>): _160.MsgLockTokensResponse;
            fromAmino(object: _160.MsgLockTokensResponseAmino): _160.MsgLockTokensResponse;
            toAmino(message: _160.MsgLockTokensResponse): _160.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _160.MsgLockTokensResponseAminoMsg): _160.MsgLockTokensResponse;
            toAminoMsg(message: _160.MsgLockTokensResponse): _160.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _160.MsgLockTokensResponseProtoMsg): _160.MsgLockTokensResponse;
            toProto(message: _160.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _160.MsgLockTokensResponse): _160.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            encode(message: _160.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgBeginUnlockingAll;
            fromJSON(object: any): _160.MsgBeginUnlockingAll;
            toJSON(message: _160.MsgBeginUnlockingAll): unknown;
            fromPartial(object: Partial<_160.MsgBeginUnlockingAll>): _160.MsgBeginUnlockingAll;
            fromAmino(object: _160.MsgBeginUnlockingAllAmino): _160.MsgBeginUnlockingAll;
            toAmino(message: _160.MsgBeginUnlockingAll): _160.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _160.MsgBeginUnlockingAllAminoMsg): _160.MsgBeginUnlockingAll;
            toAminoMsg(message: _160.MsgBeginUnlockingAll): _160.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _160.MsgBeginUnlockingAllProtoMsg): _160.MsgBeginUnlockingAll;
            toProto(message: _160.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _160.MsgBeginUnlockingAll): _160.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            encode(message: _160.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _160.MsgBeginUnlockingAllResponse;
            toJSON(message: _160.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: Partial<_160.MsgBeginUnlockingAllResponse>): _160.MsgBeginUnlockingAllResponse;
            fromAmino(object: _160.MsgBeginUnlockingAllResponseAmino): _160.MsgBeginUnlockingAllResponse;
            toAmino(message: _160.MsgBeginUnlockingAllResponse): _160.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _160.MsgBeginUnlockingAllResponseAminoMsg): _160.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _160.MsgBeginUnlockingAllResponse): _160.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _160.MsgBeginUnlockingAllResponseProtoMsg): _160.MsgBeginUnlockingAllResponse;
            toProto(message: _160.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _160.MsgBeginUnlockingAllResponse): _160.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            encode(message: _160.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgBeginUnlocking;
            fromJSON(object: any): _160.MsgBeginUnlocking;
            toJSON(message: _160.MsgBeginUnlocking): unknown;
            fromPartial(object: Partial<_160.MsgBeginUnlocking>): _160.MsgBeginUnlocking;
            fromAmino(object: _160.MsgBeginUnlockingAmino): _160.MsgBeginUnlocking;
            toAmino(message: _160.MsgBeginUnlocking): _160.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _160.MsgBeginUnlockingAminoMsg): _160.MsgBeginUnlocking;
            toAminoMsg(message: _160.MsgBeginUnlocking): _160.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _160.MsgBeginUnlockingProtoMsg): _160.MsgBeginUnlocking;
            toProto(message: _160.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _160.MsgBeginUnlocking): _160.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            encode(message: _160.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgBeginUnlockingResponse;
            fromJSON(object: any): _160.MsgBeginUnlockingResponse;
            toJSON(message: _160.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: Partial<_160.MsgBeginUnlockingResponse>): _160.MsgBeginUnlockingResponse;
            fromAmino(object: _160.MsgBeginUnlockingResponseAmino): _160.MsgBeginUnlockingResponse;
            toAmino(message: _160.MsgBeginUnlockingResponse): _160.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _160.MsgBeginUnlockingResponseAminoMsg): _160.MsgBeginUnlockingResponse;
            toAminoMsg(message: _160.MsgBeginUnlockingResponse): _160.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _160.MsgBeginUnlockingResponseProtoMsg): _160.MsgBeginUnlockingResponse;
            toProto(message: _160.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _160.MsgBeginUnlockingResponse): _160.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            encode(message: _160.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgExtendLockup;
            fromJSON(object: any): _160.MsgExtendLockup;
            toJSON(message: _160.MsgExtendLockup): unknown;
            fromPartial(object: Partial<_160.MsgExtendLockup>): _160.MsgExtendLockup;
            fromAmino(object: _160.MsgExtendLockupAmino): _160.MsgExtendLockup;
            toAmino(message: _160.MsgExtendLockup): _160.MsgExtendLockupAmino;
            fromAminoMsg(object: _160.MsgExtendLockupAminoMsg): _160.MsgExtendLockup;
            toAminoMsg(message: _160.MsgExtendLockup): _160.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _160.MsgExtendLockupProtoMsg): _160.MsgExtendLockup;
            toProto(message: _160.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _160.MsgExtendLockup): _160.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            encode(message: _160.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgExtendLockupResponse;
            fromJSON(object: any): _160.MsgExtendLockupResponse;
            toJSON(message: _160.MsgExtendLockupResponse): unknown;
            fromPartial(object: Partial<_160.MsgExtendLockupResponse>): _160.MsgExtendLockupResponse;
            fromAmino(object: _160.MsgExtendLockupResponseAmino): _160.MsgExtendLockupResponse;
            toAmino(message: _160.MsgExtendLockupResponse): _160.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _160.MsgExtendLockupResponseAminoMsg): _160.MsgExtendLockupResponse;
            toAminoMsg(message: _160.MsgExtendLockupResponse): _160.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _160.MsgExtendLockupResponseProtoMsg): _160.MsgExtendLockupResponse;
            toProto(message: _160.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _160.MsgExtendLockupResponse): _160.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            encode(message: _160.MsgForceUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgForceUnlock;
            fromJSON(object: any): _160.MsgForceUnlock;
            toJSON(message: _160.MsgForceUnlock): unknown;
            fromPartial(object: Partial<_160.MsgForceUnlock>): _160.MsgForceUnlock;
            fromAmino(object: _160.MsgForceUnlockAmino): _160.MsgForceUnlock;
            toAmino(message: _160.MsgForceUnlock): _160.MsgForceUnlockAmino;
            fromAminoMsg(object: _160.MsgForceUnlockAminoMsg): _160.MsgForceUnlock;
            toAminoMsg(message: _160.MsgForceUnlock): _160.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _160.MsgForceUnlockProtoMsg): _160.MsgForceUnlock;
            toProto(message: _160.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _160.MsgForceUnlock): _160.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            encode(message: _160.MsgForceUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.MsgForceUnlockResponse;
            fromJSON(object: any): _160.MsgForceUnlockResponse;
            toJSON(message: _160.MsgForceUnlockResponse): unknown;
            fromPartial(object: Partial<_160.MsgForceUnlockResponse>): _160.MsgForceUnlockResponse;
            fromAmino(object: _160.MsgForceUnlockResponseAmino): _160.MsgForceUnlockResponse;
            toAmino(message: _160.MsgForceUnlockResponse): _160.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _160.MsgForceUnlockResponseAminoMsg): _160.MsgForceUnlockResponse;
            toAminoMsg(message: _160.MsgForceUnlockResponse): _160.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _160.MsgForceUnlockResponseProtoMsg): _160.MsgForceUnlockResponse;
            toProto(message: _160.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _160.MsgForceUnlockResponse): _160.MsgForceUnlockResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            encode(_: _159.ModuleBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.ModuleBalanceRequest;
            fromJSON(_: any): _159.ModuleBalanceRequest;
            toJSON(_: _159.ModuleBalanceRequest): unknown;
            fromPartial(_: Partial<_159.ModuleBalanceRequest>): _159.ModuleBalanceRequest;
            fromAmino(_: _159.ModuleBalanceRequestAmino): _159.ModuleBalanceRequest;
            toAmino(_: _159.ModuleBalanceRequest): _159.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _159.ModuleBalanceRequestAminoMsg): _159.ModuleBalanceRequest;
            toAminoMsg(message: _159.ModuleBalanceRequest): _159.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _159.ModuleBalanceRequestProtoMsg): _159.ModuleBalanceRequest;
            toProto(message: _159.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _159.ModuleBalanceRequest): _159.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            encode(message: _159.ModuleBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.ModuleBalanceResponse;
            fromJSON(object: any): _159.ModuleBalanceResponse;
            toJSON(message: _159.ModuleBalanceResponse): unknown;
            fromPartial(object: Partial<_159.ModuleBalanceResponse>): _159.ModuleBalanceResponse;
            fromAmino(object: _159.ModuleBalanceResponseAmino): _159.ModuleBalanceResponse;
            toAmino(message: _159.ModuleBalanceResponse): _159.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _159.ModuleBalanceResponseAminoMsg): _159.ModuleBalanceResponse;
            toAminoMsg(message: _159.ModuleBalanceResponse): _159.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _159.ModuleBalanceResponseProtoMsg): _159.ModuleBalanceResponse;
            toProto(message: _159.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _159.ModuleBalanceResponse): _159.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            encode(_: _159.ModuleLockedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.ModuleLockedAmountRequest;
            fromJSON(_: any): _159.ModuleLockedAmountRequest;
            toJSON(_: _159.ModuleLockedAmountRequest): unknown;
            fromPartial(_: Partial<_159.ModuleLockedAmountRequest>): _159.ModuleLockedAmountRequest;
            fromAmino(_: _159.ModuleLockedAmountRequestAmino): _159.ModuleLockedAmountRequest;
            toAmino(_: _159.ModuleLockedAmountRequest): _159.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _159.ModuleLockedAmountRequestAminoMsg): _159.ModuleLockedAmountRequest;
            toAminoMsg(message: _159.ModuleLockedAmountRequest): _159.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _159.ModuleLockedAmountRequestProtoMsg): _159.ModuleLockedAmountRequest;
            toProto(message: _159.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _159.ModuleLockedAmountRequest): _159.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            encode(message: _159.ModuleLockedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.ModuleLockedAmountResponse;
            fromJSON(object: any): _159.ModuleLockedAmountResponse;
            toJSON(message: _159.ModuleLockedAmountResponse): unknown;
            fromPartial(object: Partial<_159.ModuleLockedAmountResponse>): _159.ModuleLockedAmountResponse;
            fromAmino(object: _159.ModuleLockedAmountResponseAmino): _159.ModuleLockedAmountResponse;
            toAmino(message: _159.ModuleLockedAmountResponse): _159.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _159.ModuleLockedAmountResponseAminoMsg): _159.ModuleLockedAmountResponse;
            toAminoMsg(message: _159.ModuleLockedAmountResponse): _159.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _159.ModuleLockedAmountResponseProtoMsg): _159.ModuleLockedAmountResponse;
            toProto(message: _159.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _159.ModuleLockedAmountResponse): _159.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            encode(message: _159.AccountUnlockableCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _159.AccountUnlockableCoinsRequest;
            toJSON(message: _159.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: Partial<_159.AccountUnlockableCoinsRequest>): _159.AccountUnlockableCoinsRequest;
            fromAmino(object: _159.AccountUnlockableCoinsRequestAmino): _159.AccountUnlockableCoinsRequest;
            toAmino(message: _159.AccountUnlockableCoinsRequest): _159.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _159.AccountUnlockableCoinsRequestAminoMsg): _159.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _159.AccountUnlockableCoinsRequest): _159.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _159.AccountUnlockableCoinsRequestProtoMsg): _159.AccountUnlockableCoinsRequest;
            toProto(message: _159.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _159.AccountUnlockableCoinsRequest): _159.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            encode(message: _159.AccountUnlockableCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _159.AccountUnlockableCoinsResponse;
            toJSON(message: _159.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: Partial<_159.AccountUnlockableCoinsResponse>): _159.AccountUnlockableCoinsResponse;
            fromAmino(object: _159.AccountUnlockableCoinsResponseAmino): _159.AccountUnlockableCoinsResponse;
            toAmino(message: _159.AccountUnlockableCoinsResponse): _159.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _159.AccountUnlockableCoinsResponseAminoMsg): _159.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _159.AccountUnlockableCoinsResponse): _159.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _159.AccountUnlockableCoinsResponseProtoMsg): _159.AccountUnlockableCoinsResponse;
            toProto(message: _159.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _159.AccountUnlockableCoinsResponse): _159.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            encode(message: _159.AccountUnlockingCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _159.AccountUnlockingCoinsRequest;
            toJSON(message: _159.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: Partial<_159.AccountUnlockingCoinsRequest>): _159.AccountUnlockingCoinsRequest;
            fromAmino(object: _159.AccountUnlockingCoinsRequestAmino): _159.AccountUnlockingCoinsRequest;
            toAmino(message: _159.AccountUnlockingCoinsRequest): _159.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _159.AccountUnlockingCoinsRequestAminoMsg): _159.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _159.AccountUnlockingCoinsRequest): _159.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _159.AccountUnlockingCoinsRequestProtoMsg): _159.AccountUnlockingCoinsRequest;
            toProto(message: _159.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _159.AccountUnlockingCoinsRequest): _159.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            encode(message: _159.AccountUnlockingCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _159.AccountUnlockingCoinsResponse;
            toJSON(message: _159.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: Partial<_159.AccountUnlockingCoinsResponse>): _159.AccountUnlockingCoinsResponse;
            fromAmino(object: _159.AccountUnlockingCoinsResponseAmino): _159.AccountUnlockingCoinsResponse;
            toAmino(message: _159.AccountUnlockingCoinsResponse): _159.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _159.AccountUnlockingCoinsResponseAminoMsg): _159.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _159.AccountUnlockingCoinsResponse): _159.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _159.AccountUnlockingCoinsResponseProtoMsg): _159.AccountUnlockingCoinsResponse;
            toProto(message: _159.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _159.AccountUnlockingCoinsResponse): _159.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            encode(message: _159.AccountLockedCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedCoinsRequest;
            fromJSON(object: any): _159.AccountLockedCoinsRequest;
            toJSON(message: _159.AccountLockedCoinsRequest): unknown;
            fromPartial(object: Partial<_159.AccountLockedCoinsRequest>): _159.AccountLockedCoinsRequest;
            fromAmino(object: _159.AccountLockedCoinsRequestAmino): _159.AccountLockedCoinsRequest;
            toAmino(message: _159.AccountLockedCoinsRequest): _159.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _159.AccountLockedCoinsRequestAminoMsg): _159.AccountLockedCoinsRequest;
            toAminoMsg(message: _159.AccountLockedCoinsRequest): _159.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _159.AccountLockedCoinsRequestProtoMsg): _159.AccountLockedCoinsRequest;
            toProto(message: _159.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _159.AccountLockedCoinsRequest): _159.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            encode(message: _159.AccountLockedCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedCoinsResponse;
            fromJSON(object: any): _159.AccountLockedCoinsResponse;
            toJSON(message: _159.AccountLockedCoinsResponse): unknown;
            fromPartial(object: Partial<_159.AccountLockedCoinsResponse>): _159.AccountLockedCoinsResponse;
            fromAmino(object: _159.AccountLockedCoinsResponseAmino): _159.AccountLockedCoinsResponse;
            toAmino(message: _159.AccountLockedCoinsResponse): _159.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _159.AccountLockedCoinsResponseAminoMsg): _159.AccountLockedCoinsResponse;
            toAminoMsg(message: _159.AccountLockedCoinsResponse): _159.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _159.AccountLockedCoinsResponseProtoMsg): _159.AccountLockedCoinsResponse;
            toProto(message: _159.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _159.AccountLockedCoinsResponse): _159.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            encode(message: _159.AccountLockedPastTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedPastTimeRequest;
            fromJSON(object: any): _159.AccountLockedPastTimeRequest;
            toJSON(message: _159.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: Partial<_159.AccountLockedPastTimeRequest>): _159.AccountLockedPastTimeRequest;
            fromAmino(object: _159.AccountLockedPastTimeRequestAmino): _159.AccountLockedPastTimeRequest;
            toAmino(message: _159.AccountLockedPastTimeRequest): _159.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _159.AccountLockedPastTimeRequestAminoMsg): _159.AccountLockedPastTimeRequest;
            toAminoMsg(message: _159.AccountLockedPastTimeRequest): _159.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _159.AccountLockedPastTimeRequestProtoMsg): _159.AccountLockedPastTimeRequest;
            toProto(message: _159.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _159.AccountLockedPastTimeRequest): _159.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            encode(message: _159.AccountLockedPastTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedPastTimeResponse;
            fromJSON(object: any): _159.AccountLockedPastTimeResponse;
            toJSON(message: _159.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: Partial<_159.AccountLockedPastTimeResponse>): _159.AccountLockedPastTimeResponse;
            fromAmino(object: _159.AccountLockedPastTimeResponseAmino): _159.AccountLockedPastTimeResponse;
            toAmino(message: _159.AccountLockedPastTimeResponse): _159.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _159.AccountLockedPastTimeResponseAminoMsg): _159.AccountLockedPastTimeResponse;
            toAminoMsg(message: _159.AccountLockedPastTimeResponse): _159.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _159.AccountLockedPastTimeResponseProtoMsg): _159.AccountLockedPastTimeResponse;
            toProto(message: _159.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _159.AccountLockedPastTimeResponse): _159.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _159.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _159.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _159.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_159.AccountLockedPastTimeNotUnlockingOnlyRequest>): _159.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromAmino(object: _159.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _159.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _159.AccountLockedPastTimeNotUnlockingOnlyRequest): _159.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _159.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _159.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _159.AccountLockedPastTimeNotUnlockingOnlyRequest): _159.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _159.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _159.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _159.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _159.AccountLockedPastTimeNotUnlockingOnlyRequest): _159.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _159.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _159.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _159.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_159.AccountLockedPastTimeNotUnlockingOnlyResponse>): _159.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromAmino(object: _159.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _159.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _159.AccountLockedPastTimeNotUnlockingOnlyResponse): _159.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _159.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _159.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _159.AccountLockedPastTimeNotUnlockingOnlyResponse): _159.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _159.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _159.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _159.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _159.AccountLockedPastTimeNotUnlockingOnlyResponse): _159.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            encode(message: _159.AccountUnlockedBeforeTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _159.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _159.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: Partial<_159.AccountUnlockedBeforeTimeRequest>): _159.AccountUnlockedBeforeTimeRequest;
            fromAmino(object: _159.AccountUnlockedBeforeTimeRequestAmino): _159.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _159.AccountUnlockedBeforeTimeRequest): _159.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _159.AccountUnlockedBeforeTimeRequestAminoMsg): _159.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _159.AccountUnlockedBeforeTimeRequest): _159.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _159.AccountUnlockedBeforeTimeRequestProtoMsg): _159.AccountUnlockedBeforeTimeRequest;
            toProto(message: _159.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _159.AccountUnlockedBeforeTimeRequest): _159.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            encode(message: _159.AccountUnlockedBeforeTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _159.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _159.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: Partial<_159.AccountUnlockedBeforeTimeResponse>): _159.AccountUnlockedBeforeTimeResponse;
            fromAmino(object: _159.AccountUnlockedBeforeTimeResponseAmino): _159.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _159.AccountUnlockedBeforeTimeResponse): _159.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _159.AccountUnlockedBeforeTimeResponseAminoMsg): _159.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _159.AccountUnlockedBeforeTimeResponse): _159.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _159.AccountUnlockedBeforeTimeResponseProtoMsg): _159.AccountUnlockedBeforeTimeResponse;
            toProto(message: _159.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _159.AccountUnlockedBeforeTimeResponse): _159.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            encode(message: _159.AccountLockedPastTimeDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _159.AccountLockedPastTimeDenomRequest;
            toJSON(message: _159.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: Partial<_159.AccountLockedPastTimeDenomRequest>): _159.AccountLockedPastTimeDenomRequest;
            fromAmino(object: _159.AccountLockedPastTimeDenomRequestAmino): _159.AccountLockedPastTimeDenomRequest;
            toAmino(message: _159.AccountLockedPastTimeDenomRequest): _159.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _159.AccountLockedPastTimeDenomRequestAminoMsg): _159.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _159.AccountLockedPastTimeDenomRequest): _159.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _159.AccountLockedPastTimeDenomRequestProtoMsg): _159.AccountLockedPastTimeDenomRequest;
            toProto(message: _159.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _159.AccountLockedPastTimeDenomRequest): _159.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            encode(message: _159.AccountLockedPastTimeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _159.AccountLockedPastTimeDenomResponse;
            toJSON(message: _159.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: Partial<_159.AccountLockedPastTimeDenomResponse>): _159.AccountLockedPastTimeDenomResponse;
            fromAmino(object: _159.AccountLockedPastTimeDenomResponseAmino): _159.AccountLockedPastTimeDenomResponse;
            toAmino(message: _159.AccountLockedPastTimeDenomResponse): _159.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _159.AccountLockedPastTimeDenomResponseAminoMsg): _159.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _159.AccountLockedPastTimeDenomResponse): _159.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _159.AccountLockedPastTimeDenomResponseProtoMsg): _159.AccountLockedPastTimeDenomResponse;
            toProto(message: _159.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _159.AccountLockedPastTimeDenomResponse): _159.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            encode(message: _159.LockedDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.LockedDenomRequest;
            fromJSON(object: any): _159.LockedDenomRequest;
            toJSON(message: _159.LockedDenomRequest): unknown;
            fromPartial(object: Partial<_159.LockedDenomRequest>): _159.LockedDenomRequest;
            fromAmino(object: _159.LockedDenomRequestAmino): _159.LockedDenomRequest;
            toAmino(message: _159.LockedDenomRequest): _159.LockedDenomRequestAmino;
            fromAminoMsg(object: _159.LockedDenomRequestAminoMsg): _159.LockedDenomRequest;
            toAminoMsg(message: _159.LockedDenomRequest): _159.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _159.LockedDenomRequestProtoMsg): _159.LockedDenomRequest;
            toProto(message: _159.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _159.LockedDenomRequest): _159.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            encode(message: _159.LockedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.LockedDenomResponse;
            fromJSON(object: any): _159.LockedDenomResponse;
            toJSON(message: _159.LockedDenomResponse): unknown;
            fromPartial(object: Partial<_159.LockedDenomResponse>): _159.LockedDenomResponse;
            fromAmino(object: _159.LockedDenomResponseAmino): _159.LockedDenomResponse;
            toAmino(message: _159.LockedDenomResponse): _159.LockedDenomResponseAmino;
            fromAminoMsg(object: _159.LockedDenomResponseAminoMsg): _159.LockedDenomResponse;
            toAminoMsg(message: _159.LockedDenomResponse): _159.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _159.LockedDenomResponseProtoMsg): _159.LockedDenomResponse;
            toProto(message: _159.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _159.LockedDenomResponse): _159.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            encode(message: _159.LockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.LockedRequest;
            fromJSON(object: any): _159.LockedRequest;
            toJSON(message: _159.LockedRequest): unknown;
            fromPartial(object: Partial<_159.LockedRequest>): _159.LockedRequest;
            fromAmino(object: _159.LockedRequestAmino): _159.LockedRequest;
            toAmino(message: _159.LockedRequest): _159.LockedRequestAmino;
            fromAminoMsg(object: _159.LockedRequestAminoMsg): _159.LockedRequest;
            toAminoMsg(message: _159.LockedRequest): _159.LockedRequestAminoMsg;
            fromProtoMsg(message: _159.LockedRequestProtoMsg): _159.LockedRequest;
            toProto(message: _159.LockedRequest): Uint8Array;
            toProtoMsg(message: _159.LockedRequest): _159.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            encode(message: _159.LockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.LockedResponse;
            fromJSON(object: any): _159.LockedResponse;
            toJSON(message: _159.LockedResponse): unknown;
            fromPartial(object: Partial<_159.LockedResponse>): _159.LockedResponse;
            fromAmino(object: _159.LockedResponseAmino): _159.LockedResponse;
            toAmino(message: _159.LockedResponse): _159.LockedResponseAmino;
            fromAminoMsg(object: _159.LockedResponseAminoMsg): _159.LockedResponse;
            toAminoMsg(message: _159.LockedResponse): _159.LockedResponseAminoMsg;
            fromProtoMsg(message: _159.LockedResponseProtoMsg): _159.LockedResponse;
            toProto(message: _159.LockedResponse): Uint8Array;
            toProtoMsg(message: _159.LockedResponse): _159.LockedResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            encode(message: _159.SyntheticLockupsByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _159.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _159.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: Partial<_159.SyntheticLockupsByLockupIDRequest>): _159.SyntheticLockupsByLockupIDRequest;
            fromAmino(object: _159.SyntheticLockupsByLockupIDRequestAmino): _159.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _159.SyntheticLockupsByLockupIDRequest): _159.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _159.SyntheticLockupsByLockupIDRequestAminoMsg): _159.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _159.SyntheticLockupsByLockupIDRequest): _159.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _159.SyntheticLockupsByLockupIDRequestProtoMsg): _159.SyntheticLockupsByLockupIDRequest;
            toProto(message: _159.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _159.SyntheticLockupsByLockupIDRequest): _159.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            encode(message: _159.SyntheticLockupsByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _159.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _159.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: Partial<_159.SyntheticLockupsByLockupIDResponse>): _159.SyntheticLockupsByLockupIDResponse;
            fromAmino(object: _159.SyntheticLockupsByLockupIDResponseAmino): _159.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _159.SyntheticLockupsByLockupIDResponse): _159.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _159.SyntheticLockupsByLockupIDResponseAminoMsg): _159.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _159.SyntheticLockupsByLockupIDResponse): _159.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _159.SyntheticLockupsByLockupIDResponseProtoMsg): _159.SyntheticLockupsByLockupIDResponse;
            toProto(message: _159.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _159.SyntheticLockupsByLockupIDResponse): _159.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            encode(message: _159.AccountLockedLongerDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _159.AccountLockedLongerDurationRequest;
            toJSON(message: _159.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: Partial<_159.AccountLockedLongerDurationRequest>): _159.AccountLockedLongerDurationRequest;
            fromAmino(object: _159.AccountLockedLongerDurationRequestAmino): _159.AccountLockedLongerDurationRequest;
            toAmino(message: _159.AccountLockedLongerDurationRequest): _159.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _159.AccountLockedLongerDurationRequestAminoMsg): _159.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _159.AccountLockedLongerDurationRequest): _159.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _159.AccountLockedLongerDurationRequestProtoMsg): _159.AccountLockedLongerDurationRequest;
            toProto(message: _159.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _159.AccountLockedLongerDurationRequest): _159.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            encode(message: _159.AccountLockedLongerDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _159.AccountLockedLongerDurationResponse;
            toJSON(message: _159.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: Partial<_159.AccountLockedLongerDurationResponse>): _159.AccountLockedLongerDurationResponse;
            fromAmino(object: _159.AccountLockedLongerDurationResponseAmino): _159.AccountLockedLongerDurationResponse;
            toAmino(message: _159.AccountLockedLongerDurationResponse): _159.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _159.AccountLockedLongerDurationResponseAminoMsg): _159.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _159.AccountLockedLongerDurationResponse): _159.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _159.AccountLockedLongerDurationResponseProtoMsg): _159.AccountLockedLongerDurationResponse;
            toProto(message: _159.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _159.AccountLockedLongerDurationResponse): _159.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            encode(message: _159.AccountLockedDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedDurationRequest;
            fromJSON(object: any): _159.AccountLockedDurationRequest;
            toJSON(message: _159.AccountLockedDurationRequest): unknown;
            fromPartial(object: Partial<_159.AccountLockedDurationRequest>): _159.AccountLockedDurationRequest;
            fromAmino(object: _159.AccountLockedDurationRequestAmino): _159.AccountLockedDurationRequest;
            toAmino(message: _159.AccountLockedDurationRequest): _159.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _159.AccountLockedDurationRequestAminoMsg): _159.AccountLockedDurationRequest;
            toAminoMsg(message: _159.AccountLockedDurationRequest): _159.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _159.AccountLockedDurationRequestProtoMsg): _159.AccountLockedDurationRequest;
            toProto(message: _159.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _159.AccountLockedDurationRequest): _159.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            encode(message: _159.AccountLockedDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedDurationResponse;
            fromJSON(object: any): _159.AccountLockedDurationResponse;
            toJSON(message: _159.AccountLockedDurationResponse): unknown;
            fromPartial(object: Partial<_159.AccountLockedDurationResponse>): _159.AccountLockedDurationResponse;
            fromAmino(object: _159.AccountLockedDurationResponseAmino): _159.AccountLockedDurationResponse;
            toAmino(message: _159.AccountLockedDurationResponse): _159.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _159.AccountLockedDurationResponseAminoMsg): _159.AccountLockedDurationResponse;
            toAminoMsg(message: _159.AccountLockedDurationResponse): _159.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _159.AccountLockedDurationResponseProtoMsg): _159.AccountLockedDurationResponse;
            toProto(message: _159.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _159.AccountLockedDurationResponse): _159.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            encode(message: _159.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _159.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _159.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: Partial<_159.AccountLockedLongerDurationNotUnlockingOnlyRequest>): _159.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromAmino(object: _159.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _159.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _159.AccountLockedLongerDurationNotUnlockingOnlyRequest): _159.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _159.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _159.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _159.AccountLockedLongerDurationNotUnlockingOnlyRequest): _159.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _159.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _159.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _159.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _159.AccountLockedLongerDurationNotUnlockingOnlyRequest): _159.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            encode(message: _159.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _159.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _159.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: Partial<_159.AccountLockedLongerDurationNotUnlockingOnlyResponse>): _159.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromAmino(object: _159.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _159.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _159.AccountLockedLongerDurationNotUnlockingOnlyResponse): _159.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _159.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _159.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _159.AccountLockedLongerDurationNotUnlockingOnlyResponse): _159.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _159.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _159.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _159.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _159.AccountLockedLongerDurationNotUnlockingOnlyResponse): _159.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            encode(message: _159.AccountLockedLongerDurationDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _159.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _159.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: Partial<_159.AccountLockedLongerDurationDenomRequest>): _159.AccountLockedLongerDurationDenomRequest;
            fromAmino(object: _159.AccountLockedLongerDurationDenomRequestAmino): _159.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _159.AccountLockedLongerDurationDenomRequest): _159.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _159.AccountLockedLongerDurationDenomRequestAminoMsg): _159.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _159.AccountLockedLongerDurationDenomRequest): _159.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _159.AccountLockedLongerDurationDenomRequestProtoMsg): _159.AccountLockedLongerDurationDenomRequest;
            toProto(message: _159.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _159.AccountLockedLongerDurationDenomRequest): _159.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            encode(message: _159.AccountLockedLongerDurationDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _159.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _159.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: Partial<_159.AccountLockedLongerDurationDenomResponse>): _159.AccountLockedLongerDurationDenomResponse;
            fromAmino(object: _159.AccountLockedLongerDurationDenomResponseAmino): _159.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _159.AccountLockedLongerDurationDenomResponse): _159.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _159.AccountLockedLongerDurationDenomResponseAminoMsg): _159.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _159.AccountLockedLongerDurationDenomResponse): _159.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _159.AccountLockedLongerDurationDenomResponseProtoMsg): _159.AccountLockedLongerDurationDenomResponse;
            toProto(message: _159.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _159.AccountLockedLongerDurationDenomResponse): _159.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _159.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryParamsRequest;
            fromJSON(_: any): _159.QueryParamsRequest;
            toJSON(_: _159.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_159.QueryParamsRequest>): _159.QueryParamsRequest;
            fromAmino(_: _159.QueryParamsRequestAmino): _159.QueryParamsRequest;
            toAmino(_: _159.QueryParamsRequest): _159.QueryParamsRequestAmino;
            fromAminoMsg(object: _159.QueryParamsRequestAminoMsg): _159.QueryParamsRequest;
            toAminoMsg(message: _159.QueryParamsRequest): _159.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _159.QueryParamsRequestProtoMsg): _159.QueryParamsRequest;
            toProto(message: _159.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _159.QueryParamsRequest): _159.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _159.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.QueryParamsResponse;
            fromJSON(object: any): _159.QueryParamsResponse;
            toJSON(message: _159.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_159.QueryParamsResponse>): _159.QueryParamsResponse;
            fromAmino(object: _159.QueryParamsResponseAmino): _159.QueryParamsResponse;
            toAmino(message: _159.QueryParamsResponse): _159.QueryParamsResponseAmino;
            fromAminoMsg(object: _159.QueryParamsResponseAminoMsg): _159.QueryParamsResponse;
            toAminoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _159.QueryParamsResponseProtoMsg): _159.QueryParamsResponse;
            toProto(message: _159.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _159.QueryParamsResponse): _159.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _158.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.Params;
            fromJSON(object: any): _158.Params;
            toJSON(message: _158.Params): unknown;
            fromPartial(object: Partial<_158.Params>): _158.Params;
            fromAmino(object: _158.ParamsAmino): _158.Params;
            toAmino(message: _158.Params): _158.ParamsAmino;
            fromAminoMsg(object: _158.ParamsAminoMsg): _158.Params;
            toAminoMsg(message: _158.Params): _158.ParamsAminoMsg;
            fromProtoMsg(message: _158.ParamsProtoMsg): _158.Params;
            toProto(message: _158.Params): Uint8Array;
            toProtoMsg(message: _158.Params): _158.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _157.LockQueryType;
        lockQueryTypeToJSON(object: _157.LockQueryType): string;
        LockQueryType: typeof _157.LockQueryType;
        LockQueryTypeSDKType: typeof _157.LockQueryType;
        LockQueryTypeAmino: typeof _157.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            encode(message: _157.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.PeriodLock;
            fromJSON(object: any): _157.PeriodLock;
            toJSON(message: _157.PeriodLock): unknown;
            fromPartial(object: Partial<_157.PeriodLock>): _157.PeriodLock;
            fromAmino(object: _157.PeriodLockAmino): _157.PeriodLock;
            toAmino(message: _157.PeriodLock): _157.PeriodLockAmino;
            fromAminoMsg(object: _157.PeriodLockAminoMsg): _157.PeriodLock;
            toAminoMsg(message: _157.PeriodLock): _157.PeriodLockAminoMsg;
            fromProtoMsg(message: _157.PeriodLockProtoMsg): _157.PeriodLock;
            toProto(message: _157.PeriodLock): Uint8Array;
            toProtoMsg(message: _157.PeriodLock): _157.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            encode(message: _157.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.QueryCondition;
            fromJSON(object: any): _157.QueryCondition;
            toJSON(message: _157.QueryCondition): unknown;
            fromPartial(object: Partial<_157.QueryCondition>): _157.QueryCondition;
            fromAmino(object: _157.QueryConditionAmino): _157.QueryCondition;
            toAmino(message: _157.QueryCondition): _157.QueryConditionAmino;
            fromAminoMsg(object: _157.QueryConditionAminoMsg): _157.QueryCondition;
            toAminoMsg(message: _157.QueryCondition): _157.QueryConditionAminoMsg;
            fromProtoMsg(message: _157.QueryConditionProtoMsg): _157.QueryCondition;
            toProto(message: _157.QueryCondition): Uint8Array;
            toProtoMsg(message: _157.QueryCondition): _157.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            encode(message: _157.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.SyntheticLock;
            fromJSON(object: any): _157.SyntheticLock;
            toJSON(message: _157.SyntheticLock): unknown;
            fromPartial(object: Partial<_157.SyntheticLock>): _157.SyntheticLock;
            fromAmino(object: _157.SyntheticLockAmino): _157.SyntheticLock;
            toAmino(message: _157.SyntheticLock): _157.SyntheticLockAmino;
            fromAminoMsg(object: _157.SyntheticLockAminoMsg): _157.SyntheticLock;
            toAminoMsg(message: _157.SyntheticLock): _157.SyntheticLockAminoMsg;
            fromProtoMsg(message: _157.SyntheticLockProtoMsg): _157.SyntheticLock;
            toProto(message: _157.SyntheticLock): Uint8Array;
            toProtoMsg(message: _157.SyntheticLock): _157.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _156.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.GenesisState;
            fromJSON(object: any): _156.GenesisState;
            toJSON(message: _156.GenesisState): unknown;
            fromPartial(object: Partial<_156.GenesisState>): _156.GenesisState;
            fromAmino(object: _156.GenesisStateAmino): _156.GenesisState;
            toAmino(message: _156.GenesisState): _156.GenesisStateAmino;
            fromAminoMsg(object: _156.GenesisStateAminoMsg): _156.GenesisState;
            toAminoMsg(message: _156.GenesisState): _156.GenesisStateAminoMsg;
            fromProtoMsg(message: _156.GenesisStateProtoMsg): _156.GenesisState;
            toProto(message: _156.GenesisState): Uint8Array;
            toProtoMsg(message: _156.GenesisState): _156.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _406.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                epochProvisions(request?: _163.QueryEpochProvisionsRequest): Promise<_163.QueryEpochProvisionsResponse>;
            };
            LCDQueryClient: typeof _390.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _163.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryParamsRequest;
                fromJSON(_: any): _163.QueryParamsRequest;
                toJSON(_: _163.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_163.QueryParamsRequest>): _163.QueryParamsRequest;
                fromAmino(_: _163.QueryParamsRequestAmino): _163.QueryParamsRequest;
                toAmino(_: _163.QueryParamsRequest): _163.QueryParamsRequestAmino;
                fromAminoMsg(object: _163.QueryParamsRequestAminoMsg): _163.QueryParamsRequest;
                toAminoMsg(message: _163.QueryParamsRequest): _163.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _163.QueryParamsRequestProtoMsg): _163.QueryParamsRequest;
                toProto(message: _163.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _163.QueryParamsRequest): _163.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _163.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryParamsResponse;
                fromJSON(object: any): _163.QueryParamsResponse;
                toJSON(message: _163.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_163.QueryParamsResponse>): _163.QueryParamsResponse;
                fromAmino(object: _163.QueryParamsResponseAmino): _163.QueryParamsResponse;
                toAmino(message: _163.QueryParamsResponse): _163.QueryParamsResponseAmino;
                fromAminoMsg(object: _163.QueryParamsResponseAminoMsg): _163.QueryParamsResponse;
                toAminoMsg(message: _163.QueryParamsResponse): _163.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _163.QueryParamsResponseProtoMsg): _163.QueryParamsResponse;
                toProto(message: _163.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _163.QueryParamsResponse): _163.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                encode(_: _163.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryEpochProvisionsRequest;
                fromJSON(_: any): _163.QueryEpochProvisionsRequest;
                toJSON(_: _163.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: Partial<_163.QueryEpochProvisionsRequest>): _163.QueryEpochProvisionsRequest;
                fromAmino(_: _163.QueryEpochProvisionsRequestAmino): _163.QueryEpochProvisionsRequest;
                toAmino(_: _163.QueryEpochProvisionsRequest): _163.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _163.QueryEpochProvisionsRequestAminoMsg): _163.QueryEpochProvisionsRequest;
                toAminoMsg(message: _163.QueryEpochProvisionsRequest): _163.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _163.QueryEpochProvisionsRequestProtoMsg): _163.QueryEpochProvisionsRequest;
                toProto(message: _163.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _163.QueryEpochProvisionsRequest): _163.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                encode(message: _163.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.QueryEpochProvisionsResponse;
                fromJSON(object: any): _163.QueryEpochProvisionsResponse;
                toJSON(message: _163.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: Partial<_163.QueryEpochProvisionsResponse>): _163.QueryEpochProvisionsResponse;
                fromAmino(object: _163.QueryEpochProvisionsResponseAmino): _163.QueryEpochProvisionsResponse;
                toAmino(message: _163.QueryEpochProvisionsResponse): _163.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _163.QueryEpochProvisionsResponseAminoMsg): _163.QueryEpochProvisionsResponse;
                toAminoMsg(message: _163.QueryEpochProvisionsResponse): _163.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _163.QueryEpochProvisionsResponseProtoMsg): _163.QueryEpochProvisionsResponse;
                toProto(message: _163.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _163.QueryEpochProvisionsResponse): _163.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _162.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Minter;
                fromJSON(object: any): _162.Minter;
                toJSON(message: _162.Minter): unknown;
                fromPartial(object: Partial<_162.Minter>): _162.Minter;
                fromAmino(object: _162.MinterAmino): _162.Minter;
                toAmino(message: _162.Minter): _162.MinterAmino;
                fromAminoMsg(object: _162.MinterAminoMsg): _162.Minter;
                toAminoMsg(message: _162.Minter): _162.MinterAminoMsg;
                fromProtoMsg(message: _162.MinterProtoMsg): _162.Minter;
                toProto(message: _162.Minter): Uint8Array;
                toProtoMsg(message: _162.Minter): _162.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                encode(message: _162.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.WeightedAddress;
                fromJSON(object: any): _162.WeightedAddress;
                toJSON(message: _162.WeightedAddress): unknown;
                fromPartial(object: Partial<_162.WeightedAddress>): _162.WeightedAddress;
                fromAmino(object: _162.WeightedAddressAmino): _162.WeightedAddress;
                toAmino(message: _162.WeightedAddress): _162.WeightedAddressAmino;
                fromAminoMsg(object: _162.WeightedAddressAminoMsg): _162.WeightedAddress;
                toAminoMsg(message: _162.WeightedAddress): _162.WeightedAddressAminoMsg;
                fromProtoMsg(message: _162.WeightedAddressProtoMsg): _162.WeightedAddress;
                toProto(message: _162.WeightedAddress): Uint8Array;
                toProtoMsg(message: _162.WeightedAddress): _162.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                encode(message: _162.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.DistributionProportions;
                fromJSON(object: any): _162.DistributionProportions;
                toJSON(message: _162.DistributionProportions): unknown;
                fromPartial(object: Partial<_162.DistributionProportions>): _162.DistributionProportions;
                fromAmino(object: _162.DistributionProportionsAmino): _162.DistributionProportions;
                toAmino(message: _162.DistributionProportions): _162.DistributionProportionsAmino;
                fromAminoMsg(object: _162.DistributionProportionsAminoMsg): _162.DistributionProportions;
                toAminoMsg(message: _162.DistributionProportions): _162.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _162.DistributionProportionsProtoMsg): _162.DistributionProportions;
                toProto(message: _162.DistributionProportions): Uint8Array;
                toProtoMsg(message: _162.DistributionProportions): _162.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _162.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.Params;
                fromJSON(object: any): _162.Params;
                toJSON(message: _162.Params): unknown;
                fromPartial(object: Partial<_162.Params>): _162.Params;
                fromAmino(object: _162.ParamsAmino): _162.Params;
                toAmino(message: _162.Params): _162.ParamsAmino;
                fromAminoMsg(object: _162.ParamsAminoMsg): _162.Params;
                toAminoMsg(message: _162.Params): _162.ParamsAminoMsg;
                fromProtoMsg(message: _162.ParamsProtoMsg): _162.Params;
                toProto(message: _162.Params): Uint8Array;
                toProtoMsg(message: _162.Params): _162.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _161.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.GenesisState;
                fromJSON(object: any): _161.GenesisState;
                toJSON(message: _161.GenesisState): unknown;
                fromPartial(object: Partial<_161.GenesisState>): _161.GenesisState;
                fromAmino(object: _161.GenesisStateAmino): _161.GenesisState;
                toAmino(message: _161.GenesisState): _161.GenesisStateAmino;
                fromAminoMsg(object: _161.GenesisStateAminoMsg): _161.GenesisState;
                toAminoMsg(message: _161.GenesisState): _161.GenesisStateAminoMsg;
                fromProtoMsg(message: _161.GenesisStateProtoMsg): _161.GenesisState;
                toProto(message: _161.GenesisState): Uint8Array;
                toProtoMsg(message: _161.GenesisState): _161.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _407.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                gaugeIds(request: _167.QueryGaugeIdsRequest): Promise<_167.QueryGaugeIdsResponse>;
                distrInfo(request?: _167.QueryDistrInfoRequest): Promise<_167.QueryDistrInfoResponse>;
                params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                lockableDurations(request?: _167.QueryLockableDurationsRequest): Promise<_167.QueryLockableDurationsResponse>;
                incentivizedPools(request?: _167.QueryIncentivizedPoolsRequest): Promise<_167.QueryIncentivizedPoolsResponse>;
                externalIncentiveGauges(request?: _167.QueryExternalIncentiveGaugesRequest): Promise<_167.QueryExternalIncentiveGaugesResponse>;
            };
            LCDQueryClient: typeof _391.LCDQueryClient;
            QueryGaugeIdsRequest: {
                typeUrl: string;
                encode(message: _167.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryGaugeIdsRequest;
                fromJSON(object: any): _167.QueryGaugeIdsRequest;
                toJSON(message: _167.QueryGaugeIdsRequest): unknown;
                fromPartial(object: Partial<_167.QueryGaugeIdsRequest>): _167.QueryGaugeIdsRequest;
                fromAmino(object: _167.QueryGaugeIdsRequestAmino): _167.QueryGaugeIdsRequest;
                toAmino(message: _167.QueryGaugeIdsRequest): _167.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _167.QueryGaugeIdsRequestAminoMsg): _167.QueryGaugeIdsRequest;
                toAminoMsg(message: _167.QueryGaugeIdsRequest): _167.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _167.QueryGaugeIdsRequestProtoMsg): _167.QueryGaugeIdsRequest;
                toProto(message: _167.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _167.QueryGaugeIdsRequest): _167.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                encode(message: _167.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryGaugeIdsResponse;
                fromJSON(object: any): _167.QueryGaugeIdsResponse;
                toJSON(message: _167.QueryGaugeIdsResponse): unknown;
                fromPartial(object: Partial<_167.QueryGaugeIdsResponse>): _167.QueryGaugeIdsResponse;
                fromAmino(object: _167.QueryGaugeIdsResponseAmino): _167.QueryGaugeIdsResponse;
                toAmino(message: _167.QueryGaugeIdsResponse): _167.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _167.QueryGaugeIdsResponseAminoMsg): _167.QueryGaugeIdsResponse;
                toAminoMsg(message: _167.QueryGaugeIdsResponse): _167.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _167.QueryGaugeIdsResponseProtoMsg): _167.QueryGaugeIdsResponse;
                toProto(message: _167.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _167.QueryGaugeIdsResponse): _167.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                encode(message: _167.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _167.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _167.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: Partial<_167.QueryGaugeIdsResponse_GaugeIdWithDuration>): _167.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromAmino(object: _167.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _167.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _167.QueryGaugeIdsResponse_GaugeIdWithDuration): _167.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _167.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _167.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _167.QueryGaugeIdsResponse_GaugeIdWithDuration): _167.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _167.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _167.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _167.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _167.QueryGaugeIdsResponse_GaugeIdWithDuration): _167.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                encode(_: _167.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDistrInfoRequest;
                fromJSON(_: any): _167.QueryDistrInfoRequest;
                toJSON(_: _167.QueryDistrInfoRequest): unknown;
                fromPartial(_: Partial<_167.QueryDistrInfoRequest>): _167.QueryDistrInfoRequest;
                fromAmino(_: _167.QueryDistrInfoRequestAmino): _167.QueryDistrInfoRequest;
                toAmino(_: _167.QueryDistrInfoRequest): _167.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _167.QueryDistrInfoRequestAminoMsg): _167.QueryDistrInfoRequest;
                toAminoMsg(message: _167.QueryDistrInfoRequest): _167.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _167.QueryDistrInfoRequestProtoMsg): _167.QueryDistrInfoRequest;
                toProto(message: _167.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _167.QueryDistrInfoRequest): _167.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                encode(message: _167.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryDistrInfoResponse;
                fromJSON(object: any): _167.QueryDistrInfoResponse;
                toJSON(message: _167.QueryDistrInfoResponse): unknown;
                fromPartial(object: Partial<_167.QueryDistrInfoResponse>): _167.QueryDistrInfoResponse;
                fromAmino(object: _167.QueryDistrInfoResponseAmino): _167.QueryDistrInfoResponse;
                toAmino(message: _167.QueryDistrInfoResponse): _167.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _167.QueryDistrInfoResponseAminoMsg): _167.QueryDistrInfoResponse;
                toAminoMsg(message: _167.QueryDistrInfoResponse): _167.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _167.QueryDistrInfoResponseProtoMsg): _167.QueryDistrInfoResponse;
                toProto(message: _167.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _167.QueryDistrInfoResponse): _167.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _167.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryParamsRequest;
                fromJSON(_: any): _167.QueryParamsRequest;
                toJSON(_: _167.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_167.QueryParamsRequest>): _167.QueryParamsRequest;
                fromAmino(_: _167.QueryParamsRequestAmino): _167.QueryParamsRequest;
                toAmino(_: _167.QueryParamsRequest): _167.QueryParamsRequestAmino;
                fromAminoMsg(object: _167.QueryParamsRequestAminoMsg): _167.QueryParamsRequest;
                toAminoMsg(message: _167.QueryParamsRequest): _167.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _167.QueryParamsRequestProtoMsg): _167.QueryParamsRequest;
                toProto(message: _167.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _167.QueryParamsRequest): _167.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _167.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryParamsResponse;
                fromJSON(object: any): _167.QueryParamsResponse;
                toJSON(message: _167.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_167.QueryParamsResponse>): _167.QueryParamsResponse;
                fromAmino(object: _167.QueryParamsResponseAmino): _167.QueryParamsResponse;
                toAmino(message: _167.QueryParamsResponse): _167.QueryParamsResponseAmino;
                fromAminoMsg(object: _167.QueryParamsResponseAminoMsg): _167.QueryParamsResponse;
                toAminoMsg(message: _167.QueryParamsResponse): _167.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _167.QueryParamsResponseProtoMsg): _167.QueryParamsResponse;
                toProto(message: _167.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _167.QueryParamsResponse): _167.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                encode(_: _167.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryLockableDurationsRequest;
                fromJSON(_: any): _167.QueryLockableDurationsRequest;
                toJSON(_: _167.QueryLockableDurationsRequest): unknown;
                fromPartial(_: Partial<_167.QueryLockableDurationsRequest>): _167.QueryLockableDurationsRequest;
                fromAmino(_: _167.QueryLockableDurationsRequestAmino): _167.QueryLockableDurationsRequest;
                toAmino(_: _167.QueryLockableDurationsRequest): _167.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _167.QueryLockableDurationsRequestAminoMsg): _167.QueryLockableDurationsRequest;
                toAminoMsg(message: _167.QueryLockableDurationsRequest): _167.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _167.QueryLockableDurationsRequestProtoMsg): _167.QueryLockableDurationsRequest;
                toProto(message: _167.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _167.QueryLockableDurationsRequest): _167.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                encode(message: _167.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryLockableDurationsResponse;
                fromJSON(object: any): _167.QueryLockableDurationsResponse;
                toJSON(message: _167.QueryLockableDurationsResponse): unknown;
                fromPartial(object: Partial<_167.QueryLockableDurationsResponse>): _167.QueryLockableDurationsResponse;
                fromAmino(object: _167.QueryLockableDurationsResponseAmino): _167.QueryLockableDurationsResponse;
                toAmino(message: _167.QueryLockableDurationsResponse): _167.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _167.QueryLockableDurationsResponseAminoMsg): _167.QueryLockableDurationsResponse;
                toAminoMsg(message: _167.QueryLockableDurationsResponse): _167.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _167.QueryLockableDurationsResponseProtoMsg): _167.QueryLockableDurationsResponse;
                toProto(message: _167.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _167.QueryLockableDurationsResponse): _167.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                encode(_: _167.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _167.QueryIncentivizedPoolsRequest;
                toJSON(_: _167.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: Partial<_167.QueryIncentivizedPoolsRequest>): _167.QueryIncentivizedPoolsRequest;
                fromAmino(_: _167.QueryIncentivizedPoolsRequestAmino): _167.QueryIncentivizedPoolsRequest;
                toAmino(_: _167.QueryIncentivizedPoolsRequest): _167.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _167.QueryIncentivizedPoolsRequestAminoMsg): _167.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _167.QueryIncentivizedPoolsRequest): _167.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _167.QueryIncentivizedPoolsRequestProtoMsg): _167.QueryIncentivizedPoolsRequest;
                toProto(message: _167.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _167.QueryIncentivizedPoolsRequest): _167.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                encode(message: _167.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.IncentivizedPool;
                fromJSON(object: any): _167.IncentivizedPool;
                toJSON(message: _167.IncentivizedPool): unknown;
                fromPartial(object: Partial<_167.IncentivizedPool>): _167.IncentivizedPool;
                fromAmino(object: _167.IncentivizedPoolAmino): _167.IncentivizedPool;
                toAmino(message: _167.IncentivizedPool): _167.IncentivizedPoolAmino;
                fromAminoMsg(object: _167.IncentivizedPoolAminoMsg): _167.IncentivizedPool;
                toAminoMsg(message: _167.IncentivizedPool): _167.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _167.IncentivizedPoolProtoMsg): _167.IncentivizedPool;
                toProto(message: _167.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _167.IncentivizedPool): _167.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                encode(message: _167.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _167.QueryIncentivizedPoolsResponse;
                toJSON(message: _167.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: Partial<_167.QueryIncentivizedPoolsResponse>): _167.QueryIncentivizedPoolsResponse;
                fromAmino(object: _167.QueryIncentivizedPoolsResponseAmino): _167.QueryIncentivizedPoolsResponse;
                toAmino(message: _167.QueryIncentivizedPoolsResponse): _167.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _167.QueryIncentivizedPoolsResponseAminoMsg): _167.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _167.QueryIncentivizedPoolsResponse): _167.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _167.QueryIncentivizedPoolsResponseProtoMsg): _167.QueryIncentivizedPoolsResponse;
                toProto(message: _167.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _167.QueryIncentivizedPoolsResponse): _167.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                encode(_: _167.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _167.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _167.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: Partial<_167.QueryExternalIncentiveGaugesRequest>): _167.QueryExternalIncentiveGaugesRequest;
                fromAmino(_: _167.QueryExternalIncentiveGaugesRequestAmino): _167.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _167.QueryExternalIncentiveGaugesRequest): _167.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _167.QueryExternalIncentiveGaugesRequestAminoMsg): _167.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _167.QueryExternalIncentiveGaugesRequest): _167.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _167.QueryExternalIncentiveGaugesRequestProtoMsg): _167.QueryExternalIncentiveGaugesRequest;
                toProto(message: _167.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _167.QueryExternalIncentiveGaugesRequest): _167.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                encode(message: _167.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _167.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _167.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: Partial<_167.QueryExternalIncentiveGaugesResponse>): _167.QueryExternalIncentiveGaugesResponse;
                fromAmino(object: _167.QueryExternalIncentiveGaugesResponseAmino): _167.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _167.QueryExternalIncentiveGaugesResponse): _167.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _167.QueryExternalIncentiveGaugesResponseAminoMsg): _167.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _167.QueryExternalIncentiveGaugesResponse): _167.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _167.QueryExternalIncentiveGaugesResponseProtoMsg): _167.QueryExternalIncentiveGaugesResponse;
                toProto(message: _167.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _167.QueryExternalIncentiveGaugesResponse): _167.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _166.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.Params;
                fromJSON(object: any): _166.Params;
                toJSON(message: _166.Params): unknown;
                fromPartial(object: Partial<_166.Params>): _166.Params;
                fromAmino(object: _166.ParamsAmino): _166.Params;
                toAmino(message: _166.Params): _166.ParamsAmino;
                fromAminoMsg(object: _166.ParamsAminoMsg): _166.Params;
                toAminoMsg(message: _166.Params): _166.ParamsAminoMsg;
                fromProtoMsg(message: _166.ParamsProtoMsg): _166.Params;
                toProto(message: _166.Params): Uint8Array;
                toProtoMsg(message: _166.Params): _166.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                encode(message: _166.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.LockableDurationsInfo;
                fromJSON(object: any): _166.LockableDurationsInfo;
                toJSON(message: _166.LockableDurationsInfo): unknown;
                fromPartial(object: Partial<_166.LockableDurationsInfo>): _166.LockableDurationsInfo;
                fromAmino(object: _166.LockableDurationsInfoAmino): _166.LockableDurationsInfo;
                toAmino(message: _166.LockableDurationsInfo): _166.LockableDurationsInfoAmino;
                fromAminoMsg(object: _166.LockableDurationsInfoAminoMsg): _166.LockableDurationsInfo;
                toAminoMsg(message: _166.LockableDurationsInfo): _166.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _166.LockableDurationsInfoProtoMsg): _166.LockableDurationsInfo;
                toProto(message: _166.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _166.LockableDurationsInfo): _166.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                encode(message: _166.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.DistrInfo;
                fromJSON(object: any): _166.DistrInfo;
                toJSON(message: _166.DistrInfo): unknown;
                fromPartial(object: Partial<_166.DistrInfo>): _166.DistrInfo;
                fromAmino(object: _166.DistrInfoAmino): _166.DistrInfo;
                toAmino(message: _166.DistrInfo): _166.DistrInfoAmino;
                fromAminoMsg(object: _166.DistrInfoAminoMsg): _166.DistrInfo;
                toAminoMsg(message: _166.DistrInfo): _166.DistrInfoAminoMsg;
                fromProtoMsg(message: _166.DistrInfoProtoMsg): _166.DistrInfo;
                toProto(message: _166.DistrInfo): Uint8Array;
                toProtoMsg(message: _166.DistrInfo): _166.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                encode(message: _166.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.DistrRecord;
                fromJSON(object: any): _166.DistrRecord;
                toJSON(message: _166.DistrRecord): unknown;
                fromPartial(object: Partial<_166.DistrRecord>): _166.DistrRecord;
                fromAmino(object: _166.DistrRecordAmino): _166.DistrRecord;
                toAmino(message: _166.DistrRecord): _166.DistrRecordAmino;
                fromAminoMsg(object: _166.DistrRecordAminoMsg): _166.DistrRecord;
                toAminoMsg(message: _166.DistrRecord): _166.DistrRecordAminoMsg;
                fromProtoMsg(message: _166.DistrRecordProtoMsg): _166.DistrRecord;
                toProto(message: _166.DistrRecord): Uint8Array;
                toProtoMsg(message: _166.DistrRecord): _166.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                encode(message: _166.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.PoolToGauge;
                fromJSON(object: any): _166.PoolToGauge;
                toJSON(message: _166.PoolToGauge): unknown;
                fromPartial(object: Partial<_166.PoolToGauge>): _166.PoolToGauge;
                fromAmino(object: _166.PoolToGaugeAmino): _166.PoolToGauge;
                toAmino(message: _166.PoolToGauge): _166.PoolToGaugeAmino;
                fromAminoMsg(object: _166.PoolToGaugeAminoMsg): _166.PoolToGauge;
                toAminoMsg(message: _166.PoolToGauge): _166.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _166.PoolToGaugeProtoMsg): _166.PoolToGauge;
                toProto(message: _166.PoolToGauge): Uint8Array;
                toProtoMsg(message: _166.PoolToGauge): _166.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                encode(message: _166.PoolToGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.PoolToGauges;
                fromJSON(object: any): _166.PoolToGauges;
                toJSON(message: _166.PoolToGauges): unknown;
                fromPartial(object: Partial<_166.PoolToGauges>): _166.PoolToGauges;
                fromAmino(object: _166.PoolToGaugesAmino): _166.PoolToGauges;
                toAmino(message: _166.PoolToGauges): _166.PoolToGaugesAmino;
                fromAminoMsg(object: _166.PoolToGaugesAminoMsg): _166.PoolToGauges;
                toAminoMsg(message: _166.PoolToGauges): _166.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _166.PoolToGaugesProtoMsg): _166.PoolToGauges;
                toProto(message: _166.PoolToGauges): Uint8Array;
                toProtoMsg(message: _166.PoolToGauges): _166.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _165.ReplacePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _165.ReplacePoolIncentivesProposal;
                toJSON(message: _165.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_165.ReplacePoolIncentivesProposal>): _165.ReplacePoolIncentivesProposal;
                fromAmino(object: _165.ReplacePoolIncentivesProposalAmino): _165.ReplacePoolIncentivesProposal;
                toAmino(message: _165.ReplacePoolIncentivesProposal): _165.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _165.ReplacePoolIncentivesProposalAminoMsg): _165.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _165.ReplacePoolIncentivesProposal): _165.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _165.ReplacePoolIncentivesProposalProtoMsg): _165.ReplacePoolIncentivesProposal;
                toProto(message: _165.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _165.ReplacePoolIncentivesProposal): _165.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                encode(message: _165.UpdatePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _165.UpdatePoolIncentivesProposal;
                toJSON(message: _165.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: Partial<_165.UpdatePoolIncentivesProposal>): _165.UpdatePoolIncentivesProposal;
                fromAmino(object: _165.UpdatePoolIncentivesProposalAmino): _165.UpdatePoolIncentivesProposal;
                toAmino(message: _165.UpdatePoolIncentivesProposal): _165.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _165.UpdatePoolIncentivesProposalAminoMsg): _165.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _165.UpdatePoolIncentivesProposal): _165.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _165.UpdatePoolIncentivesProposalProtoMsg): _165.UpdatePoolIncentivesProposal;
                toProto(message: _165.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _165.UpdatePoolIncentivesProposal): _165.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _164.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.GenesisState;
                fromJSON(object: any): _164.GenesisState;
                toJSON(message: _164.GenesisState): unknown;
                fromPartial(object: Partial<_164.GenesisState>): _164.GenesisState;
                fromAmino(object: _164.GenesisStateAmino): _164.GenesisState;
                toAmino(message: _164.GenesisState): _164.GenesisStateAmino;
                fromAminoMsg(object: _164.GenesisStateAminoMsg): _164.GenesisState;
                toAminoMsg(message: _164.GenesisState): _164.GenesisStateAminoMsg;
                fromProtoMsg(message: _164.GenesisStateProtoMsg): _164.GenesisState;
                toProto(message: _164.GenesisState): Uint8Array;
                toProtoMsg(message: _164.GenesisState): _164.GenesisStateProtoMsg;
            };
        };
    }
    namespace protorev {
        const v1beta1: {
            MsgClientImpl: typeof _420.MsgClientImpl;
            QueryClientImpl: typeof _408.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                getProtoRevNumberOfTrades(request?: _172.QueryGetProtoRevNumberOfTradesRequest): Promise<_172.QueryGetProtoRevNumberOfTradesResponse>;
                getProtoRevProfitsByDenom(request: _172.QueryGetProtoRevProfitsByDenomRequest): Promise<_172.QueryGetProtoRevProfitsByDenomResponse>;
                getProtoRevAllProfits(request?: _172.QueryGetProtoRevAllProfitsRequest): Promise<_172.QueryGetProtoRevAllProfitsResponse>;
                getProtoRevStatisticsByPool(request: _172.QueryGetProtoRevStatisticsByPoolRequest): Promise<_172.QueryGetProtoRevStatisticsByPoolResponse>;
                getProtoRevAllStatistics(request?: _172.QueryGetProtoRevAllStatisticsRequest): Promise<_172.QueryGetProtoRevAllStatisticsResponse>;
                getProtoRevTokenPairArbRoutes(request?: _172.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_172.QueryGetProtoRevTokenPairArbRoutesResponse>;
            };
            LCDQueryClient: typeof _392.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setHotRoutes(value: _173.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDeveloperAccount(value: _173.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setHotRoutes(value: _173.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _173.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _173.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _173.MsgSetDeveloperAccount;
                    };
                };
                toJSON: {
                    setHotRoutes(value: _173.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDeveloperAccount(value: _173.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setHotRoutes(value: any): {
                        typeUrl: string;
                        value: _173.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: any): {
                        typeUrl: string;
                        value: _173.MsgSetDeveloperAccount;
                    };
                };
                fromPartial: {
                    setHotRoutes(value: _173.MsgSetHotRoutes): {
                        typeUrl: string;
                        value: _173.MsgSetHotRoutes;
                    };
                    setDeveloperAccount(value: _173.MsgSetDeveloperAccount): {
                        typeUrl: string;
                        value: _173.MsgSetDeveloperAccount;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
                    aminoType: string;
                    toAmino: (message: _173.MsgSetHotRoutes) => _173.MsgSetHotRoutesAmino;
                    fromAmino: (object: _173.MsgSetHotRoutesAmino) => _173.MsgSetHotRoutes;
                };
                "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
                    aminoType: string;
                    toAmino: (message: _173.MsgSetDeveloperAccount) => _173.MsgSetDeveloperAccountAmino;
                    fromAmino: (object: _173.MsgSetDeveloperAccountAmino) => _173.MsgSetDeveloperAccount;
                };
            };
            MsgSetHotRoutes: {
                typeUrl: string;
                encode(message: _173.MsgSetHotRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgSetHotRoutes;
                fromJSON(object: any): _173.MsgSetHotRoutes;
                toJSON(message: _173.MsgSetHotRoutes): unknown;
                fromPartial(object: Partial<_173.MsgSetHotRoutes>): _173.MsgSetHotRoutes;
                fromAmino(object: _173.MsgSetHotRoutesAmino): _173.MsgSetHotRoutes;
                toAmino(message: _173.MsgSetHotRoutes): _173.MsgSetHotRoutesAmino;
                fromAminoMsg(object: _173.MsgSetHotRoutesAminoMsg): _173.MsgSetHotRoutes;
                toAminoMsg(message: _173.MsgSetHotRoutes): _173.MsgSetHotRoutesAminoMsg;
                fromProtoMsg(message: _173.MsgSetHotRoutesProtoMsg): _173.MsgSetHotRoutes;
                toProto(message: _173.MsgSetHotRoutes): Uint8Array;
                toProtoMsg(message: _173.MsgSetHotRoutes): _173.MsgSetHotRoutesProtoMsg;
            };
            MsgSetHotRoutesResponse: {
                typeUrl: string;
                encode(_: _173.MsgSetHotRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgSetHotRoutesResponse;
                fromJSON(_: any): _173.MsgSetHotRoutesResponse;
                toJSON(_: _173.MsgSetHotRoutesResponse): unknown;
                fromPartial(_: Partial<_173.MsgSetHotRoutesResponse>): _173.MsgSetHotRoutesResponse;
                fromAmino(_: _173.MsgSetHotRoutesResponseAmino): _173.MsgSetHotRoutesResponse;
                toAmino(_: _173.MsgSetHotRoutesResponse): _173.MsgSetHotRoutesResponseAmino;
                fromAminoMsg(object: _173.MsgSetHotRoutesResponseAminoMsg): _173.MsgSetHotRoutesResponse;
                toAminoMsg(message: _173.MsgSetHotRoutesResponse): _173.MsgSetHotRoutesResponseAminoMsg;
                fromProtoMsg(message: _173.MsgSetHotRoutesResponseProtoMsg): _173.MsgSetHotRoutesResponse;
                toProto(message: _173.MsgSetHotRoutesResponse): Uint8Array;
                toProtoMsg(message: _173.MsgSetHotRoutesResponse): _173.MsgSetHotRoutesResponseProtoMsg;
            };
            MsgSetDeveloperAccount: {
                typeUrl: string;
                encode(message: _173.MsgSetDeveloperAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgSetDeveloperAccount;
                fromJSON(object: any): _173.MsgSetDeveloperAccount;
                toJSON(message: _173.MsgSetDeveloperAccount): unknown;
                fromPartial(object: Partial<_173.MsgSetDeveloperAccount>): _173.MsgSetDeveloperAccount;
                fromAmino(object: _173.MsgSetDeveloperAccountAmino): _173.MsgSetDeveloperAccount;
                toAmino(message: _173.MsgSetDeveloperAccount): _173.MsgSetDeveloperAccountAmino;
                fromAminoMsg(object: _173.MsgSetDeveloperAccountAminoMsg): _173.MsgSetDeveloperAccount;
                toAminoMsg(message: _173.MsgSetDeveloperAccount): _173.MsgSetDeveloperAccountAminoMsg;
                fromProtoMsg(message: _173.MsgSetDeveloperAccountProtoMsg): _173.MsgSetDeveloperAccount;
                toProto(message: _173.MsgSetDeveloperAccount): Uint8Array;
                toProtoMsg(message: _173.MsgSetDeveloperAccount): _173.MsgSetDeveloperAccountProtoMsg;
            };
            MsgSetDeveloperAccountResponse: {
                typeUrl: string;
                encode(_: _173.MsgSetDeveloperAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.MsgSetDeveloperAccountResponse;
                fromJSON(_: any): _173.MsgSetDeveloperAccountResponse;
                toJSON(_: _173.MsgSetDeveloperAccountResponse): unknown;
                fromPartial(_: Partial<_173.MsgSetDeveloperAccountResponse>): _173.MsgSetDeveloperAccountResponse;
                fromAmino(_: _173.MsgSetDeveloperAccountResponseAmino): _173.MsgSetDeveloperAccountResponse;
                toAmino(_: _173.MsgSetDeveloperAccountResponse): _173.MsgSetDeveloperAccountResponseAmino;
                fromAminoMsg(object: _173.MsgSetDeveloperAccountResponseAminoMsg): _173.MsgSetDeveloperAccountResponse;
                toAminoMsg(message: _173.MsgSetDeveloperAccountResponse): _173.MsgSetDeveloperAccountResponseAminoMsg;
                fromProtoMsg(message: _173.MsgSetDeveloperAccountResponseProtoMsg): _173.MsgSetDeveloperAccountResponse;
                toProto(message: _173.MsgSetDeveloperAccountResponse): Uint8Array;
                toProtoMsg(message: _173.MsgSetDeveloperAccountResponse): _173.MsgSetDeveloperAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _172.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryParamsRequest;
                fromJSON(_: any): _172.QueryParamsRequest;
                toJSON(_: _172.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_172.QueryParamsRequest>): _172.QueryParamsRequest;
                fromAmino(_: _172.QueryParamsRequestAmino): _172.QueryParamsRequest;
                toAmino(_: _172.QueryParamsRequest): _172.QueryParamsRequestAmino;
                fromAminoMsg(object: _172.QueryParamsRequestAminoMsg): _172.QueryParamsRequest;
                toAminoMsg(message: _172.QueryParamsRequest): _172.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _172.QueryParamsRequestProtoMsg): _172.QueryParamsRequest;
                toProto(message: _172.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryParamsRequest): _172.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _172.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryParamsResponse;
                fromJSON(object: any): _172.QueryParamsResponse;
                toJSON(message: _172.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_172.QueryParamsResponse>): _172.QueryParamsResponse;
                fromAmino(object: _172.QueryParamsResponseAmino): _172.QueryParamsResponse;
                toAmino(message: _172.QueryParamsResponse): _172.QueryParamsResponseAmino;
                fromAminoMsg(object: _172.QueryParamsResponseAminoMsg): _172.QueryParamsResponse;
                toAminoMsg(message: _172.QueryParamsResponse): _172.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _172.QueryParamsResponseProtoMsg): _172.QueryParamsResponse;
                toProto(message: _172.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryParamsResponse): _172.QueryParamsResponseProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesRequest: {
                typeUrl: string;
                encode(_: _172.QueryGetProtoRevNumberOfTradesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevNumberOfTradesRequest;
                fromJSON(_: any): _172.QueryGetProtoRevNumberOfTradesRequest;
                toJSON(_: _172.QueryGetProtoRevNumberOfTradesRequest): unknown;
                fromPartial(_: Partial<_172.QueryGetProtoRevNumberOfTradesRequest>): _172.QueryGetProtoRevNumberOfTradesRequest;
                fromAmino(_: _172.QueryGetProtoRevNumberOfTradesRequestAmino): _172.QueryGetProtoRevNumberOfTradesRequest;
                toAmino(_: _172.QueryGetProtoRevNumberOfTradesRequest): _172.QueryGetProtoRevNumberOfTradesRequestAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevNumberOfTradesRequestAminoMsg): _172.QueryGetProtoRevNumberOfTradesRequest;
                toAminoMsg(message: _172.QueryGetProtoRevNumberOfTradesRequest): _172.QueryGetProtoRevNumberOfTradesRequestAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevNumberOfTradesRequestProtoMsg): _172.QueryGetProtoRevNumberOfTradesRequest;
                toProto(message: _172.QueryGetProtoRevNumberOfTradesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevNumberOfTradesRequest): _172.QueryGetProtoRevNumberOfTradesRequestProtoMsg;
            };
            QueryGetProtoRevNumberOfTradesResponse: {
                typeUrl: string;
                encode(message: _172.QueryGetProtoRevNumberOfTradesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevNumberOfTradesResponse;
                fromJSON(object: any): _172.QueryGetProtoRevNumberOfTradesResponse;
                toJSON(message: _172.QueryGetProtoRevNumberOfTradesResponse): unknown;
                fromPartial(object: Partial<_172.QueryGetProtoRevNumberOfTradesResponse>): _172.QueryGetProtoRevNumberOfTradesResponse;
                fromAmino(object: _172.QueryGetProtoRevNumberOfTradesResponseAmino): _172.QueryGetProtoRevNumberOfTradesResponse;
                toAmino(message: _172.QueryGetProtoRevNumberOfTradesResponse): _172.QueryGetProtoRevNumberOfTradesResponseAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevNumberOfTradesResponseAminoMsg): _172.QueryGetProtoRevNumberOfTradesResponse;
                toAminoMsg(message: _172.QueryGetProtoRevNumberOfTradesResponse): _172.QueryGetProtoRevNumberOfTradesResponseAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevNumberOfTradesResponseProtoMsg): _172.QueryGetProtoRevNumberOfTradesResponse;
                toProto(message: _172.QueryGetProtoRevNumberOfTradesResponse): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevNumberOfTradesResponse): _172.QueryGetProtoRevNumberOfTradesResponseProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomRequest: {
                typeUrl: string;
                encode(message: _172.QueryGetProtoRevProfitsByDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevProfitsByDenomRequest;
                fromJSON(object: any): _172.QueryGetProtoRevProfitsByDenomRequest;
                toJSON(message: _172.QueryGetProtoRevProfitsByDenomRequest): unknown;
                fromPartial(object: Partial<_172.QueryGetProtoRevProfitsByDenomRequest>): _172.QueryGetProtoRevProfitsByDenomRequest;
                fromAmino(object: _172.QueryGetProtoRevProfitsByDenomRequestAmino): _172.QueryGetProtoRevProfitsByDenomRequest;
                toAmino(message: _172.QueryGetProtoRevProfitsByDenomRequest): _172.QueryGetProtoRevProfitsByDenomRequestAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevProfitsByDenomRequestAminoMsg): _172.QueryGetProtoRevProfitsByDenomRequest;
                toAminoMsg(message: _172.QueryGetProtoRevProfitsByDenomRequest): _172.QueryGetProtoRevProfitsByDenomRequestAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevProfitsByDenomRequestProtoMsg): _172.QueryGetProtoRevProfitsByDenomRequest;
                toProto(message: _172.QueryGetProtoRevProfitsByDenomRequest): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevProfitsByDenomRequest): _172.QueryGetProtoRevProfitsByDenomRequestProtoMsg;
            };
            QueryGetProtoRevProfitsByDenomResponse: {
                typeUrl: string;
                encode(message: _172.QueryGetProtoRevProfitsByDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevProfitsByDenomResponse;
                fromJSON(object: any): _172.QueryGetProtoRevProfitsByDenomResponse;
                toJSON(message: _172.QueryGetProtoRevProfitsByDenomResponse): unknown;
                fromPartial(object: Partial<_172.QueryGetProtoRevProfitsByDenomResponse>): _172.QueryGetProtoRevProfitsByDenomResponse;
                fromAmino(object: _172.QueryGetProtoRevProfitsByDenomResponseAmino): _172.QueryGetProtoRevProfitsByDenomResponse;
                toAmino(message: _172.QueryGetProtoRevProfitsByDenomResponse): _172.QueryGetProtoRevProfitsByDenomResponseAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevProfitsByDenomResponseAminoMsg): _172.QueryGetProtoRevProfitsByDenomResponse;
                toAminoMsg(message: _172.QueryGetProtoRevProfitsByDenomResponse): _172.QueryGetProtoRevProfitsByDenomResponseAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevProfitsByDenomResponseProtoMsg): _172.QueryGetProtoRevProfitsByDenomResponse;
                toProto(message: _172.QueryGetProtoRevProfitsByDenomResponse): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevProfitsByDenomResponse): _172.QueryGetProtoRevProfitsByDenomResponseProtoMsg;
            };
            QueryGetProtoRevAllProfitsRequest: {
                typeUrl: string;
                encode(_: _172.QueryGetProtoRevAllProfitsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevAllProfitsRequest;
                fromJSON(_: any): _172.QueryGetProtoRevAllProfitsRequest;
                toJSON(_: _172.QueryGetProtoRevAllProfitsRequest): unknown;
                fromPartial(_: Partial<_172.QueryGetProtoRevAllProfitsRequest>): _172.QueryGetProtoRevAllProfitsRequest;
                fromAmino(_: _172.QueryGetProtoRevAllProfitsRequestAmino): _172.QueryGetProtoRevAllProfitsRequest;
                toAmino(_: _172.QueryGetProtoRevAllProfitsRequest): _172.QueryGetProtoRevAllProfitsRequestAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevAllProfitsRequestAminoMsg): _172.QueryGetProtoRevAllProfitsRequest;
                toAminoMsg(message: _172.QueryGetProtoRevAllProfitsRequest): _172.QueryGetProtoRevAllProfitsRequestAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevAllProfitsRequestProtoMsg): _172.QueryGetProtoRevAllProfitsRequest;
                toProto(message: _172.QueryGetProtoRevAllProfitsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevAllProfitsRequest): _172.QueryGetProtoRevAllProfitsRequestProtoMsg;
            };
            QueryGetProtoRevAllProfitsResponse: {
                typeUrl: string;
                encode(message: _172.QueryGetProtoRevAllProfitsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevAllProfitsResponse;
                fromJSON(object: any): _172.QueryGetProtoRevAllProfitsResponse;
                toJSON(message: _172.QueryGetProtoRevAllProfitsResponse): unknown;
                fromPartial(object: Partial<_172.QueryGetProtoRevAllProfitsResponse>): _172.QueryGetProtoRevAllProfitsResponse;
                fromAmino(object: _172.QueryGetProtoRevAllProfitsResponseAmino): _172.QueryGetProtoRevAllProfitsResponse;
                toAmino(message: _172.QueryGetProtoRevAllProfitsResponse): _172.QueryGetProtoRevAllProfitsResponseAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevAllProfitsResponseAminoMsg): _172.QueryGetProtoRevAllProfitsResponse;
                toAminoMsg(message: _172.QueryGetProtoRevAllProfitsResponse): _172.QueryGetProtoRevAllProfitsResponseAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevAllProfitsResponseProtoMsg): _172.QueryGetProtoRevAllProfitsResponse;
                toProto(message: _172.QueryGetProtoRevAllProfitsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevAllProfitsResponse): _172.QueryGetProtoRevAllProfitsResponseProtoMsg;
            };
            QueryGetProtoRevStatisticsByPoolRequest: {
                typeUrl: string;
                encode(message: _172.QueryGetProtoRevStatisticsByPoolRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevStatisticsByPoolRequest;
                fromJSON(object: any): _172.QueryGetProtoRevStatisticsByPoolRequest;
                toJSON(message: _172.QueryGetProtoRevStatisticsByPoolRequest): unknown;
                fromPartial(object: Partial<_172.QueryGetProtoRevStatisticsByPoolRequest>): _172.QueryGetProtoRevStatisticsByPoolRequest;
                fromAmino(object: _172.QueryGetProtoRevStatisticsByPoolRequestAmino): _172.QueryGetProtoRevStatisticsByPoolRequest;
                toAmino(message: _172.QueryGetProtoRevStatisticsByPoolRequest): _172.QueryGetProtoRevStatisticsByPoolRequestAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevStatisticsByPoolRequestAminoMsg): _172.QueryGetProtoRevStatisticsByPoolRequest;
                toAminoMsg(message: _172.QueryGetProtoRevStatisticsByPoolRequest): _172.QueryGetProtoRevStatisticsByPoolRequestAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevStatisticsByPoolRequestProtoMsg): _172.QueryGetProtoRevStatisticsByPoolRequest;
                toProto(message: _172.QueryGetProtoRevStatisticsByPoolRequest): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevStatisticsByPoolRequest): _172.QueryGetProtoRevStatisticsByPoolRequestProtoMsg;
            };
            QueryGetProtoRevStatisticsByPoolResponse: {
                typeUrl: string;
                encode(message: _172.QueryGetProtoRevStatisticsByPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevStatisticsByPoolResponse;
                fromJSON(object: any): _172.QueryGetProtoRevStatisticsByPoolResponse;
                toJSON(message: _172.QueryGetProtoRevStatisticsByPoolResponse): unknown;
                fromPartial(object: Partial<_172.QueryGetProtoRevStatisticsByPoolResponse>): _172.QueryGetProtoRevStatisticsByPoolResponse;
                fromAmino(object: _172.QueryGetProtoRevStatisticsByPoolResponseAmino): _172.QueryGetProtoRevStatisticsByPoolResponse;
                toAmino(message: _172.QueryGetProtoRevStatisticsByPoolResponse): _172.QueryGetProtoRevStatisticsByPoolResponseAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevStatisticsByPoolResponseAminoMsg): _172.QueryGetProtoRevStatisticsByPoolResponse;
                toAminoMsg(message: _172.QueryGetProtoRevStatisticsByPoolResponse): _172.QueryGetProtoRevStatisticsByPoolResponseAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevStatisticsByPoolResponseProtoMsg): _172.QueryGetProtoRevStatisticsByPoolResponse;
                toProto(message: _172.QueryGetProtoRevStatisticsByPoolResponse): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevStatisticsByPoolResponse): _172.QueryGetProtoRevStatisticsByPoolResponseProtoMsg;
            };
            QueryGetProtoRevAllStatisticsRequest: {
                typeUrl: string;
                encode(_: _172.QueryGetProtoRevAllStatisticsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevAllStatisticsRequest;
                fromJSON(_: any): _172.QueryGetProtoRevAllStatisticsRequest;
                toJSON(_: _172.QueryGetProtoRevAllStatisticsRequest): unknown;
                fromPartial(_: Partial<_172.QueryGetProtoRevAllStatisticsRequest>): _172.QueryGetProtoRevAllStatisticsRequest;
                fromAmino(_: _172.QueryGetProtoRevAllStatisticsRequestAmino): _172.QueryGetProtoRevAllStatisticsRequest;
                toAmino(_: _172.QueryGetProtoRevAllStatisticsRequest): _172.QueryGetProtoRevAllStatisticsRequestAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevAllStatisticsRequestAminoMsg): _172.QueryGetProtoRevAllStatisticsRequest;
                toAminoMsg(message: _172.QueryGetProtoRevAllStatisticsRequest): _172.QueryGetProtoRevAllStatisticsRequestAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevAllStatisticsRequestProtoMsg): _172.QueryGetProtoRevAllStatisticsRequest;
                toProto(message: _172.QueryGetProtoRevAllStatisticsRequest): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevAllStatisticsRequest): _172.QueryGetProtoRevAllStatisticsRequestProtoMsg;
            };
            QueryGetProtoRevAllStatisticsResponse: {
                typeUrl: string;
                encode(message: _172.QueryGetProtoRevAllStatisticsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevAllStatisticsResponse;
                fromJSON(object: any): _172.QueryGetProtoRevAllStatisticsResponse;
                toJSON(message: _172.QueryGetProtoRevAllStatisticsResponse): unknown;
                fromPartial(object: Partial<_172.QueryGetProtoRevAllStatisticsResponse>): _172.QueryGetProtoRevAllStatisticsResponse;
                fromAmino(object: _172.QueryGetProtoRevAllStatisticsResponseAmino): _172.QueryGetProtoRevAllStatisticsResponse;
                toAmino(message: _172.QueryGetProtoRevAllStatisticsResponse): _172.QueryGetProtoRevAllStatisticsResponseAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevAllStatisticsResponseAminoMsg): _172.QueryGetProtoRevAllStatisticsResponse;
                toAminoMsg(message: _172.QueryGetProtoRevAllStatisticsResponse): _172.QueryGetProtoRevAllStatisticsResponseAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevAllStatisticsResponseProtoMsg): _172.QueryGetProtoRevAllStatisticsResponse;
                toProto(message: _172.QueryGetProtoRevAllStatisticsResponse): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevAllStatisticsResponse): _172.QueryGetProtoRevAllStatisticsResponseProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesRequest: {
                typeUrl: string;
                encode(_: _172.QueryGetProtoRevTokenPairArbRoutesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromJSON(_: any): _172.QueryGetProtoRevTokenPairArbRoutesRequest;
                toJSON(_: _172.QueryGetProtoRevTokenPairArbRoutesRequest): unknown;
                fromPartial(_: Partial<_172.QueryGetProtoRevTokenPairArbRoutesRequest>): _172.QueryGetProtoRevTokenPairArbRoutesRequest;
                fromAmino(_: _172.QueryGetProtoRevTokenPairArbRoutesRequestAmino): _172.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAmino(_: _172.QueryGetProtoRevTokenPairArbRoutesRequest): _172.QueryGetProtoRevTokenPairArbRoutesRequestAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg): _172.QueryGetProtoRevTokenPairArbRoutesRequest;
                toAminoMsg(message: _172.QueryGetProtoRevTokenPairArbRoutesRequest): _172.QueryGetProtoRevTokenPairArbRoutesRequestAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg): _172.QueryGetProtoRevTokenPairArbRoutesRequest;
                toProto(message: _172.QueryGetProtoRevTokenPairArbRoutesRequest): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevTokenPairArbRoutesRequest): _172.QueryGetProtoRevTokenPairArbRoutesRequestProtoMsg;
            };
            QueryGetProtoRevTokenPairArbRoutesResponse: {
                typeUrl: string;
                encode(message: _172.QueryGetProtoRevTokenPairArbRoutesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromJSON(object: any): _172.QueryGetProtoRevTokenPairArbRoutesResponse;
                toJSON(message: _172.QueryGetProtoRevTokenPairArbRoutesResponse): unknown;
                fromPartial(object: Partial<_172.QueryGetProtoRevTokenPairArbRoutesResponse>): _172.QueryGetProtoRevTokenPairArbRoutesResponse;
                fromAmino(object: _172.QueryGetProtoRevTokenPairArbRoutesResponseAmino): _172.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAmino(message: _172.QueryGetProtoRevTokenPairArbRoutesResponse): _172.QueryGetProtoRevTokenPairArbRoutesResponseAmino;
                fromAminoMsg(object: _172.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg): _172.QueryGetProtoRevTokenPairArbRoutesResponse;
                toAminoMsg(message: _172.QueryGetProtoRevTokenPairArbRoutesResponse): _172.QueryGetProtoRevTokenPairArbRoutesResponseAminoMsg;
                fromProtoMsg(message: _172.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg): _172.QueryGetProtoRevTokenPairArbRoutesResponse;
                toProto(message: _172.QueryGetProtoRevTokenPairArbRoutesResponse): Uint8Array;
                toProtoMsg(message: _172.QueryGetProtoRevTokenPairArbRoutesResponse): _172.QueryGetProtoRevTokenPairArbRoutesResponseProtoMsg;
            };
            TokenPairArbRoutes: {
                typeUrl: string;
                encode(message: _171.TokenPairArbRoutes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.TokenPairArbRoutes;
                fromJSON(object: any): _171.TokenPairArbRoutes;
                toJSON(message: _171.TokenPairArbRoutes): unknown;
                fromPartial(object: Partial<_171.TokenPairArbRoutes>): _171.TokenPairArbRoutes;
                fromAmino(object: _171.TokenPairArbRoutesAmino): _171.TokenPairArbRoutes;
                toAmino(message: _171.TokenPairArbRoutes): _171.TokenPairArbRoutesAmino;
                fromAminoMsg(object: _171.TokenPairArbRoutesAminoMsg): _171.TokenPairArbRoutes;
                toAminoMsg(message: _171.TokenPairArbRoutes): _171.TokenPairArbRoutesAminoMsg;
                fromProtoMsg(message: _171.TokenPairArbRoutesProtoMsg): _171.TokenPairArbRoutes;
                toProto(message: _171.TokenPairArbRoutes): Uint8Array;
                toProtoMsg(message: _171.TokenPairArbRoutes): _171.TokenPairArbRoutesProtoMsg;
            };
            Route: {
                typeUrl: string;
                encode(message: _171.Route, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.Route;
                fromJSON(object: any): _171.Route;
                toJSON(message: _171.Route): unknown;
                fromPartial(object: Partial<_171.Route>): _171.Route;
                fromAmino(object: _171.RouteAmino): _171.Route;
                toAmino(message: _171.Route): _171.RouteAmino;
                fromAminoMsg(object: _171.RouteAminoMsg): _171.Route;
                toAminoMsg(message: _171.Route): _171.RouteAminoMsg;
                fromProtoMsg(message: _171.RouteProtoMsg): _171.Route;
                toProto(message: _171.Route): Uint8Array;
                toProtoMsg(message: _171.Route): _171.RouteProtoMsg;
            };
            Trade: {
                typeUrl: string;
                encode(message: _171.Trade, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.Trade;
                fromJSON(object: any): _171.Trade;
                toJSON(message: _171.Trade): unknown;
                fromPartial(object: Partial<_171.Trade>): _171.Trade;
                fromAmino(object: _171.TradeAmino): _171.Trade;
                toAmino(message: _171.Trade): _171.TradeAmino;
                fromAminoMsg(object: _171.TradeAminoMsg): _171.Trade;
                toAminoMsg(message: _171.Trade): _171.TradeAminoMsg;
                fromProtoMsg(message: _171.TradeProtoMsg): _171.Trade;
                toProto(message: _171.Trade): Uint8Array;
                toProtoMsg(message: _171.Trade): _171.TradeProtoMsg;
            };
            PoolStatistics: {
                typeUrl: string;
                encode(message: _171.PoolStatistics, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.PoolStatistics;
                fromJSON(object: any): _171.PoolStatistics;
                toJSON(message: _171.PoolStatistics): unknown;
                fromPartial(object: Partial<_171.PoolStatistics>): _171.PoolStatistics;
                fromAmino(object: _171.PoolStatisticsAmino): _171.PoolStatistics;
                toAmino(message: _171.PoolStatistics): _171.PoolStatisticsAmino;
                fromAminoMsg(object: _171.PoolStatisticsAminoMsg): _171.PoolStatistics;
                toAminoMsg(message: _171.PoolStatistics): _171.PoolStatisticsAminoMsg;
                fromProtoMsg(message: _171.PoolStatisticsProtoMsg): _171.PoolStatistics;
                toProto(message: _171.PoolStatistics): Uint8Array;
                toProtoMsg(message: _171.PoolStatistics): _171.PoolStatisticsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _170.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.Params;
                fromJSON(object: any): _170.Params;
                toJSON(message: _170.Params): unknown;
                fromPartial(object: Partial<_170.Params>): _170.Params;
                fromAmino(object: _170.ParamsAmino): _170.Params;
                toAmino(message: _170.Params): _170.ParamsAmino;
                fromAminoMsg(object: _170.ParamsAminoMsg): _170.Params;
                toAminoMsg(message: _170.Params): _170.ParamsAminoMsg;
                fromProtoMsg(message: _170.ParamsProtoMsg): _170.Params;
                toProto(message: _170.Params): Uint8Array;
                toProtoMsg(message: _170.Params): _170.ParamsProtoMsg;
            };
            SetProtoRevEnabledProposal: {
                typeUrl: string;
                encode(message: _169.SetProtoRevEnabledProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.SetProtoRevEnabledProposal;
                fromJSON(object: any): _169.SetProtoRevEnabledProposal;
                toJSON(message: _169.SetProtoRevEnabledProposal): unknown;
                fromPartial(object: Partial<_169.SetProtoRevEnabledProposal>): _169.SetProtoRevEnabledProposal;
                fromAmino(object: _169.SetProtoRevEnabledProposalAmino): _169.SetProtoRevEnabledProposal;
                toAmino(message: _169.SetProtoRevEnabledProposal): _169.SetProtoRevEnabledProposalAmino;
                fromAminoMsg(object: _169.SetProtoRevEnabledProposalAminoMsg): _169.SetProtoRevEnabledProposal;
                toAminoMsg(message: _169.SetProtoRevEnabledProposal): _169.SetProtoRevEnabledProposalAminoMsg;
                fromProtoMsg(message: _169.SetProtoRevEnabledProposalProtoMsg): _169.SetProtoRevEnabledProposal;
                toProto(message: _169.SetProtoRevEnabledProposal): Uint8Array;
                toProtoMsg(message: _169.SetProtoRevEnabledProposal): _169.SetProtoRevEnabledProposalProtoMsg;
            };
            SetProtoRevAdminAccountProposal: {
                typeUrl: string;
                encode(message: _169.SetProtoRevAdminAccountProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.SetProtoRevAdminAccountProposal;
                fromJSON(object: any): _169.SetProtoRevAdminAccountProposal;
                toJSON(message: _169.SetProtoRevAdminAccountProposal): unknown;
                fromPartial(object: Partial<_169.SetProtoRevAdminAccountProposal>): _169.SetProtoRevAdminAccountProposal;
                fromAmino(object: _169.SetProtoRevAdminAccountProposalAmino): _169.SetProtoRevAdminAccountProposal;
                toAmino(message: _169.SetProtoRevAdminAccountProposal): _169.SetProtoRevAdminAccountProposalAmino;
                fromAminoMsg(object: _169.SetProtoRevAdminAccountProposalAminoMsg): _169.SetProtoRevAdminAccountProposal;
                toAminoMsg(message: _169.SetProtoRevAdminAccountProposal): _169.SetProtoRevAdminAccountProposalAminoMsg;
                fromProtoMsg(message: _169.SetProtoRevAdminAccountProposalProtoMsg): _169.SetProtoRevAdminAccountProposal;
                toProto(message: _169.SetProtoRevAdminAccountProposal): Uint8Array;
                toProtoMsg(message: _169.SetProtoRevAdminAccountProposal): _169.SetProtoRevAdminAccountProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _168.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.GenesisState;
                fromJSON(object: any): _168.GenesisState;
                toJSON(message: _168.GenesisState): unknown;
                fromPartial(object: Partial<_168.GenesisState>): _168.GenesisState;
                fromAmino(object: _168.GenesisStateAmino): _168.GenesisState;
                toAmino(message: _168.GenesisState): _168.GenesisStateAmino;
                fromAminoMsg(object: _168.GenesisStateAminoMsg): _168.GenesisState;
                toAminoMsg(message: _168.GenesisState): _168.GenesisStateAminoMsg;
                fromProtoMsg(message: _168.GenesisStateProtoMsg): _168.GenesisState;
                toProto(message: _168.GenesisState): Uint8Array;
                toProtoMsg(message: _168.GenesisState): _168.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                encode(message: _174.Node, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Node;
                fromJSON(object: any): _174.Node;
                toJSON(message: _174.Node): unknown;
                fromPartial(object: Partial<_174.Node>): _174.Node;
                fromAmino(object: _174.NodeAmino): _174.Node;
                toAmino(message: _174.Node): _174.NodeAmino;
                fromAminoMsg(object: _174.NodeAminoMsg): _174.Node;
                toAminoMsg(message: _174.Node): _174.NodeAminoMsg;
                fromProtoMsg(message: _174.NodeProtoMsg): _174.Node;
                toProto(message: _174.Node): Uint8Array;
                toProtoMsg(message: _174.Node): _174.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                encode(message: _174.Child, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Child;
                fromJSON(object: any): _174.Child;
                toJSON(message: _174.Child): unknown;
                fromPartial(object: Partial<_174.Child>): _174.Child;
                fromAmino(object: _174.ChildAmino): _174.Child;
                toAmino(message: _174.Child): _174.ChildAmino;
                fromAminoMsg(object: _174.ChildAminoMsg): _174.Child;
                toAminoMsg(message: _174.Child): _174.ChildAminoMsg;
                fromProtoMsg(message: _174.ChildProtoMsg): _174.Child;
                toProto(message: _174.Child): Uint8Array;
                toProtoMsg(message: _174.Child): _174.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                encode(message: _174.Leaf, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.Leaf;
                fromJSON(object: any): _174.Leaf;
                toJSON(message: _174.Leaf): unknown;
                fromPartial(object: Partial<_174.Leaf>): _174.Leaf;
                fromAmino(object: _174.LeafAmino): _174.Leaf;
                toAmino(message: _174.Leaf): _174.LeafAmino;
                fromAminoMsg(object: _174.LeafAminoMsg): _174.Leaf;
                toAminoMsg(message: _174.Leaf): _174.LeafAminoMsg;
                fromProtoMsg(message: _174.LeafProtoMsg): _174.Leaf;
                toProto(message: _174.Leaf): Uint8Array;
                toProtoMsg(message: _174.Leaf): _174.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _421.MsgClientImpl;
        QueryClientImpl: typeof _409.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
            assetType(request: _177.AssetTypeRequest): Promise<_177.AssetTypeResponse>;
            allAssets(request?: _177.AllAssetsRequest): Promise<_177.AllAssetsResponse>;
            assetMultiplier(request: _177.AssetMultiplierRequest): Promise<_177.AssetMultiplierResponse>;
            allIntermediaryAccounts(request?: _177.AllIntermediaryAccountsRequest): Promise<_177.AllIntermediaryAccountsResponse>;
            connectedIntermediaryAccount(request: _177.ConnectedIntermediaryAccountRequest): Promise<_177.ConnectedIntermediaryAccountResponse>;
            totalDelegationByValidatorForDenom(request: _177.QueryTotalDelegationByValidatorForDenomRequest): Promise<_177.QueryTotalDelegationByValidatorForDenomResponse>;
            totalSuperfluidDelegations(request?: _177.TotalSuperfluidDelegationsRequest): Promise<_177.TotalSuperfluidDelegationsResponse>;
            superfluidDelegationAmount(request: _177.SuperfluidDelegationAmountRequest): Promise<_177.SuperfluidDelegationAmountResponse>;
            superfluidDelegationsByDelegator(request: _177.SuperfluidDelegationsByDelegatorRequest): Promise<_177.SuperfluidDelegationsByDelegatorResponse>;
            superfluidUndelegationsByDelegator(request: _177.SuperfluidUndelegationsByDelegatorRequest): Promise<_177.SuperfluidUndelegationsByDelegatorResponse>;
            superfluidDelegationsByValidatorDenom(request: _177.SuperfluidDelegationsByValidatorDenomRequest): Promise<_177.SuperfluidDelegationsByValidatorDenomResponse>;
            estimateSuperfluidDelegatedAmountByValidatorDenom(request: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
            totalDelegationByDelegator(request: _177.QueryTotalDelegationByDelegatorRequest): Promise<_177.QueryTotalDelegationByDelegatorResponse>;
            unpoolWhitelist(request?: _177.QueryUnpoolWhitelistRequest): Promise<_177.QueryUnpoolWhitelistResponse>;
        };
        LCDQueryClient: typeof _393.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _179.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _179.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _179.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _179.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _179.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _179.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _179.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _179.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _179.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _179.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _179.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _179.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _179.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _179.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _179.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _179.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _179.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _179.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _179.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _179.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _179.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _179.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _179.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _179.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _179.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _179.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _179.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _179.MsgSuperfluidDelegate) => _179.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _179.MsgSuperfluidDelegateAmino) => _179.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _179.MsgSuperfluidUndelegate) => _179.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _179.MsgSuperfluidUndelegateAmino) => _179.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _179.MsgSuperfluidUnbondLock) => _179.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _179.MsgSuperfluidUnbondLockAmino) => _179.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _179.MsgLockAndSuperfluidDelegate) => _179.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _179.MsgLockAndSuperfluidDelegateAmino) => _179.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _179.MsgUnPoolWhitelistedPool) => _179.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _179.MsgUnPoolWhitelistedPoolAmino) => _179.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _179.MsgSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgSuperfluidDelegate;
            fromJSON(object: any): _179.MsgSuperfluidDelegate;
            toJSON(message: _179.MsgSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_179.MsgSuperfluidDelegate>): _179.MsgSuperfluidDelegate;
            fromAmino(object: _179.MsgSuperfluidDelegateAmino): _179.MsgSuperfluidDelegate;
            toAmino(message: _179.MsgSuperfluidDelegate): _179.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _179.MsgSuperfluidDelegateAminoMsg): _179.MsgSuperfluidDelegate;
            toAminoMsg(message: _179.MsgSuperfluidDelegate): _179.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _179.MsgSuperfluidDelegateProtoMsg): _179.MsgSuperfluidDelegate;
            toProto(message: _179.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _179.MsgSuperfluidDelegate): _179.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(_: _179.MsgSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _179.MsgSuperfluidDelegateResponse;
            toJSON(_: _179.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: Partial<_179.MsgSuperfluidDelegateResponse>): _179.MsgSuperfluidDelegateResponse;
            fromAmino(_: _179.MsgSuperfluidDelegateResponseAmino): _179.MsgSuperfluidDelegateResponse;
            toAmino(_: _179.MsgSuperfluidDelegateResponse): _179.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _179.MsgSuperfluidDelegateResponseAminoMsg): _179.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _179.MsgSuperfluidDelegateResponse): _179.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _179.MsgSuperfluidDelegateResponseProtoMsg): _179.MsgSuperfluidDelegateResponse;
            toProto(message: _179.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _179.MsgSuperfluidDelegateResponse): _179.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            encode(message: _179.MsgSuperfluidUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgSuperfluidUndelegate;
            fromJSON(object: any): _179.MsgSuperfluidUndelegate;
            toJSON(message: _179.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: Partial<_179.MsgSuperfluidUndelegate>): _179.MsgSuperfluidUndelegate;
            fromAmino(object: _179.MsgSuperfluidUndelegateAmino): _179.MsgSuperfluidUndelegate;
            toAmino(message: _179.MsgSuperfluidUndelegate): _179.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _179.MsgSuperfluidUndelegateAminoMsg): _179.MsgSuperfluidUndelegate;
            toAminoMsg(message: _179.MsgSuperfluidUndelegate): _179.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _179.MsgSuperfluidUndelegateProtoMsg): _179.MsgSuperfluidUndelegate;
            toProto(message: _179.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _179.MsgSuperfluidUndelegate): _179.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            encode(_: _179.MsgSuperfluidUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _179.MsgSuperfluidUndelegateResponse;
            toJSON(_: _179.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: Partial<_179.MsgSuperfluidUndelegateResponse>): _179.MsgSuperfluidUndelegateResponse;
            fromAmino(_: _179.MsgSuperfluidUndelegateResponseAmino): _179.MsgSuperfluidUndelegateResponse;
            toAmino(_: _179.MsgSuperfluidUndelegateResponse): _179.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _179.MsgSuperfluidUndelegateResponseAminoMsg): _179.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _179.MsgSuperfluidUndelegateResponse): _179.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _179.MsgSuperfluidUndelegateResponseProtoMsg): _179.MsgSuperfluidUndelegateResponse;
            toProto(message: _179.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _179.MsgSuperfluidUndelegateResponse): _179.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            encode(message: _179.MsgSuperfluidUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _179.MsgSuperfluidUnbondLock;
            toJSON(message: _179.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: Partial<_179.MsgSuperfluidUnbondLock>): _179.MsgSuperfluidUnbondLock;
            fromAmino(object: _179.MsgSuperfluidUnbondLockAmino): _179.MsgSuperfluidUnbondLock;
            toAmino(message: _179.MsgSuperfluidUnbondLock): _179.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _179.MsgSuperfluidUnbondLockAminoMsg): _179.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _179.MsgSuperfluidUnbondLock): _179.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _179.MsgSuperfluidUnbondLockProtoMsg): _179.MsgSuperfluidUnbondLock;
            toProto(message: _179.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _179.MsgSuperfluidUnbondLock): _179.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            encode(_: _179.MsgSuperfluidUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _179.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _179.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: Partial<_179.MsgSuperfluidUnbondLockResponse>): _179.MsgSuperfluidUnbondLockResponse;
            fromAmino(_: _179.MsgSuperfluidUnbondLockResponseAmino): _179.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _179.MsgSuperfluidUnbondLockResponse): _179.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _179.MsgSuperfluidUnbondLockResponseAminoMsg): _179.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _179.MsgSuperfluidUnbondLockResponse): _179.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _179.MsgSuperfluidUnbondLockResponseProtoMsg): _179.MsgSuperfluidUnbondLockResponse;
            toProto(message: _179.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _179.MsgSuperfluidUnbondLockResponse): _179.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            encode(message: _179.MsgLockAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _179.MsgLockAndSuperfluidDelegate;
            toJSON(message: _179.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: Partial<_179.MsgLockAndSuperfluidDelegate>): _179.MsgLockAndSuperfluidDelegate;
            fromAmino(object: _179.MsgLockAndSuperfluidDelegateAmino): _179.MsgLockAndSuperfluidDelegate;
            toAmino(message: _179.MsgLockAndSuperfluidDelegate): _179.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _179.MsgLockAndSuperfluidDelegateAminoMsg): _179.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _179.MsgLockAndSuperfluidDelegate): _179.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _179.MsgLockAndSuperfluidDelegateProtoMsg): _179.MsgLockAndSuperfluidDelegate;
            toProto(message: _179.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _179.MsgLockAndSuperfluidDelegate): _179.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            encode(message: _179.MsgLockAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _179.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _179.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: Partial<_179.MsgLockAndSuperfluidDelegateResponse>): _179.MsgLockAndSuperfluidDelegateResponse;
            fromAmino(object: _179.MsgLockAndSuperfluidDelegateResponseAmino): _179.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _179.MsgLockAndSuperfluidDelegateResponse): _179.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _179.MsgLockAndSuperfluidDelegateResponseAminoMsg): _179.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _179.MsgLockAndSuperfluidDelegateResponse): _179.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _179.MsgLockAndSuperfluidDelegateResponseProtoMsg): _179.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _179.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _179.MsgLockAndSuperfluidDelegateResponse): _179.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            encode(message: _179.MsgUnPoolWhitelistedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _179.MsgUnPoolWhitelistedPool;
            toJSON(message: _179.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: Partial<_179.MsgUnPoolWhitelistedPool>): _179.MsgUnPoolWhitelistedPool;
            fromAmino(object: _179.MsgUnPoolWhitelistedPoolAmino): _179.MsgUnPoolWhitelistedPool;
            toAmino(message: _179.MsgUnPoolWhitelistedPool): _179.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _179.MsgUnPoolWhitelistedPoolAminoMsg): _179.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _179.MsgUnPoolWhitelistedPool): _179.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _179.MsgUnPoolWhitelistedPoolProtoMsg): _179.MsgUnPoolWhitelistedPool;
            toProto(message: _179.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _179.MsgUnPoolWhitelistedPool): _179.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            encode(message: _179.MsgUnPoolWhitelistedPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _179.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _179.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _179.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: Partial<_179.MsgUnPoolWhitelistedPoolResponse>): _179.MsgUnPoolWhitelistedPoolResponse;
            fromAmino(object: _179.MsgUnPoolWhitelistedPoolResponseAmino): _179.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _179.MsgUnPoolWhitelistedPoolResponse): _179.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _179.MsgUnPoolWhitelistedPoolResponseAminoMsg): _179.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _179.MsgUnPoolWhitelistedPoolResponse): _179.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _179.MsgUnPoolWhitelistedPoolResponseProtoMsg): _179.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _179.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _179.MsgUnPoolWhitelistedPoolResponse): _179.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _178.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _178.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _178.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _178.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _178.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            encode(message: _178.SuperfluidAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.SuperfluidAsset;
            fromJSON(object: any): _178.SuperfluidAsset;
            toJSON(message: _178.SuperfluidAsset): unknown;
            fromPartial(object: Partial<_178.SuperfluidAsset>): _178.SuperfluidAsset;
            fromAmino(object: _178.SuperfluidAssetAmino): _178.SuperfluidAsset;
            toAmino(message: _178.SuperfluidAsset): _178.SuperfluidAssetAmino;
            fromAminoMsg(object: _178.SuperfluidAssetAminoMsg): _178.SuperfluidAsset;
            toAminoMsg(message: _178.SuperfluidAsset): _178.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _178.SuperfluidAssetProtoMsg): _178.SuperfluidAsset;
            toProto(message: _178.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _178.SuperfluidAsset): _178.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            encode(message: _178.SuperfluidIntermediaryAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _178.SuperfluidIntermediaryAccount;
            toJSON(message: _178.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: Partial<_178.SuperfluidIntermediaryAccount>): _178.SuperfluidIntermediaryAccount;
            fromAmino(object: _178.SuperfluidIntermediaryAccountAmino): _178.SuperfluidIntermediaryAccount;
            toAmino(message: _178.SuperfluidIntermediaryAccount): _178.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _178.SuperfluidIntermediaryAccountAminoMsg): _178.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _178.SuperfluidIntermediaryAccount): _178.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _178.SuperfluidIntermediaryAccountProtoMsg): _178.SuperfluidIntermediaryAccount;
            toProto(message: _178.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _178.SuperfluidIntermediaryAccount): _178.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            encode(message: _178.OsmoEquivalentMultiplierRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _178.OsmoEquivalentMultiplierRecord;
            toJSON(message: _178.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: Partial<_178.OsmoEquivalentMultiplierRecord>): _178.OsmoEquivalentMultiplierRecord;
            fromAmino(object: _178.OsmoEquivalentMultiplierRecordAmino): _178.OsmoEquivalentMultiplierRecord;
            toAmino(message: _178.OsmoEquivalentMultiplierRecord): _178.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _178.OsmoEquivalentMultiplierRecordAminoMsg): _178.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _178.OsmoEquivalentMultiplierRecord): _178.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _178.OsmoEquivalentMultiplierRecordProtoMsg): _178.OsmoEquivalentMultiplierRecord;
            toProto(message: _178.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _178.OsmoEquivalentMultiplierRecord): _178.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            encode(message: _178.SuperfluidDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.SuperfluidDelegationRecord;
            fromJSON(object: any): _178.SuperfluidDelegationRecord;
            toJSON(message: _178.SuperfluidDelegationRecord): unknown;
            fromPartial(object: Partial<_178.SuperfluidDelegationRecord>): _178.SuperfluidDelegationRecord;
            fromAmino(object: _178.SuperfluidDelegationRecordAmino): _178.SuperfluidDelegationRecord;
            toAmino(message: _178.SuperfluidDelegationRecord): _178.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _178.SuperfluidDelegationRecordAminoMsg): _178.SuperfluidDelegationRecord;
            toAminoMsg(message: _178.SuperfluidDelegationRecord): _178.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _178.SuperfluidDelegationRecordProtoMsg): _178.SuperfluidDelegationRecord;
            toProto(message: _178.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _178.SuperfluidDelegationRecord): _178.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            encode(message: _178.LockIdIntermediaryAccountConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _178.LockIdIntermediaryAccountConnection;
            toJSON(message: _178.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: Partial<_178.LockIdIntermediaryAccountConnection>): _178.LockIdIntermediaryAccountConnection;
            fromAmino(object: _178.LockIdIntermediaryAccountConnectionAmino): _178.LockIdIntermediaryAccountConnection;
            toAmino(message: _178.LockIdIntermediaryAccountConnection): _178.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _178.LockIdIntermediaryAccountConnectionAminoMsg): _178.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _178.LockIdIntermediaryAccountConnection): _178.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _178.LockIdIntermediaryAccountConnectionProtoMsg): _178.LockIdIntermediaryAccountConnection;
            toProto(message: _178.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _178.LockIdIntermediaryAccountConnection): _178.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            encode(message: _178.UnpoolWhitelistedPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.UnpoolWhitelistedPools;
            fromJSON(object: any): _178.UnpoolWhitelistedPools;
            toJSON(message: _178.UnpoolWhitelistedPools): unknown;
            fromPartial(object: Partial<_178.UnpoolWhitelistedPools>): _178.UnpoolWhitelistedPools;
            fromAmino(object: _178.UnpoolWhitelistedPoolsAmino): _178.UnpoolWhitelistedPools;
            toAmino(message: _178.UnpoolWhitelistedPools): _178.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _178.UnpoolWhitelistedPoolsAminoMsg): _178.UnpoolWhitelistedPools;
            toAminoMsg(message: _178.UnpoolWhitelistedPools): _178.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _178.UnpoolWhitelistedPoolsProtoMsg): _178.UnpoolWhitelistedPools;
            toProto(message: _178.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _178.UnpoolWhitelistedPools): _178.UnpoolWhitelistedPoolsProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _177.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryParamsRequest;
            fromJSON(_: any): _177.QueryParamsRequest;
            toJSON(_: _177.QueryParamsRequest): unknown;
            fromPartial(_: Partial<_177.QueryParamsRequest>): _177.QueryParamsRequest;
            fromAmino(_: _177.QueryParamsRequestAmino): _177.QueryParamsRequest;
            toAmino(_: _177.QueryParamsRequest): _177.QueryParamsRequestAmino;
            fromAminoMsg(object: _177.QueryParamsRequestAminoMsg): _177.QueryParamsRequest;
            toAminoMsg(message: _177.QueryParamsRequest): _177.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _177.QueryParamsRequestProtoMsg): _177.QueryParamsRequest;
            toProto(message: _177.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _177.QueryParamsRequest): _177.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _177.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryParamsResponse;
            fromJSON(object: any): _177.QueryParamsResponse;
            toJSON(message: _177.QueryParamsResponse): unknown;
            fromPartial(object: Partial<_177.QueryParamsResponse>): _177.QueryParamsResponse;
            fromAmino(object: _177.QueryParamsResponseAmino): _177.QueryParamsResponse;
            toAmino(message: _177.QueryParamsResponse): _177.QueryParamsResponseAmino;
            fromAminoMsg(object: _177.QueryParamsResponseAminoMsg): _177.QueryParamsResponse;
            toAminoMsg(message: _177.QueryParamsResponse): _177.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _177.QueryParamsResponseProtoMsg): _177.QueryParamsResponse;
            toProto(message: _177.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _177.QueryParamsResponse): _177.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            encode(message: _177.AssetTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.AssetTypeRequest;
            fromJSON(object: any): _177.AssetTypeRequest;
            toJSON(message: _177.AssetTypeRequest): unknown;
            fromPartial(object: Partial<_177.AssetTypeRequest>): _177.AssetTypeRequest;
            fromAmino(object: _177.AssetTypeRequestAmino): _177.AssetTypeRequest;
            toAmino(message: _177.AssetTypeRequest): _177.AssetTypeRequestAmino;
            fromAminoMsg(object: _177.AssetTypeRequestAminoMsg): _177.AssetTypeRequest;
            toAminoMsg(message: _177.AssetTypeRequest): _177.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _177.AssetTypeRequestProtoMsg): _177.AssetTypeRequest;
            toProto(message: _177.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _177.AssetTypeRequest): _177.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            encode(message: _177.AssetTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.AssetTypeResponse;
            fromJSON(object: any): _177.AssetTypeResponse;
            toJSON(message: _177.AssetTypeResponse): unknown;
            fromPartial(object: Partial<_177.AssetTypeResponse>): _177.AssetTypeResponse;
            fromAmino(object: _177.AssetTypeResponseAmino): _177.AssetTypeResponse;
            toAmino(message: _177.AssetTypeResponse): _177.AssetTypeResponseAmino;
            fromAminoMsg(object: _177.AssetTypeResponseAminoMsg): _177.AssetTypeResponse;
            toAminoMsg(message: _177.AssetTypeResponse): _177.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _177.AssetTypeResponseProtoMsg): _177.AssetTypeResponse;
            toProto(message: _177.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _177.AssetTypeResponse): _177.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            encode(_: _177.AllAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.AllAssetsRequest;
            fromJSON(_: any): _177.AllAssetsRequest;
            toJSON(_: _177.AllAssetsRequest): unknown;
            fromPartial(_: Partial<_177.AllAssetsRequest>): _177.AllAssetsRequest;
            fromAmino(_: _177.AllAssetsRequestAmino): _177.AllAssetsRequest;
            toAmino(_: _177.AllAssetsRequest): _177.AllAssetsRequestAmino;
            fromAminoMsg(object: _177.AllAssetsRequestAminoMsg): _177.AllAssetsRequest;
            toAminoMsg(message: _177.AllAssetsRequest): _177.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _177.AllAssetsRequestProtoMsg): _177.AllAssetsRequest;
            toProto(message: _177.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _177.AllAssetsRequest): _177.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            encode(message: _177.AllAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.AllAssetsResponse;
            fromJSON(object: any): _177.AllAssetsResponse;
            toJSON(message: _177.AllAssetsResponse): unknown;
            fromPartial(object: Partial<_177.AllAssetsResponse>): _177.AllAssetsResponse;
            fromAmino(object: _177.AllAssetsResponseAmino): _177.AllAssetsResponse;
            toAmino(message: _177.AllAssetsResponse): _177.AllAssetsResponseAmino;
            fromAminoMsg(object: _177.AllAssetsResponseAminoMsg): _177.AllAssetsResponse;
            toAminoMsg(message: _177.AllAssetsResponse): _177.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _177.AllAssetsResponseProtoMsg): _177.AllAssetsResponse;
            toProto(message: _177.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _177.AllAssetsResponse): _177.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            encode(message: _177.AssetMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.AssetMultiplierRequest;
            fromJSON(object: any): _177.AssetMultiplierRequest;
            toJSON(message: _177.AssetMultiplierRequest): unknown;
            fromPartial(object: Partial<_177.AssetMultiplierRequest>): _177.AssetMultiplierRequest;
            fromAmino(object: _177.AssetMultiplierRequestAmino): _177.AssetMultiplierRequest;
            toAmino(message: _177.AssetMultiplierRequest): _177.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _177.AssetMultiplierRequestAminoMsg): _177.AssetMultiplierRequest;
            toAminoMsg(message: _177.AssetMultiplierRequest): _177.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _177.AssetMultiplierRequestProtoMsg): _177.AssetMultiplierRequest;
            toProto(message: _177.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _177.AssetMultiplierRequest): _177.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            encode(message: _177.AssetMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.AssetMultiplierResponse;
            fromJSON(object: any): _177.AssetMultiplierResponse;
            toJSON(message: _177.AssetMultiplierResponse): unknown;
            fromPartial(object: Partial<_177.AssetMultiplierResponse>): _177.AssetMultiplierResponse;
            fromAmino(object: _177.AssetMultiplierResponseAmino): _177.AssetMultiplierResponse;
            toAmino(message: _177.AssetMultiplierResponse): _177.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _177.AssetMultiplierResponseAminoMsg): _177.AssetMultiplierResponse;
            toAminoMsg(message: _177.AssetMultiplierResponse): _177.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _177.AssetMultiplierResponseProtoMsg): _177.AssetMultiplierResponse;
            toProto(message: _177.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _177.AssetMultiplierResponse): _177.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            encode(message: _177.SuperfluidIntermediaryAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _177.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _177.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: Partial<_177.SuperfluidIntermediaryAccountInfo>): _177.SuperfluidIntermediaryAccountInfo;
            fromAmino(object: _177.SuperfluidIntermediaryAccountInfoAmino): _177.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _177.SuperfluidIntermediaryAccountInfo): _177.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _177.SuperfluidIntermediaryAccountInfoAminoMsg): _177.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _177.SuperfluidIntermediaryAccountInfo): _177.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _177.SuperfluidIntermediaryAccountInfoProtoMsg): _177.SuperfluidIntermediaryAccountInfo;
            toProto(message: _177.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _177.SuperfluidIntermediaryAccountInfo): _177.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            encode(message: _177.AllIntermediaryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _177.AllIntermediaryAccountsRequest;
            toJSON(message: _177.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: Partial<_177.AllIntermediaryAccountsRequest>): _177.AllIntermediaryAccountsRequest;
            fromAmino(object: _177.AllIntermediaryAccountsRequestAmino): _177.AllIntermediaryAccountsRequest;
            toAmino(message: _177.AllIntermediaryAccountsRequest): _177.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _177.AllIntermediaryAccountsRequestAminoMsg): _177.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _177.AllIntermediaryAccountsRequest): _177.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _177.AllIntermediaryAccountsRequestProtoMsg): _177.AllIntermediaryAccountsRequest;
            toProto(message: _177.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _177.AllIntermediaryAccountsRequest): _177.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            encode(message: _177.AllIntermediaryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _177.AllIntermediaryAccountsResponse;
            toJSON(message: _177.AllIntermediaryAccountsResponse): unknown;
            fromPartial(object: Partial<_177.AllIntermediaryAccountsResponse>): _177.AllIntermediaryAccountsResponse;
            fromAmino(object: _177.AllIntermediaryAccountsResponseAmino): _177.AllIntermediaryAccountsResponse;
            toAmino(message: _177.AllIntermediaryAccountsResponse): _177.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _177.AllIntermediaryAccountsResponseAminoMsg): _177.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _177.AllIntermediaryAccountsResponse): _177.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _177.AllIntermediaryAccountsResponseProtoMsg): _177.AllIntermediaryAccountsResponse;
            toProto(message: _177.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _177.AllIntermediaryAccountsResponse): _177.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            encode(message: _177.ConnectedIntermediaryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _177.ConnectedIntermediaryAccountRequest;
            toJSON(message: _177.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: Partial<_177.ConnectedIntermediaryAccountRequest>): _177.ConnectedIntermediaryAccountRequest;
            fromAmino(object: _177.ConnectedIntermediaryAccountRequestAmino): _177.ConnectedIntermediaryAccountRequest;
            toAmino(message: _177.ConnectedIntermediaryAccountRequest): _177.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _177.ConnectedIntermediaryAccountRequestAminoMsg): _177.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _177.ConnectedIntermediaryAccountRequest): _177.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _177.ConnectedIntermediaryAccountRequestProtoMsg): _177.ConnectedIntermediaryAccountRequest;
            toProto(message: _177.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _177.ConnectedIntermediaryAccountRequest): _177.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            encode(message: _177.ConnectedIntermediaryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _177.ConnectedIntermediaryAccountResponse;
            toJSON(message: _177.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: Partial<_177.ConnectedIntermediaryAccountResponse>): _177.ConnectedIntermediaryAccountResponse;
            fromAmino(object: _177.ConnectedIntermediaryAccountResponseAmino): _177.ConnectedIntermediaryAccountResponse;
            toAmino(message: _177.ConnectedIntermediaryAccountResponse): _177.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _177.ConnectedIntermediaryAccountResponseAminoMsg): _177.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _177.ConnectedIntermediaryAccountResponse): _177.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _177.ConnectedIntermediaryAccountResponseProtoMsg): _177.ConnectedIntermediaryAccountResponse;
            toProto(message: _177.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _177.ConnectedIntermediaryAccountResponse): _177.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            encode(message: _177.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryTotalDelegationByValidatorForDenomRequest;
            fromJSON(object: any): _177.QueryTotalDelegationByValidatorForDenomRequest;
            toJSON(message: _177.QueryTotalDelegationByValidatorForDenomRequest): unknown;
            fromPartial(object: Partial<_177.QueryTotalDelegationByValidatorForDenomRequest>): _177.QueryTotalDelegationByValidatorForDenomRequest;
            fromAmino(object: _177.QueryTotalDelegationByValidatorForDenomRequestAmino): _177.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _177.QueryTotalDelegationByValidatorForDenomRequest): _177.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _177.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _177.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _177.QueryTotalDelegationByValidatorForDenomRequest): _177.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _177.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _177.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _177.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _177.QueryTotalDelegationByValidatorForDenomRequest): _177.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            encode(message: _177.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryTotalDelegationByValidatorForDenomResponse;
            fromJSON(object: any): _177.QueryTotalDelegationByValidatorForDenomResponse;
            toJSON(message: _177.QueryTotalDelegationByValidatorForDenomResponse): unknown;
            fromPartial(object: Partial<_177.QueryTotalDelegationByValidatorForDenomResponse>): _177.QueryTotalDelegationByValidatorForDenomResponse;
            fromAmino(object: _177.QueryTotalDelegationByValidatorForDenomResponseAmino): _177.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _177.QueryTotalDelegationByValidatorForDenomResponse): _177.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _177.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _177.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _177.QueryTotalDelegationByValidatorForDenomResponse): _177.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _177.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _177.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _177.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _177.QueryTotalDelegationByValidatorForDenomResponse): _177.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            encode(message: _177.Delegations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.Delegations;
            fromJSON(object: any): _177.Delegations;
            toJSON(message: _177.Delegations): unknown;
            fromPartial(object: Partial<_177.Delegations>): _177.Delegations;
            fromAmino(object: _177.DelegationsAmino): _177.Delegations;
            toAmino(message: _177.Delegations): _177.DelegationsAmino;
            fromAminoMsg(object: _177.DelegationsAminoMsg): _177.Delegations;
            toAminoMsg(message: _177.Delegations): _177.DelegationsAminoMsg;
            fromProtoMsg(message: _177.DelegationsProtoMsg): _177.Delegations;
            toProto(message: _177.Delegations): Uint8Array;
            toProtoMsg(message: _177.Delegations): _177.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            encode(_: _177.TotalSuperfluidDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _177.TotalSuperfluidDelegationsRequest;
            toJSON(_: _177.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: Partial<_177.TotalSuperfluidDelegationsRequest>): _177.TotalSuperfluidDelegationsRequest;
            fromAmino(_: _177.TotalSuperfluidDelegationsRequestAmino): _177.TotalSuperfluidDelegationsRequest;
            toAmino(_: _177.TotalSuperfluidDelegationsRequest): _177.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _177.TotalSuperfluidDelegationsRequestAminoMsg): _177.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _177.TotalSuperfluidDelegationsRequest): _177.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _177.TotalSuperfluidDelegationsRequestProtoMsg): _177.TotalSuperfluidDelegationsRequest;
            toProto(message: _177.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _177.TotalSuperfluidDelegationsRequest): _177.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            encode(message: _177.TotalSuperfluidDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _177.TotalSuperfluidDelegationsResponse;
            toJSON(message: _177.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: Partial<_177.TotalSuperfluidDelegationsResponse>): _177.TotalSuperfluidDelegationsResponse;
            fromAmino(object: _177.TotalSuperfluidDelegationsResponseAmino): _177.TotalSuperfluidDelegationsResponse;
            toAmino(message: _177.TotalSuperfluidDelegationsResponse): _177.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _177.TotalSuperfluidDelegationsResponseAminoMsg): _177.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _177.TotalSuperfluidDelegationsResponse): _177.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _177.TotalSuperfluidDelegationsResponseProtoMsg): _177.TotalSuperfluidDelegationsResponse;
            toProto(message: _177.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _177.TotalSuperfluidDelegationsResponse): _177.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            encode(message: _177.SuperfluidDelegationAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _177.SuperfluidDelegationAmountRequest;
            toJSON(message: _177.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: Partial<_177.SuperfluidDelegationAmountRequest>): _177.SuperfluidDelegationAmountRequest;
            fromAmino(object: _177.SuperfluidDelegationAmountRequestAmino): _177.SuperfluidDelegationAmountRequest;
            toAmino(message: _177.SuperfluidDelegationAmountRequest): _177.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _177.SuperfluidDelegationAmountRequestAminoMsg): _177.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _177.SuperfluidDelegationAmountRequest): _177.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _177.SuperfluidDelegationAmountRequestProtoMsg): _177.SuperfluidDelegationAmountRequest;
            toProto(message: _177.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _177.SuperfluidDelegationAmountRequest): _177.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            encode(message: _177.SuperfluidDelegationAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _177.SuperfluidDelegationAmountResponse;
            toJSON(message: _177.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: Partial<_177.SuperfluidDelegationAmountResponse>): _177.SuperfluidDelegationAmountResponse;
            fromAmino(object: _177.SuperfluidDelegationAmountResponseAmino): _177.SuperfluidDelegationAmountResponse;
            toAmino(message: _177.SuperfluidDelegationAmountResponse): _177.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _177.SuperfluidDelegationAmountResponseAminoMsg): _177.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _177.SuperfluidDelegationAmountResponse): _177.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _177.SuperfluidDelegationAmountResponseProtoMsg): _177.SuperfluidDelegationAmountResponse;
            toProto(message: _177.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _177.SuperfluidDelegationAmountResponse): _177.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _177.SuperfluidDelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _177.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _177.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_177.SuperfluidDelegationsByDelegatorRequest>): _177.SuperfluidDelegationsByDelegatorRequest;
            fromAmino(object: _177.SuperfluidDelegationsByDelegatorRequestAmino): _177.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _177.SuperfluidDelegationsByDelegatorRequest): _177.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _177.SuperfluidDelegationsByDelegatorRequestAminoMsg): _177.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _177.SuperfluidDelegationsByDelegatorRequest): _177.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _177.SuperfluidDelegationsByDelegatorRequestProtoMsg): _177.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _177.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _177.SuperfluidDelegationsByDelegatorRequest): _177.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _177.SuperfluidDelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _177.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _177.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_177.SuperfluidDelegationsByDelegatorResponse>): _177.SuperfluidDelegationsByDelegatorResponse;
            fromAmino(object: _177.SuperfluidDelegationsByDelegatorResponseAmino): _177.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _177.SuperfluidDelegationsByDelegatorResponse): _177.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _177.SuperfluidDelegationsByDelegatorResponseAminoMsg): _177.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _177.SuperfluidDelegationsByDelegatorResponse): _177.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _177.SuperfluidDelegationsByDelegatorResponseProtoMsg): _177.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _177.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _177.SuperfluidDelegationsByDelegatorResponse): _177.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            encode(message: _177.SuperfluidUndelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _177.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _177.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: Partial<_177.SuperfluidUndelegationsByDelegatorRequest>): _177.SuperfluidUndelegationsByDelegatorRequest;
            fromAmino(object: _177.SuperfluidUndelegationsByDelegatorRequestAmino): _177.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _177.SuperfluidUndelegationsByDelegatorRequest): _177.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _177.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _177.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _177.SuperfluidUndelegationsByDelegatorRequest): _177.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _177.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _177.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _177.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _177.SuperfluidUndelegationsByDelegatorRequest): _177.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            encode(message: _177.SuperfluidUndelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _177.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _177.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial(object: Partial<_177.SuperfluidUndelegationsByDelegatorResponse>): _177.SuperfluidUndelegationsByDelegatorResponse;
            fromAmino(object: _177.SuperfluidUndelegationsByDelegatorResponseAmino): _177.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _177.SuperfluidUndelegationsByDelegatorResponse): _177.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _177.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _177.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _177.SuperfluidUndelegationsByDelegatorResponse): _177.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _177.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _177.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _177.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _177.SuperfluidUndelegationsByDelegatorResponse): _177.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _177.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _177.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _177.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_177.SuperfluidDelegationsByValidatorDenomRequest>): _177.SuperfluidDelegationsByValidatorDenomRequest;
            fromAmino(object: _177.SuperfluidDelegationsByValidatorDenomRequestAmino): _177.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _177.SuperfluidDelegationsByValidatorDenomRequest): _177.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _177.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _177.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _177.SuperfluidDelegationsByValidatorDenomRequest): _177.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _177.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _177.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _177.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _177.SuperfluidDelegationsByValidatorDenomRequest): _177.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _177.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _177.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _177.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_177.SuperfluidDelegationsByValidatorDenomResponse>): _177.SuperfluidDelegationsByValidatorDenomResponse;
            fromAmino(object: _177.SuperfluidDelegationsByValidatorDenomResponseAmino): _177.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _177.SuperfluidDelegationsByValidatorDenomResponse): _177.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _177.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _177.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _177.SuperfluidDelegationsByValidatorDenomResponse): _177.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _177.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _177.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _177.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _177.SuperfluidDelegationsByValidatorDenomResponse): _177.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            encode(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: Partial<_177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromAmino(object: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            encode(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: Partial<_177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromAmino(object: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            encode(message: _177.QueryTotalDelegationByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryTotalDelegationByDelegatorRequest;
            fromJSON(object: any): _177.QueryTotalDelegationByDelegatorRequest;
            toJSON(message: _177.QueryTotalDelegationByDelegatorRequest): unknown;
            fromPartial(object: Partial<_177.QueryTotalDelegationByDelegatorRequest>): _177.QueryTotalDelegationByDelegatorRequest;
            fromAmino(object: _177.QueryTotalDelegationByDelegatorRequestAmino): _177.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _177.QueryTotalDelegationByDelegatorRequest): _177.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _177.QueryTotalDelegationByDelegatorRequestAminoMsg): _177.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _177.QueryTotalDelegationByDelegatorRequest): _177.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _177.QueryTotalDelegationByDelegatorRequestProtoMsg): _177.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _177.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _177.QueryTotalDelegationByDelegatorRequest): _177.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            encode(message: _177.QueryTotalDelegationByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryTotalDelegationByDelegatorResponse;
            fromJSON(object: any): _177.QueryTotalDelegationByDelegatorResponse;
            toJSON(message: _177.QueryTotalDelegationByDelegatorResponse): unknown;
            fromPartial(object: Partial<_177.QueryTotalDelegationByDelegatorResponse>): _177.QueryTotalDelegationByDelegatorResponse;
            fromAmino(object: _177.QueryTotalDelegationByDelegatorResponseAmino): _177.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _177.QueryTotalDelegationByDelegatorResponse): _177.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _177.QueryTotalDelegationByDelegatorResponseAminoMsg): _177.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _177.QueryTotalDelegationByDelegatorResponse): _177.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _177.QueryTotalDelegationByDelegatorResponseProtoMsg): _177.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _177.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _177.QueryTotalDelegationByDelegatorResponse): _177.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            encode(_: _177.QueryUnpoolWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUnpoolWhitelistRequest;
            fromJSON(_: any): _177.QueryUnpoolWhitelistRequest;
            toJSON(_: _177.QueryUnpoolWhitelistRequest): unknown;
            fromPartial(_: Partial<_177.QueryUnpoolWhitelistRequest>): _177.QueryUnpoolWhitelistRequest;
            fromAmino(_: _177.QueryUnpoolWhitelistRequestAmino): _177.QueryUnpoolWhitelistRequest;
            toAmino(_: _177.QueryUnpoolWhitelistRequest): _177.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _177.QueryUnpoolWhitelistRequestAminoMsg): _177.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _177.QueryUnpoolWhitelistRequest): _177.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _177.QueryUnpoolWhitelistRequestProtoMsg): _177.QueryUnpoolWhitelistRequest;
            toProto(message: _177.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _177.QueryUnpoolWhitelistRequest): _177.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            encode(message: _177.QueryUnpoolWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.QueryUnpoolWhitelistResponse;
            fromJSON(object: any): _177.QueryUnpoolWhitelistResponse;
            toJSON(message: _177.QueryUnpoolWhitelistResponse): unknown;
            fromPartial(object: Partial<_177.QueryUnpoolWhitelistResponse>): _177.QueryUnpoolWhitelistResponse;
            fromAmino(object: _177.QueryUnpoolWhitelistResponseAmino): _177.QueryUnpoolWhitelistResponse;
            toAmino(message: _177.QueryUnpoolWhitelistResponse): _177.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _177.QueryUnpoolWhitelistResponseAminoMsg): _177.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _177.QueryUnpoolWhitelistResponse): _177.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _177.QueryUnpoolWhitelistResponseProtoMsg): _177.QueryUnpoolWhitelistResponse;
            toProto(message: _177.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _177.QueryUnpoolWhitelistResponse): _177.QueryUnpoolWhitelistResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _176.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.Params;
            fromJSON(object: any): _176.Params;
            toJSON(message: _176.Params): unknown;
            fromPartial(object: Partial<_176.Params>): _176.Params;
            fromAmino(object: _176.ParamsAmino): _176.Params;
            toAmino(message: _176.Params): _176.ParamsAmino;
            fromAminoMsg(object: _176.ParamsAminoMsg): _176.Params;
            toAminoMsg(message: _176.Params): _176.ParamsAminoMsg;
            fromProtoMsg(message: _176.ParamsProtoMsg): _176.Params;
            toProto(message: _176.Params): Uint8Array;
            toProtoMsg(message: _176.Params): _176.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _175.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.GenesisState;
            fromJSON(object: any): _175.GenesisState;
            toJSON(message: _175.GenesisState): unknown;
            fromPartial(object: Partial<_175.GenesisState>): _175.GenesisState;
            fromAmino(object: _175.GenesisStateAmino): _175.GenesisState;
            toAmino(message: _175.GenesisState): _175.GenesisStateAmino;
            fromAminoMsg(object: _175.GenesisStateAminoMsg): _175.GenesisState;
            toAminoMsg(message: _175.GenesisState): _175.GenesisStateAminoMsg;
            fromProtoMsg(message: _175.GenesisStateProtoMsg): _175.GenesisState;
            toProto(message: _175.GenesisState): Uint8Array;
            toProtoMsg(message: _175.GenesisState): _175.GenesisStateProtoMsg;
        };
    };
    namespace swaprouter {
        const v1beta1: {
            MsgClientImpl: typeof _422.MsgClientImpl;
            QueryClientImpl: typeof _410.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _182.ParamsRequest): Promise<_182.ParamsResponse>;
                estimateSwapExactAmountIn(request: _182.EstimateSwapExactAmountInRequest): Promise<_182.EstimateSwapExactAmountInResponse>;
                estimateSwapExactAmountOut(request: _182.EstimateSwapExactAmountOutRequest): Promise<_182.EstimateSwapExactAmountOutResponse>;
                numPools(request?: _182.NumPoolsRequest): Promise<_182.NumPoolsResponse>;
            };
            LCDQueryClient: typeof _394.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    swapExactAmountIn(value: _184.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    swapExactAmountOut(value: _184.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    swapExactAmountIn(value: _184.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _184.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _184.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _184.MsgSwapExactAmountOut;
                    };
                };
                toJSON: {
                    swapExactAmountIn(value: _184.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    swapExactAmountOut(value: _184.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    swapExactAmountIn(value: any): {
                        typeUrl: string;
                        value: _184.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: any): {
                        typeUrl: string;
                        value: _184.MsgSwapExactAmountOut;
                    };
                };
                fromPartial: {
                    swapExactAmountIn(value: _184.MsgSwapExactAmountIn): {
                        typeUrl: string;
                        value: _184.MsgSwapExactAmountIn;
                    };
                    swapExactAmountOut(value: _184.MsgSwapExactAmountOut): {
                        typeUrl: string;
                        value: _184.MsgSwapExactAmountOut;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: _184.MsgSwapExactAmountIn) => _184.MsgSwapExactAmountInAmino;
                    fromAmino: (object: _184.MsgSwapExactAmountInAmino) => _184.MsgSwapExactAmountIn;
                };
                "/osmosis.swaprouter.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: _184.MsgSwapExactAmountOut) => _184.MsgSwapExactAmountOutAmino;
                    fromAmino: (object: _184.MsgSwapExactAmountOutAmino) => _184.MsgSwapExactAmountOut;
                };
            };
            MsgSwapExactAmountIn: {
                typeUrl: string;
                encode(message: _184.MsgSwapExactAmountIn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgSwapExactAmountIn;
                fromJSON(object: any): _184.MsgSwapExactAmountIn;
                toJSON(message: _184.MsgSwapExactAmountIn): unknown;
                fromPartial(object: Partial<_184.MsgSwapExactAmountIn>): _184.MsgSwapExactAmountIn;
                fromAmino(object: _184.MsgSwapExactAmountInAmino): _184.MsgSwapExactAmountIn;
                toAmino(message: _184.MsgSwapExactAmountIn): _184.MsgSwapExactAmountInAmino;
                fromAminoMsg(object: _184.MsgSwapExactAmountInAminoMsg): _184.MsgSwapExactAmountIn;
                toAminoMsg(message: _184.MsgSwapExactAmountIn): _184.MsgSwapExactAmountInAminoMsg;
                fromProtoMsg(message: _184.MsgSwapExactAmountInProtoMsg): _184.MsgSwapExactAmountIn;
                toProto(message: _184.MsgSwapExactAmountIn): Uint8Array;
                toProtoMsg(message: _184.MsgSwapExactAmountIn): _184.MsgSwapExactAmountInProtoMsg;
            };
            MsgSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _184.MsgSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgSwapExactAmountInResponse;
                fromJSON(object: any): _184.MsgSwapExactAmountInResponse;
                toJSON(message: _184.MsgSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_184.MsgSwapExactAmountInResponse>): _184.MsgSwapExactAmountInResponse;
                fromAmino(object: _184.MsgSwapExactAmountInResponseAmino): _184.MsgSwapExactAmountInResponse;
                toAmino(message: _184.MsgSwapExactAmountInResponse): _184.MsgSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _184.MsgSwapExactAmountInResponseAminoMsg): _184.MsgSwapExactAmountInResponse;
                toAminoMsg(message: _184.MsgSwapExactAmountInResponse): _184.MsgSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _184.MsgSwapExactAmountInResponseProtoMsg): _184.MsgSwapExactAmountInResponse;
                toProto(message: _184.MsgSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _184.MsgSwapExactAmountInResponse): _184.MsgSwapExactAmountInResponseProtoMsg;
            };
            MsgSwapExactAmountOut: {
                typeUrl: string;
                encode(message: _184.MsgSwapExactAmountOut, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgSwapExactAmountOut;
                fromJSON(object: any): _184.MsgSwapExactAmountOut;
                toJSON(message: _184.MsgSwapExactAmountOut): unknown;
                fromPartial(object: Partial<_184.MsgSwapExactAmountOut>): _184.MsgSwapExactAmountOut;
                fromAmino(object: _184.MsgSwapExactAmountOutAmino): _184.MsgSwapExactAmountOut;
                toAmino(message: _184.MsgSwapExactAmountOut): _184.MsgSwapExactAmountOutAmino;
                fromAminoMsg(object: _184.MsgSwapExactAmountOutAminoMsg): _184.MsgSwapExactAmountOut;
                toAminoMsg(message: _184.MsgSwapExactAmountOut): _184.MsgSwapExactAmountOutAminoMsg;
                fromProtoMsg(message: _184.MsgSwapExactAmountOutProtoMsg): _184.MsgSwapExactAmountOut;
                toProto(message: _184.MsgSwapExactAmountOut): Uint8Array;
                toProtoMsg(message: _184.MsgSwapExactAmountOut): _184.MsgSwapExactAmountOutProtoMsg;
            };
            MsgSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _184.MsgSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _184.MsgSwapExactAmountOutResponse;
                fromJSON(object: any): _184.MsgSwapExactAmountOutResponse;
                toJSON(message: _184.MsgSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_184.MsgSwapExactAmountOutResponse>): _184.MsgSwapExactAmountOutResponse;
                fromAmino(object: _184.MsgSwapExactAmountOutResponseAmino): _184.MsgSwapExactAmountOutResponse;
                toAmino(message: _184.MsgSwapExactAmountOutResponse): _184.MsgSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _184.MsgSwapExactAmountOutResponseAminoMsg): _184.MsgSwapExactAmountOutResponse;
                toAminoMsg(message: _184.MsgSwapExactAmountOutResponse): _184.MsgSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _184.MsgSwapExactAmountOutResponseProtoMsg): _184.MsgSwapExactAmountOutResponse;
                toProto(message: _184.MsgSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _184.MsgSwapExactAmountOutResponse): _184.MsgSwapExactAmountOutResponseProtoMsg;
            };
            SwapAmountInRoute: {
                typeUrl: string;
                encode(message: _183.SwapAmountInRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.SwapAmountInRoute;
                fromJSON(object: any): _183.SwapAmountInRoute;
                toJSON(message: _183.SwapAmountInRoute): unknown;
                fromPartial(object: Partial<_183.SwapAmountInRoute>): _183.SwapAmountInRoute;
                fromAmino(object: _183.SwapAmountInRouteAmino): _183.SwapAmountInRoute;
                toAmino(message: _183.SwapAmountInRoute): _183.SwapAmountInRouteAmino;
                fromAminoMsg(object: _183.SwapAmountInRouteAminoMsg): _183.SwapAmountInRoute;
                toAminoMsg(message: _183.SwapAmountInRoute): _183.SwapAmountInRouteAminoMsg;
                fromProtoMsg(message: _183.SwapAmountInRouteProtoMsg): _183.SwapAmountInRoute;
                toProto(message: _183.SwapAmountInRoute): Uint8Array;
                toProtoMsg(message: _183.SwapAmountInRoute): _183.SwapAmountInRouteProtoMsg;
            };
            SwapAmountOutRoute: {
                typeUrl: string;
                encode(message: _183.SwapAmountOutRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _183.SwapAmountOutRoute;
                fromJSON(object: any): _183.SwapAmountOutRoute;
                toJSON(message: _183.SwapAmountOutRoute): unknown;
                fromPartial(object: Partial<_183.SwapAmountOutRoute>): _183.SwapAmountOutRoute;
                fromAmino(object: _183.SwapAmountOutRouteAmino): _183.SwapAmountOutRoute;
                toAmino(message: _183.SwapAmountOutRoute): _183.SwapAmountOutRouteAmino;
                fromAminoMsg(object: _183.SwapAmountOutRouteAminoMsg): _183.SwapAmountOutRoute;
                toAminoMsg(message: _183.SwapAmountOutRoute): _183.SwapAmountOutRouteAminoMsg;
                fromProtoMsg(message: _183.SwapAmountOutRouteProtoMsg): _183.SwapAmountOutRoute;
                toProto(message: _183.SwapAmountOutRoute): Uint8Array;
                toProtoMsg(message: _183.SwapAmountOutRoute): _183.SwapAmountOutRouteProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _182.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.ParamsRequest;
                fromJSON(_: any): _182.ParamsRequest;
                toJSON(_: _182.ParamsRequest): unknown;
                fromPartial(_: Partial<_182.ParamsRequest>): _182.ParamsRequest;
                fromAmino(_: _182.ParamsRequestAmino): _182.ParamsRequest;
                toAmino(_: _182.ParamsRequest): _182.ParamsRequestAmino;
                fromAminoMsg(object: _182.ParamsRequestAminoMsg): _182.ParamsRequest;
                toAminoMsg(message: _182.ParamsRequest): _182.ParamsRequestAminoMsg;
                fromProtoMsg(message: _182.ParamsRequestProtoMsg): _182.ParamsRequest;
                toProto(message: _182.ParamsRequest): Uint8Array;
                toProtoMsg(message: _182.ParamsRequest): _182.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _182.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.ParamsResponse;
                fromJSON(object: any): _182.ParamsResponse;
                toJSON(message: _182.ParamsResponse): unknown;
                fromPartial(object: Partial<_182.ParamsResponse>): _182.ParamsResponse;
                fromAmino(object: _182.ParamsResponseAmino): _182.ParamsResponse;
                toAmino(message: _182.ParamsResponse): _182.ParamsResponseAmino;
                fromAminoMsg(object: _182.ParamsResponseAminoMsg): _182.ParamsResponse;
                toAminoMsg(message: _182.ParamsResponse): _182.ParamsResponseAminoMsg;
                fromProtoMsg(message: _182.ParamsResponseProtoMsg): _182.ParamsResponse;
                toProto(message: _182.ParamsResponse): Uint8Array;
                toProtoMsg(message: _182.ParamsResponse): _182.ParamsResponseProtoMsg;
            };
            EstimateSwapExactAmountInRequest: {
                typeUrl: string;
                encode(message: _182.EstimateSwapExactAmountInRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.EstimateSwapExactAmountInRequest;
                fromJSON(object: any): _182.EstimateSwapExactAmountInRequest;
                toJSON(message: _182.EstimateSwapExactAmountInRequest): unknown;
                fromPartial(object: Partial<_182.EstimateSwapExactAmountInRequest>): _182.EstimateSwapExactAmountInRequest;
                fromAmino(object: _182.EstimateSwapExactAmountInRequestAmino): _182.EstimateSwapExactAmountInRequest;
                toAmino(message: _182.EstimateSwapExactAmountInRequest): _182.EstimateSwapExactAmountInRequestAmino;
                fromAminoMsg(object: _182.EstimateSwapExactAmountInRequestAminoMsg): _182.EstimateSwapExactAmountInRequest;
                toAminoMsg(message: _182.EstimateSwapExactAmountInRequest): _182.EstimateSwapExactAmountInRequestAminoMsg;
                fromProtoMsg(message: _182.EstimateSwapExactAmountInRequestProtoMsg): _182.EstimateSwapExactAmountInRequest;
                toProto(message: _182.EstimateSwapExactAmountInRequest): Uint8Array;
                toProtoMsg(message: _182.EstimateSwapExactAmountInRequest): _182.EstimateSwapExactAmountInRequestProtoMsg;
            };
            EstimateSwapExactAmountInResponse: {
                typeUrl: string;
                encode(message: _182.EstimateSwapExactAmountInResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.EstimateSwapExactAmountInResponse;
                fromJSON(object: any): _182.EstimateSwapExactAmountInResponse;
                toJSON(message: _182.EstimateSwapExactAmountInResponse): unknown;
                fromPartial(object: Partial<_182.EstimateSwapExactAmountInResponse>): _182.EstimateSwapExactAmountInResponse;
                fromAmino(object: _182.EstimateSwapExactAmountInResponseAmino): _182.EstimateSwapExactAmountInResponse;
                toAmino(message: _182.EstimateSwapExactAmountInResponse): _182.EstimateSwapExactAmountInResponseAmino;
                fromAminoMsg(object: _182.EstimateSwapExactAmountInResponseAminoMsg): _182.EstimateSwapExactAmountInResponse;
                toAminoMsg(message: _182.EstimateSwapExactAmountInResponse): _182.EstimateSwapExactAmountInResponseAminoMsg;
                fromProtoMsg(message: _182.EstimateSwapExactAmountInResponseProtoMsg): _182.EstimateSwapExactAmountInResponse;
                toProto(message: _182.EstimateSwapExactAmountInResponse): Uint8Array;
                toProtoMsg(message: _182.EstimateSwapExactAmountInResponse): _182.EstimateSwapExactAmountInResponseProtoMsg;
            };
            EstimateSwapExactAmountOutRequest: {
                typeUrl: string;
                encode(message: _182.EstimateSwapExactAmountOutRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.EstimateSwapExactAmountOutRequest;
                fromJSON(object: any): _182.EstimateSwapExactAmountOutRequest;
                toJSON(message: _182.EstimateSwapExactAmountOutRequest): unknown;
                fromPartial(object: Partial<_182.EstimateSwapExactAmountOutRequest>): _182.EstimateSwapExactAmountOutRequest;
                fromAmino(object: _182.EstimateSwapExactAmountOutRequestAmino): _182.EstimateSwapExactAmountOutRequest;
                toAmino(message: _182.EstimateSwapExactAmountOutRequest): _182.EstimateSwapExactAmountOutRequestAmino;
                fromAminoMsg(object: _182.EstimateSwapExactAmountOutRequestAminoMsg): _182.EstimateSwapExactAmountOutRequest;
                toAminoMsg(message: _182.EstimateSwapExactAmountOutRequest): _182.EstimateSwapExactAmountOutRequestAminoMsg;
                fromProtoMsg(message: _182.EstimateSwapExactAmountOutRequestProtoMsg): _182.EstimateSwapExactAmountOutRequest;
                toProto(message: _182.EstimateSwapExactAmountOutRequest): Uint8Array;
                toProtoMsg(message: _182.EstimateSwapExactAmountOutRequest): _182.EstimateSwapExactAmountOutRequestProtoMsg;
            };
            EstimateSwapExactAmountOutResponse: {
                typeUrl: string;
                encode(message: _182.EstimateSwapExactAmountOutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.EstimateSwapExactAmountOutResponse;
                fromJSON(object: any): _182.EstimateSwapExactAmountOutResponse;
                toJSON(message: _182.EstimateSwapExactAmountOutResponse): unknown;
                fromPartial(object: Partial<_182.EstimateSwapExactAmountOutResponse>): _182.EstimateSwapExactAmountOutResponse;
                fromAmino(object: _182.EstimateSwapExactAmountOutResponseAmino): _182.EstimateSwapExactAmountOutResponse;
                toAmino(message: _182.EstimateSwapExactAmountOutResponse): _182.EstimateSwapExactAmountOutResponseAmino;
                fromAminoMsg(object: _182.EstimateSwapExactAmountOutResponseAminoMsg): _182.EstimateSwapExactAmountOutResponse;
                toAminoMsg(message: _182.EstimateSwapExactAmountOutResponse): _182.EstimateSwapExactAmountOutResponseAminoMsg;
                fromProtoMsg(message: _182.EstimateSwapExactAmountOutResponseProtoMsg): _182.EstimateSwapExactAmountOutResponse;
                toProto(message: _182.EstimateSwapExactAmountOutResponse): Uint8Array;
                toProtoMsg(message: _182.EstimateSwapExactAmountOutResponse): _182.EstimateSwapExactAmountOutResponseProtoMsg;
            };
            NumPoolsRequest: {
                typeUrl: string;
                encode(_: _182.NumPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.NumPoolsRequest;
                fromJSON(_: any): _182.NumPoolsRequest;
                toJSON(_: _182.NumPoolsRequest): unknown;
                fromPartial(_: Partial<_182.NumPoolsRequest>): _182.NumPoolsRequest;
                fromAmino(_: _182.NumPoolsRequestAmino): _182.NumPoolsRequest;
                toAmino(_: _182.NumPoolsRequest): _182.NumPoolsRequestAmino;
                fromAminoMsg(object: _182.NumPoolsRequestAminoMsg): _182.NumPoolsRequest;
                toAminoMsg(message: _182.NumPoolsRequest): _182.NumPoolsRequestAminoMsg;
                fromProtoMsg(message: _182.NumPoolsRequestProtoMsg): _182.NumPoolsRequest;
                toProto(message: _182.NumPoolsRequest): Uint8Array;
                toProtoMsg(message: _182.NumPoolsRequest): _182.NumPoolsRequestProtoMsg;
            };
            NumPoolsResponse: {
                typeUrl: string;
                encode(message: _182.NumPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _182.NumPoolsResponse;
                fromJSON(object: any): _182.NumPoolsResponse;
                toJSON(message: _182.NumPoolsResponse): unknown;
                fromPartial(object: Partial<_182.NumPoolsResponse>): _182.NumPoolsResponse;
                fromAmino(object: _182.NumPoolsResponseAmino): _182.NumPoolsResponse;
                toAmino(message: _182.NumPoolsResponse): _182.NumPoolsResponseAmino;
                fromAminoMsg(object: _182.NumPoolsResponseAminoMsg): _182.NumPoolsResponse;
                toAminoMsg(message: _182.NumPoolsResponse): _182.NumPoolsResponseAminoMsg;
                fromProtoMsg(message: _182.NumPoolsResponseProtoMsg): _182.NumPoolsResponse;
                toProto(message: _182.NumPoolsResponse): Uint8Array;
                toProtoMsg(message: _182.NumPoolsResponse): _182.NumPoolsResponseProtoMsg;
            };
            poolTypeFromJSON(object: any): _181.PoolType;
            poolTypeToJSON(object: _181.PoolType): string;
            PoolType: typeof _181.PoolType;
            PoolTypeSDKType: typeof _181.PoolType;
            PoolTypeAmino: typeof _181.PoolType;
            ModuleRoute: {
                typeUrl: string;
                encode(message: _181.ModuleRoute, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _181.ModuleRoute;
                fromJSON(object: any): _181.ModuleRoute;
                toJSON(message: _181.ModuleRoute): unknown;
                fromPartial(object: Partial<_181.ModuleRoute>): _181.ModuleRoute;
                fromAmino(object: _181.ModuleRouteAmino): _181.ModuleRoute;
                toAmino(message: _181.ModuleRoute): _181.ModuleRouteAmino;
                fromAminoMsg(object: _181.ModuleRouteAminoMsg): _181.ModuleRoute;
                toAminoMsg(message: _181.ModuleRoute): _181.ModuleRouteAminoMsg;
                fromProtoMsg(message: _181.ModuleRouteProtoMsg): _181.ModuleRoute;
                toProto(message: _181.ModuleRoute): Uint8Array;
                toProtoMsg(message: _181.ModuleRoute): _181.ModuleRouteProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _180.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.Params;
                fromJSON(object: any): _180.Params;
                toJSON(message: _180.Params): unknown;
                fromPartial(object: Partial<_180.Params>): _180.Params;
                fromAmino(object: _180.ParamsAmino): _180.Params;
                toAmino(message: _180.Params): _180.ParamsAmino;
                fromAminoMsg(object: _180.ParamsAminoMsg): _180.Params;
                toAminoMsg(message: _180.Params): _180.ParamsAminoMsg;
                fromProtoMsg(message: _180.ParamsProtoMsg): _180.Params;
                toProto(message: _180.Params): Uint8Array;
                toProtoMsg(message: _180.Params): _180.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _180.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _180.GenesisState;
                fromJSON(object: any): _180.GenesisState;
                toJSON(message: _180.GenesisState): unknown;
                fromPartial(object: Partial<_180.GenesisState>): _180.GenesisState;
                fromAmino(object: _180.GenesisStateAmino): _180.GenesisState;
                toAmino(message: _180.GenesisState): _180.GenesisStateAmino;
                fromAminoMsg(object: _180.GenesisStateAminoMsg): _180.GenesisState;
                toAminoMsg(message: _180.GenesisState): _180.GenesisStateAminoMsg;
                fromProtoMsg(message: _180.GenesisStateProtoMsg): _180.GenesisState;
                toProto(message: _180.GenesisState): Uint8Array;
                toProtoMsg(message: _180.GenesisState): _180.GenesisStateProtoMsg;
            };
        };
    }
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _423.MsgClientImpl;
            QueryClientImpl: typeof _411.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _188.QueryParamsRequest): Promise<_188.QueryParamsResponse>;
                denomAuthorityMetadata(request: _188.QueryDenomAuthorityMetadataRequest): Promise<_188.QueryDenomAuthorityMetadataResponse>;
                denomsFromCreator(request: _188.QueryDenomsFromCreatorRequest): Promise<_188.QueryDenomsFromCreatorResponse>;
            };
            LCDQueryClient: typeof _395.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _189.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _189.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _189.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _189.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _189.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _189.MsgCreateDenom): {
                        typeUrl: string;
                        value: _189.MsgCreateDenom;
                    };
                    mint(value: _189.MsgMint): {
                        typeUrl: string;
                        value: _189.MsgMint;
                    };
                    burn(value: _189.MsgBurn): {
                        typeUrl: string;
                        value: _189.MsgBurn;
                    };
                    changeAdmin(value: _189.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _189.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _189.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _189.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _189.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _189.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _189.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _189.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _189.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _189.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _189.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _189.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _189.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _189.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _189.MsgCreateDenom): {
                        typeUrl: string;
                        value: _189.MsgCreateDenom;
                    };
                    mint(value: _189.MsgMint): {
                        typeUrl: string;
                        value: _189.MsgMint;
                    };
                    burn(value: _189.MsgBurn): {
                        typeUrl: string;
                        value: _189.MsgBurn;
                    };
                    changeAdmin(value: _189.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _189.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _189.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _189.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _189.MsgCreateDenom) => _189.MsgCreateDenomAmino;
                    fromAmino: (object: _189.MsgCreateDenomAmino) => _189.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _189.MsgMint) => _189.MsgMintAmino;
                    fromAmino: (object: _189.MsgMintAmino) => _189.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _189.MsgBurn) => _189.MsgBurnAmino;
                    fromAmino: (object: _189.MsgBurnAmino) => _189.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _189.MsgChangeAdmin) => _189.MsgChangeAdminAmino;
                    fromAmino: (object: _189.MsgChangeAdminAmino) => _189.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _189.MsgSetDenomMetadata) => _189.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _189.MsgSetDenomMetadataAmino) => _189.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                encode(message: _189.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgCreateDenom;
                fromJSON(object: any): _189.MsgCreateDenom;
                toJSON(message: _189.MsgCreateDenom): unknown;
                fromPartial(object: Partial<_189.MsgCreateDenom>): _189.MsgCreateDenom;
                fromAmino(object: _189.MsgCreateDenomAmino): _189.MsgCreateDenom;
                toAmino(message: _189.MsgCreateDenom): _189.MsgCreateDenomAmino;
                fromAminoMsg(object: _189.MsgCreateDenomAminoMsg): _189.MsgCreateDenom;
                toAminoMsg(message: _189.MsgCreateDenom): _189.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _189.MsgCreateDenomProtoMsg): _189.MsgCreateDenom;
                toProto(message: _189.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _189.MsgCreateDenom): _189.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                encode(message: _189.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgCreateDenomResponse;
                fromJSON(object: any): _189.MsgCreateDenomResponse;
                toJSON(message: _189.MsgCreateDenomResponse): unknown;
                fromPartial(object: Partial<_189.MsgCreateDenomResponse>): _189.MsgCreateDenomResponse;
                fromAmino(object: _189.MsgCreateDenomResponseAmino): _189.MsgCreateDenomResponse;
                toAmino(message: _189.MsgCreateDenomResponse): _189.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _189.MsgCreateDenomResponseAminoMsg): _189.MsgCreateDenomResponse;
                toAminoMsg(message: _189.MsgCreateDenomResponse): _189.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _189.MsgCreateDenomResponseProtoMsg): _189.MsgCreateDenomResponse;
                toProto(message: _189.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _189.MsgCreateDenomResponse): _189.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                encode(message: _189.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgMint;
                fromJSON(object: any): _189.MsgMint;
                toJSON(message: _189.MsgMint): unknown;
                fromPartial(object: Partial<_189.MsgMint>): _189.MsgMint;
                fromAmino(object: _189.MsgMintAmino): _189.MsgMint;
                toAmino(message: _189.MsgMint): _189.MsgMintAmino;
                fromAminoMsg(object: _189.MsgMintAminoMsg): _189.MsgMint;
                toAminoMsg(message: _189.MsgMint): _189.MsgMintAminoMsg;
                fromProtoMsg(message: _189.MsgMintProtoMsg): _189.MsgMint;
                toProto(message: _189.MsgMint): Uint8Array;
                toProtoMsg(message: _189.MsgMint): _189.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                encode(_: _189.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgMintResponse;
                fromJSON(_: any): _189.MsgMintResponse;
                toJSON(_: _189.MsgMintResponse): unknown;
                fromPartial(_: Partial<_189.MsgMintResponse>): _189.MsgMintResponse;
                fromAmino(_: _189.MsgMintResponseAmino): _189.MsgMintResponse;
                toAmino(_: _189.MsgMintResponse): _189.MsgMintResponseAmino;
                fromAminoMsg(object: _189.MsgMintResponseAminoMsg): _189.MsgMintResponse;
                toAminoMsg(message: _189.MsgMintResponse): _189.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _189.MsgMintResponseProtoMsg): _189.MsgMintResponse;
                toProto(message: _189.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _189.MsgMintResponse): _189.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                encode(message: _189.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgBurn;
                fromJSON(object: any): _189.MsgBurn;
                toJSON(message: _189.MsgBurn): unknown;
                fromPartial(object: Partial<_189.MsgBurn>): _189.MsgBurn;
                fromAmino(object: _189.MsgBurnAmino): _189.MsgBurn;
                toAmino(message: _189.MsgBurn): _189.MsgBurnAmino;
                fromAminoMsg(object: _189.MsgBurnAminoMsg): _189.MsgBurn;
                toAminoMsg(message: _189.MsgBurn): _189.MsgBurnAminoMsg;
                fromProtoMsg(message: _189.MsgBurnProtoMsg): _189.MsgBurn;
                toProto(message: _189.MsgBurn): Uint8Array;
                toProtoMsg(message: _189.MsgBurn): _189.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                encode(_: _189.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgBurnResponse;
                fromJSON(_: any): _189.MsgBurnResponse;
                toJSON(_: _189.MsgBurnResponse): unknown;
                fromPartial(_: Partial<_189.MsgBurnResponse>): _189.MsgBurnResponse;
                fromAmino(_: _189.MsgBurnResponseAmino): _189.MsgBurnResponse;
                toAmino(_: _189.MsgBurnResponse): _189.MsgBurnResponseAmino;
                fromAminoMsg(object: _189.MsgBurnResponseAminoMsg): _189.MsgBurnResponse;
                toAminoMsg(message: _189.MsgBurnResponse): _189.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _189.MsgBurnResponseProtoMsg): _189.MsgBurnResponse;
                toProto(message: _189.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _189.MsgBurnResponse): _189.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                encode(message: _189.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgChangeAdmin;
                fromJSON(object: any): _189.MsgChangeAdmin;
                toJSON(message: _189.MsgChangeAdmin): unknown;
                fromPartial(object: Partial<_189.MsgChangeAdmin>): _189.MsgChangeAdmin;
                fromAmino(object: _189.MsgChangeAdminAmino): _189.MsgChangeAdmin;
                toAmino(message: _189.MsgChangeAdmin): _189.MsgChangeAdminAmino;
                fromAminoMsg(object: _189.MsgChangeAdminAminoMsg): _189.MsgChangeAdmin;
                toAminoMsg(message: _189.MsgChangeAdmin): _189.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _189.MsgChangeAdminProtoMsg): _189.MsgChangeAdmin;
                toProto(message: _189.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _189.MsgChangeAdmin): _189.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                encode(_: _189.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgChangeAdminResponse;
                fromJSON(_: any): _189.MsgChangeAdminResponse;
                toJSON(_: _189.MsgChangeAdminResponse): unknown;
                fromPartial(_: Partial<_189.MsgChangeAdminResponse>): _189.MsgChangeAdminResponse;
                fromAmino(_: _189.MsgChangeAdminResponseAmino): _189.MsgChangeAdminResponse;
                toAmino(_: _189.MsgChangeAdminResponse): _189.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _189.MsgChangeAdminResponseAminoMsg): _189.MsgChangeAdminResponse;
                toAminoMsg(message: _189.MsgChangeAdminResponse): _189.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _189.MsgChangeAdminResponseProtoMsg): _189.MsgChangeAdminResponse;
                toProto(message: _189.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _189.MsgChangeAdminResponse): _189.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                encode(message: _189.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgSetDenomMetadata;
                fromJSON(object: any): _189.MsgSetDenomMetadata;
                toJSON(message: _189.MsgSetDenomMetadata): unknown;
                fromPartial(object: Partial<_189.MsgSetDenomMetadata>): _189.MsgSetDenomMetadata;
                fromAmino(object: _189.MsgSetDenomMetadataAmino): _189.MsgSetDenomMetadata;
                toAmino(message: _189.MsgSetDenomMetadata): _189.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _189.MsgSetDenomMetadataAminoMsg): _189.MsgSetDenomMetadata;
                toAminoMsg(message: _189.MsgSetDenomMetadata): _189.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _189.MsgSetDenomMetadataProtoMsg): _189.MsgSetDenomMetadata;
                toProto(message: _189.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _189.MsgSetDenomMetadata): _189.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                encode(_: _189.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _189.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _189.MsgSetDenomMetadataResponse;
                toJSON(_: _189.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: Partial<_189.MsgSetDenomMetadataResponse>): _189.MsgSetDenomMetadataResponse;
                fromAmino(_: _189.MsgSetDenomMetadataResponseAmino): _189.MsgSetDenomMetadataResponse;
                toAmino(_: _189.MsgSetDenomMetadataResponse): _189.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _189.MsgSetDenomMetadataResponseAminoMsg): _189.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _189.MsgSetDenomMetadataResponse): _189.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _189.MsgSetDenomMetadataResponseProtoMsg): _189.MsgSetDenomMetadataResponse;
                toProto(message: _189.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _189.MsgSetDenomMetadataResponse): _189.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _188.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryParamsRequest;
                fromJSON(_: any): _188.QueryParamsRequest;
                toJSON(_: _188.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_188.QueryParamsRequest>): _188.QueryParamsRequest;
                fromAmino(_: _188.QueryParamsRequestAmino): _188.QueryParamsRequest;
                toAmino(_: _188.QueryParamsRequest): _188.QueryParamsRequestAmino;
                fromAminoMsg(object: _188.QueryParamsRequestAminoMsg): _188.QueryParamsRequest;
                toAminoMsg(message: _188.QueryParamsRequest): _188.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _188.QueryParamsRequestProtoMsg): _188.QueryParamsRequest;
                toProto(message: _188.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _188.QueryParamsRequest): _188.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _188.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryParamsResponse;
                fromJSON(object: any): _188.QueryParamsResponse;
                toJSON(message: _188.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_188.QueryParamsResponse>): _188.QueryParamsResponse;
                fromAmino(object: _188.QueryParamsResponseAmino): _188.QueryParamsResponse;
                toAmino(message: _188.QueryParamsResponse): _188.QueryParamsResponseAmino;
                fromAminoMsg(object: _188.QueryParamsResponseAminoMsg): _188.QueryParamsResponse;
                toAminoMsg(message: _188.QueryParamsResponse): _188.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _188.QueryParamsResponseProtoMsg): _188.QueryParamsResponse;
                toProto(message: _188.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _188.QueryParamsResponse): _188.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                encode(message: _188.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _188.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _188.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: Partial<_188.QueryDenomAuthorityMetadataRequest>): _188.QueryDenomAuthorityMetadataRequest;
                fromAmino(object: _188.QueryDenomAuthorityMetadataRequestAmino): _188.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _188.QueryDenomAuthorityMetadataRequest): _188.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _188.QueryDenomAuthorityMetadataRequestAminoMsg): _188.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _188.QueryDenomAuthorityMetadataRequest): _188.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _188.QueryDenomAuthorityMetadataRequestProtoMsg): _188.QueryDenomAuthorityMetadataRequest;
                toProto(message: _188.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _188.QueryDenomAuthorityMetadataRequest): _188.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                encode(message: _188.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _188.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _188.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: Partial<_188.QueryDenomAuthorityMetadataResponse>): _188.QueryDenomAuthorityMetadataResponse;
                fromAmino(object: _188.QueryDenomAuthorityMetadataResponseAmino): _188.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _188.QueryDenomAuthorityMetadataResponse): _188.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _188.QueryDenomAuthorityMetadataResponseAminoMsg): _188.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _188.QueryDenomAuthorityMetadataResponse): _188.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _188.QueryDenomAuthorityMetadataResponseProtoMsg): _188.QueryDenomAuthorityMetadataResponse;
                toProto(message: _188.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _188.QueryDenomAuthorityMetadataResponse): _188.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                encode(message: _188.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _188.QueryDenomsFromCreatorRequest;
                toJSON(message: _188.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: Partial<_188.QueryDenomsFromCreatorRequest>): _188.QueryDenomsFromCreatorRequest;
                fromAmino(object: _188.QueryDenomsFromCreatorRequestAmino): _188.QueryDenomsFromCreatorRequest;
                toAmino(message: _188.QueryDenomsFromCreatorRequest): _188.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _188.QueryDenomsFromCreatorRequestAminoMsg): _188.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _188.QueryDenomsFromCreatorRequest): _188.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _188.QueryDenomsFromCreatorRequestProtoMsg): _188.QueryDenomsFromCreatorRequest;
                toProto(message: _188.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _188.QueryDenomsFromCreatorRequest): _188.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                encode(message: _188.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _188.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _188.QueryDenomsFromCreatorResponse;
                toJSON(message: _188.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: Partial<_188.QueryDenomsFromCreatorResponse>): _188.QueryDenomsFromCreatorResponse;
                fromAmino(object: _188.QueryDenomsFromCreatorResponseAmino): _188.QueryDenomsFromCreatorResponse;
                toAmino(message: _188.QueryDenomsFromCreatorResponse): _188.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _188.QueryDenomsFromCreatorResponseAminoMsg): _188.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _188.QueryDenomsFromCreatorResponse): _188.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _188.QueryDenomsFromCreatorResponseProtoMsg): _188.QueryDenomsFromCreatorResponse;
                toProto(message: _188.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _188.QueryDenomsFromCreatorResponse): _188.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _187.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _187.Params;
                fromJSON(object: any): _187.Params;
                toJSON(message: _187.Params): unknown;
                fromPartial(object: Partial<_187.Params>): _187.Params;
                fromAmino(object: _187.ParamsAmino): _187.Params;
                toAmino(message: _187.Params): _187.ParamsAmino;
                fromAminoMsg(object: _187.ParamsAminoMsg): _187.Params;
                toAminoMsg(message: _187.Params): _187.ParamsAminoMsg;
                fromProtoMsg(message: _187.ParamsProtoMsg): _187.Params;
                toProto(message: _187.Params): Uint8Array;
                toProtoMsg(message: _187.Params): _187.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _186.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.GenesisState;
                fromJSON(object: any): _186.GenesisState;
                toJSON(message: _186.GenesisState): unknown;
                fromPartial(object: Partial<_186.GenesisState>): _186.GenesisState;
                fromAmino(object: _186.GenesisStateAmino): _186.GenesisState;
                toAmino(message: _186.GenesisState): _186.GenesisStateAmino;
                fromAminoMsg(object: _186.GenesisStateAminoMsg): _186.GenesisState;
                toAminoMsg(message: _186.GenesisState): _186.GenesisStateAminoMsg;
                fromProtoMsg(message: _186.GenesisStateProtoMsg): _186.GenesisState;
                toProto(message: _186.GenesisState): Uint8Array;
                toProtoMsg(message: _186.GenesisState): _186.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                encode(message: _186.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _186.GenesisDenom;
                fromJSON(object: any): _186.GenesisDenom;
                toJSON(message: _186.GenesisDenom): unknown;
                fromPartial(object: Partial<_186.GenesisDenom>): _186.GenesisDenom;
                fromAmino(object: _186.GenesisDenomAmino): _186.GenesisDenom;
                toAmino(message: _186.GenesisDenom): _186.GenesisDenomAmino;
                fromAminoMsg(object: _186.GenesisDenomAminoMsg): _186.GenesisDenom;
                toAminoMsg(message: _186.GenesisDenom): _186.GenesisDenomAminoMsg;
                fromProtoMsg(message: _186.GenesisDenomProtoMsg): _186.GenesisDenom;
                toProto(message: _186.GenesisDenom): Uint8Array;
                toProtoMsg(message: _186.GenesisDenom): _186.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                encode(message: _185.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _185.DenomAuthorityMetadata;
                fromJSON(object: any): _185.DenomAuthorityMetadata;
                toJSON(message: _185.DenomAuthorityMetadata): unknown;
                fromPartial(object: Partial<_185.DenomAuthorityMetadata>): _185.DenomAuthorityMetadata;
                fromAmino(object: _185.DenomAuthorityMetadataAmino): _185.DenomAuthorityMetadata;
                toAmino(message: _185.DenomAuthorityMetadata): _185.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _185.DenomAuthorityMetadataAminoMsg): _185.DenomAuthorityMetadata;
                toAminoMsg(message: _185.DenomAuthorityMetadata): _185.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _185.DenomAuthorityMetadataProtoMsg): _185.DenomAuthorityMetadata;
                toProto(message: _185.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _185.DenomAuthorityMetadata): _185.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _412.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _191.ParamsRequest): Promise<_191.ParamsResponse>;
                arithmeticTwap(request: _191.ArithmeticTwapRequest): Promise<_191.ArithmeticTwapResponse>;
                arithmeticTwapToNow(request: _191.ArithmeticTwapToNowRequest): Promise<_191.ArithmeticTwapToNowResponse>;
            };
            LCDQueryClient: typeof _396.LCDQueryClient;
            TwapRecord: {
                typeUrl: string;
                encode(message: _192.TwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _192.TwapRecord;
                fromJSON(object: any): _192.TwapRecord;
                toJSON(message: _192.TwapRecord): unknown;
                fromPartial(object: Partial<_192.TwapRecord>): _192.TwapRecord;
                fromAmino(object: _192.TwapRecordAmino): _192.TwapRecord;
                toAmino(message: _192.TwapRecord): _192.TwapRecordAmino;
                fromAminoMsg(object: _192.TwapRecordAminoMsg): _192.TwapRecord;
                toAminoMsg(message: _192.TwapRecord): _192.TwapRecordAminoMsg;
                fromProtoMsg(message: _192.TwapRecordProtoMsg): _192.TwapRecord;
                toProto(message: _192.TwapRecord): Uint8Array;
                toProtoMsg(message: _192.TwapRecord): _192.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                encode(message: _191.ArithmeticTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.ArithmeticTwapRequest;
                fromJSON(object: any): _191.ArithmeticTwapRequest;
                toJSON(message: _191.ArithmeticTwapRequest): unknown;
                fromPartial(object: Partial<_191.ArithmeticTwapRequest>): _191.ArithmeticTwapRequest;
                fromAmino(object: _191.ArithmeticTwapRequestAmino): _191.ArithmeticTwapRequest;
                toAmino(message: _191.ArithmeticTwapRequest): _191.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _191.ArithmeticTwapRequestAminoMsg): _191.ArithmeticTwapRequest;
                toAminoMsg(message: _191.ArithmeticTwapRequest): _191.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _191.ArithmeticTwapRequestProtoMsg): _191.ArithmeticTwapRequest;
                toProto(message: _191.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _191.ArithmeticTwapRequest): _191.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                encode(message: _191.ArithmeticTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.ArithmeticTwapResponse;
                fromJSON(object: any): _191.ArithmeticTwapResponse;
                toJSON(message: _191.ArithmeticTwapResponse): unknown;
                fromPartial(object: Partial<_191.ArithmeticTwapResponse>): _191.ArithmeticTwapResponse;
                fromAmino(object: _191.ArithmeticTwapResponseAmino): _191.ArithmeticTwapResponse;
                toAmino(message: _191.ArithmeticTwapResponse): _191.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _191.ArithmeticTwapResponseAminoMsg): _191.ArithmeticTwapResponse;
                toAminoMsg(message: _191.ArithmeticTwapResponse): _191.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _191.ArithmeticTwapResponseProtoMsg): _191.ArithmeticTwapResponse;
                toProto(message: _191.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _191.ArithmeticTwapResponse): _191.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                encode(message: _191.ArithmeticTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.ArithmeticTwapToNowRequest;
                fromJSON(object: any): _191.ArithmeticTwapToNowRequest;
                toJSON(message: _191.ArithmeticTwapToNowRequest): unknown;
                fromPartial(object: Partial<_191.ArithmeticTwapToNowRequest>): _191.ArithmeticTwapToNowRequest;
                fromAmino(object: _191.ArithmeticTwapToNowRequestAmino): _191.ArithmeticTwapToNowRequest;
                toAmino(message: _191.ArithmeticTwapToNowRequest): _191.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _191.ArithmeticTwapToNowRequestAminoMsg): _191.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _191.ArithmeticTwapToNowRequest): _191.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _191.ArithmeticTwapToNowRequestProtoMsg): _191.ArithmeticTwapToNowRequest;
                toProto(message: _191.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _191.ArithmeticTwapToNowRequest): _191.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                encode(message: _191.ArithmeticTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.ArithmeticTwapToNowResponse;
                fromJSON(object: any): _191.ArithmeticTwapToNowResponse;
                toJSON(message: _191.ArithmeticTwapToNowResponse): unknown;
                fromPartial(object: Partial<_191.ArithmeticTwapToNowResponse>): _191.ArithmeticTwapToNowResponse;
                fromAmino(object: _191.ArithmeticTwapToNowResponseAmino): _191.ArithmeticTwapToNowResponse;
                toAmino(message: _191.ArithmeticTwapToNowResponse): _191.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _191.ArithmeticTwapToNowResponseAminoMsg): _191.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _191.ArithmeticTwapToNowResponse): _191.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _191.ArithmeticTwapToNowResponseProtoMsg): _191.ArithmeticTwapToNowResponse;
                toProto(message: _191.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _191.ArithmeticTwapToNowResponse): _191.ArithmeticTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                encode(_: _191.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.ParamsRequest;
                fromJSON(_: any): _191.ParamsRequest;
                toJSON(_: _191.ParamsRequest): unknown;
                fromPartial(_: Partial<_191.ParamsRequest>): _191.ParamsRequest;
                fromAmino(_: _191.ParamsRequestAmino): _191.ParamsRequest;
                toAmino(_: _191.ParamsRequest): _191.ParamsRequestAmino;
                fromAminoMsg(object: _191.ParamsRequestAminoMsg): _191.ParamsRequest;
                toAminoMsg(message: _191.ParamsRequest): _191.ParamsRequestAminoMsg;
                fromProtoMsg(message: _191.ParamsRequestProtoMsg): _191.ParamsRequest;
                toProto(message: _191.ParamsRequest): Uint8Array;
                toProtoMsg(message: _191.ParamsRequest): _191.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                encode(message: _191.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _191.ParamsResponse;
                fromJSON(object: any): _191.ParamsResponse;
                toJSON(message: _191.ParamsResponse): unknown;
                fromPartial(object: Partial<_191.ParamsResponse>): _191.ParamsResponse;
                fromAmino(object: _191.ParamsResponseAmino): _191.ParamsResponse;
                toAmino(message: _191.ParamsResponse): _191.ParamsResponseAmino;
                fromAminoMsg(object: _191.ParamsResponseAminoMsg): _191.ParamsResponse;
                toAminoMsg(message: _191.ParamsResponse): _191.ParamsResponseAminoMsg;
                fromProtoMsg(message: _191.ParamsResponseProtoMsg): _191.ParamsResponse;
                toProto(message: _191.ParamsResponse): Uint8Array;
                toProtoMsg(message: _191.ParamsResponse): _191.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _190.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.Params;
                fromJSON(object: any): _190.Params;
                toJSON(message: _190.Params): unknown;
                fromPartial(object: Partial<_190.Params>): _190.Params;
                fromAmino(object: _190.ParamsAmino): _190.Params;
                toAmino(message: _190.Params): _190.ParamsAmino;
                fromAminoMsg(object: _190.ParamsAminoMsg): _190.Params;
                toAminoMsg(message: _190.Params): _190.ParamsAminoMsg;
                fromProtoMsg(message: _190.ParamsProtoMsg): _190.Params;
                toProto(message: _190.Params): Uint8Array;
                toProtoMsg(message: _190.Params): _190.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _190.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _190.GenesisState;
                fromJSON(object: any): _190.GenesisState;
                toJSON(message: _190.GenesisState): unknown;
                fromPartial(object: Partial<_190.GenesisState>): _190.GenesisState;
                fromAmino(object: _190.GenesisStateAmino): _190.GenesisState;
                toAmino(message: _190.GenesisState): _190.GenesisStateAmino;
                fromAminoMsg(object: _190.GenesisStateAminoMsg): _190.GenesisState;
                toAminoMsg(message: _190.GenesisState): _190.GenesisStateAminoMsg;
                fromProtoMsg(message: _190.GenesisStateProtoMsg): _190.GenesisState;
                toProto(message: _190.GenesisState): Uint8Array;
                toProtoMsg(message: _190.GenesisState): _190.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _413.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                feeTokens(request?: _196.QueryFeeTokensRequest): Promise<_196.QueryFeeTokensResponse>;
                denomSpotPrice(request: _196.QueryDenomSpotPriceRequest): Promise<_196.QueryDenomSpotPriceResponse>;
                denomPoolId(request: _196.QueryDenomPoolIdRequest): Promise<_196.QueryDenomPoolIdResponse>;
                baseDenom(request?: _196.QueryBaseDenomRequest): Promise<_196.QueryBaseDenomResponse>;
            };
            LCDQueryClient: typeof _397.LCDQueryClient;
            QueryFeeTokensRequest: {
                typeUrl: string;
                encode(_: _196.QueryFeeTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryFeeTokensRequest;
                fromJSON(_: any): _196.QueryFeeTokensRequest;
                toJSON(_: _196.QueryFeeTokensRequest): unknown;
                fromPartial(_: Partial<_196.QueryFeeTokensRequest>): _196.QueryFeeTokensRequest;
                fromAmino(_: _196.QueryFeeTokensRequestAmino): _196.QueryFeeTokensRequest;
                toAmino(_: _196.QueryFeeTokensRequest): _196.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _196.QueryFeeTokensRequestAminoMsg): _196.QueryFeeTokensRequest;
                toAminoMsg(message: _196.QueryFeeTokensRequest): _196.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _196.QueryFeeTokensRequestProtoMsg): _196.QueryFeeTokensRequest;
                toProto(message: _196.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _196.QueryFeeTokensRequest): _196.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                encode(message: _196.QueryFeeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryFeeTokensResponse;
                fromJSON(object: any): _196.QueryFeeTokensResponse;
                toJSON(message: _196.QueryFeeTokensResponse): unknown;
                fromPartial(object: Partial<_196.QueryFeeTokensResponse>): _196.QueryFeeTokensResponse;
                fromAmino(object: _196.QueryFeeTokensResponseAmino): _196.QueryFeeTokensResponse;
                toAmino(message: _196.QueryFeeTokensResponse): _196.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _196.QueryFeeTokensResponseAminoMsg): _196.QueryFeeTokensResponse;
                toAminoMsg(message: _196.QueryFeeTokensResponse): _196.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _196.QueryFeeTokensResponseProtoMsg): _196.QueryFeeTokensResponse;
                toProto(message: _196.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _196.QueryFeeTokensResponse): _196.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                encode(message: _196.QueryDenomSpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _196.QueryDenomSpotPriceRequest;
                toJSON(message: _196.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: Partial<_196.QueryDenomSpotPriceRequest>): _196.QueryDenomSpotPriceRequest;
                fromAmino(object: _196.QueryDenomSpotPriceRequestAmino): _196.QueryDenomSpotPriceRequest;
                toAmino(message: _196.QueryDenomSpotPriceRequest): _196.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _196.QueryDenomSpotPriceRequestAminoMsg): _196.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _196.QueryDenomSpotPriceRequest): _196.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _196.QueryDenomSpotPriceRequestProtoMsg): _196.QueryDenomSpotPriceRequest;
                toProto(message: _196.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _196.QueryDenomSpotPriceRequest): _196.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                encode(message: _196.QueryDenomSpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _196.QueryDenomSpotPriceResponse;
                toJSON(message: _196.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: Partial<_196.QueryDenomSpotPriceResponse>): _196.QueryDenomSpotPriceResponse;
                fromAmino(object: _196.QueryDenomSpotPriceResponseAmino): _196.QueryDenomSpotPriceResponse;
                toAmino(message: _196.QueryDenomSpotPriceResponse): _196.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _196.QueryDenomSpotPriceResponseAminoMsg): _196.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _196.QueryDenomSpotPriceResponse): _196.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _196.QueryDenomSpotPriceResponseProtoMsg): _196.QueryDenomSpotPriceResponse;
                toProto(message: _196.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _196.QueryDenomSpotPriceResponse): _196.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                encode(message: _196.QueryDenomPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryDenomPoolIdRequest;
                fromJSON(object: any): _196.QueryDenomPoolIdRequest;
                toJSON(message: _196.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: Partial<_196.QueryDenomPoolIdRequest>): _196.QueryDenomPoolIdRequest;
                fromAmino(object: _196.QueryDenomPoolIdRequestAmino): _196.QueryDenomPoolIdRequest;
                toAmino(message: _196.QueryDenomPoolIdRequest): _196.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _196.QueryDenomPoolIdRequestAminoMsg): _196.QueryDenomPoolIdRequest;
                toAminoMsg(message: _196.QueryDenomPoolIdRequest): _196.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _196.QueryDenomPoolIdRequestProtoMsg): _196.QueryDenomPoolIdRequest;
                toProto(message: _196.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _196.QueryDenomPoolIdRequest): _196.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                encode(message: _196.QueryDenomPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryDenomPoolIdResponse;
                fromJSON(object: any): _196.QueryDenomPoolIdResponse;
                toJSON(message: _196.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: Partial<_196.QueryDenomPoolIdResponse>): _196.QueryDenomPoolIdResponse;
                fromAmino(object: _196.QueryDenomPoolIdResponseAmino): _196.QueryDenomPoolIdResponse;
                toAmino(message: _196.QueryDenomPoolIdResponse): _196.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _196.QueryDenomPoolIdResponseAminoMsg): _196.QueryDenomPoolIdResponse;
                toAminoMsg(message: _196.QueryDenomPoolIdResponse): _196.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _196.QueryDenomPoolIdResponseProtoMsg): _196.QueryDenomPoolIdResponse;
                toProto(message: _196.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _196.QueryDenomPoolIdResponse): _196.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                encode(_: _196.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryBaseDenomRequest;
                fromJSON(_: any): _196.QueryBaseDenomRequest;
                toJSON(_: _196.QueryBaseDenomRequest): unknown;
                fromPartial(_: Partial<_196.QueryBaseDenomRequest>): _196.QueryBaseDenomRequest;
                fromAmino(_: _196.QueryBaseDenomRequestAmino): _196.QueryBaseDenomRequest;
                toAmino(_: _196.QueryBaseDenomRequest): _196.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _196.QueryBaseDenomRequestAminoMsg): _196.QueryBaseDenomRequest;
                toAminoMsg(message: _196.QueryBaseDenomRequest): _196.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _196.QueryBaseDenomRequestProtoMsg): _196.QueryBaseDenomRequest;
                toProto(message: _196.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _196.QueryBaseDenomRequest): _196.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                encode(message: _196.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _196.QueryBaseDenomResponse;
                fromJSON(object: any): _196.QueryBaseDenomResponse;
                toJSON(message: _196.QueryBaseDenomResponse): unknown;
                fromPartial(object: Partial<_196.QueryBaseDenomResponse>): _196.QueryBaseDenomResponse;
                fromAmino(object: _196.QueryBaseDenomResponseAmino): _196.QueryBaseDenomResponse;
                toAmino(message: _196.QueryBaseDenomResponse): _196.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _196.QueryBaseDenomResponseAminoMsg): _196.QueryBaseDenomResponse;
                toAminoMsg(message: _196.QueryBaseDenomResponse): _196.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _196.QueryBaseDenomResponseProtoMsg): _196.QueryBaseDenomResponse;
                toProto(message: _196.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _196.QueryBaseDenomResponse): _196.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                encode(message: _195.UpdateFeeTokenProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _195.UpdateFeeTokenProposal;
                fromJSON(object: any): _195.UpdateFeeTokenProposal;
                toJSON(message: _195.UpdateFeeTokenProposal): unknown;
                fromPartial(object: Partial<_195.UpdateFeeTokenProposal>): _195.UpdateFeeTokenProposal;
                fromAmino(object: _195.UpdateFeeTokenProposalAmino): _195.UpdateFeeTokenProposal;
                toAmino(message: _195.UpdateFeeTokenProposal): _195.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _195.UpdateFeeTokenProposalAminoMsg): _195.UpdateFeeTokenProposal;
                toAminoMsg(message: _195.UpdateFeeTokenProposal): _195.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _195.UpdateFeeTokenProposalProtoMsg): _195.UpdateFeeTokenProposal;
                toProto(message: _195.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _195.UpdateFeeTokenProposal): _195.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _194.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _194.GenesisState;
                fromJSON(object: any): _194.GenesisState;
                toJSON(message: _194.GenesisState): unknown;
                fromPartial(object: Partial<_194.GenesisState>): _194.GenesisState;
                fromAmino(object: _194.GenesisStateAmino): _194.GenesisState;
                toAmino(message: _194.GenesisState): _194.GenesisStateAmino;
                fromAminoMsg(object: _194.GenesisStateAminoMsg): _194.GenesisState;
                toAminoMsg(message: _194.GenesisState): _194.GenesisStateAminoMsg;
                fromProtoMsg(message: _194.GenesisStateProtoMsg): _194.GenesisState;
                toProto(message: _194.GenesisState): Uint8Array;
                toProtoMsg(message: _194.GenesisState): _194.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                encode(message: _193.FeeToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _193.FeeToken;
                fromJSON(object: any): _193.FeeToken;
                toJSON(message: _193.FeeToken): unknown;
                fromPartial(object: Partial<_193.FeeToken>): _193.FeeToken;
                fromAmino(object: _193.FeeTokenAmino): _193.FeeToken;
                toAmino(message: _193.FeeToken): _193.FeeTokenAmino;
                fromAminoMsg(object: _193.FeeTokenAminoMsg): _193.FeeToken;
                toAminoMsg(message: _193.FeeToken): _193.FeeTokenAminoMsg;
                fromProtoMsg(message: _193.FeeTokenProtoMsg): _193.FeeToken;
                toProto(message: _193.FeeToken): Uint8Array;
                toProtoMsg(message: _193.FeeToken): _193.FeeTokenProtoMsg;
            };
        };
    }
    namespace valsetpref {
        const v1beta1: {
            MsgClientImpl: typeof _424.MsgClientImpl;
            QueryClientImpl: typeof _414.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                userValidatorPreferences(request: _197.UserValidatorPreferencesRequest): Promise<_197.UserValidatorPreferencesResponse>;
            };
            LCDQueryClient: typeof _398.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setValidatorSetPreference(value: _199.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegateToValidatorSet(value: _199.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegateFromValidatorSet(value: _199.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    redelegateValidatorSet(value: _199.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegationRewards(value: _199.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setValidatorSetPreference(value: _199.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _199.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _199.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _199.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _199.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _199.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _199.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _199.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _199.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _199.MsgWithdrawDelegationRewards;
                    };
                };
                toJSON: {
                    setValidatorSetPreference(value: _199.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegateToValidatorSet(value: _199.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegateFromValidatorSet(value: _199.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    redelegateValidatorSet(value: _199.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegationRewards(value: _199.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setValidatorSetPreference(value: any): {
                        typeUrl: string;
                        value: _199.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: any): {
                        typeUrl: string;
                        value: _199.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: any): {
                        typeUrl: string;
                        value: _199.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: any): {
                        typeUrl: string;
                        value: _199.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: any): {
                        typeUrl: string;
                        value: _199.MsgWithdrawDelegationRewards;
                    };
                };
                fromPartial: {
                    setValidatorSetPreference(value: _199.MsgSetValidatorSetPreference): {
                        typeUrl: string;
                        value: _199.MsgSetValidatorSetPreference;
                    };
                    delegateToValidatorSet(value: _199.MsgDelegateToValidatorSet): {
                        typeUrl: string;
                        value: _199.MsgDelegateToValidatorSet;
                    };
                    undelegateFromValidatorSet(value: _199.MsgUndelegateFromValidatorSet): {
                        typeUrl: string;
                        value: _199.MsgUndelegateFromValidatorSet;
                    };
                    redelegateValidatorSet(value: _199.MsgRedelegateValidatorSet): {
                        typeUrl: string;
                        value: _199.MsgRedelegateValidatorSet;
                    };
                    withdrawDelegationRewards(value: _199.MsgWithdrawDelegationRewards): {
                        typeUrl: string;
                        value: _199.MsgWithdrawDelegationRewards;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference": {
                    aminoType: string;
                    toAmino: (message: _199.MsgSetValidatorSetPreference) => _199.MsgSetValidatorSetPreferenceAmino;
                    fromAmino: (object: _199.MsgSetValidatorSetPreferenceAmino) => _199.MsgSetValidatorSetPreference;
                };
                "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _199.MsgDelegateToValidatorSet) => _199.MsgDelegateToValidatorSetAmino;
                    fromAmino: (object: _199.MsgDelegateToValidatorSetAmino) => _199.MsgDelegateToValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _199.MsgUndelegateFromValidatorSet) => _199.MsgUndelegateFromValidatorSetAmino;
                    fromAmino: (object: _199.MsgUndelegateFromValidatorSetAmino) => _199.MsgUndelegateFromValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet": {
                    aminoType: string;
                    toAmino: (message: _199.MsgRedelegateValidatorSet) => _199.MsgRedelegateValidatorSetAmino;
                    fromAmino: (object: _199.MsgRedelegateValidatorSetAmino) => _199.MsgRedelegateValidatorSet;
                };
                "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards": {
                    aminoType: string;
                    toAmino: (message: _199.MsgWithdrawDelegationRewards) => _199.MsgWithdrawDelegationRewardsAmino;
                    fromAmino: (object: _199.MsgWithdrawDelegationRewardsAmino) => _199.MsgWithdrawDelegationRewards;
                };
            };
            MsgSetValidatorSetPreference: {
                typeUrl: string;
                encode(message: _199.MsgSetValidatorSetPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgSetValidatorSetPreference;
                fromJSON(object: any): _199.MsgSetValidatorSetPreference;
                toJSON(message: _199.MsgSetValidatorSetPreference): unknown;
                fromPartial(object: Partial<_199.MsgSetValidatorSetPreference>): _199.MsgSetValidatorSetPreference;
                fromAmino(object: _199.MsgSetValidatorSetPreferenceAmino): _199.MsgSetValidatorSetPreference;
                toAmino(message: _199.MsgSetValidatorSetPreference): _199.MsgSetValidatorSetPreferenceAmino;
                fromAminoMsg(object: _199.MsgSetValidatorSetPreferenceAminoMsg): _199.MsgSetValidatorSetPreference;
                toAminoMsg(message: _199.MsgSetValidatorSetPreference): _199.MsgSetValidatorSetPreferenceAminoMsg;
                fromProtoMsg(message: _199.MsgSetValidatorSetPreferenceProtoMsg): _199.MsgSetValidatorSetPreference;
                toProto(message: _199.MsgSetValidatorSetPreference): Uint8Array;
                toProtoMsg(message: _199.MsgSetValidatorSetPreference): _199.MsgSetValidatorSetPreferenceProtoMsg;
            };
            MsgSetValidatorSetPreferenceResponse: {
                typeUrl: string;
                encode(_: _199.MsgSetValidatorSetPreferenceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgSetValidatorSetPreferenceResponse;
                fromJSON(_: any): _199.MsgSetValidatorSetPreferenceResponse;
                toJSON(_: _199.MsgSetValidatorSetPreferenceResponse): unknown;
                fromPartial(_: Partial<_199.MsgSetValidatorSetPreferenceResponse>): _199.MsgSetValidatorSetPreferenceResponse;
                fromAmino(_: _199.MsgSetValidatorSetPreferenceResponseAmino): _199.MsgSetValidatorSetPreferenceResponse;
                toAmino(_: _199.MsgSetValidatorSetPreferenceResponse): _199.MsgSetValidatorSetPreferenceResponseAmino;
                fromAminoMsg(object: _199.MsgSetValidatorSetPreferenceResponseAminoMsg): _199.MsgSetValidatorSetPreferenceResponse;
                toAminoMsg(message: _199.MsgSetValidatorSetPreferenceResponse): _199.MsgSetValidatorSetPreferenceResponseAminoMsg;
                fromProtoMsg(message: _199.MsgSetValidatorSetPreferenceResponseProtoMsg): _199.MsgSetValidatorSetPreferenceResponse;
                toProto(message: _199.MsgSetValidatorSetPreferenceResponse): Uint8Array;
                toProtoMsg(message: _199.MsgSetValidatorSetPreferenceResponse): _199.MsgSetValidatorSetPreferenceResponseProtoMsg;
            };
            MsgDelegateToValidatorSet: {
                typeUrl: string;
                encode(message: _199.MsgDelegateToValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgDelegateToValidatorSet;
                fromJSON(object: any): _199.MsgDelegateToValidatorSet;
                toJSON(message: _199.MsgDelegateToValidatorSet): unknown;
                fromPartial(object: Partial<_199.MsgDelegateToValidatorSet>): _199.MsgDelegateToValidatorSet;
                fromAmino(object: _199.MsgDelegateToValidatorSetAmino): _199.MsgDelegateToValidatorSet;
                toAmino(message: _199.MsgDelegateToValidatorSet): _199.MsgDelegateToValidatorSetAmino;
                fromAminoMsg(object: _199.MsgDelegateToValidatorSetAminoMsg): _199.MsgDelegateToValidatorSet;
                toAminoMsg(message: _199.MsgDelegateToValidatorSet): _199.MsgDelegateToValidatorSetAminoMsg;
                fromProtoMsg(message: _199.MsgDelegateToValidatorSetProtoMsg): _199.MsgDelegateToValidatorSet;
                toProto(message: _199.MsgDelegateToValidatorSet): Uint8Array;
                toProtoMsg(message: _199.MsgDelegateToValidatorSet): _199.MsgDelegateToValidatorSetProtoMsg;
            };
            MsgDelegateToValidatorSetResponse: {
                typeUrl: string;
                encode(_: _199.MsgDelegateToValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgDelegateToValidatorSetResponse;
                fromJSON(_: any): _199.MsgDelegateToValidatorSetResponse;
                toJSON(_: _199.MsgDelegateToValidatorSetResponse): unknown;
                fromPartial(_: Partial<_199.MsgDelegateToValidatorSetResponse>): _199.MsgDelegateToValidatorSetResponse;
                fromAmino(_: _199.MsgDelegateToValidatorSetResponseAmino): _199.MsgDelegateToValidatorSetResponse;
                toAmino(_: _199.MsgDelegateToValidatorSetResponse): _199.MsgDelegateToValidatorSetResponseAmino;
                fromAminoMsg(object: _199.MsgDelegateToValidatorSetResponseAminoMsg): _199.MsgDelegateToValidatorSetResponse;
                toAminoMsg(message: _199.MsgDelegateToValidatorSetResponse): _199.MsgDelegateToValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _199.MsgDelegateToValidatorSetResponseProtoMsg): _199.MsgDelegateToValidatorSetResponse;
                toProto(message: _199.MsgDelegateToValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _199.MsgDelegateToValidatorSetResponse): _199.MsgDelegateToValidatorSetResponseProtoMsg;
            };
            MsgUndelegateFromValidatorSet: {
                typeUrl: string;
                encode(message: _199.MsgUndelegateFromValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgUndelegateFromValidatorSet;
                fromJSON(object: any): _199.MsgUndelegateFromValidatorSet;
                toJSON(message: _199.MsgUndelegateFromValidatorSet): unknown;
                fromPartial(object: Partial<_199.MsgUndelegateFromValidatorSet>): _199.MsgUndelegateFromValidatorSet;
                fromAmino(object: _199.MsgUndelegateFromValidatorSetAmino): _199.MsgUndelegateFromValidatorSet;
                toAmino(message: _199.MsgUndelegateFromValidatorSet): _199.MsgUndelegateFromValidatorSetAmino;
                fromAminoMsg(object: _199.MsgUndelegateFromValidatorSetAminoMsg): _199.MsgUndelegateFromValidatorSet;
                toAminoMsg(message: _199.MsgUndelegateFromValidatorSet): _199.MsgUndelegateFromValidatorSetAminoMsg;
                fromProtoMsg(message: _199.MsgUndelegateFromValidatorSetProtoMsg): _199.MsgUndelegateFromValidatorSet;
                toProto(message: _199.MsgUndelegateFromValidatorSet): Uint8Array;
                toProtoMsg(message: _199.MsgUndelegateFromValidatorSet): _199.MsgUndelegateFromValidatorSetProtoMsg;
            };
            MsgUndelegateFromValidatorSetResponse: {
                typeUrl: string;
                encode(_: _199.MsgUndelegateFromValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgUndelegateFromValidatorSetResponse;
                fromJSON(_: any): _199.MsgUndelegateFromValidatorSetResponse;
                toJSON(_: _199.MsgUndelegateFromValidatorSetResponse): unknown;
                fromPartial(_: Partial<_199.MsgUndelegateFromValidatorSetResponse>): _199.MsgUndelegateFromValidatorSetResponse;
                fromAmino(_: _199.MsgUndelegateFromValidatorSetResponseAmino): _199.MsgUndelegateFromValidatorSetResponse;
                toAmino(_: _199.MsgUndelegateFromValidatorSetResponse): _199.MsgUndelegateFromValidatorSetResponseAmino;
                fromAminoMsg(object: _199.MsgUndelegateFromValidatorSetResponseAminoMsg): _199.MsgUndelegateFromValidatorSetResponse;
                toAminoMsg(message: _199.MsgUndelegateFromValidatorSetResponse): _199.MsgUndelegateFromValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _199.MsgUndelegateFromValidatorSetResponseProtoMsg): _199.MsgUndelegateFromValidatorSetResponse;
                toProto(message: _199.MsgUndelegateFromValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _199.MsgUndelegateFromValidatorSetResponse): _199.MsgUndelegateFromValidatorSetResponseProtoMsg;
            };
            MsgRedelegateValidatorSet: {
                typeUrl: string;
                encode(message: _199.MsgRedelegateValidatorSet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgRedelegateValidatorSet;
                fromJSON(object: any): _199.MsgRedelegateValidatorSet;
                toJSON(message: _199.MsgRedelegateValidatorSet): unknown;
                fromPartial(object: Partial<_199.MsgRedelegateValidatorSet>): _199.MsgRedelegateValidatorSet;
                fromAmino(object: _199.MsgRedelegateValidatorSetAmino): _199.MsgRedelegateValidatorSet;
                toAmino(message: _199.MsgRedelegateValidatorSet): _199.MsgRedelegateValidatorSetAmino;
                fromAminoMsg(object: _199.MsgRedelegateValidatorSetAminoMsg): _199.MsgRedelegateValidatorSet;
                toAminoMsg(message: _199.MsgRedelegateValidatorSet): _199.MsgRedelegateValidatorSetAminoMsg;
                fromProtoMsg(message: _199.MsgRedelegateValidatorSetProtoMsg): _199.MsgRedelegateValidatorSet;
                toProto(message: _199.MsgRedelegateValidatorSet): Uint8Array;
                toProtoMsg(message: _199.MsgRedelegateValidatorSet): _199.MsgRedelegateValidatorSetProtoMsg;
            };
            MsgRedelegateValidatorSetResponse: {
                typeUrl: string;
                encode(_: _199.MsgRedelegateValidatorSetResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgRedelegateValidatorSetResponse;
                fromJSON(_: any): _199.MsgRedelegateValidatorSetResponse;
                toJSON(_: _199.MsgRedelegateValidatorSetResponse): unknown;
                fromPartial(_: Partial<_199.MsgRedelegateValidatorSetResponse>): _199.MsgRedelegateValidatorSetResponse;
                fromAmino(_: _199.MsgRedelegateValidatorSetResponseAmino): _199.MsgRedelegateValidatorSetResponse;
                toAmino(_: _199.MsgRedelegateValidatorSetResponse): _199.MsgRedelegateValidatorSetResponseAmino;
                fromAminoMsg(object: _199.MsgRedelegateValidatorSetResponseAminoMsg): _199.MsgRedelegateValidatorSetResponse;
                toAminoMsg(message: _199.MsgRedelegateValidatorSetResponse): _199.MsgRedelegateValidatorSetResponseAminoMsg;
                fromProtoMsg(message: _199.MsgRedelegateValidatorSetResponseProtoMsg): _199.MsgRedelegateValidatorSetResponse;
                toProto(message: _199.MsgRedelegateValidatorSetResponse): Uint8Array;
                toProtoMsg(message: _199.MsgRedelegateValidatorSetResponse): _199.MsgRedelegateValidatorSetResponseProtoMsg;
            };
            MsgWithdrawDelegationRewards: {
                typeUrl: string;
                encode(message: _199.MsgWithdrawDelegationRewards, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgWithdrawDelegationRewards;
                fromJSON(object: any): _199.MsgWithdrawDelegationRewards;
                toJSON(message: _199.MsgWithdrawDelegationRewards): unknown;
                fromPartial(object: Partial<_199.MsgWithdrawDelegationRewards>): _199.MsgWithdrawDelegationRewards;
                fromAmino(object: _199.MsgWithdrawDelegationRewardsAmino): _199.MsgWithdrawDelegationRewards;
                toAmino(message: _199.MsgWithdrawDelegationRewards): _199.MsgWithdrawDelegationRewardsAmino;
                fromAminoMsg(object: _199.MsgWithdrawDelegationRewardsAminoMsg): _199.MsgWithdrawDelegationRewards;
                toAminoMsg(message: _199.MsgWithdrawDelegationRewards): _199.MsgWithdrawDelegationRewardsAminoMsg;
                fromProtoMsg(message: _199.MsgWithdrawDelegationRewardsProtoMsg): _199.MsgWithdrawDelegationRewards;
                toProto(message: _199.MsgWithdrawDelegationRewards): Uint8Array;
                toProtoMsg(message: _199.MsgWithdrawDelegationRewards): _199.MsgWithdrawDelegationRewardsProtoMsg;
            };
            MsgWithdrawDelegationRewardsResponse: {
                typeUrl: string;
                encode(_: _199.MsgWithdrawDelegationRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _199.MsgWithdrawDelegationRewardsResponse;
                fromJSON(_: any): _199.MsgWithdrawDelegationRewardsResponse;
                toJSON(_: _199.MsgWithdrawDelegationRewardsResponse): unknown;
                fromPartial(_: Partial<_199.MsgWithdrawDelegationRewardsResponse>): _199.MsgWithdrawDelegationRewardsResponse;
                fromAmino(_: _199.MsgWithdrawDelegationRewardsResponseAmino): _199.MsgWithdrawDelegationRewardsResponse;
                toAmino(_: _199.MsgWithdrawDelegationRewardsResponse): _199.MsgWithdrawDelegationRewardsResponseAmino;
                fromAminoMsg(object: _199.MsgWithdrawDelegationRewardsResponseAminoMsg): _199.MsgWithdrawDelegationRewardsResponse;
                toAminoMsg(message: _199.MsgWithdrawDelegationRewardsResponse): _199.MsgWithdrawDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _199.MsgWithdrawDelegationRewardsResponseProtoMsg): _199.MsgWithdrawDelegationRewardsResponse;
                toProto(message: _199.MsgWithdrawDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _199.MsgWithdrawDelegationRewardsResponse): _199.MsgWithdrawDelegationRewardsResponseProtoMsg;
            };
            ValidatorPreference: {
                typeUrl: string;
                encode(message: _198.ValidatorPreference, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.ValidatorPreference;
                fromJSON(object: any): _198.ValidatorPreference;
                toJSON(message: _198.ValidatorPreference): unknown;
                fromPartial(object: Partial<_198.ValidatorPreference>): _198.ValidatorPreference;
                fromAmino(object: _198.ValidatorPreferenceAmino): _198.ValidatorPreference;
                toAmino(message: _198.ValidatorPreference): _198.ValidatorPreferenceAmino;
                fromAminoMsg(object: _198.ValidatorPreferenceAminoMsg): _198.ValidatorPreference;
                toAminoMsg(message: _198.ValidatorPreference): _198.ValidatorPreferenceAminoMsg;
                fromProtoMsg(message: _198.ValidatorPreferenceProtoMsg): _198.ValidatorPreference;
                toProto(message: _198.ValidatorPreference): Uint8Array;
                toProtoMsg(message: _198.ValidatorPreference): _198.ValidatorPreferenceProtoMsg;
            };
            ValidatorSetPreferences: {
                typeUrl: string;
                encode(message: _198.ValidatorSetPreferences, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _198.ValidatorSetPreferences;
                fromJSON(object: any): _198.ValidatorSetPreferences;
                toJSON(message: _198.ValidatorSetPreferences): unknown;
                fromPartial(object: Partial<_198.ValidatorSetPreferences>): _198.ValidatorSetPreferences;
                fromAmino(object: _198.ValidatorSetPreferencesAmino): _198.ValidatorSetPreferences;
                toAmino(message: _198.ValidatorSetPreferences): _198.ValidatorSetPreferencesAmino;
                fromAminoMsg(object: _198.ValidatorSetPreferencesAminoMsg): _198.ValidatorSetPreferences;
                toAminoMsg(message: _198.ValidatorSetPreferences): _198.ValidatorSetPreferencesAminoMsg;
                fromProtoMsg(message: _198.ValidatorSetPreferencesProtoMsg): _198.ValidatorSetPreferences;
                toProto(message: _198.ValidatorSetPreferences): Uint8Array;
                toProtoMsg(message: _198.ValidatorSetPreferences): _198.ValidatorSetPreferencesProtoMsg;
            };
            UserValidatorPreferencesRequest: {
                typeUrl: string;
                encode(message: _197.UserValidatorPreferencesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.UserValidatorPreferencesRequest;
                fromJSON(object: any): _197.UserValidatorPreferencesRequest;
                toJSON(message: _197.UserValidatorPreferencesRequest): unknown;
                fromPartial(object: Partial<_197.UserValidatorPreferencesRequest>): _197.UserValidatorPreferencesRequest;
                fromAmino(object: _197.UserValidatorPreferencesRequestAmino): _197.UserValidatorPreferencesRequest;
                toAmino(message: _197.UserValidatorPreferencesRequest): _197.UserValidatorPreferencesRequestAmino;
                fromAminoMsg(object: _197.UserValidatorPreferencesRequestAminoMsg): _197.UserValidatorPreferencesRequest;
                toAminoMsg(message: _197.UserValidatorPreferencesRequest): _197.UserValidatorPreferencesRequestAminoMsg;
                fromProtoMsg(message: _197.UserValidatorPreferencesRequestProtoMsg): _197.UserValidatorPreferencesRequest;
                toProto(message: _197.UserValidatorPreferencesRequest): Uint8Array;
                toProtoMsg(message: _197.UserValidatorPreferencesRequest): _197.UserValidatorPreferencesRequestProtoMsg;
            };
            UserValidatorPreferencesResponse: {
                typeUrl: string;
                encode(message: _197.UserValidatorPreferencesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _197.UserValidatorPreferencesResponse;
                fromJSON(object: any): _197.UserValidatorPreferencesResponse;
                toJSON(message: _197.UserValidatorPreferencesResponse): unknown;
                fromPartial(object: Partial<_197.UserValidatorPreferencesResponse>): _197.UserValidatorPreferencesResponse;
                fromAmino(object: _197.UserValidatorPreferencesResponseAmino): _197.UserValidatorPreferencesResponse;
                toAmino(message: _197.UserValidatorPreferencesResponse): _197.UserValidatorPreferencesResponseAmino;
                fromAminoMsg(object: _197.UserValidatorPreferencesResponseAminoMsg): _197.UserValidatorPreferencesResponse;
                toAminoMsg(message: _197.UserValidatorPreferencesResponse): _197.UserValidatorPreferencesResponseAminoMsg;
                fromProtoMsg(message: _197.UserValidatorPreferencesResponseProtoMsg): _197.UserValidatorPreferencesResponse;
                toProto(message: _197.UserValidatorPreferencesResponse): Uint8Array;
                toProtoMsg(message: _197.UserValidatorPreferencesResponse): _197.UserValidatorPreferencesResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
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
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                consensus: {
                    v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            osmosis: {
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _415.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _416.MsgClientImpl;
                        };
                    };
                    v1beta1: _417.MsgClientImpl;
                };
                incentives: _418.MsgClientImpl;
                lockup: _419.MsgClientImpl;
                protorev: {
                    v1beta1: _420.MsgClientImpl;
                };
                superfluid: _421.MsgClientImpl;
                swaprouter: {
                    v1beta1: _422.MsgClientImpl;
                };
                tokenfactory: {
                    v1beta1: _423.MsgClientImpl;
                };
                valsetpref: {
                    v1beta1: _424.MsgClientImpl;
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
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
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
                autocli: {
                    v1: {
                        appOptions(request?: import("../cosmos/autocli/v1/query").AppOptionsRequest): Promise<import("../cosmos/autocli/v1/query").AppOptionsResponse>;
                    };
                };
                consensus: {
                    v1: {
                        params(request?: import("../cosmos/consensus/v1/query").QueryParamsRequest): Promise<import("../cosmos/consensus/v1/query").QueryParamsResponse>;
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
            };
            osmosis: {
                downtimedetector: {
                    v1beta1: {
                        recoveredSinceDowntimeOfLength(request: _138.RecoveredSinceDowntimeOfLengthRequest): Promise<_138.RecoveredSinceDowntimeOfLengthResponse>;
                    };
                };
                epochs: {
                    v1beta1: {
                        epochInfos(request?: _140.QueryEpochsInfoRequest): Promise<_140.QueryEpochsInfoResponse>;
                        currentEpoch(request: _140.QueryCurrentEpochRequest): Promise<_140.QueryCurrentEpochResponse>;
                    };
                };
                gamm: {
                    v1beta1: {
                        pools(request?: _143.QueryPoolsRequest): Promise<_143.QueryPoolsResponse>;
                        numPools(request?: _143.QueryNumPoolsRequest): Promise<_143.QueryNumPoolsResponse>;
                        totalLiquidity(request?: _143.QueryTotalLiquidityRequest): Promise<_143.QueryTotalLiquidityResponse>;
                        poolsWithFilter(request: _143.QueryPoolsWithFilterRequest): Promise<_143.QueryPoolsWithFilterResponse>;
                        pool(request: _143.QueryPoolRequest): Promise<_143.QueryPoolResponse>;
                        poolType(request: _143.QueryPoolTypeRequest): Promise<_143.QueryPoolTypeResponse>;
                        calcJoinPoolNoSwapShares(request: _143.QueryCalcJoinPoolNoSwapSharesRequest): Promise<_143.QueryCalcJoinPoolNoSwapSharesResponse>;
                        calcJoinPoolShares(request: _143.QueryCalcJoinPoolSharesRequest): Promise<_143.QueryCalcJoinPoolSharesResponse>;
                        calcExitPoolCoinsFromShares(request: _143.QueryCalcExitPoolCoinsFromSharesRequest): Promise<_143.QueryCalcExitPoolCoinsFromSharesResponse>;
                        poolParams(request: _143.QueryPoolParamsRequest): Promise<_143.QueryPoolParamsResponse>;
                        totalPoolLiquidity(request: _143.QueryTotalPoolLiquidityRequest): Promise<_143.QueryTotalPoolLiquidityResponse>;
                        totalShares(request: _143.QueryTotalSharesRequest): Promise<_143.QueryTotalSharesResponse>;
                        spotPrice(request: _143.QuerySpotPriceRequest): Promise<_143.QuerySpotPriceResponse>;
                        estimateSwapExactAmountIn(request: _143.QuerySwapExactAmountInRequest): Promise<_143.QuerySwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _143.QuerySwapExactAmountOutRequest): Promise<_143.QuerySwapExactAmountOutResponse>;
                    };
                    v2: {
                        spotPrice(request: _148.QuerySpotPriceRequest): Promise<_148.QuerySpotPriceResponse>;
                    };
                };
                ibcratelimit: {
                    v1beta1: {
                        params(request?: _150.QueryParamsRequest): Promise<_150.QueryParamsResponse>;
                    };
                };
                incentives: {
                    moduleToDistributeCoins(request?: _154.ModuleToDistributeCoinsRequest): Promise<_154.ModuleToDistributeCoinsResponse>;
                    gaugeByID(request: _154.GaugeByIDRequest): Promise<_154.GaugeByIDResponse>;
                    gauges(request?: _154.GaugesRequest): Promise<_154.GaugesResponse>;
                    activeGauges(request?: _154.ActiveGaugesRequest): Promise<_154.ActiveGaugesResponse>;
                    activeGaugesPerDenom(request: _154.ActiveGaugesPerDenomRequest): Promise<_154.ActiveGaugesPerDenomResponse>;
                    upcomingGauges(request?: _154.UpcomingGaugesRequest): Promise<_154.UpcomingGaugesResponse>;
                    upcomingGaugesPerDenom(request: _154.UpcomingGaugesPerDenomRequest): Promise<_154.UpcomingGaugesPerDenomResponse>;
                    rewardsEst(request: _154.RewardsEstRequest): Promise<_154.RewardsEstResponse>;
                    lockableDurations(request?: _154.QueryLockableDurationsRequest): Promise<_154.QueryLockableDurationsResponse>;
                };
                lockup: {
                    moduleBalance(request?: _159.ModuleBalanceRequest): Promise<_159.ModuleBalanceResponse>;
                    moduleLockedAmount(request?: _159.ModuleLockedAmountRequest): Promise<_159.ModuleLockedAmountResponse>;
                    accountUnlockableCoins(request: _159.AccountUnlockableCoinsRequest): Promise<_159.AccountUnlockableCoinsResponse>;
                    accountUnlockingCoins(request: _159.AccountUnlockingCoinsRequest): Promise<_159.AccountUnlockingCoinsResponse>;
                    accountLockedCoins(request: _159.AccountLockedCoinsRequest): Promise<_159.AccountLockedCoinsResponse>;
                    accountLockedPastTime(request: _159.AccountLockedPastTimeRequest): Promise<_159.AccountLockedPastTimeResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _159.AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<_159.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountUnlockedBeforeTime(request: _159.AccountUnlockedBeforeTimeRequest): Promise<_159.AccountUnlockedBeforeTimeResponse>;
                    accountLockedPastTimeDenom(request: _159.AccountLockedPastTimeDenomRequest): Promise<_159.AccountLockedPastTimeDenomResponse>;
                    lockedDenom(request: _159.LockedDenomRequest): Promise<_159.LockedDenomResponse>;
                    lockedByID(request: _159.LockedRequest): Promise<_159.LockedResponse>;
                    syntheticLockupsByLockupID(request: _159.SyntheticLockupsByLockupIDRequest): Promise<_159.SyntheticLockupsByLockupIDResponse>;
                    accountLockedLongerDuration(request: _159.AccountLockedLongerDurationRequest): Promise<_159.AccountLockedLongerDurationResponse>;
                    accountLockedDuration(request: _159.AccountLockedDurationRequest): Promise<_159.AccountLockedDurationResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _159.AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<_159.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationDenom(request: _159.AccountLockedLongerDurationDenomRequest): Promise<_159.AccountLockedLongerDurationDenomResponse>;
                    params(request?: _159.QueryParamsRequest): Promise<_159.QueryParamsResponse>;
                };
                mint: {
                    v1beta1: {
                        params(request?: _163.QueryParamsRequest): Promise<_163.QueryParamsResponse>;
                        epochProvisions(request?: _163.QueryEpochProvisionsRequest): Promise<_163.QueryEpochProvisionsResponse>;
                    };
                };
                poolincentives: {
                    v1beta1: {
                        gaugeIds(request: _167.QueryGaugeIdsRequest): Promise<_167.QueryGaugeIdsResponse>;
                        distrInfo(request?: _167.QueryDistrInfoRequest): Promise<_167.QueryDistrInfoResponse>;
                        params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                        lockableDurations(request?: _167.QueryLockableDurationsRequest): Promise<_167.QueryLockableDurationsResponse>;
                        incentivizedPools(request?: _167.QueryIncentivizedPoolsRequest): Promise<_167.QueryIncentivizedPoolsResponse>;
                        externalIncentiveGauges(request?: _167.QueryExternalIncentiveGaugesRequest): Promise<_167.QueryExternalIncentiveGaugesResponse>;
                    };
                };
                protorev: {
                    v1beta1: {
                        params(request?: _172.QueryParamsRequest): Promise<_172.QueryParamsResponse>;
                        getProtoRevNumberOfTrades(request?: _172.QueryGetProtoRevNumberOfTradesRequest): Promise<_172.QueryGetProtoRevNumberOfTradesResponse>;
                        getProtoRevProfitsByDenom(request: _172.QueryGetProtoRevProfitsByDenomRequest): Promise<_172.QueryGetProtoRevProfitsByDenomResponse>;
                        getProtoRevAllProfits(request?: _172.QueryGetProtoRevAllProfitsRequest): Promise<_172.QueryGetProtoRevAllProfitsResponse>;
                        getProtoRevStatisticsByPool(request: _172.QueryGetProtoRevStatisticsByPoolRequest): Promise<_172.QueryGetProtoRevStatisticsByPoolResponse>;
                        getProtoRevAllStatistics(request?: _172.QueryGetProtoRevAllStatisticsRequest): Promise<_172.QueryGetProtoRevAllStatisticsResponse>;
                        getProtoRevTokenPairArbRoutes(request?: _172.QueryGetProtoRevTokenPairArbRoutesRequest): Promise<_172.QueryGetProtoRevTokenPairArbRoutesResponse>;
                    };
                };
                superfluid: {
                    params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                    assetType(request: _177.AssetTypeRequest): Promise<_177.AssetTypeResponse>;
                    allAssets(request?: _177.AllAssetsRequest): Promise<_177.AllAssetsResponse>;
                    assetMultiplier(request: _177.AssetMultiplierRequest): Promise<_177.AssetMultiplierResponse>;
                    allIntermediaryAccounts(request?: _177.AllIntermediaryAccountsRequest): Promise<_177.AllIntermediaryAccountsResponse>;
                    connectedIntermediaryAccount(request: _177.ConnectedIntermediaryAccountRequest): Promise<_177.ConnectedIntermediaryAccountResponse>;
                    totalDelegationByValidatorForDenom(request: _177.QueryTotalDelegationByValidatorForDenomRequest): Promise<_177.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalSuperfluidDelegations(request?: _177.TotalSuperfluidDelegationsRequest): Promise<_177.TotalSuperfluidDelegationsResponse>;
                    superfluidDelegationAmount(request: _177.SuperfluidDelegationAmountRequest): Promise<_177.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationsByDelegator(request: _177.SuperfluidDelegationsByDelegatorRequest): Promise<_177.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _177.SuperfluidUndelegationsByDelegatorRequest): Promise<_177.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidDelegationsByValidatorDenom(request: _177.SuperfluidDelegationsByValidatorDenomRequest): Promise<_177.SuperfluidDelegationsByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _177.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<_177.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    totalDelegationByDelegator(request: _177.QueryTotalDelegationByDelegatorRequest): Promise<_177.QueryTotalDelegationByDelegatorResponse>;
                    unpoolWhitelist(request?: _177.QueryUnpoolWhitelistRequest): Promise<_177.QueryUnpoolWhitelistResponse>;
                };
                swaprouter: {
                    v1beta1: {
                        params(request?: _182.ParamsRequest): Promise<_182.ParamsResponse>;
                        estimateSwapExactAmountIn(request: _182.EstimateSwapExactAmountInRequest): Promise<_182.EstimateSwapExactAmountInResponse>;
                        estimateSwapExactAmountOut(request: _182.EstimateSwapExactAmountOutRequest): Promise<_182.EstimateSwapExactAmountOutResponse>;
                        numPools(request?: _182.NumPoolsRequest): Promise<_182.NumPoolsResponse>;
                    };
                };
                tokenfactory: {
                    v1beta1: {
                        params(request?: _188.QueryParamsRequest): Promise<_188.QueryParamsResponse>;
                        denomAuthorityMetadata(request: _188.QueryDenomAuthorityMetadataRequest): Promise<_188.QueryDenomAuthorityMetadataResponse>;
                        denomsFromCreator(request: _188.QueryDenomsFromCreatorRequest): Promise<_188.QueryDenomsFromCreatorResponse>;
                    };
                };
                twap: {
                    v1beta1: {
                        params(request?: _191.ParamsRequest): Promise<_191.ParamsResponse>;
                        arithmeticTwap(request: _191.ArithmeticTwapRequest): Promise<_191.ArithmeticTwapResponse>;
                        arithmeticTwapToNow(request: _191.ArithmeticTwapToNowRequest): Promise<_191.ArithmeticTwapToNowResponse>;
                    };
                };
                txfees: {
                    v1beta1: {
                        feeTokens(request?: _196.QueryFeeTokensRequest): Promise<_196.QueryFeeTokensResponse>;
                        denomSpotPrice(request: _196.QueryDenomSpotPriceRequest): Promise<_196.QueryDenomSpotPriceResponse>;
                        denomPoolId(request: _196.QueryDenomPoolIdRequest): Promise<_196.QueryDenomPoolIdResponse>;
                        baseDenom(request?: _196.QueryBaseDenomRequest): Promise<_196.QueryBaseDenomResponse>;
                    };
                };
                valsetpref: {
                    v1beta1: {
                        userValidatorPreferences(request: _197.UserValidatorPreferencesRequest): Promise<_197.UserValidatorPreferencesResponse>;
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
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
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
                consensus: {
                    v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
                };
            };
            osmosis: {
                downtimedetector: {
                    v1beta1: _383.LCDQueryClient;
                };
                epochs: {
                    v1beta1: _384.LCDQueryClient;
                };
                gamm: {
                    v1beta1: _385.LCDQueryClient;
                    v2: _386.LCDQueryClient;
                };
                ibcratelimit: {
                    v1beta1: _387.LCDQueryClient;
                };
                incentives: _388.LCDQueryClient;
                lockup: _389.LCDQueryClient;
                mint: {
                    v1beta1: _390.LCDQueryClient;
                };
                poolincentives: {
                    v1beta1: _391.LCDQueryClient;
                };
                protorev: {
                    v1beta1: _392.LCDQueryClient;
                };
                superfluid: _393.LCDQueryClient;
                swaprouter: {
                    v1beta1: _394.LCDQueryClient;
                };
                tokenfactory: {
                    v1beta1: _395.LCDQueryClient;
                };
                twap: {
                    v1beta1: _396.LCDQueryClient;
                };
                txfees: {
                    v1beta1: _397.LCDQueryClient;
                };
                valsetpref: {
                    v1beta1: _398.LCDQueryClient;
                };
            };
        }>;
    };
}
