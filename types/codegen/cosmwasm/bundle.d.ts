import * as _125 from "./wasm/v1/genesis";
import * as _126 from "./wasm/v1/ibc";
import * as _127 from "./wasm/v1/proposal";
import * as _128 from "./wasm/v1/query";
import * as _129 from "./wasm/v1/tx";
import * as _130 from "./wasm/v1/types";
import * as _221 from "./wasm/v1/query.lcd";
import * as _222 from "./wasm/v1/query.rpc.Query";
import * as _223 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _223.MsgClientImpl;
            QueryClientImpl: typeof _222.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _128.QueryContractInfoRequest): Promise<_128.QueryContractInfoResponse>;
                contractHistory(request: _128.QueryContractHistoryRequest): Promise<_128.QueryContractHistoryResponse>;
                contractsByCode(request: _128.QueryContractsByCodeRequest): Promise<_128.QueryContractsByCodeResponse>;
                allContractState(request: _128.QueryAllContractStateRequest): Promise<_128.QueryAllContractStateResponse>;
                rawContractState(request: _128.QueryRawContractStateRequest): Promise<_128.QueryRawContractStateResponse>;
                smartContractState(request: _128.QuerySmartContractStateRequest): Promise<_128.QuerySmartContractStateResponse>;
                code(request: _128.QueryCodeRequest): Promise<_128.QueryCodeResponse>;
                codes(request?: _128.QueryCodesRequest): Promise<_128.QueryCodesResponse>;
                pinnedCodes(request?: _128.QueryPinnedCodesRequest): Promise<_128.QueryPinnedCodesResponse>;
                params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _221.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _129.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _129.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _129.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _129.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _129.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _129.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _129.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _129.MsgStoreCode): {
                        typeUrl: string;
                        value: _129.MsgStoreCode;
                    };
                    instantiateContract(value: _129.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _129.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _129.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _129.MsgInstantiateContract2;
                    };
                    executeContract(value: _129.MsgExecuteContract): {
                        typeUrl: string;
                        value: _129.MsgExecuteContract;
                    };
                    migrateContract(value: _129.MsgMigrateContract): {
                        typeUrl: string;
                        value: _129.MsgMigrateContract;
                    };
                    updateAdmin(value: _129.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _129.MsgClearAdmin): {
                        typeUrl: string;
                        value: _129.MsgClearAdmin;
                    };
                };
                toJSON: {
                    storeCode(value: _129.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _129.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _129.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _129.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _129.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _129.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _129.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _129.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _129.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _129.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _129.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _129.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _129.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _129.MsgClearAdmin;
                    };
                };
                fromPartial: {
                    storeCode(value: _129.MsgStoreCode): {
                        typeUrl: string;
                        value: _129.MsgStoreCode;
                    };
                    instantiateContract(value: _129.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _129.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _129.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _129.MsgInstantiateContract2;
                    };
                    executeContract(value: _129.MsgExecuteContract): {
                        typeUrl: string;
                        value: _129.MsgExecuteContract;
                    };
                    migrateContract(value: _129.MsgMigrateContract): {
                        typeUrl: string;
                        value: _129.MsgMigrateContract;
                    };
                    updateAdmin(value: _129.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _129.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _129.MsgClearAdmin): {
                        typeUrl: string;
                        value: _129.MsgClearAdmin;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: ({ sender, wasmByteCode, instantiatePermission }: _129.MsgStoreCode) => {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    };
                    fromAmino: ({ sender, wasm_byte_code, instantiate_permission }: {
                        sender: string;
                        wasm_byte_code: string;
                        instantiate_permission: {
                            permission: number;
                            address: string;
                            addresses: string[];
                        };
                    }) => _129.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds }: _129.MsgInstantiateContract) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _129.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: ({ sender, admin, codeId, label, msg, funds, salt, fixMsg }: _129.MsgInstantiateContract2) => {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    };
                    fromAmino: ({ sender, admin, code_id, label, msg, funds, salt, fix_msg }: {
                        sender: string;
                        admin: string;
                        code_id: string;
                        label: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                        salt: Uint8Array;
                        fix_msg: boolean;
                    }) => _129.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, msg, funds }: _129.MsgExecuteContract) => {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    };
                    fromAmino: ({ sender, contract, msg, funds }: {
                        sender: string;
                        contract: string;
                        msg: Uint8Array;
                        funds: {
                            denom: string;
                            amount: string;
                        }[];
                    }) => _129.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: ({ sender, contract, codeId, msg }: _129.MsgMigrateContract) => {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    };
                    fromAmino: ({ sender, contract, code_id, msg }: {
                        sender: string;
                        contract: string;
                        code_id: string;
                        msg: Uint8Array;
                    }) => _129.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, newAdmin, contract }: _129.MsgUpdateAdmin) => {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, new_admin, contract }: {
                        sender: string;
                        new_admin: string;
                        contract: string;
                    }) => _129.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: ({ sender, contract }: _129.MsgClearAdmin) => {
                        sender: string;
                        contract: string;
                    };
                    fromAmino: ({ sender, contract }: {
                        sender: string;
                        contract: string;
                    }) => _129.MsgClearAdmin;
                };
            };
            accessTypeFromJSON(object: any): _130.AccessType;
            accessTypeToJSON(object: _130.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _130.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _130.ContractCodeHistoryOperationType): string;
            AccessType: typeof _130.AccessType;
            AccessTypeSDKType: typeof _130.AccessType;
            ContractCodeHistoryOperationType: typeof _130.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _130.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                encode(message: _130.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.AccessTypeParam;
                fromJSON(object: any): _130.AccessTypeParam;
                toJSON(message: _130.AccessTypeParam): unknown;
                fromPartial(object: {
                    value?: _130.AccessType;
                }): _130.AccessTypeParam;
            };
            AccessConfig: {
                encode(message: _130.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.AccessConfig;
                fromJSON(object: any): _130.AccessConfig;
                toJSON(message: _130.AccessConfig): unknown;
                fromPartial(object: {
                    permission?: _130.AccessType;
                    address?: string;
                    addresses?: string[];
                }): _130.AccessConfig;
            };
            Params: {
                encode(message: _130.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Params;
                fromJSON(object: any): _130.Params;
                toJSON(message: _130.Params): unknown;
                fromPartial(object: {
                    codeUploadAccess?: {
                        permission?: _130.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                    instantiateDefaultPermission?: _130.AccessType;
                }): _130.Params;
            };
            CodeInfo: {
                encode(message: _130.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.CodeInfo;
                fromJSON(object: any): _130.CodeInfo;
                toJSON(message: _130.CodeInfo): unknown;
                fromPartial(object: {
                    codeHash?: Uint8Array;
                    creator?: string;
                    instantiateConfig?: {
                        permission?: _130.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _130.CodeInfo;
            };
            ContractInfo: {
                encode(message: _130.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ContractInfo;
                fromJSON(object: any): _130.ContractInfo;
                toJSON(message: _130.ContractInfo): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long").default;
                    creator?: string;
                    admin?: string;
                    label?: string;
                    created?: {
                        blockHeight?: string | number | import("long").default;
                        txIndex?: string | number | import("long").default;
                    };
                    ibcPortId?: string;
                    extension?: {
                        typeUrl?: string;
                        value?: Uint8Array;
                    };
                }): _130.ContractInfo;
            };
            ContractCodeHistoryEntry: {
                encode(message: _130.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.ContractCodeHistoryEntry;
                fromJSON(object: any): _130.ContractCodeHistoryEntry;
                toJSON(message: _130.ContractCodeHistoryEntry): unknown;
                fromPartial(object: {
                    operation?: _130.ContractCodeHistoryOperationType;
                    codeId?: string | number | import("long").default;
                    updated?: {
                        blockHeight?: string | number | import("long").default;
                        txIndex?: string | number | import("long").default;
                    };
                    msg?: Uint8Array;
                }): _130.ContractCodeHistoryEntry;
            };
            AbsoluteTxPosition: {
                encode(message: _130.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.AbsoluteTxPosition;
                fromJSON(object: any): _130.AbsoluteTxPosition;
                toJSON(message: _130.AbsoluteTxPosition): unknown;
                fromPartial(object: {
                    blockHeight?: string | number | import("long").default;
                    txIndex?: string | number | import("long").default;
                }): _130.AbsoluteTxPosition;
            };
            Model: {
                encode(message: _130.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Model;
                fromJSON(object: any): _130.Model;
                toJSON(message: _130.Model): unknown;
                fromPartial(object: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                }): _130.Model;
            };
            MsgStoreCode: {
                encode(message: _129.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgStoreCode;
                fromJSON(object: any): _129.MsgStoreCode;
                toJSON(message: _129.MsgStoreCode): unknown;
                fromPartial(object: {
                    sender?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _130.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _129.MsgStoreCode;
            };
            MsgStoreCodeResponse: {
                encode(message: _129.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgStoreCodeResponse;
                fromJSON(object: any): _129.MsgStoreCodeResponse;
                toJSON(message: _129.MsgStoreCodeResponse): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long").default;
                    checksum?: Uint8Array;
                }): _129.MsgStoreCodeResponse;
            };
            MsgInstantiateContract: {
                encode(message: _129.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgInstantiateContract;
                fromJSON(object: any): _129.MsgInstantiateContract;
                toJSON(message: _129.MsgInstantiateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: string | number | import("long").default;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _129.MsgInstantiateContract;
            };
            MsgInstantiateContract2: {
                encode(message: _129.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgInstantiateContract2;
                fromJSON(object: any): _129.MsgInstantiateContract2;
                toJSON(message: _129.MsgInstantiateContract2): unknown;
                fromPartial(object: {
                    sender?: string;
                    admin?: string;
                    codeId?: string | number | import("long").default;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    salt?: Uint8Array;
                    fixMsg?: boolean;
                }): _129.MsgInstantiateContract2;
            };
            MsgInstantiateContractResponse: {
                encode(message: _129.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgInstantiateContractResponse;
                fromJSON(object: any): _129.MsgInstantiateContractResponse;
                toJSON(message: _129.MsgInstantiateContractResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _129.MsgInstantiateContractResponse;
            };
            MsgInstantiateContract2Response: {
                encode(message: _129.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgInstantiateContract2Response;
                fromJSON(object: any): _129.MsgInstantiateContract2Response;
                toJSON(message: _129.MsgInstantiateContract2Response): unknown;
                fromPartial(object: {
                    address?: string;
                    data?: Uint8Array;
                }): _129.MsgInstantiateContract2Response;
            };
            MsgExecuteContract: {
                encode(message: _129.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgExecuteContract;
                fromJSON(object: any): _129.MsgExecuteContract;
                toJSON(message: _129.MsgExecuteContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _129.MsgExecuteContract;
            };
            MsgExecuteContractResponse: {
                encode(message: _129.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgExecuteContractResponse;
                fromJSON(object: any): _129.MsgExecuteContractResponse;
                toJSON(message: _129.MsgExecuteContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _129.MsgExecuteContractResponse;
            };
            MsgMigrateContract: {
                encode(message: _129.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgMigrateContract;
                fromJSON(object: any): _129.MsgMigrateContract;
                toJSON(message: _129.MsgMigrateContract): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                    codeId?: string | number | import("long").default;
                    msg?: Uint8Array;
                }): _129.MsgMigrateContract;
            };
            MsgMigrateContractResponse: {
                encode(message: _129.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgMigrateContractResponse;
                fromJSON(object: any): _129.MsgMigrateContractResponse;
                toJSON(message: _129.MsgMigrateContractResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _129.MsgMigrateContractResponse;
            };
            MsgUpdateAdmin: {
                encode(message: _129.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateAdmin;
                fromJSON(object: any): _129.MsgUpdateAdmin;
                toJSON(message: _129.MsgUpdateAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _129.MsgUpdateAdmin;
            };
            MsgUpdateAdminResponse: {
                encode(_: _129.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgUpdateAdminResponse;
                fromJSON(_: any): _129.MsgUpdateAdminResponse;
                toJSON(_: _129.MsgUpdateAdminResponse): unknown;
                fromPartial(_: {}): _129.MsgUpdateAdminResponse;
            };
            MsgClearAdmin: {
                encode(message: _129.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgClearAdmin;
                fromJSON(object: any): _129.MsgClearAdmin;
                toJSON(message: _129.MsgClearAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    contract?: string;
                }): _129.MsgClearAdmin;
            };
            MsgClearAdminResponse: {
                encode(_: _129.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.MsgClearAdminResponse;
                fromJSON(_: any): _129.MsgClearAdminResponse;
                toJSON(_: _129.MsgClearAdminResponse): unknown;
                fromPartial(_: {}): _129.MsgClearAdminResponse;
            };
            QueryContractInfoRequest: {
                encode(message: _128.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryContractInfoRequest;
                fromJSON(object: any): _128.QueryContractInfoRequest;
                toJSON(message: _128.QueryContractInfoRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _128.QueryContractInfoRequest;
            };
            QueryContractInfoResponse: {
                encode(message: _128.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryContractInfoResponse;
                fromJSON(object: any): _128.QueryContractInfoResponse;
                toJSON(message: _128.QueryContractInfoResponse): unknown;
                fromPartial(object: {
                    address?: string;
                    contractInfo?: {
                        codeId?: string | number | import("long").default;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string | number | import("long").default;
                            txIndex?: string | number | import("long").default;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                }): _128.QueryContractInfoResponse;
            };
            QueryContractHistoryRequest: {
                encode(message: _128.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryContractHistoryRequest;
                fromJSON(object: any): _128.QueryContractHistoryRequest;
                toJSON(message: _128.QueryContractHistoryRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _128.QueryContractHistoryRequest;
            };
            QueryContractHistoryResponse: {
                encode(message: _128.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryContractHistoryResponse;
                fromJSON(object: any): _128.QueryContractHistoryResponse;
                toJSON(message: _128.QueryContractHistoryResponse): unknown;
                fromPartial(object: {
                    entries?: {
                        operation?: _130.ContractCodeHistoryOperationType;
                        codeId?: string | number | import("long").default;
                        updated?: {
                            blockHeight?: string | number | import("long").default;
                            txIndex?: string | number | import("long").default;
                        };
                        msg?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _128.QueryContractHistoryResponse;
            };
            QueryContractsByCodeRequest: {
                encode(message: _128.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryContractsByCodeRequest;
                fromJSON(object: any): _128.QueryContractsByCodeRequest;
                toJSON(message: _128.QueryContractsByCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long").default;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _128.QueryContractsByCodeRequest;
            };
            QueryContractsByCodeResponse: {
                encode(message: _128.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryContractsByCodeResponse;
                fromJSON(object: any): _128.QueryContractsByCodeResponse;
                toJSON(message: _128.QueryContractsByCodeResponse): unknown;
                fromPartial(object: {
                    contracts?: string[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _128.QueryContractsByCodeResponse;
            };
            QueryAllContractStateRequest: {
                encode(message: _128.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAllContractStateRequest;
                fromJSON(object: any): _128.QueryAllContractStateRequest;
                toJSON(message: _128.QueryAllContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _128.QueryAllContractStateRequest;
            };
            QueryAllContractStateResponse: {
                encode(message: _128.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryAllContractStateResponse;
                fromJSON(object: any): _128.QueryAllContractStateResponse;
                toJSON(message: _128.QueryAllContractStateResponse): unknown;
                fromPartial(object: {
                    models?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _128.QueryAllContractStateResponse;
            };
            QueryRawContractStateRequest: {
                encode(message: _128.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryRawContractStateRequest;
                fromJSON(object: any): _128.QueryRawContractStateRequest;
                toJSON(message: _128.QueryRawContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _128.QueryRawContractStateRequest;
            };
            QueryRawContractStateResponse: {
                encode(message: _128.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryRawContractStateResponse;
                fromJSON(object: any): _128.QueryRawContractStateResponse;
                toJSON(message: _128.QueryRawContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _128.QueryRawContractStateResponse;
            };
            QuerySmartContractStateRequest: {
                encode(message: _128.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySmartContractStateRequest;
                fromJSON(object: any): _128.QuerySmartContractStateRequest;
                toJSON(message: _128.QuerySmartContractStateRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    queryData?: Uint8Array;
                }): _128.QuerySmartContractStateRequest;
            };
            QuerySmartContractStateResponse: {
                encode(message: _128.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QuerySmartContractStateResponse;
                fromJSON(object: any): _128.QuerySmartContractStateResponse;
                toJSON(message: _128.QuerySmartContractStateResponse): unknown;
                fromPartial(object: {
                    data?: Uint8Array;
                }): _128.QuerySmartContractStateResponse;
            };
            QueryCodeRequest: {
                encode(message: _128.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCodeRequest;
                fromJSON(object: any): _128.QueryCodeRequest;
                toJSON(message: _128.QueryCodeRequest): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long").default;
                }): _128.QueryCodeRequest;
            };
            CodeInfoResponse: {
                encode(message: _128.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.CodeInfoResponse;
                fromJSON(object: any): _128.CodeInfoResponse;
                toJSON(message: _128.CodeInfoResponse): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long").default;
                    creator?: string;
                    dataHash?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _130.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _128.CodeInfoResponse;
            };
            QueryCodeResponse: {
                encode(message: _128.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCodeResponse;
                fromJSON(object: any): _128.QueryCodeResponse;
                toJSON(message: _128.QueryCodeResponse): unknown;
                fromPartial(object: {
                    codeInfo?: {
                        codeId?: string | number | import("long").default;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _130.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    };
                    data?: Uint8Array;
                }): _128.QueryCodeResponse;
            };
            QueryCodesRequest: {
                encode(message: _128.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCodesRequest;
                fromJSON(object: any): _128.QueryCodesRequest;
                toJSON(message: _128.QueryCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _128.QueryCodesRequest;
            };
            QueryCodesResponse: {
                encode(message: _128.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryCodesResponse;
                fromJSON(object: any): _128.QueryCodesResponse;
                toJSON(message: _128.QueryCodesResponse): unknown;
                fromPartial(object: {
                    codeInfos?: {
                        codeId?: string | number | import("long").default;
                        creator?: string;
                        dataHash?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _130.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    }[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _128.QueryCodesResponse;
            };
            QueryPinnedCodesRequest: {
                encode(message: _128.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPinnedCodesRequest;
                fromJSON(object: any): _128.QueryPinnedCodesRequest;
                toJSON(message: _128.QueryPinnedCodesRequest): unknown;
                fromPartial(object: {
                    pagination?: {
                        key?: Uint8Array;
                        offset?: string | number | import("long").default;
                        limit?: string | number | import("long").default;
                        countTotal?: boolean;
                        reverse?: boolean;
                    };
                }): _128.QueryPinnedCodesRequest;
            };
            QueryPinnedCodesResponse: {
                encode(message: _128.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryPinnedCodesResponse;
                fromJSON(object: any): _128.QueryPinnedCodesResponse;
                toJSON(message: _128.QueryPinnedCodesResponse): unknown;
                fromPartial(object: {
                    codeIds?: (string | number | import("long").default)[];
                    pagination?: {
                        nextKey?: Uint8Array;
                        total?: string | number | import("long").default;
                    };
                }): _128.QueryPinnedCodesResponse;
            };
            QueryParamsRequest: {
                encode(_: _128.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsRequest;
                fromJSON(_: any): _128.QueryParamsRequest;
                toJSON(_: _128.QueryParamsRequest): unknown;
                fromPartial(_: {}): _128.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: _128.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.QueryParamsResponse;
                fromJSON(object: any): _128.QueryParamsResponse;
                toJSON(message: _128.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _130.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _130.AccessType;
                    };
                }): _128.QueryParamsResponse;
            };
            StoreCodeProposal: {
                encode(message: _127.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.StoreCodeProposal;
                fromJSON(object: any): _127.StoreCodeProposal;
                toJSON(message: _127.StoreCodeProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    wasmByteCode?: Uint8Array;
                    instantiatePermission?: {
                        permission?: _130.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                    unpinCode?: boolean;
                }): _127.StoreCodeProposal;
            };
            InstantiateContractProposal: {
                encode(message: _127.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.InstantiateContractProposal;
                fromJSON(object: any): _127.InstantiateContractProposal;
                toJSON(message: _127.InstantiateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    admin?: string;
                    codeId?: string | number | import("long").default;
                    label?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _127.InstantiateContractProposal;
            };
            MigrateContractProposal: {
                encode(message: _127.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MigrateContractProposal;
                fromJSON(object: any): _127.MigrateContractProposal;
                toJSON(message: _127.MigrateContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    codeId?: string | number | import("long").default;
                    msg?: Uint8Array;
                }): _127.MigrateContractProposal;
            };
            SudoContractProposal: {
                encode(message: _127.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.SudoContractProposal;
                fromJSON(object: any): _127.SudoContractProposal;
                toJSON(message: _127.SudoContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                    msg?: Uint8Array;
                }): _127.SudoContractProposal;
            };
            ExecuteContractProposal: {
                encode(message: _127.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ExecuteContractProposal;
                fromJSON(object: any): _127.ExecuteContractProposal;
                toJSON(message: _127.ExecuteContractProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    runAs?: string;
                    contract?: string;
                    msg?: Uint8Array;
                    funds?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _127.ExecuteContractProposal;
            };
            UpdateAdminProposal: {
                encode(message: _127.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.UpdateAdminProposal;
                fromJSON(object: any): _127.UpdateAdminProposal;
                toJSON(message: _127.UpdateAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    newAdmin?: string;
                    contract?: string;
                }): _127.UpdateAdminProposal;
            };
            ClearAdminProposal: {
                encode(message: _127.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.ClearAdminProposal;
                fromJSON(object: any): _127.ClearAdminProposal;
                toJSON(message: _127.ClearAdminProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    contract?: string;
                }): _127.ClearAdminProposal;
            };
            PinCodesProposal: {
                encode(message: _127.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.PinCodesProposal;
                fromJSON(object: any): _127.PinCodesProposal;
                toJSON(message: _127.PinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long").default)[];
                }): _127.PinCodesProposal;
            };
            UnpinCodesProposal: {
                encode(message: _127.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.UnpinCodesProposal;
                fromJSON(object: any): _127.UnpinCodesProposal;
                toJSON(message: _127.UnpinCodesProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    codeIds?: (string | number | import("long").default)[];
                }): _127.UnpinCodesProposal;
            };
            AccessConfigUpdate: {
                encode(message: _127.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.AccessConfigUpdate;
                fromJSON(object: any): _127.AccessConfigUpdate;
                toJSON(message: _127.AccessConfigUpdate): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long").default;
                    instantiatePermission?: {
                        permission?: _130.AccessType;
                        address?: string;
                        addresses?: string[];
                    };
                }): _127.AccessConfigUpdate;
            };
            UpdateInstantiateConfigProposal: {
                encode(message: _127.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _127.UpdateInstantiateConfigProposal;
                toJSON(message: _127.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: {
                    title?: string;
                    description?: string;
                    accessConfigUpdates?: {
                        codeId?: string | number | import("long").default;
                        instantiatePermission?: {
                            permission?: _130.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    }[];
                }): _127.UpdateInstantiateConfigProposal;
            };
            MsgIBCSend: {
                encode(message: _126.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgIBCSend;
                fromJSON(object: any): _126.MsgIBCSend;
                toJSON(message: _126.MsgIBCSend): unknown;
                fromPartial(object: {
                    channel?: string;
                    timeoutHeight?: string | number | import("long").default;
                    timeoutTimestamp?: string | number | import("long").default;
                    data?: Uint8Array;
                }): _126.MsgIBCSend;
            };
            MsgIBCCloseChannel: {
                encode(message: _126.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.MsgIBCCloseChannel;
                fromJSON(object: any): _126.MsgIBCCloseChannel;
                toJSON(message: _126.MsgIBCCloseChannel): unknown;
                fromPartial(object: {
                    channel?: string;
                }): _126.MsgIBCCloseChannel;
            };
            GenesisState: {
                encode(message: _125.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState;
                fromJSON(object: any): _125.GenesisState;
                toJSON(message: _125.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        codeUploadAccess?: {
                            permission?: _130.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                        instantiateDefaultPermission?: _130.AccessType;
                    };
                    codes?: {
                        codeId?: string | number | import("long").default;
                        codeInfo?: {
                            codeHash?: Uint8Array;
                            creator?: string;
                            instantiateConfig?: {
                                permission?: _130.AccessType;
                                address?: string;
                                addresses?: string[];
                            };
                        };
                        codeBytes?: Uint8Array;
                        pinned?: boolean;
                    }[];
                    contracts?: {
                        contractAddress?: string;
                        contractInfo?: {
                            codeId?: string | number | import("long").default;
                            creator?: string;
                            admin?: string;
                            label?: string;
                            created?: {
                                blockHeight?: string | number | import("long").default;
                                txIndex?: string | number | import("long").default;
                            };
                            ibcPortId?: string;
                            extension?: {
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        contractState?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }[];
                    sequences?: {
                        idKey?: Uint8Array;
                        value?: string | number | import("long").default;
                    }[];
                    genMsgs?: {
                        storeCode?: {
                            sender?: string;
                            wasmByteCode?: Uint8Array;
                            instantiatePermission?: {
                                permission?: _130.AccessType;
                                address?: string;
                                addresses?: string[];
                            };
                        };
                        instantiateContract?: {
                            sender?: string;
                            admin?: string;
                            codeId?: string | number | import("long").default;
                            label?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                        executeContract?: {
                            sender?: string;
                            contract?: string;
                            msg?: Uint8Array;
                            funds?: {
                                denom?: string;
                                amount?: string;
                            }[];
                        };
                    }[];
                }): _125.GenesisState;
            };
            GenesisState_GenMsgs: {
                encode(message: _125.GenesisState_GenMsgs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.GenesisState_GenMsgs;
                fromJSON(object: any): _125.GenesisState_GenMsgs;
                toJSON(message: _125.GenesisState_GenMsgs): unknown;
                fromPartial(object: {
                    storeCode?: {
                        sender?: string;
                        wasmByteCode?: Uint8Array;
                        instantiatePermission?: {
                            permission?: _130.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    };
                    instantiateContract?: {
                        sender?: string;
                        admin?: string;
                        codeId?: string | number | import("long").default;
                        label?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    executeContract?: {
                        sender?: string;
                        contract?: string;
                        msg?: Uint8Array;
                        funds?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _125.GenesisState_GenMsgs;
            };
            Code: {
                encode(message: _125.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Code;
                fromJSON(object: any): _125.Code;
                toJSON(message: _125.Code): unknown;
                fromPartial(object: {
                    codeId?: string | number | import("long").default;
                    codeInfo?: {
                        codeHash?: Uint8Array;
                        creator?: string;
                        instantiateConfig?: {
                            permission?: _130.AccessType;
                            address?: string;
                            addresses?: string[];
                        };
                    };
                    codeBytes?: Uint8Array;
                    pinned?: boolean;
                }): _125.Code;
            };
            Contract: {
                encode(message: _125.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Contract;
                fromJSON(object: any): _125.Contract;
                toJSON(message: _125.Contract): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                    contractInfo?: {
                        codeId?: string | number | import("long").default;
                        creator?: string;
                        admin?: string;
                        label?: string;
                        created?: {
                            blockHeight?: string | number | import("long").default;
                            txIndex?: string | number | import("long").default;
                        };
                        ibcPortId?: string;
                        extension?: {
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    };
                    contractState?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }[];
                }): _125.Contract;
            };
            Sequence: {
                encode(message: _125.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Sequence;
                fromJSON(object: any): _125.Sequence;
                toJSON(message: _125.Sequence): unknown;
                fromPartial(object: {
                    idKey?: Uint8Array;
                    value?: string | number | import("long").default;
                }): _125.Sequence;
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
            cosmwasm: {
                wasm: {
                    v1: _223.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _128.QueryContractInfoRequest): Promise<_128.QueryContractInfoResponse>;
                        contractHistory(request: _128.QueryContractHistoryRequest): Promise<_128.QueryContractHistoryResponse>;
                        contractsByCode(request: _128.QueryContractsByCodeRequest): Promise<_128.QueryContractsByCodeResponse>;
                        allContractState(request: _128.QueryAllContractStateRequest): Promise<_128.QueryAllContractStateResponse>;
                        rawContractState(request: _128.QueryRawContractStateRequest): Promise<_128.QueryRawContractStateResponse>;
                        smartContractState(request: _128.QuerySmartContractStateRequest): Promise<_128.QuerySmartContractStateResponse>;
                        code(request: _128.QueryCodeRequest): Promise<_128.QueryCodeResponse>;
                        codes(request?: _128.QueryCodesRequest): Promise<_128.QueryCodesResponse>;
                        pinnedCodes(request?: _128.QueryPinnedCodesRequest): Promise<_128.QueryPinnedCodesResponse>;
                        params(request?: _128.QueryParamsRequest): Promise<_128.QueryParamsResponse>;
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
            cosmwasm: {
                wasm: {
                    v1: _221.LCDQueryClient;
                };
            };
        }>;
    };
}
