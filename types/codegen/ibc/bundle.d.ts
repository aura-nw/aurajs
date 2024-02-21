import * as _175 from "./applications/fee/v1/ack";
import * as _176 from "./applications/fee/v1/fee";
import * as _177 from "./applications/fee/v1/genesis";
import * as _178 from "./applications/fee/v1/metadata";
import * as _179 from "./applications/fee/v1/query";
import * as _180 from "./applications/fee/v1/tx";
import * as _181 from "./applications/interchain_accounts/controller/v1/controller";
import * as _182 from "./applications/interchain_accounts/controller/v1/query";
import * as _183 from "./applications/interchain_accounts/controller/v1/tx";
import * as _184 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _185 from "./applications/interchain_accounts/host/v1/host";
import * as _186 from "./applications/interchain_accounts/host/v1/query";
import * as _187 from "./applications/interchain_accounts/v1/account";
import * as _188 from "./applications/interchain_accounts/v1/metadata";
import * as _189 from "./applications/interchain_accounts/v1/packet";
import * as _190 from "./applications/transfer/v1/authz";
import * as _191 from "./applications/transfer/v1/genesis";
import * as _192 from "./applications/transfer/v1/query";
import * as _193 from "./applications/transfer/v1/transfer";
import * as _194 from "./applications/transfer/v1/tx";
import * as _195 from "./applications/transfer/v2/packet";
import * as _196 from "./core/channel/v1/channel";
import * as _197 from "./core/channel/v1/genesis";
import * as _198 from "./core/channel/v1/query";
import * as _199 from "./core/channel/v1/tx";
import * as _200 from "./core/client/v1/client";
import * as _201 from "./core/client/v1/genesis";
import * as _202 from "./core/client/v1/query";
import * as _203 from "./core/client/v1/tx";
import * as _204 from "./core/commitment/v1/commitment";
import * as _205 from "./core/connection/v1/connection";
import * as _206 from "./core/connection/v1/genesis";
import * as _207 from "./core/connection/v1/query";
import * as _208 from "./core/connection/v1/tx";
import * as _209 from "./core/types/v1/genesis";
import * as _210 from "./lightclients/localhost/v2/localhost";
import * as _211 from "./lightclients/solomachine/v2/solomachine";
import * as _212 from "./lightclients/solomachine/v3/solomachine";
import * as _213 from "./lightclients/tendermint/v1/tendermint";
import * as _344 from "./applications/fee/v1/query.lcd";
import * as _345 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _346 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _347 from "./applications/transfer/v1/query.lcd";
import * as _348 from "./core/channel/v1/query.lcd";
import * as _349 from "./core/client/v1/query.lcd";
import * as _350 from "./core/connection/v1/query.lcd";
import * as _351 from "./applications/fee/v1/query.rpc.Query";
import * as _352 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _353 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _354 from "./applications/transfer/v1/query.rpc.Query";
import * as _355 from "./core/channel/v1/query.rpc.Query";
import * as _356 from "./core/client/v1/query.rpc.Query";
import * as _357 from "./core/connection/v1/query.rpc.Query";
import * as _358 from "./applications/fee/v1/tx.rpc.msg";
import * as _359 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _360 from "./applications/transfer/v1/tx.rpc.msg";
import * as _361 from "./core/channel/v1/tx.rpc.msg";
import * as _362 from "./core/client/v1/tx.rpc.msg";
import * as _363 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _358.MsgClientImpl;
                QueryClientImpl: typeof _351.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _179.QueryIncentivizedPacketsRequest): Promise<_179.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _179.QueryIncentivizedPacketRequest): Promise<_179.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _179.QueryIncentivizedPacketsForChannelRequest): Promise<_179.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _179.QueryTotalRecvFeesRequest): Promise<_179.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _179.QueryTotalAckFeesRequest): Promise<_179.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _179.QueryTotalTimeoutFeesRequest): Promise<_179.QueryTotalTimeoutFeesResponse>;
                    payee(request: _179.QueryPayeeRequest): Promise<_179.QueryPayeeResponse>;
                    counterpartyPayee(request: _179.QueryCounterpartyPayeeRequest): Promise<_179.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _179.QueryFeeEnabledChannelsRequest): Promise<_179.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _179.QueryFeeEnabledChannelRequest): Promise<_179.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _344.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _180.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _180.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _180.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _180.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _180.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _180.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _180.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _180.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _180.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _180.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _180.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _180.MsgPayPacketFeeAsync;
                        };
                    };
                    toJSON: {
                        registerPayee(value: _180.MsgRegisterPayee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        registerCounterpartyPayee(value: _180.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        payPacketFee(value: _180.MsgPayPacketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        payPacketFeeAsync(value: _180.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        registerPayee(value: any): {
                            typeUrl: string;
                            value: _180.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: any): {
                            typeUrl: string;
                            value: _180.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: any): {
                            typeUrl: string;
                            value: _180.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: any): {
                            typeUrl: string;
                            value: _180.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _180.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _180.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _180.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _180.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _180.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _180.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _180.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _180.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _180.MsgRegisterPayee) => _180.MsgRegisterPayeeAmino;
                        fromAmino: (object: _180.MsgRegisterPayeeAmino) => _180.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _180.MsgRegisterCounterpartyPayee) => _180.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _180.MsgRegisterCounterpartyPayeeAmino) => _180.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _180.MsgPayPacketFee) => _180.MsgPayPacketFeeAmino;
                        fromAmino: (object: _180.MsgPayPacketFeeAmino) => _180.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _180.MsgPayPacketFeeAsync) => _180.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _180.MsgPayPacketFeeAsyncAmino) => _180.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _180.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgRegisterPayee;
                    fromJSON(object: any): _180.MsgRegisterPayee;
                    toJSON(message: _180.MsgRegisterPayee): unknown;
                    fromPartial(object: Partial<_180.MsgRegisterPayee>): _180.MsgRegisterPayee;
                    fromAmino(object: _180.MsgRegisterPayeeAmino): _180.MsgRegisterPayee;
                    toAmino(message: _180.MsgRegisterPayee): _180.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _180.MsgRegisterPayeeAminoMsg): _180.MsgRegisterPayee;
                    toAminoMsg(message: _180.MsgRegisterPayee): _180.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _180.MsgRegisterPayeeProtoMsg): _180.MsgRegisterPayee;
                    toProto(message: _180.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _180.MsgRegisterPayee): _180.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _180.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgRegisterPayeeResponse;
                    fromJSON(_: any): _180.MsgRegisterPayeeResponse;
                    toJSON(_: _180.MsgRegisterPayeeResponse): unknown;
                    fromPartial(_: Partial<_180.MsgRegisterPayeeResponse>): _180.MsgRegisterPayeeResponse;
                    fromAmino(_: _180.MsgRegisterPayeeResponseAmino): _180.MsgRegisterPayeeResponse;
                    toAmino(_: _180.MsgRegisterPayeeResponse): _180.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _180.MsgRegisterPayeeResponseAminoMsg): _180.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _180.MsgRegisterPayeeResponse): _180.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _180.MsgRegisterPayeeResponseProtoMsg): _180.MsgRegisterPayeeResponse;
                    toProto(message: _180.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _180.MsgRegisterPayeeResponse): _180.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _180.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgRegisterCounterpartyPayee;
                    fromJSON(object: any): _180.MsgRegisterCounterpartyPayee;
                    toJSON(message: _180.MsgRegisterCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_180.MsgRegisterCounterpartyPayee>): _180.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _180.MsgRegisterCounterpartyPayeeAmino): _180.MsgRegisterCounterpartyPayee;
                    toAmino(message: _180.MsgRegisterCounterpartyPayee): _180.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _180.MsgRegisterCounterpartyPayeeAminoMsg): _180.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _180.MsgRegisterCounterpartyPayee): _180.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _180.MsgRegisterCounterpartyPayeeProtoMsg): _180.MsgRegisterCounterpartyPayee;
                    toProto(message: _180.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _180.MsgRegisterCounterpartyPayee): _180.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _180.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgRegisterCounterpartyPayeeResponse;
                    fromJSON(_: any): _180.MsgRegisterCounterpartyPayeeResponse;
                    toJSON(_: _180.MsgRegisterCounterpartyPayeeResponse): unknown;
                    fromPartial(_: Partial<_180.MsgRegisterCounterpartyPayeeResponse>): _180.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _180.MsgRegisterCounterpartyPayeeResponseAmino): _180.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _180.MsgRegisterCounterpartyPayeeResponse): _180.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _180.MsgRegisterCounterpartyPayeeResponseAminoMsg): _180.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _180.MsgRegisterCounterpartyPayeeResponse): _180.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _180.MsgRegisterCounterpartyPayeeResponseProtoMsg): _180.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _180.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _180.MsgRegisterCounterpartyPayeeResponse): _180.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _180.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgPayPacketFee;
                    fromJSON(object: any): _180.MsgPayPacketFee;
                    toJSON(message: _180.MsgPayPacketFee): unknown;
                    fromPartial(object: Partial<_180.MsgPayPacketFee>): _180.MsgPayPacketFee;
                    fromAmino(object: _180.MsgPayPacketFeeAmino): _180.MsgPayPacketFee;
                    toAmino(message: _180.MsgPayPacketFee): _180.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _180.MsgPayPacketFeeAminoMsg): _180.MsgPayPacketFee;
                    toAminoMsg(message: _180.MsgPayPacketFee): _180.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _180.MsgPayPacketFeeProtoMsg): _180.MsgPayPacketFee;
                    toProto(message: _180.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _180.MsgPayPacketFee): _180.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _180.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgPayPacketFeeResponse;
                    fromJSON(_: any): _180.MsgPayPacketFeeResponse;
                    toJSON(_: _180.MsgPayPacketFeeResponse): unknown;
                    fromPartial(_: Partial<_180.MsgPayPacketFeeResponse>): _180.MsgPayPacketFeeResponse;
                    fromAmino(_: _180.MsgPayPacketFeeResponseAmino): _180.MsgPayPacketFeeResponse;
                    toAmino(_: _180.MsgPayPacketFeeResponse): _180.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _180.MsgPayPacketFeeResponseAminoMsg): _180.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _180.MsgPayPacketFeeResponse): _180.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _180.MsgPayPacketFeeResponseProtoMsg): _180.MsgPayPacketFeeResponse;
                    toProto(message: _180.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _180.MsgPayPacketFeeResponse): _180.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _180.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgPayPacketFeeAsync;
                    fromJSON(object: any): _180.MsgPayPacketFeeAsync;
                    toJSON(message: _180.MsgPayPacketFeeAsync): unknown;
                    fromPartial(object: Partial<_180.MsgPayPacketFeeAsync>): _180.MsgPayPacketFeeAsync;
                    fromAmino(object: _180.MsgPayPacketFeeAsyncAmino): _180.MsgPayPacketFeeAsync;
                    toAmino(message: _180.MsgPayPacketFeeAsync): _180.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _180.MsgPayPacketFeeAsyncAminoMsg): _180.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _180.MsgPayPacketFeeAsync): _180.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _180.MsgPayPacketFeeAsyncProtoMsg): _180.MsgPayPacketFeeAsync;
                    toProto(message: _180.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _180.MsgPayPacketFeeAsync): _180.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _180.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.MsgPayPacketFeeAsyncResponse;
                    fromJSON(_: any): _180.MsgPayPacketFeeAsyncResponse;
                    toJSON(_: _180.MsgPayPacketFeeAsyncResponse): unknown;
                    fromPartial(_: Partial<_180.MsgPayPacketFeeAsyncResponse>): _180.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _180.MsgPayPacketFeeAsyncResponseAmino): _180.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _180.MsgPayPacketFeeAsyncResponse): _180.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _180.MsgPayPacketFeeAsyncResponseAminoMsg): _180.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _180.MsgPayPacketFeeAsyncResponse): _180.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _180.MsgPayPacketFeeAsyncResponseProtoMsg): _180.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _180.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _180.MsgPayPacketFeeAsyncResponse): _180.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryIncentivizedPacketsRequest;
                    fromJSON(object: any): _179.QueryIncentivizedPacketsRequest;
                    toJSON(message: _179.QueryIncentivizedPacketsRequest): unknown;
                    fromPartial(object: Partial<_179.QueryIncentivizedPacketsRequest>): _179.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _179.QueryIncentivizedPacketsRequestAmino): _179.QueryIncentivizedPacketsRequest;
                    toAmino(message: _179.QueryIncentivizedPacketsRequest): _179.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _179.QueryIncentivizedPacketsRequestAminoMsg): _179.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _179.QueryIncentivizedPacketsRequest): _179.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryIncentivizedPacketsRequestProtoMsg): _179.QueryIncentivizedPacketsRequest;
                    toProto(message: _179.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryIncentivizedPacketsRequest): _179.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryIncentivizedPacketsResponse;
                    fromJSON(object: any): _179.QueryIncentivizedPacketsResponse;
                    toJSON(message: _179.QueryIncentivizedPacketsResponse): unknown;
                    fromPartial(object: Partial<_179.QueryIncentivizedPacketsResponse>): _179.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _179.QueryIncentivizedPacketsResponseAmino): _179.QueryIncentivizedPacketsResponse;
                    toAmino(message: _179.QueryIncentivizedPacketsResponse): _179.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _179.QueryIncentivizedPacketsResponseAminoMsg): _179.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _179.QueryIncentivizedPacketsResponse): _179.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryIncentivizedPacketsResponseProtoMsg): _179.QueryIncentivizedPacketsResponse;
                    toProto(message: _179.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryIncentivizedPacketsResponse): _179.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryIncentivizedPacketRequest;
                    fromJSON(object: any): _179.QueryIncentivizedPacketRequest;
                    toJSON(message: _179.QueryIncentivizedPacketRequest): unknown;
                    fromPartial(object: Partial<_179.QueryIncentivizedPacketRequest>): _179.QueryIncentivizedPacketRequest;
                    fromAmino(object: _179.QueryIncentivizedPacketRequestAmino): _179.QueryIncentivizedPacketRequest;
                    toAmino(message: _179.QueryIncentivizedPacketRequest): _179.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _179.QueryIncentivizedPacketRequestAminoMsg): _179.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _179.QueryIncentivizedPacketRequest): _179.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryIncentivizedPacketRequestProtoMsg): _179.QueryIncentivizedPacketRequest;
                    toProto(message: _179.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryIncentivizedPacketRequest): _179.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryIncentivizedPacketResponse;
                    fromJSON(object: any): _179.QueryIncentivizedPacketResponse;
                    toJSON(message: _179.QueryIncentivizedPacketResponse): unknown;
                    fromPartial(object: Partial<_179.QueryIncentivizedPacketResponse>): _179.QueryIncentivizedPacketResponse;
                    fromAmino(object: _179.QueryIncentivizedPacketResponseAmino): _179.QueryIncentivizedPacketResponse;
                    toAmino(message: _179.QueryIncentivizedPacketResponse): _179.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _179.QueryIncentivizedPacketResponseAminoMsg): _179.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _179.QueryIncentivizedPacketResponse): _179.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryIncentivizedPacketResponseProtoMsg): _179.QueryIncentivizedPacketResponse;
                    toProto(message: _179.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryIncentivizedPacketResponse): _179.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryIncentivizedPacketsForChannelRequest;
                    fromJSON(object: any): _179.QueryIncentivizedPacketsForChannelRequest;
                    toJSON(message: _179.QueryIncentivizedPacketsForChannelRequest): unknown;
                    fromPartial(object: Partial<_179.QueryIncentivizedPacketsForChannelRequest>): _179.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _179.QueryIncentivizedPacketsForChannelRequestAmino): _179.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _179.QueryIncentivizedPacketsForChannelRequest): _179.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _179.QueryIncentivizedPacketsForChannelRequestAminoMsg): _179.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _179.QueryIncentivizedPacketsForChannelRequest): _179.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryIncentivizedPacketsForChannelRequestProtoMsg): _179.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _179.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryIncentivizedPacketsForChannelRequest): _179.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryIncentivizedPacketsForChannelResponse;
                    fromJSON(object: any): _179.QueryIncentivizedPacketsForChannelResponse;
                    toJSON(message: _179.QueryIncentivizedPacketsForChannelResponse): unknown;
                    fromPartial(object: Partial<_179.QueryIncentivizedPacketsForChannelResponse>): _179.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _179.QueryIncentivizedPacketsForChannelResponseAmino): _179.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _179.QueryIncentivizedPacketsForChannelResponse): _179.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _179.QueryIncentivizedPacketsForChannelResponseAminoMsg): _179.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _179.QueryIncentivizedPacketsForChannelResponse): _179.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryIncentivizedPacketsForChannelResponseProtoMsg): _179.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _179.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryIncentivizedPacketsForChannelResponse): _179.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryTotalRecvFeesRequest;
                    fromJSON(object: any): _179.QueryTotalRecvFeesRequest;
                    toJSON(message: _179.QueryTotalRecvFeesRequest): unknown;
                    fromPartial(object: Partial<_179.QueryTotalRecvFeesRequest>): _179.QueryTotalRecvFeesRequest;
                    fromAmino(object: _179.QueryTotalRecvFeesRequestAmino): _179.QueryTotalRecvFeesRequest;
                    toAmino(message: _179.QueryTotalRecvFeesRequest): _179.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _179.QueryTotalRecvFeesRequestAminoMsg): _179.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _179.QueryTotalRecvFeesRequest): _179.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryTotalRecvFeesRequestProtoMsg): _179.QueryTotalRecvFeesRequest;
                    toProto(message: _179.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryTotalRecvFeesRequest): _179.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryTotalRecvFeesResponse;
                    fromJSON(object: any): _179.QueryTotalRecvFeesResponse;
                    toJSON(message: _179.QueryTotalRecvFeesResponse): unknown;
                    fromPartial(object: Partial<_179.QueryTotalRecvFeesResponse>): _179.QueryTotalRecvFeesResponse;
                    fromAmino(object: _179.QueryTotalRecvFeesResponseAmino): _179.QueryTotalRecvFeesResponse;
                    toAmino(message: _179.QueryTotalRecvFeesResponse): _179.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _179.QueryTotalRecvFeesResponseAminoMsg): _179.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _179.QueryTotalRecvFeesResponse): _179.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryTotalRecvFeesResponseProtoMsg): _179.QueryTotalRecvFeesResponse;
                    toProto(message: _179.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryTotalRecvFeesResponse): _179.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryTotalAckFeesRequest;
                    fromJSON(object: any): _179.QueryTotalAckFeesRequest;
                    toJSON(message: _179.QueryTotalAckFeesRequest): unknown;
                    fromPartial(object: Partial<_179.QueryTotalAckFeesRequest>): _179.QueryTotalAckFeesRequest;
                    fromAmino(object: _179.QueryTotalAckFeesRequestAmino): _179.QueryTotalAckFeesRequest;
                    toAmino(message: _179.QueryTotalAckFeesRequest): _179.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _179.QueryTotalAckFeesRequestAminoMsg): _179.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _179.QueryTotalAckFeesRequest): _179.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryTotalAckFeesRequestProtoMsg): _179.QueryTotalAckFeesRequest;
                    toProto(message: _179.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryTotalAckFeesRequest): _179.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryTotalAckFeesResponse;
                    fromJSON(object: any): _179.QueryTotalAckFeesResponse;
                    toJSON(message: _179.QueryTotalAckFeesResponse): unknown;
                    fromPartial(object: Partial<_179.QueryTotalAckFeesResponse>): _179.QueryTotalAckFeesResponse;
                    fromAmino(object: _179.QueryTotalAckFeesResponseAmino): _179.QueryTotalAckFeesResponse;
                    toAmino(message: _179.QueryTotalAckFeesResponse): _179.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _179.QueryTotalAckFeesResponseAminoMsg): _179.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _179.QueryTotalAckFeesResponse): _179.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryTotalAckFeesResponseProtoMsg): _179.QueryTotalAckFeesResponse;
                    toProto(message: _179.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryTotalAckFeesResponse): _179.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryTotalTimeoutFeesRequest;
                    fromJSON(object: any): _179.QueryTotalTimeoutFeesRequest;
                    toJSON(message: _179.QueryTotalTimeoutFeesRequest): unknown;
                    fromPartial(object: Partial<_179.QueryTotalTimeoutFeesRequest>): _179.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _179.QueryTotalTimeoutFeesRequestAmino): _179.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _179.QueryTotalTimeoutFeesRequest): _179.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _179.QueryTotalTimeoutFeesRequestAminoMsg): _179.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _179.QueryTotalTimeoutFeesRequest): _179.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryTotalTimeoutFeesRequestProtoMsg): _179.QueryTotalTimeoutFeesRequest;
                    toProto(message: _179.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryTotalTimeoutFeesRequest): _179.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryTotalTimeoutFeesResponse;
                    fromJSON(object: any): _179.QueryTotalTimeoutFeesResponse;
                    toJSON(message: _179.QueryTotalTimeoutFeesResponse): unknown;
                    fromPartial(object: Partial<_179.QueryTotalTimeoutFeesResponse>): _179.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _179.QueryTotalTimeoutFeesResponseAmino): _179.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _179.QueryTotalTimeoutFeesResponse): _179.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _179.QueryTotalTimeoutFeesResponseAminoMsg): _179.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _179.QueryTotalTimeoutFeesResponse): _179.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryTotalTimeoutFeesResponseProtoMsg): _179.QueryTotalTimeoutFeesResponse;
                    toProto(message: _179.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryTotalTimeoutFeesResponse): _179.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryPayeeRequest;
                    fromJSON(object: any): _179.QueryPayeeRequest;
                    toJSON(message: _179.QueryPayeeRequest): unknown;
                    fromPartial(object: Partial<_179.QueryPayeeRequest>): _179.QueryPayeeRequest;
                    fromAmino(object: _179.QueryPayeeRequestAmino): _179.QueryPayeeRequest;
                    toAmino(message: _179.QueryPayeeRequest): _179.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _179.QueryPayeeRequestAminoMsg): _179.QueryPayeeRequest;
                    toAminoMsg(message: _179.QueryPayeeRequest): _179.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryPayeeRequestProtoMsg): _179.QueryPayeeRequest;
                    toProto(message: _179.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryPayeeRequest): _179.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryPayeeResponse;
                    fromJSON(object: any): _179.QueryPayeeResponse;
                    toJSON(message: _179.QueryPayeeResponse): unknown;
                    fromPartial(object: Partial<_179.QueryPayeeResponse>): _179.QueryPayeeResponse;
                    fromAmino(object: _179.QueryPayeeResponseAmino): _179.QueryPayeeResponse;
                    toAmino(message: _179.QueryPayeeResponse): _179.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _179.QueryPayeeResponseAminoMsg): _179.QueryPayeeResponse;
                    toAminoMsg(message: _179.QueryPayeeResponse): _179.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryPayeeResponseProtoMsg): _179.QueryPayeeResponse;
                    toProto(message: _179.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryPayeeResponse): _179.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryCounterpartyPayeeRequest;
                    fromJSON(object: any): _179.QueryCounterpartyPayeeRequest;
                    toJSON(message: _179.QueryCounterpartyPayeeRequest): unknown;
                    fromPartial(object: Partial<_179.QueryCounterpartyPayeeRequest>): _179.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _179.QueryCounterpartyPayeeRequestAmino): _179.QueryCounterpartyPayeeRequest;
                    toAmino(message: _179.QueryCounterpartyPayeeRequest): _179.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _179.QueryCounterpartyPayeeRequestAminoMsg): _179.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _179.QueryCounterpartyPayeeRequest): _179.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryCounterpartyPayeeRequestProtoMsg): _179.QueryCounterpartyPayeeRequest;
                    toProto(message: _179.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryCounterpartyPayeeRequest): _179.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryCounterpartyPayeeResponse;
                    fromJSON(object: any): _179.QueryCounterpartyPayeeResponse;
                    toJSON(message: _179.QueryCounterpartyPayeeResponse): unknown;
                    fromPartial(object: Partial<_179.QueryCounterpartyPayeeResponse>): _179.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _179.QueryCounterpartyPayeeResponseAmino): _179.QueryCounterpartyPayeeResponse;
                    toAmino(message: _179.QueryCounterpartyPayeeResponse): _179.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _179.QueryCounterpartyPayeeResponseAminoMsg): _179.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _179.QueryCounterpartyPayeeResponse): _179.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryCounterpartyPayeeResponseProtoMsg): _179.QueryCounterpartyPayeeResponse;
                    toProto(message: _179.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryCounterpartyPayeeResponse): _179.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryFeeEnabledChannelsRequest;
                    fromJSON(object: any): _179.QueryFeeEnabledChannelsRequest;
                    toJSON(message: _179.QueryFeeEnabledChannelsRequest): unknown;
                    fromPartial(object: Partial<_179.QueryFeeEnabledChannelsRequest>): _179.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _179.QueryFeeEnabledChannelsRequestAmino): _179.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _179.QueryFeeEnabledChannelsRequest): _179.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _179.QueryFeeEnabledChannelsRequestAminoMsg): _179.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _179.QueryFeeEnabledChannelsRequest): _179.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryFeeEnabledChannelsRequestProtoMsg): _179.QueryFeeEnabledChannelsRequest;
                    toProto(message: _179.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryFeeEnabledChannelsRequest): _179.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryFeeEnabledChannelsResponse;
                    fromJSON(object: any): _179.QueryFeeEnabledChannelsResponse;
                    toJSON(message: _179.QueryFeeEnabledChannelsResponse): unknown;
                    fromPartial(object: Partial<_179.QueryFeeEnabledChannelsResponse>): _179.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _179.QueryFeeEnabledChannelsResponseAmino): _179.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _179.QueryFeeEnabledChannelsResponse): _179.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _179.QueryFeeEnabledChannelsResponseAminoMsg): _179.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _179.QueryFeeEnabledChannelsResponse): _179.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryFeeEnabledChannelsResponseProtoMsg): _179.QueryFeeEnabledChannelsResponse;
                    toProto(message: _179.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryFeeEnabledChannelsResponse): _179.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _179.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryFeeEnabledChannelRequest;
                    fromJSON(object: any): _179.QueryFeeEnabledChannelRequest;
                    toJSON(message: _179.QueryFeeEnabledChannelRequest): unknown;
                    fromPartial(object: Partial<_179.QueryFeeEnabledChannelRequest>): _179.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _179.QueryFeeEnabledChannelRequestAmino): _179.QueryFeeEnabledChannelRequest;
                    toAmino(message: _179.QueryFeeEnabledChannelRequest): _179.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _179.QueryFeeEnabledChannelRequestAminoMsg): _179.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _179.QueryFeeEnabledChannelRequest): _179.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _179.QueryFeeEnabledChannelRequestProtoMsg): _179.QueryFeeEnabledChannelRequest;
                    toProto(message: _179.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _179.QueryFeeEnabledChannelRequest): _179.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _179.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.QueryFeeEnabledChannelResponse;
                    fromJSON(object: any): _179.QueryFeeEnabledChannelResponse;
                    toJSON(message: _179.QueryFeeEnabledChannelResponse): unknown;
                    fromPartial(object: Partial<_179.QueryFeeEnabledChannelResponse>): _179.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _179.QueryFeeEnabledChannelResponseAmino): _179.QueryFeeEnabledChannelResponse;
                    toAmino(message: _179.QueryFeeEnabledChannelResponse): _179.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _179.QueryFeeEnabledChannelResponseAminoMsg): _179.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _179.QueryFeeEnabledChannelResponse): _179.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _179.QueryFeeEnabledChannelResponseProtoMsg): _179.QueryFeeEnabledChannelResponse;
                    toProto(message: _179.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _179.QueryFeeEnabledChannelResponse): _179.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _178.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Metadata;
                    fromJSON(object: any): _178.Metadata;
                    toJSON(message: _178.Metadata): unknown;
                    fromPartial(object: Partial<_178.Metadata>): _178.Metadata;
                    fromAmino(object: _178.MetadataAmino): _178.Metadata;
                    toAmino(message: _178.Metadata): _178.MetadataAmino;
                    fromAminoMsg(object: _178.MetadataAminoMsg): _178.Metadata;
                    toAminoMsg(message: _178.Metadata): _178.MetadataAminoMsg;
                    fromProtoMsg(message: _178.MetadataProtoMsg): _178.Metadata;
                    toProto(message: _178.Metadata): Uint8Array;
                    toProtoMsg(message: _178.Metadata): _178.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _177.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.GenesisState;
                    fromJSON(object: any): _177.GenesisState;
                    toJSON(message: _177.GenesisState): unknown;
                    fromPartial(object: Partial<_177.GenesisState>): _177.GenesisState;
                    fromAmino(object: _177.GenesisStateAmino): _177.GenesisState;
                    toAmino(message: _177.GenesisState): _177.GenesisStateAmino;
                    fromAminoMsg(object: _177.GenesisStateAminoMsg): _177.GenesisState;
                    toAminoMsg(message: _177.GenesisState): _177.GenesisStateAminoMsg;
                    fromProtoMsg(message: _177.GenesisStateProtoMsg): _177.GenesisState;
                    toProto(message: _177.GenesisState): Uint8Array;
                    toProtoMsg(message: _177.GenesisState): _177.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _177.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.FeeEnabledChannel;
                    fromJSON(object: any): _177.FeeEnabledChannel;
                    toJSON(message: _177.FeeEnabledChannel): unknown;
                    fromPartial(object: Partial<_177.FeeEnabledChannel>): _177.FeeEnabledChannel;
                    fromAmino(object: _177.FeeEnabledChannelAmino): _177.FeeEnabledChannel;
                    toAmino(message: _177.FeeEnabledChannel): _177.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _177.FeeEnabledChannelAminoMsg): _177.FeeEnabledChannel;
                    toAminoMsg(message: _177.FeeEnabledChannel): _177.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _177.FeeEnabledChannelProtoMsg): _177.FeeEnabledChannel;
                    toProto(message: _177.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _177.FeeEnabledChannel): _177.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _177.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.RegisteredPayee;
                    fromJSON(object: any): _177.RegisteredPayee;
                    toJSON(message: _177.RegisteredPayee): unknown;
                    fromPartial(object: Partial<_177.RegisteredPayee>): _177.RegisteredPayee;
                    fromAmino(object: _177.RegisteredPayeeAmino): _177.RegisteredPayee;
                    toAmino(message: _177.RegisteredPayee): _177.RegisteredPayeeAmino;
                    fromAminoMsg(object: _177.RegisteredPayeeAminoMsg): _177.RegisteredPayee;
                    toAminoMsg(message: _177.RegisteredPayee): _177.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _177.RegisteredPayeeProtoMsg): _177.RegisteredPayee;
                    toProto(message: _177.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _177.RegisteredPayee): _177.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _177.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.RegisteredCounterpartyPayee;
                    fromJSON(object: any): _177.RegisteredCounterpartyPayee;
                    toJSON(message: _177.RegisteredCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_177.RegisteredCounterpartyPayee>): _177.RegisteredCounterpartyPayee;
                    fromAmino(object: _177.RegisteredCounterpartyPayeeAmino): _177.RegisteredCounterpartyPayee;
                    toAmino(message: _177.RegisteredCounterpartyPayee): _177.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _177.RegisteredCounterpartyPayeeAminoMsg): _177.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _177.RegisteredCounterpartyPayee): _177.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _177.RegisteredCounterpartyPayeeProtoMsg): _177.RegisteredCounterpartyPayee;
                    toProto(message: _177.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _177.RegisteredCounterpartyPayee): _177.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _177.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.ForwardRelayerAddress;
                    fromJSON(object: any): _177.ForwardRelayerAddress;
                    toJSON(message: _177.ForwardRelayerAddress): unknown;
                    fromPartial(object: Partial<_177.ForwardRelayerAddress>): _177.ForwardRelayerAddress;
                    fromAmino(object: _177.ForwardRelayerAddressAmino): _177.ForwardRelayerAddress;
                    toAmino(message: _177.ForwardRelayerAddress): _177.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _177.ForwardRelayerAddressAminoMsg): _177.ForwardRelayerAddress;
                    toAminoMsg(message: _177.ForwardRelayerAddress): _177.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _177.ForwardRelayerAddressProtoMsg): _177.ForwardRelayerAddress;
                    toProto(message: _177.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _177.ForwardRelayerAddress): _177.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _176.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Fee;
                    fromJSON(object: any): _176.Fee;
                    toJSON(message: _176.Fee): unknown;
                    fromPartial(object: Partial<_176.Fee>): _176.Fee;
                    fromAmino(object: _176.FeeAmino): _176.Fee;
                    toAmino(message: _176.Fee): _176.FeeAmino;
                    fromAminoMsg(object: _176.FeeAminoMsg): _176.Fee;
                    toAminoMsg(message: _176.Fee): _176.FeeAminoMsg;
                    fromProtoMsg(message: _176.FeeProtoMsg): _176.Fee;
                    toProto(message: _176.Fee): Uint8Array;
                    toProtoMsg(message: _176.Fee): _176.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _176.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PacketFee;
                    fromJSON(object: any): _176.PacketFee;
                    toJSON(message: _176.PacketFee): unknown;
                    fromPartial(object: Partial<_176.PacketFee>): _176.PacketFee;
                    fromAmino(object: _176.PacketFeeAmino): _176.PacketFee;
                    toAmino(message: _176.PacketFee): _176.PacketFeeAmino;
                    fromAminoMsg(object: _176.PacketFeeAminoMsg): _176.PacketFee;
                    toAminoMsg(message: _176.PacketFee): _176.PacketFeeAminoMsg;
                    fromProtoMsg(message: _176.PacketFeeProtoMsg): _176.PacketFee;
                    toProto(message: _176.PacketFee): Uint8Array;
                    toProtoMsg(message: _176.PacketFee): _176.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _176.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.PacketFees;
                    fromJSON(object: any): _176.PacketFees;
                    toJSON(message: _176.PacketFees): unknown;
                    fromPartial(object: Partial<_176.PacketFees>): _176.PacketFees;
                    fromAmino(object: _176.PacketFeesAmino): _176.PacketFees;
                    toAmino(message: _176.PacketFees): _176.PacketFeesAmino;
                    fromAminoMsg(object: _176.PacketFeesAminoMsg): _176.PacketFees;
                    toAminoMsg(message: _176.PacketFees): _176.PacketFeesAminoMsg;
                    fromProtoMsg(message: _176.PacketFeesProtoMsg): _176.PacketFees;
                    toProto(message: _176.PacketFees): Uint8Array;
                    toProtoMsg(message: _176.PacketFees): _176.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _176.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.IdentifiedPacketFees;
                    fromJSON(object: any): _176.IdentifiedPacketFees;
                    toJSON(message: _176.IdentifiedPacketFees): unknown;
                    fromPartial(object: Partial<_176.IdentifiedPacketFees>): _176.IdentifiedPacketFees;
                    fromAmino(object: _176.IdentifiedPacketFeesAmino): _176.IdentifiedPacketFees;
                    toAmino(message: _176.IdentifiedPacketFees): _176.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _176.IdentifiedPacketFeesAminoMsg): _176.IdentifiedPacketFees;
                    toAminoMsg(message: _176.IdentifiedPacketFees): _176.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _176.IdentifiedPacketFeesProtoMsg): _176.IdentifiedPacketFees;
                    toProto(message: _176.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _176.IdentifiedPacketFees): _176.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _175.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.IncentivizedAcknowledgement;
                    fromJSON(object: any): _175.IncentivizedAcknowledgement;
                    toJSON(message: _175.IncentivizedAcknowledgement): unknown;
                    fromPartial(object: Partial<_175.IncentivizedAcknowledgement>): _175.IncentivizedAcknowledgement;
                    fromAmino(object: _175.IncentivizedAcknowledgementAmino): _175.IncentivizedAcknowledgement;
                    toAmino(message: _175.IncentivizedAcknowledgement): _175.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _175.IncentivizedAcknowledgementAminoMsg): _175.IncentivizedAcknowledgement;
                    toAminoMsg(message: _175.IncentivizedAcknowledgement): _175.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _175.IncentivizedAcknowledgementProtoMsg): _175.IncentivizedAcknowledgement;
                    toProto(message: _175.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _175.IncentivizedAcknowledgement): _175.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _359.MsgClientImpl;
                    QueryClientImpl: typeof _352.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _182.QueryInterchainAccountRequest): Promise<_182.QueryInterchainAccountResponse>;
                        params(request?: _182.QueryParamsRequest): Promise<_182.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _345.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _183.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _183.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _183.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _183.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _183.MsgSendTx): {
                                typeUrl: string;
                                value: _183.MsgSendTx;
                            };
                        };
                        toJSON: {
                            registerInterchainAccount(value: _183.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: unknown;
                            };
                            sendTx(value: _183.MsgSendTx): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            registerInterchainAccount(value: any): {
                                typeUrl: string;
                                value: _183.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: any): {
                                typeUrl: string;
                                value: _183.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _183.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _183.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _183.MsgSendTx): {
                                typeUrl: string;
                                value: _183.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _183.MsgRegisterInterchainAccount) => _183.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _183.MsgRegisterInterchainAccountAmino) => _183.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _183.MsgSendTx) => _183.MsgSendTxAmino;
                            fromAmino: (object: _183.MsgSendTxAmino) => _183.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _183.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgRegisterInterchainAccount;
                        fromJSON(object: any): _183.MsgRegisterInterchainAccount;
                        toJSON(message: _183.MsgRegisterInterchainAccount): unknown;
                        fromPartial(object: Partial<_183.MsgRegisterInterchainAccount>): _183.MsgRegisterInterchainAccount;
                        fromAmino(object: _183.MsgRegisterInterchainAccountAmino): _183.MsgRegisterInterchainAccount;
                        toAmino(message: _183.MsgRegisterInterchainAccount): _183.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _183.MsgRegisterInterchainAccountAminoMsg): _183.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _183.MsgRegisterInterchainAccount): _183.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _183.MsgRegisterInterchainAccountProtoMsg): _183.MsgRegisterInterchainAccount;
                        toProto(message: _183.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _183.MsgRegisterInterchainAccount): _183.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _183.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgRegisterInterchainAccountResponse;
                        fromJSON(object: any): _183.MsgRegisterInterchainAccountResponse;
                        toJSON(message: _183.MsgRegisterInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_183.MsgRegisterInterchainAccountResponse>): _183.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _183.MsgRegisterInterchainAccountResponseAmino): _183.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _183.MsgRegisterInterchainAccountResponse): _183.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _183.MsgRegisterInterchainAccountResponseAminoMsg): _183.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _183.MsgRegisterInterchainAccountResponse): _183.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _183.MsgRegisterInterchainAccountResponseProtoMsg): _183.MsgRegisterInterchainAccountResponse;
                        toProto(message: _183.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _183.MsgRegisterInterchainAccountResponse): _183.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _183.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgSendTx;
                        fromJSON(object: any): _183.MsgSendTx;
                        toJSON(message: _183.MsgSendTx): unknown;
                        fromPartial(object: Partial<_183.MsgSendTx>): _183.MsgSendTx;
                        fromAmino(object: _183.MsgSendTxAmino): _183.MsgSendTx;
                        toAmino(message: _183.MsgSendTx): _183.MsgSendTxAmino;
                        fromAminoMsg(object: _183.MsgSendTxAminoMsg): _183.MsgSendTx;
                        toAminoMsg(message: _183.MsgSendTx): _183.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _183.MsgSendTxProtoMsg): _183.MsgSendTx;
                        toProto(message: _183.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _183.MsgSendTx): _183.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _183.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.MsgSendTxResponse;
                        fromJSON(object: any): _183.MsgSendTxResponse;
                        toJSON(message: _183.MsgSendTxResponse): unknown;
                        fromPartial(object: Partial<_183.MsgSendTxResponse>): _183.MsgSendTxResponse;
                        fromAmino(object: _183.MsgSendTxResponseAmino): _183.MsgSendTxResponse;
                        toAmino(message: _183.MsgSendTxResponse): _183.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _183.MsgSendTxResponseAminoMsg): _183.MsgSendTxResponse;
                        toAminoMsg(message: _183.MsgSendTxResponse): _183.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _183.MsgSendTxResponseProtoMsg): _183.MsgSendTxResponse;
                        toProto(message: _183.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _183.MsgSendTxResponse): _183.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _182.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryInterchainAccountRequest;
                        fromJSON(object: any): _182.QueryInterchainAccountRequest;
                        toJSON(message: _182.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_182.QueryInterchainAccountRequest>): _182.QueryInterchainAccountRequest;
                        fromAmino(object: _182.QueryInterchainAccountRequestAmino): _182.QueryInterchainAccountRequest;
                        toAmino(message: _182.QueryInterchainAccountRequest): _182.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _182.QueryInterchainAccountRequestAminoMsg): _182.QueryInterchainAccountRequest;
                        toAminoMsg(message: _182.QueryInterchainAccountRequest): _182.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _182.QueryInterchainAccountRequestProtoMsg): _182.QueryInterchainAccountRequest;
                        toProto(message: _182.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _182.QueryInterchainAccountRequest): _182.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _182.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryInterchainAccountResponse;
                        fromJSON(object: any): _182.QueryInterchainAccountResponse;
                        toJSON(message: _182.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_182.QueryInterchainAccountResponse>): _182.QueryInterchainAccountResponse;
                        fromAmino(object: _182.QueryInterchainAccountResponseAmino): _182.QueryInterchainAccountResponse;
                        toAmino(message: _182.QueryInterchainAccountResponse): _182.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _182.QueryInterchainAccountResponseAminoMsg): _182.QueryInterchainAccountResponse;
                        toAminoMsg(message: _182.QueryInterchainAccountResponse): _182.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _182.QueryInterchainAccountResponseProtoMsg): _182.QueryInterchainAccountResponse;
                        toProto(message: _182.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _182.QueryInterchainAccountResponse): _182.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _182.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryParamsRequest;
                        fromJSON(_: any): _182.QueryParamsRequest;
                        toJSON(_: _182.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_182.QueryParamsRequest>): _182.QueryParamsRequest;
                        fromAmino(_: _182.QueryParamsRequestAmino): _182.QueryParamsRequest;
                        toAmino(_: _182.QueryParamsRequest): _182.QueryParamsRequestAmino;
                        fromAminoMsg(object: _182.QueryParamsRequestAminoMsg): _182.QueryParamsRequest;
                        toAminoMsg(message: _182.QueryParamsRequest): _182.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _182.QueryParamsRequestProtoMsg): _182.QueryParamsRequest;
                        toProto(message: _182.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _182.QueryParamsRequest): _182.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _182.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.QueryParamsResponse;
                        fromJSON(object: any): _182.QueryParamsResponse;
                        toJSON(message: _182.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_182.QueryParamsResponse>): _182.QueryParamsResponse;
                        fromAmino(object: _182.QueryParamsResponseAmino): _182.QueryParamsResponse;
                        toAmino(message: _182.QueryParamsResponse): _182.QueryParamsResponseAmino;
                        fromAminoMsg(object: _182.QueryParamsResponseAminoMsg): _182.QueryParamsResponse;
                        toAminoMsg(message: _182.QueryParamsResponse): _182.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _182.QueryParamsResponseProtoMsg): _182.QueryParamsResponse;
                        toProto(message: _182.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _182.QueryParamsResponse): _182.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _181.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Params;
                        fromJSON(object: any): _181.Params;
                        toJSON(message: _181.Params): unknown;
                        fromPartial(object: Partial<_181.Params>): _181.Params;
                        fromAmino(object: _181.ParamsAmino): _181.Params;
                        toAmino(message: _181.Params): _181.ParamsAmino;
                        fromAminoMsg(object: _181.ParamsAminoMsg): _181.Params;
                        toAminoMsg(message: _181.Params): _181.ParamsAminoMsg;
                        fromProtoMsg(message: _181.ParamsProtoMsg): _181.Params;
                        toProto(message: _181.Params): Uint8Array;
                        toProtoMsg(message: _181.Params): _181.ParamsProtoMsg;
                    };
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _184.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.GenesisState;
                        fromJSON(object: any): _184.GenesisState;
                        toJSON(message: _184.GenesisState): unknown;
                        fromPartial(object: Partial<_184.GenesisState>): _184.GenesisState;
                        fromAmino(object: _184.GenesisStateAmino): _184.GenesisState;
                        toAmino(message: _184.GenesisState): _184.GenesisStateAmino;
                        fromAminoMsg(object: _184.GenesisStateAminoMsg): _184.GenesisState;
                        toAminoMsg(message: _184.GenesisState): _184.GenesisStateAminoMsg;
                        fromProtoMsg(message: _184.GenesisStateProtoMsg): _184.GenesisState;
                        toProto(message: _184.GenesisState): Uint8Array;
                        toProtoMsg(message: _184.GenesisState): _184.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _184.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ControllerGenesisState;
                        fromJSON(object: any): _184.ControllerGenesisState;
                        toJSON(message: _184.ControllerGenesisState): unknown;
                        fromPartial(object: Partial<_184.ControllerGenesisState>): _184.ControllerGenesisState;
                        fromAmino(object: _184.ControllerGenesisStateAmino): _184.ControllerGenesisState;
                        toAmino(message: _184.ControllerGenesisState): _184.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _184.ControllerGenesisStateAminoMsg): _184.ControllerGenesisState;
                        toAminoMsg(message: _184.ControllerGenesisState): _184.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _184.ControllerGenesisStateProtoMsg): _184.ControllerGenesisState;
                        toProto(message: _184.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _184.ControllerGenesisState): _184.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _184.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.HostGenesisState;
                        fromJSON(object: any): _184.HostGenesisState;
                        toJSON(message: _184.HostGenesisState): unknown;
                        fromPartial(object: Partial<_184.HostGenesisState>): _184.HostGenesisState;
                        fromAmino(object: _184.HostGenesisStateAmino): _184.HostGenesisState;
                        toAmino(message: _184.HostGenesisState): _184.HostGenesisStateAmino;
                        fromAminoMsg(object: _184.HostGenesisStateAminoMsg): _184.HostGenesisState;
                        toAminoMsg(message: _184.HostGenesisState): _184.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _184.HostGenesisStateProtoMsg): _184.HostGenesisState;
                        toProto(message: _184.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _184.HostGenesisState): _184.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _184.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ActiveChannel;
                        fromJSON(object: any): _184.ActiveChannel;
                        toJSON(message: _184.ActiveChannel): unknown;
                        fromPartial(object: Partial<_184.ActiveChannel>): _184.ActiveChannel;
                        fromAmino(object: _184.ActiveChannelAmino): _184.ActiveChannel;
                        toAmino(message: _184.ActiveChannel): _184.ActiveChannelAmino;
                        fromAminoMsg(object: _184.ActiveChannelAminoMsg): _184.ActiveChannel;
                        toAminoMsg(message: _184.ActiveChannel): _184.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _184.ActiveChannelProtoMsg): _184.ActiveChannel;
                        toProto(message: _184.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _184.ActiveChannel): _184.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _184.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.RegisteredInterchainAccount;
                        fromJSON(object: any): _184.RegisteredInterchainAccount;
                        toJSON(message: _184.RegisteredInterchainAccount): unknown;
                        fromPartial(object: Partial<_184.RegisteredInterchainAccount>): _184.RegisteredInterchainAccount;
                        fromAmino(object: _184.RegisteredInterchainAccountAmino): _184.RegisteredInterchainAccount;
                        toAmino(message: _184.RegisteredInterchainAccount): _184.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _184.RegisteredInterchainAccountAminoMsg): _184.RegisteredInterchainAccount;
                        toAminoMsg(message: _184.RegisteredInterchainAccount): _184.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _184.RegisteredInterchainAccountProtoMsg): _184.RegisteredInterchainAccount;
                        toProto(message: _184.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _184.RegisteredInterchainAccount): _184.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _353.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _186.QueryParamsRequest): Promise<_186.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _346.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _186.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryParamsRequest;
                        fromJSON(_: any): _186.QueryParamsRequest;
                        toJSON(_: _186.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_186.QueryParamsRequest>): _186.QueryParamsRequest;
                        fromAmino(_: _186.QueryParamsRequestAmino): _186.QueryParamsRequest;
                        toAmino(_: _186.QueryParamsRequest): _186.QueryParamsRequestAmino;
                        fromAminoMsg(object: _186.QueryParamsRequestAminoMsg): _186.QueryParamsRequest;
                        toAminoMsg(message: _186.QueryParamsRequest): _186.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _186.QueryParamsRequestProtoMsg): _186.QueryParamsRequest;
                        toProto(message: _186.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _186.QueryParamsRequest): _186.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _186.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.QueryParamsResponse;
                        fromJSON(object: any): _186.QueryParamsResponse;
                        toJSON(message: _186.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_186.QueryParamsResponse>): _186.QueryParamsResponse;
                        fromAmino(object: _186.QueryParamsResponseAmino): _186.QueryParamsResponse;
                        toAmino(message: _186.QueryParamsResponse): _186.QueryParamsResponseAmino;
                        fromAminoMsg(object: _186.QueryParamsResponseAminoMsg): _186.QueryParamsResponse;
                        toAminoMsg(message: _186.QueryParamsResponse): _186.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _186.QueryParamsResponseProtoMsg): _186.QueryParamsResponse;
                        toProto(message: _186.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _186.QueryParamsResponse): _186.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _185.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Params;
                        fromJSON(object: any): _185.Params;
                        toJSON(message: _185.Params): unknown;
                        fromPartial(object: Partial<_185.Params>): _185.Params;
                        fromAmino(object: _185.ParamsAmino): _185.Params;
                        toAmino(message: _185.Params): _185.ParamsAmino;
                        fromAminoMsg(object: _185.ParamsAminoMsg): _185.Params;
                        toAminoMsg(message: _185.Params): _185.ParamsAminoMsg;
                        fromProtoMsg(message: _185.ParamsProtoMsg): _185.Params;
                        toProto(message: _185.Params): Uint8Array;
                        toProtoMsg(message: _185.Params): _185.ParamsProtoMsg;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _189.Type;
                typeToJSON(object: _189.Type): string;
                Type: typeof _189.Type;
                TypeSDKType: typeof _189.Type;
                TypeAmino: typeof _189.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _189.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.InterchainAccountPacketData;
                    fromJSON(object: any): _189.InterchainAccountPacketData;
                    toJSON(message: _189.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_189.InterchainAccountPacketData>): _189.InterchainAccountPacketData;
                    fromAmino(object: _189.InterchainAccountPacketDataAmino): _189.InterchainAccountPacketData;
                    toAmino(message: _189.InterchainAccountPacketData): _189.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _189.InterchainAccountPacketDataAminoMsg): _189.InterchainAccountPacketData;
                    toAminoMsg(message: _189.InterchainAccountPacketData): _189.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _189.InterchainAccountPacketDataProtoMsg): _189.InterchainAccountPacketData;
                    toProto(message: _189.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _189.InterchainAccountPacketData): _189.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _189.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.CosmosTx;
                    fromJSON(object: any): _189.CosmosTx;
                    toJSON(message: _189.CosmosTx): unknown;
                    fromPartial(object: Partial<_189.CosmosTx>): _189.CosmosTx;
                    fromAmino(object: _189.CosmosTxAmino): _189.CosmosTx;
                    toAmino(message: _189.CosmosTx): _189.CosmosTxAmino;
                    fromAminoMsg(object: _189.CosmosTxAminoMsg): _189.CosmosTx;
                    toAminoMsg(message: _189.CosmosTx): _189.CosmosTxAminoMsg;
                    fromProtoMsg(message: _189.CosmosTxProtoMsg): _189.CosmosTx;
                    toProto(message: _189.CosmosTx): Uint8Array;
                    toProtoMsg(message: _189.CosmosTx): _189.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _188.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Metadata;
                    fromJSON(object: any): _188.Metadata;
                    toJSON(message: _188.Metadata): unknown;
                    fromPartial(object: Partial<_188.Metadata>): _188.Metadata;
                    fromAmino(object: _188.MetadataAmino): _188.Metadata;
                    toAmino(message: _188.Metadata): _188.MetadataAmino;
                    fromAminoMsg(object: _188.MetadataAminoMsg): _188.Metadata;
                    toAminoMsg(message: _188.Metadata): _188.MetadataAminoMsg;
                    fromProtoMsg(message: _188.MetadataProtoMsg): _188.Metadata;
                    toProto(message: _188.Metadata): Uint8Array;
                    toProtoMsg(message: _188.Metadata): _188.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _187.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.InterchainAccount;
                    fromJSON(object: any): _187.InterchainAccount;
                    toJSON(message: _187.InterchainAccount): unknown;
                    fromPartial(object: Partial<_187.InterchainAccount>): _187.InterchainAccount;
                    fromAmino(object: _187.InterchainAccountAmino): _187.InterchainAccount;
                    toAmino(message: _187.InterchainAccount): _187.InterchainAccountAmino;
                    fromAminoMsg(object: _187.InterchainAccountAminoMsg): _187.InterchainAccount;
                    toAminoMsg(message: _187.InterchainAccount): _187.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _187.InterchainAccountProtoMsg): _187.InterchainAccount;
                    toProto(message: _187.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _187.InterchainAccount): _187.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _360.MsgClientImpl;
                QueryClientImpl: typeof _354.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _192.QueryDenomTraceRequest): Promise<_192.QueryDenomTraceResponse>;
                    denomTraces(request?: _192.QueryDenomTracesRequest): Promise<_192.QueryDenomTracesResponse>;
                    params(request?: _192.QueryParamsRequest): Promise<_192.QueryParamsResponse>;
                    denomHash(request: _192.QueryDenomHashRequest): Promise<_192.QueryDenomHashResponse>;
                    escrowAddress(request: _192.QueryEscrowAddressRequest): Promise<_192.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _192.QueryTotalEscrowForDenomRequest): Promise<_192.QueryTotalEscrowForDenomResponse>;
                };
                LCDQueryClient: typeof _347.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _194.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _194.MsgTransfer): {
                            typeUrl: string;
                            value: _194.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _194.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _194.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _194.MsgTransfer): {
                            typeUrl: string;
                            value: _194.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _194.MsgTransfer) => _194.MsgTransferAmino;
                        fromAmino: (object: _194.MsgTransferAmino) => _194.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _194.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgTransfer;
                    fromJSON(object: any): _194.MsgTransfer;
                    toJSON(message: _194.MsgTransfer): unknown;
                    fromPartial(object: Partial<_194.MsgTransfer>): _194.MsgTransfer;
                    fromAmino(object: _194.MsgTransferAmino): _194.MsgTransfer;
                    toAmino(message: _194.MsgTransfer): _194.MsgTransferAmino;
                    fromAminoMsg(object: _194.MsgTransferAminoMsg): _194.MsgTransfer;
                    toAminoMsg(message: _194.MsgTransfer): _194.MsgTransferAminoMsg;
                    fromProtoMsg(message: _194.MsgTransferProtoMsg): _194.MsgTransfer;
                    toProto(message: _194.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _194.MsgTransfer): _194.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _194.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.MsgTransferResponse;
                    fromJSON(object: any): _194.MsgTransferResponse;
                    toJSON(message: _194.MsgTransferResponse): unknown;
                    fromPartial(object: Partial<_194.MsgTransferResponse>): _194.MsgTransferResponse;
                    fromAmino(object: _194.MsgTransferResponseAmino): _194.MsgTransferResponse;
                    toAmino(message: _194.MsgTransferResponse): _194.MsgTransferResponseAmino;
                    fromAminoMsg(object: _194.MsgTransferResponseAminoMsg): _194.MsgTransferResponse;
                    toAminoMsg(message: _194.MsgTransferResponse): _194.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _194.MsgTransferResponseProtoMsg): _194.MsgTransferResponse;
                    toProto(message: _194.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _194.MsgTransferResponse): _194.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _193.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.DenomTrace;
                    fromJSON(object: any): _193.DenomTrace;
                    toJSON(message: _193.DenomTrace): unknown;
                    fromPartial(object: Partial<_193.DenomTrace>): _193.DenomTrace;
                    fromAmino(object: _193.DenomTraceAmino): _193.DenomTrace;
                    toAmino(message: _193.DenomTrace): _193.DenomTraceAmino;
                    fromAminoMsg(object: _193.DenomTraceAminoMsg): _193.DenomTrace;
                    toAminoMsg(message: _193.DenomTrace): _193.DenomTraceAminoMsg;
                    fromProtoMsg(message: _193.DenomTraceProtoMsg): _193.DenomTrace;
                    toProto(message: _193.DenomTrace): Uint8Array;
                    toProtoMsg(message: _193.DenomTrace): _193.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _193.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Params;
                    fromJSON(object: any): _193.Params;
                    toJSON(message: _193.Params): unknown;
                    fromPartial(object: Partial<_193.Params>): _193.Params;
                    fromAmino(object: _193.ParamsAmino): _193.Params;
                    toAmino(message: _193.Params): _193.ParamsAmino;
                    fromAminoMsg(object: _193.ParamsAminoMsg): _193.Params;
                    toAminoMsg(message: _193.Params): _193.ParamsAminoMsg;
                    fromProtoMsg(message: _193.ParamsProtoMsg): _193.Params;
                    toProto(message: _193.Params): Uint8Array;
                    toProtoMsg(message: _193.Params): _193.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomTraceRequest;
                    fromJSON(object: any): _192.QueryDenomTraceRequest;
                    toJSON(message: _192.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_192.QueryDenomTraceRequest>): _192.QueryDenomTraceRequest;
                    fromAmino(object: _192.QueryDenomTraceRequestAmino): _192.QueryDenomTraceRequest;
                    toAmino(message: _192.QueryDenomTraceRequest): _192.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _192.QueryDenomTraceRequestAminoMsg): _192.QueryDenomTraceRequest;
                    toAminoMsg(message: _192.QueryDenomTraceRequest): _192.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomTraceRequestProtoMsg): _192.QueryDenomTraceRequest;
                    toProto(message: _192.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomTraceRequest): _192.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomTraceResponse;
                    fromJSON(object: any): _192.QueryDenomTraceResponse;
                    toJSON(message: _192.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_192.QueryDenomTraceResponse>): _192.QueryDenomTraceResponse;
                    fromAmino(object: _192.QueryDenomTraceResponseAmino): _192.QueryDenomTraceResponse;
                    toAmino(message: _192.QueryDenomTraceResponse): _192.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _192.QueryDenomTraceResponseAminoMsg): _192.QueryDenomTraceResponse;
                    toAminoMsg(message: _192.QueryDenomTraceResponse): _192.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomTraceResponseProtoMsg): _192.QueryDenomTraceResponse;
                    toProto(message: _192.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomTraceResponse): _192.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomTracesRequest;
                    fromJSON(object: any): _192.QueryDenomTracesRequest;
                    toJSON(message: _192.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_192.QueryDenomTracesRequest>): _192.QueryDenomTracesRequest;
                    fromAmino(object: _192.QueryDenomTracesRequestAmino): _192.QueryDenomTracesRequest;
                    toAmino(message: _192.QueryDenomTracesRequest): _192.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _192.QueryDenomTracesRequestAminoMsg): _192.QueryDenomTracesRequest;
                    toAminoMsg(message: _192.QueryDenomTracesRequest): _192.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomTracesRequestProtoMsg): _192.QueryDenomTracesRequest;
                    toProto(message: _192.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomTracesRequest): _192.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomTracesResponse;
                    fromJSON(object: any): _192.QueryDenomTracesResponse;
                    toJSON(message: _192.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_192.QueryDenomTracesResponse>): _192.QueryDenomTracesResponse;
                    fromAmino(object: _192.QueryDenomTracesResponseAmino): _192.QueryDenomTracesResponse;
                    toAmino(message: _192.QueryDenomTracesResponse): _192.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _192.QueryDenomTracesResponseAminoMsg): _192.QueryDenomTracesResponse;
                    toAminoMsg(message: _192.QueryDenomTracesResponse): _192.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomTracesResponseProtoMsg): _192.QueryDenomTracesResponse;
                    toProto(message: _192.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomTracesResponse): _192.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _192.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryParamsRequest;
                    fromJSON(_: any): _192.QueryParamsRequest;
                    toJSON(_: _192.QueryParamsRequest): unknown;
                    fromPartial(_: Partial<_192.QueryParamsRequest>): _192.QueryParamsRequest;
                    fromAmino(_: _192.QueryParamsRequestAmino): _192.QueryParamsRequest;
                    toAmino(_: _192.QueryParamsRequest): _192.QueryParamsRequestAmino;
                    fromAminoMsg(object: _192.QueryParamsRequestAminoMsg): _192.QueryParamsRequest;
                    toAminoMsg(message: _192.QueryParamsRequest): _192.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryParamsRequestProtoMsg): _192.QueryParamsRequest;
                    toProto(message: _192.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryParamsRequest): _192.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryParamsResponse;
                    fromJSON(object: any): _192.QueryParamsResponse;
                    toJSON(message: _192.QueryParamsResponse): unknown;
                    fromPartial(object: Partial<_192.QueryParamsResponse>): _192.QueryParamsResponse;
                    fromAmino(object: _192.QueryParamsResponseAmino): _192.QueryParamsResponse;
                    toAmino(message: _192.QueryParamsResponse): _192.QueryParamsResponseAmino;
                    fromAminoMsg(object: _192.QueryParamsResponseAminoMsg): _192.QueryParamsResponse;
                    toAminoMsg(message: _192.QueryParamsResponse): _192.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryParamsResponseProtoMsg): _192.QueryParamsResponse;
                    toProto(message: _192.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryParamsResponse): _192.QueryParamsResponseProtoMsg;
                };
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomHashRequest;
                    fromJSON(object: any): _192.QueryDenomHashRequest;
                    toJSON(message: _192.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_192.QueryDenomHashRequest>): _192.QueryDenomHashRequest;
                    fromAmino(object: _192.QueryDenomHashRequestAmino): _192.QueryDenomHashRequest;
                    toAmino(message: _192.QueryDenomHashRequest): _192.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _192.QueryDenomHashRequestAminoMsg): _192.QueryDenomHashRequest;
                    toAminoMsg(message: _192.QueryDenomHashRequest): _192.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomHashRequestProtoMsg): _192.QueryDenomHashRequest;
                    toProto(message: _192.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomHashRequest): _192.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryDenomHashResponse;
                    fromJSON(object: any): _192.QueryDenomHashResponse;
                    toJSON(message: _192.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_192.QueryDenomHashResponse>): _192.QueryDenomHashResponse;
                    fromAmino(object: _192.QueryDenomHashResponseAmino): _192.QueryDenomHashResponse;
                    toAmino(message: _192.QueryDenomHashResponse): _192.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _192.QueryDenomHashResponseAminoMsg): _192.QueryDenomHashResponse;
                    toAminoMsg(message: _192.QueryDenomHashResponse): _192.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryDenomHashResponseProtoMsg): _192.QueryDenomHashResponse;
                    toProto(message: _192.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryDenomHashResponse): _192.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryEscrowAddressRequest;
                    fromJSON(object: any): _192.QueryEscrowAddressRequest;
                    toJSON(message: _192.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_192.QueryEscrowAddressRequest>): _192.QueryEscrowAddressRequest;
                    fromAmino(object: _192.QueryEscrowAddressRequestAmino): _192.QueryEscrowAddressRequest;
                    toAmino(message: _192.QueryEscrowAddressRequest): _192.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _192.QueryEscrowAddressRequestAminoMsg): _192.QueryEscrowAddressRequest;
                    toAminoMsg(message: _192.QueryEscrowAddressRequest): _192.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryEscrowAddressRequestProtoMsg): _192.QueryEscrowAddressRequest;
                    toProto(message: _192.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryEscrowAddressRequest): _192.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryEscrowAddressResponse;
                    fromJSON(object: any): _192.QueryEscrowAddressResponse;
                    toJSON(message: _192.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_192.QueryEscrowAddressResponse>): _192.QueryEscrowAddressResponse;
                    fromAmino(object: _192.QueryEscrowAddressResponseAmino): _192.QueryEscrowAddressResponse;
                    toAmino(message: _192.QueryEscrowAddressResponse): _192.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _192.QueryEscrowAddressResponseAminoMsg): _192.QueryEscrowAddressResponse;
                    toAminoMsg(message: _192.QueryEscrowAddressResponse): _192.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryEscrowAddressResponseProtoMsg): _192.QueryEscrowAddressResponse;
                    toProto(message: _192.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryEscrowAddressResponse): _192.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryTotalEscrowForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _192.QueryTotalEscrowForDenomRequest;
                    toJSON(message: _192.QueryTotalEscrowForDenomRequest): unknown;
                    fromPartial(object: Partial<_192.QueryTotalEscrowForDenomRequest>): _192.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _192.QueryTotalEscrowForDenomRequestAmino): _192.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _192.QueryTotalEscrowForDenomRequest): _192.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _192.QueryTotalEscrowForDenomRequestAminoMsg): _192.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _192.QueryTotalEscrowForDenomRequest): _192.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryTotalEscrowForDenomRequestProtoMsg): _192.QueryTotalEscrowForDenomRequest;
                    toProto(message: _192.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryTotalEscrowForDenomRequest): _192.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryTotalEscrowForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _192.QueryTotalEscrowForDenomResponse;
                    toJSON(message: _192.QueryTotalEscrowForDenomResponse): unknown;
                    fromPartial(object: Partial<_192.QueryTotalEscrowForDenomResponse>): _192.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _192.QueryTotalEscrowForDenomResponseAmino): _192.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _192.QueryTotalEscrowForDenomResponse): _192.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _192.QueryTotalEscrowForDenomResponseAminoMsg): _192.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _192.QueryTotalEscrowForDenomResponse): _192.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryTotalEscrowForDenomResponseProtoMsg): _192.QueryTotalEscrowForDenomResponse;
                    toProto(message: _192.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryTotalEscrowForDenomResponse): _192.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _191.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GenesisState;
                    fromJSON(object: any): _191.GenesisState;
                    toJSON(message: _191.GenesisState): unknown;
                    fromPartial(object: Partial<_191.GenesisState>): _191.GenesisState;
                    fromAmino(object: _191.GenesisStateAmino): _191.GenesisState;
                    toAmino(message: _191.GenesisState): _191.GenesisStateAmino;
                    fromAminoMsg(object: _191.GenesisStateAminoMsg): _191.GenesisState;
                    toAminoMsg(message: _191.GenesisState): _191.GenesisStateAminoMsg;
                    fromProtoMsg(message: _191.GenesisStateProtoMsg): _191.GenesisState;
                    toProto(message: _191.GenesisState): Uint8Array;
                    toProtoMsg(message: _191.GenesisState): _191.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _190.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Allocation;
                    fromJSON(object: any): _190.Allocation;
                    toJSON(message: _190.Allocation): unknown;
                    fromPartial(object: Partial<_190.Allocation>): _190.Allocation;
                    fromAmino(object: _190.AllocationAmino): _190.Allocation;
                    toAmino(message: _190.Allocation): _190.AllocationAmino;
                    fromAminoMsg(object: _190.AllocationAminoMsg): _190.Allocation;
                    toAminoMsg(message: _190.Allocation): _190.AllocationAminoMsg;
                    fromProtoMsg(message: _190.AllocationProtoMsg): _190.Allocation;
                    toProto(message: _190.Allocation): Uint8Array;
                    toProtoMsg(message: _190.Allocation): _190.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _190.TransferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.TransferAuthorization;
                    fromJSON(object: any): _190.TransferAuthorization;
                    toJSON(message: _190.TransferAuthorization): unknown;
                    fromPartial(object: Partial<_190.TransferAuthorization>): _190.TransferAuthorization;
                    fromAmino(object: _190.TransferAuthorizationAmino): _190.TransferAuthorization;
                    toAmino(message: _190.TransferAuthorization): _190.TransferAuthorizationAmino;
                    fromAminoMsg(object: _190.TransferAuthorizationAminoMsg): _190.TransferAuthorization;
                    toAminoMsg(message: _190.TransferAuthorization): _190.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _190.TransferAuthorizationProtoMsg): _190.TransferAuthorization;
                    toProto(message: _190.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _190.TransferAuthorization): _190.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _195.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.FungibleTokenPacketData;
                    fromJSON(object: any): _195.FungibleTokenPacketData;
                    toJSON(message: _195.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_195.FungibleTokenPacketData>): _195.FungibleTokenPacketData;
                    fromAmino(object: _195.FungibleTokenPacketDataAmino): _195.FungibleTokenPacketData;
                    toAmino(message: _195.FungibleTokenPacketData): _195.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _195.FungibleTokenPacketDataAminoMsg): _195.FungibleTokenPacketData;
                    toAminoMsg(message: _195.FungibleTokenPacketData): _195.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _195.FungibleTokenPacketDataProtoMsg): _195.FungibleTokenPacketData;
                    toProto(message: _195.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _195.FungibleTokenPacketData): _195.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _361.MsgClientImpl;
                QueryClientImpl: typeof _355.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _198.QueryChannelRequest): Promise<_198.QueryChannelResponse>;
                    channels(request?: _198.QueryChannelsRequest): Promise<_198.QueryChannelsResponse>;
                    connectionChannels(request: _198.QueryConnectionChannelsRequest): Promise<_198.QueryConnectionChannelsResponse>;
                    channelClientState(request: _198.QueryChannelClientStateRequest): Promise<_198.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _198.QueryChannelConsensusStateRequest): Promise<_198.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _198.QueryPacketCommitmentRequest): Promise<_198.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _198.QueryPacketCommitmentsRequest): Promise<_198.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _198.QueryPacketReceiptRequest): Promise<_198.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _198.QueryPacketAcknowledgementRequest): Promise<_198.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _198.QueryPacketAcknowledgementsRequest): Promise<_198.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _198.QueryUnreceivedPacketsRequest): Promise<_198.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _198.QueryUnreceivedAcksRequest): Promise<_198.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _198.QueryNextSequenceReceiveRequest): Promise<_198.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _348.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _199.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _199.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _199.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _199.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _199.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _199.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _199.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _199.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _199.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _199.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _199.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _199.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _199.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _199.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _199.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _199.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _199.MsgRecvPacket): {
                            typeUrl: string;
                            value: _199.MsgRecvPacket;
                        };
                        timeout(value: _199.MsgTimeout): {
                            typeUrl: string;
                            value: _199.MsgTimeout;
                        };
                        timeoutOnClose(value: _199.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _199.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _199.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _199.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _199.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _199.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _199.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _199.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _199.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _199.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _199.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _199.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _199.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _199.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _199.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _199.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _199.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _199.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _199.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _199.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _199.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _199.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _199.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _199.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _199.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _199.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _199.MsgRecvPacket): {
                            typeUrl: string;
                            value: _199.MsgRecvPacket;
                        };
                        timeout(value: _199.MsgTimeout): {
                            typeUrl: string;
                            value: _199.MsgTimeout;
                        };
                        timeoutOnClose(value: _199.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _199.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _199.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _199.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelOpenInit) => _199.MsgChannelOpenInitAmino;
                        fromAmino: (object: _199.MsgChannelOpenInitAmino) => _199.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelOpenTry) => _199.MsgChannelOpenTryAmino;
                        fromAmino: (object: _199.MsgChannelOpenTryAmino) => _199.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelOpenAck) => _199.MsgChannelOpenAckAmino;
                        fromAmino: (object: _199.MsgChannelOpenAckAmino) => _199.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelOpenConfirm) => _199.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _199.MsgChannelOpenConfirmAmino) => _199.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelCloseInit) => _199.MsgChannelCloseInitAmino;
                        fromAmino: (object: _199.MsgChannelCloseInitAmino) => _199.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _199.MsgChannelCloseConfirm) => _199.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _199.MsgChannelCloseConfirmAmino) => _199.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _199.MsgRecvPacket) => _199.MsgRecvPacketAmino;
                        fromAmino: (object: _199.MsgRecvPacketAmino) => _199.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _199.MsgTimeout) => _199.MsgTimeoutAmino;
                        fromAmino: (object: _199.MsgTimeoutAmino) => _199.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _199.MsgTimeoutOnClose) => _199.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _199.MsgTimeoutOnCloseAmino) => _199.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _199.MsgAcknowledgement) => _199.MsgAcknowledgementAmino;
                        fromAmino: (object: _199.MsgAcknowledgementAmino) => _199.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _199.ResponseResultType;
                responseResultTypeToJSON(object: _199.ResponseResultType): string;
                ResponseResultType: typeof _199.ResponseResultType;
                ResponseResultTypeSDKType: typeof _199.ResponseResultType;
                ResponseResultTypeAmino: typeof _199.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenInit;
                    fromJSON(object: any): _199.MsgChannelOpenInit;
                    toJSON(message: _199.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenInit>): _199.MsgChannelOpenInit;
                    fromAmino(object: _199.MsgChannelOpenInitAmino): _199.MsgChannelOpenInit;
                    toAmino(message: _199.MsgChannelOpenInit): _199.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenInitAminoMsg): _199.MsgChannelOpenInit;
                    toAminoMsg(message: _199.MsgChannelOpenInit): _199.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenInitProtoMsg): _199.MsgChannelOpenInit;
                    toProto(message: _199.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenInit): _199.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _199.MsgChannelOpenInitResponse;
                    toJSON(message: _199.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenInitResponse>): _199.MsgChannelOpenInitResponse;
                    fromAmino(object: _199.MsgChannelOpenInitResponseAmino): _199.MsgChannelOpenInitResponse;
                    toAmino(message: _199.MsgChannelOpenInitResponse): _199.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenInitResponseAminoMsg): _199.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _199.MsgChannelOpenInitResponse): _199.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenInitResponseProtoMsg): _199.MsgChannelOpenInitResponse;
                    toProto(message: _199.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenInitResponse): _199.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenTry;
                    fromJSON(object: any): _199.MsgChannelOpenTry;
                    toJSON(message: _199.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenTry>): _199.MsgChannelOpenTry;
                    fromAmino(object: _199.MsgChannelOpenTryAmino): _199.MsgChannelOpenTry;
                    toAmino(message: _199.MsgChannelOpenTry): _199.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenTryAminoMsg): _199.MsgChannelOpenTry;
                    toAminoMsg(message: _199.MsgChannelOpenTry): _199.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenTryProtoMsg): _199.MsgChannelOpenTry;
                    toProto(message: _199.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenTry): _199.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _199.MsgChannelOpenTryResponse;
                    toJSON(message: _199.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenTryResponse>): _199.MsgChannelOpenTryResponse;
                    fromAmino(object: _199.MsgChannelOpenTryResponseAmino): _199.MsgChannelOpenTryResponse;
                    toAmino(message: _199.MsgChannelOpenTryResponse): _199.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenTryResponseAminoMsg): _199.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _199.MsgChannelOpenTryResponse): _199.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenTryResponseProtoMsg): _199.MsgChannelOpenTryResponse;
                    toProto(message: _199.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenTryResponse): _199.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenAck;
                    fromJSON(object: any): _199.MsgChannelOpenAck;
                    toJSON(message: _199.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenAck>): _199.MsgChannelOpenAck;
                    fromAmino(object: _199.MsgChannelOpenAckAmino): _199.MsgChannelOpenAck;
                    toAmino(message: _199.MsgChannelOpenAck): _199.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenAckAminoMsg): _199.MsgChannelOpenAck;
                    toAminoMsg(message: _199.MsgChannelOpenAck): _199.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenAckProtoMsg): _199.MsgChannelOpenAck;
                    toProto(message: _199.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenAck): _199.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _199.MsgChannelOpenAckResponse;
                    toJSON(_: _199.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelOpenAckResponse>): _199.MsgChannelOpenAckResponse;
                    fromAmino(_: _199.MsgChannelOpenAckResponseAmino): _199.MsgChannelOpenAckResponse;
                    toAmino(_: _199.MsgChannelOpenAckResponse): _199.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenAckResponseAminoMsg): _199.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _199.MsgChannelOpenAckResponse): _199.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenAckResponseProtoMsg): _199.MsgChannelOpenAckResponse;
                    toProto(message: _199.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenAckResponse): _199.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenConfirm;
                    fromJSON(object: any): _199.MsgChannelOpenConfirm;
                    toJSON(message: _199.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_199.MsgChannelOpenConfirm>): _199.MsgChannelOpenConfirm;
                    fromAmino(object: _199.MsgChannelOpenConfirmAmino): _199.MsgChannelOpenConfirm;
                    toAmino(message: _199.MsgChannelOpenConfirm): _199.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenConfirmAminoMsg): _199.MsgChannelOpenConfirm;
                    toAminoMsg(message: _199.MsgChannelOpenConfirm): _199.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenConfirmProtoMsg): _199.MsgChannelOpenConfirm;
                    toProto(message: _199.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenConfirm): _199.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _199.MsgChannelOpenConfirmResponse;
                    toJSON(_: _199.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelOpenConfirmResponse>): _199.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _199.MsgChannelOpenConfirmResponseAmino): _199.MsgChannelOpenConfirmResponse;
                    toAmino(_: _199.MsgChannelOpenConfirmResponse): _199.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelOpenConfirmResponseAminoMsg): _199.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _199.MsgChannelOpenConfirmResponse): _199.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelOpenConfirmResponseProtoMsg): _199.MsgChannelOpenConfirmResponse;
                    toProto(message: _199.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelOpenConfirmResponse): _199.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelCloseInit;
                    fromJSON(object: any): _199.MsgChannelCloseInit;
                    toJSON(message: _199.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_199.MsgChannelCloseInit>): _199.MsgChannelCloseInit;
                    fromAmino(object: _199.MsgChannelCloseInitAmino): _199.MsgChannelCloseInit;
                    toAmino(message: _199.MsgChannelCloseInit): _199.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _199.MsgChannelCloseInitAminoMsg): _199.MsgChannelCloseInit;
                    toAminoMsg(message: _199.MsgChannelCloseInit): _199.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelCloseInitProtoMsg): _199.MsgChannelCloseInit;
                    toProto(message: _199.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelCloseInit): _199.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _199.MsgChannelCloseInitResponse;
                    toJSON(_: _199.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelCloseInitResponse>): _199.MsgChannelCloseInitResponse;
                    fromAmino(_: _199.MsgChannelCloseInitResponseAmino): _199.MsgChannelCloseInitResponse;
                    toAmino(_: _199.MsgChannelCloseInitResponse): _199.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelCloseInitResponseAminoMsg): _199.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _199.MsgChannelCloseInitResponse): _199.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelCloseInitResponseProtoMsg): _199.MsgChannelCloseInitResponse;
                    toProto(message: _199.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelCloseInitResponse): _199.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _199.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelCloseConfirm;
                    fromJSON(object: any): _199.MsgChannelCloseConfirm;
                    toJSON(message: _199.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_199.MsgChannelCloseConfirm>): _199.MsgChannelCloseConfirm;
                    fromAmino(object: _199.MsgChannelCloseConfirmAmino): _199.MsgChannelCloseConfirm;
                    toAmino(message: _199.MsgChannelCloseConfirm): _199.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _199.MsgChannelCloseConfirmAminoMsg): _199.MsgChannelCloseConfirm;
                    toAminoMsg(message: _199.MsgChannelCloseConfirm): _199.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelCloseConfirmProtoMsg): _199.MsgChannelCloseConfirm;
                    toProto(message: _199.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelCloseConfirm): _199.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _199.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _199.MsgChannelCloseConfirmResponse;
                    toJSON(_: _199.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_199.MsgChannelCloseConfirmResponse>): _199.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _199.MsgChannelCloseConfirmResponseAmino): _199.MsgChannelCloseConfirmResponse;
                    toAmino(_: _199.MsgChannelCloseConfirmResponse): _199.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _199.MsgChannelCloseConfirmResponseAminoMsg): _199.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _199.MsgChannelCloseConfirmResponse): _199.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgChannelCloseConfirmResponseProtoMsg): _199.MsgChannelCloseConfirmResponse;
                    toProto(message: _199.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgChannelCloseConfirmResponse): _199.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _199.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgRecvPacket;
                    fromJSON(object: any): _199.MsgRecvPacket;
                    toJSON(message: _199.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_199.MsgRecvPacket>): _199.MsgRecvPacket;
                    fromAmino(object: _199.MsgRecvPacketAmino): _199.MsgRecvPacket;
                    toAmino(message: _199.MsgRecvPacket): _199.MsgRecvPacketAmino;
                    fromAminoMsg(object: _199.MsgRecvPacketAminoMsg): _199.MsgRecvPacket;
                    toAminoMsg(message: _199.MsgRecvPacket): _199.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _199.MsgRecvPacketProtoMsg): _199.MsgRecvPacket;
                    toProto(message: _199.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _199.MsgRecvPacket): _199.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _199.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgRecvPacketResponse;
                    fromJSON(object: any): _199.MsgRecvPacketResponse;
                    toJSON(message: _199.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_199.MsgRecvPacketResponse>): _199.MsgRecvPacketResponse;
                    fromAmino(object: _199.MsgRecvPacketResponseAmino): _199.MsgRecvPacketResponse;
                    toAmino(message: _199.MsgRecvPacketResponse): _199.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _199.MsgRecvPacketResponseAminoMsg): _199.MsgRecvPacketResponse;
                    toAminoMsg(message: _199.MsgRecvPacketResponse): _199.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgRecvPacketResponseProtoMsg): _199.MsgRecvPacketResponse;
                    toProto(message: _199.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgRecvPacketResponse): _199.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _199.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgTimeout;
                    fromJSON(object: any): _199.MsgTimeout;
                    toJSON(message: _199.MsgTimeout): unknown;
                    fromPartial(object: Partial<_199.MsgTimeout>): _199.MsgTimeout;
                    fromAmino(object: _199.MsgTimeoutAmino): _199.MsgTimeout;
                    toAmino(message: _199.MsgTimeout): _199.MsgTimeoutAmino;
                    fromAminoMsg(object: _199.MsgTimeoutAminoMsg): _199.MsgTimeout;
                    toAminoMsg(message: _199.MsgTimeout): _199.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _199.MsgTimeoutProtoMsg): _199.MsgTimeout;
                    toProto(message: _199.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _199.MsgTimeout): _199.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _199.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgTimeoutResponse;
                    fromJSON(object: any): _199.MsgTimeoutResponse;
                    toJSON(message: _199.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_199.MsgTimeoutResponse>): _199.MsgTimeoutResponse;
                    fromAmino(object: _199.MsgTimeoutResponseAmino): _199.MsgTimeoutResponse;
                    toAmino(message: _199.MsgTimeoutResponse): _199.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _199.MsgTimeoutResponseAminoMsg): _199.MsgTimeoutResponse;
                    toAminoMsg(message: _199.MsgTimeoutResponse): _199.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgTimeoutResponseProtoMsg): _199.MsgTimeoutResponse;
                    toProto(message: _199.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgTimeoutResponse): _199.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _199.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgTimeoutOnClose;
                    fromJSON(object: any): _199.MsgTimeoutOnClose;
                    toJSON(message: _199.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_199.MsgTimeoutOnClose>): _199.MsgTimeoutOnClose;
                    fromAmino(object: _199.MsgTimeoutOnCloseAmino): _199.MsgTimeoutOnClose;
                    toAmino(message: _199.MsgTimeoutOnClose): _199.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _199.MsgTimeoutOnCloseAminoMsg): _199.MsgTimeoutOnClose;
                    toAminoMsg(message: _199.MsgTimeoutOnClose): _199.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _199.MsgTimeoutOnCloseProtoMsg): _199.MsgTimeoutOnClose;
                    toProto(message: _199.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _199.MsgTimeoutOnClose): _199.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _199.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _199.MsgTimeoutOnCloseResponse;
                    toJSON(message: _199.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_199.MsgTimeoutOnCloseResponse>): _199.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _199.MsgTimeoutOnCloseResponseAmino): _199.MsgTimeoutOnCloseResponse;
                    toAmino(message: _199.MsgTimeoutOnCloseResponse): _199.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _199.MsgTimeoutOnCloseResponseAminoMsg): _199.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _199.MsgTimeoutOnCloseResponse): _199.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgTimeoutOnCloseResponseProtoMsg): _199.MsgTimeoutOnCloseResponse;
                    toProto(message: _199.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgTimeoutOnCloseResponse): _199.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _199.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgAcknowledgement;
                    fromJSON(object: any): _199.MsgAcknowledgement;
                    toJSON(message: _199.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_199.MsgAcknowledgement>): _199.MsgAcknowledgement;
                    fromAmino(object: _199.MsgAcknowledgementAmino): _199.MsgAcknowledgement;
                    toAmino(message: _199.MsgAcknowledgement): _199.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _199.MsgAcknowledgementAminoMsg): _199.MsgAcknowledgement;
                    toAminoMsg(message: _199.MsgAcknowledgement): _199.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _199.MsgAcknowledgementProtoMsg): _199.MsgAcknowledgement;
                    toProto(message: _199.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _199.MsgAcknowledgement): _199.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _199.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MsgAcknowledgementResponse;
                    fromJSON(object: any): _199.MsgAcknowledgementResponse;
                    toJSON(message: _199.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_199.MsgAcknowledgementResponse>): _199.MsgAcknowledgementResponse;
                    fromAmino(object: _199.MsgAcknowledgementResponseAmino): _199.MsgAcknowledgementResponse;
                    toAmino(message: _199.MsgAcknowledgementResponse): _199.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _199.MsgAcknowledgementResponseAminoMsg): _199.MsgAcknowledgementResponse;
                    toAminoMsg(message: _199.MsgAcknowledgementResponse): _199.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _199.MsgAcknowledgementResponseProtoMsg): _199.MsgAcknowledgementResponse;
                    toProto(message: _199.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _199.MsgAcknowledgementResponse): _199.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelRequest;
                    fromJSON(object: any): _198.QueryChannelRequest;
                    toJSON(message: _198.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_198.QueryChannelRequest>): _198.QueryChannelRequest;
                    fromAmino(object: _198.QueryChannelRequestAmino): _198.QueryChannelRequest;
                    toAmino(message: _198.QueryChannelRequest): _198.QueryChannelRequestAmino;
                    fromAminoMsg(object: _198.QueryChannelRequestAminoMsg): _198.QueryChannelRequest;
                    toAminoMsg(message: _198.QueryChannelRequest): _198.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelRequestProtoMsg): _198.QueryChannelRequest;
                    toProto(message: _198.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelRequest): _198.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelResponse;
                    fromJSON(object: any): _198.QueryChannelResponse;
                    toJSON(message: _198.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_198.QueryChannelResponse>): _198.QueryChannelResponse;
                    fromAmino(object: _198.QueryChannelResponseAmino): _198.QueryChannelResponse;
                    toAmino(message: _198.QueryChannelResponse): _198.QueryChannelResponseAmino;
                    fromAminoMsg(object: _198.QueryChannelResponseAminoMsg): _198.QueryChannelResponse;
                    toAminoMsg(message: _198.QueryChannelResponse): _198.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelResponseProtoMsg): _198.QueryChannelResponse;
                    toProto(message: _198.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelResponse): _198.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelsRequest;
                    fromJSON(object: any): _198.QueryChannelsRequest;
                    toJSON(message: _198.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryChannelsRequest>): _198.QueryChannelsRequest;
                    fromAmino(object: _198.QueryChannelsRequestAmino): _198.QueryChannelsRequest;
                    toAmino(message: _198.QueryChannelsRequest): _198.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _198.QueryChannelsRequestAminoMsg): _198.QueryChannelsRequest;
                    toAminoMsg(message: _198.QueryChannelsRequest): _198.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelsRequestProtoMsg): _198.QueryChannelsRequest;
                    toProto(message: _198.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelsRequest): _198.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelsResponse;
                    fromJSON(object: any): _198.QueryChannelsResponse;
                    toJSON(message: _198.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryChannelsResponse>): _198.QueryChannelsResponse;
                    fromAmino(object: _198.QueryChannelsResponseAmino): _198.QueryChannelsResponse;
                    toAmino(message: _198.QueryChannelsResponse): _198.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _198.QueryChannelsResponseAminoMsg): _198.QueryChannelsResponse;
                    toAminoMsg(message: _198.QueryChannelsResponse): _198.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelsResponseProtoMsg): _198.QueryChannelsResponse;
                    toProto(message: _198.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelsResponse): _198.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _198.QueryConnectionChannelsRequest;
                    toJSON(message: _198.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionChannelsRequest>): _198.QueryConnectionChannelsRequest;
                    fromAmino(object: _198.QueryConnectionChannelsRequestAmino): _198.QueryConnectionChannelsRequest;
                    toAmino(message: _198.QueryConnectionChannelsRequest): _198.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _198.QueryConnectionChannelsRequestAminoMsg): _198.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _198.QueryConnectionChannelsRequest): _198.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionChannelsRequestProtoMsg): _198.QueryConnectionChannelsRequest;
                    toProto(message: _198.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionChannelsRequest): _198.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _198.QueryConnectionChannelsResponse;
                    toJSON(message: _198.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryConnectionChannelsResponse>): _198.QueryConnectionChannelsResponse;
                    fromAmino(object: _198.QueryConnectionChannelsResponseAmino): _198.QueryConnectionChannelsResponse;
                    toAmino(message: _198.QueryConnectionChannelsResponse): _198.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _198.QueryConnectionChannelsResponseAminoMsg): _198.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _198.QueryConnectionChannelsResponse): _198.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryConnectionChannelsResponseProtoMsg): _198.QueryConnectionChannelsResponse;
                    toProto(message: _198.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryConnectionChannelsResponse): _198.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelClientStateRequest;
                    fromJSON(object: any): _198.QueryChannelClientStateRequest;
                    toJSON(message: _198.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_198.QueryChannelClientStateRequest>): _198.QueryChannelClientStateRequest;
                    fromAmino(object: _198.QueryChannelClientStateRequestAmino): _198.QueryChannelClientStateRequest;
                    toAmino(message: _198.QueryChannelClientStateRequest): _198.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _198.QueryChannelClientStateRequestAminoMsg): _198.QueryChannelClientStateRequest;
                    toAminoMsg(message: _198.QueryChannelClientStateRequest): _198.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelClientStateRequestProtoMsg): _198.QueryChannelClientStateRequest;
                    toProto(message: _198.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelClientStateRequest): _198.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelClientStateResponse;
                    fromJSON(object: any): _198.QueryChannelClientStateResponse;
                    toJSON(message: _198.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_198.QueryChannelClientStateResponse>): _198.QueryChannelClientStateResponse;
                    fromAmino(object: _198.QueryChannelClientStateResponseAmino): _198.QueryChannelClientStateResponse;
                    toAmino(message: _198.QueryChannelClientStateResponse): _198.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _198.QueryChannelClientStateResponseAminoMsg): _198.QueryChannelClientStateResponse;
                    toAminoMsg(message: _198.QueryChannelClientStateResponse): _198.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelClientStateResponseProtoMsg): _198.QueryChannelClientStateResponse;
                    toProto(message: _198.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelClientStateResponse): _198.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _198.QueryChannelConsensusStateRequest;
                    toJSON(message: _198.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_198.QueryChannelConsensusStateRequest>): _198.QueryChannelConsensusStateRequest;
                    fromAmino(object: _198.QueryChannelConsensusStateRequestAmino): _198.QueryChannelConsensusStateRequest;
                    toAmino(message: _198.QueryChannelConsensusStateRequest): _198.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _198.QueryChannelConsensusStateRequestAminoMsg): _198.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _198.QueryChannelConsensusStateRequest): _198.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelConsensusStateRequestProtoMsg): _198.QueryChannelConsensusStateRequest;
                    toProto(message: _198.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelConsensusStateRequest): _198.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _198.QueryChannelConsensusStateResponse;
                    toJSON(message: _198.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_198.QueryChannelConsensusStateResponse>): _198.QueryChannelConsensusStateResponse;
                    fromAmino(object: _198.QueryChannelConsensusStateResponseAmino): _198.QueryChannelConsensusStateResponse;
                    toAmino(message: _198.QueryChannelConsensusStateResponse): _198.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _198.QueryChannelConsensusStateResponseAminoMsg): _198.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _198.QueryChannelConsensusStateResponse): _198.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryChannelConsensusStateResponseProtoMsg): _198.QueryChannelConsensusStateResponse;
                    toProto(message: _198.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryChannelConsensusStateResponse): _198.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _198.QueryPacketCommitmentRequest;
                    toJSON(message: _198.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketCommitmentRequest>): _198.QueryPacketCommitmentRequest;
                    fromAmino(object: _198.QueryPacketCommitmentRequestAmino): _198.QueryPacketCommitmentRequest;
                    toAmino(message: _198.QueryPacketCommitmentRequest): _198.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketCommitmentRequestAminoMsg): _198.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _198.QueryPacketCommitmentRequest): _198.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketCommitmentRequestProtoMsg): _198.QueryPacketCommitmentRequest;
                    toProto(message: _198.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketCommitmentRequest): _198.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _198.QueryPacketCommitmentResponse;
                    toJSON(message: _198.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketCommitmentResponse>): _198.QueryPacketCommitmentResponse;
                    fromAmino(object: _198.QueryPacketCommitmentResponseAmino): _198.QueryPacketCommitmentResponse;
                    toAmino(message: _198.QueryPacketCommitmentResponse): _198.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketCommitmentResponseAminoMsg): _198.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _198.QueryPacketCommitmentResponse): _198.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketCommitmentResponseProtoMsg): _198.QueryPacketCommitmentResponse;
                    toProto(message: _198.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketCommitmentResponse): _198.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _198.QueryPacketCommitmentsRequest;
                    toJSON(message: _198.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketCommitmentsRequest>): _198.QueryPacketCommitmentsRequest;
                    fromAmino(object: _198.QueryPacketCommitmentsRequestAmino): _198.QueryPacketCommitmentsRequest;
                    toAmino(message: _198.QueryPacketCommitmentsRequest): _198.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketCommitmentsRequestAminoMsg): _198.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _198.QueryPacketCommitmentsRequest): _198.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketCommitmentsRequestProtoMsg): _198.QueryPacketCommitmentsRequest;
                    toProto(message: _198.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketCommitmentsRequest): _198.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _198.QueryPacketCommitmentsResponse;
                    toJSON(message: _198.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketCommitmentsResponse>): _198.QueryPacketCommitmentsResponse;
                    fromAmino(object: _198.QueryPacketCommitmentsResponseAmino): _198.QueryPacketCommitmentsResponse;
                    toAmino(message: _198.QueryPacketCommitmentsResponse): _198.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketCommitmentsResponseAminoMsg): _198.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _198.QueryPacketCommitmentsResponse): _198.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketCommitmentsResponseProtoMsg): _198.QueryPacketCommitmentsResponse;
                    toProto(message: _198.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketCommitmentsResponse): _198.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketReceiptRequest;
                    fromJSON(object: any): _198.QueryPacketReceiptRequest;
                    toJSON(message: _198.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketReceiptRequest>): _198.QueryPacketReceiptRequest;
                    fromAmino(object: _198.QueryPacketReceiptRequestAmino): _198.QueryPacketReceiptRequest;
                    toAmino(message: _198.QueryPacketReceiptRequest): _198.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketReceiptRequestAminoMsg): _198.QueryPacketReceiptRequest;
                    toAminoMsg(message: _198.QueryPacketReceiptRequest): _198.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketReceiptRequestProtoMsg): _198.QueryPacketReceiptRequest;
                    toProto(message: _198.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketReceiptRequest): _198.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketReceiptResponse;
                    fromJSON(object: any): _198.QueryPacketReceiptResponse;
                    toJSON(message: _198.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketReceiptResponse>): _198.QueryPacketReceiptResponse;
                    fromAmino(object: _198.QueryPacketReceiptResponseAmino): _198.QueryPacketReceiptResponse;
                    toAmino(message: _198.QueryPacketReceiptResponse): _198.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketReceiptResponseAminoMsg): _198.QueryPacketReceiptResponse;
                    toAminoMsg(message: _198.QueryPacketReceiptResponse): _198.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketReceiptResponseProtoMsg): _198.QueryPacketReceiptResponse;
                    toProto(message: _198.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketReceiptResponse): _198.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _198.QueryPacketAcknowledgementRequest;
                    toJSON(message: _198.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketAcknowledgementRequest>): _198.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _198.QueryPacketAcknowledgementRequestAmino): _198.QueryPacketAcknowledgementRequest;
                    toAmino(message: _198.QueryPacketAcknowledgementRequest): _198.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketAcknowledgementRequestAminoMsg): _198.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _198.QueryPacketAcknowledgementRequest): _198.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketAcknowledgementRequestProtoMsg): _198.QueryPacketAcknowledgementRequest;
                    toProto(message: _198.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketAcknowledgementRequest): _198.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _198.QueryPacketAcknowledgementResponse;
                    toJSON(message: _198.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketAcknowledgementResponse>): _198.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _198.QueryPacketAcknowledgementResponseAmino): _198.QueryPacketAcknowledgementResponse;
                    toAmino(message: _198.QueryPacketAcknowledgementResponse): _198.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketAcknowledgementResponseAminoMsg): _198.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _198.QueryPacketAcknowledgementResponse): _198.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketAcknowledgementResponseProtoMsg): _198.QueryPacketAcknowledgementResponse;
                    toProto(message: _198.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketAcknowledgementResponse): _198.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _198.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _198.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryPacketAcknowledgementsRequest>): _198.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _198.QueryPacketAcknowledgementsRequestAmino): _198.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _198.QueryPacketAcknowledgementsRequest): _198.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _198.QueryPacketAcknowledgementsRequestAminoMsg): _198.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _198.QueryPacketAcknowledgementsRequest): _198.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketAcknowledgementsRequestProtoMsg): _198.QueryPacketAcknowledgementsRequest;
                    toProto(message: _198.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketAcknowledgementsRequest): _198.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _198.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _198.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryPacketAcknowledgementsResponse>): _198.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _198.QueryPacketAcknowledgementsResponseAmino): _198.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _198.QueryPacketAcknowledgementsResponse): _198.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _198.QueryPacketAcknowledgementsResponseAminoMsg): _198.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _198.QueryPacketAcknowledgementsResponse): _198.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryPacketAcknowledgementsResponseProtoMsg): _198.QueryPacketAcknowledgementsResponse;
                    toProto(message: _198.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryPacketAcknowledgementsResponse): _198.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _198.QueryUnreceivedPacketsRequest;
                    toJSON(message: _198.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_198.QueryUnreceivedPacketsRequest>): _198.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _198.QueryUnreceivedPacketsRequestAmino): _198.QueryUnreceivedPacketsRequest;
                    toAmino(message: _198.QueryUnreceivedPacketsRequest): _198.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _198.QueryUnreceivedPacketsRequestAminoMsg): _198.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _198.QueryUnreceivedPacketsRequest): _198.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryUnreceivedPacketsRequestProtoMsg): _198.QueryUnreceivedPacketsRequest;
                    toProto(message: _198.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryUnreceivedPacketsRequest): _198.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _198.QueryUnreceivedPacketsResponse;
                    toJSON(message: _198.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_198.QueryUnreceivedPacketsResponse>): _198.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _198.QueryUnreceivedPacketsResponseAmino): _198.QueryUnreceivedPacketsResponse;
                    toAmino(message: _198.QueryUnreceivedPacketsResponse): _198.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _198.QueryUnreceivedPacketsResponseAminoMsg): _198.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _198.QueryUnreceivedPacketsResponse): _198.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryUnreceivedPacketsResponseProtoMsg): _198.QueryUnreceivedPacketsResponse;
                    toProto(message: _198.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryUnreceivedPacketsResponse): _198.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _198.QueryUnreceivedAcksRequest;
                    toJSON(message: _198.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_198.QueryUnreceivedAcksRequest>): _198.QueryUnreceivedAcksRequest;
                    fromAmino(object: _198.QueryUnreceivedAcksRequestAmino): _198.QueryUnreceivedAcksRequest;
                    toAmino(message: _198.QueryUnreceivedAcksRequest): _198.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _198.QueryUnreceivedAcksRequestAminoMsg): _198.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _198.QueryUnreceivedAcksRequest): _198.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryUnreceivedAcksRequestProtoMsg): _198.QueryUnreceivedAcksRequest;
                    toProto(message: _198.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryUnreceivedAcksRequest): _198.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _198.QueryUnreceivedAcksResponse;
                    toJSON(message: _198.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_198.QueryUnreceivedAcksResponse>): _198.QueryUnreceivedAcksResponse;
                    fromAmino(object: _198.QueryUnreceivedAcksResponseAmino): _198.QueryUnreceivedAcksResponse;
                    toAmino(message: _198.QueryUnreceivedAcksResponse): _198.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _198.QueryUnreceivedAcksResponseAminoMsg): _198.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _198.QueryUnreceivedAcksResponse): _198.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryUnreceivedAcksResponseProtoMsg): _198.QueryUnreceivedAcksResponse;
                    toProto(message: _198.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryUnreceivedAcksResponse): _198.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _198.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _198.QueryNextSequenceReceiveRequest;
                    toJSON(message: _198.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_198.QueryNextSequenceReceiveRequest>): _198.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _198.QueryNextSequenceReceiveRequestAmino): _198.QueryNextSequenceReceiveRequest;
                    toAmino(message: _198.QueryNextSequenceReceiveRequest): _198.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _198.QueryNextSequenceReceiveRequestAminoMsg): _198.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _198.QueryNextSequenceReceiveRequest): _198.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _198.QueryNextSequenceReceiveRequestProtoMsg): _198.QueryNextSequenceReceiveRequest;
                    toProto(message: _198.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _198.QueryNextSequenceReceiveRequest): _198.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _198.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _198.QueryNextSequenceReceiveResponse;
                    toJSON(message: _198.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_198.QueryNextSequenceReceiveResponse>): _198.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _198.QueryNextSequenceReceiveResponseAmino): _198.QueryNextSequenceReceiveResponse;
                    toAmino(message: _198.QueryNextSequenceReceiveResponse): _198.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _198.QueryNextSequenceReceiveResponseAminoMsg): _198.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _198.QueryNextSequenceReceiveResponse): _198.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _198.QueryNextSequenceReceiveResponseProtoMsg): _198.QueryNextSequenceReceiveResponse;
                    toProto(message: _198.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _198.QueryNextSequenceReceiveResponse): _198.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _197.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.GenesisState;
                    fromJSON(object: any): _197.GenesisState;
                    toJSON(message: _197.GenesisState): unknown;
                    fromPartial(object: Partial<_197.GenesisState>): _197.GenesisState;
                    fromAmino(object: _197.GenesisStateAmino): _197.GenesisState;
                    toAmino(message: _197.GenesisState): _197.GenesisStateAmino;
                    fromAminoMsg(object: _197.GenesisStateAminoMsg): _197.GenesisState;
                    toAminoMsg(message: _197.GenesisState): _197.GenesisStateAminoMsg;
                    fromProtoMsg(message: _197.GenesisStateProtoMsg): _197.GenesisState;
                    toProto(message: _197.GenesisState): Uint8Array;
                    toProtoMsg(message: _197.GenesisState): _197.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _197.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.PacketSequence;
                    fromJSON(object: any): _197.PacketSequence;
                    toJSON(message: _197.PacketSequence): unknown;
                    fromPartial(object: Partial<_197.PacketSequence>): _197.PacketSequence;
                    fromAmino(object: _197.PacketSequenceAmino): _197.PacketSequence;
                    toAmino(message: _197.PacketSequence): _197.PacketSequenceAmino;
                    fromAminoMsg(object: _197.PacketSequenceAminoMsg): _197.PacketSequence;
                    toAminoMsg(message: _197.PacketSequence): _197.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _197.PacketSequenceProtoMsg): _197.PacketSequence;
                    toProto(message: _197.PacketSequence): Uint8Array;
                    toProtoMsg(message: _197.PacketSequence): _197.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _196.State;
                stateToJSON(object: _196.State): string;
                orderFromJSON(object: any): _196.Order;
                orderToJSON(object: _196.Order): string;
                State: typeof _196.State;
                StateSDKType: typeof _196.State;
                StateAmino: typeof _196.State;
                Order: typeof _196.Order;
                OrderSDKType: typeof _196.Order;
                OrderAmino: typeof _196.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _196.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Channel;
                    fromJSON(object: any): _196.Channel;
                    toJSON(message: _196.Channel): unknown;
                    fromPartial(object: Partial<_196.Channel>): _196.Channel;
                    fromAmino(object: _196.ChannelAmino): _196.Channel;
                    toAmino(message: _196.Channel): _196.ChannelAmino;
                    fromAminoMsg(object: _196.ChannelAminoMsg): _196.Channel;
                    toAminoMsg(message: _196.Channel): _196.ChannelAminoMsg;
                    fromProtoMsg(message: _196.ChannelProtoMsg): _196.Channel;
                    toProto(message: _196.Channel): Uint8Array;
                    toProtoMsg(message: _196.Channel): _196.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _196.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.IdentifiedChannel;
                    fromJSON(object: any): _196.IdentifiedChannel;
                    toJSON(message: _196.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_196.IdentifiedChannel>): _196.IdentifiedChannel;
                    fromAmino(object: _196.IdentifiedChannelAmino): _196.IdentifiedChannel;
                    toAmino(message: _196.IdentifiedChannel): _196.IdentifiedChannelAmino;
                    fromAminoMsg(object: _196.IdentifiedChannelAminoMsg): _196.IdentifiedChannel;
                    toAminoMsg(message: _196.IdentifiedChannel): _196.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _196.IdentifiedChannelProtoMsg): _196.IdentifiedChannel;
                    toProto(message: _196.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _196.IdentifiedChannel): _196.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _196.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Counterparty;
                    fromJSON(object: any): _196.Counterparty;
                    toJSON(message: _196.Counterparty): unknown;
                    fromPartial(object: Partial<_196.Counterparty>): _196.Counterparty;
                    fromAmino(object: _196.CounterpartyAmino): _196.Counterparty;
                    toAmino(message: _196.Counterparty): _196.CounterpartyAmino;
                    fromAminoMsg(object: _196.CounterpartyAminoMsg): _196.Counterparty;
                    toAminoMsg(message: _196.Counterparty): _196.CounterpartyAminoMsg;
                    fromProtoMsg(message: _196.CounterpartyProtoMsg): _196.Counterparty;
                    toProto(message: _196.Counterparty): Uint8Array;
                    toProtoMsg(message: _196.Counterparty): _196.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _196.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Packet;
                    fromJSON(object: any): _196.Packet;
                    toJSON(message: _196.Packet): unknown;
                    fromPartial(object: Partial<_196.Packet>): _196.Packet;
                    fromAmino(object: _196.PacketAmino): _196.Packet;
                    toAmino(message: _196.Packet): _196.PacketAmino;
                    fromAminoMsg(object: _196.PacketAminoMsg): _196.Packet;
                    toAminoMsg(message: _196.Packet): _196.PacketAminoMsg;
                    fromProtoMsg(message: _196.PacketProtoMsg): _196.Packet;
                    toProto(message: _196.Packet): Uint8Array;
                    toProtoMsg(message: _196.Packet): _196.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _196.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.PacketState;
                    fromJSON(object: any): _196.PacketState;
                    toJSON(message: _196.PacketState): unknown;
                    fromPartial(object: Partial<_196.PacketState>): _196.PacketState;
                    fromAmino(object: _196.PacketStateAmino): _196.PacketState;
                    toAmino(message: _196.PacketState): _196.PacketStateAmino;
                    fromAminoMsg(object: _196.PacketStateAminoMsg): _196.PacketState;
                    toAminoMsg(message: _196.PacketState): _196.PacketStateAminoMsg;
                    fromProtoMsg(message: _196.PacketStateProtoMsg): _196.PacketState;
                    toProto(message: _196.PacketState): Uint8Array;
                    toProtoMsg(message: _196.PacketState): _196.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _196.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.PacketId;
                    fromJSON(object: any): _196.PacketId;
                    toJSON(message: _196.PacketId): unknown;
                    fromPartial(object: Partial<_196.PacketId>): _196.PacketId;
                    fromAmino(object: _196.PacketIdAmino): _196.PacketId;
                    toAmino(message: _196.PacketId): _196.PacketIdAmino;
                    fromAminoMsg(object: _196.PacketIdAminoMsg): _196.PacketId;
                    toAminoMsg(message: _196.PacketId): _196.PacketIdAminoMsg;
                    fromProtoMsg(message: _196.PacketIdProtoMsg): _196.PacketId;
                    toProto(message: _196.PacketId): Uint8Array;
                    toProtoMsg(message: _196.PacketId): _196.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _196.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Acknowledgement;
                    fromJSON(object: any): _196.Acknowledgement;
                    toJSON(message: _196.Acknowledgement): unknown;
                    fromPartial(object: Partial<_196.Acknowledgement>): _196.Acknowledgement;
                    fromAmino(object: _196.AcknowledgementAmino): _196.Acknowledgement;
                    toAmino(message: _196.Acknowledgement): _196.AcknowledgementAmino;
                    fromAminoMsg(object: _196.AcknowledgementAminoMsg): _196.Acknowledgement;
                    toAminoMsg(message: _196.Acknowledgement): _196.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _196.AcknowledgementProtoMsg): _196.Acknowledgement;
                    toProto(message: _196.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _196.Acknowledgement): _196.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _362.MsgClientImpl;
                QueryClientImpl: typeof _356.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _202.QueryClientStateRequest): Promise<_202.QueryClientStateResponse>;
                    clientStates(request?: _202.QueryClientStatesRequest): Promise<_202.QueryClientStatesResponse>;
                    consensusState(request: _202.QueryConsensusStateRequest): Promise<_202.QueryConsensusStateResponse>;
                    consensusStates(request: _202.QueryConsensusStatesRequest): Promise<_202.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _202.QueryConsensusStateHeightsRequest): Promise<_202.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _202.QueryClientStatusRequest): Promise<_202.QueryClientStatusResponse>;
                    clientParams(request?: _202.QueryClientParamsRequest): Promise<_202.QueryClientParamsResponse>;
                    upgradedClientState(request?: _202.QueryUpgradedClientStateRequest): Promise<_202.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _202.QueryUpgradedConsensusStateRequest): Promise<_202.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _349.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _203.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _203.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _203.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _203.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _203.MsgCreateClient): {
                            typeUrl: string;
                            value: _203.MsgCreateClient;
                        };
                        updateClient(value: _203.MsgUpdateClient): {
                            typeUrl: string;
                            value: _203.MsgUpdateClient;
                        };
                        upgradeClient(value: _203.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _203.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _203.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _203.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _203.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _203.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _203.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _203.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _203.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _203.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _203.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _203.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _203.MsgCreateClient): {
                            typeUrl: string;
                            value: _203.MsgCreateClient;
                        };
                        updateClient(value: _203.MsgUpdateClient): {
                            typeUrl: string;
                            value: _203.MsgUpdateClient;
                        };
                        upgradeClient(value: _203.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _203.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _203.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _203.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _203.MsgCreateClient) => _203.MsgCreateClientAmino;
                        fromAmino: (object: _203.MsgCreateClientAmino) => _203.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _203.MsgUpdateClient) => _203.MsgUpdateClientAmino;
                        fromAmino: (object: _203.MsgUpdateClientAmino) => _203.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _203.MsgUpgradeClient) => _203.MsgUpgradeClientAmino;
                        fromAmino: (object: _203.MsgUpgradeClientAmino) => _203.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _203.MsgSubmitMisbehaviour) => _203.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _203.MsgSubmitMisbehaviourAmino) => _203.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _203.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgCreateClient;
                    fromJSON(object: any): _203.MsgCreateClient;
                    toJSON(message: _203.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_203.MsgCreateClient>): _203.MsgCreateClient;
                    fromAmino(object: _203.MsgCreateClientAmino): _203.MsgCreateClient;
                    toAmino(message: _203.MsgCreateClient): _203.MsgCreateClientAmino;
                    fromAminoMsg(object: _203.MsgCreateClientAminoMsg): _203.MsgCreateClient;
                    toAminoMsg(message: _203.MsgCreateClient): _203.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _203.MsgCreateClientProtoMsg): _203.MsgCreateClient;
                    toProto(message: _203.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _203.MsgCreateClient): _203.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _203.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgCreateClientResponse;
                    fromJSON(_: any): _203.MsgCreateClientResponse;
                    toJSON(_: _203.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_203.MsgCreateClientResponse>): _203.MsgCreateClientResponse;
                    fromAmino(_: _203.MsgCreateClientResponseAmino): _203.MsgCreateClientResponse;
                    toAmino(_: _203.MsgCreateClientResponse): _203.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _203.MsgCreateClientResponseAminoMsg): _203.MsgCreateClientResponse;
                    toAminoMsg(message: _203.MsgCreateClientResponse): _203.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _203.MsgCreateClientResponseProtoMsg): _203.MsgCreateClientResponse;
                    toProto(message: _203.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _203.MsgCreateClientResponse): _203.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _203.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUpdateClient;
                    fromJSON(object: any): _203.MsgUpdateClient;
                    toJSON(message: _203.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_203.MsgUpdateClient>): _203.MsgUpdateClient;
                    fromAmino(object: _203.MsgUpdateClientAmino): _203.MsgUpdateClient;
                    toAmino(message: _203.MsgUpdateClient): _203.MsgUpdateClientAmino;
                    fromAminoMsg(object: _203.MsgUpdateClientAminoMsg): _203.MsgUpdateClient;
                    toAminoMsg(message: _203.MsgUpdateClient): _203.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _203.MsgUpdateClientProtoMsg): _203.MsgUpdateClient;
                    toProto(message: _203.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _203.MsgUpdateClient): _203.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _203.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUpdateClientResponse;
                    fromJSON(_: any): _203.MsgUpdateClientResponse;
                    toJSON(_: _203.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_203.MsgUpdateClientResponse>): _203.MsgUpdateClientResponse;
                    fromAmino(_: _203.MsgUpdateClientResponseAmino): _203.MsgUpdateClientResponse;
                    toAmino(_: _203.MsgUpdateClientResponse): _203.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _203.MsgUpdateClientResponseAminoMsg): _203.MsgUpdateClientResponse;
                    toAminoMsg(message: _203.MsgUpdateClientResponse): _203.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _203.MsgUpdateClientResponseProtoMsg): _203.MsgUpdateClientResponse;
                    toProto(message: _203.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _203.MsgUpdateClientResponse): _203.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _203.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUpgradeClient;
                    fromJSON(object: any): _203.MsgUpgradeClient;
                    toJSON(message: _203.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_203.MsgUpgradeClient>): _203.MsgUpgradeClient;
                    fromAmino(object: _203.MsgUpgradeClientAmino): _203.MsgUpgradeClient;
                    toAmino(message: _203.MsgUpgradeClient): _203.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _203.MsgUpgradeClientAminoMsg): _203.MsgUpgradeClient;
                    toAminoMsg(message: _203.MsgUpgradeClient): _203.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _203.MsgUpgradeClientProtoMsg): _203.MsgUpgradeClient;
                    toProto(message: _203.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _203.MsgUpgradeClient): _203.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _203.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgUpgradeClientResponse;
                    fromJSON(_: any): _203.MsgUpgradeClientResponse;
                    toJSON(_: _203.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_203.MsgUpgradeClientResponse>): _203.MsgUpgradeClientResponse;
                    fromAmino(_: _203.MsgUpgradeClientResponseAmino): _203.MsgUpgradeClientResponse;
                    toAmino(_: _203.MsgUpgradeClientResponse): _203.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _203.MsgUpgradeClientResponseAminoMsg): _203.MsgUpgradeClientResponse;
                    toAminoMsg(message: _203.MsgUpgradeClientResponse): _203.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _203.MsgUpgradeClientResponseProtoMsg): _203.MsgUpgradeClientResponse;
                    toProto(message: _203.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _203.MsgUpgradeClientResponse): _203.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _203.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _203.MsgSubmitMisbehaviour;
                    toJSON(message: _203.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_203.MsgSubmitMisbehaviour>): _203.MsgSubmitMisbehaviour;
                    fromAmino(object: _203.MsgSubmitMisbehaviourAmino): _203.MsgSubmitMisbehaviour;
                    toAmino(message: _203.MsgSubmitMisbehaviour): _203.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _203.MsgSubmitMisbehaviourAminoMsg): _203.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _203.MsgSubmitMisbehaviour): _203.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _203.MsgSubmitMisbehaviourProtoMsg): _203.MsgSubmitMisbehaviour;
                    toProto(message: _203.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _203.MsgSubmitMisbehaviour): _203.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _203.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _203.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _203.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_203.MsgSubmitMisbehaviourResponse>): _203.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _203.MsgSubmitMisbehaviourResponseAmino): _203.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _203.MsgSubmitMisbehaviourResponse): _203.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _203.MsgSubmitMisbehaviourResponseAminoMsg): _203.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _203.MsgSubmitMisbehaviourResponse): _203.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _203.MsgSubmitMisbehaviourResponseProtoMsg): _203.MsgSubmitMisbehaviourResponse;
                    toProto(message: _203.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _203.MsgSubmitMisbehaviourResponse): _203.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStateRequest;
                    fromJSON(object: any): _202.QueryClientStateRequest;
                    toJSON(message: _202.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_202.QueryClientStateRequest>): _202.QueryClientStateRequest;
                    fromAmino(object: _202.QueryClientStateRequestAmino): _202.QueryClientStateRequest;
                    toAmino(message: _202.QueryClientStateRequest): _202.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _202.QueryClientStateRequestAminoMsg): _202.QueryClientStateRequest;
                    toAminoMsg(message: _202.QueryClientStateRequest): _202.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStateRequestProtoMsg): _202.QueryClientStateRequest;
                    toProto(message: _202.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStateRequest): _202.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStateResponse;
                    fromJSON(object: any): _202.QueryClientStateResponse;
                    toJSON(message: _202.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_202.QueryClientStateResponse>): _202.QueryClientStateResponse;
                    fromAmino(object: _202.QueryClientStateResponseAmino): _202.QueryClientStateResponse;
                    toAmino(message: _202.QueryClientStateResponse): _202.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _202.QueryClientStateResponseAminoMsg): _202.QueryClientStateResponse;
                    toAminoMsg(message: _202.QueryClientStateResponse): _202.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStateResponseProtoMsg): _202.QueryClientStateResponse;
                    toProto(message: _202.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStateResponse): _202.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStatesRequest;
                    fromJSON(object: any): _202.QueryClientStatesRequest;
                    toJSON(message: _202.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_202.QueryClientStatesRequest>): _202.QueryClientStatesRequest;
                    fromAmino(object: _202.QueryClientStatesRequestAmino): _202.QueryClientStatesRequest;
                    toAmino(message: _202.QueryClientStatesRequest): _202.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _202.QueryClientStatesRequestAminoMsg): _202.QueryClientStatesRequest;
                    toAminoMsg(message: _202.QueryClientStatesRequest): _202.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStatesRequestProtoMsg): _202.QueryClientStatesRequest;
                    toProto(message: _202.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStatesRequest): _202.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStatesResponse;
                    fromJSON(object: any): _202.QueryClientStatesResponse;
                    toJSON(message: _202.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_202.QueryClientStatesResponse>): _202.QueryClientStatesResponse;
                    fromAmino(object: _202.QueryClientStatesResponseAmino): _202.QueryClientStatesResponse;
                    toAmino(message: _202.QueryClientStatesResponse): _202.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _202.QueryClientStatesResponseAminoMsg): _202.QueryClientStatesResponse;
                    toAminoMsg(message: _202.QueryClientStatesResponse): _202.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStatesResponseProtoMsg): _202.QueryClientStatesResponse;
                    toProto(message: _202.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStatesResponse): _202.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStateRequest;
                    fromJSON(object: any): _202.QueryConsensusStateRequest;
                    toJSON(message: _202.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStateRequest>): _202.QueryConsensusStateRequest;
                    fromAmino(object: _202.QueryConsensusStateRequestAmino): _202.QueryConsensusStateRequest;
                    toAmino(message: _202.QueryConsensusStateRequest): _202.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _202.QueryConsensusStateRequestAminoMsg): _202.QueryConsensusStateRequest;
                    toAminoMsg(message: _202.QueryConsensusStateRequest): _202.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStateRequestProtoMsg): _202.QueryConsensusStateRequest;
                    toProto(message: _202.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStateRequest): _202.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStateResponse;
                    fromJSON(object: any): _202.QueryConsensusStateResponse;
                    toJSON(message: _202.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStateResponse>): _202.QueryConsensusStateResponse;
                    fromAmino(object: _202.QueryConsensusStateResponseAmino): _202.QueryConsensusStateResponse;
                    toAmino(message: _202.QueryConsensusStateResponse): _202.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _202.QueryConsensusStateResponseAminoMsg): _202.QueryConsensusStateResponse;
                    toAminoMsg(message: _202.QueryConsensusStateResponse): _202.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStateResponseProtoMsg): _202.QueryConsensusStateResponse;
                    toProto(message: _202.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStateResponse): _202.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStatesRequest;
                    fromJSON(object: any): _202.QueryConsensusStatesRequest;
                    toJSON(message: _202.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStatesRequest>): _202.QueryConsensusStatesRequest;
                    fromAmino(object: _202.QueryConsensusStatesRequestAmino): _202.QueryConsensusStatesRequest;
                    toAmino(message: _202.QueryConsensusStatesRequest): _202.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _202.QueryConsensusStatesRequestAminoMsg): _202.QueryConsensusStatesRequest;
                    toAminoMsg(message: _202.QueryConsensusStatesRequest): _202.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStatesRequestProtoMsg): _202.QueryConsensusStatesRequest;
                    toProto(message: _202.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStatesRequest): _202.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStatesResponse;
                    fromJSON(object: any): _202.QueryConsensusStatesResponse;
                    toJSON(message: _202.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStatesResponse>): _202.QueryConsensusStatesResponse;
                    fromAmino(object: _202.QueryConsensusStatesResponseAmino): _202.QueryConsensusStatesResponse;
                    toAmino(message: _202.QueryConsensusStatesResponse): _202.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _202.QueryConsensusStatesResponseAminoMsg): _202.QueryConsensusStatesResponse;
                    toAminoMsg(message: _202.QueryConsensusStatesResponse): _202.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStatesResponseProtoMsg): _202.QueryConsensusStatesResponse;
                    toProto(message: _202.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStatesResponse): _202.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _202.QueryConsensusStateHeightsRequest;
                    toJSON(message: _202.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStateHeightsRequest>): _202.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _202.QueryConsensusStateHeightsRequestAmino): _202.QueryConsensusStateHeightsRequest;
                    toAmino(message: _202.QueryConsensusStateHeightsRequest): _202.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _202.QueryConsensusStateHeightsRequestAminoMsg): _202.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _202.QueryConsensusStateHeightsRequest): _202.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStateHeightsRequestProtoMsg): _202.QueryConsensusStateHeightsRequest;
                    toProto(message: _202.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStateHeightsRequest): _202.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _202.QueryConsensusStateHeightsResponse;
                    toJSON(message: _202.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_202.QueryConsensusStateHeightsResponse>): _202.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _202.QueryConsensusStateHeightsResponseAmino): _202.QueryConsensusStateHeightsResponse;
                    toAmino(message: _202.QueryConsensusStateHeightsResponse): _202.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _202.QueryConsensusStateHeightsResponseAminoMsg): _202.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _202.QueryConsensusStateHeightsResponse): _202.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryConsensusStateHeightsResponseProtoMsg): _202.QueryConsensusStateHeightsResponse;
                    toProto(message: _202.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryConsensusStateHeightsResponse): _202.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStatusRequest;
                    fromJSON(object: any): _202.QueryClientStatusRequest;
                    toJSON(message: _202.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_202.QueryClientStatusRequest>): _202.QueryClientStatusRequest;
                    fromAmino(object: _202.QueryClientStatusRequestAmino): _202.QueryClientStatusRequest;
                    toAmino(message: _202.QueryClientStatusRequest): _202.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _202.QueryClientStatusRequestAminoMsg): _202.QueryClientStatusRequest;
                    toAminoMsg(message: _202.QueryClientStatusRequest): _202.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStatusRequestProtoMsg): _202.QueryClientStatusRequest;
                    toProto(message: _202.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStatusRequest): _202.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientStatusResponse;
                    fromJSON(object: any): _202.QueryClientStatusResponse;
                    toJSON(message: _202.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_202.QueryClientStatusResponse>): _202.QueryClientStatusResponse;
                    fromAmino(object: _202.QueryClientStatusResponseAmino): _202.QueryClientStatusResponse;
                    toAmino(message: _202.QueryClientStatusResponse): _202.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _202.QueryClientStatusResponseAminoMsg): _202.QueryClientStatusResponse;
                    toAminoMsg(message: _202.QueryClientStatusResponse): _202.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryClientStatusResponseProtoMsg): _202.QueryClientStatusResponse;
                    toProto(message: _202.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryClientStatusResponse): _202.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _202.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientParamsRequest;
                    fromJSON(_: any): _202.QueryClientParamsRequest;
                    toJSON(_: _202.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_202.QueryClientParamsRequest>): _202.QueryClientParamsRequest;
                    fromAmino(_: _202.QueryClientParamsRequestAmino): _202.QueryClientParamsRequest;
                    toAmino(_: _202.QueryClientParamsRequest): _202.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _202.QueryClientParamsRequestAminoMsg): _202.QueryClientParamsRequest;
                    toAminoMsg(message: _202.QueryClientParamsRequest): _202.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryClientParamsRequestProtoMsg): _202.QueryClientParamsRequest;
                    toProto(message: _202.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryClientParamsRequest): _202.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryClientParamsResponse;
                    fromJSON(object: any): _202.QueryClientParamsResponse;
                    toJSON(message: _202.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_202.QueryClientParamsResponse>): _202.QueryClientParamsResponse;
                    fromAmino(object: _202.QueryClientParamsResponseAmino): _202.QueryClientParamsResponse;
                    toAmino(message: _202.QueryClientParamsResponse): _202.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _202.QueryClientParamsResponseAminoMsg): _202.QueryClientParamsResponse;
                    toAminoMsg(message: _202.QueryClientParamsResponse): _202.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryClientParamsResponseProtoMsg): _202.QueryClientParamsResponse;
                    toProto(message: _202.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryClientParamsResponse): _202.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _202.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _202.QueryUpgradedClientStateRequest;
                    toJSON(_: _202.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_202.QueryUpgradedClientStateRequest>): _202.QueryUpgradedClientStateRequest;
                    fromAmino(_: _202.QueryUpgradedClientStateRequestAmino): _202.QueryUpgradedClientStateRequest;
                    toAmino(_: _202.QueryUpgradedClientStateRequest): _202.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _202.QueryUpgradedClientStateRequestAminoMsg): _202.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _202.QueryUpgradedClientStateRequest): _202.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryUpgradedClientStateRequestProtoMsg): _202.QueryUpgradedClientStateRequest;
                    toProto(message: _202.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryUpgradedClientStateRequest): _202.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _202.QueryUpgradedClientStateResponse;
                    toJSON(message: _202.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_202.QueryUpgradedClientStateResponse>): _202.QueryUpgradedClientStateResponse;
                    fromAmino(object: _202.QueryUpgradedClientStateResponseAmino): _202.QueryUpgradedClientStateResponse;
                    toAmino(message: _202.QueryUpgradedClientStateResponse): _202.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _202.QueryUpgradedClientStateResponseAminoMsg): _202.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _202.QueryUpgradedClientStateResponse): _202.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryUpgradedClientStateResponseProtoMsg): _202.QueryUpgradedClientStateResponse;
                    toProto(message: _202.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryUpgradedClientStateResponse): _202.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _202.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _202.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _202.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_202.QueryUpgradedConsensusStateRequest>): _202.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _202.QueryUpgradedConsensusStateRequestAmino): _202.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _202.QueryUpgradedConsensusStateRequest): _202.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _202.QueryUpgradedConsensusStateRequestAminoMsg): _202.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _202.QueryUpgradedConsensusStateRequest): _202.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _202.QueryUpgradedConsensusStateRequestProtoMsg): _202.QueryUpgradedConsensusStateRequest;
                    toProto(message: _202.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _202.QueryUpgradedConsensusStateRequest): _202.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _202.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _202.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _202.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_202.QueryUpgradedConsensusStateResponse>): _202.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _202.QueryUpgradedConsensusStateResponseAmino): _202.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _202.QueryUpgradedConsensusStateResponse): _202.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _202.QueryUpgradedConsensusStateResponseAminoMsg): _202.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _202.QueryUpgradedConsensusStateResponse): _202.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _202.QueryUpgradedConsensusStateResponseProtoMsg): _202.QueryUpgradedConsensusStateResponse;
                    toProto(message: _202.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _202.QueryUpgradedConsensusStateResponse): _202.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _201.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.GenesisState;
                    fromJSON(object: any): _201.GenesisState;
                    toJSON(message: _201.GenesisState): unknown;
                    fromPartial(object: Partial<_201.GenesisState>): _201.GenesisState;
                    fromAmino(object: _201.GenesisStateAmino): _201.GenesisState;
                    toAmino(message: _201.GenesisState): _201.GenesisStateAmino;
                    fromAminoMsg(object: _201.GenesisStateAminoMsg): _201.GenesisState;
                    toAminoMsg(message: _201.GenesisState): _201.GenesisStateAminoMsg;
                    fromProtoMsg(message: _201.GenesisStateProtoMsg): _201.GenesisState;
                    toProto(message: _201.GenesisState): Uint8Array;
                    toProtoMsg(message: _201.GenesisState): _201.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _201.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.GenesisMetadata;
                    fromJSON(object: any): _201.GenesisMetadata;
                    toJSON(message: _201.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_201.GenesisMetadata>): _201.GenesisMetadata;
                    fromAmino(object: _201.GenesisMetadataAmino): _201.GenesisMetadata;
                    toAmino(message: _201.GenesisMetadata): _201.GenesisMetadataAmino;
                    fromAminoMsg(object: _201.GenesisMetadataAminoMsg): _201.GenesisMetadata;
                    toAminoMsg(message: _201.GenesisMetadata): _201.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _201.GenesisMetadataProtoMsg): _201.GenesisMetadata;
                    toProto(message: _201.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _201.GenesisMetadata): _201.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _201.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _201.IdentifiedGenesisMetadata;
                    toJSON(message: _201.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_201.IdentifiedGenesisMetadata>): _201.IdentifiedGenesisMetadata;
                    fromAmino(object: _201.IdentifiedGenesisMetadataAmino): _201.IdentifiedGenesisMetadata;
                    toAmino(message: _201.IdentifiedGenesisMetadata): _201.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _201.IdentifiedGenesisMetadataAminoMsg): _201.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _201.IdentifiedGenesisMetadata): _201.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _201.IdentifiedGenesisMetadataProtoMsg): _201.IdentifiedGenesisMetadata;
                    toProto(message: _201.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _201.IdentifiedGenesisMetadata): _201.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _200.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.IdentifiedClientState;
                    fromJSON(object: any): _200.IdentifiedClientState;
                    toJSON(message: _200.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_200.IdentifiedClientState>): _200.IdentifiedClientState;
                    fromAmino(object: _200.IdentifiedClientStateAmino): _200.IdentifiedClientState;
                    toAmino(message: _200.IdentifiedClientState): _200.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _200.IdentifiedClientStateAminoMsg): _200.IdentifiedClientState;
                    toAminoMsg(message: _200.IdentifiedClientState): _200.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _200.IdentifiedClientStateProtoMsg): _200.IdentifiedClientState;
                    toProto(message: _200.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _200.IdentifiedClientState): _200.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _200.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ConsensusStateWithHeight;
                    fromJSON(object: any): _200.ConsensusStateWithHeight;
                    toJSON(message: _200.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_200.ConsensusStateWithHeight>): _200.ConsensusStateWithHeight;
                    fromAmino(object: _200.ConsensusStateWithHeightAmino): _200.ConsensusStateWithHeight;
                    toAmino(message: _200.ConsensusStateWithHeight): _200.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _200.ConsensusStateWithHeightAminoMsg): _200.ConsensusStateWithHeight;
                    toAminoMsg(message: _200.ConsensusStateWithHeight): _200.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _200.ConsensusStateWithHeightProtoMsg): _200.ConsensusStateWithHeight;
                    toProto(message: _200.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _200.ConsensusStateWithHeight): _200.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _200.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ClientConsensusStates;
                    fromJSON(object: any): _200.ClientConsensusStates;
                    toJSON(message: _200.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_200.ClientConsensusStates>): _200.ClientConsensusStates;
                    fromAmino(object: _200.ClientConsensusStatesAmino): _200.ClientConsensusStates;
                    toAmino(message: _200.ClientConsensusStates): _200.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _200.ClientConsensusStatesAminoMsg): _200.ClientConsensusStates;
                    toAminoMsg(message: _200.ClientConsensusStates): _200.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _200.ClientConsensusStatesProtoMsg): _200.ClientConsensusStates;
                    toProto(message: _200.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _200.ClientConsensusStates): _200.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _200.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.ClientUpdateProposal;
                    fromJSON(object: any): _200.ClientUpdateProposal;
                    toJSON(message: _200.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_200.ClientUpdateProposal>): _200.ClientUpdateProposal;
                    fromAmino(object: _200.ClientUpdateProposalAmino): _200.ClientUpdateProposal;
                    toAmino(message: _200.ClientUpdateProposal): _200.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _200.ClientUpdateProposalAminoMsg): _200.ClientUpdateProposal;
                    toAminoMsg(message: _200.ClientUpdateProposal): _200.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _200.ClientUpdateProposalProtoMsg): _200.ClientUpdateProposal;
                    toProto(message: _200.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _200.ClientUpdateProposal): _200.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _200.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.UpgradeProposal;
                    fromJSON(object: any): _200.UpgradeProposal;
                    toJSON(message: _200.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_200.UpgradeProposal>): _200.UpgradeProposal;
                    fromAmino(object: _200.UpgradeProposalAmino): _200.UpgradeProposal;
                    toAmino(message: _200.UpgradeProposal): _200.UpgradeProposalAmino;
                    fromAminoMsg(object: _200.UpgradeProposalAminoMsg): _200.UpgradeProposal;
                    toAminoMsg(message: _200.UpgradeProposal): _200.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _200.UpgradeProposalProtoMsg): _200.UpgradeProposal;
                    toProto(message: _200.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _200.UpgradeProposal): _200.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _200.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Height;
                    fromJSON(object: any): _200.Height;
                    toJSON(message: _200.Height): unknown;
                    fromPartial(object: Partial<_200.Height>): _200.Height;
                    fromAmino(object: _200.HeightAmino): _200.Height;
                    toAmino(message: _200.Height): _200.HeightAmino;
                    fromAminoMsg(object: _200.HeightAminoMsg): _200.Height;
                    toAminoMsg(message: _200.Height): _200.HeightAminoMsg;
                    fromProtoMsg(message: _200.HeightProtoMsg): _200.Height;
                    toProto(message: _200.Height): Uint8Array;
                    toProtoMsg(message: _200.Height): _200.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _200.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Params;
                    fromJSON(object: any): _200.Params;
                    toJSON(message: _200.Params): unknown;
                    fromPartial(object: Partial<_200.Params>): _200.Params;
                    fromAmino(object: _200.ParamsAmino): _200.Params;
                    toAmino(message: _200.Params): _200.ParamsAmino;
                    fromAminoMsg(object: _200.ParamsAminoMsg): _200.Params;
                    toAminoMsg(message: _200.Params): _200.ParamsAminoMsg;
                    fromProtoMsg(message: _200.ParamsProtoMsg): _200.Params;
                    toProto(message: _200.Params): Uint8Array;
                    toProtoMsg(message: _200.Params): _200.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _204.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MerkleRoot;
                    fromJSON(object: any): _204.MerkleRoot;
                    toJSON(message: _204.MerkleRoot): unknown;
                    fromPartial(object: Partial<_204.MerkleRoot>): _204.MerkleRoot;
                    fromAmino(object: _204.MerkleRootAmino): _204.MerkleRoot;
                    toAmino(message: _204.MerkleRoot): _204.MerkleRootAmino;
                    fromAminoMsg(object: _204.MerkleRootAminoMsg): _204.MerkleRoot;
                    toAminoMsg(message: _204.MerkleRoot): _204.MerkleRootAminoMsg;
                    fromProtoMsg(message: _204.MerkleRootProtoMsg): _204.MerkleRoot;
                    toProto(message: _204.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _204.MerkleRoot): _204.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _204.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MerklePrefix;
                    fromJSON(object: any): _204.MerklePrefix;
                    toJSON(message: _204.MerklePrefix): unknown;
                    fromPartial(object: Partial<_204.MerklePrefix>): _204.MerklePrefix;
                    fromAmino(object: _204.MerklePrefixAmino): _204.MerklePrefix;
                    toAmino(message: _204.MerklePrefix): _204.MerklePrefixAmino;
                    fromAminoMsg(object: _204.MerklePrefixAminoMsg): _204.MerklePrefix;
                    toAminoMsg(message: _204.MerklePrefix): _204.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _204.MerklePrefixProtoMsg): _204.MerklePrefix;
                    toProto(message: _204.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _204.MerklePrefix): _204.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _204.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MerklePath;
                    fromJSON(object: any): _204.MerklePath;
                    toJSON(message: _204.MerklePath): unknown;
                    fromPartial(object: Partial<_204.MerklePath>): _204.MerklePath;
                    fromAmino(object: _204.MerklePathAmino): _204.MerklePath;
                    toAmino(message: _204.MerklePath): _204.MerklePathAmino;
                    fromAminoMsg(object: _204.MerklePathAminoMsg): _204.MerklePath;
                    toAminoMsg(message: _204.MerklePath): _204.MerklePathAminoMsg;
                    fromProtoMsg(message: _204.MerklePathProtoMsg): _204.MerklePath;
                    toProto(message: _204.MerklePath): Uint8Array;
                    toProtoMsg(message: _204.MerklePath): _204.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _204.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MerkleProof;
                    fromJSON(object: any): _204.MerkleProof;
                    toJSON(message: _204.MerkleProof): unknown;
                    fromPartial(object: Partial<_204.MerkleProof>): _204.MerkleProof;
                    fromAmino(object: _204.MerkleProofAmino): _204.MerkleProof;
                    toAmino(message: _204.MerkleProof): _204.MerkleProofAmino;
                    fromAminoMsg(object: _204.MerkleProofAminoMsg): _204.MerkleProof;
                    toAminoMsg(message: _204.MerkleProof): _204.MerkleProofAminoMsg;
                    fromProtoMsg(message: _204.MerkleProofProtoMsg): _204.MerkleProof;
                    toProto(message: _204.MerkleProof): Uint8Array;
                    toProtoMsg(message: _204.MerkleProof): _204.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _363.MsgClientImpl;
                QueryClientImpl: typeof _357.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _207.QueryConnectionRequest): Promise<_207.QueryConnectionResponse>;
                    connections(request?: _207.QueryConnectionsRequest): Promise<_207.QueryConnectionsResponse>;
                    clientConnections(request: _207.QueryClientConnectionsRequest): Promise<_207.QueryClientConnectionsResponse>;
                    connectionClientState(request: _207.QueryConnectionClientStateRequest): Promise<_207.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _207.QueryConnectionConsensusStateRequest): Promise<_207.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _207.QueryConnectionParamsRequest): Promise<_207.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _350.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _208.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _208.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _208.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _208.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _208.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _208.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _208.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _208.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _208.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _208.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _208.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _208.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _208.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _208.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _208.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _208.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _208.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _208.MsgConnectionOpenInit) => _208.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _208.MsgConnectionOpenInitAmino) => _208.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _208.MsgConnectionOpenTry) => _208.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _208.MsgConnectionOpenTryAmino) => _208.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _208.MsgConnectionOpenAck) => _208.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _208.MsgConnectionOpenAckAmino) => _208.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _208.MsgConnectionOpenConfirm) => _208.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _208.MsgConnectionOpenConfirmAmino) => _208.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _208.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenInit;
                    fromJSON(object: any): _208.MsgConnectionOpenInit;
                    toJSON(message: _208.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_208.MsgConnectionOpenInit>): _208.MsgConnectionOpenInit;
                    fromAmino(object: _208.MsgConnectionOpenInitAmino): _208.MsgConnectionOpenInit;
                    toAmino(message: _208.MsgConnectionOpenInit): _208.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenInitAminoMsg): _208.MsgConnectionOpenInit;
                    toAminoMsg(message: _208.MsgConnectionOpenInit): _208.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenInitProtoMsg): _208.MsgConnectionOpenInit;
                    toProto(message: _208.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenInit): _208.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _208.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _208.MsgConnectionOpenInitResponse;
                    toJSON(_: _208.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_208.MsgConnectionOpenInitResponse>): _208.MsgConnectionOpenInitResponse;
                    fromAmino(_: _208.MsgConnectionOpenInitResponseAmino): _208.MsgConnectionOpenInitResponse;
                    toAmino(_: _208.MsgConnectionOpenInitResponse): _208.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenInitResponseAminoMsg): _208.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _208.MsgConnectionOpenInitResponse): _208.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenInitResponseProtoMsg): _208.MsgConnectionOpenInitResponse;
                    toProto(message: _208.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenInitResponse): _208.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _208.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenTry;
                    fromJSON(object: any): _208.MsgConnectionOpenTry;
                    toJSON(message: _208.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_208.MsgConnectionOpenTry>): _208.MsgConnectionOpenTry;
                    fromAmino(object: _208.MsgConnectionOpenTryAmino): _208.MsgConnectionOpenTry;
                    toAmino(message: _208.MsgConnectionOpenTry): _208.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenTryAminoMsg): _208.MsgConnectionOpenTry;
                    toAminoMsg(message: _208.MsgConnectionOpenTry): _208.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenTryProtoMsg): _208.MsgConnectionOpenTry;
                    toProto(message: _208.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenTry): _208.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _208.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _208.MsgConnectionOpenTryResponse;
                    toJSON(_: _208.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_208.MsgConnectionOpenTryResponse>): _208.MsgConnectionOpenTryResponse;
                    fromAmino(_: _208.MsgConnectionOpenTryResponseAmino): _208.MsgConnectionOpenTryResponse;
                    toAmino(_: _208.MsgConnectionOpenTryResponse): _208.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenTryResponseAminoMsg): _208.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _208.MsgConnectionOpenTryResponse): _208.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenTryResponseProtoMsg): _208.MsgConnectionOpenTryResponse;
                    toProto(message: _208.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenTryResponse): _208.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _208.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenAck;
                    fromJSON(object: any): _208.MsgConnectionOpenAck;
                    toJSON(message: _208.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_208.MsgConnectionOpenAck>): _208.MsgConnectionOpenAck;
                    fromAmino(object: _208.MsgConnectionOpenAckAmino): _208.MsgConnectionOpenAck;
                    toAmino(message: _208.MsgConnectionOpenAck): _208.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenAckAminoMsg): _208.MsgConnectionOpenAck;
                    toAminoMsg(message: _208.MsgConnectionOpenAck): _208.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenAckProtoMsg): _208.MsgConnectionOpenAck;
                    toProto(message: _208.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenAck): _208.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _208.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _208.MsgConnectionOpenAckResponse;
                    toJSON(_: _208.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_208.MsgConnectionOpenAckResponse>): _208.MsgConnectionOpenAckResponse;
                    fromAmino(_: _208.MsgConnectionOpenAckResponseAmino): _208.MsgConnectionOpenAckResponse;
                    toAmino(_: _208.MsgConnectionOpenAckResponse): _208.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenAckResponseAminoMsg): _208.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _208.MsgConnectionOpenAckResponse): _208.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenAckResponseProtoMsg): _208.MsgConnectionOpenAckResponse;
                    toProto(message: _208.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenAckResponse): _208.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _208.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _208.MsgConnectionOpenConfirm;
                    toJSON(message: _208.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_208.MsgConnectionOpenConfirm>): _208.MsgConnectionOpenConfirm;
                    fromAmino(object: _208.MsgConnectionOpenConfirmAmino): _208.MsgConnectionOpenConfirm;
                    toAmino(message: _208.MsgConnectionOpenConfirm): _208.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenConfirmAminoMsg): _208.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _208.MsgConnectionOpenConfirm): _208.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenConfirmProtoMsg): _208.MsgConnectionOpenConfirm;
                    toProto(message: _208.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenConfirm): _208.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _208.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _208.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _208.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_208.MsgConnectionOpenConfirmResponse>): _208.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _208.MsgConnectionOpenConfirmResponseAmino): _208.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _208.MsgConnectionOpenConfirmResponse): _208.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _208.MsgConnectionOpenConfirmResponseAminoMsg): _208.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _208.MsgConnectionOpenConfirmResponse): _208.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _208.MsgConnectionOpenConfirmResponseProtoMsg): _208.MsgConnectionOpenConfirmResponse;
                    toProto(message: _208.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _208.MsgConnectionOpenConfirmResponse): _208.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionRequest;
                    fromJSON(object: any): _207.QueryConnectionRequest;
                    toJSON(message: _207.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionRequest>): _207.QueryConnectionRequest;
                    fromAmino(object: _207.QueryConnectionRequestAmino): _207.QueryConnectionRequest;
                    toAmino(message: _207.QueryConnectionRequest): _207.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionRequestAminoMsg): _207.QueryConnectionRequest;
                    toAminoMsg(message: _207.QueryConnectionRequest): _207.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionRequestProtoMsg): _207.QueryConnectionRequest;
                    toProto(message: _207.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionRequest): _207.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionResponse;
                    fromJSON(object: any): _207.QueryConnectionResponse;
                    toJSON(message: _207.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionResponse>): _207.QueryConnectionResponse;
                    fromAmino(object: _207.QueryConnectionResponseAmino): _207.QueryConnectionResponse;
                    toAmino(message: _207.QueryConnectionResponse): _207.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionResponseAminoMsg): _207.QueryConnectionResponse;
                    toAminoMsg(message: _207.QueryConnectionResponse): _207.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionResponseProtoMsg): _207.QueryConnectionResponse;
                    toProto(message: _207.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionResponse): _207.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionsRequest;
                    fromJSON(object: any): _207.QueryConnectionsRequest;
                    toJSON(message: _207.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionsRequest>): _207.QueryConnectionsRequest;
                    fromAmino(object: _207.QueryConnectionsRequestAmino): _207.QueryConnectionsRequest;
                    toAmino(message: _207.QueryConnectionsRequest): _207.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionsRequestAminoMsg): _207.QueryConnectionsRequest;
                    toAminoMsg(message: _207.QueryConnectionsRequest): _207.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionsRequestProtoMsg): _207.QueryConnectionsRequest;
                    toProto(message: _207.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionsRequest): _207.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionsResponse;
                    fromJSON(object: any): _207.QueryConnectionsResponse;
                    toJSON(message: _207.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionsResponse>): _207.QueryConnectionsResponse;
                    fromAmino(object: _207.QueryConnectionsResponseAmino): _207.QueryConnectionsResponse;
                    toAmino(message: _207.QueryConnectionsResponse): _207.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionsResponseAminoMsg): _207.QueryConnectionsResponse;
                    toAminoMsg(message: _207.QueryConnectionsResponse): _207.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionsResponseProtoMsg): _207.QueryConnectionsResponse;
                    toProto(message: _207.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionsResponse): _207.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryClientConnectionsRequest;
                    fromJSON(object: any): _207.QueryClientConnectionsRequest;
                    toJSON(message: _207.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_207.QueryClientConnectionsRequest>): _207.QueryClientConnectionsRequest;
                    fromAmino(object: _207.QueryClientConnectionsRequestAmino): _207.QueryClientConnectionsRequest;
                    toAmino(message: _207.QueryClientConnectionsRequest): _207.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _207.QueryClientConnectionsRequestAminoMsg): _207.QueryClientConnectionsRequest;
                    toAminoMsg(message: _207.QueryClientConnectionsRequest): _207.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryClientConnectionsRequestProtoMsg): _207.QueryClientConnectionsRequest;
                    toProto(message: _207.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryClientConnectionsRequest): _207.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryClientConnectionsResponse;
                    fromJSON(object: any): _207.QueryClientConnectionsResponse;
                    toJSON(message: _207.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_207.QueryClientConnectionsResponse>): _207.QueryClientConnectionsResponse;
                    fromAmino(object: _207.QueryClientConnectionsResponseAmino): _207.QueryClientConnectionsResponse;
                    toAmino(message: _207.QueryClientConnectionsResponse): _207.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _207.QueryClientConnectionsResponseAminoMsg): _207.QueryClientConnectionsResponse;
                    toAminoMsg(message: _207.QueryClientConnectionsResponse): _207.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryClientConnectionsResponseProtoMsg): _207.QueryClientConnectionsResponse;
                    toProto(message: _207.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryClientConnectionsResponse): _207.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _207.QueryConnectionClientStateRequest;
                    toJSON(message: _207.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionClientStateRequest>): _207.QueryConnectionClientStateRequest;
                    fromAmino(object: _207.QueryConnectionClientStateRequestAmino): _207.QueryConnectionClientStateRequest;
                    toAmino(message: _207.QueryConnectionClientStateRequest): _207.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionClientStateRequestAminoMsg): _207.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _207.QueryConnectionClientStateRequest): _207.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionClientStateRequestProtoMsg): _207.QueryConnectionClientStateRequest;
                    toProto(message: _207.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionClientStateRequest): _207.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _207.QueryConnectionClientStateResponse;
                    toJSON(message: _207.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionClientStateResponse>): _207.QueryConnectionClientStateResponse;
                    fromAmino(object: _207.QueryConnectionClientStateResponseAmino): _207.QueryConnectionClientStateResponse;
                    toAmino(message: _207.QueryConnectionClientStateResponse): _207.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionClientStateResponseAminoMsg): _207.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _207.QueryConnectionClientStateResponse): _207.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionClientStateResponseProtoMsg): _207.QueryConnectionClientStateResponse;
                    toProto(message: _207.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionClientStateResponse): _207.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _207.QueryConnectionConsensusStateRequest;
                    toJSON(message: _207.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionConsensusStateRequest>): _207.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _207.QueryConnectionConsensusStateRequestAmino): _207.QueryConnectionConsensusStateRequest;
                    toAmino(message: _207.QueryConnectionConsensusStateRequest): _207.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionConsensusStateRequestAminoMsg): _207.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _207.QueryConnectionConsensusStateRequest): _207.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionConsensusStateRequestProtoMsg): _207.QueryConnectionConsensusStateRequest;
                    toProto(message: _207.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionConsensusStateRequest): _207.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _207.QueryConnectionConsensusStateResponse;
                    toJSON(message: _207.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionConsensusStateResponse>): _207.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _207.QueryConnectionConsensusStateResponseAmino): _207.QueryConnectionConsensusStateResponse;
                    toAmino(message: _207.QueryConnectionConsensusStateResponse): _207.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionConsensusStateResponseAminoMsg): _207.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _207.QueryConnectionConsensusStateResponse): _207.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionConsensusStateResponseProtoMsg): _207.QueryConnectionConsensusStateResponse;
                    toProto(message: _207.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionConsensusStateResponse): _207.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _207.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionParamsRequest;
                    fromJSON(_: any): _207.QueryConnectionParamsRequest;
                    toJSON(_: _207.QueryConnectionParamsRequest): unknown;
                    fromPartial(_: Partial<_207.QueryConnectionParamsRequest>): _207.QueryConnectionParamsRequest;
                    fromAmino(_: _207.QueryConnectionParamsRequestAmino): _207.QueryConnectionParamsRequest;
                    toAmino(_: _207.QueryConnectionParamsRequest): _207.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _207.QueryConnectionParamsRequestAminoMsg): _207.QueryConnectionParamsRequest;
                    toAminoMsg(message: _207.QueryConnectionParamsRequest): _207.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionParamsRequestProtoMsg): _207.QueryConnectionParamsRequest;
                    toProto(message: _207.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionParamsRequest): _207.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _207.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryConnectionParamsResponse;
                    fromJSON(object: any): _207.QueryConnectionParamsResponse;
                    toJSON(message: _207.QueryConnectionParamsResponse): unknown;
                    fromPartial(object: Partial<_207.QueryConnectionParamsResponse>): _207.QueryConnectionParamsResponse;
                    fromAmino(object: _207.QueryConnectionParamsResponseAmino): _207.QueryConnectionParamsResponse;
                    toAmino(message: _207.QueryConnectionParamsResponse): _207.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _207.QueryConnectionParamsResponseAminoMsg): _207.QueryConnectionParamsResponse;
                    toAminoMsg(message: _207.QueryConnectionParamsResponse): _207.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _207.QueryConnectionParamsResponseProtoMsg): _207.QueryConnectionParamsResponse;
                    toProto(message: _207.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _207.QueryConnectionParamsResponse): _207.QueryConnectionParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _206.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.GenesisState;
                    fromJSON(object: any): _206.GenesisState;
                    toJSON(message: _206.GenesisState): unknown;
                    fromPartial(object: Partial<_206.GenesisState>): _206.GenesisState;
                    fromAmino(object: _206.GenesisStateAmino): _206.GenesisState;
                    toAmino(message: _206.GenesisState): _206.GenesisStateAmino;
                    fromAminoMsg(object: _206.GenesisStateAminoMsg): _206.GenesisState;
                    toAminoMsg(message: _206.GenesisState): _206.GenesisStateAminoMsg;
                    fromProtoMsg(message: _206.GenesisStateProtoMsg): _206.GenesisState;
                    toProto(message: _206.GenesisState): Uint8Array;
                    toProtoMsg(message: _206.GenesisState): _206.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _205.State;
                stateToJSON(object: _205.State): string;
                State: typeof _205.State;
                StateSDKType: typeof _205.State;
                StateAmino: typeof _205.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _205.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ConnectionEnd;
                    fromJSON(object: any): _205.ConnectionEnd;
                    toJSON(message: _205.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_205.ConnectionEnd>): _205.ConnectionEnd;
                    fromAmino(object: _205.ConnectionEndAmino): _205.ConnectionEnd;
                    toAmino(message: _205.ConnectionEnd): _205.ConnectionEndAmino;
                    fromAminoMsg(object: _205.ConnectionEndAminoMsg): _205.ConnectionEnd;
                    toAminoMsg(message: _205.ConnectionEnd): _205.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _205.ConnectionEndProtoMsg): _205.ConnectionEnd;
                    toProto(message: _205.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _205.ConnectionEnd): _205.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _205.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.IdentifiedConnection;
                    fromJSON(object: any): _205.IdentifiedConnection;
                    toJSON(message: _205.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_205.IdentifiedConnection>): _205.IdentifiedConnection;
                    fromAmino(object: _205.IdentifiedConnectionAmino): _205.IdentifiedConnection;
                    toAmino(message: _205.IdentifiedConnection): _205.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _205.IdentifiedConnectionAminoMsg): _205.IdentifiedConnection;
                    toAminoMsg(message: _205.IdentifiedConnection): _205.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _205.IdentifiedConnectionProtoMsg): _205.IdentifiedConnection;
                    toProto(message: _205.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _205.IdentifiedConnection): _205.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _205.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Counterparty;
                    fromJSON(object: any): _205.Counterparty;
                    toJSON(message: _205.Counterparty): unknown;
                    fromPartial(object: Partial<_205.Counterparty>): _205.Counterparty;
                    fromAmino(object: _205.CounterpartyAmino): _205.Counterparty;
                    toAmino(message: _205.Counterparty): _205.CounterpartyAmino;
                    fromAminoMsg(object: _205.CounterpartyAminoMsg): _205.Counterparty;
                    toAminoMsg(message: _205.Counterparty): _205.CounterpartyAminoMsg;
                    fromProtoMsg(message: _205.CounterpartyProtoMsg): _205.Counterparty;
                    toProto(message: _205.Counterparty): Uint8Array;
                    toProtoMsg(message: _205.Counterparty): _205.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _205.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ClientPaths;
                    fromJSON(object: any): _205.ClientPaths;
                    toJSON(message: _205.ClientPaths): unknown;
                    fromPartial(object: Partial<_205.ClientPaths>): _205.ClientPaths;
                    fromAmino(object: _205.ClientPathsAmino): _205.ClientPaths;
                    toAmino(message: _205.ClientPaths): _205.ClientPathsAmino;
                    fromAminoMsg(object: _205.ClientPathsAminoMsg): _205.ClientPaths;
                    toAminoMsg(message: _205.ClientPaths): _205.ClientPathsAminoMsg;
                    fromProtoMsg(message: _205.ClientPathsProtoMsg): _205.ClientPaths;
                    toProto(message: _205.ClientPaths): Uint8Array;
                    toProtoMsg(message: _205.ClientPaths): _205.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _205.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ConnectionPaths;
                    fromJSON(object: any): _205.ConnectionPaths;
                    toJSON(message: _205.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_205.ConnectionPaths>): _205.ConnectionPaths;
                    fromAmino(object: _205.ConnectionPathsAmino): _205.ConnectionPaths;
                    toAmino(message: _205.ConnectionPaths): _205.ConnectionPathsAmino;
                    fromAminoMsg(object: _205.ConnectionPathsAminoMsg): _205.ConnectionPaths;
                    toAminoMsg(message: _205.ConnectionPaths): _205.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _205.ConnectionPathsProtoMsg): _205.ConnectionPaths;
                    toProto(message: _205.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _205.ConnectionPaths): _205.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _205.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Version;
                    fromJSON(object: any): _205.Version;
                    toJSON(message: _205.Version): unknown;
                    fromPartial(object: Partial<_205.Version>): _205.Version;
                    fromAmino(object: _205.VersionAmino): _205.Version;
                    toAmino(message: _205.Version): _205.VersionAmino;
                    fromAminoMsg(object: _205.VersionAminoMsg): _205.Version;
                    toAminoMsg(message: _205.Version): _205.VersionAminoMsg;
                    fromProtoMsg(message: _205.VersionProtoMsg): _205.Version;
                    toProto(message: _205.Version): Uint8Array;
                    toProtoMsg(message: _205.Version): _205.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _205.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Params;
                    fromJSON(object: any): _205.Params;
                    toJSON(message: _205.Params): unknown;
                    fromPartial(object: Partial<_205.Params>): _205.Params;
                    fromAmino(object: _205.ParamsAmino): _205.Params;
                    toAmino(message: _205.Params): _205.ParamsAmino;
                    fromAminoMsg(object: _205.ParamsAminoMsg): _205.Params;
                    toAminoMsg(message: _205.Params): _205.ParamsAminoMsg;
                    fromProtoMsg(message: _205.ParamsProtoMsg): _205.Params;
                    toProto(message: _205.Params): Uint8Array;
                    toProtoMsg(message: _205.Params): _205.ParamsProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _209.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GenesisState;
                    fromJSON(object: any): _209.GenesisState;
                    toJSON(message: _209.GenesisState): unknown;
                    fromPartial(object: Partial<_209.GenesisState>): _209.GenesisState;
                    fromAmino(object: _209.GenesisStateAmino): _209.GenesisState;
                    toAmino(message: _209.GenesisState): _209.GenesisStateAmino;
                    fromAminoMsg(object: _209.GenesisStateAminoMsg): _209.GenesisState;
                    toAminoMsg(message: _209.GenesisState): _209.GenesisStateAminoMsg;
                    fromProtoMsg(message: _209.GenesisStateProtoMsg): _209.GenesisState;
                    toProto(message: _209.GenesisState): Uint8Array;
                    toProtoMsg(message: _209.GenesisState): _209.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _210.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ClientState;
                    fromJSON(object: any): _210.ClientState;
                    toJSON(message: _210.ClientState): unknown;
                    fromPartial(object: Partial<_210.ClientState>): _210.ClientState;
                    fromAmino(object: _210.ClientStateAmino): _210.ClientState;
                    toAmino(message: _210.ClientState): _210.ClientStateAmino;
                    fromAminoMsg(object: _210.ClientStateAminoMsg): _210.ClientState;
                    toAminoMsg(message: _210.ClientState): _210.ClientStateAminoMsg;
                    fromProtoMsg(message: _210.ClientStateProtoMsg): _210.ClientState;
                    toProto(message: _210.ClientState): Uint8Array;
                    toProtoMsg(message: _210.ClientState): _210.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _211.DataType;
                dataTypeToJSON(object: _211.DataType): string;
                DataType: typeof _211.DataType;
                DataTypeSDKType: typeof _211.DataType;
                DataTypeAmino: typeof _211.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _211.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.ClientState;
                    fromJSON(object: any): _211.ClientState;
                    toJSON(message: _211.ClientState): unknown;
                    fromPartial(object: Partial<_211.ClientState>): _211.ClientState;
                    fromAmino(object: _211.ClientStateAmino): _211.ClientState;
                    toAmino(message: _211.ClientState): _211.ClientStateAmino;
                    fromAminoMsg(object: _211.ClientStateAminoMsg): _211.ClientState;
                    toAminoMsg(message: _211.ClientState): _211.ClientStateAminoMsg;
                    fromProtoMsg(message: _211.ClientStateProtoMsg): _211.ClientState;
                    toProto(message: _211.ClientState): Uint8Array;
                    toProtoMsg(message: _211.ClientState): _211.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _211.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.ConsensusState;
                    fromJSON(object: any): _211.ConsensusState;
                    toJSON(message: _211.ConsensusState): unknown;
                    fromPartial(object: Partial<_211.ConsensusState>): _211.ConsensusState;
                    fromAmino(object: _211.ConsensusStateAmino): _211.ConsensusState;
                    toAmino(message: _211.ConsensusState): _211.ConsensusStateAmino;
                    fromAminoMsg(object: _211.ConsensusStateAminoMsg): _211.ConsensusState;
                    toAminoMsg(message: _211.ConsensusState): _211.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _211.ConsensusStateProtoMsg): _211.ConsensusState;
                    toProto(message: _211.ConsensusState): Uint8Array;
                    toProtoMsg(message: _211.ConsensusState): _211.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _211.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.Header;
                    fromJSON(object: any): _211.Header;
                    toJSON(message: _211.Header): unknown;
                    fromPartial(object: Partial<_211.Header>): _211.Header;
                    fromAmino(object: _211.HeaderAmino): _211.Header;
                    toAmino(message: _211.Header): _211.HeaderAmino;
                    fromAminoMsg(object: _211.HeaderAminoMsg): _211.Header;
                    toAminoMsg(message: _211.Header): _211.HeaderAminoMsg;
                    fromProtoMsg(message: _211.HeaderProtoMsg): _211.Header;
                    toProto(message: _211.Header): Uint8Array;
                    toProtoMsg(message: _211.Header): _211.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _211.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.Misbehaviour;
                    fromJSON(object: any): _211.Misbehaviour;
                    toJSON(message: _211.Misbehaviour): unknown;
                    fromPartial(object: Partial<_211.Misbehaviour>): _211.Misbehaviour;
                    fromAmino(object: _211.MisbehaviourAmino): _211.Misbehaviour;
                    toAmino(message: _211.Misbehaviour): _211.MisbehaviourAmino;
                    fromAminoMsg(object: _211.MisbehaviourAminoMsg): _211.Misbehaviour;
                    toAminoMsg(message: _211.Misbehaviour): _211.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _211.MisbehaviourProtoMsg): _211.Misbehaviour;
                    toProto(message: _211.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _211.Misbehaviour): _211.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _211.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.SignatureAndData;
                    fromJSON(object: any): _211.SignatureAndData;
                    toJSON(message: _211.SignatureAndData): unknown;
                    fromPartial(object: Partial<_211.SignatureAndData>): _211.SignatureAndData;
                    fromAmino(object: _211.SignatureAndDataAmino): _211.SignatureAndData;
                    toAmino(message: _211.SignatureAndData): _211.SignatureAndDataAmino;
                    fromAminoMsg(object: _211.SignatureAndDataAminoMsg): _211.SignatureAndData;
                    toAminoMsg(message: _211.SignatureAndData): _211.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _211.SignatureAndDataProtoMsg): _211.SignatureAndData;
                    toProto(message: _211.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _211.SignatureAndData): _211.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _211.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.TimestampedSignatureData;
                    fromJSON(object: any): _211.TimestampedSignatureData;
                    toJSON(message: _211.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_211.TimestampedSignatureData>): _211.TimestampedSignatureData;
                    fromAmino(object: _211.TimestampedSignatureDataAmino): _211.TimestampedSignatureData;
                    toAmino(message: _211.TimestampedSignatureData): _211.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _211.TimestampedSignatureDataAminoMsg): _211.TimestampedSignatureData;
                    toAminoMsg(message: _211.TimestampedSignatureData): _211.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _211.TimestampedSignatureDataProtoMsg): _211.TimestampedSignatureData;
                    toProto(message: _211.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _211.TimestampedSignatureData): _211.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _211.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.SignBytes;
                    fromJSON(object: any): _211.SignBytes;
                    toJSON(message: _211.SignBytes): unknown;
                    fromPartial(object: Partial<_211.SignBytes>): _211.SignBytes;
                    fromAmino(object: _211.SignBytesAmino): _211.SignBytes;
                    toAmino(message: _211.SignBytes): _211.SignBytesAmino;
                    fromAminoMsg(object: _211.SignBytesAminoMsg): _211.SignBytes;
                    toAminoMsg(message: _211.SignBytes): _211.SignBytesAminoMsg;
                    fromProtoMsg(message: _211.SignBytesProtoMsg): _211.SignBytes;
                    toProto(message: _211.SignBytes): Uint8Array;
                    toProtoMsg(message: _211.SignBytes): _211.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _211.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.HeaderData;
                    fromJSON(object: any): _211.HeaderData;
                    toJSON(message: _211.HeaderData): unknown;
                    fromPartial(object: Partial<_211.HeaderData>): _211.HeaderData;
                    fromAmino(object: _211.HeaderDataAmino): _211.HeaderData;
                    toAmino(message: _211.HeaderData): _211.HeaderDataAmino;
                    fromAminoMsg(object: _211.HeaderDataAminoMsg): _211.HeaderData;
                    toAminoMsg(message: _211.HeaderData): _211.HeaderDataAminoMsg;
                    fromProtoMsg(message: _211.HeaderDataProtoMsg): _211.HeaderData;
                    toProto(message: _211.HeaderData): Uint8Array;
                    toProtoMsg(message: _211.HeaderData): _211.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _211.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.ClientStateData;
                    fromJSON(object: any): _211.ClientStateData;
                    toJSON(message: _211.ClientStateData): unknown;
                    fromPartial(object: Partial<_211.ClientStateData>): _211.ClientStateData;
                    fromAmino(object: _211.ClientStateDataAmino): _211.ClientStateData;
                    toAmino(message: _211.ClientStateData): _211.ClientStateDataAmino;
                    fromAminoMsg(object: _211.ClientStateDataAminoMsg): _211.ClientStateData;
                    toAminoMsg(message: _211.ClientStateData): _211.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _211.ClientStateDataProtoMsg): _211.ClientStateData;
                    toProto(message: _211.ClientStateData): Uint8Array;
                    toProtoMsg(message: _211.ClientStateData): _211.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _211.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.ConsensusStateData;
                    fromJSON(object: any): _211.ConsensusStateData;
                    toJSON(message: _211.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_211.ConsensusStateData>): _211.ConsensusStateData;
                    fromAmino(object: _211.ConsensusStateDataAmino): _211.ConsensusStateData;
                    toAmino(message: _211.ConsensusStateData): _211.ConsensusStateDataAmino;
                    fromAminoMsg(object: _211.ConsensusStateDataAminoMsg): _211.ConsensusStateData;
                    toAminoMsg(message: _211.ConsensusStateData): _211.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _211.ConsensusStateDataProtoMsg): _211.ConsensusStateData;
                    toProto(message: _211.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _211.ConsensusStateData): _211.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _211.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.ConnectionStateData;
                    fromJSON(object: any): _211.ConnectionStateData;
                    toJSON(message: _211.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_211.ConnectionStateData>): _211.ConnectionStateData;
                    fromAmino(object: _211.ConnectionStateDataAmino): _211.ConnectionStateData;
                    toAmino(message: _211.ConnectionStateData): _211.ConnectionStateDataAmino;
                    fromAminoMsg(object: _211.ConnectionStateDataAminoMsg): _211.ConnectionStateData;
                    toAminoMsg(message: _211.ConnectionStateData): _211.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _211.ConnectionStateDataProtoMsg): _211.ConnectionStateData;
                    toProto(message: _211.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _211.ConnectionStateData): _211.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _211.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.ChannelStateData;
                    fromJSON(object: any): _211.ChannelStateData;
                    toJSON(message: _211.ChannelStateData): unknown;
                    fromPartial(object: Partial<_211.ChannelStateData>): _211.ChannelStateData;
                    fromAmino(object: _211.ChannelStateDataAmino): _211.ChannelStateData;
                    toAmino(message: _211.ChannelStateData): _211.ChannelStateDataAmino;
                    fromAminoMsg(object: _211.ChannelStateDataAminoMsg): _211.ChannelStateData;
                    toAminoMsg(message: _211.ChannelStateData): _211.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _211.ChannelStateDataProtoMsg): _211.ChannelStateData;
                    toProto(message: _211.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _211.ChannelStateData): _211.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _211.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.PacketCommitmentData;
                    fromJSON(object: any): _211.PacketCommitmentData;
                    toJSON(message: _211.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_211.PacketCommitmentData>): _211.PacketCommitmentData;
                    fromAmino(object: _211.PacketCommitmentDataAmino): _211.PacketCommitmentData;
                    toAmino(message: _211.PacketCommitmentData): _211.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _211.PacketCommitmentDataAminoMsg): _211.PacketCommitmentData;
                    toAminoMsg(message: _211.PacketCommitmentData): _211.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _211.PacketCommitmentDataProtoMsg): _211.PacketCommitmentData;
                    toProto(message: _211.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _211.PacketCommitmentData): _211.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _211.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.PacketAcknowledgementData;
                    fromJSON(object: any): _211.PacketAcknowledgementData;
                    toJSON(message: _211.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_211.PacketAcknowledgementData>): _211.PacketAcknowledgementData;
                    fromAmino(object: _211.PacketAcknowledgementDataAmino): _211.PacketAcknowledgementData;
                    toAmino(message: _211.PacketAcknowledgementData): _211.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _211.PacketAcknowledgementDataAminoMsg): _211.PacketAcknowledgementData;
                    toAminoMsg(message: _211.PacketAcknowledgementData): _211.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _211.PacketAcknowledgementDataProtoMsg): _211.PacketAcknowledgementData;
                    toProto(message: _211.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _211.PacketAcknowledgementData): _211.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _211.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.PacketReceiptAbsenceData;
                    fromJSON(object: any): _211.PacketReceiptAbsenceData;
                    toJSON(message: _211.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_211.PacketReceiptAbsenceData>): _211.PacketReceiptAbsenceData;
                    fromAmino(object: _211.PacketReceiptAbsenceDataAmino): _211.PacketReceiptAbsenceData;
                    toAmino(message: _211.PacketReceiptAbsenceData): _211.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _211.PacketReceiptAbsenceDataAminoMsg): _211.PacketReceiptAbsenceData;
                    toAminoMsg(message: _211.PacketReceiptAbsenceData): _211.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _211.PacketReceiptAbsenceDataProtoMsg): _211.PacketReceiptAbsenceData;
                    toProto(message: _211.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _211.PacketReceiptAbsenceData): _211.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _211.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.NextSequenceRecvData;
                    fromJSON(object: any): _211.NextSequenceRecvData;
                    toJSON(message: _211.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_211.NextSequenceRecvData>): _211.NextSequenceRecvData;
                    fromAmino(object: _211.NextSequenceRecvDataAmino): _211.NextSequenceRecvData;
                    toAmino(message: _211.NextSequenceRecvData): _211.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _211.NextSequenceRecvDataAminoMsg): _211.NextSequenceRecvData;
                    toAminoMsg(message: _211.NextSequenceRecvData): _211.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _211.NextSequenceRecvDataProtoMsg): _211.NextSequenceRecvData;
                    toProto(message: _211.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _211.NextSequenceRecvData): _211.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _212.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ClientState;
                    fromJSON(object: any): _212.ClientState;
                    toJSON(message: _212.ClientState): unknown;
                    fromPartial(object: Partial<_212.ClientState>): _212.ClientState;
                    fromAmino(object: _212.ClientStateAmino): _212.ClientState;
                    toAmino(message: _212.ClientState): _212.ClientStateAmino;
                    fromAminoMsg(object: _212.ClientStateAminoMsg): _212.ClientState;
                    toAminoMsg(message: _212.ClientState): _212.ClientStateAminoMsg;
                    fromProtoMsg(message: _212.ClientStateProtoMsg): _212.ClientState;
                    toProto(message: _212.ClientState): Uint8Array;
                    toProtoMsg(message: _212.ClientState): _212.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _212.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.ConsensusState;
                    fromJSON(object: any): _212.ConsensusState;
                    toJSON(message: _212.ConsensusState): unknown;
                    fromPartial(object: Partial<_212.ConsensusState>): _212.ConsensusState;
                    fromAmino(object: _212.ConsensusStateAmino): _212.ConsensusState;
                    toAmino(message: _212.ConsensusState): _212.ConsensusStateAmino;
                    fromAminoMsg(object: _212.ConsensusStateAminoMsg): _212.ConsensusState;
                    toAminoMsg(message: _212.ConsensusState): _212.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _212.ConsensusStateProtoMsg): _212.ConsensusState;
                    toProto(message: _212.ConsensusState): Uint8Array;
                    toProtoMsg(message: _212.ConsensusState): _212.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _212.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Header;
                    fromJSON(object: any): _212.Header;
                    toJSON(message: _212.Header): unknown;
                    fromPartial(object: Partial<_212.Header>): _212.Header;
                    fromAmino(object: _212.HeaderAmino): _212.Header;
                    toAmino(message: _212.Header): _212.HeaderAmino;
                    fromAminoMsg(object: _212.HeaderAminoMsg): _212.Header;
                    toAminoMsg(message: _212.Header): _212.HeaderAminoMsg;
                    fromProtoMsg(message: _212.HeaderProtoMsg): _212.Header;
                    toProto(message: _212.Header): Uint8Array;
                    toProtoMsg(message: _212.Header): _212.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _212.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.Misbehaviour;
                    fromJSON(object: any): _212.Misbehaviour;
                    toJSON(message: _212.Misbehaviour): unknown;
                    fromPartial(object: Partial<_212.Misbehaviour>): _212.Misbehaviour;
                    fromAmino(object: _212.MisbehaviourAmino): _212.Misbehaviour;
                    toAmino(message: _212.Misbehaviour): _212.MisbehaviourAmino;
                    fromAminoMsg(object: _212.MisbehaviourAminoMsg): _212.Misbehaviour;
                    toAminoMsg(message: _212.Misbehaviour): _212.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _212.MisbehaviourProtoMsg): _212.Misbehaviour;
                    toProto(message: _212.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _212.Misbehaviour): _212.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _212.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SignatureAndData;
                    fromJSON(object: any): _212.SignatureAndData;
                    toJSON(message: _212.SignatureAndData): unknown;
                    fromPartial(object: Partial<_212.SignatureAndData>): _212.SignatureAndData;
                    fromAmino(object: _212.SignatureAndDataAmino): _212.SignatureAndData;
                    toAmino(message: _212.SignatureAndData): _212.SignatureAndDataAmino;
                    fromAminoMsg(object: _212.SignatureAndDataAminoMsg): _212.SignatureAndData;
                    toAminoMsg(message: _212.SignatureAndData): _212.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _212.SignatureAndDataProtoMsg): _212.SignatureAndData;
                    toProto(message: _212.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _212.SignatureAndData): _212.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _212.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.TimestampedSignatureData;
                    fromJSON(object: any): _212.TimestampedSignatureData;
                    toJSON(message: _212.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_212.TimestampedSignatureData>): _212.TimestampedSignatureData;
                    fromAmino(object: _212.TimestampedSignatureDataAmino): _212.TimestampedSignatureData;
                    toAmino(message: _212.TimestampedSignatureData): _212.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _212.TimestampedSignatureDataAminoMsg): _212.TimestampedSignatureData;
                    toAminoMsg(message: _212.TimestampedSignatureData): _212.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _212.TimestampedSignatureDataProtoMsg): _212.TimestampedSignatureData;
                    toProto(message: _212.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _212.TimestampedSignatureData): _212.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _212.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.SignBytes;
                    fromJSON(object: any): _212.SignBytes;
                    toJSON(message: _212.SignBytes): unknown;
                    fromPartial(object: Partial<_212.SignBytes>): _212.SignBytes;
                    fromAmino(object: _212.SignBytesAmino): _212.SignBytes;
                    toAmino(message: _212.SignBytes): _212.SignBytesAmino;
                    fromAminoMsg(object: _212.SignBytesAminoMsg): _212.SignBytes;
                    toAminoMsg(message: _212.SignBytes): _212.SignBytesAminoMsg;
                    fromProtoMsg(message: _212.SignBytesProtoMsg): _212.SignBytes;
                    toProto(message: _212.SignBytes): Uint8Array;
                    toProtoMsg(message: _212.SignBytes): _212.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _212.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.HeaderData;
                    fromJSON(object: any): _212.HeaderData;
                    toJSON(message: _212.HeaderData): unknown;
                    fromPartial(object: Partial<_212.HeaderData>): _212.HeaderData;
                    fromAmino(object: _212.HeaderDataAmino): _212.HeaderData;
                    toAmino(message: _212.HeaderData): _212.HeaderDataAmino;
                    fromAminoMsg(object: _212.HeaderDataAminoMsg): _212.HeaderData;
                    toAminoMsg(message: _212.HeaderData): _212.HeaderDataAminoMsg;
                    fromProtoMsg(message: _212.HeaderDataProtoMsg): _212.HeaderData;
                    toProto(message: _212.HeaderData): Uint8Array;
                    toProtoMsg(message: _212.HeaderData): _212.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _213.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ClientState;
                    fromJSON(object: any): _213.ClientState;
                    toJSON(message: _213.ClientState): unknown;
                    fromPartial(object: Partial<_213.ClientState>): _213.ClientState;
                    fromAmino(object: _213.ClientStateAmino): _213.ClientState;
                    toAmino(message: _213.ClientState): _213.ClientStateAmino;
                    fromAminoMsg(object: _213.ClientStateAminoMsg): _213.ClientState;
                    toAminoMsg(message: _213.ClientState): _213.ClientStateAminoMsg;
                    fromProtoMsg(message: _213.ClientStateProtoMsg): _213.ClientState;
                    toProto(message: _213.ClientState): Uint8Array;
                    toProtoMsg(message: _213.ClientState): _213.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _213.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ConsensusState;
                    fromJSON(object: any): _213.ConsensusState;
                    toJSON(message: _213.ConsensusState): unknown;
                    fromPartial(object: Partial<_213.ConsensusState>): _213.ConsensusState;
                    fromAmino(object: _213.ConsensusStateAmino): _213.ConsensusState;
                    toAmino(message: _213.ConsensusState): _213.ConsensusStateAmino;
                    fromAminoMsg(object: _213.ConsensusStateAminoMsg): _213.ConsensusState;
                    toAminoMsg(message: _213.ConsensusState): _213.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _213.ConsensusStateProtoMsg): _213.ConsensusState;
                    toProto(message: _213.ConsensusState): Uint8Array;
                    toProtoMsg(message: _213.ConsensusState): _213.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _213.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Misbehaviour;
                    fromJSON(object: any): _213.Misbehaviour;
                    toJSON(message: _213.Misbehaviour): unknown;
                    fromPartial(object: Partial<_213.Misbehaviour>): _213.Misbehaviour;
                    fromAmino(object: _213.MisbehaviourAmino): _213.Misbehaviour;
                    toAmino(message: _213.Misbehaviour): _213.MisbehaviourAmino;
                    fromAminoMsg(object: _213.MisbehaviourAminoMsg): _213.Misbehaviour;
                    toAminoMsg(message: _213.Misbehaviour): _213.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _213.MisbehaviourProtoMsg): _213.Misbehaviour;
                    toProto(message: _213.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _213.Misbehaviour): _213.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _213.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Header;
                    fromJSON(object: any): _213.Header;
                    toJSON(message: _213.Header): unknown;
                    fromPartial(object: Partial<_213.Header>): _213.Header;
                    fromAmino(object: _213.HeaderAmino): _213.Header;
                    toAmino(message: _213.Header): _213.HeaderAmino;
                    fromAminoMsg(object: _213.HeaderAminoMsg): _213.Header;
                    toAminoMsg(message: _213.Header): _213.HeaderAminoMsg;
                    fromProtoMsg(message: _213.HeaderProtoMsg): _213.Header;
                    toProto(message: _213.Header): Uint8Array;
                    toProtoMsg(message: _213.Header): _213.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _213.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.Fraction;
                    fromJSON(object: any): _213.Fraction;
                    toJSON(message: _213.Fraction): unknown;
                    fromPartial(object: Partial<_213.Fraction>): _213.Fraction;
                    fromAmino(object: _213.FractionAmino): _213.Fraction;
                    toAmino(message: _213.Fraction): _213.FractionAmino;
                    fromAminoMsg(object: _213.FractionAminoMsg): _213.Fraction;
                    toAminoMsg(message: _213.Fraction): _213.FractionAminoMsg;
                    fromProtoMsg(message: _213.FractionProtoMsg): _213.Fraction;
                    toProto(message: _213.Fraction): Uint8Array;
                    toProtoMsg(message: _213.Fraction): _213.FractionProtoMsg;
                };
            };
        }
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
            ibc: {
                applications: {
                    fee: {
                        v1: _358.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _359.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _360.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _361.MsgClientImpl;
                    };
                    client: {
                        v1: _362.MsgClientImpl;
                    };
                    connection: {
                        v1: _363.MsgClientImpl;
                    };
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
            ibc: {
                applications: {
                    fee: {
                        v1: {
                            incentivizedPackets(request: _179.QueryIncentivizedPacketsRequest): Promise<_179.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _179.QueryIncentivizedPacketRequest): Promise<_179.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _179.QueryIncentivizedPacketsForChannelRequest): Promise<_179.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _179.QueryTotalRecvFeesRequest): Promise<_179.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _179.QueryTotalAckFeesRequest): Promise<_179.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _179.QueryTotalTimeoutFeesRequest): Promise<_179.QueryTotalTimeoutFeesResponse>;
                            payee(request: _179.QueryPayeeRequest): Promise<_179.QueryPayeeResponse>;
                            counterpartyPayee(request: _179.QueryCounterpartyPayeeRequest): Promise<_179.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _179.QueryFeeEnabledChannelsRequest): Promise<_179.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _179.QueryFeeEnabledChannelRequest): Promise<_179.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _182.QueryInterchainAccountRequest): Promise<_182.QueryInterchainAccountResponse>;
                                params(request?: _182.QueryParamsRequest): Promise<_182.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _186.QueryParamsRequest): Promise<_186.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _192.QueryDenomTraceRequest): Promise<_192.QueryDenomTraceResponse>;
                            denomTraces(request?: _192.QueryDenomTracesRequest): Promise<_192.QueryDenomTracesResponse>;
                            params(request?: _192.QueryParamsRequest): Promise<_192.QueryParamsResponse>;
                            denomHash(request: _192.QueryDenomHashRequest): Promise<_192.QueryDenomHashResponse>;
                            escrowAddress(request: _192.QueryEscrowAddressRequest): Promise<_192.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _192.QueryTotalEscrowForDenomRequest): Promise<_192.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _198.QueryChannelRequest): Promise<_198.QueryChannelResponse>;
                            channels(request?: _198.QueryChannelsRequest): Promise<_198.QueryChannelsResponse>;
                            connectionChannels(request: _198.QueryConnectionChannelsRequest): Promise<_198.QueryConnectionChannelsResponse>;
                            channelClientState(request: _198.QueryChannelClientStateRequest): Promise<_198.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _198.QueryChannelConsensusStateRequest): Promise<_198.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _198.QueryPacketCommitmentRequest): Promise<_198.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _198.QueryPacketCommitmentsRequest): Promise<_198.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _198.QueryPacketReceiptRequest): Promise<_198.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _198.QueryPacketAcknowledgementRequest): Promise<_198.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _198.QueryPacketAcknowledgementsRequest): Promise<_198.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _198.QueryUnreceivedPacketsRequest): Promise<_198.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _198.QueryUnreceivedAcksRequest): Promise<_198.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _198.QueryNextSequenceReceiveRequest): Promise<_198.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _202.QueryClientStateRequest): Promise<_202.QueryClientStateResponse>;
                            clientStates(request?: _202.QueryClientStatesRequest): Promise<_202.QueryClientStatesResponse>;
                            consensusState(request: _202.QueryConsensusStateRequest): Promise<_202.QueryConsensusStateResponse>;
                            consensusStates(request: _202.QueryConsensusStatesRequest): Promise<_202.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _202.QueryConsensusStateHeightsRequest): Promise<_202.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _202.QueryClientStatusRequest): Promise<_202.QueryClientStatusResponse>;
                            clientParams(request?: _202.QueryClientParamsRequest): Promise<_202.QueryClientParamsResponse>;
                            upgradedClientState(request?: _202.QueryUpgradedClientStateRequest): Promise<_202.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _202.QueryUpgradedConsensusStateRequest): Promise<_202.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _207.QueryConnectionRequest): Promise<_207.QueryConnectionResponse>;
                            connections(request?: _207.QueryConnectionsRequest): Promise<_207.QueryConnectionsResponse>;
                            clientConnections(request: _207.QueryClientConnectionsRequest): Promise<_207.QueryClientConnectionsResponse>;
                            connectionClientState(request: _207.QueryConnectionClientStateRequest): Promise<_207.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _207.QueryConnectionConsensusStateRequest): Promise<_207.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _207.QueryConnectionParamsRequest): Promise<_207.QueryConnectionParamsResponse>;
                        };
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
            ibc: {
                applications: {
                    fee: {
                        v1: _344.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _345.LCDQueryClient;
                        };
                        host: {
                            v1: _346.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _347.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _348.LCDQueryClient;
                    };
                    client: {
                        v1: _349.LCDQueryClient;
                    };
                    connection: {
                        v1: _350.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
