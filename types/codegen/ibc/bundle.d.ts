import * as _160 from "./applications/fee/v1/ack";
import * as _161 from "./applications/fee/v1/fee";
import * as _162 from "./applications/fee/v1/genesis";
import * as _163 from "./applications/fee/v1/metadata";
import * as _164 from "./applications/fee/v1/query";
import * as _165 from "./applications/fee/v1/tx";
import * as _166 from "./applications/interchain_accounts/controller/v1/controller";
import * as _167 from "./applications/interchain_accounts/controller/v1/query";
import * as _168 from "./applications/interchain_accounts/controller/v1/tx";
import * as _169 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _170 from "./applications/interchain_accounts/host/v1/host";
import * as _171 from "./applications/interchain_accounts/host/v1/query";
import * as _172 from "./applications/interchain_accounts/v1/account";
import * as _173 from "./applications/interchain_accounts/v1/metadata";
import * as _174 from "./applications/interchain_accounts/v1/packet";
import * as _175 from "./applications/transfer/v1/authz";
import * as _176 from "./applications/transfer/v1/genesis";
import * as _177 from "./applications/transfer/v1/query";
import * as _178 from "./applications/transfer/v1/transfer";
import * as _179 from "./applications/transfer/v1/tx";
import * as _180 from "./applications/transfer/v2/packet";
import * as _181 from "./core/channel/v1/channel";
import * as _182 from "./core/channel/v1/genesis";
import * as _183 from "./core/channel/v1/query";
import * as _184 from "./core/channel/v1/tx";
import * as _185 from "./core/client/v1/client";
import * as _186 from "./core/client/v1/genesis";
import * as _187 from "./core/client/v1/query";
import * as _188 from "./core/client/v1/tx";
import * as _189 from "./core/commitment/v1/commitment";
import * as _190 from "./core/connection/v1/connection";
import * as _191 from "./core/connection/v1/genesis";
import * as _192 from "./core/connection/v1/query";
import * as _193 from "./core/connection/v1/tx";
import * as _194 from "./core/types/v1/genesis";
import * as _195 from "./lightclients/localhost/v2/localhost";
import * as _196 from "./lightclients/solomachine/v2/solomachine";
import * as _197 from "./lightclients/solomachine/v3/solomachine";
import * as _198 from "./lightclients/tendermint/v1/tendermint";
import * as _319 from "./applications/fee/v1/query.lcd";
import * as _320 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _321 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _322 from "./applications/transfer/v1/query.lcd";
import * as _323 from "./core/channel/v1/query.lcd";
import * as _324 from "./core/client/v1/query.lcd";
import * as _325 from "./core/connection/v1/query.lcd";
import * as _326 from "./applications/fee/v1/query.rpc.Query";
import * as _327 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _328 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _329 from "./applications/transfer/v1/query.rpc.Query";
import * as _330 from "./core/channel/v1/query.rpc.Query";
import * as _331 from "./core/client/v1/query.rpc.Query";
import * as _332 from "./core/connection/v1/query.rpc.Query";
import * as _333 from "./applications/fee/v1/tx.rpc.msg";
import * as _334 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _335 from "./applications/transfer/v1/tx.rpc.msg";
import * as _336 from "./core/channel/v1/tx.rpc.msg";
import * as _337 from "./core/client/v1/tx.rpc.msg";
import * as _338 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace fee {
            const v1: {
                MsgClientImpl: typeof _333.MsgClientImpl;
                QueryClientImpl: typeof _326.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    incentivizedPackets(request: _164.QueryIncentivizedPacketsRequest): Promise<_164.QueryIncentivizedPacketsResponse>;
                    incentivizedPacket(request: _164.QueryIncentivizedPacketRequest): Promise<_164.QueryIncentivizedPacketResponse>;
                    incentivizedPacketsForChannel(request: _164.QueryIncentivizedPacketsForChannelRequest): Promise<_164.QueryIncentivizedPacketsForChannelResponse>;
                    totalRecvFees(request: _164.QueryTotalRecvFeesRequest): Promise<_164.QueryTotalRecvFeesResponse>;
                    totalAckFees(request: _164.QueryTotalAckFeesRequest): Promise<_164.QueryTotalAckFeesResponse>;
                    totalTimeoutFees(request: _164.QueryTotalTimeoutFeesRequest): Promise<_164.QueryTotalTimeoutFeesResponse>;
                    payee(request: _164.QueryPayeeRequest): Promise<_164.QueryPayeeResponse>;
                    counterpartyPayee(request: _164.QueryCounterpartyPayeeRequest): Promise<_164.QueryCounterpartyPayeeResponse>;
                    feeEnabledChannels(request: _164.QueryFeeEnabledChannelsRequest): Promise<_164.QueryFeeEnabledChannelsResponse>;
                    feeEnabledChannel(request: _164.QueryFeeEnabledChannelRequest): Promise<_164.QueryFeeEnabledChannelResponse>;
                };
                LCDQueryClient: typeof _319.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        registerPayee(value: _165.MsgRegisterPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        registerCounterpartyPayee(value: _165.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFee(value: _165.MsgPayPacketFee): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        payPacketFeeAsync(value: _165.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        registerPayee(value: _165.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _165.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _165.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _165.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _165.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _165.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _165.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _165.MsgPayPacketFeeAsync;
                        };
                    };
                    toJSON: {
                        registerPayee(value: _165.MsgRegisterPayee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        registerCounterpartyPayee(value: _165.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        payPacketFee(value: _165.MsgPayPacketFee): {
                            typeUrl: string;
                            value: unknown;
                        };
                        payPacketFeeAsync(value: _165.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        registerPayee(value: any): {
                            typeUrl: string;
                            value: _165.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: any): {
                            typeUrl: string;
                            value: _165.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: any): {
                            typeUrl: string;
                            value: _165.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: any): {
                            typeUrl: string;
                            value: _165.MsgPayPacketFeeAsync;
                        };
                    };
                    fromPartial: {
                        registerPayee(value: _165.MsgRegisterPayee): {
                            typeUrl: string;
                            value: _165.MsgRegisterPayee;
                        };
                        registerCounterpartyPayee(value: _165.MsgRegisterCounterpartyPayee): {
                            typeUrl: string;
                            value: _165.MsgRegisterCounterpartyPayee;
                        };
                        payPacketFee(value: _165.MsgPayPacketFee): {
                            typeUrl: string;
                            value: _165.MsgPayPacketFee;
                        };
                        payPacketFeeAsync(value: _165.MsgPayPacketFeeAsync): {
                            typeUrl: string;
                            value: _165.MsgPayPacketFeeAsync;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.fee.v1.MsgRegisterPayee": {
                        aminoType: string;
                        toAmino: (message: _165.MsgRegisterPayee) => _165.MsgRegisterPayeeAmino;
                        fromAmino: (object: _165.MsgRegisterPayeeAmino) => _165.MsgRegisterPayee;
                    };
                    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
                        aminoType: string;
                        toAmino: (message: _165.MsgRegisterCounterpartyPayee) => _165.MsgRegisterCounterpartyPayeeAmino;
                        fromAmino: (object: _165.MsgRegisterCounterpartyPayeeAmino) => _165.MsgRegisterCounterpartyPayee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFee": {
                        aminoType: string;
                        toAmino: (message: _165.MsgPayPacketFee) => _165.MsgPayPacketFeeAmino;
                        fromAmino: (object: _165.MsgPayPacketFeeAmino) => _165.MsgPayPacketFee;
                    };
                    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
                        aminoType: string;
                        toAmino: (message: _165.MsgPayPacketFeeAsync) => _165.MsgPayPacketFeeAsyncAmino;
                        fromAmino: (object: _165.MsgPayPacketFeeAsyncAmino) => _165.MsgPayPacketFeeAsync;
                    };
                };
                MsgRegisterPayee: {
                    typeUrl: string;
                    encode(message: _165.MsgRegisterPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRegisterPayee;
                    fromJSON(object: any): _165.MsgRegisterPayee;
                    toJSON(message: _165.MsgRegisterPayee): unknown;
                    fromPartial(object: Partial<_165.MsgRegisterPayee>): _165.MsgRegisterPayee;
                    fromAmino(object: _165.MsgRegisterPayeeAmino): _165.MsgRegisterPayee;
                    toAmino(message: _165.MsgRegisterPayee): _165.MsgRegisterPayeeAmino;
                    fromAminoMsg(object: _165.MsgRegisterPayeeAminoMsg): _165.MsgRegisterPayee;
                    toAminoMsg(message: _165.MsgRegisterPayee): _165.MsgRegisterPayeeAminoMsg;
                    fromProtoMsg(message: _165.MsgRegisterPayeeProtoMsg): _165.MsgRegisterPayee;
                    toProto(message: _165.MsgRegisterPayee): Uint8Array;
                    toProtoMsg(message: _165.MsgRegisterPayee): _165.MsgRegisterPayeeProtoMsg;
                };
                MsgRegisterPayeeResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgRegisterPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRegisterPayeeResponse;
                    fromJSON(_: any): _165.MsgRegisterPayeeResponse;
                    toJSON(_: _165.MsgRegisterPayeeResponse): unknown;
                    fromPartial(_: Partial<_165.MsgRegisterPayeeResponse>): _165.MsgRegisterPayeeResponse;
                    fromAmino(_: _165.MsgRegisterPayeeResponseAmino): _165.MsgRegisterPayeeResponse;
                    toAmino(_: _165.MsgRegisterPayeeResponse): _165.MsgRegisterPayeeResponseAmino;
                    fromAminoMsg(object: _165.MsgRegisterPayeeResponseAminoMsg): _165.MsgRegisterPayeeResponse;
                    toAminoMsg(message: _165.MsgRegisterPayeeResponse): _165.MsgRegisterPayeeResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgRegisterPayeeResponseProtoMsg): _165.MsgRegisterPayeeResponse;
                    toProto(message: _165.MsgRegisterPayeeResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgRegisterPayeeResponse): _165.MsgRegisterPayeeResponseProtoMsg;
                };
                MsgRegisterCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _165.MsgRegisterCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRegisterCounterpartyPayee;
                    fromJSON(object: any): _165.MsgRegisterCounterpartyPayee;
                    toJSON(message: _165.MsgRegisterCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_165.MsgRegisterCounterpartyPayee>): _165.MsgRegisterCounterpartyPayee;
                    fromAmino(object: _165.MsgRegisterCounterpartyPayeeAmino): _165.MsgRegisterCounterpartyPayee;
                    toAmino(message: _165.MsgRegisterCounterpartyPayee): _165.MsgRegisterCounterpartyPayeeAmino;
                    fromAminoMsg(object: _165.MsgRegisterCounterpartyPayeeAminoMsg): _165.MsgRegisterCounterpartyPayee;
                    toAminoMsg(message: _165.MsgRegisterCounterpartyPayee): _165.MsgRegisterCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _165.MsgRegisterCounterpartyPayeeProtoMsg): _165.MsgRegisterCounterpartyPayee;
                    toProto(message: _165.MsgRegisterCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _165.MsgRegisterCounterpartyPayee): _165.MsgRegisterCounterpartyPayeeProtoMsg;
                };
                MsgRegisterCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgRegisterCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgRegisterCounterpartyPayeeResponse;
                    fromJSON(_: any): _165.MsgRegisterCounterpartyPayeeResponse;
                    toJSON(_: _165.MsgRegisterCounterpartyPayeeResponse): unknown;
                    fromPartial(_: Partial<_165.MsgRegisterCounterpartyPayeeResponse>): _165.MsgRegisterCounterpartyPayeeResponse;
                    fromAmino(_: _165.MsgRegisterCounterpartyPayeeResponseAmino): _165.MsgRegisterCounterpartyPayeeResponse;
                    toAmino(_: _165.MsgRegisterCounterpartyPayeeResponse): _165.MsgRegisterCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _165.MsgRegisterCounterpartyPayeeResponseAminoMsg): _165.MsgRegisterCounterpartyPayeeResponse;
                    toAminoMsg(message: _165.MsgRegisterCounterpartyPayeeResponse): _165.MsgRegisterCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgRegisterCounterpartyPayeeResponseProtoMsg): _165.MsgRegisterCounterpartyPayeeResponse;
                    toProto(message: _165.MsgRegisterCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgRegisterCounterpartyPayeeResponse): _165.MsgRegisterCounterpartyPayeeResponseProtoMsg;
                };
                MsgPayPacketFee: {
                    typeUrl: string;
                    encode(message: _165.MsgPayPacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgPayPacketFee;
                    fromJSON(object: any): _165.MsgPayPacketFee;
                    toJSON(message: _165.MsgPayPacketFee): unknown;
                    fromPartial(object: Partial<_165.MsgPayPacketFee>): _165.MsgPayPacketFee;
                    fromAmino(object: _165.MsgPayPacketFeeAmino): _165.MsgPayPacketFee;
                    toAmino(message: _165.MsgPayPacketFee): _165.MsgPayPacketFeeAmino;
                    fromAminoMsg(object: _165.MsgPayPacketFeeAminoMsg): _165.MsgPayPacketFee;
                    toAminoMsg(message: _165.MsgPayPacketFee): _165.MsgPayPacketFeeAminoMsg;
                    fromProtoMsg(message: _165.MsgPayPacketFeeProtoMsg): _165.MsgPayPacketFee;
                    toProto(message: _165.MsgPayPacketFee): Uint8Array;
                    toProtoMsg(message: _165.MsgPayPacketFee): _165.MsgPayPacketFeeProtoMsg;
                };
                MsgPayPacketFeeResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgPayPacketFeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgPayPacketFeeResponse;
                    fromJSON(_: any): _165.MsgPayPacketFeeResponse;
                    toJSON(_: _165.MsgPayPacketFeeResponse): unknown;
                    fromPartial(_: Partial<_165.MsgPayPacketFeeResponse>): _165.MsgPayPacketFeeResponse;
                    fromAmino(_: _165.MsgPayPacketFeeResponseAmino): _165.MsgPayPacketFeeResponse;
                    toAmino(_: _165.MsgPayPacketFeeResponse): _165.MsgPayPacketFeeResponseAmino;
                    fromAminoMsg(object: _165.MsgPayPacketFeeResponseAminoMsg): _165.MsgPayPacketFeeResponse;
                    toAminoMsg(message: _165.MsgPayPacketFeeResponse): _165.MsgPayPacketFeeResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgPayPacketFeeResponseProtoMsg): _165.MsgPayPacketFeeResponse;
                    toProto(message: _165.MsgPayPacketFeeResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgPayPacketFeeResponse): _165.MsgPayPacketFeeResponseProtoMsg;
                };
                MsgPayPacketFeeAsync: {
                    typeUrl: string;
                    encode(message: _165.MsgPayPacketFeeAsync, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgPayPacketFeeAsync;
                    fromJSON(object: any): _165.MsgPayPacketFeeAsync;
                    toJSON(message: _165.MsgPayPacketFeeAsync): unknown;
                    fromPartial(object: Partial<_165.MsgPayPacketFeeAsync>): _165.MsgPayPacketFeeAsync;
                    fromAmino(object: _165.MsgPayPacketFeeAsyncAmino): _165.MsgPayPacketFeeAsync;
                    toAmino(message: _165.MsgPayPacketFeeAsync): _165.MsgPayPacketFeeAsyncAmino;
                    fromAminoMsg(object: _165.MsgPayPacketFeeAsyncAminoMsg): _165.MsgPayPacketFeeAsync;
                    toAminoMsg(message: _165.MsgPayPacketFeeAsync): _165.MsgPayPacketFeeAsyncAminoMsg;
                    fromProtoMsg(message: _165.MsgPayPacketFeeAsyncProtoMsg): _165.MsgPayPacketFeeAsync;
                    toProto(message: _165.MsgPayPacketFeeAsync): Uint8Array;
                    toProtoMsg(message: _165.MsgPayPacketFeeAsync): _165.MsgPayPacketFeeAsyncProtoMsg;
                };
                MsgPayPacketFeeAsyncResponse: {
                    typeUrl: string;
                    encode(_: _165.MsgPayPacketFeeAsyncResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.MsgPayPacketFeeAsyncResponse;
                    fromJSON(_: any): _165.MsgPayPacketFeeAsyncResponse;
                    toJSON(_: _165.MsgPayPacketFeeAsyncResponse): unknown;
                    fromPartial(_: Partial<_165.MsgPayPacketFeeAsyncResponse>): _165.MsgPayPacketFeeAsyncResponse;
                    fromAmino(_: _165.MsgPayPacketFeeAsyncResponseAmino): _165.MsgPayPacketFeeAsyncResponse;
                    toAmino(_: _165.MsgPayPacketFeeAsyncResponse): _165.MsgPayPacketFeeAsyncResponseAmino;
                    fromAminoMsg(object: _165.MsgPayPacketFeeAsyncResponseAminoMsg): _165.MsgPayPacketFeeAsyncResponse;
                    toAminoMsg(message: _165.MsgPayPacketFeeAsyncResponse): _165.MsgPayPacketFeeAsyncResponseAminoMsg;
                    fromProtoMsg(message: _165.MsgPayPacketFeeAsyncResponseProtoMsg): _165.MsgPayPacketFeeAsyncResponse;
                    toProto(message: _165.MsgPayPacketFeeAsyncResponse): Uint8Array;
                    toProtoMsg(message: _165.MsgPayPacketFeeAsyncResponse): _165.MsgPayPacketFeeAsyncResponseProtoMsg;
                };
                QueryIncentivizedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryIncentivizedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryIncentivizedPacketsRequest;
                    fromJSON(object: any): _164.QueryIncentivizedPacketsRequest;
                    toJSON(message: _164.QueryIncentivizedPacketsRequest): unknown;
                    fromPartial(object: Partial<_164.QueryIncentivizedPacketsRequest>): _164.QueryIncentivizedPacketsRequest;
                    fromAmino(object: _164.QueryIncentivizedPacketsRequestAmino): _164.QueryIncentivizedPacketsRequest;
                    toAmino(message: _164.QueryIncentivizedPacketsRequest): _164.QueryIncentivizedPacketsRequestAmino;
                    fromAminoMsg(object: _164.QueryIncentivizedPacketsRequestAminoMsg): _164.QueryIncentivizedPacketsRequest;
                    toAminoMsg(message: _164.QueryIncentivizedPacketsRequest): _164.QueryIncentivizedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryIncentivizedPacketsRequestProtoMsg): _164.QueryIncentivizedPacketsRequest;
                    toProto(message: _164.QueryIncentivizedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryIncentivizedPacketsRequest): _164.QueryIncentivizedPacketsRequestProtoMsg;
                };
                QueryIncentivizedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryIncentivizedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryIncentivizedPacketsResponse;
                    fromJSON(object: any): _164.QueryIncentivizedPacketsResponse;
                    toJSON(message: _164.QueryIncentivizedPacketsResponse): unknown;
                    fromPartial(object: Partial<_164.QueryIncentivizedPacketsResponse>): _164.QueryIncentivizedPacketsResponse;
                    fromAmino(object: _164.QueryIncentivizedPacketsResponseAmino): _164.QueryIncentivizedPacketsResponse;
                    toAmino(message: _164.QueryIncentivizedPacketsResponse): _164.QueryIncentivizedPacketsResponseAmino;
                    fromAminoMsg(object: _164.QueryIncentivizedPacketsResponseAminoMsg): _164.QueryIncentivizedPacketsResponse;
                    toAminoMsg(message: _164.QueryIncentivizedPacketsResponse): _164.QueryIncentivizedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryIncentivizedPacketsResponseProtoMsg): _164.QueryIncentivizedPacketsResponse;
                    toProto(message: _164.QueryIncentivizedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryIncentivizedPacketsResponse): _164.QueryIncentivizedPacketsResponseProtoMsg;
                };
                QueryIncentivizedPacketRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryIncentivizedPacketRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryIncentivizedPacketRequest;
                    fromJSON(object: any): _164.QueryIncentivizedPacketRequest;
                    toJSON(message: _164.QueryIncentivizedPacketRequest): unknown;
                    fromPartial(object: Partial<_164.QueryIncentivizedPacketRequest>): _164.QueryIncentivizedPacketRequest;
                    fromAmino(object: _164.QueryIncentivizedPacketRequestAmino): _164.QueryIncentivizedPacketRequest;
                    toAmino(message: _164.QueryIncentivizedPacketRequest): _164.QueryIncentivizedPacketRequestAmino;
                    fromAminoMsg(object: _164.QueryIncentivizedPacketRequestAminoMsg): _164.QueryIncentivizedPacketRequest;
                    toAminoMsg(message: _164.QueryIncentivizedPacketRequest): _164.QueryIncentivizedPacketRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryIncentivizedPacketRequestProtoMsg): _164.QueryIncentivizedPacketRequest;
                    toProto(message: _164.QueryIncentivizedPacketRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryIncentivizedPacketRequest): _164.QueryIncentivizedPacketRequestProtoMsg;
                };
                QueryIncentivizedPacketResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryIncentivizedPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryIncentivizedPacketResponse;
                    fromJSON(object: any): _164.QueryIncentivizedPacketResponse;
                    toJSON(message: _164.QueryIncentivizedPacketResponse): unknown;
                    fromPartial(object: Partial<_164.QueryIncentivizedPacketResponse>): _164.QueryIncentivizedPacketResponse;
                    fromAmino(object: _164.QueryIncentivizedPacketResponseAmino): _164.QueryIncentivizedPacketResponse;
                    toAmino(message: _164.QueryIncentivizedPacketResponse): _164.QueryIncentivizedPacketResponseAmino;
                    fromAminoMsg(object: _164.QueryIncentivizedPacketResponseAminoMsg): _164.QueryIncentivizedPacketResponse;
                    toAminoMsg(message: _164.QueryIncentivizedPacketResponse): _164.QueryIncentivizedPacketResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryIncentivizedPacketResponseProtoMsg): _164.QueryIncentivizedPacketResponse;
                    toProto(message: _164.QueryIncentivizedPacketResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryIncentivizedPacketResponse): _164.QueryIncentivizedPacketResponseProtoMsg;
                };
                QueryIncentivizedPacketsForChannelRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryIncentivizedPacketsForChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryIncentivizedPacketsForChannelRequest;
                    fromJSON(object: any): _164.QueryIncentivizedPacketsForChannelRequest;
                    toJSON(message: _164.QueryIncentivizedPacketsForChannelRequest): unknown;
                    fromPartial(object: Partial<_164.QueryIncentivizedPacketsForChannelRequest>): _164.QueryIncentivizedPacketsForChannelRequest;
                    fromAmino(object: _164.QueryIncentivizedPacketsForChannelRequestAmino): _164.QueryIncentivizedPacketsForChannelRequest;
                    toAmino(message: _164.QueryIncentivizedPacketsForChannelRequest): _164.QueryIncentivizedPacketsForChannelRequestAmino;
                    fromAminoMsg(object: _164.QueryIncentivizedPacketsForChannelRequestAminoMsg): _164.QueryIncentivizedPacketsForChannelRequest;
                    toAminoMsg(message: _164.QueryIncentivizedPacketsForChannelRequest): _164.QueryIncentivizedPacketsForChannelRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryIncentivizedPacketsForChannelRequestProtoMsg): _164.QueryIncentivizedPacketsForChannelRequest;
                    toProto(message: _164.QueryIncentivizedPacketsForChannelRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryIncentivizedPacketsForChannelRequest): _164.QueryIncentivizedPacketsForChannelRequestProtoMsg;
                };
                QueryIncentivizedPacketsForChannelResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryIncentivizedPacketsForChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryIncentivizedPacketsForChannelResponse;
                    fromJSON(object: any): _164.QueryIncentivizedPacketsForChannelResponse;
                    toJSON(message: _164.QueryIncentivizedPacketsForChannelResponse): unknown;
                    fromPartial(object: Partial<_164.QueryIncentivizedPacketsForChannelResponse>): _164.QueryIncentivizedPacketsForChannelResponse;
                    fromAmino(object: _164.QueryIncentivizedPacketsForChannelResponseAmino): _164.QueryIncentivizedPacketsForChannelResponse;
                    toAmino(message: _164.QueryIncentivizedPacketsForChannelResponse): _164.QueryIncentivizedPacketsForChannelResponseAmino;
                    fromAminoMsg(object: _164.QueryIncentivizedPacketsForChannelResponseAminoMsg): _164.QueryIncentivizedPacketsForChannelResponse;
                    toAminoMsg(message: _164.QueryIncentivizedPacketsForChannelResponse): _164.QueryIncentivizedPacketsForChannelResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryIncentivizedPacketsForChannelResponseProtoMsg): _164.QueryIncentivizedPacketsForChannelResponse;
                    toProto(message: _164.QueryIncentivizedPacketsForChannelResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryIncentivizedPacketsForChannelResponse): _164.QueryIncentivizedPacketsForChannelResponseProtoMsg;
                };
                QueryTotalRecvFeesRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryTotalRecvFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryTotalRecvFeesRequest;
                    fromJSON(object: any): _164.QueryTotalRecvFeesRequest;
                    toJSON(message: _164.QueryTotalRecvFeesRequest): unknown;
                    fromPartial(object: Partial<_164.QueryTotalRecvFeesRequest>): _164.QueryTotalRecvFeesRequest;
                    fromAmino(object: _164.QueryTotalRecvFeesRequestAmino): _164.QueryTotalRecvFeesRequest;
                    toAmino(message: _164.QueryTotalRecvFeesRequest): _164.QueryTotalRecvFeesRequestAmino;
                    fromAminoMsg(object: _164.QueryTotalRecvFeesRequestAminoMsg): _164.QueryTotalRecvFeesRequest;
                    toAminoMsg(message: _164.QueryTotalRecvFeesRequest): _164.QueryTotalRecvFeesRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryTotalRecvFeesRequestProtoMsg): _164.QueryTotalRecvFeesRequest;
                    toProto(message: _164.QueryTotalRecvFeesRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryTotalRecvFeesRequest): _164.QueryTotalRecvFeesRequestProtoMsg;
                };
                QueryTotalRecvFeesResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryTotalRecvFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryTotalRecvFeesResponse;
                    fromJSON(object: any): _164.QueryTotalRecvFeesResponse;
                    toJSON(message: _164.QueryTotalRecvFeesResponse): unknown;
                    fromPartial(object: Partial<_164.QueryTotalRecvFeesResponse>): _164.QueryTotalRecvFeesResponse;
                    fromAmino(object: _164.QueryTotalRecvFeesResponseAmino): _164.QueryTotalRecvFeesResponse;
                    toAmino(message: _164.QueryTotalRecvFeesResponse): _164.QueryTotalRecvFeesResponseAmino;
                    fromAminoMsg(object: _164.QueryTotalRecvFeesResponseAminoMsg): _164.QueryTotalRecvFeesResponse;
                    toAminoMsg(message: _164.QueryTotalRecvFeesResponse): _164.QueryTotalRecvFeesResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryTotalRecvFeesResponseProtoMsg): _164.QueryTotalRecvFeesResponse;
                    toProto(message: _164.QueryTotalRecvFeesResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryTotalRecvFeesResponse): _164.QueryTotalRecvFeesResponseProtoMsg;
                };
                QueryTotalAckFeesRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryTotalAckFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryTotalAckFeesRequest;
                    fromJSON(object: any): _164.QueryTotalAckFeesRequest;
                    toJSON(message: _164.QueryTotalAckFeesRequest): unknown;
                    fromPartial(object: Partial<_164.QueryTotalAckFeesRequest>): _164.QueryTotalAckFeesRequest;
                    fromAmino(object: _164.QueryTotalAckFeesRequestAmino): _164.QueryTotalAckFeesRequest;
                    toAmino(message: _164.QueryTotalAckFeesRequest): _164.QueryTotalAckFeesRequestAmino;
                    fromAminoMsg(object: _164.QueryTotalAckFeesRequestAminoMsg): _164.QueryTotalAckFeesRequest;
                    toAminoMsg(message: _164.QueryTotalAckFeesRequest): _164.QueryTotalAckFeesRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryTotalAckFeesRequestProtoMsg): _164.QueryTotalAckFeesRequest;
                    toProto(message: _164.QueryTotalAckFeesRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryTotalAckFeesRequest): _164.QueryTotalAckFeesRequestProtoMsg;
                };
                QueryTotalAckFeesResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryTotalAckFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryTotalAckFeesResponse;
                    fromJSON(object: any): _164.QueryTotalAckFeesResponse;
                    toJSON(message: _164.QueryTotalAckFeesResponse): unknown;
                    fromPartial(object: Partial<_164.QueryTotalAckFeesResponse>): _164.QueryTotalAckFeesResponse;
                    fromAmino(object: _164.QueryTotalAckFeesResponseAmino): _164.QueryTotalAckFeesResponse;
                    toAmino(message: _164.QueryTotalAckFeesResponse): _164.QueryTotalAckFeesResponseAmino;
                    fromAminoMsg(object: _164.QueryTotalAckFeesResponseAminoMsg): _164.QueryTotalAckFeesResponse;
                    toAminoMsg(message: _164.QueryTotalAckFeesResponse): _164.QueryTotalAckFeesResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryTotalAckFeesResponseProtoMsg): _164.QueryTotalAckFeesResponse;
                    toProto(message: _164.QueryTotalAckFeesResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryTotalAckFeesResponse): _164.QueryTotalAckFeesResponseProtoMsg;
                };
                QueryTotalTimeoutFeesRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryTotalTimeoutFeesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryTotalTimeoutFeesRequest;
                    fromJSON(object: any): _164.QueryTotalTimeoutFeesRequest;
                    toJSON(message: _164.QueryTotalTimeoutFeesRequest): unknown;
                    fromPartial(object: Partial<_164.QueryTotalTimeoutFeesRequest>): _164.QueryTotalTimeoutFeesRequest;
                    fromAmino(object: _164.QueryTotalTimeoutFeesRequestAmino): _164.QueryTotalTimeoutFeesRequest;
                    toAmino(message: _164.QueryTotalTimeoutFeesRequest): _164.QueryTotalTimeoutFeesRequestAmino;
                    fromAminoMsg(object: _164.QueryTotalTimeoutFeesRequestAminoMsg): _164.QueryTotalTimeoutFeesRequest;
                    toAminoMsg(message: _164.QueryTotalTimeoutFeesRequest): _164.QueryTotalTimeoutFeesRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryTotalTimeoutFeesRequestProtoMsg): _164.QueryTotalTimeoutFeesRequest;
                    toProto(message: _164.QueryTotalTimeoutFeesRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryTotalTimeoutFeesRequest): _164.QueryTotalTimeoutFeesRequestProtoMsg;
                };
                QueryTotalTimeoutFeesResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryTotalTimeoutFeesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryTotalTimeoutFeesResponse;
                    fromJSON(object: any): _164.QueryTotalTimeoutFeesResponse;
                    toJSON(message: _164.QueryTotalTimeoutFeesResponse): unknown;
                    fromPartial(object: Partial<_164.QueryTotalTimeoutFeesResponse>): _164.QueryTotalTimeoutFeesResponse;
                    fromAmino(object: _164.QueryTotalTimeoutFeesResponseAmino): _164.QueryTotalTimeoutFeesResponse;
                    toAmino(message: _164.QueryTotalTimeoutFeesResponse): _164.QueryTotalTimeoutFeesResponseAmino;
                    fromAminoMsg(object: _164.QueryTotalTimeoutFeesResponseAminoMsg): _164.QueryTotalTimeoutFeesResponse;
                    toAminoMsg(message: _164.QueryTotalTimeoutFeesResponse): _164.QueryTotalTimeoutFeesResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryTotalTimeoutFeesResponseProtoMsg): _164.QueryTotalTimeoutFeesResponse;
                    toProto(message: _164.QueryTotalTimeoutFeesResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryTotalTimeoutFeesResponse): _164.QueryTotalTimeoutFeesResponseProtoMsg;
                };
                QueryPayeeRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryPayeeRequest;
                    fromJSON(object: any): _164.QueryPayeeRequest;
                    toJSON(message: _164.QueryPayeeRequest): unknown;
                    fromPartial(object: Partial<_164.QueryPayeeRequest>): _164.QueryPayeeRequest;
                    fromAmino(object: _164.QueryPayeeRequestAmino): _164.QueryPayeeRequest;
                    toAmino(message: _164.QueryPayeeRequest): _164.QueryPayeeRequestAmino;
                    fromAminoMsg(object: _164.QueryPayeeRequestAminoMsg): _164.QueryPayeeRequest;
                    toAminoMsg(message: _164.QueryPayeeRequest): _164.QueryPayeeRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryPayeeRequestProtoMsg): _164.QueryPayeeRequest;
                    toProto(message: _164.QueryPayeeRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryPayeeRequest): _164.QueryPayeeRequestProtoMsg;
                };
                QueryPayeeResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryPayeeResponse;
                    fromJSON(object: any): _164.QueryPayeeResponse;
                    toJSON(message: _164.QueryPayeeResponse): unknown;
                    fromPartial(object: Partial<_164.QueryPayeeResponse>): _164.QueryPayeeResponse;
                    fromAmino(object: _164.QueryPayeeResponseAmino): _164.QueryPayeeResponse;
                    toAmino(message: _164.QueryPayeeResponse): _164.QueryPayeeResponseAmino;
                    fromAminoMsg(object: _164.QueryPayeeResponseAminoMsg): _164.QueryPayeeResponse;
                    toAminoMsg(message: _164.QueryPayeeResponse): _164.QueryPayeeResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryPayeeResponseProtoMsg): _164.QueryPayeeResponse;
                    toProto(message: _164.QueryPayeeResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryPayeeResponse): _164.QueryPayeeResponseProtoMsg;
                };
                QueryCounterpartyPayeeRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryCounterpartyPayeeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryCounterpartyPayeeRequest;
                    fromJSON(object: any): _164.QueryCounterpartyPayeeRequest;
                    toJSON(message: _164.QueryCounterpartyPayeeRequest): unknown;
                    fromPartial(object: Partial<_164.QueryCounterpartyPayeeRequest>): _164.QueryCounterpartyPayeeRequest;
                    fromAmino(object: _164.QueryCounterpartyPayeeRequestAmino): _164.QueryCounterpartyPayeeRequest;
                    toAmino(message: _164.QueryCounterpartyPayeeRequest): _164.QueryCounterpartyPayeeRequestAmino;
                    fromAminoMsg(object: _164.QueryCounterpartyPayeeRequestAminoMsg): _164.QueryCounterpartyPayeeRequest;
                    toAminoMsg(message: _164.QueryCounterpartyPayeeRequest): _164.QueryCounterpartyPayeeRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryCounterpartyPayeeRequestProtoMsg): _164.QueryCounterpartyPayeeRequest;
                    toProto(message: _164.QueryCounterpartyPayeeRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryCounterpartyPayeeRequest): _164.QueryCounterpartyPayeeRequestProtoMsg;
                };
                QueryCounterpartyPayeeResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryCounterpartyPayeeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryCounterpartyPayeeResponse;
                    fromJSON(object: any): _164.QueryCounterpartyPayeeResponse;
                    toJSON(message: _164.QueryCounterpartyPayeeResponse): unknown;
                    fromPartial(object: Partial<_164.QueryCounterpartyPayeeResponse>): _164.QueryCounterpartyPayeeResponse;
                    fromAmino(object: _164.QueryCounterpartyPayeeResponseAmino): _164.QueryCounterpartyPayeeResponse;
                    toAmino(message: _164.QueryCounterpartyPayeeResponse): _164.QueryCounterpartyPayeeResponseAmino;
                    fromAminoMsg(object: _164.QueryCounterpartyPayeeResponseAminoMsg): _164.QueryCounterpartyPayeeResponse;
                    toAminoMsg(message: _164.QueryCounterpartyPayeeResponse): _164.QueryCounterpartyPayeeResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryCounterpartyPayeeResponseProtoMsg): _164.QueryCounterpartyPayeeResponse;
                    toProto(message: _164.QueryCounterpartyPayeeResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryCounterpartyPayeeResponse): _164.QueryCounterpartyPayeeResponseProtoMsg;
                };
                QueryFeeEnabledChannelsRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryFeeEnabledChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryFeeEnabledChannelsRequest;
                    fromJSON(object: any): _164.QueryFeeEnabledChannelsRequest;
                    toJSON(message: _164.QueryFeeEnabledChannelsRequest): unknown;
                    fromPartial(object: Partial<_164.QueryFeeEnabledChannelsRequest>): _164.QueryFeeEnabledChannelsRequest;
                    fromAmino(object: _164.QueryFeeEnabledChannelsRequestAmino): _164.QueryFeeEnabledChannelsRequest;
                    toAmino(message: _164.QueryFeeEnabledChannelsRequest): _164.QueryFeeEnabledChannelsRequestAmino;
                    fromAminoMsg(object: _164.QueryFeeEnabledChannelsRequestAminoMsg): _164.QueryFeeEnabledChannelsRequest;
                    toAminoMsg(message: _164.QueryFeeEnabledChannelsRequest): _164.QueryFeeEnabledChannelsRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryFeeEnabledChannelsRequestProtoMsg): _164.QueryFeeEnabledChannelsRequest;
                    toProto(message: _164.QueryFeeEnabledChannelsRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryFeeEnabledChannelsRequest): _164.QueryFeeEnabledChannelsRequestProtoMsg;
                };
                QueryFeeEnabledChannelsResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryFeeEnabledChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryFeeEnabledChannelsResponse;
                    fromJSON(object: any): _164.QueryFeeEnabledChannelsResponse;
                    toJSON(message: _164.QueryFeeEnabledChannelsResponse): unknown;
                    fromPartial(object: Partial<_164.QueryFeeEnabledChannelsResponse>): _164.QueryFeeEnabledChannelsResponse;
                    fromAmino(object: _164.QueryFeeEnabledChannelsResponseAmino): _164.QueryFeeEnabledChannelsResponse;
                    toAmino(message: _164.QueryFeeEnabledChannelsResponse): _164.QueryFeeEnabledChannelsResponseAmino;
                    fromAminoMsg(object: _164.QueryFeeEnabledChannelsResponseAminoMsg): _164.QueryFeeEnabledChannelsResponse;
                    toAminoMsg(message: _164.QueryFeeEnabledChannelsResponse): _164.QueryFeeEnabledChannelsResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryFeeEnabledChannelsResponseProtoMsg): _164.QueryFeeEnabledChannelsResponse;
                    toProto(message: _164.QueryFeeEnabledChannelsResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryFeeEnabledChannelsResponse): _164.QueryFeeEnabledChannelsResponseProtoMsg;
                };
                QueryFeeEnabledChannelRequest: {
                    typeUrl: string;
                    encode(message: _164.QueryFeeEnabledChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryFeeEnabledChannelRequest;
                    fromJSON(object: any): _164.QueryFeeEnabledChannelRequest;
                    toJSON(message: _164.QueryFeeEnabledChannelRequest): unknown;
                    fromPartial(object: Partial<_164.QueryFeeEnabledChannelRequest>): _164.QueryFeeEnabledChannelRequest;
                    fromAmino(object: _164.QueryFeeEnabledChannelRequestAmino): _164.QueryFeeEnabledChannelRequest;
                    toAmino(message: _164.QueryFeeEnabledChannelRequest): _164.QueryFeeEnabledChannelRequestAmino;
                    fromAminoMsg(object: _164.QueryFeeEnabledChannelRequestAminoMsg): _164.QueryFeeEnabledChannelRequest;
                    toAminoMsg(message: _164.QueryFeeEnabledChannelRequest): _164.QueryFeeEnabledChannelRequestAminoMsg;
                    fromProtoMsg(message: _164.QueryFeeEnabledChannelRequestProtoMsg): _164.QueryFeeEnabledChannelRequest;
                    toProto(message: _164.QueryFeeEnabledChannelRequest): Uint8Array;
                    toProtoMsg(message: _164.QueryFeeEnabledChannelRequest): _164.QueryFeeEnabledChannelRequestProtoMsg;
                };
                QueryFeeEnabledChannelResponse: {
                    typeUrl: string;
                    encode(message: _164.QueryFeeEnabledChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryFeeEnabledChannelResponse;
                    fromJSON(object: any): _164.QueryFeeEnabledChannelResponse;
                    toJSON(message: _164.QueryFeeEnabledChannelResponse): unknown;
                    fromPartial(object: Partial<_164.QueryFeeEnabledChannelResponse>): _164.QueryFeeEnabledChannelResponse;
                    fromAmino(object: _164.QueryFeeEnabledChannelResponseAmino): _164.QueryFeeEnabledChannelResponse;
                    toAmino(message: _164.QueryFeeEnabledChannelResponse): _164.QueryFeeEnabledChannelResponseAmino;
                    fromAminoMsg(object: _164.QueryFeeEnabledChannelResponseAminoMsg): _164.QueryFeeEnabledChannelResponse;
                    toAminoMsg(message: _164.QueryFeeEnabledChannelResponse): _164.QueryFeeEnabledChannelResponseAminoMsg;
                    fromProtoMsg(message: _164.QueryFeeEnabledChannelResponseProtoMsg): _164.QueryFeeEnabledChannelResponse;
                    toProto(message: _164.QueryFeeEnabledChannelResponse): Uint8Array;
                    toProtoMsg(message: _164.QueryFeeEnabledChannelResponse): _164.QueryFeeEnabledChannelResponseProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _163.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.Metadata;
                    fromJSON(object: any): _163.Metadata;
                    toJSON(message: _163.Metadata): unknown;
                    fromPartial(object: Partial<_163.Metadata>): _163.Metadata;
                    fromAmino(object: _163.MetadataAmino): _163.Metadata;
                    toAmino(message: _163.Metadata): _163.MetadataAmino;
                    fromAminoMsg(object: _163.MetadataAminoMsg): _163.Metadata;
                    toAminoMsg(message: _163.Metadata): _163.MetadataAminoMsg;
                    fromProtoMsg(message: _163.MetadataProtoMsg): _163.Metadata;
                    toProto(message: _163.Metadata): Uint8Array;
                    toProtoMsg(message: _163.Metadata): _163.MetadataProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _162.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.GenesisState;
                    fromJSON(object: any): _162.GenesisState;
                    toJSON(message: _162.GenesisState): unknown;
                    fromPartial(object: Partial<_162.GenesisState>): _162.GenesisState;
                    fromAmino(object: _162.GenesisStateAmino): _162.GenesisState;
                    toAmino(message: _162.GenesisState): _162.GenesisStateAmino;
                    fromAminoMsg(object: _162.GenesisStateAminoMsg): _162.GenesisState;
                    toAminoMsg(message: _162.GenesisState): _162.GenesisStateAminoMsg;
                    fromProtoMsg(message: _162.GenesisStateProtoMsg): _162.GenesisState;
                    toProto(message: _162.GenesisState): Uint8Array;
                    toProtoMsg(message: _162.GenesisState): _162.GenesisStateProtoMsg;
                };
                FeeEnabledChannel: {
                    typeUrl: string;
                    encode(message: _162.FeeEnabledChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.FeeEnabledChannel;
                    fromJSON(object: any): _162.FeeEnabledChannel;
                    toJSON(message: _162.FeeEnabledChannel): unknown;
                    fromPartial(object: Partial<_162.FeeEnabledChannel>): _162.FeeEnabledChannel;
                    fromAmino(object: _162.FeeEnabledChannelAmino): _162.FeeEnabledChannel;
                    toAmino(message: _162.FeeEnabledChannel): _162.FeeEnabledChannelAmino;
                    fromAminoMsg(object: _162.FeeEnabledChannelAminoMsg): _162.FeeEnabledChannel;
                    toAminoMsg(message: _162.FeeEnabledChannel): _162.FeeEnabledChannelAminoMsg;
                    fromProtoMsg(message: _162.FeeEnabledChannelProtoMsg): _162.FeeEnabledChannel;
                    toProto(message: _162.FeeEnabledChannel): Uint8Array;
                    toProtoMsg(message: _162.FeeEnabledChannel): _162.FeeEnabledChannelProtoMsg;
                };
                RegisteredPayee: {
                    typeUrl: string;
                    encode(message: _162.RegisteredPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RegisteredPayee;
                    fromJSON(object: any): _162.RegisteredPayee;
                    toJSON(message: _162.RegisteredPayee): unknown;
                    fromPartial(object: Partial<_162.RegisteredPayee>): _162.RegisteredPayee;
                    fromAmino(object: _162.RegisteredPayeeAmino): _162.RegisteredPayee;
                    toAmino(message: _162.RegisteredPayee): _162.RegisteredPayeeAmino;
                    fromAminoMsg(object: _162.RegisteredPayeeAminoMsg): _162.RegisteredPayee;
                    toAminoMsg(message: _162.RegisteredPayee): _162.RegisteredPayeeAminoMsg;
                    fromProtoMsg(message: _162.RegisteredPayeeProtoMsg): _162.RegisteredPayee;
                    toProto(message: _162.RegisteredPayee): Uint8Array;
                    toProtoMsg(message: _162.RegisteredPayee): _162.RegisteredPayeeProtoMsg;
                };
                RegisteredCounterpartyPayee: {
                    typeUrl: string;
                    encode(message: _162.RegisteredCounterpartyPayee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.RegisteredCounterpartyPayee;
                    fromJSON(object: any): _162.RegisteredCounterpartyPayee;
                    toJSON(message: _162.RegisteredCounterpartyPayee): unknown;
                    fromPartial(object: Partial<_162.RegisteredCounterpartyPayee>): _162.RegisteredCounterpartyPayee;
                    fromAmino(object: _162.RegisteredCounterpartyPayeeAmino): _162.RegisteredCounterpartyPayee;
                    toAmino(message: _162.RegisteredCounterpartyPayee): _162.RegisteredCounterpartyPayeeAmino;
                    fromAminoMsg(object: _162.RegisteredCounterpartyPayeeAminoMsg): _162.RegisteredCounterpartyPayee;
                    toAminoMsg(message: _162.RegisteredCounterpartyPayee): _162.RegisteredCounterpartyPayeeAminoMsg;
                    fromProtoMsg(message: _162.RegisteredCounterpartyPayeeProtoMsg): _162.RegisteredCounterpartyPayee;
                    toProto(message: _162.RegisteredCounterpartyPayee): Uint8Array;
                    toProtoMsg(message: _162.RegisteredCounterpartyPayee): _162.RegisteredCounterpartyPayeeProtoMsg;
                };
                ForwardRelayerAddress: {
                    typeUrl: string;
                    encode(message: _162.ForwardRelayerAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.ForwardRelayerAddress;
                    fromJSON(object: any): _162.ForwardRelayerAddress;
                    toJSON(message: _162.ForwardRelayerAddress): unknown;
                    fromPartial(object: Partial<_162.ForwardRelayerAddress>): _162.ForwardRelayerAddress;
                    fromAmino(object: _162.ForwardRelayerAddressAmino): _162.ForwardRelayerAddress;
                    toAmino(message: _162.ForwardRelayerAddress): _162.ForwardRelayerAddressAmino;
                    fromAminoMsg(object: _162.ForwardRelayerAddressAminoMsg): _162.ForwardRelayerAddress;
                    toAminoMsg(message: _162.ForwardRelayerAddress): _162.ForwardRelayerAddressAminoMsg;
                    fromProtoMsg(message: _162.ForwardRelayerAddressProtoMsg): _162.ForwardRelayerAddress;
                    toProto(message: _162.ForwardRelayerAddress): Uint8Array;
                    toProtoMsg(message: _162.ForwardRelayerAddress): _162.ForwardRelayerAddressProtoMsg;
                };
                Fee: {
                    typeUrl: string;
                    encode(message: _161.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.Fee;
                    fromJSON(object: any): _161.Fee;
                    toJSON(message: _161.Fee): unknown;
                    fromPartial(object: Partial<_161.Fee>): _161.Fee;
                    fromAmino(object: _161.FeeAmino): _161.Fee;
                    toAmino(message: _161.Fee): _161.FeeAmino;
                    fromAminoMsg(object: _161.FeeAminoMsg): _161.Fee;
                    toAminoMsg(message: _161.Fee): _161.FeeAminoMsg;
                    fromProtoMsg(message: _161.FeeProtoMsg): _161.Fee;
                    toProto(message: _161.Fee): Uint8Array;
                    toProtoMsg(message: _161.Fee): _161.FeeProtoMsg;
                };
                PacketFee: {
                    typeUrl: string;
                    encode(message: _161.PacketFee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PacketFee;
                    fromJSON(object: any): _161.PacketFee;
                    toJSON(message: _161.PacketFee): unknown;
                    fromPartial(object: Partial<_161.PacketFee>): _161.PacketFee;
                    fromAmino(object: _161.PacketFeeAmino): _161.PacketFee;
                    toAmino(message: _161.PacketFee): _161.PacketFeeAmino;
                    fromAminoMsg(object: _161.PacketFeeAminoMsg): _161.PacketFee;
                    toAminoMsg(message: _161.PacketFee): _161.PacketFeeAminoMsg;
                    fromProtoMsg(message: _161.PacketFeeProtoMsg): _161.PacketFee;
                    toProto(message: _161.PacketFee): Uint8Array;
                    toProtoMsg(message: _161.PacketFee): _161.PacketFeeProtoMsg;
                };
                PacketFees: {
                    typeUrl: string;
                    encode(message: _161.PacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.PacketFees;
                    fromJSON(object: any): _161.PacketFees;
                    toJSON(message: _161.PacketFees): unknown;
                    fromPartial(object: Partial<_161.PacketFees>): _161.PacketFees;
                    fromAmino(object: _161.PacketFeesAmino): _161.PacketFees;
                    toAmino(message: _161.PacketFees): _161.PacketFeesAmino;
                    fromAminoMsg(object: _161.PacketFeesAminoMsg): _161.PacketFees;
                    toAminoMsg(message: _161.PacketFees): _161.PacketFeesAminoMsg;
                    fromProtoMsg(message: _161.PacketFeesProtoMsg): _161.PacketFees;
                    toProto(message: _161.PacketFees): Uint8Array;
                    toProtoMsg(message: _161.PacketFees): _161.PacketFeesProtoMsg;
                };
                IdentifiedPacketFees: {
                    typeUrl: string;
                    encode(message: _161.IdentifiedPacketFees, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.IdentifiedPacketFees;
                    fromJSON(object: any): _161.IdentifiedPacketFees;
                    toJSON(message: _161.IdentifiedPacketFees): unknown;
                    fromPartial(object: Partial<_161.IdentifiedPacketFees>): _161.IdentifiedPacketFees;
                    fromAmino(object: _161.IdentifiedPacketFeesAmino): _161.IdentifiedPacketFees;
                    toAmino(message: _161.IdentifiedPacketFees): _161.IdentifiedPacketFeesAmino;
                    fromAminoMsg(object: _161.IdentifiedPacketFeesAminoMsg): _161.IdentifiedPacketFees;
                    toAminoMsg(message: _161.IdentifiedPacketFees): _161.IdentifiedPacketFeesAminoMsg;
                    fromProtoMsg(message: _161.IdentifiedPacketFeesProtoMsg): _161.IdentifiedPacketFees;
                    toProto(message: _161.IdentifiedPacketFees): Uint8Array;
                    toProtoMsg(message: _161.IdentifiedPacketFees): _161.IdentifiedPacketFeesProtoMsg;
                };
                IncentivizedAcknowledgement: {
                    typeUrl: string;
                    encode(message: _160.IncentivizedAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.IncentivizedAcknowledgement;
                    fromJSON(object: any): _160.IncentivizedAcknowledgement;
                    toJSON(message: _160.IncentivizedAcknowledgement): unknown;
                    fromPartial(object: Partial<_160.IncentivizedAcknowledgement>): _160.IncentivizedAcknowledgement;
                    fromAmino(object: _160.IncentivizedAcknowledgementAmino): _160.IncentivizedAcknowledgement;
                    toAmino(message: _160.IncentivizedAcknowledgement): _160.IncentivizedAcknowledgementAmino;
                    fromAminoMsg(object: _160.IncentivizedAcknowledgementAminoMsg): _160.IncentivizedAcknowledgement;
                    toAminoMsg(message: _160.IncentivizedAcknowledgement): _160.IncentivizedAcknowledgementAminoMsg;
                    fromProtoMsg(message: _160.IncentivizedAcknowledgementProtoMsg): _160.IncentivizedAcknowledgement;
                    toProto(message: _160.IncentivizedAcknowledgement): Uint8Array;
                    toProtoMsg(message: _160.IncentivizedAcknowledgement): _160.IncentivizedAcknowledgementProtoMsg;
                };
            };
        }
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    MsgClientImpl: typeof _334.MsgClientImpl;
                    QueryClientImpl: typeof _327.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _167.QueryInterchainAccountRequest): Promise<_167.QueryInterchainAccountResponse>;
                        params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _320.LCDQueryClient;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            registerInterchainAccount(value: _168.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            sendTx(value: _168.MsgSendTx): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            registerInterchainAccount(value: _168.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _168.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _168.MsgSendTx): {
                                typeUrl: string;
                                value: _168.MsgSendTx;
                            };
                        };
                        toJSON: {
                            registerInterchainAccount(value: _168.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: unknown;
                            };
                            sendTx(value: _168.MsgSendTx): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            registerInterchainAccount(value: any): {
                                typeUrl: string;
                                value: _168.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: any): {
                                typeUrl: string;
                                value: _168.MsgSendTx;
                            };
                        };
                        fromPartial: {
                            registerInterchainAccount(value: _168.MsgRegisterInterchainAccount): {
                                typeUrl: string;
                                value: _168.MsgRegisterInterchainAccount;
                            };
                            sendTx(value: _168.MsgSendTx): {
                                typeUrl: string;
                                value: _168.MsgSendTx;
                            };
                        };
                    };
                    AminoConverter: {
                        "/ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount": {
                            aminoType: string;
                            toAmino: (message: _168.MsgRegisterInterchainAccount) => _168.MsgRegisterInterchainAccountAmino;
                            fromAmino: (object: _168.MsgRegisterInterchainAccountAmino) => _168.MsgRegisterInterchainAccount;
                        };
                        "/ibc.applications.interchain_accounts.controller.v1.MsgSendTx": {
                            aminoType: string;
                            toAmino: (message: _168.MsgSendTx) => _168.MsgSendTxAmino;
                            fromAmino: (object: _168.MsgSendTxAmino) => _168.MsgSendTx;
                        };
                    };
                    MsgRegisterInterchainAccount: {
                        typeUrl: string;
                        encode(message: _168.MsgRegisterInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgRegisterInterchainAccount;
                        fromJSON(object: any): _168.MsgRegisterInterchainAccount;
                        toJSON(message: _168.MsgRegisterInterchainAccount): unknown;
                        fromPartial(object: Partial<_168.MsgRegisterInterchainAccount>): _168.MsgRegisterInterchainAccount;
                        fromAmino(object: _168.MsgRegisterInterchainAccountAmino): _168.MsgRegisterInterchainAccount;
                        toAmino(message: _168.MsgRegisterInterchainAccount): _168.MsgRegisterInterchainAccountAmino;
                        fromAminoMsg(object: _168.MsgRegisterInterchainAccountAminoMsg): _168.MsgRegisterInterchainAccount;
                        toAminoMsg(message: _168.MsgRegisterInterchainAccount): _168.MsgRegisterInterchainAccountAminoMsg;
                        fromProtoMsg(message: _168.MsgRegisterInterchainAccountProtoMsg): _168.MsgRegisterInterchainAccount;
                        toProto(message: _168.MsgRegisterInterchainAccount): Uint8Array;
                        toProtoMsg(message: _168.MsgRegisterInterchainAccount): _168.MsgRegisterInterchainAccountProtoMsg;
                    };
                    MsgRegisterInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _168.MsgRegisterInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgRegisterInterchainAccountResponse;
                        fromJSON(object: any): _168.MsgRegisterInterchainAccountResponse;
                        toJSON(message: _168.MsgRegisterInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_168.MsgRegisterInterchainAccountResponse>): _168.MsgRegisterInterchainAccountResponse;
                        fromAmino(object: _168.MsgRegisterInterchainAccountResponseAmino): _168.MsgRegisterInterchainAccountResponse;
                        toAmino(message: _168.MsgRegisterInterchainAccountResponse): _168.MsgRegisterInterchainAccountResponseAmino;
                        fromAminoMsg(object: _168.MsgRegisterInterchainAccountResponseAminoMsg): _168.MsgRegisterInterchainAccountResponse;
                        toAminoMsg(message: _168.MsgRegisterInterchainAccountResponse): _168.MsgRegisterInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _168.MsgRegisterInterchainAccountResponseProtoMsg): _168.MsgRegisterInterchainAccountResponse;
                        toProto(message: _168.MsgRegisterInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _168.MsgRegisterInterchainAccountResponse): _168.MsgRegisterInterchainAccountResponseProtoMsg;
                    };
                    MsgSendTx: {
                        typeUrl: string;
                        encode(message: _168.MsgSendTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgSendTx;
                        fromJSON(object: any): _168.MsgSendTx;
                        toJSON(message: _168.MsgSendTx): unknown;
                        fromPartial(object: Partial<_168.MsgSendTx>): _168.MsgSendTx;
                        fromAmino(object: _168.MsgSendTxAmino): _168.MsgSendTx;
                        toAmino(message: _168.MsgSendTx): _168.MsgSendTxAmino;
                        fromAminoMsg(object: _168.MsgSendTxAminoMsg): _168.MsgSendTx;
                        toAminoMsg(message: _168.MsgSendTx): _168.MsgSendTxAminoMsg;
                        fromProtoMsg(message: _168.MsgSendTxProtoMsg): _168.MsgSendTx;
                        toProto(message: _168.MsgSendTx): Uint8Array;
                        toProtoMsg(message: _168.MsgSendTx): _168.MsgSendTxProtoMsg;
                    };
                    MsgSendTxResponse: {
                        typeUrl: string;
                        encode(message: _168.MsgSendTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MsgSendTxResponse;
                        fromJSON(object: any): _168.MsgSendTxResponse;
                        toJSON(message: _168.MsgSendTxResponse): unknown;
                        fromPartial(object: Partial<_168.MsgSendTxResponse>): _168.MsgSendTxResponse;
                        fromAmino(object: _168.MsgSendTxResponseAmino): _168.MsgSendTxResponse;
                        toAmino(message: _168.MsgSendTxResponse): _168.MsgSendTxResponseAmino;
                        fromAminoMsg(object: _168.MsgSendTxResponseAminoMsg): _168.MsgSendTxResponse;
                        toAminoMsg(message: _168.MsgSendTxResponse): _168.MsgSendTxResponseAminoMsg;
                        fromProtoMsg(message: _168.MsgSendTxResponseProtoMsg): _168.MsgSendTxResponse;
                        toProto(message: _168.MsgSendTxResponse): Uint8Array;
                        toProtoMsg(message: _168.MsgSendTxResponse): _168.MsgSendTxResponseProtoMsg;
                    };
                    QueryInterchainAccountRequest: {
                        typeUrl: string;
                        encode(message: _167.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryInterchainAccountRequest;
                        fromJSON(object: any): _167.QueryInterchainAccountRequest;
                        toJSON(message: _167.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: Partial<_167.QueryInterchainAccountRequest>): _167.QueryInterchainAccountRequest;
                        fromAmino(object: _167.QueryInterchainAccountRequestAmino): _167.QueryInterchainAccountRequest;
                        toAmino(message: _167.QueryInterchainAccountRequest): _167.QueryInterchainAccountRequestAmino;
                        fromAminoMsg(object: _167.QueryInterchainAccountRequestAminoMsg): _167.QueryInterchainAccountRequest;
                        toAminoMsg(message: _167.QueryInterchainAccountRequest): _167.QueryInterchainAccountRequestAminoMsg;
                        fromProtoMsg(message: _167.QueryInterchainAccountRequestProtoMsg): _167.QueryInterchainAccountRequest;
                        toProto(message: _167.QueryInterchainAccountRequest): Uint8Array;
                        toProtoMsg(message: _167.QueryInterchainAccountRequest): _167.QueryInterchainAccountRequestProtoMsg;
                    };
                    QueryInterchainAccountResponse: {
                        typeUrl: string;
                        encode(message: _167.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryInterchainAccountResponse;
                        fromJSON(object: any): _167.QueryInterchainAccountResponse;
                        toJSON(message: _167.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: Partial<_167.QueryInterchainAccountResponse>): _167.QueryInterchainAccountResponse;
                        fromAmino(object: _167.QueryInterchainAccountResponseAmino): _167.QueryInterchainAccountResponse;
                        toAmino(message: _167.QueryInterchainAccountResponse): _167.QueryInterchainAccountResponseAmino;
                        fromAminoMsg(object: _167.QueryInterchainAccountResponseAminoMsg): _167.QueryInterchainAccountResponse;
                        toAminoMsg(message: _167.QueryInterchainAccountResponse): _167.QueryInterchainAccountResponseAminoMsg;
                        fromProtoMsg(message: _167.QueryInterchainAccountResponseProtoMsg): _167.QueryInterchainAccountResponse;
                        toProto(message: _167.QueryInterchainAccountResponse): Uint8Array;
                        toProtoMsg(message: _167.QueryInterchainAccountResponse): _167.QueryInterchainAccountResponseProtoMsg;
                    };
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _167.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryParamsRequest;
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
                        encode(message: _167.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.QueryParamsResponse;
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
                    Params: {
                        typeUrl: string;
                        encode(message: _166.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Params;
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
                };
            }
            namespace genesis {
                const v1: {
                    GenesisState: {
                        typeUrl: string;
                        encode(message: _169.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.GenesisState;
                        fromJSON(object: any): _169.GenesisState;
                        toJSON(message: _169.GenesisState): unknown;
                        fromPartial(object: Partial<_169.GenesisState>): _169.GenesisState;
                        fromAmino(object: _169.GenesisStateAmino): _169.GenesisState;
                        toAmino(message: _169.GenesisState): _169.GenesisStateAmino;
                        fromAminoMsg(object: _169.GenesisStateAminoMsg): _169.GenesisState;
                        toAminoMsg(message: _169.GenesisState): _169.GenesisStateAminoMsg;
                        fromProtoMsg(message: _169.GenesisStateProtoMsg): _169.GenesisState;
                        toProto(message: _169.GenesisState): Uint8Array;
                        toProtoMsg(message: _169.GenesisState): _169.GenesisStateProtoMsg;
                    };
                    ControllerGenesisState: {
                        typeUrl: string;
                        encode(message: _169.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ControllerGenesisState;
                        fromJSON(object: any): _169.ControllerGenesisState;
                        toJSON(message: _169.ControllerGenesisState): unknown;
                        fromPartial(object: Partial<_169.ControllerGenesisState>): _169.ControllerGenesisState;
                        fromAmino(object: _169.ControllerGenesisStateAmino): _169.ControllerGenesisState;
                        toAmino(message: _169.ControllerGenesisState): _169.ControllerGenesisStateAmino;
                        fromAminoMsg(object: _169.ControllerGenesisStateAminoMsg): _169.ControllerGenesisState;
                        toAminoMsg(message: _169.ControllerGenesisState): _169.ControllerGenesisStateAminoMsg;
                        fromProtoMsg(message: _169.ControllerGenesisStateProtoMsg): _169.ControllerGenesisState;
                        toProto(message: _169.ControllerGenesisState): Uint8Array;
                        toProtoMsg(message: _169.ControllerGenesisState): _169.ControllerGenesisStateProtoMsg;
                    };
                    HostGenesisState: {
                        typeUrl: string;
                        encode(message: _169.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.HostGenesisState;
                        fromJSON(object: any): _169.HostGenesisState;
                        toJSON(message: _169.HostGenesisState): unknown;
                        fromPartial(object: Partial<_169.HostGenesisState>): _169.HostGenesisState;
                        fromAmino(object: _169.HostGenesisStateAmino): _169.HostGenesisState;
                        toAmino(message: _169.HostGenesisState): _169.HostGenesisStateAmino;
                        fromAminoMsg(object: _169.HostGenesisStateAminoMsg): _169.HostGenesisState;
                        toAminoMsg(message: _169.HostGenesisState): _169.HostGenesisStateAminoMsg;
                        fromProtoMsg(message: _169.HostGenesisStateProtoMsg): _169.HostGenesisState;
                        toProto(message: _169.HostGenesisState): Uint8Array;
                        toProtoMsg(message: _169.HostGenesisState): _169.HostGenesisStateProtoMsg;
                    };
                    ActiveChannel: {
                        typeUrl: string;
                        encode(message: _169.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.ActiveChannel;
                        fromJSON(object: any): _169.ActiveChannel;
                        toJSON(message: _169.ActiveChannel): unknown;
                        fromPartial(object: Partial<_169.ActiveChannel>): _169.ActiveChannel;
                        fromAmino(object: _169.ActiveChannelAmino): _169.ActiveChannel;
                        toAmino(message: _169.ActiveChannel): _169.ActiveChannelAmino;
                        fromAminoMsg(object: _169.ActiveChannelAminoMsg): _169.ActiveChannel;
                        toAminoMsg(message: _169.ActiveChannel): _169.ActiveChannelAminoMsg;
                        fromProtoMsg(message: _169.ActiveChannelProtoMsg): _169.ActiveChannel;
                        toProto(message: _169.ActiveChannel): Uint8Array;
                        toProtoMsg(message: _169.ActiveChannel): _169.ActiveChannelProtoMsg;
                    };
                    RegisteredInterchainAccount: {
                        typeUrl: string;
                        encode(message: _169.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.RegisteredInterchainAccount;
                        fromJSON(object: any): _169.RegisteredInterchainAccount;
                        toJSON(message: _169.RegisteredInterchainAccount): unknown;
                        fromPartial(object: Partial<_169.RegisteredInterchainAccount>): _169.RegisteredInterchainAccount;
                        fromAmino(object: _169.RegisteredInterchainAccountAmino): _169.RegisteredInterchainAccount;
                        toAmino(message: _169.RegisteredInterchainAccount): _169.RegisteredInterchainAccountAmino;
                        fromAminoMsg(object: _169.RegisteredInterchainAccountAminoMsg): _169.RegisteredInterchainAccount;
                        toAminoMsg(message: _169.RegisteredInterchainAccount): _169.RegisteredInterchainAccountAminoMsg;
                        fromProtoMsg(message: _169.RegisteredInterchainAccountProtoMsg): _169.RegisteredInterchainAccount;
                        toProto(message: _169.RegisteredInterchainAccount): Uint8Array;
                        toProtoMsg(message: _169.RegisteredInterchainAccount): _169.RegisteredInterchainAccountProtoMsg;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _328.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _171.QueryParamsRequest): Promise<_171.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _321.LCDQueryClient;
                    QueryParamsRequest: {
                        typeUrl: string;
                        encode(_: _171.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryParamsRequest;
                        fromJSON(_: any): _171.QueryParamsRequest;
                        toJSON(_: _171.QueryParamsRequest): unknown;
                        fromPartial(_: Partial<_171.QueryParamsRequest>): _171.QueryParamsRequest;
                        fromAmino(_: _171.QueryParamsRequestAmino): _171.QueryParamsRequest;
                        toAmino(_: _171.QueryParamsRequest): _171.QueryParamsRequestAmino;
                        fromAminoMsg(object: _171.QueryParamsRequestAminoMsg): _171.QueryParamsRequest;
                        toAminoMsg(message: _171.QueryParamsRequest): _171.QueryParamsRequestAminoMsg;
                        fromProtoMsg(message: _171.QueryParamsRequestProtoMsg): _171.QueryParamsRequest;
                        toProto(message: _171.QueryParamsRequest): Uint8Array;
                        toProtoMsg(message: _171.QueryParamsRequest): _171.QueryParamsRequestProtoMsg;
                    };
                    QueryParamsResponse: {
                        typeUrl: string;
                        encode(message: _171.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.QueryParamsResponse;
                        fromJSON(object: any): _171.QueryParamsResponse;
                        toJSON(message: _171.QueryParamsResponse): unknown;
                        fromPartial(object: Partial<_171.QueryParamsResponse>): _171.QueryParamsResponse;
                        fromAmino(object: _171.QueryParamsResponseAmino): _171.QueryParamsResponse;
                        toAmino(message: _171.QueryParamsResponse): _171.QueryParamsResponseAmino;
                        fromAminoMsg(object: _171.QueryParamsResponseAminoMsg): _171.QueryParamsResponse;
                        toAminoMsg(message: _171.QueryParamsResponse): _171.QueryParamsResponseAminoMsg;
                        fromProtoMsg(message: _171.QueryParamsResponseProtoMsg): _171.QueryParamsResponse;
                        toProto(message: _171.QueryParamsResponse): Uint8Array;
                        toProtoMsg(message: _171.QueryParamsResponse): _171.QueryParamsResponseProtoMsg;
                    };
                    Params: {
                        typeUrl: string;
                        encode(message: _170.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.Params;
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
                };
            }
            const v1: {
                typeFromJSON(object: any): _174.Type;
                typeToJSON(object: _174.Type): string;
                Type: typeof _174.Type;
                TypeSDKType: typeof _174.Type;
                TypeAmino: typeof _174.Type;
                InterchainAccountPacketData: {
                    typeUrl: string;
                    encode(message: _174.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.InterchainAccountPacketData;
                    fromJSON(object: any): _174.InterchainAccountPacketData;
                    toJSON(message: _174.InterchainAccountPacketData): unknown;
                    fromPartial(object: Partial<_174.InterchainAccountPacketData>): _174.InterchainAccountPacketData;
                    fromAmino(object: _174.InterchainAccountPacketDataAmino): _174.InterchainAccountPacketData;
                    toAmino(message: _174.InterchainAccountPacketData): _174.InterchainAccountPacketDataAmino;
                    fromAminoMsg(object: _174.InterchainAccountPacketDataAminoMsg): _174.InterchainAccountPacketData;
                    toAminoMsg(message: _174.InterchainAccountPacketData): _174.InterchainAccountPacketDataAminoMsg;
                    fromProtoMsg(message: _174.InterchainAccountPacketDataProtoMsg): _174.InterchainAccountPacketData;
                    toProto(message: _174.InterchainAccountPacketData): Uint8Array;
                    toProtoMsg(message: _174.InterchainAccountPacketData): _174.InterchainAccountPacketDataProtoMsg;
                };
                CosmosTx: {
                    typeUrl: string;
                    encode(message: _174.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.CosmosTx;
                    fromJSON(object: any): _174.CosmosTx;
                    toJSON(message: _174.CosmosTx): unknown;
                    fromPartial(object: Partial<_174.CosmosTx>): _174.CosmosTx;
                    fromAmino(object: _174.CosmosTxAmino): _174.CosmosTx;
                    toAmino(message: _174.CosmosTx): _174.CosmosTxAmino;
                    fromAminoMsg(object: _174.CosmosTxAminoMsg): _174.CosmosTx;
                    toAminoMsg(message: _174.CosmosTx): _174.CosmosTxAminoMsg;
                    fromProtoMsg(message: _174.CosmosTxProtoMsg): _174.CosmosTx;
                    toProto(message: _174.CosmosTx): Uint8Array;
                    toProtoMsg(message: _174.CosmosTx): _174.CosmosTxProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _173.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.Metadata;
                    fromJSON(object: any): _173.Metadata;
                    toJSON(message: _173.Metadata): unknown;
                    fromPartial(object: Partial<_173.Metadata>): _173.Metadata;
                    fromAmino(object: _173.MetadataAmino): _173.Metadata;
                    toAmino(message: _173.Metadata): _173.MetadataAmino;
                    fromAminoMsg(object: _173.MetadataAminoMsg): _173.Metadata;
                    toAminoMsg(message: _173.Metadata): _173.MetadataAminoMsg;
                    fromProtoMsg(message: _173.MetadataProtoMsg): _173.Metadata;
                    toProto(message: _173.Metadata): Uint8Array;
                    toProtoMsg(message: _173.Metadata): _173.MetadataProtoMsg;
                };
                InterchainAccount: {
                    typeUrl: string;
                    encode(message: _172.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.InterchainAccount;
                    fromJSON(object: any): _172.InterchainAccount;
                    toJSON(message: _172.InterchainAccount): unknown;
                    fromPartial(object: Partial<_172.InterchainAccount>): _172.InterchainAccount;
                    fromAmino(object: _172.InterchainAccountAmino): _172.InterchainAccount;
                    toAmino(message: _172.InterchainAccount): _172.InterchainAccountAmino;
                    fromAminoMsg(object: _172.InterchainAccountAminoMsg): _172.InterchainAccount;
                    toAminoMsg(message: _172.InterchainAccount): _172.InterchainAccountAminoMsg;
                    fromProtoMsg(message: _172.InterchainAccountProtoMsg): _172.InterchainAccount;
                    toProto(message: _172.InterchainAccount): Uint8Array;
                    toProtoMsg(message: _172.InterchainAccount): _172.InterchainAccountProtoMsg;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _335.MsgClientImpl;
                QueryClientImpl: typeof _329.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _177.QueryDenomTraceRequest): Promise<_177.QueryDenomTraceResponse>;
                    denomTraces(request?: _177.QueryDenomTracesRequest): Promise<_177.QueryDenomTracesResponse>;
                    params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                    denomHash(request: _177.QueryDenomHashRequest): Promise<_177.QueryDenomHashResponse>;
                    escrowAddress(request: _177.QueryEscrowAddressRequest): Promise<_177.QueryEscrowAddressResponse>;
                    totalEscrowForDenom(request: _177.QueryTotalEscrowForDenomRequest): Promise<_177.QueryTotalEscrowForDenomResponse>;
                };
                LCDQueryClient: typeof _322.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _179.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _179.MsgTransfer): {
                            typeUrl: string;
                            value: _179.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _179.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _179.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _179.MsgTransfer): {
                            typeUrl: string;
                            value: _179.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _179.MsgTransfer) => _179.MsgTransferAmino;
                        fromAmino: (object: _179.MsgTransferAmino) => _179.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    encode(message: _179.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgTransfer;
                    fromJSON(object: any): _179.MsgTransfer;
                    toJSON(message: _179.MsgTransfer): unknown;
                    fromPartial(object: Partial<_179.MsgTransfer>): _179.MsgTransfer;
                    fromAmino(object: _179.MsgTransferAmino): _179.MsgTransfer;
                    toAmino(message: _179.MsgTransfer): _179.MsgTransferAmino;
                    fromAminoMsg(object: _179.MsgTransferAminoMsg): _179.MsgTransfer;
                    toAminoMsg(message: _179.MsgTransfer): _179.MsgTransferAminoMsg;
                    fromProtoMsg(message: _179.MsgTransferProtoMsg): _179.MsgTransfer;
                    toProto(message: _179.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _179.MsgTransfer): _179.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    encode(message: _179.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MsgTransferResponse;
                    fromJSON(object: any): _179.MsgTransferResponse;
                    toJSON(message: _179.MsgTransferResponse): unknown;
                    fromPartial(object: Partial<_179.MsgTransferResponse>): _179.MsgTransferResponse;
                    fromAmino(object: _179.MsgTransferResponseAmino): _179.MsgTransferResponse;
                    toAmino(message: _179.MsgTransferResponse): _179.MsgTransferResponseAmino;
                    fromAminoMsg(object: _179.MsgTransferResponseAminoMsg): _179.MsgTransferResponse;
                    toAminoMsg(message: _179.MsgTransferResponse): _179.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _179.MsgTransferResponseProtoMsg): _179.MsgTransferResponse;
                    toProto(message: _179.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _179.MsgTransferResponse): _179.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    encode(message: _178.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.DenomTrace;
                    fromJSON(object: any): _178.DenomTrace;
                    toJSON(message: _178.DenomTrace): unknown;
                    fromPartial(object: Partial<_178.DenomTrace>): _178.DenomTrace;
                    fromAmino(object: _178.DenomTraceAmino): _178.DenomTrace;
                    toAmino(message: _178.DenomTrace): _178.DenomTraceAmino;
                    fromAminoMsg(object: _178.DenomTraceAminoMsg): _178.DenomTrace;
                    toAminoMsg(message: _178.DenomTrace): _178.DenomTraceAminoMsg;
                    fromProtoMsg(message: _178.DenomTraceProtoMsg): _178.DenomTrace;
                    toProto(message: _178.DenomTrace): Uint8Array;
                    toProtoMsg(message: _178.DenomTrace): _178.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _178.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Params;
                    fromJSON(object: any): _178.Params;
                    toJSON(message: _178.Params): unknown;
                    fromPartial(object: Partial<_178.Params>): _178.Params;
                    fromAmino(object: _178.ParamsAmino): _178.Params;
                    toAmino(message: _178.Params): _178.ParamsAmino;
                    fromAminoMsg(object: _178.ParamsAminoMsg): _178.Params;
                    toAminoMsg(message: _178.Params): _178.ParamsAminoMsg;
                    fromProtoMsg(message: _178.ParamsProtoMsg): _178.Params;
                    toProto(message: _178.Params): Uint8Array;
                    toProtoMsg(message: _178.Params): _178.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryDenomTraceRequest;
                    fromJSON(object: any): _177.QueryDenomTraceRequest;
                    toJSON(message: _177.QueryDenomTraceRequest): unknown;
                    fromPartial(object: Partial<_177.QueryDenomTraceRequest>): _177.QueryDenomTraceRequest;
                    fromAmino(object: _177.QueryDenomTraceRequestAmino): _177.QueryDenomTraceRequest;
                    toAmino(message: _177.QueryDenomTraceRequest): _177.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _177.QueryDenomTraceRequestAminoMsg): _177.QueryDenomTraceRequest;
                    toAminoMsg(message: _177.QueryDenomTraceRequest): _177.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryDenomTraceRequestProtoMsg): _177.QueryDenomTraceRequest;
                    toProto(message: _177.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryDenomTraceRequest): _177.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryDenomTraceResponse;
                    fromJSON(object: any): _177.QueryDenomTraceResponse;
                    toJSON(message: _177.QueryDenomTraceResponse): unknown;
                    fromPartial(object: Partial<_177.QueryDenomTraceResponse>): _177.QueryDenomTraceResponse;
                    fromAmino(object: _177.QueryDenomTraceResponseAmino): _177.QueryDenomTraceResponse;
                    toAmino(message: _177.QueryDenomTraceResponse): _177.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _177.QueryDenomTraceResponseAminoMsg): _177.QueryDenomTraceResponse;
                    toAminoMsg(message: _177.QueryDenomTraceResponse): _177.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryDenomTraceResponseProtoMsg): _177.QueryDenomTraceResponse;
                    toProto(message: _177.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryDenomTraceResponse): _177.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryDenomTracesRequest;
                    fromJSON(object: any): _177.QueryDenomTracesRequest;
                    toJSON(message: _177.QueryDenomTracesRequest): unknown;
                    fromPartial(object: Partial<_177.QueryDenomTracesRequest>): _177.QueryDenomTracesRequest;
                    fromAmino(object: _177.QueryDenomTracesRequestAmino): _177.QueryDenomTracesRequest;
                    toAmino(message: _177.QueryDenomTracesRequest): _177.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _177.QueryDenomTracesRequestAminoMsg): _177.QueryDenomTracesRequest;
                    toAminoMsg(message: _177.QueryDenomTracesRequest): _177.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryDenomTracesRequestProtoMsg): _177.QueryDenomTracesRequest;
                    toProto(message: _177.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryDenomTracesRequest): _177.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryDenomTracesResponse;
                    fromJSON(object: any): _177.QueryDenomTracesResponse;
                    toJSON(message: _177.QueryDenomTracesResponse): unknown;
                    fromPartial(object: Partial<_177.QueryDenomTracesResponse>): _177.QueryDenomTracesResponse;
                    fromAmino(object: _177.QueryDenomTracesResponseAmino): _177.QueryDenomTracesResponse;
                    toAmino(message: _177.QueryDenomTracesResponse): _177.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _177.QueryDenomTracesResponseAminoMsg): _177.QueryDenomTracesResponse;
                    toAminoMsg(message: _177.QueryDenomTracesResponse): _177.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryDenomTracesResponseProtoMsg): _177.QueryDenomTracesResponse;
                    toProto(message: _177.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryDenomTracesResponse): _177.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    encode(_: _177.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryParamsRequest;
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
                    encode(message: _177.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryParamsResponse;
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
                QueryDenomHashRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryDenomHashRequest;
                    fromJSON(object: any): _177.QueryDenomHashRequest;
                    toJSON(message: _177.QueryDenomHashRequest): unknown;
                    fromPartial(object: Partial<_177.QueryDenomHashRequest>): _177.QueryDenomHashRequest;
                    fromAmino(object: _177.QueryDenomHashRequestAmino): _177.QueryDenomHashRequest;
                    toAmino(message: _177.QueryDenomHashRequest): _177.QueryDenomHashRequestAmino;
                    fromAminoMsg(object: _177.QueryDenomHashRequestAminoMsg): _177.QueryDenomHashRequest;
                    toAminoMsg(message: _177.QueryDenomHashRequest): _177.QueryDenomHashRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryDenomHashRequestProtoMsg): _177.QueryDenomHashRequest;
                    toProto(message: _177.QueryDenomHashRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryDenomHashRequest): _177.QueryDenomHashRequestProtoMsg;
                };
                QueryDenomHashResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryDenomHashResponse;
                    fromJSON(object: any): _177.QueryDenomHashResponse;
                    toJSON(message: _177.QueryDenomHashResponse): unknown;
                    fromPartial(object: Partial<_177.QueryDenomHashResponse>): _177.QueryDenomHashResponse;
                    fromAmino(object: _177.QueryDenomHashResponseAmino): _177.QueryDenomHashResponse;
                    toAmino(message: _177.QueryDenomHashResponse): _177.QueryDenomHashResponseAmino;
                    fromAminoMsg(object: _177.QueryDenomHashResponseAminoMsg): _177.QueryDenomHashResponse;
                    toAminoMsg(message: _177.QueryDenomHashResponse): _177.QueryDenomHashResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryDenomHashResponseProtoMsg): _177.QueryDenomHashResponse;
                    toProto(message: _177.QueryDenomHashResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryDenomHashResponse): _177.QueryDenomHashResponseProtoMsg;
                };
                QueryEscrowAddressRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryEscrowAddressRequest;
                    fromJSON(object: any): _177.QueryEscrowAddressRequest;
                    toJSON(message: _177.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: Partial<_177.QueryEscrowAddressRequest>): _177.QueryEscrowAddressRequest;
                    fromAmino(object: _177.QueryEscrowAddressRequestAmino): _177.QueryEscrowAddressRequest;
                    toAmino(message: _177.QueryEscrowAddressRequest): _177.QueryEscrowAddressRequestAmino;
                    fromAminoMsg(object: _177.QueryEscrowAddressRequestAminoMsg): _177.QueryEscrowAddressRequest;
                    toAminoMsg(message: _177.QueryEscrowAddressRequest): _177.QueryEscrowAddressRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryEscrowAddressRequestProtoMsg): _177.QueryEscrowAddressRequest;
                    toProto(message: _177.QueryEscrowAddressRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryEscrowAddressRequest): _177.QueryEscrowAddressRequestProtoMsg;
                };
                QueryEscrowAddressResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryEscrowAddressResponse;
                    fromJSON(object: any): _177.QueryEscrowAddressResponse;
                    toJSON(message: _177.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: Partial<_177.QueryEscrowAddressResponse>): _177.QueryEscrowAddressResponse;
                    fromAmino(object: _177.QueryEscrowAddressResponseAmino): _177.QueryEscrowAddressResponse;
                    toAmino(message: _177.QueryEscrowAddressResponse): _177.QueryEscrowAddressResponseAmino;
                    fromAminoMsg(object: _177.QueryEscrowAddressResponseAminoMsg): _177.QueryEscrowAddressResponse;
                    toAminoMsg(message: _177.QueryEscrowAddressResponse): _177.QueryEscrowAddressResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryEscrowAddressResponseProtoMsg): _177.QueryEscrowAddressResponse;
                    toProto(message: _177.QueryEscrowAddressResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryEscrowAddressResponse): _177.QueryEscrowAddressResponseProtoMsg;
                };
                QueryTotalEscrowForDenomRequest: {
                    typeUrl: string;
                    encode(message: _177.QueryTotalEscrowForDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryTotalEscrowForDenomRequest;
                    fromJSON(object: any): _177.QueryTotalEscrowForDenomRequest;
                    toJSON(message: _177.QueryTotalEscrowForDenomRequest): unknown;
                    fromPartial(object: Partial<_177.QueryTotalEscrowForDenomRequest>): _177.QueryTotalEscrowForDenomRequest;
                    fromAmino(object: _177.QueryTotalEscrowForDenomRequestAmino): _177.QueryTotalEscrowForDenomRequest;
                    toAmino(message: _177.QueryTotalEscrowForDenomRequest): _177.QueryTotalEscrowForDenomRequestAmino;
                    fromAminoMsg(object: _177.QueryTotalEscrowForDenomRequestAminoMsg): _177.QueryTotalEscrowForDenomRequest;
                    toAminoMsg(message: _177.QueryTotalEscrowForDenomRequest): _177.QueryTotalEscrowForDenomRequestAminoMsg;
                    fromProtoMsg(message: _177.QueryTotalEscrowForDenomRequestProtoMsg): _177.QueryTotalEscrowForDenomRequest;
                    toProto(message: _177.QueryTotalEscrowForDenomRequest): Uint8Array;
                    toProtoMsg(message: _177.QueryTotalEscrowForDenomRequest): _177.QueryTotalEscrowForDenomRequestProtoMsg;
                };
                QueryTotalEscrowForDenomResponse: {
                    typeUrl: string;
                    encode(message: _177.QueryTotalEscrowForDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.QueryTotalEscrowForDenomResponse;
                    fromJSON(object: any): _177.QueryTotalEscrowForDenomResponse;
                    toJSON(message: _177.QueryTotalEscrowForDenomResponse): unknown;
                    fromPartial(object: Partial<_177.QueryTotalEscrowForDenomResponse>): _177.QueryTotalEscrowForDenomResponse;
                    fromAmino(object: _177.QueryTotalEscrowForDenomResponseAmino): _177.QueryTotalEscrowForDenomResponse;
                    toAmino(message: _177.QueryTotalEscrowForDenomResponse): _177.QueryTotalEscrowForDenomResponseAmino;
                    fromAminoMsg(object: _177.QueryTotalEscrowForDenomResponseAminoMsg): _177.QueryTotalEscrowForDenomResponse;
                    toAminoMsg(message: _177.QueryTotalEscrowForDenomResponse): _177.QueryTotalEscrowForDenomResponseAminoMsg;
                    fromProtoMsg(message: _177.QueryTotalEscrowForDenomResponseProtoMsg): _177.QueryTotalEscrowForDenomResponse;
                    toProto(message: _177.QueryTotalEscrowForDenomResponse): Uint8Array;
                    toProtoMsg(message: _177.QueryTotalEscrowForDenomResponse): _177.QueryTotalEscrowForDenomResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _176.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.GenesisState;
                    fromJSON(object: any): _176.GenesisState;
                    toJSON(message: _176.GenesisState): unknown;
                    fromPartial(object: Partial<_176.GenesisState>): _176.GenesisState;
                    fromAmino(object: _176.GenesisStateAmino): _176.GenesisState;
                    toAmino(message: _176.GenesisState): _176.GenesisStateAmino;
                    fromAminoMsg(object: _176.GenesisStateAminoMsg): _176.GenesisState;
                    toAminoMsg(message: _176.GenesisState): _176.GenesisStateAminoMsg;
                    fromProtoMsg(message: _176.GenesisStateProtoMsg): _176.GenesisState;
                    toProto(message: _176.GenesisState): Uint8Array;
                    toProtoMsg(message: _176.GenesisState): _176.GenesisStateProtoMsg;
                };
                Allocation: {
                    typeUrl: string;
                    encode(message: _175.Allocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.Allocation;
                    fromJSON(object: any): _175.Allocation;
                    toJSON(message: _175.Allocation): unknown;
                    fromPartial(object: Partial<_175.Allocation>): _175.Allocation;
                    fromAmino(object: _175.AllocationAmino): _175.Allocation;
                    toAmino(message: _175.Allocation): _175.AllocationAmino;
                    fromAminoMsg(object: _175.AllocationAminoMsg): _175.Allocation;
                    toAminoMsg(message: _175.Allocation): _175.AllocationAminoMsg;
                    fromProtoMsg(message: _175.AllocationProtoMsg): _175.Allocation;
                    toProto(message: _175.Allocation): Uint8Array;
                    toProtoMsg(message: _175.Allocation): _175.AllocationProtoMsg;
                };
                TransferAuthorization: {
                    typeUrl: string;
                    encode(message: _175.TransferAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.TransferAuthorization;
                    fromJSON(object: any): _175.TransferAuthorization;
                    toJSON(message: _175.TransferAuthorization): unknown;
                    fromPartial(object: Partial<_175.TransferAuthorization>): _175.TransferAuthorization;
                    fromAmino(object: _175.TransferAuthorizationAmino): _175.TransferAuthorization;
                    toAmino(message: _175.TransferAuthorization): _175.TransferAuthorizationAmino;
                    fromAminoMsg(object: _175.TransferAuthorizationAminoMsg): _175.TransferAuthorization;
                    toAminoMsg(message: _175.TransferAuthorization): _175.TransferAuthorizationAminoMsg;
                    fromProtoMsg(message: _175.TransferAuthorizationProtoMsg): _175.TransferAuthorization;
                    toProto(message: _175.TransferAuthorization): Uint8Array;
                    toProtoMsg(message: _175.TransferAuthorization): _175.TransferAuthorizationProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    encode(message: _180.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.FungibleTokenPacketData;
                    fromJSON(object: any): _180.FungibleTokenPacketData;
                    toJSON(message: _180.FungibleTokenPacketData): unknown;
                    fromPartial(object: Partial<_180.FungibleTokenPacketData>): _180.FungibleTokenPacketData;
                    fromAmino(object: _180.FungibleTokenPacketDataAmino): _180.FungibleTokenPacketData;
                    toAmino(message: _180.FungibleTokenPacketData): _180.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _180.FungibleTokenPacketDataAminoMsg): _180.FungibleTokenPacketData;
                    toAminoMsg(message: _180.FungibleTokenPacketData): _180.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _180.FungibleTokenPacketDataProtoMsg): _180.FungibleTokenPacketData;
                    toProto(message: _180.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _180.FungibleTokenPacketData): _180.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _336.MsgClientImpl;
                QueryClientImpl: typeof _330.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _183.QueryChannelRequest): Promise<_183.QueryChannelResponse>;
                    channels(request?: _183.QueryChannelsRequest): Promise<_183.QueryChannelsResponse>;
                    connectionChannels(request: _183.QueryConnectionChannelsRequest): Promise<_183.QueryConnectionChannelsResponse>;
                    channelClientState(request: _183.QueryChannelClientStateRequest): Promise<_183.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _183.QueryChannelConsensusStateRequest): Promise<_183.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _183.QueryPacketCommitmentRequest): Promise<_183.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _183.QueryPacketCommitmentsRequest): Promise<_183.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _183.QueryPacketReceiptRequest): Promise<_183.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _183.QueryPacketAcknowledgementRequest): Promise<_183.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _183.QueryPacketAcknowledgementsRequest): Promise<_183.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _183.QueryUnreceivedPacketsRequest): Promise<_183.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _183.QueryUnreceivedAcksRequest): Promise<_183.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _183.QueryNextSequenceReceiveRequest): Promise<_183.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _323.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _184.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _184.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _184.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _184.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _184.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _184.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _184.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _184.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _184.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _184.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _184.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _184.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _184.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _184.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _184.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _184.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _184.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _184.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _184.MsgRecvPacket): {
                            typeUrl: string;
                            value: _184.MsgRecvPacket;
                        };
                        timeout(value: _184.MsgTimeout): {
                            typeUrl: string;
                            value: _184.MsgTimeout;
                        };
                        timeoutOnClose(value: _184.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _184.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _184.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _184.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _184.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _184.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _184.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _184.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _184.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _184.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _184.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _184.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _184.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _184.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _184.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _184.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _184.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _184.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _184.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _184.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _184.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _184.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _184.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _184.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _184.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _184.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _184.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _184.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _184.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _184.MsgRecvPacket): {
                            typeUrl: string;
                            value: _184.MsgRecvPacket;
                        };
                        timeout(value: _184.MsgTimeout): {
                            typeUrl: string;
                            value: _184.MsgTimeout;
                        };
                        timeoutOnClose(value: _184.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _184.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _184.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _184.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _184.MsgChannelOpenInit) => _184.MsgChannelOpenInitAmino;
                        fromAmino: (object: _184.MsgChannelOpenInitAmino) => _184.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _184.MsgChannelOpenTry) => _184.MsgChannelOpenTryAmino;
                        fromAmino: (object: _184.MsgChannelOpenTryAmino) => _184.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _184.MsgChannelOpenAck) => _184.MsgChannelOpenAckAmino;
                        fromAmino: (object: _184.MsgChannelOpenAckAmino) => _184.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _184.MsgChannelOpenConfirm) => _184.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _184.MsgChannelOpenConfirmAmino) => _184.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _184.MsgChannelCloseInit) => _184.MsgChannelCloseInitAmino;
                        fromAmino: (object: _184.MsgChannelCloseInitAmino) => _184.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _184.MsgChannelCloseConfirm) => _184.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _184.MsgChannelCloseConfirmAmino) => _184.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _184.MsgRecvPacket) => _184.MsgRecvPacketAmino;
                        fromAmino: (object: _184.MsgRecvPacketAmino) => _184.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _184.MsgTimeout) => _184.MsgTimeoutAmino;
                        fromAmino: (object: _184.MsgTimeoutAmino) => _184.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _184.MsgTimeoutOnClose) => _184.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _184.MsgTimeoutOnCloseAmino) => _184.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _184.MsgAcknowledgement) => _184.MsgAcknowledgementAmino;
                        fromAmino: (object: _184.MsgAcknowledgementAmino) => _184.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _184.ResponseResultType;
                responseResultTypeToJSON(object: _184.ResponseResultType): string;
                ResponseResultType: typeof _184.ResponseResultType;
                ResponseResultTypeSDKType: typeof _184.ResponseResultType;
                ResponseResultTypeAmino: typeof _184.ResponseResultType;
                MsgChannelOpenInit: {
                    typeUrl: string;
                    encode(message: _184.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelOpenInit;
                    fromJSON(object: any): _184.MsgChannelOpenInit;
                    toJSON(message: _184.MsgChannelOpenInit): unknown;
                    fromPartial(object: Partial<_184.MsgChannelOpenInit>): _184.MsgChannelOpenInit;
                    fromAmino(object: _184.MsgChannelOpenInitAmino): _184.MsgChannelOpenInit;
                    toAmino(message: _184.MsgChannelOpenInit): _184.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _184.MsgChannelOpenInitAminoMsg): _184.MsgChannelOpenInit;
                    toAminoMsg(message: _184.MsgChannelOpenInit): _184.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelOpenInitProtoMsg): _184.MsgChannelOpenInit;
                    toProto(message: _184.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelOpenInit): _184.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    encode(message: _184.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _184.MsgChannelOpenInitResponse;
                    toJSON(message: _184.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: Partial<_184.MsgChannelOpenInitResponse>): _184.MsgChannelOpenInitResponse;
                    fromAmino(object: _184.MsgChannelOpenInitResponseAmino): _184.MsgChannelOpenInitResponse;
                    toAmino(message: _184.MsgChannelOpenInitResponse): _184.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _184.MsgChannelOpenInitResponseAminoMsg): _184.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _184.MsgChannelOpenInitResponse): _184.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelOpenInitResponseProtoMsg): _184.MsgChannelOpenInitResponse;
                    toProto(message: _184.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelOpenInitResponse): _184.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    encode(message: _184.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelOpenTry;
                    fromJSON(object: any): _184.MsgChannelOpenTry;
                    toJSON(message: _184.MsgChannelOpenTry): unknown;
                    fromPartial(object: Partial<_184.MsgChannelOpenTry>): _184.MsgChannelOpenTry;
                    fromAmino(object: _184.MsgChannelOpenTryAmino): _184.MsgChannelOpenTry;
                    toAmino(message: _184.MsgChannelOpenTry): _184.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _184.MsgChannelOpenTryAminoMsg): _184.MsgChannelOpenTry;
                    toAminoMsg(message: _184.MsgChannelOpenTry): _184.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelOpenTryProtoMsg): _184.MsgChannelOpenTry;
                    toProto(message: _184.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelOpenTry): _184.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    encode(message: _184.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _184.MsgChannelOpenTryResponse;
                    toJSON(message: _184.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: Partial<_184.MsgChannelOpenTryResponse>): _184.MsgChannelOpenTryResponse;
                    fromAmino(object: _184.MsgChannelOpenTryResponseAmino): _184.MsgChannelOpenTryResponse;
                    toAmino(message: _184.MsgChannelOpenTryResponse): _184.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _184.MsgChannelOpenTryResponseAminoMsg): _184.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _184.MsgChannelOpenTryResponse): _184.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelOpenTryResponseProtoMsg): _184.MsgChannelOpenTryResponse;
                    toProto(message: _184.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelOpenTryResponse): _184.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    encode(message: _184.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelOpenAck;
                    fromJSON(object: any): _184.MsgChannelOpenAck;
                    toJSON(message: _184.MsgChannelOpenAck): unknown;
                    fromPartial(object: Partial<_184.MsgChannelOpenAck>): _184.MsgChannelOpenAck;
                    fromAmino(object: _184.MsgChannelOpenAckAmino): _184.MsgChannelOpenAck;
                    toAmino(message: _184.MsgChannelOpenAck): _184.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _184.MsgChannelOpenAckAminoMsg): _184.MsgChannelOpenAck;
                    toAminoMsg(message: _184.MsgChannelOpenAck): _184.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelOpenAckProtoMsg): _184.MsgChannelOpenAck;
                    toProto(message: _184.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelOpenAck): _184.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _184.MsgChannelOpenAckResponse;
                    toJSON(_: _184.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: Partial<_184.MsgChannelOpenAckResponse>): _184.MsgChannelOpenAckResponse;
                    fromAmino(_: _184.MsgChannelOpenAckResponseAmino): _184.MsgChannelOpenAckResponse;
                    toAmino(_: _184.MsgChannelOpenAckResponse): _184.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _184.MsgChannelOpenAckResponseAminoMsg): _184.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _184.MsgChannelOpenAckResponse): _184.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelOpenAckResponseProtoMsg): _184.MsgChannelOpenAckResponse;
                    toProto(message: _184.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelOpenAckResponse): _184.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    encode(message: _184.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelOpenConfirm;
                    fromJSON(object: any): _184.MsgChannelOpenConfirm;
                    toJSON(message: _184.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: Partial<_184.MsgChannelOpenConfirm>): _184.MsgChannelOpenConfirm;
                    fromAmino(object: _184.MsgChannelOpenConfirmAmino): _184.MsgChannelOpenConfirm;
                    toAmino(message: _184.MsgChannelOpenConfirm): _184.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _184.MsgChannelOpenConfirmAminoMsg): _184.MsgChannelOpenConfirm;
                    toAminoMsg(message: _184.MsgChannelOpenConfirm): _184.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelOpenConfirmProtoMsg): _184.MsgChannelOpenConfirm;
                    toProto(message: _184.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelOpenConfirm): _184.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _184.MsgChannelOpenConfirmResponse;
                    toJSON(_: _184.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_184.MsgChannelOpenConfirmResponse>): _184.MsgChannelOpenConfirmResponse;
                    fromAmino(_: _184.MsgChannelOpenConfirmResponseAmino): _184.MsgChannelOpenConfirmResponse;
                    toAmino(_: _184.MsgChannelOpenConfirmResponse): _184.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _184.MsgChannelOpenConfirmResponseAminoMsg): _184.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _184.MsgChannelOpenConfirmResponse): _184.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelOpenConfirmResponseProtoMsg): _184.MsgChannelOpenConfirmResponse;
                    toProto(message: _184.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelOpenConfirmResponse): _184.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    encode(message: _184.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelCloseInit;
                    fromJSON(object: any): _184.MsgChannelCloseInit;
                    toJSON(message: _184.MsgChannelCloseInit): unknown;
                    fromPartial(object: Partial<_184.MsgChannelCloseInit>): _184.MsgChannelCloseInit;
                    fromAmino(object: _184.MsgChannelCloseInitAmino): _184.MsgChannelCloseInit;
                    toAmino(message: _184.MsgChannelCloseInit): _184.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _184.MsgChannelCloseInitAminoMsg): _184.MsgChannelCloseInit;
                    toAminoMsg(message: _184.MsgChannelCloseInit): _184.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelCloseInitProtoMsg): _184.MsgChannelCloseInit;
                    toProto(message: _184.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelCloseInit): _184.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _184.MsgChannelCloseInitResponse;
                    toJSON(_: _184.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: Partial<_184.MsgChannelCloseInitResponse>): _184.MsgChannelCloseInitResponse;
                    fromAmino(_: _184.MsgChannelCloseInitResponseAmino): _184.MsgChannelCloseInitResponse;
                    toAmino(_: _184.MsgChannelCloseInitResponse): _184.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _184.MsgChannelCloseInitResponseAminoMsg): _184.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _184.MsgChannelCloseInitResponse): _184.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelCloseInitResponseProtoMsg): _184.MsgChannelCloseInitResponse;
                    toProto(message: _184.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelCloseInitResponse): _184.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    encode(message: _184.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelCloseConfirm;
                    fromJSON(object: any): _184.MsgChannelCloseConfirm;
                    toJSON(message: _184.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: Partial<_184.MsgChannelCloseConfirm>): _184.MsgChannelCloseConfirm;
                    fromAmino(object: _184.MsgChannelCloseConfirmAmino): _184.MsgChannelCloseConfirm;
                    toAmino(message: _184.MsgChannelCloseConfirm): _184.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _184.MsgChannelCloseConfirmAminoMsg): _184.MsgChannelCloseConfirm;
                    toAminoMsg(message: _184.MsgChannelCloseConfirm): _184.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelCloseConfirmProtoMsg): _184.MsgChannelCloseConfirm;
                    toProto(message: _184.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelCloseConfirm): _184.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    encode(_: _184.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _184.MsgChannelCloseConfirmResponse;
                    toJSON(_: _184.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: Partial<_184.MsgChannelCloseConfirmResponse>): _184.MsgChannelCloseConfirmResponse;
                    fromAmino(_: _184.MsgChannelCloseConfirmResponseAmino): _184.MsgChannelCloseConfirmResponse;
                    toAmino(_: _184.MsgChannelCloseConfirmResponse): _184.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _184.MsgChannelCloseConfirmResponseAminoMsg): _184.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _184.MsgChannelCloseConfirmResponse): _184.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgChannelCloseConfirmResponseProtoMsg): _184.MsgChannelCloseConfirmResponse;
                    toProto(message: _184.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgChannelCloseConfirmResponse): _184.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    encode(message: _184.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgRecvPacket;
                    fromJSON(object: any): _184.MsgRecvPacket;
                    toJSON(message: _184.MsgRecvPacket): unknown;
                    fromPartial(object: Partial<_184.MsgRecvPacket>): _184.MsgRecvPacket;
                    fromAmino(object: _184.MsgRecvPacketAmino): _184.MsgRecvPacket;
                    toAmino(message: _184.MsgRecvPacket): _184.MsgRecvPacketAmino;
                    fromAminoMsg(object: _184.MsgRecvPacketAminoMsg): _184.MsgRecvPacket;
                    toAminoMsg(message: _184.MsgRecvPacket): _184.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _184.MsgRecvPacketProtoMsg): _184.MsgRecvPacket;
                    toProto(message: _184.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _184.MsgRecvPacket): _184.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    encode(message: _184.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgRecvPacketResponse;
                    fromJSON(object: any): _184.MsgRecvPacketResponse;
                    toJSON(message: _184.MsgRecvPacketResponse): unknown;
                    fromPartial(object: Partial<_184.MsgRecvPacketResponse>): _184.MsgRecvPacketResponse;
                    fromAmino(object: _184.MsgRecvPacketResponseAmino): _184.MsgRecvPacketResponse;
                    toAmino(message: _184.MsgRecvPacketResponse): _184.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _184.MsgRecvPacketResponseAminoMsg): _184.MsgRecvPacketResponse;
                    toAminoMsg(message: _184.MsgRecvPacketResponse): _184.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgRecvPacketResponseProtoMsg): _184.MsgRecvPacketResponse;
                    toProto(message: _184.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgRecvPacketResponse): _184.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    encode(message: _184.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgTimeout;
                    fromJSON(object: any): _184.MsgTimeout;
                    toJSON(message: _184.MsgTimeout): unknown;
                    fromPartial(object: Partial<_184.MsgTimeout>): _184.MsgTimeout;
                    fromAmino(object: _184.MsgTimeoutAmino): _184.MsgTimeout;
                    toAmino(message: _184.MsgTimeout): _184.MsgTimeoutAmino;
                    fromAminoMsg(object: _184.MsgTimeoutAminoMsg): _184.MsgTimeout;
                    toAminoMsg(message: _184.MsgTimeout): _184.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _184.MsgTimeoutProtoMsg): _184.MsgTimeout;
                    toProto(message: _184.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _184.MsgTimeout): _184.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    encode(message: _184.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgTimeoutResponse;
                    fromJSON(object: any): _184.MsgTimeoutResponse;
                    toJSON(message: _184.MsgTimeoutResponse): unknown;
                    fromPartial(object: Partial<_184.MsgTimeoutResponse>): _184.MsgTimeoutResponse;
                    fromAmino(object: _184.MsgTimeoutResponseAmino): _184.MsgTimeoutResponse;
                    toAmino(message: _184.MsgTimeoutResponse): _184.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _184.MsgTimeoutResponseAminoMsg): _184.MsgTimeoutResponse;
                    toAminoMsg(message: _184.MsgTimeoutResponse): _184.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgTimeoutResponseProtoMsg): _184.MsgTimeoutResponse;
                    toProto(message: _184.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgTimeoutResponse): _184.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    encode(message: _184.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgTimeoutOnClose;
                    fromJSON(object: any): _184.MsgTimeoutOnClose;
                    toJSON(message: _184.MsgTimeoutOnClose): unknown;
                    fromPartial(object: Partial<_184.MsgTimeoutOnClose>): _184.MsgTimeoutOnClose;
                    fromAmino(object: _184.MsgTimeoutOnCloseAmino): _184.MsgTimeoutOnClose;
                    toAmino(message: _184.MsgTimeoutOnClose): _184.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _184.MsgTimeoutOnCloseAminoMsg): _184.MsgTimeoutOnClose;
                    toAminoMsg(message: _184.MsgTimeoutOnClose): _184.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _184.MsgTimeoutOnCloseProtoMsg): _184.MsgTimeoutOnClose;
                    toProto(message: _184.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _184.MsgTimeoutOnClose): _184.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    encode(message: _184.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _184.MsgTimeoutOnCloseResponse;
                    toJSON(message: _184.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: Partial<_184.MsgTimeoutOnCloseResponse>): _184.MsgTimeoutOnCloseResponse;
                    fromAmino(object: _184.MsgTimeoutOnCloseResponseAmino): _184.MsgTimeoutOnCloseResponse;
                    toAmino(message: _184.MsgTimeoutOnCloseResponse): _184.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _184.MsgTimeoutOnCloseResponseAminoMsg): _184.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _184.MsgTimeoutOnCloseResponse): _184.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgTimeoutOnCloseResponseProtoMsg): _184.MsgTimeoutOnCloseResponse;
                    toProto(message: _184.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgTimeoutOnCloseResponse): _184.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    encode(message: _184.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgAcknowledgement;
                    fromJSON(object: any): _184.MsgAcknowledgement;
                    toJSON(message: _184.MsgAcknowledgement): unknown;
                    fromPartial(object: Partial<_184.MsgAcknowledgement>): _184.MsgAcknowledgement;
                    fromAmino(object: _184.MsgAcknowledgementAmino): _184.MsgAcknowledgement;
                    toAmino(message: _184.MsgAcknowledgement): _184.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _184.MsgAcknowledgementAminoMsg): _184.MsgAcknowledgement;
                    toAminoMsg(message: _184.MsgAcknowledgement): _184.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _184.MsgAcknowledgementProtoMsg): _184.MsgAcknowledgement;
                    toProto(message: _184.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _184.MsgAcknowledgement): _184.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _184.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.MsgAcknowledgementResponse;
                    fromJSON(object: any): _184.MsgAcknowledgementResponse;
                    toJSON(message: _184.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_184.MsgAcknowledgementResponse>): _184.MsgAcknowledgementResponse;
                    fromAmino(object: _184.MsgAcknowledgementResponseAmino): _184.MsgAcknowledgementResponse;
                    toAmino(message: _184.MsgAcknowledgementResponse): _184.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _184.MsgAcknowledgementResponseAminoMsg): _184.MsgAcknowledgementResponse;
                    toAminoMsg(message: _184.MsgAcknowledgementResponse): _184.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _184.MsgAcknowledgementResponseProtoMsg): _184.MsgAcknowledgementResponse;
                    toProto(message: _184.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _184.MsgAcknowledgementResponse): _184.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryChannelRequest;
                    fromJSON(object: any): _183.QueryChannelRequest;
                    toJSON(message: _183.QueryChannelRequest): unknown;
                    fromPartial(object: Partial<_183.QueryChannelRequest>): _183.QueryChannelRequest;
                    fromAmino(object: _183.QueryChannelRequestAmino): _183.QueryChannelRequest;
                    toAmino(message: _183.QueryChannelRequest): _183.QueryChannelRequestAmino;
                    fromAminoMsg(object: _183.QueryChannelRequestAminoMsg): _183.QueryChannelRequest;
                    toAminoMsg(message: _183.QueryChannelRequest): _183.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryChannelRequestProtoMsg): _183.QueryChannelRequest;
                    toProto(message: _183.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryChannelRequest): _183.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryChannelResponse;
                    fromJSON(object: any): _183.QueryChannelResponse;
                    toJSON(message: _183.QueryChannelResponse): unknown;
                    fromPartial(object: Partial<_183.QueryChannelResponse>): _183.QueryChannelResponse;
                    fromAmino(object: _183.QueryChannelResponseAmino): _183.QueryChannelResponse;
                    toAmino(message: _183.QueryChannelResponse): _183.QueryChannelResponseAmino;
                    fromAminoMsg(object: _183.QueryChannelResponseAminoMsg): _183.QueryChannelResponse;
                    toAminoMsg(message: _183.QueryChannelResponse): _183.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryChannelResponseProtoMsg): _183.QueryChannelResponse;
                    toProto(message: _183.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryChannelResponse): _183.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryChannelsRequest;
                    fromJSON(object: any): _183.QueryChannelsRequest;
                    toJSON(message: _183.QueryChannelsRequest): unknown;
                    fromPartial(object: Partial<_183.QueryChannelsRequest>): _183.QueryChannelsRequest;
                    fromAmino(object: _183.QueryChannelsRequestAmino): _183.QueryChannelsRequest;
                    toAmino(message: _183.QueryChannelsRequest): _183.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _183.QueryChannelsRequestAminoMsg): _183.QueryChannelsRequest;
                    toAminoMsg(message: _183.QueryChannelsRequest): _183.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryChannelsRequestProtoMsg): _183.QueryChannelsRequest;
                    toProto(message: _183.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryChannelsRequest): _183.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryChannelsResponse;
                    fromJSON(object: any): _183.QueryChannelsResponse;
                    toJSON(message: _183.QueryChannelsResponse): unknown;
                    fromPartial(object: Partial<_183.QueryChannelsResponse>): _183.QueryChannelsResponse;
                    fromAmino(object: _183.QueryChannelsResponseAmino): _183.QueryChannelsResponse;
                    toAmino(message: _183.QueryChannelsResponse): _183.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _183.QueryChannelsResponseAminoMsg): _183.QueryChannelsResponse;
                    toAminoMsg(message: _183.QueryChannelsResponse): _183.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryChannelsResponseProtoMsg): _183.QueryChannelsResponse;
                    toProto(message: _183.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryChannelsResponse): _183.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _183.QueryConnectionChannelsRequest;
                    toJSON(message: _183.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: Partial<_183.QueryConnectionChannelsRequest>): _183.QueryConnectionChannelsRequest;
                    fromAmino(object: _183.QueryConnectionChannelsRequestAmino): _183.QueryConnectionChannelsRequest;
                    toAmino(message: _183.QueryConnectionChannelsRequest): _183.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _183.QueryConnectionChannelsRequestAminoMsg): _183.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _183.QueryConnectionChannelsRequest): _183.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryConnectionChannelsRequestProtoMsg): _183.QueryConnectionChannelsRequest;
                    toProto(message: _183.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryConnectionChannelsRequest): _183.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _183.QueryConnectionChannelsResponse;
                    toJSON(message: _183.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: Partial<_183.QueryConnectionChannelsResponse>): _183.QueryConnectionChannelsResponse;
                    fromAmino(object: _183.QueryConnectionChannelsResponseAmino): _183.QueryConnectionChannelsResponse;
                    toAmino(message: _183.QueryConnectionChannelsResponse): _183.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _183.QueryConnectionChannelsResponseAminoMsg): _183.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _183.QueryConnectionChannelsResponse): _183.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryConnectionChannelsResponseProtoMsg): _183.QueryConnectionChannelsResponse;
                    toProto(message: _183.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryConnectionChannelsResponse): _183.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryChannelClientStateRequest;
                    fromJSON(object: any): _183.QueryChannelClientStateRequest;
                    toJSON(message: _183.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: Partial<_183.QueryChannelClientStateRequest>): _183.QueryChannelClientStateRequest;
                    fromAmino(object: _183.QueryChannelClientStateRequestAmino): _183.QueryChannelClientStateRequest;
                    toAmino(message: _183.QueryChannelClientStateRequest): _183.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _183.QueryChannelClientStateRequestAminoMsg): _183.QueryChannelClientStateRequest;
                    toAminoMsg(message: _183.QueryChannelClientStateRequest): _183.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryChannelClientStateRequestProtoMsg): _183.QueryChannelClientStateRequest;
                    toProto(message: _183.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryChannelClientStateRequest): _183.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryChannelClientStateResponse;
                    fromJSON(object: any): _183.QueryChannelClientStateResponse;
                    toJSON(message: _183.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: Partial<_183.QueryChannelClientStateResponse>): _183.QueryChannelClientStateResponse;
                    fromAmino(object: _183.QueryChannelClientStateResponseAmino): _183.QueryChannelClientStateResponse;
                    toAmino(message: _183.QueryChannelClientStateResponse): _183.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _183.QueryChannelClientStateResponseAminoMsg): _183.QueryChannelClientStateResponse;
                    toAminoMsg(message: _183.QueryChannelClientStateResponse): _183.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryChannelClientStateResponseProtoMsg): _183.QueryChannelClientStateResponse;
                    toProto(message: _183.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryChannelClientStateResponse): _183.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _183.QueryChannelConsensusStateRequest;
                    toJSON(message: _183.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_183.QueryChannelConsensusStateRequest>): _183.QueryChannelConsensusStateRequest;
                    fromAmino(object: _183.QueryChannelConsensusStateRequestAmino): _183.QueryChannelConsensusStateRequest;
                    toAmino(message: _183.QueryChannelConsensusStateRequest): _183.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _183.QueryChannelConsensusStateRequestAminoMsg): _183.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _183.QueryChannelConsensusStateRequest): _183.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryChannelConsensusStateRequestProtoMsg): _183.QueryChannelConsensusStateRequest;
                    toProto(message: _183.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryChannelConsensusStateRequest): _183.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _183.QueryChannelConsensusStateResponse;
                    toJSON(message: _183.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_183.QueryChannelConsensusStateResponse>): _183.QueryChannelConsensusStateResponse;
                    fromAmino(object: _183.QueryChannelConsensusStateResponseAmino): _183.QueryChannelConsensusStateResponse;
                    toAmino(message: _183.QueryChannelConsensusStateResponse): _183.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _183.QueryChannelConsensusStateResponseAminoMsg): _183.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _183.QueryChannelConsensusStateResponse): _183.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryChannelConsensusStateResponseProtoMsg): _183.QueryChannelConsensusStateResponse;
                    toProto(message: _183.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryChannelConsensusStateResponse): _183.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _183.QueryPacketCommitmentRequest;
                    toJSON(message: _183.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: Partial<_183.QueryPacketCommitmentRequest>): _183.QueryPacketCommitmentRequest;
                    fromAmino(object: _183.QueryPacketCommitmentRequestAmino): _183.QueryPacketCommitmentRequest;
                    toAmino(message: _183.QueryPacketCommitmentRequest): _183.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _183.QueryPacketCommitmentRequestAminoMsg): _183.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _183.QueryPacketCommitmentRequest): _183.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketCommitmentRequestProtoMsg): _183.QueryPacketCommitmentRequest;
                    toProto(message: _183.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketCommitmentRequest): _183.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _183.QueryPacketCommitmentResponse;
                    toJSON(message: _183.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: Partial<_183.QueryPacketCommitmentResponse>): _183.QueryPacketCommitmentResponse;
                    fromAmino(object: _183.QueryPacketCommitmentResponseAmino): _183.QueryPacketCommitmentResponse;
                    toAmino(message: _183.QueryPacketCommitmentResponse): _183.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _183.QueryPacketCommitmentResponseAminoMsg): _183.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _183.QueryPacketCommitmentResponse): _183.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketCommitmentResponseProtoMsg): _183.QueryPacketCommitmentResponse;
                    toProto(message: _183.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketCommitmentResponse): _183.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _183.QueryPacketCommitmentsRequest;
                    toJSON(message: _183.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: Partial<_183.QueryPacketCommitmentsRequest>): _183.QueryPacketCommitmentsRequest;
                    fromAmino(object: _183.QueryPacketCommitmentsRequestAmino): _183.QueryPacketCommitmentsRequest;
                    toAmino(message: _183.QueryPacketCommitmentsRequest): _183.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _183.QueryPacketCommitmentsRequestAminoMsg): _183.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _183.QueryPacketCommitmentsRequest): _183.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketCommitmentsRequestProtoMsg): _183.QueryPacketCommitmentsRequest;
                    toProto(message: _183.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketCommitmentsRequest): _183.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _183.QueryPacketCommitmentsResponse;
                    toJSON(message: _183.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: Partial<_183.QueryPacketCommitmentsResponse>): _183.QueryPacketCommitmentsResponse;
                    fromAmino(object: _183.QueryPacketCommitmentsResponseAmino): _183.QueryPacketCommitmentsResponse;
                    toAmino(message: _183.QueryPacketCommitmentsResponse): _183.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _183.QueryPacketCommitmentsResponseAminoMsg): _183.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _183.QueryPacketCommitmentsResponse): _183.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketCommitmentsResponseProtoMsg): _183.QueryPacketCommitmentsResponse;
                    toProto(message: _183.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketCommitmentsResponse): _183.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketReceiptRequest;
                    fromJSON(object: any): _183.QueryPacketReceiptRequest;
                    toJSON(message: _183.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: Partial<_183.QueryPacketReceiptRequest>): _183.QueryPacketReceiptRequest;
                    fromAmino(object: _183.QueryPacketReceiptRequestAmino): _183.QueryPacketReceiptRequest;
                    toAmino(message: _183.QueryPacketReceiptRequest): _183.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _183.QueryPacketReceiptRequestAminoMsg): _183.QueryPacketReceiptRequest;
                    toAminoMsg(message: _183.QueryPacketReceiptRequest): _183.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketReceiptRequestProtoMsg): _183.QueryPacketReceiptRequest;
                    toProto(message: _183.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketReceiptRequest): _183.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketReceiptResponse;
                    fromJSON(object: any): _183.QueryPacketReceiptResponse;
                    toJSON(message: _183.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: Partial<_183.QueryPacketReceiptResponse>): _183.QueryPacketReceiptResponse;
                    fromAmino(object: _183.QueryPacketReceiptResponseAmino): _183.QueryPacketReceiptResponse;
                    toAmino(message: _183.QueryPacketReceiptResponse): _183.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _183.QueryPacketReceiptResponseAminoMsg): _183.QueryPacketReceiptResponse;
                    toAminoMsg(message: _183.QueryPacketReceiptResponse): _183.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketReceiptResponseProtoMsg): _183.QueryPacketReceiptResponse;
                    toProto(message: _183.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketReceiptResponse): _183.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _183.QueryPacketAcknowledgementRequest;
                    toJSON(message: _183.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: Partial<_183.QueryPacketAcknowledgementRequest>): _183.QueryPacketAcknowledgementRequest;
                    fromAmino(object: _183.QueryPacketAcknowledgementRequestAmino): _183.QueryPacketAcknowledgementRequest;
                    toAmino(message: _183.QueryPacketAcknowledgementRequest): _183.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _183.QueryPacketAcknowledgementRequestAminoMsg): _183.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _183.QueryPacketAcknowledgementRequest): _183.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketAcknowledgementRequestProtoMsg): _183.QueryPacketAcknowledgementRequest;
                    toProto(message: _183.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketAcknowledgementRequest): _183.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _183.QueryPacketAcknowledgementResponse;
                    toJSON(message: _183.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: Partial<_183.QueryPacketAcknowledgementResponse>): _183.QueryPacketAcknowledgementResponse;
                    fromAmino(object: _183.QueryPacketAcknowledgementResponseAmino): _183.QueryPacketAcknowledgementResponse;
                    toAmino(message: _183.QueryPacketAcknowledgementResponse): _183.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _183.QueryPacketAcknowledgementResponseAminoMsg): _183.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _183.QueryPacketAcknowledgementResponse): _183.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketAcknowledgementResponseProtoMsg): _183.QueryPacketAcknowledgementResponse;
                    toProto(message: _183.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketAcknowledgementResponse): _183.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _183.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _183.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: Partial<_183.QueryPacketAcknowledgementsRequest>): _183.QueryPacketAcknowledgementsRequest;
                    fromAmino(object: _183.QueryPacketAcknowledgementsRequestAmino): _183.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _183.QueryPacketAcknowledgementsRequest): _183.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _183.QueryPacketAcknowledgementsRequestAminoMsg): _183.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _183.QueryPacketAcknowledgementsRequest): _183.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketAcknowledgementsRequestProtoMsg): _183.QueryPacketAcknowledgementsRequest;
                    toProto(message: _183.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketAcknowledgementsRequest): _183.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _183.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _183.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: Partial<_183.QueryPacketAcknowledgementsResponse>): _183.QueryPacketAcknowledgementsResponse;
                    fromAmino(object: _183.QueryPacketAcknowledgementsResponseAmino): _183.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _183.QueryPacketAcknowledgementsResponse): _183.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _183.QueryPacketAcknowledgementsResponseAminoMsg): _183.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _183.QueryPacketAcknowledgementsResponse): _183.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryPacketAcknowledgementsResponseProtoMsg): _183.QueryPacketAcknowledgementsResponse;
                    toProto(message: _183.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryPacketAcknowledgementsResponse): _183.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _183.QueryUnreceivedPacketsRequest;
                    toJSON(message: _183.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: Partial<_183.QueryUnreceivedPacketsRequest>): _183.QueryUnreceivedPacketsRequest;
                    fromAmino(object: _183.QueryUnreceivedPacketsRequestAmino): _183.QueryUnreceivedPacketsRequest;
                    toAmino(message: _183.QueryUnreceivedPacketsRequest): _183.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _183.QueryUnreceivedPacketsRequestAminoMsg): _183.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _183.QueryUnreceivedPacketsRequest): _183.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryUnreceivedPacketsRequestProtoMsg): _183.QueryUnreceivedPacketsRequest;
                    toProto(message: _183.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryUnreceivedPacketsRequest): _183.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _183.QueryUnreceivedPacketsResponse;
                    toJSON(message: _183.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: Partial<_183.QueryUnreceivedPacketsResponse>): _183.QueryUnreceivedPacketsResponse;
                    fromAmino(object: _183.QueryUnreceivedPacketsResponseAmino): _183.QueryUnreceivedPacketsResponse;
                    toAmino(message: _183.QueryUnreceivedPacketsResponse): _183.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _183.QueryUnreceivedPacketsResponseAminoMsg): _183.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _183.QueryUnreceivedPacketsResponse): _183.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryUnreceivedPacketsResponseProtoMsg): _183.QueryUnreceivedPacketsResponse;
                    toProto(message: _183.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryUnreceivedPacketsResponse): _183.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _183.QueryUnreceivedAcksRequest;
                    toJSON(message: _183.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: Partial<_183.QueryUnreceivedAcksRequest>): _183.QueryUnreceivedAcksRequest;
                    fromAmino(object: _183.QueryUnreceivedAcksRequestAmino): _183.QueryUnreceivedAcksRequest;
                    toAmino(message: _183.QueryUnreceivedAcksRequest): _183.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _183.QueryUnreceivedAcksRequestAminoMsg): _183.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _183.QueryUnreceivedAcksRequest): _183.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryUnreceivedAcksRequestProtoMsg): _183.QueryUnreceivedAcksRequest;
                    toProto(message: _183.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryUnreceivedAcksRequest): _183.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _183.QueryUnreceivedAcksResponse;
                    toJSON(message: _183.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: Partial<_183.QueryUnreceivedAcksResponse>): _183.QueryUnreceivedAcksResponse;
                    fromAmino(object: _183.QueryUnreceivedAcksResponseAmino): _183.QueryUnreceivedAcksResponse;
                    toAmino(message: _183.QueryUnreceivedAcksResponse): _183.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _183.QueryUnreceivedAcksResponseAminoMsg): _183.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _183.QueryUnreceivedAcksResponse): _183.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryUnreceivedAcksResponseProtoMsg): _183.QueryUnreceivedAcksResponse;
                    toProto(message: _183.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryUnreceivedAcksResponse): _183.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    encode(message: _183.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _183.QueryNextSequenceReceiveRequest;
                    toJSON(message: _183.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: Partial<_183.QueryNextSequenceReceiveRequest>): _183.QueryNextSequenceReceiveRequest;
                    fromAmino(object: _183.QueryNextSequenceReceiveRequestAmino): _183.QueryNextSequenceReceiveRequest;
                    toAmino(message: _183.QueryNextSequenceReceiveRequest): _183.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _183.QueryNextSequenceReceiveRequestAminoMsg): _183.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _183.QueryNextSequenceReceiveRequest): _183.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _183.QueryNextSequenceReceiveRequestProtoMsg): _183.QueryNextSequenceReceiveRequest;
                    toProto(message: _183.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _183.QueryNextSequenceReceiveRequest): _183.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    encode(message: _183.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _183.QueryNextSequenceReceiveResponse;
                    toJSON(message: _183.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: Partial<_183.QueryNextSequenceReceiveResponse>): _183.QueryNextSequenceReceiveResponse;
                    fromAmino(object: _183.QueryNextSequenceReceiveResponseAmino): _183.QueryNextSequenceReceiveResponse;
                    toAmino(message: _183.QueryNextSequenceReceiveResponse): _183.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _183.QueryNextSequenceReceiveResponseAminoMsg): _183.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _183.QueryNextSequenceReceiveResponse): _183.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _183.QueryNextSequenceReceiveResponseProtoMsg): _183.QueryNextSequenceReceiveResponse;
                    toProto(message: _183.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _183.QueryNextSequenceReceiveResponse): _183.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _182.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.GenesisState;
                    fromJSON(object: any): _182.GenesisState;
                    toJSON(message: _182.GenesisState): unknown;
                    fromPartial(object: Partial<_182.GenesisState>): _182.GenesisState;
                    fromAmino(object: _182.GenesisStateAmino): _182.GenesisState;
                    toAmino(message: _182.GenesisState): _182.GenesisStateAmino;
                    fromAminoMsg(object: _182.GenesisStateAminoMsg): _182.GenesisState;
                    toAminoMsg(message: _182.GenesisState): _182.GenesisStateAminoMsg;
                    fromProtoMsg(message: _182.GenesisStateProtoMsg): _182.GenesisState;
                    toProto(message: _182.GenesisState): Uint8Array;
                    toProtoMsg(message: _182.GenesisState): _182.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    encode(message: _182.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.PacketSequence;
                    fromJSON(object: any): _182.PacketSequence;
                    toJSON(message: _182.PacketSequence): unknown;
                    fromPartial(object: Partial<_182.PacketSequence>): _182.PacketSequence;
                    fromAmino(object: _182.PacketSequenceAmino): _182.PacketSequence;
                    toAmino(message: _182.PacketSequence): _182.PacketSequenceAmino;
                    fromAminoMsg(object: _182.PacketSequenceAminoMsg): _182.PacketSequence;
                    toAminoMsg(message: _182.PacketSequence): _182.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _182.PacketSequenceProtoMsg): _182.PacketSequence;
                    toProto(message: _182.PacketSequence): Uint8Array;
                    toProtoMsg(message: _182.PacketSequence): _182.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _181.State;
                stateToJSON(object: _181.State): string;
                orderFromJSON(object: any): _181.Order;
                orderToJSON(object: _181.Order): string;
                State: typeof _181.State;
                StateSDKType: typeof _181.State;
                StateAmino: typeof _181.State;
                Order: typeof _181.Order;
                OrderSDKType: typeof _181.Order;
                OrderAmino: typeof _181.Order;
                Channel: {
                    typeUrl: string;
                    encode(message: _181.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Channel;
                    fromJSON(object: any): _181.Channel;
                    toJSON(message: _181.Channel): unknown;
                    fromPartial(object: Partial<_181.Channel>): _181.Channel;
                    fromAmino(object: _181.ChannelAmino): _181.Channel;
                    toAmino(message: _181.Channel): _181.ChannelAmino;
                    fromAminoMsg(object: _181.ChannelAminoMsg): _181.Channel;
                    toAminoMsg(message: _181.Channel): _181.ChannelAminoMsg;
                    fromProtoMsg(message: _181.ChannelProtoMsg): _181.Channel;
                    toProto(message: _181.Channel): Uint8Array;
                    toProtoMsg(message: _181.Channel): _181.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    encode(message: _181.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.IdentifiedChannel;
                    fromJSON(object: any): _181.IdentifiedChannel;
                    toJSON(message: _181.IdentifiedChannel): unknown;
                    fromPartial(object: Partial<_181.IdentifiedChannel>): _181.IdentifiedChannel;
                    fromAmino(object: _181.IdentifiedChannelAmino): _181.IdentifiedChannel;
                    toAmino(message: _181.IdentifiedChannel): _181.IdentifiedChannelAmino;
                    fromAminoMsg(object: _181.IdentifiedChannelAminoMsg): _181.IdentifiedChannel;
                    toAminoMsg(message: _181.IdentifiedChannel): _181.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _181.IdentifiedChannelProtoMsg): _181.IdentifiedChannel;
                    toProto(message: _181.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _181.IdentifiedChannel): _181.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _181.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Counterparty;
                    fromJSON(object: any): _181.Counterparty;
                    toJSON(message: _181.Counterparty): unknown;
                    fromPartial(object: Partial<_181.Counterparty>): _181.Counterparty;
                    fromAmino(object: _181.CounterpartyAmino): _181.Counterparty;
                    toAmino(message: _181.Counterparty): _181.CounterpartyAmino;
                    fromAminoMsg(object: _181.CounterpartyAminoMsg): _181.Counterparty;
                    toAminoMsg(message: _181.Counterparty): _181.CounterpartyAminoMsg;
                    fromProtoMsg(message: _181.CounterpartyProtoMsg): _181.Counterparty;
                    toProto(message: _181.Counterparty): Uint8Array;
                    toProtoMsg(message: _181.Counterparty): _181.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    encode(message: _181.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Packet;
                    fromJSON(object: any): _181.Packet;
                    toJSON(message: _181.Packet): unknown;
                    fromPartial(object: Partial<_181.Packet>): _181.Packet;
                    fromAmino(object: _181.PacketAmino): _181.Packet;
                    toAmino(message: _181.Packet): _181.PacketAmino;
                    fromAminoMsg(object: _181.PacketAminoMsg): _181.Packet;
                    toAminoMsg(message: _181.Packet): _181.PacketAminoMsg;
                    fromProtoMsg(message: _181.PacketProtoMsg): _181.Packet;
                    toProto(message: _181.Packet): Uint8Array;
                    toProtoMsg(message: _181.Packet): _181.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    encode(message: _181.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.PacketState;
                    fromJSON(object: any): _181.PacketState;
                    toJSON(message: _181.PacketState): unknown;
                    fromPartial(object: Partial<_181.PacketState>): _181.PacketState;
                    fromAmino(object: _181.PacketStateAmino): _181.PacketState;
                    toAmino(message: _181.PacketState): _181.PacketStateAmino;
                    fromAminoMsg(object: _181.PacketStateAminoMsg): _181.PacketState;
                    toAminoMsg(message: _181.PacketState): _181.PacketStateAminoMsg;
                    fromProtoMsg(message: _181.PacketStateProtoMsg): _181.PacketState;
                    toProto(message: _181.PacketState): Uint8Array;
                    toProtoMsg(message: _181.PacketState): _181.PacketStateProtoMsg;
                };
                PacketId: {
                    typeUrl: string;
                    encode(message: _181.PacketId, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.PacketId;
                    fromJSON(object: any): _181.PacketId;
                    toJSON(message: _181.PacketId): unknown;
                    fromPartial(object: Partial<_181.PacketId>): _181.PacketId;
                    fromAmino(object: _181.PacketIdAmino): _181.PacketId;
                    toAmino(message: _181.PacketId): _181.PacketIdAmino;
                    fromAminoMsg(object: _181.PacketIdAminoMsg): _181.PacketId;
                    toAminoMsg(message: _181.PacketId): _181.PacketIdAminoMsg;
                    fromProtoMsg(message: _181.PacketIdProtoMsg): _181.PacketId;
                    toProto(message: _181.PacketId): Uint8Array;
                    toProtoMsg(message: _181.PacketId): _181.PacketIdProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    encode(message: _181.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Acknowledgement;
                    fromJSON(object: any): _181.Acknowledgement;
                    toJSON(message: _181.Acknowledgement): unknown;
                    fromPartial(object: Partial<_181.Acknowledgement>): _181.Acknowledgement;
                    fromAmino(object: _181.AcknowledgementAmino): _181.Acknowledgement;
                    toAmino(message: _181.Acknowledgement): _181.AcknowledgementAmino;
                    fromAminoMsg(object: _181.AcknowledgementAminoMsg): _181.Acknowledgement;
                    toAminoMsg(message: _181.Acknowledgement): _181.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _181.AcknowledgementProtoMsg): _181.Acknowledgement;
                    toProto(message: _181.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _181.Acknowledgement): _181.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _337.MsgClientImpl;
                QueryClientImpl: typeof _331.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _187.QueryClientStateRequest): Promise<_187.QueryClientStateResponse>;
                    clientStates(request?: _187.QueryClientStatesRequest): Promise<_187.QueryClientStatesResponse>;
                    consensusState(request: _187.QueryConsensusStateRequest): Promise<_187.QueryConsensusStateResponse>;
                    consensusStates(request: _187.QueryConsensusStatesRequest): Promise<_187.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _187.QueryConsensusStateHeightsRequest): Promise<_187.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _187.QueryClientStatusRequest): Promise<_187.QueryClientStatusResponse>;
                    clientParams(request?: _187.QueryClientParamsRequest): Promise<_187.QueryClientParamsResponse>;
                    upgradedClientState(request?: _187.QueryUpgradedClientStateRequest): Promise<_187.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _187.QueryUpgradedConsensusStateRequest): Promise<_187.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _324.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _188.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _188.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _188.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _188.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _188.MsgCreateClient): {
                            typeUrl: string;
                            value: _188.MsgCreateClient;
                        };
                        updateClient(value: _188.MsgUpdateClient): {
                            typeUrl: string;
                            value: _188.MsgUpdateClient;
                        };
                        upgradeClient(value: _188.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _188.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _188.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _188.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _188.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _188.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _188.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _188.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _188.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _188.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _188.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _188.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _188.MsgCreateClient): {
                            typeUrl: string;
                            value: _188.MsgCreateClient;
                        };
                        updateClient(value: _188.MsgUpdateClient): {
                            typeUrl: string;
                            value: _188.MsgUpdateClient;
                        };
                        upgradeClient(value: _188.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _188.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _188.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _188.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _188.MsgCreateClient) => _188.MsgCreateClientAmino;
                        fromAmino: (object: _188.MsgCreateClientAmino) => _188.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _188.MsgUpdateClient) => _188.MsgUpdateClientAmino;
                        fromAmino: (object: _188.MsgUpdateClientAmino) => _188.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _188.MsgUpgradeClient) => _188.MsgUpgradeClientAmino;
                        fromAmino: (object: _188.MsgUpgradeClientAmino) => _188.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _188.MsgSubmitMisbehaviour) => _188.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _188.MsgSubmitMisbehaviourAmino) => _188.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    encode(message: _188.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgCreateClient;
                    fromJSON(object: any): _188.MsgCreateClient;
                    toJSON(message: _188.MsgCreateClient): unknown;
                    fromPartial(object: Partial<_188.MsgCreateClient>): _188.MsgCreateClient;
                    fromAmino(object: _188.MsgCreateClientAmino): _188.MsgCreateClient;
                    toAmino(message: _188.MsgCreateClient): _188.MsgCreateClientAmino;
                    fromAminoMsg(object: _188.MsgCreateClientAminoMsg): _188.MsgCreateClient;
                    toAminoMsg(message: _188.MsgCreateClient): _188.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _188.MsgCreateClientProtoMsg): _188.MsgCreateClient;
                    toProto(message: _188.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _188.MsgCreateClient): _188.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    encode(_: _188.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgCreateClientResponse;
                    fromJSON(_: any): _188.MsgCreateClientResponse;
                    toJSON(_: _188.MsgCreateClientResponse): unknown;
                    fromPartial(_: Partial<_188.MsgCreateClientResponse>): _188.MsgCreateClientResponse;
                    fromAmino(_: _188.MsgCreateClientResponseAmino): _188.MsgCreateClientResponse;
                    toAmino(_: _188.MsgCreateClientResponse): _188.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _188.MsgCreateClientResponseAminoMsg): _188.MsgCreateClientResponse;
                    toAminoMsg(message: _188.MsgCreateClientResponse): _188.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _188.MsgCreateClientResponseProtoMsg): _188.MsgCreateClientResponse;
                    toProto(message: _188.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _188.MsgCreateClientResponse): _188.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    encode(message: _188.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgUpdateClient;
                    fromJSON(object: any): _188.MsgUpdateClient;
                    toJSON(message: _188.MsgUpdateClient): unknown;
                    fromPartial(object: Partial<_188.MsgUpdateClient>): _188.MsgUpdateClient;
                    fromAmino(object: _188.MsgUpdateClientAmino): _188.MsgUpdateClient;
                    toAmino(message: _188.MsgUpdateClient): _188.MsgUpdateClientAmino;
                    fromAminoMsg(object: _188.MsgUpdateClientAminoMsg): _188.MsgUpdateClient;
                    toAminoMsg(message: _188.MsgUpdateClient): _188.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _188.MsgUpdateClientProtoMsg): _188.MsgUpdateClient;
                    toProto(message: _188.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _188.MsgUpdateClient): _188.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    encode(_: _188.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgUpdateClientResponse;
                    fromJSON(_: any): _188.MsgUpdateClientResponse;
                    toJSON(_: _188.MsgUpdateClientResponse): unknown;
                    fromPartial(_: Partial<_188.MsgUpdateClientResponse>): _188.MsgUpdateClientResponse;
                    fromAmino(_: _188.MsgUpdateClientResponseAmino): _188.MsgUpdateClientResponse;
                    toAmino(_: _188.MsgUpdateClientResponse): _188.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _188.MsgUpdateClientResponseAminoMsg): _188.MsgUpdateClientResponse;
                    toAminoMsg(message: _188.MsgUpdateClientResponse): _188.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _188.MsgUpdateClientResponseProtoMsg): _188.MsgUpdateClientResponse;
                    toProto(message: _188.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _188.MsgUpdateClientResponse): _188.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    encode(message: _188.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgUpgradeClient;
                    fromJSON(object: any): _188.MsgUpgradeClient;
                    toJSON(message: _188.MsgUpgradeClient): unknown;
                    fromPartial(object: Partial<_188.MsgUpgradeClient>): _188.MsgUpgradeClient;
                    fromAmino(object: _188.MsgUpgradeClientAmino): _188.MsgUpgradeClient;
                    toAmino(message: _188.MsgUpgradeClient): _188.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _188.MsgUpgradeClientAminoMsg): _188.MsgUpgradeClient;
                    toAminoMsg(message: _188.MsgUpgradeClient): _188.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _188.MsgUpgradeClientProtoMsg): _188.MsgUpgradeClient;
                    toProto(message: _188.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _188.MsgUpgradeClient): _188.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    encode(_: _188.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgUpgradeClientResponse;
                    fromJSON(_: any): _188.MsgUpgradeClientResponse;
                    toJSON(_: _188.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: Partial<_188.MsgUpgradeClientResponse>): _188.MsgUpgradeClientResponse;
                    fromAmino(_: _188.MsgUpgradeClientResponseAmino): _188.MsgUpgradeClientResponse;
                    toAmino(_: _188.MsgUpgradeClientResponse): _188.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _188.MsgUpgradeClientResponseAminoMsg): _188.MsgUpgradeClientResponse;
                    toAminoMsg(message: _188.MsgUpgradeClientResponse): _188.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _188.MsgUpgradeClientResponseProtoMsg): _188.MsgUpgradeClientResponse;
                    toProto(message: _188.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _188.MsgUpgradeClientResponse): _188.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    encode(message: _188.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _188.MsgSubmitMisbehaviour;
                    toJSON(message: _188.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: Partial<_188.MsgSubmitMisbehaviour>): _188.MsgSubmitMisbehaviour;
                    fromAmino(object: _188.MsgSubmitMisbehaviourAmino): _188.MsgSubmitMisbehaviour;
                    toAmino(message: _188.MsgSubmitMisbehaviour): _188.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _188.MsgSubmitMisbehaviourAminoMsg): _188.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _188.MsgSubmitMisbehaviour): _188.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _188.MsgSubmitMisbehaviourProtoMsg): _188.MsgSubmitMisbehaviour;
                    toProto(message: _188.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _188.MsgSubmitMisbehaviour): _188.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    encode(_: _188.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _188.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _188.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: Partial<_188.MsgSubmitMisbehaviourResponse>): _188.MsgSubmitMisbehaviourResponse;
                    fromAmino(_: _188.MsgSubmitMisbehaviourResponseAmino): _188.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _188.MsgSubmitMisbehaviourResponse): _188.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _188.MsgSubmitMisbehaviourResponseAminoMsg): _188.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _188.MsgSubmitMisbehaviourResponse): _188.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _188.MsgSubmitMisbehaviourResponseProtoMsg): _188.MsgSubmitMisbehaviourResponse;
                    toProto(message: _188.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _188.MsgSubmitMisbehaviourResponse): _188.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    encode(message: _187.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryClientStateRequest;
                    fromJSON(object: any): _187.QueryClientStateRequest;
                    toJSON(message: _187.QueryClientStateRequest): unknown;
                    fromPartial(object: Partial<_187.QueryClientStateRequest>): _187.QueryClientStateRequest;
                    fromAmino(object: _187.QueryClientStateRequestAmino): _187.QueryClientStateRequest;
                    toAmino(message: _187.QueryClientStateRequest): _187.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _187.QueryClientStateRequestAminoMsg): _187.QueryClientStateRequest;
                    toAminoMsg(message: _187.QueryClientStateRequest): _187.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryClientStateRequestProtoMsg): _187.QueryClientStateRequest;
                    toProto(message: _187.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryClientStateRequest): _187.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryClientStateResponse;
                    fromJSON(object: any): _187.QueryClientStateResponse;
                    toJSON(message: _187.QueryClientStateResponse): unknown;
                    fromPartial(object: Partial<_187.QueryClientStateResponse>): _187.QueryClientStateResponse;
                    fromAmino(object: _187.QueryClientStateResponseAmino): _187.QueryClientStateResponse;
                    toAmino(message: _187.QueryClientStateResponse): _187.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _187.QueryClientStateResponseAminoMsg): _187.QueryClientStateResponse;
                    toAminoMsg(message: _187.QueryClientStateResponse): _187.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryClientStateResponseProtoMsg): _187.QueryClientStateResponse;
                    toProto(message: _187.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryClientStateResponse): _187.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    encode(message: _187.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryClientStatesRequest;
                    fromJSON(object: any): _187.QueryClientStatesRequest;
                    toJSON(message: _187.QueryClientStatesRequest): unknown;
                    fromPartial(object: Partial<_187.QueryClientStatesRequest>): _187.QueryClientStatesRequest;
                    fromAmino(object: _187.QueryClientStatesRequestAmino): _187.QueryClientStatesRequest;
                    toAmino(message: _187.QueryClientStatesRequest): _187.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _187.QueryClientStatesRequestAminoMsg): _187.QueryClientStatesRequest;
                    toAminoMsg(message: _187.QueryClientStatesRequest): _187.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryClientStatesRequestProtoMsg): _187.QueryClientStatesRequest;
                    toProto(message: _187.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryClientStatesRequest): _187.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryClientStatesResponse;
                    fromJSON(object: any): _187.QueryClientStatesResponse;
                    toJSON(message: _187.QueryClientStatesResponse): unknown;
                    fromPartial(object: Partial<_187.QueryClientStatesResponse>): _187.QueryClientStatesResponse;
                    fromAmino(object: _187.QueryClientStatesResponseAmino): _187.QueryClientStatesResponse;
                    toAmino(message: _187.QueryClientStatesResponse): _187.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _187.QueryClientStatesResponseAminoMsg): _187.QueryClientStatesResponse;
                    toAminoMsg(message: _187.QueryClientStatesResponse): _187.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryClientStatesResponseProtoMsg): _187.QueryClientStatesResponse;
                    toProto(message: _187.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryClientStatesResponse): _187.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _187.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryConsensusStateRequest;
                    fromJSON(object: any): _187.QueryConsensusStateRequest;
                    toJSON(message: _187.QueryConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_187.QueryConsensusStateRequest>): _187.QueryConsensusStateRequest;
                    fromAmino(object: _187.QueryConsensusStateRequestAmino): _187.QueryConsensusStateRequest;
                    toAmino(message: _187.QueryConsensusStateRequest): _187.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _187.QueryConsensusStateRequestAminoMsg): _187.QueryConsensusStateRequest;
                    toAminoMsg(message: _187.QueryConsensusStateRequest): _187.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryConsensusStateRequestProtoMsg): _187.QueryConsensusStateRequest;
                    toProto(message: _187.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryConsensusStateRequest): _187.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryConsensusStateResponse;
                    fromJSON(object: any): _187.QueryConsensusStateResponse;
                    toJSON(message: _187.QueryConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_187.QueryConsensusStateResponse>): _187.QueryConsensusStateResponse;
                    fromAmino(object: _187.QueryConsensusStateResponseAmino): _187.QueryConsensusStateResponse;
                    toAmino(message: _187.QueryConsensusStateResponse): _187.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _187.QueryConsensusStateResponseAminoMsg): _187.QueryConsensusStateResponse;
                    toAminoMsg(message: _187.QueryConsensusStateResponse): _187.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryConsensusStateResponseProtoMsg): _187.QueryConsensusStateResponse;
                    toProto(message: _187.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryConsensusStateResponse): _187.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    encode(message: _187.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryConsensusStatesRequest;
                    fromJSON(object: any): _187.QueryConsensusStatesRequest;
                    toJSON(message: _187.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: Partial<_187.QueryConsensusStatesRequest>): _187.QueryConsensusStatesRequest;
                    fromAmino(object: _187.QueryConsensusStatesRequestAmino): _187.QueryConsensusStatesRequest;
                    toAmino(message: _187.QueryConsensusStatesRequest): _187.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _187.QueryConsensusStatesRequestAminoMsg): _187.QueryConsensusStatesRequest;
                    toAminoMsg(message: _187.QueryConsensusStatesRequest): _187.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryConsensusStatesRequestProtoMsg): _187.QueryConsensusStatesRequest;
                    toProto(message: _187.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryConsensusStatesRequest): _187.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryConsensusStatesResponse;
                    fromJSON(object: any): _187.QueryConsensusStatesResponse;
                    toJSON(message: _187.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: Partial<_187.QueryConsensusStatesResponse>): _187.QueryConsensusStatesResponse;
                    fromAmino(object: _187.QueryConsensusStatesResponseAmino): _187.QueryConsensusStatesResponse;
                    toAmino(message: _187.QueryConsensusStatesResponse): _187.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _187.QueryConsensusStatesResponseAminoMsg): _187.QueryConsensusStatesResponse;
                    toAminoMsg(message: _187.QueryConsensusStatesResponse): _187.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryConsensusStatesResponseProtoMsg): _187.QueryConsensusStatesResponse;
                    toProto(message: _187.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryConsensusStatesResponse): _187.QueryConsensusStatesResponseProtoMsg;
                };
                QueryConsensusStateHeightsRequest: {
                    typeUrl: string;
                    encode(message: _187.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _187.QueryConsensusStateHeightsRequest;
                    toJSON(message: _187.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: Partial<_187.QueryConsensusStateHeightsRequest>): _187.QueryConsensusStateHeightsRequest;
                    fromAmino(object: _187.QueryConsensusStateHeightsRequestAmino): _187.QueryConsensusStateHeightsRequest;
                    toAmino(message: _187.QueryConsensusStateHeightsRequest): _187.QueryConsensusStateHeightsRequestAmino;
                    fromAminoMsg(object: _187.QueryConsensusStateHeightsRequestAminoMsg): _187.QueryConsensusStateHeightsRequest;
                    toAminoMsg(message: _187.QueryConsensusStateHeightsRequest): _187.QueryConsensusStateHeightsRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryConsensusStateHeightsRequestProtoMsg): _187.QueryConsensusStateHeightsRequest;
                    toProto(message: _187.QueryConsensusStateHeightsRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryConsensusStateHeightsRequest): _187.QueryConsensusStateHeightsRequestProtoMsg;
                };
                QueryConsensusStateHeightsResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _187.QueryConsensusStateHeightsResponse;
                    toJSON(message: _187.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: Partial<_187.QueryConsensusStateHeightsResponse>): _187.QueryConsensusStateHeightsResponse;
                    fromAmino(object: _187.QueryConsensusStateHeightsResponseAmino): _187.QueryConsensusStateHeightsResponse;
                    toAmino(message: _187.QueryConsensusStateHeightsResponse): _187.QueryConsensusStateHeightsResponseAmino;
                    fromAminoMsg(object: _187.QueryConsensusStateHeightsResponseAminoMsg): _187.QueryConsensusStateHeightsResponse;
                    toAminoMsg(message: _187.QueryConsensusStateHeightsResponse): _187.QueryConsensusStateHeightsResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryConsensusStateHeightsResponseProtoMsg): _187.QueryConsensusStateHeightsResponse;
                    toProto(message: _187.QueryConsensusStateHeightsResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryConsensusStateHeightsResponse): _187.QueryConsensusStateHeightsResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    encode(message: _187.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryClientStatusRequest;
                    fromJSON(object: any): _187.QueryClientStatusRequest;
                    toJSON(message: _187.QueryClientStatusRequest): unknown;
                    fromPartial(object: Partial<_187.QueryClientStatusRequest>): _187.QueryClientStatusRequest;
                    fromAmino(object: _187.QueryClientStatusRequestAmino): _187.QueryClientStatusRequest;
                    toAmino(message: _187.QueryClientStatusRequest): _187.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _187.QueryClientStatusRequestAminoMsg): _187.QueryClientStatusRequest;
                    toAminoMsg(message: _187.QueryClientStatusRequest): _187.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryClientStatusRequestProtoMsg): _187.QueryClientStatusRequest;
                    toProto(message: _187.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryClientStatusRequest): _187.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryClientStatusResponse;
                    fromJSON(object: any): _187.QueryClientStatusResponse;
                    toJSON(message: _187.QueryClientStatusResponse): unknown;
                    fromPartial(object: Partial<_187.QueryClientStatusResponse>): _187.QueryClientStatusResponse;
                    fromAmino(object: _187.QueryClientStatusResponseAmino): _187.QueryClientStatusResponse;
                    toAmino(message: _187.QueryClientStatusResponse): _187.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _187.QueryClientStatusResponseAminoMsg): _187.QueryClientStatusResponse;
                    toAminoMsg(message: _187.QueryClientStatusResponse): _187.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryClientStatusResponseProtoMsg): _187.QueryClientStatusResponse;
                    toProto(message: _187.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryClientStatusResponse): _187.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    encode(_: _187.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryClientParamsRequest;
                    fromJSON(_: any): _187.QueryClientParamsRequest;
                    toJSON(_: _187.QueryClientParamsRequest): unknown;
                    fromPartial(_: Partial<_187.QueryClientParamsRequest>): _187.QueryClientParamsRequest;
                    fromAmino(_: _187.QueryClientParamsRequestAmino): _187.QueryClientParamsRequest;
                    toAmino(_: _187.QueryClientParamsRequest): _187.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _187.QueryClientParamsRequestAminoMsg): _187.QueryClientParamsRequest;
                    toAminoMsg(message: _187.QueryClientParamsRequest): _187.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryClientParamsRequestProtoMsg): _187.QueryClientParamsRequest;
                    toProto(message: _187.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryClientParamsRequest): _187.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryClientParamsResponse;
                    fromJSON(object: any): _187.QueryClientParamsResponse;
                    toJSON(message: _187.QueryClientParamsResponse): unknown;
                    fromPartial(object: Partial<_187.QueryClientParamsResponse>): _187.QueryClientParamsResponse;
                    fromAmino(object: _187.QueryClientParamsResponseAmino): _187.QueryClientParamsResponse;
                    toAmino(message: _187.QueryClientParamsResponse): _187.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _187.QueryClientParamsResponseAminoMsg): _187.QueryClientParamsResponse;
                    toAminoMsg(message: _187.QueryClientParamsResponse): _187.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryClientParamsResponseProtoMsg): _187.QueryClientParamsResponse;
                    toProto(message: _187.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryClientParamsResponse): _187.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    encode(_: _187.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _187.QueryUpgradedClientStateRequest;
                    toJSON(_: _187.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: Partial<_187.QueryUpgradedClientStateRequest>): _187.QueryUpgradedClientStateRequest;
                    fromAmino(_: _187.QueryUpgradedClientStateRequestAmino): _187.QueryUpgradedClientStateRequest;
                    toAmino(_: _187.QueryUpgradedClientStateRequest): _187.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _187.QueryUpgradedClientStateRequestAminoMsg): _187.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _187.QueryUpgradedClientStateRequest): _187.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryUpgradedClientStateRequestProtoMsg): _187.QueryUpgradedClientStateRequest;
                    toProto(message: _187.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryUpgradedClientStateRequest): _187.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _187.QueryUpgradedClientStateResponse;
                    toJSON(message: _187.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: Partial<_187.QueryUpgradedClientStateResponse>): _187.QueryUpgradedClientStateResponse;
                    fromAmino(object: _187.QueryUpgradedClientStateResponseAmino): _187.QueryUpgradedClientStateResponse;
                    toAmino(message: _187.QueryUpgradedClientStateResponse): _187.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _187.QueryUpgradedClientStateResponseAminoMsg): _187.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _187.QueryUpgradedClientStateResponse): _187.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryUpgradedClientStateResponseProtoMsg): _187.QueryUpgradedClientStateResponse;
                    toProto(message: _187.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryUpgradedClientStateResponse): _187.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    encode(_: _187.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _187.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _187.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: Partial<_187.QueryUpgradedConsensusStateRequest>): _187.QueryUpgradedConsensusStateRequest;
                    fromAmino(_: _187.QueryUpgradedConsensusStateRequestAmino): _187.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _187.QueryUpgradedConsensusStateRequest): _187.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _187.QueryUpgradedConsensusStateRequestAminoMsg): _187.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _187.QueryUpgradedConsensusStateRequest): _187.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _187.QueryUpgradedConsensusStateRequestProtoMsg): _187.QueryUpgradedConsensusStateRequest;
                    toProto(message: _187.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _187.QueryUpgradedConsensusStateRequest): _187.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _187.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _187.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _187.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_187.QueryUpgradedConsensusStateResponse>): _187.QueryUpgradedConsensusStateResponse;
                    fromAmino(object: _187.QueryUpgradedConsensusStateResponseAmino): _187.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _187.QueryUpgradedConsensusStateResponse): _187.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _187.QueryUpgradedConsensusStateResponseAminoMsg): _187.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _187.QueryUpgradedConsensusStateResponse): _187.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _187.QueryUpgradedConsensusStateResponseProtoMsg): _187.QueryUpgradedConsensusStateResponse;
                    toProto(message: _187.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _187.QueryUpgradedConsensusStateResponse): _187.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    encode(message: _186.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GenesisState;
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
                GenesisMetadata: {
                    typeUrl: string;
                    encode(message: _186.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.GenesisMetadata;
                    fromJSON(object: any): _186.GenesisMetadata;
                    toJSON(message: _186.GenesisMetadata): unknown;
                    fromPartial(object: Partial<_186.GenesisMetadata>): _186.GenesisMetadata;
                    fromAmino(object: _186.GenesisMetadataAmino): _186.GenesisMetadata;
                    toAmino(message: _186.GenesisMetadata): _186.GenesisMetadataAmino;
                    fromAminoMsg(object: _186.GenesisMetadataAminoMsg): _186.GenesisMetadata;
                    toAminoMsg(message: _186.GenesisMetadata): _186.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _186.GenesisMetadataProtoMsg): _186.GenesisMetadata;
                    toProto(message: _186.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _186.GenesisMetadata): _186.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    encode(message: _186.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _186.IdentifiedGenesisMetadata;
                    toJSON(message: _186.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: Partial<_186.IdentifiedGenesisMetadata>): _186.IdentifiedGenesisMetadata;
                    fromAmino(object: _186.IdentifiedGenesisMetadataAmino): _186.IdentifiedGenesisMetadata;
                    toAmino(message: _186.IdentifiedGenesisMetadata): _186.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _186.IdentifiedGenesisMetadataAminoMsg): _186.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _186.IdentifiedGenesisMetadata): _186.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _186.IdentifiedGenesisMetadataProtoMsg): _186.IdentifiedGenesisMetadata;
                    toProto(message: _186.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _186.IdentifiedGenesisMetadata): _186.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    encode(message: _185.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.IdentifiedClientState;
                    fromJSON(object: any): _185.IdentifiedClientState;
                    toJSON(message: _185.IdentifiedClientState): unknown;
                    fromPartial(object: Partial<_185.IdentifiedClientState>): _185.IdentifiedClientState;
                    fromAmino(object: _185.IdentifiedClientStateAmino): _185.IdentifiedClientState;
                    toAmino(message: _185.IdentifiedClientState): _185.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _185.IdentifiedClientStateAminoMsg): _185.IdentifiedClientState;
                    toAminoMsg(message: _185.IdentifiedClientState): _185.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _185.IdentifiedClientStateProtoMsg): _185.IdentifiedClientState;
                    toProto(message: _185.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _185.IdentifiedClientState): _185.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    encode(message: _185.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ConsensusStateWithHeight;
                    fromJSON(object: any): _185.ConsensusStateWithHeight;
                    toJSON(message: _185.ConsensusStateWithHeight): unknown;
                    fromPartial(object: Partial<_185.ConsensusStateWithHeight>): _185.ConsensusStateWithHeight;
                    fromAmino(object: _185.ConsensusStateWithHeightAmino): _185.ConsensusStateWithHeight;
                    toAmino(message: _185.ConsensusStateWithHeight): _185.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _185.ConsensusStateWithHeightAminoMsg): _185.ConsensusStateWithHeight;
                    toAminoMsg(message: _185.ConsensusStateWithHeight): _185.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _185.ConsensusStateWithHeightProtoMsg): _185.ConsensusStateWithHeight;
                    toProto(message: _185.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _185.ConsensusStateWithHeight): _185.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    encode(message: _185.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ClientConsensusStates;
                    fromJSON(object: any): _185.ClientConsensusStates;
                    toJSON(message: _185.ClientConsensusStates): unknown;
                    fromPartial(object: Partial<_185.ClientConsensusStates>): _185.ClientConsensusStates;
                    fromAmino(object: _185.ClientConsensusStatesAmino): _185.ClientConsensusStates;
                    toAmino(message: _185.ClientConsensusStates): _185.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _185.ClientConsensusStatesAminoMsg): _185.ClientConsensusStates;
                    toAminoMsg(message: _185.ClientConsensusStates): _185.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _185.ClientConsensusStatesProtoMsg): _185.ClientConsensusStates;
                    toProto(message: _185.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _185.ClientConsensusStates): _185.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    encode(message: _185.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ClientUpdateProposal;
                    fromJSON(object: any): _185.ClientUpdateProposal;
                    toJSON(message: _185.ClientUpdateProposal): unknown;
                    fromPartial(object: Partial<_185.ClientUpdateProposal>): _185.ClientUpdateProposal;
                    fromAmino(object: _185.ClientUpdateProposalAmino): _185.ClientUpdateProposal;
                    toAmino(message: _185.ClientUpdateProposal): _185.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _185.ClientUpdateProposalAminoMsg): _185.ClientUpdateProposal;
                    toAminoMsg(message: _185.ClientUpdateProposal): _185.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _185.ClientUpdateProposalProtoMsg): _185.ClientUpdateProposal;
                    toProto(message: _185.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _185.ClientUpdateProposal): _185.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    encode(message: _185.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.UpgradeProposal;
                    fromJSON(object: any): _185.UpgradeProposal;
                    toJSON(message: _185.UpgradeProposal): unknown;
                    fromPartial(object: Partial<_185.UpgradeProposal>): _185.UpgradeProposal;
                    fromAmino(object: _185.UpgradeProposalAmino): _185.UpgradeProposal;
                    toAmino(message: _185.UpgradeProposal): _185.UpgradeProposalAmino;
                    fromAminoMsg(object: _185.UpgradeProposalAminoMsg): _185.UpgradeProposal;
                    toAminoMsg(message: _185.UpgradeProposal): _185.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _185.UpgradeProposalProtoMsg): _185.UpgradeProposal;
                    toProto(message: _185.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _185.UpgradeProposal): _185.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    encode(message: _185.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Height;
                    fromJSON(object: any): _185.Height;
                    toJSON(message: _185.Height): unknown;
                    fromPartial(object: Partial<_185.Height>): _185.Height;
                    fromAmino(object: _185.HeightAmino): _185.Height;
                    toAmino(message: _185.Height): _185.HeightAmino;
                    fromAminoMsg(object: _185.HeightAminoMsg): _185.Height;
                    toAminoMsg(message: _185.Height): _185.HeightAminoMsg;
                    fromProtoMsg(message: _185.HeightProtoMsg): _185.Height;
                    toProto(message: _185.Height): Uint8Array;
                    toProtoMsg(message: _185.Height): _185.HeightProtoMsg;
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
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    encode(message: _189.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MerkleRoot;
                    fromJSON(object: any): _189.MerkleRoot;
                    toJSON(message: _189.MerkleRoot): unknown;
                    fromPartial(object: Partial<_189.MerkleRoot>): _189.MerkleRoot;
                    fromAmino(object: _189.MerkleRootAmino): _189.MerkleRoot;
                    toAmino(message: _189.MerkleRoot): _189.MerkleRootAmino;
                    fromAminoMsg(object: _189.MerkleRootAminoMsg): _189.MerkleRoot;
                    toAminoMsg(message: _189.MerkleRoot): _189.MerkleRootAminoMsg;
                    fromProtoMsg(message: _189.MerkleRootProtoMsg): _189.MerkleRoot;
                    toProto(message: _189.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _189.MerkleRoot): _189.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    encode(message: _189.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MerklePrefix;
                    fromJSON(object: any): _189.MerklePrefix;
                    toJSON(message: _189.MerklePrefix): unknown;
                    fromPartial(object: Partial<_189.MerklePrefix>): _189.MerklePrefix;
                    fromAmino(object: _189.MerklePrefixAmino): _189.MerklePrefix;
                    toAmino(message: _189.MerklePrefix): _189.MerklePrefixAmino;
                    fromAminoMsg(object: _189.MerklePrefixAminoMsg): _189.MerklePrefix;
                    toAminoMsg(message: _189.MerklePrefix): _189.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _189.MerklePrefixProtoMsg): _189.MerklePrefix;
                    toProto(message: _189.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _189.MerklePrefix): _189.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    encode(message: _189.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MerklePath;
                    fromJSON(object: any): _189.MerklePath;
                    toJSON(message: _189.MerklePath): unknown;
                    fromPartial(object: Partial<_189.MerklePath>): _189.MerklePath;
                    fromAmino(object: _189.MerklePathAmino): _189.MerklePath;
                    toAmino(message: _189.MerklePath): _189.MerklePathAmino;
                    fromAminoMsg(object: _189.MerklePathAminoMsg): _189.MerklePath;
                    toAminoMsg(message: _189.MerklePath): _189.MerklePathAminoMsg;
                    fromProtoMsg(message: _189.MerklePathProtoMsg): _189.MerklePath;
                    toProto(message: _189.MerklePath): Uint8Array;
                    toProtoMsg(message: _189.MerklePath): _189.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    encode(message: _189.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.MerkleProof;
                    fromJSON(object: any): _189.MerkleProof;
                    toJSON(message: _189.MerkleProof): unknown;
                    fromPartial(object: Partial<_189.MerkleProof>): _189.MerkleProof;
                    fromAmino(object: _189.MerkleProofAmino): _189.MerkleProof;
                    toAmino(message: _189.MerkleProof): _189.MerkleProofAmino;
                    fromAminoMsg(object: _189.MerkleProofAminoMsg): _189.MerkleProof;
                    toAminoMsg(message: _189.MerkleProof): _189.MerkleProofAminoMsg;
                    fromProtoMsg(message: _189.MerkleProofProtoMsg): _189.MerkleProof;
                    toProto(message: _189.MerkleProof): Uint8Array;
                    toProtoMsg(message: _189.MerkleProof): _189.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _338.MsgClientImpl;
                QueryClientImpl: typeof _332.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _192.QueryConnectionRequest): Promise<_192.QueryConnectionResponse>;
                    connections(request?: _192.QueryConnectionsRequest): Promise<_192.QueryConnectionsResponse>;
                    clientConnections(request: _192.QueryClientConnectionsRequest): Promise<_192.QueryClientConnectionsResponse>;
                    connectionClientState(request: _192.QueryConnectionClientStateRequest): Promise<_192.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _192.QueryConnectionConsensusStateRequest): Promise<_192.QueryConnectionConsensusStateResponse>;
                    connectionParams(request?: _192.QueryConnectionParamsRequest): Promise<_192.QueryConnectionParamsResponse>;
                };
                LCDQueryClient: typeof _325.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _193.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _193.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _193.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _193.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _193.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _193.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _193.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _193.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _193.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _193.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _193.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _193.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _193.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _193.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _193.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _193.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _193.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _193.MsgConnectionOpenInit) => _193.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _193.MsgConnectionOpenInitAmino) => _193.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _193.MsgConnectionOpenTry) => _193.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _193.MsgConnectionOpenTryAmino) => _193.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _193.MsgConnectionOpenAck) => _193.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _193.MsgConnectionOpenAckAmino) => _193.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _193.MsgConnectionOpenConfirm) => _193.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _193.MsgConnectionOpenConfirmAmino) => _193.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    encode(message: _193.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgConnectionOpenInit;
                    fromJSON(object: any): _193.MsgConnectionOpenInit;
                    toJSON(message: _193.MsgConnectionOpenInit): unknown;
                    fromPartial(object: Partial<_193.MsgConnectionOpenInit>): _193.MsgConnectionOpenInit;
                    fromAmino(object: _193.MsgConnectionOpenInitAmino): _193.MsgConnectionOpenInit;
                    toAmino(message: _193.MsgConnectionOpenInit): _193.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _193.MsgConnectionOpenInitAminoMsg): _193.MsgConnectionOpenInit;
                    toAminoMsg(message: _193.MsgConnectionOpenInit): _193.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _193.MsgConnectionOpenInitProtoMsg): _193.MsgConnectionOpenInit;
                    toProto(message: _193.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _193.MsgConnectionOpenInit): _193.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    encode(_: _193.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _193.MsgConnectionOpenInitResponse;
                    toJSON(_: _193.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: Partial<_193.MsgConnectionOpenInitResponse>): _193.MsgConnectionOpenInitResponse;
                    fromAmino(_: _193.MsgConnectionOpenInitResponseAmino): _193.MsgConnectionOpenInitResponse;
                    toAmino(_: _193.MsgConnectionOpenInitResponse): _193.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _193.MsgConnectionOpenInitResponseAminoMsg): _193.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _193.MsgConnectionOpenInitResponse): _193.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _193.MsgConnectionOpenInitResponseProtoMsg): _193.MsgConnectionOpenInitResponse;
                    toProto(message: _193.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _193.MsgConnectionOpenInitResponse): _193.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    encode(message: _193.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgConnectionOpenTry;
                    fromJSON(object: any): _193.MsgConnectionOpenTry;
                    toJSON(message: _193.MsgConnectionOpenTry): unknown;
                    fromPartial(object: Partial<_193.MsgConnectionOpenTry>): _193.MsgConnectionOpenTry;
                    fromAmino(object: _193.MsgConnectionOpenTryAmino): _193.MsgConnectionOpenTry;
                    toAmino(message: _193.MsgConnectionOpenTry): _193.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _193.MsgConnectionOpenTryAminoMsg): _193.MsgConnectionOpenTry;
                    toAminoMsg(message: _193.MsgConnectionOpenTry): _193.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _193.MsgConnectionOpenTryProtoMsg): _193.MsgConnectionOpenTry;
                    toProto(message: _193.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _193.MsgConnectionOpenTry): _193.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    encode(_: _193.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _193.MsgConnectionOpenTryResponse;
                    toJSON(_: _193.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: Partial<_193.MsgConnectionOpenTryResponse>): _193.MsgConnectionOpenTryResponse;
                    fromAmino(_: _193.MsgConnectionOpenTryResponseAmino): _193.MsgConnectionOpenTryResponse;
                    toAmino(_: _193.MsgConnectionOpenTryResponse): _193.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _193.MsgConnectionOpenTryResponseAminoMsg): _193.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _193.MsgConnectionOpenTryResponse): _193.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _193.MsgConnectionOpenTryResponseProtoMsg): _193.MsgConnectionOpenTryResponse;
                    toProto(message: _193.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _193.MsgConnectionOpenTryResponse): _193.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    encode(message: _193.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgConnectionOpenAck;
                    fromJSON(object: any): _193.MsgConnectionOpenAck;
                    toJSON(message: _193.MsgConnectionOpenAck): unknown;
                    fromPartial(object: Partial<_193.MsgConnectionOpenAck>): _193.MsgConnectionOpenAck;
                    fromAmino(object: _193.MsgConnectionOpenAckAmino): _193.MsgConnectionOpenAck;
                    toAmino(message: _193.MsgConnectionOpenAck): _193.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _193.MsgConnectionOpenAckAminoMsg): _193.MsgConnectionOpenAck;
                    toAminoMsg(message: _193.MsgConnectionOpenAck): _193.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _193.MsgConnectionOpenAckProtoMsg): _193.MsgConnectionOpenAck;
                    toProto(message: _193.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _193.MsgConnectionOpenAck): _193.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    encode(_: _193.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _193.MsgConnectionOpenAckResponse;
                    toJSON(_: _193.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: Partial<_193.MsgConnectionOpenAckResponse>): _193.MsgConnectionOpenAckResponse;
                    fromAmino(_: _193.MsgConnectionOpenAckResponseAmino): _193.MsgConnectionOpenAckResponse;
                    toAmino(_: _193.MsgConnectionOpenAckResponse): _193.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _193.MsgConnectionOpenAckResponseAminoMsg): _193.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _193.MsgConnectionOpenAckResponse): _193.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _193.MsgConnectionOpenAckResponseProtoMsg): _193.MsgConnectionOpenAckResponse;
                    toProto(message: _193.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _193.MsgConnectionOpenAckResponse): _193.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    encode(message: _193.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _193.MsgConnectionOpenConfirm;
                    toJSON(message: _193.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: Partial<_193.MsgConnectionOpenConfirm>): _193.MsgConnectionOpenConfirm;
                    fromAmino(object: _193.MsgConnectionOpenConfirmAmino): _193.MsgConnectionOpenConfirm;
                    toAmino(message: _193.MsgConnectionOpenConfirm): _193.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _193.MsgConnectionOpenConfirmAminoMsg): _193.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _193.MsgConnectionOpenConfirm): _193.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _193.MsgConnectionOpenConfirmProtoMsg): _193.MsgConnectionOpenConfirm;
                    toProto(message: _193.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _193.MsgConnectionOpenConfirm): _193.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    encode(_: _193.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _193.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _193.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: Partial<_193.MsgConnectionOpenConfirmResponse>): _193.MsgConnectionOpenConfirmResponse;
                    fromAmino(_: _193.MsgConnectionOpenConfirmResponseAmino): _193.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _193.MsgConnectionOpenConfirmResponse): _193.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _193.MsgConnectionOpenConfirmResponseAminoMsg): _193.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _193.MsgConnectionOpenConfirmResponse): _193.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _193.MsgConnectionOpenConfirmResponseProtoMsg): _193.MsgConnectionOpenConfirmResponse;
                    toProto(message: _193.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _193.MsgConnectionOpenConfirmResponse): _193.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionRequest;
                    fromJSON(object: any): _192.QueryConnectionRequest;
                    toJSON(message: _192.QueryConnectionRequest): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionRequest>): _192.QueryConnectionRequest;
                    fromAmino(object: _192.QueryConnectionRequestAmino): _192.QueryConnectionRequest;
                    toAmino(message: _192.QueryConnectionRequest): _192.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _192.QueryConnectionRequestAminoMsg): _192.QueryConnectionRequest;
                    toAminoMsg(message: _192.QueryConnectionRequest): _192.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionRequestProtoMsg): _192.QueryConnectionRequest;
                    toProto(message: _192.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionRequest): _192.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionResponse;
                    fromJSON(object: any): _192.QueryConnectionResponse;
                    toJSON(message: _192.QueryConnectionResponse): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionResponse>): _192.QueryConnectionResponse;
                    fromAmino(object: _192.QueryConnectionResponseAmino): _192.QueryConnectionResponse;
                    toAmino(message: _192.QueryConnectionResponse): _192.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _192.QueryConnectionResponseAminoMsg): _192.QueryConnectionResponse;
                    toAminoMsg(message: _192.QueryConnectionResponse): _192.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionResponseProtoMsg): _192.QueryConnectionResponse;
                    toProto(message: _192.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionResponse): _192.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionsRequest;
                    fromJSON(object: any): _192.QueryConnectionsRequest;
                    toJSON(message: _192.QueryConnectionsRequest): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionsRequest>): _192.QueryConnectionsRequest;
                    fromAmino(object: _192.QueryConnectionsRequestAmino): _192.QueryConnectionsRequest;
                    toAmino(message: _192.QueryConnectionsRequest): _192.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _192.QueryConnectionsRequestAminoMsg): _192.QueryConnectionsRequest;
                    toAminoMsg(message: _192.QueryConnectionsRequest): _192.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionsRequestProtoMsg): _192.QueryConnectionsRequest;
                    toProto(message: _192.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionsRequest): _192.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionsResponse;
                    fromJSON(object: any): _192.QueryConnectionsResponse;
                    toJSON(message: _192.QueryConnectionsResponse): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionsResponse>): _192.QueryConnectionsResponse;
                    fromAmino(object: _192.QueryConnectionsResponseAmino): _192.QueryConnectionsResponse;
                    toAmino(message: _192.QueryConnectionsResponse): _192.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _192.QueryConnectionsResponseAminoMsg): _192.QueryConnectionsResponse;
                    toAminoMsg(message: _192.QueryConnectionsResponse): _192.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionsResponseProtoMsg): _192.QueryConnectionsResponse;
                    toProto(message: _192.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionsResponse): _192.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryClientConnectionsRequest;
                    fromJSON(object: any): _192.QueryClientConnectionsRequest;
                    toJSON(message: _192.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: Partial<_192.QueryClientConnectionsRequest>): _192.QueryClientConnectionsRequest;
                    fromAmino(object: _192.QueryClientConnectionsRequestAmino): _192.QueryClientConnectionsRequest;
                    toAmino(message: _192.QueryClientConnectionsRequest): _192.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _192.QueryClientConnectionsRequestAminoMsg): _192.QueryClientConnectionsRequest;
                    toAminoMsg(message: _192.QueryClientConnectionsRequest): _192.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryClientConnectionsRequestProtoMsg): _192.QueryClientConnectionsRequest;
                    toProto(message: _192.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryClientConnectionsRequest): _192.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryClientConnectionsResponse;
                    fromJSON(object: any): _192.QueryClientConnectionsResponse;
                    toJSON(message: _192.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: Partial<_192.QueryClientConnectionsResponse>): _192.QueryClientConnectionsResponse;
                    fromAmino(object: _192.QueryClientConnectionsResponseAmino): _192.QueryClientConnectionsResponse;
                    toAmino(message: _192.QueryClientConnectionsResponse): _192.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _192.QueryClientConnectionsResponseAminoMsg): _192.QueryClientConnectionsResponse;
                    toAminoMsg(message: _192.QueryClientConnectionsResponse): _192.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryClientConnectionsResponseProtoMsg): _192.QueryClientConnectionsResponse;
                    toProto(message: _192.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryClientConnectionsResponse): _192.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _192.QueryConnectionClientStateRequest;
                    toJSON(message: _192.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionClientStateRequest>): _192.QueryConnectionClientStateRequest;
                    fromAmino(object: _192.QueryConnectionClientStateRequestAmino): _192.QueryConnectionClientStateRequest;
                    toAmino(message: _192.QueryConnectionClientStateRequest): _192.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _192.QueryConnectionClientStateRequestAminoMsg): _192.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _192.QueryConnectionClientStateRequest): _192.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionClientStateRequestProtoMsg): _192.QueryConnectionClientStateRequest;
                    toProto(message: _192.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionClientStateRequest): _192.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _192.QueryConnectionClientStateResponse;
                    toJSON(message: _192.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionClientStateResponse>): _192.QueryConnectionClientStateResponse;
                    fromAmino(object: _192.QueryConnectionClientStateResponseAmino): _192.QueryConnectionClientStateResponse;
                    toAmino(message: _192.QueryConnectionClientStateResponse): _192.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _192.QueryConnectionClientStateResponseAminoMsg): _192.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _192.QueryConnectionClientStateResponse): _192.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionClientStateResponseProtoMsg): _192.QueryConnectionClientStateResponse;
                    toProto(message: _192.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionClientStateResponse): _192.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _192.QueryConnectionConsensusStateRequest;
                    toJSON(message: _192.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionConsensusStateRequest>): _192.QueryConnectionConsensusStateRequest;
                    fromAmino(object: _192.QueryConnectionConsensusStateRequestAmino): _192.QueryConnectionConsensusStateRequest;
                    toAmino(message: _192.QueryConnectionConsensusStateRequest): _192.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _192.QueryConnectionConsensusStateRequestAminoMsg): _192.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _192.QueryConnectionConsensusStateRequest): _192.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionConsensusStateRequestProtoMsg): _192.QueryConnectionConsensusStateRequest;
                    toProto(message: _192.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionConsensusStateRequest): _192.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _192.QueryConnectionConsensusStateResponse;
                    toJSON(message: _192.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionConsensusStateResponse>): _192.QueryConnectionConsensusStateResponse;
                    fromAmino(object: _192.QueryConnectionConsensusStateResponseAmino): _192.QueryConnectionConsensusStateResponse;
                    toAmino(message: _192.QueryConnectionConsensusStateResponse): _192.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _192.QueryConnectionConsensusStateResponseAminoMsg): _192.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _192.QueryConnectionConsensusStateResponse): _192.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionConsensusStateResponseProtoMsg): _192.QueryConnectionConsensusStateResponse;
                    toProto(message: _192.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionConsensusStateResponse): _192.QueryConnectionConsensusStateResponseProtoMsg;
                };
                QueryConnectionParamsRequest: {
                    typeUrl: string;
                    encode(_: _192.QueryConnectionParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionParamsRequest;
                    fromJSON(_: any): _192.QueryConnectionParamsRequest;
                    toJSON(_: _192.QueryConnectionParamsRequest): unknown;
                    fromPartial(_: Partial<_192.QueryConnectionParamsRequest>): _192.QueryConnectionParamsRequest;
                    fromAmino(_: _192.QueryConnectionParamsRequestAmino): _192.QueryConnectionParamsRequest;
                    toAmino(_: _192.QueryConnectionParamsRequest): _192.QueryConnectionParamsRequestAmino;
                    fromAminoMsg(object: _192.QueryConnectionParamsRequestAminoMsg): _192.QueryConnectionParamsRequest;
                    toAminoMsg(message: _192.QueryConnectionParamsRequest): _192.QueryConnectionParamsRequestAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionParamsRequestProtoMsg): _192.QueryConnectionParamsRequest;
                    toProto(message: _192.QueryConnectionParamsRequest): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionParamsRequest): _192.QueryConnectionParamsRequestProtoMsg;
                };
                QueryConnectionParamsResponse: {
                    typeUrl: string;
                    encode(message: _192.QueryConnectionParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.QueryConnectionParamsResponse;
                    fromJSON(object: any): _192.QueryConnectionParamsResponse;
                    toJSON(message: _192.QueryConnectionParamsResponse): unknown;
                    fromPartial(object: Partial<_192.QueryConnectionParamsResponse>): _192.QueryConnectionParamsResponse;
                    fromAmino(object: _192.QueryConnectionParamsResponseAmino): _192.QueryConnectionParamsResponse;
                    toAmino(message: _192.QueryConnectionParamsResponse): _192.QueryConnectionParamsResponseAmino;
                    fromAminoMsg(object: _192.QueryConnectionParamsResponseAminoMsg): _192.QueryConnectionParamsResponse;
                    toAminoMsg(message: _192.QueryConnectionParamsResponse): _192.QueryConnectionParamsResponseAminoMsg;
                    fromProtoMsg(message: _192.QueryConnectionParamsResponseProtoMsg): _192.QueryConnectionParamsResponse;
                    toProto(message: _192.QueryConnectionParamsResponse): Uint8Array;
                    toProtoMsg(message: _192.QueryConnectionParamsResponse): _192.QueryConnectionParamsResponseProtoMsg;
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
                stateFromJSON(object: any): _190.State;
                stateToJSON(object: _190.State): string;
                State: typeof _190.State;
                StateSDKType: typeof _190.State;
                StateAmino: typeof _190.State;
                ConnectionEnd: {
                    typeUrl: string;
                    encode(message: _190.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ConnectionEnd;
                    fromJSON(object: any): _190.ConnectionEnd;
                    toJSON(message: _190.ConnectionEnd): unknown;
                    fromPartial(object: Partial<_190.ConnectionEnd>): _190.ConnectionEnd;
                    fromAmino(object: _190.ConnectionEndAmino): _190.ConnectionEnd;
                    toAmino(message: _190.ConnectionEnd): _190.ConnectionEndAmino;
                    fromAminoMsg(object: _190.ConnectionEndAminoMsg): _190.ConnectionEnd;
                    toAminoMsg(message: _190.ConnectionEnd): _190.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _190.ConnectionEndProtoMsg): _190.ConnectionEnd;
                    toProto(message: _190.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _190.ConnectionEnd): _190.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    encode(message: _190.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.IdentifiedConnection;
                    fromJSON(object: any): _190.IdentifiedConnection;
                    toJSON(message: _190.IdentifiedConnection): unknown;
                    fromPartial(object: Partial<_190.IdentifiedConnection>): _190.IdentifiedConnection;
                    fromAmino(object: _190.IdentifiedConnectionAmino): _190.IdentifiedConnection;
                    toAmino(message: _190.IdentifiedConnection): _190.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _190.IdentifiedConnectionAminoMsg): _190.IdentifiedConnection;
                    toAminoMsg(message: _190.IdentifiedConnection): _190.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _190.IdentifiedConnectionProtoMsg): _190.IdentifiedConnection;
                    toProto(message: _190.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _190.IdentifiedConnection): _190.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    encode(message: _190.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Counterparty;
                    fromJSON(object: any): _190.Counterparty;
                    toJSON(message: _190.Counterparty): unknown;
                    fromPartial(object: Partial<_190.Counterparty>): _190.Counterparty;
                    fromAmino(object: _190.CounterpartyAmino): _190.Counterparty;
                    toAmino(message: _190.Counterparty): _190.CounterpartyAmino;
                    fromAminoMsg(object: _190.CounterpartyAminoMsg): _190.Counterparty;
                    toAminoMsg(message: _190.Counterparty): _190.CounterpartyAminoMsg;
                    fromProtoMsg(message: _190.CounterpartyProtoMsg): _190.Counterparty;
                    toProto(message: _190.Counterparty): Uint8Array;
                    toProtoMsg(message: _190.Counterparty): _190.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    encode(message: _190.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ClientPaths;
                    fromJSON(object: any): _190.ClientPaths;
                    toJSON(message: _190.ClientPaths): unknown;
                    fromPartial(object: Partial<_190.ClientPaths>): _190.ClientPaths;
                    fromAmino(object: _190.ClientPathsAmino): _190.ClientPaths;
                    toAmino(message: _190.ClientPaths): _190.ClientPathsAmino;
                    fromAminoMsg(object: _190.ClientPathsAminoMsg): _190.ClientPaths;
                    toAminoMsg(message: _190.ClientPaths): _190.ClientPathsAminoMsg;
                    fromProtoMsg(message: _190.ClientPathsProtoMsg): _190.ClientPaths;
                    toProto(message: _190.ClientPaths): Uint8Array;
                    toProtoMsg(message: _190.ClientPaths): _190.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    encode(message: _190.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.ConnectionPaths;
                    fromJSON(object: any): _190.ConnectionPaths;
                    toJSON(message: _190.ConnectionPaths): unknown;
                    fromPartial(object: Partial<_190.ConnectionPaths>): _190.ConnectionPaths;
                    fromAmino(object: _190.ConnectionPathsAmino): _190.ConnectionPaths;
                    toAmino(message: _190.ConnectionPaths): _190.ConnectionPathsAmino;
                    fromAminoMsg(object: _190.ConnectionPathsAminoMsg): _190.ConnectionPaths;
                    toAminoMsg(message: _190.ConnectionPaths): _190.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _190.ConnectionPathsProtoMsg): _190.ConnectionPaths;
                    toProto(message: _190.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _190.ConnectionPaths): _190.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    encode(message: _190.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Version;
                    fromJSON(object: any): _190.Version;
                    toJSON(message: _190.Version): unknown;
                    fromPartial(object: Partial<_190.Version>): _190.Version;
                    fromAmino(object: _190.VersionAmino): _190.Version;
                    toAmino(message: _190.Version): _190.VersionAmino;
                    fromAminoMsg(object: _190.VersionAminoMsg): _190.Version;
                    toAminoMsg(message: _190.Version): _190.VersionAminoMsg;
                    fromProtoMsg(message: _190.VersionProtoMsg): _190.Version;
                    toProto(message: _190.Version): Uint8Array;
                    toProtoMsg(message: _190.Version): _190.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    encode(message: _190.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Params;
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
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    encode(message: _194.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.GenesisState;
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
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v2: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _195.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.ClientState;
                    fromJSON(object: any): _195.ClientState;
                    toJSON(message: _195.ClientState): unknown;
                    fromPartial(object: Partial<_195.ClientState>): _195.ClientState;
                    fromAmino(object: _195.ClientStateAmino): _195.ClientState;
                    toAmino(message: _195.ClientState): _195.ClientStateAmino;
                    fromAminoMsg(object: _195.ClientStateAminoMsg): _195.ClientState;
                    toAminoMsg(message: _195.ClientState): _195.ClientStateAminoMsg;
                    fromProtoMsg(message: _195.ClientStateProtoMsg): _195.ClientState;
                    toProto(message: _195.ClientState): Uint8Array;
                    toProtoMsg(message: _195.ClientState): _195.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v2: {
                dataTypeFromJSON(object: any): _196.DataType;
                dataTypeToJSON(object: _196.DataType): string;
                DataType: typeof _196.DataType;
                DataTypeSDKType: typeof _196.DataType;
                DataTypeAmino: typeof _196.DataType;
                ClientState: {
                    typeUrl: string;
                    encode(message: _196.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ClientState;
                    fromJSON(object: any): _196.ClientState;
                    toJSON(message: _196.ClientState): unknown;
                    fromPartial(object: Partial<_196.ClientState>): _196.ClientState;
                    fromAmino(object: _196.ClientStateAmino): _196.ClientState;
                    toAmino(message: _196.ClientState): _196.ClientStateAmino;
                    fromAminoMsg(object: _196.ClientStateAminoMsg): _196.ClientState;
                    toAminoMsg(message: _196.ClientState): _196.ClientStateAminoMsg;
                    fromProtoMsg(message: _196.ClientStateProtoMsg): _196.ClientState;
                    toProto(message: _196.ClientState): Uint8Array;
                    toProtoMsg(message: _196.ClientState): _196.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _196.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ConsensusState;
                    fromJSON(object: any): _196.ConsensusState;
                    toJSON(message: _196.ConsensusState): unknown;
                    fromPartial(object: Partial<_196.ConsensusState>): _196.ConsensusState;
                    fromAmino(object: _196.ConsensusStateAmino): _196.ConsensusState;
                    toAmino(message: _196.ConsensusState): _196.ConsensusStateAmino;
                    fromAminoMsg(object: _196.ConsensusStateAminoMsg): _196.ConsensusState;
                    toAminoMsg(message: _196.ConsensusState): _196.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _196.ConsensusStateProtoMsg): _196.ConsensusState;
                    toProto(message: _196.ConsensusState): Uint8Array;
                    toProtoMsg(message: _196.ConsensusState): _196.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _196.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Header;
                    fromJSON(object: any): _196.Header;
                    toJSON(message: _196.Header): unknown;
                    fromPartial(object: Partial<_196.Header>): _196.Header;
                    fromAmino(object: _196.HeaderAmino): _196.Header;
                    toAmino(message: _196.Header): _196.HeaderAmino;
                    fromAminoMsg(object: _196.HeaderAminoMsg): _196.Header;
                    toAminoMsg(message: _196.Header): _196.HeaderAminoMsg;
                    fromProtoMsg(message: _196.HeaderProtoMsg): _196.Header;
                    toProto(message: _196.Header): Uint8Array;
                    toProtoMsg(message: _196.Header): _196.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _196.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.Misbehaviour;
                    fromJSON(object: any): _196.Misbehaviour;
                    toJSON(message: _196.Misbehaviour): unknown;
                    fromPartial(object: Partial<_196.Misbehaviour>): _196.Misbehaviour;
                    fromAmino(object: _196.MisbehaviourAmino): _196.Misbehaviour;
                    toAmino(message: _196.Misbehaviour): _196.MisbehaviourAmino;
                    fromAminoMsg(object: _196.MisbehaviourAminoMsg): _196.Misbehaviour;
                    toAminoMsg(message: _196.Misbehaviour): _196.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _196.MisbehaviourProtoMsg): _196.Misbehaviour;
                    toProto(message: _196.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _196.Misbehaviour): _196.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _196.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.SignatureAndData;
                    fromJSON(object: any): _196.SignatureAndData;
                    toJSON(message: _196.SignatureAndData): unknown;
                    fromPartial(object: Partial<_196.SignatureAndData>): _196.SignatureAndData;
                    fromAmino(object: _196.SignatureAndDataAmino): _196.SignatureAndData;
                    toAmino(message: _196.SignatureAndData): _196.SignatureAndDataAmino;
                    fromAminoMsg(object: _196.SignatureAndDataAminoMsg): _196.SignatureAndData;
                    toAminoMsg(message: _196.SignatureAndData): _196.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _196.SignatureAndDataProtoMsg): _196.SignatureAndData;
                    toProto(message: _196.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _196.SignatureAndData): _196.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _196.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.TimestampedSignatureData;
                    fromJSON(object: any): _196.TimestampedSignatureData;
                    toJSON(message: _196.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_196.TimestampedSignatureData>): _196.TimestampedSignatureData;
                    fromAmino(object: _196.TimestampedSignatureDataAmino): _196.TimestampedSignatureData;
                    toAmino(message: _196.TimestampedSignatureData): _196.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _196.TimestampedSignatureDataAminoMsg): _196.TimestampedSignatureData;
                    toAminoMsg(message: _196.TimestampedSignatureData): _196.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _196.TimestampedSignatureDataProtoMsg): _196.TimestampedSignatureData;
                    toProto(message: _196.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _196.TimestampedSignatureData): _196.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _196.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.SignBytes;
                    fromJSON(object: any): _196.SignBytes;
                    toJSON(message: _196.SignBytes): unknown;
                    fromPartial(object: Partial<_196.SignBytes>): _196.SignBytes;
                    fromAmino(object: _196.SignBytesAmino): _196.SignBytes;
                    toAmino(message: _196.SignBytes): _196.SignBytesAmino;
                    fromAminoMsg(object: _196.SignBytesAminoMsg): _196.SignBytes;
                    toAminoMsg(message: _196.SignBytes): _196.SignBytesAminoMsg;
                    fromProtoMsg(message: _196.SignBytesProtoMsg): _196.SignBytes;
                    toProto(message: _196.SignBytes): Uint8Array;
                    toProtoMsg(message: _196.SignBytes): _196.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _196.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.HeaderData;
                    fromJSON(object: any): _196.HeaderData;
                    toJSON(message: _196.HeaderData): unknown;
                    fromPartial(object: Partial<_196.HeaderData>): _196.HeaderData;
                    fromAmino(object: _196.HeaderDataAmino): _196.HeaderData;
                    toAmino(message: _196.HeaderData): _196.HeaderDataAmino;
                    fromAminoMsg(object: _196.HeaderDataAminoMsg): _196.HeaderData;
                    toAminoMsg(message: _196.HeaderData): _196.HeaderDataAminoMsg;
                    fromProtoMsg(message: _196.HeaderDataProtoMsg): _196.HeaderData;
                    toProto(message: _196.HeaderData): Uint8Array;
                    toProtoMsg(message: _196.HeaderData): _196.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    encode(message: _196.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ClientStateData;
                    fromJSON(object: any): _196.ClientStateData;
                    toJSON(message: _196.ClientStateData): unknown;
                    fromPartial(object: Partial<_196.ClientStateData>): _196.ClientStateData;
                    fromAmino(object: _196.ClientStateDataAmino): _196.ClientStateData;
                    toAmino(message: _196.ClientStateData): _196.ClientStateDataAmino;
                    fromAminoMsg(object: _196.ClientStateDataAminoMsg): _196.ClientStateData;
                    toAminoMsg(message: _196.ClientStateData): _196.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _196.ClientStateDataProtoMsg): _196.ClientStateData;
                    toProto(message: _196.ClientStateData): Uint8Array;
                    toProtoMsg(message: _196.ClientStateData): _196.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    encode(message: _196.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ConsensusStateData;
                    fromJSON(object: any): _196.ConsensusStateData;
                    toJSON(message: _196.ConsensusStateData): unknown;
                    fromPartial(object: Partial<_196.ConsensusStateData>): _196.ConsensusStateData;
                    fromAmino(object: _196.ConsensusStateDataAmino): _196.ConsensusStateData;
                    toAmino(message: _196.ConsensusStateData): _196.ConsensusStateDataAmino;
                    fromAminoMsg(object: _196.ConsensusStateDataAminoMsg): _196.ConsensusStateData;
                    toAminoMsg(message: _196.ConsensusStateData): _196.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _196.ConsensusStateDataProtoMsg): _196.ConsensusStateData;
                    toProto(message: _196.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _196.ConsensusStateData): _196.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    encode(message: _196.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ConnectionStateData;
                    fromJSON(object: any): _196.ConnectionStateData;
                    toJSON(message: _196.ConnectionStateData): unknown;
                    fromPartial(object: Partial<_196.ConnectionStateData>): _196.ConnectionStateData;
                    fromAmino(object: _196.ConnectionStateDataAmino): _196.ConnectionStateData;
                    toAmino(message: _196.ConnectionStateData): _196.ConnectionStateDataAmino;
                    fromAminoMsg(object: _196.ConnectionStateDataAminoMsg): _196.ConnectionStateData;
                    toAminoMsg(message: _196.ConnectionStateData): _196.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _196.ConnectionStateDataProtoMsg): _196.ConnectionStateData;
                    toProto(message: _196.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _196.ConnectionStateData): _196.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    encode(message: _196.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.ChannelStateData;
                    fromJSON(object: any): _196.ChannelStateData;
                    toJSON(message: _196.ChannelStateData): unknown;
                    fromPartial(object: Partial<_196.ChannelStateData>): _196.ChannelStateData;
                    fromAmino(object: _196.ChannelStateDataAmino): _196.ChannelStateData;
                    toAmino(message: _196.ChannelStateData): _196.ChannelStateDataAmino;
                    fromAminoMsg(object: _196.ChannelStateDataAminoMsg): _196.ChannelStateData;
                    toAminoMsg(message: _196.ChannelStateData): _196.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _196.ChannelStateDataProtoMsg): _196.ChannelStateData;
                    toProto(message: _196.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _196.ChannelStateData): _196.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    encode(message: _196.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.PacketCommitmentData;
                    fromJSON(object: any): _196.PacketCommitmentData;
                    toJSON(message: _196.PacketCommitmentData): unknown;
                    fromPartial(object: Partial<_196.PacketCommitmentData>): _196.PacketCommitmentData;
                    fromAmino(object: _196.PacketCommitmentDataAmino): _196.PacketCommitmentData;
                    toAmino(message: _196.PacketCommitmentData): _196.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _196.PacketCommitmentDataAminoMsg): _196.PacketCommitmentData;
                    toAminoMsg(message: _196.PacketCommitmentData): _196.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _196.PacketCommitmentDataProtoMsg): _196.PacketCommitmentData;
                    toProto(message: _196.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _196.PacketCommitmentData): _196.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    encode(message: _196.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.PacketAcknowledgementData;
                    fromJSON(object: any): _196.PacketAcknowledgementData;
                    toJSON(message: _196.PacketAcknowledgementData): unknown;
                    fromPartial(object: Partial<_196.PacketAcknowledgementData>): _196.PacketAcknowledgementData;
                    fromAmino(object: _196.PacketAcknowledgementDataAmino): _196.PacketAcknowledgementData;
                    toAmino(message: _196.PacketAcknowledgementData): _196.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _196.PacketAcknowledgementDataAminoMsg): _196.PacketAcknowledgementData;
                    toAminoMsg(message: _196.PacketAcknowledgementData): _196.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _196.PacketAcknowledgementDataProtoMsg): _196.PacketAcknowledgementData;
                    toProto(message: _196.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _196.PacketAcknowledgementData): _196.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    encode(message: _196.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.PacketReceiptAbsenceData;
                    fromJSON(object: any): _196.PacketReceiptAbsenceData;
                    toJSON(message: _196.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: Partial<_196.PacketReceiptAbsenceData>): _196.PacketReceiptAbsenceData;
                    fromAmino(object: _196.PacketReceiptAbsenceDataAmino): _196.PacketReceiptAbsenceData;
                    toAmino(message: _196.PacketReceiptAbsenceData): _196.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _196.PacketReceiptAbsenceDataAminoMsg): _196.PacketReceiptAbsenceData;
                    toAminoMsg(message: _196.PacketReceiptAbsenceData): _196.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _196.PacketReceiptAbsenceDataProtoMsg): _196.PacketReceiptAbsenceData;
                    toProto(message: _196.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _196.PacketReceiptAbsenceData): _196.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    encode(message: _196.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.NextSequenceRecvData;
                    fromJSON(object: any): _196.NextSequenceRecvData;
                    toJSON(message: _196.NextSequenceRecvData): unknown;
                    fromPartial(object: Partial<_196.NextSequenceRecvData>): _196.NextSequenceRecvData;
                    fromAmino(object: _196.NextSequenceRecvDataAmino): _196.NextSequenceRecvData;
                    toAmino(message: _196.NextSequenceRecvData): _196.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _196.NextSequenceRecvDataAminoMsg): _196.NextSequenceRecvData;
                    toAminoMsg(message: _196.NextSequenceRecvData): _196.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _196.NextSequenceRecvDataProtoMsg): _196.NextSequenceRecvData;
                    toProto(message: _196.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _196.NextSequenceRecvData): _196.NextSequenceRecvDataProtoMsg;
                };
            };
            const v3: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _197.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ClientState;
                    fromJSON(object: any): _197.ClientState;
                    toJSON(message: _197.ClientState): unknown;
                    fromPartial(object: Partial<_197.ClientState>): _197.ClientState;
                    fromAmino(object: _197.ClientStateAmino): _197.ClientState;
                    toAmino(message: _197.ClientState): _197.ClientStateAmino;
                    fromAminoMsg(object: _197.ClientStateAminoMsg): _197.ClientState;
                    toAminoMsg(message: _197.ClientState): _197.ClientStateAminoMsg;
                    fromProtoMsg(message: _197.ClientStateProtoMsg): _197.ClientState;
                    toProto(message: _197.ClientState): Uint8Array;
                    toProtoMsg(message: _197.ClientState): _197.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _197.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ConsensusState;
                    fromJSON(object: any): _197.ConsensusState;
                    toJSON(message: _197.ConsensusState): unknown;
                    fromPartial(object: Partial<_197.ConsensusState>): _197.ConsensusState;
                    fromAmino(object: _197.ConsensusStateAmino): _197.ConsensusState;
                    toAmino(message: _197.ConsensusState): _197.ConsensusStateAmino;
                    fromAminoMsg(object: _197.ConsensusStateAminoMsg): _197.ConsensusState;
                    toAminoMsg(message: _197.ConsensusState): _197.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _197.ConsensusStateProtoMsg): _197.ConsensusState;
                    toProto(message: _197.ConsensusState): Uint8Array;
                    toProtoMsg(message: _197.ConsensusState): _197.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _197.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Header;
                    fromJSON(object: any): _197.Header;
                    toJSON(message: _197.Header): unknown;
                    fromPartial(object: Partial<_197.Header>): _197.Header;
                    fromAmino(object: _197.HeaderAmino): _197.Header;
                    toAmino(message: _197.Header): _197.HeaderAmino;
                    fromAminoMsg(object: _197.HeaderAminoMsg): _197.Header;
                    toAminoMsg(message: _197.Header): _197.HeaderAminoMsg;
                    fromProtoMsg(message: _197.HeaderProtoMsg): _197.Header;
                    toProto(message: _197.Header): Uint8Array;
                    toProtoMsg(message: _197.Header): _197.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _197.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Misbehaviour;
                    fromJSON(object: any): _197.Misbehaviour;
                    toJSON(message: _197.Misbehaviour): unknown;
                    fromPartial(object: Partial<_197.Misbehaviour>): _197.Misbehaviour;
                    fromAmino(object: _197.MisbehaviourAmino): _197.Misbehaviour;
                    toAmino(message: _197.Misbehaviour): _197.MisbehaviourAmino;
                    fromAminoMsg(object: _197.MisbehaviourAminoMsg): _197.Misbehaviour;
                    toAminoMsg(message: _197.Misbehaviour): _197.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _197.MisbehaviourProtoMsg): _197.Misbehaviour;
                    toProto(message: _197.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _197.Misbehaviour): _197.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    encode(message: _197.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.SignatureAndData;
                    fromJSON(object: any): _197.SignatureAndData;
                    toJSON(message: _197.SignatureAndData): unknown;
                    fromPartial(object: Partial<_197.SignatureAndData>): _197.SignatureAndData;
                    fromAmino(object: _197.SignatureAndDataAmino): _197.SignatureAndData;
                    toAmino(message: _197.SignatureAndData): _197.SignatureAndDataAmino;
                    fromAminoMsg(object: _197.SignatureAndDataAminoMsg): _197.SignatureAndData;
                    toAminoMsg(message: _197.SignatureAndData): _197.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _197.SignatureAndDataProtoMsg): _197.SignatureAndData;
                    toProto(message: _197.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _197.SignatureAndData): _197.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    encode(message: _197.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.TimestampedSignatureData;
                    fromJSON(object: any): _197.TimestampedSignatureData;
                    toJSON(message: _197.TimestampedSignatureData): unknown;
                    fromPartial(object: Partial<_197.TimestampedSignatureData>): _197.TimestampedSignatureData;
                    fromAmino(object: _197.TimestampedSignatureDataAmino): _197.TimestampedSignatureData;
                    toAmino(message: _197.TimestampedSignatureData): _197.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _197.TimestampedSignatureDataAminoMsg): _197.TimestampedSignatureData;
                    toAminoMsg(message: _197.TimestampedSignatureData): _197.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _197.TimestampedSignatureDataProtoMsg): _197.TimestampedSignatureData;
                    toProto(message: _197.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _197.TimestampedSignatureData): _197.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    encode(message: _197.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.SignBytes;
                    fromJSON(object: any): _197.SignBytes;
                    toJSON(message: _197.SignBytes): unknown;
                    fromPartial(object: Partial<_197.SignBytes>): _197.SignBytes;
                    fromAmino(object: _197.SignBytesAmino): _197.SignBytes;
                    toAmino(message: _197.SignBytes): _197.SignBytesAmino;
                    fromAminoMsg(object: _197.SignBytesAminoMsg): _197.SignBytes;
                    toAminoMsg(message: _197.SignBytes): _197.SignBytesAminoMsg;
                    fromProtoMsg(message: _197.SignBytesProtoMsg): _197.SignBytes;
                    toProto(message: _197.SignBytes): Uint8Array;
                    toProtoMsg(message: _197.SignBytes): _197.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    encode(message: _197.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.HeaderData;
                    fromJSON(object: any): _197.HeaderData;
                    toJSON(message: _197.HeaderData): unknown;
                    fromPartial(object: Partial<_197.HeaderData>): _197.HeaderData;
                    fromAmino(object: _197.HeaderDataAmino): _197.HeaderData;
                    toAmino(message: _197.HeaderData): _197.HeaderDataAmino;
                    fromAminoMsg(object: _197.HeaderDataAminoMsg): _197.HeaderData;
                    toAminoMsg(message: _197.HeaderData): _197.HeaderDataAminoMsg;
                    fromProtoMsg(message: _197.HeaderDataProtoMsg): _197.HeaderData;
                    toProto(message: _197.HeaderData): Uint8Array;
                    toProtoMsg(message: _197.HeaderData): _197.HeaderDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    encode(message: _198.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ClientState;
                    fromJSON(object: any): _198.ClientState;
                    toJSON(message: _198.ClientState): unknown;
                    fromPartial(object: Partial<_198.ClientState>): _198.ClientState;
                    fromAmino(object: _198.ClientStateAmino): _198.ClientState;
                    toAmino(message: _198.ClientState): _198.ClientStateAmino;
                    fromAminoMsg(object: _198.ClientStateAminoMsg): _198.ClientState;
                    toAminoMsg(message: _198.ClientState): _198.ClientStateAminoMsg;
                    fromProtoMsg(message: _198.ClientStateProtoMsg): _198.ClientState;
                    toProto(message: _198.ClientState): Uint8Array;
                    toProtoMsg(message: _198.ClientState): _198.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    encode(message: _198.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.ConsensusState;
                    fromJSON(object: any): _198.ConsensusState;
                    toJSON(message: _198.ConsensusState): unknown;
                    fromPartial(object: Partial<_198.ConsensusState>): _198.ConsensusState;
                    fromAmino(object: _198.ConsensusStateAmino): _198.ConsensusState;
                    toAmino(message: _198.ConsensusState): _198.ConsensusStateAmino;
                    fromAminoMsg(object: _198.ConsensusStateAminoMsg): _198.ConsensusState;
                    toAminoMsg(message: _198.ConsensusState): _198.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _198.ConsensusStateProtoMsg): _198.ConsensusState;
                    toProto(message: _198.ConsensusState): Uint8Array;
                    toProtoMsg(message: _198.ConsensusState): _198.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    encode(message: _198.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Misbehaviour;
                    fromJSON(object: any): _198.Misbehaviour;
                    toJSON(message: _198.Misbehaviour): unknown;
                    fromPartial(object: Partial<_198.Misbehaviour>): _198.Misbehaviour;
                    fromAmino(object: _198.MisbehaviourAmino): _198.Misbehaviour;
                    toAmino(message: _198.Misbehaviour): _198.MisbehaviourAmino;
                    fromAminoMsg(object: _198.MisbehaviourAminoMsg): _198.Misbehaviour;
                    toAminoMsg(message: _198.Misbehaviour): _198.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _198.MisbehaviourProtoMsg): _198.Misbehaviour;
                    toProto(message: _198.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _198.Misbehaviour): _198.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _198.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Header;
                    fromJSON(object: any): _198.Header;
                    toJSON(message: _198.Header): unknown;
                    fromPartial(object: Partial<_198.Header>): _198.Header;
                    fromAmino(object: _198.HeaderAmino): _198.Header;
                    toAmino(message: _198.Header): _198.HeaderAmino;
                    fromAminoMsg(object: _198.HeaderAminoMsg): _198.Header;
                    toAminoMsg(message: _198.Header): _198.HeaderAminoMsg;
                    fromProtoMsg(message: _198.HeaderProtoMsg): _198.Header;
                    toProto(message: _198.Header): Uint8Array;
                    toProtoMsg(message: _198.Header): _198.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    encode(message: _198.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Fraction;
                    fromJSON(object: any): _198.Fraction;
                    toJSON(message: _198.Fraction): unknown;
                    fromPartial(object: Partial<_198.Fraction>): _198.Fraction;
                    fromAmino(object: _198.FractionAmino): _198.Fraction;
                    toAmino(message: _198.Fraction): _198.FractionAmino;
                    fromAminoMsg(object: _198.FractionAminoMsg): _198.Fraction;
                    toAminoMsg(message: _198.Fraction): _198.FractionAminoMsg;
                    fromProtoMsg(message: _198.FractionProtoMsg): _198.Fraction;
                    toProto(message: _198.Fraction): Uint8Array;
                    toProtoMsg(message: _198.Fraction): _198.FractionProtoMsg;
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
                        v1: _333.MsgClientImpl;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _334.MsgClientImpl;
                        };
                    };
                    transfer: {
                        v1: _335.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _336.MsgClientImpl;
                    };
                    client: {
                        v1: _337.MsgClientImpl;
                    };
                    connection: {
                        v1: _338.MsgClientImpl;
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
                            incentivizedPackets(request: _164.QueryIncentivizedPacketsRequest): Promise<_164.QueryIncentivizedPacketsResponse>;
                            incentivizedPacket(request: _164.QueryIncentivizedPacketRequest): Promise<_164.QueryIncentivizedPacketResponse>;
                            incentivizedPacketsForChannel(request: _164.QueryIncentivizedPacketsForChannelRequest): Promise<_164.QueryIncentivizedPacketsForChannelResponse>;
                            totalRecvFees(request: _164.QueryTotalRecvFeesRequest): Promise<_164.QueryTotalRecvFeesResponse>;
                            totalAckFees(request: _164.QueryTotalAckFeesRequest): Promise<_164.QueryTotalAckFeesResponse>;
                            totalTimeoutFees(request: _164.QueryTotalTimeoutFeesRequest): Promise<_164.QueryTotalTimeoutFeesResponse>;
                            payee(request: _164.QueryPayeeRequest): Promise<_164.QueryPayeeResponse>;
                            counterpartyPayee(request: _164.QueryCounterpartyPayeeRequest): Promise<_164.QueryCounterpartyPayeeResponse>;
                            feeEnabledChannels(request: _164.QueryFeeEnabledChannelsRequest): Promise<_164.QueryFeeEnabledChannelsResponse>;
                            feeEnabledChannel(request: _164.QueryFeeEnabledChannelRequest): Promise<_164.QueryFeeEnabledChannelResponse>;
                        };
                    };
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _167.QueryInterchainAccountRequest): Promise<_167.QueryInterchainAccountResponse>;
                                params(request?: _167.QueryParamsRequest): Promise<_167.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _171.QueryParamsRequest): Promise<_171.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _177.QueryDenomTraceRequest): Promise<_177.QueryDenomTraceResponse>;
                            denomTraces(request?: _177.QueryDenomTracesRequest): Promise<_177.QueryDenomTracesResponse>;
                            params(request?: _177.QueryParamsRequest): Promise<_177.QueryParamsResponse>;
                            denomHash(request: _177.QueryDenomHashRequest): Promise<_177.QueryDenomHashResponse>;
                            escrowAddress(request: _177.QueryEscrowAddressRequest): Promise<_177.QueryEscrowAddressResponse>;
                            totalEscrowForDenom(request: _177.QueryTotalEscrowForDenomRequest): Promise<_177.QueryTotalEscrowForDenomResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _183.QueryChannelRequest): Promise<_183.QueryChannelResponse>;
                            channels(request?: _183.QueryChannelsRequest): Promise<_183.QueryChannelsResponse>;
                            connectionChannels(request: _183.QueryConnectionChannelsRequest): Promise<_183.QueryConnectionChannelsResponse>;
                            channelClientState(request: _183.QueryChannelClientStateRequest): Promise<_183.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _183.QueryChannelConsensusStateRequest): Promise<_183.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _183.QueryPacketCommitmentRequest): Promise<_183.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _183.QueryPacketCommitmentsRequest): Promise<_183.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _183.QueryPacketReceiptRequest): Promise<_183.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _183.QueryPacketAcknowledgementRequest): Promise<_183.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _183.QueryPacketAcknowledgementsRequest): Promise<_183.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _183.QueryUnreceivedPacketsRequest): Promise<_183.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _183.QueryUnreceivedAcksRequest): Promise<_183.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _183.QueryNextSequenceReceiveRequest): Promise<_183.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _187.QueryClientStateRequest): Promise<_187.QueryClientStateResponse>;
                            clientStates(request?: _187.QueryClientStatesRequest): Promise<_187.QueryClientStatesResponse>;
                            consensusState(request: _187.QueryConsensusStateRequest): Promise<_187.QueryConsensusStateResponse>;
                            consensusStates(request: _187.QueryConsensusStatesRequest): Promise<_187.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _187.QueryConsensusStateHeightsRequest): Promise<_187.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _187.QueryClientStatusRequest): Promise<_187.QueryClientStatusResponse>;
                            clientParams(request?: _187.QueryClientParamsRequest): Promise<_187.QueryClientParamsResponse>;
                            upgradedClientState(request?: _187.QueryUpgradedClientStateRequest): Promise<_187.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _187.QueryUpgradedConsensusStateRequest): Promise<_187.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _192.QueryConnectionRequest): Promise<_192.QueryConnectionResponse>;
                            connections(request?: _192.QueryConnectionsRequest): Promise<_192.QueryConnectionsResponse>;
                            clientConnections(request: _192.QueryClientConnectionsRequest): Promise<_192.QueryClientConnectionsResponse>;
                            connectionClientState(request: _192.QueryConnectionClientStateRequest): Promise<_192.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _192.QueryConnectionConsensusStateRequest): Promise<_192.QueryConnectionConsensusStateResponse>;
                            connectionParams(request?: _192.QueryConnectionParamsRequest): Promise<_192.QueryConnectionParamsResponse>;
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
                        v1: _319.LCDQueryClient;
                    };
                    interchain_accounts: {
                        controller: {
                            v1: _320.LCDQueryClient;
                        };
                        host: {
                            v1: _321.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _322.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _323.LCDQueryClient;
                    };
                    client: {
                        v1: _324.LCDQueryClient;
                    };
                    connection: {
                        v1: _325.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
