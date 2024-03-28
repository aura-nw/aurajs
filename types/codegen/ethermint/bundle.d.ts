import * as _0 from "./crypto/v1/ethsecp256k1/keys";
import * as _1 from "./evm/v1/events";
import * as _2 from "./evm/v1/evm";
import * as _3 from "./evm/v1/genesis";
import * as _4 from "./evm/v1/query";
import * as _5 from "./evm/v1/tx";
import * as _6 from "./feemarket/v1/events";
import * as _7 from "./feemarket/v1/feemarket";
import * as _8 from "./feemarket/v1/genesis";
import * as _9 from "./feemarket/v1/query";
import * as _10 from "./feemarket/v1/tx";
import * as _11 from "./types/v1/account";
import * as _12 from "./types/v1/dynamic_fee";
import * as _13 from "./types/v1/indexer";
import * as _14 from "./types/v1/web3";
import * as _257 from "./evm/v1/query.lcd";
import * as _258 from "./feemarket/v1/query.lcd";
import * as _259 from "./evm/v1/query.rpc.Query";
import * as _260 from "./feemarket/v1/query.rpc.Query";
import * as _261 from "./evm/v1/tx.rpc.msg";
import * as _262 from "./feemarket/v1/tx.rpc.msg";
export declare namespace ethermint {
    namespace crypto {
        namespace v1 {
            const ethsecp256k1: {
                PubKey: {
                    typeUrl: string;
                    encode(message: _0.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PubKey;
                    fromJSON(object: any): _0.PubKey;
                    toJSON(message: _0.PubKey): unknown;
                    fromPartial(object: Partial<_0.PubKey>): _0.PubKey;
                    fromAmino(object: _0.PubKeyAmino): _0.PubKey;
                    toAmino(message: _0.PubKey): _0.PubKeyAmino;
                    fromAminoMsg(object: _0.PubKeyAminoMsg): _0.PubKey;
                    fromProtoMsg(message: _0.PubKeyProtoMsg): _0.PubKey;
                    toProto(message: _0.PubKey): Uint8Array;
                    toProtoMsg(message: _0.PubKey): _0.PubKeyProtoMsg;
                };
                PrivKey: {
                    typeUrl: string;
                    encode(message: _0.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.PrivKey;
                    fromJSON(object: any): _0.PrivKey;
                    toJSON(message: _0.PrivKey): unknown;
                    fromPartial(object: Partial<_0.PrivKey>): _0.PrivKey;
                    fromAmino(object: _0.PrivKeyAmino): _0.PrivKey;
                    toAmino(message: _0.PrivKey): _0.PrivKeyAmino;
                    fromAminoMsg(object: _0.PrivKeyAminoMsg): _0.PrivKey;
                    fromProtoMsg(message: _0.PrivKeyProtoMsg): _0.PrivKey;
                    toProto(message: _0.PrivKey): Uint8Array;
                    toProtoMsg(message: _0.PrivKey): _0.PrivKeyProtoMsg;
                };
            };
        }
    }
    namespace evm {
        const v1: {
            MsgClientImpl: typeof _261.MsgClientImpl;
            QueryClientImpl: typeof _259.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                cosmosAccount(request: _4.QueryCosmosAccountRequest): Promise<_4.QueryCosmosAccountResponse>;
                validatorAccount(request: _4.QueryValidatorAccountRequest): Promise<_4.QueryValidatorAccountResponse>;
                balance(request: _4.QueryBalanceRequest): Promise<_4.QueryBalanceResponse>;
                storage(request: _4.QueryStorageRequest): Promise<_4.QueryStorageResponse>;
                code(request: _4.QueryCodeRequest): Promise<_4.QueryCodeResponse>;
                params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                ethCall(request: _4.EthCallRequest): Promise<_5.MsgEthereumTxResponse>;
                estimateGas(request: _4.EthCallRequest): Promise<_4.EstimateGasResponse>;
                traceTx(request: _4.QueryTraceTxRequest): Promise<_4.QueryTraceTxResponse>;
                traceBlock(request: _4.QueryTraceBlockRequest): Promise<_4.QueryTraceBlockResponse>;
                baseFee(request?: _4.QueryBaseFeeRequest): Promise<_4.QueryBaseFeeResponse>;
            };
            LCDQueryClient: typeof _257.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    ethereumTx(value: _5.MsgEthereumTx): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    ethereumTx(value: _5.MsgEthereumTx): {
                        typeUrl: string;
                        value: _5.MsgEthereumTx;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
                toJSON: {
                    ethereumTx(value: _5.MsgEthereumTx): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    ethereumTx(value: any): {
                        typeUrl: string;
                        value: _5.MsgEthereumTx;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    ethereumTx(value: _5.MsgEthereumTx): {
                        typeUrl: string;
                        value: _5.MsgEthereumTx;
                    };
                    updateParams(value: _5.MsgUpdateParams): {
                        typeUrl: string;
                        value: _5.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.evm.v1.MsgEthereumTx": {
                    aminoType: string;
                    toAmino: (message: _5.MsgEthereumTx) => _5.MsgEthereumTxAmino;
                    fromAmino: (object: _5.MsgEthereumTxAmino) => _5.MsgEthereumTx;
                };
                "/ethermint.evm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _5.MsgUpdateParams) => _5.MsgUpdateParamsAmino;
                    fromAmino: (object: _5.MsgUpdateParamsAmino) => _5.MsgUpdateParams;
                };
            };
            MsgEthereumTx: {
                typeUrl: string;
                encode(message: _5.MsgEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgEthereumTx;
                fromJSON(object: any): _5.MsgEthereumTx;
                toJSON(message: _5.MsgEthereumTx): unknown;
                fromPartial(object: Partial<_5.MsgEthereumTx>): _5.MsgEthereumTx;
                fromAmino(object: _5.MsgEthereumTxAmino): _5.MsgEthereumTx;
                toAmino(message: _5.MsgEthereumTx): _5.MsgEthereumTxAmino;
                fromAminoMsg(object: _5.MsgEthereumTxAminoMsg): _5.MsgEthereumTx;
                fromProtoMsg(message: _5.MsgEthereumTxProtoMsg): _5.MsgEthereumTx;
                toProto(message: _5.MsgEthereumTx): Uint8Array;
                toProtoMsg(message: _5.MsgEthereumTx): _5.MsgEthereumTxProtoMsg;
            };
            LegacyTx: {
                typeUrl: string;
                encode(message: _5.LegacyTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.LegacyTx;
                fromJSON(object: any): _5.LegacyTx;
                toJSON(message: _5.LegacyTx): unknown;
                fromPartial(object: Partial<_5.LegacyTx>): _5.LegacyTx;
                fromAmino(object: _5.LegacyTxAmino): _5.LegacyTx;
                toAmino(message: _5.LegacyTx): _5.LegacyTxAmino;
                fromAminoMsg(object: _5.LegacyTxAminoMsg): _5.LegacyTx;
                fromProtoMsg(message: _5.LegacyTxProtoMsg): _5.LegacyTx;
                toProto(message: _5.LegacyTx): Uint8Array;
                toProtoMsg(message: _5.LegacyTx): _5.LegacyTxProtoMsg;
            };
            AccessListTx: {
                typeUrl: string;
                encode(message: _5.AccessListTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.AccessListTx;
                fromJSON(object: any): _5.AccessListTx;
                toJSON(message: _5.AccessListTx): unknown;
                fromPartial(object: Partial<_5.AccessListTx>): _5.AccessListTx;
                fromAmino(object: _5.AccessListTxAmino): _5.AccessListTx;
                toAmino(message: _5.AccessListTx): _5.AccessListTxAmino;
                fromAminoMsg(object: _5.AccessListTxAminoMsg): _5.AccessListTx;
                fromProtoMsg(message: _5.AccessListTxProtoMsg): _5.AccessListTx;
                toProto(message: _5.AccessListTx): Uint8Array;
                toProtoMsg(message: _5.AccessListTx): _5.AccessListTxProtoMsg;
            };
            DynamicFeeTx: {
                typeUrl: string;
                encode(message: _5.DynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.DynamicFeeTx;
                fromJSON(object: any): _5.DynamicFeeTx;
                toJSON(message: _5.DynamicFeeTx): unknown;
                fromPartial(object: Partial<_5.DynamicFeeTx>): _5.DynamicFeeTx;
                fromAmino(object: _5.DynamicFeeTxAmino): _5.DynamicFeeTx;
                toAmino(message: _5.DynamicFeeTx): _5.DynamicFeeTxAmino;
                fromAminoMsg(object: _5.DynamicFeeTxAminoMsg): _5.DynamicFeeTx;
                fromProtoMsg(message: _5.DynamicFeeTxProtoMsg): _5.DynamicFeeTx;
                toProto(message: _5.DynamicFeeTx): Uint8Array;
                toProtoMsg(message: _5.DynamicFeeTx): _5.DynamicFeeTxProtoMsg;
            };
            ExtensionOptionsEthereumTx: {
                typeUrl: string;
                encode(_: _5.ExtensionOptionsEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.ExtensionOptionsEthereumTx;
                fromJSON(_: any): _5.ExtensionOptionsEthereumTx;
                toJSON(_: _5.ExtensionOptionsEthereumTx): unknown;
                fromPartial(_: Partial<_5.ExtensionOptionsEthereumTx>): _5.ExtensionOptionsEthereumTx;
                fromAmino(_: _5.ExtensionOptionsEthereumTxAmino): _5.ExtensionOptionsEthereumTx;
                toAmino(_: _5.ExtensionOptionsEthereumTx): _5.ExtensionOptionsEthereumTxAmino;
                fromAminoMsg(object: _5.ExtensionOptionsEthereumTxAminoMsg): _5.ExtensionOptionsEthereumTx;
                fromProtoMsg(message: _5.ExtensionOptionsEthereumTxProtoMsg): _5.ExtensionOptionsEthereumTx;
                toProto(message: _5.ExtensionOptionsEthereumTx): Uint8Array;
                toProtoMsg(message: _5.ExtensionOptionsEthereumTx): _5.ExtensionOptionsEthereumTxProtoMsg;
            };
            MsgEthereumTxResponse: {
                typeUrl: string;
                encode(message: _5.MsgEthereumTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgEthereumTxResponse;
                fromJSON(object: any): _5.MsgEthereumTxResponse;
                toJSON(message: _5.MsgEthereumTxResponse): unknown;
                fromPartial(object: Partial<_5.MsgEthereumTxResponse>): _5.MsgEthereumTxResponse;
                fromAmino(object: _5.MsgEthereumTxResponseAmino): _5.MsgEthereumTxResponse;
                toAmino(message: _5.MsgEthereumTxResponse): _5.MsgEthereumTxResponseAmino;
                fromAminoMsg(object: _5.MsgEthereumTxResponseAminoMsg): _5.MsgEthereumTxResponse;
                fromProtoMsg(message: _5.MsgEthereumTxResponseProtoMsg): _5.MsgEthereumTxResponse;
                toProto(message: _5.MsgEthereumTxResponse): Uint8Array;
                toProtoMsg(message: _5.MsgEthereumTxResponse): _5.MsgEthereumTxResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _5.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateParams;
                fromJSON(object: any): _5.MsgUpdateParams;
                toJSON(message: _5.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_5.MsgUpdateParams>): _5.MsgUpdateParams;
                fromAmino(object: _5.MsgUpdateParamsAmino): _5.MsgUpdateParams;
                toAmino(message: _5.MsgUpdateParams): _5.MsgUpdateParamsAmino;
                fromAminoMsg(object: _5.MsgUpdateParamsAminoMsg): _5.MsgUpdateParams;
                fromProtoMsg(message: _5.MsgUpdateParamsProtoMsg): _5.MsgUpdateParams;
                toProto(message: _5.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateParams): _5.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _5.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.MsgUpdateParamsResponse;
                fromJSON(_: any): _5.MsgUpdateParamsResponse;
                toJSON(_: _5.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_5.MsgUpdateParamsResponse>): _5.MsgUpdateParamsResponse;
                fromAmino(_: _5.MsgUpdateParamsResponseAmino): _5.MsgUpdateParamsResponse;
                toAmino(_: _5.MsgUpdateParamsResponse): _5.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _5.MsgUpdateParamsResponseAminoMsg): _5.MsgUpdateParamsResponse;
                fromProtoMsg(message: _5.MsgUpdateParamsResponseProtoMsg): _5.MsgUpdateParamsResponse;
                toProto(message: _5.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _5.MsgUpdateParamsResponse): _5.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _4.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountRequest;
                fromJSON(object: any): _4.QueryAccountRequest;
                toJSON(message: _4.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_4.QueryAccountRequest>): _4.QueryAccountRequest;
                fromAmino(object: _4.QueryAccountRequestAmino): _4.QueryAccountRequest;
                toAmino(message: _4.QueryAccountRequest): _4.QueryAccountRequestAmino;
                fromAminoMsg(object: _4.QueryAccountRequestAminoMsg): _4.QueryAccountRequest;
                fromProtoMsg(message: _4.QueryAccountRequestProtoMsg): _4.QueryAccountRequest;
                toProto(message: _4.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _4.QueryAccountRequest): _4.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _4.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryAccountResponse;
                fromJSON(object: any): _4.QueryAccountResponse;
                toJSON(message: _4.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_4.QueryAccountResponse>): _4.QueryAccountResponse;
                fromAmino(object: _4.QueryAccountResponseAmino): _4.QueryAccountResponse;
                toAmino(message: _4.QueryAccountResponse): _4.QueryAccountResponseAmino;
                fromAminoMsg(object: _4.QueryAccountResponseAminoMsg): _4.QueryAccountResponse;
                fromProtoMsg(message: _4.QueryAccountResponseProtoMsg): _4.QueryAccountResponse;
                toProto(message: _4.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _4.QueryAccountResponse): _4.QueryAccountResponseProtoMsg;
            };
            QueryCosmosAccountRequest: {
                typeUrl: string;
                encode(message: _4.QueryCosmosAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryCosmosAccountRequest;
                fromJSON(object: any): _4.QueryCosmosAccountRequest;
                toJSON(message: _4.QueryCosmosAccountRequest): unknown;
                fromPartial(object: Partial<_4.QueryCosmosAccountRequest>): _4.QueryCosmosAccountRequest;
                fromAmino(object: _4.QueryCosmosAccountRequestAmino): _4.QueryCosmosAccountRequest;
                toAmino(message: _4.QueryCosmosAccountRequest): _4.QueryCosmosAccountRequestAmino;
                fromAminoMsg(object: _4.QueryCosmosAccountRequestAminoMsg): _4.QueryCosmosAccountRequest;
                fromProtoMsg(message: _4.QueryCosmosAccountRequestProtoMsg): _4.QueryCosmosAccountRequest;
                toProto(message: _4.QueryCosmosAccountRequest): Uint8Array;
                toProtoMsg(message: _4.QueryCosmosAccountRequest): _4.QueryCosmosAccountRequestProtoMsg;
            };
            QueryCosmosAccountResponse: {
                typeUrl: string;
                encode(message: _4.QueryCosmosAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryCosmosAccountResponse;
                fromJSON(object: any): _4.QueryCosmosAccountResponse;
                toJSON(message: _4.QueryCosmosAccountResponse): unknown;
                fromPartial(object: Partial<_4.QueryCosmosAccountResponse>): _4.QueryCosmosAccountResponse;
                fromAmino(object: _4.QueryCosmosAccountResponseAmino): _4.QueryCosmosAccountResponse;
                toAmino(message: _4.QueryCosmosAccountResponse): _4.QueryCosmosAccountResponseAmino;
                fromAminoMsg(object: _4.QueryCosmosAccountResponseAminoMsg): _4.QueryCosmosAccountResponse;
                fromProtoMsg(message: _4.QueryCosmosAccountResponseProtoMsg): _4.QueryCosmosAccountResponse;
                toProto(message: _4.QueryCosmosAccountResponse): Uint8Array;
                toProtoMsg(message: _4.QueryCosmosAccountResponse): _4.QueryCosmosAccountResponseProtoMsg;
            };
            QueryValidatorAccountRequest: {
                typeUrl: string;
                encode(message: _4.QueryValidatorAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryValidatorAccountRequest;
                fromJSON(object: any): _4.QueryValidatorAccountRequest;
                toJSON(message: _4.QueryValidatorAccountRequest): unknown;
                fromPartial(object: Partial<_4.QueryValidatorAccountRequest>): _4.QueryValidatorAccountRequest;
                fromAmino(object: _4.QueryValidatorAccountRequestAmino): _4.QueryValidatorAccountRequest;
                toAmino(message: _4.QueryValidatorAccountRequest): _4.QueryValidatorAccountRequestAmino;
                fromAminoMsg(object: _4.QueryValidatorAccountRequestAminoMsg): _4.QueryValidatorAccountRequest;
                fromProtoMsg(message: _4.QueryValidatorAccountRequestProtoMsg): _4.QueryValidatorAccountRequest;
                toProto(message: _4.QueryValidatorAccountRequest): Uint8Array;
                toProtoMsg(message: _4.QueryValidatorAccountRequest): _4.QueryValidatorAccountRequestProtoMsg;
            };
            QueryValidatorAccountResponse: {
                typeUrl: string;
                encode(message: _4.QueryValidatorAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryValidatorAccountResponse;
                fromJSON(object: any): _4.QueryValidatorAccountResponse;
                toJSON(message: _4.QueryValidatorAccountResponse): unknown;
                fromPartial(object: Partial<_4.QueryValidatorAccountResponse>): _4.QueryValidatorAccountResponse;
                fromAmino(object: _4.QueryValidatorAccountResponseAmino): _4.QueryValidatorAccountResponse;
                toAmino(message: _4.QueryValidatorAccountResponse): _4.QueryValidatorAccountResponseAmino;
                fromAminoMsg(object: _4.QueryValidatorAccountResponseAminoMsg): _4.QueryValidatorAccountResponse;
                fromProtoMsg(message: _4.QueryValidatorAccountResponseProtoMsg): _4.QueryValidatorAccountResponse;
                toProto(message: _4.QueryValidatorAccountResponse): Uint8Array;
                toProtoMsg(message: _4.QueryValidatorAccountResponse): _4.QueryValidatorAccountResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _4.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryBalanceRequest;
                fromJSON(object: any): _4.QueryBalanceRequest;
                toJSON(message: _4.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_4.QueryBalanceRequest>): _4.QueryBalanceRequest;
                fromAmino(object: _4.QueryBalanceRequestAmino): _4.QueryBalanceRequest;
                toAmino(message: _4.QueryBalanceRequest): _4.QueryBalanceRequestAmino;
                fromAminoMsg(object: _4.QueryBalanceRequestAminoMsg): _4.QueryBalanceRequest;
                fromProtoMsg(message: _4.QueryBalanceRequestProtoMsg): _4.QueryBalanceRequest;
                toProto(message: _4.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _4.QueryBalanceRequest): _4.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _4.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryBalanceResponse;
                fromJSON(object: any): _4.QueryBalanceResponse;
                toJSON(message: _4.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_4.QueryBalanceResponse>): _4.QueryBalanceResponse;
                fromAmino(object: _4.QueryBalanceResponseAmino): _4.QueryBalanceResponse;
                toAmino(message: _4.QueryBalanceResponse): _4.QueryBalanceResponseAmino;
                fromAminoMsg(object: _4.QueryBalanceResponseAminoMsg): _4.QueryBalanceResponse;
                fromProtoMsg(message: _4.QueryBalanceResponseProtoMsg): _4.QueryBalanceResponse;
                toProto(message: _4.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _4.QueryBalanceResponse): _4.QueryBalanceResponseProtoMsg;
            };
            QueryStorageRequest: {
                typeUrl: string;
                encode(message: _4.QueryStorageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryStorageRequest;
                fromJSON(object: any): _4.QueryStorageRequest;
                toJSON(message: _4.QueryStorageRequest): unknown;
                fromPartial(object: Partial<_4.QueryStorageRequest>): _4.QueryStorageRequest;
                fromAmino(object: _4.QueryStorageRequestAmino): _4.QueryStorageRequest;
                toAmino(message: _4.QueryStorageRequest): _4.QueryStorageRequestAmino;
                fromAminoMsg(object: _4.QueryStorageRequestAminoMsg): _4.QueryStorageRequest;
                fromProtoMsg(message: _4.QueryStorageRequestProtoMsg): _4.QueryStorageRequest;
                toProto(message: _4.QueryStorageRequest): Uint8Array;
                toProtoMsg(message: _4.QueryStorageRequest): _4.QueryStorageRequestProtoMsg;
            };
            QueryStorageResponse: {
                typeUrl: string;
                encode(message: _4.QueryStorageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryStorageResponse;
                fromJSON(object: any): _4.QueryStorageResponse;
                toJSON(message: _4.QueryStorageResponse): unknown;
                fromPartial(object: Partial<_4.QueryStorageResponse>): _4.QueryStorageResponse;
                fromAmino(object: _4.QueryStorageResponseAmino): _4.QueryStorageResponse;
                toAmino(message: _4.QueryStorageResponse): _4.QueryStorageResponseAmino;
                fromAminoMsg(object: _4.QueryStorageResponseAminoMsg): _4.QueryStorageResponse;
                fromProtoMsg(message: _4.QueryStorageResponseProtoMsg): _4.QueryStorageResponse;
                toProto(message: _4.QueryStorageResponse): Uint8Array;
                toProtoMsg(message: _4.QueryStorageResponse): _4.QueryStorageResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _4.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryCodeRequest;
                fromJSON(object: any): _4.QueryCodeRequest;
                toJSON(message: _4.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_4.QueryCodeRequest>): _4.QueryCodeRequest;
                fromAmino(object: _4.QueryCodeRequestAmino): _4.QueryCodeRequest;
                toAmino(message: _4.QueryCodeRequest): _4.QueryCodeRequestAmino;
                fromAminoMsg(object: _4.QueryCodeRequestAminoMsg): _4.QueryCodeRequest;
                fromProtoMsg(message: _4.QueryCodeRequestProtoMsg): _4.QueryCodeRequest;
                toProto(message: _4.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _4.QueryCodeRequest): _4.QueryCodeRequestProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _4.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryCodeResponse;
                fromJSON(object: any): _4.QueryCodeResponse;
                toJSON(message: _4.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_4.QueryCodeResponse>): _4.QueryCodeResponse;
                fromAmino(object: _4.QueryCodeResponseAmino): _4.QueryCodeResponse;
                toAmino(message: _4.QueryCodeResponse): _4.QueryCodeResponseAmino;
                fromAminoMsg(object: _4.QueryCodeResponseAminoMsg): _4.QueryCodeResponse;
                fromProtoMsg(message: _4.QueryCodeResponseProtoMsg): _4.QueryCodeResponse;
                toProto(message: _4.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _4.QueryCodeResponse): _4.QueryCodeResponseProtoMsg;
            };
            QueryTxLogsRequest: {
                typeUrl: string;
                encode(message: _4.QueryTxLogsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTxLogsRequest;
                fromJSON(object: any): _4.QueryTxLogsRequest;
                toJSON(message: _4.QueryTxLogsRequest): unknown;
                fromPartial(object: Partial<_4.QueryTxLogsRequest>): _4.QueryTxLogsRequest;
                fromAmino(object: _4.QueryTxLogsRequestAmino): _4.QueryTxLogsRequest;
                toAmino(message: _4.QueryTxLogsRequest): _4.QueryTxLogsRequestAmino;
                fromAminoMsg(object: _4.QueryTxLogsRequestAminoMsg): _4.QueryTxLogsRequest;
                fromProtoMsg(message: _4.QueryTxLogsRequestProtoMsg): _4.QueryTxLogsRequest;
                toProto(message: _4.QueryTxLogsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryTxLogsRequest): _4.QueryTxLogsRequestProtoMsg;
            };
            QueryTxLogsResponse: {
                typeUrl: string;
                encode(message: _4.QueryTxLogsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTxLogsResponse;
                fromJSON(object: any): _4.QueryTxLogsResponse;
                toJSON(message: _4.QueryTxLogsResponse): unknown;
                fromPartial(object: Partial<_4.QueryTxLogsResponse>): _4.QueryTxLogsResponse;
                fromAmino(object: _4.QueryTxLogsResponseAmino): _4.QueryTxLogsResponse;
                toAmino(message: _4.QueryTxLogsResponse): _4.QueryTxLogsResponseAmino;
                fromAminoMsg(object: _4.QueryTxLogsResponseAminoMsg): _4.QueryTxLogsResponse;
                fromProtoMsg(message: _4.QueryTxLogsResponseProtoMsg): _4.QueryTxLogsResponse;
                toProto(message: _4.QueryTxLogsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryTxLogsResponse): _4.QueryTxLogsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _4.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsRequest;
                fromJSON(_: any): _4.QueryParamsRequest;
                toJSON(_: _4.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_4.QueryParamsRequest>): _4.QueryParamsRequest;
                fromAmino(_: _4.QueryParamsRequestAmino): _4.QueryParamsRequest;
                toAmino(_: _4.QueryParamsRequest): _4.QueryParamsRequestAmino;
                fromAminoMsg(object: _4.QueryParamsRequestAminoMsg): _4.QueryParamsRequest;
                fromProtoMsg(message: _4.QueryParamsRequestProtoMsg): _4.QueryParamsRequest;
                toProto(message: _4.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _4.QueryParamsRequest): _4.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _4.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryParamsResponse;
                fromJSON(object: any): _4.QueryParamsResponse;
                toJSON(message: _4.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_4.QueryParamsResponse>): _4.QueryParamsResponse;
                fromAmino(object: _4.QueryParamsResponseAmino): _4.QueryParamsResponse;
                toAmino(message: _4.QueryParamsResponse): _4.QueryParamsResponseAmino;
                fromAminoMsg(object: _4.QueryParamsResponseAminoMsg): _4.QueryParamsResponse;
                fromProtoMsg(message: _4.QueryParamsResponseProtoMsg): _4.QueryParamsResponse;
                toProto(message: _4.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _4.QueryParamsResponse): _4.QueryParamsResponseProtoMsg;
            };
            EthCallRequest: {
                typeUrl: string;
                encode(message: _4.EthCallRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EthCallRequest;
                fromJSON(object: any): _4.EthCallRequest;
                toJSON(message: _4.EthCallRequest): unknown;
                fromPartial(object: Partial<_4.EthCallRequest>): _4.EthCallRequest;
                fromAmino(object: _4.EthCallRequestAmino): _4.EthCallRequest;
                toAmino(message: _4.EthCallRequest): _4.EthCallRequestAmino;
                fromAminoMsg(object: _4.EthCallRequestAminoMsg): _4.EthCallRequest;
                fromProtoMsg(message: _4.EthCallRequestProtoMsg): _4.EthCallRequest;
                toProto(message: _4.EthCallRequest): Uint8Array;
                toProtoMsg(message: _4.EthCallRequest): _4.EthCallRequestProtoMsg;
            };
            EstimateGasResponse: {
                typeUrl: string;
                encode(message: _4.EstimateGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EstimateGasResponse;
                fromJSON(object: any): _4.EstimateGasResponse;
                toJSON(message: _4.EstimateGasResponse): unknown;
                fromPartial(object: Partial<_4.EstimateGasResponse>): _4.EstimateGasResponse;
                fromAmino(object: _4.EstimateGasResponseAmino): _4.EstimateGasResponse;
                toAmino(message: _4.EstimateGasResponse): _4.EstimateGasResponseAmino;
                fromAminoMsg(object: _4.EstimateGasResponseAminoMsg): _4.EstimateGasResponse;
                fromProtoMsg(message: _4.EstimateGasResponseProtoMsg): _4.EstimateGasResponse;
                toProto(message: _4.EstimateGasResponse): Uint8Array;
                toProtoMsg(message: _4.EstimateGasResponse): _4.EstimateGasResponseProtoMsg;
            };
            QueryTraceTxRequest: {
                typeUrl: string;
                encode(message: _4.QueryTraceTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTraceTxRequest;
                fromJSON(object: any): _4.QueryTraceTxRequest;
                toJSON(message: _4.QueryTraceTxRequest): unknown;
                fromPartial(object: Partial<_4.QueryTraceTxRequest>): _4.QueryTraceTxRequest;
                fromAmino(object: _4.QueryTraceTxRequestAmino): _4.QueryTraceTxRequest;
                toAmino(message: _4.QueryTraceTxRequest): _4.QueryTraceTxRequestAmino;
                fromAminoMsg(object: _4.QueryTraceTxRequestAminoMsg): _4.QueryTraceTxRequest;
                fromProtoMsg(message: _4.QueryTraceTxRequestProtoMsg): _4.QueryTraceTxRequest;
                toProto(message: _4.QueryTraceTxRequest): Uint8Array;
                toProtoMsg(message: _4.QueryTraceTxRequest): _4.QueryTraceTxRequestProtoMsg;
            };
            QueryTraceTxResponse: {
                typeUrl: string;
                encode(message: _4.QueryTraceTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTraceTxResponse;
                fromJSON(object: any): _4.QueryTraceTxResponse;
                toJSON(message: _4.QueryTraceTxResponse): unknown;
                fromPartial(object: Partial<_4.QueryTraceTxResponse>): _4.QueryTraceTxResponse;
                fromAmino(object: _4.QueryTraceTxResponseAmino): _4.QueryTraceTxResponse;
                toAmino(message: _4.QueryTraceTxResponse): _4.QueryTraceTxResponseAmino;
                fromAminoMsg(object: _4.QueryTraceTxResponseAminoMsg): _4.QueryTraceTxResponse;
                fromProtoMsg(message: _4.QueryTraceTxResponseProtoMsg): _4.QueryTraceTxResponse;
                toProto(message: _4.QueryTraceTxResponse): Uint8Array;
                toProtoMsg(message: _4.QueryTraceTxResponse): _4.QueryTraceTxResponseProtoMsg;
            };
            QueryTraceBlockRequest: {
                typeUrl: string;
                encode(message: _4.QueryTraceBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTraceBlockRequest;
                fromJSON(object: any): _4.QueryTraceBlockRequest;
                toJSON(message: _4.QueryTraceBlockRequest): unknown;
                fromPartial(object: Partial<_4.QueryTraceBlockRequest>): _4.QueryTraceBlockRequest;
                fromAmino(object: _4.QueryTraceBlockRequestAmino): _4.QueryTraceBlockRequest;
                toAmino(message: _4.QueryTraceBlockRequest): _4.QueryTraceBlockRequestAmino;
                fromAminoMsg(object: _4.QueryTraceBlockRequestAminoMsg): _4.QueryTraceBlockRequest;
                fromProtoMsg(message: _4.QueryTraceBlockRequestProtoMsg): _4.QueryTraceBlockRequest;
                toProto(message: _4.QueryTraceBlockRequest): Uint8Array;
                toProtoMsg(message: _4.QueryTraceBlockRequest): _4.QueryTraceBlockRequestProtoMsg;
            };
            QueryTraceBlockResponse: {
                typeUrl: string;
                encode(message: _4.QueryTraceBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryTraceBlockResponse;
                fromJSON(object: any): _4.QueryTraceBlockResponse;
                toJSON(message: _4.QueryTraceBlockResponse): unknown;
                fromPartial(object: Partial<_4.QueryTraceBlockResponse>): _4.QueryTraceBlockResponse;
                fromAmino(object: _4.QueryTraceBlockResponseAmino): _4.QueryTraceBlockResponse;
                toAmino(message: _4.QueryTraceBlockResponse): _4.QueryTraceBlockResponseAmino;
                fromAminoMsg(object: _4.QueryTraceBlockResponseAminoMsg): _4.QueryTraceBlockResponse;
                fromProtoMsg(message: _4.QueryTraceBlockResponseProtoMsg): _4.QueryTraceBlockResponse;
                toProto(message: _4.QueryTraceBlockResponse): Uint8Array;
                toProtoMsg(message: _4.QueryTraceBlockResponse): _4.QueryTraceBlockResponseProtoMsg;
            };
            QueryBaseFeeRequest: {
                typeUrl: string;
                encode(_: _4.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryBaseFeeRequest;
                fromJSON(_: any): _4.QueryBaseFeeRequest;
                toJSON(_: _4.QueryBaseFeeRequest): unknown;
                fromPartial(_: Partial<_4.QueryBaseFeeRequest>): _4.QueryBaseFeeRequest;
                fromAmino(_: _4.QueryBaseFeeRequestAmino): _4.QueryBaseFeeRequest;
                toAmino(_: _4.QueryBaseFeeRequest): _4.QueryBaseFeeRequestAmino;
                fromAminoMsg(object: _4.QueryBaseFeeRequestAminoMsg): _4.QueryBaseFeeRequest;
                fromProtoMsg(message: _4.QueryBaseFeeRequestProtoMsg): _4.QueryBaseFeeRequest;
                toProto(message: _4.QueryBaseFeeRequest): Uint8Array;
                toProtoMsg(message: _4.QueryBaseFeeRequest): _4.QueryBaseFeeRequestProtoMsg;
            };
            QueryBaseFeeResponse: {
                typeUrl: string;
                encode(message: _4.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryBaseFeeResponse;
                fromJSON(object: any): _4.QueryBaseFeeResponse;
                toJSON(message: _4.QueryBaseFeeResponse): unknown;
                fromPartial(object: Partial<_4.QueryBaseFeeResponse>): _4.QueryBaseFeeResponse;
                fromAmino(object: _4.QueryBaseFeeResponseAmino): _4.QueryBaseFeeResponse;
                toAmino(message: _4.QueryBaseFeeResponse): _4.QueryBaseFeeResponseAmino;
                fromAminoMsg(object: _4.QueryBaseFeeResponseAminoMsg): _4.QueryBaseFeeResponse;
                fromProtoMsg(message: _4.QueryBaseFeeResponseProtoMsg): _4.QueryBaseFeeResponse;
                toProto(message: _4.QueryBaseFeeResponse): Uint8Array;
                toProtoMsg(message: _4.QueryBaseFeeResponse): _4.QueryBaseFeeResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _3.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisState;
                fromJSON(object: any): _3.GenesisState;
                toJSON(message: _3.GenesisState): unknown;
                fromPartial(object: Partial<_3.GenesisState>): _3.GenesisState;
                fromAmino(object: _3.GenesisStateAmino): _3.GenesisState;
                toAmino(message: _3.GenesisState): _3.GenesisStateAmino;
                fromAminoMsg(object: _3.GenesisStateAminoMsg): _3.GenesisState;
                fromProtoMsg(message: _3.GenesisStateProtoMsg): _3.GenesisState;
                toProto(message: _3.GenesisState): Uint8Array;
                toProtoMsg(message: _3.GenesisState): _3.GenesisStateProtoMsg;
            };
            GenesisAccount: {
                typeUrl: string;
                encode(message: _3.GenesisAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenesisAccount;
                fromJSON(object: any): _3.GenesisAccount;
                toJSON(message: _3.GenesisAccount): unknown;
                fromPartial(object: Partial<_3.GenesisAccount>): _3.GenesisAccount;
                fromAmino(object: _3.GenesisAccountAmino): _3.GenesisAccount;
                toAmino(message: _3.GenesisAccount): _3.GenesisAccountAmino;
                fromAminoMsg(object: _3.GenesisAccountAminoMsg): _3.GenesisAccount;
                fromProtoMsg(message: _3.GenesisAccountProtoMsg): _3.GenesisAccount;
                toProto(message: _3.GenesisAccount): Uint8Array;
                toProtoMsg(message: _3.GenesisAccount): _3.GenesisAccountProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _2.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Params;
                fromJSON(object: any): _2.Params;
                toJSON(message: _2.Params): unknown;
                fromPartial(object: Partial<_2.Params>): _2.Params;
                fromAmino(object: _2.ParamsAmino): _2.Params;
                toAmino(message: _2.Params): _2.ParamsAmino;
                fromAminoMsg(object: _2.ParamsAminoMsg): _2.Params;
                fromProtoMsg(message: _2.ParamsProtoMsg): _2.Params;
                toProto(message: _2.Params): Uint8Array;
                toProtoMsg(message: _2.Params): _2.ParamsProtoMsg;
            };
            ChainConfig: {
                typeUrl: string;
                encode(message: _2.ChainConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.ChainConfig;
                fromJSON(object: any): _2.ChainConfig;
                toJSON(message: _2.ChainConfig): unknown;
                fromPartial(object: Partial<_2.ChainConfig>): _2.ChainConfig;
                fromAmino(object: _2.ChainConfigAmino): _2.ChainConfig;
                toAmino(message: _2.ChainConfig): _2.ChainConfigAmino;
                fromAminoMsg(object: _2.ChainConfigAminoMsg): _2.ChainConfig;
                fromProtoMsg(message: _2.ChainConfigProtoMsg): _2.ChainConfig;
                toProto(message: _2.ChainConfig): Uint8Array;
                toProtoMsg(message: _2.ChainConfig): _2.ChainConfigProtoMsg;
            };
            State: {
                typeUrl: string;
                encode(message: _2.State, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.State;
                fromJSON(object: any): _2.State;
                toJSON(message: _2.State): unknown;
                fromPartial(object: Partial<_2.State>): _2.State;
                fromAmino(object: _2.StateAmino): _2.State;
                toAmino(message: _2.State): _2.StateAmino;
                fromAminoMsg(object: _2.StateAminoMsg): _2.State;
                fromProtoMsg(message: _2.StateProtoMsg): _2.State;
                toProto(message: _2.State): Uint8Array;
                toProtoMsg(message: _2.State): _2.StateProtoMsg;
            };
            TransactionLogs: {
                typeUrl: string;
                encode(message: _2.TransactionLogs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.TransactionLogs;
                fromJSON(object: any): _2.TransactionLogs;
                toJSON(message: _2.TransactionLogs): unknown;
                fromPartial(object: Partial<_2.TransactionLogs>): _2.TransactionLogs;
                fromAmino(object: _2.TransactionLogsAmino): _2.TransactionLogs;
                toAmino(message: _2.TransactionLogs): _2.TransactionLogsAmino;
                fromAminoMsg(object: _2.TransactionLogsAminoMsg): _2.TransactionLogs;
                fromProtoMsg(message: _2.TransactionLogsProtoMsg): _2.TransactionLogs;
                toProto(message: _2.TransactionLogs): Uint8Array;
                toProtoMsg(message: _2.TransactionLogs): _2.TransactionLogsProtoMsg;
            };
            Log: {
                typeUrl: string;
                encode(message: _2.Log, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Log;
                fromJSON(object: any): _2.Log;
                toJSON(message: _2.Log): unknown;
                fromPartial(object: Partial<_2.Log>): _2.Log;
                fromAmino(object: _2.LogAmino): _2.Log;
                toAmino(message: _2.Log): _2.LogAmino;
                fromAminoMsg(object: _2.LogAminoMsg): _2.Log;
                fromProtoMsg(message: _2.LogProtoMsg): _2.Log;
                toProto(message: _2.Log): Uint8Array;
                toProtoMsg(message: _2.Log): _2.LogProtoMsg;
            };
            TxResult: {
                typeUrl: string;
                encode(message: _2.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.TxResult;
                fromJSON(object: any): _2.TxResult;
                toJSON(message: _2.TxResult): unknown;
                fromPartial(object: Partial<_2.TxResult>): _2.TxResult;
                fromAmino(object: _2.TxResultAmino): _2.TxResult;
                toAmino(message: _2.TxResult): _2.TxResultAmino;
                fromAminoMsg(object: _2.TxResultAminoMsg): _2.TxResult;
                fromProtoMsg(message: _2.TxResultProtoMsg): _2.TxResult;
                toProto(message: _2.TxResult): Uint8Array;
                toProtoMsg(message: _2.TxResult): _2.TxResultProtoMsg;
            };
            AccessTuple: {
                typeUrl: string;
                encode(message: _2.AccessTuple, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.AccessTuple;
                fromJSON(object: any): _2.AccessTuple;
                toJSON(message: _2.AccessTuple): unknown;
                fromPartial(object: Partial<_2.AccessTuple>): _2.AccessTuple;
                fromAmino(object: _2.AccessTupleAmino): _2.AccessTuple;
                toAmino(message: _2.AccessTuple): _2.AccessTupleAmino;
                fromAminoMsg(object: _2.AccessTupleAminoMsg): _2.AccessTuple;
                fromProtoMsg(message: _2.AccessTupleProtoMsg): _2.AccessTuple;
                toProto(message: _2.AccessTuple): Uint8Array;
                toProtoMsg(message: _2.AccessTuple): _2.AccessTupleProtoMsg;
            };
            TraceConfig: {
                typeUrl: string;
                encode(message: _2.TraceConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.TraceConfig;
                fromJSON(object: any): _2.TraceConfig;
                toJSON(message: _2.TraceConfig): unknown;
                fromPartial(object: Partial<_2.TraceConfig>): _2.TraceConfig;
                fromAmino(object: _2.TraceConfigAmino): _2.TraceConfig;
                toAmino(message: _2.TraceConfig): _2.TraceConfigAmino;
                fromAminoMsg(object: _2.TraceConfigAminoMsg): _2.TraceConfig;
                fromProtoMsg(message: _2.TraceConfigProtoMsg): _2.TraceConfig;
                toProto(message: _2.TraceConfig): Uint8Array;
                toProtoMsg(message: _2.TraceConfig): _2.TraceConfigProtoMsg;
            };
            EventEthereumTx: {
                typeUrl: string;
                encode(message: _1.EventEthereumTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.EventEthereumTx;
                fromJSON(object: any): _1.EventEthereumTx;
                toJSON(message: _1.EventEthereumTx): unknown;
                fromPartial(object: Partial<_1.EventEthereumTx>): _1.EventEthereumTx;
                fromAmino(object: _1.EventEthereumTxAmino): _1.EventEthereumTx;
                toAmino(message: _1.EventEthereumTx): _1.EventEthereumTxAmino;
                fromAminoMsg(object: _1.EventEthereumTxAminoMsg): _1.EventEthereumTx;
                fromProtoMsg(message: _1.EventEthereumTxProtoMsg): _1.EventEthereumTx;
                toProto(message: _1.EventEthereumTx): Uint8Array;
                toProtoMsg(message: _1.EventEthereumTx): _1.EventEthereumTxProtoMsg;
            };
            EventTxLog: {
                typeUrl: string;
                encode(message: _1.EventTxLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.EventTxLog;
                fromJSON(object: any): _1.EventTxLog;
                toJSON(message: _1.EventTxLog): unknown;
                fromPartial(object: Partial<_1.EventTxLog>): _1.EventTxLog;
                fromAmino(object: _1.EventTxLogAmino): _1.EventTxLog;
                toAmino(message: _1.EventTxLog): _1.EventTxLogAmino;
                fromAminoMsg(object: _1.EventTxLogAminoMsg): _1.EventTxLog;
                fromProtoMsg(message: _1.EventTxLogProtoMsg): _1.EventTxLog;
                toProto(message: _1.EventTxLog): Uint8Array;
                toProtoMsg(message: _1.EventTxLog): _1.EventTxLogProtoMsg;
            };
            EventMessage: {
                typeUrl: string;
                encode(message: _1.EventMessage, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.EventMessage;
                fromJSON(object: any): _1.EventMessage;
                toJSON(message: _1.EventMessage): unknown;
                fromPartial(object: Partial<_1.EventMessage>): _1.EventMessage;
                fromAmino(object: _1.EventMessageAmino): _1.EventMessage;
                toAmino(message: _1.EventMessage): _1.EventMessageAmino;
                fromAminoMsg(object: _1.EventMessageAminoMsg): _1.EventMessage;
                fromProtoMsg(message: _1.EventMessageProtoMsg): _1.EventMessage;
                toProto(message: _1.EventMessage): Uint8Array;
                toProtoMsg(message: _1.EventMessage): _1.EventMessageProtoMsg;
            };
            EventBlockBloom: {
                typeUrl: string;
                encode(message: _1.EventBlockBloom, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.EventBlockBloom;
                fromJSON(object: any): _1.EventBlockBloom;
                toJSON(message: _1.EventBlockBloom): unknown;
                fromPartial(object: Partial<_1.EventBlockBloom>): _1.EventBlockBloom;
                fromAmino(object: _1.EventBlockBloomAmino): _1.EventBlockBloom;
                toAmino(message: _1.EventBlockBloom): _1.EventBlockBloomAmino;
                fromAminoMsg(object: _1.EventBlockBloomAminoMsg): _1.EventBlockBloom;
                fromProtoMsg(message: _1.EventBlockBloomProtoMsg): _1.EventBlockBloom;
                toProto(message: _1.EventBlockBloom): Uint8Array;
                toProtoMsg(message: _1.EventBlockBloom): _1.EventBlockBloomProtoMsg;
            };
        };
    }
    namespace feemarket {
        const v1: {
            MsgClientImpl: typeof _262.MsgClientImpl;
            QueryClientImpl: typeof _260.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                baseFee(request?: _9.QueryBaseFeeRequest): Promise<_9.QueryBaseFeeResponse>;
                blockGas(request?: _9.QueryBlockGasRequest): Promise<_9.QueryBlockGasResponse>;
            };
            LCDQueryClient: typeof _258.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _10.MsgUpdateParams): {
                        typeUrl: string;
                        value: _10.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/ethermint.feemarket.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _10.MsgUpdateParams) => _10.MsgUpdateParamsAmino;
                    fromAmino: (object: _10.MsgUpdateParamsAmino) => _10.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _10.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateParams;
                fromJSON(object: any): _10.MsgUpdateParams;
                toJSON(message: _10.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_10.MsgUpdateParams>): _10.MsgUpdateParams;
                fromAmino(object: _10.MsgUpdateParamsAmino): _10.MsgUpdateParams;
                toAmino(message: _10.MsgUpdateParams): _10.MsgUpdateParamsAmino;
                fromAminoMsg(object: _10.MsgUpdateParamsAminoMsg): _10.MsgUpdateParams;
                fromProtoMsg(message: _10.MsgUpdateParamsProtoMsg): _10.MsgUpdateParams;
                toProto(message: _10.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _10.MsgUpdateParams): _10.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _10.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.MsgUpdateParamsResponse;
                fromJSON(_: any): _10.MsgUpdateParamsResponse;
                toJSON(_: _10.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_10.MsgUpdateParamsResponse>): _10.MsgUpdateParamsResponse;
                fromAmino(_: _10.MsgUpdateParamsResponseAmino): _10.MsgUpdateParamsResponse;
                toAmino(_: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _10.MsgUpdateParamsResponseAminoMsg): _10.MsgUpdateParamsResponse;
                fromProtoMsg(message: _10.MsgUpdateParamsResponseProtoMsg): _10.MsgUpdateParamsResponse;
                toProto(message: _10.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _10.MsgUpdateParamsResponse): _10.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _9.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsRequest;
                fromJSON(_: any): _9.QueryParamsRequest;
                toJSON(_: _9.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_9.QueryParamsRequest>): _9.QueryParamsRequest;
                fromAmino(_: _9.QueryParamsRequestAmino): _9.QueryParamsRequest;
                toAmino(_: _9.QueryParamsRequest): _9.QueryParamsRequestAmino;
                fromAminoMsg(object: _9.QueryParamsRequestAminoMsg): _9.QueryParamsRequest;
                fromProtoMsg(message: _9.QueryParamsRequestProtoMsg): _9.QueryParamsRequest;
                toProto(message: _9.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _9.QueryParamsRequest): _9.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _9.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryParamsResponse;
                fromJSON(object: any): _9.QueryParamsResponse;
                toJSON(message: _9.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_9.QueryParamsResponse>): _9.QueryParamsResponse;
                fromAmino(object: _9.QueryParamsResponseAmino): _9.QueryParamsResponse;
                toAmino(message: _9.QueryParamsResponse): _9.QueryParamsResponseAmino;
                fromAminoMsg(object: _9.QueryParamsResponseAminoMsg): _9.QueryParamsResponse;
                fromProtoMsg(message: _9.QueryParamsResponseProtoMsg): _9.QueryParamsResponse;
                toProto(message: _9.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _9.QueryParamsResponse): _9.QueryParamsResponseProtoMsg;
            };
            QueryBaseFeeRequest: {
                typeUrl: string;
                encode(_: _9.QueryBaseFeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBaseFeeRequest;
                fromJSON(_: any): _9.QueryBaseFeeRequest;
                toJSON(_: _9.QueryBaseFeeRequest): unknown;
                fromPartial(_: Partial<_9.QueryBaseFeeRequest>): _9.QueryBaseFeeRequest;
                fromAmino(_: _9.QueryBaseFeeRequestAmino): _9.QueryBaseFeeRequest;
                toAmino(_: _9.QueryBaseFeeRequest): _9.QueryBaseFeeRequestAmino;
                fromAminoMsg(object: _9.QueryBaseFeeRequestAminoMsg): _9.QueryBaseFeeRequest;
                fromProtoMsg(message: _9.QueryBaseFeeRequestProtoMsg): _9.QueryBaseFeeRequest;
                toProto(message: _9.QueryBaseFeeRequest): Uint8Array;
                toProtoMsg(message: _9.QueryBaseFeeRequest): _9.QueryBaseFeeRequestProtoMsg;
            };
            QueryBaseFeeResponse: {
                typeUrl: string;
                encode(message: _9.QueryBaseFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBaseFeeResponse;
                fromJSON(object: any): _9.QueryBaseFeeResponse;
                toJSON(message: _9.QueryBaseFeeResponse): unknown;
                fromPartial(object: Partial<_9.QueryBaseFeeResponse>): _9.QueryBaseFeeResponse;
                fromAmino(object: _9.QueryBaseFeeResponseAmino): _9.QueryBaseFeeResponse;
                toAmino(message: _9.QueryBaseFeeResponse): _9.QueryBaseFeeResponseAmino;
                fromAminoMsg(object: _9.QueryBaseFeeResponseAminoMsg): _9.QueryBaseFeeResponse;
                fromProtoMsg(message: _9.QueryBaseFeeResponseProtoMsg): _9.QueryBaseFeeResponse;
                toProto(message: _9.QueryBaseFeeResponse): Uint8Array;
                toProtoMsg(message: _9.QueryBaseFeeResponse): _9.QueryBaseFeeResponseProtoMsg;
            };
            QueryBlockGasRequest: {
                typeUrl: string;
                encode(_: _9.QueryBlockGasRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBlockGasRequest;
                fromJSON(_: any): _9.QueryBlockGasRequest;
                toJSON(_: _9.QueryBlockGasRequest): unknown;
                fromPartial(_: Partial<_9.QueryBlockGasRequest>): _9.QueryBlockGasRequest;
                fromAmino(_: _9.QueryBlockGasRequestAmino): _9.QueryBlockGasRequest;
                toAmino(_: _9.QueryBlockGasRequest): _9.QueryBlockGasRequestAmino;
                fromAminoMsg(object: _9.QueryBlockGasRequestAminoMsg): _9.QueryBlockGasRequest;
                fromProtoMsg(message: _9.QueryBlockGasRequestProtoMsg): _9.QueryBlockGasRequest;
                toProto(message: _9.QueryBlockGasRequest): Uint8Array;
                toProtoMsg(message: _9.QueryBlockGasRequest): _9.QueryBlockGasRequestProtoMsg;
            };
            QueryBlockGasResponse: {
                typeUrl: string;
                encode(message: _9.QueryBlockGasResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.QueryBlockGasResponse;
                fromJSON(object: any): _9.QueryBlockGasResponse;
                toJSON(message: _9.QueryBlockGasResponse): unknown;
                fromPartial(object: Partial<_9.QueryBlockGasResponse>): _9.QueryBlockGasResponse;
                fromAmino(object: _9.QueryBlockGasResponseAmino): _9.QueryBlockGasResponse;
                toAmino(message: _9.QueryBlockGasResponse): _9.QueryBlockGasResponseAmino;
                fromAminoMsg(object: _9.QueryBlockGasResponseAminoMsg): _9.QueryBlockGasResponse;
                fromProtoMsg(message: _9.QueryBlockGasResponseProtoMsg): _9.QueryBlockGasResponse;
                toProto(message: _9.QueryBlockGasResponse): Uint8Array;
                toProtoMsg(message: _9.QueryBlockGasResponse): _9.QueryBlockGasResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _8.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.GenesisState;
                fromJSON(object: any): _8.GenesisState;
                toJSON(message: _8.GenesisState): unknown;
                fromPartial(object: Partial<_8.GenesisState>): _8.GenesisState;
                fromAmino(object: _8.GenesisStateAmino): _8.GenesisState;
                toAmino(message: _8.GenesisState): _8.GenesisStateAmino;
                fromAminoMsg(object: _8.GenesisStateAminoMsg): _8.GenesisState;
                fromProtoMsg(message: _8.GenesisStateProtoMsg): _8.GenesisState;
                toProto(message: _8.GenesisState): Uint8Array;
                toProtoMsg(message: _8.GenesisState): _8.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _7.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Params;
                fromJSON(object: any): _7.Params;
                toJSON(message: _7.Params): unknown;
                fromPartial(object: Partial<_7.Params>): _7.Params;
                fromAmino(object: _7.ParamsAmino): _7.Params;
                toAmino(message: _7.Params): _7.ParamsAmino;
                fromAminoMsg(object: _7.ParamsAminoMsg): _7.Params;
                fromProtoMsg(message: _7.ParamsProtoMsg): _7.Params;
                toProto(message: _7.Params): Uint8Array;
                toProtoMsg(message: _7.Params): _7.ParamsProtoMsg;
            };
            EventFeeMarket: {
                typeUrl: string;
                encode(message: _6.EventFeeMarket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventFeeMarket;
                fromJSON(object: any): _6.EventFeeMarket;
                toJSON(message: _6.EventFeeMarket): unknown;
                fromPartial(object: Partial<_6.EventFeeMarket>): _6.EventFeeMarket;
                fromAmino(object: _6.EventFeeMarketAmino): _6.EventFeeMarket;
                toAmino(message: _6.EventFeeMarket): _6.EventFeeMarketAmino;
                fromAminoMsg(object: _6.EventFeeMarketAminoMsg): _6.EventFeeMarket;
                fromProtoMsg(message: _6.EventFeeMarketProtoMsg): _6.EventFeeMarket;
                toProto(message: _6.EventFeeMarket): Uint8Array;
                toProtoMsg(message: _6.EventFeeMarket): _6.EventFeeMarketProtoMsg;
            };
            EventBlockGas: {
                typeUrl: string;
                encode(message: _6.EventBlockGas, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.EventBlockGas;
                fromJSON(object: any): _6.EventBlockGas;
                toJSON(message: _6.EventBlockGas): unknown;
                fromPartial(object: Partial<_6.EventBlockGas>): _6.EventBlockGas;
                fromAmino(object: _6.EventBlockGasAmino): _6.EventBlockGas;
                toAmino(message: _6.EventBlockGas): _6.EventBlockGasAmino;
                fromAminoMsg(object: _6.EventBlockGasAminoMsg): _6.EventBlockGas;
                fromProtoMsg(message: _6.EventBlockGasProtoMsg): _6.EventBlockGas;
                toProto(message: _6.EventBlockGas): Uint8Array;
                toProtoMsg(message: _6.EventBlockGas): _6.EventBlockGasProtoMsg;
            };
        };
    }
    namespace types {
        const v1: {
            ExtensionOptionsWeb3Tx: {
                typeUrl: string;
                encode(message: _14.ExtensionOptionsWeb3Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.ExtensionOptionsWeb3Tx;
                fromJSON(object: any): _14.ExtensionOptionsWeb3Tx;
                toJSON(message: _14.ExtensionOptionsWeb3Tx): unknown;
                fromPartial(object: Partial<_14.ExtensionOptionsWeb3Tx>): _14.ExtensionOptionsWeb3Tx;
                fromAmino(object: _14.ExtensionOptionsWeb3TxAmino): _14.ExtensionOptionsWeb3Tx;
                toAmino(message: _14.ExtensionOptionsWeb3Tx): _14.ExtensionOptionsWeb3TxAmino;
                fromAminoMsg(object: _14.ExtensionOptionsWeb3TxAminoMsg): _14.ExtensionOptionsWeb3Tx;
                fromProtoMsg(message: _14.ExtensionOptionsWeb3TxProtoMsg): _14.ExtensionOptionsWeb3Tx;
                toProto(message: _14.ExtensionOptionsWeb3Tx): Uint8Array;
                toProtoMsg(message: _14.ExtensionOptionsWeb3Tx): _14.ExtensionOptionsWeb3TxProtoMsg;
            };
            TxResult: {
                typeUrl: string;
                encode(message: _13.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxResult;
                fromJSON(object: any): _13.TxResult;
                toJSON(message: _13.TxResult): unknown;
                fromPartial(object: Partial<_13.TxResult>): _13.TxResult;
                fromAmino(object: _13.TxResultAmino): _13.TxResult;
                toAmino(message: _13.TxResult): _13.TxResultAmino;
                fromAminoMsg(object: _13.TxResultAminoMsg): _13.TxResult;
                fromProtoMsg(message: _13.TxResultProtoMsg): _13.TxResult;
                toProto(message: _13.TxResult): Uint8Array;
                toProtoMsg(message: _13.TxResult): _13.TxResultProtoMsg;
            };
            ExtensionOptionDynamicFeeTx: {
                typeUrl: string;
                encode(message: _12.ExtensionOptionDynamicFeeTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ExtensionOptionDynamicFeeTx;
                fromJSON(object: any): _12.ExtensionOptionDynamicFeeTx;
                toJSON(message: _12.ExtensionOptionDynamicFeeTx): unknown;
                fromPartial(object: Partial<_12.ExtensionOptionDynamicFeeTx>): _12.ExtensionOptionDynamicFeeTx;
                fromAmino(object: _12.ExtensionOptionDynamicFeeTxAmino): _12.ExtensionOptionDynamicFeeTx;
                toAmino(message: _12.ExtensionOptionDynamicFeeTx): _12.ExtensionOptionDynamicFeeTxAmino;
                fromAminoMsg(object: _12.ExtensionOptionDynamicFeeTxAminoMsg): _12.ExtensionOptionDynamicFeeTx;
                fromProtoMsg(message: _12.ExtensionOptionDynamicFeeTxProtoMsg): _12.ExtensionOptionDynamicFeeTx;
                toProto(message: _12.ExtensionOptionDynamicFeeTx): Uint8Array;
                toProtoMsg(message: _12.ExtensionOptionDynamicFeeTx): _12.ExtensionOptionDynamicFeeTxProtoMsg;
            };
            EthAccount: {
                typeUrl: string;
                encode(message: _11.EthAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.EthAccount;
                fromJSON(object: any): _11.EthAccount;
                toJSON(message: _11.EthAccount): unknown;
                fromPartial(object: Partial<_11.EthAccount>): _11.EthAccount;
                fromAmino(object: _11.EthAccountAmino): _11.EthAccount;
                toAmino(message: _11.EthAccount): _11.EthAccountAmino;
                fromAminoMsg(object: _11.EthAccountAminoMsg): _11.EthAccount;
                fromProtoMsg(message: _11.EthAccountProtoMsg): _11.EthAccount;
                toProto(message: _11.EthAccount): Uint8Array;
                toProtoMsg(message: _11.EthAccount): _11.EthAccountProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            ethermint: {
                evm: {
                    v1: _261.MsgClientImpl;
                };
                feemarket: {
                    v1: _262.MsgClientImpl;
                };
            };
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
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            ethermint: {
                evm: {
                    v1: {
                        account(request: _4.QueryAccountRequest): Promise<_4.QueryAccountResponse>;
                        cosmosAccount(request: _4.QueryCosmosAccountRequest): Promise<_4.QueryCosmosAccountResponse>;
                        validatorAccount(request: _4.QueryValidatorAccountRequest): Promise<_4.QueryValidatorAccountResponse>;
                        balance(request: _4.QueryBalanceRequest): Promise<_4.QueryBalanceResponse>;
                        storage(request: _4.QueryStorageRequest): Promise<_4.QueryStorageResponse>;
                        code(request: _4.QueryCodeRequest): Promise<_4.QueryCodeResponse>;
                        params(request?: _4.QueryParamsRequest): Promise<_4.QueryParamsResponse>;
                        ethCall(request: _4.EthCallRequest): Promise<_5.MsgEthereumTxResponse>;
                        estimateGas(request: _4.EthCallRequest): Promise<_4.EstimateGasResponse>;
                        traceTx(request: _4.QueryTraceTxRequest): Promise<_4.QueryTraceTxResponse>;
                        traceBlock(request: _4.QueryTraceBlockRequest): Promise<_4.QueryTraceBlockResponse>;
                        baseFee(request?: _4.QueryBaseFeeRequest): Promise<_4.QueryBaseFeeResponse>;
                    };
                };
                feemarket: {
                    v1: {
                        params(request?: _9.QueryParamsRequest): Promise<_9.QueryParamsResponse>;
                        baseFee(request?: _9.QueryBaseFeeRequest): Promise<_9.QueryBaseFeeResponse>;
                        blockGas(request?: _9.QueryBlockGasRequest): Promise<_9.QueryBlockGasResponse>;
                    };
                };
            };
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
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            ethermint: {
                evm: {
                    v1: _257.LCDQueryClient;
                };
                feemarket: {
                    v1: _258.LCDQueryClient;
                };
            };
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
        }>;
    };
}
