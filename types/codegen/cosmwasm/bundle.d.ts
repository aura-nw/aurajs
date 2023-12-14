import * as _199 from "./wasm/v1/authz";
import * as _200 from "./wasm/v1/genesis";
import * as _201 from "./wasm/v1/ibc";
import * as _202 from "./wasm/v1/proposal";
import * as _203 from "./wasm/v1/query";
import * as _204 from "./wasm/v1/tx";
import * as _205 from "./wasm/v1/types";
import * as _341 from "./wasm/v1/query.lcd";
import * as _342 from "./wasm/v1/query.rpc.Query";
import * as _343 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _343.MsgClientImpl;
            QueryClientImpl: typeof _342.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _203.QueryContractInfoRequest): Promise<_203.QueryContractInfoResponse>;
                contractHistory(request: _203.QueryContractHistoryRequest): Promise<_203.QueryContractHistoryResponse>;
                contractsByCode(request: _203.QueryContractsByCodeRequest): Promise<_203.QueryContractsByCodeResponse>;
                allContractState(request: _203.QueryAllContractStateRequest): Promise<_203.QueryAllContractStateResponse>;
                rawContractState(request: _203.QueryRawContractStateRequest): Promise<_203.QueryRawContractStateResponse>;
                smartContractState(request: _203.QuerySmartContractStateRequest): Promise<_203.QuerySmartContractStateResponse>;
                code(request: _203.QueryCodeRequest): Promise<_203.QueryCodeResponse>;
                codes(request?: _203.QueryCodesRequest): Promise<_203.QueryCodesResponse>;
                pinnedCodes(request?: _203.QueryPinnedCodesRequest): Promise<_203.QueryPinnedCodesResponse>;
                params(request?: _203.QueryParamsRequest): Promise<_203.QueryParamsResponse>;
                contractsByCreator(request: _203.QueryContractsByCreatorRequest): Promise<_203.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _341.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _204.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _204.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _204.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _204.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _204.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _204.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _204.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _204.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _204.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _204.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _204.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _204.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _204.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _204.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _204.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _204.MsgStoreCode): {
                        typeUrl: string;
                        value: _204.MsgStoreCode;
                    };
                    instantiateContract(value: _204.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _204.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _204.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _204.MsgInstantiateContract2;
                    };
                    executeContract(value: _204.MsgExecuteContract): {
                        typeUrl: string;
                        value: _204.MsgExecuteContract;
                    };
                    migrateContract(value: _204.MsgMigrateContract): {
                        typeUrl: string;
                        value: _204.MsgMigrateContract;
                    };
                    updateAdmin(value: _204.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _204.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _204.MsgClearAdmin): {
                        typeUrl: string;
                        value: _204.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _204.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _204.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _204.MsgUpdateParams): {
                        typeUrl: string;
                        value: _204.MsgUpdateParams;
                    };
                    sudoContract(value: _204.MsgSudoContract): {
                        typeUrl: string;
                        value: _204.MsgSudoContract;
                    };
                    pinCodes(value: _204.MsgPinCodes): {
                        typeUrl: string;
                        value: _204.MsgPinCodes;
                    };
                    unpinCodes(value: _204.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _204.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _204.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _204.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _204.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _204.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _204.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _204.MsgAddCodeUploadParamsAddresses;
                    };
                };
                toJSON: {
                    storeCode(value: _204.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _204.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _204.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _204.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _204.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _204.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _204.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateInstantiateConfig(value: _204.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _204.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sudoContract(value: _204.MsgSudoContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pinCodes(value: _204.MsgPinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unpinCodes(value: _204.MsgUnpinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    storeAndInstantiateContract(value: _204.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeCodeUploadParamsAddresses(value: _204.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addCodeUploadParamsAddresses(value: _204.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _204.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _204.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _204.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _204.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _204.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _204.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _204.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _204.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _204.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _204.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _204.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _204.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _204.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _204.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _204.MsgAddCodeUploadParamsAddresses;
                    };
                };
                fromPartial: {
                    storeCode(value: _204.MsgStoreCode): {
                        typeUrl: string;
                        value: _204.MsgStoreCode;
                    };
                    instantiateContract(value: _204.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _204.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _204.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _204.MsgInstantiateContract2;
                    };
                    executeContract(value: _204.MsgExecuteContract): {
                        typeUrl: string;
                        value: _204.MsgExecuteContract;
                    };
                    migrateContract(value: _204.MsgMigrateContract): {
                        typeUrl: string;
                        value: _204.MsgMigrateContract;
                    };
                    updateAdmin(value: _204.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _204.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _204.MsgClearAdmin): {
                        typeUrl: string;
                        value: _204.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _204.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _204.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _204.MsgUpdateParams): {
                        typeUrl: string;
                        value: _204.MsgUpdateParams;
                    };
                    sudoContract(value: _204.MsgSudoContract): {
                        typeUrl: string;
                        value: _204.MsgSudoContract;
                    };
                    pinCodes(value: _204.MsgPinCodes): {
                        typeUrl: string;
                        value: _204.MsgPinCodes;
                    };
                    unpinCodes(value: _204.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _204.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _204.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _204.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _204.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _204.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _204.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _204.MsgAddCodeUploadParamsAddresses;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _204.MsgStoreCode) => _204.MsgStoreCodeAmino;
                    fromAmino: (object: _204.MsgStoreCodeAmino) => _204.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _204.MsgInstantiateContract) => _204.MsgInstantiateContractAmino;
                    fromAmino: (object: _204.MsgInstantiateContractAmino) => _204.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _204.MsgInstantiateContract2) => _204.MsgInstantiateContract2Amino;
                    fromAmino: (object: _204.MsgInstantiateContract2Amino) => _204.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _204.MsgExecuteContract) => _204.MsgExecuteContractAmino;
                    fromAmino: (object: _204.MsgExecuteContractAmino) => _204.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _204.MsgMigrateContract) => _204.MsgMigrateContractAmino;
                    fromAmino: (object: _204.MsgMigrateContractAmino) => _204.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _204.MsgUpdateAdmin) => _204.MsgUpdateAdminAmino;
                    fromAmino: (object: _204.MsgUpdateAdminAmino) => _204.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _204.MsgClearAdmin) => _204.MsgClearAdminAmino;
                    fromAmino: (object: _204.MsgClearAdminAmino) => _204.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _204.MsgUpdateInstantiateConfig) => _204.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _204.MsgUpdateInstantiateConfigAmino) => _204.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _204.MsgUpdateParams) => _204.MsgUpdateParamsAmino;
                    fromAmino: (object: _204.MsgUpdateParamsAmino) => _204.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _204.MsgSudoContract) => _204.MsgSudoContractAmino;
                    fromAmino: (object: _204.MsgSudoContractAmino) => _204.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _204.MsgPinCodes) => _204.MsgPinCodesAmino;
                    fromAmino: (object: _204.MsgPinCodesAmino) => _204.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _204.MsgUnpinCodes) => _204.MsgUnpinCodesAmino;
                    fromAmino: (object: _204.MsgUnpinCodesAmino) => _204.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _204.MsgStoreAndInstantiateContract) => _204.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _204.MsgStoreAndInstantiateContractAmino) => _204.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _204.MsgRemoveCodeUploadParamsAddresses) => _204.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _204.MsgRemoveCodeUploadParamsAddressesAmino) => _204.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _204.MsgAddCodeUploadParamsAddresses) => _204.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _204.MsgAddCodeUploadParamsAddressesAmino) => _204.MsgAddCodeUploadParamsAddresses;
                };
            };
            accessTypeFromJSON(object: any): _205.AccessType;
            accessTypeToJSON(object: _205.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _205.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _205.ContractCodeHistoryOperationType): string;
            AccessType: typeof _205.AccessType;
            AccessTypeSDKType: typeof _205.AccessType;
            AccessTypeAmino: typeof _205.AccessType;
            ContractCodeHistoryOperationType: typeof _205.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _205.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _205.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _205.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.AccessTypeParam;
                fromJSON(object: any): _205.AccessTypeParam;
                toJSON(message: _205.AccessTypeParam): unknown;
                fromPartial(object: Partial<_205.AccessTypeParam>): _205.AccessTypeParam;
                fromAmino(object: _205.AccessTypeParamAmino): _205.AccessTypeParam;
                toAmino(message: _205.AccessTypeParam): _205.AccessTypeParamAmino;
                fromAminoMsg(object: _205.AccessTypeParamAminoMsg): _205.AccessTypeParam;
                toAminoMsg(message: _205.AccessTypeParam): _205.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _205.AccessTypeParamProtoMsg): _205.AccessTypeParam;
                toProto(message: _205.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _205.AccessTypeParam): _205.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _205.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.AccessConfig;
                fromJSON(object: any): _205.AccessConfig;
                toJSON(message: _205.AccessConfig): unknown;
                fromPartial(object: Partial<_205.AccessConfig>): _205.AccessConfig;
                fromAmino(object: _205.AccessConfigAmino): _205.AccessConfig;
                toAmino(message: _205.AccessConfig): _205.AccessConfigAmino;
                fromAminoMsg(object: _205.AccessConfigAminoMsg): _205.AccessConfig;
                toAminoMsg(message: _205.AccessConfig): _205.AccessConfigAminoMsg;
                fromProtoMsg(message: _205.AccessConfigProtoMsg): _205.AccessConfig;
                toProto(message: _205.AccessConfig): Uint8Array;
                toProtoMsg(message: _205.AccessConfig): _205.AccessConfigProtoMsg;
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
            CodeInfo: {
                typeUrl: string;
                encode(message: _205.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.CodeInfo;
                fromJSON(object: any): _205.CodeInfo;
                toJSON(message: _205.CodeInfo): unknown;
                fromPartial(object: Partial<_205.CodeInfo>): _205.CodeInfo;
                fromAmino(object: _205.CodeInfoAmino): _205.CodeInfo;
                toAmino(message: _205.CodeInfo): _205.CodeInfoAmino;
                fromAminoMsg(object: _205.CodeInfoAminoMsg): _205.CodeInfo;
                toAminoMsg(message: _205.CodeInfo): _205.CodeInfoAminoMsg;
                fromProtoMsg(message: _205.CodeInfoProtoMsg): _205.CodeInfo;
                toProto(message: _205.CodeInfo): Uint8Array;
                toProtoMsg(message: _205.CodeInfo): _205.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _205.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ContractInfo;
                fromJSON(object: any): _205.ContractInfo;
                toJSON(message: _205.ContractInfo): unknown;
                fromPartial(object: Partial<_205.ContractInfo>): _205.ContractInfo;
                fromAmino(object: _205.ContractInfoAmino): _205.ContractInfo;
                toAmino(message: _205.ContractInfo): _205.ContractInfoAmino;
                fromAminoMsg(object: _205.ContractInfoAminoMsg): _205.ContractInfo;
                toAminoMsg(message: _205.ContractInfo): _205.ContractInfoAminoMsg;
                fromProtoMsg(message: _205.ContractInfoProtoMsg): _205.ContractInfo;
                toProto(message: _205.ContractInfo): Uint8Array;
                toProtoMsg(message: _205.ContractInfo): _205.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _205.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ContractCodeHistoryEntry;
                fromJSON(object: any): _205.ContractCodeHistoryEntry;
                toJSON(message: _205.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_205.ContractCodeHistoryEntry>): _205.ContractCodeHistoryEntry;
                fromAmino(object: _205.ContractCodeHistoryEntryAmino): _205.ContractCodeHistoryEntry;
                toAmino(message: _205.ContractCodeHistoryEntry): _205.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _205.ContractCodeHistoryEntryAminoMsg): _205.ContractCodeHistoryEntry;
                toAminoMsg(message: _205.ContractCodeHistoryEntry): _205.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _205.ContractCodeHistoryEntryProtoMsg): _205.ContractCodeHistoryEntry;
                toProto(message: _205.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _205.ContractCodeHistoryEntry): _205.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _205.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.AbsoluteTxPosition;
                fromJSON(object: any): _205.AbsoluteTxPosition;
                toJSON(message: _205.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_205.AbsoluteTxPosition>): _205.AbsoluteTxPosition;
                fromAmino(object: _205.AbsoluteTxPositionAmino): _205.AbsoluteTxPosition;
                toAmino(message: _205.AbsoluteTxPosition): _205.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _205.AbsoluteTxPositionAminoMsg): _205.AbsoluteTxPosition;
                toAminoMsg(message: _205.AbsoluteTxPosition): _205.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _205.AbsoluteTxPositionProtoMsg): _205.AbsoluteTxPosition;
                toProto(message: _205.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _205.AbsoluteTxPosition): _205.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _205.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Model;
                fromJSON(object: any): _205.Model;
                toJSON(message: _205.Model): unknown;
                fromPartial(object: Partial<_205.Model>): _205.Model;
                fromAmino(object: _205.ModelAmino): _205.Model;
                toAmino(message: _205.Model): _205.ModelAmino;
                fromAminoMsg(object: _205.ModelAminoMsg): _205.Model;
                toAminoMsg(message: _205.Model): _205.ModelAminoMsg;
                fromProtoMsg(message: _205.ModelProtoMsg): _205.Model;
                toProto(message: _205.Model): Uint8Array;
                toProtoMsg(message: _205.Model): _205.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _204.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgStoreCode;
                fromJSON(object: any): _204.MsgStoreCode;
                toJSON(message: _204.MsgStoreCode): unknown;
                fromPartial(object: Partial<_204.MsgStoreCode>): _204.MsgStoreCode;
                fromAmino(object: _204.MsgStoreCodeAmino): _204.MsgStoreCode;
                toAmino(message: _204.MsgStoreCode): _204.MsgStoreCodeAmino;
                fromAminoMsg(object: _204.MsgStoreCodeAminoMsg): _204.MsgStoreCode;
                toAminoMsg(message: _204.MsgStoreCode): _204.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _204.MsgStoreCodeProtoMsg): _204.MsgStoreCode;
                toProto(message: _204.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _204.MsgStoreCode): _204.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _204.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgStoreCodeResponse;
                fromJSON(object: any): _204.MsgStoreCodeResponse;
                toJSON(message: _204.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_204.MsgStoreCodeResponse>): _204.MsgStoreCodeResponse;
                fromAmino(object: _204.MsgStoreCodeResponseAmino): _204.MsgStoreCodeResponse;
                toAmino(message: _204.MsgStoreCodeResponse): _204.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _204.MsgStoreCodeResponseAminoMsg): _204.MsgStoreCodeResponse;
                toAminoMsg(message: _204.MsgStoreCodeResponse): _204.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _204.MsgStoreCodeResponseProtoMsg): _204.MsgStoreCodeResponse;
                toProto(message: _204.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _204.MsgStoreCodeResponse): _204.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _204.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgInstantiateContract;
                fromJSON(object: any): _204.MsgInstantiateContract;
                toJSON(message: _204.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_204.MsgInstantiateContract>): _204.MsgInstantiateContract;
                fromAmino(object: _204.MsgInstantiateContractAmino): _204.MsgInstantiateContract;
                toAmino(message: _204.MsgInstantiateContract): _204.MsgInstantiateContractAmino;
                fromAminoMsg(object: _204.MsgInstantiateContractAminoMsg): _204.MsgInstantiateContract;
                toAminoMsg(message: _204.MsgInstantiateContract): _204.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _204.MsgInstantiateContractProtoMsg): _204.MsgInstantiateContract;
                toProto(message: _204.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _204.MsgInstantiateContract): _204.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _204.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgInstantiateContractResponse;
                fromJSON(object: any): _204.MsgInstantiateContractResponse;
                toJSON(message: _204.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_204.MsgInstantiateContractResponse>): _204.MsgInstantiateContractResponse;
                fromAmino(object: _204.MsgInstantiateContractResponseAmino): _204.MsgInstantiateContractResponse;
                toAmino(message: _204.MsgInstantiateContractResponse): _204.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _204.MsgInstantiateContractResponseAminoMsg): _204.MsgInstantiateContractResponse;
                toAminoMsg(message: _204.MsgInstantiateContractResponse): _204.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _204.MsgInstantiateContractResponseProtoMsg): _204.MsgInstantiateContractResponse;
                toProto(message: _204.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _204.MsgInstantiateContractResponse): _204.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _204.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgInstantiateContract2;
                fromJSON(object: any): _204.MsgInstantiateContract2;
                toJSON(message: _204.MsgInstantiateContract2): unknown;
                fromPartial(object: Partial<_204.MsgInstantiateContract2>): _204.MsgInstantiateContract2;
                fromAmino(object: _204.MsgInstantiateContract2Amino): _204.MsgInstantiateContract2;
                toAmino(message: _204.MsgInstantiateContract2): _204.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _204.MsgInstantiateContract2AminoMsg): _204.MsgInstantiateContract2;
                toAminoMsg(message: _204.MsgInstantiateContract2): _204.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _204.MsgInstantiateContract2ProtoMsg): _204.MsgInstantiateContract2;
                toProto(message: _204.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _204.MsgInstantiateContract2): _204.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _204.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgInstantiateContract2Response;
                fromJSON(object: any): _204.MsgInstantiateContract2Response;
                toJSON(message: _204.MsgInstantiateContract2Response): unknown;
                fromPartial(object: Partial<_204.MsgInstantiateContract2Response>): _204.MsgInstantiateContract2Response;
                fromAmino(object: _204.MsgInstantiateContract2ResponseAmino): _204.MsgInstantiateContract2Response;
                toAmino(message: _204.MsgInstantiateContract2Response): _204.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _204.MsgInstantiateContract2ResponseAminoMsg): _204.MsgInstantiateContract2Response;
                toAminoMsg(message: _204.MsgInstantiateContract2Response): _204.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _204.MsgInstantiateContract2ResponseProtoMsg): _204.MsgInstantiateContract2Response;
                toProto(message: _204.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _204.MsgInstantiateContract2Response): _204.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _204.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgExecuteContract;
                fromJSON(object: any): _204.MsgExecuteContract;
                toJSON(message: _204.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_204.MsgExecuteContract>): _204.MsgExecuteContract;
                fromAmino(object: _204.MsgExecuteContractAmino): _204.MsgExecuteContract;
                toAmino(message: _204.MsgExecuteContract): _204.MsgExecuteContractAmino;
                fromAminoMsg(object: _204.MsgExecuteContractAminoMsg): _204.MsgExecuteContract;
                toAminoMsg(message: _204.MsgExecuteContract): _204.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _204.MsgExecuteContractProtoMsg): _204.MsgExecuteContract;
                toProto(message: _204.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _204.MsgExecuteContract): _204.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _204.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgExecuteContractResponse;
                fromJSON(object: any): _204.MsgExecuteContractResponse;
                toJSON(message: _204.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_204.MsgExecuteContractResponse>): _204.MsgExecuteContractResponse;
                fromAmino(object: _204.MsgExecuteContractResponseAmino): _204.MsgExecuteContractResponse;
                toAmino(message: _204.MsgExecuteContractResponse): _204.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _204.MsgExecuteContractResponseAminoMsg): _204.MsgExecuteContractResponse;
                toAminoMsg(message: _204.MsgExecuteContractResponse): _204.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _204.MsgExecuteContractResponseProtoMsg): _204.MsgExecuteContractResponse;
                toProto(message: _204.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _204.MsgExecuteContractResponse): _204.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _204.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgMigrateContract;
                fromJSON(object: any): _204.MsgMigrateContract;
                toJSON(message: _204.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_204.MsgMigrateContract>): _204.MsgMigrateContract;
                fromAmino(object: _204.MsgMigrateContractAmino): _204.MsgMigrateContract;
                toAmino(message: _204.MsgMigrateContract): _204.MsgMigrateContractAmino;
                fromAminoMsg(object: _204.MsgMigrateContractAminoMsg): _204.MsgMigrateContract;
                toAminoMsg(message: _204.MsgMigrateContract): _204.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _204.MsgMigrateContractProtoMsg): _204.MsgMigrateContract;
                toProto(message: _204.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _204.MsgMigrateContract): _204.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _204.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgMigrateContractResponse;
                fromJSON(object: any): _204.MsgMigrateContractResponse;
                toJSON(message: _204.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_204.MsgMigrateContractResponse>): _204.MsgMigrateContractResponse;
                fromAmino(object: _204.MsgMigrateContractResponseAmino): _204.MsgMigrateContractResponse;
                toAmino(message: _204.MsgMigrateContractResponse): _204.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _204.MsgMigrateContractResponseAminoMsg): _204.MsgMigrateContractResponse;
                toAminoMsg(message: _204.MsgMigrateContractResponse): _204.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _204.MsgMigrateContractResponseProtoMsg): _204.MsgMigrateContractResponse;
                toProto(message: _204.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _204.MsgMigrateContractResponse): _204.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _204.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgUpdateAdmin;
                fromJSON(object: any): _204.MsgUpdateAdmin;
                toJSON(message: _204.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_204.MsgUpdateAdmin>): _204.MsgUpdateAdmin;
                fromAmino(object: _204.MsgUpdateAdminAmino): _204.MsgUpdateAdmin;
                toAmino(message: _204.MsgUpdateAdmin): _204.MsgUpdateAdminAmino;
                fromAminoMsg(object: _204.MsgUpdateAdminAminoMsg): _204.MsgUpdateAdmin;
                toAminoMsg(message: _204.MsgUpdateAdmin): _204.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _204.MsgUpdateAdminProtoMsg): _204.MsgUpdateAdmin;
                toProto(message: _204.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _204.MsgUpdateAdmin): _204.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _204.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgUpdateAdminResponse;
                fromJSON(_: any): _204.MsgUpdateAdminResponse;
                toJSON(_: _204.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_204.MsgUpdateAdminResponse>): _204.MsgUpdateAdminResponse;
                fromAmino(_: _204.MsgUpdateAdminResponseAmino): _204.MsgUpdateAdminResponse;
                toAmino(_: _204.MsgUpdateAdminResponse): _204.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _204.MsgUpdateAdminResponseAminoMsg): _204.MsgUpdateAdminResponse;
                toAminoMsg(message: _204.MsgUpdateAdminResponse): _204.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _204.MsgUpdateAdminResponseProtoMsg): _204.MsgUpdateAdminResponse;
                toProto(message: _204.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _204.MsgUpdateAdminResponse): _204.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _204.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgClearAdmin;
                fromJSON(object: any): _204.MsgClearAdmin;
                toJSON(message: _204.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_204.MsgClearAdmin>): _204.MsgClearAdmin;
                fromAmino(object: _204.MsgClearAdminAmino): _204.MsgClearAdmin;
                toAmino(message: _204.MsgClearAdmin): _204.MsgClearAdminAmino;
                fromAminoMsg(object: _204.MsgClearAdminAminoMsg): _204.MsgClearAdmin;
                toAminoMsg(message: _204.MsgClearAdmin): _204.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _204.MsgClearAdminProtoMsg): _204.MsgClearAdmin;
                toProto(message: _204.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _204.MsgClearAdmin): _204.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _204.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgClearAdminResponse;
                fromJSON(_: any): _204.MsgClearAdminResponse;
                toJSON(_: _204.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_204.MsgClearAdminResponse>): _204.MsgClearAdminResponse;
                fromAmino(_: _204.MsgClearAdminResponseAmino): _204.MsgClearAdminResponse;
                toAmino(_: _204.MsgClearAdminResponse): _204.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _204.MsgClearAdminResponseAminoMsg): _204.MsgClearAdminResponse;
                toAminoMsg(message: _204.MsgClearAdminResponse): _204.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _204.MsgClearAdminResponseProtoMsg): _204.MsgClearAdminResponse;
                toProto(message: _204.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _204.MsgClearAdminResponse): _204.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _204.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgUpdateInstantiateConfig;
                fromJSON(object: any): _204.MsgUpdateInstantiateConfig;
                toJSON(message: _204.MsgUpdateInstantiateConfig): unknown;
                fromPartial(object: Partial<_204.MsgUpdateInstantiateConfig>): _204.MsgUpdateInstantiateConfig;
                fromAmino(object: _204.MsgUpdateInstantiateConfigAmino): _204.MsgUpdateInstantiateConfig;
                toAmino(message: _204.MsgUpdateInstantiateConfig): _204.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _204.MsgUpdateInstantiateConfigAminoMsg): _204.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _204.MsgUpdateInstantiateConfig): _204.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _204.MsgUpdateInstantiateConfigProtoMsg): _204.MsgUpdateInstantiateConfig;
                toProto(message: _204.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _204.MsgUpdateInstantiateConfig): _204.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _204.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgUpdateInstantiateConfigResponse;
                fromJSON(_: any): _204.MsgUpdateInstantiateConfigResponse;
                toJSON(_: _204.MsgUpdateInstantiateConfigResponse): unknown;
                fromPartial(_: Partial<_204.MsgUpdateInstantiateConfigResponse>): _204.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _204.MsgUpdateInstantiateConfigResponseAmino): _204.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _204.MsgUpdateInstantiateConfigResponse): _204.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _204.MsgUpdateInstantiateConfigResponseAminoMsg): _204.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _204.MsgUpdateInstantiateConfigResponse): _204.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _204.MsgUpdateInstantiateConfigResponseProtoMsg): _204.MsgUpdateInstantiateConfigResponse;
                toProto(message: _204.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _204.MsgUpdateInstantiateConfigResponse): _204.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _204.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgUpdateParams;
                fromJSON(object: any): _204.MsgUpdateParams;
                toJSON(message: _204.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_204.MsgUpdateParams>): _204.MsgUpdateParams;
                fromAmino(object: _204.MsgUpdateParamsAmino): _204.MsgUpdateParams;
                toAmino(message: _204.MsgUpdateParams): _204.MsgUpdateParamsAmino;
                fromAminoMsg(object: _204.MsgUpdateParamsAminoMsg): _204.MsgUpdateParams;
                toAminoMsg(message: _204.MsgUpdateParams): _204.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _204.MsgUpdateParamsProtoMsg): _204.MsgUpdateParams;
                toProto(message: _204.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _204.MsgUpdateParams): _204.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _204.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgUpdateParamsResponse;
                fromJSON(_: any): _204.MsgUpdateParamsResponse;
                toJSON(_: _204.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_204.MsgUpdateParamsResponse>): _204.MsgUpdateParamsResponse;
                fromAmino(_: _204.MsgUpdateParamsResponseAmino): _204.MsgUpdateParamsResponse;
                toAmino(_: _204.MsgUpdateParamsResponse): _204.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _204.MsgUpdateParamsResponseAminoMsg): _204.MsgUpdateParamsResponse;
                toAminoMsg(message: _204.MsgUpdateParamsResponse): _204.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _204.MsgUpdateParamsResponseProtoMsg): _204.MsgUpdateParamsResponse;
                toProto(message: _204.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _204.MsgUpdateParamsResponse): _204.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _204.MsgSudoContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgSudoContract;
                fromJSON(object: any): _204.MsgSudoContract;
                toJSON(message: _204.MsgSudoContract): unknown;
                fromPartial(object: Partial<_204.MsgSudoContract>): _204.MsgSudoContract;
                fromAmino(object: _204.MsgSudoContractAmino): _204.MsgSudoContract;
                toAmino(message: _204.MsgSudoContract): _204.MsgSudoContractAmino;
                fromAminoMsg(object: _204.MsgSudoContractAminoMsg): _204.MsgSudoContract;
                toAminoMsg(message: _204.MsgSudoContract): _204.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _204.MsgSudoContractProtoMsg): _204.MsgSudoContract;
                toProto(message: _204.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _204.MsgSudoContract): _204.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _204.MsgSudoContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgSudoContractResponse;
                fromJSON(object: any): _204.MsgSudoContractResponse;
                toJSON(message: _204.MsgSudoContractResponse): unknown;
                fromPartial(object: Partial<_204.MsgSudoContractResponse>): _204.MsgSudoContractResponse;
                fromAmino(object: _204.MsgSudoContractResponseAmino): _204.MsgSudoContractResponse;
                toAmino(message: _204.MsgSudoContractResponse): _204.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _204.MsgSudoContractResponseAminoMsg): _204.MsgSudoContractResponse;
                toAminoMsg(message: _204.MsgSudoContractResponse): _204.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _204.MsgSudoContractResponseProtoMsg): _204.MsgSudoContractResponse;
                toProto(message: _204.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _204.MsgSudoContractResponse): _204.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _204.MsgPinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgPinCodes;
                fromJSON(object: any): _204.MsgPinCodes;
                toJSON(message: _204.MsgPinCodes): unknown;
                fromPartial(object: Partial<_204.MsgPinCodes>): _204.MsgPinCodes;
                fromAmino(object: _204.MsgPinCodesAmino): _204.MsgPinCodes;
                toAmino(message: _204.MsgPinCodes): _204.MsgPinCodesAmino;
                fromAminoMsg(object: _204.MsgPinCodesAminoMsg): _204.MsgPinCodes;
                toAminoMsg(message: _204.MsgPinCodes): _204.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _204.MsgPinCodesProtoMsg): _204.MsgPinCodes;
                toProto(message: _204.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _204.MsgPinCodes): _204.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _204.MsgPinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgPinCodesResponse;
                fromJSON(_: any): _204.MsgPinCodesResponse;
                toJSON(_: _204.MsgPinCodesResponse): unknown;
                fromPartial(_: Partial<_204.MsgPinCodesResponse>): _204.MsgPinCodesResponse;
                fromAmino(_: _204.MsgPinCodesResponseAmino): _204.MsgPinCodesResponse;
                toAmino(_: _204.MsgPinCodesResponse): _204.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _204.MsgPinCodesResponseAminoMsg): _204.MsgPinCodesResponse;
                toAminoMsg(message: _204.MsgPinCodesResponse): _204.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _204.MsgPinCodesResponseProtoMsg): _204.MsgPinCodesResponse;
                toProto(message: _204.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _204.MsgPinCodesResponse): _204.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _204.MsgUnpinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgUnpinCodes;
                fromJSON(object: any): _204.MsgUnpinCodes;
                toJSON(message: _204.MsgUnpinCodes): unknown;
                fromPartial(object: Partial<_204.MsgUnpinCodes>): _204.MsgUnpinCodes;
                fromAmino(object: _204.MsgUnpinCodesAmino): _204.MsgUnpinCodes;
                toAmino(message: _204.MsgUnpinCodes): _204.MsgUnpinCodesAmino;
                fromAminoMsg(object: _204.MsgUnpinCodesAminoMsg): _204.MsgUnpinCodes;
                toAminoMsg(message: _204.MsgUnpinCodes): _204.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _204.MsgUnpinCodesProtoMsg): _204.MsgUnpinCodes;
                toProto(message: _204.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _204.MsgUnpinCodes): _204.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _204.MsgUnpinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgUnpinCodesResponse;
                fromJSON(_: any): _204.MsgUnpinCodesResponse;
                toJSON(_: _204.MsgUnpinCodesResponse): unknown;
                fromPartial(_: Partial<_204.MsgUnpinCodesResponse>): _204.MsgUnpinCodesResponse;
                fromAmino(_: _204.MsgUnpinCodesResponseAmino): _204.MsgUnpinCodesResponse;
                toAmino(_: _204.MsgUnpinCodesResponse): _204.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _204.MsgUnpinCodesResponseAminoMsg): _204.MsgUnpinCodesResponse;
                toAminoMsg(message: _204.MsgUnpinCodesResponse): _204.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _204.MsgUnpinCodesResponseProtoMsg): _204.MsgUnpinCodesResponse;
                toProto(message: _204.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _204.MsgUnpinCodesResponse): _204.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _204.MsgStoreAndInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgStoreAndInstantiateContract;
                fromJSON(object: any): _204.MsgStoreAndInstantiateContract;
                toJSON(message: _204.MsgStoreAndInstantiateContract): unknown;
                fromPartial(object: Partial<_204.MsgStoreAndInstantiateContract>): _204.MsgStoreAndInstantiateContract;
                fromAmino(object: _204.MsgStoreAndInstantiateContractAmino): _204.MsgStoreAndInstantiateContract;
                toAmino(message: _204.MsgStoreAndInstantiateContract): _204.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _204.MsgStoreAndInstantiateContractAminoMsg): _204.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _204.MsgStoreAndInstantiateContract): _204.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _204.MsgStoreAndInstantiateContractProtoMsg): _204.MsgStoreAndInstantiateContract;
                toProto(message: _204.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _204.MsgStoreAndInstantiateContract): _204.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _204.MsgStoreAndInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgStoreAndInstantiateContractResponse;
                fromJSON(object: any): _204.MsgStoreAndInstantiateContractResponse;
                toJSON(message: _204.MsgStoreAndInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_204.MsgStoreAndInstantiateContractResponse>): _204.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _204.MsgStoreAndInstantiateContractResponseAmino): _204.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _204.MsgStoreAndInstantiateContractResponse): _204.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _204.MsgStoreAndInstantiateContractResponseAminoMsg): _204.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _204.MsgStoreAndInstantiateContractResponse): _204.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _204.MsgStoreAndInstantiateContractResponseProtoMsg): _204.MsgStoreAndInstantiateContractResponse;
                toProto(message: _204.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _204.MsgStoreAndInstantiateContractResponse): _204.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _204.MsgAddCodeUploadParamsAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgAddCodeUploadParamsAddresses;
                fromJSON(object: any): _204.MsgAddCodeUploadParamsAddresses;
                toJSON(message: _204.MsgAddCodeUploadParamsAddresses): unknown;
                fromPartial(object: Partial<_204.MsgAddCodeUploadParamsAddresses>): _204.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _204.MsgAddCodeUploadParamsAddressesAmino): _204.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _204.MsgAddCodeUploadParamsAddresses): _204.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _204.MsgAddCodeUploadParamsAddressesAminoMsg): _204.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _204.MsgAddCodeUploadParamsAddresses): _204.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _204.MsgAddCodeUploadParamsAddressesProtoMsg): _204.MsgAddCodeUploadParamsAddresses;
                toProto(message: _204.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _204.MsgAddCodeUploadParamsAddresses): _204.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _204.MsgAddCodeUploadParamsAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgAddCodeUploadParamsAddressesResponse;
                fromJSON(_: any): _204.MsgAddCodeUploadParamsAddressesResponse;
                toJSON(_: _204.MsgAddCodeUploadParamsAddressesResponse): unknown;
                fromPartial(_: Partial<_204.MsgAddCodeUploadParamsAddressesResponse>): _204.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _204.MsgAddCodeUploadParamsAddressesResponseAmino): _204.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _204.MsgAddCodeUploadParamsAddressesResponse): _204.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _204.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _204.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _204.MsgAddCodeUploadParamsAddressesResponse): _204.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _204.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _204.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _204.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _204.MsgAddCodeUploadParamsAddressesResponse): _204.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _204.MsgRemoveCodeUploadParamsAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgRemoveCodeUploadParamsAddresses;
                fromJSON(object: any): _204.MsgRemoveCodeUploadParamsAddresses;
                toJSON(message: _204.MsgRemoveCodeUploadParamsAddresses): unknown;
                fromPartial(object: Partial<_204.MsgRemoveCodeUploadParamsAddresses>): _204.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _204.MsgRemoveCodeUploadParamsAddressesAmino): _204.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _204.MsgRemoveCodeUploadParamsAddresses): _204.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _204.MsgRemoveCodeUploadParamsAddressesAminoMsg): _204.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _204.MsgRemoveCodeUploadParamsAddresses): _204.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _204.MsgRemoveCodeUploadParamsAddressesProtoMsg): _204.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _204.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _204.MsgRemoveCodeUploadParamsAddresses): _204.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _204.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgRemoveCodeUploadParamsAddressesResponse;
                fromJSON(_: any): _204.MsgRemoveCodeUploadParamsAddressesResponse;
                toJSON(_: _204.MsgRemoveCodeUploadParamsAddressesResponse): unknown;
                fromPartial(_: Partial<_204.MsgRemoveCodeUploadParamsAddressesResponse>): _204.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _204.MsgRemoveCodeUploadParamsAddressesResponseAmino): _204.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _204.MsgRemoveCodeUploadParamsAddressesResponse): _204.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _204.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _204.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _204.MsgRemoveCodeUploadParamsAddressesResponse): _204.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _204.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _204.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _204.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _204.MsgRemoveCodeUploadParamsAddressesResponse): _204.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _203.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryContractInfoRequest;
                fromJSON(object: any): _203.QueryContractInfoRequest;
                toJSON(message: _203.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_203.QueryContractInfoRequest>): _203.QueryContractInfoRequest;
                fromAmino(object: _203.QueryContractInfoRequestAmino): _203.QueryContractInfoRequest;
                toAmino(message: _203.QueryContractInfoRequest): _203.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _203.QueryContractInfoRequestAminoMsg): _203.QueryContractInfoRequest;
                toAminoMsg(message: _203.QueryContractInfoRequest): _203.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _203.QueryContractInfoRequestProtoMsg): _203.QueryContractInfoRequest;
                toProto(message: _203.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _203.QueryContractInfoRequest): _203.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _203.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryContractInfoResponse;
                fromJSON(object: any): _203.QueryContractInfoResponse;
                toJSON(message: _203.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_203.QueryContractInfoResponse>): _203.QueryContractInfoResponse;
                fromAmino(object: _203.QueryContractInfoResponseAmino): _203.QueryContractInfoResponse;
                toAmino(message: _203.QueryContractInfoResponse): _203.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _203.QueryContractInfoResponseAminoMsg): _203.QueryContractInfoResponse;
                toAminoMsg(message: _203.QueryContractInfoResponse): _203.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _203.QueryContractInfoResponseProtoMsg): _203.QueryContractInfoResponse;
                toProto(message: _203.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _203.QueryContractInfoResponse): _203.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _203.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryContractHistoryRequest;
                fromJSON(object: any): _203.QueryContractHistoryRequest;
                toJSON(message: _203.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_203.QueryContractHistoryRequest>): _203.QueryContractHistoryRequest;
                fromAmino(object: _203.QueryContractHistoryRequestAmino): _203.QueryContractHistoryRequest;
                toAmino(message: _203.QueryContractHistoryRequest): _203.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _203.QueryContractHistoryRequestAminoMsg): _203.QueryContractHistoryRequest;
                toAminoMsg(message: _203.QueryContractHistoryRequest): _203.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _203.QueryContractHistoryRequestProtoMsg): _203.QueryContractHistoryRequest;
                toProto(message: _203.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _203.QueryContractHistoryRequest): _203.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _203.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryContractHistoryResponse;
                fromJSON(object: any): _203.QueryContractHistoryResponse;
                toJSON(message: _203.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_203.QueryContractHistoryResponse>): _203.QueryContractHistoryResponse;
                fromAmino(object: _203.QueryContractHistoryResponseAmino): _203.QueryContractHistoryResponse;
                toAmino(message: _203.QueryContractHistoryResponse): _203.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _203.QueryContractHistoryResponseAminoMsg): _203.QueryContractHistoryResponse;
                toAminoMsg(message: _203.QueryContractHistoryResponse): _203.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _203.QueryContractHistoryResponseProtoMsg): _203.QueryContractHistoryResponse;
                toProto(message: _203.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _203.QueryContractHistoryResponse): _203.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _203.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryContractsByCodeRequest;
                fromJSON(object: any): _203.QueryContractsByCodeRequest;
                toJSON(message: _203.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_203.QueryContractsByCodeRequest>): _203.QueryContractsByCodeRequest;
                fromAmino(object: _203.QueryContractsByCodeRequestAmino): _203.QueryContractsByCodeRequest;
                toAmino(message: _203.QueryContractsByCodeRequest): _203.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _203.QueryContractsByCodeRequestAminoMsg): _203.QueryContractsByCodeRequest;
                toAminoMsg(message: _203.QueryContractsByCodeRequest): _203.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _203.QueryContractsByCodeRequestProtoMsg): _203.QueryContractsByCodeRequest;
                toProto(message: _203.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _203.QueryContractsByCodeRequest): _203.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _203.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryContractsByCodeResponse;
                fromJSON(object: any): _203.QueryContractsByCodeResponse;
                toJSON(message: _203.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_203.QueryContractsByCodeResponse>): _203.QueryContractsByCodeResponse;
                fromAmino(object: _203.QueryContractsByCodeResponseAmino): _203.QueryContractsByCodeResponse;
                toAmino(message: _203.QueryContractsByCodeResponse): _203.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _203.QueryContractsByCodeResponseAminoMsg): _203.QueryContractsByCodeResponse;
                toAminoMsg(message: _203.QueryContractsByCodeResponse): _203.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _203.QueryContractsByCodeResponseProtoMsg): _203.QueryContractsByCodeResponse;
                toProto(message: _203.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _203.QueryContractsByCodeResponse): _203.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _203.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAllContractStateRequest;
                fromJSON(object: any): _203.QueryAllContractStateRequest;
                toJSON(message: _203.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_203.QueryAllContractStateRequest>): _203.QueryAllContractStateRequest;
                fromAmino(object: _203.QueryAllContractStateRequestAmino): _203.QueryAllContractStateRequest;
                toAmino(message: _203.QueryAllContractStateRequest): _203.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _203.QueryAllContractStateRequestAminoMsg): _203.QueryAllContractStateRequest;
                toAminoMsg(message: _203.QueryAllContractStateRequest): _203.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _203.QueryAllContractStateRequestProtoMsg): _203.QueryAllContractStateRequest;
                toProto(message: _203.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _203.QueryAllContractStateRequest): _203.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _203.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryAllContractStateResponse;
                fromJSON(object: any): _203.QueryAllContractStateResponse;
                toJSON(message: _203.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_203.QueryAllContractStateResponse>): _203.QueryAllContractStateResponse;
                fromAmino(object: _203.QueryAllContractStateResponseAmino): _203.QueryAllContractStateResponse;
                toAmino(message: _203.QueryAllContractStateResponse): _203.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _203.QueryAllContractStateResponseAminoMsg): _203.QueryAllContractStateResponse;
                toAminoMsg(message: _203.QueryAllContractStateResponse): _203.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _203.QueryAllContractStateResponseProtoMsg): _203.QueryAllContractStateResponse;
                toProto(message: _203.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _203.QueryAllContractStateResponse): _203.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _203.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryRawContractStateRequest;
                fromJSON(object: any): _203.QueryRawContractStateRequest;
                toJSON(message: _203.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_203.QueryRawContractStateRequest>): _203.QueryRawContractStateRequest;
                fromAmino(object: _203.QueryRawContractStateRequestAmino): _203.QueryRawContractStateRequest;
                toAmino(message: _203.QueryRawContractStateRequest): _203.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _203.QueryRawContractStateRequestAminoMsg): _203.QueryRawContractStateRequest;
                toAminoMsg(message: _203.QueryRawContractStateRequest): _203.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _203.QueryRawContractStateRequestProtoMsg): _203.QueryRawContractStateRequest;
                toProto(message: _203.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _203.QueryRawContractStateRequest): _203.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _203.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryRawContractStateResponse;
                fromJSON(object: any): _203.QueryRawContractStateResponse;
                toJSON(message: _203.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_203.QueryRawContractStateResponse>): _203.QueryRawContractStateResponse;
                fromAmino(object: _203.QueryRawContractStateResponseAmino): _203.QueryRawContractStateResponse;
                toAmino(message: _203.QueryRawContractStateResponse): _203.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _203.QueryRawContractStateResponseAminoMsg): _203.QueryRawContractStateResponse;
                toAminoMsg(message: _203.QueryRawContractStateResponse): _203.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _203.QueryRawContractStateResponseProtoMsg): _203.QueryRawContractStateResponse;
                toProto(message: _203.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _203.QueryRawContractStateResponse): _203.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _203.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QuerySmartContractStateRequest;
                fromJSON(object: any): _203.QuerySmartContractStateRequest;
                toJSON(message: _203.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_203.QuerySmartContractStateRequest>): _203.QuerySmartContractStateRequest;
                fromAmino(object: _203.QuerySmartContractStateRequestAmino): _203.QuerySmartContractStateRequest;
                toAmino(message: _203.QuerySmartContractStateRequest): _203.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _203.QuerySmartContractStateRequestAminoMsg): _203.QuerySmartContractStateRequest;
                toAminoMsg(message: _203.QuerySmartContractStateRequest): _203.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _203.QuerySmartContractStateRequestProtoMsg): _203.QuerySmartContractStateRequest;
                toProto(message: _203.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _203.QuerySmartContractStateRequest): _203.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _203.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QuerySmartContractStateResponse;
                fromJSON(object: any): _203.QuerySmartContractStateResponse;
                toJSON(message: _203.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_203.QuerySmartContractStateResponse>): _203.QuerySmartContractStateResponse;
                fromAmino(object: _203.QuerySmartContractStateResponseAmino): _203.QuerySmartContractStateResponse;
                toAmino(message: _203.QuerySmartContractStateResponse): _203.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _203.QuerySmartContractStateResponseAminoMsg): _203.QuerySmartContractStateResponse;
                toAminoMsg(message: _203.QuerySmartContractStateResponse): _203.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _203.QuerySmartContractStateResponseProtoMsg): _203.QuerySmartContractStateResponse;
                toProto(message: _203.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _203.QuerySmartContractStateResponse): _203.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _203.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryCodeRequest;
                fromJSON(object: any): _203.QueryCodeRequest;
                toJSON(message: _203.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_203.QueryCodeRequest>): _203.QueryCodeRequest;
                fromAmino(object: _203.QueryCodeRequestAmino): _203.QueryCodeRequest;
                toAmino(message: _203.QueryCodeRequest): _203.QueryCodeRequestAmino;
                fromAminoMsg(object: _203.QueryCodeRequestAminoMsg): _203.QueryCodeRequest;
                toAminoMsg(message: _203.QueryCodeRequest): _203.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _203.QueryCodeRequestProtoMsg): _203.QueryCodeRequest;
                toProto(message: _203.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _203.QueryCodeRequest): _203.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _203.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.CodeInfoResponse;
                fromJSON(object: any): _203.CodeInfoResponse;
                toJSON(message: _203.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_203.CodeInfoResponse>): _203.CodeInfoResponse;
                fromAmino(object: _203.CodeInfoResponseAmino): _203.CodeInfoResponse;
                toAmino(message: _203.CodeInfoResponse): _203.CodeInfoResponseAmino;
                fromAminoMsg(object: _203.CodeInfoResponseAminoMsg): _203.CodeInfoResponse;
                toAminoMsg(message: _203.CodeInfoResponse): _203.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _203.CodeInfoResponseProtoMsg): _203.CodeInfoResponse;
                toProto(message: _203.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _203.CodeInfoResponse): _203.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _203.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryCodeResponse;
                fromJSON(object: any): _203.QueryCodeResponse;
                toJSON(message: _203.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_203.QueryCodeResponse>): _203.QueryCodeResponse;
                fromAmino(object: _203.QueryCodeResponseAmino): _203.QueryCodeResponse;
                toAmino(message: _203.QueryCodeResponse): _203.QueryCodeResponseAmino;
                fromAminoMsg(object: _203.QueryCodeResponseAminoMsg): _203.QueryCodeResponse;
                toAminoMsg(message: _203.QueryCodeResponse): _203.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _203.QueryCodeResponseProtoMsg): _203.QueryCodeResponse;
                toProto(message: _203.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _203.QueryCodeResponse): _203.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _203.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryCodesRequest;
                fromJSON(object: any): _203.QueryCodesRequest;
                toJSON(message: _203.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_203.QueryCodesRequest>): _203.QueryCodesRequest;
                fromAmino(object: _203.QueryCodesRequestAmino): _203.QueryCodesRequest;
                toAmino(message: _203.QueryCodesRequest): _203.QueryCodesRequestAmino;
                fromAminoMsg(object: _203.QueryCodesRequestAminoMsg): _203.QueryCodesRequest;
                toAminoMsg(message: _203.QueryCodesRequest): _203.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _203.QueryCodesRequestProtoMsg): _203.QueryCodesRequest;
                toProto(message: _203.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _203.QueryCodesRequest): _203.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _203.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryCodesResponse;
                fromJSON(object: any): _203.QueryCodesResponse;
                toJSON(message: _203.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_203.QueryCodesResponse>): _203.QueryCodesResponse;
                fromAmino(object: _203.QueryCodesResponseAmino): _203.QueryCodesResponse;
                toAmino(message: _203.QueryCodesResponse): _203.QueryCodesResponseAmino;
                fromAminoMsg(object: _203.QueryCodesResponseAminoMsg): _203.QueryCodesResponse;
                toAminoMsg(message: _203.QueryCodesResponse): _203.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _203.QueryCodesResponseProtoMsg): _203.QueryCodesResponse;
                toProto(message: _203.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _203.QueryCodesResponse): _203.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _203.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryPinnedCodesRequest;
                fromJSON(object: any): _203.QueryPinnedCodesRequest;
                toJSON(message: _203.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_203.QueryPinnedCodesRequest>): _203.QueryPinnedCodesRequest;
                fromAmino(object: _203.QueryPinnedCodesRequestAmino): _203.QueryPinnedCodesRequest;
                toAmino(message: _203.QueryPinnedCodesRequest): _203.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _203.QueryPinnedCodesRequestAminoMsg): _203.QueryPinnedCodesRequest;
                toAminoMsg(message: _203.QueryPinnedCodesRequest): _203.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _203.QueryPinnedCodesRequestProtoMsg): _203.QueryPinnedCodesRequest;
                toProto(message: _203.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _203.QueryPinnedCodesRequest): _203.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _203.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryPinnedCodesResponse;
                fromJSON(object: any): _203.QueryPinnedCodesResponse;
                toJSON(message: _203.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_203.QueryPinnedCodesResponse>): _203.QueryPinnedCodesResponse;
                fromAmino(object: _203.QueryPinnedCodesResponseAmino): _203.QueryPinnedCodesResponse;
                toAmino(message: _203.QueryPinnedCodesResponse): _203.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _203.QueryPinnedCodesResponseAminoMsg): _203.QueryPinnedCodesResponse;
                toAminoMsg(message: _203.QueryPinnedCodesResponse): _203.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _203.QueryPinnedCodesResponseProtoMsg): _203.QueryPinnedCodesResponse;
                toProto(message: _203.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _203.QueryPinnedCodesResponse): _203.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _203.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryParamsRequest;
                fromJSON(_: any): _203.QueryParamsRequest;
                toJSON(_: _203.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_203.QueryParamsRequest>): _203.QueryParamsRequest;
                fromAmino(_: _203.QueryParamsRequestAmino): _203.QueryParamsRequest;
                toAmino(_: _203.QueryParamsRequest): _203.QueryParamsRequestAmino;
                fromAminoMsg(object: _203.QueryParamsRequestAminoMsg): _203.QueryParamsRequest;
                toAminoMsg(message: _203.QueryParamsRequest): _203.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _203.QueryParamsRequestProtoMsg): _203.QueryParamsRequest;
                toProto(message: _203.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _203.QueryParamsRequest): _203.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _203.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryParamsResponse;
                fromJSON(object: any): _203.QueryParamsResponse;
                toJSON(message: _203.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_203.QueryParamsResponse>): _203.QueryParamsResponse;
                fromAmino(object: _203.QueryParamsResponseAmino): _203.QueryParamsResponse;
                toAmino(message: _203.QueryParamsResponse): _203.QueryParamsResponseAmino;
                fromAminoMsg(object: _203.QueryParamsResponseAminoMsg): _203.QueryParamsResponse;
                toAminoMsg(message: _203.QueryParamsResponse): _203.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _203.QueryParamsResponseProtoMsg): _203.QueryParamsResponse;
                toProto(message: _203.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _203.QueryParamsResponse): _203.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _203.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryContractsByCreatorRequest;
                fromJSON(object: any): _203.QueryContractsByCreatorRequest;
                toJSON(message: _203.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: Partial<_203.QueryContractsByCreatorRequest>): _203.QueryContractsByCreatorRequest;
                fromAmino(object: _203.QueryContractsByCreatorRequestAmino): _203.QueryContractsByCreatorRequest;
                toAmino(message: _203.QueryContractsByCreatorRequest): _203.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _203.QueryContractsByCreatorRequestAminoMsg): _203.QueryContractsByCreatorRequest;
                toAminoMsg(message: _203.QueryContractsByCreatorRequest): _203.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _203.QueryContractsByCreatorRequestProtoMsg): _203.QueryContractsByCreatorRequest;
                toProto(message: _203.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _203.QueryContractsByCreatorRequest): _203.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _203.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryContractsByCreatorResponse;
                fromJSON(object: any): _203.QueryContractsByCreatorResponse;
                toJSON(message: _203.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: Partial<_203.QueryContractsByCreatorResponse>): _203.QueryContractsByCreatorResponse;
                fromAmino(object: _203.QueryContractsByCreatorResponseAmino): _203.QueryContractsByCreatorResponse;
                toAmino(message: _203.QueryContractsByCreatorResponse): _203.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _203.QueryContractsByCreatorResponseAminoMsg): _203.QueryContractsByCreatorResponse;
                toAminoMsg(message: _203.QueryContractsByCreatorResponse): _203.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _203.QueryContractsByCreatorResponseProtoMsg): _203.QueryContractsByCreatorResponse;
                toProto(message: _203.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _203.QueryContractsByCreatorResponse): _203.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _202.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.StoreCodeProposal;
                fromJSON(object: any): _202.StoreCodeProposal;
                toJSON(message: _202.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_202.StoreCodeProposal>): _202.StoreCodeProposal;
                fromAmino(object: _202.StoreCodeProposalAmino): _202.StoreCodeProposal;
                toAmino(message: _202.StoreCodeProposal): _202.StoreCodeProposalAmino;
                fromAminoMsg(object: _202.StoreCodeProposalAminoMsg): _202.StoreCodeProposal;
                toAminoMsg(message: _202.StoreCodeProposal): _202.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _202.StoreCodeProposalProtoMsg): _202.StoreCodeProposal;
                toProto(message: _202.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _202.StoreCodeProposal): _202.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _202.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.InstantiateContractProposal;
                fromJSON(object: any): _202.InstantiateContractProposal;
                toJSON(message: _202.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_202.InstantiateContractProposal>): _202.InstantiateContractProposal;
                fromAmino(object: _202.InstantiateContractProposalAmino): _202.InstantiateContractProposal;
                toAmino(message: _202.InstantiateContractProposal): _202.InstantiateContractProposalAmino;
                fromAminoMsg(object: _202.InstantiateContractProposalAminoMsg): _202.InstantiateContractProposal;
                toAminoMsg(message: _202.InstantiateContractProposal): _202.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _202.InstantiateContractProposalProtoMsg): _202.InstantiateContractProposal;
                toProto(message: _202.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _202.InstantiateContractProposal): _202.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _202.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.InstantiateContract2Proposal;
                fromJSON(object: any): _202.InstantiateContract2Proposal;
                toJSON(message: _202.InstantiateContract2Proposal): unknown;
                fromPartial(object: Partial<_202.InstantiateContract2Proposal>): _202.InstantiateContract2Proposal;
                fromAmino(object: _202.InstantiateContract2ProposalAmino): _202.InstantiateContract2Proposal;
                toAmino(message: _202.InstantiateContract2Proposal): _202.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _202.InstantiateContract2ProposalAminoMsg): _202.InstantiateContract2Proposal;
                toAminoMsg(message: _202.InstantiateContract2Proposal): _202.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _202.InstantiateContract2ProposalProtoMsg): _202.InstantiateContract2Proposal;
                toProto(message: _202.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _202.InstantiateContract2Proposal): _202.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _202.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.MigrateContractProposal;
                fromJSON(object: any): _202.MigrateContractProposal;
                toJSON(message: _202.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_202.MigrateContractProposal>): _202.MigrateContractProposal;
                fromAmino(object: _202.MigrateContractProposalAmino): _202.MigrateContractProposal;
                toAmino(message: _202.MigrateContractProposal): _202.MigrateContractProposalAmino;
                fromAminoMsg(object: _202.MigrateContractProposalAminoMsg): _202.MigrateContractProposal;
                toAminoMsg(message: _202.MigrateContractProposal): _202.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _202.MigrateContractProposalProtoMsg): _202.MigrateContractProposal;
                toProto(message: _202.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _202.MigrateContractProposal): _202.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _202.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.SudoContractProposal;
                fromJSON(object: any): _202.SudoContractProposal;
                toJSON(message: _202.SudoContractProposal): unknown;
                fromPartial(object: Partial<_202.SudoContractProposal>): _202.SudoContractProposal;
                fromAmino(object: _202.SudoContractProposalAmino): _202.SudoContractProposal;
                toAmino(message: _202.SudoContractProposal): _202.SudoContractProposalAmino;
                fromAminoMsg(object: _202.SudoContractProposalAminoMsg): _202.SudoContractProposal;
                toAminoMsg(message: _202.SudoContractProposal): _202.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _202.SudoContractProposalProtoMsg): _202.SudoContractProposal;
                toProto(message: _202.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _202.SudoContractProposal): _202.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _202.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ExecuteContractProposal;
                fromJSON(object: any): _202.ExecuteContractProposal;
                toJSON(message: _202.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_202.ExecuteContractProposal>): _202.ExecuteContractProposal;
                fromAmino(object: _202.ExecuteContractProposalAmino): _202.ExecuteContractProposal;
                toAmino(message: _202.ExecuteContractProposal): _202.ExecuteContractProposalAmino;
                fromAminoMsg(object: _202.ExecuteContractProposalAminoMsg): _202.ExecuteContractProposal;
                toAminoMsg(message: _202.ExecuteContractProposal): _202.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _202.ExecuteContractProposalProtoMsg): _202.ExecuteContractProposal;
                toProto(message: _202.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _202.ExecuteContractProposal): _202.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _202.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.UpdateAdminProposal;
                fromJSON(object: any): _202.UpdateAdminProposal;
                toJSON(message: _202.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_202.UpdateAdminProposal>): _202.UpdateAdminProposal;
                fromAmino(object: _202.UpdateAdminProposalAmino): _202.UpdateAdminProposal;
                toAmino(message: _202.UpdateAdminProposal): _202.UpdateAdminProposalAmino;
                fromAminoMsg(object: _202.UpdateAdminProposalAminoMsg): _202.UpdateAdminProposal;
                toAminoMsg(message: _202.UpdateAdminProposal): _202.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _202.UpdateAdminProposalProtoMsg): _202.UpdateAdminProposal;
                toProto(message: _202.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _202.UpdateAdminProposal): _202.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _202.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ClearAdminProposal;
                fromJSON(object: any): _202.ClearAdminProposal;
                toJSON(message: _202.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_202.ClearAdminProposal>): _202.ClearAdminProposal;
                fromAmino(object: _202.ClearAdminProposalAmino): _202.ClearAdminProposal;
                toAmino(message: _202.ClearAdminProposal): _202.ClearAdminProposalAmino;
                fromAminoMsg(object: _202.ClearAdminProposalAminoMsg): _202.ClearAdminProposal;
                toAminoMsg(message: _202.ClearAdminProposal): _202.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _202.ClearAdminProposalProtoMsg): _202.ClearAdminProposal;
                toProto(message: _202.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _202.ClearAdminProposal): _202.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _202.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.PinCodesProposal;
                fromJSON(object: any): _202.PinCodesProposal;
                toJSON(message: _202.PinCodesProposal): unknown;
                fromPartial(object: Partial<_202.PinCodesProposal>): _202.PinCodesProposal;
                fromAmino(object: _202.PinCodesProposalAmino): _202.PinCodesProposal;
                toAmino(message: _202.PinCodesProposal): _202.PinCodesProposalAmino;
                fromAminoMsg(object: _202.PinCodesProposalAminoMsg): _202.PinCodesProposal;
                toAminoMsg(message: _202.PinCodesProposal): _202.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _202.PinCodesProposalProtoMsg): _202.PinCodesProposal;
                toProto(message: _202.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _202.PinCodesProposal): _202.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _202.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.UnpinCodesProposal;
                fromJSON(object: any): _202.UnpinCodesProposal;
                toJSON(message: _202.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_202.UnpinCodesProposal>): _202.UnpinCodesProposal;
                fromAmino(object: _202.UnpinCodesProposalAmino): _202.UnpinCodesProposal;
                toAmino(message: _202.UnpinCodesProposal): _202.UnpinCodesProposalAmino;
                fromAminoMsg(object: _202.UnpinCodesProposalAminoMsg): _202.UnpinCodesProposal;
                toAminoMsg(message: _202.UnpinCodesProposal): _202.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _202.UnpinCodesProposalProtoMsg): _202.UnpinCodesProposal;
                toProto(message: _202.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _202.UnpinCodesProposal): _202.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _202.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.AccessConfigUpdate;
                fromJSON(object: any): _202.AccessConfigUpdate;
                toJSON(message: _202.AccessConfigUpdate): unknown;
                fromPartial(object: Partial<_202.AccessConfigUpdate>): _202.AccessConfigUpdate;
                fromAmino(object: _202.AccessConfigUpdateAmino): _202.AccessConfigUpdate;
                toAmino(message: _202.AccessConfigUpdate): _202.AccessConfigUpdateAmino;
                fromAminoMsg(object: _202.AccessConfigUpdateAminoMsg): _202.AccessConfigUpdate;
                toAminoMsg(message: _202.AccessConfigUpdate): _202.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _202.AccessConfigUpdateProtoMsg): _202.AccessConfigUpdate;
                toProto(message: _202.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _202.AccessConfigUpdate): _202.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _202.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _202.UpdateInstantiateConfigProposal;
                toJSON(message: _202.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: Partial<_202.UpdateInstantiateConfigProposal>): _202.UpdateInstantiateConfigProposal;
                fromAmino(object: _202.UpdateInstantiateConfigProposalAmino): _202.UpdateInstantiateConfigProposal;
                toAmino(message: _202.UpdateInstantiateConfigProposal): _202.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _202.UpdateInstantiateConfigProposalAminoMsg): _202.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _202.UpdateInstantiateConfigProposal): _202.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _202.UpdateInstantiateConfigProposalProtoMsg): _202.UpdateInstantiateConfigProposal;
                toProto(message: _202.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _202.UpdateInstantiateConfigProposal): _202.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _202.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _202.StoreAndInstantiateContractProposal;
                toJSON(message: _202.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: Partial<_202.StoreAndInstantiateContractProposal>): _202.StoreAndInstantiateContractProposal;
                fromAmino(object: _202.StoreAndInstantiateContractProposalAmino): _202.StoreAndInstantiateContractProposal;
                toAmino(message: _202.StoreAndInstantiateContractProposal): _202.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _202.StoreAndInstantiateContractProposalAminoMsg): _202.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _202.StoreAndInstantiateContractProposal): _202.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _202.StoreAndInstantiateContractProposalProtoMsg): _202.StoreAndInstantiateContractProposal;
                toProto(message: _202.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _202.StoreAndInstantiateContractProposal): _202.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _201.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.MsgIBCSend;
                fromJSON(object: any): _201.MsgIBCSend;
                toJSON(message: _201.MsgIBCSend): unknown;
                fromPartial(object: Partial<_201.MsgIBCSend>): _201.MsgIBCSend;
                fromAmino(object: _201.MsgIBCSendAmino): _201.MsgIBCSend;
                toAmino(message: _201.MsgIBCSend): _201.MsgIBCSendAmino;
                fromAminoMsg(object: _201.MsgIBCSendAminoMsg): _201.MsgIBCSend;
                toAminoMsg(message: _201.MsgIBCSend): _201.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _201.MsgIBCSendProtoMsg): _201.MsgIBCSend;
                toProto(message: _201.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _201.MsgIBCSend): _201.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _201.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.MsgIBCSendResponse;
                fromJSON(object: any): _201.MsgIBCSendResponse;
                toJSON(message: _201.MsgIBCSendResponse): unknown;
                fromPartial(object: Partial<_201.MsgIBCSendResponse>): _201.MsgIBCSendResponse;
                fromAmino(object: _201.MsgIBCSendResponseAmino): _201.MsgIBCSendResponse;
                toAmino(message: _201.MsgIBCSendResponse): _201.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _201.MsgIBCSendResponseAminoMsg): _201.MsgIBCSendResponse;
                toAminoMsg(message: _201.MsgIBCSendResponse): _201.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _201.MsgIBCSendResponseProtoMsg): _201.MsgIBCSendResponse;
                toProto(message: _201.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _201.MsgIBCSendResponse): _201.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _201.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.MsgIBCCloseChannel;
                fromJSON(object: any): _201.MsgIBCCloseChannel;
                toJSON(message: _201.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_201.MsgIBCCloseChannel>): _201.MsgIBCCloseChannel;
                fromAmino(object: _201.MsgIBCCloseChannelAmino): _201.MsgIBCCloseChannel;
                toAmino(message: _201.MsgIBCCloseChannel): _201.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _201.MsgIBCCloseChannelAminoMsg): _201.MsgIBCCloseChannel;
                toAminoMsg(message: _201.MsgIBCCloseChannel): _201.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _201.MsgIBCCloseChannelProtoMsg): _201.MsgIBCCloseChannel;
                toProto(message: _201.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _201.MsgIBCCloseChannel): _201.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _200.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.GenesisState;
                fromJSON(object: any): _200.GenesisState;
                toJSON(message: _200.GenesisState): unknown;
                fromPartial(object: Partial<_200.GenesisState>): _200.GenesisState;
                fromAmino(object: _200.GenesisStateAmino): _200.GenesisState;
                toAmino(message: _200.GenesisState): _200.GenesisStateAmino;
                fromAminoMsg(object: _200.GenesisStateAminoMsg): _200.GenesisState;
                toAminoMsg(message: _200.GenesisState): _200.GenesisStateAminoMsg;
                fromProtoMsg(message: _200.GenesisStateProtoMsg): _200.GenesisState;
                toProto(message: _200.GenesisState): Uint8Array;
                toProtoMsg(message: _200.GenesisState): _200.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _200.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Code;
                fromJSON(object: any): _200.Code;
                toJSON(message: _200.Code): unknown;
                fromPartial(object: Partial<_200.Code>): _200.Code;
                fromAmino(object: _200.CodeAmino): _200.Code;
                toAmino(message: _200.Code): _200.CodeAmino;
                fromAminoMsg(object: _200.CodeAminoMsg): _200.Code;
                toAminoMsg(message: _200.Code): _200.CodeAminoMsg;
                fromProtoMsg(message: _200.CodeProtoMsg): _200.Code;
                toProto(message: _200.Code): Uint8Array;
                toProtoMsg(message: _200.Code): _200.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _200.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Contract;
                fromJSON(object: any): _200.Contract;
                toJSON(message: _200.Contract): unknown;
                fromPartial(object: Partial<_200.Contract>): _200.Contract;
                fromAmino(object: _200.ContractAmino): _200.Contract;
                toAmino(message: _200.Contract): _200.ContractAmino;
                fromAminoMsg(object: _200.ContractAminoMsg): _200.Contract;
                toAminoMsg(message: _200.Contract): _200.ContractAminoMsg;
                fromProtoMsg(message: _200.ContractProtoMsg): _200.Contract;
                toProto(message: _200.Contract): Uint8Array;
                toProtoMsg(message: _200.Contract): _200.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _200.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Sequence;
                fromJSON(object: any): _200.Sequence;
                toJSON(message: _200.Sequence): unknown;
                fromPartial(object: Partial<_200.Sequence>): _200.Sequence;
                fromAmino(object: _200.SequenceAmino): _200.Sequence;
                toAmino(message: _200.Sequence): _200.SequenceAmino;
                fromAminoMsg(object: _200.SequenceAminoMsg): _200.Sequence;
                toAminoMsg(message: _200.Sequence): _200.SequenceAminoMsg;
                fromProtoMsg(message: _200.SequenceProtoMsg): _200.Sequence;
                toProto(message: _200.Sequence): Uint8Array;
                toProtoMsg(message: _200.Sequence): _200.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _199.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ContractExecutionAuthorization;
                fromJSON(object: any): _199.ContractExecutionAuthorization;
                toJSON(message: _199.ContractExecutionAuthorization): unknown;
                fromPartial(object: Partial<_199.ContractExecutionAuthorization>): _199.ContractExecutionAuthorization;
                fromAmino(object: _199.ContractExecutionAuthorizationAmino): _199.ContractExecutionAuthorization;
                toAmino(message: _199.ContractExecutionAuthorization): _199.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _199.ContractExecutionAuthorizationAminoMsg): _199.ContractExecutionAuthorization;
                toAminoMsg(message: _199.ContractExecutionAuthorization): _199.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _199.ContractExecutionAuthorizationProtoMsg): _199.ContractExecutionAuthorization;
                toProto(message: _199.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _199.ContractExecutionAuthorization): _199.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _199.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ContractMigrationAuthorization;
                fromJSON(object: any): _199.ContractMigrationAuthorization;
                toJSON(message: _199.ContractMigrationAuthorization): unknown;
                fromPartial(object: Partial<_199.ContractMigrationAuthorization>): _199.ContractMigrationAuthorization;
                fromAmino(object: _199.ContractMigrationAuthorizationAmino): _199.ContractMigrationAuthorization;
                toAmino(message: _199.ContractMigrationAuthorization): _199.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _199.ContractMigrationAuthorizationAminoMsg): _199.ContractMigrationAuthorization;
                toAminoMsg(message: _199.ContractMigrationAuthorization): _199.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _199.ContractMigrationAuthorizationProtoMsg): _199.ContractMigrationAuthorization;
                toProto(message: _199.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _199.ContractMigrationAuthorization): _199.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _199.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.ContractGrant;
                fromJSON(object: any): _199.ContractGrant;
                toJSON(message: _199.ContractGrant): unknown;
                fromPartial(object: Partial<_199.ContractGrant>): _199.ContractGrant;
                fromAmino(object: _199.ContractGrantAmino): _199.ContractGrant;
                toAmino(message: _199.ContractGrant): _199.ContractGrantAmino;
                fromAminoMsg(object: _199.ContractGrantAminoMsg): _199.ContractGrant;
                toAminoMsg(message: _199.ContractGrant): _199.ContractGrantAminoMsg;
                fromProtoMsg(message: _199.ContractGrantProtoMsg): _199.ContractGrant;
                toProto(message: _199.ContractGrant): Uint8Array;
                toProtoMsg(message: _199.ContractGrant): _199.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _199.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MaxCallsLimit;
                fromJSON(object: any): _199.MaxCallsLimit;
                toJSON(message: _199.MaxCallsLimit): unknown;
                fromPartial(object: Partial<_199.MaxCallsLimit>): _199.MaxCallsLimit;
                fromAmino(object: _199.MaxCallsLimitAmino): _199.MaxCallsLimit;
                toAmino(message: _199.MaxCallsLimit): _199.MaxCallsLimitAmino;
                fromAminoMsg(object: _199.MaxCallsLimitAminoMsg): _199.MaxCallsLimit;
                toAminoMsg(message: _199.MaxCallsLimit): _199.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _199.MaxCallsLimitProtoMsg): _199.MaxCallsLimit;
                toProto(message: _199.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _199.MaxCallsLimit): _199.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _199.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.MaxFundsLimit;
                fromJSON(object: any): _199.MaxFundsLimit;
                toJSON(message: _199.MaxFundsLimit): unknown;
                fromPartial(object: Partial<_199.MaxFundsLimit>): _199.MaxFundsLimit;
                fromAmino(object: _199.MaxFundsLimitAmino): _199.MaxFundsLimit;
                toAmino(message: _199.MaxFundsLimit): _199.MaxFundsLimitAmino;
                fromAminoMsg(object: _199.MaxFundsLimitAminoMsg): _199.MaxFundsLimit;
                toAminoMsg(message: _199.MaxFundsLimit): _199.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _199.MaxFundsLimitProtoMsg): _199.MaxFundsLimit;
                toProto(message: _199.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _199.MaxFundsLimit): _199.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _199.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.CombinedLimit;
                fromJSON(object: any): _199.CombinedLimit;
                toJSON(message: _199.CombinedLimit): unknown;
                fromPartial(object: Partial<_199.CombinedLimit>): _199.CombinedLimit;
                fromAmino(object: _199.CombinedLimitAmino): _199.CombinedLimit;
                toAmino(message: _199.CombinedLimit): _199.CombinedLimitAmino;
                fromAminoMsg(object: _199.CombinedLimitAminoMsg): _199.CombinedLimit;
                toAminoMsg(message: _199.CombinedLimit): _199.CombinedLimitAminoMsg;
                fromProtoMsg(message: _199.CombinedLimitProtoMsg): _199.CombinedLimit;
                toProto(message: _199.CombinedLimit): Uint8Array;
                toProtoMsg(message: _199.CombinedLimit): _199.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _199.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AllowAllMessagesFilter;
                fromJSON(_: any): _199.AllowAllMessagesFilter;
                toJSON(_: _199.AllowAllMessagesFilter): unknown;
                fromPartial(_: Partial<_199.AllowAllMessagesFilter>): _199.AllowAllMessagesFilter;
                fromAmino(_: _199.AllowAllMessagesFilterAmino): _199.AllowAllMessagesFilter;
                toAmino(_: _199.AllowAllMessagesFilter): _199.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _199.AllowAllMessagesFilterAminoMsg): _199.AllowAllMessagesFilter;
                toAminoMsg(message: _199.AllowAllMessagesFilter): _199.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _199.AllowAllMessagesFilterProtoMsg): _199.AllowAllMessagesFilter;
                toProto(message: _199.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _199.AllowAllMessagesFilter): _199.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _199.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AcceptedMessageKeysFilter;
                fromJSON(object: any): _199.AcceptedMessageKeysFilter;
                toJSON(message: _199.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: Partial<_199.AcceptedMessageKeysFilter>): _199.AcceptedMessageKeysFilter;
                fromAmino(object: _199.AcceptedMessageKeysFilterAmino): _199.AcceptedMessageKeysFilter;
                toAmino(message: _199.AcceptedMessageKeysFilter): _199.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _199.AcceptedMessageKeysFilterAminoMsg): _199.AcceptedMessageKeysFilter;
                toAminoMsg(message: _199.AcceptedMessageKeysFilter): _199.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _199.AcceptedMessageKeysFilterProtoMsg): _199.AcceptedMessageKeysFilter;
                toProto(message: _199.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _199.AcceptedMessageKeysFilter): _199.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _199.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AcceptedMessagesFilter;
                fromJSON(object: any): _199.AcceptedMessagesFilter;
                toJSON(message: _199.AcceptedMessagesFilter): unknown;
                fromPartial(object: Partial<_199.AcceptedMessagesFilter>): _199.AcceptedMessagesFilter;
                fromAmino(object: _199.AcceptedMessagesFilterAmino): _199.AcceptedMessagesFilter;
                toAmino(message: _199.AcceptedMessagesFilter): _199.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _199.AcceptedMessagesFilterAminoMsg): _199.AcceptedMessagesFilter;
                toAminoMsg(message: _199.AcceptedMessagesFilter): _199.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _199.AcceptedMessagesFilterProtoMsg): _199.AcceptedMessagesFilter;
                toProto(message: _199.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _199.AcceptedMessagesFilter): _199.AcceptedMessagesFilterProtoMsg;
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
            cosmwasm: {
                wasm: {
                    v1: _343.MsgClientImpl;
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
            cosmwasm: {
                wasm: {
                    v1: {
                        contractInfo(request: _203.QueryContractInfoRequest): Promise<_203.QueryContractInfoResponse>;
                        contractHistory(request: _203.QueryContractHistoryRequest): Promise<_203.QueryContractHistoryResponse>;
                        contractsByCode(request: _203.QueryContractsByCodeRequest): Promise<_203.QueryContractsByCodeResponse>;
                        allContractState(request: _203.QueryAllContractStateRequest): Promise<_203.QueryAllContractStateResponse>;
                        rawContractState(request: _203.QueryRawContractStateRequest): Promise<_203.QueryRawContractStateResponse>;
                        smartContractState(request: _203.QuerySmartContractStateRequest): Promise<_203.QuerySmartContractStateResponse>;
                        code(request: _203.QueryCodeRequest): Promise<_203.QueryCodeResponse>;
                        codes(request?: _203.QueryCodesRequest): Promise<_203.QueryCodesResponse>;
                        pinnedCodes(request?: _203.QueryPinnedCodesRequest): Promise<_203.QueryPinnedCodesResponse>;
                        params(request?: _203.QueryParamsRequest): Promise<_203.QueryParamsResponse>;
                        contractsByCreator(request: _203.QueryContractsByCreatorRequest): Promise<_203.QueryContractsByCreatorResponse>;
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
            cosmwasm: {
                wasm: {
                    v1: _341.LCDQueryClient;
                };
            };
        }>;
    };
}
