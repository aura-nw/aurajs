import * as _0 from "./auth/v1beta1/auth";
import * as _1 from "./auth/v1beta1/genesis";
import * as _2 from "./auth/v1beta1/query";
import * as _3 from "./authz/v1beta1/authz";
import * as _4 from "./authz/v1beta1/event";
import * as _5 from "./authz/v1beta1/genesis";
import * as _6 from "./authz/v1beta1/query";
import * as _7 from "./authz/v1beta1/tx";
import * as _8 from "./bank/v1beta1/authz";
import * as _9 from "./bank/v1beta1/bank";
import * as _10 from "./bank/v1beta1/genesis";
import * as _11 from "./bank/v1beta1/query";
import * as _12 from "./bank/v1beta1/tx";
import * as _13 from "./base/abci/v1beta1/abci";
import * as _14 from "./base/kv/v1beta1/kv";
import * as _15 from "./base/node/v1beta1/query";
import * as _16 from "./base/query/v1beta1/pagination";
import * as _17 from "./base/reflection/v1beta1/reflection";
import * as _18 from "./base/reflection/v2alpha1/reflection";
import * as _19 from "./base/snapshots/v1beta1/snapshot";
import * as _20 from "./base/store/v1beta1/commit_info";
import * as _21 from "./base/store/v1beta1/listening";
import * as _22 from "./base/tendermint/v1beta1/query";
import * as _23 from "./base/v1beta1/coin";
import * as _24 from "./capability/v1beta1/capability";
import * as _25 from "./capability/v1beta1/genesis";
import * as _26 from "./crisis/v1beta1/genesis";
import * as _27 from "./crisis/v1beta1/tx";
import * as _28 from "./crypto/ed25519/keys";
import * as _29 from "./crypto/multisig/keys";
import * as _30 from "./crypto/secp256k1/keys";
import * as _31 from "./crypto/secp256r1/keys";
import * as _32 from "./distribution/v1beta1/distribution";
import * as _33 from "./distribution/v1beta1/genesis";
import * as _34 from "./distribution/v1beta1/query";
import * as _35 from "./distribution/v1beta1/tx";
import * as _36 from "./evidence/v1beta1/evidence";
import * as _37 from "./evidence/v1beta1/genesis";
import * as _38 from "./evidence/v1beta1/query";
import * as _39 from "./evidence/v1beta1/tx";
import * as _40 from "./feegrant/v1beta1/feegrant";
import * as _41 from "./feegrant/v1beta1/genesis";
import * as _42 from "./feegrant/v1beta1/query";
import * as _43 from "./feegrant/v1beta1/tx";
import * as _44 from "../feegrant/v1beta1/feegrant";
import * as _45 from "./genutil/v1beta1/genesis";
import * as _46 from "./gov/v1beta1/genesis";
import * as _47 from "./gov/v1beta1/gov";
import * as _48 from "./gov/v1beta1/query";
import * as _49 from "./gov/v1beta1/tx";
import * as _50 from "./mint/v1beta1/genesis";
import * as _51 from "./mint/v1beta1/mint";
import * as _52 from "./mint/v1beta1/query";
import * as _53 from "./params/v1beta1/params";
import * as _54 from "./params/v1beta1/query";
import * as _55 from "./slashing/v1beta1/genesis";
import * as _56 from "./slashing/v1beta1/query";
import * as _57 from "./slashing/v1beta1/slashing";
import * as _58 from "./slashing/v1beta1/tx";
import * as _59 from "./staking/v1beta1/authz";
import * as _60 from "./staking/v1beta1/genesis";
import * as _61 from "./staking/v1beta1/query";
import * as _62 from "./staking/v1beta1/staking";
import * as _63 from "./staking/v1beta1/tx";
import * as _64 from "./tx/signing/v1beta1/signing";
import * as _65 from "./tx/v1beta1/service";
import * as _66 from "./tx/v1beta1/tx";
import * as _67 from "./upgrade/v1beta1/query";
import * as _68 from "./upgrade/v1beta1/upgrade";
import * as _69 from "./vesting/v1beta1/tx";
import * as _70 from "./vesting/v1beta1/vesting";
import * as _71 from "../vesting/v1beta1/tx";
import * as _155 from "./auth/v1beta1/query.lcd";
import * as _156 from "./authz/v1beta1/query.lcd";
import * as _157 from "./bank/v1beta1/query.lcd";
import * as _158 from "./base/node/v1beta1/query.lcd";
import * as _159 from "./base/tendermint/v1beta1/query.lcd";
import * as _160 from "./distribution/v1beta1/query.lcd";
import * as _161 from "./evidence/v1beta1/query.lcd";
import * as _162 from "./feegrant/v1beta1/query.lcd";
import * as _163 from "./gov/v1beta1/query.lcd";
import * as _164 from "./mint/v1beta1/query.lcd";
import * as _165 from "./params/v1beta1/query.lcd";
import * as _166 from "./slashing/v1beta1/query.lcd";
import * as _167 from "./staking/v1beta1/query.lcd";
import * as _168 from "./tx/v1beta1/service.lcd";
import * as _169 from "./upgrade/v1beta1/query.lcd";
import * as _170 from "./auth/v1beta1/query.rpc.Query";
import * as _171 from "./authz/v1beta1/query.rpc.Query";
import * as _172 from "./bank/v1beta1/query.rpc.Query";
import * as _173 from "./base/node/v1beta1/query.rpc.Service";
import * as _174 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _175 from "./distribution/v1beta1/query.rpc.Query";
import * as _176 from "./evidence/v1beta1/query.rpc.Query";
import * as _177 from "./feegrant/v1beta1/query.rpc.Query";
import * as _178 from "./gov/v1beta1/query.rpc.Query";
import * as _179 from "./mint/v1beta1/query.rpc.Query";
import * as _180 from "./params/v1beta1/query.rpc.Query";
import * as _181 from "./slashing/v1beta1/query.rpc.Query";
import * as _182 from "./staking/v1beta1/query.rpc.Query";
import * as _183 from "./tx/v1beta1/service.rpc.Service";
import * as _184 from "./upgrade/v1beta1/query.rpc.Query";
import * as _185 from "./authz/v1beta1/tx.rpc.msg";
import * as _186 from "./bank/v1beta1/tx.rpc.msg";
import * as _187 from "./crisis/v1beta1/tx.rpc.msg";
import * as _188 from "./distribution/v1beta1/tx.rpc.msg";
import * as _189 from "./evidence/v1beta1/tx.rpc.msg";
import * as _190 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _191 from "./gov/v1beta1/tx.rpc.msg";
import * as _192 from "./slashing/v1beta1/tx.rpc.msg";
import * as _193 from "./staking/v1beta1/tx.rpc.msg";
import * as _194 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _170.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _2.QueryAccountsRequest): Promise<_2.QueryAccountsResponse>;
                account(request: _2.QueryAccountRequest): Promise<_2.QueryAccountResponse>;
                params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                moduleAccountByName(request: _2.QueryModuleAccountByNameRequest): Promise<_2.QueryModuleAccountByNameResponse>;
            };
            LCDQueryClient: typeof _155.LCDQueryClient;
            QueryAccountsRequest: {
                encode(message: _2.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAccountsRequest;
                fromJSON(object: any): _2.QueryAccountsRequest;
                toJSON(message: _2.QueryAccountsRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _2.QueryAccountsRequest;
            };
            QueryAccountsResponse: {
                encode(message: _2.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAccountsResponse;
                fromJSON(object: any): _2.QueryAccountsResponse;
                toJSON(message: _2.QueryAccountsResponse): unknown;
                fromPartial(object: {
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _2.QueryAccountsResponse;
            };
            QueryAccountRequest: {
                encode(message: _2.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAccountRequest;
                fromJSON(object: any): _2.QueryAccountRequest;
                toJSON(message: _2.QueryAccountRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _2.QueryAccountRequest;
            };
            QueryAccountResponse: {
                encode(message: _2.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryAccountResponse;
                fromJSON(object: any): _2.QueryAccountResponse;
                toJSON(message: _2.QueryAccountResponse): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _2.QueryAccountResponse;
            };
            QueryParamsRequest: {
                encode(_: _2.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsRequest;
                fromJSON(_: any): _2.QueryParamsRequest;
                toJSON(_: _2.QueryParamsRequest): unknown;
                fromPartial(_: {}): _2.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _2.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryParamsResponse;
                fromJSON(object: any): _2.QueryParamsResponse;
                toJSON(message: _2.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").default;
                        txSigLimit?: string | number | import("long").default;
                        txSizeCostPerByte?: string | number | import("long").default;
                        sigVerifyCostEd25519?: string | number | import("long").default;
                        sigVerifyCostSecp256k1?: string | number | import("long").default;
                    };
                }): _2.QueryParamsResponse;
            };
            QueryModuleAccountByNameRequest: {
                encode(message: _2.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _2.QueryModuleAccountByNameRequest;
                toJSON(message: _2.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _2.QueryModuleAccountByNameRequest;
            };
            QueryModuleAccountByNameResponse: {
                encode(message: _2.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _2.QueryModuleAccountByNameResponse;
                toJSON(message: _2.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: {
                    account?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _2.QueryModuleAccountByNameResponse;
            };
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromJSON(object: any): _1.GenesisState;
                toJSON(message: _1.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        maxMemoCharacters?: string | number | import("long").default;
                        txSigLimit?: string | number | import("long").default;
                        txSizeCostPerByte?: string | number | import("long").default;
                        sigVerifyCostEd25519?: string | number | import("long").default;
                        sigVerifyCostSecp256k1?: string | number | import("long").default;
                    };
                    accounts?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _1.GenesisState;
            };
            BaseAccount: {
                encode(message: _0.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.BaseAccount;
                fromJSON(object: any): _0.BaseAccount;
                toJSON(message: _0.BaseAccount): unknown;
                fromPartial(object: {
                    address?: string;
                    pubKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    accountNumber?: string | number | import("long").default;
                    sequence?: string | number | import("long").default;
                }): _0.BaseAccount;
            };
            ModuleAccount: {
                encode(message: _0.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.ModuleAccount;
                fromJSON(object: any): _0.ModuleAccount;
                toJSON(message: _0.ModuleAccount): unknown;
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
                    name?: string;
                    permissions?: string[];
                }): _0.ModuleAccount;
            };
            Params: {
                encode(message: _0.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Params;
                fromJSON(object: any): _0.Params;
                toJSON(message: _0.Params): unknown;
                fromPartial(object: {
                    maxMemoCharacters?: string | number | import("long").default;
                    txSigLimit?: string | number | import("long").default;
                    txSizeCostPerByte?: string | number | import("long").default;
                    sigVerifyCostEd25519?: string | number | import("long").default;
                    sigVerifyCostSecp256k1?: string | number | import("long").default;
                }): _0.Params;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _185.MsgClientImpl;
            QueryClientImpl: typeof _171.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _6.QueryGrantsRequest): Promise<_6.QueryGrantsResponse>;
                granterGrants(request: _6.QueryGranterGrantsRequest): Promise<_6.QueryGranterGrantsResponse>;
                granteeGrants(request: _6.QueryGranteeGrantsRequest): Promise<_6.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _156.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: _7.MsgGrant;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: _7.MsgExec;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: _7.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _7.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _7.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _7.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _7.MsgGrant): {
                        typeUrl: string;
                        value: _7.MsgGrant;
                    };
                    exec(value: _7.MsgExec): {
                        typeUrl: string;
                        value: _7.MsgExec;
                    };
                    revoke(value: _7.MsgRevoke): {
                        typeUrl: string;
                        value: _7.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, grant }: _7.MsgGrant) => {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    };
                    fromAmino: ({ granter, grantee, grant }: {
                        granter: string;
                        grantee: string;
                        grant: {
                            authorization: {
                                type_url: string;
                                value: Uint8Array;
                            };
                            expiration: {
                                seconds: string;
                                nanos: number;
                            };
                        };
                    }) => _7.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: ({ grantee, msgs }: _7.MsgExec) => {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    };
                    fromAmino: ({ grantee, msgs }: {
                        grantee: string;
                        msgs: {
                            type_url: string;
                            value: Uint8Array;
                        }[];
                    }) => _7.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, msgTypeUrl }: _7.MsgRevoke) => {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    };
                    fromAmino: ({ granter, grantee, msg_type_url }: {
                        granter: string;
                        grantee: string;
                        msg_type_url: string;
                    }) => _7.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _7.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgGrant;
                fromJSON(object: any): _7.MsgGrant;
                toJSON(message: _7.MsgGrant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    grant?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    };
                }): _7.MsgGrant;
            };
            MsgExecResponse: {
                encode(message: _7.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgExecResponse;
                fromJSON(object: any): _7.MsgExecResponse;
                toJSON(message: _7.MsgExecResponse): unknown;
                fromPartial(object: {
                    results?: Uint8Array[];
                }): _7.MsgExecResponse;
            };
            MsgExec: {
                encode(message: _7.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgExec;
                fromJSON(object: any): _7.MsgExec;
                toJSON(message: _7.MsgExec): unknown;
                fromPartial(object: {
                    grantee?: string;
                    msgs?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _7.MsgExec;
            };
            MsgGrantResponse: {
                encode(_: _7.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgGrantResponse;
                fromJSON(_: any): _7.MsgGrantResponse;
                toJSON(_: _7.MsgGrantResponse): unknown;
                fromPartial(_: {}): _7.MsgGrantResponse;
            };
            MsgRevoke: {
                encode(message: _7.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgRevoke;
                fromJSON(object: any): _7.MsgRevoke;
                toJSON(message: _7.MsgRevoke): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                }): _7.MsgRevoke;
            };
            MsgRevokeResponse: {
                encode(_: _7.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.MsgRevokeResponse;
                fromJSON(_: any): _7.MsgRevokeResponse;
                toJSON(_: _7.MsgRevokeResponse): unknown;
                fromPartial(_: {}): _7.MsgRevokeResponse;
            };
            QueryGrantsRequest: {
                encode(message: _6.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGrantsRequest;
                fromJSON(object: any): _6.QueryGrantsRequest;
                toJSON(message: _6.QueryGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    msgTypeUrl?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _6.QueryGrantsRequest;
            };
            QueryGrantsResponse: {
                encode(message: _6.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGrantsResponse;
                fromJSON(object: any): _6.QueryGrantsResponse;
                toJSON(message: _6.QueryGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _6.QueryGrantsResponse;
            };
            QueryGranterGrantsRequest: {
                encode(message: _6.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranterGrantsRequest;
                fromJSON(object: any): _6.QueryGranterGrantsRequest;
                toJSON(message: _6.QueryGranterGrantsRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _6.QueryGranterGrantsRequest;
            };
            QueryGranterGrantsResponse: {
                encode(message: _6.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranterGrantsResponse;
                fromJSON(object: any): _6.QueryGranterGrantsResponse;
                toJSON(message: _6.QueryGranterGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _6.QueryGranterGrantsResponse;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _6.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranteeGrantsRequest;
                fromJSON(object: any): _6.QueryGranteeGrantsRequest;
                toJSON(message: _6.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _6.QueryGranteeGrantsRequest;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _6.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.QueryGranteeGrantsResponse;
                fromJSON(object: any): _6.QueryGranteeGrantsResponse;
                toJSON(message: _6.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: {
                    grants?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _6.QueryGranteeGrantsResponse;
            };
            GenesisState: {
                encode(message: _5.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.GenesisState;
                fromJSON(object: any): _5.GenesisState;
                toJSON(message: _5.GenesisState): unknown;
                fromPartial(object: {
                    authorization?: {
                        granter?: string;
                        grantee?: string;
                        authorization?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        expiration?: Date;
                    }[];
                }): _5.GenesisState;
            };
            EventGrant: {
                encode(message: _4.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventGrant;
                fromJSON(object: any): _4.EventGrant;
                toJSON(message: _4.EventGrant): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _4.EventGrant;
            };
            EventRevoke: {
                encode(message: _4.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.EventRevoke;
                fromJSON(object: any): _4.EventRevoke;
                toJSON(message: _4.EventRevoke): unknown;
                fromPartial(object: {
                    msgTypeUrl?: string;
                    granter?: string;
                    grantee?: string;
                }): _4.EventRevoke;
            };
            GenericAuthorization: {
                encode(message: _3.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GenericAuthorization;
                fromJSON(object: any): _3.GenericAuthorization;
                toJSON(message: _3.GenericAuthorization): unknown;
                fromPartial(object: {
                    msg?: string;
                }): _3.GenericAuthorization;
            };
            Grant: {
                encode(message: _3.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Grant;
                fromJSON(object: any): _3.Grant;
                toJSON(message: _3.Grant): unknown;
                fromPartial(object: {
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _3.Grant;
            };
            GrantAuthorization: {
                encode(message: _3.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.GrantAuthorization;
                fromJSON(object: any): _3.GrantAuthorization;
                toJSON(message: _3.GrantAuthorization): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    authorization?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    expiration?: Date;
                }): _3.GrantAuthorization;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _186.MsgClientImpl;
            QueryClientImpl: typeof _172.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _11.QueryBalanceRequest): Promise<_11.QueryBalanceResponse>;
                allBalances(request: _11.QueryAllBalancesRequest): Promise<_11.QueryAllBalancesResponse>;
                spendableBalances(request: _11.QuerySpendableBalancesRequest): Promise<_11.QuerySpendableBalancesResponse>;
                totalSupply(request?: _11.QueryTotalSupplyRequest): Promise<_11.QueryTotalSupplyResponse>;
                supplyOf(request: _11.QuerySupplyOfRequest): Promise<_11.QuerySupplyOfResponse>;
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                denomMetadata(request: _11.QueryDenomMetadataRequest): Promise<_11.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _11.QueryDenomsMetadataRequest): Promise<_11.QueryDenomsMetadataResponse>;
            };
            LCDQueryClient: typeof _157.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _12.MsgSend): {
                        typeUrl: string;
                        value: _12.MsgSend;
                    };
                    multiSend(value: _12.MsgMultiSend): {
                        typeUrl: string;
                        value: _12.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount }: _12.MsgSend) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ from_address, to_address, amount }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _12.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: ({ inputs, outputs }: _12.MsgMultiSend) => {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    };
                    fromAmino: ({ inputs, outputs }: {
                        inputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                        outputs: {
                            address: string;
                            coins: {
                                denom: string;
                                amount: string;
                            }[];
                        }[];
                    }) => _12.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _12.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSend;
                fromJSON(object: any): _12.MsgSend;
                toJSON(message: _12.MsgSend): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _12.MsgSend;
            };
            MsgSendResponse: {
                encode(_: _12.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgSendResponse;
                fromJSON(_: any): _12.MsgSendResponse;
                toJSON(_: _12.MsgSendResponse): unknown;
                fromPartial(_: {}): _12.MsgSendResponse;
            };
            MsgMultiSend: {
                encode(message: _12.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgMultiSend;
                fromJSON(object: any): _12.MsgMultiSend;
                toJSON(message: _12.MsgMultiSend): unknown;
                fromPartial(object: {
                    inputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    outputs?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _12.MsgMultiSend;
            };
            MsgMultiSendResponse: {
                encode(_: _12.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.MsgMultiSendResponse;
                fromJSON(_: any): _12.MsgMultiSendResponse;
                toJSON(_: _12.MsgMultiSendResponse): unknown;
                fromPartial(_: {}): _12.MsgMultiSendResponse;
            };
            QueryBalanceRequest: {
                encode(message: _11.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryBalanceRequest;
                fromJSON(object: any): _11.QueryBalanceRequest;
                toJSON(message: _11.QueryBalanceRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    denom?: string;
                }): _11.QueryBalanceRequest;
            };
            QueryBalanceResponse: {
                encode(message: _11.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryBalanceResponse;
                fromJSON(object: any): _11.QueryBalanceResponse;
                toJSON(message: _11.QueryBalanceResponse): unknown;
                fromPartial(object: {
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _11.QueryBalanceResponse;
            };
            QueryAllBalancesRequest: {
                encode(message: _11.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAllBalancesRequest;
                fromJSON(object: any): _11.QueryAllBalancesRequest;
                toJSON(message: _11.QueryAllBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryAllBalancesRequest;
            };
            QueryAllBalancesResponse: {
                encode(message: _11.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryAllBalancesResponse;
                fromJSON(object: any): _11.QueryAllBalancesResponse;
                toJSON(message: _11.QueryAllBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _11.QueryAllBalancesResponse;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _11.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySpendableBalancesRequest;
                fromJSON(object: any): _11.QuerySpendableBalancesRequest;
                toJSON(message: _11.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QuerySpendableBalancesRequest;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _11.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySpendableBalancesResponse;
                fromJSON(object: any): _11.QuerySpendableBalancesResponse;
                toJSON(message: _11.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: {
                    balances?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _11.QuerySpendableBalancesResponse;
            };
            QueryTotalSupplyRequest: {
                encode(message: _11.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryTotalSupplyRequest;
                fromJSON(object: any): _11.QueryTotalSupplyRequest;
                toJSON(message: _11.QueryTotalSupplyRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryTotalSupplyRequest;
            };
            QueryTotalSupplyResponse: {
                encode(message: _11.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryTotalSupplyResponse;
                fromJSON(object: any): _11.QueryTotalSupplyResponse;
                toJSON(message: _11.QueryTotalSupplyResponse): unknown;
                fromPartial(object: {
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _11.QueryTotalSupplyResponse;
            };
            QuerySupplyOfRequest: {
                encode(message: _11.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySupplyOfRequest;
                fromJSON(object: any): _11.QuerySupplyOfRequest;
                toJSON(message: _11.QuerySupplyOfRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _11.QuerySupplyOfRequest;
            };
            QuerySupplyOfResponse: {
                encode(message: _11.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QuerySupplyOfResponse;
                fromJSON(object: any): _11.QuerySupplyOfResponse;
                toJSON(message: _11.QuerySupplyOfResponse): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _11.QuerySupplyOfResponse;
            };
            QueryParamsRequest: {
                encode(_: _11.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsRequest;
                fromJSON(_: any): _11.QueryParamsRequest;
                toJSON(_: _11.QueryParamsRequest): unknown;
                fromPartial(_: {}): _11.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _11.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryParamsResponse;
                fromJSON(object: any): _11.QueryParamsResponse;
                toJSON(message: _11.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                }): _11.QueryParamsResponse;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _11.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomsMetadataRequest;
                fromJSON(object: any): _11.QueryDenomsMetadataRequest;
                toJSON(message: _11.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _11.QueryDenomsMetadataRequest;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _11.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomsMetadataResponse;
                fromJSON(object: any): _11.QueryDenomsMetadataResponse;
                toJSON(message: _11.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: {
                    metadatas?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _11.QueryDenomsMetadataResponse;
            };
            QueryDenomMetadataRequest: {
                encode(message: _11.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomMetadataRequest;
                fromJSON(object: any): _11.QueryDenomMetadataRequest;
                toJSON(message: _11.QueryDenomMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _11.QueryDenomMetadataRequest;
            };
            QueryDenomMetadataResponse: {
                encode(message: _11.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.QueryDenomMetadataResponse;
                fromJSON(object: any): _11.QueryDenomMetadataResponse;
                toJSON(message: _11.QueryDenomMetadataResponse): unknown;
                fromPartial(object: {
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    };
                }): _11.QueryDenomMetadataResponse;
            };
            GenesisState: {
                encode(message: _10.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.GenesisState;
                fromJSON(object: any): _10.GenesisState;
                toJSON(message: _10.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        sendEnabled?: {
                            denom?: string;
                            enabled?: boolean;
                        }[];
                        defaultSendEnabled?: boolean;
                    };
                    balances?: {
                        address?: string;
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    supply?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    denomMetadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                    }[];
                }): _10.GenesisState;
            };
            Balance: {
                encode(message: _10.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Balance;
                fromJSON(object: any): _10.Balance;
                toJSON(message: _10.Balance): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _10.Balance;
            };
            Params: {
                encode(message: _9.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Params;
                fromJSON(object: any): _9.Params;
                toJSON(message: _9.Params): unknown;
                fromPartial(object: {
                    sendEnabled?: {
                        denom?: string;
                        enabled?: boolean;
                    }[];
                    defaultSendEnabled?: boolean;
                }): _9.Params;
            };
            SendEnabled: {
                encode(message: _9.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.SendEnabled;
                fromJSON(object: any): _9.SendEnabled;
                toJSON(message: _9.SendEnabled): unknown;
                fromPartial(object: {
                    denom?: string;
                    enabled?: boolean;
                }): _9.SendEnabled;
            };
            Input: {
                encode(message: _9.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Input;
                fromJSON(object: any): _9.Input;
                toJSON(message: _9.Input): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _9.Input;
            };
            Output: {
                encode(message: _9.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Output;
                fromJSON(object: any): _9.Output;
                toJSON(message: _9.Output): unknown;
                fromPartial(object: {
                    address?: string;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _9.Output;
            };
            Supply: {
                encode(message: _9.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Supply;
                fromJSON(object: any): _9.Supply;
                toJSON(message: _9.Supply): unknown;
                fromPartial(object: {
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _9.Supply;
            };
            DenomUnit: {
                encode(message: _9.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.DenomUnit;
                fromJSON(object: any): _9.DenomUnit;
                toJSON(message: _9.DenomUnit): unknown;
                fromPartial(object: {
                    denom?: string;
                    exponent?: number;
                    aliases?: string[];
                }): _9.DenomUnit;
            };
            Metadata: {
                encode(message: _9.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Metadata;
                fromJSON(object: any): _9.Metadata;
                toJSON(message: _9.Metadata): unknown;
                fromPartial(object: {
                    description?: string;
                    denomUnits?: {
                        denom?: string;
                        exponent?: number;
                        aliases?: string[];
                    }[];
                    base?: string;
                    display?: string;
                    name?: string;
                    symbol?: string;
                }): _9.Metadata;
            };
            SendAuthorization: {
                encode(message: _8.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.SendAuthorization;
                fromJSON(object: any): _8.SendAuthorization;
                toJSON(message: _8.SendAuthorization): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _8.SendAuthorization;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _13.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxResponse;
                    fromJSON(object: any): _13.TxResponse;
                    toJSON(message: _13.TxResponse): unknown;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _13.TxResponse;
                };
                ABCIMessageLog: {
                    encode(message: _13.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.ABCIMessageLog;
                    fromJSON(object: any): _13.ABCIMessageLog;
                    toJSON(message: _13.ABCIMessageLog): unknown;
                    fromPartial(object: {
                        msgIndex?: number;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: string;
                                value?: string;
                            }[];
                        }[];
                    }): _13.ABCIMessageLog;
                };
                StringEvent: {
                    encode(message: _13.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.StringEvent;
                    fromJSON(object: any): _13.StringEvent;
                    toJSON(message: _13.StringEvent): unknown;
                    fromPartial(object: {
                        type?: string;
                        attributes?: {
                            key?: string;
                            value?: string;
                        }[];
                    }): _13.StringEvent;
                };
                Attribute: {
                    encode(message: _13.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Attribute;
                    fromJSON(object: any): _13.Attribute;
                    toJSON(message: _13.Attribute): unknown;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _13.Attribute;
                };
                GasInfo: {
                    encode(message: _13.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.GasInfo;
                    fromJSON(object: any): _13.GasInfo;
                    toJSON(message: _13.GasInfo): unknown;
                    fromPartial(object: {
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                    }): _13.GasInfo;
                };
                Result: {
                    encode(message: _13.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Result;
                    fromJSON(object: any): _13.Result;
                    toJSON(message: _13.Result): unknown;
                    fromPartial(object: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }): _13.Result;
                };
                SimulationResponse: {
                    encode(message: _13.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SimulationResponse;
                    fromJSON(object: any): _13.SimulationResponse;
                    toJSON(message: _13.SimulationResponse): unknown;
                    fromPartial(object: {
                        gasInfo?: {
                            gasWanted?: string | number | import("long").default;
                            gasUsed?: string | number | import("long").default;
                        };
                        result?: {
                            data?: Uint8Array;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        };
                    }): _13.SimulationResponse;
                };
                MsgData: {
                    encode(message: _13.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.MsgData;
                    fromJSON(object: any): _13.MsgData;
                    toJSON(message: _13.MsgData): unknown;
                    fromPartial(object: {
                        msgType?: string;
                        data?: Uint8Array;
                    }): _13.MsgData;
                };
                TxMsgData: {
                    encode(message: _13.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TxMsgData;
                    fromJSON(object: any): _13.TxMsgData;
                    toJSON(message: _13.TxMsgData): unknown;
                    fromPartial(object: {
                        data?: {
                            msgType?: string;
                            data?: Uint8Array;
                        }[];
                    }): _13.TxMsgData;
                };
                SearchTxsResult: {
                    encode(message: _13.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.SearchTxsResult;
                    fromJSON(object: any): _13.SearchTxsResult;
                    toJSON(message: _13.SearchTxsResult): unknown;
                    fromPartial(object: {
                        totalCount?: string | number | import("long").default;
                        count?: string | number | import("long").default;
                        pageNumber?: string | number | import("long").default;
                        pageTotal?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        txs?: {
                            height?: string | number | import("long").default;
                            txhash?: string;
                            codespace?: string;
                            code?: number;
                            data?: string;
                            rawLog?: string;
                            logs?: {
                                msgIndex?: number;
                                log?: string;
                                events?: {
                                    type?: string;
                                    attributes?: {
                                        key?: string;
                                        value?: string;
                                    }[];
                                }[];
                            }[];
                            info?: string;
                            gasWanted?: string | number | import("long").default;
                            gasUsed?: string | number | import("long").default;
                            tx?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            timestamp?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    index?: boolean;
                                }[];
                            }[];
                        }[];
                    }): _13.SearchTxsResult;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _14.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Pairs;
                    fromJSON(object: any): _14.Pairs;
                    toJSON(message: _14.Pairs): unknown;
                    fromPartial(object: {
                        pairs?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _14.Pairs;
                };
                Pair: {
                    encode(message: _14.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Pair;
                    fromJSON(object: any): _14.Pair;
                    toJSON(message: _14.Pair): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _14.Pair;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _173.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                };
                LCDQueryClient: typeof _158.LCDQueryClient;
                ConfigRequest: {
                    encode(_: _15.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ConfigRequest;
                    fromJSON(_: any): _15.ConfigRequest;
                    toJSON(_: _15.ConfigRequest): unknown;
                    fromPartial(_: {}): _15.ConfigRequest;
                };
                ConfigResponse: {
                    encode(message: _15.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.ConfigResponse;
                    fromJSON(object: any): _15.ConfigResponse;
                    toJSON(message: _15.ConfigResponse): unknown;
                    fromPartial(object: {
                        minimumGasPrice?: string;
                    }): _15.ConfigResponse;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _16.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageRequest;
                    fromJSON(object: any): _16.PageRequest;
                    toJSON(message: _16.PageRequest): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    }): _16.PageRequest;
                };
                PageResponse: {
                    encode(message: _16.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.PageResponse;
                    fromJSON(object: any): _16.PageResponse;
                    toJSON(message: _16.PageResponse): unknown;
                    fromPartial(object: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    }): _16.PageResponse;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _17.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ListAllInterfacesRequest;
                    fromJSON(_: any): _17.ListAllInterfacesRequest;
                    toJSON(_: _17.ListAllInterfacesRequest): unknown;
                    fromPartial(_: {}): _17.ListAllInterfacesRequest;
                };
                ListAllInterfacesResponse: {
                    encode(message: _17.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ListAllInterfacesResponse;
                    fromJSON(object: any): _17.ListAllInterfacesResponse;
                    toJSON(message: _17.ListAllInterfacesResponse): unknown;
                    fromPartial(object: {
                        interfaceNames?: string[];
                    }): _17.ListAllInterfacesResponse;
                };
                ListImplementationsRequest: {
                    encode(message: _17.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ListImplementationsRequest;
                    fromJSON(object: any): _17.ListImplementationsRequest;
                    toJSON(message: _17.ListImplementationsRequest): unknown;
                    fromPartial(object: {
                        interfaceName?: string;
                    }): _17.ListImplementationsRequest;
                };
                ListImplementationsResponse: {
                    encode(message: _17.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.ListImplementationsResponse;
                    fromJSON(object: any): _17.ListImplementationsResponse;
                    toJSON(message: _17.ListImplementationsResponse): unknown;
                    fromPartial(object: {
                        implementationMessageNames?: string[];
                    }): _17.ListImplementationsResponse;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _18.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AppDescriptor;
                    fromJSON(object: any): _18.AppDescriptor;
                    toJSON(message: _18.AppDescriptor): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                        chain?: {
                            id?: string;
                        };
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                        configuration?: {
                            bech32AccountAddressPrefix?: string;
                        };
                        queryServices?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _18.AppDescriptor;
                };
                TxDescriptor: {
                    encode(message: _18.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TxDescriptor;
                    fromJSON(object: any): _18.TxDescriptor;
                    toJSON(message: _18.TxDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        msgs?: {
                            msgTypeUrl?: string;
                        }[];
                    }): _18.TxDescriptor;
                };
                AuthnDescriptor: {
                    encode(message: _18.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.AuthnDescriptor;
                    fromJSON(object: any): _18.AuthnDescriptor;
                    toJSON(message: _18.AuthnDescriptor): unknown;
                    fromPartial(object: {
                        signModes?: {
                            name?: string;
                            number?: number;
                            authnInfoProviderMethodFullname?: string;
                        }[];
                    }): _18.AuthnDescriptor;
                };
                SigningModeDescriptor: {
                    encode(message: _18.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.SigningModeDescriptor;
                    fromJSON(object: any): _18.SigningModeDescriptor;
                    toJSON(message: _18.SigningModeDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        number?: number;
                        authnInfoProviderMethodFullname?: string;
                    }): _18.SigningModeDescriptor;
                };
                ChainDescriptor: {
                    encode(message: _18.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ChainDescriptor;
                    fromJSON(object: any): _18.ChainDescriptor;
                    toJSON(message: _18.ChainDescriptor): unknown;
                    fromPartial(object: {
                        id?: string;
                    }): _18.ChainDescriptor;
                };
                CodecDescriptor: {
                    encode(message: _18.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.CodecDescriptor;
                    fromJSON(object: any): _18.CodecDescriptor;
                    toJSON(message: _18.CodecDescriptor): unknown;
                    fromPartial(object: {
                        interfaces?: {
                            fullname?: string;
                            interfaceAcceptingMessages?: {
                                fullname?: string;
                                fieldDescriptorNames?: string[];
                            }[];
                            interfaceImplementers?: {
                                fullname?: string;
                                typeUrl?: string;
                            }[];
                        }[];
                    }): _18.CodecDescriptor;
                };
                InterfaceDescriptor: {
                    encode(message: _18.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceDescriptor;
                    fromJSON(object: any): _18.InterfaceDescriptor;
                    toJSON(message: _18.InterfaceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        interfaceAcceptingMessages?: {
                            fullname?: string;
                            fieldDescriptorNames?: string[];
                        }[];
                        interfaceImplementers?: {
                            fullname?: string;
                            typeUrl?: string;
                        }[];
                    }): _18.InterfaceDescriptor;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _18.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _18.InterfaceImplementerDescriptor;
                    toJSON(message: _18.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        typeUrl?: string;
                    }): _18.InterfaceImplementerDescriptor;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _18.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _18.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _18.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        fieldDescriptorNames?: string[];
                    }): _18.InterfaceAcceptingMessageDescriptor;
                };
                ConfigurationDescriptor: {
                    encode(message: _18.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.ConfigurationDescriptor;
                    fromJSON(object: any): _18.ConfigurationDescriptor;
                    toJSON(message: _18.ConfigurationDescriptor): unknown;
                    fromPartial(object: {
                        bech32AccountAddressPrefix?: string;
                    }): _18.ConfigurationDescriptor;
                };
                MsgDescriptor: {
                    encode(message: _18.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.MsgDescriptor;
                    fromJSON(object: any): _18.MsgDescriptor;
                    toJSON(message: _18.MsgDescriptor): unknown;
                    fromPartial(object: {
                        msgTypeUrl?: string;
                    }): _18.MsgDescriptor;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _18.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _18.GetAuthnDescriptorRequest;
                    toJSON(_: _18.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetAuthnDescriptorRequest;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _18.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _18.GetAuthnDescriptorResponse;
                    toJSON(message: _18.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: {
                        authn?: {
                            signModes?: {
                                name?: string;
                                number?: number;
                                authnInfoProviderMethodFullname?: string;
                            }[];
                        };
                    }): _18.GetAuthnDescriptorResponse;
                };
                GetChainDescriptorRequest: {
                    encode(_: _18.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetChainDescriptorRequest;
                    fromJSON(_: any): _18.GetChainDescriptorRequest;
                    toJSON(_: _18.GetChainDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetChainDescriptorRequest;
                };
                GetChainDescriptorResponse: {
                    encode(message: _18.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetChainDescriptorResponse;
                    fromJSON(object: any): _18.GetChainDescriptorResponse;
                    toJSON(message: _18.GetChainDescriptorResponse): unknown;
                    fromPartial(object: {
                        chain?: {
                            id?: string;
                        };
                    }): _18.GetChainDescriptorResponse;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _18.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetCodecDescriptorRequest;
                    fromJSON(_: any): _18.GetCodecDescriptorRequest;
                    toJSON(_: _18.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetCodecDescriptorRequest;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _18.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetCodecDescriptorResponse;
                    fromJSON(object: any): _18.GetCodecDescriptorResponse;
                    toJSON(message: _18.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: {
                        codec?: {
                            interfaces?: {
                                fullname?: string;
                                interfaceAcceptingMessages?: {
                                    fullname?: string;
                                    fieldDescriptorNames?: string[];
                                }[];
                                interfaceImplementers?: {
                                    fullname?: string;
                                    typeUrl?: string;
                                }[];
                            }[];
                        };
                    }): _18.GetCodecDescriptorResponse;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _18.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _18.GetConfigurationDescriptorRequest;
                    toJSON(_: _18.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetConfigurationDescriptorRequest;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _18.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _18.GetConfigurationDescriptorResponse;
                    toJSON(message: _18.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: {
                        config?: {
                            bech32AccountAddressPrefix?: string;
                        };
                    }): _18.GetConfigurationDescriptorResponse;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _18.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _18.GetQueryServicesDescriptorRequest;
                    toJSON(_: _18.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetQueryServicesDescriptorRequest;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _18.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _18.GetQueryServicesDescriptorResponse;
                    toJSON(message: _18.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: {
                        queries?: {
                            queryServices?: {
                                fullname?: string;
                                isModule?: boolean;
                                methods?: {
                                    name?: string;
                                    fullQueryPath?: string;
                                }[];
                            }[];
                        };
                    }): _18.GetQueryServicesDescriptorResponse;
                };
                GetTxDescriptorRequest: {
                    encode(_: _18.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetTxDescriptorRequest;
                    fromJSON(_: any): _18.GetTxDescriptorRequest;
                    toJSON(_: _18.GetTxDescriptorRequest): unknown;
                    fromPartial(_: {}): _18.GetTxDescriptorRequest;
                };
                GetTxDescriptorResponse: {
                    encode(message: _18.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.GetTxDescriptorResponse;
                    fromJSON(object: any): _18.GetTxDescriptorResponse;
                    toJSON(message: _18.GetTxDescriptorResponse): unknown;
                    fromPartial(object: {
                        tx?: {
                            fullname?: string;
                            msgs?: {
                                msgTypeUrl?: string;
                            }[];
                        };
                    }): _18.GetTxDescriptorResponse;
                };
                QueryServicesDescriptor: {
                    encode(message: _18.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryServicesDescriptor;
                    fromJSON(object: any): _18.QueryServicesDescriptor;
                    toJSON(message: _18.QueryServicesDescriptor): unknown;
                    fromPartial(object: {
                        queryServices?: {
                            fullname?: string;
                            isModule?: boolean;
                            methods?: {
                                name?: string;
                                fullQueryPath?: string;
                            }[];
                        }[];
                    }): _18.QueryServicesDescriptor;
                };
                QueryServiceDescriptor: {
                    encode(message: _18.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryServiceDescriptor;
                    fromJSON(object: any): _18.QueryServiceDescriptor;
                    toJSON(message: _18.QueryServiceDescriptor): unknown;
                    fromPartial(object: {
                        fullname?: string;
                        isModule?: boolean;
                        methods?: {
                            name?: string;
                            fullQueryPath?: string;
                        }[];
                    }): _18.QueryServiceDescriptor;
                };
                QueryMethodDescriptor: {
                    encode(message: _18.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.QueryMethodDescriptor;
                    fromJSON(object: any): _18.QueryMethodDescriptor;
                    toJSON(message: _18.QueryMethodDescriptor): unknown;
                    fromPartial(object: {
                        name?: string;
                        fullQueryPath?: string;
                    }): _18.QueryMethodDescriptor;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _19.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Snapshot;
                    fromJSON(object: any): _19.Snapshot;
                    toJSON(message: _19.Snapshot): unknown;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: {
                            chunkHashes?: Uint8Array[];
                        };
                    }): _19.Snapshot;
                };
                Metadata: {
                    encode(message: _19.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Metadata;
                    fromJSON(object: any): _19.Metadata;
                    toJSON(message: _19.Metadata): unknown;
                    fromPartial(object: {
                        chunkHashes?: Uint8Array[];
                    }): _19.Metadata;
                };
                SnapshotItem: {
                    encode(message: _19.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SnapshotItem;
                    fromJSON(object: any): _19.SnapshotItem;
                    toJSON(message: _19.SnapshotItem): unknown;
                    fromPartial(object: {
                        store?: {
                            name?: string;
                        };
                        iavl?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            version?: string | number | import("long").default;
                            height?: number;
                        };
                        extension?: {
                            name?: string;
                            format?: number;
                        };
                        extensionPayload?: {
                            payload?: Uint8Array;
                        };
                    }): _19.SnapshotItem;
                };
                SnapshotStoreItem: {
                    encode(message: _19.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SnapshotStoreItem;
                    fromJSON(object: any): _19.SnapshotStoreItem;
                    toJSON(message: _19.SnapshotStoreItem): unknown;
                    fromPartial(object: {
                        name?: string;
                    }): _19.SnapshotStoreItem;
                };
                SnapshotIAVLItem: {
                    encode(message: _19.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SnapshotIAVLItem;
                    fromJSON(object: any): _19.SnapshotIAVLItem;
                    toJSON(message: _19.SnapshotIAVLItem): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        version?: string | number | import("long").default;
                        height?: number;
                    }): _19.SnapshotIAVLItem;
                };
                SnapshotExtensionMeta: {
                    encode(message: _19.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SnapshotExtensionMeta;
                    fromJSON(object: any): _19.SnapshotExtensionMeta;
                    toJSON(message: _19.SnapshotExtensionMeta): unknown;
                    fromPartial(object: {
                        name?: string;
                        format?: number;
                    }): _19.SnapshotExtensionMeta;
                };
                SnapshotExtensionPayload: {
                    encode(message: _19.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.SnapshotExtensionPayload;
                    fromJSON(object: any): _19.SnapshotExtensionPayload;
                    toJSON(message: _19.SnapshotExtensionPayload): unknown;
                    fromPartial(object: {
                        payload?: Uint8Array;
                    }): _19.SnapshotExtensionPayload;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _21.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.StoreKVPair;
                    fromJSON(object: any): _21.StoreKVPair;
                    toJSON(message: _21.StoreKVPair): unknown;
                    fromPartial(object: {
                        storeKey?: string;
                        delete?: boolean;
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _21.StoreKVPair;
                };
                CommitInfo: {
                    encode(message: _20.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.CommitInfo;
                    fromJSON(object: any): _20.CommitInfo;
                    toJSON(message: _20.CommitInfo): unknown;
                    fromPartial(object: {
                        version?: string | number | import("long").default;
                        storeInfos?: {
                            name?: string;
                            commitId?: {
                                version?: string | number | import("long").default;
                                hash?: Uint8Array;
                            };
                        }[];
                    }): _20.CommitInfo;
                };
                StoreInfo: {
                    encode(message: _20.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.StoreInfo;
                    fromJSON(object: any): _20.StoreInfo;
                    toJSON(message: _20.StoreInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        commitId?: {
                            version?: string | number | import("long").default;
                            hash?: Uint8Array;
                        };
                    }): _20.StoreInfo;
                };
                CommitID: {
                    encode(message: _20.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.CommitID;
                    fromJSON(object: any): _20.CommitID;
                    toJSON(message: _20.CommitID): unknown;
                    fromPartial(object: {
                        version?: string | number | import("long").default;
                        hash?: Uint8Array;
                    }): _20.CommitID;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _174.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _22.GetNodeInfoRequest): Promise<_22.GetNodeInfoResponse>;
                    getSyncing(request?: _22.GetSyncingRequest): Promise<_22.GetSyncingResponse>;
                    getLatestBlock(request?: _22.GetLatestBlockRequest): Promise<_22.GetLatestBlockResponse>;
                    getBlockByHeight(request: _22.GetBlockByHeightRequest): Promise<_22.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _22.GetLatestValidatorSetRequest): Promise<_22.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _22.GetValidatorSetByHeightRequest): Promise<_22.GetValidatorSetByHeightResponse>;
                };
                LCDQueryClient: typeof _159.LCDQueryClient;
                GetValidatorSetByHeightRequest: {
                    encode(message: _22.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _22.GetValidatorSetByHeightRequest;
                    toJSON(message: _22.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _22.GetValidatorSetByHeightRequest;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _22.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _22.GetValidatorSetByHeightResponse;
                    toJSON(message: _22.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").default;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _22.GetValidatorSetByHeightResponse;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _22.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _22.GetLatestValidatorSetRequest;
                    toJSON(message: _22.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: string | number | import("long").default;
                            limit?: string | number | import("long").default;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _22.GetLatestValidatorSetRequest;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _22.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _22.GetLatestValidatorSetResponse;
                    toJSON(message: _22.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: {
                        blockHeight?: string | number | import("long").default;
                        validators?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: string | number | import("long").default;
                        };
                    }): _22.GetLatestValidatorSetResponse;
                };
                Validator: {
                    encode(message: _22.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Validator;
                    fromJSON(object: any): _22.Validator;
                    toJSON(message: _22.Validator): unknown;
                    fromPartial(object: {
                        address?: string;
                        pubKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").default;
                        proposerPriority?: string | number | import("long").default;
                    }): _22.Validator;
                };
                GetBlockByHeightRequest: {
                    encode(message: _22.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetBlockByHeightRequest;
                    fromJSON(object: any): _22.GetBlockByHeightRequest;
                    toJSON(message: _22.GetBlockByHeightRequest): unknown;
                    fromPartial(object: {
                        height?: string | number | import("long").default;
                    }): _22.GetBlockByHeightRequest;
                };
                GetBlockByHeightResponse: {
                    encode(message: _22.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetBlockByHeightResponse;
                    fromJSON(object: any): _22.GetBlockByHeightResponse;
                    toJSON(message: _22.GetBlockByHeightResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
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
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: string | number | import("long").default;
                                        validatorPower?: string | number | import("long").default;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
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
                                        };
                                        commonHeight?: string | number | import("long").default;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: string | number | import("long").default;
                                            proposerPriority?: string | number | import("long").default;
                                        }[];
                                        totalVotingPower?: string | number | import("long").default;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
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
                    }): _22.GetBlockByHeightResponse;
                };
                GetLatestBlockRequest: {
                    encode(_: _22.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetLatestBlockRequest;
                    fromJSON(_: any): _22.GetLatestBlockRequest;
                    toJSON(_: _22.GetLatestBlockRequest): unknown;
                    fromPartial(_: {}): _22.GetLatestBlockRequest;
                };
                GetLatestBlockResponse: {
                    encode(message: _22.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetLatestBlockResponse;
                    fromJSON(object: any): _22.GetLatestBlockResponse;
                    toJSON(message: _22.GetLatestBlockResponse): unknown;
                    fromPartial(object: {
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        block?: {
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
                            data?: {
                                txs?: Uint8Array[];
                            };
                            evidence?: {
                                evidence?: {
                                    duplicateVoteEvidence?: {
                                        voteA?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        voteB?: {
                                            type?: import("../tendermint/types/types").SignedMsgType;
                                            height?: string | number | import("long").default;
                                            round?: number;
                                            blockId?: {
                                                hash?: Uint8Array;
                                                partSetHeader?: {
                                                    total?: number;
                                                    hash?: Uint8Array;
                                                };
                                            };
                                            timestamp?: Date;
                                            validatorAddress?: Uint8Array;
                                            validatorIndex?: number;
                                            signature?: Uint8Array;
                                        };
                                        totalVotingPower?: string | number | import("long").default;
                                        validatorPower?: string | number | import("long").default;
                                        timestamp?: Date;
                                    };
                                    lightClientAttackEvidence?: {
                                        conflictingBlock?: {
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
                                        };
                                        commonHeight?: string | number | import("long").default;
                                        byzantineValidators?: {
                                            address?: Uint8Array;
                                            pubKey?: {
                                                ed25519?: Uint8Array;
                                                secp256k1?: Uint8Array;
                                            };
                                            votingPower?: string | number | import("long").default;
                                            proposerPriority?: string | number | import("long").default;
                                        }[];
                                        totalVotingPower?: string | number | import("long").default;
                                        timestamp?: Date;
                                    };
                                }[];
                            };
                            lastCommit?: {
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
                    }): _22.GetLatestBlockResponse;
                };
                GetSyncingRequest: {
                    encode(_: _22.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetSyncingRequest;
                    fromJSON(_: any): _22.GetSyncingRequest;
                    toJSON(_: _22.GetSyncingRequest): unknown;
                    fromPartial(_: {}): _22.GetSyncingRequest;
                };
                GetSyncingResponse: {
                    encode(message: _22.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetSyncingResponse;
                    fromJSON(object: any): _22.GetSyncingResponse;
                    toJSON(message: _22.GetSyncingResponse): unknown;
                    fromPartial(object: {
                        syncing?: boolean;
                    }): _22.GetSyncingResponse;
                };
                GetNodeInfoRequest: {
                    encode(_: _22.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetNodeInfoRequest;
                    fromJSON(_: any): _22.GetNodeInfoRequest;
                    toJSON(_: _22.GetNodeInfoRequest): unknown;
                    fromPartial(_: {}): _22.GetNodeInfoRequest;
                };
                GetNodeInfoResponse: {
                    encode(message: _22.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.GetNodeInfoResponse;
                    fromJSON(object: any): _22.GetNodeInfoResponse;
                    toJSON(message: _22.GetNodeInfoResponse): unknown;
                    fromPartial(object: {
                        defaultNodeInfo?: {
                            protocolVersion?: {
                                p2p?: string | number | import("long").default;
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            defaultNodeId?: string;
                            listenAddr?: string;
                            network?: string;
                            version?: string;
                            channels?: Uint8Array;
                            moniker?: string;
                            other?: {
                                txIndex?: string;
                                rpcAddress?: string;
                            };
                        };
                        applicationVersion?: {
                            name?: string;
                            appName?: string;
                            version?: string;
                            gitCommit?: string;
                            buildTags?: string;
                            goVersion?: string;
                            buildDeps?: {
                                path?: string;
                                version?: string;
                                sum?: string;
                            }[];
                            cosmosSdkVersion?: string;
                        };
                    }): _22.GetNodeInfoResponse;
                };
                VersionInfo: {
                    encode(message: _22.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.VersionInfo;
                    fromJSON(object: any): _22.VersionInfo;
                    toJSON(message: _22.VersionInfo): unknown;
                    fromPartial(object: {
                        name?: string;
                        appName?: string;
                        version?: string;
                        gitCommit?: string;
                        buildTags?: string;
                        goVersion?: string;
                        buildDeps?: {
                            path?: string;
                            version?: string;
                            sum?: string;
                        }[];
                        cosmosSdkVersion?: string;
                    }): _22.VersionInfo;
                };
                Module: {
                    encode(message: _22.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Module;
                    fromJSON(object: any): _22.Module;
                    toJSON(message: _22.Module): unknown;
                    fromPartial(object: {
                        path?: string;
                        version?: string;
                        sum?: string;
                    }): _22.Module;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _23.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Coin;
                fromJSON(object: any): _23.Coin;
                toJSON(message: _23.Coin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _23.Coin;
            };
            DecCoin: {
                encode(message: _23.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DecCoin;
                fromJSON(object: any): _23.DecCoin;
                toJSON(message: _23.DecCoin): unknown;
                fromPartial(object: {
                    denom?: string;
                    amount?: string;
                }): _23.DecCoin;
            };
            IntProto: {
                encode(message: _23.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.IntProto;
                fromJSON(object: any): _23.IntProto;
                toJSON(message: _23.IntProto): unknown;
                fromPartial(object: {
                    int?: string;
                }): _23.IntProto;
            };
            DecProto: {
                encode(message: _23.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.DecProto;
                fromJSON(object: any): _23.DecProto;
                toJSON(message: _23.DecProto): unknown;
                fromPartial(object: {
                    dec?: string;
                }): _23.DecProto;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _25.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenesisOwners;
                fromJSON(object: any): _25.GenesisOwners;
                toJSON(message: _25.GenesisOwners): unknown;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    indexOwners?: {
                        owners?: {
                            module?: string;
                            name?: string;
                        }[];
                    };
                }): _25.GenesisOwners;
            };
            GenesisState: {
                encode(message: _25.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.GenesisState;
                fromJSON(object: any): _25.GenesisState;
                toJSON(message: _25.GenesisState): unknown;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    owners?: {
                        index?: string | number | import("long").default;
                        indexOwners?: {
                            owners?: {
                                module?: string;
                                name?: string;
                            }[];
                        };
                    }[];
                }): _25.GenesisState;
            };
            Capability: {
                encode(message: _24.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Capability;
                fromJSON(object: any): _24.Capability;
                toJSON(message: _24.Capability): unknown;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                }): _24.Capability;
            };
            Owner: {
                encode(message: _24.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.Owner;
                fromJSON(object: any): _24.Owner;
                toJSON(message: _24.Owner): unknown;
                fromPartial(object: {
                    module?: string;
                    name?: string;
                }): _24.Owner;
            };
            CapabilityOwners: {
                encode(message: _24.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.CapabilityOwners;
                fromJSON(object: any): _24.CapabilityOwners;
                toJSON(message: _24.CapabilityOwners): unknown;
                fromPartial(object: {
                    owners?: {
                        module?: string;
                        name?: string;
                    }[];
                }): _24.CapabilityOwners;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _187.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _27.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _27.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _27.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _27.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _27.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _27.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _27.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: ({ sender, invariantModuleName, invariantRoute }: _27.MsgVerifyInvariant) => {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    };
                    fromAmino: ({ sender, invariant_module_name, invariant_route }: {
                        sender: string;
                        invariant_module_name: string;
                        invariant_route: string;
                    }) => _27.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _27.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVerifyInvariant;
                fromJSON(object: any): _27.MsgVerifyInvariant;
                toJSON(message: _27.MsgVerifyInvariant): unknown;
                fromPartial(object: {
                    sender?: string;
                    invariantModuleName?: string;
                    invariantRoute?: string;
                }): _27.MsgVerifyInvariant;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _27.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.MsgVerifyInvariantResponse;
                fromJSON(_: any): _27.MsgVerifyInvariantResponse;
                toJSON(_: _27.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: {}): _27.MsgVerifyInvariantResponse;
            };
            GenesisState: {
                encode(message: _26.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.GenesisState;
                fromJSON(object: any): _26.GenesisState;
                toJSON(message: _26.GenesisState): unknown;
                fromPartial(object: {
                    constantFee?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _26.GenesisState;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _28.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.PubKey;
                fromJSON(object: any): _28.PubKey;
                toJSON(message: _28.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _28.PubKey;
            };
            PrivKey: {
                encode(message: _28.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.PrivKey;
                fromJSON(object: any): _28.PrivKey;
                toJSON(message: _28.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _28.PrivKey;
            };
        };
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _29.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.LegacyAminoPubKey;
                fromJSON(object: any): _29.LegacyAminoPubKey;
                toJSON(message: _29.LegacyAminoPubKey): unknown;
                fromPartial(object: {
                    threshold?: number;
                    publicKeys?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _29.LegacyAminoPubKey;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _30.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PubKey;
                fromJSON(object: any): _30.PubKey;
                toJSON(message: _30.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _30.PubKey;
            };
            PrivKey: {
                encode(message: _30.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.PrivKey;
                fromJSON(object: any): _30.PrivKey;
                toJSON(message: _30.PrivKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _30.PrivKey;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _31.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PubKey;
                fromJSON(object: any): _31.PubKey;
                toJSON(message: _31.PubKey): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                }): _31.PubKey;
            };
            PrivKey: {
                encode(message: _31.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.PrivKey;
                fromJSON(object: any): _31.PrivKey;
                toJSON(message: _31.PrivKey): unknown;
                fromPartial(object: {
                    secret?: Uint8Array;
                }): _31.PrivKey;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _188.MsgClientImpl;
            QueryClientImpl: typeof _175.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                validatorOutstandingRewards(request: _34.QueryValidatorOutstandingRewardsRequest): Promise<_34.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _34.QueryValidatorCommissionRequest): Promise<_34.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _34.QueryValidatorSlashesRequest): Promise<_34.QueryValidatorSlashesResponse>;
                delegationRewards(request: _34.QueryDelegationRewardsRequest): Promise<_34.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _34.QueryDelegationTotalRewardsRequest): Promise<_34.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _34.QueryDelegatorValidatorsRequest): Promise<_34.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _34.QueryDelegatorWithdrawAddressRequest): Promise<_34.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _34.QueryCommunityPoolRequest): Promise<_34.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _160.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _35.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _35.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _35.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _35.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _35.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _35.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _35.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _35.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _35.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _35.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _35.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _35.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _35.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _35.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _35.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _35.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _35.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _35.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _35.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _35.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _35.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _35.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _35.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _35.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _35.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _35.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _35.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _35.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, withdrawAddress }: _35.MsgSetWithdrawAddress) => {
                        delegator_address: string;
                        withdraw_address: string;
                    };
                    fromAmino: ({ delegator_address, withdraw_address }: {
                        delegator_address: string;
                        withdraw_address: string;
                    }) => _35.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress }: _35.MsgWithdrawDelegatorReward) => {
                        delegator_address: string;
                        validator_address: string;
                    };
                    fromAmino: ({ delegator_address, validator_address }: {
                        delegator_address: string;
                        validator_address: string;
                    }) => _35.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: ({ validatorAddress }: _35.MsgWithdrawValidatorCommission) => {
                        validator_address: string;
                    };
                    fromAmino: ({ validator_address }: {
                        validator_address: string;
                    }) => _35.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: ({ amount, depositor }: _35.MsgFundCommunityPool) => {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    };
                    fromAmino: ({ amount, depositor }: {
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        depositor: string;
                    }) => _35.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _35.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgSetWithdrawAddress;
                fromJSON(object: any): _35.MsgSetWithdrawAddress;
                toJSON(message: _35.MsgSetWithdrawAddress): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _35.MsgSetWithdrawAddress;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _35.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _35.MsgSetWithdrawAddressResponse;
                toJSON(_: _35.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: {}): _35.MsgSetWithdrawAddressResponse;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _35.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _35.MsgWithdrawDelegatorReward;
                toJSON(message: _35.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _35.MsgWithdrawDelegatorReward;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(_: _35.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgWithdrawDelegatorRewardResponse;
                fromJSON(_: any): _35.MsgWithdrawDelegatorRewardResponse;
                toJSON(_: _35.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(_: {}): _35.MsgWithdrawDelegatorRewardResponse;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _35.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _35.MsgWithdrawValidatorCommission;
                toJSON(message: _35.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _35.MsgWithdrawValidatorCommission;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(_: _35.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgWithdrawValidatorCommissionResponse;
                fromJSON(_: any): _35.MsgWithdrawValidatorCommissionResponse;
                toJSON(_: _35.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(_: {}): _35.MsgWithdrawValidatorCommissionResponse;
            };
            MsgFundCommunityPool: {
                encode(message: _35.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgFundCommunityPool;
                fromJSON(object: any): _35.MsgFundCommunityPool;
                toJSON(message: _35.MsgFundCommunityPool): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    depositor?: string;
                }): _35.MsgFundCommunityPool;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _35.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _35.MsgFundCommunityPoolResponse;
                toJSON(_: _35.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: {}): _35.MsgFundCommunityPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _34.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryParamsRequest;
                fromJSON(_: any): _34.QueryParamsRequest;
                toJSON(_: _34.QueryParamsRequest): unknown;
                fromPartial(_: {}): _34.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _34.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryParamsResponse;
                fromJSON(object: any): _34.QueryParamsResponse;
                toJSON(message: _34.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                }): _34.QueryParamsResponse;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _34.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _34.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _34.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _34.QueryValidatorOutstandingRewardsRequest;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _34.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _34.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _34.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _34.QueryValidatorOutstandingRewardsResponse;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _34.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryValidatorCommissionRequest;
                fromJSON(object: any): _34.QueryValidatorCommissionRequest;
                toJSON(message: _34.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                }): _34.QueryValidatorCommissionRequest;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _34.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryValidatorCommissionResponse;
                fromJSON(object: any): _34.QueryValidatorCommissionResponse;
                toJSON(message: _34.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: {
                    commission?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _34.QueryValidatorCommissionResponse;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _34.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryValidatorSlashesRequest;
                fromJSON(object: any): _34.QueryValidatorSlashesRequest;
                toJSON(message: _34.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    startingHeight?: string | number | import("long").default;
                    endingHeight?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _34.QueryValidatorSlashesRequest;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _34.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryValidatorSlashesResponse;
                fromJSON(object: any): _34.QueryValidatorSlashesResponse;
                toJSON(message: _34.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: {
                    slashes?: {
                        validatorPeriod?: string | number | import("long").default;
                        fraction?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _34.QueryValidatorSlashesResponse;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _34.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDelegationRewardsRequest;
                fromJSON(object: any): _34.QueryDelegationRewardsRequest;
                toJSON(message: _34.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _34.QueryDelegationRewardsRequest;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _34.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDelegationRewardsResponse;
                fromJSON(object: any): _34.QueryDelegationRewardsResponse;
                toJSON(message: _34.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.QueryDelegationRewardsResponse;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _34.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _34.QueryDelegationTotalRewardsRequest;
                toJSON(message: _34.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _34.QueryDelegationTotalRewardsRequest;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _34.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _34.QueryDelegationTotalRewardsResponse;
                toJSON(message: _34.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: {
                    rewards?: {
                        validatorAddress?: string;
                        reward?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    total?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.QueryDelegationTotalRewardsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _34.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _34.QueryDelegatorValidatorsRequest;
                toJSON(message: _34.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _34.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _34.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _34.QueryDelegatorValidatorsResponse;
                toJSON(message: _34.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: string[];
                }): _34.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _34.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _34.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _34.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                }): _34.QueryDelegatorWithdrawAddressRequest;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _34.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _34.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _34.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: {
                    withdrawAddress?: string;
                }): _34.QueryDelegatorWithdrawAddressResponse;
            };
            QueryCommunityPoolRequest: {
                encode(_: _34.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryCommunityPoolRequest;
                fromJSON(_: any): _34.QueryCommunityPoolRequest;
                toJSON(_: _34.QueryCommunityPoolRequest): unknown;
                fromPartial(_: {}): _34.QueryCommunityPoolRequest;
            };
            QueryCommunityPoolResponse: {
                encode(message: _34.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryCommunityPoolResponse;
                fromJSON(object: any): _34.QueryCommunityPoolResponse;
                toJSON(message: _34.QueryCommunityPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _34.QueryCommunityPoolResponse;
            };
            DelegatorWithdrawInfo: {
                encode(message: _33.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DelegatorWithdrawInfo;
                fromJSON(object: any): _33.DelegatorWithdrawInfo;
                toJSON(message: _33.DelegatorWithdrawInfo): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    withdrawAddress?: string;
                }): _33.DelegatorWithdrawInfo;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _33.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _33.ValidatorOutstandingRewardsRecord;
                toJSON(message: _33.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    outstandingRewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _33.ValidatorOutstandingRewardsRecord;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _33.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _33.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _33.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    accumulated?: {
                        commission?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _33.ValidatorAccumulatedCommissionRecord;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _33.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _33.ValidatorHistoricalRewardsRecord;
                toJSON(message: _33.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    period?: string | number | import("long").default;
                    rewards?: {
                        cumulativeRewardRatio?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        referenceCount?: number;
                    };
                }): _33.ValidatorHistoricalRewardsRecord;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _33.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _33.ValidatorCurrentRewardsRecord;
                toJSON(message: _33.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    rewards?: {
                        rewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        period?: string | number | import("long").default;
                    };
                }): _33.ValidatorCurrentRewardsRecord;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _33.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.DelegatorStartingInfoRecord;
                fromJSON(object: any): _33.DelegatorStartingInfoRecord;
                toJSON(message: _33.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    startingInfo?: {
                        previousPeriod?: string | number | import("long").default;
                        stake?: string;
                        height?: string | number | import("long").default;
                    };
                }): _33.DelegatorStartingInfoRecord;
            };
            ValidatorSlashEventRecord: {
                encode(message: _33.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.ValidatorSlashEventRecord;
                fromJSON(object: any): _33.ValidatorSlashEventRecord;
                toJSON(message: _33.ValidatorSlashEventRecord): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    height?: string | number | import("long").default;
                    period?: string | number | import("long").default;
                    validatorSlashEvent?: {
                        validatorPeriod?: string | number | import("long").default;
                        fraction?: string;
                    };
                }): _33.ValidatorSlashEventRecord;
            };
            GenesisState: {
                encode(message: _33.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.GenesisState;
                fromJSON(object: any): _33.GenesisState;
                toJSON(message: _33.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        communityTax?: string;
                        baseProposerReward?: string;
                        bonusProposerReward?: string;
                        withdrawAddrEnabled?: boolean;
                    };
                    feePool?: {
                        communityPool?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    delegatorWithdrawInfos?: {
                        delegatorAddress?: string;
                        withdrawAddress?: string;
                    }[];
                    previousProposer?: string;
                    outstandingRewards?: {
                        validatorAddress?: string;
                        outstandingRewards?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    validatorAccumulatedCommissions?: {
                        validatorAddress?: string;
                        accumulated?: {
                            commission?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                    validatorHistoricalRewards?: {
                        validatorAddress?: string;
                        period?: string | number | import("long").default;
                        rewards?: {
                            cumulativeRewardRatio?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            referenceCount?: number;
                        };
                    }[];
                    validatorCurrentRewards?: {
                        validatorAddress?: string;
                        rewards?: {
                            rewards?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            period?: string | number | import("long").default;
                        };
                    }[];
                    delegatorStartingInfos?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        startingInfo?: {
                            previousPeriod?: string | number | import("long").default;
                            stake?: string;
                            height?: string | number | import("long").default;
                        };
                    }[];
                    validatorSlashEvents?: {
                        validatorAddress?: string;
                        height?: string | number | import("long").default;
                        period?: string | number | import("long").default;
                        validatorSlashEvent?: {
                            validatorPeriod?: string | number | import("long").default;
                            fraction?: string;
                        };
                    }[];
                }): _33.GenesisState;
            };
            Params: {
                encode(message: _32.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Params;
                fromJSON(object: any): _32.Params;
                toJSON(message: _32.Params): unknown;
                fromPartial(object: {
                    communityTax?: string;
                    baseProposerReward?: string;
                    bonusProposerReward?: string;
                    withdrawAddrEnabled?: boolean;
                }): _32.Params;
            };
            ValidatorHistoricalRewards: {
                encode(message: _32.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorHistoricalRewards;
                fromJSON(object: any): _32.ValidatorHistoricalRewards;
                toJSON(message: _32.ValidatorHistoricalRewards): unknown;
                fromPartial(object: {
                    cumulativeRewardRatio?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    referenceCount?: number;
                }): _32.ValidatorHistoricalRewards;
            };
            ValidatorCurrentRewards: {
                encode(message: _32.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorCurrentRewards;
                fromJSON(object: any): _32.ValidatorCurrentRewards;
                toJSON(message: _32.ValidatorCurrentRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    period?: string | number | import("long").default;
                }): _32.ValidatorCurrentRewards;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _32.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorAccumulatedCommission;
                fromJSON(object: any): _32.ValidatorAccumulatedCommission;
                toJSON(message: _32.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: {
                    commission?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _32.ValidatorAccumulatedCommission;
            };
            ValidatorOutstandingRewards: {
                encode(message: _32.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorOutstandingRewards;
                fromJSON(object: any): _32.ValidatorOutstandingRewards;
                toJSON(message: _32.ValidatorOutstandingRewards): unknown;
                fromPartial(object: {
                    rewards?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _32.ValidatorOutstandingRewards;
            };
            ValidatorSlashEvent: {
                encode(message: _32.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorSlashEvent;
                fromJSON(object: any): _32.ValidatorSlashEvent;
                toJSON(message: _32.ValidatorSlashEvent): unknown;
                fromPartial(object: {
                    validatorPeriod?: string | number | import("long").default;
                    fraction?: string;
                }): _32.ValidatorSlashEvent;
            };
            ValidatorSlashEvents: {
                encode(message: _32.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ValidatorSlashEvents;
                fromJSON(object: any): _32.ValidatorSlashEvents;
                toJSON(message: _32.ValidatorSlashEvents): unknown;
                fromPartial(object: {
                    validatorSlashEvents?: {
                        validatorPeriod?: string | number | import("long").default;
                        fraction?: string;
                    }[];
                }): _32.ValidatorSlashEvents;
            };
            FeePool: {
                encode(message: _32.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.FeePool;
                fromJSON(object: any): _32.FeePool;
                toJSON(message: _32.FeePool): unknown;
                fromPartial(object: {
                    communityPool?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _32.FeePool;
            };
            CommunityPoolSpendProposal: {
                encode(message: _32.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.CommunityPoolSpendProposal;
                fromJSON(object: any): _32.CommunityPoolSpendProposal;
                toJSON(message: _32.CommunityPoolSpendProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _32.CommunityPoolSpendProposal;
            };
            DelegatorStartingInfo: {
                encode(message: _32.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DelegatorStartingInfo;
                fromJSON(object: any): _32.DelegatorStartingInfo;
                toJSON(message: _32.DelegatorStartingInfo): unknown;
                fromPartial(object: {
                    previousPeriod?: string | number | import("long").default;
                    stake?: string;
                    height?: string | number | import("long").default;
                }): _32.DelegatorStartingInfo;
            };
            DelegationDelegatorReward: {
                encode(message: _32.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.DelegationDelegatorReward;
                fromJSON(object: any): _32.DelegationDelegatorReward;
                toJSON(message: _32.DelegationDelegatorReward): unknown;
                fromPartial(object: {
                    validatorAddress?: string;
                    reward?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _32.DelegationDelegatorReward;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _32.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _32.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _32.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    recipient?: string;
                    amount?: string;
                    deposit?: string;
                }): _32.CommunityPoolSpendProposalWithDeposit;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _189.MsgClientImpl;
            QueryClientImpl: typeof _176.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _38.QueryEvidenceRequest): Promise<_38.QueryEvidenceResponse>;
                allEvidence(request?: _38.QueryAllEvidenceRequest): Promise<_38.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _161.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _39.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _39.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _39.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _39.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _39.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _39.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _39.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: ({ submitter, evidence }: _39.MsgSubmitEvidence) => {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ submitter, evidence }: {
                        submitter: string;
                        evidence: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _39.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _39.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgSubmitEvidence;
                fromJSON(object: any): _39.MsgSubmitEvidence;
                toJSON(message: _39.MsgSubmitEvidence): unknown;
                fromPartial(object: {
                    submitter?: string;
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _39.MsgSubmitEvidence;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _39.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _39.MsgSubmitEvidenceResponse;
                toJSON(message: _39.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: {
                    hash?: Uint8Array;
                }): _39.MsgSubmitEvidenceResponse;
            };
            QueryEvidenceRequest: {
                encode(message: _38.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryEvidenceRequest;
                fromJSON(object: any): _38.QueryEvidenceRequest;
                toJSON(message: _38.QueryEvidenceRequest): unknown;
                fromPartial(object: {
                    evidenceHash?: Uint8Array;
                }): _38.QueryEvidenceRequest;
            };
            QueryEvidenceResponse: {
                encode(message: _38.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryEvidenceResponse;
                fromJSON(object: any): _38.QueryEvidenceResponse;
                toJSON(message: _38.QueryEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _38.QueryEvidenceResponse;
            };
            QueryAllEvidenceRequest: {
                encode(message: _38.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryAllEvidenceRequest;
                fromJSON(object: any): _38.QueryAllEvidenceRequest;
                toJSON(message: _38.QueryAllEvidenceRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _38.QueryAllEvidenceRequest;
            };
            QueryAllEvidenceResponse: {
                encode(message: _38.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryAllEvidenceResponse;
                fromJSON(object: any): _38.QueryAllEvidenceResponse;
                toJSON(message: _38.QueryAllEvidenceResponse): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _38.QueryAllEvidenceResponse;
            };
            GenesisState: {
                encode(message: _37.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.GenesisState;
                fromJSON(object: any): _37.GenesisState;
                toJSON(message: _37.GenesisState): unknown;
                fromPartial(object: {
                    evidence?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _37.GenesisState;
            };
            Equivocation: {
                encode(message: _36.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.Equivocation;
                fromJSON(object: any): _36.Equivocation;
                toJSON(message: _36.Equivocation): unknown;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                    time?: Date;
                    power?: string | number | import("long").default;
                    consensusAddress?: string;
                }): _36.Equivocation;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _190.MsgClientImpl;
            QueryClientImpl: typeof _177.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _42.QueryAllowanceRequest): Promise<_42.QueryAllowanceResponse>;
                allowances(request: _42.QueryAllowancesRequest): Promise<_42.QueryAllowancesResponse>;
                allowancesByGranter(request: _42.QueryAllowancesByGranterRequest): Promise<_42.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _162.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _43.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _43.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _43.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _43.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _43.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _43.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _43.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _43.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _43.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _43.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _43.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _43.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _43.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _43.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee, allowance }: _43.MsgGrantAllowance) => {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    };
                    fromAmino: ({ granter, grantee, allowance }: {
                        granter: string;
                        grantee: string;
                        allowance: {
                            type_url: string;
                            value: Uint8Array;
                        };
                    }) => _43.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: ({ granter, grantee }: _43.MsgRevokeAllowance) => {
                        granter: string;
                        grantee: string;
                    };
                    fromAmino: ({ granter, grantee }: {
                        granter: string;
                        grantee: string;
                    }) => _43.MsgRevokeAllowance;
                };
            };
            AllowedContractAllowance: {
                encode(message: _44.AllowedContractAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.AllowedContractAllowance;
                fromJSON(object: any): _44.AllowedContractAllowance;
                toJSON(message: _44.AllowedContractAllowance): unknown;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedAddress?: string[];
                }): _44.AllowedContractAllowance;
            };
            MsgGrantAllowance: {
                encode(message: _43.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgGrantAllowance;
                fromJSON(object: any): _43.MsgGrantAllowance;
                toJSON(message: _43.MsgGrantAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _43.MsgGrantAllowance;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _43.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgGrantAllowanceResponse;
                fromJSON(_: any): _43.MsgGrantAllowanceResponse;
                toJSON(_: _43.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: {}): _43.MsgGrantAllowanceResponse;
            };
            MsgRevokeAllowance: {
                encode(message: _43.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgRevokeAllowance;
                fromJSON(object: any): _43.MsgRevokeAllowance;
                toJSON(message: _43.MsgRevokeAllowance): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _43.MsgRevokeAllowance;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _43.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _43.MsgRevokeAllowanceResponse;
                toJSON(_: _43.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: {}): _43.MsgRevokeAllowanceResponse;
            };
            QueryAllowanceRequest: {
                encode(message: _42.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAllowanceRequest;
                fromJSON(object: any): _42.QueryAllowanceRequest;
                toJSON(message: _42.QueryAllowanceRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                }): _42.QueryAllowanceRequest;
            };
            QueryAllowanceResponse: {
                encode(message: _42.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAllowanceResponse;
                fromJSON(object: any): _42.QueryAllowanceResponse;
                toJSON(message: _42.QueryAllowanceResponse): unknown;
                fromPartial(object: {
                    allowance?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _42.QueryAllowanceResponse;
            };
            QueryAllowancesRequest: {
                encode(message: _42.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAllowancesRequest;
                fromJSON(object: any): _42.QueryAllowancesRequest;
                toJSON(message: _42.QueryAllowancesRequest): unknown;
                fromPartial(object: {
                    grantee?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _42.QueryAllowancesRequest;
            };
            QueryAllowancesResponse: {
                encode(message: _42.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAllowancesResponse;
                fromJSON(object: any): _42.QueryAllowancesResponse;
                toJSON(message: _42.QueryAllowancesResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _42.QueryAllowancesResponse;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _42.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _42.QueryAllowancesByGranterRequest;
                toJSON(message: _42.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: {
                    granter?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _42.QueryAllowancesByGranterRequest;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _42.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _42.QueryAllowancesByGranterResponse;
                toJSON(message: _42.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _42.QueryAllowancesByGranterResponse;
            };
            GenesisState: {
                encode(message: _41.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.GenesisState;
                fromJSON(object: any): _41.GenesisState;
                toJSON(message: _41.GenesisState): unknown;
                fromPartial(object: {
                    allowances?: {
                        granter?: string;
                        grantee?: string;
                        allowance?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }[];
                }): _41.GenesisState;
            };
            BasicAllowance: {
                encode(message: _40.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.BasicAllowance;
                fromJSON(object: any): _40.BasicAllowance;
                toJSON(message: _40.BasicAllowance): unknown;
                fromPartial(object: {
                    spendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    expiration?: Date;
                }): _40.BasicAllowance;
            };
            PeriodicAllowance: {
                encode(message: _40.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.PeriodicAllowance;
                fromJSON(object: any): _40.PeriodicAllowance;
                toJSON(message: _40.PeriodicAllowance): unknown;
                fromPartial(object: {
                    basic?: {
                        spendLimit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        expiration?: Date;
                    };
                    period?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    periodSpendLimit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodCanSpend?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    periodReset?: Date;
                }): _40.PeriodicAllowance;
            };
            AllowedMsgAllowance: {
                encode(message: _40.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.AllowedMsgAllowance;
                fromJSON(object: any): _40.AllowedMsgAllowance;
                toJSON(message: _40.AllowedMsgAllowance): unknown;
                fromPartial(object: {
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    allowedMessages?: string[];
                }): _40.AllowedMsgAllowance;
            };
            Grant: {
                encode(message: _40.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Grant;
                fromJSON(object: any): _40.Grant;
                toJSON(message: _40.Grant): unknown;
                fromPartial(object: {
                    granter?: string;
                    grantee?: string;
                    allowance?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _40.Grant;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _45.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.GenesisState;
                fromJSON(object: any): _45.GenesisState;
                toJSON(message: _45.GenesisState): unknown;
                fromPartial(object: {
                    genTxs?: Uint8Array[];
                }): _45.GenesisState;
            };
        };
    }
    namespace gov {
        const v1beta1: {
            MsgClientImpl: typeof _191.MsgClientImpl;
            QueryClientImpl: typeof _178.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _48.QueryProposalRequest): Promise<_48.QueryProposalResponse>;
                proposals(request: _48.QueryProposalsRequest): Promise<_48.QueryProposalsResponse>;
                vote(request: _48.QueryVoteRequest): Promise<_48.QueryVoteResponse>;
                votes(request: _48.QueryVotesRequest): Promise<_48.QueryVotesResponse>;
                params(request: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                deposit(request: _48.QueryDepositRequest): Promise<_48.QueryDepositResponse>;
                deposits(request: _48.QueryDepositsRequest): Promise<_48.QueryDepositsResponse>;
                tallyResult(request: _48.QueryTallyResultRequest): Promise<_48.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _163.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _49.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _49.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _49.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _49.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _49.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _49.MsgSubmitProposal;
                    };
                    vote(value: _49.MsgVote): {
                        typeUrl: string;
                        value: _49.MsgVote;
                    };
                    voteWeighted(value: _49.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _49.MsgVoteWeighted;
                    };
                    deposit(value: _49.MsgDeposit): {
                        typeUrl: string;
                        value: _49.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _49.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _49.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _49.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _49.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _49.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _49.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _49.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _49.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _49.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _49.MsgSubmitProposal;
                    };
                    vote(value: _49.MsgVote): {
                        typeUrl: string;
                        value: _49.MsgVote;
                    };
                    voteWeighted(value: _49.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _49.MsgVoteWeighted;
                    };
                    deposit(value: _49.MsgDeposit): {
                        typeUrl: string;
                        value: _49.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: ({ content, initialDeposit, proposer }: _49.MsgSubmitProposal) => {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    };
                    fromAmino: ({ content, initial_deposit, proposer }: {
                        content: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        initial_deposit: {
                            denom: string;
                            amount: string;
                        }[];
                        proposer: string;
                    }) => _49.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, option }: _49.MsgVote) => {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    };
                    fromAmino: ({ proposal_id, voter, option }: {
                        proposal_id: string;
                        voter: string;
                        option: number;
                    }) => _49.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: ({ proposalId, voter, options }: _49.MsgVoteWeighted) => {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, voter, options }: {
                        proposal_id: string;
                        voter: string;
                        options: {
                            option: number;
                            weight: string;
                        }[];
                    }) => _49.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: ({ proposalId, depositor, amount }: _49.MsgDeposit) => {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ proposal_id, depositor, amount }: {
                        proposal_id: string;
                        depositor: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _49.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _49.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSubmitProposal;
                fromJSON(object: any): _49.MsgSubmitProposal;
                toJSON(message: _49.MsgSubmitProposal): unknown;
                fromPartial(object: {
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    initialDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    proposer?: string;
                }): _49.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: _49.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgSubmitProposalResponse;
                fromJSON(object: any): _49.MsgSubmitProposalResponse;
                toJSON(message: _49.MsgSubmitProposalResponse): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _49.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: _49.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVote;
                fromJSON(object: any): _49.MsgVote;
                toJSON(message: _49.MsgVote): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    option?: _47.VoteOption;
                }): _49.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: _49.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteResponse;
                fromJSON(_: any): _49.MsgVoteResponse;
                toJSON(_: _49.MsgVoteResponse): unknown;
                fromPartial(_: {}): _49.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: _49.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteWeighted;
                fromJSON(object: any): _49.MsgVoteWeighted;
                toJSON(message: _49.MsgVoteWeighted): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    options?: {
                        option?: _47.VoteOption;
                        weight?: string;
                    }[];
                }): _49.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: _49.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgVoteWeightedResponse;
                fromJSON(_: any): _49.MsgVoteWeightedResponse;
                toJSON(_: _49.MsgVoteWeightedResponse): unknown;
                fromPartial(_: {}): _49.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: _49.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgDeposit;
                fromJSON(object: any): _49.MsgDeposit;
                toJSON(message: _49.MsgDeposit): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _49.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: _49.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.MsgDepositResponse;
                fromJSON(_: any): _49.MsgDepositResponse;
                toJSON(_: _49.MsgDepositResponse): unknown;
                fromPartial(_: {}): _49.MsgDepositResponse;
            };
            QueryProposalRequest: {
                encode(message: _48.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalRequest;
                fromJSON(object: any): _48.QueryProposalRequest;
                toJSON(message: _48.QueryProposalRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _48.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: _48.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalResponse;
                fromJSON(object: any): _48.QueryProposalResponse;
                toJSON(message: _48.QueryProposalResponse): unknown;
                fromPartial(object: {
                    proposal?: {
                        proposalId?: string | number | import("long").default;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _47.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    };
                }): _48.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: _48.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalsRequest;
                fromJSON(object: any): _48.QueryProposalsRequest;
                toJSON(message: _48.QueryProposalsRequest): unknown;
                fromPartial(object: {
                    proposalStatus?: _47.ProposalStatus;
                    voter?: string;
                    depositor?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _48.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: _48.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryProposalsResponse;
                fromJSON(object: any): _48.QueryProposalsResponse;
                toJSON(message: _48.QueryProposalsResponse): unknown;
                fromPartial(object: {
                    proposals?: {
                        proposalId?: string | number | import("long").default;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _47.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _48.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: _48.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVoteRequest;
                fromJSON(object: any): _48.QueryVoteRequest;
                toJSON(message: _48.QueryVoteRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                }): _48.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: _48.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVoteResponse;
                fromJSON(object: any): _48.QueryVoteResponse;
                toJSON(message: _48.QueryVoteResponse): unknown;
                fromPartial(object: {
                    vote?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _47.VoteOption;
                        options?: {
                            option?: _47.VoteOption;
                            weight?: string;
                        }[];
                    };
                }): _48.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: _48.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVotesRequest;
                fromJSON(object: any): _48.QueryVotesRequest;
                toJSON(message: _48.QueryVotesRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _48.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: _48.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryVotesResponse;
                fromJSON(object: any): _48.QueryVotesResponse;
                toJSON(message: _48.QueryVotesResponse): unknown;
                fromPartial(object: {
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _47.VoteOption;
                        options?: {
                            option?: _47.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _48.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: _48.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsRequest;
                fromJSON(object: any): _48.QueryParamsRequest;
                toJSON(message: _48.QueryParamsRequest): unknown;
                fromPartial(object: {
                    paramsType?: string;
                }): _48.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _48.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryParamsResponse;
                fromJSON(object: any): _48.QueryParamsResponse;
                toJSON(message: _48.QueryParamsResponse): unknown;
                fromPartial(object: {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _48.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: _48.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositRequest;
                fromJSON(object: any): _48.QueryDepositRequest;
                toJSON(message: _48.QueryDepositRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                }): _48.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: _48.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositResponse;
                fromJSON(object: any): _48.QueryDepositResponse;
                toJSON(message: _48.QueryDepositResponse): unknown;
                fromPartial(object: {
                    deposit?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _48.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: _48.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositsRequest;
                fromJSON(object: any): _48.QueryDepositsRequest;
                toJSON(message: _48.QueryDepositsRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _48.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: _48.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryDepositsResponse;
                fromJSON(object: any): _48.QueryDepositsResponse;
                toJSON(message: _48.QueryDepositsResponse): unknown;
                fromPartial(object: {
                    deposits?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _48.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: _48.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTallyResultRequest;
                fromJSON(object: any): _48.QueryTallyResultRequest;
                toJSON(message: _48.QueryTallyResultRequest): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                }): _48.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: _48.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryTallyResultResponse;
                fromJSON(object: any): _48.QueryTallyResultResponse;
                toJSON(message: _48.QueryTallyResultResponse): unknown;
                fromPartial(object: {
                    tally?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                }): _48.QueryTallyResultResponse;
            };
            voteOptionFromJSON(object: any): _47.VoteOption;
            voteOptionToJSON(object: _47.VoteOption): string;
            proposalStatusFromJSON(object: any): _47.ProposalStatus;
            proposalStatusToJSON(object: _47.ProposalStatus): string;
            VoteOption: typeof _47.VoteOption;
            VoteOptionSDKType: typeof _47.VoteOption;
            ProposalStatus: typeof _47.ProposalStatus;
            ProposalStatusSDKType: typeof _47.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _47.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.WeightedVoteOption;
                fromJSON(object: any): _47.WeightedVoteOption;
                toJSON(message: _47.WeightedVoteOption): unknown;
                fromPartial(object: {
                    option?: _47.VoteOption;
                    weight?: string;
                }): _47.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: _47.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TextProposal;
                fromJSON(object: any): _47.TextProposal;
                toJSON(message: _47.TextProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _47.TextProposal;
            };
            Deposit: {
                encode(message: _47.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Deposit;
                fromJSON(object: any): _47.Deposit;
                toJSON(message: _47.Deposit): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    depositor?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _47.Deposit;
            };
            Proposal: {
                encode(message: _47.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Proposal;
                fromJSON(object: any): _47.Proposal;
                toJSON(message: _47.Proposal): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    content?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    status?: _47.ProposalStatus;
                    finalTallyResult?: {
                        yes?: string;
                        abstain?: string;
                        no?: string;
                        noWithVeto?: string;
                    };
                    submitTime?: Date;
                    depositEndTime?: Date;
                    totalDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    votingStartTime?: Date;
                    votingEndTime?: Date;
                }): _47.Proposal;
            };
            TallyResult: {
                encode(message: _47.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TallyResult;
                fromJSON(object: any): _47.TallyResult;
                toJSON(message: _47.TallyResult): unknown;
                fromPartial(object: {
                    yes?: string;
                    abstain?: string;
                    no?: string;
                    noWithVeto?: string;
                }): _47.TallyResult;
            };
            Vote: {
                encode(message: _47.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.Vote;
                fromJSON(object: any): _47.Vote;
                toJSON(message: _47.Vote): unknown;
                fromPartial(object: {
                    proposalId?: string | number | import("long").default;
                    voter?: string;
                    option?: _47.VoteOption;
                    options?: {
                        option?: _47.VoteOption;
                        weight?: string;
                    }[];
                }): _47.Vote;
            };
            DepositParams: {
                encode(message: _47.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.DepositParams;
                fromJSON(object: any): _47.DepositParams;
                toJSON(message: _47.DepositParams): unknown;
                fromPartial(object: {
                    minDeposit?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    maxDepositPeriod?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _47.DepositParams;
            };
            VotingParams: {
                encode(message: _47.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.VotingParams;
                fromJSON(object: any): _47.VotingParams;
                toJSON(message: _47.VotingParams): unknown;
                fromPartial(object: {
                    votingPeriod?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                }): _47.VotingParams;
            };
            TallyParams: {
                encode(message: _47.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.TallyParams;
                fromJSON(object: any): _47.TallyParams;
                toJSON(message: _47.TallyParams): unknown;
                fromPartial(object: {
                    quorum?: Uint8Array;
                    threshold?: Uint8Array;
                    vetoThreshold?: Uint8Array;
                }): _47.TallyParams;
            };
            GenesisState: {
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: {
                    startingProposalId?: string | number | import("long").default;
                    deposits?: {
                        proposalId?: string | number | import("long").default;
                        depositor?: string;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                    votes?: {
                        proposalId?: string | number | import("long").default;
                        voter?: string;
                        option?: _47.VoteOption;
                        options?: {
                            option?: _47.VoteOption;
                            weight?: string;
                        }[];
                    }[];
                    proposals?: {
                        proposalId?: string | number | import("long").default;
                        content?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        status?: _47.ProposalStatus;
                        finalTallyResult?: {
                            yes?: string;
                            abstain?: string;
                            no?: string;
                            noWithVeto?: string;
                        };
                        submitTime?: Date;
                        depositEndTime?: Date;
                        totalDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        votingStartTime?: Date;
                        votingEndTime?: Date;
                    }[];
                    depositParams?: {
                        minDeposit?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        maxDepositPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                    };
                    tallyParams?: {
                        quorum?: Uint8Array;
                        threshold?: Uint8Array;
                        vetoThreshold?: Uint8Array;
                    };
                }): _46.GenesisState;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _179.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                inflation(request?: _52.QueryInflationRequest): Promise<_52.QueryInflationResponse>;
                annualProvisions(request?: _52.QueryAnnualProvisionsRequest): Promise<_52.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _164.LCDQueryClient;
            QueryParamsRequest: {
                encode(_: _52.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsRequest;
                fromJSON(_: any): _52.QueryParamsRequest;
                toJSON(_: _52.QueryParamsRequest): unknown;
                fromPartial(_: {}): _52.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _52.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryParamsResponse;
                fromJSON(object: any): _52.QueryParamsResponse;
                toJSON(message: _52.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long").default;
                    };
                }): _52.QueryParamsResponse;
            };
            QueryInflationRequest: {
                encode(_: _52.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryInflationRequest;
                fromJSON(_: any): _52.QueryInflationRequest;
                toJSON(_: _52.QueryInflationRequest): unknown;
                fromPartial(_: {}): _52.QueryInflationRequest;
            };
            QueryInflationResponse: {
                encode(message: _52.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryInflationResponse;
                fromJSON(object: any): _52.QueryInflationResponse;
                toJSON(message: _52.QueryInflationResponse): unknown;
                fromPartial(object: {
                    inflation?: Uint8Array;
                }): _52.QueryInflationResponse;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _52.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _52.QueryAnnualProvisionsRequest;
                toJSON(_: _52.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: {}): _52.QueryAnnualProvisionsRequest;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _52.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _52.QueryAnnualProvisionsResponse;
                toJSON(message: _52.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: {
                    annualProvisions?: Uint8Array;
                }): _52.QueryAnnualProvisionsResponse;
            };
            Minter: {
                encode(message: _51.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Minter;
                fromJSON(object: any): _51.Minter;
                toJSON(message: _51.Minter): unknown;
                fromPartial(object: {
                    inflation?: string;
                    annualProvisions?: string;
                }): _51.Minter;
            };
            Params: {
                encode(message: _51.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Params;
                fromJSON(object: any): _51.Params;
                toJSON(message: _51.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    inflationRateChange?: string;
                    inflationMax?: string;
                    inflationMin?: string;
                    goalBonded?: string;
                    blocksPerYear?: string | number | import("long").default;
                }): _51.Params;
            };
            GenesisState: {
                encode(message: _50.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.GenesisState;
                fromJSON(object: any): _50.GenesisState;
                toJSON(message: _50.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        inflation?: string;
                        annualProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        inflationRateChange?: string;
                        inflationMax?: string;
                        inflationMin?: string;
                        goalBonded?: string;
                        blocksPerYear?: string | number | import("long").default;
                    };
                }): _50.GenesisState;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _180.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _165.LCDQueryClient;
            QueryParamsRequest: {
                encode(message: _54.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsRequest;
                fromJSON(object: any): _54.QueryParamsRequest;
                toJSON(message: _54.QueryParamsRequest): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                }): _54.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _54.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryParamsResponse;
                fromJSON(object: any): _54.QueryParamsResponse;
                toJSON(message: _54.QueryParamsResponse): unknown;
                fromPartial(object: {
                    param?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    };
                }): _54.QueryParamsResponse;
            };
            ParameterChangeProposal: {
                encode(message: _53.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ParameterChangeProposal;
                fromJSON(object: any): _53.ParameterChangeProposal;
                toJSON(message: _53.ParameterChangeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    changes?: {
                        subspace?: string;
                        key?: string;
                        value?: string;
                    }[];
                }): _53.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: _53.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.ParamChange;
                fromJSON(object: any): _53.ParamChange;
                toJSON(message: _53.ParamChange): unknown;
                fromPartial(object: {
                    subspace?: string;
                    key?: string;
                    value?: string;
                }): _53.ParamChange;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _192.MsgClientImpl;
            QueryClientImpl: typeof _181.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                signingInfo(request: _56.QuerySigningInfoRequest): Promise<_56.QuerySigningInfoResponse>;
                signingInfos(request?: _56.QuerySigningInfosRequest): Promise<_56.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _166.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _58.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _58.MsgUnjail): {
                        typeUrl: string;
                        value: _58.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _58.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _58.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _58.MsgUnjail): {
                        typeUrl: string;
                        value: _58.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: ({ validatorAddr }: _58.MsgUnjail) => {
                        validator_addr: string;
                    };
                    fromAmino: ({ validator_addr }: {
                        validator_addr: string;
                    }) => _58.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _58.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUnjail;
                fromJSON(object: any): _58.MsgUnjail;
                toJSON(message: _58.MsgUnjail): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _58.MsgUnjail;
            };
            MsgUnjailResponse: {
                encode(_: _58.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.MsgUnjailResponse;
                fromJSON(_: any): _58.MsgUnjailResponse;
                toJSON(_: _58.MsgUnjailResponse): unknown;
                fromPartial(_: {}): _58.MsgUnjailResponse;
            };
            ValidatorSigningInfo: {
                encode(message: _57.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ValidatorSigningInfo;
                fromJSON(object: any): _57.ValidatorSigningInfo;
                toJSON(message: _57.ValidatorSigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    startHeight?: string | number | import("long").default;
                    indexOffset?: string | number | import("long").default;
                    jailedUntil?: Date;
                    tombstoned?: boolean;
                    missedBlocksCounter?: string | number | import("long").default;
                }): _57.ValidatorSigningInfo;
            };
            Params: {
                encode(message: _57.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Params;
                fromJSON(object: any): _57.Params;
                toJSON(message: _57.Params): unknown;
                fromPartial(object: {
                    signedBlocksWindow?: string | number | import("long").default;
                    minSignedPerWindow?: Uint8Array;
                    downtimeJailDuration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    slashFractionDoubleSign?: Uint8Array;
                    slashFractionDowntime?: Uint8Array;
                }): _57.Params;
            };
            QueryParamsRequest: {
                encode(_: _56.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsRequest;
                fromJSON(_: any): _56.QueryParamsRequest;
                toJSON(_: _56.QueryParamsRequest): unknown;
                fromPartial(_: {}): _56.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _56.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QueryParamsResponse;
                fromJSON(object: any): _56.QueryParamsResponse;
                toJSON(message: _56.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long").default;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                }): _56.QueryParamsResponse;
            };
            QuerySigningInfoRequest: {
                encode(message: _56.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySigningInfoRequest;
                fromJSON(object: any): _56.QuerySigningInfoRequest;
                toJSON(message: _56.QuerySigningInfoRequest): unknown;
                fromPartial(object: {
                    consAddress?: string;
                }): _56.QuerySigningInfoRequest;
            };
            QuerySigningInfoResponse: {
                encode(message: _56.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySigningInfoResponse;
                fromJSON(object: any): _56.QuerySigningInfoResponse;
                toJSON(message: _56.QuerySigningInfoResponse): unknown;
                fromPartial(object: {
                    valSigningInfo?: {
                        address?: string;
                        startHeight?: string | number | import("long").default;
                        indexOffset?: string | number | import("long").default;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").default;
                    };
                }): _56.QuerySigningInfoResponse;
            };
            QuerySigningInfosRequest: {
                encode(message: _56.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySigningInfosRequest;
                fromJSON(object: any): _56.QuerySigningInfosRequest;
                toJSON(message: _56.QuerySigningInfosRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _56.QuerySigningInfosRequest;
            };
            QuerySigningInfosResponse: {
                encode(message: _56.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.QuerySigningInfosResponse;
                fromJSON(object: any): _56.QuerySigningInfosResponse;
                toJSON(message: _56.QuerySigningInfosResponse): unknown;
                fromPartial(object: {
                    info?: {
                        address?: string;
                        startHeight?: string | number | import("long").default;
                        indexOffset?: string | number | import("long").default;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").default;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _56.QuerySigningInfosResponse;
            };
            GenesisState: {
                encode(message: _55.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.GenesisState;
                fromJSON(object: any): _55.GenesisState;
                toJSON(message: _55.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        signedBlocksWindow?: string | number | import("long").default;
                        minSignedPerWindow?: Uint8Array;
                        downtimeJailDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        slashFractionDoubleSign?: Uint8Array;
                        slashFractionDowntime?: Uint8Array;
                    };
                    signingInfos?: {
                        address?: string;
                        validatorSigningInfo?: {
                            address?: string;
                            startHeight?: string | number | import("long").default;
                            indexOffset?: string | number | import("long").default;
                            jailedUntil?: Date;
                            tombstoned?: boolean;
                            missedBlocksCounter?: string | number | import("long").default;
                        };
                    }[];
                    missedBlocks?: {
                        address?: string;
                        missedBlocks?: {
                            index?: string | number | import("long").default;
                            missed?: boolean;
                        }[];
                    }[];
                }): _55.GenesisState;
            };
            SigningInfo: {
                encode(message: _55.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.SigningInfo;
                fromJSON(object: any): _55.SigningInfo;
                toJSON(message: _55.SigningInfo): unknown;
                fromPartial(object: {
                    address?: string;
                    validatorSigningInfo?: {
                        address?: string;
                        startHeight?: string | number | import("long").default;
                        indexOffset?: string | number | import("long").default;
                        jailedUntil?: Date;
                        tombstoned?: boolean;
                        missedBlocksCounter?: string | number | import("long").default;
                    };
                }): _55.SigningInfo;
            };
            ValidatorMissedBlocks: {
                encode(message: _55.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.ValidatorMissedBlocks;
                fromJSON(object: any): _55.ValidatorMissedBlocks;
                toJSON(message: _55.ValidatorMissedBlocks): unknown;
                fromPartial(object: {
                    address?: string;
                    missedBlocks?: {
                        index?: string | number | import("long").default;
                        missed?: boolean;
                    }[];
                }): _55.ValidatorMissedBlocks;
            };
            MissedBlock: {
                encode(message: _55.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.MissedBlock;
                fromJSON(object: any): _55.MissedBlock;
                toJSON(message: _55.MissedBlock): unknown;
                fromPartial(object: {
                    index?: string | number | import("long").default;
                    missed?: boolean;
                }): _55.MissedBlock;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _193.MsgClientImpl;
            QueryClientImpl: typeof _182.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _61.QueryValidatorsRequest): Promise<_61.QueryValidatorsResponse>;
                validator(request: _61.QueryValidatorRequest): Promise<_61.QueryValidatorResponse>;
                validatorDelegations(request: _61.QueryValidatorDelegationsRequest): Promise<_61.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _61.QueryValidatorUnbondingDelegationsRequest): Promise<_61.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _61.QueryDelegationRequest): Promise<_61.QueryDelegationResponse>;
                unbondingDelegation(request: _61.QueryUnbondingDelegationRequest): Promise<_61.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _61.QueryDelegatorDelegationsRequest): Promise<_61.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _61.QueryDelegatorUnbondingDelegationsRequest): Promise<_61.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _61.QueryRedelegationsRequest): Promise<_61.QueryRedelegationsResponse>;
                delegatorValidators(request: _61.QueryDelegatorValidatorsRequest): Promise<_61.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _61.QueryDelegatorValidatorRequest): Promise<_61.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _61.QueryHistoricalInfoRequest): Promise<_61.QueryHistoricalInfoResponse>;
                pool(request?: _61.QueryPoolRequest): Promise<_61.QueryPoolResponse>;
                params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _167.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _63.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _63.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _63.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _63.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _63.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _63.MsgCreateValidator): {
                        typeUrl: string;
                        value: _63.MsgCreateValidator;
                    };
                    editValidator(value: _63.MsgEditValidator): {
                        typeUrl: string;
                        value: _63.MsgEditValidator;
                    };
                    delegate(value: _63.MsgDelegate): {
                        typeUrl: string;
                        value: _63.MsgDelegate;
                    };
                    beginRedelegate(value: _63.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _63.MsgBeginRedelegate;
                    };
                    undelegate(value: _63.MsgUndelegate): {
                        typeUrl: string;
                        value: _63.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _63.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _63.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _63.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _63.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _63.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _63.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _63.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _63.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _63.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _63.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _63.MsgCreateValidator): {
                        typeUrl: string;
                        value: _63.MsgCreateValidator;
                    };
                    editValidator(value: _63.MsgEditValidator): {
                        typeUrl: string;
                        value: _63.MsgEditValidator;
                    };
                    delegate(value: _63.MsgDelegate): {
                        typeUrl: string;
                        value: _63.MsgDelegate;
                    };
                    beginRedelegate(value: _63.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _63.MsgBeginRedelegate;
                    };
                    undelegate(value: _63.MsgUndelegate): {
                        typeUrl: string;
                        value: _63.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: ({ description, commission, minSelfDelegation, delegatorAddress, validatorAddress, pubkey, value }: _63.MsgCreateValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ description, commission, min_self_delegation, delegator_address, validator_address, pubkey, value }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        commission: {
                            rate: string;
                            max_rate: string;
                            max_change_rate: string;
                        };
                        min_self_delegation: string;
                        delegator_address: string;
                        validator_address: string;
                        pubkey: {
                            type_url: string;
                            value: Uint8Array;
                        };
                        value: {
                            denom: string;
                            amount: string;
                        };
                    }) => _63.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: ({ description, validatorAddress, commissionRate, minSelfDelegation }: _63.MsgEditValidator) => {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    };
                    fromAmino: ({ description, validator_address, commission_rate, min_self_delegation }: {
                        description: {
                            moniker: string;
                            identity: string;
                            website: string;
                            security_contact: string;
                            details: string;
                        };
                        validator_address: string;
                        commission_rate: string;
                        min_self_delegation: string;
                    }) => _63.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _63.MsgDelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _63.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorSrcAddress, validatorDstAddress, amount }: _63.MsgBeginRedelegate) => {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_src_address, validator_dst_address, amount }: {
                        delegator_address: string;
                        validator_src_address: string;
                        validator_dst_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _63.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: ({ delegatorAddress, validatorAddress, amount }: _63.MsgUndelegate) => {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    };
                    fromAmino: ({ delegator_address, validator_address, amount }: {
                        delegator_address: string;
                        validator_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        };
                    }) => _63.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _63.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateValidator;
                fromJSON(object: any): _63.MsgCreateValidator;
                toJSON(message: _63.MsgCreateValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    commission?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    minSelfDelegation?: string;
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    pubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    value?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _63.MsgCreateValidator;
            };
            MsgCreateValidatorResponse: {
                encode(_: _63.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgCreateValidatorResponse;
                fromJSON(_: any): _63.MsgCreateValidatorResponse;
                toJSON(_: _63.MsgCreateValidatorResponse): unknown;
                fromPartial(_: {}): _63.MsgCreateValidatorResponse;
            };
            MsgEditValidator: {
                encode(message: _63.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgEditValidator;
                fromJSON(object: any): _63.MsgEditValidator;
                toJSON(message: _63.MsgEditValidator): unknown;
                fromPartial(object: {
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    validatorAddress?: string;
                    commissionRate?: string;
                    minSelfDelegation?: string;
                }): _63.MsgEditValidator;
            };
            MsgEditValidatorResponse: {
                encode(_: _63.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgEditValidatorResponse;
                fromJSON(_: any): _63.MsgEditValidatorResponse;
                toJSON(_: _63.MsgEditValidatorResponse): unknown;
                fromPartial(_: {}): _63.MsgEditValidatorResponse;
            };
            MsgDelegate: {
                encode(message: _63.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgDelegate;
                fromJSON(object: any): _63.MsgDelegate;
                toJSON(message: _63.MsgDelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _63.MsgDelegate;
            };
            MsgDelegateResponse: {
                encode(_: _63.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgDelegateResponse;
                fromJSON(_: any): _63.MsgDelegateResponse;
                toJSON(_: _63.MsgDelegateResponse): unknown;
                fromPartial(_: {}): _63.MsgDelegateResponse;
            };
            MsgBeginRedelegate: {
                encode(message: _63.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgBeginRedelegate;
                fromJSON(object: any): _63.MsgBeginRedelegate;
                toJSON(message: _63.MsgBeginRedelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _63.MsgBeginRedelegate;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _63.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgBeginRedelegateResponse;
                fromJSON(object: any): _63.MsgBeginRedelegateResponse;
                toJSON(message: _63.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _63.MsgBeginRedelegateResponse;
            };
            MsgUndelegate: {
                encode(message: _63.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUndelegate;
                fromJSON(object: any): _63.MsgUndelegate;
                toJSON(message: _63.MsgUndelegate): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _63.MsgUndelegate;
            };
            MsgUndelegateResponse: {
                encode(message: _63.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.MsgUndelegateResponse;
                fromJSON(object: any): _63.MsgUndelegateResponse;
                toJSON(message: _63.MsgUndelegateResponse): unknown;
                fromPartial(object: {
                    completionTime?: Date;
                }): _63.MsgUndelegateResponse;
            };
            bondStatusFromJSON(object: any): _62.BondStatus;
            bondStatusToJSON(object: _62.BondStatus): string;
            BondStatus: typeof _62.BondStatus;
            BondStatusSDKType: typeof _62.BondStatus;
            HistoricalInfo: {
                encode(message: _62.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.HistoricalInfo;
                fromJSON(object: any): _62.HistoricalInfo;
                toJSON(message: _62.HistoricalInfo): unknown;
                fromPartial(object: {
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
                    valset?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _62.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                }): _62.HistoricalInfo;
            };
            CommissionRates: {
                encode(message: _62.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.CommissionRates;
                fromJSON(object: any): _62.CommissionRates;
                toJSON(message: _62.CommissionRates): unknown;
                fromPartial(object: {
                    rate?: string;
                    maxRate?: string;
                    maxChangeRate?: string;
                }): _62.CommissionRates;
            };
            Commission: {
                encode(message: _62.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Commission;
                fromJSON(object: any): _62.Commission;
                toJSON(message: _62.Commission): unknown;
                fromPartial(object: {
                    commissionRates?: {
                        rate?: string;
                        maxRate?: string;
                        maxChangeRate?: string;
                    };
                    updateTime?: Date;
                }): _62.Commission;
            };
            Description: {
                encode(message: _62.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Description;
                fromJSON(object: any): _62.Description;
                toJSON(message: _62.Description): unknown;
                fromPartial(object: {
                    moniker?: string;
                    identity?: string;
                    website?: string;
                    securityContact?: string;
                    details?: string;
                }): _62.Description;
            };
            Validator: {
                encode(message: _62.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Validator;
                fromJSON(object: any): _62.Validator;
                toJSON(message: _62.Validator): unknown;
                fromPartial(object: {
                    operatorAddress?: string;
                    consensusPubkey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    jailed?: boolean;
                    status?: _62.BondStatus;
                    tokens?: string;
                    delegatorShares?: string;
                    description?: {
                        moniker?: string;
                        identity?: string;
                        website?: string;
                        securityContact?: string;
                        details?: string;
                    };
                    unbondingHeight?: string | number | import("long").default;
                    unbondingTime?: Date;
                    commission?: {
                        commissionRates?: {
                            rate?: string;
                            maxRate?: string;
                            maxChangeRate?: string;
                        };
                        updateTime?: Date;
                    };
                    minSelfDelegation?: string;
                }): _62.Validator;
            };
            ValAddresses: {
                encode(message: _62.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ValAddresses;
                fromJSON(object: any): _62.ValAddresses;
                toJSON(message: _62.ValAddresses): unknown;
                fromPartial(object: {
                    addresses?: string[];
                }): _62.ValAddresses;
            };
            DVPair: {
                encode(message: _62.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DVPair;
                fromJSON(object: any): _62.DVPair;
                toJSON(message: _62.DVPair): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                }): _62.DVPair;
            };
            DVPairs: {
                encode(message: _62.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DVPairs;
                fromJSON(object: any): _62.DVPairs;
                toJSON(message: _62.DVPairs): unknown;
                fromPartial(object: {
                    pairs?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                    }[];
                }): _62.DVPairs;
            };
            DVVTriplet: {
                encode(message: _62.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DVVTriplet;
                fromJSON(object: any): _62.DVVTriplet;
                toJSON(message: _62.DVVTriplet): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                }): _62.DVVTriplet;
            };
            DVVTriplets: {
                encode(message: _62.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DVVTriplets;
                fromJSON(object: any): _62.DVVTriplets;
                toJSON(message: _62.DVVTriplets): unknown;
                fromPartial(object: {
                    triplets?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                    }[];
                }): _62.DVVTriplets;
            };
            Delegation: {
                encode(message: _62.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Delegation;
                fromJSON(object: any): _62.Delegation;
                toJSON(message: _62.Delegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    shares?: string;
                }): _62.Delegation;
            };
            UnbondingDelegation: {
                encode(message: _62.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.UnbondingDelegation;
                fromJSON(object: any): _62.UnbondingDelegation;
                toJSON(message: _62.UnbondingDelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long").default;
                        completionTime?: Date;
                        initialBalance?: string;
                        balance?: string;
                    }[];
                }): _62.UnbondingDelegation;
            };
            UnbondingDelegationEntry: {
                encode(message: _62.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.UnbondingDelegationEntry;
                fromJSON(object: any): _62.UnbondingDelegationEntry;
                toJSON(message: _62.UnbondingDelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").default;
                    completionTime?: Date;
                    initialBalance?: string;
                    balance?: string;
                }): _62.UnbondingDelegationEntry;
            };
            RedelegationEntry: {
                encode(message: _62.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RedelegationEntry;
                fromJSON(object: any): _62.RedelegationEntry;
                toJSON(message: _62.RedelegationEntry): unknown;
                fromPartial(object: {
                    creationHeight?: string | number | import("long").default;
                    completionTime?: Date;
                    initialBalance?: string;
                    sharesDst?: string;
                }): _62.RedelegationEntry;
            };
            Redelegation: {
                encode(message: _62.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Redelegation;
                fromJSON(object: any): _62.Redelegation;
                toJSON(message: _62.Redelegation): unknown;
                fromPartial(object: {
                    delegatorAddress?: string;
                    validatorSrcAddress?: string;
                    validatorDstAddress?: string;
                    entries?: {
                        creationHeight?: string | number | import("long").default;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    }[];
                }): _62.Redelegation;
            };
            Params: {
                encode(message: _62.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Params;
                fromJSON(object: any): _62.Params;
                toJSON(message: _62.Params): unknown;
                fromPartial(object: {
                    unbondingTime?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    maxValidators?: number;
                    maxEntries?: number;
                    historicalEntries?: number;
                    bondDenom?: string;
                }): _62.Params;
            };
            DelegationResponse: {
                encode(message: _62.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.DelegationResponse;
                fromJSON(object: any): _62.DelegationResponse;
                toJSON(message: _62.DelegationResponse): unknown;
                fromPartial(object: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _62.DelegationResponse;
            };
            RedelegationEntryResponse: {
                encode(message: _62.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RedelegationEntryResponse;
                fromJSON(object: any): _62.RedelegationEntryResponse;
                toJSON(message: _62.RedelegationEntryResponse): unknown;
                fromPartial(object: {
                    redelegationEntry?: {
                        creationHeight?: string | number | import("long").default;
                        completionTime?: Date;
                        initialBalance?: string;
                        sharesDst?: string;
                    };
                    balance?: string;
                }): _62.RedelegationEntryResponse;
            };
            RedelegationResponse: {
                encode(message: _62.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.RedelegationResponse;
                fromJSON(object: any): _62.RedelegationResponse;
                toJSON(message: _62.RedelegationResponse): unknown;
                fromPartial(object: {
                    redelegation?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    };
                    entries?: {
                        redelegationEntry?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        };
                        balance?: string;
                    }[];
                }): _62.RedelegationResponse;
            };
            Pool: {
                encode(message: _62.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.Pool;
                fromJSON(object: any): _62.Pool;
                toJSON(message: _62.Pool): unknown;
                fromPartial(object: {
                    notBondedTokens?: string;
                    bondedTokens?: string;
                }): _62.Pool;
            };
            QueryValidatorsRequest: {
                encode(message: _61.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorsRequest;
                fromJSON(object: any): _61.QueryValidatorsRequest;
                toJSON(message: _61.QueryValidatorsRequest): unknown;
                fromPartial(object: {
                    status?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _61.QueryValidatorsRequest;
            };
            QueryValidatorsResponse: {
                encode(message: _61.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorsResponse;
                fromJSON(object: any): _61.QueryValidatorsResponse;
                toJSON(message: _61.QueryValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _62.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _61.QueryValidatorsResponse;
            };
            QueryValidatorRequest: {
                encode(message: _61.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorRequest;
                fromJSON(object: any): _61.QueryValidatorRequest;
                toJSON(message: _61.QueryValidatorRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                }): _61.QueryValidatorRequest;
            };
            QueryValidatorResponse: {
                encode(message: _61.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorResponse;
                fromJSON(object: any): _61.QueryValidatorResponse;
                toJSON(message: _61.QueryValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _62.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _61.QueryValidatorResponse;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _61.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _61.QueryValidatorDelegationsRequest;
                toJSON(message: _61.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _61.QueryValidatorDelegationsRequest;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _61.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _61.QueryValidatorDelegationsResponse;
                toJSON(message: _61.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _61.QueryValidatorDelegationsResponse;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _61.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _61.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _61.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    validatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _61.QueryValidatorUnbondingDelegationsRequest;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _61.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _61.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _61.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _61.QueryValidatorUnbondingDelegationsResponse;
            };
            QueryDelegationRequest: {
                encode(message: _61.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegationRequest;
                fromJSON(object: any): _61.QueryDelegationRequest;
                toJSON(message: _61.QueryDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _61.QueryDelegationRequest;
            };
            QueryDelegationResponse: {
                encode(message: _61.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegationResponse;
                fromJSON(object: any): _61.QueryDelegationResponse;
                toJSON(message: _61.QueryDelegationResponse): unknown;
                fromPartial(object: {
                    delegationResponse?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    };
                }): _61.QueryDelegationResponse;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _61.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _61.QueryUnbondingDelegationRequest;
                toJSON(message: _61.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _61.QueryUnbondingDelegationRequest;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _61.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _61.QueryUnbondingDelegationResponse;
                toJSON(message: _61.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: {
                    unbond?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    };
                }): _61.QueryUnbondingDelegationResponse;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _61.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _61.QueryDelegatorDelegationsRequest;
                toJSON(message: _61.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _61.QueryDelegatorDelegationsRequest;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _61.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _61.QueryDelegatorDelegationsResponse;
                toJSON(message: _61.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: {
                    delegationResponses?: {
                        delegation?: {
                            delegatorAddress?: string;
                            validatorAddress?: string;
                            shares?: string;
                        };
                        balance?: {
                            denom?: string;
                            amount?: string;
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _61.QueryDelegatorDelegationsResponse;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _61.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _61.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _61.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _61.QueryDelegatorUnbondingDelegationsRequest;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _61.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _61.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _61.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: {
                    unbondingResponses?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _61.QueryDelegatorUnbondingDelegationsResponse;
            };
            QueryRedelegationsRequest: {
                encode(message: _61.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryRedelegationsRequest;
                fromJSON(object: any): _61.QueryRedelegationsRequest;
                toJSON(message: _61.QueryRedelegationsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    srcValidatorAddr?: string;
                    dstValidatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _61.QueryRedelegationsRequest;
            };
            QueryRedelegationsResponse: {
                encode(message: _61.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryRedelegationsResponse;
                fromJSON(object: any): _61.QueryRedelegationsResponse;
                toJSON(message: _61.QueryRedelegationsResponse): unknown;
                fromPartial(object: {
                    redelegationResponses?: {
                        redelegation?: {
                            delegatorAddress?: string;
                            validatorSrcAddress?: string;
                            validatorDstAddress?: string;
                            entries?: {
                                creationHeight?: string | number | import("long").default;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            }[];
                        };
                        entries?: {
                            redelegationEntry?: {
                                creationHeight?: string | number | import("long").default;
                                completionTime?: Date;
                                initialBalance?: string;
                                sharesDst?: string;
                            };
                            balance?: string;
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _61.QueryRedelegationsResponse;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _61.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _61.QueryDelegatorValidatorsRequest;
                toJSON(message: _61.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _61.QueryDelegatorValidatorsRequest;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _61.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _61.QueryDelegatorValidatorsResponse;
                toJSON(message: _61.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: {
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _62.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _61.QueryDelegatorValidatorsResponse;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _61.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _61.QueryDelegatorValidatorRequest;
                toJSON(message: _61.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: {
                    delegatorAddr?: string;
                    validatorAddr?: string;
                }): _61.QueryDelegatorValidatorRequest;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _61.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _61.QueryDelegatorValidatorResponse;
                toJSON(message: _61.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: {
                    validator?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _62.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    };
                }): _61.QueryDelegatorValidatorResponse;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _61.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryHistoricalInfoRequest;
                fromJSON(object: any): _61.QueryHistoricalInfoRequest;
                toJSON(message: _61.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                }): _61.QueryHistoricalInfoRequest;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _61.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryHistoricalInfoResponse;
                fromJSON(object: any): _61.QueryHistoricalInfoResponse;
                toJSON(message: _61.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: {
                    hist?: {
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
                        valset?: {
                            operatorAddress?: string;
                            consensusPubkey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            jailed?: boolean;
                            status?: _62.BondStatus;
                            tokens?: string;
                            delegatorShares?: string;
                            description?: {
                                moniker?: string;
                                identity?: string;
                                website?: string;
                                securityContact?: string;
                                details?: string;
                            };
                            unbondingHeight?: string | number | import("long").default;
                            unbondingTime?: Date;
                            commission?: {
                                commissionRates?: {
                                    rate?: string;
                                    maxRate?: string;
                                    maxChangeRate?: string;
                                };
                                updateTime?: Date;
                            };
                            minSelfDelegation?: string;
                        }[];
                    };
                }): _61.QueryHistoricalInfoResponse;
            };
            QueryPoolRequest: {
                encode(_: _61.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryPoolRequest;
                fromJSON(_: any): _61.QueryPoolRequest;
                toJSON(_: _61.QueryPoolRequest): unknown;
                fromPartial(_: {}): _61.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: _61.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryPoolResponse;
                fromJSON(object: any): _61.QueryPoolResponse;
                toJSON(message: _61.QueryPoolResponse): unknown;
                fromPartial(object: {
                    pool?: {
                        notBondedTokens?: string;
                        bondedTokens?: string;
                    };
                }): _61.QueryPoolResponse;
            };
            QueryParamsRequest: {
                encode(_: _61.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsRequest;
                fromJSON(_: any): _61.QueryParamsRequest;
                toJSON(_: _61.QueryParamsRequest): unknown;
                fromPartial(_: {}): _61.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _61.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.QueryParamsResponse;
                fromJSON(object: any): _61.QueryParamsResponse;
                toJSON(message: _61.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                    };
                }): _61.QueryParamsResponse;
            };
            GenesisState: {
                encode(message: _60.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.GenesisState;
                fromJSON(object: any): _60.GenesisState;
                toJSON(message: _60.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        unbondingTime?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxValidators?: number;
                        maxEntries?: number;
                        historicalEntries?: number;
                        bondDenom?: string;
                    };
                    lastTotalPower?: Uint8Array;
                    lastValidatorPowers?: {
                        address?: string;
                        power?: string | number | import("long").default;
                    }[];
                    validators?: {
                        operatorAddress?: string;
                        consensusPubkey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        jailed?: boolean;
                        status?: _62.BondStatus;
                        tokens?: string;
                        delegatorShares?: string;
                        description?: {
                            moniker?: string;
                            identity?: string;
                            website?: string;
                            securityContact?: string;
                            details?: string;
                        };
                        unbondingHeight?: string | number | import("long").default;
                        unbondingTime?: Date;
                        commission?: {
                            commissionRates?: {
                                rate?: string;
                                maxRate?: string;
                                maxChangeRate?: string;
                            };
                            updateTime?: Date;
                        };
                        minSelfDelegation?: string;
                    }[];
                    delegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    }[];
                    unbondingDelegations?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            balance?: string;
                        }[];
                    }[];
                    redelegations?: {
                        delegatorAddress?: string;
                        validatorSrcAddress?: string;
                        validatorDstAddress?: string;
                        entries?: {
                            creationHeight?: string | number | import("long").default;
                            completionTime?: Date;
                            initialBalance?: string;
                            sharesDst?: string;
                        }[];
                    }[];
                    exported?: boolean;
                }): _60.GenesisState;
            };
            LastValidatorPower: {
                encode(message: _60.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.LastValidatorPower;
                fromJSON(object: any): _60.LastValidatorPower;
                toJSON(message: _60.LastValidatorPower): unknown;
                fromPartial(object: {
                    address?: string;
                    power?: string | number | import("long").default;
                }): _60.LastValidatorPower;
            };
            authorizationTypeFromJSON(object: any): _59.AuthorizationType;
            authorizationTypeToJSON(object: _59.AuthorizationType): string;
            AuthorizationType: typeof _59.AuthorizationType;
            AuthorizationTypeSDKType: typeof _59.AuthorizationType;
            StakeAuthorization: {
                encode(message: _59.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.StakeAuthorization;
                fromJSON(object: any): _59.StakeAuthorization;
                toJSON(message: _59.StakeAuthorization): unknown;
                fromPartial(object: {
                    maxTokens?: {
                        denom?: string;
                        amount?: string;
                    };
                    allowList?: {
                        address?: string[];
                    };
                    denyList?: {
                        address?: string[];
                    };
                    authorizationType?: _59.AuthorizationType;
                }): _59.StakeAuthorization;
            };
            StakeAuthorization_Validators: {
                encode(message: _59.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.StakeAuthorization_Validators;
                fromJSON(object: any): _59.StakeAuthorization_Validators;
                toJSON(message: _59.StakeAuthorization_Validators): unknown;
                fromPartial(object: {
                    address?: string[];
                }): _59.StakeAuthorization_Validators;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _64.SignMode;
                signModeToJSON(object: _64.SignMode): string;
                SignMode: typeof _64.SignMode;
                SignModeSDKType: typeof _64.SignMode;
                SignatureDescriptors: {
                    encode(message: _64.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptors;
                    fromJSON(object: any): _64.SignatureDescriptors;
                    toJSON(message: _64.SignatureDescriptors): unknown;
                    fromPartial(object: {
                        signatures?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            data?: {
                                single?: {
                                    mode?: _64.SignMode;
                                    signature?: Uint8Array;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    signatures?: any[];
                                };
                            };
                            sequence?: string | number | import("long").default;
                        }[];
                    }): _64.SignatureDescriptors;
                };
                SignatureDescriptor: {
                    encode(message: _64.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptor;
                    fromJSON(object: any): _64.SignatureDescriptor;
                    toJSON(message: _64.SignatureDescriptor): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        data?: {
                            single?: {
                                mode?: _64.SignMode;
                                signature?: Uint8Array;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                signatures?: any[];
                            };
                        };
                        sequence?: string | number | import("long").default;
                    }): _64.SignatureDescriptor;
                };
                SignatureDescriptor_Data: {
                    encode(message: _64.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptor_Data;
                    fromJSON(object: any): _64.SignatureDescriptor_Data;
                    toJSON(message: _64.SignatureDescriptor_Data): unknown;
                    fromPartial(object: {
                        single?: {
                            mode?: _64.SignMode;
                            signature?: Uint8Array;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            signatures?: any[];
                        };
                    }): _64.SignatureDescriptor_Data;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _64.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _64.SignatureDescriptor_Data_Single;
                    toJSON(message: _64.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: {
                        mode?: _64.SignMode;
                        signature?: Uint8Array;
                    }): _64.SignatureDescriptor_Data_Single;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _64.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _64.SignatureDescriptor_Data_Multi;
                    toJSON(message: _64.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        signatures?: any[];
                    }): _64.SignatureDescriptor_Data_Multi;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _183.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _65.SimulateRequest): Promise<_65.SimulateResponse>;
                getTx(request: _65.GetTxRequest): Promise<_65.GetTxResponse>;
                broadcastTx(request: _65.BroadcastTxRequest): Promise<_65.BroadcastTxResponse>;
                getTxsEvent(request: _65.GetTxsEventRequest): Promise<_65.GetTxsEventResponse>;
                getBlockWithTxs(request: _65.GetBlockWithTxsRequest): Promise<_65.GetBlockWithTxsResponse>;
            };
            LCDQueryClient: typeof _168.LCDQueryClient;
            Tx: {
                encode(message: _66.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Tx;
                fromJSON(object: any): _66.Tx;
                toJSON(message: _66.Tx): unknown;
                fromPartial(object: {
                    body?: {
                        messages?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        memo?: string;
                        timeoutHeight?: string | number | import("long").default;
                        extensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                        nonCriticalExtensionOptions?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        }[];
                    };
                    authInfo?: {
                        signerInfos?: {
                            publicKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            modeInfo?: {
                                single?: {
                                    mode?: _64.SignMode;
                                };
                                multi?: {
                                    bitarray?: {
                                        extraBitsStored?: number;
                                        elems?: Uint8Array;
                                    };
                                    modeInfos?: any[];
                                };
                            };
                            sequence?: string | number | import("long").default;
                        }[];
                        fee?: {
                            amount?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            gasLimit?: string | number | import("long").default;
                            payer?: string;
                            granter?: string;
                        };
                    };
                    signatures?: Uint8Array[];
                }): _66.Tx;
            };
            TxRaw: {
                encode(message: _66.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TxRaw;
                fromJSON(object: any): _66.TxRaw;
                toJSON(message: _66.TxRaw): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    signatures?: Uint8Array[];
                }): _66.TxRaw;
            };
            SignDoc: {
                encode(message: _66.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SignDoc;
                fromJSON(object: any): _66.SignDoc;
                toJSON(message: _66.SignDoc): unknown;
                fromPartial(object: {
                    bodyBytes?: Uint8Array;
                    authInfoBytes?: Uint8Array;
                    chainId?: string;
                    accountNumber?: string | number | import("long").default;
                }): _66.SignDoc;
            };
            TxBody: {
                encode(message: _66.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TxBody;
                fromJSON(object: any): _66.TxBody;
                toJSON(message: _66.TxBody): unknown;
                fromPartial(object: {
                    messages?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    memo?: string;
                    timeoutHeight?: string | number | import("long").default;
                    extensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                    nonCriticalExtensionOptions?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    }[];
                }): _66.TxBody;
            };
            AuthInfo: {
                encode(message: _66.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.AuthInfo;
                fromJSON(object: any): _66.AuthInfo;
                toJSON(message: _66.AuthInfo): unknown;
                fromPartial(object: {
                    signerInfos?: {
                        publicKey?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        modeInfo?: {
                            single?: {
                                mode?: _64.SignMode;
                            };
                            multi?: {
                                bitarray?: {
                                    extraBitsStored?: number;
                                    elems?: Uint8Array;
                                };
                                modeInfos?: any[];
                            };
                        };
                        sequence?: string | number | import("long").default;
                    }[];
                    fee?: {
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        gasLimit?: string | number | import("long").default;
                        payer?: string;
                        granter?: string;
                    };
                }): _66.AuthInfo;
            };
            SignerInfo: {
                encode(message: _66.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.SignerInfo;
                fromJSON(object: any): _66.SignerInfo;
                toJSON(message: _66.SignerInfo): unknown;
                fromPartial(object: {
                    publicKey?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                    modeInfo?: {
                        single?: {
                            mode?: _64.SignMode;
                        };
                        multi?: {
                            bitarray?: {
                                extraBitsStored?: number;
                                elems?: Uint8Array;
                            };
                            modeInfos?: any[];
                        };
                    };
                    sequence?: string | number | import("long").default;
                }): _66.SignerInfo;
            };
            ModeInfo: {
                encode(message: _66.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ModeInfo;
                fromJSON(object: any): _66.ModeInfo;
                toJSON(message: _66.ModeInfo): unknown;
                fromPartial(object: {
                    single?: {
                        mode?: _64.SignMode;
                    };
                    multi?: {
                        bitarray?: {
                            extraBitsStored?: number;
                            elems?: Uint8Array;
                        };
                        modeInfos?: any[];
                    };
                }): _66.ModeInfo;
            };
            ModeInfo_Single: {
                encode(message: _66.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ModeInfo_Single;
                fromJSON(object: any): _66.ModeInfo_Single;
                toJSON(message: _66.ModeInfo_Single): unknown;
                fromPartial(object: {
                    mode?: _64.SignMode;
                }): _66.ModeInfo_Single;
            };
            ModeInfo_Multi: {
                encode(message: _66.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ModeInfo_Multi;
                fromJSON(object: any): _66.ModeInfo_Multi;
                toJSON(message: _66.ModeInfo_Multi): unknown;
                fromPartial(object: {
                    bitarray?: {
                        extraBitsStored?: number;
                        elems?: Uint8Array;
                    };
                    modeInfos?: any[];
                }): _66.ModeInfo_Multi;
            };
            Fee: {
                encode(message: _66.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Fee;
                fromJSON(object: any): _66.Fee;
                toJSON(message: _66.Fee): unknown;
                fromPartial(object: {
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    gasLimit?: string | number | import("long").default;
                    payer?: string;
                    granter?: string;
                }): _66.Fee;
            };
            orderByFromJSON(object: any): _65.OrderBy;
            orderByToJSON(object: _65.OrderBy): string;
            broadcastModeFromJSON(object: any): _65.BroadcastMode;
            broadcastModeToJSON(object: _65.BroadcastMode): string;
            OrderBy: typeof _65.OrderBy;
            OrderBySDKType: typeof _65.OrderBy;
            BroadcastMode: typeof _65.BroadcastMode;
            BroadcastModeSDKType: typeof _65.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _65.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetTxsEventRequest;
                fromJSON(object: any): _65.GetTxsEventRequest;
                toJSON(message: _65.GetTxsEventRequest): unknown;
                fromPartial(object: {
                    events?: string[];
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                    orderBy?: _65.OrderBy;
                }): _65.GetTxsEventRequest;
            };
            GetTxsEventResponse: {
                encode(message: _65.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetTxsEventResponse;
                fromJSON(object: any): _65.GetTxsEventResponse;
                toJSON(message: _65.GetTxsEventResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _64.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    txResponses?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _65.GetTxsEventResponse;
            };
            BroadcastTxRequest: {
                encode(message: _65.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BroadcastTxRequest;
                fromJSON(object: any): _65.BroadcastTxRequest;
                toJSON(message: _65.BroadcastTxRequest): unknown;
                fromPartial(object: {
                    txBytes?: Uint8Array;
                    mode?: _65.BroadcastMode;
                }): _65.BroadcastTxRequest;
            };
            BroadcastTxResponse: {
                encode(message: _65.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BroadcastTxResponse;
                fromJSON(object: any): _65.BroadcastTxResponse;
                toJSON(message: _65.BroadcastTxResponse): unknown;
                fromPartial(object: {
                    txResponse?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _65.BroadcastTxResponse;
            };
            SimulateRequest: {
                encode(message: _65.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SimulateRequest;
                fromJSON(object: any): _65.SimulateRequest;
                toJSON(message: _65.SimulateRequest): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _64.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txBytes?: Uint8Array;
                }): _65.SimulateRequest;
            };
            SimulateResponse: {
                encode(message: _65.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.SimulateResponse;
                fromJSON(object: any): _65.SimulateResponse;
                toJSON(message: _65.SimulateResponse): unknown;
                fromPartial(object: {
                    gasInfo?: {
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                    };
                    result?: {
                        data?: Uint8Array;
                        log?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _65.SimulateResponse;
            };
            GetTxRequest: {
                encode(message: _65.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetTxRequest;
                fromJSON(object: any): _65.GetTxRequest;
                toJSON(message: _65.GetTxRequest): unknown;
                fromPartial(object: {
                    hash?: string;
                }): _65.GetTxRequest;
            };
            GetTxResponse: {
                encode(message: _65.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetTxResponse;
                fromJSON(object: any): _65.GetTxResponse;
                toJSON(message: _65.GetTxResponse): unknown;
                fromPartial(object: {
                    tx?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _64.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    };
                    txResponse?: {
                        height?: string | number | import("long").default;
                        txhash?: string;
                        codespace?: string;
                        code?: number;
                        data?: string;
                        rawLog?: string;
                        logs?: {
                            msgIndex?: number;
                            log?: string;
                            events?: {
                                type?: string;
                                attributes?: {
                                    key?: string;
                                    value?: string;
                                }[];
                            }[];
                        }[];
                        info?: string;
                        gasWanted?: string | number | import("long").default;
                        gasUsed?: string | number | import("long").default;
                        tx?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        timestamp?: string;
                        events?: {
                            type?: string;
                            attributes?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                index?: boolean;
                            }[];
                        }[];
                    };
                }): _65.GetTxResponse;
            };
            GetBlockWithTxsRequest: {
                encode(message: _65.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetBlockWithTxsRequest;
                fromJSON(object: any): _65.GetBlockWithTxsRequest;
                toJSON(message: _65.GetBlockWithTxsRequest): unknown;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _65.GetBlockWithTxsRequest;
            };
            GetBlockWithTxsResponse: {
                encode(message: _65.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.GetBlockWithTxsResponse;
                fromJSON(object: any): _65.GetBlockWithTxsResponse;
                toJSON(message: _65.GetBlockWithTxsResponse): unknown;
                fromPartial(object: {
                    txs?: {
                        body?: {
                            messages?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            memo?: string;
                            timeoutHeight?: string | number | import("long").default;
                            extensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                            nonCriticalExtensionOptions?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            }[];
                        };
                        authInfo?: {
                            signerInfos?: {
                                publicKey?: {
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                                modeInfo?: {
                                    single?: {
                                        mode?: _64.SignMode;
                                    };
                                    multi?: {
                                        bitarray?: {
                                            extraBitsStored?: number;
                                            elems?: Uint8Array;
                                        };
                                        modeInfos?: any[];
                                    };
                                };
                                sequence?: string | number | import("long").default;
                            }[];
                            fee?: {
                                amount?: {
                                    denom?: string;
                                    amount?: string;
                                }[];
                                gasLimit?: string | number | import("long").default;
                                payer?: string;
                                granter?: string;
                            };
                        };
                        signatures?: Uint8Array[];
                    }[];
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    block?: {
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
                        data?: {
                            txs?: Uint8Array[];
                        };
                        evidence?: {
                            evidence?: {
                                duplicateVoteEvidence?: {
                                    voteA?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    voteB?: {
                                        type?: import("../tendermint/types/types").SignedMsgType;
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        timestamp?: Date;
                                        validatorAddress?: Uint8Array;
                                        validatorIndex?: number;
                                        signature?: Uint8Array;
                                    };
                                    totalVotingPower?: string | number | import("long").default;
                                    validatorPower?: string | number | import("long").default;
                                    timestamp?: Date;
                                };
                                lightClientAttackEvidence?: {
                                    conflictingBlock?: {
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
                                    };
                                    commonHeight?: string | number | import("long").default;
                                    byzantineValidators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").default;
                                        proposerPriority?: string | number | import("long").default;
                                    }[];
                                    totalVotingPower?: string | number | import("long").default;
                                    timestamp?: Date;
                                };
                            }[];
                        };
                        lastCommit?: {
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
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _65.GetBlockWithTxsResponse;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            QueryClientImpl: typeof _184.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _67.QueryCurrentPlanRequest): Promise<_67.QueryCurrentPlanResponse>;
                appliedPlan(request: _67.QueryAppliedPlanRequest): Promise<_67.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _67.QueryUpgradedConsensusStateRequest): Promise<_67.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _67.QueryModuleVersionsRequest): Promise<_67.QueryModuleVersionsResponse>;
            };
            LCDQueryClient: typeof _169.LCDQueryClient;
            Plan: {
                encode(message: _68.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Plan;
                fromJSON(object: any): _68.Plan;
                toJSON(message: _68.Plan): unknown;
                fromPartial(object: {
                    name?: string;
                    time?: Date;
                    height?: string | number | import("long").default;
                    info?: string;
                    upgradedClientState?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _68.Plan;
            };
            SoftwareUpgradeProposal: {
                encode(message: _68.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.SoftwareUpgradeProposal;
                fromJSON(object: any): _68.SoftwareUpgradeProposal;
                toJSON(message: _68.SoftwareUpgradeProposal): unknown;
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
                }): _68.SoftwareUpgradeProposal;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _68.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _68.CancelSoftwareUpgradeProposal;
                toJSON(message: _68.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                }): _68.CancelSoftwareUpgradeProposal;
            };
            ModuleVersion: {
                encode(message: _68.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.ModuleVersion;
                fromJSON(object: any): _68.ModuleVersion;
                toJSON(message: _68.ModuleVersion): unknown;
                fromPartial(object: {
                    name?: string;
                    version?: string | number | import("long").default;
                }): _68.ModuleVersion;
            };
            QueryCurrentPlanRequest: {
                encode(_: _67.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryCurrentPlanRequest;
                fromJSON(_: any): _67.QueryCurrentPlanRequest;
                toJSON(_: _67.QueryCurrentPlanRequest): unknown;
                fromPartial(_: {}): _67.QueryCurrentPlanRequest;
            };
            QueryCurrentPlanResponse: {
                encode(message: _67.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryCurrentPlanResponse;
                fromJSON(object: any): _67.QueryCurrentPlanResponse;
                toJSON(message: _67.QueryCurrentPlanResponse): unknown;
                fromPartial(object: {
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
                }): _67.QueryCurrentPlanResponse;
            };
            QueryAppliedPlanRequest: {
                encode(message: _67.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAppliedPlanRequest;
                fromJSON(object: any): _67.QueryAppliedPlanRequest;
                toJSON(message: _67.QueryAppliedPlanRequest): unknown;
                fromPartial(object: {
                    name?: string;
                }): _67.QueryAppliedPlanRequest;
            };
            QueryAppliedPlanResponse: {
                encode(message: _67.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryAppliedPlanResponse;
                fromJSON(object: any): _67.QueryAppliedPlanResponse;
                toJSON(message: _67.QueryAppliedPlanResponse): unknown;
                fromPartial(object: {
                    height?: string | number | import("long").default;
                }): _67.QueryAppliedPlanResponse;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _67.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _67.QueryUpgradedConsensusStateRequest;
                toJSON(message: _67.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: {
                    lastHeight?: string | number | import("long").default;
                }): _67.QueryUpgradedConsensusStateRequest;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _67.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _67.QueryUpgradedConsensusStateResponse;
                toJSON(message: _67.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: {
                    upgradedConsensusState?: Uint8Array;
                }): _67.QueryUpgradedConsensusStateResponse;
            };
            QueryModuleVersionsRequest: {
                encode(message: _67.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryModuleVersionsRequest;
                fromJSON(object: any): _67.QueryModuleVersionsRequest;
                toJSON(message: _67.QueryModuleVersionsRequest): unknown;
                fromPartial(object: {
                    moduleName?: string;
                }): _67.QueryModuleVersionsRequest;
            };
            QueryModuleVersionsResponse: {
                encode(message: _67.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.QueryModuleVersionsResponse;
                fromJSON(object: any): _67.QueryModuleVersionsResponse;
                toJSON(message: _67.QueryModuleVersionsResponse): unknown;
                fromPartial(object: {
                    moduleVersions?: {
                        name?: string;
                        version?: string | number | import("long").default;
                    }[];
                }): _67.QueryModuleVersionsResponse;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _194.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _69.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _69.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _69.MsgCreateVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _69.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _69.MsgCreateVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _69.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _69.MsgCreateVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: _69.MsgCreateVestingAccount) => {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    };
                    fromAmino: ({ from_address, to_address, amount, end_time, delayed }: {
                        from_address: string;
                        to_address: string;
                        amount: {
                            denom: string;
                            amount: string;
                        }[];
                        end_time: string;
                        delayed: boolean;
                    }) => _69.MsgCreateVestingAccount;
                };
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _71.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _71.MsgCreatePeriodicVestingAccount;
                toJSON(message: _71.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    startTime?: string | number | import("long").default;
                    vestingPeriods?: {
                        length?: string | number | import("long").default;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _71.MsgCreatePeriodicVestingAccount;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _71.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _71.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _71.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: {}): _71.MsgCreatePeriodicVestingAccountResponse;
            };
            BaseVestingAccount: {
                encode(message: _70.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.BaseVestingAccount;
                fromJSON(object: any): _70.BaseVestingAccount;
                toJSON(message: _70.BaseVestingAccount): unknown;
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
                    originalVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedFree?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    delegatedVesting?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: string | number | import("long").default;
                }): _70.BaseVestingAccount;
            };
            ContinuousVestingAccount: {
                encode(message: _70.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.ContinuousVestingAccount;
                fromJSON(object: any): _70.ContinuousVestingAccount;
                toJSON(message: _70.ContinuousVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").default;
                    };
                    startTime?: string | number | import("long").default;
                }): _70.ContinuousVestingAccount;
            };
            DelayedVestingAccount: {
                encode(message: _70.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.DelayedVestingAccount;
                fromJSON(object: any): _70.DelayedVestingAccount;
                toJSON(message: _70.DelayedVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").default;
                    };
                }): _70.DelayedVestingAccount;
            };
            Period: {
                encode(message: _70.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Period;
                fromJSON(object: any): _70.Period;
                toJSON(message: _70.Period): unknown;
                fromPartial(object: {
                    length?: string | number | import("long").default;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _70.Period;
            };
            PeriodicVestingAccount: {
                encode(message: _70.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.PeriodicVestingAccount;
                fromJSON(object: any): _70.PeriodicVestingAccount;
                toJSON(message: _70.PeriodicVestingAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").default;
                    };
                    startTime?: string | number | import("long").default;
                    vestingPeriods?: {
                        length?: string | number | import("long").default;
                        amount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _70.PeriodicVestingAccount;
            };
            PermanentLockedAccount: {
                encode(message: _70.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.PermanentLockedAccount;
                fromJSON(object: any): _70.PermanentLockedAccount;
                toJSON(message: _70.PermanentLockedAccount): unknown;
                fromPartial(object: {
                    baseVestingAccount?: {
                        baseAccount?: {
                            address?: string;
                            pubKey?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            accountNumber?: string | number | import("long").default;
                            sequence?: string | number | import("long").default;
                        };
                        originalVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedFree?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        delegatedVesting?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        endTime?: string | number | import("long").default;
                    };
                }): _70.PermanentLockedAccount;
            };
            MsgCreateVestingAccount: {
                encode(message: _69.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateVestingAccount;
                fromJSON(object: any): _69.MsgCreateVestingAccount;
                toJSON(message: _69.MsgCreateVestingAccount): unknown;
                fromPartial(object: {
                    fromAddress?: string;
                    toAddress?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    endTime?: string | number | import("long").default;
                    delayed?: boolean;
                }): _69.MsgCreateVestingAccount;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _69.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _69.MsgCreateVestingAccountResponse;
                toJSON(_: _69.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: {}): _69.MsgCreateVestingAccountResponse;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _185.MsgClientImpl;
                };
                bank: {
                    v1beta1: _186.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _187.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _188.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _189.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _190.MsgClientImpl;
                };
                gov: {
                    v1beta1: _191.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _192.MsgClientImpl;
                };
                staking: {
                    v1beta1: _193.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _194.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: {
                        accounts(request?: _2.QueryAccountsRequest): Promise<_2.QueryAccountsResponse>;
                        account(request: _2.QueryAccountRequest): Promise<_2.QueryAccountResponse>;
                        params(request?: _2.QueryParamsRequest): Promise<_2.QueryParamsResponse>;
                        moduleAccountByName(request: _2.QueryModuleAccountByNameRequest): Promise<_2.QueryModuleAccountByNameResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _6.QueryGrantsRequest): Promise<_6.QueryGrantsResponse>;
                        granterGrants(request: _6.QueryGranterGrantsRequest): Promise<_6.QueryGranterGrantsResponse>;
                        granteeGrants(request: _6.QueryGranteeGrantsRequest): Promise<_6.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _11.QueryBalanceRequest): Promise<_11.QueryBalanceResponse>;
                        allBalances(request: _11.QueryAllBalancesRequest): Promise<_11.QueryAllBalancesResponse>;
                        spendableBalances(request: _11.QuerySpendableBalancesRequest): Promise<_11.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _11.QueryTotalSupplyRequest): Promise<_11.QueryTotalSupplyResponse>;
                        supplyOf(request: _11.QuerySupplyOfRequest): Promise<_11.QuerySupplyOfResponse>;
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        denomMetadata(request: _11.QueryDenomMetadataRequest): Promise<_11.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _11.QueryDenomsMetadataRequest): Promise<_11.QueryDenomsMetadataResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _15.ConfigRequest): Promise<_15.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _22.GetNodeInfoRequest): Promise<_22.GetNodeInfoResponse>;
                            getSyncing(request?: _22.GetSyncingRequest): Promise<_22.GetSyncingResponse>;
                            getLatestBlock(request?: _22.GetLatestBlockRequest): Promise<_22.GetLatestBlockResponse>;
                            getBlockByHeight(request: _22.GetBlockByHeightRequest): Promise<_22.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _22.GetLatestValidatorSetRequest): Promise<_22.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _22.GetValidatorSetByHeightRequest): Promise<_22.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _34.QueryParamsRequest): Promise<_34.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _34.QueryValidatorOutstandingRewardsRequest): Promise<_34.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _34.QueryValidatorCommissionRequest): Promise<_34.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _34.QueryValidatorSlashesRequest): Promise<_34.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _34.QueryDelegationRewardsRequest): Promise<_34.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _34.QueryDelegationTotalRewardsRequest): Promise<_34.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _34.QueryDelegatorValidatorsRequest): Promise<_34.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _34.QueryDelegatorWithdrawAddressRequest): Promise<_34.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _34.QueryCommunityPoolRequest): Promise<_34.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _38.QueryEvidenceRequest): Promise<_38.QueryEvidenceResponse>;
                        allEvidence(request?: _38.QueryAllEvidenceRequest): Promise<_38.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _42.QueryAllowanceRequest): Promise<_42.QueryAllowanceResponse>;
                        allowances(request: _42.QueryAllowancesRequest): Promise<_42.QueryAllowancesResponse>;
                        allowancesByGranter(request: _42.QueryAllowancesByGranterRequest): Promise<_42.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1beta1: {
                        proposal(request: _48.QueryProposalRequest): Promise<_48.QueryProposalResponse>;
                        proposals(request: _48.QueryProposalsRequest): Promise<_48.QueryProposalsResponse>;
                        vote(request: _48.QueryVoteRequest): Promise<_48.QueryVoteResponse>;
                        votes(request: _48.QueryVotesRequest): Promise<_48.QueryVotesResponse>;
                        params(request: _48.QueryParamsRequest): Promise<_48.QueryParamsResponse>;
                        deposit(request: _48.QueryDepositRequest): Promise<_48.QueryDepositResponse>;
                        deposits(request: _48.QueryDepositsRequest): Promise<_48.QueryDepositsResponse>;
                        tallyResult(request: _48.QueryTallyResultRequest): Promise<_48.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _52.QueryParamsRequest): Promise<_52.QueryParamsResponse>;
                        inflation(request?: _52.QueryInflationRequest): Promise<_52.QueryInflationResponse>;
                        annualProvisions(request?: _52.QueryAnnualProvisionsRequest): Promise<_52.QueryAnnualProvisionsResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _54.QueryParamsRequest): Promise<_54.QueryParamsResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _56.QueryParamsRequest): Promise<_56.QueryParamsResponse>;
                        signingInfo(request: _56.QuerySigningInfoRequest): Promise<_56.QuerySigningInfoResponse>;
                        signingInfos(request?: _56.QuerySigningInfosRequest): Promise<_56.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _61.QueryValidatorsRequest): Promise<_61.QueryValidatorsResponse>;
                        validator(request: _61.QueryValidatorRequest): Promise<_61.QueryValidatorResponse>;
                        validatorDelegations(request: _61.QueryValidatorDelegationsRequest): Promise<_61.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _61.QueryValidatorUnbondingDelegationsRequest): Promise<_61.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _61.QueryDelegationRequest): Promise<_61.QueryDelegationResponse>;
                        unbondingDelegation(request: _61.QueryUnbondingDelegationRequest): Promise<_61.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _61.QueryDelegatorDelegationsRequest): Promise<_61.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _61.QueryDelegatorUnbondingDelegationsRequest): Promise<_61.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _61.QueryRedelegationsRequest): Promise<_61.QueryRedelegationsResponse>;
                        delegatorValidators(request: _61.QueryDelegatorValidatorsRequest): Promise<_61.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _61.QueryDelegatorValidatorRequest): Promise<_61.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _61.QueryHistoricalInfoRequest): Promise<_61.QueryHistoricalInfoResponse>;
                        pool(request?: _61.QueryPoolRequest): Promise<_61.QueryPoolResponse>;
                        params(request?: _61.QueryParamsRequest): Promise<_61.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _65.SimulateRequest): Promise<_65.SimulateResponse>;
                        getTx(request: _65.GetTxRequest): Promise<_65.GetTxResponse>;
                        broadcastTx(request: _65.BroadcastTxRequest): Promise<_65.BroadcastTxResponse>;
                        getTxsEvent(request: _65.GetTxsEventRequest): Promise<_65.GetTxsEventResponse>;
                        getBlockWithTxs(request: _65.GetBlockWithTxsRequest): Promise<_65.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _67.QueryCurrentPlanRequest): Promise<_67.QueryCurrentPlanResponse>;
                        appliedPlan(request: _67.QueryAppliedPlanRequest): Promise<_67.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _67.QueryUpgradedConsensusStateRequest): Promise<_67.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _67.QueryModuleVersionsRequest): Promise<_67.QueryModuleVersionsResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _155.LCDQueryClient;
                };
                authz: {
                    v1beta1: _156.LCDQueryClient;
                };
                bank: {
                    v1beta1: _157.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _158.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _159.LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: _160.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _161.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _162.LCDQueryClient;
                };
                gov: {
                    v1beta1: _163.LCDQueryClient;
                };
                mint: {
                    v1beta1: _164.LCDQueryClient;
                };
                params: {
                    v1beta1: _165.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _166.LCDQueryClient;
                };
                staking: {
                    v1beta1: _167.LCDQueryClient;
                };
                tx: {
                    v1beta1: _168.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _169.LCDQueryClient;
                };
            };
        }>;
    };
}
