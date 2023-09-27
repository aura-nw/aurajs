import * as _206 from "./aura/aura";
import * as _207 from "./aura/genesis";
import * as _210 from "./smartaccount/v1beta1/account";
import * as _211 from "./smartaccount/v1beta1/genesis";
import * as _212 from "./smartaccount/v1beta1/params";
import * as _213 from "./smartaccount/v1beta1/query";
import * as _214 from "./smartaccount/v1beta1/tx";
import * as _351 from "./smartaccount/v1beta1/query.lcd";
import * as _352 from "./aura/query.rpc.Query";
import * as _353 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _354 from "./smartaccount/v1beta1/tx.rpc.msg";
export declare namespace aura {
    const aura: {
        QueryClientImpl: typeof _352.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {};
        GenesisState: {
            typeUrl: string;
            encode(message: _207.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _207.GenesisState;
            fromJSON(object: any): _207.GenesisState;
            toJSON(message: _207.GenesisState): unknown;
            fromPartial(object: Partial<_207.GenesisState>): _207.GenesisState;
            fromAmino(object: _207.GenesisStateAmino): _207.GenesisState;
            toAmino(message: _207.GenesisState): _207.GenesisStateAmino;
            fromAminoMsg(object: _207.GenesisStateAminoMsg): _207.GenesisState;
            fromProtoMsg(message: _207.GenesisStateProtoMsg): _207.GenesisState;
            toProto(message: _207.GenesisState): Uint8Array;
            toProtoMsg(message: _207.GenesisState): _207.GenesisStateProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _206.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _206.Params;
            fromJSON(object: any): _206.Params;
            toJSON(message: _206.Params): unknown;
            fromPartial(object: Partial<_206.Params>): _206.Params;
            fromAmino(object: _206.ParamsAmino): _206.Params;
            toAmino(message: _206.Params): _206.ParamsAmino;
            fromAminoMsg(object: _206.ParamsAminoMsg): _206.Params;
            fromProtoMsg(message: _206.ParamsProtoMsg): _206.Params;
            toProto(message: _206.Params): Uint8Array;
            toProtoMsg(message: _206.Params): _206.ParamsProtoMsg;
        };
    };
    namespace smartaccount {
        const v1beta1: {
            MsgClientImpl: typeof _354.MsgClientImpl;
            QueryClientImpl: typeof _353.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _213.QueryParamsRequest): Promise<_213.QueryParamsResponse>;
                generateAccount(request: _213.QueryGenerateAccountRequest): Promise<_213.QueryGenerateAccountResponse>;
            };
            LCDQueryClient: typeof _351.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    recover(value: _214.MsgRecover): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    activateAccount(value: _214.MsgActivateAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    recover(value: _214.MsgRecover): {
                        typeUrl: string;
                        value: _214.MsgRecover;
                    };
                    activateAccount(value: _214.MsgActivateAccount): {
                        typeUrl: string;
                        value: _214.MsgActivateAccount;
                    };
                };
                toJSON: {
                    recover(value: _214.MsgRecover): {
                        typeUrl: string;
                        value: unknown;
                    };
                    activateAccount(value: _214.MsgActivateAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    recover(value: any): {
                        typeUrl: string;
                        value: _214.MsgRecover;
                    };
                    activateAccount(value: any): {
                        typeUrl: string;
                        value: _214.MsgActivateAccount;
                    };
                };
                fromPartial: {
                    recover(value: _214.MsgRecover): {
                        typeUrl: string;
                        value: _214.MsgRecover;
                    };
                    activateAccount(value: _214.MsgActivateAccount): {
                        typeUrl: string;
                        value: _214.MsgActivateAccount;
                    };
                };
            };
            AminoConverter: {
                "/aura.smartaccount.v1beta1.MsgRecover": {
                    aminoType: string;
                    toAmino: (message: _214.MsgRecover) => _214.MsgRecoverAmino;
                    fromAmino: (object: _214.MsgRecoverAmino) => _214.MsgRecover;
                };
                "/aura.smartaccount.v1beta1.MsgActivateAccount": {
                    aminoType: string;
                    toAmino: (message: _214.MsgActivateAccount) => _214.MsgActivateAccountAmino;
                    fromAmino: (object: _214.MsgActivateAccountAmino) => _214.MsgActivateAccount;
                };
            };
            MsgRecover: {
                typeUrl: string;
                encode(message: _214.MsgRecover, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.MsgRecover;
                fromJSON(object: any): _214.MsgRecover;
                toJSON(message: _214.MsgRecover): unknown;
                fromPartial(object: Partial<_214.MsgRecover>): _214.MsgRecover;
                fromAmino(object: _214.MsgRecoverAmino): _214.MsgRecover;
                toAmino(message: _214.MsgRecover): _214.MsgRecoverAmino;
                fromAminoMsg(object: _214.MsgRecoverAminoMsg): _214.MsgRecover;
                fromProtoMsg(message: _214.MsgRecoverProtoMsg): _214.MsgRecover;
                toProto(message: _214.MsgRecover): Uint8Array;
                toProtoMsg(message: _214.MsgRecover): _214.MsgRecoverProtoMsg;
            };
            MsgRecoverResponse: {
                typeUrl: string;
                encode(_: _214.MsgRecoverResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.MsgRecoverResponse;
                fromJSON(_: any): _214.MsgRecoverResponse;
                toJSON(_: _214.MsgRecoverResponse): unknown;
                fromPartial(_: Partial<_214.MsgRecoverResponse>): _214.MsgRecoverResponse;
                fromAmino(_: _214.MsgRecoverResponseAmino): _214.MsgRecoverResponse;
                toAmino(_: _214.MsgRecoverResponse): _214.MsgRecoverResponseAmino;
                fromAminoMsg(object: _214.MsgRecoverResponseAminoMsg): _214.MsgRecoverResponse;
                fromProtoMsg(message: _214.MsgRecoverResponseProtoMsg): _214.MsgRecoverResponse;
                toProto(message: _214.MsgRecoverResponse): Uint8Array;
                toProtoMsg(message: _214.MsgRecoverResponse): _214.MsgRecoverResponseProtoMsg;
            };
            MsgActivateAccount: {
                typeUrl: string;
                encode(message: _214.MsgActivateAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.MsgActivateAccount;
                fromJSON(object: any): _214.MsgActivateAccount;
                toJSON(message: _214.MsgActivateAccount): unknown;
                fromPartial(object: Partial<_214.MsgActivateAccount>): _214.MsgActivateAccount;
                fromAmino(object: _214.MsgActivateAccountAmino): _214.MsgActivateAccount;
                toAmino(message: _214.MsgActivateAccount): _214.MsgActivateAccountAmino;
                fromAminoMsg(object: _214.MsgActivateAccountAminoMsg): _214.MsgActivateAccount;
                fromProtoMsg(message: _214.MsgActivateAccountProtoMsg): _214.MsgActivateAccount;
                toProto(message: _214.MsgActivateAccount): Uint8Array;
                toProtoMsg(message: _214.MsgActivateAccount): _214.MsgActivateAccountProtoMsg;
            };
            MsgActivateAccountResponse: {
                typeUrl: string;
                encode(message: _214.MsgActivateAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _214.MsgActivateAccountResponse;
                fromJSON(object: any): _214.MsgActivateAccountResponse;
                toJSON(message: _214.MsgActivateAccountResponse): unknown;
                fromPartial(object: Partial<_214.MsgActivateAccountResponse>): _214.MsgActivateAccountResponse;
                fromAmino(object: _214.MsgActivateAccountResponseAmino): _214.MsgActivateAccountResponse;
                toAmino(message: _214.MsgActivateAccountResponse): _214.MsgActivateAccountResponseAmino;
                fromAminoMsg(object: _214.MsgActivateAccountResponseAminoMsg): _214.MsgActivateAccountResponse;
                fromProtoMsg(message: _214.MsgActivateAccountResponseProtoMsg): _214.MsgActivateAccountResponse;
                toProto(message: _214.MsgActivateAccountResponse): Uint8Array;
                toProtoMsg(message: _214.MsgActivateAccountResponse): _214.MsgActivateAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _213.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryParamsRequest;
                fromJSON(_: any): _213.QueryParamsRequest;
                toJSON(_: _213.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_213.QueryParamsRequest>): _213.QueryParamsRequest;
                fromAmino(_: _213.QueryParamsRequestAmino): _213.QueryParamsRequest;
                toAmino(_: _213.QueryParamsRequest): _213.QueryParamsRequestAmino;
                fromAminoMsg(object: _213.QueryParamsRequestAminoMsg): _213.QueryParamsRequest;
                fromProtoMsg(message: _213.QueryParamsRequestProtoMsg): _213.QueryParamsRequest;
                toProto(message: _213.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _213.QueryParamsRequest): _213.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _213.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryParamsResponse;
                fromJSON(object: any): _213.QueryParamsResponse;
                toJSON(message: _213.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_213.QueryParamsResponse>): _213.QueryParamsResponse;
                fromAmino(object: _213.QueryParamsResponseAmino): _213.QueryParamsResponse;
                toAmino(message: _213.QueryParamsResponse): _213.QueryParamsResponseAmino;
                fromAminoMsg(object: _213.QueryParamsResponseAminoMsg): _213.QueryParamsResponse;
                fromProtoMsg(message: _213.QueryParamsResponseProtoMsg): _213.QueryParamsResponse;
                toProto(message: _213.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _213.QueryParamsResponse): _213.QueryParamsResponseProtoMsg;
            };
            QueryGenerateAccountRequest: {
                typeUrl: string;
                encode(message: _213.QueryGenerateAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryGenerateAccountRequest;
                fromJSON(object: any): _213.QueryGenerateAccountRequest;
                toJSON(message: _213.QueryGenerateAccountRequest): unknown;
                fromPartial(object: Partial<_213.QueryGenerateAccountRequest>): _213.QueryGenerateAccountRequest;
                fromAmino(object: _213.QueryGenerateAccountRequestAmino): _213.QueryGenerateAccountRequest;
                toAmino(message: _213.QueryGenerateAccountRequest): _213.QueryGenerateAccountRequestAmino;
                fromAminoMsg(object: _213.QueryGenerateAccountRequestAminoMsg): _213.QueryGenerateAccountRequest;
                fromProtoMsg(message: _213.QueryGenerateAccountRequestProtoMsg): _213.QueryGenerateAccountRequest;
                toProto(message: _213.QueryGenerateAccountRequest): Uint8Array;
                toProtoMsg(message: _213.QueryGenerateAccountRequest): _213.QueryGenerateAccountRequestProtoMsg;
            };
            QueryGenerateAccountResponse: {
                typeUrl: string;
                encode(message: _213.QueryGenerateAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _213.QueryGenerateAccountResponse;
                fromJSON(object: any): _213.QueryGenerateAccountResponse;
                toJSON(message: _213.QueryGenerateAccountResponse): unknown;
                fromPartial(object: Partial<_213.QueryGenerateAccountResponse>): _213.QueryGenerateAccountResponse;
                fromAmino(object: _213.QueryGenerateAccountResponseAmino): _213.QueryGenerateAccountResponse;
                toAmino(message: _213.QueryGenerateAccountResponse): _213.QueryGenerateAccountResponseAmino;
                fromAminoMsg(object: _213.QueryGenerateAccountResponseAminoMsg): _213.QueryGenerateAccountResponse;
                fromProtoMsg(message: _213.QueryGenerateAccountResponseProtoMsg): _213.QueryGenerateAccountResponse;
                toProto(message: _213.QueryGenerateAccountResponse): Uint8Array;
                toProtoMsg(message: _213.QueryGenerateAccountResponse): _213.QueryGenerateAccountResponseProtoMsg;
            };
            CodeID: {
                typeUrl: string;
                encode(message: _212.CodeID, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.CodeID;
                fromJSON(object: any): _212.CodeID;
                toJSON(message: _212.CodeID): unknown;
                fromPartial(object: Partial<_212.CodeID>): _212.CodeID;
                fromAmino(object: _212.CodeIDAmino): _212.CodeID;
                toAmino(message: _212.CodeID): _212.CodeIDAmino;
                fromAminoMsg(object: _212.CodeIDAminoMsg): _212.CodeID;
                fromProtoMsg(message: _212.CodeIDProtoMsg): _212.CodeID;
                toProto(message: _212.CodeID): Uint8Array;
                toProtoMsg(message: _212.CodeID): _212.CodeIDProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _212.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _212.Params;
                fromJSON(object: any): _212.Params;
                toJSON(message: _212.Params): unknown;
                fromPartial(object: Partial<_212.Params>): _212.Params;
                fromAmino(object: _212.ParamsAmino): _212.Params;
                toAmino(message: _212.Params): _212.ParamsAmino;
                fromAminoMsg(object: _212.ParamsAminoMsg): _212.Params;
                fromProtoMsg(message: _212.ParamsProtoMsg): _212.Params;
                toProto(message: _212.Params): Uint8Array;
                toProtoMsg(message: _212.Params): _212.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _211.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _211.GenesisState;
                fromJSON(object: any): _211.GenesisState;
                toJSON(message: _211.GenesisState): unknown;
                fromPartial(object: Partial<_211.GenesisState>): _211.GenesisState;
                fromAmino(object: _211.GenesisStateAmino): _211.GenesisState;
                toAmino(message: _211.GenesisState): _211.GenesisStateAmino;
                fromAminoMsg(object: _211.GenesisStateAminoMsg): _211.GenesisState;
                fromProtoMsg(message: _211.GenesisStateProtoMsg): _211.GenesisState;
                toProto(message: _211.GenesisState): Uint8Array;
                toProtoMsg(message: _211.GenesisState): _211.GenesisStateProtoMsg;
            };
            SmartAccount: {
                typeUrl: string;
                encode(message: _210.SmartAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _210.SmartAccount;
                fromJSON(object: any): _210.SmartAccount;
                toJSON(message: _210.SmartAccount): unknown;
                fromPartial(object: Partial<_210.SmartAccount>): _210.SmartAccount;
                fromAmino(object: _210.SmartAccountAmino): _210.SmartAccount;
                toAmino(message: _210.SmartAccount): _210.SmartAccountAmino;
                fromAminoMsg(object: _210.SmartAccountAminoMsg): _210.SmartAccount;
                fromProtoMsg(message: _210.SmartAccountProtoMsg): _210.SmartAccount;
                toProto(message: _210.SmartAccount): Uint8Array;
                toProtoMsg(message: _210.SmartAccount): _210.SmartAccountProtoMsg;
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
            aura: {
                smartaccount: {
                    v1beta1: _354.MsgClientImpl;
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
            aura: {
                aura: {};
                smartaccount: {
                    v1beta1: {
                        params(request?: _213.QueryParamsRequest): Promise<_213.QueryParamsResponse>;
                        generateAccount(request: _213.QueryGenerateAccountRequest): Promise<_213.QueryGenerateAccountResponse>;
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
            aura: {
                smartaccount: {
                    v1beta1: _351.LCDQueryClient;
                };
            };
        }>;
    };
}
