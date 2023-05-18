import * as _94 from "./applications/interchain_accounts/controller/v1/controller";
import * as _95 from "./applications/interchain_accounts/controller/v1/query";
import * as _96 from "./applications/interchain_accounts/host/v1/host";
import * as _97 from "./applications/interchain_accounts/host/v1/query";
import * as _98 from "./applications/interchain_accounts/v1/account";
import * as _99 from "./applications/interchain_accounts/v1/genesis";
import * as _100 from "./applications/interchain_accounts/v1/metadata";
import * as _101 from "./applications/interchain_accounts/v1/packet";
import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/types/v1/genesis";
import * as _121 from "./lightclients/localhost/v1/localhost";
import * as _122 from "./lightclients/solomachine/v1/solomachine";
import * as _123 from "./lightclients/solomachine/v2/solomachine";
import * as _124 from "./lightclients/tendermint/v1/tendermint";
import * as _203 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _204 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _205 from "./applications/transfer/v1/query.lcd";
import * as _206 from "./core/channel/v1/query.lcd";
import * as _207 from "./core/client/v1/query.lcd";
import * as _208 from "./core/connection/v1/query.lcd";
import * as _209 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _210 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _211 from "./applications/transfer/v1/query.rpc.Query";
import * as _212 from "./core/channel/v1/query.rpc.Query";
import * as _213 from "./core/client/v1/query.rpc.Query";
import * as _214 from "./core/connection/v1/query.rpc.Query";
import * as _215 from "./applications/transfer/v1/tx.rpc.msg";
import * as _216 from "./core/channel/v1/tx.rpc.msg";
import * as _217 from "./core/client/v1/tx.rpc.msg";
import * as _218 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace interchain_accounts {
            namespace controller {
                const v1: {
                    QueryClientImpl: typeof _209.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        interchainAccount(request: _95.QueryInterchainAccountRequest): Promise<_95.QueryInterchainAccountResponse>;
                        params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _203.LCDQueryClient;
                    QueryInterchainAccountRequest: {
                        encode(message: _95.QueryInterchainAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryInterchainAccountRequest;
                        fromJSON(object: any): _95.QueryInterchainAccountRequest;
                        toJSON(message: _95.QueryInterchainAccountRequest): unknown;
                        fromPartial(object: {
                            owner?: string;
                            connectionId?: string;
                        }): _95.QueryInterchainAccountRequest;
                    };
                    QueryInterchainAccountResponse: {
                        encode(message: _95.QueryInterchainAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryInterchainAccountResponse;
                        fromJSON(object: any): _95.QueryInterchainAccountResponse;
                        toJSON(message: _95.QueryInterchainAccountResponse): unknown;
                        fromPartial(object: {
                            address?: string;
                        }): _95.QueryInterchainAccountResponse;
                    };
                    QueryParamsRequest: {
                        encode(_: _95.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryParamsRequest;
                        fromJSON(_: any): _95.QueryParamsRequest;
                        toJSON(_: _95.QueryParamsRequest): unknown;
                        fromPartial(_: {}): _95.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _95.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryParamsResponse;
                        fromJSON(object: any): _95.QueryParamsResponse;
                        toJSON(message: _95.QueryParamsResponse): unknown;
                        fromPartial(object: {
                            params?: {
                                controllerEnabled?: boolean;
                            };
                        }): _95.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _94.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Params;
                        fromJSON(object: any): _94.Params;
                        toJSON(message: _94.Params): unknown;
                        fromPartial(object: {
                            controllerEnabled?: boolean;
                        }): _94.Params;
                    };
                };
            }
            namespace host {
                const v1: {
                    QueryClientImpl: typeof _210.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                    };
                    LCDQueryClient: typeof _204.LCDQueryClient;
                    QueryParamsRequest: {
                        encode(_: _97.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryParamsRequest;
                        fromJSON(_: any): _97.QueryParamsRequest;
                        toJSON(_: _97.QueryParamsRequest): unknown;
                        fromPartial(_: {}): _97.QueryParamsRequest;
                    };
                    QueryParamsResponse: {
                        encode(message: _97.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryParamsResponse;
                        fromJSON(object: any): _97.QueryParamsResponse;
                        toJSON(message: _97.QueryParamsResponse): unknown;
                        fromPartial(object: {
                            params?: {
                                hostEnabled?: boolean;
                                allowMessages?: string[];
                            };
                        }): _97.QueryParamsResponse;
                    };
                    Params: {
                        encode(message: _96.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.Params;
                        fromJSON(object: any): _96.Params;
                        toJSON(message: _96.Params): unknown;
                        fromPartial(object: {
                            hostEnabled?: boolean;
                            allowMessages?: string[];
                        }): _96.Params;
                    };
                };
            }
            const v1: {
                typeFromJSON(object: any): _101.Type;
                typeToJSON(object: _101.Type): string;
                Type: typeof _101.Type;
                TypeSDKType: typeof _101.Type;
                InterchainAccountPacketData: {
                    encode(message: _101.InterchainAccountPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.InterchainAccountPacketData;
                    fromJSON(object: any): _101.InterchainAccountPacketData;
                    toJSON(message: _101.InterchainAccountPacketData): unknown;
                    fromPartial(object: {
                        type?: _101.Type;
                        data?: Uint8Array;
                        memo?: string;
                    }): _101.InterchainAccountPacketData;
                };
                CosmosTx: {
                    encode(message: _101.CosmosTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.CosmosTx;
                    fromJSON(object: any): _101.CosmosTx;
                    toJSON(message: _101.CosmosTx): unknown;
                    fromPartial(object: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    }): _101.CosmosTx;
                };
                Metadata: {
                    encode(message: _100.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Metadata;
                    fromJSON(object: any): _100.Metadata;
                    toJSON(message: _100.Metadata): unknown;
                    fromPartial(object: {
                        version?: string;
                        controllerConnectionId?: string;
                        hostConnectionId?: string;
                        address?: string;
                        encoding?: string;
                        txType?: string;
                    }): _100.Metadata;
                };
                GenesisState: {
                    encode(message: _99.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.GenesisState;
                    fromJSON(object: any): _99.GenesisState;
                    toJSON(message: _99.GenesisState): unknown;
                    fromPartial(object: {
                        controllerGenesisState?: {
                            activeChannels?: {
                                connectionId?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            interchainAccounts?: {
                                connectionId?: string;
                                portId?: string;
                                accountAddress?: string;
                            }[];
                            ports?: string[];
                            params?: {
                                controllerEnabled?: boolean;
                            };
                        };
                        hostGenesisState?: {
                            activeChannels?: {
                                connectionId?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            interchainAccounts?: {
                                connectionId?: string;
                                portId?: string;
                                accountAddress?: string;
                            }[];
                            port?: string;
                            params?: {
                                hostEnabled?: boolean;
                                allowMessages?: string[];
                            };
                        };
                    }): _99.GenesisState;
                };
                ControllerGenesisState: {
                    encode(message: _99.ControllerGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ControllerGenesisState;
                    fromJSON(object: any): _99.ControllerGenesisState;
                    toJSON(message: _99.ControllerGenesisState): unknown;
                    fromPartial(object: {
                        activeChannels?: {
                            connectionId?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        interchainAccounts?: {
                            connectionId?: string;
                            portId?: string;
                            accountAddress?: string;
                        }[];
                        ports?: string[];
                        params?: {
                            controllerEnabled?: boolean;
                        };
                    }): _99.ControllerGenesisState;
                };
                HostGenesisState: {
                    encode(message: _99.HostGenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.HostGenesisState;
                    fromJSON(object: any): _99.HostGenesisState;
                    toJSON(message: _99.HostGenesisState): unknown;
                    fromPartial(object: {
                        activeChannels?: {
                            connectionId?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        interchainAccounts?: {
                            connectionId?: string;
                            portId?: string;
                            accountAddress?: string;
                        }[];
                        port?: string;
                        params?: {
                            hostEnabled?: boolean;
                            allowMessages?: string[];
                        };
                    }): _99.HostGenesisState;
                };
                ActiveChannel: {
                    encode(message: _99.ActiveChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.ActiveChannel;
                    fromJSON(object: any): _99.ActiveChannel;
                    toJSON(message: _99.ActiveChannel): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        portId?: string;
                        channelId?: string;
                    }): _99.ActiveChannel;
                };
                RegisteredInterchainAccount: {
                    encode(message: _99.RegisteredInterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.RegisteredInterchainAccount;
                    fromJSON(object: any): _99.RegisteredInterchainAccount;
                    toJSON(message: _99.RegisteredInterchainAccount): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        portId?: string;
                        accountAddress?: string;
                    }): _99.RegisteredInterchainAccount;
                };
                InterchainAccount: {
                    encode(message: _98.InterchainAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.InterchainAccount;
                    fromJSON(object: any): _98.InterchainAccount;
                    toJSON(message: _98.InterchainAccount): unknown;
                    fromPartial(object: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        accountOwner?: string;
                    }): _98.InterchainAccount;
                };
            };
        }
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _215.MsgClientImpl;
                QueryClientImpl: typeof _211.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    denomTrace(request: _103.QueryDenomTraceRequest): Promise<_103.QueryDenomTraceResponse>;
                    denomTraces(request?: _103.QueryDenomTracesRequest): Promise<_103.QueryDenomTracesResponse>;
                    params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                    denomHash(request: _103.QueryDenomHashRequest): Promise<_103.QueryDenomHashResponse>;
                    escrowAddress(request: _103.QueryEscrowAddressRequest): Promise<_103.QueryEscrowAddressResponse>;
                };
                LCDQueryClient: typeof _205.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _105.MsgTransfer): {
                            typeUrl: string;
                            value: _105.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: ({ sourcePort, sourceChannel, token, sender, receiver, timeoutHeight, timeoutTimestamp }: _105.MsgTransfer) => {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        };
                        fromAmino: ({ source_port, source_channel, token, sender, receiver, timeout_height, timeout_timestamp }: {
                            source_port: string;
                            source_channel: string;
                            token: {
                                denom: string;
                                amount: string;
                            };
                            sender: string;
                            receiver: string;
                            timeout_height: import("../helpers").AminoHeight;
                            timeout_timestamp: string;
                        }) => _105.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    encode(message: _105.MsgTransfer, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransfer;
                    fromJSON(object: any): _105.MsgTransfer;
                    toJSON(message: _105.MsgTransfer): unknown;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        timeoutTimestamp?: string | number | import("long").default;
                    }): _105.MsgTransfer;
                };
                MsgTransferResponse: {
                    encode(_: _105.MsgTransferResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgTransferResponse;
                    fromJSON(_: any): _105.MsgTransferResponse;
                    toJSON(_: _105.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _105.MsgTransferResponse;
                };
                DenomTrace: {
                    encode(message: _104.DenomTrace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.DenomTrace;
                    fromJSON(object: any): _104.DenomTrace;
                    toJSON(message: _104.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _104.DenomTrace;
                };
                Params: {
                    encode(message: _104.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Params;
                    fromJSON(object: any): _104.Params;
                    toJSON(message: _104.Params): unknown;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _104.Params;
                };
                QueryDenomTraceRequest: {
                    encode(message: _103.QueryDenomTraceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceRequest;
                    fromJSON(object: any): _103.QueryDenomTraceRequest;
                    toJSON(message: _103.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _103.QueryDenomTraceRequest;
                };
                QueryDenomTraceResponse: {
                    encode(message: _103.QueryDenomTraceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTraceResponse;
                    fromJSON(object: any): _103.QueryDenomTraceResponse;
                    toJSON(message: _103.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _103.QueryDenomTraceResponse;
                };
                QueryDenomTracesRequest: {
                    encode(message: _103.QueryDenomTracesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesRequest;
                    fromJSON(object: any): _103.QueryDenomTracesRequest;
                    toJSON(message: _103.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _103.QueryDenomTracesRequest;
                };
                QueryDenomTracesResponse: {
                    encode(message: _103.QueryDenomTracesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomTracesResponse;
                    fromJSON(object: any): _103.QueryDenomTracesResponse;
                    toJSON(message: _103.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _103.QueryDenomTracesResponse;
                };
                QueryParamsRequest: {
                    encode(_: _103.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsRequest;
                    fromJSON(_: any): _103.QueryParamsRequest;
                    toJSON(_: _103.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _103.QueryParamsRequest;
                };
                QueryParamsResponse: {
                    encode(message: _103.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryParamsResponse;
                    fromJSON(object: any): _103.QueryParamsResponse;
                    toJSON(message: _103.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _103.QueryParamsResponse;
                };
                QueryDenomHashRequest: {
                    encode(message: _103.QueryDenomHashRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomHashRequest;
                    fromJSON(object: any): _103.QueryDenomHashRequest;
                    toJSON(message: _103.QueryDenomHashRequest): unknown;
                    fromPartial(object: {
                        trace?: string;
                    }): _103.QueryDenomHashRequest;
                };
                QueryDenomHashResponse: {
                    encode(message: _103.QueryDenomHashResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryDenomHashResponse;
                    fromJSON(object: any): _103.QueryDenomHashResponse;
                    toJSON(message: _103.QueryDenomHashResponse): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _103.QueryDenomHashResponse;
                };
                QueryEscrowAddressRequest: {
                    encode(message: _103.QueryEscrowAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryEscrowAddressRequest;
                    fromJSON(object: any): _103.QueryEscrowAddressRequest;
                    toJSON(message: _103.QueryEscrowAddressRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _103.QueryEscrowAddressRequest;
                };
                QueryEscrowAddressResponse: {
                    encode(message: _103.QueryEscrowAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryEscrowAddressResponse;
                    fromJSON(object: any): _103.QueryEscrowAddressResponse;
                    toJSON(message: _103.QueryEscrowAddressResponse): unknown;
                    fromPartial(object: {
                        escrowAddress?: string;
                    }): _103.QueryEscrowAddressResponse;
                };
                GenesisState: {
                    encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                    fromJSON(object: any): _102.GenesisState;
                    toJSON(message: _102.GenesisState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _102.GenesisState;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    encode(message: _106.FungibleTokenPacketData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.FungibleTokenPacketData;
                    fromJSON(object: any): _106.FungibleTokenPacketData;
                    toJSON(message: _106.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _106.FungibleTokenPacketData;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _216.MsgClientImpl;
                QueryClientImpl: typeof _212.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    channel(request: _109.QueryChannelRequest): Promise<_109.QueryChannelResponse>;
                    channels(request?: _109.QueryChannelsRequest): Promise<_109.QueryChannelsResponse>;
                    connectionChannels(request: _109.QueryConnectionChannelsRequest): Promise<_109.QueryConnectionChannelsResponse>;
                    channelClientState(request: _109.QueryChannelClientStateRequest): Promise<_109.QueryChannelClientStateResponse>;
                    channelConsensusState(request: _109.QueryChannelConsensusStateRequest): Promise<_109.QueryChannelConsensusStateResponse>;
                    packetCommitment(request: _109.QueryPacketCommitmentRequest): Promise<_109.QueryPacketCommitmentResponse>;
                    packetCommitments(request: _109.QueryPacketCommitmentsRequest): Promise<_109.QueryPacketCommitmentsResponse>;
                    packetReceipt(request: _109.QueryPacketReceiptRequest): Promise<_109.QueryPacketReceiptResponse>;
                    packetAcknowledgement(request: _109.QueryPacketAcknowledgementRequest): Promise<_109.QueryPacketAcknowledgementResponse>;
                    packetAcknowledgements(request: _109.QueryPacketAcknowledgementsRequest): Promise<_109.QueryPacketAcknowledgementsResponse>;
                    unreceivedPackets(request: _109.QueryUnreceivedPacketsRequest): Promise<_109.QueryUnreceivedPacketsResponse>;
                    unreceivedAcks(request: _109.QueryUnreceivedAcksRequest): Promise<_109.QueryUnreceivedAcksResponse>;
                    nextSequenceReceive(request: _109.QueryNextSequenceReceiveRequest): Promise<_109.QueryNextSequenceReceiveResponse>;
                };
                LCDQueryClient: typeof _206.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _110.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _110.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _110.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _110.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _110.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _110.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _110.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _110.MsgRecvPacket): {
                            typeUrl: string;
                            value: _110.MsgRecvPacket;
                        };
                        timeout(value: _110.MsgTimeout): {
                            typeUrl: string;
                            value: _110.MsgTimeout;
                        };
                        timeoutOnClose(value: _110.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _110.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _110.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _110.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: ({ portId, channel, signer }: _110.MsgChannelOpenInit) => {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel, signer }: {
                            port_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            signer: string;
                        }) => _110.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: ({ portId, previousChannelId, channel, counterpartyVersion, proofInit, proofHeight, signer }: _110.MsgChannelOpenTry) => {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, previous_channel_id, channel, counterparty_version, proof_init, proof_height, signer }: {
                            port_id: string;
                            previous_channel_id: string;
                            channel: {
                                state: number;
                                ordering: number;
                                counterparty: {
                                    port_id: string;
                                    channel_id: string;
                                };
                                connection_hops: string[];
                                version: string;
                            };
                            counterparty_version: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, counterpartyChannelId, counterpartyVersion, proofTry, proofHeight, signer }: _110.MsgChannelOpenAck) => {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, counterparty_channel_id, counterparty_version, proof_try, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            counterparty_channel_id: string;
                            counterparty_version: string;
                            proof_try: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofAck, proofHeight, signer }: _110.MsgChannelOpenConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_ack, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, signer }: _110.MsgChannelCloseInit) => {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, signer }: {
                            port_id: string;
                            channel_id: string;
                            signer: string;
                        }) => _110.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: ({ portId, channelId, proofInit, proofHeight, signer }: _110.MsgChannelCloseConfirm) => {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ port_id, channel_id, proof_init, proof_height, signer }: {
                            port_id: string;
                            channel_id: string;
                            proof_init: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: ({ packet, proofCommitment, proofHeight, signer }: _110.MsgRecvPacket) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_commitment, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_commitment: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofHeight, nextSequenceRecv, signer }: _110.MsgTimeout) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _110.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: ({ packet, proofUnreceived, proofClose, proofHeight, nextSequenceRecv, signer }: _110.MsgTimeoutOnClose) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        };
                        fromAmino: ({ packet, proof_unreceived, proof_close, proof_height, next_sequence_recv, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            proof_unreceived: Uint8Array;
                            proof_close: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            next_sequence_recv: string;
                            signer: string;
                        }) => _110.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: ({ packet, acknowledgement, proofAcked, proofHeight, signer }: _110.MsgAcknowledgement) => {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ packet, acknowledgement, proof_acked, proof_height, signer }: {
                            packet: {
                                sequence: string;
                                source_port: string;
                                source_channel: string;
                                destination_port: string;
                                destination_channel: string;
                                data: Uint8Array;
                                timeout_height: import("../helpers").AminoHeight;
                                timeout_timestamp: string;
                            };
                            acknowledgement: Uint8Array;
                            proof_acked: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _110.MsgAcknowledgement;
                    };
                };
                responseResultTypeFromJSON(object: any): _110.ResponseResultType;
                responseResultTypeToJSON(object: _110.ResponseResultType): string;
                ResponseResultType: typeof _110.ResponseResultType;
                ResponseResultTypeSDKType: typeof _110.ResponseResultType;
                MsgChannelOpenInit: {
                    encode(message: _110.MsgChannelOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInit;
                    fromJSON(object: any): _110.MsgChannelOpenInit;
                    toJSON(message: _110.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenInit;
                };
                MsgChannelOpenInitResponse: {
                    encode(message: _110.MsgChannelOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenInitResponse;
                    fromJSON(object: any): _110.MsgChannelOpenInitResponse;
                    toJSON(message: _110.MsgChannelOpenInitResponse): unknown;
                    fromPartial(object: {
                        channelId?: string;
                        version?: string;
                    }): _110.MsgChannelOpenInitResponse;
                };
                MsgChannelOpenTry: {
                    encode(message: _110.MsgChannelOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTry;
                    fromJSON(object: any): _110.MsgChannelOpenTry;
                    toJSON(message: _110.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenTry;
                };
                MsgChannelOpenTryResponse: {
                    encode(message: _110.MsgChannelOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenTryResponse;
                    fromJSON(object: any): _110.MsgChannelOpenTryResponse;
                    toJSON(message: _110.MsgChannelOpenTryResponse): unknown;
                    fromPartial(object: {
                        version?: string;
                    }): _110.MsgChannelOpenTryResponse;
                };
                MsgChannelOpenAck: {
                    encode(message: _110.MsgChannelOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAck;
                    fromJSON(object: any): _110.MsgChannelOpenAck;
                    toJSON(message: _110.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenAck;
                };
                MsgChannelOpenAckResponse: {
                    encode(_: _110.MsgChannelOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _110.MsgChannelOpenAckResponse;
                    toJSON(_: _110.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelOpenAckResponse;
                };
                MsgChannelOpenConfirm: {
                    encode(message: _110.MsgChannelOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirm;
                    fromJSON(object: any): _110.MsgChannelOpenConfirm;
                    toJSON(message: _110.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _110.MsgChannelOpenConfirm;
                };
                MsgChannelOpenConfirmResponse: {
                    encode(_: _110.MsgChannelOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _110.MsgChannelOpenConfirmResponse;
                    toJSON(_: _110.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelOpenConfirmResponse;
                };
                MsgChannelCloseInit: {
                    encode(message: _110.MsgChannelCloseInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInit;
                    fromJSON(object: any): _110.MsgChannelCloseInit;
                    toJSON(message: _110.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _110.MsgChannelCloseInit;
                };
                MsgChannelCloseInitResponse: {
                    encode(_: _110.MsgChannelCloseInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _110.MsgChannelCloseInitResponse;
                    toJSON(_: _110.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelCloseInitResponse;
                };
                MsgChannelCloseConfirm: {
                    encode(message: _110.MsgChannelCloseConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirm;
                    fromJSON(object: any): _110.MsgChannelCloseConfirm;
                    toJSON(message: _110.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _110.MsgChannelCloseConfirm;
                };
                MsgChannelCloseConfirmResponse: {
                    encode(_: _110.MsgChannelCloseConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _110.MsgChannelCloseConfirmResponse;
                    toJSON(_: _110.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _110.MsgChannelCloseConfirmResponse;
                };
                MsgRecvPacket: {
                    encode(message: _110.MsgRecvPacket, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacket;
                    fromJSON(object: any): _110.MsgRecvPacket;
                    toJSON(message: _110.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").default;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").default;
                                revisionHeight?: string | number | import("long").default;
                            };
                            timeoutTimestamp?: string | number | import("long").default;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _110.MsgRecvPacket;
                };
                MsgRecvPacketResponse: {
                    encode(message: _110.MsgRecvPacketResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgRecvPacketResponse;
                    fromJSON(object: any): _110.MsgRecvPacketResponse;
                    toJSON(message: _110.MsgRecvPacketResponse): unknown;
                    fromPartial(object: {
                        result?: _110.ResponseResultType;
                    }): _110.MsgRecvPacketResponse;
                };
                MsgTimeout: {
                    encode(message: _110.MsgTimeout, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeout;
                    fromJSON(object: any): _110.MsgTimeout;
                    toJSON(message: _110.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").default;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").default;
                                revisionHeight?: string | number | import("long").default;
                            };
                            timeoutTimestamp?: string | number | import("long").default;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        nextSequenceRecv?: string | number | import("long").default;
                        signer?: string;
                    }): _110.MsgTimeout;
                };
                MsgTimeoutResponse: {
                    encode(message: _110.MsgTimeoutResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutResponse;
                    fromJSON(object: any): _110.MsgTimeoutResponse;
                    toJSON(message: _110.MsgTimeoutResponse): unknown;
                    fromPartial(object: {
                        result?: _110.ResponseResultType;
                    }): _110.MsgTimeoutResponse;
                };
                MsgTimeoutOnClose: {
                    encode(message: _110.MsgTimeoutOnClose, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnClose;
                    fromJSON(object: any): _110.MsgTimeoutOnClose;
                    toJSON(message: _110.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").default;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").default;
                                revisionHeight?: string | number | import("long").default;
                            };
                            timeoutTimestamp?: string | number | import("long").default;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        nextSequenceRecv?: string | number | import("long").default;
                        signer?: string;
                    }): _110.MsgTimeoutOnClose;
                };
                MsgTimeoutOnCloseResponse: {
                    encode(message: _110.MsgTimeoutOnCloseResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgTimeoutOnCloseResponse;
                    fromJSON(object: any): _110.MsgTimeoutOnCloseResponse;
                    toJSON(message: _110.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(object: {
                        result?: _110.ResponseResultType;
                    }): _110.MsgTimeoutOnCloseResponse;
                };
                MsgAcknowledgement: {
                    encode(message: _110.MsgAcknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgement;
                    fromJSON(object: any): _110.MsgAcknowledgement;
                    toJSON(message: _110.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: string | number | import("long").default;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: string | number | import("long").default;
                                revisionHeight?: string | number | import("long").default;
                            };
                            timeoutTimestamp?: string | number | import("long").default;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _110.MsgAcknowledgement;
                };
                MsgAcknowledgementResponse: {
                    encode(message: _110.MsgAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.MsgAcknowledgementResponse;
                    fromJSON(object: any): _110.MsgAcknowledgementResponse;
                    toJSON(message: _110.MsgAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        result?: _110.ResponseResultType;
                    }): _110.MsgAcknowledgementResponse;
                };
                QueryChannelRequest: {
                    encode(message: _109.QueryChannelRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelRequest;
                    fromJSON(object: any): _109.QueryChannelRequest;
                    toJSON(message: _109.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _109.QueryChannelRequest;
                };
                QueryChannelResponse: {
                    encode(message: _109.QueryChannelResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelResponse;
                    fromJSON(object: any): _109.QueryChannelResponse;
                    toJSON(message: _109.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryChannelResponse;
                };
                QueryChannelsRequest: {
                    encode(message: _109.QueryChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsRequest;
                    fromJSON(object: any): _109.QueryChannelsRequest;
                    toJSON(message: _109.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryChannelsRequest;
                };
                QueryChannelsResponse: {
                    encode(message: _109.QueryChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelsResponse;
                    fromJSON(object: any): _109.QueryChannelsResponse;
                    toJSON(message: _109.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryChannelsResponse;
                };
                QueryConnectionChannelsRequest: {
                    encode(message: _109.QueryConnectionChannelsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _109.QueryConnectionChannelsRequest;
                    toJSON(message: _109.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryConnectionChannelsRequest;
                };
                QueryConnectionChannelsResponse: {
                    encode(message: _109.QueryConnectionChannelsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _109.QueryConnectionChannelsResponse;
                    toJSON(message: _109.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryConnectionChannelsResponse;
                };
                QueryChannelClientStateRequest: {
                    encode(message: _109.QueryChannelClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateRequest;
                    fromJSON(object: any): _109.QueryChannelClientStateRequest;
                    toJSON(message: _109.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _109.QueryChannelClientStateRequest;
                };
                QueryChannelClientStateResponse: {
                    encode(message: _109.QueryChannelClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelClientStateResponse;
                    fromJSON(object: any): _109.QueryChannelClientStateResponse;
                    toJSON(message: _109.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryChannelClientStateResponse;
                };
                QueryChannelConsensusStateRequest: {
                    encode(message: _109.QueryChannelConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _109.QueryChannelConsensusStateRequest;
                    toJSON(message: _109.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: string | number | import("long").default;
                        revisionHeight?: string | number | import("long").default;
                    }): _109.QueryChannelConsensusStateRequest;
                };
                QueryChannelConsensusStateResponse: {
                    encode(message: _109.QueryChannelConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _109.QueryChannelConsensusStateResponse;
                    toJSON(message: _109.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryChannelConsensusStateResponse;
                };
                QueryPacketCommitmentRequest: {
                    encode(message: _109.QueryPacketCommitmentRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _109.QueryPacketCommitmentRequest;
                    toJSON(message: _109.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").default;
                    }): _109.QueryPacketCommitmentRequest;
                };
                QueryPacketCommitmentResponse: {
                    encode(message: _109.QueryPacketCommitmentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _109.QueryPacketCommitmentResponse;
                    toJSON(message: _109.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryPacketCommitmentResponse;
                };
                QueryPacketCommitmentsRequest: {
                    encode(message: _109.QueryPacketCommitmentsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _109.QueryPacketCommitmentsRequest;
                    toJSON(message: _109.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryPacketCommitmentsRequest;
                };
                QueryPacketCommitmentsResponse: {
                    encode(message: _109.QueryPacketCommitmentsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _109.QueryPacketCommitmentsResponse;
                    toJSON(message: _109.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").default;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryPacketCommitmentsResponse;
                };
                QueryPacketReceiptRequest: {
                    encode(message: _109.QueryPacketReceiptRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptRequest;
                    fromJSON(object: any): _109.QueryPacketReceiptRequest;
                    toJSON(message: _109.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").default;
                    }): _109.QueryPacketReceiptRequest;
                };
                QueryPacketReceiptResponse: {
                    encode(message: _109.QueryPacketReceiptResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketReceiptResponse;
                    fromJSON(object: any): _109.QueryPacketReceiptResponse;
                    toJSON(message: _109.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryPacketReceiptResponse;
                };
                QueryPacketAcknowledgementRequest: {
                    encode(message: _109.QueryPacketAcknowledgementRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementRequest;
                    toJSON(message: _109.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").default;
                    }): _109.QueryPacketAcknowledgementRequest;
                };
                QueryPacketAcknowledgementResponse: {
                    encode(message: _109.QueryPacketAcknowledgementResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementResponse;
                    toJSON(message: _109.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryPacketAcknowledgementResponse;
                };
                QueryPacketAcknowledgementsRequest: {
                    encode(message: _109.QueryPacketAcknowledgementsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _109.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: (string | number | import("long").default)[];
                    }): _109.QueryPacketAcknowledgementsRequest;
                };
                QueryPacketAcknowledgementsResponse: {
                    encode(message: _109.QueryPacketAcknowledgementsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _109.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _109.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").default;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryPacketAcknowledgementsResponse;
                };
                QueryUnreceivedPacketsRequest: {
                    encode(message: _109.QueryUnreceivedPacketsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _109.QueryUnreceivedPacketsRequest;
                    toJSON(message: _109.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: (string | number | import("long").default)[];
                    }): _109.QueryUnreceivedPacketsRequest;
                };
                QueryUnreceivedPacketsResponse: {
                    encode(message: _109.QueryUnreceivedPacketsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _109.QueryUnreceivedPacketsResponse;
                    toJSON(message: _109.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").default)[];
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryUnreceivedPacketsResponse;
                };
                QueryUnreceivedAcksRequest: {
                    encode(message: _109.QueryUnreceivedAcksRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _109.QueryUnreceivedAcksRequest;
                    toJSON(message: _109.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: (string | number | import("long").default)[];
                    }): _109.QueryUnreceivedAcksRequest;
                };
                QueryUnreceivedAcksResponse: {
                    encode(message: _109.QueryUnreceivedAcksResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _109.QueryUnreceivedAcksResponse;
                    toJSON(message: _109.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: (string | number | import("long").default)[];
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryUnreceivedAcksResponse;
                };
                QueryNextSequenceReceiveRequest: {
                    encode(message: _109.QueryNextSequenceReceiveRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _109.QueryNextSequenceReceiveRequest;
                    toJSON(message: _109.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _109.QueryNextSequenceReceiveRequest;
                };
                QueryNextSequenceReceiveResponse: {
                    encode(message: _109.QueryNextSequenceReceiveResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _109.QueryNextSequenceReceiveResponse;
                    toJSON(message: _109.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        nextSequenceReceive?: string | number | import("long").default;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _109.QueryNextSequenceReceiveResponse;
                };
                GenesisState: {
                    encode(message: _108.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.GenesisState;
                    fromJSON(object: any): _108.GenesisState;
                    toJSON(message: _108.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").default;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").default;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").default;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").default;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").default;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: string | number | import("long").default;
                        }[];
                        nextChannelSequence?: string | number | import("long").default;
                    }): _108.GenesisState;
                };
                PacketSequence: {
                    encode(message: _108.PacketSequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.PacketSequence;
                    fromJSON(object: any): _108.PacketSequence;
                    toJSON(message: _108.PacketSequence): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").default;
                    }): _108.PacketSequence;
                };
                stateFromJSON(object: any): _107.State;
                stateToJSON(object: _107.State): string;
                orderFromJSON(object: any): _107.Order;
                orderToJSON(object: _107.Order): string;
                State: typeof _107.State;
                StateSDKType: typeof _107.State;
                Order: typeof _107.Order;
                OrderSDKType: typeof _107.Order;
                Channel: {
                    encode(message: _107.Channel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Channel;
                    fromJSON(object: any): _107.Channel;
                    toJSON(message: _107.Channel): unknown;
                    fromPartial(object: {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _107.Channel;
                };
                IdentifiedChannel: {
                    encode(message: _107.IdentifiedChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.IdentifiedChannel;
                    fromJSON(object: any): _107.IdentifiedChannel;
                    toJSON(message: _107.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _107.State;
                        ordering?: _107.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _107.IdentifiedChannel;
                };
                Counterparty: {
                    encode(message: _107.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Counterparty;
                    fromJSON(object: any): _107.Counterparty;
                    toJSON(message: _107.Counterparty): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _107.Counterparty;
                };
                Packet: {
                    encode(message: _107.Packet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Packet;
                    fromJSON(object: any): _107.Packet;
                    toJSON(message: _107.Packet): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        timeoutTimestamp?: string | number | import("long").default;
                    }): _107.Packet;
                };
                PacketState: {
                    encode(message: _107.PacketState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.PacketState;
                    fromJSON(object: any): _107.PacketState;
                    toJSON(message: _107.PacketState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: string | number | import("long").default;
                        data?: Uint8Array;
                    }): _107.PacketState;
                };
                Acknowledgement: {
                    encode(message: _107.Acknowledgement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Acknowledgement;
                    fromJSON(object: any): _107.Acknowledgement;
                    toJSON(message: _107.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _107.Acknowledgement;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _217.MsgClientImpl;
                QueryClientImpl: typeof _213.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    clientState(request: _113.QueryClientStateRequest): Promise<_113.QueryClientStateResponse>;
                    clientStates(request?: _113.QueryClientStatesRequest): Promise<_113.QueryClientStatesResponse>;
                    consensusState(request: _113.QueryConsensusStateRequest): Promise<_113.QueryConsensusStateResponse>;
                    consensusStates(request: _113.QueryConsensusStatesRequest): Promise<_113.QueryConsensusStatesResponse>;
                    consensusStateHeights(request: _113.QueryConsensusStateHeightsRequest): Promise<_113.QueryConsensusStateHeightsResponse>;
                    clientStatus(request: _113.QueryClientStatusRequest): Promise<_113.QueryClientStatusResponse>;
                    clientParams(request?: _113.QueryClientParamsRequest): Promise<_113.QueryClientParamsResponse>;
                    upgradedClientState(request?: _113.QueryUpgradedClientStateRequest): Promise<_113.QueryUpgradedClientStateResponse>;
                    upgradedConsensusState(request?: _113.QueryUpgradedConsensusStateRequest): Promise<_113.QueryUpgradedConsensusStateResponse>;
                };
                LCDQueryClient: typeof _207.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _114.MsgCreateClient): {
                            typeUrl: string;
                            value: _114.MsgCreateClient;
                        };
                        updateClient(value: _114.MsgUpdateClient): {
                            typeUrl: string;
                            value: _114.MsgUpdateClient;
                        };
                        upgradeClient(value: _114.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _114.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _114.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _114.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: ({ clientState, consensusState, signer }: _114.MsgCreateClient) => {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_state, consensus_state, signer }: {
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: ({ clientId, header, signer }: _114.MsgUpdateClient) => {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, header, signer }: {
                            client_id: string;
                            header: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: ({ clientId, clientState, consensusState, proofUpgradeClient, proofUpgradeConsensusState, signer }: _114.MsgUpgradeClient) => {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        };
                        fromAmino: ({ client_id, client_state, consensus_state, proof_upgrade_client, proof_upgrade_consensus_state, signer }: {
                            client_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            consensus_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_upgrade_client: Uint8Array;
                            proof_upgrade_consensus_state: Uint8Array;
                            signer: string;
                        }) => _114.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: ({ clientId, misbehaviour, signer }: _114.MsgSubmitMisbehaviour) => {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        };
                        fromAmino: ({ client_id, misbehaviour, signer }: {
                            client_id: string;
                            misbehaviour: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            signer: string;
                        }) => _114.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    encode(message: _114.MsgCreateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClient;
                    fromJSON(object: any): _114.MsgCreateClient;
                    toJSON(message: _114.MsgCreateClient): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgCreateClient;
                };
                MsgCreateClientResponse: {
                    encode(_: _114.MsgCreateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateClientResponse;
                    fromJSON(_: any): _114.MsgCreateClientResponse;
                    toJSON(_: _114.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _114.MsgCreateClientResponse;
                };
                MsgUpdateClient: {
                    encode(message: _114.MsgUpdateClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClient;
                    fromJSON(object: any): _114.MsgUpdateClient;
                    toJSON(message: _114.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgUpdateClient;
                };
                MsgUpdateClientResponse: {
                    encode(_: _114.MsgUpdateClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateClientResponse;
                    fromJSON(_: any): _114.MsgUpdateClientResponse;
                    toJSON(_: _114.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _114.MsgUpdateClientResponse;
                };
                MsgUpgradeClient: {
                    encode(message: _114.MsgUpgradeClient, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClient;
                    fromJSON(object: any): _114.MsgUpgradeClient;
                    toJSON(message: _114.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _114.MsgUpgradeClient;
                };
                MsgUpgradeClientResponse: {
                    encode(_: _114.MsgUpgradeClientResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpgradeClientResponse;
                    fromJSON(_: any): _114.MsgUpgradeClientResponse;
                    toJSON(_: _114.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _114.MsgUpgradeClientResponse;
                };
                MsgSubmitMisbehaviour: {
                    encode(message: _114.MsgSubmitMisbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _114.MsgSubmitMisbehaviour;
                    toJSON(message: _114.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _114.MsgSubmitMisbehaviour;
                };
                MsgSubmitMisbehaviourResponse: {
                    encode(_: _114.MsgSubmitMisbehaviourResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _114.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _114.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _114.MsgSubmitMisbehaviourResponse;
                };
                QueryClientStateRequest: {
                    encode(message: _113.QueryClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateRequest;
                    fromJSON(object: any): _113.QueryClientStateRequest;
                    toJSON(message: _113.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _113.QueryClientStateRequest;
                };
                QueryClientStateResponse: {
                    encode(message: _113.QueryClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStateResponse;
                    fromJSON(object: any): _113.QueryClientStateResponse;
                    toJSON(message: _113.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _113.QueryClientStateResponse;
                };
                QueryClientStatesRequest: {
                    encode(message: _113.QueryClientStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesRequest;
                    fromJSON(object: any): _113.QueryClientStatesRequest;
                    toJSON(message: _113.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryClientStatesRequest;
                };
                QueryClientStatesResponse: {
                    encode(message: _113.QueryClientStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatesResponse;
                    fromJSON(object: any): _113.QueryClientStatesResponse;
                    toJSON(message: _113.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _113.QueryClientStatesResponse;
                };
                QueryConsensusStateRequest: {
                    encode(message: _113.QueryConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateRequest;
                    fromJSON(object: any): _113.QueryConsensusStateRequest;
                    toJSON(message: _113.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: string | number | import("long").default;
                        revisionHeight?: string | number | import("long").default;
                        latestHeight?: boolean;
                    }): _113.QueryConsensusStateRequest;
                };
                QueryConsensusStateResponse: {
                    encode(message: _113.QueryConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateResponse;
                    fromJSON(object: any): _113.QueryConsensusStateResponse;
                    toJSON(message: _113.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _113.QueryConsensusStateResponse;
                };
                QueryConsensusStatesRequest: {
                    encode(message: _113.QueryConsensusStatesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesRequest;
                    fromJSON(object: any): _113.QueryConsensusStatesRequest;
                    toJSON(message: _113.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryConsensusStatesRequest;
                };
                QueryConsensusStatesResponse: {
                    encode(message: _113.QueryConsensusStatesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStatesResponse;
                    fromJSON(object: any): _113.QueryConsensusStatesResponse;
                    toJSON(message: _113.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long").default;
                                revisionHeight?: string | number | import("long").default;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _113.QueryConsensusStatesResponse;
                };
                QueryConsensusStateHeightsRequest: {
                    encode(message: _113.QueryConsensusStateHeightsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateHeightsRequest;
                    fromJSON(object: any): _113.QueryConsensusStateHeightsRequest;
                    toJSON(message: _113.QueryConsensusStateHeightsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _113.QueryConsensusStateHeightsRequest;
                };
                QueryConsensusStateHeightsResponse: {
                    encode(message: _113.QueryConsensusStateHeightsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryConsensusStateHeightsResponse;
                    fromJSON(object: any): _113.QueryConsensusStateHeightsResponse;
                    toJSON(message: _113.QueryConsensusStateHeightsResponse): unknown;
                    fromPartial(object: {
                        consensusStateHeights?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _113.QueryConsensusStateHeightsResponse;
                };
                QueryClientStatusRequest: {
                    encode(message: _113.QueryClientStatusRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusRequest;
                    fromJSON(object: any): _113.QueryClientStatusRequest;
                    toJSON(message: _113.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _113.QueryClientStatusRequest;
                };
                QueryClientStatusResponse: {
                    encode(message: _113.QueryClientStatusResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientStatusResponse;
                    fromJSON(object: any): _113.QueryClientStatusResponse;
                    toJSON(message: _113.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _113.QueryClientStatusResponse;
                };
                QueryClientParamsRequest: {
                    encode(_: _113.QueryClientParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsRequest;
                    fromJSON(_: any): _113.QueryClientParamsRequest;
                    toJSON(_: _113.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _113.QueryClientParamsRequest;
                };
                QueryClientParamsResponse: {
                    encode(message: _113.QueryClientParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryClientParamsResponse;
                    fromJSON(object: any): _113.QueryClientParamsResponse;
                    toJSON(message: _113.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _113.QueryClientParamsResponse;
                };
                QueryUpgradedClientStateRequest: {
                    encode(_: _113.QueryUpgradedClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _113.QueryUpgradedClientStateRequest;
                    toJSON(_: _113.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _113.QueryUpgradedClientStateRequest;
                };
                QueryUpgradedClientStateResponse: {
                    encode(message: _113.QueryUpgradedClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _113.QueryUpgradedClientStateResponse;
                    toJSON(message: _113.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _113.QueryUpgradedClientStateResponse;
                };
                QueryUpgradedConsensusStateRequest: {
                    encode(_: _113.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _113.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _113.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _113.QueryUpgradedConsensusStateRequest;
                };
                QueryUpgradedConsensusStateResponse: {
                    encode(message: _113.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _113.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _113.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _113.QueryUpgradedConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                    fromJSON(object: any): _112.GenesisState;
                    toJSON(message: _112.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: string | number | import("long").default;
                                    revisionHeight?: string | number | import("long").default;
                                };
                                consensusState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: string | number | import("long").default;
                    }): _112.GenesisState;
                };
                GenesisMetadata: {
                    encode(message: _112.GenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisMetadata;
                    fromJSON(object: any): _112.GenesisMetadata;
                    toJSON(message: _112.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _112.GenesisMetadata;
                };
                IdentifiedGenesisMetadata: {
                    encode(message: _112.IdentifiedGenesisMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _112.IdentifiedGenesisMetadata;
                    toJSON(message: _112.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _112.IdentifiedGenesisMetadata;
                };
                IdentifiedClientState: {
                    encode(message: _111.IdentifiedClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.IdentifiedClientState;
                    fromJSON(object: any): _111.IdentifiedClientState;
                    toJSON(message: _111.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _111.IdentifiedClientState;
                };
                ConsensusStateWithHeight: {
                    encode(message: _111.ConsensusStateWithHeight, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ConsensusStateWithHeight;
                    fromJSON(object: any): _111.ConsensusStateWithHeight;
                    toJSON(message: _111.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _111.ConsensusStateWithHeight;
                };
                ClientConsensusStates: {
                    encode(message: _111.ClientConsensusStates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientConsensusStates;
                    fromJSON(object: any): _111.ClientConsensusStates;
                    toJSON(message: _111.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: string | number | import("long").default;
                                revisionHeight?: string | number | import("long").default;
                            };
                            consensusState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _111.ClientConsensusStates;
                };
                ClientUpdateProposal: {
                    encode(message: _111.ClientUpdateProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.ClientUpdateProposal;
                    fromJSON(object: any): _111.ClientUpdateProposal;
                    toJSON(message: _111.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _111.ClientUpdateProposal;
                };
                UpgradeProposal: {
                    encode(message: _111.UpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.UpgradeProposal;
                    fromJSON(object: any): _111.UpgradeProposal;
                    toJSON(message: _111.UpgradeProposal): unknown;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: string | number | import("long").default;
                            info?: string;
                            upgradedClientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _111.UpgradeProposal;
                };
                Height: {
                    encode(message: _111.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Height;
                    fromJSON(object: any): _111.Height;
                    toJSON(message: _111.Height): unknown;
                    fromPartial(object: {
                        revisionNumber?: string | number | import("long").default;
                        revisionHeight?: string | number | import("long").default;
                    }): _111.Height;
                };
                Params: {
                    encode(message: _111.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Params;
                    fromJSON(object: any): _111.Params;
                    toJSON(message: _111.Params): unknown;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _111.Params;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    encode(message: _115.MerkleRoot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleRoot;
                    fromJSON(object: any): _115.MerkleRoot;
                    toJSON(message: _115.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _115.MerkleRoot;
                };
                MerklePrefix: {
                    encode(message: _115.MerklePrefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePrefix;
                    fromJSON(object: any): _115.MerklePrefix;
                    toJSON(message: _115.MerklePrefix): unknown;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _115.MerklePrefix;
                };
                MerklePath: {
                    encode(message: _115.MerklePath, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerklePath;
                    fromJSON(object: any): _115.MerklePath;
                    toJSON(message: _115.MerklePath): unknown;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _115.MerklePath;
                };
                MerkleProof: {
                    encode(message: _115.MerkleProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MerkleProof;
                    fromJSON(object: any): _115.MerkleProof;
                    toJSON(message: _115.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../proofs").HashOp;
                                    prehashKey?: import("../proofs").HashOp;
                                    prehashValue?: import("../proofs").HashOp;
                                    length?: import("../proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../proofs").HashOp;
                                        prehashKey?: import("../proofs").HashOp;
                                        prehashValue?: import("../proofs").HashOp;
                                        length?: import("../proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../proofs").HashOp;
                                        prehashKey?: import("../proofs").HashOp;
                                        prehashValue?: import("../proofs").HashOp;
                                        length?: import("../proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../proofs").HashOp;
                                            prehashKey?: import("../proofs").HashOp;
                                            prehashValue?: import("../proofs").HashOp;
                                            length?: import("../proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../proofs").HashOp;
                                                prehashKey?: import("../proofs").HashOp;
                                                prehashValue?: import("../proofs").HashOp;
                                                length?: import("../proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../proofs").HashOp;
                                                prehashKey?: import("../proofs").HashOp;
                                                prehashValue?: import("../proofs").HashOp;
                                                length?: import("../proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../proofs").HashOp;
                                            prehashKey?: import("../proofs").HashOp;
                                            prehashValue?: import("../proofs").HashOp;
                                            length?: import("../proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../proofs").HashOp;
                                                prehashKey?: import("../proofs").HashOp;
                                                prehashValue?: import("../proofs").HashOp;
                                                length?: import("../proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../proofs").HashOp;
                                                prehashKey?: import("../proofs").HashOp;
                                                prehashValue?: import("../proofs").HashOp;
                                                length?: import("../proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _115.MerkleProof;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _218.MsgClientImpl;
                QueryClientImpl: typeof _214.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    connection(request: _118.QueryConnectionRequest): Promise<_118.QueryConnectionResponse>;
                    connections(request?: _118.QueryConnectionsRequest): Promise<_118.QueryConnectionsResponse>;
                    clientConnections(request: _118.QueryClientConnectionsRequest): Promise<_118.QueryClientConnectionsResponse>;
                    connectionClientState(request: _118.QueryConnectionClientStateRequest): Promise<_118.QueryConnectionClientStateResponse>;
                    connectionConsensusState(request: _118.QueryConnectionConsensusStateRequest): Promise<_118.QueryConnectionConsensusStateResponse>;
                };
                LCDQueryClient: typeof _208.LCDQueryClient;
                registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _119.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _119.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _119.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _119.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _119.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: ({ clientId, counterparty, version, delayPeriod, signer }: _119.MsgConnectionOpenInit) => {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        };
                        fromAmino: ({ client_id, counterparty, version, delay_period, signer }: {
                            client_id: string;
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            delay_period: string;
                            signer: string;
                        }) => _119.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: ({ clientId, previousConnectionId, clientState, counterparty, delayPeriod, counterpartyVersions, proofHeight, proofInit, proofClient, proofConsensus, consensusHeight, signer }: _119.MsgConnectionOpenTry) => {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ client_id, previous_connection_id, client_state, counterparty, delay_period, counterparty_versions, proof_height, proof_init, proof_client, proof_consensus, consensus_height, signer }: {
                            client_id: string;
                            previous_connection_id: string;
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            counterparty: {
                                client_id: string;
                                connection_id: string;
                                prefix: {
                                    key_prefix: Uint8Array;
                                };
                            };
                            delay_period: string;
                            counterparty_versions: {
                                identifier: string;
                                features: string[];
                            }[];
                            proof_height: import("../helpers").AminoHeight;
                            proof_init: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: ({ connectionId, counterpartyConnectionId, version, clientState, proofHeight, proofTry, proofClient, proofConsensus, consensusHeight, signer }: _119.MsgConnectionOpenAck) => {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, counterparty_connection_id, version, client_state, proof_height, proof_try, proof_client, proof_consensus, consensus_height, signer }: {
                            connection_id: string;
                            counterparty_connection_id: string;
                            version: {
                                identifier: string;
                                features: string[];
                            };
                            client_state: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            proof_height: import("../helpers").AminoHeight;
                            proof_try: Uint8Array;
                            proof_client: Uint8Array;
                            proof_consensus: Uint8Array;
                            consensus_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: ({ connectionId, proofAck, proofHeight, signer }: _119.MsgConnectionOpenConfirm) => {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        };
                        fromAmino: ({ connection_id, proof_ack, proof_height, signer }: {
                            connection_id: string;
                            proof_ack: Uint8Array;
                            proof_height: import("../helpers").AminoHeight;
                            signer: string;
                        }) => _119.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    encode(message: _119.MsgConnectionOpenInit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInit;
                    fromJSON(object: any): _119.MsgConnectionOpenInit;
                    toJSON(message: _119.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: string | number | import("long").default;
                        signer?: string;
                    }): _119.MsgConnectionOpenInit;
                };
                MsgConnectionOpenInitResponse: {
                    encode(_: _119.MsgConnectionOpenInitResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenInitResponse;
                    toJSON(_: _119.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _119.MsgConnectionOpenInitResponse;
                };
                MsgConnectionOpenTry: {
                    encode(message: _119.MsgConnectionOpenTry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTry;
                    fromJSON(object: any): _119.MsgConnectionOpenTry;
                    toJSON(message: _119.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").default;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenTry;
                };
                MsgConnectionOpenTryResponse: {
                    encode(_: _119.MsgConnectionOpenTryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenTryResponse;
                    toJSON(_: _119.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _119.MsgConnectionOpenTryResponse;
                };
                MsgConnectionOpenAck: {
                    encode(message: _119.MsgConnectionOpenAck, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAck;
                    fromJSON(object: any): _119.MsgConnectionOpenAck;
                    toJSON(message: _119.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenAck;
                };
                MsgConnectionOpenAckResponse: {
                    encode(_: _119.MsgConnectionOpenAckResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenAckResponse;
                    toJSON(_: _119.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _119.MsgConnectionOpenAckResponse;
                };
                MsgConnectionOpenConfirm: {
                    encode(message: _119.MsgConnectionOpenConfirm, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _119.MsgConnectionOpenConfirm;
                    toJSON(message: _119.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        signer?: string;
                    }): _119.MsgConnectionOpenConfirm;
                };
                MsgConnectionOpenConfirmResponse: {
                    encode(_: _119.MsgConnectionOpenConfirmResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _119.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _119.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _119.MsgConnectionOpenConfirmResponse;
                };
                QueryConnectionRequest: {
                    encode(message: _118.QueryConnectionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionRequest;
                    fromJSON(object: any): _118.QueryConnectionRequest;
                    toJSON(message: _118.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _118.QueryConnectionRequest;
                };
                QueryConnectionResponse: {
                    encode(message: _118.QueryConnectionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionResponse;
                    fromJSON(object: any): _118.QueryConnectionResponse;
                    toJSON(message: _118.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").default;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _118.QueryConnectionResponse;
                };
                QueryConnectionsRequest: {
                    encode(message: _118.QueryConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsRequest;
                    fromJSON(object: any): _118.QueryConnectionsRequest;
                    toJSON(message: _118.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _118.QueryConnectionsRequest;
                };
                QueryConnectionsResponse: {
                    encode(message: _118.QueryConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionsResponse;
                    fromJSON(object: any): _118.QueryConnectionsResponse;
                    toJSON(message: _118.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _118.QueryConnectionsResponse;
                };
                QueryClientConnectionsRequest: {
                    encode(message: _118.QueryClientConnectionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsRequest;
                    fromJSON(object: any): _118.QueryClientConnectionsRequest;
                    toJSON(message: _118.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _118.QueryClientConnectionsRequest;
                };
                QueryClientConnectionsResponse: {
                    encode(message: _118.QueryClientConnectionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryClientConnectionsResponse;
                    fromJSON(object: any): _118.QueryClientConnectionsResponse;
                    toJSON(message: _118.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _118.QueryClientConnectionsResponse;
                };
                QueryConnectionClientStateRequest: {
                    encode(message: _118.QueryConnectionClientStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _118.QueryConnectionClientStateRequest;
                    toJSON(message: _118.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _118.QueryConnectionClientStateRequest;
                };
                QueryConnectionClientStateResponse: {
                    encode(message: _118.QueryConnectionClientStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _118.QueryConnectionClientStateResponse;
                    toJSON(message: _118.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _118.QueryConnectionClientStateResponse;
                };
                QueryConnectionConsensusStateRequest: {
                    encode(message: _118.QueryConnectionConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _118.QueryConnectionConsensusStateRequest;
                    toJSON(message: _118.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: string | number | import("long").default;
                        revisionHeight?: string | number | import("long").default;
                    }): _118.QueryConnectionConsensusStateRequest;
                };
                QueryConnectionConsensusStateResponse: {
                    encode(message: _118.QueryConnectionConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _118.QueryConnectionConsensusStateResponse;
                    toJSON(message: _118.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _118.QueryConnectionConsensusStateResponse;
                };
                GenesisState: {
                    encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                    fromJSON(object: any): _117.GenesisState;
                    toJSON(message: _117.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").default;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: string | number | import("long").default;
                        params?: {
                            maxExpectedTimePerBlock?: string | number | import("long").default;
                        };
                    }): _117.GenesisState;
                };
                stateFromJSON(object: any): _116.State;
                stateToJSON(object: _116.State): string;
                State: typeof _116.State;
                StateSDKType: typeof _116.State;
                ConnectionEnd: {
                    encode(message: _116.ConnectionEnd, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionEnd;
                    fromJSON(object: any): _116.ConnectionEnd;
                    toJSON(message: _116.ConnectionEnd): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _116.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").default;
                    }): _116.ConnectionEnd;
                };
                IdentifiedConnection: {
                    encode(message: _116.IdentifiedConnection, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.IdentifiedConnection;
                    fromJSON(object: any): _116.IdentifiedConnection;
                    toJSON(message: _116.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _116.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: string | number | import("long").default;
                    }): _116.IdentifiedConnection;
                };
                Counterparty: {
                    encode(message: _116.Counterparty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Counterparty;
                    fromJSON(object: any): _116.Counterparty;
                    toJSON(message: _116.Counterparty): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _116.Counterparty;
                };
                ClientPaths: {
                    encode(message: _116.ClientPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ClientPaths;
                    fromJSON(object: any): _116.ClientPaths;
                    toJSON(message: _116.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _116.ClientPaths;
                };
                ConnectionPaths: {
                    encode(message: _116.ConnectionPaths, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.ConnectionPaths;
                    fromJSON(object: any): _116.ConnectionPaths;
                    toJSON(message: _116.ConnectionPaths): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _116.ConnectionPaths;
                };
                Version: {
                    encode(message: _116.Version, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Version;
                    fromJSON(object: any): _116.Version;
                    toJSON(message: _116.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _116.Version;
                };
                Params: {
                    encode(message: _116.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Params;
                    fromJSON(object: any): _116.Params;
                    toJSON(message: _116.Params): unknown;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: string | number | import("long").default;
                    }): _116.Params;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    encode(message: _120.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.GenesisState;
                    fromJSON(object: any): _120.GenesisState;
                    toJSON(message: _120.GenesisState): unknown;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: string | number | import("long").default;
                                        revisionHeight?: string | number | import("long").default;
                                    };
                                    consensusState?: {
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: string | number | import("long").default;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _116.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: string | number | import("long").default;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: string | number | import("long").default;
                            params?: {
                                maxExpectedTimePerBlock?: string | number | import("long").default;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _107.State;
                                ordering?: _107.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").default;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").default;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").default;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").default;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").default;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: string | number | import("long").default;
                            }[];
                            nextChannelSequence?: string | number | import("long").default;
                        };
                    }): _120.GenesisState;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    encode(message: _121.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.ClientState;
                    fromJSON(object: any): _121.ClientState;
                    toJSON(message: _121.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                    }): _121.ClientState;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _122.DataType;
                dataTypeToJSON(object: _122.DataType): string;
                DataType: typeof _122.DataType;
                DataTypeSDKType: typeof _122.DataType;
                ClientState: {
                    encode(message: _122.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientState;
                    fromJSON(object: any): _122.ClientState;
                    toJSON(message: _122.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                        frozenSequence?: string | number | import("long").default;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long").default;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _122.ClientState;
                };
                ConsensusState: {
                    encode(message: _122.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConsensusState;
                    fromJSON(object: any): _122.ConsensusState;
                    toJSON(message: _122.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long").default;
                    }): _122.ConsensusState;
                };
                Header: {
                    encode(message: _122.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Header;
                    fromJSON(object: any): _122.Header;
                    toJSON(message: _122.Header): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                        timestamp?: string | number | import("long").default;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _122.Header;
                };
                Misbehaviour: {
                    encode(message: _122.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Misbehaviour;
                    fromJSON(object: any): _122.Misbehaviour;
                    toJSON(message: _122.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long").default;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _122.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").default;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _122.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").default;
                        };
                    }): _122.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _122.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignatureAndData;
                    fromJSON(object: any): _122.SignatureAndData;
                    toJSON(message: _122.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _122.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long").default;
                    }): _122.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _122.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.TimestampedSignatureData;
                    fromJSON(object: any): _122.TimestampedSignatureData;
                    toJSON(message: _122.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long").default;
                    }): _122.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _122.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.SignBytes;
                    fromJSON(object: any): _122.SignBytes;
                    toJSON(message: _122.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                        timestamp?: string | number | import("long").default;
                        diversifier?: string;
                        dataType?: _122.DataType;
                        data?: Uint8Array;
                    }): _122.SignBytes;
                };
                HeaderData: {
                    encode(message: _122.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.HeaderData;
                    fromJSON(object: any): _122.HeaderData;
                    toJSON(message: _122.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _122.HeaderData;
                };
                ClientStateData: {
                    encode(message: _122.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ClientStateData;
                    fromJSON(object: any): _122.ClientStateData;
                    toJSON(message: _122.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _122.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _122.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConsensusStateData;
                    fromJSON(object: any): _122.ConsensusStateData;
                    toJSON(message: _122.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _122.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _122.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ConnectionStateData;
                    fromJSON(object: any): _122.ConnectionStateData;
                    toJSON(message: _122.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").default;
                        };
                    }): _122.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _122.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.ChannelStateData;
                    fromJSON(object: any): _122.ChannelStateData;
                    toJSON(message: _122.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _122.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _122.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PacketCommitmentData;
                    fromJSON(object: any): _122.PacketCommitmentData;
                    toJSON(message: _122.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _122.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _122.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PacketAcknowledgementData;
                    fromJSON(object: any): _122.PacketAcknowledgementData;
                    toJSON(message: _122.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _122.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _122.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.PacketReceiptAbsenceData;
                    fromJSON(object: any): _122.PacketReceiptAbsenceData;
                    toJSON(message: _122.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _122.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _122.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.NextSequenceRecvData;
                    fromJSON(object: any): _122.NextSequenceRecvData;
                    toJSON(message: _122.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long").default;
                    }): _122.NextSequenceRecvData;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _123.DataType;
                dataTypeToJSON(object: _123.DataType): string;
                DataType: typeof _123.DataType;
                DataTypeSDKType: typeof _123.DataType;
                ClientState: {
                    encode(message: _123.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientState;
                    fromJSON(object: any): _123.ClientState;
                    toJSON(message: _123.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: string | number | import("long").default;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _123.ClientState;
                };
                ConsensusState: {
                    encode(message: _123.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusState;
                    fromJSON(object: any): _123.ConsensusState;
                    toJSON(message: _123.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: string | number | import("long").default;
                    }): _123.ConsensusState;
                };
                Header: {
                    encode(message: _123.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Header;
                    fromJSON(object: any): _123.Header;
                    toJSON(message: _123.Header): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                        timestamp?: string | number | import("long").default;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _123.Header;
                };
                Misbehaviour: {
                    encode(message: _123.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.Misbehaviour;
                    fromJSON(object: any): _123.Misbehaviour;
                    toJSON(message: _123.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: string | number | import("long").default;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").default;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _123.DataType;
                            data?: Uint8Array;
                            timestamp?: string | number | import("long").default;
                        };
                    }): _123.Misbehaviour;
                };
                SignatureAndData: {
                    encode(message: _123.SignatureAndData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignatureAndData;
                    fromJSON(object: any): _123.SignatureAndData;
                    toJSON(message: _123.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _123.DataType;
                        data?: Uint8Array;
                        timestamp?: string | number | import("long").default;
                    }): _123.SignatureAndData;
                };
                TimestampedSignatureData: {
                    encode(message: _123.TimestampedSignatureData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TimestampedSignatureData;
                    fromJSON(object: any): _123.TimestampedSignatureData;
                    toJSON(message: _123.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: string | number | import("long").default;
                    }): _123.TimestampedSignatureData;
                };
                SignBytes: {
                    encode(message: _123.SignBytes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.SignBytes;
                    fromJSON(object: any): _123.SignBytes;
                    toJSON(message: _123.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: string | number | import("long").default;
                        timestamp?: string | number | import("long").default;
                        diversifier?: string;
                        dataType?: _123.DataType;
                        data?: Uint8Array;
                    }): _123.SignBytes;
                };
                HeaderData: {
                    encode(message: _123.HeaderData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.HeaderData;
                    fromJSON(object: any): _123.HeaderData;
                    toJSON(message: _123.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _123.HeaderData;
                };
                ClientStateData: {
                    encode(message: _123.ClientStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ClientStateData;
                    fromJSON(object: any): _123.ClientStateData;
                    toJSON(message: _123.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _123.ClientStateData;
                };
                ConsensusStateData: {
                    encode(message: _123.ConsensusStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConsensusStateData;
                    fromJSON(object: any): _123.ConsensusStateData;
                    toJSON(message: _123.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _123.ConsensusStateData;
                };
                ConnectionStateData: {
                    encode(message: _123.ConnectionStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ConnectionStateData;
                    fromJSON(object: any): _123.ConnectionStateData;
                    toJSON(message: _123.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _116.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: string | number | import("long").default;
                        };
                    }): _123.ConnectionStateData;
                };
                ChannelStateData: {
                    encode(message: _123.ChannelStateData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.ChannelStateData;
                    fromJSON(object: any): _123.ChannelStateData;
                    toJSON(message: _123.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _107.State;
                            ordering?: _107.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _123.ChannelStateData;
                };
                PacketCommitmentData: {
                    encode(message: _123.PacketCommitmentData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketCommitmentData;
                    fromJSON(object: any): _123.PacketCommitmentData;
                    toJSON(message: _123.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _123.PacketCommitmentData;
                };
                PacketAcknowledgementData: {
                    encode(message: _123.PacketAcknowledgementData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketAcknowledgementData;
                    fromJSON(object: any): _123.PacketAcknowledgementData;
                    toJSON(message: _123.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _123.PacketAcknowledgementData;
                };
                PacketReceiptAbsenceData: {
                    encode(message: _123.PacketReceiptAbsenceData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.PacketReceiptAbsenceData;
                    fromJSON(object: any): _123.PacketReceiptAbsenceData;
                    toJSON(message: _123.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _123.PacketReceiptAbsenceData;
                };
                NextSequenceRecvData: {
                    encode(message: _123.NextSequenceRecvData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.NextSequenceRecvData;
                    fromJSON(object: any): _123.NextSequenceRecvData;
                    toJSON(message: _123.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: string | number | import("long").default;
                    }): _123.NextSequenceRecvData;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    encode(message: _124.ClientState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ClientState;
                    fromJSON(object: any): _124.ClientState;
                    toJSON(message: _124.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: string | number | import("long").default;
                            denominator?: string | number | import("long").default;
                        };
                        trustingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        latestHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../proofs").HashOp;
                                prehashKey?: import("../proofs").HashOp;
                                prehashValue?: import("../proofs").HashOp;
                                length?: import("../proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _124.ClientState;
                };
                ConsensusState: {
                    encode(message: _124.ConsensusState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.ConsensusState;
                    fromJSON(object: any): _124.ConsensusState;
                    toJSON(message: _124.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _124.ConsensusState;
                };
                Misbehaviour: {
                    encode(message: _124.Misbehaviour, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Misbehaviour;
                    fromJSON(object: any): _124.Misbehaviour;
                    toJSON(message: _124.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").default;
                                        app?: string | number | import("long").default;
                                    };
                                    chainId?: string;
                                    height?: string | number | import("long").default;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").default;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                };
                                totalVotingPower?: string | number | import("long").default;
                            };
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long").default;
                                revisionHeight?: string | number | import("long").default;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                };
                                totalVotingPower?: string | number | import("long").default;
                            };
                        };
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").default;
                                        app?: string | number | import("long").default;
                                    };
                                    chainId?: string;
                                    height?: string | number | import("long").default;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").default;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                };
                                totalVotingPower?: string | number | import("long").default;
                            };
                            trustedHeight?: {
                                revisionNumber?: string | number | import("long").default;
                                revisionHeight?: string | number | import("long").default;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                };
                                totalVotingPower?: string | number | import("long").default;
                            };
                        };
                    }): _124.Misbehaviour;
                };
                Header: {
                    encode(message: _124.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Header;
                    fromJSON(object: any): _124.Header;
                    toJSON(message: _124.Header): unknown;
                    fromPartial(object: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chainId?: string;
                                height?: string | number | import("long").default;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            };
                            totalVotingPower?: string | number | import("long").default;
                        };
                        trustedHeight?: {
                            revisionNumber?: string | number | import("long").default;
                            revisionHeight?: string | number | import("long").default;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            };
                            totalVotingPower?: string | number | import("long").default;
                        };
                    }): _124.Header;
                };
                Fraction: {
                    encode(message: _124.Fraction, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Fraction;
                    fromJSON(object: any): _124.Fraction;
                    toJSON(message: _124.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: string | number | import("long").default;
                        denominator?: string | number | import("long").default;
                    }): _124.Fraction;
                };
            };
        }
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
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _215.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _216.MsgClientImpl;
                    };
                    client: {
                        v1: _217.MsgClientImpl;
                    };
                    connection: {
                        v1: _218.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
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
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
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
                    };
                };
            };
            ibc: {
                applications: {
                    interchain_accounts: {
                        controller: {
                            v1: {
                                interchainAccount(request: _95.QueryInterchainAccountRequest): Promise<_95.QueryInterchainAccountResponse>;
                                params(request?: _95.QueryParamsRequest): Promise<_95.QueryParamsResponse>;
                            };
                        };
                        host: {
                            v1: {
                                params(request?: _97.QueryParamsRequest): Promise<_97.QueryParamsResponse>;
                            };
                        };
                    };
                    transfer: {
                        v1: {
                            denomTrace(request: _103.QueryDenomTraceRequest): Promise<_103.QueryDenomTraceResponse>;
                            denomTraces(request?: _103.QueryDenomTracesRequest): Promise<_103.QueryDenomTracesResponse>;
                            params(request?: _103.QueryParamsRequest): Promise<_103.QueryParamsResponse>;
                            denomHash(request: _103.QueryDenomHashRequest): Promise<_103.QueryDenomHashResponse>;
                            escrowAddress(request: _103.QueryEscrowAddressRequest): Promise<_103.QueryEscrowAddressResponse>;
                        };
                    };
                };
                core: {
                    channel: {
                        v1: {
                            channel(request: _109.QueryChannelRequest): Promise<_109.QueryChannelResponse>;
                            channels(request?: _109.QueryChannelsRequest): Promise<_109.QueryChannelsResponse>;
                            connectionChannels(request: _109.QueryConnectionChannelsRequest): Promise<_109.QueryConnectionChannelsResponse>;
                            channelClientState(request: _109.QueryChannelClientStateRequest): Promise<_109.QueryChannelClientStateResponse>;
                            channelConsensusState(request: _109.QueryChannelConsensusStateRequest): Promise<_109.QueryChannelConsensusStateResponse>;
                            packetCommitment(request: _109.QueryPacketCommitmentRequest): Promise<_109.QueryPacketCommitmentResponse>;
                            packetCommitments(request: _109.QueryPacketCommitmentsRequest): Promise<_109.QueryPacketCommitmentsResponse>;
                            packetReceipt(request: _109.QueryPacketReceiptRequest): Promise<_109.QueryPacketReceiptResponse>;
                            packetAcknowledgement(request: _109.QueryPacketAcknowledgementRequest): Promise<_109.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgements(request: _109.QueryPacketAcknowledgementsRequest): Promise<_109.QueryPacketAcknowledgementsResponse>;
                            unreceivedPackets(request: _109.QueryUnreceivedPacketsRequest): Promise<_109.QueryUnreceivedPacketsResponse>;
                            unreceivedAcks(request: _109.QueryUnreceivedAcksRequest): Promise<_109.QueryUnreceivedAcksResponse>;
                            nextSequenceReceive(request: _109.QueryNextSequenceReceiveRequest): Promise<_109.QueryNextSequenceReceiveResponse>;
                        };
                    };
                    client: {
                        v1: {
                            clientState(request: _113.QueryClientStateRequest): Promise<_113.QueryClientStateResponse>;
                            clientStates(request?: _113.QueryClientStatesRequest): Promise<_113.QueryClientStatesResponse>;
                            consensusState(request: _113.QueryConsensusStateRequest): Promise<_113.QueryConsensusStateResponse>;
                            consensusStates(request: _113.QueryConsensusStatesRequest): Promise<_113.QueryConsensusStatesResponse>;
                            consensusStateHeights(request: _113.QueryConsensusStateHeightsRequest): Promise<_113.QueryConsensusStateHeightsResponse>;
                            clientStatus(request: _113.QueryClientStatusRequest): Promise<_113.QueryClientStatusResponse>;
                            clientParams(request?: _113.QueryClientParamsRequest): Promise<_113.QueryClientParamsResponse>;
                            upgradedClientState(request?: _113.QueryUpgradedClientStateRequest): Promise<_113.QueryUpgradedClientStateResponse>;
                            upgradedConsensusState(request?: _113.QueryUpgradedConsensusStateRequest): Promise<_113.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                    connection: {
                        v1: {
                            connection(request: _118.QueryConnectionRequest): Promise<_118.QueryConnectionResponse>;
                            connections(request?: _118.QueryConnectionsRequest): Promise<_118.QueryConnectionsResponse>;
                            clientConnections(request: _118.QueryClientConnectionsRequest): Promise<_118.QueryClientConnectionsResponse>;
                            connectionClientState(request: _118.QueryConnectionClientStateRequest): Promise<_118.QueryConnectionClientStateResponse>;
                            connectionConsensusState(request: _118.QueryConnectionConsensusStateRequest): Promise<_118.QueryConnectionConsensusStateResponse>;
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
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
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
                    interchain_accounts: {
                        controller: {
                            v1: _203.LCDQueryClient;
                        };
                        host: {
                            v1: _204.LCDQueryClient;
                        };
                    };
                    transfer: {
                        v1: _205.LCDQueryClient;
                    };
                };
                core: {
                    channel: {
                        v1: _206.LCDQueryClient;
                    };
                    client: {
                        v1: _207.LCDQueryClient;
                    };
                    connection: {
                        v1: _208.LCDQueryClient;
                    };
                };
            };
        }>;
    };
}
