import * as _221 from "./aura/aura";
import * as _222 from "./aura/genesis";
import * as _225 from "./smartaccount/v1beta1/account";
import * as _226 from "./smartaccount/v1beta1/genesis";
import * as _227 from "./smartaccount/v1beta1/params";
import * as _228 from "./smartaccount/v1beta1/query";
import * as _229 from "./smartaccount/v1beta1/tx";
import * as _371 from "./smartaccount/v1beta1/query.lcd";
import * as _372 from "./aura/query.rpc.Query";
import * as _373 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _374 from "./smartaccount/v1beta1/tx.rpc.msg";
export declare namespace aura {
    const aura: {
        QueryClientImpl: typeof _372.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {};
        GenesisState: {
            typeUrl: string;
            encode(message: _222.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GenesisState;
            fromJSON(object: any): _222.GenesisState;
            toJSON(message: _222.GenesisState): unknown;
            fromPartial(object: Partial<_222.GenesisState>): _222.GenesisState;
            fromAmino(object: _222.GenesisStateAmino): _222.GenesisState;
            toAmino(message: _222.GenesisState): _222.GenesisStateAmino;
            fromAminoMsg(object: _222.GenesisStateAminoMsg): _222.GenesisState;
            fromProtoMsg(message: _222.GenesisStateProtoMsg): _222.GenesisState;
            toProto(message: _222.GenesisState): Uint8Array;
            toProtoMsg(message: _222.GenesisState): _222.GenesisStateProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(message: _221.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.Params;
            fromJSON(object: any): _221.Params;
            toJSON(message: _221.Params): unknown;
            fromPartial(object: Partial<_221.Params>): _221.Params;
            fromAmino(object: _221.ParamsAmino): _221.Params;
            toAmino(message: _221.Params): _221.ParamsAmino;
            fromAminoMsg(object: _221.ParamsAminoMsg): _221.Params;
            fromProtoMsg(message: _221.ParamsProtoMsg): _221.Params;
            toProto(message: _221.Params): Uint8Array;
            toProtoMsg(message: _221.Params): _221.ParamsProtoMsg;
        };
    };
    namespace smartaccount {
        const v1beta1: {
            MsgClientImpl: typeof _374.MsgClientImpl;
            QueryClientImpl: typeof _373.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _228.QueryParamsRequest): Promise<_228.QueryParamsResponse>;
                generateAccount(request: _228.QueryGenerateAccountRequest): Promise<_228.QueryGenerateAccountResponse>;
            };
            LCDQueryClient: typeof _371.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    recover(value: _229.MsgRecover): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    activateAccount(value: _229.MsgActivateAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    recover(value: _229.MsgRecover): {
                        typeUrl: string;
                        value: _229.MsgRecover;
                    };
                    activateAccount(value: _229.MsgActivateAccount): {
                        typeUrl: string;
                        value: _229.MsgActivateAccount;
                    };
                };
                toJSON: {
                    recover(value: _229.MsgRecover): {
                        typeUrl: string;
                        value: unknown;
                    };
                    activateAccount(value: _229.MsgActivateAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    recover(value: any): {
                        typeUrl: string;
                        value: _229.MsgRecover;
                    };
                    activateAccount(value: any): {
                        typeUrl: string;
                        value: _229.MsgActivateAccount;
                    };
                };
                fromPartial: {
                    recover(value: _229.MsgRecover): {
                        typeUrl: string;
                        value: _229.MsgRecover;
                    };
                    activateAccount(value: _229.MsgActivateAccount): {
                        typeUrl: string;
                        value: _229.MsgActivateAccount;
                    };
                };
            };
            AminoConverter: {
                "/aura.smartaccount.v1beta1.MsgRecover": {
                    aminoType: string;
                    toAmino: (message: _229.MsgRecover) => _229.MsgRecoverAmino;
                    fromAmino: (object: _229.MsgRecoverAmino) => _229.MsgRecover;
                };
                "/aura.smartaccount.v1beta1.MsgActivateAccount": {
                    aminoType: string;
                    toAmino: (message: _229.MsgActivateAccount) => _229.MsgActivateAccountAmino;
                    fromAmino: (object: _229.MsgActivateAccountAmino) => _229.MsgActivateAccount;
                };
            };
            MsgRecover: {
                typeUrl: string;
                encode(message: _229.MsgRecover, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgRecover;
                fromJSON(object: any): _229.MsgRecover;
                toJSON(message: _229.MsgRecover): unknown;
                fromPartial(object: Partial<_229.MsgRecover>): _229.MsgRecover;
                fromAmino(object: _229.MsgRecoverAmino): _229.MsgRecover;
                toAmino(message: _229.MsgRecover): _229.MsgRecoverAmino;
                fromAminoMsg(object: _229.MsgRecoverAminoMsg): _229.MsgRecover;
                fromProtoMsg(message: _229.MsgRecoverProtoMsg): _229.MsgRecover;
                toProto(message: _229.MsgRecover): Uint8Array;
                toProtoMsg(message: _229.MsgRecover): _229.MsgRecoverProtoMsg;
            };
            MsgRecoverResponse: {
                typeUrl: string;
                encode(_: _229.MsgRecoverResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgRecoverResponse;
                fromJSON(_: any): _229.MsgRecoverResponse;
                toJSON(_: _229.MsgRecoverResponse): unknown;
                fromPartial(_: Partial<_229.MsgRecoverResponse>): _229.MsgRecoverResponse;
                fromAmino(_: _229.MsgRecoverResponseAmino): _229.MsgRecoverResponse;
                toAmino(_: _229.MsgRecoverResponse): _229.MsgRecoverResponseAmino;
                fromAminoMsg(object: _229.MsgRecoverResponseAminoMsg): _229.MsgRecoverResponse;
                fromProtoMsg(message: _229.MsgRecoverResponseProtoMsg): _229.MsgRecoverResponse;
                toProto(message: _229.MsgRecoverResponse): Uint8Array;
                toProtoMsg(message: _229.MsgRecoverResponse): _229.MsgRecoverResponseProtoMsg;
            };
            MsgActivateAccount: {
                typeUrl: string;
                encode(message: _229.MsgActivateAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgActivateAccount;
                fromJSON(object: any): _229.MsgActivateAccount;
                toJSON(message: _229.MsgActivateAccount): unknown;
                fromPartial(object: Partial<_229.MsgActivateAccount>): _229.MsgActivateAccount;
                fromAmino(object: _229.MsgActivateAccountAmino): _229.MsgActivateAccount;
                toAmino(message: _229.MsgActivateAccount): _229.MsgActivateAccountAmino;
                fromAminoMsg(object: _229.MsgActivateAccountAminoMsg): _229.MsgActivateAccount;
                fromProtoMsg(message: _229.MsgActivateAccountProtoMsg): _229.MsgActivateAccount;
                toProto(message: _229.MsgActivateAccount): Uint8Array;
                toProtoMsg(message: _229.MsgActivateAccount): _229.MsgActivateAccountProtoMsg;
            };
            MsgActivateAccountResponse: {
                typeUrl: string;
                encode(message: _229.MsgActivateAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.MsgActivateAccountResponse;
                fromJSON(object: any): _229.MsgActivateAccountResponse;
                toJSON(message: _229.MsgActivateAccountResponse): unknown;
                fromPartial(object: Partial<_229.MsgActivateAccountResponse>): _229.MsgActivateAccountResponse;
                fromAmino(object: _229.MsgActivateAccountResponseAmino): _229.MsgActivateAccountResponse;
                toAmino(message: _229.MsgActivateAccountResponse): _229.MsgActivateAccountResponseAmino;
                fromAminoMsg(object: _229.MsgActivateAccountResponseAminoMsg): _229.MsgActivateAccountResponse;
                fromProtoMsg(message: _229.MsgActivateAccountResponseProtoMsg): _229.MsgActivateAccountResponse;
                toProto(message: _229.MsgActivateAccountResponse): Uint8Array;
                toProtoMsg(message: _229.MsgActivateAccountResponse): _229.MsgActivateAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _228.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryParamsRequest;
                fromJSON(_: any): _228.QueryParamsRequest;
                toJSON(_: _228.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_228.QueryParamsRequest>): _228.QueryParamsRequest;
                fromAmino(_: _228.QueryParamsRequestAmino): _228.QueryParamsRequest;
                toAmino(_: _228.QueryParamsRequest): _228.QueryParamsRequestAmino;
                fromAminoMsg(object: _228.QueryParamsRequestAminoMsg): _228.QueryParamsRequest;
                fromProtoMsg(message: _228.QueryParamsRequestProtoMsg): _228.QueryParamsRequest;
                toProto(message: _228.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _228.QueryParamsRequest): _228.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _228.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryParamsResponse;
                fromJSON(object: any): _228.QueryParamsResponse;
                toJSON(message: _228.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_228.QueryParamsResponse>): _228.QueryParamsResponse;
                fromAmino(object: _228.QueryParamsResponseAmino): _228.QueryParamsResponse;
                toAmino(message: _228.QueryParamsResponse): _228.QueryParamsResponseAmino;
                fromAminoMsg(object: _228.QueryParamsResponseAminoMsg): _228.QueryParamsResponse;
                fromProtoMsg(message: _228.QueryParamsResponseProtoMsg): _228.QueryParamsResponse;
                toProto(message: _228.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _228.QueryParamsResponse): _228.QueryParamsResponseProtoMsg;
            };
            QueryGenerateAccountRequest: {
                typeUrl: string;
                encode(message: _228.QueryGenerateAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryGenerateAccountRequest;
                fromJSON(object: any): _228.QueryGenerateAccountRequest;
                toJSON(message: _228.QueryGenerateAccountRequest): unknown;
                fromPartial(object: Partial<_228.QueryGenerateAccountRequest>): _228.QueryGenerateAccountRequest;
                fromAmino(object: _228.QueryGenerateAccountRequestAmino): _228.QueryGenerateAccountRequest;
                toAmino(message: _228.QueryGenerateAccountRequest): _228.QueryGenerateAccountRequestAmino;
                fromAminoMsg(object: _228.QueryGenerateAccountRequestAminoMsg): _228.QueryGenerateAccountRequest;
                fromProtoMsg(message: _228.QueryGenerateAccountRequestProtoMsg): _228.QueryGenerateAccountRequest;
                toProto(message: _228.QueryGenerateAccountRequest): Uint8Array;
                toProtoMsg(message: _228.QueryGenerateAccountRequest): _228.QueryGenerateAccountRequestProtoMsg;
            };
            QueryGenerateAccountResponse: {
                typeUrl: string;
                encode(message: _228.QueryGenerateAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.QueryGenerateAccountResponse;
                fromJSON(object: any): _228.QueryGenerateAccountResponse;
                toJSON(message: _228.QueryGenerateAccountResponse): unknown;
                fromPartial(object: Partial<_228.QueryGenerateAccountResponse>): _228.QueryGenerateAccountResponse;
                fromAmino(object: _228.QueryGenerateAccountResponseAmino): _228.QueryGenerateAccountResponse;
                toAmino(message: _228.QueryGenerateAccountResponse): _228.QueryGenerateAccountResponseAmino;
                fromAminoMsg(object: _228.QueryGenerateAccountResponseAminoMsg): _228.QueryGenerateAccountResponse;
                fromProtoMsg(message: _228.QueryGenerateAccountResponseProtoMsg): _228.QueryGenerateAccountResponse;
                toProto(message: _228.QueryGenerateAccountResponse): Uint8Array;
                toProtoMsg(message: _228.QueryGenerateAccountResponse): _228.QueryGenerateAccountResponseProtoMsg;
            };
            CodeID: {
                typeUrl: string;
                encode(message: _227.CodeID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.CodeID;
                fromJSON(object: any): _227.CodeID;
                toJSON(message: _227.CodeID): unknown;
                fromPartial(object: Partial<_227.CodeID>): _227.CodeID;
                fromAmino(object: _227.CodeIDAmino): _227.CodeID;
                toAmino(message: _227.CodeID): _227.CodeIDAmino;
                fromAminoMsg(object: _227.CodeIDAminoMsg): _227.CodeID;
                fromProtoMsg(message: _227.CodeIDProtoMsg): _227.CodeID;
                toProto(message: _227.CodeID): Uint8Array;
                toProtoMsg(message: _227.CodeID): _227.CodeIDProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _227.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Params;
                fromJSON(object: any): _227.Params;
                toJSON(message: _227.Params): unknown;
                fromPartial(object: Partial<_227.Params>): _227.Params;
                fromAmino(object: _227.ParamsAmino): _227.Params;
                toAmino(message: _227.Params): _227.ParamsAmino;
                fromAminoMsg(object: _227.ParamsAminoMsg): _227.Params;
                fromProtoMsg(message: _227.ParamsProtoMsg): _227.Params;
                toProto(message: _227.Params): Uint8Array;
                toProtoMsg(message: _227.Params): _227.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _226.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GenesisState;
                fromJSON(object: any): _226.GenesisState;
                toJSON(message: _226.GenesisState): unknown;
                fromPartial(object: Partial<_226.GenesisState>): _226.GenesisState;
                fromAmino(object: _226.GenesisStateAmino): _226.GenesisState;
                toAmino(message: _226.GenesisState): _226.GenesisStateAmino;
                fromAminoMsg(object: _226.GenesisStateAminoMsg): _226.GenesisState;
                fromProtoMsg(message: _226.GenesisStateProtoMsg): _226.GenesisState;
                toProto(message: _226.GenesisState): Uint8Array;
                toProtoMsg(message: _226.GenesisState): _226.GenesisStateProtoMsg;
            };
            SmartAccount: {
                typeUrl: string;
                encode(message: _225.SmartAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.SmartAccount;
                fromJSON(object: any): _225.SmartAccount;
                toJSON(message: _225.SmartAccount): unknown;
                fromPartial(object: Partial<_225.SmartAccount>): _225.SmartAccount;
                fromAmino(object: _225.SmartAccountAmino): _225.SmartAccount;
                toAmino(message: _225.SmartAccount): _225.SmartAccountAmino;
                fromAminoMsg(object: _225.SmartAccountAminoMsg): _225.SmartAccount;
                fromProtoMsg(message: _225.SmartAccountProtoMsg): _225.SmartAccount;
                toProto(message: _225.SmartAccount): Uint8Array;
                toProtoMsg(message: _225.SmartAccount): _225.SmartAccountProtoMsg;
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
                    v1beta1: _374.MsgClientImpl;
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
                        params(request?: _228.QueryParamsRequest): Promise<_228.QueryParamsResponse>;
                        generateAccount(request: _228.QueryGenerateAccountRequest): Promise<_228.QueryGenerateAccountResponse>;
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
                    v1beta1: _371.LCDQueryClient;
                };
            };
        }>;
    };
}
