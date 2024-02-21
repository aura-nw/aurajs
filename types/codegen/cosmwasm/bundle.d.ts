import * as _214 from "./wasm/v1/authz";
import * as _215 from "./wasm/v1/genesis";
import * as _216 from "./wasm/v1/ibc";
import * as _217 from "./wasm/v1/proposal";
import * as _218 from "./wasm/v1/query";
import * as _219 from "./wasm/v1/tx";
import * as _220 from "./wasm/v1/types";
import * as _366 from "./wasm/v1/query.lcd";
import * as _367 from "./wasm/v1/query.rpc.Query";
import * as _368 from "./wasm/v1/tx.rpc.msg";
export declare namespace cosmwasm {
    namespace wasm {
        const v1: {
            MsgClientImpl: typeof _368.MsgClientImpl;
            QueryClientImpl: typeof _367.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                contractInfo(request: _218.QueryContractInfoRequest): Promise<_218.QueryContractInfoResponse>;
                contractHistory(request: _218.QueryContractHistoryRequest): Promise<_218.QueryContractHistoryResponse>;
                contractsByCode(request: _218.QueryContractsByCodeRequest): Promise<_218.QueryContractsByCodeResponse>;
                allContractState(request: _218.QueryAllContractStateRequest): Promise<_218.QueryAllContractStateResponse>;
                rawContractState(request: _218.QueryRawContractStateRequest): Promise<_218.QueryRawContractStateResponse>;
                smartContractState(request: _218.QuerySmartContractStateRequest): Promise<_218.QuerySmartContractStateResponse>;
                code(request: _218.QueryCodeRequest): Promise<_218.QueryCodeResponse>;
                codes(request?: _218.QueryCodesRequest): Promise<_218.QueryCodesResponse>;
                pinnedCodes(request?: _218.QueryPinnedCodesRequest): Promise<_218.QueryPinnedCodesResponse>;
                params(request?: _218.QueryParamsRequest): Promise<_218.QueryParamsResponse>;
                contractsByCreator(request: _218.QueryContractsByCreatorRequest): Promise<_218.QueryContractsByCreatorResponse>;
            };
            LCDQueryClient: typeof _366.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    storeCode(value: _219.MsgStoreCode): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract(value: _219.MsgInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    instantiateContract2(value: _219.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    executeContract(value: _219.MsgExecuteContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    migrateContract(value: _219.MsgMigrateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateAdmin(value: _219.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    clearAdmin(value: _219.MsgClearAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateInstantiateConfig(value: _219.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _219.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    sudoContract(value: _219.MsgSudoContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    pinCodes(value: _219.MsgPinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unpinCodes(value: _219.MsgUnpinCodes): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    storeAndInstantiateContract(value: _219.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeCodeUploadParamsAddresses(value: _219.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addCodeUploadParamsAddresses(value: _219.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    storeCode(value: _219.MsgStoreCode): {
                        typeUrl: string;
                        value: _219.MsgStoreCode;
                    };
                    instantiateContract(value: _219.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _219.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _219.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _219.MsgInstantiateContract2;
                    };
                    executeContract(value: _219.MsgExecuteContract): {
                        typeUrl: string;
                        value: _219.MsgExecuteContract;
                    };
                    migrateContract(value: _219.MsgMigrateContract): {
                        typeUrl: string;
                        value: _219.MsgMigrateContract;
                    };
                    updateAdmin(value: _219.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _219.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _219.MsgClearAdmin): {
                        typeUrl: string;
                        value: _219.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _219.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _219.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _219.MsgUpdateParams): {
                        typeUrl: string;
                        value: _219.MsgUpdateParams;
                    };
                    sudoContract(value: _219.MsgSudoContract): {
                        typeUrl: string;
                        value: _219.MsgSudoContract;
                    };
                    pinCodes(value: _219.MsgPinCodes): {
                        typeUrl: string;
                        value: _219.MsgPinCodes;
                    };
                    unpinCodes(value: _219.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _219.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _219.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _219.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _219.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _219.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _219.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _219.MsgAddCodeUploadParamsAddresses;
                    };
                };
                toJSON: {
                    storeCode(value: _219.MsgStoreCode): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract(value: _219.MsgInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    instantiateContract2(value: _219.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: unknown;
                    };
                    executeContract(value: _219.MsgExecuteContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    migrateContract(value: _219.MsgMigrateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateAdmin(value: _219.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    clearAdmin(value: _219.MsgClearAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateInstantiateConfig(value: _219.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _219.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    sudoContract(value: _219.MsgSudoContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    pinCodes(value: _219.MsgPinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    unpinCodes(value: _219.MsgUnpinCodes): {
                        typeUrl: string;
                        value: unknown;
                    };
                    storeAndInstantiateContract(value: _219.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: unknown;
                    };
                    removeCodeUploadParamsAddresses(value: _219.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: unknown;
                    };
                    addCodeUploadParamsAddresses(value: _219.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    storeCode(value: any): {
                        typeUrl: string;
                        value: _219.MsgStoreCode;
                    };
                    instantiateContract(value: any): {
                        typeUrl: string;
                        value: _219.MsgInstantiateContract;
                    };
                    instantiateContract2(value: any): {
                        typeUrl: string;
                        value: _219.MsgInstantiateContract2;
                    };
                    executeContract(value: any): {
                        typeUrl: string;
                        value: _219.MsgExecuteContract;
                    };
                    migrateContract(value: any): {
                        typeUrl: string;
                        value: _219.MsgMigrateContract;
                    };
                    updateAdmin(value: any): {
                        typeUrl: string;
                        value: _219.MsgUpdateAdmin;
                    };
                    clearAdmin(value: any): {
                        typeUrl: string;
                        value: _219.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: any): {
                        typeUrl: string;
                        value: _219.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _219.MsgUpdateParams;
                    };
                    sudoContract(value: any): {
                        typeUrl: string;
                        value: _219.MsgSudoContract;
                    };
                    pinCodes(value: any): {
                        typeUrl: string;
                        value: _219.MsgPinCodes;
                    };
                    unpinCodes(value: any): {
                        typeUrl: string;
                        value: _219.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: any): {
                        typeUrl: string;
                        value: _219.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _219.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: any): {
                        typeUrl: string;
                        value: _219.MsgAddCodeUploadParamsAddresses;
                    };
                };
                fromPartial: {
                    storeCode(value: _219.MsgStoreCode): {
                        typeUrl: string;
                        value: _219.MsgStoreCode;
                    };
                    instantiateContract(value: _219.MsgInstantiateContract): {
                        typeUrl: string;
                        value: _219.MsgInstantiateContract;
                    };
                    instantiateContract2(value: _219.MsgInstantiateContract2): {
                        typeUrl: string;
                        value: _219.MsgInstantiateContract2;
                    };
                    executeContract(value: _219.MsgExecuteContract): {
                        typeUrl: string;
                        value: _219.MsgExecuteContract;
                    };
                    migrateContract(value: _219.MsgMigrateContract): {
                        typeUrl: string;
                        value: _219.MsgMigrateContract;
                    };
                    updateAdmin(value: _219.MsgUpdateAdmin): {
                        typeUrl: string;
                        value: _219.MsgUpdateAdmin;
                    };
                    clearAdmin(value: _219.MsgClearAdmin): {
                        typeUrl: string;
                        value: _219.MsgClearAdmin;
                    };
                    updateInstantiateConfig(value: _219.MsgUpdateInstantiateConfig): {
                        typeUrl: string;
                        value: _219.MsgUpdateInstantiateConfig;
                    };
                    updateParams(value: _219.MsgUpdateParams): {
                        typeUrl: string;
                        value: _219.MsgUpdateParams;
                    };
                    sudoContract(value: _219.MsgSudoContract): {
                        typeUrl: string;
                        value: _219.MsgSudoContract;
                    };
                    pinCodes(value: _219.MsgPinCodes): {
                        typeUrl: string;
                        value: _219.MsgPinCodes;
                    };
                    unpinCodes(value: _219.MsgUnpinCodes): {
                        typeUrl: string;
                        value: _219.MsgUnpinCodes;
                    };
                    storeAndInstantiateContract(value: _219.MsgStoreAndInstantiateContract): {
                        typeUrl: string;
                        value: _219.MsgStoreAndInstantiateContract;
                    };
                    removeCodeUploadParamsAddresses(value: _219.MsgRemoveCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _219.MsgRemoveCodeUploadParamsAddresses;
                    };
                    addCodeUploadParamsAddresses(value: _219.MsgAddCodeUploadParamsAddresses): {
                        typeUrl: string;
                        value: _219.MsgAddCodeUploadParamsAddresses;
                    };
                };
            };
            AminoConverter: {
                "/cosmwasm.wasm.v1.MsgStoreCode": {
                    aminoType: string;
                    toAmino: (message: _219.MsgStoreCode) => _219.MsgStoreCodeAmino;
                    fromAmino: (object: _219.MsgStoreCodeAmino) => _219.MsgStoreCode;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _219.MsgInstantiateContract) => _219.MsgInstantiateContractAmino;
                    fromAmino: (object: _219.MsgInstantiateContractAmino) => _219.MsgInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgInstantiateContract2": {
                    aminoType: string;
                    toAmino: (message: _219.MsgInstantiateContract2) => _219.MsgInstantiateContract2Amino;
                    fromAmino: (object: _219.MsgInstantiateContract2Amino) => _219.MsgInstantiateContract2;
                };
                "/cosmwasm.wasm.v1.MsgExecuteContract": {
                    aminoType: string;
                    toAmino: (message: _219.MsgExecuteContract) => _219.MsgExecuteContractAmino;
                    fromAmino: (object: _219.MsgExecuteContractAmino) => _219.MsgExecuteContract;
                };
                "/cosmwasm.wasm.v1.MsgMigrateContract": {
                    aminoType: string;
                    toAmino: (message: _219.MsgMigrateContract) => _219.MsgMigrateContractAmino;
                    fromAmino: (object: _219.MsgMigrateContractAmino) => _219.MsgMigrateContract;
                };
                "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
                    aminoType: string;
                    toAmino: (message: _219.MsgUpdateAdmin) => _219.MsgUpdateAdminAmino;
                    fromAmino: (object: _219.MsgUpdateAdminAmino) => _219.MsgUpdateAdmin;
                };
                "/cosmwasm.wasm.v1.MsgClearAdmin": {
                    aminoType: string;
                    toAmino: (message: _219.MsgClearAdmin) => _219.MsgClearAdminAmino;
                    fromAmino: (object: _219.MsgClearAdminAmino) => _219.MsgClearAdmin;
                };
                "/cosmwasm.wasm.v1.MsgUpdateInstantiateConfig": {
                    aminoType: string;
                    toAmino: (message: _219.MsgUpdateInstantiateConfig) => _219.MsgUpdateInstantiateConfigAmino;
                    fromAmino: (object: _219.MsgUpdateInstantiateConfigAmino) => _219.MsgUpdateInstantiateConfig;
                };
                "/cosmwasm.wasm.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _219.MsgUpdateParams) => _219.MsgUpdateParamsAmino;
                    fromAmino: (object: _219.MsgUpdateParamsAmino) => _219.MsgUpdateParams;
                };
                "/cosmwasm.wasm.v1.MsgSudoContract": {
                    aminoType: string;
                    toAmino: (message: _219.MsgSudoContract) => _219.MsgSudoContractAmino;
                    fromAmino: (object: _219.MsgSudoContractAmino) => _219.MsgSudoContract;
                };
                "/cosmwasm.wasm.v1.MsgPinCodes": {
                    aminoType: string;
                    toAmino: (message: _219.MsgPinCodes) => _219.MsgPinCodesAmino;
                    fromAmino: (object: _219.MsgPinCodesAmino) => _219.MsgPinCodes;
                };
                "/cosmwasm.wasm.v1.MsgUnpinCodes": {
                    aminoType: string;
                    toAmino: (message: _219.MsgUnpinCodes) => _219.MsgUnpinCodesAmino;
                    fromAmino: (object: _219.MsgUnpinCodesAmino) => _219.MsgUnpinCodes;
                };
                "/cosmwasm.wasm.v1.MsgStoreAndInstantiateContract": {
                    aminoType: string;
                    toAmino: (message: _219.MsgStoreAndInstantiateContract) => _219.MsgStoreAndInstantiateContractAmino;
                    fromAmino: (object: _219.MsgStoreAndInstantiateContractAmino) => _219.MsgStoreAndInstantiateContract;
                };
                "/cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _219.MsgRemoveCodeUploadParamsAddresses) => _219.MsgRemoveCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _219.MsgRemoveCodeUploadParamsAddressesAmino) => _219.MsgRemoveCodeUploadParamsAddresses;
                };
                "/cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses": {
                    aminoType: string;
                    toAmino: (message: _219.MsgAddCodeUploadParamsAddresses) => _219.MsgAddCodeUploadParamsAddressesAmino;
                    fromAmino: (object: _219.MsgAddCodeUploadParamsAddressesAmino) => _219.MsgAddCodeUploadParamsAddresses;
                };
            };
            accessTypeFromJSON(object: any): _220.AccessType;
            accessTypeToJSON(object: _220.AccessType): string;
            contractCodeHistoryOperationTypeFromJSON(object: any): _220.ContractCodeHistoryOperationType;
            contractCodeHistoryOperationTypeToJSON(object: _220.ContractCodeHistoryOperationType): string;
            AccessType: typeof _220.AccessType;
            AccessTypeSDKType: typeof _220.AccessType;
            AccessTypeAmino: typeof _220.AccessType;
            ContractCodeHistoryOperationType: typeof _220.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeSDKType: typeof _220.ContractCodeHistoryOperationType;
            ContractCodeHistoryOperationTypeAmino: typeof _220.ContractCodeHistoryOperationType;
            AccessTypeParam: {
                typeUrl: string;
                encode(message: _220.AccessTypeParam, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.AccessTypeParam;
                fromJSON(object: any): _220.AccessTypeParam;
                toJSON(message: _220.AccessTypeParam): unknown;
                fromPartial(object: Partial<_220.AccessTypeParam>): _220.AccessTypeParam;
                fromAmino(object: _220.AccessTypeParamAmino): _220.AccessTypeParam;
                toAmino(message: _220.AccessTypeParam): _220.AccessTypeParamAmino;
                fromAminoMsg(object: _220.AccessTypeParamAminoMsg): _220.AccessTypeParam;
                toAminoMsg(message: _220.AccessTypeParam): _220.AccessTypeParamAminoMsg;
                fromProtoMsg(message: _220.AccessTypeParamProtoMsg): _220.AccessTypeParam;
                toProto(message: _220.AccessTypeParam): Uint8Array;
                toProtoMsg(message: _220.AccessTypeParam): _220.AccessTypeParamProtoMsg;
            };
            AccessConfig: {
                typeUrl: string;
                encode(message: _220.AccessConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.AccessConfig;
                fromJSON(object: any): _220.AccessConfig;
                toJSON(message: _220.AccessConfig): unknown;
                fromPartial(object: Partial<_220.AccessConfig>): _220.AccessConfig;
                fromAmino(object: _220.AccessConfigAmino): _220.AccessConfig;
                toAmino(message: _220.AccessConfig): _220.AccessConfigAmino;
                fromAminoMsg(object: _220.AccessConfigAminoMsg): _220.AccessConfig;
                toAminoMsg(message: _220.AccessConfig): _220.AccessConfigAminoMsg;
                fromProtoMsg(message: _220.AccessConfigProtoMsg): _220.AccessConfig;
                toProto(message: _220.AccessConfig): Uint8Array;
                toProtoMsg(message: _220.AccessConfig): _220.AccessConfigProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _220.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Params;
                fromJSON(object: any): _220.Params;
                toJSON(message: _220.Params): unknown;
                fromPartial(object: Partial<_220.Params>): _220.Params;
                fromAmino(object: _220.ParamsAmino): _220.Params;
                toAmino(message: _220.Params): _220.ParamsAmino;
                fromAminoMsg(object: _220.ParamsAminoMsg): _220.Params;
                toAminoMsg(message: _220.Params): _220.ParamsAminoMsg;
                fromProtoMsg(message: _220.ParamsProtoMsg): _220.Params;
                toProto(message: _220.Params): Uint8Array;
                toProtoMsg(message: _220.Params): _220.ParamsProtoMsg;
            };
            CodeInfo: {
                typeUrl: string;
                encode(message: _220.CodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.CodeInfo;
                fromJSON(object: any): _220.CodeInfo;
                toJSON(message: _220.CodeInfo): unknown;
                fromPartial(object: Partial<_220.CodeInfo>): _220.CodeInfo;
                fromAmino(object: _220.CodeInfoAmino): _220.CodeInfo;
                toAmino(message: _220.CodeInfo): _220.CodeInfoAmino;
                fromAminoMsg(object: _220.CodeInfoAminoMsg): _220.CodeInfo;
                toAminoMsg(message: _220.CodeInfo): _220.CodeInfoAminoMsg;
                fromProtoMsg(message: _220.CodeInfoProtoMsg): _220.CodeInfo;
                toProto(message: _220.CodeInfo): Uint8Array;
                toProtoMsg(message: _220.CodeInfo): _220.CodeInfoProtoMsg;
            };
            ContractInfo: {
                typeUrl: string;
                encode(message: _220.ContractInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.ContractInfo;
                fromJSON(object: any): _220.ContractInfo;
                toJSON(message: _220.ContractInfo): unknown;
                fromPartial(object: Partial<_220.ContractInfo>): _220.ContractInfo;
                fromAmino(object: _220.ContractInfoAmino): _220.ContractInfo;
                toAmino(message: _220.ContractInfo): _220.ContractInfoAmino;
                fromAminoMsg(object: _220.ContractInfoAminoMsg): _220.ContractInfo;
                toAminoMsg(message: _220.ContractInfo): _220.ContractInfoAminoMsg;
                fromProtoMsg(message: _220.ContractInfoProtoMsg): _220.ContractInfo;
                toProto(message: _220.ContractInfo): Uint8Array;
                toProtoMsg(message: _220.ContractInfo): _220.ContractInfoProtoMsg;
            };
            ContractCodeHistoryEntry: {
                typeUrl: string;
                encode(message: _220.ContractCodeHistoryEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.ContractCodeHistoryEntry;
                fromJSON(object: any): _220.ContractCodeHistoryEntry;
                toJSON(message: _220.ContractCodeHistoryEntry): unknown;
                fromPartial(object: Partial<_220.ContractCodeHistoryEntry>): _220.ContractCodeHistoryEntry;
                fromAmino(object: _220.ContractCodeHistoryEntryAmino): _220.ContractCodeHistoryEntry;
                toAmino(message: _220.ContractCodeHistoryEntry): _220.ContractCodeHistoryEntryAmino;
                fromAminoMsg(object: _220.ContractCodeHistoryEntryAminoMsg): _220.ContractCodeHistoryEntry;
                toAminoMsg(message: _220.ContractCodeHistoryEntry): _220.ContractCodeHistoryEntryAminoMsg;
                fromProtoMsg(message: _220.ContractCodeHistoryEntryProtoMsg): _220.ContractCodeHistoryEntry;
                toProto(message: _220.ContractCodeHistoryEntry): Uint8Array;
                toProtoMsg(message: _220.ContractCodeHistoryEntry): _220.ContractCodeHistoryEntryProtoMsg;
            };
            AbsoluteTxPosition: {
                typeUrl: string;
                encode(message: _220.AbsoluteTxPosition, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.AbsoluteTxPosition;
                fromJSON(object: any): _220.AbsoluteTxPosition;
                toJSON(message: _220.AbsoluteTxPosition): unknown;
                fromPartial(object: Partial<_220.AbsoluteTxPosition>): _220.AbsoluteTxPosition;
                fromAmino(object: _220.AbsoluteTxPositionAmino): _220.AbsoluteTxPosition;
                toAmino(message: _220.AbsoluteTxPosition): _220.AbsoluteTxPositionAmino;
                fromAminoMsg(object: _220.AbsoluteTxPositionAminoMsg): _220.AbsoluteTxPosition;
                toAminoMsg(message: _220.AbsoluteTxPosition): _220.AbsoluteTxPositionAminoMsg;
                fromProtoMsg(message: _220.AbsoluteTxPositionProtoMsg): _220.AbsoluteTxPosition;
                toProto(message: _220.AbsoluteTxPosition): Uint8Array;
                toProtoMsg(message: _220.AbsoluteTxPosition): _220.AbsoluteTxPositionProtoMsg;
            };
            Model: {
                typeUrl: string;
                encode(message: _220.Model, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Model;
                fromJSON(object: any): _220.Model;
                toJSON(message: _220.Model): unknown;
                fromPartial(object: Partial<_220.Model>): _220.Model;
                fromAmino(object: _220.ModelAmino): _220.Model;
                toAmino(message: _220.Model): _220.ModelAmino;
                fromAminoMsg(object: _220.ModelAminoMsg): _220.Model;
                toAminoMsg(message: _220.Model): _220.ModelAminoMsg;
                fromProtoMsg(message: _220.ModelProtoMsg): _220.Model;
                toProto(message: _220.Model): Uint8Array;
                toProtoMsg(message: _220.Model): _220.ModelProtoMsg;
            };
            MsgStoreCode: {
                typeUrl: string;
                encode(message: _219.MsgStoreCode, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgStoreCode;
                fromJSON(object: any): _219.MsgStoreCode;
                toJSON(message: _219.MsgStoreCode): unknown;
                fromPartial(object: Partial<_219.MsgStoreCode>): _219.MsgStoreCode;
                fromAmino(object: _219.MsgStoreCodeAmino): _219.MsgStoreCode;
                toAmino(message: _219.MsgStoreCode): _219.MsgStoreCodeAmino;
                fromAminoMsg(object: _219.MsgStoreCodeAminoMsg): _219.MsgStoreCode;
                toAminoMsg(message: _219.MsgStoreCode): _219.MsgStoreCodeAminoMsg;
                fromProtoMsg(message: _219.MsgStoreCodeProtoMsg): _219.MsgStoreCode;
                toProto(message: _219.MsgStoreCode): Uint8Array;
                toProtoMsg(message: _219.MsgStoreCode): _219.MsgStoreCodeProtoMsg;
            };
            MsgStoreCodeResponse: {
                typeUrl: string;
                encode(message: _219.MsgStoreCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgStoreCodeResponse;
                fromJSON(object: any): _219.MsgStoreCodeResponse;
                toJSON(message: _219.MsgStoreCodeResponse): unknown;
                fromPartial(object: Partial<_219.MsgStoreCodeResponse>): _219.MsgStoreCodeResponse;
                fromAmino(object: _219.MsgStoreCodeResponseAmino): _219.MsgStoreCodeResponse;
                toAmino(message: _219.MsgStoreCodeResponse): _219.MsgStoreCodeResponseAmino;
                fromAminoMsg(object: _219.MsgStoreCodeResponseAminoMsg): _219.MsgStoreCodeResponse;
                toAminoMsg(message: _219.MsgStoreCodeResponse): _219.MsgStoreCodeResponseAminoMsg;
                fromProtoMsg(message: _219.MsgStoreCodeResponseProtoMsg): _219.MsgStoreCodeResponse;
                toProto(message: _219.MsgStoreCodeResponse): Uint8Array;
                toProtoMsg(message: _219.MsgStoreCodeResponse): _219.MsgStoreCodeResponseProtoMsg;
            };
            MsgInstantiateContract: {
                typeUrl: string;
                encode(message: _219.MsgInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgInstantiateContract;
                fromJSON(object: any): _219.MsgInstantiateContract;
                toJSON(message: _219.MsgInstantiateContract): unknown;
                fromPartial(object: Partial<_219.MsgInstantiateContract>): _219.MsgInstantiateContract;
                fromAmino(object: _219.MsgInstantiateContractAmino): _219.MsgInstantiateContract;
                toAmino(message: _219.MsgInstantiateContract): _219.MsgInstantiateContractAmino;
                fromAminoMsg(object: _219.MsgInstantiateContractAminoMsg): _219.MsgInstantiateContract;
                toAminoMsg(message: _219.MsgInstantiateContract): _219.MsgInstantiateContractAminoMsg;
                fromProtoMsg(message: _219.MsgInstantiateContractProtoMsg): _219.MsgInstantiateContract;
                toProto(message: _219.MsgInstantiateContract): Uint8Array;
                toProtoMsg(message: _219.MsgInstantiateContract): _219.MsgInstantiateContractProtoMsg;
            };
            MsgInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _219.MsgInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgInstantiateContractResponse;
                fromJSON(object: any): _219.MsgInstantiateContractResponse;
                toJSON(message: _219.MsgInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_219.MsgInstantiateContractResponse>): _219.MsgInstantiateContractResponse;
                fromAmino(object: _219.MsgInstantiateContractResponseAmino): _219.MsgInstantiateContractResponse;
                toAmino(message: _219.MsgInstantiateContractResponse): _219.MsgInstantiateContractResponseAmino;
                fromAminoMsg(object: _219.MsgInstantiateContractResponseAminoMsg): _219.MsgInstantiateContractResponse;
                toAminoMsg(message: _219.MsgInstantiateContractResponse): _219.MsgInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _219.MsgInstantiateContractResponseProtoMsg): _219.MsgInstantiateContractResponse;
                toProto(message: _219.MsgInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _219.MsgInstantiateContractResponse): _219.MsgInstantiateContractResponseProtoMsg;
            };
            MsgInstantiateContract2: {
                typeUrl: string;
                encode(message: _219.MsgInstantiateContract2, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgInstantiateContract2;
                fromJSON(object: any): _219.MsgInstantiateContract2;
                toJSON(message: _219.MsgInstantiateContract2): unknown;
                fromPartial(object: Partial<_219.MsgInstantiateContract2>): _219.MsgInstantiateContract2;
                fromAmino(object: _219.MsgInstantiateContract2Amino): _219.MsgInstantiateContract2;
                toAmino(message: _219.MsgInstantiateContract2): _219.MsgInstantiateContract2Amino;
                fromAminoMsg(object: _219.MsgInstantiateContract2AminoMsg): _219.MsgInstantiateContract2;
                toAminoMsg(message: _219.MsgInstantiateContract2): _219.MsgInstantiateContract2AminoMsg;
                fromProtoMsg(message: _219.MsgInstantiateContract2ProtoMsg): _219.MsgInstantiateContract2;
                toProto(message: _219.MsgInstantiateContract2): Uint8Array;
                toProtoMsg(message: _219.MsgInstantiateContract2): _219.MsgInstantiateContract2ProtoMsg;
            };
            MsgInstantiateContract2Response: {
                typeUrl: string;
                encode(message: _219.MsgInstantiateContract2Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgInstantiateContract2Response;
                fromJSON(object: any): _219.MsgInstantiateContract2Response;
                toJSON(message: _219.MsgInstantiateContract2Response): unknown;
                fromPartial(object: Partial<_219.MsgInstantiateContract2Response>): _219.MsgInstantiateContract2Response;
                fromAmino(object: _219.MsgInstantiateContract2ResponseAmino): _219.MsgInstantiateContract2Response;
                toAmino(message: _219.MsgInstantiateContract2Response): _219.MsgInstantiateContract2ResponseAmino;
                fromAminoMsg(object: _219.MsgInstantiateContract2ResponseAminoMsg): _219.MsgInstantiateContract2Response;
                toAminoMsg(message: _219.MsgInstantiateContract2Response): _219.MsgInstantiateContract2ResponseAminoMsg;
                fromProtoMsg(message: _219.MsgInstantiateContract2ResponseProtoMsg): _219.MsgInstantiateContract2Response;
                toProto(message: _219.MsgInstantiateContract2Response): Uint8Array;
                toProtoMsg(message: _219.MsgInstantiateContract2Response): _219.MsgInstantiateContract2ResponseProtoMsg;
            };
            MsgExecuteContract: {
                typeUrl: string;
                encode(message: _219.MsgExecuteContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgExecuteContract;
                fromJSON(object: any): _219.MsgExecuteContract;
                toJSON(message: _219.MsgExecuteContract): unknown;
                fromPartial(object: Partial<_219.MsgExecuteContract>): _219.MsgExecuteContract;
                fromAmino(object: _219.MsgExecuteContractAmino): _219.MsgExecuteContract;
                toAmino(message: _219.MsgExecuteContract): _219.MsgExecuteContractAmino;
                fromAminoMsg(object: _219.MsgExecuteContractAminoMsg): _219.MsgExecuteContract;
                toAminoMsg(message: _219.MsgExecuteContract): _219.MsgExecuteContractAminoMsg;
                fromProtoMsg(message: _219.MsgExecuteContractProtoMsg): _219.MsgExecuteContract;
                toProto(message: _219.MsgExecuteContract): Uint8Array;
                toProtoMsg(message: _219.MsgExecuteContract): _219.MsgExecuteContractProtoMsg;
            };
            MsgExecuteContractResponse: {
                typeUrl: string;
                encode(message: _219.MsgExecuteContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgExecuteContractResponse;
                fromJSON(object: any): _219.MsgExecuteContractResponse;
                toJSON(message: _219.MsgExecuteContractResponse): unknown;
                fromPartial(object: Partial<_219.MsgExecuteContractResponse>): _219.MsgExecuteContractResponse;
                fromAmino(object: _219.MsgExecuteContractResponseAmino): _219.MsgExecuteContractResponse;
                toAmino(message: _219.MsgExecuteContractResponse): _219.MsgExecuteContractResponseAmino;
                fromAminoMsg(object: _219.MsgExecuteContractResponseAminoMsg): _219.MsgExecuteContractResponse;
                toAminoMsg(message: _219.MsgExecuteContractResponse): _219.MsgExecuteContractResponseAminoMsg;
                fromProtoMsg(message: _219.MsgExecuteContractResponseProtoMsg): _219.MsgExecuteContractResponse;
                toProto(message: _219.MsgExecuteContractResponse): Uint8Array;
                toProtoMsg(message: _219.MsgExecuteContractResponse): _219.MsgExecuteContractResponseProtoMsg;
            };
            MsgMigrateContract: {
                typeUrl: string;
                encode(message: _219.MsgMigrateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgMigrateContract;
                fromJSON(object: any): _219.MsgMigrateContract;
                toJSON(message: _219.MsgMigrateContract): unknown;
                fromPartial(object: Partial<_219.MsgMigrateContract>): _219.MsgMigrateContract;
                fromAmino(object: _219.MsgMigrateContractAmino): _219.MsgMigrateContract;
                toAmino(message: _219.MsgMigrateContract): _219.MsgMigrateContractAmino;
                fromAminoMsg(object: _219.MsgMigrateContractAminoMsg): _219.MsgMigrateContract;
                toAminoMsg(message: _219.MsgMigrateContract): _219.MsgMigrateContractAminoMsg;
                fromProtoMsg(message: _219.MsgMigrateContractProtoMsg): _219.MsgMigrateContract;
                toProto(message: _219.MsgMigrateContract): Uint8Array;
                toProtoMsg(message: _219.MsgMigrateContract): _219.MsgMigrateContractProtoMsg;
            };
            MsgMigrateContractResponse: {
                typeUrl: string;
                encode(message: _219.MsgMigrateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgMigrateContractResponse;
                fromJSON(object: any): _219.MsgMigrateContractResponse;
                toJSON(message: _219.MsgMigrateContractResponse): unknown;
                fromPartial(object: Partial<_219.MsgMigrateContractResponse>): _219.MsgMigrateContractResponse;
                fromAmino(object: _219.MsgMigrateContractResponseAmino): _219.MsgMigrateContractResponse;
                toAmino(message: _219.MsgMigrateContractResponse): _219.MsgMigrateContractResponseAmino;
                fromAminoMsg(object: _219.MsgMigrateContractResponseAminoMsg): _219.MsgMigrateContractResponse;
                toAminoMsg(message: _219.MsgMigrateContractResponse): _219.MsgMigrateContractResponseAminoMsg;
                fromProtoMsg(message: _219.MsgMigrateContractResponseProtoMsg): _219.MsgMigrateContractResponse;
                toProto(message: _219.MsgMigrateContractResponse): Uint8Array;
                toProtoMsg(message: _219.MsgMigrateContractResponse): _219.MsgMigrateContractResponseProtoMsg;
            };
            MsgUpdateAdmin: {
                typeUrl: string;
                encode(message: _219.MsgUpdateAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgUpdateAdmin;
                fromJSON(object: any): _219.MsgUpdateAdmin;
                toJSON(message: _219.MsgUpdateAdmin): unknown;
                fromPartial(object: Partial<_219.MsgUpdateAdmin>): _219.MsgUpdateAdmin;
                fromAmino(object: _219.MsgUpdateAdminAmino): _219.MsgUpdateAdmin;
                toAmino(message: _219.MsgUpdateAdmin): _219.MsgUpdateAdminAmino;
                fromAminoMsg(object: _219.MsgUpdateAdminAminoMsg): _219.MsgUpdateAdmin;
                toAminoMsg(message: _219.MsgUpdateAdmin): _219.MsgUpdateAdminAminoMsg;
                fromProtoMsg(message: _219.MsgUpdateAdminProtoMsg): _219.MsgUpdateAdmin;
                toProto(message: _219.MsgUpdateAdmin): Uint8Array;
                toProtoMsg(message: _219.MsgUpdateAdmin): _219.MsgUpdateAdminProtoMsg;
            };
            MsgUpdateAdminResponse: {
                typeUrl: string;
                encode(_: _219.MsgUpdateAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgUpdateAdminResponse;
                fromJSON(_: any): _219.MsgUpdateAdminResponse;
                toJSON(_: _219.MsgUpdateAdminResponse): unknown;
                fromPartial(_: Partial<_219.MsgUpdateAdminResponse>): _219.MsgUpdateAdminResponse;
                fromAmino(_: _219.MsgUpdateAdminResponseAmino): _219.MsgUpdateAdminResponse;
                toAmino(_: _219.MsgUpdateAdminResponse): _219.MsgUpdateAdminResponseAmino;
                fromAminoMsg(object: _219.MsgUpdateAdminResponseAminoMsg): _219.MsgUpdateAdminResponse;
                toAminoMsg(message: _219.MsgUpdateAdminResponse): _219.MsgUpdateAdminResponseAminoMsg;
                fromProtoMsg(message: _219.MsgUpdateAdminResponseProtoMsg): _219.MsgUpdateAdminResponse;
                toProto(message: _219.MsgUpdateAdminResponse): Uint8Array;
                toProtoMsg(message: _219.MsgUpdateAdminResponse): _219.MsgUpdateAdminResponseProtoMsg;
            };
            MsgClearAdmin: {
                typeUrl: string;
                encode(message: _219.MsgClearAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgClearAdmin;
                fromJSON(object: any): _219.MsgClearAdmin;
                toJSON(message: _219.MsgClearAdmin): unknown;
                fromPartial(object: Partial<_219.MsgClearAdmin>): _219.MsgClearAdmin;
                fromAmino(object: _219.MsgClearAdminAmino): _219.MsgClearAdmin;
                toAmino(message: _219.MsgClearAdmin): _219.MsgClearAdminAmino;
                fromAminoMsg(object: _219.MsgClearAdminAminoMsg): _219.MsgClearAdmin;
                toAminoMsg(message: _219.MsgClearAdmin): _219.MsgClearAdminAminoMsg;
                fromProtoMsg(message: _219.MsgClearAdminProtoMsg): _219.MsgClearAdmin;
                toProto(message: _219.MsgClearAdmin): Uint8Array;
                toProtoMsg(message: _219.MsgClearAdmin): _219.MsgClearAdminProtoMsg;
            };
            MsgClearAdminResponse: {
                typeUrl: string;
                encode(_: _219.MsgClearAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgClearAdminResponse;
                fromJSON(_: any): _219.MsgClearAdminResponse;
                toJSON(_: _219.MsgClearAdminResponse): unknown;
                fromPartial(_: Partial<_219.MsgClearAdminResponse>): _219.MsgClearAdminResponse;
                fromAmino(_: _219.MsgClearAdminResponseAmino): _219.MsgClearAdminResponse;
                toAmino(_: _219.MsgClearAdminResponse): _219.MsgClearAdminResponseAmino;
                fromAminoMsg(object: _219.MsgClearAdminResponseAminoMsg): _219.MsgClearAdminResponse;
                toAminoMsg(message: _219.MsgClearAdminResponse): _219.MsgClearAdminResponseAminoMsg;
                fromProtoMsg(message: _219.MsgClearAdminResponseProtoMsg): _219.MsgClearAdminResponse;
                toProto(message: _219.MsgClearAdminResponse): Uint8Array;
                toProtoMsg(message: _219.MsgClearAdminResponse): _219.MsgClearAdminResponseProtoMsg;
            };
            MsgUpdateInstantiateConfig: {
                typeUrl: string;
                encode(message: _219.MsgUpdateInstantiateConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgUpdateInstantiateConfig;
                fromJSON(object: any): _219.MsgUpdateInstantiateConfig;
                toJSON(message: _219.MsgUpdateInstantiateConfig): unknown;
                fromPartial(object: Partial<_219.MsgUpdateInstantiateConfig>): _219.MsgUpdateInstantiateConfig;
                fromAmino(object: _219.MsgUpdateInstantiateConfigAmino): _219.MsgUpdateInstantiateConfig;
                toAmino(message: _219.MsgUpdateInstantiateConfig): _219.MsgUpdateInstantiateConfigAmino;
                fromAminoMsg(object: _219.MsgUpdateInstantiateConfigAminoMsg): _219.MsgUpdateInstantiateConfig;
                toAminoMsg(message: _219.MsgUpdateInstantiateConfig): _219.MsgUpdateInstantiateConfigAminoMsg;
                fromProtoMsg(message: _219.MsgUpdateInstantiateConfigProtoMsg): _219.MsgUpdateInstantiateConfig;
                toProto(message: _219.MsgUpdateInstantiateConfig): Uint8Array;
                toProtoMsg(message: _219.MsgUpdateInstantiateConfig): _219.MsgUpdateInstantiateConfigProtoMsg;
            };
            MsgUpdateInstantiateConfigResponse: {
                typeUrl: string;
                encode(_: _219.MsgUpdateInstantiateConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgUpdateInstantiateConfigResponse;
                fromJSON(_: any): _219.MsgUpdateInstantiateConfigResponse;
                toJSON(_: _219.MsgUpdateInstantiateConfigResponse): unknown;
                fromPartial(_: Partial<_219.MsgUpdateInstantiateConfigResponse>): _219.MsgUpdateInstantiateConfigResponse;
                fromAmino(_: _219.MsgUpdateInstantiateConfigResponseAmino): _219.MsgUpdateInstantiateConfigResponse;
                toAmino(_: _219.MsgUpdateInstantiateConfigResponse): _219.MsgUpdateInstantiateConfigResponseAmino;
                fromAminoMsg(object: _219.MsgUpdateInstantiateConfigResponseAminoMsg): _219.MsgUpdateInstantiateConfigResponse;
                toAminoMsg(message: _219.MsgUpdateInstantiateConfigResponse): _219.MsgUpdateInstantiateConfigResponseAminoMsg;
                fromProtoMsg(message: _219.MsgUpdateInstantiateConfigResponseProtoMsg): _219.MsgUpdateInstantiateConfigResponse;
                toProto(message: _219.MsgUpdateInstantiateConfigResponse): Uint8Array;
                toProtoMsg(message: _219.MsgUpdateInstantiateConfigResponse): _219.MsgUpdateInstantiateConfigResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _219.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgUpdateParams;
                fromJSON(object: any): _219.MsgUpdateParams;
                toJSON(message: _219.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_219.MsgUpdateParams>): _219.MsgUpdateParams;
                fromAmino(object: _219.MsgUpdateParamsAmino): _219.MsgUpdateParams;
                toAmino(message: _219.MsgUpdateParams): _219.MsgUpdateParamsAmino;
                fromAminoMsg(object: _219.MsgUpdateParamsAminoMsg): _219.MsgUpdateParams;
                toAminoMsg(message: _219.MsgUpdateParams): _219.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _219.MsgUpdateParamsProtoMsg): _219.MsgUpdateParams;
                toProto(message: _219.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _219.MsgUpdateParams): _219.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _219.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgUpdateParamsResponse;
                fromJSON(_: any): _219.MsgUpdateParamsResponse;
                toJSON(_: _219.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_219.MsgUpdateParamsResponse>): _219.MsgUpdateParamsResponse;
                fromAmino(_: _219.MsgUpdateParamsResponseAmino): _219.MsgUpdateParamsResponse;
                toAmino(_: _219.MsgUpdateParamsResponse): _219.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _219.MsgUpdateParamsResponseAminoMsg): _219.MsgUpdateParamsResponse;
                toAminoMsg(message: _219.MsgUpdateParamsResponse): _219.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _219.MsgUpdateParamsResponseProtoMsg): _219.MsgUpdateParamsResponse;
                toProto(message: _219.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _219.MsgUpdateParamsResponse): _219.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSudoContract: {
                typeUrl: string;
                encode(message: _219.MsgSudoContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgSudoContract;
                fromJSON(object: any): _219.MsgSudoContract;
                toJSON(message: _219.MsgSudoContract): unknown;
                fromPartial(object: Partial<_219.MsgSudoContract>): _219.MsgSudoContract;
                fromAmino(object: _219.MsgSudoContractAmino): _219.MsgSudoContract;
                toAmino(message: _219.MsgSudoContract): _219.MsgSudoContractAmino;
                fromAminoMsg(object: _219.MsgSudoContractAminoMsg): _219.MsgSudoContract;
                toAminoMsg(message: _219.MsgSudoContract): _219.MsgSudoContractAminoMsg;
                fromProtoMsg(message: _219.MsgSudoContractProtoMsg): _219.MsgSudoContract;
                toProto(message: _219.MsgSudoContract): Uint8Array;
                toProtoMsg(message: _219.MsgSudoContract): _219.MsgSudoContractProtoMsg;
            };
            MsgSudoContractResponse: {
                typeUrl: string;
                encode(message: _219.MsgSudoContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgSudoContractResponse;
                fromJSON(object: any): _219.MsgSudoContractResponse;
                toJSON(message: _219.MsgSudoContractResponse): unknown;
                fromPartial(object: Partial<_219.MsgSudoContractResponse>): _219.MsgSudoContractResponse;
                fromAmino(object: _219.MsgSudoContractResponseAmino): _219.MsgSudoContractResponse;
                toAmino(message: _219.MsgSudoContractResponse): _219.MsgSudoContractResponseAmino;
                fromAminoMsg(object: _219.MsgSudoContractResponseAminoMsg): _219.MsgSudoContractResponse;
                toAminoMsg(message: _219.MsgSudoContractResponse): _219.MsgSudoContractResponseAminoMsg;
                fromProtoMsg(message: _219.MsgSudoContractResponseProtoMsg): _219.MsgSudoContractResponse;
                toProto(message: _219.MsgSudoContractResponse): Uint8Array;
                toProtoMsg(message: _219.MsgSudoContractResponse): _219.MsgSudoContractResponseProtoMsg;
            };
            MsgPinCodes: {
                typeUrl: string;
                encode(message: _219.MsgPinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgPinCodes;
                fromJSON(object: any): _219.MsgPinCodes;
                toJSON(message: _219.MsgPinCodes): unknown;
                fromPartial(object: Partial<_219.MsgPinCodes>): _219.MsgPinCodes;
                fromAmino(object: _219.MsgPinCodesAmino): _219.MsgPinCodes;
                toAmino(message: _219.MsgPinCodes): _219.MsgPinCodesAmino;
                fromAminoMsg(object: _219.MsgPinCodesAminoMsg): _219.MsgPinCodes;
                toAminoMsg(message: _219.MsgPinCodes): _219.MsgPinCodesAminoMsg;
                fromProtoMsg(message: _219.MsgPinCodesProtoMsg): _219.MsgPinCodes;
                toProto(message: _219.MsgPinCodes): Uint8Array;
                toProtoMsg(message: _219.MsgPinCodes): _219.MsgPinCodesProtoMsg;
            };
            MsgPinCodesResponse: {
                typeUrl: string;
                encode(_: _219.MsgPinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgPinCodesResponse;
                fromJSON(_: any): _219.MsgPinCodesResponse;
                toJSON(_: _219.MsgPinCodesResponse): unknown;
                fromPartial(_: Partial<_219.MsgPinCodesResponse>): _219.MsgPinCodesResponse;
                fromAmino(_: _219.MsgPinCodesResponseAmino): _219.MsgPinCodesResponse;
                toAmino(_: _219.MsgPinCodesResponse): _219.MsgPinCodesResponseAmino;
                fromAminoMsg(object: _219.MsgPinCodesResponseAminoMsg): _219.MsgPinCodesResponse;
                toAminoMsg(message: _219.MsgPinCodesResponse): _219.MsgPinCodesResponseAminoMsg;
                fromProtoMsg(message: _219.MsgPinCodesResponseProtoMsg): _219.MsgPinCodesResponse;
                toProto(message: _219.MsgPinCodesResponse): Uint8Array;
                toProtoMsg(message: _219.MsgPinCodesResponse): _219.MsgPinCodesResponseProtoMsg;
            };
            MsgUnpinCodes: {
                typeUrl: string;
                encode(message: _219.MsgUnpinCodes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgUnpinCodes;
                fromJSON(object: any): _219.MsgUnpinCodes;
                toJSON(message: _219.MsgUnpinCodes): unknown;
                fromPartial(object: Partial<_219.MsgUnpinCodes>): _219.MsgUnpinCodes;
                fromAmino(object: _219.MsgUnpinCodesAmino): _219.MsgUnpinCodes;
                toAmino(message: _219.MsgUnpinCodes): _219.MsgUnpinCodesAmino;
                fromAminoMsg(object: _219.MsgUnpinCodesAminoMsg): _219.MsgUnpinCodes;
                toAminoMsg(message: _219.MsgUnpinCodes): _219.MsgUnpinCodesAminoMsg;
                fromProtoMsg(message: _219.MsgUnpinCodesProtoMsg): _219.MsgUnpinCodes;
                toProto(message: _219.MsgUnpinCodes): Uint8Array;
                toProtoMsg(message: _219.MsgUnpinCodes): _219.MsgUnpinCodesProtoMsg;
            };
            MsgUnpinCodesResponse: {
                typeUrl: string;
                encode(_: _219.MsgUnpinCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgUnpinCodesResponse;
                fromJSON(_: any): _219.MsgUnpinCodesResponse;
                toJSON(_: _219.MsgUnpinCodesResponse): unknown;
                fromPartial(_: Partial<_219.MsgUnpinCodesResponse>): _219.MsgUnpinCodesResponse;
                fromAmino(_: _219.MsgUnpinCodesResponseAmino): _219.MsgUnpinCodesResponse;
                toAmino(_: _219.MsgUnpinCodesResponse): _219.MsgUnpinCodesResponseAmino;
                fromAminoMsg(object: _219.MsgUnpinCodesResponseAminoMsg): _219.MsgUnpinCodesResponse;
                toAminoMsg(message: _219.MsgUnpinCodesResponse): _219.MsgUnpinCodesResponseAminoMsg;
                fromProtoMsg(message: _219.MsgUnpinCodesResponseProtoMsg): _219.MsgUnpinCodesResponse;
                toProto(message: _219.MsgUnpinCodesResponse): Uint8Array;
                toProtoMsg(message: _219.MsgUnpinCodesResponse): _219.MsgUnpinCodesResponseProtoMsg;
            };
            MsgStoreAndInstantiateContract: {
                typeUrl: string;
                encode(message: _219.MsgStoreAndInstantiateContract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgStoreAndInstantiateContract;
                fromJSON(object: any): _219.MsgStoreAndInstantiateContract;
                toJSON(message: _219.MsgStoreAndInstantiateContract): unknown;
                fromPartial(object: Partial<_219.MsgStoreAndInstantiateContract>): _219.MsgStoreAndInstantiateContract;
                fromAmino(object: _219.MsgStoreAndInstantiateContractAmino): _219.MsgStoreAndInstantiateContract;
                toAmino(message: _219.MsgStoreAndInstantiateContract): _219.MsgStoreAndInstantiateContractAmino;
                fromAminoMsg(object: _219.MsgStoreAndInstantiateContractAminoMsg): _219.MsgStoreAndInstantiateContract;
                toAminoMsg(message: _219.MsgStoreAndInstantiateContract): _219.MsgStoreAndInstantiateContractAminoMsg;
                fromProtoMsg(message: _219.MsgStoreAndInstantiateContractProtoMsg): _219.MsgStoreAndInstantiateContract;
                toProto(message: _219.MsgStoreAndInstantiateContract): Uint8Array;
                toProtoMsg(message: _219.MsgStoreAndInstantiateContract): _219.MsgStoreAndInstantiateContractProtoMsg;
            };
            MsgStoreAndInstantiateContractResponse: {
                typeUrl: string;
                encode(message: _219.MsgStoreAndInstantiateContractResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgStoreAndInstantiateContractResponse;
                fromJSON(object: any): _219.MsgStoreAndInstantiateContractResponse;
                toJSON(message: _219.MsgStoreAndInstantiateContractResponse): unknown;
                fromPartial(object: Partial<_219.MsgStoreAndInstantiateContractResponse>): _219.MsgStoreAndInstantiateContractResponse;
                fromAmino(object: _219.MsgStoreAndInstantiateContractResponseAmino): _219.MsgStoreAndInstantiateContractResponse;
                toAmino(message: _219.MsgStoreAndInstantiateContractResponse): _219.MsgStoreAndInstantiateContractResponseAmino;
                fromAminoMsg(object: _219.MsgStoreAndInstantiateContractResponseAminoMsg): _219.MsgStoreAndInstantiateContractResponse;
                toAminoMsg(message: _219.MsgStoreAndInstantiateContractResponse): _219.MsgStoreAndInstantiateContractResponseAminoMsg;
                fromProtoMsg(message: _219.MsgStoreAndInstantiateContractResponseProtoMsg): _219.MsgStoreAndInstantiateContractResponse;
                toProto(message: _219.MsgStoreAndInstantiateContractResponse): Uint8Array;
                toProtoMsg(message: _219.MsgStoreAndInstantiateContractResponse): _219.MsgStoreAndInstantiateContractResponseProtoMsg;
            };
            MsgAddCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _219.MsgAddCodeUploadParamsAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgAddCodeUploadParamsAddresses;
                fromJSON(object: any): _219.MsgAddCodeUploadParamsAddresses;
                toJSON(message: _219.MsgAddCodeUploadParamsAddresses): unknown;
                fromPartial(object: Partial<_219.MsgAddCodeUploadParamsAddresses>): _219.MsgAddCodeUploadParamsAddresses;
                fromAmino(object: _219.MsgAddCodeUploadParamsAddressesAmino): _219.MsgAddCodeUploadParamsAddresses;
                toAmino(message: _219.MsgAddCodeUploadParamsAddresses): _219.MsgAddCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _219.MsgAddCodeUploadParamsAddressesAminoMsg): _219.MsgAddCodeUploadParamsAddresses;
                toAminoMsg(message: _219.MsgAddCodeUploadParamsAddresses): _219.MsgAddCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _219.MsgAddCodeUploadParamsAddressesProtoMsg): _219.MsgAddCodeUploadParamsAddresses;
                toProto(message: _219.MsgAddCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _219.MsgAddCodeUploadParamsAddresses): _219.MsgAddCodeUploadParamsAddressesProtoMsg;
            };
            MsgAddCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _219.MsgAddCodeUploadParamsAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgAddCodeUploadParamsAddressesResponse;
                fromJSON(_: any): _219.MsgAddCodeUploadParamsAddressesResponse;
                toJSON(_: _219.MsgAddCodeUploadParamsAddressesResponse): unknown;
                fromPartial(_: Partial<_219.MsgAddCodeUploadParamsAddressesResponse>): _219.MsgAddCodeUploadParamsAddressesResponse;
                fromAmino(_: _219.MsgAddCodeUploadParamsAddressesResponseAmino): _219.MsgAddCodeUploadParamsAddressesResponse;
                toAmino(_: _219.MsgAddCodeUploadParamsAddressesResponse): _219.MsgAddCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _219.MsgAddCodeUploadParamsAddressesResponseAminoMsg): _219.MsgAddCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _219.MsgAddCodeUploadParamsAddressesResponse): _219.MsgAddCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _219.MsgAddCodeUploadParamsAddressesResponseProtoMsg): _219.MsgAddCodeUploadParamsAddressesResponse;
                toProto(message: _219.MsgAddCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _219.MsgAddCodeUploadParamsAddressesResponse): _219.MsgAddCodeUploadParamsAddressesResponseProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddresses: {
                typeUrl: string;
                encode(message: _219.MsgRemoveCodeUploadParamsAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgRemoveCodeUploadParamsAddresses;
                fromJSON(object: any): _219.MsgRemoveCodeUploadParamsAddresses;
                toJSON(message: _219.MsgRemoveCodeUploadParamsAddresses): unknown;
                fromPartial(object: Partial<_219.MsgRemoveCodeUploadParamsAddresses>): _219.MsgRemoveCodeUploadParamsAddresses;
                fromAmino(object: _219.MsgRemoveCodeUploadParamsAddressesAmino): _219.MsgRemoveCodeUploadParamsAddresses;
                toAmino(message: _219.MsgRemoveCodeUploadParamsAddresses): _219.MsgRemoveCodeUploadParamsAddressesAmino;
                fromAminoMsg(object: _219.MsgRemoveCodeUploadParamsAddressesAminoMsg): _219.MsgRemoveCodeUploadParamsAddresses;
                toAminoMsg(message: _219.MsgRemoveCodeUploadParamsAddresses): _219.MsgRemoveCodeUploadParamsAddressesAminoMsg;
                fromProtoMsg(message: _219.MsgRemoveCodeUploadParamsAddressesProtoMsg): _219.MsgRemoveCodeUploadParamsAddresses;
                toProto(message: _219.MsgRemoveCodeUploadParamsAddresses): Uint8Array;
                toProtoMsg(message: _219.MsgRemoveCodeUploadParamsAddresses): _219.MsgRemoveCodeUploadParamsAddressesProtoMsg;
            };
            MsgRemoveCodeUploadParamsAddressesResponse: {
                typeUrl: string;
                encode(_: _219.MsgRemoveCodeUploadParamsAddressesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.MsgRemoveCodeUploadParamsAddressesResponse;
                fromJSON(_: any): _219.MsgRemoveCodeUploadParamsAddressesResponse;
                toJSON(_: _219.MsgRemoveCodeUploadParamsAddressesResponse): unknown;
                fromPartial(_: Partial<_219.MsgRemoveCodeUploadParamsAddressesResponse>): _219.MsgRemoveCodeUploadParamsAddressesResponse;
                fromAmino(_: _219.MsgRemoveCodeUploadParamsAddressesResponseAmino): _219.MsgRemoveCodeUploadParamsAddressesResponse;
                toAmino(_: _219.MsgRemoveCodeUploadParamsAddressesResponse): _219.MsgRemoveCodeUploadParamsAddressesResponseAmino;
                fromAminoMsg(object: _219.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg): _219.MsgRemoveCodeUploadParamsAddressesResponse;
                toAminoMsg(message: _219.MsgRemoveCodeUploadParamsAddressesResponse): _219.MsgRemoveCodeUploadParamsAddressesResponseAminoMsg;
                fromProtoMsg(message: _219.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg): _219.MsgRemoveCodeUploadParamsAddressesResponse;
                toProto(message: _219.MsgRemoveCodeUploadParamsAddressesResponse): Uint8Array;
                toProtoMsg(message: _219.MsgRemoveCodeUploadParamsAddressesResponse): _219.MsgRemoveCodeUploadParamsAddressesResponseProtoMsg;
            };
            QueryContractInfoRequest: {
                typeUrl: string;
                encode(message: _218.QueryContractInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryContractInfoRequest;
                fromJSON(object: any): _218.QueryContractInfoRequest;
                toJSON(message: _218.QueryContractInfoRequest): unknown;
                fromPartial(object: Partial<_218.QueryContractInfoRequest>): _218.QueryContractInfoRequest;
                fromAmino(object: _218.QueryContractInfoRequestAmino): _218.QueryContractInfoRequest;
                toAmino(message: _218.QueryContractInfoRequest): _218.QueryContractInfoRequestAmino;
                fromAminoMsg(object: _218.QueryContractInfoRequestAminoMsg): _218.QueryContractInfoRequest;
                toAminoMsg(message: _218.QueryContractInfoRequest): _218.QueryContractInfoRequestAminoMsg;
                fromProtoMsg(message: _218.QueryContractInfoRequestProtoMsg): _218.QueryContractInfoRequest;
                toProto(message: _218.QueryContractInfoRequest): Uint8Array;
                toProtoMsg(message: _218.QueryContractInfoRequest): _218.QueryContractInfoRequestProtoMsg;
            };
            QueryContractInfoResponse: {
                typeUrl: string;
                encode(message: _218.QueryContractInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryContractInfoResponse;
                fromJSON(object: any): _218.QueryContractInfoResponse;
                toJSON(message: _218.QueryContractInfoResponse): unknown;
                fromPartial(object: Partial<_218.QueryContractInfoResponse>): _218.QueryContractInfoResponse;
                fromAmino(object: _218.QueryContractInfoResponseAmino): _218.QueryContractInfoResponse;
                toAmino(message: _218.QueryContractInfoResponse): _218.QueryContractInfoResponseAmino;
                fromAminoMsg(object: _218.QueryContractInfoResponseAminoMsg): _218.QueryContractInfoResponse;
                toAminoMsg(message: _218.QueryContractInfoResponse): _218.QueryContractInfoResponseAminoMsg;
                fromProtoMsg(message: _218.QueryContractInfoResponseProtoMsg): _218.QueryContractInfoResponse;
                toProto(message: _218.QueryContractInfoResponse): Uint8Array;
                toProtoMsg(message: _218.QueryContractInfoResponse): _218.QueryContractInfoResponseProtoMsg;
            };
            QueryContractHistoryRequest: {
                typeUrl: string;
                encode(message: _218.QueryContractHistoryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryContractHistoryRequest;
                fromJSON(object: any): _218.QueryContractHistoryRequest;
                toJSON(message: _218.QueryContractHistoryRequest): unknown;
                fromPartial(object: Partial<_218.QueryContractHistoryRequest>): _218.QueryContractHistoryRequest;
                fromAmino(object: _218.QueryContractHistoryRequestAmino): _218.QueryContractHistoryRequest;
                toAmino(message: _218.QueryContractHistoryRequest): _218.QueryContractHistoryRequestAmino;
                fromAminoMsg(object: _218.QueryContractHistoryRequestAminoMsg): _218.QueryContractHistoryRequest;
                toAminoMsg(message: _218.QueryContractHistoryRequest): _218.QueryContractHistoryRequestAminoMsg;
                fromProtoMsg(message: _218.QueryContractHistoryRequestProtoMsg): _218.QueryContractHistoryRequest;
                toProto(message: _218.QueryContractHistoryRequest): Uint8Array;
                toProtoMsg(message: _218.QueryContractHistoryRequest): _218.QueryContractHistoryRequestProtoMsg;
            };
            QueryContractHistoryResponse: {
                typeUrl: string;
                encode(message: _218.QueryContractHistoryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryContractHistoryResponse;
                fromJSON(object: any): _218.QueryContractHistoryResponse;
                toJSON(message: _218.QueryContractHistoryResponse): unknown;
                fromPartial(object: Partial<_218.QueryContractHistoryResponse>): _218.QueryContractHistoryResponse;
                fromAmino(object: _218.QueryContractHistoryResponseAmino): _218.QueryContractHistoryResponse;
                toAmino(message: _218.QueryContractHistoryResponse): _218.QueryContractHistoryResponseAmino;
                fromAminoMsg(object: _218.QueryContractHistoryResponseAminoMsg): _218.QueryContractHistoryResponse;
                toAminoMsg(message: _218.QueryContractHistoryResponse): _218.QueryContractHistoryResponseAminoMsg;
                fromProtoMsg(message: _218.QueryContractHistoryResponseProtoMsg): _218.QueryContractHistoryResponse;
                toProto(message: _218.QueryContractHistoryResponse): Uint8Array;
                toProtoMsg(message: _218.QueryContractHistoryResponse): _218.QueryContractHistoryResponseProtoMsg;
            };
            QueryContractsByCodeRequest: {
                typeUrl: string;
                encode(message: _218.QueryContractsByCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryContractsByCodeRequest;
                fromJSON(object: any): _218.QueryContractsByCodeRequest;
                toJSON(message: _218.QueryContractsByCodeRequest): unknown;
                fromPartial(object: Partial<_218.QueryContractsByCodeRequest>): _218.QueryContractsByCodeRequest;
                fromAmino(object: _218.QueryContractsByCodeRequestAmino): _218.QueryContractsByCodeRequest;
                toAmino(message: _218.QueryContractsByCodeRequest): _218.QueryContractsByCodeRequestAmino;
                fromAminoMsg(object: _218.QueryContractsByCodeRequestAminoMsg): _218.QueryContractsByCodeRequest;
                toAminoMsg(message: _218.QueryContractsByCodeRequest): _218.QueryContractsByCodeRequestAminoMsg;
                fromProtoMsg(message: _218.QueryContractsByCodeRequestProtoMsg): _218.QueryContractsByCodeRequest;
                toProto(message: _218.QueryContractsByCodeRequest): Uint8Array;
                toProtoMsg(message: _218.QueryContractsByCodeRequest): _218.QueryContractsByCodeRequestProtoMsg;
            };
            QueryContractsByCodeResponse: {
                typeUrl: string;
                encode(message: _218.QueryContractsByCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryContractsByCodeResponse;
                fromJSON(object: any): _218.QueryContractsByCodeResponse;
                toJSON(message: _218.QueryContractsByCodeResponse): unknown;
                fromPartial(object: Partial<_218.QueryContractsByCodeResponse>): _218.QueryContractsByCodeResponse;
                fromAmino(object: _218.QueryContractsByCodeResponseAmino): _218.QueryContractsByCodeResponse;
                toAmino(message: _218.QueryContractsByCodeResponse): _218.QueryContractsByCodeResponseAmino;
                fromAminoMsg(object: _218.QueryContractsByCodeResponseAminoMsg): _218.QueryContractsByCodeResponse;
                toAminoMsg(message: _218.QueryContractsByCodeResponse): _218.QueryContractsByCodeResponseAminoMsg;
                fromProtoMsg(message: _218.QueryContractsByCodeResponseProtoMsg): _218.QueryContractsByCodeResponse;
                toProto(message: _218.QueryContractsByCodeResponse): Uint8Array;
                toProtoMsg(message: _218.QueryContractsByCodeResponse): _218.QueryContractsByCodeResponseProtoMsg;
            };
            QueryAllContractStateRequest: {
                typeUrl: string;
                encode(message: _218.QueryAllContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryAllContractStateRequest;
                fromJSON(object: any): _218.QueryAllContractStateRequest;
                toJSON(message: _218.QueryAllContractStateRequest): unknown;
                fromPartial(object: Partial<_218.QueryAllContractStateRequest>): _218.QueryAllContractStateRequest;
                fromAmino(object: _218.QueryAllContractStateRequestAmino): _218.QueryAllContractStateRequest;
                toAmino(message: _218.QueryAllContractStateRequest): _218.QueryAllContractStateRequestAmino;
                fromAminoMsg(object: _218.QueryAllContractStateRequestAminoMsg): _218.QueryAllContractStateRequest;
                toAminoMsg(message: _218.QueryAllContractStateRequest): _218.QueryAllContractStateRequestAminoMsg;
                fromProtoMsg(message: _218.QueryAllContractStateRequestProtoMsg): _218.QueryAllContractStateRequest;
                toProto(message: _218.QueryAllContractStateRequest): Uint8Array;
                toProtoMsg(message: _218.QueryAllContractStateRequest): _218.QueryAllContractStateRequestProtoMsg;
            };
            QueryAllContractStateResponse: {
                typeUrl: string;
                encode(message: _218.QueryAllContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryAllContractStateResponse;
                fromJSON(object: any): _218.QueryAllContractStateResponse;
                toJSON(message: _218.QueryAllContractStateResponse): unknown;
                fromPartial(object: Partial<_218.QueryAllContractStateResponse>): _218.QueryAllContractStateResponse;
                fromAmino(object: _218.QueryAllContractStateResponseAmino): _218.QueryAllContractStateResponse;
                toAmino(message: _218.QueryAllContractStateResponse): _218.QueryAllContractStateResponseAmino;
                fromAminoMsg(object: _218.QueryAllContractStateResponseAminoMsg): _218.QueryAllContractStateResponse;
                toAminoMsg(message: _218.QueryAllContractStateResponse): _218.QueryAllContractStateResponseAminoMsg;
                fromProtoMsg(message: _218.QueryAllContractStateResponseProtoMsg): _218.QueryAllContractStateResponse;
                toProto(message: _218.QueryAllContractStateResponse): Uint8Array;
                toProtoMsg(message: _218.QueryAllContractStateResponse): _218.QueryAllContractStateResponseProtoMsg;
            };
            QueryRawContractStateRequest: {
                typeUrl: string;
                encode(message: _218.QueryRawContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryRawContractStateRequest;
                fromJSON(object: any): _218.QueryRawContractStateRequest;
                toJSON(message: _218.QueryRawContractStateRequest): unknown;
                fromPartial(object: Partial<_218.QueryRawContractStateRequest>): _218.QueryRawContractStateRequest;
                fromAmino(object: _218.QueryRawContractStateRequestAmino): _218.QueryRawContractStateRequest;
                toAmino(message: _218.QueryRawContractStateRequest): _218.QueryRawContractStateRequestAmino;
                fromAminoMsg(object: _218.QueryRawContractStateRequestAminoMsg): _218.QueryRawContractStateRequest;
                toAminoMsg(message: _218.QueryRawContractStateRequest): _218.QueryRawContractStateRequestAminoMsg;
                fromProtoMsg(message: _218.QueryRawContractStateRequestProtoMsg): _218.QueryRawContractStateRequest;
                toProto(message: _218.QueryRawContractStateRequest): Uint8Array;
                toProtoMsg(message: _218.QueryRawContractStateRequest): _218.QueryRawContractStateRequestProtoMsg;
            };
            QueryRawContractStateResponse: {
                typeUrl: string;
                encode(message: _218.QueryRawContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryRawContractStateResponse;
                fromJSON(object: any): _218.QueryRawContractStateResponse;
                toJSON(message: _218.QueryRawContractStateResponse): unknown;
                fromPartial(object: Partial<_218.QueryRawContractStateResponse>): _218.QueryRawContractStateResponse;
                fromAmino(object: _218.QueryRawContractStateResponseAmino): _218.QueryRawContractStateResponse;
                toAmino(message: _218.QueryRawContractStateResponse): _218.QueryRawContractStateResponseAmino;
                fromAminoMsg(object: _218.QueryRawContractStateResponseAminoMsg): _218.QueryRawContractStateResponse;
                toAminoMsg(message: _218.QueryRawContractStateResponse): _218.QueryRawContractStateResponseAminoMsg;
                fromProtoMsg(message: _218.QueryRawContractStateResponseProtoMsg): _218.QueryRawContractStateResponse;
                toProto(message: _218.QueryRawContractStateResponse): Uint8Array;
                toProtoMsg(message: _218.QueryRawContractStateResponse): _218.QueryRawContractStateResponseProtoMsg;
            };
            QuerySmartContractStateRequest: {
                typeUrl: string;
                encode(message: _218.QuerySmartContractStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QuerySmartContractStateRequest;
                fromJSON(object: any): _218.QuerySmartContractStateRequest;
                toJSON(message: _218.QuerySmartContractStateRequest): unknown;
                fromPartial(object: Partial<_218.QuerySmartContractStateRequest>): _218.QuerySmartContractStateRequest;
                fromAmino(object: _218.QuerySmartContractStateRequestAmino): _218.QuerySmartContractStateRequest;
                toAmino(message: _218.QuerySmartContractStateRequest): _218.QuerySmartContractStateRequestAmino;
                fromAminoMsg(object: _218.QuerySmartContractStateRequestAminoMsg): _218.QuerySmartContractStateRequest;
                toAminoMsg(message: _218.QuerySmartContractStateRequest): _218.QuerySmartContractStateRequestAminoMsg;
                fromProtoMsg(message: _218.QuerySmartContractStateRequestProtoMsg): _218.QuerySmartContractStateRequest;
                toProto(message: _218.QuerySmartContractStateRequest): Uint8Array;
                toProtoMsg(message: _218.QuerySmartContractStateRequest): _218.QuerySmartContractStateRequestProtoMsg;
            };
            QuerySmartContractStateResponse: {
                typeUrl: string;
                encode(message: _218.QuerySmartContractStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QuerySmartContractStateResponse;
                fromJSON(object: any): _218.QuerySmartContractStateResponse;
                toJSON(message: _218.QuerySmartContractStateResponse): unknown;
                fromPartial(object: Partial<_218.QuerySmartContractStateResponse>): _218.QuerySmartContractStateResponse;
                fromAmino(object: _218.QuerySmartContractStateResponseAmino): _218.QuerySmartContractStateResponse;
                toAmino(message: _218.QuerySmartContractStateResponse): _218.QuerySmartContractStateResponseAmino;
                fromAminoMsg(object: _218.QuerySmartContractStateResponseAminoMsg): _218.QuerySmartContractStateResponse;
                toAminoMsg(message: _218.QuerySmartContractStateResponse): _218.QuerySmartContractStateResponseAminoMsg;
                fromProtoMsg(message: _218.QuerySmartContractStateResponseProtoMsg): _218.QuerySmartContractStateResponse;
                toProto(message: _218.QuerySmartContractStateResponse): Uint8Array;
                toProtoMsg(message: _218.QuerySmartContractStateResponse): _218.QuerySmartContractStateResponseProtoMsg;
            };
            QueryCodeRequest: {
                typeUrl: string;
                encode(message: _218.QueryCodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryCodeRequest;
                fromJSON(object: any): _218.QueryCodeRequest;
                toJSON(message: _218.QueryCodeRequest): unknown;
                fromPartial(object: Partial<_218.QueryCodeRequest>): _218.QueryCodeRequest;
                fromAmino(object: _218.QueryCodeRequestAmino): _218.QueryCodeRequest;
                toAmino(message: _218.QueryCodeRequest): _218.QueryCodeRequestAmino;
                fromAminoMsg(object: _218.QueryCodeRequestAminoMsg): _218.QueryCodeRequest;
                toAminoMsg(message: _218.QueryCodeRequest): _218.QueryCodeRequestAminoMsg;
                fromProtoMsg(message: _218.QueryCodeRequestProtoMsg): _218.QueryCodeRequest;
                toProto(message: _218.QueryCodeRequest): Uint8Array;
                toProtoMsg(message: _218.QueryCodeRequest): _218.QueryCodeRequestProtoMsg;
            };
            CodeInfoResponse: {
                typeUrl: string;
                encode(message: _218.CodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.CodeInfoResponse;
                fromJSON(object: any): _218.CodeInfoResponse;
                toJSON(message: _218.CodeInfoResponse): unknown;
                fromPartial(object: Partial<_218.CodeInfoResponse>): _218.CodeInfoResponse;
                fromAmino(object: _218.CodeInfoResponseAmino): _218.CodeInfoResponse;
                toAmino(message: _218.CodeInfoResponse): _218.CodeInfoResponseAmino;
                fromAminoMsg(object: _218.CodeInfoResponseAminoMsg): _218.CodeInfoResponse;
                toAminoMsg(message: _218.CodeInfoResponse): _218.CodeInfoResponseAminoMsg;
                fromProtoMsg(message: _218.CodeInfoResponseProtoMsg): _218.CodeInfoResponse;
                toProto(message: _218.CodeInfoResponse): Uint8Array;
                toProtoMsg(message: _218.CodeInfoResponse): _218.CodeInfoResponseProtoMsg;
            };
            QueryCodeResponse: {
                typeUrl: string;
                encode(message: _218.QueryCodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryCodeResponse;
                fromJSON(object: any): _218.QueryCodeResponse;
                toJSON(message: _218.QueryCodeResponse): unknown;
                fromPartial(object: Partial<_218.QueryCodeResponse>): _218.QueryCodeResponse;
                fromAmino(object: _218.QueryCodeResponseAmino): _218.QueryCodeResponse;
                toAmino(message: _218.QueryCodeResponse): _218.QueryCodeResponseAmino;
                fromAminoMsg(object: _218.QueryCodeResponseAminoMsg): _218.QueryCodeResponse;
                toAminoMsg(message: _218.QueryCodeResponse): _218.QueryCodeResponseAminoMsg;
                fromProtoMsg(message: _218.QueryCodeResponseProtoMsg): _218.QueryCodeResponse;
                toProto(message: _218.QueryCodeResponse): Uint8Array;
                toProtoMsg(message: _218.QueryCodeResponse): _218.QueryCodeResponseProtoMsg;
            };
            QueryCodesRequest: {
                typeUrl: string;
                encode(message: _218.QueryCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryCodesRequest;
                fromJSON(object: any): _218.QueryCodesRequest;
                toJSON(message: _218.QueryCodesRequest): unknown;
                fromPartial(object: Partial<_218.QueryCodesRequest>): _218.QueryCodesRequest;
                fromAmino(object: _218.QueryCodesRequestAmino): _218.QueryCodesRequest;
                toAmino(message: _218.QueryCodesRequest): _218.QueryCodesRequestAmino;
                fromAminoMsg(object: _218.QueryCodesRequestAminoMsg): _218.QueryCodesRequest;
                toAminoMsg(message: _218.QueryCodesRequest): _218.QueryCodesRequestAminoMsg;
                fromProtoMsg(message: _218.QueryCodesRequestProtoMsg): _218.QueryCodesRequest;
                toProto(message: _218.QueryCodesRequest): Uint8Array;
                toProtoMsg(message: _218.QueryCodesRequest): _218.QueryCodesRequestProtoMsg;
            };
            QueryCodesResponse: {
                typeUrl: string;
                encode(message: _218.QueryCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryCodesResponse;
                fromJSON(object: any): _218.QueryCodesResponse;
                toJSON(message: _218.QueryCodesResponse): unknown;
                fromPartial(object: Partial<_218.QueryCodesResponse>): _218.QueryCodesResponse;
                fromAmino(object: _218.QueryCodesResponseAmino): _218.QueryCodesResponse;
                toAmino(message: _218.QueryCodesResponse): _218.QueryCodesResponseAmino;
                fromAminoMsg(object: _218.QueryCodesResponseAminoMsg): _218.QueryCodesResponse;
                toAminoMsg(message: _218.QueryCodesResponse): _218.QueryCodesResponseAminoMsg;
                fromProtoMsg(message: _218.QueryCodesResponseProtoMsg): _218.QueryCodesResponse;
                toProto(message: _218.QueryCodesResponse): Uint8Array;
                toProtoMsg(message: _218.QueryCodesResponse): _218.QueryCodesResponseProtoMsg;
            };
            QueryPinnedCodesRequest: {
                typeUrl: string;
                encode(message: _218.QueryPinnedCodesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryPinnedCodesRequest;
                fromJSON(object: any): _218.QueryPinnedCodesRequest;
                toJSON(message: _218.QueryPinnedCodesRequest): unknown;
                fromPartial(object: Partial<_218.QueryPinnedCodesRequest>): _218.QueryPinnedCodesRequest;
                fromAmino(object: _218.QueryPinnedCodesRequestAmino): _218.QueryPinnedCodesRequest;
                toAmino(message: _218.QueryPinnedCodesRequest): _218.QueryPinnedCodesRequestAmino;
                fromAminoMsg(object: _218.QueryPinnedCodesRequestAminoMsg): _218.QueryPinnedCodesRequest;
                toAminoMsg(message: _218.QueryPinnedCodesRequest): _218.QueryPinnedCodesRequestAminoMsg;
                fromProtoMsg(message: _218.QueryPinnedCodesRequestProtoMsg): _218.QueryPinnedCodesRequest;
                toProto(message: _218.QueryPinnedCodesRequest): Uint8Array;
                toProtoMsg(message: _218.QueryPinnedCodesRequest): _218.QueryPinnedCodesRequestProtoMsg;
            };
            QueryPinnedCodesResponse: {
                typeUrl: string;
                encode(message: _218.QueryPinnedCodesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryPinnedCodesResponse;
                fromJSON(object: any): _218.QueryPinnedCodesResponse;
                toJSON(message: _218.QueryPinnedCodesResponse): unknown;
                fromPartial(object: Partial<_218.QueryPinnedCodesResponse>): _218.QueryPinnedCodesResponse;
                fromAmino(object: _218.QueryPinnedCodesResponseAmino): _218.QueryPinnedCodesResponse;
                toAmino(message: _218.QueryPinnedCodesResponse): _218.QueryPinnedCodesResponseAmino;
                fromAminoMsg(object: _218.QueryPinnedCodesResponseAminoMsg): _218.QueryPinnedCodesResponse;
                toAminoMsg(message: _218.QueryPinnedCodesResponse): _218.QueryPinnedCodesResponseAminoMsg;
                fromProtoMsg(message: _218.QueryPinnedCodesResponseProtoMsg): _218.QueryPinnedCodesResponse;
                toProto(message: _218.QueryPinnedCodesResponse): Uint8Array;
                toProtoMsg(message: _218.QueryPinnedCodesResponse): _218.QueryPinnedCodesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _218.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryParamsRequest;
                fromJSON(_: any): _218.QueryParamsRequest;
                toJSON(_: _218.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_218.QueryParamsRequest>): _218.QueryParamsRequest;
                fromAmino(_: _218.QueryParamsRequestAmino): _218.QueryParamsRequest;
                toAmino(_: _218.QueryParamsRequest): _218.QueryParamsRequestAmino;
                fromAminoMsg(object: _218.QueryParamsRequestAminoMsg): _218.QueryParamsRequest;
                toAminoMsg(message: _218.QueryParamsRequest): _218.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _218.QueryParamsRequestProtoMsg): _218.QueryParamsRequest;
                toProto(message: _218.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _218.QueryParamsRequest): _218.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _218.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryParamsResponse;
                fromJSON(object: any): _218.QueryParamsResponse;
                toJSON(message: _218.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_218.QueryParamsResponse>): _218.QueryParamsResponse;
                fromAmino(object: _218.QueryParamsResponseAmino): _218.QueryParamsResponse;
                toAmino(message: _218.QueryParamsResponse): _218.QueryParamsResponseAmino;
                fromAminoMsg(object: _218.QueryParamsResponseAminoMsg): _218.QueryParamsResponse;
                toAminoMsg(message: _218.QueryParamsResponse): _218.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _218.QueryParamsResponseProtoMsg): _218.QueryParamsResponse;
                toProto(message: _218.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _218.QueryParamsResponse): _218.QueryParamsResponseProtoMsg;
            };
            QueryContractsByCreatorRequest: {
                typeUrl: string;
                encode(message: _218.QueryContractsByCreatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryContractsByCreatorRequest;
                fromJSON(object: any): _218.QueryContractsByCreatorRequest;
                toJSON(message: _218.QueryContractsByCreatorRequest): unknown;
                fromPartial(object: Partial<_218.QueryContractsByCreatorRequest>): _218.QueryContractsByCreatorRequest;
                fromAmino(object: _218.QueryContractsByCreatorRequestAmino): _218.QueryContractsByCreatorRequest;
                toAmino(message: _218.QueryContractsByCreatorRequest): _218.QueryContractsByCreatorRequestAmino;
                fromAminoMsg(object: _218.QueryContractsByCreatorRequestAminoMsg): _218.QueryContractsByCreatorRequest;
                toAminoMsg(message: _218.QueryContractsByCreatorRequest): _218.QueryContractsByCreatorRequestAminoMsg;
                fromProtoMsg(message: _218.QueryContractsByCreatorRequestProtoMsg): _218.QueryContractsByCreatorRequest;
                toProto(message: _218.QueryContractsByCreatorRequest): Uint8Array;
                toProtoMsg(message: _218.QueryContractsByCreatorRequest): _218.QueryContractsByCreatorRequestProtoMsg;
            };
            QueryContractsByCreatorResponse: {
                typeUrl: string;
                encode(message: _218.QueryContractsByCreatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.QueryContractsByCreatorResponse;
                fromJSON(object: any): _218.QueryContractsByCreatorResponse;
                toJSON(message: _218.QueryContractsByCreatorResponse): unknown;
                fromPartial(object: Partial<_218.QueryContractsByCreatorResponse>): _218.QueryContractsByCreatorResponse;
                fromAmino(object: _218.QueryContractsByCreatorResponseAmino): _218.QueryContractsByCreatorResponse;
                toAmino(message: _218.QueryContractsByCreatorResponse): _218.QueryContractsByCreatorResponseAmino;
                fromAminoMsg(object: _218.QueryContractsByCreatorResponseAminoMsg): _218.QueryContractsByCreatorResponse;
                toAminoMsg(message: _218.QueryContractsByCreatorResponse): _218.QueryContractsByCreatorResponseAminoMsg;
                fromProtoMsg(message: _218.QueryContractsByCreatorResponseProtoMsg): _218.QueryContractsByCreatorResponse;
                toProto(message: _218.QueryContractsByCreatorResponse): Uint8Array;
                toProtoMsg(message: _218.QueryContractsByCreatorResponse): _218.QueryContractsByCreatorResponseProtoMsg;
            };
            StoreCodeProposal: {
                typeUrl: string;
                encode(message: _217.StoreCodeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.StoreCodeProposal;
                fromJSON(object: any): _217.StoreCodeProposal;
                toJSON(message: _217.StoreCodeProposal): unknown;
                fromPartial(object: Partial<_217.StoreCodeProposal>): _217.StoreCodeProposal;
                fromAmino(object: _217.StoreCodeProposalAmino): _217.StoreCodeProposal;
                toAmino(message: _217.StoreCodeProposal): _217.StoreCodeProposalAmino;
                fromAminoMsg(object: _217.StoreCodeProposalAminoMsg): _217.StoreCodeProposal;
                toAminoMsg(message: _217.StoreCodeProposal): _217.StoreCodeProposalAminoMsg;
                fromProtoMsg(message: _217.StoreCodeProposalProtoMsg): _217.StoreCodeProposal;
                toProto(message: _217.StoreCodeProposal): Uint8Array;
                toProtoMsg(message: _217.StoreCodeProposal): _217.StoreCodeProposalProtoMsg;
            };
            InstantiateContractProposal: {
                typeUrl: string;
                encode(message: _217.InstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.InstantiateContractProposal;
                fromJSON(object: any): _217.InstantiateContractProposal;
                toJSON(message: _217.InstantiateContractProposal): unknown;
                fromPartial(object: Partial<_217.InstantiateContractProposal>): _217.InstantiateContractProposal;
                fromAmino(object: _217.InstantiateContractProposalAmino): _217.InstantiateContractProposal;
                toAmino(message: _217.InstantiateContractProposal): _217.InstantiateContractProposalAmino;
                fromAminoMsg(object: _217.InstantiateContractProposalAminoMsg): _217.InstantiateContractProposal;
                toAminoMsg(message: _217.InstantiateContractProposal): _217.InstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _217.InstantiateContractProposalProtoMsg): _217.InstantiateContractProposal;
                toProto(message: _217.InstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _217.InstantiateContractProposal): _217.InstantiateContractProposalProtoMsg;
            };
            InstantiateContract2Proposal: {
                typeUrl: string;
                encode(message: _217.InstantiateContract2Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.InstantiateContract2Proposal;
                fromJSON(object: any): _217.InstantiateContract2Proposal;
                toJSON(message: _217.InstantiateContract2Proposal): unknown;
                fromPartial(object: Partial<_217.InstantiateContract2Proposal>): _217.InstantiateContract2Proposal;
                fromAmino(object: _217.InstantiateContract2ProposalAmino): _217.InstantiateContract2Proposal;
                toAmino(message: _217.InstantiateContract2Proposal): _217.InstantiateContract2ProposalAmino;
                fromAminoMsg(object: _217.InstantiateContract2ProposalAminoMsg): _217.InstantiateContract2Proposal;
                toAminoMsg(message: _217.InstantiateContract2Proposal): _217.InstantiateContract2ProposalAminoMsg;
                fromProtoMsg(message: _217.InstantiateContract2ProposalProtoMsg): _217.InstantiateContract2Proposal;
                toProto(message: _217.InstantiateContract2Proposal): Uint8Array;
                toProtoMsg(message: _217.InstantiateContract2Proposal): _217.InstantiateContract2ProposalProtoMsg;
            };
            MigrateContractProposal: {
                typeUrl: string;
                encode(message: _217.MigrateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MigrateContractProposal;
                fromJSON(object: any): _217.MigrateContractProposal;
                toJSON(message: _217.MigrateContractProposal): unknown;
                fromPartial(object: Partial<_217.MigrateContractProposal>): _217.MigrateContractProposal;
                fromAmino(object: _217.MigrateContractProposalAmino): _217.MigrateContractProposal;
                toAmino(message: _217.MigrateContractProposal): _217.MigrateContractProposalAmino;
                fromAminoMsg(object: _217.MigrateContractProposalAminoMsg): _217.MigrateContractProposal;
                toAminoMsg(message: _217.MigrateContractProposal): _217.MigrateContractProposalAminoMsg;
                fromProtoMsg(message: _217.MigrateContractProposalProtoMsg): _217.MigrateContractProposal;
                toProto(message: _217.MigrateContractProposal): Uint8Array;
                toProtoMsg(message: _217.MigrateContractProposal): _217.MigrateContractProposalProtoMsg;
            };
            SudoContractProposal: {
                typeUrl: string;
                encode(message: _217.SudoContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.SudoContractProposal;
                fromJSON(object: any): _217.SudoContractProposal;
                toJSON(message: _217.SudoContractProposal): unknown;
                fromPartial(object: Partial<_217.SudoContractProposal>): _217.SudoContractProposal;
                fromAmino(object: _217.SudoContractProposalAmino): _217.SudoContractProposal;
                toAmino(message: _217.SudoContractProposal): _217.SudoContractProposalAmino;
                fromAminoMsg(object: _217.SudoContractProposalAminoMsg): _217.SudoContractProposal;
                toAminoMsg(message: _217.SudoContractProposal): _217.SudoContractProposalAminoMsg;
                fromProtoMsg(message: _217.SudoContractProposalProtoMsg): _217.SudoContractProposal;
                toProto(message: _217.SudoContractProposal): Uint8Array;
                toProtoMsg(message: _217.SudoContractProposal): _217.SudoContractProposalProtoMsg;
            };
            ExecuteContractProposal: {
                typeUrl: string;
                encode(message: _217.ExecuteContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.ExecuteContractProposal;
                fromJSON(object: any): _217.ExecuteContractProposal;
                toJSON(message: _217.ExecuteContractProposal): unknown;
                fromPartial(object: Partial<_217.ExecuteContractProposal>): _217.ExecuteContractProposal;
                fromAmino(object: _217.ExecuteContractProposalAmino): _217.ExecuteContractProposal;
                toAmino(message: _217.ExecuteContractProposal): _217.ExecuteContractProposalAmino;
                fromAminoMsg(object: _217.ExecuteContractProposalAminoMsg): _217.ExecuteContractProposal;
                toAminoMsg(message: _217.ExecuteContractProposal): _217.ExecuteContractProposalAminoMsg;
                fromProtoMsg(message: _217.ExecuteContractProposalProtoMsg): _217.ExecuteContractProposal;
                toProto(message: _217.ExecuteContractProposal): Uint8Array;
                toProtoMsg(message: _217.ExecuteContractProposal): _217.ExecuteContractProposalProtoMsg;
            };
            UpdateAdminProposal: {
                typeUrl: string;
                encode(message: _217.UpdateAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.UpdateAdminProposal;
                fromJSON(object: any): _217.UpdateAdminProposal;
                toJSON(message: _217.UpdateAdminProposal): unknown;
                fromPartial(object: Partial<_217.UpdateAdminProposal>): _217.UpdateAdminProposal;
                fromAmino(object: _217.UpdateAdminProposalAmino): _217.UpdateAdminProposal;
                toAmino(message: _217.UpdateAdminProposal): _217.UpdateAdminProposalAmino;
                fromAminoMsg(object: _217.UpdateAdminProposalAminoMsg): _217.UpdateAdminProposal;
                toAminoMsg(message: _217.UpdateAdminProposal): _217.UpdateAdminProposalAminoMsg;
                fromProtoMsg(message: _217.UpdateAdminProposalProtoMsg): _217.UpdateAdminProposal;
                toProto(message: _217.UpdateAdminProposal): Uint8Array;
                toProtoMsg(message: _217.UpdateAdminProposal): _217.UpdateAdminProposalProtoMsg;
            };
            ClearAdminProposal: {
                typeUrl: string;
                encode(message: _217.ClearAdminProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.ClearAdminProposal;
                fromJSON(object: any): _217.ClearAdminProposal;
                toJSON(message: _217.ClearAdminProposal): unknown;
                fromPartial(object: Partial<_217.ClearAdminProposal>): _217.ClearAdminProposal;
                fromAmino(object: _217.ClearAdminProposalAmino): _217.ClearAdminProposal;
                toAmino(message: _217.ClearAdminProposal): _217.ClearAdminProposalAmino;
                fromAminoMsg(object: _217.ClearAdminProposalAminoMsg): _217.ClearAdminProposal;
                toAminoMsg(message: _217.ClearAdminProposal): _217.ClearAdminProposalAminoMsg;
                fromProtoMsg(message: _217.ClearAdminProposalProtoMsg): _217.ClearAdminProposal;
                toProto(message: _217.ClearAdminProposal): Uint8Array;
                toProtoMsg(message: _217.ClearAdminProposal): _217.ClearAdminProposalProtoMsg;
            };
            PinCodesProposal: {
                typeUrl: string;
                encode(message: _217.PinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.PinCodesProposal;
                fromJSON(object: any): _217.PinCodesProposal;
                toJSON(message: _217.PinCodesProposal): unknown;
                fromPartial(object: Partial<_217.PinCodesProposal>): _217.PinCodesProposal;
                fromAmino(object: _217.PinCodesProposalAmino): _217.PinCodesProposal;
                toAmino(message: _217.PinCodesProposal): _217.PinCodesProposalAmino;
                fromAminoMsg(object: _217.PinCodesProposalAminoMsg): _217.PinCodesProposal;
                toAminoMsg(message: _217.PinCodesProposal): _217.PinCodesProposalAminoMsg;
                fromProtoMsg(message: _217.PinCodesProposalProtoMsg): _217.PinCodesProposal;
                toProto(message: _217.PinCodesProposal): Uint8Array;
                toProtoMsg(message: _217.PinCodesProposal): _217.PinCodesProposalProtoMsg;
            };
            UnpinCodesProposal: {
                typeUrl: string;
                encode(message: _217.UnpinCodesProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.UnpinCodesProposal;
                fromJSON(object: any): _217.UnpinCodesProposal;
                toJSON(message: _217.UnpinCodesProposal): unknown;
                fromPartial(object: Partial<_217.UnpinCodesProposal>): _217.UnpinCodesProposal;
                fromAmino(object: _217.UnpinCodesProposalAmino): _217.UnpinCodesProposal;
                toAmino(message: _217.UnpinCodesProposal): _217.UnpinCodesProposalAmino;
                fromAminoMsg(object: _217.UnpinCodesProposalAminoMsg): _217.UnpinCodesProposal;
                toAminoMsg(message: _217.UnpinCodesProposal): _217.UnpinCodesProposalAminoMsg;
                fromProtoMsg(message: _217.UnpinCodesProposalProtoMsg): _217.UnpinCodesProposal;
                toProto(message: _217.UnpinCodesProposal): Uint8Array;
                toProtoMsg(message: _217.UnpinCodesProposal): _217.UnpinCodesProposalProtoMsg;
            };
            AccessConfigUpdate: {
                typeUrl: string;
                encode(message: _217.AccessConfigUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.AccessConfigUpdate;
                fromJSON(object: any): _217.AccessConfigUpdate;
                toJSON(message: _217.AccessConfigUpdate): unknown;
                fromPartial(object: Partial<_217.AccessConfigUpdate>): _217.AccessConfigUpdate;
                fromAmino(object: _217.AccessConfigUpdateAmino): _217.AccessConfigUpdate;
                toAmino(message: _217.AccessConfigUpdate): _217.AccessConfigUpdateAmino;
                fromAminoMsg(object: _217.AccessConfigUpdateAminoMsg): _217.AccessConfigUpdate;
                toAminoMsg(message: _217.AccessConfigUpdate): _217.AccessConfigUpdateAminoMsg;
                fromProtoMsg(message: _217.AccessConfigUpdateProtoMsg): _217.AccessConfigUpdate;
                toProto(message: _217.AccessConfigUpdate): Uint8Array;
                toProtoMsg(message: _217.AccessConfigUpdate): _217.AccessConfigUpdateProtoMsg;
            };
            UpdateInstantiateConfigProposal: {
                typeUrl: string;
                encode(message: _217.UpdateInstantiateConfigProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.UpdateInstantiateConfigProposal;
                fromJSON(object: any): _217.UpdateInstantiateConfigProposal;
                toJSON(message: _217.UpdateInstantiateConfigProposal): unknown;
                fromPartial(object: Partial<_217.UpdateInstantiateConfigProposal>): _217.UpdateInstantiateConfigProposal;
                fromAmino(object: _217.UpdateInstantiateConfigProposalAmino): _217.UpdateInstantiateConfigProposal;
                toAmino(message: _217.UpdateInstantiateConfigProposal): _217.UpdateInstantiateConfigProposalAmino;
                fromAminoMsg(object: _217.UpdateInstantiateConfigProposalAminoMsg): _217.UpdateInstantiateConfigProposal;
                toAminoMsg(message: _217.UpdateInstantiateConfigProposal): _217.UpdateInstantiateConfigProposalAminoMsg;
                fromProtoMsg(message: _217.UpdateInstantiateConfigProposalProtoMsg): _217.UpdateInstantiateConfigProposal;
                toProto(message: _217.UpdateInstantiateConfigProposal): Uint8Array;
                toProtoMsg(message: _217.UpdateInstantiateConfigProposal): _217.UpdateInstantiateConfigProposalProtoMsg;
            };
            StoreAndInstantiateContractProposal: {
                typeUrl: string;
                encode(message: _217.StoreAndInstantiateContractProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.StoreAndInstantiateContractProposal;
                fromJSON(object: any): _217.StoreAndInstantiateContractProposal;
                toJSON(message: _217.StoreAndInstantiateContractProposal): unknown;
                fromPartial(object: Partial<_217.StoreAndInstantiateContractProposal>): _217.StoreAndInstantiateContractProposal;
                fromAmino(object: _217.StoreAndInstantiateContractProposalAmino): _217.StoreAndInstantiateContractProposal;
                toAmino(message: _217.StoreAndInstantiateContractProposal): _217.StoreAndInstantiateContractProposalAmino;
                fromAminoMsg(object: _217.StoreAndInstantiateContractProposalAminoMsg): _217.StoreAndInstantiateContractProposal;
                toAminoMsg(message: _217.StoreAndInstantiateContractProposal): _217.StoreAndInstantiateContractProposalAminoMsg;
                fromProtoMsg(message: _217.StoreAndInstantiateContractProposalProtoMsg): _217.StoreAndInstantiateContractProposal;
                toProto(message: _217.StoreAndInstantiateContractProposal): Uint8Array;
                toProtoMsg(message: _217.StoreAndInstantiateContractProposal): _217.StoreAndInstantiateContractProposalProtoMsg;
            };
            MsgIBCSend: {
                typeUrl: string;
                encode(message: _216.MsgIBCSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgIBCSend;
                fromJSON(object: any): _216.MsgIBCSend;
                toJSON(message: _216.MsgIBCSend): unknown;
                fromPartial(object: Partial<_216.MsgIBCSend>): _216.MsgIBCSend;
                fromAmino(object: _216.MsgIBCSendAmino): _216.MsgIBCSend;
                toAmino(message: _216.MsgIBCSend): _216.MsgIBCSendAmino;
                fromAminoMsg(object: _216.MsgIBCSendAminoMsg): _216.MsgIBCSend;
                toAminoMsg(message: _216.MsgIBCSend): _216.MsgIBCSendAminoMsg;
                fromProtoMsg(message: _216.MsgIBCSendProtoMsg): _216.MsgIBCSend;
                toProto(message: _216.MsgIBCSend): Uint8Array;
                toProtoMsg(message: _216.MsgIBCSend): _216.MsgIBCSendProtoMsg;
            };
            MsgIBCSendResponse: {
                typeUrl: string;
                encode(message: _216.MsgIBCSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgIBCSendResponse;
                fromJSON(object: any): _216.MsgIBCSendResponse;
                toJSON(message: _216.MsgIBCSendResponse): unknown;
                fromPartial(object: Partial<_216.MsgIBCSendResponse>): _216.MsgIBCSendResponse;
                fromAmino(object: _216.MsgIBCSendResponseAmino): _216.MsgIBCSendResponse;
                toAmino(message: _216.MsgIBCSendResponse): _216.MsgIBCSendResponseAmino;
                fromAminoMsg(object: _216.MsgIBCSendResponseAminoMsg): _216.MsgIBCSendResponse;
                toAminoMsg(message: _216.MsgIBCSendResponse): _216.MsgIBCSendResponseAminoMsg;
                fromProtoMsg(message: _216.MsgIBCSendResponseProtoMsg): _216.MsgIBCSendResponse;
                toProto(message: _216.MsgIBCSendResponse): Uint8Array;
                toProtoMsg(message: _216.MsgIBCSendResponse): _216.MsgIBCSendResponseProtoMsg;
            };
            MsgIBCCloseChannel: {
                typeUrl: string;
                encode(message: _216.MsgIBCCloseChannel, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.MsgIBCCloseChannel;
                fromJSON(object: any): _216.MsgIBCCloseChannel;
                toJSON(message: _216.MsgIBCCloseChannel): unknown;
                fromPartial(object: Partial<_216.MsgIBCCloseChannel>): _216.MsgIBCCloseChannel;
                fromAmino(object: _216.MsgIBCCloseChannelAmino): _216.MsgIBCCloseChannel;
                toAmino(message: _216.MsgIBCCloseChannel): _216.MsgIBCCloseChannelAmino;
                fromAminoMsg(object: _216.MsgIBCCloseChannelAminoMsg): _216.MsgIBCCloseChannel;
                toAminoMsg(message: _216.MsgIBCCloseChannel): _216.MsgIBCCloseChannelAminoMsg;
                fromProtoMsg(message: _216.MsgIBCCloseChannelProtoMsg): _216.MsgIBCCloseChannel;
                toProto(message: _216.MsgIBCCloseChannel): Uint8Array;
                toProtoMsg(message: _216.MsgIBCCloseChannel): _216.MsgIBCCloseChannelProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _215.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.GenesisState;
                fromJSON(object: any): _215.GenesisState;
                toJSON(message: _215.GenesisState): unknown;
                fromPartial(object: Partial<_215.GenesisState>): _215.GenesisState;
                fromAmino(object: _215.GenesisStateAmino): _215.GenesisState;
                toAmino(message: _215.GenesisState): _215.GenesisStateAmino;
                fromAminoMsg(object: _215.GenesisStateAminoMsg): _215.GenesisState;
                toAminoMsg(message: _215.GenesisState): _215.GenesisStateAminoMsg;
                fromProtoMsg(message: _215.GenesisStateProtoMsg): _215.GenesisState;
                toProto(message: _215.GenesisState): Uint8Array;
                toProtoMsg(message: _215.GenesisState): _215.GenesisStateProtoMsg;
            };
            Code: {
                typeUrl: string;
                encode(message: _215.Code, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Code;
                fromJSON(object: any): _215.Code;
                toJSON(message: _215.Code): unknown;
                fromPartial(object: Partial<_215.Code>): _215.Code;
                fromAmino(object: _215.CodeAmino): _215.Code;
                toAmino(message: _215.Code): _215.CodeAmino;
                fromAminoMsg(object: _215.CodeAminoMsg): _215.Code;
                toAminoMsg(message: _215.Code): _215.CodeAminoMsg;
                fromProtoMsg(message: _215.CodeProtoMsg): _215.Code;
                toProto(message: _215.Code): Uint8Array;
                toProtoMsg(message: _215.Code): _215.CodeProtoMsg;
            };
            Contract: {
                typeUrl: string;
                encode(message: _215.Contract, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Contract;
                fromJSON(object: any): _215.Contract;
                toJSON(message: _215.Contract): unknown;
                fromPartial(object: Partial<_215.Contract>): _215.Contract;
                fromAmino(object: _215.ContractAmino): _215.Contract;
                toAmino(message: _215.Contract): _215.ContractAmino;
                fromAminoMsg(object: _215.ContractAminoMsg): _215.Contract;
                toAminoMsg(message: _215.Contract): _215.ContractAminoMsg;
                fromProtoMsg(message: _215.ContractProtoMsg): _215.Contract;
                toProto(message: _215.Contract): Uint8Array;
                toProtoMsg(message: _215.Contract): _215.ContractProtoMsg;
            };
            Sequence: {
                typeUrl: string;
                encode(message: _215.Sequence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Sequence;
                fromJSON(object: any): _215.Sequence;
                toJSON(message: _215.Sequence): unknown;
                fromPartial(object: Partial<_215.Sequence>): _215.Sequence;
                fromAmino(object: _215.SequenceAmino): _215.Sequence;
                toAmino(message: _215.Sequence): _215.SequenceAmino;
                fromAminoMsg(object: _215.SequenceAminoMsg): _215.Sequence;
                toAminoMsg(message: _215.Sequence): _215.SequenceAminoMsg;
                fromProtoMsg(message: _215.SequenceProtoMsg): _215.Sequence;
                toProto(message: _215.Sequence): Uint8Array;
                toProtoMsg(message: _215.Sequence): _215.SequenceProtoMsg;
            };
            ContractExecutionAuthorization: {
                typeUrl: string;
                encode(message: _214.ContractExecutionAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ContractExecutionAuthorization;
                fromJSON(object: any): _214.ContractExecutionAuthorization;
                toJSON(message: _214.ContractExecutionAuthorization): unknown;
                fromPartial(object: Partial<_214.ContractExecutionAuthorization>): _214.ContractExecutionAuthorization;
                fromAmino(object: _214.ContractExecutionAuthorizationAmino): _214.ContractExecutionAuthorization;
                toAmino(message: _214.ContractExecutionAuthorization): _214.ContractExecutionAuthorizationAmino;
                fromAminoMsg(object: _214.ContractExecutionAuthorizationAminoMsg): _214.ContractExecutionAuthorization;
                toAminoMsg(message: _214.ContractExecutionAuthorization): _214.ContractExecutionAuthorizationAminoMsg;
                fromProtoMsg(message: _214.ContractExecutionAuthorizationProtoMsg): _214.ContractExecutionAuthorization;
                toProto(message: _214.ContractExecutionAuthorization): Uint8Array;
                toProtoMsg(message: _214.ContractExecutionAuthorization): _214.ContractExecutionAuthorizationProtoMsg;
            };
            ContractMigrationAuthorization: {
                typeUrl: string;
                encode(message: _214.ContractMigrationAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ContractMigrationAuthorization;
                fromJSON(object: any): _214.ContractMigrationAuthorization;
                toJSON(message: _214.ContractMigrationAuthorization): unknown;
                fromPartial(object: Partial<_214.ContractMigrationAuthorization>): _214.ContractMigrationAuthorization;
                fromAmino(object: _214.ContractMigrationAuthorizationAmino): _214.ContractMigrationAuthorization;
                toAmino(message: _214.ContractMigrationAuthorization): _214.ContractMigrationAuthorizationAmino;
                fromAminoMsg(object: _214.ContractMigrationAuthorizationAminoMsg): _214.ContractMigrationAuthorization;
                toAminoMsg(message: _214.ContractMigrationAuthorization): _214.ContractMigrationAuthorizationAminoMsg;
                fromProtoMsg(message: _214.ContractMigrationAuthorizationProtoMsg): _214.ContractMigrationAuthorization;
                toProto(message: _214.ContractMigrationAuthorization): Uint8Array;
                toProtoMsg(message: _214.ContractMigrationAuthorization): _214.ContractMigrationAuthorizationProtoMsg;
            };
            ContractGrant: {
                typeUrl: string;
                encode(message: _214.ContractGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ContractGrant;
                fromJSON(object: any): _214.ContractGrant;
                toJSON(message: _214.ContractGrant): unknown;
                fromPartial(object: Partial<_214.ContractGrant>): _214.ContractGrant;
                fromAmino(object: _214.ContractGrantAmino): _214.ContractGrant;
                toAmino(message: _214.ContractGrant): _214.ContractGrantAmino;
                fromAminoMsg(object: _214.ContractGrantAminoMsg): _214.ContractGrant;
                toAminoMsg(message: _214.ContractGrant): _214.ContractGrantAminoMsg;
                fromProtoMsg(message: _214.ContractGrantProtoMsg): _214.ContractGrant;
                toProto(message: _214.ContractGrant): Uint8Array;
                toProtoMsg(message: _214.ContractGrant): _214.ContractGrantProtoMsg;
            };
            MaxCallsLimit: {
                typeUrl: string;
                encode(message: _214.MaxCallsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.MaxCallsLimit;
                fromJSON(object: any): _214.MaxCallsLimit;
                toJSON(message: _214.MaxCallsLimit): unknown;
                fromPartial(object: Partial<_214.MaxCallsLimit>): _214.MaxCallsLimit;
                fromAmino(object: _214.MaxCallsLimitAmino): _214.MaxCallsLimit;
                toAmino(message: _214.MaxCallsLimit): _214.MaxCallsLimitAmino;
                fromAminoMsg(object: _214.MaxCallsLimitAminoMsg): _214.MaxCallsLimit;
                toAminoMsg(message: _214.MaxCallsLimit): _214.MaxCallsLimitAminoMsg;
                fromProtoMsg(message: _214.MaxCallsLimitProtoMsg): _214.MaxCallsLimit;
                toProto(message: _214.MaxCallsLimit): Uint8Array;
                toProtoMsg(message: _214.MaxCallsLimit): _214.MaxCallsLimitProtoMsg;
            };
            MaxFundsLimit: {
                typeUrl: string;
                encode(message: _214.MaxFundsLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.MaxFundsLimit;
                fromJSON(object: any): _214.MaxFundsLimit;
                toJSON(message: _214.MaxFundsLimit): unknown;
                fromPartial(object: Partial<_214.MaxFundsLimit>): _214.MaxFundsLimit;
                fromAmino(object: _214.MaxFundsLimitAmino): _214.MaxFundsLimit;
                toAmino(message: _214.MaxFundsLimit): _214.MaxFundsLimitAmino;
                fromAminoMsg(object: _214.MaxFundsLimitAminoMsg): _214.MaxFundsLimit;
                toAminoMsg(message: _214.MaxFundsLimit): _214.MaxFundsLimitAminoMsg;
                fromProtoMsg(message: _214.MaxFundsLimitProtoMsg): _214.MaxFundsLimit;
                toProto(message: _214.MaxFundsLimit): Uint8Array;
                toProtoMsg(message: _214.MaxFundsLimit): _214.MaxFundsLimitProtoMsg;
            };
            CombinedLimit: {
                typeUrl: string;
                encode(message: _214.CombinedLimit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.CombinedLimit;
                fromJSON(object: any): _214.CombinedLimit;
                toJSON(message: _214.CombinedLimit): unknown;
                fromPartial(object: Partial<_214.CombinedLimit>): _214.CombinedLimit;
                fromAmino(object: _214.CombinedLimitAmino): _214.CombinedLimit;
                toAmino(message: _214.CombinedLimit): _214.CombinedLimitAmino;
                fromAminoMsg(object: _214.CombinedLimitAminoMsg): _214.CombinedLimit;
                toAminoMsg(message: _214.CombinedLimit): _214.CombinedLimitAminoMsg;
                fromProtoMsg(message: _214.CombinedLimitProtoMsg): _214.CombinedLimit;
                toProto(message: _214.CombinedLimit): Uint8Array;
                toProtoMsg(message: _214.CombinedLimit): _214.CombinedLimitProtoMsg;
            };
            AllowAllMessagesFilter: {
                typeUrl: string;
                encode(_: _214.AllowAllMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.AllowAllMessagesFilter;
                fromJSON(_: any): _214.AllowAllMessagesFilter;
                toJSON(_: _214.AllowAllMessagesFilter): unknown;
                fromPartial(_: Partial<_214.AllowAllMessagesFilter>): _214.AllowAllMessagesFilter;
                fromAmino(_: _214.AllowAllMessagesFilterAmino): _214.AllowAllMessagesFilter;
                toAmino(_: _214.AllowAllMessagesFilter): _214.AllowAllMessagesFilterAmino;
                fromAminoMsg(object: _214.AllowAllMessagesFilterAminoMsg): _214.AllowAllMessagesFilter;
                toAminoMsg(message: _214.AllowAllMessagesFilter): _214.AllowAllMessagesFilterAminoMsg;
                fromProtoMsg(message: _214.AllowAllMessagesFilterProtoMsg): _214.AllowAllMessagesFilter;
                toProto(message: _214.AllowAllMessagesFilter): Uint8Array;
                toProtoMsg(message: _214.AllowAllMessagesFilter): _214.AllowAllMessagesFilterProtoMsg;
            };
            AcceptedMessageKeysFilter: {
                typeUrl: string;
                encode(message: _214.AcceptedMessageKeysFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.AcceptedMessageKeysFilter;
                fromJSON(object: any): _214.AcceptedMessageKeysFilter;
                toJSON(message: _214.AcceptedMessageKeysFilter): unknown;
                fromPartial(object: Partial<_214.AcceptedMessageKeysFilter>): _214.AcceptedMessageKeysFilter;
                fromAmino(object: _214.AcceptedMessageKeysFilterAmino): _214.AcceptedMessageKeysFilter;
                toAmino(message: _214.AcceptedMessageKeysFilter): _214.AcceptedMessageKeysFilterAmino;
                fromAminoMsg(object: _214.AcceptedMessageKeysFilterAminoMsg): _214.AcceptedMessageKeysFilter;
                toAminoMsg(message: _214.AcceptedMessageKeysFilter): _214.AcceptedMessageKeysFilterAminoMsg;
                fromProtoMsg(message: _214.AcceptedMessageKeysFilterProtoMsg): _214.AcceptedMessageKeysFilter;
                toProto(message: _214.AcceptedMessageKeysFilter): Uint8Array;
                toProtoMsg(message: _214.AcceptedMessageKeysFilter): _214.AcceptedMessageKeysFilterProtoMsg;
            };
            AcceptedMessagesFilter: {
                typeUrl: string;
                encode(message: _214.AcceptedMessagesFilter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.AcceptedMessagesFilter;
                fromJSON(object: any): _214.AcceptedMessagesFilter;
                toJSON(message: _214.AcceptedMessagesFilter): unknown;
                fromPartial(object: Partial<_214.AcceptedMessagesFilter>): _214.AcceptedMessagesFilter;
                fromAmino(object: _214.AcceptedMessagesFilterAmino): _214.AcceptedMessagesFilter;
                toAmino(message: _214.AcceptedMessagesFilter): _214.AcceptedMessagesFilterAmino;
                fromAminoMsg(object: _214.AcceptedMessagesFilterAminoMsg): _214.AcceptedMessagesFilter;
                toAminoMsg(message: _214.AcceptedMessagesFilter): _214.AcceptedMessagesFilterAminoMsg;
                fromProtoMsg(message: _214.AcceptedMessagesFilterProtoMsg): _214.AcceptedMessagesFilter;
                toProto(message: _214.AcceptedMessagesFilter): Uint8Array;
                toProtoMsg(message: _214.AcceptedMessagesFilter): _214.AcceptedMessagesFilterProtoMsg;
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
                    v1: _368.MsgClientImpl;
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
                        contractInfo(request: _218.QueryContractInfoRequest): Promise<_218.QueryContractInfoResponse>;
                        contractHistory(request: _218.QueryContractHistoryRequest): Promise<_218.QueryContractHistoryResponse>;
                        contractsByCode(request: _218.QueryContractsByCodeRequest): Promise<_218.QueryContractsByCodeResponse>;
                        allContractState(request: _218.QueryAllContractStateRequest): Promise<_218.QueryAllContractStateResponse>;
                        rawContractState(request: _218.QueryRawContractStateRequest): Promise<_218.QueryRawContractStateResponse>;
                        smartContractState(request: _218.QuerySmartContractStateRequest): Promise<_218.QuerySmartContractStateResponse>;
                        code(request: _218.QueryCodeRequest): Promise<_218.QueryCodeResponse>;
                        codes(request?: _218.QueryCodesRequest): Promise<_218.QueryCodesResponse>;
                        pinnedCodes(request?: _218.QueryPinnedCodesRequest): Promise<_218.QueryPinnedCodesResponse>;
                        params(request?: _218.QueryParamsRequest): Promise<_218.QueryParamsResponse>;
                        contractsByCreator(request: _218.QueryContractsByCreatorRequest): Promise<_218.QueryContractsByCreatorResponse>;
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
                    v1: _366.LCDQueryClient;
                };
            };
        }>;
    };
}
