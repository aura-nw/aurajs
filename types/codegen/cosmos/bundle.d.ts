import * as _34 from "./app/runtime/v1alpha1/module";
import * as _35 from "./app/v1alpha1/config";
import * as _36 from "./app/v1alpha1/module";
import * as _37 from "./app/v1alpha1/query";
import * as _38 from "./auth/module/v1/module";
import * as _39 from "./auth/v1beta1/auth";
import * as _40 from "./auth/v1beta1/genesis";
import * as _41 from "./auth/v1beta1/query";
import * as _42 from "./auth/v1beta1/tx";
import * as _43 from "./authz/module/v1/module";
import * as _44 from "./authz/v1beta1/authz";
import * as _45 from "./authz/v1beta1/event";
import * as _46 from "./authz/v1beta1/genesis";
import * as _47 from "./authz/v1beta1/query";
import * as _48 from "./authz/v1beta1/tx";
import * as _49 from "./autocli/v1/options";
import * as _50 from "./autocli/v1/query";
import * as _51 from "./bank/module/v1/module";
import * as _52 from "./bank/v1beta1/authz";
import * as _53 from "./bank/v1beta1/bank";
import * as _54 from "./bank/v1beta1/genesis";
import * as _55 from "./bank/v1beta1/query";
import * as _56 from "./bank/v1beta1/tx";
import * as _57 from "./base/abci/v1beta1/abci";
import * as _58 from "./base/kv/v1beta1/kv";
import * as _59 from "./base/node/v1beta1/query";
import * as _60 from "./base/query/v1beta1/pagination";
import * as _61 from "./base/reflection/v1beta1/reflection";
import * as _62 from "./base/reflection/v2alpha1/reflection";
import * as _63 from "./base/snapshots/v1beta1/snapshot";
import * as _64 from "./base/store/v1beta1/commit_info";
import * as _65 from "./base/store/v1beta1/listening";
import * as _66 from "./base/tendermint/v1beta1/query";
import * as _67 from "./base/tendermint/v1beta1/types";
import * as _68 from "./base/v1beta1/coin";
import * as _69 from "./capability/module/v1/module";
import * as _70 from "./capability/v1beta1/capability";
import * as _71 from "./capability/v1beta1/genesis";
import * as _72 from "./consensus/module/v1/module";
import * as _73 from "./consensus/v1/query";
import * as _74 from "./consensus/v1/tx";
import * as _75 from "./crisis/module/v1/module";
import * as _76 from "./crisis/v1beta1/genesis";
import * as _77 from "./crisis/v1beta1/tx";
import * as _78 from "./crypto/ed25519/keys";
import * as _79 from "./crypto/hd/v1/hd";
import * as _80 from "./crypto/keyring/v1/record";
import * as _81 from "./crypto/multisig/keys";
import * as _82 from "./crypto/secp256k1/keys";
import * as _83 from "./crypto/secp256r1/keys";
import * as _84 from "./distribution/module/v1/module";
import * as _85 from "./distribution/v1beta1/distribution";
import * as _86 from "./distribution/v1beta1/genesis";
import * as _87 from "./distribution/v1beta1/query";
import * as _88 from "./distribution/v1beta1/tx";
import * as _89 from "./evidence/module/v1/module";
import * as _90 from "./evidence/v1beta1/evidence";
import * as _91 from "./evidence/v1beta1/genesis";
import * as _92 from "./evidence/v1beta1/query";
import * as _93 from "./evidence/v1beta1/tx";
import * as _94 from "./feegrant/module/v1/module";
import * as _95 from "./feegrant/v1beta1/feegrant";
import * as _96 from "./feegrant/v1beta1/genesis";
import * as _97 from "./feegrant/v1beta1/query";
import * as _98 from "./feegrant/v1beta1/tx";
import * as _99 from "./genutil/module/v1/module";
import * as _100 from "./genutil/v1beta1/genesis";
import * as _101 from "./gov/module/v1/module";
import * as _102 from "./gov/v1/genesis";
import * as _103 from "./gov/v1/gov";
import * as _104 from "./gov/v1/query";
import * as _105 from "./gov/v1/tx";
import * as _106 from "./gov/v1beta1/genesis";
import * as _107 from "./gov/v1beta1/gov";
import * as _108 from "./gov/v1beta1/query";
import * as _109 from "./gov/v1beta1/tx";
import * as _110 from "./group/module/v1/module";
import * as _111 from "./group/v1/events";
import * as _112 from "./group/v1/genesis";
import * as _113 from "./group/v1/query";
import * as _114 from "./group/v1/tx";
import * as _115 from "./group/v1/types";
import * as _116 from "./mint/module/v1/module";
import * as _117 from "./mint/v1beta1/genesis";
import * as _118 from "./mint/v1beta1/mint";
import * as _119 from "./mint/v1beta1/query";
import * as _120 from "./mint/v1beta1/tx";
import * as _122 from "./nft/module/v1/module";
import * as _123 from "./nft/v1beta1/event";
import * as _124 from "./nft/v1beta1/genesis";
import * as _125 from "./nft/v1beta1/nft";
import * as _126 from "./nft/v1beta1/query";
import * as _127 from "./nft/v1beta1/tx";
import * as _128 from "./orm/module/v1alpha1/module";
import * as _129 from "./orm/query/v1alpha1/query";
import * as _130 from "./orm/v1/orm";
import * as _131 from "./orm/v1alpha1/schema";
import * as _132 from "./params/module/v1/module";
import * as _133 from "./params/v1beta1/params";
import * as _134 from "./params/v1beta1/query";
import * as _136 from "./reflection/v1/reflection";
import * as _137 from "./slashing/module/v1/module";
import * as _138 from "./slashing/v1beta1/genesis";
import * as _139 from "./slashing/v1beta1/query";
import * as _140 from "./slashing/v1beta1/slashing";
import * as _141 from "./slashing/v1beta1/tx";
import * as _142 from "./staking/module/v1/module";
import * as _143 from "./staking/v1beta1/authz";
import * as _144 from "./staking/v1beta1/genesis";
import * as _145 from "./staking/v1beta1/query";
import * as _146 from "./staking/v1beta1/staking";
import * as _147 from "./staking/v1beta1/tx";
import * as _148 from "./tx/config/v1/config";
import * as _149 from "./tx/signing/v1beta1/signing";
import * as _150 from "./tx/v1beta1/service";
import * as _151 from "./tx/v1beta1/tx";
import * as _152 from "./upgrade/module/v1/module";
import * as _153 from "./upgrade/v1beta1/query";
import * as _154 from "./upgrade/v1beta1/tx";
import * as _155 from "./upgrade/v1beta1/upgrade";
import * as _156 from "./vesting/module/v1/module";
import * as _157 from "./vesting/v1beta1/tx";
import * as _158 from "./vesting/v1beta1/vesting";
import * as _159 from "./ics23/v1/proofs";
import * as _254 from "./auth/v1beta1/query.lcd";
import * as _255 from "./authz/v1beta1/query.lcd";
import * as _256 from "./bank/v1beta1/query.lcd";
import * as _257 from "./base/node/v1beta1/query.lcd";
import * as _258 from "./base/tendermint/v1beta1/query.lcd";
import * as _259 from "./consensus/v1/query.lcd";
import * as _260 from "./distribution/v1beta1/query.lcd";
import * as _261 from "./evidence/v1beta1/query.lcd";
import * as _262 from "./feegrant/v1beta1/query.lcd";
import * as _263 from "./gov/v1/query.lcd";
import * as _264 from "./gov/v1beta1/query.lcd";
import * as _265 from "./group/v1/query.lcd";
import * as _266 from "./mint/v1beta1/query.lcd";
import * as _267 from "./nft/v1beta1/query.lcd";
import * as _268 from "./params/v1beta1/query.lcd";
import * as _269 from "./slashing/v1beta1/query.lcd";
import * as _270 from "./staking/v1beta1/query.lcd";
import * as _271 from "./tx/v1beta1/service.lcd";
import * as _272 from "./upgrade/v1beta1/query.lcd";
import * as _273 from "./app/v1alpha1/query.rpc.Query";
import * as _274 from "./auth/v1beta1/query.rpc.Query";
import * as _275 from "./authz/v1beta1/query.rpc.Query";
import * as _276 from "./autocli/v1/query.rpc.Query";
import * as _277 from "./bank/v1beta1/query.rpc.Query";
import * as _278 from "./base/node/v1beta1/query.rpc.Service";
import * as _279 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _280 from "./consensus/v1/query.rpc.Query";
import * as _281 from "./distribution/v1beta1/query.rpc.Query";
import * as _282 from "./evidence/v1beta1/query.rpc.Query";
import * as _283 from "./feegrant/v1beta1/query.rpc.Query";
import * as _284 from "./gov/v1/query.rpc.Query";
import * as _285 from "./gov/v1beta1/query.rpc.Query";
import * as _286 from "./group/v1/query.rpc.Query";
import * as _287 from "./mint/v1beta1/query.rpc.Query";
import * as _288 from "./nft/v1beta1/query.rpc.Query";
import * as _289 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _290 from "./params/v1beta1/query.rpc.Query";
import * as _291 from "./slashing/v1beta1/query.rpc.Query";
import * as _292 from "./staking/v1beta1/query.rpc.Query";
import * as _293 from "./tx/v1beta1/service.rpc.Service";
import * as _294 from "./upgrade/v1beta1/query.rpc.Query";
import * as _295 from "./auth/v1beta1/tx.rpc.msg";
import * as _296 from "./authz/v1beta1/tx.rpc.msg";
import * as _297 from "./bank/v1beta1/tx.rpc.msg";
import * as _298 from "./consensus/v1/tx.rpc.msg";
import * as _299 from "./crisis/v1beta1/tx.rpc.msg";
import * as _300 from "./distribution/v1beta1/tx.rpc.msg";
import * as _301 from "./evidence/v1beta1/tx.rpc.msg";
import * as _302 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _303 from "./gov/v1/tx.rpc.msg";
import * as _304 from "./gov/v1beta1/tx.rpc.msg";
import * as _305 from "./group/v1/tx.rpc.msg";
import * as _306 from "./mint/v1beta1/tx.rpc.msg";
import * as _307 from "./nft/v1beta1/tx.rpc.msg";
import * as _308 from "./slashing/v1beta1/tx.rpc.msg";
import * as _309 from "./staking/v1beta1/tx.rpc.msg";
import * as _310 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _311 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        namespace runtime {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(message: _34.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Module;
                    fromJSON(object: any): _34.Module;
                    toJSON(message: _34.Module): unknown;
                    fromPartial(object: Partial<_34.Module>): _34.Module;
                    fromAmino(object: _34.ModuleAmino): _34.Module;
                    toAmino(message: _34.Module): _34.ModuleAmino;
                    fromAminoMsg(object: _34.ModuleAminoMsg): _34.Module;
                    toAminoMsg(message: _34.Module): _34.ModuleAminoMsg;
                    fromProtoMsg(message: _34.ModuleProtoMsg): _34.Module;
                    toProto(message: _34.Module): Uint8Array;
                    toProtoMsg(message: _34.Module): _34.ModuleProtoMsg;
                };
                StoreKeyConfig: {
                    typeUrl: string;
                    encode(message: _34.StoreKeyConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.StoreKeyConfig;
                    fromJSON(object: any): _34.StoreKeyConfig;
                    toJSON(message: _34.StoreKeyConfig): unknown;
                    fromPartial(object: Partial<_34.StoreKeyConfig>): _34.StoreKeyConfig;
                    fromAmino(object: _34.StoreKeyConfigAmino): _34.StoreKeyConfig;
                    toAmino(message: _34.StoreKeyConfig): _34.StoreKeyConfigAmino;
                    fromAminoMsg(object: _34.StoreKeyConfigAminoMsg): _34.StoreKeyConfig;
                    toAminoMsg(message: _34.StoreKeyConfig): _34.StoreKeyConfigAminoMsg;
                    fromProtoMsg(message: _34.StoreKeyConfigProtoMsg): _34.StoreKeyConfig;
                    toProto(message: _34.StoreKeyConfig): Uint8Array;
                    toProtoMsg(message: _34.StoreKeyConfig): _34.StoreKeyConfigProtoMsg;
                };
            };
        }
        const v1alpha1: {
            QueryClientImpl: typeof _273.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _37.QueryConfigRequest): Promise<_37.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                typeUrl: string;
                encode(_: _37.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryConfigRequest;
                fromJSON(_: any): _37.QueryConfigRequest;
                toJSON(_: _37.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_37.QueryConfigRequest>): _37.QueryConfigRequest;
                fromAmino(_: _37.QueryConfigRequestAmino): _37.QueryConfigRequest;
                toAmino(_: _37.QueryConfigRequest): _37.QueryConfigRequestAmino;
                fromAminoMsg(object: _37.QueryConfigRequestAminoMsg): _37.QueryConfigRequest;
                toAminoMsg(message: _37.QueryConfigRequest): _37.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _37.QueryConfigRequestProtoMsg): _37.QueryConfigRequest;
                toProto(message: _37.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _37.QueryConfigRequest): _37.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                typeUrl: string;
                encode(message: _37.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryConfigResponse;
                fromJSON(object: any): _37.QueryConfigResponse;
                toJSON(message: _37.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_37.QueryConfigResponse>): _37.QueryConfigResponse;
                fromAmino(object: _37.QueryConfigResponseAmino): _37.QueryConfigResponse;
                toAmino(message: _37.QueryConfigResponse): _37.QueryConfigResponseAmino;
                fromAminoMsg(object: _37.QueryConfigResponseAminoMsg): _37.QueryConfigResponse;
                toAminoMsg(message: _37.QueryConfigResponse): _37.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _37.QueryConfigResponseProtoMsg): _37.QueryConfigResponse;
                toProto(message: _37.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _37.QueryConfigResponse): _37.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                typeUrl: string;
                encode(message: _36.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.ModuleDescriptor;
                fromJSON(object: any): _36.ModuleDescriptor;
                toJSON(message: _36.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_36.ModuleDescriptor>): _36.ModuleDescriptor;
                fromAmino(object: _36.ModuleDescriptorAmino): _36.ModuleDescriptor;
                toAmino(message: _36.ModuleDescriptor): _36.ModuleDescriptorAmino;
                fromAminoMsg(object: _36.ModuleDescriptorAminoMsg): _36.ModuleDescriptor;
                toAminoMsg(message: _36.ModuleDescriptor): _36.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _36.ModuleDescriptorProtoMsg): _36.ModuleDescriptor;
                toProto(message: _36.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _36.ModuleDescriptor): _36.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                typeUrl: string;
                encode(message: _36.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.PackageReference;
                fromJSON(object: any): _36.PackageReference;
                toJSON(message: _36.PackageReference): unknown;
                fromPartial(object: Partial<_36.PackageReference>): _36.PackageReference;
                fromAmino(object: _36.PackageReferenceAmino): _36.PackageReference;
                toAmino(message: _36.PackageReference): _36.PackageReferenceAmino;
                fromAminoMsg(object: _36.PackageReferenceAminoMsg): _36.PackageReference;
                toAminoMsg(message: _36.PackageReference): _36.PackageReferenceAminoMsg;
                fromProtoMsg(message: _36.PackageReferenceProtoMsg): _36.PackageReference;
                toProto(message: _36.PackageReference): Uint8Array;
                toProtoMsg(message: _36.PackageReference): _36.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                typeUrl: string;
                encode(message: _36.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.MigrateFromInfo;
                fromJSON(object: any): _36.MigrateFromInfo;
                toJSON(message: _36.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_36.MigrateFromInfo>): _36.MigrateFromInfo;
                fromAmino(object: _36.MigrateFromInfoAmino): _36.MigrateFromInfo;
                toAmino(message: _36.MigrateFromInfo): _36.MigrateFromInfoAmino;
                fromAminoMsg(object: _36.MigrateFromInfoAminoMsg): _36.MigrateFromInfo;
                toAminoMsg(message: _36.MigrateFromInfo): _36.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _36.MigrateFromInfoProtoMsg): _36.MigrateFromInfo;
                toProto(message: _36.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _36.MigrateFromInfo): _36.MigrateFromInfoProtoMsg;
            };
            Config: {
                typeUrl: string;
                encode(message: _35.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Config;
                fromJSON(object: any): _35.Config;
                toJSON(message: _35.Config): unknown;
                fromPartial(object: Partial<_35.Config>): _35.Config;
                fromAmino(object: _35.ConfigAmino): _35.Config;
                toAmino(message: _35.Config): _35.ConfigAmino;
                fromAminoMsg(object: _35.ConfigAminoMsg): _35.Config;
                toAminoMsg(message: _35.Config): _35.ConfigAminoMsg;
                fromProtoMsg(message: _35.ConfigProtoMsg): _35.Config;
                toProto(message: _35.Config): Uint8Array;
                toProtoMsg(message: _35.Config): _35.ConfigProtoMsg;
            };
            ModuleConfig: {
                typeUrl: string;
                encode(message: _35.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.ModuleConfig;
                fromJSON(object: any): _35.ModuleConfig;
                toJSON(message: _35.ModuleConfig): unknown;
                fromPartial(object: Partial<_35.ModuleConfig>): _35.ModuleConfig;
                fromAmino(object: _35.ModuleConfigAmino): _35.ModuleConfig;
                toAmino(message: _35.ModuleConfig): _35.ModuleConfigAmino;
                fromAminoMsg(object: _35.ModuleConfigAminoMsg): _35.ModuleConfig;
                toAminoMsg(message: _35.ModuleConfig): _35.ModuleConfigAminoMsg;
                fromProtoMsg(message: _35.ModuleConfigProtoMsg): _35.ModuleConfig;
                toProto(message: _35.ModuleConfig): Uint8Array;
                toProtoMsg(message: _35.ModuleConfig): _35.ModuleConfigProtoMsg;
            };
            GolangBinding: {
                typeUrl: string;
                encode(message: _35.GolangBinding, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.GolangBinding;
                fromJSON(object: any): _35.GolangBinding;
                toJSON(message: _35.GolangBinding): unknown;
                fromPartial(object: Partial<_35.GolangBinding>): _35.GolangBinding;
                fromAmino(object: _35.GolangBindingAmino): _35.GolangBinding;
                toAmino(message: _35.GolangBinding): _35.GolangBindingAmino;
                fromAminoMsg(object: _35.GolangBindingAminoMsg): _35.GolangBinding;
                toAminoMsg(message: _35.GolangBinding): _35.GolangBindingAminoMsg;
                fromProtoMsg(message: _35.GolangBindingProtoMsg): _35.GolangBinding;
                toProto(message: _35.GolangBinding): Uint8Array;
                toProtoMsg(message: _35.GolangBinding): _35.GolangBindingProtoMsg;
            };
        };
    }
    namespace auth {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _38.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Module;
                    fromJSON(object: any): _38.Module;
                    toJSON(message: _38.Module): unknown;
                    fromPartial(object: Partial<_38.Module>): _38.Module;
                    fromAmino(object: _38.ModuleAmino): _38.Module;
                    toAmino(message: _38.Module): _38.ModuleAmino;
                    fromAminoMsg(object: _38.ModuleAminoMsg): _38.Module;
                    toAminoMsg(message: _38.Module): _38.ModuleAminoMsg;
                    fromProtoMsg(message: _38.ModuleProtoMsg): _38.Module;
                    toProto(message: _38.Module): Uint8Array;
                    toProtoMsg(message: _38.Module): _38.ModuleProtoMsg;
                };
                ModuleAccountPermission: {
                    typeUrl: string;
                    encode(message: _38.ModuleAccountPermission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.ModuleAccountPermission;
                    fromJSON(object: any): _38.ModuleAccountPermission;
                    toJSON(message: _38.ModuleAccountPermission): unknown;
                    fromPartial(object: Partial<_38.ModuleAccountPermission>): _38.ModuleAccountPermission;
                    fromAmino(object: _38.ModuleAccountPermissionAmino): _38.ModuleAccountPermission;
                    toAmino(message: _38.ModuleAccountPermission): _38.ModuleAccountPermissionAmino;
                    fromAminoMsg(object: _38.ModuleAccountPermissionAminoMsg): _38.ModuleAccountPermission;
                    toAminoMsg(message: _38.ModuleAccountPermission): _38.ModuleAccountPermissionAminoMsg;
                    fromProtoMsg(message: _38.ModuleAccountPermissionProtoMsg): _38.ModuleAccountPermission;
                    toProto(message: _38.ModuleAccountPermission): Uint8Array;
                    toProtoMsg(message: _38.ModuleAccountPermission): _38.ModuleAccountPermissionProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _295.MsgClientImpl;
            QueryClientImpl: typeof _274.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _41.QueryAccountsRequest): Promise<_41.QueryAccountsResponse>;
                account(request: _41.QueryAccountRequest): Promise<_41.QueryAccountResponse>;
                accountAddressByID(request: _41.QueryAccountAddressByIDRequest): Promise<_41.QueryAccountAddressByIDResponse>;
                params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                moduleAccounts(request?: _41.QueryModuleAccountsRequest): Promise<_41.QueryModuleAccountsResponse>;
                moduleAccountByName(request: _41.QueryModuleAccountByNameRequest): Promise<_41.QueryModuleAccountByNameResponse>;
                bech32Prefix(request?: _41.Bech32PrefixRequest): Promise<_41.Bech32PrefixResponse>;
                addressBytesToString(request: _41.AddressBytesToStringRequest): Promise<_41.AddressBytesToStringResponse>;
                addressStringToBytes(request: _41.AddressStringToBytesRequest): Promise<_41.AddressStringToBytesResponse>;
                accountInfo(request: _41.QueryAccountInfoRequest): Promise<_41.QueryAccountInfoResponse>;
            };
            LCDQueryClient: typeof _254.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _42.MsgUpdateParams): {
                        typeUrl: string;
                        value: _42.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.auth.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _42.MsgUpdateParams) => _42.MsgUpdateParamsAmino;
                    fromAmino: (object: _42.MsgUpdateParamsAmino) => _42.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _42.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgUpdateParams;
                fromJSON(object: any): _42.MsgUpdateParams;
                toJSON(message: _42.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_42.MsgUpdateParams>): _42.MsgUpdateParams;
                fromAmino(object: _42.MsgUpdateParamsAmino): _42.MsgUpdateParams;
                toAmino(message: _42.MsgUpdateParams): _42.MsgUpdateParamsAmino;
                fromAminoMsg(object: _42.MsgUpdateParamsAminoMsg): _42.MsgUpdateParams;
                toAminoMsg(message: _42.MsgUpdateParams): _42.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _42.MsgUpdateParamsProtoMsg): _42.MsgUpdateParams;
                toProto(message: _42.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateParams): _42.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _42.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.MsgUpdateParamsResponse;
                fromJSON(_: any): _42.MsgUpdateParamsResponse;
                toJSON(_: _42.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_42.MsgUpdateParamsResponse>): _42.MsgUpdateParamsResponse;
                fromAmino(_: _42.MsgUpdateParamsResponseAmino): _42.MsgUpdateParamsResponse;
                toAmino(_: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _42.MsgUpdateParamsResponseAminoMsg): _42.MsgUpdateParamsResponse;
                toAminoMsg(message: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _42.MsgUpdateParamsResponseProtoMsg): _42.MsgUpdateParamsResponse;
                toProto(message: _42.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _42.MsgUpdateParamsResponse): _42.MsgUpdateParamsResponseProtoMsg;
            };
            QueryAccountsRequest: {
                typeUrl: string;
                encode(message: _41.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAccountsRequest;
                fromJSON(object: any): _41.QueryAccountsRequest;
                toJSON(message: _41.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_41.QueryAccountsRequest>): _41.QueryAccountsRequest;
                fromAmino(object: _41.QueryAccountsRequestAmino): _41.QueryAccountsRequest;
                toAmino(message: _41.QueryAccountsRequest): _41.QueryAccountsRequestAmino;
                fromAminoMsg(object: _41.QueryAccountsRequestAminoMsg): _41.QueryAccountsRequest;
                toAminoMsg(message: _41.QueryAccountsRequest): _41.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryAccountsRequestProtoMsg): _41.QueryAccountsRequest;
                toProto(message: _41.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryAccountsRequest): _41.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                typeUrl: string;
                encode(message: _41.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAccountsResponse;
                fromJSON(object: any): _41.QueryAccountsResponse;
                toJSON(message: _41.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_41.QueryAccountsResponse>): _41.QueryAccountsResponse;
                fromAmino(object: _41.QueryAccountsResponseAmino): _41.QueryAccountsResponse;
                toAmino(message: _41.QueryAccountsResponse): _41.QueryAccountsResponseAmino;
                fromAminoMsg(object: _41.QueryAccountsResponseAminoMsg): _41.QueryAccountsResponse;
                toAminoMsg(message: _41.QueryAccountsResponse): _41.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryAccountsResponseProtoMsg): _41.QueryAccountsResponse;
                toProto(message: _41.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryAccountsResponse): _41.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                typeUrl: string;
                encode(message: _41.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAccountRequest;
                fromJSON(object: any): _41.QueryAccountRequest;
                toJSON(message: _41.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_41.QueryAccountRequest>): _41.QueryAccountRequest;
                fromAmino(object: _41.QueryAccountRequestAmino): _41.QueryAccountRequest;
                toAmino(message: _41.QueryAccountRequest): _41.QueryAccountRequestAmino;
                fromAminoMsg(object: _41.QueryAccountRequestAminoMsg): _41.QueryAccountRequest;
                toAminoMsg(message: _41.QueryAccountRequest): _41.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _41.QueryAccountRequestProtoMsg): _41.QueryAccountRequest;
                toProto(message: _41.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _41.QueryAccountRequest): _41.QueryAccountRequestProtoMsg;
            };
            QueryAccountResponse: {
                typeUrl: string;
                encode(message: _41.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAccountResponse;
                fromJSON(object: any): _41.QueryAccountResponse;
                toJSON(message: _41.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_41.QueryAccountResponse>): _41.QueryAccountResponse;
                fromAmino(object: _41.QueryAccountResponseAmino): _41.QueryAccountResponse;
                toAmino(message: _41.QueryAccountResponse): _41.QueryAccountResponseAmino;
                fromAminoMsg(object: _41.QueryAccountResponseAminoMsg): _41.QueryAccountResponse;
                toAminoMsg(message: _41.QueryAccountResponse): _41.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _41.QueryAccountResponseProtoMsg): _41.QueryAccountResponse;
                toProto(message: _41.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _41.QueryAccountResponse): _41.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _41.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsRequest;
                fromJSON(_: any): _41.QueryParamsRequest;
                toJSON(_: _41.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_41.QueryParamsRequest>): _41.QueryParamsRequest;
                fromAmino(_: _41.QueryParamsRequestAmino): _41.QueryParamsRequest;
                toAmino(_: _41.QueryParamsRequest): _41.QueryParamsRequestAmino;
                fromAminoMsg(object: _41.QueryParamsRequestAminoMsg): _41.QueryParamsRequest;
                toAminoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryParamsRequestProtoMsg): _41.QueryParamsRequest;
                toProto(message: _41.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryParamsRequest): _41.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _41.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryParamsResponse;
                fromJSON(object: any): _41.QueryParamsResponse;
                toJSON(message: _41.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_41.QueryParamsResponse>): _41.QueryParamsResponse;
                fromAmino(object: _41.QueryParamsResponseAmino): _41.QueryParamsResponse;
                toAmino(message: _41.QueryParamsResponse): _41.QueryParamsResponseAmino;
                fromAminoMsg(object: _41.QueryParamsResponseAminoMsg): _41.QueryParamsResponse;
                toAminoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryParamsResponseProtoMsg): _41.QueryParamsResponse;
                toProto(message: _41.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryParamsResponse): _41.QueryParamsResponseProtoMsg;
            };
            QueryModuleAccountsRequest: {
                typeUrl: string;
                encode(_: _41.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryModuleAccountsRequest;
                fromJSON(_: any): _41.QueryModuleAccountsRequest;
                toJSON(_: _41.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_41.QueryModuleAccountsRequest>): _41.QueryModuleAccountsRequest;
                fromAmino(_: _41.QueryModuleAccountsRequestAmino): _41.QueryModuleAccountsRequest;
                toAmino(_: _41.QueryModuleAccountsRequest): _41.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _41.QueryModuleAccountsRequestAminoMsg): _41.QueryModuleAccountsRequest;
                toAminoMsg(message: _41.QueryModuleAccountsRequest): _41.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _41.QueryModuleAccountsRequestProtoMsg): _41.QueryModuleAccountsRequest;
                toProto(message: _41.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _41.QueryModuleAccountsRequest): _41.QueryModuleAccountsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                typeUrl: string;
                encode(message: _41.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryModuleAccountsResponse;
                fromJSON(object: any): _41.QueryModuleAccountsResponse;
                toJSON(message: _41.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_41.QueryModuleAccountsResponse>): _41.QueryModuleAccountsResponse;
                fromAmino(object: _41.QueryModuleAccountsResponseAmino): _41.QueryModuleAccountsResponse;
                toAmino(message: _41.QueryModuleAccountsResponse): _41.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _41.QueryModuleAccountsResponseAminoMsg): _41.QueryModuleAccountsResponse;
                toAminoMsg(message: _41.QueryModuleAccountsResponse): _41.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _41.QueryModuleAccountsResponseProtoMsg): _41.QueryModuleAccountsResponse;
                toProto(message: _41.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _41.QueryModuleAccountsResponse): _41.QueryModuleAccountsResponseProtoMsg;
            };
            QueryModuleAccountByNameRequest: {
                typeUrl: string;
                encode(message: _41.QueryModuleAccountByNameRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryModuleAccountByNameRequest;
                fromJSON(object: any): _41.QueryModuleAccountByNameRequest;
                toJSON(message: _41.QueryModuleAccountByNameRequest): unknown;
                fromPartial(object: Partial<_41.QueryModuleAccountByNameRequest>): _41.QueryModuleAccountByNameRequest;
                fromAmino(object: _41.QueryModuleAccountByNameRequestAmino): _41.QueryModuleAccountByNameRequest;
                toAmino(message: _41.QueryModuleAccountByNameRequest): _41.QueryModuleAccountByNameRequestAmino;
                fromAminoMsg(object: _41.QueryModuleAccountByNameRequestAminoMsg): _41.QueryModuleAccountByNameRequest;
                toAminoMsg(message: _41.QueryModuleAccountByNameRequest): _41.QueryModuleAccountByNameRequestAminoMsg;
                fromProtoMsg(message: _41.QueryModuleAccountByNameRequestProtoMsg): _41.QueryModuleAccountByNameRequest;
                toProto(message: _41.QueryModuleAccountByNameRequest): Uint8Array;
                toProtoMsg(message: _41.QueryModuleAccountByNameRequest): _41.QueryModuleAccountByNameRequestProtoMsg;
            };
            QueryModuleAccountByNameResponse: {
                typeUrl: string;
                encode(message: _41.QueryModuleAccountByNameResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryModuleAccountByNameResponse;
                fromJSON(object: any): _41.QueryModuleAccountByNameResponse;
                toJSON(message: _41.QueryModuleAccountByNameResponse): unknown;
                fromPartial(object: Partial<_41.QueryModuleAccountByNameResponse>): _41.QueryModuleAccountByNameResponse;
                fromAmino(object: _41.QueryModuleAccountByNameResponseAmino): _41.QueryModuleAccountByNameResponse;
                toAmino(message: _41.QueryModuleAccountByNameResponse): _41.QueryModuleAccountByNameResponseAmino;
                fromAminoMsg(object: _41.QueryModuleAccountByNameResponseAminoMsg): _41.QueryModuleAccountByNameResponse;
                toAminoMsg(message: _41.QueryModuleAccountByNameResponse): _41.QueryModuleAccountByNameResponseAminoMsg;
                fromProtoMsg(message: _41.QueryModuleAccountByNameResponseProtoMsg): _41.QueryModuleAccountByNameResponse;
                toProto(message: _41.QueryModuleAccountByNameResponse): Uint8Array;
                toProtoMsg(message: _41.QueryModuleAccountByNameResponse): _41.QueryModuleAccountByNameResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                typeUrl: string;
                encode(_: _41.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Bech32PrefixRequest;
                fromJSON(_: any): _41.Bech32PrefixRequest;
                toJSON(_: _41.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_41.Bech32PrefixRequest>): _41.Bech32PrefixRequest;
                fromAmino(_: _41.Bech32PrefixRequestAmino): _41.Bech32PrefixRequest;
                toAmino(_: _41.Bech32PrefixRequest): _41.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _41.Bech32PrefixRequestAminoMsg): _41.Bech32PrefixRequest;
                toAminoMsg(message: _41.Bech32PrefixRequest): _41.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _41.Bech32PrefixRequestProtoMsg): _41.Bech32PrefixRequest;
                toProto(message: _41.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _41.Bech32PrefixRequest): _41.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                typeUrl: string;
                encode(message: _41.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Bech32PrefixResponse;
                fromJSON(object: any): _41.Bech32PrefixResponse;
                toJSON(message: _41.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_41.Bech32PrefixResponse>): _41.Bech32PrefixResponse;
                fromAmino(object: _41.Bech32PrefixResponseAmino): _41.Bech32PrefixResponse;
                toAmino(message: _41.Bech32PrefixResponse): _41.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _41.Bech32PrefixResponseAminoMsg): _41.Bech32PrefixResponse;
                toAminoMsg(message: _41.Bech32PrefixResponse): _41.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _41.Bech32PrefixResponseProtoMsg): _41.Bech32PrefixResponse;
                toProto(message: _41.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _41.Bech32PrefixResponse): _41.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                typeUrl: string;
                encode(message: _41.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AddressBytesToStringRequest;
                fromJSON(object: any): _41.AddressBytesToStringRequest;
                toJSON(message: _41.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_41.AddressBytesToStringRequest>): _41.AddressBytesToStringRequest;
                fromAmino(object: _41.AddressBytesToStringRequestAmino): _41.AddressBytesToStringRequest;
                toAmino(message: _41.AddressBytesToStringRequest): _41.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _41.AddressBytesToStringRequestAminoMsg): _41.AddressBytesToStringRequest;
                toAminoMsg(message: _41.AddressBytesToStringRequest): _41.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _41.AddressBytesToStringRequestProtoMsg): _41.AddressBytesToStringRequest;
                toProto(message: _41.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _41.AddressBytesToStringRequest): _41.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                typeUrl: string;
                encode(message: _41.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AddressBytesToStringResponse;
                fromJSON(object: any): _41.AddressBytesToStringResponse;
                toJSON(message: _41.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_41.AddressBytesToStringResponse>): _41.AddressBytesToStringResponse;
                fromAmino(object: _41.AddressBytesToStringResponseAmino): _41.AddressBytesToStringResponse;
                toAmino(message: _41.AddressBytesToStringResponse): _41.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _41.AddressBytesToStringResponseAminoMsg): _41.AddressBytesToStringResponse;
                toAminoMsg(message: _41.AddressBytesToStringResponse): _41.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _41.AddressBytesToStringResponseProtoMsg): _41.AddressBytesToStringResponse;
                toProto(message: _41.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _41.AddressBytesToStringResponse): _41.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                typeUrl: string;
                encode(message: _41.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AddressStringToBytesRequest;
                fromJSON(object: any): _41.AddressStringToBytesRequest;
                toJSON(message: _41.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_41.AddressStringToBytesRequest>): _41.AddressStringToBytesRequest;
                fromAmino(object: _41.AddressStringToBytesRequestAmino): _41.AddressStringToBytesRequest;
                toAmino(message: _41.AddressStringToBytesRequest): _41.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _41.AddressStringToBytesRequestAminoMsg): _41.AddressStringToBytesRequest;
                toAminoMsg(message: _41.AddressStringToBytesRequest): _41.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _41.AddressStringToBytesRequestProtoMsg): _41.AddressStringToBytesRequest;
                toProto(message: _41.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _41.AddressStringToBytesRequest): _41.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                typeUrl: string;
                encode(message: _41.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.AddressStringToBytesResponse;
                fromJSON(object: any): _41.AddressStringToBytesResponse;
                toJSON(message: _41.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_41.AddressStringToBytesResponse>): _41.AddressStringToBytesResponse;
                fromAmino(object: _41.AddressStringToBytesResponseAmino): _41.AddressStringToBytesResponse;
                toAmino(message: _41.AddressStringToBytesResponse): _41.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _41.AddressStringToBytesResponseAminoMsg): _41.AddressStringToBytesResponse;
                toAminoMsg(message: _41.AddressStringToBytesResponse): _41.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _41.AddressStringToBytesResponseProtoMsg): _41.AddressStringToBytesResponse;
                toProto(message: _41.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _41.AddressStringToBytesResponse): _41.AddressStringToBytesResponseProtoMsg;
            };
            QueryAccountAddressByIDRequest: {
                typeUrl: string;
                encode(message: _41.QueryAccountAddressByIDRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAccountAddressByIDRequest;
                fromJSON(object: any): _41.QueryAccountAddressByIDRequest;
                toJSON(message: _41.QueryAccountAddressByIDRequest): unknown;
                fromPartial(object: Partial<_41.QueryAccountAddressByIDRequest>): _41.QueryAccountAddressByIDRequest;
                fromAmino(object: _41.QueryAccountAddressByIDRequestAmino): _41.QueryAccountAddressByIDRequest;
                toAmino(message: _41.QueryAccountAddressByIDRequest): _41.QueryAccountAddressByIDRequestAmino;
                fromAminoMsg(object: _41.QueryAccountAddressByIDRequestAminoMsg): _41.QueryAccountAddressByIDRequest;
                toAminoMsg(message: _41.QueryAccountAddressByIDRequest): _41.QueryAccountAddressByIDRequestAminoMsg;
                fromProtoMsg(message: _41.QueryAccountAddressByIDRequestProtoMsg): _41.QueryAccountAddressByIDRequest;
                toProto(message: _41.QueryAccountAddressByIDRequest): Uint8Array;
                toProtoMsg(message: _41.QueryAccountAddressByIDRequest): _41.QueryAccountAddressByIDRequestProtoMsg;
            };
            QueryAccountAddressByIDResponse: {
                typeUrl: string;
                encode(message: _41.QueryAccountAddressByIDResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAccountAddressByIDResponse;
                fromJSON(object: any): _41.QueryAccountAddressByIDResponse;
                toJSON(message: _41.QueryAccountAddressByIDResponse): unknown;
                fromPartial(object: Partial<_41.QueryAccountAddressByIDResponse>): _41.QueryAccountAddressByIDResponse;
                fromAmino(object: _41.QueryAccountAddressByIDResponseAmino): _41.QueryAccountAddressByIDResponse;
                toAmino(message: _41.QueryAccountAddressByIDResponse): _41.QueryAccountAddressByIDResponseAmino;
                fromAminoMsg(object: _41.QueryAccountAddressByIDResponseAminoMsg): _41.QueryAccountAddressByIDResponse;
                toAminoMsg(message: _41.QueryAccountAddressByIDResponse): _41.QueryAccountAddressByIDResponseAminoMsg;
                fromProtoMsg(message: _41.QueryAccountAddressByIDResponseProtoMsg): _41.QueryAccountAddressByIDResponse;
                toProto(message: _41.QueryAccountAddressByIDResponse): Uint8Array;
                toProtoMsg(message: _41.QueryAccountAddressByIDResponse): _41.QueryAccountAddressByIDResponseProtoMsg;
            };
            QueryAccountInfoRequest: {
                typeUrl: string;
                encode(message: _41.QueryAccountInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAccountInfoRequest;
                fromJSON(object: any): _41.QueryAccountInfoRequest;
                toJSON(message: _41.QueryAccountInfoRequest): unknown;
                fromPartial(object: Partial<_41.QueryAccountInfoRequest>): _41.QueryAccountInfoRequest;
                fromAmino(object: _41.QueryAccountInfoRequestAmino): _41.QueryAccountInfoRequest;
                toAmino(message: _41.QueryAccountInfoRequest): _41.QueryAccountInfoRequestAmino;
                fromAminoMsg(object: _41.QueryAccountInfoRequestAminoMsg): _41.QueryAccountInfoRequest;
                toAminoMsg(message: _41.QueryAccountInfoRequest): _41.QueryAccountInfoRequestAminoMsg;
                fromProtoMsg(message: _41.QueryAccountInfoRequestProtoMsg): _41.QueryAccountInfoRequest;
                toProto(message: _41.QueryAccountInfoRequest): Uint8Array;
                toProtoMsg(message: _41.QueryAccountInfoRequest): _41.QueryAccountInfoRequestProtoMsg;
            };
            QueryAccountInfoResponse: {
                typeUrl: string;
                encode(message: _41.QueryAccountInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.QueryAccountInfoResponse;
                fromJSON(object: any): _41.QueryAccountInfoResponse;
                toJSON(message: _41.QueryAccountInfoResponse): unknown;
                fromPartial(object: Partial<_41.QueryAccountInfoResponse>): _41.QueryAccountInfoResponse;
                fromAmino(object: _41.QueryAccountInfoResponseAmino): _41.QueryAccountInfoResponse;
                toAmino(message: _41.QueryAccountInfoResponse): _41.QueryAccountInfoResponseAmino;
                fromAminoMsg(object: _41.QueryAccountInfoResponseAminoMsg): _41.QueryAccountInfoResponse;
                toAminoMsg(message: _41.QueryAccountInfoResponse): _41.QueryAccountInfoResponseAminoMsg;
                fromProtoMsg(message: _41.QueryAccountInfoResponseProtoMsg): _41.QueryAccountInfoResponse;
                toProto(message: _41.QueryAccountInfoResponse): Uint8Array;
                toProtoMsg(message: _41.QueryAccountInfoResponse): _41.QueryAccountInfoResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _40.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.GenesisState;
                fromJSON(object: any): _40.GenesisState;
                toJSON(message: _40.GenesisState): unknown;
                fromPartial(object: Partial<_40.GenesisState>): _40.GenesisState;
                fromAmino(object: _40.GenesisStateAmino): _40.GenesisState;
                toAmino(message: _40.GenesisState): _40.GenesisStateAmino;
                fromAminoMsg(object: _40.GenesisStateAminoMsg): _40.GenesisState;
                toAminoMsg(message: _40.GenesisState): _40.GenesisStateAminoMsg;
                fromProtoMsg(message: _40.GenesisStateProtoMsg): _40.GenesisState;
                toProto(message: _40.GenesisState): Uint8Array;
                toProtoMsg(message: _40.GenesisState): _40.GenesisStateProtoMsg;
            };
            BaseAccount: {
                typeUrl: string;
                encode(message: _39.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.BaseAccount;
                fromJSON(object: any): _39.BaseAccount;
                toJSON(message: _39.BaseAccount): unknown;
                fromPartial(object: Partial<_39.BaseAccount>): _39.BaseAccount;
                fromAmino(object: _39.BaseAccountAmino): _39.BaseAccount;
                toAmino(message: _39.BaseAccount): _39.BaseAccountAmino;
                fromAminoMsg(object: _39.BaseAccountAminoMsg): _39.BaseAccount;
                toAminoMsg(message: _39.BaseAccount): _39.BaseAccountAminoMsg;
                fromProtoMsg(message: _39.BaseAccountProtoMsg): _39.BaseAccount;
                toProto(message: _39.BaseAccount): Uint8Array;
                toProtoMsg(message: _39.BaseAccount): _39.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                typeUrl: string;
                encode(message: _39.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ModuleAccount;
                fromJSON(object: any): _39.ModuleAccount;
                toJSON(message: _39.ModuleAccount): unknown;
                fromPartial(object: Partial<_39.ModuleAccount>): _39.ModuleAccount;
                fromAmino(object: _39.ModuleAccountAmino): _39.ModuleAccount;
                toAmino(message: _39.ModuleAccount): _39.ModuleAccountAmino;
                fromAminoMsg(object: _39.ModuleAccountAminoMsg): _39.ModuleAccount;
                toAminoMsg(message: _39.ModuleAccount): _39.ModuleAccountAminoMsg;
                fromProtoMsg(message: _39.ModuleAccountProtoMsg): _39.ModuleAccount;
                toProto(message: _39.ModuleAccount): Uint8Array;
                toProtoMsg(message: _39.ModuleAccount): _39.ModuleAccountProtoMsg;
            };
            ModuleCredential: {
                typeUrl: string;
                encode(message: _39.ModuleCredential, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.ModuleCredential;
                fromJSON(object: any): _39.ModuleCredential;
                toJSON(message: _39.ModuleCredential): unknown;
                fromPartial(object: Partial<_39.ModuleCredential>): _39.ModuleCredential;
                fromAmino(object: _39.ModuleCredentialAmino): _39.ModuleCredential;
                toAmino(message: _39.ModuleCredential): _39.ModuleCredentialAmino;
                fromAminoMsg(object: _39.ModuleCredentialAminoMsg): _39.ModuleCredential;
                toAminoMsg(message: _39.ModuleCredential): _39.ModuleCredentialAminoMsg;
                fromProtoMsg(message: _39.ModuleCredentialProtoMsg): _39.ModuleCredential;
                toProto(message: _39.ModuleCredential): Uint8Array;
                toProtoMsg(message: _39.ModuleCredential): _39.ModuleCredentialProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _39.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.Params;
                fromJSON(object: any): _39.Params;
                toJSON(message: _39.Params): unknown;
                fromPartial(object: Partial<_39.Params>): _39.Params;
                fromAmino(object: _39.ParamsAmino): _39.Params;
                toAmino(message: _39.Params): _39.ParamsAmino;
                fromAminoMsg(object: _39.ParamsAminoMsg): _39.Params;
                toAminoMsg(message: _39.Params): _39.ParamsAminoMsg;
                fromProtoMsg(message: _39.ParamsProtoMsg): _39.Params;
                toProto(message: _39.Params): Uint8Array;
                toProtoMsg(message: _39.Params): _39.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _43.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Module;
                    fromJSON(_: any): _43.Module;
                    toJSON(_: _43.Module): unknown;
                    fromPartial(_: Partial<_43.Module>): _43.Module;
                    fromAmino(_: _43.ModuleAmino): _43.Module;
                    toAmino(_: _43.Module): _43.ModuleAmino;
                    fromAminoMsg(object: _43.ModuleAminoMsg): _43.Module;
                    toAminoMsg(message: _43.Module): _43.ModuleAminoMsg;
                    fromProtoMsg(message: _43.ModuleProtoMsg): _43.Module;
                    toProto(message: _43.Module): Uint8Array;
                    toProtoMsg(message: _43.Module): _43.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _296.MsgClientImpl;
            QueryClientImpl: typeof _275.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _47.QueryGrantsRequest): Promise<_47.QueryGrantsResponse>;
                granterGrants(request: _47.QueryGranterGrantsRequest): Promise<_47.QueryGranterGrantsResponse>;
                granteeGrants(request: _47.QueryGranteeGrantsRequest): Promise<_47.QueryGranteeGrantsResponse>;
            };
            LCDQueryClient: typeof _255.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _48.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _48.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _48.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _48.MsgGrant): {
                        typeUrl: string;
                        value: _48.MsgGrant;
                    };
                    exec(value: _48.MsgExec): {
                        typeUrl: string;
                        value: _48.MsgExec;
                    };
                    revoke(value: _48.MsgRevoke): {
                        typeUrl: string;
                        value: _48.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _48.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _48.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _48.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _48.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _48.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _48.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _48.MsgGrant): {
                        typeUrl: string;
                        value: _48.MsgGrant;
                    };
                    exec(value: _48.MsgExec): {
                        typeUrl: string;
                        value: _48.MsgExec;
                    };
                    revoke(value: _48.MsgRevoke): {
                        typeUrl: string;
                        value: _48.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _48.MsgGrant) => _48.MsgGrantAmino;
                    fromAmino: (object: _48.MsgGrantAmino) => _48.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _48.MsgExec) => _48.MsgExecAmino;
                    fromAmino: (object: _48.MsgExecAmino) => _48.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _48.MsgRevoke) => _48.MsgRevokeAmino;
                    fromAmino: (object: _48.MsgRevokeAmino) => _48.MsgRevoke;
                };
            };
            MsgGrant: {
                typeUrl: string;
                encode(message: _48.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgGrant;
                fromJSON(object: any): _48.MsgGrant;
                toJSON(message: _48.MsgGrant): unknown;
                fromPartial(object: Partial<_48.MsgGrant>): _48.MsgGrant;
                fromAmino(object: _48.MsgGrantAmino): _48.MsgGrant;
                toAmino(message: _48.MsgGrant): _48.MsgGrantAmino;
                fromAminoMsg(object: _48.MsgGrantAminoMsg): _48.MsgGrant;
                toAminoMsg(message: _48.MsgGrant): _48.MsgGrantAminoMsg;
                fromProtoMsg(message: _48.MsgGrantProtoMsg): _48.MsgGrant;
                toProto(message: _48.MsgGrant): Uint8Array;
                toProtoMsg(message: _48.MsgGrant): _48.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _48.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgExecResponse;
                fromJSON(object: any): _48.MsgExecResponse;
                toJSON(message: _48.MsgExecResponse): unknown;
                fromPartial(object: Partial<_48.MsgExecResponse>): _48.MsgExecResponse;
                fromAmino(object: _48.MsgExecResponseAmino): _48.MsgExecResponse;
                toAmino(message: _48.MsgExecResponse): _48.MsgExecResponseAmino;
                fromAminoMsg(object: _48.MsgExecResponseAminoMsg): _48.MsgExecResponse;
                toAminoMsg(message: _48.MsgExecResponse): _48.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _48.MsgExecResponseProtoMsg): _48.MsgExecResponse;
                toProto(message: _48.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _48.MsgExecResponse): _48.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _48.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgExec;
                fromJSON(object: any): _48.MsgExec;
                toJSON(message: _48.MsgExec): unknown;
                fromPartial(object: Partial<_48.MsgExec>): _48.MsgExec;
                fromAmino(object: _48.MsgExecAmino): _48.MsgExec;
                toAmino(message: _48.MsgExec): _48.MsgExecAmino;
                fromAminoMsg(object: _48.MsgExecAminoMsg): _48.MsgExec;
                toAminoMsg(message: _48.MsgExec): _48.MsgExecAminoMsg;
                fromProtoMsg(message: _48.MsgExecProtoMsg): _48.MsgExec;
                toProto(message: _48.MsgExec): Uint8Array;
                toProtoMsg(message: _48.MsgExec): _48.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                typeUrl: string;
                encode(_: _48.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgGrantResponse;
                fromJSON(_: any): _48.MsgGrantResponse;
                toJSON(_: _48.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_48.MsgGrantResponse>): _48.MsgGrantResponse;
                fromAmino(_: _48.MsgGrantResponseAmino): _48.MsgGrantResponse;
                toAmino(_: _48.MsgGrantResponse): _48.MsgGrantResponseAmino;
                fromAminoMsg(object: _48.MsgGrantResponseAminoMsg): _48.MsgGrantResponse;
                toAminoMsg(message: _48.MsgGrantResponse): _48.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _48.MsgGrantResponseProtoMsg): _48.MsgGrantResponse;
                toProto(message: _48.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _48.MsgGrantResponse): _48.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                typeUrl: string;
                encode(message: _48.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgRevoke;
                fromJSON(object: any): _48.MsgRevoke;
                toJSON(message: _48.MsgRevoke): unknown;
                fromPartial(object: Partial<_48.MsgRevoke>): _48.MsgRevoke;
                fromAmino(object: _48.MsgRevokeAmino): _48.MsgRevoke;
                toAmino(message: _48.MsgRevoke): _48.MsgRevokeAmino;
                fromAminoMsg(object: _48.MsgRevokeAminoMsg): _48.MsgRevoke;
                toAminoMsg(message: _48.MsgRevoke): _48.MsgRevokeAminoMsg;
                fromProtoMsg(message: _48.MsgRevokeProtoMsg): _48.MsgRevoke;
                toProto(message: _48.MsgRevoke): Uint8Array;
                toProtoMsg(message: _48.MsgRevoke): _48.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                typeUrl: string;
                encode(_: _48.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.MsgRevokeResponse;
                fromJSON(_: any): _48.MsgRevokeResponse;
                toJSON(_: _48.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_48.MsgRevokeResponse>): _48.MsgRevokeResponse;
                fromAmino(_: _48.MsgRevokeResponseAmino): _48.MsgRevokeResponse;
                toAmino(_: _48.MsgRevokeResponse): _48.MsgRevokeResponseAmino;
                fromAminoMsg(object: _48.MsgRevokeResponseAminoMsg): _48.MsgRevokeResponse;
                toAminoMsg(message: _48.MsgRevokeResponse): _48.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _48.MsgRevokeResponseProtoMsg): _48.MsgRevokeResponse;
                toProto(message: _48.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _48.MsgRevokeResponse): _48.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                typeUrl: string;
                encode(message: _47.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryGrantsRequest;
                fromJSON(object: any): _47.QueryGrantsRequest;
                toJSON(message: _47.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_47.QueryGrantsRequest>): _47.QueryGrantsRequest;
                fromAmino(object: _47.QueryGrantsRequestAmino): _47.QueryGrantsRequest;
                toAmino(message: _47.QueryGrantsRequest): _47.QueryGrantsRequestAmino;
                fromAminoMsg(object: _47.QueryGrantsRequestAminoMsg): _47.QueryGrantsRequest;
                toAminoMsg(message: _47.QueryGrantsRequest): _47.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryGrantsRequestProtoMsg): _47.QueryGrantsRequest;
                toProto(message: _47.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryGrantsRequest): _47.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                typeUrl: string;
                encode(message: _47.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryGrantsResponse;
                fromJSON(object: any): _47.QueryGrantsResponse;
                toJSON(message: _47.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_47.QueryGrantsResponse>): _47.QueryGrantsResponse;
                fromAmino(object: _47.QueryGrantsResponseAmino): _47.QueryGrantsResponse;
                toAmino(message: _47.QueryGrantsResponse): _47.QueryGrantsResponseAmino;
                fromAminoMsg(object: _47.QueryGrantsResponseAminoMsg): _47.QueryGrantsResponse;
                toAminoMsg(message: _47.QueryGrantsResponse): _47.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryGrantsResponseProtoMsg): _47.QueryGrantsResponse;
                toProto(message: _47.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryGrantsResponse): _47.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                typeUrl: string;
                encode(message: _47.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryGranterGrantsRequest;
                fromJSON(object: any): _47.QueryGranterGrantsRequest;
                toJSON(message: _47.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_47.QueryGranterGrantsRequest>): _47.QueryGranterGrantsRequest;
                fromAmino(object: _47.QueryGranterGrantsRequestAmino): _47.QueryGranterGrantsRequest;
                toAmino(message: _47.QueryGranterGrantsRequest): _47.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _47.QueryGranterGrantsRequestAminoMsg): _47.QueryGranterGrantsRequest;
                toAminoMsg(message: _47.QueryGranterGrantsRequest): _47.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryGranterGrantsRequestProtoMsg): _47.QueryGranterGrantsRequest;
                toProto(message: _47.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryGranterGrantsRequest): _47.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                typeUrl: string;
                encode(message: _47.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryGranterGrantsResponse;
                fromJSON(object: any): _47.QueryGranterGrantsResponse;
                toJSON(message: _47.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_47.QueryGranterGrantsResponse>): _47.QueryGranterGrantsResponse;
                fromAmino(object: _47.QueryGranterGrantsResponseAmino): _47.QueryGranterGrantsResponse;
                toAmino(message: _47.QueryGranterGrantsResponse): _47.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _47.QueryGranterGrantsResponseAminoMsg): _47.QueryGranterGrantsResponse;
                toAminoMsg(message: _47.QueryGranterGrantsResponse): _47.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryGranterGrantsResponseProtoMsg): _47.QueryGranterGrantsResponse;
                toProto(message: _47.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryGranterGrantsResponse): _47.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                typeUrl: string;
                encode(message: _47.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryGranteeGrantsRequest;
                fromJSON(object: any): _47.QueryGranteeGrantsRequest;
                toJSON(message: _47.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_47.QueryGranteeGrantsRequest>): _47.QueryGranteeGrantsRequest;
                fromAmino(object: _47.QueryGranteeGrantsRequestAmino): _47.QueryGranteeGrantsRequest;
                toAmino(message: _47.QueryGranteeGrantsRequest): _47.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _47.QueryGranteeGrantsRequestAminoMsg): _47.QueryGranteeGrantsRequest;
                toAminoMsg(message: _47.QueryGranteeGrantsRequest): _47.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _47.QueryGranteeGrantsRequestProtoMsg): _47.QueryGranteeGrantsRequest;
                toProto(message: _47.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _47.QueryGranteeGrantsRequest): _47.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                typeUrl: string;
                encode(message: _47.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryGranteeGrantsResponse;
                fromJSON(object: any): _47.QueryGranteeGrantsResponse;
                toJSON(message: _47.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_47.QueryGranteeGrantsResponse>): _47.QueryGranteeGrantsResponse;
                fromAmino(object: _47.QueryGranteeGrantsResponseAmino): _47.QueryGranteeGrantsResponse;
                toAmino(message: _47.QueryGranteeGrantsResponse): _47.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _47.QueryGranteeGrantsResponseAminoMsg): _47.QueryGranteeGrantsResponse;
                toAminoMsg(message: _47.QueryGranteeGrantsResponse): _47.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _47.QueryGranteeGrantsResponseProtoMsg): _47.QueryGranteeGrantsResponse;
                toProto(message: _47.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _47.QueryGranteeGrantsResponse): _47.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _46.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.GenesisState;
                fromJSON(object: any): _46.GenesisState;
                toJSON(message: _46.GenesisState): unknown;
                fromPartial(object: Partial<_46.GenesisState>): _46.GenesisState;
                fromAmino(object: _46.GenesisStateAmino): _46.GenesisState;
                toAmino(message: _46.GenesisState): _46.GenesisStateAmino;
                fromAminoMsg(object: _46.GenesisStateAminoMsg): _46.GenesisState;
                toAminoMsg(message: _46.GenesisState): _46.GenesisStateAminoMsg;
                fromProtoMsg(message: _46.GenesisStateProtoMsg): _46.GenesisState;
                toProto(message: _46.GenesisState): Uint8Array;
                toProtoMsg(message: _46.GenesisState): _46.GenesisStateProtoMsg;
            };
            EventGrant: {
                typeUrl: string;
                encode(message: _45.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.EventGrant;
                fromJSON(object: any): _45.EventGrant;
                toJSON(message: _45.EventGrant): unknown;
                fromPartial(object: Partial<_45.EventGrant>): _45.EventGrant;
                fromAmino(object: _45.EventGrantAmino): _45.EventGrant;
                toAmino(message: _45.EventGrant): _45.EventGrantAmino;
                fromAminoMsg(object: _45.EventGrantAminoMsg): _45.EventGrant;
                toAminoMsg(message: _45.EventGrant): _45.EventGrantAminoMsg;
                fromProtoMsg(message: _45.EventGrantProtoMsg): _45.EventGrant;
                toProto(message: _45.EventGrant): Uint8Array;
                toProtoMsg(message: _45.EventGrant): _45.EventGrantProtoMsg;
            };
            EventRevoke: {
                typeUrl: string;
                encode(message: _45.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.EventRevoke;
                fromJSON(object: any): _45.EventRevoke;
                toJSON(message: _45.EventRevoke): unknown;
                fromPartial(object: Partial<_45.EventRevoke>): _45.EventRevoke;
                fromAmino(object: _45.EventRevokeAmino): _45.EventRevoke;
                toAmino(message: _45.EventRevoke): _45.EventRevokeAmino;
                fromAminoMsg(object: _45.EventRevokeAminoMsg): _45.EventRevoke;
                toAminoMsg(message: _45.EventRevoke): _45.EventRevokeAminoMsg;
                fromProtoMsg(message: _45.EventRevokeProtoMsg): _45.EventRevoke;
                toProto(message: _45.EventRevoke): Uint8Array;
                toProtoMsg(message: _45.EventRevoke): _45.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                typeUrl: string;
                encode(message: _44.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GenericAuthorization;
                fromJSON(object: any): _44.GenericAuthorization;
                toJSON(message: _44.GenericAuthorization): unknown;
                fromPartial(object: Partial<_44.GenericAuthorization>): _44.GenericAuthorization;
                fromAmino(object: _44.GenericAuthorizationAmino): _44.GenericAuthorization;
                toAmino(message: _44.GenericAuthorization): _44.GenericAuthorizationAmino;
                fromAminoMsg(object: _44.GenericAuthorizationAminoMsg): _44.GenericAuthorization;
                toAminoMsg(message: _44.GenericAuthorization): _44.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _44.GenericAuthorizationProtoMsg): _44.GenericAuthorization;
                toProto(message: _44.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _44.GenericAuthorization): _44.GenericAuthorizationProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _44.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Grant;
                fromJSON(object: any): _44.Grant;
                toJSON(message: _44.Grant): unknown;
                fromPartial(object: Partial<_44.Grant>): _44.Grant;
                fromAmino(object: _44.GrantAmino): _44.Grant;
                toAmino(message: _44.Grant): _44.GrantAmino;
                fromAminoMsg(object: _44.GrantAminoMsg): _44.Grant;
                toAminoMsg(message: _44.Grant): _44.GrantAminoMsg;
                fromProtoMsg(message: _44.GrantProtoMsg): _44.Grant;
                toProto(message: _44.Grant): Uint8Array;
                toProtoMsg(message: _44.Grant): _44.GrantProtoMsg;
            };
            GrantAuthorization: {
                typeUrl: string;
                encode(message: _44.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GrantAuthorization;
                fromJSON(object: any): _44.GrantAuthorization;
                toJSON(message: _44.GrantAuthorization): unknown;
                fromPartial(object: Partial<_44.GrantAuthorization>): _44.GrantAuthorization;
                fromAmino(object: _44.GrantAuthorizationAmino): _44.GrantAuthorization;
                toAmino(message: _44.GrantAuthorization): _44.GrantAuthorizationAmino;
                fromAminoMsg(object: _44.GrantAuthorizationAminoMsg): _44.GrantAuthorization;
                toAminoMsg(message: _44.GrantAuthorization): _44.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _44.GrantAuthorizationProtoMsg): _44.GrantAuthorization;
                toProto(message: _44.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _44.GrantAuthorization): _44.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                typeUrl: string;
                encode(message: _44.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.GrantQueueItem;
                fromJSON(object: any): _44.GrantQueueItem;
                toJSON(message: _44.GrantQueueItem): unknown;
                fromPartial(object: Partial<_44.GrantQueueItem>): _44.GrantQueueItem;
                fromAmino(object: _44.GrantQueueItemAmino): _44.GrantQueueItem;
                toAmino(message: _44.GrantQueueItem): _44.GrantQueueItemAmino;
                fromAminoMsg(object: _44.GrantQueueItemAminoMsg): _44.GrantQueueItem;
                toAminoMsg(message: _44.GrantQueueItem): _44.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _44.GrantQueueItemProtoMsg): _44.GrantQueueItem;
                toProto(message: _44.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _44.GrantQueueItem): _44.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace autocli {
        const v1: {
            QueryClientImpl: typeof _276.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                appOptions(request?: _50.AppOptionsRequest): Promise<_50.AppOptionsResponse>;
            };
            AppOptionsRequest: {
                typeUrl: string;
                encode(_: _50.AppOptionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AppOptionsRequest;
                fromJSON(_: any): _50.AppOptionsRequest;
                toJSON(_: _50.AppOptionsRequest): unknown;
                fromPartial(_: Partial<_50.AppOptionsRequest>): _50.AppOptionsRequest;
                fromAmino(_: _50.AppOptionsRequestAmino): _50.AppOptionsRequest;
                toAmino(_: _50.AppOptionsRequest): _50.AppOptionsRequestAmino;
                fromAminoMsg(object: _50.AppOptionsRequestAminoMsg): _50.AppOptionsRequest;
                toAminoMsg(message: _50.AppOptionsRequest): _50.AppOptionsRequestAminoMsg;
                fromProtoMsg(message: _50.AppOptionsRequestProtoMsg): _50.AppOptionsRequest;
                toProto(message: _50.AppOptionsRequest): Uint8Array;
                toProtoMsg(message: _50.AppOptionsRequest): _50.AppOptionsRequestProtoMsg;
            };
            AppOptionsResponse_ModuleOptionsEntry: {
                encode(message: _50.AppOptionsResponse_ModuleOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AppOptionsResponse_ModuleOptionsEntry;
                fromJSON(object: any): _50.AppOptionsResponse_ModuleOptionsEntry;
                toJSON(message: _50.AppOptionsResponse_ModuleOptionsEntry): unknown;
                fromPartial(object: Partial<_50.AppOptionsResponse_ModuleOptionsEntry>): _50.AppOptionsResponse_ModuleOptionsEntry;
                fromAmino(object: _50.AppOptionsResponse_ModuleOptionsEntryAmino): _50.AppOptionsResponse_ModuleOptionsEntry;
                toAmino(message: _50.AppOptionsResponse_ModuleOptionsEntry): _50.AppOptionsResponse_ModuleOptionsEntryAmino;
                fromAminoMsg(object: _50.AppOptionsResponse_ModuleOptionsEntryAminoMsg): _50.AppOptionsResponse_ModuleOptionsEntry;
                fromProtoMsg(message: _50.AppOptionsResponse_ModuleOptionsEntryProtoMsg): _50.AppOptionsResponse_ModuleOptionsEntry;
                toProto(message: _50.AppOptionsResponse_ModuleOptionsEntry): Uint8Array;
            };
            AppOptionsResponse: {
                typeUrl: string;
                encode(message: _50.AppOptionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.AppOptionsResponse;
                fromJSON(object: any): _50.AppOptionsResponse;
                toJSON(message: _50.AppOptionsResponse): unknown;
                fromPartial(object: Partial<_50.AppOptionsResponse>): _50.AppOptionsResponse;
                fromAmino(object: _50.AppOptionsResponseAmino): _50.AppOptionsResponse;
                toAmino(message: _50.AppOptionsResponse): _50.AppOptionsResponseAmino;
                fromAminoMsg(object: _50.AppOptionsResponseAminoMsg): _50.AppOptionsResponse;
                toAminoMsg(message: _50.AppOptionsResponse): _50.AppOptionsResponseAminoMsg;
                fromProtoMsg(message: _50.AppOptionsResponseProtoMsg): _50.AppOptionsResponse;
                toProto(message: _50.AppOptionsResponse): Uint8Array;
                toProtoMsg(message: _50.AppOptionsResponse): _50.AppOptionsResponseProtoMsg;
            };
            ModuleOptions: {
                typeUrl: string;
                encode(message: _49.ModuleOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ModuleOptions;
                fromJSON(object: any): _49.ModuleOptions;
                toJSON(message: _49.ModuleOptions): unknown;
                fromPartial(object: Partial<_49.ModuleOptions>): _49.ModuleOptions;
                fromAmino(object: _49.ModuleOptionsAmino): _49.ModuleOptions;
                toAmino(message: _49.ModuleOptions): _49.ModuleOptionsAmino;
                fromAminoMsg(object: _49.ModuleOptionsAminoMsg): _49.ModuleOptions;
                toAminoMsg(message: _49.ModuleOptions): _49.ModuleOptionsAminoMsg;
                fromProtoMsg(message: _49.ModuleOptionsProtoMsg): _49.ModuleOptions;
                toProto(message: _49.ModuleOptions): Uint8Array;
                toProtoMsg(message: _49.ModuleOptions): _49.ModuleOptionsProtoMsg;
            };
            ServiceCommandDescriptor_SubCommandsEntry: {
                encode(message: _49.ServiceCommandDescriptor_SubCommandsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ServiceCommandDescriptor_SubCommandsEntry;
                fromJSON(object: any): _49.ServiceCommandDescriptor_SubCommandsEntry;
                toJSON(message: _49.ServiceCommandDescriptor_SubCommandsEntry): unknown;
                fromPartial(object: Partial<_49.ServiceCommandDescriptor_SubCommandsEntry>): _49.ServiceCommandDescriptor_SubCommandsEntry;
                fromAmino(object: _49.ServiceCommandDescriptor_SubCommandsEntryAmino): _49.ServiceCommandDescriptor_SubCommandsEntry;
                toAmino(message: _49.ServiceCommandDescriptor_SubCommandsEntry): _49.ServiceCommandDescriptor_SubCommandsEntryAmino;
                fromAminoMsg(object: _49.ServiceCommandDescriptor_SubCommandsEntryAminoMsg): _49.ServiceCommandDescriptor_SubCommandsEntry;
                fromProtoMsg(message: _49.ServiceCommandDescriptor_SubCommandsEntryProtoMsg): _49.ServiceCommandDescriptor_SubCommandsEntry;
                toProto(message: _49.ServiceCommandDescriptor_SubCommandsEntry): Uint8Array;
            };
            ServiceCommandDescriptor: {
                typeUrl: string;
                encode(message: _49.ServiceCommandDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.ServiceCommandDescriptor;
                fromJSON(object: any): _49.ServiceCommandDescriptor;
                toJSON(message: _49.ServiceCommandDescriptor): unknown;
                fromPartial(object: Partial<_49.ServiceCommandDescriptor>): _49.ServiceCommandDescriptor;
                fromAmino(object: _49.ServiceCommandDescriptorAmino): _49.ServiceCommandDescriptor;
                toAmino(message: _49.ServiceCommandDescriptor): _49.ServiceCommandDescriptorAmino;
                fromAminoMsg(object: _49.ServiceCommandDescriptorAminoMsg): _49.ServiceCommandDescriptor;
                toAminoMsg(message: _49.ServiceCommandDescriptor): _49.ServiceCommandDescriptorAminoMsg;
                fromProtoMsg(message: _49.ServiceCommandDescriptorProtoMsg): _49.ServiceCommandDescriptor;
                toProto(message: _49.ServiceCommandDescriptor): Uint8Array;
                toProtoMsg(message: _49.ServiceCommandDescriptor): _49.ServiceCommandDescriptorProtoMsg;
            };
            RpcCommandOptions_FlagOptionsEntry: {
                encode(message: _49.RpcCommandOptions_FlagOptionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.RpcCommandOptions_FlagOptionsEntry;
                fromJSON(object: any): _49.RpcCommandOptions_FlagOptionsEntry;
                toJSON(message: _49.RpcCommandOptions_FlagOptionsEntry): unknown;
                fromPartial(object: Partial<_49.RpcCommandOptions_FlagOptionsEntry>): _49.RpcCommandOptions_FlagOptionsEntry;
                fromAmino(object: _49.RpcCommandOptions_FlagOptionsEntryAmino): _49.RpcCommandOptions_FlagOptionsEntry;
                toAmino(message: _49.RpcCommandOptions_FlagOptionsEntry): _49.RpcCommandOptions_FlagOptionsEntryAmino;
                fromAminoMsg(object: _49.RpcCommandOptions_FlagOptionsEntryAminoMsg): _49.RpcCommandOptions_FlagOptionsEntry;
                fromProtoMsg(message: _49.RpcCommandOptions_FlagOptionsEntryProtoMsg): _49.RpcCommandOptions_FlagOptionsEntry;
                toProto(message: _49.RpcCommandOptions_FlagOptionsEntry): Uint8Array;
            };
            RpcCommandOptions: {
                typeUrl: string;
                encode(message: _49.RpcCommandOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.RpcCommandOptions;
                fromJSON(object: any): _49.RpcCommandOptions;
                toJSON(message: _49.RpcCommandOptions): unknown;
                fromPartial(object: Partial<_49.RpcCommandOptions>): _49.RpcCommandOptions;
                fromAmino(object: _49.RpcCommandOptionsAmino): _49.RpcCommandOptions;
                toAmino(message: _49.RpcCommandOptions): _49.RpcCommandOptionsAmino;
                fromAminoMsg(object: _49.RpcCommandOptionsAminoMsg): _49.RpcCommandOptions;
                toAminoMsg(message: _49.RpcCommandOptions): _49.RpcCommandOptionsAminoMsg;
                fromProtoMsg(message: _49.RpcCommandOptionsProtoMsg): _49.RpcCommandOptions;
                toProto(message: _49.RpcCommandOptions): Uint8Array;
                toProtoMsg(message: _49.RpcCommandOptions): _49.RpcCommandOptionsProtoMsg;
            };
            FlagOptions: {
                typeUrl: string;
                encode(message: _49.FlagOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.FlagOptions;
                fromJSON(object: any): _49.FlagOptions;
                toJSON(message: _49.FlagOptions): unknown;
                fromPartial(object: Partial<_49.FlagOptions>): _49.FlagOptions;
                fromAmino(object: _49.FlagOptionsAmino): _49.FlagOptions;
                toAmino(message: _49.FlagOptions): _49.FlagOptionsAmino;
                fromAminoMsg(object: _49.FlagOptionsAminoMsg): _49.FlagOptions;
                toAminoMsg(message: _49.FlagOptions): _49.FlagOptionsAminoMsg;
                fromProtoMsg(message: _49.FlagOptionsProtoMsg): _49.FlagOptions;
                toProto(message: _49.FlagOptions): Uint8Array;
                toProtoMsg(message: _49.FlagOptions): _49.FlagOptionsProtoMsg;
            };
            PositionalArgDescriptor: {
                typeUrl: string;
                encode(message: _49.PositionalArgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.PositionalArgDescriptor;
                fromJSON(object: any): _49.PositionalArgDescriptor;
                toJSON(message: _49.PositionalArgDescriptor): unknown;
                fromPartial(object: Partial<_49.PositionalArgDescriptor>): _49.PositionalArgDescriptor;
                fromAmino(object: _49.PositionalArgDescriptorAmino): _49.PositionalArgDescriptor;
                toAmino(message: _49.PositionalArgDescriptor): _49.PositionalArgDescriptorAmino;
                fromAminoMsg(object: _49.PositionalArgDescriptorAminoMsg): _49.PositionalArgDescriptor;
                toAminoMsg(message: _49.PositionalArgDescriptor): _49.PositionalArgDescriptorAminoMsg;
                fromProtoMsg(message: _49.PositionalArgDescriptorProtoMsg): _49.PositionalArgDescriptor;
                toProto(message: _49.PositionalArgDescriptor): Uint8Array;
                toProtoMsg(message: _49.PositionalArgDescriptor): _49.PositionalArgDescriptorProtoMsg;
            };
        };
    }
    namespace bank {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _51.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Module;
                    fromJSON(object: any): _51.Module;
                    toJSON(message: _51.Module): unknown;
                    fromPartial(object: Partial<_51.Module>): _51.Module;
                    fromAmino(object: _51.ModuleAmino): _51.Module;
                    toAmino(message: _51.Module): _51.ModuleAmino;
                    fromAminoMsg(object: _51.ModuleAminoMsg): _51.Module;
                    toAminoMsg(message: _51.Module): _51.ModuleAminoMsg;
                    fromProtoMsg(message: _51.ModuleProtoMsg): _51.Module;
                    toProto(message: _51.Module): Uint8Array;
                    toProtoMsg(message: _51.Module): _51.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _297.MsgClientImpl;
            QueryClientImpl: typeof _277.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _55.QueryBalanceRequest): Promise<_55.QueryBalanceResponse>;
                allBalances(request: _55.QueryAllBalancesRequest): Promise<_55.QueryAllBalancesResponse>;
                spendableBalances(request: _55.QuerySpendableBalancesRequest): Promise<_55.QuerySpendableBalancesResponse>;
                spendableBalanceByDenom(request: _55.QuerySpendableBalanceByDenomRequest): Promise<_55.QuerySpendableBalanceByDenomResponse>;
                totalSupply(request?: _55.QueryTotalSupplyRequest): Promise<_55.QueryTotalSupplyResponse>;
                supplyOf(request: _55.QuerySupplyOfRequest): Promise<_55.QuerySupplyOfResponse>;
                params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                denomMetadata(request: _55.QueryDenomMetadataRequest): Promise<_55.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _55.QueryDenomsMetadataRequest): Promise<_55.QueryDenomsMetadataResponse>;
                denomOwners(request: _55.QueryDenomOwnersRequest): Promise<_55.QueryDenomOwnersResponse>;
                sendEnabled(request: _55.QuerySendEnabledRequest): Promise<_55.QuerySendEnabledResponse>;
            };
            LCDQueryClient: typeof _256.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _56.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _56.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _56.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setSendEnabled(value: _56.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _56.MsgSend): {
                        typeUrl: string;
                        value: _56.MsgSend;
                    };
                    multiSend(value: _56.MsgMultiSend): {
                        typeUrl: string;
                        value: _56.MsgMultiSend;
                    };
                    updateParams(value: _56.MsgUpdateParams): {
                        typeUrl: string;
                        value: _56.MsgUpdateParams;
                    };
                    setSendEnabled(value: _56.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _56.MsgSetSendEnabled;
                    };
                };
                toJSON: {
                    send(value: _56.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _56.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _56.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setSendEnabled(value: _56.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _56.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _56.MsgMultiSend;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _56.MsgUpdateParams;
                    };
                    setSendEnabled(value: any): {
                        typeUrl: string;
                        value: _56.MsgSetSendEnabled;
                    };
                };
                fromPartial: {
                    send(value: _56.MsgSend): {
                        typeUrl: string;
                        value: _56.MsgSend;
                    };
                    multiSend(value: _56.MsgMultiSend): {
                        typeUrl: string;
                        value: _56.MsgMultiSend;
                    };
                    updateParams(value: _56.MsgUpdateParams): {
                        typeUrl: string;
                        value: _56.MsgUpdateParams;
                    };
                    setSendEnabled(value: _56.MsgSetSendEnabled): {
                        typeUrl: string;
                        value: _56.MsgSetSendEnabled;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _56.MsgSend) => _56.MsgSendAmino;
                    fromAmino: (object: _56.MsgSendAmino) => _56.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _56.MsgMultiSend) => _56.MsgMultiSendAmino;
                    fromAmino: (object: _56.MsgMultiSendAmino) => _56.MsgMultiSend;
                };
                "/cosmos.bank.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _56.MsgUpdateParams) => _56.MsgUpdateParamsAmino;
                    fromAmino: (object: _56.MsgUpdateParamsAmino) => _56.MsgUpdateParams;
                };
                "/cosmos.bank.v1beta1.MsgSetSendEnabled": {
                    aminoType: string;
                    toAmino: (message: _56.MsgSetSendEnabled) => _56.MsgSetSendEnabledAmino;
                    fromAmino: (object: _56.MsgSetSendEnabledAmino) => _56.MsgSetSendEnabled;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _56.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSend;
                fromJSON(object: any): _56.MsgSend;
                toJSON(message: _56.MsgSend): unknown;
                fromPartial(object: Partial<_56.MsgSend>): _56.MsgSend;
                fromAmino(object: _56.MsgSendAmino): _56.MsgSend;
                toAmino(message: _56.MsgSend): _56.MsgSendAmino;
                fromAminoMsg(object: _56.MsgSendAminoMsg): _56.MsgSend;
                toAminoMsg(message: _56.MsgSend): _56.MsgSendAminoMsg;
                fromProtoMsg(message: _56.MsgSendProtoMsg): _56.MsgSend;
                toProto(message: _56.MsgSend): Uint8Array;
                toProtoMsg(message: _56.MsgSend): _56.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _56.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSendResponse;
                fromJSON(_: any): _56.MsgSendResponse;
                toJSON(_: _56.MsgSendResponse): unknown;
                fromPartial(_: Partial<_56.MsgSendResponse>): _56.MsgSendResponse;
                fromAmino(_: _56.MsgSendResponseAmino): _56.MsgSendResponse;
                toAmino(_: _56.MsgSendResponse): _56.MsgSendResponseAmino;
                fromAminoMsg(object: _56.MsgSendResponseAminoMsg): _56.MsgSendResponse;
                toAminoMsg(message: _56.MsgSendResponse): _56.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _56.MsgSendResponseProtoMsg): _56.MsgSendResponse;
                toProto(message: _56.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _56.MsgSendResponse): _56.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                typeUrl: string;
                encode(message: _56.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgMultiSend;
                fromJSON(object: any): _56.MsgMultiSend;
                toJSON(message: _56.MsgMultiSend): unknown;
                fromPartial(object: Partial<_56.MsgMultiSend>): _56.MsgMultiSend;
                fromAmino(object: _56.MsgMultiSendAmino): _56.MsgMultiSend;
                toAmino(message: _56.MsgMultiSend): _56.MsgMultiSendAmino;
                fromAminoMsg(object: _56.MsgMultiSendAminoMsg): _56.MsgMultiSend;
                toAminoMsg(message: _56.MsgMultiSend): _56.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _56.MsgMultiSendProtoMsg): _56.MsgMultiSend;
                toProto(message: _56.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _56.MsgMultiSend): _56.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                typeUrl: string;
                encode(_: _56.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgMultiSendResponse;
                fromJSON(_: any): _56.MsgMultiSendResponse;
                toJSON(_: _56.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_56.MsgMultiSendResponse>): _56.MsgMultiSendResponse;
                fromAmino(_: _56.MsgMultiSendResponseAmino): _56.MsgMultiSendResponse;
                toAmino(_: _56.MsgMultiSendResponse): _56.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _56.MsgMultiSendResponseAminoMsg): _56.MsgMultiSendResponse;
                toAminoMsg(message: _56.MsgMultiSendResponse): _56.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _56.MsgMultiSendResponseProtoMsg): _56.MsgMultiSendResponse;
                toProto(message: _56.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _56.MsgMultiSendResponse): _56.MsgMultiSendResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _56.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgUpdateParams;
                fromJSON(object: any): _56.MsgUpdateParams;
                toJSON(message: _56.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_56.MsgUpdateParams>): _56.MsgUpdateParams;
                fromAmino(object: _56.MsgUpdateParamsAmino): _56.MsgUpdateParams;
                toAmino(message: _56.MsgUpdateParams): _56.MsgUpdateParamsAmino;
                fromAminoMsg(object: _56.MsgUpdateParamsAminoMsg): _56.MsgUpdateParams;
                toAminoMsg(message: _56.MsgUpdateParams): _56.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _56.MsgUpdateParamsProtoMsg): _56.MsgUpdateParams;
                toProto(message: _56.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _56.MsgUpdateParams): _56.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _56.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgUpdateParamsResponse;
                fromJSON(_: any): _56.MsgUpdateParamsResponse;
                toJSON(_: _56.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_56.MsgUpdateParamsResponse>): _56.MsgUpdateParamsResponse;
                fromAmino(_: _56.MsgUpdateParamsResponseAmino): _56.MsgUpdateParamsResponse;
                toAmino(_: _56.MsgUpdateParamsResponse): _56.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _56.MsgUpdateParamsResponseAminoMsg): _56.MsgUpdateParamsResponse;
                toAminoMsg(message: _56.MsgUpdateParamsResponse): _56.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _56.MsgUpdateParamsResponseProtoMsg): _56.MsgUpdateParamsResponse;
                toProto(message: _56.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _56.MsgUpdateParamsResponse): _56.MsgUpdateParamsResponseProtoMsg;
            };
            MsgSetSendEnabled: {
                typeUrl: string;
                encode(message: _56.MsgSetSendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSetSendEnabled;
                fromJSON(object: any): _56.MsgSetSendEnabled;
                toJSON(message: _56.MsgSetSendEnabled): unknown;
                fromPartial(object: Partial<_56.MsgSetSendEnabled>): _56.MsgSetSendEnabled;
                fromAmino(object: _56.MsgSetSendEnabledAmino): _56.MsgSetSendEnabled;
                toAmino(message: _56.MsgSetSendEnabled): _56.MsgSetSendEnabledAmino;
                fromAminoMsg(object: _56.MsgSetSendEnabledAminoMsg): _56.MsgSetSendEnabled;
                toAminoMsg(message: _56.MsgSetSendEnabled): _56.MsgSetSendEnabledAminoMsg;
                fromProtoMsg(message: _56.MsgSetSendEnabledProtoMsg): _56.MsgSetSendEnabled;
                toProto(message: _56.MsgSetSendEnabled): Uint8Array;
                toProtoMsg(message: _56.MsgSetSendEnabled): _56.MsgSetSendEnabledProtoMsg;
            };
            MsgSetSendEnabledResponse: {
                typeUrl: string;
                encode(_: _56.MsgSetSendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _56.MsgSetSendEnabledResponse;
                fromJSON(_: any): _56.MsgSetSendEnabledResponse;
                toJSON(_: _56.MsgSetSendEnabledResponse): unknown;
                fromPartial(_: Partial<_56.MsgSetSendEnabledResponse>): _56.MsgSetSendEnabledResponse;
                fromAmino(_: _56.MsgSetSendEnabledResponseAmino): _56.MsgSetSendEnabledResponse;
                toAmino(_: _56.MsgSetSendEnabledResponse): _56.MsgSetSendEnabledResponseAmino;
                fromAminoMsg(object: _56.MsgSetSendEnabledResponseAminoMsg): _56.MsgSetSendEnabledResponse;
                toAminoMsg(message: _56.MsgSetSendEnabledResponse): _56.MsgSetSendEnabledResponseAminoMsg;
                fromProtoMsg(message: _56.MsgSetSendEnabledResponseProtoMsg): _56.MsgSetSendEnabledResponse;
                toProto(message: _56.MsgSetSendEnabledResponse): Uint8Array;
                toProtoMsg(message: _56.MsgSetSendEnabledResponse): _56.MsgSetSendEnabledResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _55.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryBalanceRequest;
                fromJSON(object: any): _55.QueryBalanceRequest;
                toJSON(message: _55.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_55.QueryBalanceRequest>): _55.QueryBalanceRequest;
                fromAmino(object: _55.QueryBalanceRequestAmino): _55.QueryBalanceRequest;
                toAmino(message: _55.QueryBalanceRequest): _55.QueryBalanceRequestAmino;
                fromAminoMsg(object: _55.QueryBalanceRequestAminoMsg): _55.QueryBalanceRequest;
                toAminoMsg(message: _55.QueryBalanceRequest): _55.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _55.QueryBalanceRequestProtoMsg): _55.QueryBalanceRequest;
                toProto(message: _55.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _55.QueryBalanceRequest): _55.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _55.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryBalanceResponse;
                fromJSON(object: any): _55.QueryBalanceResponse;
                toJSON(message: _55.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_55.QueryBalanceResponse>): _55.QueryBalanceResponse;
                fromAmino(object: _55.QueryBalanceResponseAmino): _55.QueryBalanceResponse;
                toAmino(message: _55.QueryBalanceResponse): _55.QueryBalanceResponseAmino;
                fromAminoMsg(object: _55.QueryBalanceResponseAminoMsg): _55.QueryBalanceResponse;
                toAminoMsg(message: _55.QueryBalanceResponse): _55.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _55.QueryBalanceResponseProtoMsg): _55.QueryBalanceResponse;
                toProto(message: _55.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _55.QueryBalanceResponse): _55.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                typeUrl: string;
                encode(message: _55.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllBalancesRequest;
                fromJSON(object: any): _55.QueryAllBalancesRequest;
                toJSON(message: _55.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_55.QueryAllBalancesRequest>): _55.QueryAllBalancesRequest;
                fromAmino(object: _55.QueryAllBalancesRequestAmino): _55.QueryAllBalancesRequest;
                toAmino(message: _55.QueryAllBalancesRequest): _55.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _55.QueryAllBalancesRequestAminoMsg): _55.QueryAllBalancesRequest;
                toAminoMsg(message: _55.QueryAllBalancesRequest): _55.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _55.QueryAllBalancesRequestProtoMsg): _55.QueryAllBalancesRequest;
                toProto(message: _55.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _55.QueryAllBalancesRequest): _55.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                typeUrl: string;
                encode(message: _55.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryAllBalancesResponse;
                fromJSON(object: any): _55.QueryAllBalancesResponse;
                toJSON(message: _55.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_55.QueryAllBalancesResponse>): _55.QueryAllBalancesResponse;
                fromAmino(object: _55.QueryAllBalancesResponseAmino): _55.QueryAllBalancesResponse;
                toAmino(message: _55.QueryAllBalancesResponse): _55.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _55.QueryAllBalancesResponseAminoMsg): _55.QueryAllBalancesResponse;
                toAminoMsg(message: _55.QueryAllBalancesResponse): _55.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _55.QueryAllBalancesResponseProtoMsg): _55.QueryAllBalancesResponse;
                toProto(message: _55.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _55.QueryAllBalancesResponse): _55.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                typeUrl: string;
                encode(message: _55.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QuerySpendableBalancesRequest;
                fromJSON(object: any): _55.QuerySpendableBalancesRequest;
                toJSON(message: _55.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_55.QuerySpendableBalancesRequest>): _55.QuerySpendableBalancesRequest;
                fromAmino(object: _55.QuerySpendableBalancesRequestAmino): _55.QuerySpendableBalancesRequest;
                toAmino(message: _55.QuerySpendableBalancesRequest): _55.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _55.QuerySpendableBalancesRequestAminoMsg): _55.QuerySpendableBalancesRequest;
                toAminoMsg(message: _55.QuerySpendableBalancesRequest): _55.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _55.QuerySpendableBalancesRequestProtoMsg): _55.QuerySpendableBalancesRequest;
                toProto(message: _55.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _55.QuerySpendableBalancesRequest): _55.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                typeUrl: string;
                encode(message: _55.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QuerySpendableBalancesResponse;
                fromJSON(object: any): _55.QuerySpendableBalancesResponse;
                toJSON(message: _55.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_55.QuerySpendableBalancesResponse>): _55.QuerySpendableBalancesResponse;
                fromAmino(object: _55.QuerySpendableBalancesResponseAmino): _55.QuerySpendableBalancesResponse;
                toAmino(message: _55.QuerySpendableBalancesResponse): _55.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _55.QuerySpendableBalancesResponseAminoMsg): _55.QuerySpendableBalancesResponse;
                toAminoMsg(message: _55.QuerySpendableBalancesResponse): _55.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _55.QuerySpendableBalancesResponseProtoMsg): _55.QuerySpendableBalancesResponse;
                toProto(message: _55.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _55.QuerySpendableBalancesResponse): _55.QuerySpendableBalancesResponseProtoMsg;
            };
            QuerySpendableBalanceByDenomRequest: {
                typeUrl: string;
                encode(message: _55.QuerySpendableBalanceByDenomRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QuerySpendableBalanceByDenomRequest;
                fromJSON(object: any): _55.QuerySpendableBalanceByDenomRequest;
                toJSON(message: _55.QuerySpendableBalanceByDenomRequest): unknown;
                fromPartial(object: Partial<_55.QuerySpendableBalanceByDenomRequest>): _55.QuerySpendableBalanceByDenomRequest;
                fromAmino(object: _55.QuerySpendableBalanceByDenomRequestAmino): _55.QuerySpendableBalanceByDenomRequest;
                toAmino(message: _55.QuerySpendableBalanceByDenomRequest): _55.QuerySpendableBalanceByDenomRequestAmino;
                fromAminoMsg(object: _55.QuerySpendableBalanceByDenomRequestAminoMsg): _55.QuerySpendableBalanceByDenomRequest;
                toAminoMsg(message: _55.QuerySpendableBalanceByDenomRequest): _55.QuerySpendableBalanceByDenomRequestAminoMsg;
                fromProtoMsg(message: _55.QuerySpendableBalanceByDenomRequestProtoMsg): _55.QuerySpendableBalanceByDenomRequest;
                toProto(message: _55.QuerySpendableBalanceByDenomRequest): Uint8Array;
                toProtoMsg(message: _55.QuerySpendableBalanceByDenomRequest): _55.QuerySpendableBalanceByDenomRequestProtoMsg;
            };
            QuerySpendableBalanceByDenomResponse: {
                typeUrl: string;
                encode(message: _55.QuerySpendableBalanceByDenomResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QuerySpendableBalanceByDenomResponse;
                fromJSON(object: any): _55.QuerySpendableBalanceByDenomResponse;
                toJSON(message: _55.QuerySpendableBalanceByDenomResponse): unknown;
                fromPartial(object: Partial<_55.QuerySpendableBalanceByDenomResponse>): _55.QuerySpendableBalanceByDenomResponse;
                fromAmino(object: _55.QuerySpendableBalanceByDenomResponseAmino): _55.QuerySpendableBalanceByDenomResponse;
                toAmino(message: _55.QuerySpendableBalanceByDenomResponse): _55.QuerySpendableBalanceByDenomResponseAmino;
                fromAminoMsg(object: _55.QuerySpendableBalanceByDenomResponseAminoMsg): _55.QuerySpendableBalanceByDenomResponse;
                toAminoMsg(message: _55.QuerySpendableBalanceByDenomResponse): _55.QuerySpendableBalanceByDenomResponseAminoMsg;
                fromProtoMsg(message: _55.QuerySpendableBalanceByDenomResponseProtoMsg): _55.QuerySpendableBalanceByDenomResponse;
                toProto(message: _55.QuerySpendableBalanceByDenomResponse): Uint8Array;
                toProtoMsg(message: _55.QuerySpendableBalanceByDenomResponse): _55.QuerySpendableBalanceByDenomResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                typeUrl: string;
                encode(message: _55.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryTotalSupplyRequest;
                fromJSON(object: any): _55.QueryTotalSupplyRequest;
                toJSON(message: _55.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_55.QueryTotalSupplyRequest>): _55.QueryTotalSupplyRequest;
                fromAmino(object: _55.QueryTotalSupplyRequestAmino): _55.QueryTotalSupplyRequest;
                toAmino(message: _55.QueryTotalSupplyRequest): _55.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _55.QueryTotalSupplyRequestAminoMsg): _55.QueryTotalSupplyRequest;
                toAminoMsg(message: _55.QueryTotalSupplyRequest): _55.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _55.QueryTotalSupplyRequestProtoMsg): _55.QueryTotalSupplyRequest;
                toProto(message: _55.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _55.QueryTotalSupplyRequest): _55.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                typeUrl: string;
                encode(message: _55.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryTotalSupplyResponse;
                fromJSON(object: any): _55.QueryTotalSupplyResponse;
                toJSON(message: _55.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_55.QueryTotalSupplyResponse>): _55.QueryTotalSupplyResponse;
                fromAmino(object: _55.QueryTotalSupplyResponseAmino): _55.QueryTotalSupplyResponse;
                toAmino(message: _55.QueryTotalSupplyResponse): _55.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _55.QueryTotalSupplyResponseAminoMsg): _55.QueryTotalSupplyResponse;
                toAminoMsg(message: _55.QueryTotalSupplyResponse): _55.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _55.QueryTotalSupplyResponseProtoMsg): _55.QueryTotalSupplyResponse;
                toProto(message: _55.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _55.QueryTotalSupplyResponse): _55.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                typeUrl: string;
                encode(message: _55.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QuerySupplyOfRequest;
                fromJSON(object: any): _55.QuerySupplyOfRequest;
                toJSON(message: _55.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_55.QuerySupplyOfRequest>): _55.QuerySupplyOfRequest;
                fromAmino(object: _55.QuerySupplyOfRequestAmino): _55.QuerySupplyOfRequest;
                toAmino(message: _55.QuerySupplyOfRequest): _55.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _55.QuerySupplyOfRequestAminoMsg): _55.QuerySupplyOfRequest;
                toAminoMsg(message: _55.QuerySupplyOfRequest): _55.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _55.QuerySupplyOfRequestProtoMsg): _55.QuerySupplyOfRequest;
                toProto(message: _55.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _55.QuerySupplyOfRequest): _55.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                typeUrl: string;
                encode(message: _55.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QuerySupplyOfResponse;
                fromJSON(object: any): _55.QuerySupplyOfResponse;
                toJSON(message: _55.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_55.QuerySupplyOfResponse>): _55.QuerySupplyOfResponse;
                fromAmino(object: _55.QuerySupplyOfResponseAmino): _55.QuerySupplyOfResponse;
                toAmino(message: _55.QuerySupplyOfResponse): _55.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _55.QuerySupplyOfResponseAminoMsg): _55.QuerySupplyOfResponse;
                toAminoMsg(message: _55.QuerySupplyOfResponse): _55.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _55.QuerySupplyOfResponseProtoMsg): _55.QuerySupplyOfResponse;
                toProto(message: _55.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _55.QuerySupplyOfResponse): _55.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _55.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsRequest;
                fromJSON(_: any): _55.QueryParamsRequest;
                toJSON(_: _55.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_55.QueryParamsRequest>): _55.QueryParamsRequest;
                fromAmino(_: _55.QueryParamsRequestAmino): _55.QueryParamsRequest;
                toAmino(_: _55.QueryParamsRequest): _55.QueryParamsRequestAmino;
                fromAminoMsg(object: _55.QueryParamsRequestAminoMsg): _55.QueryParamsRequest;
                toAminoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _55.QueryParamsRequestProtoMsg): _55.QueryParamsRequest;
                toProto(message: _55.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _55.QueryParamsRequest): _55.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _55.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryParamsResponse;
                fromJSON(object: any): _55.QueryParamsResponse;
                toJSON(message: _55.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_55.QueryParamsResponse>): _55.QueryParamsResponse;
                fromAmino(object: _55.QueryParamsResponseAmino): _55.QueryParamsResponse;
                toAmino(message: _55.QueryParamsResponse): _55.QueryParamsResponseAmino;
                fromAminoMsg(object: _55.QueryParamsResponseAminoMsg): _55.QueryParamsResponse;
                toAminoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _55.QueryParamsResponseProtoMsg): _55.QueryParamsResponse;
                toProto(message: _55.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _55.QueryParamsResponse): _55.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                typeUrl: string;
                encode(message: _55.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDenomsMetadataRequest;
                fromJSON(object: any): _55.QueryDenomsMetadataRequest;
                toJSON(message: _55.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_55.QueryDenomsMetadataRequest>): _55.QueryDenomsMetadataRequest;
                fromAmino(object: _55.QueryDenomsMetadataRequestAmino): _55.QueryDenomsMetadataRequest;
                toAmino(message: _55.QueryDenomsMetadataRequest): _55.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _55.QueryDenomsMetadataRequestAminoMsg): _55.QueryDenomsMetadataRequest;
                toAminoMsg(message: _55.QueryDenomsMetadataRequest): _55.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDenomsMetadataRequestProtoMsg): _55.QueryDenomsMetadataRequest;
                toProto(message: _55.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDenomsMetadataRequest): _55.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                typeUrl: string;
                encode(message: _55.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDenomsMetadataResponse;
                fromJSON(object: any): _55.QueryDenomsMetadataResponse;
                toJSON(message: _55.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_55.QueryDenomsMetadataResponse>): _55.QueryDenomsMetadataResponse;
                fromAmino(object: _55.QueryDenomsMetadataResponseAmino): _55.QueryDenomsMetadataResponse;
                toAmino(message: _55.QueryDenomsMetadataResponse): _55.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _55.QueryDenomsMetadataResponseAminoMsg): _55.QueryDenomsMetadataResponse;
                toAminoMsg(message: _55.QueryDenomsMetadataResponse): _55.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDenomsMetadataResponseProtoMsg): _55.QueryDenomsMetadataResponse;
                toProto(message: _55.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDenomsMetadataResponse): _55.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                typeUrl: string;
                encode(message: _55.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDenomMetadataRequest;
                fromJSON(object: any): _55.QueryDenomMetadataRequest;
                toJSON(message: _55.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_55.QueryDenomMetadataRequest>): _55.QueryDenomMetadataRequest;
                fromAmino(object: _55.QueryDenomMetadataRequestAmino): _55.QueryDenomMetadataRequest;
                toAmino(message: _55.QueryDenomMetadataRequest): _55.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _55.QueryDenomMetadataRequestAminoMsg): _55.QueryDenomMetadataRequest;
                toAminoMsg(message: _55.QueryDenomMetadataRequest): _55.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDenomMetadataRequestProtoMsg): _55.QueryDenomMetadataRequest;
                toProto(message: _55.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDenomMetadataRequest): _55.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                typeUrl: string;
                encode(message: _55.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDenomMetadataResponse;
                fromJSON(object: any): _55.QueryDenomMetadataResponse;
                toJSON(message: _55.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_55.QueryDenomMetadataResponse>): _55.QueryDenomMetadataResponse;
                fromAmino(object: _55.QueryDenomMetadataResponseAmino): _55.QueryDenomMetadataResponse;
                toAmino(message: _55.QueryDenomMetadataResponse): _55.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _55.QueryDenomMetadataResponseAminoMsg): _55.QueryDenomMetadataResponse;
                toAminoMsg(message: _55.QueryDenomMetadataResponse): _55.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDenomMetadataResponseProtoMsg): _55.QueryDenomMetadataResponse;
                toProto(message: _55.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDenomMetadataResponse): _55.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                typeUrl: string;
                encode(message: _55.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDenomOwnersRequest;
                fromJSON(object: any): _55.QueryDenomOwnersRequest;
                toJSON(message: _55.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_55.QueryDenomOwnersRequest>): _55.QueryDenomOwnersRequest;
                fromAmino(object: _55.QueryDenomOwnersRequestAmino): _55.QueryDenomOwnersRequest;
                toAmino(message: _55.QueryDenomOwnersRequest): _55.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _55.QueryDenomOwnersRequestAminoMsg): _55.QueryDenomOwnersRequest;
                toAminoMsg(message: _55.QueryDenomOwnersRequest): _55.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _55.QueryDenomOwnersRequestProtoMsg): _55.QueryDenomOwnersRequest;
                toProto(message: _55.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _55.QueryDenomOwnersRequest): _55.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                typeUrl: string;
                encode(message: _55.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.DenomOwner;
                fromJSON(object: any): _55.DenomOwner;
                toJSON(message: _55.DenomOwner): unknown;
                fromPartial(object: Partial<_55.DenomOwner>): _55.DenomOwner;
                fromAmino(object: _55.DenomOwnerAmino): _55.DenomOwner;
                toAmino(message: _55.DenomOwner): _55.DenomOwnerAmino;
                fromAminoMsg(object: _55.DenomOwnerAminoMsg): _55.DenomOwner;
                toAminoMsg(message: _55.DenomOwner): _55.DenomOwnerAminoMsg;
                fromProtoMsg(message: _55.DenomOwnerProtoMsg): _55.DenomOwner;
                toProto(message: _55.DenomOwner): Uint8Array;
                toProtoMsg(message: _55.DenomOwner): _55.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                typeUrl: string;
                encode(message: _55.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryDenomOwnersResponse;
                fromJSON(object: any): _55.QueryDenomOwnersResponse;
                toJSON(message: _55.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_55.QueryDenomOwnersResponse>): _55.QueryDenomOwnersResponse;
                fromAmino(object: _55.QueryDenomOwnersResponseAmino): _55.QueryDenomOwnersResponse;
                toAmino(message: _55.QueryDenomOwnersResponse): _55.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _55.QueryDenomOwnersResponseAminoMsg): _55.QueryDenomOwnersResponse;
                toAminoMsg(message: _55.QueryDenomOwnersResponse): _55.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _55.QueryDenomOwnersResponseProtoMsg): _55.QueryDenomOwnersResponse;
                toProto(message: _55.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _55.QueryDenomOwnersResponse): _55.QueryDenomOwnersResponseProtoMsg;
            };
            QuerySendEnabledRequest: {
                typeUrl: string;
                encode(message: _55.QuerySendEnabledRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QuerySendEnabledRequest;
                fromJSON(object: any): _55.QuerySendEnabledRequest;
                toJSON(message: _55.QuerySendEnabledRequest): unknown;
                fromPartial(object: Partial<_55.QuerySendEnabledRequest>): _55.QuerySendEnabledRequest;
                fromAmino(object: _55.QuerySendEnabledRequestAmino): _55.QuerySendEnabledRequest;
                toAmino(message: _55.QuerySendEnabledRequest): _55.QuerySendEnabledRequestAmino;
                fromAminoMsg(object: _55.QuerySendEnabledRequestAminoMsg): _55.QuerySendEnabledRequest;
                toAminoMsg(message: _55.QuerySendEnabledRequest): _55.QuerySendEnabledRequestAminoMsg;
                fromProtoMsg(message: _55.QuerySendEnabledRequestProtoMsg): _55.QuerySendEnabledRequest;
                toProto(message: _55.QuerySendEnabledRequest): Uint8Array;
                toProtoMsg(message: _55.QuerySendEnabledRequest): _55.QuerySendEnabledRequestProtoMsg;
            };
            QuerySendEnabledResponse: {
                typeUrl: string;
                encode(message: _55.QuerySendEnabledResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QuerySendEnabledResponse;
                fromJSON(object: any): _55.QuerySendEnabledResponse;
                toJSON(message: _55.QuerySendEnabledResponse): unknown;
                fromPartial(object: Partial<_55.QuerySendEnabledResponse>): _55.QuerySendEnabledResponse;
                fromAmino(object: _55.QuerySendEnabledResponseAmino): _55.QuerySendEnabledResponse;
                toAmino(message: _55.QuerySendEnabledResponse): _55.QuerySendEnabledResponseAmino;
                fromAminoMsg(object: _55.QuerySendEnabledResponseAminoMsg): _55.QuerySendEnabledResponse;
                toAminoMsg(message: _55.QuerySendEnabledResponse): _55.QuerySendEnabledResponseAminoMsg;
                fromProtoMsg(message: _55.QuerySendEnabledResponseProtoMsg): _55.QuerySendEnabledResponse;
                toProto(message: _55.QuerySendEnabledResponse): Uint8Array;
                toProtoMsg(message: _55.QuerySendEnabledResponse): _55.QuerySendEnabledResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _54.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.GenesisState;
                fromJSON(object: any): _54.GenesisState;
                toJSON(message: _54.GenesisState): unknown;
                fromPartial(object: Partial<_54.GenesisState>): _54.GenesisState;
                fromAmino(object: _54.GenesisStateAmino): _54.GenesisState;
                toAmino(message: _54.GenesisState): _54.GenesisStateAmino;
                fromAminoMsg(object: _54.GenesisStateAminoMsg): _54.GenesisState;
                toAminoMsg(message: _54.GenesisState): _54.GenesisStateAminoMsg;
                fromProtoMsg(message: _54.GenesisStateProtoMsg): _54.GenesisState;
                toProto(message: _54.GenesisState): Uint8Array;
                toProtoMsg(message: _54.GenesisState): _54.GenesisStateProtoMsg;
            };
            Balance: {
                typeUrl: string;
                encode(message: _54.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.Balance;
                fromJSON(object: any): _54.Balance;
                toJSON(message: _54.Balance): unknown;
                fromPartial(object: Partial<_54.Balance>): _54.Balance;
                fromAmino(object: _54.BalanceAmino): _54.Balance;
                toAmino(message: _54.Balance): _54.BalanceAmino;
                fromAminoMsg(object: _54.BalanceAminoMsg): _54.Balance;
                toAminoMsg(message: _54.Balance): _54.BalanceAminoMsg;
                fromProtoMsg(message: _54.BalanceProtoMsg): _54.Balance;
                toProto(message: _54.Balance): Uint8Array;
                toProtoMsg(message: _54.Balance): _54.BalanceProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _53.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Params;
                fromJSON(object: any): _53.Params;
                toJSON(message: _53.Params): unknown;
                fromPartial(object: Partial<_53.Params>): _53.Params;
                fromAmino(object: _53.ParamsAmino): _53.Params;
                toAmino(message: _53.Params): _53.ParamsAmino;
                fromAminoMsg(object: _53.ParamsAminoMsg): _53.Params;
                toAminoMsg(message: _53.Params): _53.ParamsAminoMsg;
                fromProtoMsg(message: _53.ParamsProtoMsg): _53.Params;
                toProto(message: _53.Params): Uint8Array;
                toProtoMsg(message: _53.Params): _53.ParamsProtoMsg;
            };
            SendEnabled: {
                typeUrl: string;
                encode(message: _53.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.SendEnabled;
                fromJSON(object: any): _53.SendEnabled;
                toJSON(message: _53.SendEnabled): unknown;
                fromPartial(object: Partial<_53.SendEnabled>): _53.SendEnabled;
                fromAmino(object: _53.SendEnabledAmino): _53.SendEnabled;
                toAmino(message: _53.SendEnabled): _53.SendEnabledAmino;
                fromAminoMsg(object: _53.SendEnabledAminoMsg): _53.SendEnabled;
                toAminoMsg(message: _53.SendEnabled): _53.SendEnabledAminoMsg;
                fromProtoMsg(message: _53.SendEnabledProtoMsg): _53.SendEnabled;
                toProto(message: _53.SendEnabled): Uint8Array;
                toProtoMsg(message: _53.SendEnabled): _53.SendEnabledProtoMsg;
            };
            Input: {
                typeUrl: string;
                encode(message: _53.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Input;
                fromJSON(object: any): _53.Input;
                toJSON(message: _53.Input): unknown;
                fromPartial(object: Partial<_53.Input>): _53.Input;
                fromAmino(object: _53.InputAmino): _53.Input;
                toAmino(message: _53.Input): _53.InputAmino;
                fromAminoMsg(object: _53.InputAminoMsg): _53.Input;
                toAminoMsg(message: _53.Input): _53.InputAminoMsg;
                fromProtoMsg(message: _53.InputProtoMsg): _53.Input;
                toProto(message: _53.Input): Uint8Array;
                toProtoMsg(message: _53.Input): _53.InputProtoMsg;
            };
            Output: {
                typeUrl: string;
                encode(message: _53.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Output;
                fromJSON(object: any): _53.Output;
                toJSON(message: _53.Output): unknown;
                fromPartial(object: Partial<_53.Output>): _53.Output;
                fromAmino(object: _53.OutputAmino): _53.Output;
                toAmino(message: _53.Output): _53.OutputAmino;
                fromAminoMsg(object: _53.OutputAminoMsg): _53.Output;
                toAminoMsg(message: _53.Output): _53.OutputAminoMsg;
                fromProtoMsg(message: _53.OutputProtoMsg): _53.Output;
                toProto(message: _53.Output): Uint8Array;
                toProtoMsg(message: _53.Output): _53.OutputProtoMsg;
            };
            Supply: {
                typeUrl: string;
                encode(message: _53.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Supply;
                fromJSON(object: any): _53.Supply;
                toJSON(message: _53.Supply): unknown;
                fromPartial(object: Partial<_53.Supply>): _53.Supply;
                fromAmino(object: _53.SupplyAmino): _53.Supply;
                toAmino(message: _53.Supply): _53.SupplyAmino;
                fromAminoMsg(object: _53.SupplyAminoMsg): _53.Supply;
                toAminoMsg(message: _53.Supply): _53.SupplyAminoMsg;
                fromProtoMsg(message: _53.SupplyProtoMsg): _53.Supply;
                toProto(message: _53.Supply): Uint8Array;
                toProtoMsg(message: _53.Supply): _53.SupplyProtoMsg;
            };
            DenomUnit: {
                typeUrl: string;
                encode(message: _53.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.DenomUnit;
                fromJSON(object: any): _53.DenomUnit;
                toJSON(message: _53.DenomUnit): unknown;
                fromPartial(object: Partial<_53.DenomUnit>): _53.DenomUnit;
                fromAmino(object: _53.DenomUnitAmino): _53.DenomUnit;
                toAmino(message: _53.DenomUnit): _53.DenomUnitAmino;
                fromAminoMsg(object: _53.DenomUnitAminoMsg): _53.DenomUnit;
                toAminoMsg(message: _53.DenomUnit): _53.DenomUnitAminoMsg;
                fromProtoMsg(message: _53.DenomUnitProtoMsg): _53.DenomUnit;
                toProto(message: _53.DenomUnit): Uint8Array;
                toProtoMsg(message: _53.DenomUnit): _53.DenomUnitProtoMsg;
            };
            Metadata: {
                typeUrl: string;
                encode(message: _53.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Metadata;
                fromJSON(object: any): _53.Metadata;
                toJSON(message: _53.Metadata): unknown;
                fromPartial(object: Partial<_53.Metadata>): _53.Metadata;
                fromAmino(object: _53.MetadataAmino): _53.Metadata;
                toAmino(message: _53.Metadata): _53.MetadataAmino;
                fromAminoMsg(object: _53.MetadataAminoMsg): _53.Metadata;
                toAminoMsg(message: _53.Metadata): _53.MetadataAminoMsg;
                fromProtoMsg(message: _53.MetadataProtoMsg): _53.Metadata;
                toProto(message: _53.Metadata): Uint8Array;
                toProtoMsg(message: _53.Metadata): _53.MetadataProtoMsg;
            };
            SendAuthorization: {
                typeUrl: string;
                encode(message: _52.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.SendAuthorization;
                fromJSON(object: any): _52.SendAuthorization;
                toJSON(message: _52.SendAuthorization): unknown;
                fromPartial(object: Partial<_52.SendAuthorization>): _52.SendAuthorization;
                fromAmino(object: _52.SendAuthorizationAmino): _52.SendAuthorization;
                toAmino(message: _52.SendAuthorization): _52.SendAuthorizationAmino;
                fromAminoMsg(object: _52.SendAuthorizationAminoMsg): _52.SendAuthorization;
                toAminoMsg(message: _52.SendAuthorization): _52.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _52.SendAuthorizationProtoMsg): _52.SendAuthorization;
                toProto(message: _52.SendAuthorization): Uint8Array;
                toProtoMsg(message: _52.SendAuthorization): _52.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    typeUrl: string;
                    encode(message: _57.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TxResponse;
                    fromJSON(object: any): _57.TxResponse;
                    toJSON(message: _57.TxResponse): unknown;
                    fromPartial(object: Partial<_57.TxResponse>): _57.TxResponse;
                    fromAmino(object: _57.TxResponseAmino): _57.TxResponse;
                    toAmino(message: _57.TxResponse): _57.TxResponseAmino;
                    fromAminoMsg(object: _57.TxResponseAminoMsg): _57.TxResponse;
                    toAminoMsg(message: _57.TxResponse): _57.TxResponseAminoMsg;
                    fromProtoMsg(message: _57.TxResponseProtoMsg): _57.TxResponse;
                    toProto(message: _57.TxResponse): Uint8Array;
                    toProtoMsg(message: _57.TxResponse): _57.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    typeUrl: string;
                    encode(message: _57.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.ABCIMessageLog;
                    fromJSON(object: any): _57.ABCIMessageLog;
                    toJSON(message: _57.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_57.ABCIMessageLog>): _57.ABCIMessageLog;
                    fromAmino(object: _57.ABCIMessageLogAmino): _57.ABCIMessageLog;
                    toAmino(message: _57.ABCIMessageLog): _57.ABCIMessageLogAmino;
                    fromAminoMsg(object: _57.ABCIMessageLogAminoMsg): _57.ABCIMessageLog;
                    toAminoMsg(message: _57.ABCIMessageLog): _57.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _57.ABCIMessageLogProtoMsg): _57.ABCIMessageLog;
                    toProto(message: _57.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _57.ABCIMessageLog): _57.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    typeUrl: string;
                    encode(message: _57.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.StringEvent;
                    fromJSON(object: any): _57.StringEvent;
                    toJSON(message: _57.StringEvent): unknown;
                    fromPartial(object: Partial<_57.StringEvent>): _57.StringEvent;
                    fromAmino(object: _57.StringEventAmino): _57.StringEvent;
                    toAmino(message: _57.StringEvent): _57.StringEventAmino;
                    fromAminoMsg(object: _57.StringEventAminoMsg): _57.StringEvent;
                    toAminoMsg(message: _57.StringEvent): _57.StringEventAminoMsg;
                    fromProtoMsg(message: _57.StringEventProtoMsg): _57.StringEvent;
                    toProto(message: _57.StringEvent): Uint8Array;
                    toProtoMsg(message: _57.StringEvent): _57.StringEventProtoMsg;
                };
                Attribute: {
                    typeUrl: string;
                    encode(message: _57.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Attribute;
                    fromJSON(object: any): _57.Attribute;
                    toJSON(message: _57.Attribute): unknown;
                    fromPartial(object: Partial<_57.Attribute>): _57.Attribute;
                    fromAmino(object: _57.AttributeAmino): _57.Attribute;
                    toAmino(message: _57.Attribute): _57.AttributeAmino;
                    fromAminoMsg(object: _57.AttributeAminoMsg): _57.Attribute;
                    toAminoMsg(message: _57.Attribute): _57.AttributeAminoMsg;
                    fromProtoMsg(message: _57.AttributeProtoMsg): _57.Attribute;
                    toProto(message: _57.Attribute): Uint8Array;
                    toProtoMsg(message: _57.Attribute): _57.AttributeProtoMsg;
                };
                GasInfo: {
                    typeUrl: string;
                    encode(message: _57.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.GasInfo;
                    fromJSON(object: any): _57.GasInfo;
                    toJSON(message: _57.GasInfo): unknown;
                    fromPartial(object: Partial<_57.GasInfo>): _57.GasInfo;
                    fromAmino(object: _57.GasInfoAmino): _57.GasInfo;
                    toAmino(message: _57.GasInfo): _57.GasInfoAmino;
                    fromAminoMsg(object: _57.GasInfoAminoMsg): _57.GasInfo;
                    toAminoMsg(message: _57.GasInfo): _57.GasInfoAminoMsg;
                    fromProtoMsg(message: _57.GasInfoProtoMsg): _57.GasInfo;
                    toProto(message: _57.GasInfo): Uint8Array;
                    toProtoMsg(message: _57.GasInfo): _57.GasInfoProtoMsg;
                };
                Result: {
                    typeUrl: string;
                    encode(message: _57.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.Result;
                    fromJSON(object: any): _57.Result;
                    toJSON(message: _57.Result): unknown;
                    fromPartial(object: Partial<_57.Result>): _57.Result;
                    fromAmino(object: _57.ResultAmino): _57.Result;
                    toAmino(message: _57.Result): _57.ResultAmino;
                    fromAminoMsg(object: _57.ResultAminoMsg): _57.Result;
                    toAminoMsg(message: _57.Result): _57.ResultAminoMsg;
                    fromProtoMsg(message: _57.ResultProtoMsg): _57.Result;
                    toProto(message: _57.Result): Uint8Array;
                    toProtoMsg(message: _57.Result): _57.ResultProtoMsg;
                };
                SimulationResponse: {
                    typeUrl: string;
                    encode(message: _57.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.SimulationResponse;
                    fromJSON(object: any): _57.SimulationResponse;
                    toJSON(message: _57.SimulationResponse): unknown;
                    fromPartial(object: Partial<_57.SimulationResponse>): _57.SimulationResponse;
                    fromAmino(object: _57.SimulationResponseAmino): _57.SimulationResponse;
                    toAmino(message: _57.SimulationResponse): _57.SimulationResponseAmino;
                    fromAminoMsg(object: _57.SimulationResponseAminoMsg): _57.SimulationResponse;
                    toAminoMsg(message: _57.SimulationResponse): _57.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _57.SimulationResponseProtoMsg): _57.SimulationResponse;
                    toProto(message: _57.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _57.SimulationResponse): _57.SimulationResponseProtoMsg;
                };
                MsgData: {
                    typeUrl: string;
                    encode(message: _57.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.MsgData;
                    fromJSON(object: any): _57.MsgData;
                    toJSON(message: _57.MsgData): unknown;
                    fromPartial(object: Partial<_57.MsgData>): _57.MsgData;
                    fromAmino(object: _57.MsgDataAmino): _57.MsgData;
                    toAmino(message: _57.MsgData): _57.MsgDataAmino;
                    fromAminoMsg(object: _57.MsgDataAminoMsg): _57.MsgData;
                    toAminoMsg(message: _57.MsgData): _57.MsgDataAminoMsg;
                    fromProtoMsg(message: _57.MsgDataProtoMsg): _57.MsgData;
                    toProto(message: _57.MsgData): Uint8Array;
                    toProtoMsg(message: _57.MsgData): _57.MsgDataProtoMsg;
                };
                TxMsgData: {
                    typeUrl: string;
                    encode(message: _57.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TxMsgData;
                    fromJSON(object: any): _57.TxMsgData;
                    toJSON(message: _57.TxMsgData): unknown;
                    fromPartial(object: Partial<_57.TxMsgData>): _57.TxMsgData;
                    fromAmino(object: _57.TxMsgDataAmino): _57.TxMsgData;
                    toAmino(message: _57.TxMsgData): _57.TxMsgDataAmino;
                    fromAminoMsg(object: _57.TxMsgDataAminoMsg): _57.TxMsgData;
                    toAminoMsg(message: _57.TxMsgData): _57.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _57.TxMsgDataProtoMsg): _57.TxMsgData;
                    toProto(message: _57.TxMsgData): Uint8Array;
                    toProtoMsg(message: _57.TxMsgData): _57.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    typeUrl: string;
                    encode(message: _57.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.SearchTxsResult;
                    fromJSON(object: any): _57.SearchTxsResult;
                    toJSON(message: _57.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_57.SearchTxsResult>): _57.SearchTxsResult;
                    fromAmino(object: _57.SearchTxsResultAmino): _57.SearchTxsResult;
                    toAmino(message: _57.SearchTxsResult): _57.SearchTxsResultAmino;
                    fromAminoMsg(object: _57.SearchTxsResultAminoMsg): _57.SearchTxsResult;
                    toAminoMsg(message: _57.SearchTxsResult): _57.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _57.SearchTxsResultProtoMsg): _57.SearchTxsResult;
                    toProto(message: _57.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _57.SearchTxsResult): _57.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    typeUrl: string;
                    encode(message: _58.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Pairs;
                    fromJSON(object: any): _58.Pairs;
                    toJSON(message: _58.Pairs): unknown;
                    fromPartial(object: Partial<_58.Pairs>): _58.Pairs;
                    fromAmino(object: _58.PairsAmino): _58.Pairs;
                    toAmino(message: _58.Pairs): _58.PairsAmino;
                    fromAminoMsg(object: _58.PairsAminoMsg): _58.Pairs;
                    toAminoMsg(message: _58.Pairs): _58.PairsAminoMsg;
                    fromProtoMsg(message: _58.PairsProtoMsg): _58.Pairs;
                    toProto(message: _58.Pairs): Uint8Array;
                    toProtoMsg(message: _58.Pairs): _58.PairsProtoMsg;
                };
                Pair: {
                    typeUrl: string;
                    encode(message: _58.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Pair;
                    fromJSON(object: any): _58.Pair;
                    toJSON(message: _58.Pair): unknown;
                    fromPartial(object: Partial<_58.Pair>): _58.Pair;
                    fromAmino(object: _58.PairAmino): _58.Pair;
                    toAmino(message: _58.Pair): _58.PairAmino;
                    fromAminoMsg(object: _58.PairAminoMsg): _58.Pair;
                    toAminoMsg(message: _58.Pair): _58.PairAminoMsg;
                    fromProtoMsg(message: _58.PairProtoMsg): _58.Pair;
                    toProto(message: _58.Pair): Uint8Array;
                    toProtoMsg(message: _58.Pair): _58.PairProtoMsg;
                };
            };
        }
        namespace node {
            const v1beta1: {
                ServiceClientImpl: typeof _278.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    config(request?: _59.ConfigRequest): Promise<_59.ConfigResponse>;
                };
                LCDQueryClient: typeof _257.LCDQueryClient;
                ConfigRequest: {
                    typeUrl: string;
                    encode(_: _59.ConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ConfigRequest;
                    fromJSON(_: any): _59.ConfigRequest;
                    toJSON(_: _59.ConfigRequest): unknown;
                    fromPartial(_: Partial<_59.ConfigRequest>): _59.ConfigRequest;
                    fromAmino(_: _59.ConfigRequestAmino): _59.ConfigRequest;
                    toAmino(_: _59.ConfigRequest): _59.ConfigRequestAmino;
                    fromAminoMsg(object: _59.ConfigRequestAminoMsg): _59.ConfigRequest;
                    toAminoMsg(message: _59.ConfigRequest): _59.ConfigRequestAminoMsg;
                    fromProtoMsg(message: _59.ConfigRequestProtoMsg): _59.ConfigRequest;
                    toProto(message: _59.ConfigRequest): Uint8Array;
                    toProtoMsg(message: _59.ConfigRequest): _59.ConfigRequestProtoMsg;
                };
                ConfigResponse: {
                    typeUrl: string;
                    encode(message: _59.ConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _59.ConfigResponse;
                    fromJSON(object: any): _59.ConfigResponse;
                    toJSON(message: _59.ConfigResponse): unknown;
                    fromPartial(object: Partial<_59.ConfigResponse>): _59.ConfigResponse;
                    fromAmino(object: _59.ConfigResponseAmino): _59.ConfigResponse;
                    toAmino(message: _59.ConfigResponse): _59.ConfigResponseAmino;
                    fromAminoMsg(object: _59.ConfigResponseAminoMsg): _59.ConfigResponse;
                    toAminoMsg(message: _59.ConfigResponse): _59.ConfigResponseAminoMsg;
                    fromProtoMsg(message: _59.ConfigResponseProtoMsg): _59.ConfigResponse;
                    toProto(message: _59.ConfigResponse): Uint8Array;
                    toProtoMsg(message: _59.ConfigResponse): _59.ConfigResponseProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    typeUrl: string;
                    encode(message: _60.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PageRequest;
                    fromJSON(object: any): _60.PageRequest;
                    toJSON(message: _60.PageRequest): unknown;
                    fromPartial(object: Partial<_60.PageRequest>): _60.PageRequest;
                    fromAmino(object: _60.PageRequestAmino): _60.PageRequest;
                    toAmino(message: _60.PageRequest): _60.PageRequestAmino;
                    fromAminoMsg(object: _60.PageRequestAminoMsg): _60.PageRequest;
                    toAminoMsg(message: _60.PageRequest): _60.PageRequestAminoMsg;
                    fromProtoMsg(message: _60.PageRequestProtoMsg): _60.PageRequest;
                    toProto(message: _60.PageRequest): Uint8Array;
                    toProtoMsg(message: _60.PageRequest): _60.PageRequestProtoMsg;
                };
                PageResponse: {
                    typeUrl: string;
                    encode(message: _60.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.PageResponse;
                    fromJSON(object: any): _60.PageResponse;
                    toJSON(message: _60.PageResponse): unknown;
                    fromPartial(object: Partial<_60.PageResponse>): _60.PageResponse;
                    fromAmino(object: _60.PageResponseAmino): _60.PageResponse;
                    toAmino(message: _60.PageResponse): _60.PageResponseAmino;
                    fromAminoMsg(object: _60.PageResponseAminoMsg): _60.PageResponse;
                    toAminoMsg(message: _60.PageResponse): _60.PageResponseAminoMsg;
                    fromProtoMsg(message: _60.PageResponseProtoMsg): _60.PageResponse;
                    toProto(message: _60.PageResponse): Uint8Array;
                    toProtoMsg(message: _60.PageResponse): _60.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    typeUrl: string;
                    encode(_: _61.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ListAllInterfacesRequest;
                    fromJSON(_: any): _61.ListAllInterfacesRequest;
                    toJSON(_: _61.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_61.ListAllInterfacesRequest>): _61.ListAllInterfacesRequest;
                    fromAmino(_: _61.ListAllInterfacesRequestAmino): _61.ListAllInterfacesRequest;
                    toAmino(_: _61.ListAllInterfacesRequest): _61.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _61.ListAllInterfacesRequestAminoMsg): _61.ListAllInterfacesRequest;
                    toAminoMsg(message: _61.ListAllInterfacesRequest): _61.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _61.ListAllInterfacesRequestProtoMsg): _61.ListAllInterfacesRequest;
                    toProto(message: _61.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _61.ListAllInterfacesRequest): _61.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    typeUrl: string;
                    encode(message: _61.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ListAllInterfacesResponse;
                    fromJSON(object: any): _61.ListAllInterfacesResponse;
                    toJSON(message: _61.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_61.ListAllInterfacesResponse>): _61.ListAllInterfacesResponse;
                    fromAmino(object: _61.ListAllInterfacesResponseAmino): _61.ListAllInterfacesResponse;
                    toAmino(message: _61.ListAllInterfacesResponse): _61.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _61.ListAllInterfacesResponseAminoMsg): _61.ListAllInterfacesResponse;
                    toAminoMsg(message: _61.ListAllInterfacesResponse): _61.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _61.ListAllInterfacesResponseProtoMsg): _61.ListAllInterfacesResponse;
                    toProto(message: _61.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _61.ListAllInterfacesResponse): _61.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    typeUrl: string;
                    encode(message: _61.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ListImplementationsRequest;
                    fromJSON(object: any): _61.ListImplementationsRequest;
                    toJSON(message: _61.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_61.ListImplementationsRequest>): _61.ListImplementationsRequest;
                    fromAmino(object: _61.ListImplementationsRequestAmino): _61.ListImplementationsRequest;
                    toAmino(message: _61.ListImplementationsRequest): _61.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _61.ListImplementationsRequestAminoMsg): _61.ListImplementationsRequest;
                    toAminoMsg(message: _61.ListImplementationsRequest): _61.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _61.ListImplementationsRequestProtoMsg): _61.ListImplementationsRequest;
                    toProto(message: _61.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _61.ListImplementationsRequest): _61.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    typeUrl: string;
                    encode(message: _61.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.ListImplementationsResponse;
                    fromJSON(object: any): _61.ListImplementationsResponse;
                    toJSON(message: _61.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_61.ListImplementationsResponse>): _61.ListImplementationsResponse;
                    fromAmino(object: _61.ListImplementationsResponseAmino): _61.ListImplementationsResponse;
                    toAmino(message: _61.ListImplementationsResponse): _61.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _61.ListImplementationsResponseAminoMsg): _61.ListImplementationsResponse;
                    toAminoMsg(message: _61.ListImplementationsResponse): _61.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _61.ListImplementationsResponseProtoMsg): _61.ListImplementationsResponse;
                    toProto(message: _61.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _61.ListImplementationsResponse): _61.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    typeUrl: string;
                    encode(message: _62.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.AppDescriptor;
                    fromJSON(object: any): _62.AppDescriptor;
                    toJSON(message: _62.AppDescriptor): unknown;
                    fromPartial(object: Partial<_62.AppDescriptor>): _62.AppDescriptor;
                    fromAmino(object: _62.AppDescriptorAmino): _62.AppDescriptor;
                    toAmino(message: _62.AppDescriptor): _62.AppDescriptorAmino;
                    fromAminoMsg(object: _62.AppDescriptorAminoMsg): _62.AppDescriptor;
                    toAminoMsg(message: _62.AppDescriptor): _62.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _62.AppDescriptorProtoMsg): _62.AppDescriptor;
                    toProto(message: _62.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _62.AppDescriptor): _62.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    typeUrl: string;
                    encode(message: _62.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.TxDescriptor;
                    fromJSON(object: any): _62.TxDescriptor;
                    toJSON(message: _62.TxDescriptor): unknown;
                    fromPartial(object: Partial<_62.TxDescriptor>): _62.TxDescriptor;
                    fromAmino(object: _62.TxDescriptorAmino): _62.TxDescriptor;
                    toAmino(message: _62.TxDescriptor): _62.TxDescriptorAmino;
                    fromAminoMsg(object: _62.TxDescriptorAminoMsg): _62.TxDescriptor;
                    toAminoMsg(message: _62.TxDescriptor): _62.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _62.TxDescriptorProtoMsg): _62.TxDescriptor;
                    toProto(message: _62.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _62.TxDescriptor): _62.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    typeUrl: string;
                    encode(message: _62.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.AuthnDescriptor;
                    fromJSON(object: any): _62.AuthnDescriptor;
                    toJSON(message: _62.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_62.AuthnDescriptor>): _62.AuthnDescriptor;
                    fromAmino(object: _62.AuthnDescriptorAmino): _62.AuthnDescriptor;
                    toAmino(message: _62.AuthnDescriptor): _62.AuthnDescriptorAmino;
                    fromAminoMsg(object: _62.AuthnDescriptorAminoMsg): _62.AuthnDescriptor;
                    toAminoMsg(message: _62.AuthnDescriptor): _62.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _62.AuthnDescriptorProtoMsg): _62.AuthnDescriptor;
                    toProto(message: _62.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _62.AuthnDescriptor): _62.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    typeUrl: string;
                    encode(message: _62.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.SigningModeDescriptor;
                    fromJSON(object: any): _62.SigningModeDescriptor;
                    toJSON(message: _62.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_62.SigningModeDescriptor>): _62.SigningModeDescriptor;
                    fromAmino(object: _62.SigningModeDescriptorAmino): _62.SigningModeDescriptor;
                    toAmino(message: _62.SigningModeDescriptor): _62.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _62.SigningModeDescriptorAminoMsg): _62.SigningModeDescriptor;
                    toAminoMsg(message: _62.SigningModeDescriptor): _62.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _62.SigningModeDescriptorProtoMsg): _62.SigningModeDescriptor;
                    toProto(message: _62.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _62.SigningModeDescriptor): _62.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    typeUrl: string;
                    encode(message: _62.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ChainDescriptor;
                    fromJSON(object: any): _62.ChainDescriptor;
                    toJSON(message: _62.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_62.ChainDescriptor>): _62.ChainDescriptor;
                    fromAmino(object: _62.ChainDescriptorAmino): _62.ChainDescriptor;
                    toAmino(message: _62.ChainDescriptor): _62.ChainDescriptorAmino;
                    fromAminoMsg(object: _62.ChainDescriptorAminoMsg): _62.ChainDescriptor;
                    toAminoMsg(message: _62.ChainDescriptor): _62.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _62.ChainDescriptorProtoMsg): _62.ChainDescriptor;
                    toProto(message: _62.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _62.ChainDescriptor): _62.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    typeUrl: string;
                    encode(message: _62.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.CodecDescriptor;
                    fromJSON(object: any): _62.CodecDescriptor;
                    toJSON(message: _62.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_62.CodecDescriptor>): _62.CodecDescriptor;
                    fromAmino(object: _62.CodecDescriptorAmino): _62.CodecDescriptor;
                    toAmino(message: _62.CodecDescriptor): _62.CodecDescriptorAmino;
                    fromAminoMsg(object: _62.CodecDescriptorAminoMsg): _62.CodecDescriptor;
                    toAminoMsg(message: _62.CodecDescriptor): _62.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _62.CodecDescriptorProtoMsg): _62.CodecDescriptor;
                    toProto(message: _62.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _62.CodecDescriptor): _62.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    typeUrl: string;
                    encode(message: _62.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.InterfaceDescriptor;
                    fromJSON(object: any): _62.InterfaceDescriptor;
                    toJSON(message: _62.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_62.InterfaceDescriptor>): _62.InterfaceDescriptor;
                    fromAmino(object: _62.InterfaceDescriptorAmino): _62.InterfaceDescriptor;
                    toAmino(message: _62.InterfaceDescriptor): _62.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _62.InterfaceDescriptorAminoMsg): _62.InterfaceDescriptor;
                    toAminoMsg(message: _62.InterfaceDescriptor): _62.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _62.InterfaceDescriptorProtoMsg): _62.InterfaceDescriptor;
                    toProto(message: _62.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _62.InterfaceDescriptor): _62.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    typeUrl: string;
                    encode(message: _62.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _62.InterfaceImplementerDescriptor;
                    toJSON(message: _62.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_62.InterfaceImplementerDescriptor>): _62.InterfaceImplementerDescriptor;
                    fromAmino(object: _62.InterfaceImplementerDescriptorAmino): _62.InterfaceImplementerDescriptor;
                    toAmino(message: _62.InterfaceImplementerDescriptor): _62.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _62.InterfaceImplementerDescriptorAminoMsg): _62.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _62.InterfaceImplementerDescriptor): _62.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _62.InterfaceImplementerDescriptorProtoMsg): _62.InterfaceImplementerDescriptor;
                    toProto(message: _62.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _62.InterfaceImplementerDescriptor): _62.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    typeUrl: string;
                    encode(message: _62.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _62.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _62.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_62.InterfaceAcceptingMessageDescriptor>): _62.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _62.InterfaceAcceptingMessageDescriptorAmino): _62.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _62.InterfaceAcceptingMessageDescriptor): _62.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _62.InterfaceAcceptingMessageDescriptorAminoMsg): _62.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _62.InterfaceAcceptingMessageDescriptor): _62.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _62.InterfaceAcceptingMessageDescriptorProtoMsg): _62.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _62.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _62.InterfaceAcceptingMessageDescriptor): _62.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    typeUrl: string;
                    encode(message: _62.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.ConfigurationDescriptor;
                    fromJSON(object: any): _62.ConfigurationDescriptor;
                    toJSON(message: _62.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_62.ConfigurationDescriptor>): _62.ConfigurationDescriptor;
                    fromAmino(object: _62.ConfigurationDescriptorAmino): _62.ConfigurationDescriptor;
                    toAmino(message: _62.ConfigurationDescriptor): _62.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _62.ConfigurationDescriptorAminoMsg): _62.ConfigurationDescriptor;
                    toAminoMsg(message: _62.ConfigurationDescriptor): _62.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _62.ConfigurationDescriptorProtoMsg): _62.ConfigurationDescriptor;
                    toProto(message: _62.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _62.ConfigurationDescriptor): _62.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    typeUrl: string;
                    encode(message: _62.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.MsgDescriptor;
                    fromJSON(object: any): _62.MsgDescriptor;
                    toJSON(message: _62.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_62.MsgDescriptor>): _62.MsgDescriptor;
                    fromAmino(object: _62.MsgDescriptorAmino): _62.MsgDescriptor;
                    toAmino(message: _62.MsgDescriptor): _62.MsgDescriptorAmino;
                    fromAminoMsg(object: _62.MsgDescriptorAminoMsg): _62.MsgDescriptor;
                    toAminoMsg(message: _62.MsgDescriptor): _62.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _62.MsgDescriptorProtoMsg): _62.MsgDescriptor;
                    toProto(message: _62.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _62.MsgDescriptor): _62.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _62.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _62.GetAuthnDescriptorRequest;
                    toJSON(_: _62.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_62.GetAuthnDescriptorRequest>): _62.GetAuthnDescriptorRequest;
                    fromAmino(_: _62.GetAuthnDescriptorRequestAmino): _62.GetAuthnDescriptorRequest;
                    toAmino(_: _62.GetAuthnDescriptorRequest): _62.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _62.GetAuthnDescriptorRequestAminoMsg): _62.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _62.GetAuthnDescriptorRequest): _62.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _62.GetAuthnDescriptorRequestProtoMsg): _62.GetAuthnDescriptorRequest;
                    toProto(message: _62.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _62.GetAuthnDescriptorRequest): _62.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _62.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _62.GetAuthnDescriptorResponse;
                    toJSON(message: _62.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_62.GetAuthnDescriptorResponse>): _62.GetAuthnDescriptorResponse;
                    fromAmino(object: _62.GetAuthnDescriptorResponseAmino): _62.GetAuthnDescriptorResponse;
                    toAmino(message: _62.GetAuthnDescriptorResponse): _62.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _62.GetAuthnDescriptorResponseAminoMsg): _62.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _62.GetAuthnDescriptorResponse): _62.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _62.GetAuthnDescriptorResponseProtoMsg): _62.GetAuthnDescriptorResponse;
                    toProto(message: _62.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _62.GetAuthnDescriptorResponse): _62.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _62.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetChainDescriptorRequest;
                    fromJSON(_: any): _62.GetChainDescriptorRequest;
                    toJSON(_: _62.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_62.GetChainDescriptorRequest>): _62.GetChainDescriptorRequest;
                    fromAmino(_: _62.GetChainDescriptorRequestAmino): _62.GetChainDescriptorRequest;
                    toAmino(_: _62.GetChainDescriptorRequest): _62.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _62.GetChainDescriptorRequestAminoMsg): _62.GetChainDescriptorRequest;
                    toAminoMsg(message: _62.GetChainDescriptorRequest): _62.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _62.GetChainDescriptorRequestProtoMsg): _62.GetChainDescriptorRequest;
                    toProto(message: _62.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _62.GetChainDescriptorRequest): _62.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _62.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetChainDescriptorResponse;
                    fromJSON(object: any): _62.GetChainDescriptorResponse;
                    toJSON(message: _62.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_62.GetChainDescriptorResponse>): _62.GetChainDescriptorResponse;
                    fromAmino(object: _62.GetChainDescriptorResponseAmino): _62.GetChainDescriptorResponse;
                    toAmino(message: _62.GetChainDescriptorResponse): _62.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _62.GetChainDescriptorResponseAminoMsg): _62.GetChainDescriptorResponse;
                    toAminoMsg(message: _62.GetChainDescriptorResponse): _62.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _62.GetChainDescriptorResponseProtoMsg): _62.GetChainDescriptorResponse;
                    toProto(message: _62.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _62.GetChainDescriptorResponse): _62.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _62.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetCodecDescriptorRequest;
                    fromJSON(_: any): _62.GetCodecDescriptorRequest;
                    toJSON(_: _62.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_62.GetCodecDescriptorRequest>): _62.GetCodecDescriptorRequest;
                    fromAmino(_: _62.GetCodecDescriptorRequestAmino): _62.GetCodecDescriptorRequest;
                    toAmino(_: _62.GetCodecDescriptorRequest): _62.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _62.GetCodecDescriptorRequestAminoMsg): _62.GetCodecDescriptorRequest;
                    toAminoMsg(message: _62.GetCodecDescriptorRequest): _62.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _62.GetCodecDescriptorRequestProtoMsg): _62.GetCodecDescriptorRequest;
                    toProto(message: _62.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _62.GetCodecDescriptorRequest): _62.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _62.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetCodecDescriptorResponse;
                    fromJSON(object: any): _62.GetCodecDescriptorResponse;
                    toJSON(message: _62.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_62.GetCodecDescriptorResponse>): _62.GetCodecDescriptorResponse;
                    fromAmino(object: _62.GetCodecDescriptorResponseAmino): _62.GetCodecDescriptorResponse;
                    toAmino(message: _62.GetCodecDescriptorResponse): _62.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _62.GetCodecDescriptorResponseAminoMsg): _62.GetCodecDescriptorResponse;
                    toAminoMsg(message: _62.GetCodecDescriptorResponse): _62.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _62.GetCodecDescriptorResponseProtoMsg): _62.GetCodecDescriptorResponse;
                    toProto(message: _62.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _62.GetCodecDescriptorResponse): _62.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _62.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _62.GetConfigurationDescriptorRequest;
                    toJSON(_: _62.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_62.GetConfigurationDescriptorRequest>): _62.GetConfigurationDescriptorRequest;
                    fromAmino(_: _62.GetConfigurationDescriptorRequestAmino): _62.GetConfigurationDescriptorRequest;
                    toAmino(_: _62.GetConfigurationDescriptorRequest): _62.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _62.GetConfigurationDescriptorRequestAminoMsg): _62.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _62.GetConfigurationDescriptorRequest): _62.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _62.GetConfigurationDescriptorRequestProtoMsg): _62.GetConfigurationDescriptorRequest;
                    toProto(message: _62.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _62.GetConfigurationDescriptorRequest): _62.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _62.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _62.GetConfigurationDescriptorResponse;
                    toJSON(message: _62.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_62.GetConfigurationDescriptorResponse>): _62.GetConfigurationDescriptorResponse;
                    fromAmino(object: _62.GetConfigurationDescriptorResponseAmino): _62.GetConfigurationDescriptorResponse;
                    toAmino(message: _62.GetConfigurationDescriptorResponse): _62.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _62.GetConfigurationDescriptorResponseAminoMsg): _62.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _62.GetConfigurationDescriptorResponse): _62.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _62.GetConfigurationDescriptorResponseProtoMsg): _62.GetConfigurationDescriptorResponse;
                    toProto(message: _62.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _62.GetConfigurationDescriptorResponse): _62.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _62.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _62.GetQueryServicesDescriptorRequest;
                    toJSON(_: _62.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_62.GetQueryServicesDescriptorRequest>): _62.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _62.GetQueryServicesDescriptorRequestAmino): _62.GetQueryServicesDescriptorRequest;
                    toAmino(_: _62.GetQueryServicesDescriptorRequest): _62.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _62.GetQueryServicesDescriptorRequestAminoMsg): _62.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _62.GetQueryServicesDescriptorRequest): _62.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _62.GetQueryServicesDescriptorRequestProtoMsg): _62.GetQueryServicesDescriptorRequest;
                    toProto(message: _62.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _62.GetQueryServicesDescriptorRequest): _62.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _62.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _62.GetQueryServicesDescriptorResponse;
                    toJSON(message: _62.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_62.GetQueryServicesDescriptorResponse>): _62.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _62.GetQueryServicesDescriptorResponseAmino): _62.GetQueryServicesDescriptorResponse;
                    toAmino(message: _62.GetQueryServicesDescriptorResponse): _62.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _62.GetQueryServicesDescriptorResponseAminoMsg): _62.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _62.GetQueryServicesDescriptorResponse): _62.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _62.GetQueryServicesDescriptorResponseProtoMsg): _62.GetQueryServicesDescriptorResponse;
                    toProto(message: _62.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _62.GetQueryServicesDescriptorResponse): _62.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    typeUrl: string;
                    encode(_: _62.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetTxDescriptorRequest;
                    fromJSON(_: any): _62.GetTxDescriptorRequest;
                    toJSON(_: _62.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_62.GetTxDescriptorRequest>): _62.GetTxDescriptorRequest;
                    fromAmino(_: _62.GetTxDescriptorRequestAmino): _62.GetTxDescriptorRequest;
                    toAmino(_: _62.GetTxDescriptorRequest): _62.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _62.GetTxDescriptorRequestAminoMsg): _62.GetTxDescriptorRequest;
                    toAminoMsg(message: _62.GetTxDescriptorRequest): _62.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _62.GetTxDescriptorRequestProtoMsg): _62.GetTxDescriptorRequest;
                    toProto(message: _62.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _62.GetTxDescriptorRequest): _62.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    typeUrl: string;
                    encode(message: _62.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.GetTxDescriptorResponse;
                    fromJSON(object: any): _62.GetTxDescriptorResponse;
                    toJSON(message: _62.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_62.GetTxDescriptorResponse>): _62.GetTxDescriptorResponse;
                    fromAmino(object: _62.GetTxDescriptorResponseAmino): _62.GetTxDescriptorResponse;
                    toAmino(message: _62.GetTxDescriptorResponse): _62.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _62.GetTxDescriptorResponseAminoMsg): _62.GetTxDescriptorResponse;
                    toAminoMsg(message: _62.GetTxDescriptorResponse): _62.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _62.GetTxDescriptorResponseProtoMsg): _62.GetTxDescriptorResponse;
                    toProto(message: _62.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _62.GetTxDescriptorResponse): _62.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    typeUrl: string;
                    encode(message: _62.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryServicesDescriptor;
                    fromJSON(object: any): _62.QueryServicesDescriptor;
                    toJSON(message: _62.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_62.QueryServicesDescriptor>): _62.QueryServicesDescriptor;
                    fromAmino(object: _62.QueryServicesDescriptorAmino): _62.QueryServicesDescriptor;
                    toAmino(message: _62.QueryServicesDescriptor): _62.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _62.QueryServicesDescriptorAminoMsg): _62.QueryServicesDescriptor;
                    toAminoMsg(message: _62.QueryServicesDescriptor): _62.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _62.QueryServicesDescriptorProtoMsg): _62.QueryServicesDescriptor;
                    toProto(message: _62.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _62.QueryServicesDescriptor): _62.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    typeUrl: string;
                    encode(message: _62.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryServiceDescriptor;
                    fromJSON(object: any): _62.QueryServiceDescriptor;
                    toJSON(message: _62.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_62.QueryServiceDescriptor>): _62.QueryServiceDescriptor;
                    fromAmino(object: _62.QueryServiceDescriptorAmino): _62.QueryServiceDescriptor;
                    toAmino(message: _62.QueryServiceDescriptor): _62.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _62.QueryServiceDescriptorAminoMsg): _62.QueryServiceDescriptor;
                    toAminoMsg(message: _62.QueryServiceDescriptor): _62.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _62.QueryServiceDescriptorProtoMsg): _62.QueryServiceDescriptor;
                    toProto(message: _62.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _62.QueryServiceDescriptor): _62.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    typeUrl: string;
                    encode(message: _62.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _62.QueryMethodDescriptor;
                    fromJSON(object: any): _62.QueryMethodDescriptor;
                    toJSON(message: _62.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_62.QueryMethodDescriptor>): _62.QueryMethodDescriptor;
                    fromAmino(object: _62.QueryMethodDescriptorAmino): _62.QueryMethodDescriptor;
                    toAmino(message: _62.QueryMethodDescriptor): _62.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _62.QueryMethodDescriptorAminoMsg): _62.QueryMethodDescriptor;
                    toAminoMsg(message: _62.QueryMethodDescriptor): _62.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _62.QueryMethodDescriptorProtoMsg): _62.QueryMethodDescriptor;
                    toProto(message: _62.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _62.QueryMethodDescriptor): _62.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    typeUrl: string;
                    encode(message: _63.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Snapshot;
                    fromJSON(object: any): _63.Snapshot;
                    toJSON(message: _63.Snapshot): unknown;
                    fromPartial(object: Partial<_63.Snapshot>): _63.Snapshot;
                    fromAmino(object: _63.SnapshotAmino): _63.Snapshot;
                    toAmino(message: _63.Snapshot): _63.SnapshotAmino;
                    fromAminoMsg(object: _63.SnapshotAminoMsg): _63.Snapshot;
                    toAminoMsg(message: _63.Snapshot): _63.SnapshotAminoMsg;
                    fromProtoMsg(message: _63.SnapshotProtoMsg): _63.Snapshot;
                    toProto(message: _63.Snapshot): Uint8Array;
                    toProtoMsg(message: _63.Snapshot): _63.SnapshotProtoMsg;
                };
                Metadata: {
                    typeUrl: string;
                    encode(message: _63.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.Metadata;
                    fromJSON(object: any): _63.Metadata;
                    toJSON(message: _63.Metadata): unknown;
                    fromPartial(object: Partial<_63.Metadata>): _63.Metadata;
                    fromAmino(object: _63.MetadataAmino): _63.Metadata;
                    toAmino(message: _63.Metadata): _63.MetadataAmino;
                    fromAminoMsg(object: _63.MetadataAminoMsg): _63.Metadata;
                    toAminoMsg(message: _63.Metadata): _63.MetadataAminoMsg;
                    fromProtoMsg(message: _63.MetadataProtoMsg): _63.Metadata;
                    toProto(message: _63.Metadata): Uint8Array;
                    toProtoMsg(message: _63.Metadata): _63.MetadataProtoMsg;
                };
                SnapshotItem: {
                    typeUrl: string;
                    encode(message: _63.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SnapshotItem;
                    fromJSON(object: any): _63.SnapshotItem;
                    toJSON(message: _63.SnapshotItem): unknown;
                    fromPartial(object: Partial<_63.SnapshotItem>): _63.SnapshotItem;
                    fromAmino(object: _63.SnapshotItemAmino): _63.SnapshotItem;
                    toAmino(message: _63.SnapshotItem): _63.SnapshotItemAmino;
                    fromAminoMsg(object: _63.SnapshotItemAminoMsg): _63.SnapshotItem;
                    toAminoMsg(message: _63.SnapshotItem): _63.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _63.SnapshotItemProtoMsg): _63.SnapshotItem;
                    toProto(message: _63.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _63.SnapshotItem): _63.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    typeUrl: string;
                    encode(message: _63.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SnapshotStoreItem;
                    fromJSON(object: any): _63.SnapshotStoreItem;
                    toJSON(message: _63.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_63.SnapshotStoreItem>): _63.SnapshotStoreItem;
                    fromAmino(object: _63.SnapshotStoreItemAmino): _63.SnapshotStoreItem;
                    toAmino(message: _63.SnapshotStoreItem): _63.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _63.SnapshotStoreItemAminoMsg): _63.SnapshotStoreItem;
                    toAminoMsg(message: _63.SnapshotStoreItem): _63.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _63.SnapshotStoreItemProtoMsg): _63.SnapshotStoreItem;
                    toProto(message: _63.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _63.SnapshotStoreItem): _63.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    typeUrl: string;
                    encode(message: _63.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SnapshotIAVLItem;
                    fromJSON(object: any): _63.SnapshotIAVLItem;
                    toJSON(message: _63.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_63.SnapshotIAVLItem>): _63.SnapshotIAVLItem;
                    fromAmino(object: _63.SnapshotIAVLItemAmino): _63.SnapshotIAVLItem;
                    toAmino(message: _63.SnapshotIAVLItem): _63.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _63.SnapshotIAVLItemAminoMsg): _63.SnapshotIAVLItem;
                    toAminoMsg(message: _63.SnapshotIAVLItem): _63.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _63.SnapshotIAVLItemProtoMsg): _63.SnapshotIAVLItem;
                    toProto(message: _63.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _63.SnapshotIAVLItem): _63.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    typeUrl: string;
                    encode(message: _63.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SnapshotExtensionMeta;
                    fromJSON(object: any): _63.SnapshotExtensionMeta;
                    toJSON(message: _63.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_63.SnapshotExtensionMeta>): _63.SnapshotExtensionMeta;
                    fromAmino(object: _63.SnapshotExtensionMetaAmino): _63.SnapshotExtensionMeta;
                    toAmino(message: _63.SnapshotExtensionMeta): _63.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _63.SnapshotExtensionMetaAminoMsg): _63.SnapshotExtensionMeta;
                    toAminoMsg(message: _63.SnapshotExtensionMeta): _63.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _63.SnapshotExtensionMetaProtoMsg): _63.SnapshotExtensionMeta;
                    toProto(message: _63.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _63.SnapshotExtensionMeta): _63.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    typeUrl: string;
                    encode(message: _63.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SnapshotExtensionPayload;
                    fromJSON(object: any): _63.SnapshotExtensionPayload;
                    toJSON(message: _63.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_63.SnapshotExtensionPayload>): _63.SnapshotExtensionPayload;
                    fromAmino(object: _63.SnapshotExtensionPayloadAmino): _63.SnapshotExtensionPayload;
                    toAmino(message: _63.SnapshotExtensionPayload): _63.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _63.SnapshotExtensionPayloadAminoMsg): _63.SnapshotExtensionPayload;
                    toAminoMsg(message: _63.SnapshotExtensionPayload): _63.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _63.SnapshotExtensionPayloadProtoMsg): _63.SnapshotExtensionPayload;
                    toProto(message: _63.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _63.SnapshotExtensionPayload): _63.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    typeUrl: string;
                    encode(message: _63.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SnapshotKVItem;
                    fromJSON(object: any): _63.SnapshotKVItem;
                    toJSON(message: _63.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_63.SnapshotKVItem>): _63.SnapshotKVItem;
                    fromAmino(object: _63.SnapshotKVItemAmino): _63.SnapshotKVItem;
                    toAmino(message: _63.SnapshotKVItem): _63.SnapshotKVItemAmino;
                    fromAminoMsg(object: _63.SnapshotKVItemAminoMsg): _63.SnapshotKVItem;
                    toAminoMsg(message: _63.SnapshotKVItem): _63.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _63.SnapshotKVItemProtoMsg): _63.SnapshotKVItem;
                    toProto(message: _63.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _63.SnapshotKVItem): _63.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    typeUrl: string;
                    encode(message: _63.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.SnapshotSchema;
                    fromJSON(object: any): _63.SnapshotSchema;
                    toJSON(message: _63.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_63.SnapshotSchema>): _63.SnapshotSchema;
                    fromAmino(object: _63.SnapshotSchemaAmino): _63.SnapshotSchema;
                    toAmino(message: _63.SnapshotSchema): _63.SnapshotSchemaAmino;
                    fromAminoMsg(object: _63.SnapshotSchemaAminoMsg): _63.SnapshotSchema;
                    toAminoMsg(message: _63.SnapshotSchema): _63.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _63.SnapshotSchemaProtoMsg): _63.SnapshotSchema;
                    toProto(message: _63.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _63.SnapshotSchema): _63.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    typeUrl: string;
                    encode(message: _65.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.StoreKVPair;
                    fromJSON(object: any): _65.StoreKVPair;
                    toJSON(message: _65.StoreKVPair): unknown;
                    fromPartial(object: Partial<_65.StoreKVPair>): _65.StoreKVPair;
                    fromAmino(object: _65.StoreKVPairAmino): _65.StoreKVPair;
                    toAmino(message: _65.StoreKVPair): _65.StoreKVPairAmino;
                    fromAminoMsg(object: _65.StoreKVPairAminoMsg): _65.StoreKVPair;
                    toAminoMsg(message: _65.StoreKVPair): _65.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _65.StoreKVPairProtoMsg): _65.StoreKVPair;
                    toProto(message: _65.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _65.StoreKVPair): _65.StoreKVPairProtoMsg;
                };
                BlockMetadata: {
                    typeUrl: string;
                    encode(message: _65.BlockMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BlockMetadata;
                    fromJSON(object: any): _65.BlockMetadata;
                    toJSON(message: _65.BlockMetadata): unknown;
                    fromPartial(object: Partial<_65.BlockMetadata>): _65.BlockMetadata;
                    fromAmino(object: _65.BlockMetadataAmino): _65.BlockMetadata;
                    toAmino(message: _65.BlockMetadata): _65.BlockMetadataAmino;
                    fromAminoMsg(object: _65.BlockMetadataAminoMsg): _65.BlockMetadata;
                    toAminoMsg(message: _65.BlockMetadata): _65.BlockMetadataAminoMsg;
                    fromProtoMsg(message: _65.BlockMetadataProtoMsg): _65.BlockMetadata;
                    toProto(message: _65.BlockMetadata): Uint8Array;
                    toProtoMsg(message: _65.BlockMetadata): _65.BlockMetadataProtoMsg;
                };
                BlockMetadata_DeliverTx: {
                    typeUrl: string;
                    encode(message: _65.BlockMetadata_DeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _65.BlockMetadata_DeliverTx;
                    fromJSON(object: any): _65.BlockMetadata_DeliverTx;
                    toJSON(message: _65.BlockMetadata_DeliverTx): unknown;
                    fromPartial(object: Partial<_65.BlockMetadata_DeliverTx>): _65.BlockMetadata_DeliverTx;
                    fromAmino(object: _65.BlockMetadata_DeliverTxAmino): _65.BlockMetadata_DeliverTx;
                    toAmino(message: _65.BlockMetadata_DeliverTx): _65.BlockMetadata_DeliverTxAmino;
                    fromAminoMsg(object: _65.BlockMetadata_DeliverTxAminoMsg): _65.BlockMetadata_DeliverTx;
                    toAminoMsg(message: _65.BlockMetadata_DeliverTx): _65.BlockMetadata_DeliverTxAminoMsg;
                    fromProtoMsg(message: _65.BlockMetadata_DeliverTxProtoMsg): _65.BlockMetadata_DeliverTx;
                    toProto(message: _65.BlockMetadata_DeliverTx): Uint8Array;
                    toProtoMsg(message: _65.BlockMetadata_DeliverTx): _65.BlockMetadata_DeliverTxProtoMsg;
                };
                CommitInfo: {
                    typeUrl: string;
                    encode(message: _64.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.CommitInfo;
                    fromJSON(object: any): _64.CommitInfo;
                    toJSON(message: _64.CommitInfo): unknown;
                    fromPartial(object: Partial<_64.CommitInfo>): _64.CommitInfo;
                    fromAmino(object: _64.CommitInfoAmino): _64.CommitInfo;
                    toAmino(message: _64.CommitInfo): _64.CommitInfoAmino;
                    fromAminoMsg(object: _64.CommitInfoAminoMsg): _64.CommitInfo;
                    toAminoMsg(message: _64.CommitInfo): _64.CommitInfoAminoMsg;
                    fromProtoMsg(message: _64.CommitInfoProtoMsg): _64.CommitInfo;
                    toProto(message: _64.CommitInfo): Uint8Array;
                    toProtoMsg(message: _64.CommitInfo): _64.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    typeUrl: string;
                    encode(message: _64.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.StoreInfo;
                    fromJSON(object: any): _64.StoreInfo;
                    toJSON(message: _64.StoreInfo): unknown;
                    fromPartial(object: Partial<_64.StoreInfo>): _64.StoreInfo;
                    fromAmino(object: _64.StoreInfoAmino): _64.StoreInfo;
                    toAmino(message: _64.StoreInfo): _64.StoreInfoAmino;
                    fromAminoMsg(object: _64.StoreInfoAminoMsg): _64.StoreInfo;
                    toAminoMsg(message: _64.StoreInfo): _64.StoreInfoAminoMsg;
                    fromProtoMsg(message: _64.StoreInfoProtoMsg): _64.StoreInfo;
                    toProto(message: _64.StoreInfo): Uint8Array;
                    toProtoMsg(message: _64.StoreInfo): _64.StoreInfoProtoMsg;
                };
                CommitID: {
                    typeUrl: string;
                    encode(message: _64.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.CommitID;
                    fromJSON(object: any): _64.CommitID;
                    toJSON(message: _64.CommitID): unknown;
                    fromPartial(object: Partial<_64.CommitID>): _64.CommitID;
                    fromAmino(object: _64.CommitIDAmino): _64.CommitID;
                    toAmino(message: _64.CommitID): _64.CommitIDAmino;
                    fromAminoMsg(object: _64.CommitIDAminoMsg): _64.CommitID;
                    toAminoMsg(message: _64.CommitID): _64.CommitIDAminoMsg;
                    fromProtoMsg(message: _64.CommitIDProtoMsg): _64.CommitID;
                    toProto(message: _64.CommitID): Uint8Array;
                    toProtoMsg(message: _64.CommitID): _64.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _279.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _66.GetNodeInfoRequest): Promise<_66.GetNodeInfoResponse>;
                    getSyncing(request?: _66.GetSyncingRequest): Promise<_66.GetSyncingResponse>;
                    getLatestBlock(request?: _66.GetLatestBlockRequest): Promise<_66.GetLatestBlockResponse>;
                    getBlockByHeight(request: _66.GetBlockByHeightRequest): Promise<_66.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _66.GetLatestValidatorSetRequest): Promise<_66.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _66.GetValidatorSetByHeightRequest): Promise<_66.GetValidatorSetByHeightResponse>;
                    aBCIQuery(request: _66.ABCIQueryRequest): Promise<_66.ABCIQueryResponse>;
                };
                LCDQueryClient: typeof _258.LCDQueryClient;
                Block: {
                    typeUrl: string;
                    encode(message: _67.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Block;
                    fromJSON(object: any): _67.Block;
                    toJSON(message: _67.Block): unknown;
                    fromPartial(object: Partial<_67.Block>): _67.Block;
                    fromAmino(object: _67.BlockAmino): _67.Block;
                    toAmino(message: _67.Block): _67.BlockAmino;
                    fromAminoMsg(object: _67.BlockAminoMsg): _67.Block;
                    toAminoMsg(message: _67.Block): _67.BlockAminoMsg;
                    fromProtoMsg(message: _67.BlockProtoMsg): _67.Block;
                    toProto(message: _67.Block): Uint8Array;
                    toProtoMsg(message: _67.Block): _67.BlockProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    encode(message: _67.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Header;
                    fromJSON(object: any): _67.Header;
                    toJSON(message: _67.Header): unknown;
                    fromPartial(object: Partial<_67.Header>): _67.Header;
                    fromAmino(object: _67.HeaderAmino): _67.Header;
                    toAmino(message: _67.Header): _67.HeaderAmino;
                    fromAminoMsg(object: _67.HeaderAminoMsg): _67.Header;
                    toAminoMsg(message: _67.Header): _67.HeaderAminoMsg;
                    fromProtoMsg(message: _67.HeaderProtoMsg): _67.Header;
                    toProto(message: _67.Header): Uint8Array;
                    toProtoMsg(message: _67.Header): _67.HeaderProtoMsg;
                };
                GetValidatorSetByHeightRequest: {
                    typeUrl: string;
                    encode(message: _66.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _66.GetValidatorSetByHeightRequest;
                    toJSON(message: _66.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_66.GetValidatorSetByHeightRequest>): _66.GetValidatorSetByHeightRequest;
                    fromAmino(object: _66.GetValidatorSetByHeightRequestAmino): _66.GetValidatorSetByHeightRequest;
                    toAmino(message: _66.GetValidatorSetByHeightRequest): _66.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _66.GetValidatorSetByHeightRequestAminoMsg): _66.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _66.GetValidatorSetByHeightRequest): _66.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _66.GetValidatorSetByHeightRequestProtoMsg): _66.GetValidatorSetByHeightRequest;
                    toProto(message: _66.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _66.GetValidatorSetByHeightRequest): _66.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    typeUrl: string;
                    encode(message: _66.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _66.GetValidatorSetByHeightResponse;
                    toJSON(message: _66.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_66.GetValidatorSetByHeightResponse>): _66.GetValidatorSetByHeightResponse;
                    fromAmino(object: _66.GetValidatorSetByHeightResponseAmino): _66.GetValidatorSetByHeightResponse;
                    toAmino(message: _66.GetValidatorSetByHeightResponse): _66.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _66.GetValidatorSetByHeightResponseAminoMsg): _66.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _66.GetValidatorSetByHeightResponse): _66.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _66.GetValidatorSetByHeightResponseProtoMsg): _66.GetValidatorSetByHeightResponse;
                    toProto(message: _66.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _66.GetValidatorSetByHeightResponse): _66.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    typeUrl: string;
                    encode(message: _66.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _66.GetLatestValidatorSetRequest;
                    toJSON(message: _66.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_66.GetLatestValidatorSetRequest>): _66.GetLatestValidatorSetRequest;
                    fromAmino(object: _66.GetLatestValidatorSetRequestAmino): _66.GetLatestValidatorSetRequest;
                    toAmino(message: _66.GetLatestValidatorSetRequest): _66.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _66.GetLatestValidatorSetRequestAminoMsg): _66.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _66.GetLatestValidatorSetRequest): _66.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _66.GetLatestValidatorSetRequestProtoMsg): _66.GetLatestValidatorSetRequest;
                    toProto(message: _66.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _66.GetLatestValidatorSetRequest): _66.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    typeUrl: string;
                    encode(message: _66.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _66.GetLatestValidatorSetResponse;
                    toJSON(message: _66.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_66.GetLatestValidatorSetResponse>): _66.GetLatestValidatorSetResponse;
                    fromAmino(object: _66.GetLatestValidatorSetResponseAmino): _66.GetLatestValidatorSetResponse;
                    toAmino(message: _66.GetLatestValidatorSetResponse): _66.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _66.GetLatestValidatorSetResponseAminoMsg): _66.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _66.GetLatestValidatorSetResponse): _66.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _66.GetLatestValidatorSetResponseProtoMsg): _66.GetLatestValidatorSetResponse;
                    toProto(message: _66.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _66.GetLatestValidatorSetResponse): _66.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    typeUrl: string;
                    encode(message: _66.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Validator;
                    fromJSON(object: any): _66.Validator;
                    toJSON(message: _66.Validator): unknown;
                    fromPartial(object: Partial<_66.Validator>): _66.Validator;
                    fromAmino(object: _66.ValidatorAmino): _66.Validator;
                    toAmino(message: _66.Validator): _66.ValidatorAmino;
                    fromAminoMsg(object: _66.ValidatorAminoMsg): _66.Validator;
                    toAminoMsg(message: _66.Validator): _66.ValidatorAminoMsg;
                    fromProtoMsg(message: _66.ValidatorProtoMsg): _66.Validator;
                    toProto(message: _66.Validator): Uint8Array;
                    toProtoMsg(message: _66.Validator): _66.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    typeUrl: string;
                    encode(message: _66.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetBlockByHeightRequest;
                    fromJSON(object: any): _66.GetBlockByHeightRequest;
                    toJSON(message: _66.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_66.GetBlockByHeightRequest>): _66.GetBlockByHeightRequest;
                    fromAmino(object: _66.GetBlockByHeightRequestAmino): _66.GetBlockByHeightRequest;
                    toAmino(message: _66.GetBlockByHeightRequest): _66.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _66.GetBlockByHeightRequestAminoMsg): _66.GetBlockByHeightRequest;
                    toAminoMsg(message: _66.GetBlockByHeightRequest): _66.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _66.GetBlockByHeightRequestProtoMsg): _66.GetBlockByHeightRequest;
                    toProto(message: _66.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _66.GetBlockByHeightRequest): _66.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    typeUrl: string;
                    encode(message: _66.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetBlockByHeightResponse;
                    fromJSON(object: any): _66.GetBlockByHeightResponse;
                    toJSON(message: _66.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_66.GetBlockByHeightResponse>): _66.GetBlockByHeightResponse;
                    fromAmino(object: _66.GetBlockByHeightResponseAmino): _66.GetBlockByHeightResponse;
                    toAmino(message: _66.GetBlockByHeightResponse): _66.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _66.GetBlockByHeightResponseAminoMsg): _66.GetBlockByHeightResponse;
                    toAminoMsg(message: _66.GetBlockByHeightResponse): _66.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _66.GetBlockByHeightResponseProtoMsg): _66.GetBlockByHeightResponse;
                    toProto(message: _66.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _66.GetBlockByHeightResponse): _66.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    typeUrl: string;
                    encode(_: _66.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetLatestBlockRequest;
                    fromJSON(_: any): _66.GetLatestBlockRequest;
                    toJSON(_: _66.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_66.GetLatestBlockRequest>): _66.GetLatestBlockRequest;
                    fromAmino(_: _66.GetLatestBlockRequestAmino): _66.GetLatestBlockRequest;
                    toAmino(_: _66.GetLatestBlockRequest): _66.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _66.GetLatestBlockRequestAminoMsg): _66.GetLatestBlockRequest;
                    toAminoMsg(message: _66.GetLatestBlockRequest): _66.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _66.GetLatestBlockRequestProtoMsg): _66.GetLatestBlockRequest;
                    toProto(message: _66.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _66.GetLatestBlockRequest): _66.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    typeUrl: string;
                    encode(message: _66.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetLatestBlockResponse;
                    fromJSON(object: any): _66.GetLatestBlockResponse;
                    toJSON(message: _66.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_66.GetLatestBlockResponse>): _66.GetLatestBlockResponse;
                    fromAmino(object: _66.GetLatestBlockResponseAmino): _66.GetLatestBlockResponse;
                    toAmino(message: _66.GetLatestBlockResponse): _66.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _66.GetLatestBlockResponseAminoMsg): _66.GetLatestBlockResponse;
                    toAminoMsg(message: _66.GetLatestBlockResponse): _66.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _66.GetLatestBlockResponseProtoMsg): _66.GetLatestBlockResponse;
                    toProto(message: _66.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _66.GetLatestBlockResponse): _66.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    typeUrl: string;
                    encode(_: _66.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetSyncingRequest;
                    fromJSON(_: any): _66.GetSyncingRequest;
                    toJSON(_: _66.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_66.GetSyncingRequest>): _66.GetSyncingRequest;
                    fromAmino(_: _66.GetSyncingRequestAmino): _66.GetSyncingRequest;
                    toAmino(_: _66.GetSyncingRequest): _66.GetSyncingRequestAmino;
                    fromAminoMsg(object: _66.GetSyncingRequestAminoMsg): _66.GetSyncingRequest;
                    toAminoMsg(message: _66.GetSyncingRequest): _66.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _66.GetSyncingRequestProtoMsg): _66.GetSyncingRequest;
                    toProto(message: _66.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _66.GetSyncingRequest): _66.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    typeUrl: string;
                    encode(message: _66.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetSyncingResponse;
                    fromJSON(object: any): _66.GetSyncingResponse;
                    toJSON(message: _66.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_66.GetSyncingResponse>): _66.GetSyncingResponse;
                    fromAmino(object: _66.GetSyncingResponseAmino): _66.GetSyncingResponse;
                    toAmino(message: _66.GetSyncingResponse): _66.GetSyncingResponseAmino;
                    fromAminoMsg(object: _66.GetSyncingResponseAminoMsg): _66.GetSyncingResponse;
                    toAminoMsg(message: _66.GetSyncingResponse): _66.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _66.GetSyncingResponseProtoMsg): _66.GetSyncingResponse;
                    toProto(message: _66.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _66.GetSyncingResponse): _66.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    typeUrl: string;
                    encode(_: _66.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetNodeInfoRequest;
                    fromJSON(_: any): _66.GetNodeInfoRequest;
                    toJSON(_: _66.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_66.GetNodeInfoRequest>): _66.GetNodeInfoRequest;
                    fromAmino(_: _66.GetNodeInfoRequestAmino): _66.GetNodeInfoRequest;
                    toAmino(_: _66.GetNodeInfoRequest): _66.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _66.GetNodeInfoRequestAminoMsg): _66.GetNodeInfoRequest;
                    toAminoMsg(message: _66.GetNodeInfoRequest): _66.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _66.GetNodeInfoRequestProtoMsg): _66.GetNodeInfoRequest;
                    toProto(message: _66.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _66.GetNodeInfoRequest): _66.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    typeUrl: string;
                    encode(message: _66.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.GetNodeInfoResponse;
                    fromJSON(object: any): _66.GetNodeInfoResponse;
                    toJSON(message: _66.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_66.GetNodeInfoResponse>): _66.GetNodeInfoResponse;
                    fromAmino(object: _66.GetNodeInfoResponseAmino): _66.GetNodeInfoResponse;
                    toAmino(message: _66.GetNodeInfoResponse): _66.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _66.GetNodeInfoResponseAminoMsg): _66.GetNodeInfoResponse;
                    toAminoMsg(message: _66.GetNodeInfoResponse): _66.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _66.GetNodeInfoResponseProtoMsg): _66.GetNodeInfoResponse;
                    toProto(message: _66.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _66.GetNodeInfoResponse): _66.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    typeUrl: string;
                    encode(message: _66.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.VersionInfo;
                    fromJSON(object: any): _66.VersionInfo;
                    toJSON(message: _66.VersionInfo): unknown;
                    fromPartial(object: Partial<_66.VersionInfo>): _66.VersionInfo;
                    fromAmino(object: _66.VersionInfoAmino): _66.VersionInfo;
                    toAmino(message: _66.VersionInfo): _66.VersionInfoAmino;
                    fromAminoMsg(object: _66.VersionInfoAminoMsg): _66.VersionInfo;
                    toAminoMsg(message: _66.VersionInfo): _66.VersionInfoAminoMsg;
                    fromProtoMsg(message: _66.VersionInfoProtoMsg): _66.VersionInfo;
                    toProto(message: _66.VersionInfo): Uint8Array;
                    toProtoMsg(message: _66.VersionInfo): _66.VersionInfoProtoMsg;
                };
                Module: {
                    typeUrl: string;
                    encode(message: _66.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.Module;
                    fromJSON(object: any): _66.Module;
                    toJSON(message: _66.Module): unknown;
                    fromPartial(object: Partial<_66.Module>): _66.Module;
                    fromAmino(object: _66.ModuleAmino): _66.Module;
                    toAmino(message: _66.Module): _66.ModuleAmino;
                    fromAminoMsg(object: _66.ModuleAminoMsg): _66.Module;
                    toAminoMsg(message: _66.Module): _66.ModuleAminoMsg;
                    fromProtoMsg(message: _66.ModuleProtoMsg): _66.Module;
                    toProto(message: _66.Module): Uint8Array;
                    toProtoMsg(message: _66.Module): _66.ModuleProtoMsg;
                };
                ABCIQueryRequest: {
                    typeUrl: string;
                    encode(message: _66.ABCIQueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ABCIQueryRequest;
                    fromJSON(object: any): _66.ABCIQueryRequest;
                    toJSON(message: _66.ABCIQueryRequest): unknown;
                    fromPartial(object: Partial<_66.ABCIQueryRequest>): _66.ABCIQueryRequest;
                    fromAmino(object: _66.ABCIQueryRequestAmino): _66.ABCIQueryRequest;
                    toAmino(message: _66.ABCIQueryRequest): _66.ABCIQueryRequestAmino;
                    fromAminoMsg(object: _66.ABCIQueryRequestAminoMsg): _66.ABCIQueryRequest;
                    toAminoMsg(message: _66.ABCIQueryRequest): _66.ABCIQueryRequestAminoMsg;
                    fromProtoMsg(message: _66.ABCIQueryRequestProtoMsg): _66.ABCIQueryRequest;
                    toProto(message: _66.ABCIQueryRequest): Uint8Array;
                    toProtoMsg(message: _66.ABCIQueryRequest): _66.ABCIQueryRequestProtoMsg;
                };
                ABCIQueryResponse: {
                    typeUrl: string;
                    encode(message: _66.ABCIQueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ABCIQueryResponse;
                    fromJSON(object: any): _66.ABCIQueryResponse;
                    toJSON(message: _66.ABCIQueryResponse): unknown;
                    fromPartial(object: Partial<_66.ABCIQueryResponse>): _66.ABCIQueryResponse;
                    fromAmino(object: _66.ABCIQueryResponseAmino): _66.ABCIQueryResponse;
                    toAmino(message: _66.ABCIQueryResponse): _66.ABCIQueryResponseAmino;
                    fromAminoMsg(object: _66.ABCIQueryResponseAminoMsg): _66.ABCIQueryResponse;
                    toAminoMsg(message: _66.ABCIQueryResponse): _66.ABCIQueryResponseAminoMsg;
                    fromProtoMsg(message: _66.ABCIQueryResponseProtoMsg): _66.ABCIQueryResponse;
                    toProto(message: _66.ABCIQueryResponse): Uint8Array;
                    toProtoMsg(message: _66.ABCIQueryResponse): _66.ABCIQueryResponseProtoMsg;
                };
                ProofOp: {
                    typeUrl: string;
                    encode(message: _66.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ProofOp;
                    fromJSON(object: any): _66.ProofOp;
                    toJSON(message: _66.ProofOp): unknown;
                    fromPartial(object: Partial<_66.ProofOp>): _66.ProofOp;
                    fromAmino(object: _66.ProofOpAmino): _66.ProofOp;
                    toAmino(message: _66.ProofOp): _66.ProofOpAmino;
                    fromAminoMsg(object: _66.ProofOpAminoMsg): _66.ProofOp;
                    toAminoMsg(message: _66.ProofOp): _66.ProofOpAminoMsg;
                    fromProtoMsg(message: _66.ProofOpProtoMsg): _66.ProofOp;
                    toProto(message: _66.ProofOp): Uint8Array;
                    toProtoMsg(message: _66.ProofOp): _66.ProofOpProtoMsg;
                };
                ProofOps: {
                    typeUrl: string;
                    encode(message: _66.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.ProofOps;
                    fromJSON(object: any): _66.ProofOps;
                    toJSON(message: _66.ProofOps): unknown;
                    fromPartial(object: Partial<_66.ProofOps>): _66.ProofOps;
                    fromAmino(object: _66.ProofOpsAmino): _66.ProofOps;
                    toAmino(message: _66.ProofOps): _66.ProofOpsAmino;
                    fromAminoMsg(object: _66.ProofOpsAminoMsg): _66.ProofOps;
                    toAminoMsg(message: _66.ProofOps): _66.ProofOpsAminoMsg;
                    fromProtoMsg(message: _66.ProofOpsProtoMsg): _66.ProofOps;
                    toProto(message: _66.ProofOps): Uint8Array;
                    toProtoMsg(message: _66.ProofOps): _66.ProofOpsProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                typeUrl: string;
                encode(message: _68.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.Coin;
                fromJSON(object: any): _68.Coin;
                toJSON(message: _68.Coin): unknown;
                fromPartial(object: Partial<_68.Coin>): _68.Coin;
                fromAmino(object: _68.CoinAmino): _68.Coin;
                toAmino(message: _68.Coin): _68.CoinAmino;
                fromAminoMsg(object: _68.CoinAminoMsg): _68.Coin;
                toAminoMsg(message: _68.Coin): _68.CoinAminoMsg;
                fromProtoMsg(message: _68.CoinProtoMsg): _68.Coin;
                toProto(message: _68.Coin): Uint8Array;
                toProtoMsg(message: _68.Coin): _68.CoinProtoMsg;
            };
            DecCoin: {
                typeUrl: string;
                encode(message: _68.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.DecCoin;
                fromJSON(object: any): _68.DecCoin;
                toJSON(message: _68.DecCoin): unknown;
                fromPartial(object: Partial<_68.DecCoin>): _68.DecCoin;
                fromAmino(object: _68.DecCoinAmino): _68.DecCoin;
                toAmino(message: _68.DecCoin): _68.DecCoinAmino;
                fromAminoMsg(object: _68.DecCoinAminoMsg): _68.DecCoin;
                toAminoMsg(message: _68.DecCoin): _68.DecCoinAminoMsg;
                fromProtoMsg(message: _68.DecCoinProtoMsg): _68.DecCoin;
                toProto(message: _68.DecCoin): Uint8Array;
                toProtoMsg(message: _68.DecCoin): _68.DecCoinProtoMsg;
            };
            IntProto: {
                typeUrl: string;
                encode(message: _68.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.IntProto;
                fromJSON(object: any): _68.IntProto;
                toJSON(message: _68.IntProto): unknown;
                fromPartial(object: Partial<_68.IntProto>): _68.IntProto;
                fromAmino(object: _68.IntProtoAmino): _68.IntProto;
                toAmino(message: _68.IntProto): _68.IntProtoAmino;
                fromAminoMsg(object: _68.IntProtoAminoMsg): _68.IntProto;
                toAminoMsg(message: _68.IntProto): _68.IntProtoAminoMsg;
                fromProtoMsg(message: _68.IntProtoProtoMsg): _68.IntProto;
                toProto(message: _68.IntProto): Uint8Array;
                toProtoMsg(message: _68.IntProto): _68.IntProtoProtoMsg;
            };
            DecProto: {
                typeUrl: string;
                encode(message: _68.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _68.DecProto;
                fromJSON(object: any): _68.DecProto;
                toJSON(message: _68.DecProto): unknown;
                fromPartial(object: Partial<_68.DecProto>): _68.DecProto;
                fromAmino(object: _68.DecProtoAmino): _68.DecProto;
                toAmino(message: _68.DecProto): _68.DecProtoAmino;
                fromAminoMsg(object: _68.DecProtoAminoMsg): _68.DecProto;
                toAminoMsg(message: _68.DecProto): _68.DecProtoAminoMsg;
                fromProtoMsg(message: _68.DecProtoProtoMsg): _68.DecProto;
                toProto(message: _68.DecProto): Uint8Array;
                toProtoMsg(message: _68.DecProto): _68.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _69.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.Module;
                    fromJSON(object: any): _69.Module;
                    toJSON(message: _69.Module): unknown;
                    fromPartial(object: Partial<_69.Module>): _69.Module;
                    fromAmino(object: _69.ModuleAmino): _69.Module;
                    toAmino(message: _69.Module): _69.ModuleAmino;
                    fromAminoMsg(object: _69.ModuleAminoMsg): _69.Module;
                    toAminoMsg(message: _69.Module): _69.ModuleAminoMsg;
                    fromProtoMsg(message: _69.ModuleProtoMsg): _69.Module;
                    toProto(message: _69.Module): Uint8Array;
                    toProtoMsg(message: _69.Module): _69.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisOwners: {
                typeUrl: string;
                encode(message: _71.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisOwners;
                fromJSON(object: any): _71.GenesisOwners;
                toJSON(message: _71.GenesisOwners): unknown;
                fromPartial(object: Partial<_71.GenesisOwners>): _71.GenesisOwners;
                fromAmino(object: _71.GenesisOwnersAmino): _71.GenesisOwners;
                toAmino(message: _71.GenesisOwners): _71.GenesisOwnersAmino;
                fromAminoMsg(object: _71.GenesisOwnersAminoMsg): _71.GenesisOwners;
                toAminoMsg(message: _71.GenesisOwners): _71.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _71.GenesisOwnersProtoMsg): _71.GenesisOwners;
                toProto(message: _71.GenesisOwners): Uint8Array;
                toProtoMsg(message: _71.GenesisOwners): _71.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _71.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.GenesisState;
                fromJSON(object: any): _71.GenesisState;
                toJSON(message: _71.GenesisState): unknown;
                fromPartial(object: Partial<_71.GenesisState>): _71.GenesisState;
                fromAmino(object: _71.GenesisStateAmino): _71.GenesisState;
                toAmino(message: _71.GenesisState): _71.GenesisStateAmino;
                fromAminoMsg(object: _71.GenesisStateAminoMsg): _71.GenesisState;
                toAminoMsg(message: _71.GenesisState): _71.GenesisStateAminoMsg;
                fromProtoMsg(message: _71.GenesisStateProtoMsg): _71.GenesisState;
                toProto(message: _71.GenesisState): Uint8Array;
                toProtoMsg(message: _71.GenesisState): _71.GenesisStateProtoMsg;
            };
            Capability: {
                typeUrl: string;
                encode(message: _70.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Capability;
                fromJSON(object: any): _70.Capability;
                toJSON(message: _70.Capability): unknown;
                fromPartial(object: Partial<_70.Capability>): _70.Capability;
                fromAmino(object: _70.CapabilityAmino): _70.Capability;
                toAmino(message: _70.Capability): _70.CapabilityAmino;
                fromAminoMsg(object: _70.CapabilityAminoMsg): _70.Capability;
                toAminoMsg(message: _70.Capability): _70.CapabilityAminoMsg;
                fromProtoMsg(message: _70.CapabilityProtoMsg): _70.Capability;
                toProto(message: _70.Capability): Uint8Array;
                toProtoMsg(message: _70.Capability): _70.CapabilityProtoMsg;
            };
            Owner: {
                typeUrl: string;
                encode(message: _70.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Owner;
                fromJSON(object: any): _70.Owner;
                toJSON(message: _70.Owner): unknown;
                fromPartial(object: Partial<_70.Owner>): _70.Owner;
                fromAmino(object: _70.OwnerAmino): _70.Owner;
                toAmino(message: _70.Owner): _70.OwnerAmino;
                fromAminoMsg(object: _70.OwnerAminoMsg): _70.Owner;
                toAminoMsg(message: _70.Owner): _70.OwnerAminoMsg;
                fromProtoMsg(message: _70.OwnerProtoMsg): _70.Owner;
                toProto(message: _70.Owner): Uint8Array;
                toProtoMsg(message: _70.Owner): _70.OwnerProtoMsg;
            };
            CapabilityOwners: {
                typeUrl: string;
                encode(message: _70.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.CapabilityOwners;
                fromJSON(object: any): _70.CapabilityOwners;
                toJSON(message: _70.CapabilityOwners): unknown;
                fromPartial(object: Partial<_70.CapabilityOwners>): _70.CapabilityOwners;
                fromAmino(object: _70.CapabilityOwnersAmino): _70.CapabilityOwners;
                toAmino(message: _70.CapabilityOwners): _70.CapabilityOwnersAmino;
                fromAminoMsg(object: _70.CapabilityOwnersAminoMsg): _70.CapabilityOwners;
                toAminoMsg(message: _70.CapabilityOwners): _70.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _70.CapabilityOwnersProtoMsg): _70.CapabilityOwners;
                toProto(message: _70.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _70.CapabilityOwners): _70.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace consensus {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _72.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.Module;
                    fromJSON(object: any): _72.Module;
                    toJSON(message: _72.Module): unknown;
                    fromPartial(object: Partial<_72.Module>): _72.Module;
                    fromAmino(object: _72.ModuleAmino): _72.Module;
                    toAmino(message: _72.Module): _72.ModuleAmino;
                    fromAminoMsg(object: _72.ModuleAminoMsg): _72.Module;
                    toAminoMsg(message: _72.Module): _72.ModuleAminoMsg;
                    fromProtoMsg(message: _72.ModuleProtoMsg): _72.Module;
                    toProto(message: _72.Module): Uint8Array;
                    toProtoMsg(message: _72.Module): _72.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _298.MsgClientImpl;
            QueryClientImpl: typeof _280.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _259.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _74.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _74.MsgUpdateParams): {
                        typeUrl: string;
                        value: _74.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _74.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _74.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _74.MsgUpdateParams): {
                        typeUrl: string;
                        value: _74.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.consensus.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _74.MsgUpdateParams) => _74.MsgUpdateParamsAmino;
                    fromAmino: (object: _74.MsgUpdateParamsAmino) => _74.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _74.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpdateParams;
                fromJSON(object: any): _74.MsgUpdateParams;
                toJSON(message: _74.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_74.MsgUpdateParams>): _74.MsgUpdateParams;
                fromAmino(object: _74.MsgUpdateParamsAmino): _74.MsgUpdateParams;
                toAmino(message: _74.MsgUpdateParams): _74.MsgUpdateParamsAmino;
                fromAminoMsg(object: _74.MsgUpdateParamsAminoMsg): _74.MsgUpdateParams;
                toAminoMsg(message: _74.MsgUpdateParams): _74.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _74.MsgUpdateParamsProtoMsg): _74.MsgUpdateParams;
                toProto(message: _74.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _74.MsgUpdateParams): _74.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _74.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _74.MsgUpdateParamsResponse;
                fromJSON(_: any): _74.MsgUpdateParamsResponse;
                toJSON(_: _74.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_74.MsgUpdateParamsResponse>): _74.MsgUpdateParamsResponse;
                fromAmino(_: _74.MsgUpdateParamsResponseAmino): _74.MsgUpdateParamsResponse;
                toAmino(_: _74.MsgUpdateParamsResponse): _74.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _74.MsgUpdateParamsResponseAminoMsg): _74.MsgUpdateParamsResponse;
                toAminoMsg(message: _74.MsgUpdateParamsResponse): _74.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _74.MsgUpdateParamsResponseProtoMsg): _74.MsgUpdateParamsResponse;
                toProto(message: _74.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _74.MsgUpdateParamsResponse): _74.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _73.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsRequest;
                fromJSON(_: any): _73.QueryParamsRequest;
                toJSON(_: _73.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_73.QueryParamsRequest>): _73.QueryParamsRequest;
                fromAmino(_: _73.QueryParamsRequestAmino): _73.QueryParamsRequest;
                toAmino(_: _73.QueryParamsRequest): _73.QueryParamsRequestAmino;
                fromAminoMsg(object: _73.QueryParamsRequestAminoMsg): _73.QueryParamsRequest;
                toAminoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _73.QueryParamsRequestProtoMsg): _73.QueryParamsRequest;
                toProto(message: _73.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _73.QueryParamsRequest): _73.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _73.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.QueryParamsResponse;
                fromJSON(object: any): _73.QueryParamsResponse;
                toJSON(message: _73.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_73.QueryParamsResponse>): _73.QueryParamsResponse;
                fromAmino(object: _73.QueryParamsResponseAmino): _73.QueryParamsResponse;
                toAmino(message: _73.QueryParamsResponse): _73.QueryParamsResponseAmino;
                fromAminoMsg(object: _73.QueryParamsResponseAminoMsg): _73.QueryParamsResponse;
                toAminoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _73.QueryParamsResponseProtoMsg): _73.QueryParamsResponse;
                toProto(message: _73.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _73.QueryParamsResponse): _73.QueryParamsResponseProtoMsg;
            };
        };
    }
    namespace crisis {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _75.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.Module;
                    fromJSON(object: any): _75.Module;
                    toJSON(message: _75.Module): unknown;
                    fromPartial(object: Partial<_75.Module>): _75.Module;
                    fromAmino(object: _75.ModuleAmino): _75.Module;
                    toAmino(message: _75.Module): _75.ModuleAmino;
                    fromAminoMsg(object: _75.ModuleAminoMsg): _75.Module;
                    toAminoMsg(message: _75.Module): _75.ModuleAminoMsg;
                    fromProtoMsg(message: _75.ModuleProtoMsg): _75.Module;
                    toProto(message: _75.Module): Uint8Array;
                    toProtoMsg(message: _75.Module): _75.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _299.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _77.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _77.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _77.MsgVerifyInvariant;
                    };
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _77.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _77.MsgVerifyInvariant;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _77.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _77.MsgVerifyInvariant;
                    };
                    updateParams(value: _77.MsgUpdateParams): {
                        typeUrl: string;
                        value: _77.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _77.MsgVerifyInvariant) => _77.MsgVerifyInvariantAmino;
                    fromAmino: (object: _77.MsgVerifyInvariantAmino) => _77.MsgVerifyInvariant;
                };
                "/cosmos.crisis.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _77.MsgUpdateParams) => _77.MsgUpdateParamsAmino;
                    fromAmino: (object: _77.MsgUpdateParamsAmino) => _77.MsgUpdateParams;
                };
            };
            MsgVerifyInvariant: {
                typeUrl: string;
                encode(message: _77.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgVerifyInvariant;
                fromJSON(object: any): _77.MsgVerifyInvariant;
                toJSON(message: _77.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_77.MsgVerifyInvariant>): _77.MsgVerifyInvariant;
                fromAmino(object: _77.MsgVerifyInvariantAmino): _77.MsgVerifyInvariant;
                toAmino(message: _77.MsgVerifyInvariant): _77.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _77.MsgVerifyInvariantAminoMsg): _77.MsgVerifyInvariant;
                toAminoMsg(message: _77.MsgVerifyInvariant): _77.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _77.MsgVerifyInvariantProtoMsg): _77.MsgVerifyInvariant;
                toProto(message: _77.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _77.MsgVerifyInvariant): _77.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                typeUrl: string;
                encode(_: _77.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgVerifyInvariantResponse;
                fromJSON(_: any): _77.MsgVerifyInvariantResponse;
                toJSON(_: _77.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_77.MsgVerifyInvariantResponse>): _77.MsgVerifyInvariantResponse;
                fromAmino(_: _77.MsgVerifyInvariantResponseAmino): _77.MsgVerifyInvariantResponse;
                toAmino(_: _77.MsgVerifyInvariantResponse): _77.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _77.MsgVerifyInvariantResponseAminoMsg): _77.MsgVerifyInvariantResponse;
                toAminoMsg(message: _77.MsgVerifyInvariantResponse): _77.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _77.MsgVerifyInvariantResponseProtoMsg): _77.MsgVerifyInvariantResponse;
                toProto(message: _77.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _77.MsgVerifyInvariantResponse): _77.MsgVerifyInvariantResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _77.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgUpdateParams;
                fromJSON(object: any): _77.MsgUpdateParams;
                toJSON(message: _77.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_77.MsgUpdateParams>): _77.MsgUpdateParams;
                fromAmino(object: _77.MsgUpdateParamsAmino): _77.MsgUpdateParams;
                toAmino(message: _77.MsgUpdateParams): _77.MsgUpdateParamsAmino;
                fromAminoMsg(object: _77.MsgUpdateParamsAminoMsg): _77.MsgUpdateParams;
                toAminoMsg(message: _77.MsgUpdateParams): _77.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateParamsProtoMsg): _77.MsgUpdateParams;
                toProto(message: _77.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateParams): _77.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _77.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.MsgUpdateParamsResponse;
                fromJSON(_: any): _77.MsgUpdateParamsResponse;
                toJSON(_: _77.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_77.MsgUpdateParamsResponse>): _77.MsgUpdateParamsResponse;
                fromAmino(_: _77.MsgUpdateParamsResponseAmino): _77.MsgUpdateParamsResponse;
                toAmino(_: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _77.MsgUpdateParamsResponseAminoMsg): _77.MsgUpdateParamsResponse;
                toAminoMsg(message: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _77.MsgUpdateParamsResponseProtoMsg): _77.MsgUpdateParamsResponse;
                toProto(message: _77.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _77.MsgUpdateParamsResponse): _77.MsgUpdateParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _76.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.GenesisState;
                fromJSON(object: any): _76.GenesisState;
                toJSON(message: _76.GenesisState): unknown;
                fromPartial(object: Partial<_76.GenesisState>): _76.GenesisState;
                fromAmino(object: _76.GenesisStateAmino): _76.GenesisState;
                toAmino(message: _76.GenesisState): _76.GenesisStateAmino;
                fromAminoMsg(object: _76.GenesisStateAminoMsg): _76.GenesisState;
                toAminoMsg(message: _76.GenesisState): _76.GenesisStateAminoMsg;
                fromProtoMsg(message: _76.GenesisStateProtoMsg): _76.GenesisState;
                toProto(message: _76.GenesisState): Uint8Array;
                toProtoMsg(message: _76.GenesisState): _76.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                typeUrl: string;
                encode(message: _78.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PubKey;
                fromJSON(object: any): _78.PubKey;
                toJSON(message: _78.PubKey): unknown;
                fromPartial(object: Partial<_78.PubKey>): _78.PubKey;
                fromAmino(object: _78.PubKeyAmino): _78.PubKey;
                toAmino(message: _78.PubKey): _78.PubKeyAmino;
                fromAminoMsg(object: _78.PubKeyAminoMsg): _78.PubKey;
                toAminoMsg(message: _78.PubKey): _78.PubKeyAminoMsg;
                fromProtoMsg(message: _78.PubKeyProtoMsg): _78.PubKey;
                toProto(message: _78.PubKey): Uint8Array;
                toProtoMsg(message: _78.PubKey): _78.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _78.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.PrivKey;
                fromJSON(object: any): _78.PrivKey;
                toJSON(message: _78.PrivKey): unknown;
                fromPartial(object: Partial<_78.PrivKey>): _78.PrivKey;
                fromAmino(object: _78.PrivKeyAmino): _78.PrivKey;
                toAmino(message: _78.PrivKey): _78.PrivKeyAmino;
                fromAminoMsg(object: _78.PrivKeyAminoMsg): _78.PrivKey;
                toAminoMsg(message: _78.PrivKey): _78.PrivKeyAminoMsg;
                fromProtoMsg(message: _78.PrivKeyProtoMsg): _78.PrivKey;
                toProto(message: _78.PrivKey): Uint8Array;
                toProtoMsg(message: _78.PrivKey): _78.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    typeUrl: string;
                    encode(message: _79.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.BIP44Params;
                    fromJSON(object: any): _79.BIP44Params;
                    toJSON(message: _79.BIP44Params): unknown;
                    fromPartial(object: Partial<_79.BIP44Params>): _79.BIP44Params;
                    fromAmino(object: _79.BIP44ParamsAmino): _79.BIP44Params;
                    toAmino(message: _79.BIP44Params): _79.BIP44ParamsAmino;
                    fromAminoMsg(object: _79.BIP44ParamsAminoMsg): _79.BIP44Params;
                    toAminoMsg(message: _79.BIP44Params): _79.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _79.BIP44ParamsProtoMsg): _79.BIP44Params;
                    toProto(message: _79.BIP44Params): Uint8Array;
                    toProtoMsg(message: _79.BIP44Params): _79.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    typeUrl: string;
                    encode(message: _80.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Record;
                    fromJSON(object: any): _80.Record;
                    toJSON(message: _80.Record): unknown;
                    fromPartial(object: Partial<_80.Record>): _80.Record;
                    fromAmino(object: _80.RecordAmino): _80.Record;
                    toAmino(message: _80.Record): _80.RecordAmino;
                    fromAminoMsg(object: _80.RecordAminoMsg): _80.Record;
                    toAminoMsg(message: _80.Record): _80.RecordAminoMsg;
                    fromProtoMsg(message: _80.RecordProtoMsg): _80.Record;
                    toProto(message: _80.Record): Uint8Array;
                    toProtoMsg(message: _80.Record): _80.RecordProtoMsg;
                };
                Record_Local: {
                    typeUrl: string;
                    encode(message: _80.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Record_Local;
                    fromJSON(object: any): _80.Record_Local;
                    toJSON(message: _80.Record_Local): unknown;
                    fromPartial(object: Partial<_80.Record_Local>): _80.Record_Local;
                    fromAmino(object: _80.Record_LocalAmino): _80.Record_Local;
                    toAmino(message: _80.Record_Local): _80.Record_LocalAmino;
                    fromAminoMsg(object: _80.Record_LocalAminoMsg): _80.Record_Local;
                    toAminoMsg(message: _80.Record_Local): _80.Record_LocalAminoMsg;
                    fromProtoMsg(message: _80.Record_LocalProtoMsg): _80.Record_Local;
                    toProto(message: _80.Record_Local): Uint8Array;
                    toProtoMsg(message: _80.Record_Local): _80.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    typeUrl: string;
                    encode(message: _80.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Record_Ledger;
                    fromJSON(object: any): _80.Record_Ledger;
                    toJSON(message: _80.Record_Ledger): unknown;
                    fromPartial(object: Partial<_80.Record_Ledger>): _80.Record_Ledger;
                    fromAmino(object: _80.Record_LedgerAmino): _80.Record_Ledger;
                    toAmino(message: _80.Record_Ledger): _80.Record_LedgerAmino;
                    fromAminoMsg(object: _80.Record_LedgerAminoMsg): _80.Record_Ledger;
                    toAminoMsg(message: _80.Record_Ledger): _80.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _80.Record_LedgerProtoMsg): _80.Record_Ledger;
                    toProto(message: _80.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _80.Record_Ledger): _80.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    typeUrl: string;
                    encode(_: _80.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Record_Multi;
                    fromJSON(_: any): _80.Record_Multi;
                    toJSON(_: _80.Record_Multi): unknown;
                    fromPartial(_: Partial<_80.Record_Multi>): _80.Record_Multi;
                    fromAmino(_: _80.Record_MultiAmino): _80.Record_Multi;
                    toAmino(_: _80.Record_Multi): _80.Record_MultiAmino;
                    fromAminoMsg(object: _80.Record_MultiAminoMsg): _80.Record_Multi;
                    toAminoMsg(message: _80.Record_Multi): _80.Record_MultiAminoMsg;
                    fromProtoMsg(message: _80.Record_MultiProtoMsg): _80.Record_Multi;
                    toProto(message: _80.Record_Multi): Uint8Array;
                    toProtoMsg(message: _80.Record_Multi): _80.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    typeUrl: string;
                    encode(_: _80.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Record_Offline;
                    fromJSON(_: any): _80.Record_Offline;
                    toJSON(_: _80.Record_Offline): unknown;
                    fromPartial(_: Partial<_80.Record_Offline>): _80.Record_Offline;
                    fromAmino(_: _80.Record_OfflineAmino): _80.Record_Offline;
                    toAmino(_: _80.Record_Offline): _80.Record_OfflineAmino;
                    fromAminoMsg(object: _80.Record_OfflineAminoMsg): _80.Record_Offline;
                    toAminoMsg(message: _80.Record_Offline): _80.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _80.Record_OfflineProtoMsg): _80.Record_Offline;
                    toProto(message: _80.Record_Offline): Uint8Array;
                    toProtoMsg(message: _80.Record_Offline): _80.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                typeUrl: string;
                encode(message: _81.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.LegacyAminoPubKey;
                fromJSON(object: any): _81.LegacyAminoPubKey;
                toJSON(message: _81.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_81.LegacyAminoPubKey>): _81.LegacyAminoPubKey;
                fromAmino(object: _81.LegacyAminoPubKeyAmino): _81.LegacyAminoPubKey;
                toAmino(message: _81.LegacyAminoPubKey): _81.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _81.LegacyAminoPubKeyAminoMsg): _81.LegacyAminoPubKey;
                toAminoMsg(message: _81.LegacyAminoPubKey): _81.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _81.LegacyAminoPubKeyProtoMsg): _81.LegacyAminoPubKey;
                toProto(message: _81.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _81.LegacyAminoPubKey): _81.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                typeUrl: string;
                encode(message: _82.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PubKey;
                fromJSON(object: any): _82.PubKey;
                toJSON(message: _82.PubKey): unknown;
                fromPartial(object: Partial<_82.PubKey>): _82.PubKey;
                fromAmino(object: _82.PubKeyAmino): _82.PubKey;
                toAmino(message: _82.PubKey): _82.PubKeyAmino;
                fromAminoMsg(object: _82.PubKeyAminoMsg): _82.PubKey;
                toAminoMsg(message: _82.PubKey): _82.PubKeyAminoMsg;
                fromProtoMsg(message: _82.PubKeyProtoMsg): _82.PubKey;
                toProto(message: _82.PubKey): Uint8Array;
                toProtoMsg(message: _82.PubKey): _82.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _82.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.PrivKey;
                fromJSON(object: any): _82.PrivKey;
                toJSON(message: _82.PrivKey): unknown;
                fromPartial(object: Partial<_82.PrivKey>): _82.PrivKey;
                fromAmino(object: _82.PrivKeyAmino): _82.PrivKey;
                toAmino(message: _82.PrivKey): _82.PrivKeyAmino;
                fromAminoMsg(object: _82.PrivKeyAminoMsg): _82.PrivKey;
                toAminoMsg(message: _82.PrivKey): _82.PrivKeyAminoMsg;
                fromProtoMsg(message: _82.PrivKeyProtoMsg): _82.PrivKey;
                toProto(message: _82.PrivKey): Uint8Array;
                toProtoMsg(message: _82.PrivKey): _82.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                typeUrl: string;
                encode(message: _83.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PubKey;
                fromJSON(object: any): _83.PubKey;
                toJSON(message: _83.PubKey): unknown;
                fromPartial(object: Partial<_83.PubKey>): _83.PubKey;
                fromAmino(object: _83.PubKeyAmino): _83.PubKey;
                toAmino(message: _83.PubKey): _83.PubKeyAmino;
                fromAminoMsg(object: _83.PubKeyAminoMsg): _83.PubKey;
                toAminoMsg(message: _83.PubKey): _83.PubKeyAminoMsg;
                fromProtoMsg(message: _83.PubKeyProtoMsg): _83.PubKey;
                toProto(message: _83.PubKey): Uint8Array;
                toProtoMsg(message: _83.PubKey): _83.PubKeyProtoMsg;
            };
            PrivKey: {
                typeUrl: string;
                encode(message: _83.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.PrivKey;
                fromJSON(object: any): _83.PrivKey;
                toJSON(message: _83.PrivKey): unknown;
                fromPartial(object: Partial<_83.PrivKey>): _83.PrivKey;
                fromAmino(object: _83.PrivKeyAmino): _83.PrivKey;
                toAmino(message: _83.PrivKey): _83.PrivKeyAmino;
                fromAminoMsg(object: _83.PrivKeyAminoMsg): _83.PrivKey;
                toAminoMsg(message: _83.PrivKey): _83.PrivKeyAminoMsg;
                fromProtoMsg(message: _83.PrivKeyProtoMsg): _83.PrivKey;
                toProto(message: _83.PrivKey): Uint8Array;
                toProtoMsg(message: _83.PrivKey): _83.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _84.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.Module;
                    fromJSON(object: any): _84.Module;
                    toJSON(message: _84.Module): unknown;
                    fromPartial(object: Partial<_84.Module>): _84.Module;
                    fromAmino(object: _84.ModuleAmino): _84.Module;
                    toAmino(message: _84.Module): _84.ModuleAmino;
                    fromAminoMsg(object: _84.ModuleAminoMsg): _84.Module;
                    toAminoMsg(message: _84.Module): _84.ModuleAminoMsg;
                    fromProtoMsg(message: _84.ModuleProtoMsg): _84.Module;
                    toProto(message: _84.Module): Uint8Array;
                    toProtoMsg(message: _84.Module): _84.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _300.MsgClientImpl;
            QueryClientImpl: typeof _281.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                validatorDistributionInfo(request: _87.QueryValidatorDistributionInfoRequest): Promise<_87.QueryValidatorDistributionInfoResponse>;
                validatorOutstandingRewards(request: _87.QueryValidatorOutstandingRewardsRequest): Promise<_87.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _87.QueryValidatorCommissionRequest): Promise<_87.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _87.QueryValidatorSlashesRequest): Promise<_87.QueryValidatorSlashesResponse>;
                delegationRewards(request: _87.QueryDelegationRewardsRequest): Promise<_87.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _87.QueryDelegationTotalRewardsRequest): Promise<_87.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _87.QueryDelegatorValidatorsRequest): Promise<_87.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _87.QueryDelegatorWithdrawAddressRequest): Promise<_87.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _87.QueryCommunityPoolRequest): Promise<_87.QueryCommunityPoolResponse>;
            };
            LCDQueryClient: typeof _260.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _88.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _88.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _88.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _88.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    communityPoolSpend(value: _88.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _88.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _88.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _88.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _88.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _88.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _88.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _88.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _88.MsgFundCommunityPool;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _88.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _88.MsgCommunityPoolSpend;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _88.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _88.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _88.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _88.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                    communityPoolSpend(value: _88.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _88.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _88.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _88.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _88.MsgFundCommunityPool;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                    communityPoolSpend(value: any): {
                        typeUrl: string;
                        value: _88.MsgCommunityPoolSpend;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _88.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _88.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _88.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _88.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _88.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _88.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _88.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _88.MsgFundCommunityPool;
                    };
                    updateParams(value: _88.MsgUpdateParams): {
                        typeUrl: string;
                        value: _88.MsgUpdateParams;
                    };
                    communityPoolSpend(value: _88.MsgCommunityPoolSpend): {
                        typeUrl: string;
                        value: _88.MsgCommunityPoolSpend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _88.MsgSetWithdrawAddress) => _88.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _88.MsgSetWithdrawAddressAmino) => _88.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _88.MsgWithdrawDelegatorReward) => _88.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _88.MsgWithdrawDelegatorRewardAmino) => _88.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _88.MsgWithdrawValidatorCommission) => _88.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _88.MsgWithdrawValidatorCommissionAmino) => _88.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _88.MsgFundCommunityPool) => _88.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _88.MsgFundCommunityPoolAmino) => _88.MsgFundCommunityPool;
                };
                "/cosmos.distribution.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _88.MsgUpdateParams) => _88.MsgUpdateParamsAmino;
                    fromAmino: (object: _88.MsgUpdateParamsAmino) => _88.MsgUpdateParams;
                };
                "/cosmos.distribution.v1beta1.MsgCommunityPoolSpend": {
                    aminoType: string;
                    toAmino: (message: _88.MsgCommunityPoolSpend) => _88.MsgCommunityPoolSpendAmino;
                    fromAmino: (object: _88.MsgCommunityPoolSpendAmino) => _88.MsgCommunityPoolSpend;
                };
            };
            MsgSetWithdrawAddress: {
                typeUrl: string;
                encode(message: _88.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgSetWithdrawAddress;
                fromJSON(object: any): _88.MsgSetWithdrawAddress;
                toJSON(message: _88.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_88.MsgSetWithdrawAddress>): _88.MsgSetWithdrawAddress;
                fromAmino(object: _88.MsgSetWithdrawAddressAmino): _88.MsgSetWithdrawAddress;
                toAmino(message: _88.MsgSetWithdrawAddress): _88.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _88.MsgSetWithdrawAddressAminoMsg): _88.MsgSetWithdrawAddress;
                toAminoMsg(message: _88.MsgSetWithdrawAddress): _88.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _88.MsgSetWithdrawAddressProtoMsg): _88.MsgSetWithdrawAddress;
                toProto(message: _88.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _88.MsgSetWithdrawAddress): _88.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                typeUrl: string;
                encode(_: _88.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _88.MsgSetWithdrawAddressResponse;
                toJSON(_: _88.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_88.MsgSetWithdrawAddressResponse>): _88.MsgSetWithdrawAddressResponse;
                fromAmino(_: _88.MsgSetWithdrawAddressResponseAmino): _88.MsgSetWithdrawAddressResponse;
                toAmino(_: _88.MsgSetWithdrawAddressResponse): _88.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _88.MsgSetWithdrawAddressResponseAminoMsg): _88.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _88.MsgSetWithdrawAddressResponse): _88.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _88.MsgSetWithdrawAddressResponseProtoMsg): _88.MsgSetWithdrawAddressResponse;
                toProto(message: _88.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _88.MsgSetWithdrawAddressResponse): _88.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                typeUrl: string;
                encode(message: _88.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _88.MsgWithdrawDelegatorReward;
                toJSON(message: _88.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_88.MsgWithdrawDelegatorReward>): _88.MsgWithdrawDelegatorReward;
                fromAmino(object: _88.MsgWithdrawDelegatorRewardAmino): _88.MsgWithdrawDelegatorReward;
                toAmino(message: _88.MsgWithdrawDelegatorReward): _88.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _88.MsgWithdrawDelegatorRewardAminoMsg): _88.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _88.MsgWithdrawDelegatorReward): _88.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _88.MsgWithdrawDelegatorRewardProtoMsg): _88.MsgWithdrawDelegatorReward;
                toProto(message: _88.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _88.MsgWithdrawDelegatorReward): _88.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                typeUrl: string;
                encode(message: _88.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _88.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _88.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_88.MsgWithdrawDelegatorRewardResponse>): _88.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _88.MsgWithdrawDelegatorRewardResponseAmino): _88.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _88.MsgWithdrawDelegatorRewardResponse): _88.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _88.MsgWithdrawDelegatorRewardResponseAminoMsg): _88.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _88.MsgWithdrawDelegatorRewardResponse): _88.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _88.MsgWithdrawDelegatorRewardResponseProtoMsg): _88.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _88.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _88.MsgWithdrawDelegatorRewardResponse): _88.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                typeUrl: string;
                encode(message: _88.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _88.MsgWithdrawValidatorCommission;
                toJSON(message: _88.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_88.MsgWithdrawValidatorCommission>): _88.MsgWithdrawValidatorCommission;
                fromAmino(object: _88.MsgWithdrawValidatorCommissionAmino): _88.MsgWithdrawValidatorCommission;
                toAmino(message: _88.MsgWithdrawValidatorCommission): _88.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _88.MsgWithdrawValidatorCommissionAminoMsg): _88.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _88.MsgWithdrawValidatorCommission): _88.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _88.MsgWithdrawValidatorCommissionProtoMsg): _88.MsgWithdrawValidatorCommission;
                toProto(message: _88.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _88.MsgWithdrawValidatorCommission): _88.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _88.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _88.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _88.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_88.MsgWithdrawValidatorCommissionResponse>): _88.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _88.MsgWithdrawValidatorCommissionResponseAmino): _88.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _88.MsgWithdrawValidatorCommissionResponse): _88.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _88.MsgWithdrawValidatorCommissionResponseAminoMsg): _88.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _88.MsgWithdrawValidatorCommissionResponse): _88.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _88.MsgWithdrawValidatorCommissionResponseProtoMsg): _88.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _88.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _88.MsgWithdrawValidatorCommissionResponse): _88.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                typeUrl: string;
                encode(message: _88.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgFundCommunityPool;
                fromJSON(object: any): _88.MsgFundCommunityPool;
                toJSON(message: _88.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_88.MsgFundCommunityPool>): _88.MsgFundCommunityPool;
                fromAmino(object: _88.MsgFundCommunityPoolAmino): _88.MsgFundCommunityPool;
                toAmino(message: _88.MsgFundCommunityPool): _88.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _88.MsgFundCommunityPoolAminoMsg): _88.MsgFundCommunityPool;
                toAminoMsg(message: _88.MsgFundCommunityPool): _88.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _88.MsgFundCommunityPoolProtoMsg): _88.MsgFundCommunityPool;
                toProto(message: _88.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _88.MsgFundCommunityPool): _88.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                typeUrl: string;
                encode(_: _88.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _88.MsgFundCommunityPoolResponse;
                toJSON(_: _88.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_88.MsgFundCommunityPoolResponse>): _88.MsgFundCommunityPoolResponse;
                fromAmino(_: _88.MsgFundCommunityPoolResponseAmino): _88.MsgFundCommunityPoolResponse;
                toAmino(_: _88.MsgFundCommunityPoolResponse): _88.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _88.MsgFundCommunityPoolResponseAminoMsg): _88.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _88.MsgFundCommunityPoolResponse): _88.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _88.MsgFundCommunityPoolResponseProtoMsg): _88.MsgFundCommunityPoolResponse;
                toProto(message: _88.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _88.MsgFundCommunityPoolResponse): _88.MsgFundCommunityPoolResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _88.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgUpdateParams;
                fromJSON(object: any): _88.MsgUpdateParams;
                toJSON(message: _88.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_88.MsgUpdateParams>): _88.MsgUpdateParams;
                fromAmino(object: _88.MsgUpdateParamsAmino): _88.MsgUpdateParams;
                toAmino(message: _88.MsgUpdateParams): _88.MsgUpdateParamsAmino;
                fromAminoMsg(object: _88.MsgUpdateParamsAminoMsg): _88.MsgUpdateParams;
                toAminoMsg(message: _88.MsgUpdateParams): _88.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _88.MsgUpdateParamsProtoMsg): _88.MsgUpdateParams;
                toProto(message: _88.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _88.MsgUpdateParams): _88.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _88.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgUpdateParamsResponse;
                fromJSON(_: any): _88.MsgUpdateParamsResponse;
                toJSON(_: _88.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_88.MsgUpdateParamsResponse>): _88.MsgUpdateParamsResponse;
                fromAmino(_: _88.MsgUpdateParamsResponseAmino): _88.MsgUpdateParamsResponse;
                toAmino(_: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _88.MsgUpdateParamsResponseAminoMsg): _88.MsgUpdateParamsResponse;
                toAminoMsg(message: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _88.MsgUpdateParamsResponseProtoMsg): _88.MsgUpdateParamsResponse;
                toProto(message: _88.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _88.MsgUpdateParamsResponse): _88.MsgUpdateParamsResponseProtoMsg;
            };
            MsgCommunityPoolSpend: {
                typeUrl: string;
                encode(message: _88.MsgCommunityPoolSpend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCommunityPoolSpend;
                fromJSON(object: any): _88.MsgCommunityPoolSpend;
                toJSON(message: _88.MsgCommunityPoolSpend): unknown;
                fromPartial(object: Partial<_88.MsgCommunityPoolSpend>): _88.MsgCommunityPoolSpend;
                fromAmino(object: _88.MsgCommunityPoolSpendAmino): _88.MsgCommunityPoolSpend;
                toAmino(message: _88.MsgCommunityPoolSpend): _88.MsgCommunityPoolSpendAmino;
                fromAminoMsg(object: _88.MsgCommunityPoolSpendAminoMsg): _88.MsgCommunityPoolSpend;
                toAminoMsg(message: _88.MsgCommunityPoolSpend): _88.MsgCommunityPoolSpendAminoMsg;
                fromProtoMsg(message: _88.MsgCommunityPoolSpendProtoMsg): _88.MsgCommunityPoolSpend;
                toProto(message: _88.MsgCommunityPoolSpend): Uint8Array;
                toProtoMsg(message: _88.MsgCommunityPoolSpend): _88.MsgCommunityPoolSpendProtoMsg;
            };
            MsgCommunityPoolSpendResponse: {
                typeUrl: string;
                encode(_: _88.MsgCommunityPoolSpendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.MsgCommunityPoolSpendResponse;
                fromJSON(_: any): _88.MsgCommunityPoolSpendResponse;
                toJSON(_: _88.MsgCommunityPoolSpendResponse): unknown;
                fromPartial(_: Partial<_88.MsgCommunityPoolSpendResponse>): _88.MsgCommunityPoolSpendResponse;
                fromAmino(_: _88.MsgCommunityPoolSpendResponseAmino): _88.MsgCommunityPoolSpendResponse;
                toAmino(_: _88.MsgCommunityPoolSpendResponse): _88.MsgCommunityPoolSpendResponseAmino;
                fromAminoMsg(object: _88.MsgCommunityPoolSpendResponseAminoMsg): _88.MsgCommunityPoolSpendResponse;
                toAminoMsg(message: _88.MsgCommunityPoolSpendResponse): _88.MsgCommunityPoolSpendResponseAminoMsg;
                fromProtoMsg(message: _88.MsgCommunityPoolSpendResponseProtoMsg): _88.MsgCommunityPoolSpendResponse;
                toProto(message: _88.MsgCommunityPoolSpendResponse): Uint8Array;
                toProtoMsg(message: _88.MsgCommunityPoolSpendResponse): _88.MsgCommunityPoolSpendResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _87.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsRequest;
                fromJSON(_: any): _87.QueryParamsRequest;
                toJSON(_: _87.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_87.QueryParamsRequest>): _87.QueryParamsRequest;
                fromAmino(_: _87.QueryParamsRequestAmino): _87.QueryParamsRequest;
                toAmino(_: _87.QueryParamsRequest): _87.QueryParamsRequestAmino;
                fromAminoMsg(object: _87.QueryParamsRequestAminoMsg): _87.QueryParamsRequest;
                toAminoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryParamsRequestProtoMsg): _87.QueryParamsRequest;
                toProto(message: _87.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryParamsRequest): _87.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _87.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryParamsResponse;
                fromJSON(object: any): _87.QueryParamsResponse;
                toJSON(message: _87.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_87.QueryParamsResponse>): _87.QueryParamsResponse;
                fromAmino(object: _87.QueryParamsResponseAmino): _87.QueryParamsResponse;
                toAmino(message: _87.QueryParamsResponse): _87.QueryParamsResponseAmino;
                fromAminoMsg(object: _87.QueryParamsResponseAminoMsg): _87.QueryParamsResponse;
                toAminoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryParamsResponseProtoMsg): _87.QueryParamsResponse;
                toProto(message: _87.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryParamsResponse): _87.QueryParamsResponseProtoMsg;
            };
            QueryValidatorDistributionInfoRequest: {
                typeUrl: string;
                encode(message: _87.QueryValidatorDistributionInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorDistributionInfoRequest;
                fromJSON(object: any): _87.QueryValidatorDistributionInfoRequest;
                toJSON(message: _87.QueryValidatorDistributionInfoRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorDistributionInfoRequest>): _87.QueryValidatorDistributionInfoRequest;
                fromAmino(object: _87.QueryValidatorDistributionInfoRequestAmino): _87.QueryValidatorDistributionInfoRequest;
                toAmino(message: _87.QueryValidatorDistributionInfoRequest): _87.QueryValidatorDistributionInfoRequestAmino;
                fromAminoMsg(object: _87.QueryValidatorDistributionInfoRequestAminoMsg): _87.QueryValidatorDistributionInfoRequest;
                toAminoMsg(message: _87.QueryValidatorDistributionInfoRequest): _87.QueryValidatorDistributionInfoRequestAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorDistributionInfoRequestProtoMsg): _87.QueryValidatorDistributionInfoRequest;
                toProto(message: _87.QueryValidatorDistributionInfoRequest): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorDistributionInfoRequest): _87.QueryValidatorDistributionInfoRequestProtoMsg;
            };
            QueryValidatorDistributionInfoResponse: {
                typeUrl: string;
                encode(message: _87.QueryValidatorDistributionInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorDistributionInfoResponse;
                fromJSON(object: any): _87.QueryValidatorDistributionInfoResponse;
                toJSON(message: _87.QueryValidatorDistributionInfoResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorDistributionInfoResponse>): _87.QueryValidatorDistributionInfoResponse;
                fromAmino(object: _87.QueryValidatorDistributionInfoResponseAmino): _87.QueryValidatorDistributionInfoResponse;
                toAmino(message: _87.QueryValidatorDistributionInfoResponse): _87.QueryValidatorDistributionInfoResponseAmino;
                fromAminoMsg(object: _87.QueryValidatorDistributionInfoResponseAminoMsg): _87.QueryValidatorDistributionInfoResponse;
                toAminoMsg(message: _87.QueryValidatorDistributionInfoResponse): _87.QueryValidatorDistributionInfoResponseAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorDistributionInfoResponseProtoMsg): _87.QueryValidatorDistributionInfoResponse;
                toProto(message: _87.QueryValidatorDistributionInfoResponse): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorDistributionInfoResponse): _87.QueryValidatorDistributionInfoResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                typeUrl: string;
                encode(message: _87.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _87.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _87.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorOutstandingRewardsRequest>): _87.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _87.QueryValidatorOutstandingRewardsRequestAmino): _87.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _87.QueryValidatorOutstandingRewardsRequest): _87.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _87.QueryValidatorOutstandingRewardsRequestAminoMsg): _87.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _87.QueryValidatorOutstandingRewardsRequest): _87.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorOutstandingRewardsRequestProtoMsg): _87.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _87.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorOutstandingRewardsRequest): _87.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                typeUrl: string;
                encode(message: _87.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _87.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _87.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorOutstandingRewardsResponse>): _87.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _87.QueryValidatorOutstandingRewardsResponseAmino): _87.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _87.QueryValidatorOutstandingRewardsResponse): _87.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _87.QueryValidatorOutstandingRewardsResponseAminoMsg): _87.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _87.QueryValidatorOutstandingRewardsResponse): _87.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorOutstandingRewardsResponseProtoMsg): _87.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _87.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorOutstandingRewardsResponse): _87.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                typeUrl: string;
                encode(message: _87.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorCommissionRequest;
                fromJSON(object: any): _87.QueryValidatorCommissionRequest;
                toJSON(message: _87.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorCommissionRequest>): _87.QueryValidatorCommissionRequest;
                fromAmino(object: _87.QueryValidatorCommissionRequestAmino): _87.QueryValidatorCommissionRequest;
                toAmino(message: _87.QueryValidatorCommissionRequest): _87.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _87.QueryValidatorCommissionRequestAminoMsg): _87.QueryValidatorCommissionRequest;
                toAminoMsg(message: _87.QueryValidatorCommissionRequest): _87.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorCommissionRequestProtoMsg): _87.QueryValidatorCommissionRequest;
                toProto(message: _87.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorCommissionRequest): _87.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                typeUrl: string;
                encode(message: _87.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorCommissionResponse;
                fromJSON(object: any): _87.QueryValidatorCommissionResponse;
                toJSON(message: _87.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorCommissionResponse>): _87.QueryValidatorCommissionResponse;
                fromAmino(object: _87.QueryValidatorCommissionResponseAmino): _87.QueryValidatorCommissionResponse;
                toAmino(message: _87.QueryValidatorCommissionResponse): _87.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _87.QueryValidatorCommissionResponseAminoMsg): _87.QueryValidatorCommissionResponse;
                toAminoMsg(message: _87.QueryValidatorCommissionResponse): _87.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorCommissionResponseProtoMsg): _87.QueryValidatorCommissionResponse;
                toProto(message: _87.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorCommissionResponse): _87.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                typeUrl: string;
                encode(message: _87.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorSlashesRequest;
                fromJSON(object: any): _87.QueryValidatorSlashesRequest;
                toJSON(message: _87.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_87.QueryValidatorSlashesRequest>): _87.QueryValidatorSlashesRequest;
                fromAmino(object: _87.QueryValidatorSlashesRequestAmino): _87.QueryValidatorSlashesRequest;
                toAmino(message: _87.QueryValidatorSlashesRequest): _87.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _87.QueryValidatorSlashesRequestAminoMsg): _87.QueryValidatorSlashesRequest;
                toAminoMsg(message: _87.QueryValidatorSlashesRequest): _87.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorSlashesRequestProtoMsg): _87.QueryValidatorSlashesRequest;
                toProto(message: _87.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorSlashesRequest): _87.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                typeUrl: string;
                encode(message: _87.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryValidatorSlashesResponse;
                fromJSON(object: any): _87.QueryValidatorSlashesResponse;
                toJSON(message: _87.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_87.QueryValidatorSlashesResponse>): _87.QueryValidatorSlashesResponse;
                fromAmino(object: _87.QueryValidatorSlashesResponseAmino): _87.QueryValidatorSlashesResponse;
                toAmino(message: _87.QueryValidatorSlashesResponse): _87.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _87.QueryValidatorSlashesResponseAminoMsg): _87.QueryValidatorSlashesResponse;
                toAminoMsg(message: _87.QueryValidatorSlashesResponse): _87.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _87.QueryValidatorSlashesResponseProtoMsg): _87.QueryValidatorSlashesResponse;
                toProto(message: _87.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _87.QueryValidatorSlashesResponse): _87.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                typeUrl: string;
                encode(message: _87.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegationRewardsRequest;
                fromJSON(object: any): _87.QueryDelegationRewardsRequest;
                toJSON(message: _87.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegationRewardsRequest>): _87.QueryDelegationRewardsRequest;
                fromAmino(object: _87.QueryDelegationRewardsRequestAmino): _87.QueryDelegationRewardsRequest;
                toAmino(message: _87.QueryDelegationRewardsRequest): _87.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _87.QueryDelegationRewardsRequestAminoMsg): _87.QueryDelegationRewardsRequest;
                toAminoMsg(message: _87.QueryDelegationRewardsRequest): _87.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegationRewardsRequestProtoMsg): _87.QueryDelegationRewardsRequest;
                toProto(message: _87.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegationRewardsRequest): _87.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                typeUrl: string;
                encode(message: _87.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegationRewardsResponse;
                fromJSON(object: any): _87.QueryDelegationRewardsResponse;
                toJSON(message: _87.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegationRewardsResponse>): _87.QueryDelegationRewardsResponse;
                fromAmino(object: _87.QueryDelegationRewardsResponseAmino): _87.QueryDelegationRewardsResponse;
                toAmino(message: _87.QueryDelegationRewardsResponse): _87.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _87.QueryDelegationRewardsResponseAminoMsg): _87.QueryDelegationRewardsResponse;
                toAminoMsg(message: _87.QueryDelegationRewardsResponse): _87.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegationRewardsResponseProtoMsg): _87.QueryDelegationRewardsResponse;
                toProto(message: _87.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegationRewardsResponse): _87.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                typeUrl: string;
                encode(message: _87.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _87.QueryDelegationTotalRewardsRequest;
                toJSON(message: _87.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegationTotalRewardsRequest>): _87.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _87.QueryDelegationTotalRewardsRequestAmino): _87.QueryDelegationTotalRewardsRequest;
                toAmino(message: _87.QueryDelegationTotalRewardsRequest): _87.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _87.QueryDelegationTotalRewardsRequestAminoMsg): _87.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _87.QueryDelegationTotalRewardsRequest): _87.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegationTotalRewardsRequestProtoMsg): _87.QueryDelegationTotalRewardsRequest;
                toProto(message: _87.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegationTotalRewardsRequest): _87.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                typeUrl: string;
                encode(message: _87.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _87.QueryDelegationTotalRewardsResponse;
                toJSON(message: _87.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegationTotalRewardsResponse>): _87.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _87.QueryDelegationTotalRewardsResponseAmino): _87.QueryDelegationTotalRewardsResponse;
                toAmino(message: _87.QueryDelegationTotalRewardsResponse): _87.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _87.QueryDelegationTotalRewardsResponseAminoMsg): _87.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _87.QueryDelegationTotalRewardsResponse): _87.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegationTotalRewardsResponseProtoMsg): _87.QueryDelegationTotalRewardsResponse;
                toProto(message: _87.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegationTotalRewardsResponse): _87.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _87.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _87.QueryDelegatorValidatorsRequest;
                toJSON(message: _87.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorsRequest>): _87.QueryDelegatorValidatorsRequest;
                fromAmino(object: _87.QueryDelegatorValidatorsRequestAmino): _87.QueryDelegatorValidatorsRequest;
                toAmino(message: _87.QueryDelegatorValidatorsRequest): _87.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _87.QueryDelegatorValidatorsRequestAminoMsg): _87.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _87.QueryDelegatorValidatorsRequest): _87.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorValidatorsRequestProtoMsg): _87.QueryDelegatorValidatorsRequest;
                toProto(message: _87.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorValidatorsRequest): _87.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _87.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _87.QueryDelegatorValidatorsResponse;
                toJSON(message: _87.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorValidatorsResponse>): _87.QueryDelegatorValidatorsResponse;
                fromAmino(object: _87.QueryDelegatorValidatorsResponseAmino): _87.QueryDelegatorValidatorsResponse;
                toAmino(message: _87.QueryDelegatorValidatorsResponse): _87.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _87.QueryDelegatorValidatorsResponseAminoMsg): _87.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _87.QueryDelegatorValidatorsResponse): _87.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorValidatorsResponseProtoMsg): _87.QueryDelegatorValidatorsResponse;
                toProto(message: _87.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorValidatorsResponse): _87.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                typeUrl: string;
                encode(message: _87.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _87.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _87.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorWithdrawAddressRequest>): _87.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _87.QueryDelegatorWithdrawAddressRequestAmino): _87.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _87.QueryDelegatorWithdrawAddressRequest): _87.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _87.QueryDelegatorWithdrawAddressRequestAminoMsg): _87.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _87.QueryDelegatorWithdrawAddressRequest): _87.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorWithdrawAddressRequestProtoMsg): _87.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _87.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorWithdrawAddressRequest): _87.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                typeUrl: string;
                encode(message: _87.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _87.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _87.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_87.QueryDelegatorWithdrawAddressResponse>): _87.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _87.QueryDelegatorWithdrawAddressResponseAmino): _87.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _87.QueryDelegatorWithdrawAddressResponse): _87.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _87.QueryDelegatorWithdrawAddressResponseAminoMsg): _87.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _87.QueryDelegatorWithdrawAddressResponse): _87.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _87.QueryDelegatorWithdrawAddressResponseProtoMsg): _87.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _87.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _87.QueryDelegatorWithdrawAddressResponse): _87.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                typeUrl: string;
                encode(_: _87.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryCommunityPoolRequest;
                fromJSON(_: any): _87.QueryCommunityPoolRequest;
                toJSON(_: _87.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_87.QueryCommunityPoolRequest>): _87.QueryCommunityPoolRequest;
                fromAmino(_: _87.QueryCommunityPoolRequestAmino): _87.QueryCommunityPoolRequest;
                toAmino(_: _87.QueryCommunityPoolRequest): _87.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _87.QueryCommunityPoolRequestAminoMsg): _87.QueryCommunityPoolRequest;
                toAminoMsg(message: _87.QueryCommunityPoolRequest): _87.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _87.QueryCommunityPoolRequestProtoMsg): _87.QueryCommunityPoolRequest;
                toProto(message: _87.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _87.QueryCommunityPoolRequest): _87.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                typeUrl: string;
                encode(message: _87.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.QueryCommunityPoolResponse;
                fromJSON(object: any): _87.QueryCommunityPoolResponse;
                toJSON(message: _87.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_87.QueryCommunityPoolResponse>): _87.QueryCommunityPoolResponse;
                fromAmino(object: _87.QueryCommunityPoolResponseAmino): _87.QueryCommunityPoolResponse;
                toAmino(message: _87.QueryCommunityPoolResponse): _87.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _87.QueryCommunityPoolResponseAminoMsg): _87.QueryCommunityPoolResponse;
                toAminoMsg(message: _87.QueryCommunityPoolResponse): _87.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _87.QueryCommunityPoolResponseProtoMsg): _87.QueryCommunityPoolResponse;
                toProto(message: _87.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _87.QueryCommunityPoolResponse): _87.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                typeUrl: string;
                encode(message: _86.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DelegatorWithdrawInfo;
                fromJSON(object: any): _86.DelegatorWithdrawInfo;
                toJSON(message: _86.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_86.DelegatorWithdrawInfo>): _86.DelegatorWithdrawInfo;
                fromAmino(object: _86.DelegatorWithdrawInfoAmino): _86.DelegatorWithdrawInfo;
                toAmino(message: _86.DelegatorWithdrawInfo): _86.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _86.DelegatorWithdrawInfoAminoMsg): _86.DelegatorWithdrawInfo;
                toAminoMsg(message: _86.DelegatorWithdrawInfo): _86.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _86.DelegatorWithdrawInfoProtoMsg): _86.DelegatorWithdrawInfo;
                toProto(message: _86.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _86.DelegatorWithdrawInfo): _86.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                typeUrl: string;
                encode(message: _86.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _86.ValidatorOutstandingRewardsRecord;
                toJSON(message: _86.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_86.ValidatorOutstandingRewardsRecord>): _86.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _86.ValidatorOutstandingRewardsRecordAmino): _86.ValidatorOutstandingRewardsRecord;
                toAmino(message: _86.ValidatorOutstandingRewardsRecord): _86.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _86.ValidatorOutstandingRewardsRecordAminoMsg): _86.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _86.ValidatorOutstandingRewardsRecord): _86.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _86.ValidatorOutstandingRewardsRecordProtoMsg): _86.ValidatorOutstandingRewardsRecord;
                toProto(message: _86.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _86.ValidatorOutstandingRewardsRecord): _86.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                typeUrl: string;
                encode(message: _86.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _86.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _86.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_86.ValidatorAccumulatedCommissionRecord>): _86.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _86.ValidatorAccumulatedCommissionRecordAmino): _86.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _86.ValidatorAccumulatedCommissionRecord): _86.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _86.ValidatorAccumulatedCommissionRecordAminoMsg): _86.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _86.ValidatorAccumulatedCommissionRecord): _86.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _86.ValidatorAccumulatedCommissionRecordProtoMsg): _86.ValidatorAccumulatedCommissionRecord;
                toProto(message: _86.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _86.ValidatorAccumulatedCommissionRecord): _86.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                typeUrl: string;
                encode(message: _86.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _86.ValidatorHistoricalRewardsRecord;
                toJSON(message: _86.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_86.ValidatorHistoricalRewardsRecord>): _86.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _86.ValidatorHistoricalRewardsRecordAmino): _86.ValidatorHistoricalRewardsRecord;
                toAmino(message: _86.ValidatorHistoricalRewardsRecord): _86.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _86.ValidatorHistoricalRewardsRecordAminoMsg): _86.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _86.ValidatorHistoricalRewardsRecord): _86.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _86.ValidatorHistoricalRewardsRecordProtoMsg): _86.ValidatorHistoricalRewardsRecord;
                toProto(message: _86.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _86.ValidatorHistoricalRewardsRecord): _86.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                typeUrl: string;
                encode(message: _86.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _86.ValidatorCurrentRewardsRecord;
                toJSON(message: _86.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_86.ValidatorCurrentRewardsRecord>): _86.ValidatorCurrentRewardsRecord;
                fromAmino(object: _86.ValidatorCurrentRewardsRecordAmino): _86.ValidatorCurrentRewardsRecord;
                toAmino(message: _86.ValidatorCurrentRewardsRecord): _86.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _86.ValidatorCurrentRewardsRecordAminoMsg): _86.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _86.ValidatorCurrentRewardsRecord): _86.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _86.ValidatorCurrentRewardsRecordProtoMsg): _86.ValidatorCurrentRewardsRecord;
                toProto(message: _86.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _86.ValidatorCurrentRewardsRecord): _86.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                typeUrl: string;
                encode(message: _86.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.DelegatorStartingInfoRecord;
                fromJSON(object: any): _86.DelegatorStartingInfoRecord;
                toJSON(message: _86.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_86.DelegatorStartingInfoRecord>): _86.DelegatorStartingInfoRecord;
                fromAmino(object: _86.DelegatorStartingInfoRecordAmino): _86.DelegatorStartingInfoRecord;
                toAmino(message: _86.DelegatorStartingInfoRecord): _86.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _86.DelegatorStartingInfoRecordAminoMsg): _86.DelegatorStartingInfoRecord;
                toAminoMsg(message: _86.DelegatorStartingInfoRecord): _86.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _86.DelegatorStartingInfoRecordProtoMsg): _86.DelegatorStartingInfoRecord;
                toProto(message: _86.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _86.DelegatorStartingInfoRecord): _86.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                typeUrl: string;
                encode(message: _86.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.ValidatorSlashEventRecord;
                fromJSON(object: any): _86.ValidatorSlashEventRecord;
                toJSON(message: _86.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_86.ValidatorSlashEventRecord>): _86.ValidatorSlashEventRecord;
                fromAmino(object: _86.ValidatorSlashEventRecordAmino): _86.ValidatorSlashEventRecord;
                toAmino(message: _86.ValidatorSlashEventRecord): _86.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _86.ValidatorSlashEventRecordAminoMsg): _86.ValidatorSlashEventRecord;
                toAminoMsg(message: _86.ValidatorSlashEventRecord): _86.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _86.ValidatorSlashEventRecordProtoMsg): _86.ValidatorSlashEventRecord;
                toProto(message: _86.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _86.ValidatorSlashEventRecord): _86.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _86.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.GenesisState;
                fromJSON(object: any): _86.GenesisState;
                toJSON(message: _86.GenesisState): unknown;
                fromPartial(object: Partial<_86.GenesisState>): _86.GenesisState;
                fromAmino(object: _86.GenesisStateAmino): _86.GenesisState;
                toAmino(message: _86.GenesisState): _86.GenesisStateAmino;
                fromAminoMsg(object: _86.GenesisStateAminoMsg): _86.GenesisState;
                toAminoMsg(message: _86.GenesisState): _86.GenesisStateAminoMsg;
                fromProtoMsg(message: _86.GenesisStateProtoMsg): _86.GenesisState;
                toProto(message: _86.GenesisState): Uint8Array;
                toProtoMsg(message: _86.GenesisState): _86.GenesisStateProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _85.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Params;
                fromJSON(object: any): _85.Params;
                toJSON(message: _85.Params): unknown;
                fromPartial(object: Partial<_85.Params>): _85.Params;
                fromAmino(object: _85.ParamsAmino): _85.Params;
                toAmino(message: _85.Params): _85.ParamsAmino;
                fromAminoMsg(object: _85.ParamsAminoMsg): _85.Params;
                toAminoMsg(message: _85.Params): _85.ParamsAminoMsg;
                fromProtoMsg(message: _85.ParamsProtoMsg): _85.Params;
                toProto(message: _85.Params): Uint8Array;
                toProtoMsg(message: _85.Params): _85.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                typeUrl: string;
                encode(message: _85.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorHistoricalRewards;
                fromJSON(object: any): _85.ValidatorHistoricalRewards;
                toJSON(message: _85.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_85.ValidatorHistoricalRewards>): _85.ValidatorHistoricalRewards;
                fromAmino(object: _85.ValidatorHistoricalRewardsAmino): _85.ValidatorHistoricalRewards;
                toAmino(message: _85.ValidatorHistoricalRewards): _85.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _85.ValidatorHistoricalRewardsAminoMsg): _85.ValidatorHistoricalRewards;
                toAminoMsg(message: _85.ValidatorHistoricalRewards): _85.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _85.ValidatorHistoricalRewardsProtoMsg): _85.ValidatorHistoricalRewards;
                toProto(message: _85.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _85.ValidatorHistoricalRewards): _85.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                typeUrl: string;
                encode(message: _85.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorCurrentRewards;
                fromJSON(object: any): _85.ValidatorCurrentRewards;
                toJSON(message: _85.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_85.ValidatorCurrentRewards>): _85.ValidatorCurrentRewards;
                fromAmino(object: _85.ValidatorCurrentRewardsAmino): _85.ValidatorCurrentRewards;
                toAmino(message: _85.ValidatorCurrentRewards): _85.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _85.ValidatorCurrentRewardsAminoMsg): _85.ValidatorCurrentRewards;
                toAminoMsg(message: _85.ValidatorCurrentRewards): _85.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _85.ValidatorCurrentRewardsProtoMsg): _85.ValidatorCurrentRewards;
                toProto(message: _85.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _85.ValidatorCurrentRewards): _85.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                typeUrl: string;
                encode(message: _85.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorAccumulatedCommission;
                fromJSON(object: any): _85.ValidatorAccumulatedCommission;
                toJSON(message: _85.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_85.ValidatorAccumulatedCommission>): _85.ValidatorAccumulatedCommission;
                fromAmino(object: _85.ValidatorAccumulatedCommissionAmino): _85.ValidatorAccumulatedCommission;
                toAmino(message: _85.ValidatorAccumulatedCommission): _85.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _85.ValidatorAccumulatedCommissionAminoMsg): _85.ValidatorAccumulatedCommission;
                toAminoMsg(message: _85.ValidatorAccumulatedCommission): _85.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _85.ValidatorAccumulatedCommissionProtoMsg): _85.ValidatorAccumulatedCommission;
                toProto(message: _85.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _85.ValidatorAccumulatedCommission): _85.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                typeUrl: string;
                encode(message: _85.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorOutstandingRewards;
                fromJSON(object: any): _85.ValidatorOutstandingRewards;
                toJSON(message: _85.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_85.ValidatorOutstandingRewards>): _85.ValidatorOutstandingRewards;
                fromAmino(object: _85.ValidatorOutstandingRewardsAmino): _85.ValidatorOutstandingRewards;
                toAmino(message: _85.ValidatorOutstandingRewards): _85.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _85.ValidatorOutstandingRewardsAminoMsg): _85.ValidatorOutstandingRewards;
                toAminoMsg(message: _85.ValidatorOutstandingRewards): _85.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _85.ValidatorOutstandingRewardsProtoMsg): _85.ValidatorOutstandingRewards;
                toProto(message: _85.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _85.ValidatorOutstandingRewards): _85.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                typeUrl: string;
                encode(message: _85.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorSlashEvent;
                fromJSON(object: any): _85.ValidatorSlashEvent;
                toJSON(message: _85.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_85.ValidatorSlashEvent>): _85.ValidatorSlashEvent;
                fromAmino(object: _85.ValidatorSlashEventAmino): _85.ValidatorSlashEvent;
                toAmino(message: _85.ValidatorSlashEvent): _85.ValidatorSlashEventAmino;
                fromAminoMsg(object: _85.ValidatorSlashEventAminoMsg): _85.ValidatorSlashEvent;
                toAminoMsg(message: _85.ValidatorSlashEvent): _85.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _85.ValidatorSlashEventProtoMsg): _85.ValidatorSlashEvent;
                toProto(message: _85.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _85.ValidatorSlashEvent): _85.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                typeUrl: string;
                encode(message: _85.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValidatorSlashEvents;
                fromJSON(object: any): _85.ValidatorSlashEvents;
                toJSON(message: _85.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_85.ValidatorSlashEvents>): _85.ValidatorSlashEvents;
                fromAmino(object: _85.ValidatorSlashEventsAmino): _85.ValidatorSlashEvents;
                toAmino(message: _85.ValidatorSlashEvents): _85.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _85.ValidatorSlashEventsAminoMsg): _85.ValidatorSlashEvents;
                toAminoMsg(message: _85.ValidatorSlashEvents): _85.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _85.ValidatorSlashEventsProtoMsg): _85.ValidatorSlashEvents;
                toProto(message: _85.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _85.ValidatorSlashEvents): _85.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                typeUrl: string;
                encode(message: _85.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.FeePool;
                fromJSON(object: any): _85.FeePool;
                toJSON(message: _85.FeePool): unknown;
                fromPartial(object: Partial<_85.FeePool>): _85.FeePool;
                fromAmino(object: _85.FeePoolAmino): _85.FeePool;
                toAmino(message: _85.FeePool): _85.FeePoolAmino;
                fromAminoMsg(object: _85.FeePoolAminoMsg): _85.FeePool;
                toAminoMsg(message: _85.FeePool): _85.FeePoolAminoMsg;
                fromProtoMsg(message: _85.FeePoolProtoMsg): _85.FeePool;
                toProto(message: _85.FeePool): Uint8Array;
                toProtoMsg(message: _85.FeePool): _85.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                typeUrl: string;
                encode(message: _85.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CommunityPoolSpendProposal;
                fromJSON(object: any): _85.CommunityPoolSpendProposal;
                toJSON(message: _85.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_85.CommunityPoolSpendProposal>): _85.CommunityPoolSpendProposal;
                fromAmino(object: _85.CommunityPoolSpendProposalAmino): _85.CommunityPoolSpendProposal;
                toAmino(message: _85.CommunityPoolSpendProposal): _85.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _85.CommunityPoolSpendProposalAminoMsg): _85.CommunityPoolSpendProposal;
                toAminoMsg(message: _85.CommunityPoolSpendProposal): _85.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _85.CommunityPoolSpendProposalProtoMsg): _85.CommunityPoolSpendProposal;
                toProto(message: _85.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _85.CommunityPoolSpendProposal): _85.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                typeUrl: string;
                encode(message: _85.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DelegatorStartingInfo;
                fromJSON(object: any): _85.DelegatorStartingInfo;
                toJSON(message: _85.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_85.DelegatorStartingInfo>): _85.DelegatorStartingInfo;
                fromAmino(object: _85.DelegatorStartingInfoAmino): _85.DelegatorStartingInfo;
                toAmino(message: _85.DelegatorStartingInfo): _85.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _85.DelegatorStartingInfoAminoMsg): _85.DelegatorStartingInfo;
                toAminoMsg(message: _85.DelegatorStartingInfo): _85.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _85.DelegatorStartingInfoProtoMsg): _85.DelegatorStartingInfo;
                toProto(message: _85.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _85.DelegatorStartingInfo): _85.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                typeUrl: string;
                encode(message: _85.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DelegationDelegatorReward;
                fromJSON(object: any): _85.DelegationDelegatorReward;
                toJSON(message: _85.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_85.DelegationDelegatorReward>): _85.DelegationDelegatorReward;
                fromAmino(object: _85.DelegationDelegatorRewardAmino): _85.DelegationDelegatorReward;
                toAmino(message: _85.DelegationDelegatorReward): _85.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _85.DelegationDelegatorRewardAminoMsg): _85.DelegationDelegatorReward;
                toAminoMsg(message: _85.DelegationDelegatorReward): _85.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _85.DelegationDelegatorRewardProtoMsg): _85.DelegationDelegatorReward;
                toProto(message: _85.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _85.DelegationDelegatorReward): _85.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                typeUrl: string;
                encode(message: _85.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _85.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _85.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_85.CommunityPoolSpendProposalWithDeposit>): _85.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _85.CommunityPoolSpendProposalWithDepositAmino): _85.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _85.CommunityPoolSpendProposalWithDeposit): _85.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _85.CommunityPoolSpendProposalWithDepositAminoMsg): _85.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _85.CommunityPoolSpendProposalWithDeposit): _85.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _85.CommunityPoolSpendProposalWithDepositProtoMsg): _85.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _85.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _85.CommunityPoolSpendProposalWithDeposit): _85.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _89.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Module;
                    fromJSON(_: any): _89.Module;
                    toJSON(_: _89.Module): unknown;
                    fromPartial(_: Partial<_89.Module>): _89.Module;
                    fromAmino(_: _89.ModuleAmino): _89.Module;
                    toAmino(_: _89.Module): _89.ModuleAmino;
                    fromAminoMsg(object: _89.ModuleAminoMsg): _89.Module;
                    toAminoMsg(message: _89.Module): _89.ModuleAminoMsg;
                    fromProtoMsg(message: _89.ModuleProtoMsg): _89.Module;
                    toProto(message: _89.Module): Uint8Array;
                    toProtoMsg(message: _89.Module): _89.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            QueryClientImpl: typeof _282.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _92.QueryEvidenceRequest): Promise<_92.QueryEvidenceResponse>;
                allEvidence(request?: _92.QueryAllEvidenceRequest): Promise<_92.QueryAllEvidenceResponse>;
            };
            LCDQueryClient: typeof _261.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _93.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _93.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _93.MsgSubmitEvidence) => _93.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _93.MsgSubmitEvidenceAmino) => _93.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                typeUrl: string;
                encode(message: _93.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgSubmitEvidence;
                fromJSON(object: any): _93.MsgSubmitEvidence;
                toJSON(message: _93.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_93.MsgSubmitEvidence>): _93.MsgSubmitEvidence;
                fromAmino(object: _93.MsgSubmitEvidenceAmino): _93.MsgSubmitEvidence;
                toAmino(message: _93.MsgSubmitEvidence): _93.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _93.MsgSubmitEvidenceAminoMsg): _93.MsgSubmitEvidence;
                toAminoMsg(message: _93.MsgSubmitEvidence): _93.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _93.MsgSubmitEvidenceProtoMsg): _93.MsgSubmitEvidence;
                toProto(message: _93.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _93.MsgSubmitEvidence): _93.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                typeUrl: string;
                encode(message: _93.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _93.MsgSubmitEvidenceResponse;
                toJSON(message: _93.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_93.MsgSubmitEvidenceResponse>): _93.MsgSubmitEvidenceResponse;
                fromAmino(object: _93.MsgSubmitEvidenceResponseAmino): _93.MsgSubmitEvidenceResponse;
                toAmino(message: _93.MsgSubmitEvidenceResponse): _93.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _93.MsgSubmitEvidenceResponseAminoMsg): _93.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _93.MsgSubmitEvidenceResponse): _93.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _93.MsgSubmitEvidenceResponseProtoMsg): _93.MsgSubmitEvidenceResponse;
                toProto(message: _93.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _93.MsgSubmitEvidenceResponse): _93.MsgSubmitEvidenceResponseProtoMsg;
            };
            QueryEvidenceRequest: {
                typeUrl: string;
                encode(message: _92.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryEvidenceRequest;
                fromJSON(object: any): _92.QueryEvidenceRequest;
                toJSON(message: _92.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_92.QueryEvidenceRequest>): _92.QueryEvidenceRequest;
                fromAmino(object: _92.QueryEvidenceRequestAmino): _92.QueryEvidenceRequest;
                toAmino(message: _92.QueryEvidenceRequest): _92.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _92.QueryEvidenceRequestAminoMsg): _92.QueryEvidenceRequest;
                toAminoMsg(message: _92.QueryEvidenceRequest): _92.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _92.QueryEvidenceRequestProtoMsg): _92.QueryEvidenceRequest;
                toProto(message: _92.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _92.QueryEvidenceRequest): _92.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                typeUrl: string;
                encode(message: _92.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryEvidenceResponse;
                fromJSON(object: any): _92.QueryEvidenceResponse;
                toJSON(message: _92.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_92.QueryEvidenceResponse>): _92.QueryEvidenceResponse;
                fromAmino(object: _92.QueryEvidenceResponseAmino): _92.QueryEvidenceResponse;
                toAmino(message: _92.QueryEvidenceResponse): _92.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _92.QueryEvidenceResponseAminoMsg): _92.QueryEvidenceResponse;
                toAminoMsg(message: _92.QueryEvidenceResponse): _92.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _92.QueryEvidenceResponseProtoMsg): _92.QueryEvidenceResponse;
                toProto(message: _92.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _92.QueryEvidenceResponse): _92.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                typeUrl: string;
                encode(message: _92.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryAllEvidenceRequest;
                fromJSON(object: any): _92.QueryAllEvidenceRequest;
                toJSON(message: _92.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_92.QueryAllEvidenceRequest>): _92.QueryAllEvidenceRequest;
                fromAmino(object: _92.QueryAllEvidenceRequestAmino): _92.QueryAllEvidenceRequest;
                toAmino(message: _92.QueryAllEvidenceRequest): _92.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _92.QueryAllEvidenceRequestAminoMsg): _92.QueryAllEvidenceRequest;
                toAminoMsg(message: _92.QueryAllEvidenceRequest): _92.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _92.QueryAllEvidenceRequestProtoMsg): _92.QueryAllEvidenceRequest;
                toProto(message: _92.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _92.QueryAllEvidenceRequest): _92.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                typeUrl: string;
                encode(message: _92.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryAllEvidenceResponse;
                fromJSON(object: any): _92.QueryAllEvidenceResponse;
                toJSON(message: _92.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_92.QueryAllEvidenceResponse>): _92.QueryAllEvidenceResponse;
                fromAmino(object: _92.QueryAllEvidenceResponseAmino): _92.QueryAllEvidenceResponse;
                toAmino(message: _92.QueryAllEvidenceResponse): _92.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _92.QueryAllEvidenceResponseAminoMsg): _92.QueryAllEvidenceResponse;
                toAminoMsg(message: _92.QueryAllEvidenceResponse): _92.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _92.QueryAllEvidenceResponseProtoMsg): _92.QueryAllEvidenceResponse;
                toProto(message: _92.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _92.QueryAllEvidenceResponse): _92.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _91.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.GenesisState;
                fromJSON(object: any): _91.GenesisState;
                toJSON(message: _91.GenesisState): unknown;
                fromPartial(object: Partial<_91.GenesisState>): _91.GenesisState;
                fromAmino(object: _91.GenesisStateAmino): _91.GenesisState;
                toAmino(message: _91.GenesisState): _91.GenesisStateAmino;
                fromAminoMsg(object: _91.GenesisStateAminoMsg): _91.GenesisState;
                toAminoMsg(message: _91.GenesisState): _91.GenesisStateAminoMsg;
                fromProtoMsg(message: _91.GenesisStateProtoMsg): _91.GenesisState;
                toProto(message: _91.GenesisState): Uint8Array;
                toProtoMsg(message: _91.GenesisState): _91.GenesisStateProtoMsg;
            };
            Equivocation: {
                typeUrl: string;
                encode(message: _90.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Equivocation;
                fromJSON(object: any): _90.Equivocation;
                toJSON(message: _90.Equivocation): unknown;
                fromPartial(object: Partial<_90.Equivocation>): _90.Equivocation;
                fromAmino(object: _90.EquivocationAmino): _90.Equivocation;
                toAmino(message: _90.Equivocation): _90.EquivocationAmino;
                fromAminoMsg(object: _90.EquivocationAminoMsg): _90.Equivocation;
                toAminoMsg(message: _90.Equivocation): _90.EquivocationAminoMsg;
                fromProtoMsg(message: _90.EquivocationProtoMsg): _90.Equivocation;
                toProto(message: _90.Equivocation): Uint8Array;
                toProtoMsg(message: _90.Equivocation): _90.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _94.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Module;
                    fromJSON(_: any): _94.Module;
                    toJSON(_: _94.Module): unknown;
                    fromPartial(_: Partial<_94.Module>): _94.Module;
                    fromAmino(_: _94.ModuleAmino): _94.Module;
                    toAmino(_: _94.Module): _94.ModuleAmino;
                    fromAminoMsg(object: _94.ModuleAminoMsg): _94.Module;
                    toAminoMsg(message: _94.Module): _94.ModuleAminoMsg;
                    fromProtoMsg(message: _94.ModuleProtoMsg): _94.Module;
                    toProto(message: _94.Module): Uint8Array;
                    toProtoMsg(message: _94.Module): _94.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _302.MsgClientImpl;
            QueryClientImpl: typeof _283.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _97.QueryAllowanceRequest): Promise<_97.QueryAllowanceResponse>;
                allowances(request: _97.QueryAllowancesRequest): Promise<_97.QueryAllowancesResponse>;
                allowancesByGranter(request: _97.QueryAllowancesByGranterRequest): Promise<_97.QueryAllowancesByGranterResponse>;
            };
            LCDQueryClient: typeof _262.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _98.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _98.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _98.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _98.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _98.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _98.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _98.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _98.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _98.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _98.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _98.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _98.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _98.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _98.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _98.MsgGrantAllowance) => _98.MsgGrantAllowanceAmino;
                    fromAmino: (object: _98.MsgGrantAllowanceAmino) => _98.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _98.MsgRevokeAllowance) => _98.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _98.MsgRevokeAllowanceAmino) => _98.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                typeUrl: string;
                encode(message: _98.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgGrantAllowance;
                fromJSON(object: any): _98.MsgGrantAllowance;
                toJSON(message: _98.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_98.MsgGrantAllowance>): _98.MsgGrantAllowance;
                fromAmino(object: _98.MsgGrantAllowanceAmino): _98.MsgGrantAllowance;
                toAmino(message: _98.MsgGrantAllowance): _98.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _98.MsgGrantAllowanceAminoMsg): _98.MsgGrantAllowance;
                toAminoMsg(message: _98.MsgGrantAllowance): _98.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _98.MsgGrantAllowanceProtoMsg): _98.MsgGrantAllowance;
                toProto(message: _98.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _98.MsgGrantAllowance): _98.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                typeUrl: string;
                encode(_: _98.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgGrantAllowanceResponse;
                fromJSON(_: any): _98.MsgGrantAllowanceResponse;
                toJSON(_: _98.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_98.MsgGrantAllowanceResponse>): _98.MsgGrantAllowanceResponse;
                fromAmino(_: _98.MsgGrantAllowanceResponseAmino): _98.MsgGrantAllowanceResponse;
                toAmino(_: _98.MsgGrantAllowanceResponse): _98.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _98.MsgGrantAllowanceResponseAminoMsg): _98.MsgGrantAllowanceResponse;
                toAminoMsg(message: _98.MsgGrantAllowanceResponse): _98.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _98.MsgGrantAllowanceResponseProtoMsg): _98.MsgGrantAllowanceResponse;
                toProto(message: _98.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _98.MsgGrantAllowanceResponse): _98.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                typeUrl: string;
                encode(message: _98.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgRevokeAllowance;
                fromJSON(object: any): _98.MsgRevokeAllowance;
                toJSON(message: _98.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_98.MsgRevokeAllowance>): _98.MsgRevokeAllowance;
                fromAmino(object: _98.MsgRevokeAllowanceAmino): _98.MsgRevokeAllowance;
                toAmino(message: _98.MsgRevokeAllowance): _98.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _98.MsgRevokeAllowanceAminoMsg): _98.MsgRevokeAllowance;
                toAminoMsg(message: _98.MsgRevokeAllowance): _98.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _98.MsgRevokeAllowanceProtoMsg): _98.MsgRevokeAllowance;
                toProto(message: _98.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _98.MsgRevokeAllowance): _98.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                typeUrl: string;
                encode(_: _98.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _98.MsgRevokeAllowanceResponse;
                toJSON(_: _98.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_98.MsgRevokeAllowanceResponse>): _98.MsgRevokeAllowanceResponse;
                fromAmino(_: _98.MsgRevokeAllowanceResponseAmino): _98.MsgRevokeAllowanceResponse;
                toAmino(_: _98.MsgRevokeAllowanceResponse): _98.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _98.MsgRevokeAllowanceResponseAminoMsg): _98.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _98.MsgRevokeAllowanceResponse): _98.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _98.MsgRevokeAllowanceResponseProtoMsg): _98.MsgRevokeAllowanceResponse;
                toProto(message: _98.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _98.MsgRevokeAllowanceResponse): _98.MsgRevokeAllowanceResponseProtoMsg;
            };
            QueryAllowanceRequest: {
                typeUrl: string;
                encode(message: _97.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllowanceRequest;
                fromJSON(object: any): _97.QueryAllowanceRequest;
                toJSON(message: _97.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_97.QueryAllowanceRequest>): _97.QueryAllowanceRequest;
                fromAmino(object: _97.QueryAllowanceRequestAmino): _97.QueryAllowanceRequest;
                toAmino(message: _97.QueryAllowanceRequest): _97.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _97.QueryAllowanceRequestAminoMsg): _97.QueryAllowanceRequest;
                toAminoMsg(message: _97.QueryAllowanceRequest): _97.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _97.QueryAllowanceRequestProtoMsg): _97.QueryAllowanceRequest;
                toProto(message: _97.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _97.QueryAllowanceRequest): _97.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                typeUrl: string;
                encode(message: _97.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllowanceResponse;
                fromJSON(object: any): _97.QueryAllowanceResponse;
                toJSON(message: _97.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_97.QueryAllowanceResponse>): _97.QueryAllowanceResponse;
                fromAmino(object: _97.QueryAllowanceResponseAmino): _97.QueryAllowanceResponse;
                toAmino(message: _97.QueryAllowanceResponse): _97.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _97.QueryAllowanceResponseAminoMsg): _97.QueryAllowanceResponse;
                toAminoMsg(message: _97.QueryAllowanceResponse): _97.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _97.QueryAllowanceResponseProtoMsg): _97.QueryAllowanceResponse;
                toProto(message: _97.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _97.QueryAllowanceResponse): _97.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                typeUrl: string;
                encode(message: _97.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllowancesRequest;
                fromJSON(object: any): _97.QueryAllowancesRequest;
                toJSON(message: _97.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_97.QueryAllowancesRequest>): _97.QueryAllowancesRequest;
                fromAmino(object: _97.QueryAllowancesRequestAmino): _97.QueryAllowancesRequest;
                toAmino(message: _97.QueryAllowancesRequest): _97.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _97.QueryAllowancesRequestAminoMsg): _97.QueryAllowancesRequest;
                toAminoMsg(message: _97.QueryAllowancesRequest): _97.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _97.QueryAllowancesRequestProtoMsg): _97.QueryAllowancesRequest;
                toProto(message: _97.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _97.QueryAllowancesRequest): _97.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                typeUrl: string;
                encode(message: _97.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllowancesResponse;
                fromJSON(object: any): _97.QueryAllowancesResponse;
                toJSON(message: _97.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_97.QueryAllowancesResponse>): _97.QueryAllowancesResponse;
                fromAmino(object: _97.QueryAllowancesResponseAmino): _97.QueryAllowancesResponse;
                toAmino(message: _97.QueryAllowancesResponse): _97.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _97.QueryAllowancesResponseAminoMsg): _97.QueryAllowancesResponse;
                toAminoMsg(message: _97.QueryAllowancesResponse): _97.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _97.QueryAllowancesResponseProtoMsg): _97.QueryAllowancesResponse;
                toProto(message: _97.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _97.QueryAllowancesResponse): _97.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                typeUrl: string;
                encode(message: _97.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _97.QueryAllowancesByGranterRequest;
                toJSON(message: _97.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_97.QueryAllowancesByGranterRequest>): _97.QueryAllowancesByGranterRequest;
                fromAmino(object: _97.QueryAllowancesByGranterRequestAmino): _97.QueryAllowancesByGranterRequest;
                toAmino(message: _97.QueryAllowancesByGranterRequest): _97.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _97.QueryAllowancesByGranterRequestAminoMsg): _97.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _97.QueryAllowancesByGranterRequest): _97.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _97.QueryAllowancesByGranterRequestProtoMsg): _97.QueryAllowancesByGranterRequest;
                toProto(message: _97.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _97.QueryAllowancesByGranterRequest): _97.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                typeUrl: string;
                encode(message: _97.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _97.QueryAllowancesByGranterResponse;
                toJSON(message: _97.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_97.QueryAllowancesByGranterResponse>): _97.QueryAllowancesByGranterResponse;
                fromAmino(object: _97.QueryAllowancesByGranterResponseAmino): _97.QueryAllowancesByGranterResponse;
                toAmino(message: _97.QueryAllowancesByGranterResponse): _97.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _97.QueryAllowancesByGranterResponseAminoMsg): _97.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _97.QueryAllowancesByGranterResponse): _97.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _97.QueryAllowancesByGranterResponseProtoMsg): _97.QueryAllowancesByGranterResponse;
                toProto(message: _97.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _97.QueryAllowancesByGranterResponse): _97.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _96.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.GenesisState;
                fromJSON(object: any): _96.GenesisState;
                toJSON(message: _96.GenesisState): unknown;
                fromPartial(object: Partial<_96.GenesisState>): _96.GenesisState;
                fromAmino(object: _96.GenesisStateAmino): _96.GenesisState;
                toAmino(message: _96.GenesisState): _96.GenesisStateAmino;
                fromAminoMsg(object: _96.GenesisStateAminoMsg): _96.GenesisState;
                toAminoMsg(message: _96.GenesisState): _96.GenesisStateAminoMsg;
                fromProtoMsg(message: _96.GenesisStateProtoMsg): _96.GenesisState;
                toProto(message: _96.GenesisState): Uint8Array;
                toProtoMsg(message: _96.GenesisState): _96.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                typeUrl: string;
                encode(message: _95.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.BasicAllowance;
                fromJSON(object: any): _95.BasicAllowance;
                toJSON(message: _95.BasicAllowance): unknown;
                fromPartial(object: Partial<_95.BasicAllowance>): _95.BasicAllowance;
                fromAmino(object: _95.BasicAllowanceAmino): _95.BasicAllowance;
                toAmino(message: _95.BasicAllowance): _95.BasicAllowanceAmino;
                fromAminoMsg(object: _95.BasicAllowanceAminoMsg): _95.BasicAllowance;
                toAminoMsg(message: _95.BasicAllowance): _95.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _95.BasicAllowanceProtoMsg): _95.BasicAllowance;
                toProto(message: _95.BasicAllowance): Uint8Array;
                toProtoMsg(message: _95.BasicAllowance): _95.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                typeUrl: string;
                encode(message: _95.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.PeriodicAllowance;
                fromJSON(object: any): _95.PeriodicAllowance;
                toJSON(message: _95.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_95.PeriodicAllowance>): _95.PeriodicAllowance;
                fromAmino(object: _95.PeriodicAllowanceAmino): _95.PeriodicAllowance;
                toAmino(message: _95.PeriodicAllowance): _95.PeriodicAllowanceAmino;
                fromAminoMsg(object: _95.PeriodicAllowanceAminoMsg): _95.PeriodicAllowance;
                toAminoMsg(message: _95.PeriodicAllowance): _95.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _95.PeriodicAllowanceProtoMsg): _95.PeriodicAllowance;
                toProto(message: _95.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _95.PeriodicAllowance): _95.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                typeUrl: string;
                encode(message: _95.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AllowedMsgAllowance;
                fromJSON(object: any): _95.AllowedMsgAllowance;
                toJSON(message: _95.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_95.AllowedMsgAllowance>): _95.AllowedMsgAllowance;
                fromAmino(object: _95.AllowedMsgAllowanceAmino): _95.AllowedMsgAllowance;
                toAmino(message: _95.AllowedMsgAllowance): _95.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _95.AllowedMsgAllowanceAminoMsg): _95.AllowedMsgAllowance;
                toAminoMsg(message: _95.AllowedMsgAllowance): _95.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _95.AllowedMsgAllowanceProtoMsg): _95.AllowedMsgAllowance;
                toProto(message: _95.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _95.AllowedMsgAllowance): _95.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                typeUrl: string;
                encode(message: _95.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.Grant;
                fromJSON(object: any): _95.Grant;
                toJSON(message: _95.Grant): unknown;
                fromPartial(object: Partial<_95.Grant>): _95.Grant;
                fromAmino(object: _95.GrantAmino): _95.Grant;
                toAmino(message: _95.Grant): _95.GrantAmino;
                fromAminoMsg(object: _95.GrantAminoMsg): _95.Grant;
                toAminoMsg(message: _95.Grant): _95.GrantAminoMsg;
                fromProtoMsg(message: _95.GrantProtoMsg): _95.Grant;
                toProto(message: _95.Grant): Uint8Array;
                toProtoMsg(message: _95.Grant): _95.GrantProtoMsg;
            };
            AllowedContractAllowance: {
                typeUrl: string;
                encode(message: _95.AllowedContractAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.AllowedContractAllowance;
                fromJSON(object: any): _95.AllowedContractAllowance;
                toJSON(message: _95.AllowedContractAllowance): unknown;
                fromPartial(object: Partial<_95.AllowedContractAllowance>): _95.AllowedContractAllowance;
                fromAmino(object: _95.AllowedContractAllowanceAmino): _95.AllowedContractAllowance;
                toAmino(message: _95.AllowedContractAllowance): _95.AllowedContractAllowanceAmino;
                fromAminoMsg(object: _95.AllowedContractAllowanceAminoMsg): _95.AllowedContractAllowance;
                toAminoMsg(message: _95.AllowedContractAllowance): _95.AllowedContractAllowanceAminoMsg;
                fromProtoMsg(message: _95.AllowedContractAllowanceProtoMsg): _95.AllowedContractAllowance;
                toProto(message: _95.AllowedContractAllowance): Uint8Array;
                toProtoMsg(message: _95.AllowedContractAllowance): _95.AllowedContractAllowanceProtoMsg;
            };
        };
    }
    namespace genutil {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _99.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Module;
                    fromJSON(_: any): _99.Module;
                    toJSON(_: _99.Module): unknown;
                    fromPartial(_: Partial<_99.Module>): _99.Module;
                    fromAmino(_: _99.ModuleAmino): _99.Module;
                    toAmino(_: _99.Module): _99.ModuleAmino;
                    fromAminoMsg(object: _99.ModuleAminoMsg): _99.Module;
                    toAminoMsg(message: _99.Module): _99.ModuleAminoMsg;
                    fromProtoMsg(message: _99.ModuleProtoMsg): _99.Module;
                    toProto(message: _99.Module): Uint8Array;
                    toProtoMsg(message: _99.Module): _99.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            GenesisState: {
                typeUrl: string;
                encode(message: _100.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.GenesisState;
                fromJSON(object: any): _100.GenesisState;
                toJSON(message: _100.GenesisState): unknown;
                fromPartial(object: Partial<_100.GenesisState>): _100.GenesisState;
                fromAmino(object: _100.GenesisStateAmino): _100.GenesisState;
                toAmino(message: _100.GenesisState): _100.GenesisStateAmino;
                fromAminoMsg(object: _100.GenesisStateAminoMsg): _100.GenesisState;
                toAminoMsg(message: _100.GenesisState): _100.GenesisStateAminoMsg;
                fromProtoMsg(message: _100.GenesisStateProtoMsg): _100.GenesisState;
                toProto(message: _100.GenesisState): Uint8Array;
                toProtoMsg(message: _100.GenesisState): _100.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _101.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.Module;
                    fromJSON(object: any): _101.Module;
                    toJSON(message: _101.Module): unknown;
                    fromPartial(object: Partial<_101.Module>): _101.Module;
                    fromAmino(object: _101.ModuleAmino): _101.Module;
                    toAmino(message: _101.Module): _101.ModuleAmino;
                    fromAminoMsg(object: _101.ModuleAminoMsg): _101.Module;
                    toAminoMsg(message: _101.Module): _101.ModuleAminoMsg;
                    fromProtoMsg(message: _101.ModuleProtoMsg): _101.Module;
                    toProto(message: _101.Module): Uint8Array;
                    toProtoMsg(message: _101.Module): _101.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _303.MsgClientImpl;
            QueryClientImpl: typeof _284.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _104.QueryProposalRequest): Promise<_104.QueryProposalResponse>;
                proposals(request: _104.QueryProposalsRequest): Promise<_104.QueryProposalsResponse>;
                vote(request: _104.QueryVoteRequest): Promise<_104.QueryVoteResponse>;
                votes(request: _104.QueryVotesRequest): Promise<_104.QueryVotesResponse>;
                params(request: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                deposit(request: _104.QueryDepositRequest): Promise<_104.QueryDepositResponse>;
                deposits(request: _104.QueryDepositsRequest): Promise<_104.QueryDepositsResponse>;
                tallyResult(request: _104.QueryTallyResultRequest): Promise<_104.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _263.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _105.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _105.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _105.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _105.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _105.MsgExecLegacyContent;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    voteWeighted(value: _105.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _105.MsgVoteWeighted;
                    };
                    deposit(value: _105.MsgDeposit): {
                        typeUrl: string;
                        value: _105.MsgDeposit;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: _105.MsgUpdateParams;
                    };
                };
                toJSON: {
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _105.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _105.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _105.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _105.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _105.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _105.MsgDeposit;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _105.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    submitProposal(value: _105.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _105.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _105.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _105.MsgExecLegacyContent;
                    };
                    vote(value: _105.MsgVote): {
                        typeUrl: string;
                        value: _105.MsgVote;
                    };
                    voteWeighted(value: _105.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _105.MsgVoteWeighted;
                    };
                    deposit(value: _105.MsgDeposit): {
                        typeUrl: string;
                        value: _105.MsgDeposit;
                    };
                    updateParams(value: _105.MsgUpdateParams): {
                        typeUrl: string;
                        value: _105.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _105.MsgSubmitProposal) => _105.MsgSubmitProposalAmino;
                    fromAmino: (object: _105.MsgSubmitProposalAmino) => _105.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _105.MsgExecLegacyContent) => _105.MsgExecLegacyContentAmino;
                    fromAmino: (object: _105.MsgExecLegacyContentAmino) => _105.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _105.MsgVote) => _105.MsgVoteAmino;
                    fromAmino: (object: _105.MsgVoteAmino) => _105.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _105.MsgVoteWeighted) => _105.MsgVoteWeightedAmino;
                    fromAmino: (object: _105.MsgVoteWeightedAmino) => _105.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _105.MsgDeposit) => _105.MsgDepositAmino;
                    fromAmino: (object: _105.MsgDepositAmino) => _105.MsgDeposit;
                };
                "/cosmos.gov.v1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _105.MsgUpdateParams) => _105.MsgUpdateParamsAmino;
                    fromAmino: (object: _105.MsgUpdateParamsAmino) => _105.MsgUpdateParams;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _105.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgSubmitProposal;
                fromJSON(object: any): _105.MsgSubmitProposal;
                toJSON(message: _105.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_105.MsgSubmitProposal>): _105.MsgSubmitProposal;
                fromAmino(object: _105.MsgSubmitProposalAmino): _105.MsgSubmitProposal;
                toAmino(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalAmino;
                fromAminoMsg(object: _105.MsgSubmitProposalAminoMsg): _105.MsgSubmitProposal;
                toAminoMsg(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _105.MsgSubmitProposalProtoMsg): _105.MsgSubmitProposal;
                toProto(message: _105.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _105.MsgSubmitProposal): _105.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _105.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgSubmitProposalResponse;
                fromJSON(object: any): _105.MsgSubmitProposalResponse;
                toJSON(message: _105.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_105.MsgSubmitProposalResponse>): _105.MsgSubmitProposalResponse;
                fromAmino(object: _105.MsgSubmitProposalResponseAmino): _105.MsgSubmitProposalResponse;
                toAmino(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _105.MsgSubmitProposalResponseAminoMsg): _105.MsgSubmitProposalResponse;
                toAminoMsg(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _105.MsgSubmitProposalResponseProtoMsg): _105.MsgSubmitProposalResponse;
                toProto(message: _105.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _105.MsgSubmitProposalResponse): _105.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                typeUrl: string;
                encode(message: _105.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgExecLegacyContent;
                fromJSON(object: any): _105.MsgExecLegacyContent;
                toJSON(message: _105.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_105.MsgExecLegacyContent>): _105.MsgExecLegacyContent;
                fromAmino(object: _105.MsgExecLegacyContentAmino): _105.MsgExecLegacyContent;
                toAmino(message: _105.MsgExecLegacyContent): _105.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _105.MsgExecLegacyContentAminoMsg): _105.MsgExecLegacyContent;
                toAminoMsg(message: _105.MsgExecLegacyContent): _105.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _105.MsgExecLegacyContentProtoMsg): _105.MsgExecLegacyContent;
                toProto(message: _105.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _105.MsgExecLegacyContent): _105.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                typeUrl: string;
                encode(_: _105.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgExecLegacyContentResponse;
                fromJSON(_: any): _105.MsgExecLegacyContentResponse;
                toJSON(_: _105.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_105.MsgExecLegacyContentResponse>): _105.MsgExecLegacyContentResponse;
                fromAmino(_: _105.MsgExecLegacyContentResponseAmino): _105.MsgExecLegacyContentResponse;
                toAmino(_: _105.MsgExecLegacyContentResponse): _105.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _105.MsgExecLegacyContentResponseAminoMsg): _105.MsgExecLegacyContentResponse;
                toAminoMsg(message: _105.MsgExecLegacyContentResponse): _105.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _105.MsgExecLegacyContentResponseProtoMsg): _105.MsgExecLegacyContentResponse;
                toProto(message: _105.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _105.MsgExecLegacyContentResponse): _105.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _105.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgVote;
                fromJSON(object: any): _105.MsgVote;
                toJSON(message: _105.MsgVote): unknown;
                fromPartial(object: Partial<_105.MsgVote>): _105.MsgVote;
                fromAmino(object: _105.MsgVoteAmino): _105.MsgVote;
                toAmino(message: _105.MsgVote): _105.MsgVoteAmino;
                fromAminoMsg(object: _105.MsgVoteAminoMsg): _105.MsgVote;
                toAminoMsg(message: _105.MsgVote): _105.MsgVoteAminoMsg;
                fromProtoMsg(message: _105.MsgVoteProtoMsg): _105.MsgVote;
                toProto(message: _105.MsgVote): Uint8Array;
                toProtoMsg(message: _105.MsgVote): _105.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _105.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgVoteResponse;
                fromJSON(_: any): _105.MsgVoteResponse;
                toJSON(_: _105.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_105.MsgVoteResponse>): _105.MsgVoteResponse;
                fromAmino(_: _105.MsgVoteResponseAmino): _105.MsgVoteResponse;
                toAmino(_: _105.MsgVoteResponse): _105.MsgVoteResponseAmino;
                fromAminoMsg(object: _105.MsgVoteResponseAminoMsg): _105.MsgVoteResponse;
                toAminoMsg(message: _105.MsgVoteResponse): _105.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _105.MsgVoteResponseProtoMsg): _105.MsgVoteResponse;
                toProto(message: _105.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _105.MsgVoteResponse): _105.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _105.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgVoteWeighted;
                fromJSON(object: any): _105.MsgVoteWeighted;
                toJSON(message: _105.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_105.MsgVoteWeighted>): _105.MsgVoteWeighted;
                fromAmino(object: _105.MsgVoteWeightedAmino): _105.MsgVoteWeighted;
                toAmino(message: _105.MsgVoteWeighted): _105.MsgVoteWeightedAmino;
                fromAminoMsg(object: _105.MsgVoteWeightedAminoMsg): _105.MsgVoteWeighted;
                toAminoMsg(message: _105.MsgVoteWeighted): _105.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _105.MsgVoteWeightedProtoMsg): _105.MsgVoteWeighted;
                toProto(message: _105.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _105.MsgVoteWeighted): _105.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _105.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgVoteWeightedResponse;
                fromJSON(_: any): _105.MsgVoteWeightedResponse;
                toJSON(_: _105.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_105.MsgVoteWeightedResponse>): _105.MsgVoteWeightedResponse;
                fromAmino(_: _105.MsgVoteWeightedResponseAmino): _105.MsgVoteWeightedResponse;
                toAmino(_: _105.MsgVoteWeightedResponse): _105.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _105.MsgVoteWeightedResponseAminoMsg): _105.MsgVoteWeightedResponse;
                toAminoMsg(message: _105.MsgVoteWeightedResponse): _105.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _105.MsgVoteWeightedResponseProtoMsg): _105.MsgVoteWeightedResponse;
                toProto(message: _105.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _105.MsgVoteWeightedResponse): _105.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _105.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgDeposit;
                fromJSON(object: any): _105.MsgDeposit;
                toJSON(message: _105.MsgDeposit): unknown;
                fromPartial(object: Partial<_105.MsgDeposit>): _105.MsgDeposit;
                fromAmino(object: _105.MsgDepositAmino): _105.MsgDeposit;
                toAmino(message: _105.MsgDeposit): _105.MsgDepositAmino;
                fromAminoMsg(object: _105.MsgDepositAminoMsg): _105.MsgDeposit;
                toAminoMsg(message: _105.MsgDeposit): _105.MsgDepositAminoMsg;
                fromProtoMsg(message: _105.MsgDepositProtoMsg): _105.MsgDeposit;
                toProto(message: _105.MsgDeposit): Uint8Array;
                toProtoMsg(message: _105.MsgDeposit): _105.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _105.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgDepositResponse;
                fromJSON(_: any): _105.MsgDepositResponse;
                toJSON(_: _105.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_105.MsgDepositResponse>): _105.MsgDepositResponse;
                fromAmino(_: _105.MsgDepositResponseAmino): _105.MsgDepositResponse;
                toAmino(_: _105.MsgDepositResponse): _105.MsgDepositResponseAmino;
                fromAminoMsg(object: _105.MsgDepositResponseAminoMsg): _105.MsgDepositResponse;
                toAminoMsg(message: _105.MsgDepositResponse): _105.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _105.MsgDepositResponseProtoMsg): _105.MsgDepositResponse;
                toProto(message: _105.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _105.MsgDepositResponse): _105.MsgDepositResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _105.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUpdateParams;
                fromJSON(object: any): _105.MsgUpdateParams;
                toJSON(message: _105.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_105.MsgUpdateParams>): _105.MsgUpdateParams;
                fromAmino(object: _105.MsgUpdateParamsAmino): _105.MsgUpdateParams;
                toAmino(message: _105.MsgUpdateParams): _105.MsgUpdateParamsAmino;
                fromAminoMsg(object: _105.MsgUpdateParamsAminoMsg): _105.MsgUpdateParams;
                toAminoMsg(message: _105.MsgUpdateParams): _105.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateParamsProtoMsg): _105.MsgUpdateParams;
                toProto(message: _105.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateParams): _105.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _105.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.MsgUpdateParamsResponse;
                fromJSON(_: any): _105.MsgUpdateParamsResponse;
                toJSON(_: _105.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_105.MsgUpdateParamsResponse>): _105.MsgUpdateParamsResponse;
                fromAmino(_: _105.MsgUpdateParamsResponseAmino): _105.MsgUpdateParamsResponse;
                toAmino(_: _105.MsgUpdateParamsResponse): _105.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _105.MsgUpdateParamsResponseAminoMsg): _105.MsgUpdateParamsResponse;
                toAminoMsg(message: _105.MsgUpdateParamsResponse): _105.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _105.MsgUpdateParamsResponseProtoMsg): _105.MsgUpdateParamsResponse;
                toProto(message: _105.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _105.MsgUpdateParamsResponse): _105.MsgUpdateParamsResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _104.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryProposalRequest;
                fromJSON(object: any): _104.QueryProposalRequest;
                toJSON(message: _104.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_104.QueryProposalRequest>): _104.QueryProposalRequest;
                fromAmino(object: _104.QueryProposalRequestAmino): _104.QueryProposalRequest;
                toAmino(message: _104.QueryProposalRequest): _104.QueryProposalRequestAmino;
                fromAminoMsg(object: _104.QueryProposalRequestAminoMsg): _104.QueryProposalRequest;
                toAminoMsg(message: _104.QueryProposalRequest): _104.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _104.QueryProposalRequestProtoMsg): _104.QueryProposalRequest;
                toProto(message: _104.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _104.QueryProposalRequest): _104.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _104.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryProposalResponse;
                fromJSON(object: any): _104.QueryProposalResponse;
                toJSON(message: _104.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_104.QueryProposalResponse>): _104.QueryProposalResponse;
                fromAmino(object: _104.QueryProposalResponseAmino): _104.QueryProposalResponse;
                toAmino(message: _104.QueryProposalResponse): _104.QueryProposalResponseAmino;
                fromAminoMsg(object: _104.QueryProposalResponseAminoMsg): _104.QueryProposalResponse;
                toAminoMsg(message: _104.QueryProposalResponse): _104.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _104.QueryProposalResponseProtoMsg): _104.QueryProposalResponse;
                toProto(message: _104.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _104.QueryProposalResponse): _104.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _104.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryProposalsRequest;
                fromJSON(object: any): _104.QueryProposalsRequest;
                toJSON(message: _104.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_104.QueryProposalsRequest>): _104.QueryProposalsRequest;
                fromAmino(object: _104.QueryProposalsRequestAmino): _104.QueryProposalsRequest;
                toAmino(message: _104.QueryProposalsRequest): _104.QueryProposalsRequestAmino;
                fromAminoMsg(object: _104.QueryProposalsRequestAminoMsg): _104.QueryProposalsRequest;
                toAminoMsg(message: _104.QueryProposalsRequest): _104.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryProposalsRequestProtoMsg): _104.QueryProposalsRequest;
                toProto(message: _104.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryProposalsRequest): _104.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _104.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryProposalsResponse;
                fromJSON(object: any): _104.QueryProposalsResponse;
                toJSON(message: _104.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_104.QueryProposalsResponse>): _104.QueryProposalsResponse;
                fromAmino(object: _104.QueryProposalsResponseAmino): _104.QueryProposalsResponse;
                toAmino(message: _104.QueryProposalsResponse): _104.QueryProposalsResponseAmino;
                fromAminoMsg(object: _104.QueryProposalsResponseAminoMsg): _104.QueryProposalsResponse;
                toAminoMsg(message: _104.QueryProposalsResponse): _104.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryProposalsResponseProtoMsg): _104.QueryProposalsResponse;
                toProto(message: _104.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryProposalsResponse): _104.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _104.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryVoteRequest;
                fromJSON(object: any): _104.QueryVoteRequest;
                toJSON(message: _104.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_104.QueryVoteRequest>): _104.QueryVoteRequest;
                fromAmino(object: _104.QueryVoteRequestAmino): _104.QueryVoteRequest;
                toAmino(message: _104.QueryVoteRequest): _104.QueryVoteRequestAmino;
                fromAminoMsg(object: _104.QueryVoteRequestAminoMsg): _104.QueryVoteRequest;
                toAminoMsg(message: _104.QueryVoteRequest): _104.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _104.QueryVoteRequestProtoMsg): _104.QueryVoteRequest;
                toProto(message: _104.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _104.QueryVoteRequest): _104.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _104.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryVoteResponse;
                fromJSON(object: any): _104.QueryVoteResponse;
                toJSON(message: _104.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_104.QueryVoteResponse>): _104.QueryVoteResponse;
                fromAmino(object: _104.QueryVoteResponseAmino): _104.QueryVoteResponse;
                toAmino(message: _104.QueryVoteResponse): _104.QueryVoteResponseAmino;
                fromAminoMsg(object: _104.QueryVoteResponseAminoMsg): _104.QueryVoteResponse;
                toAminoMsg(message: _104.QueryVoteResponse): _104.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _104.QueryVoteResponseProtoMsg): _104.QueryVoteResponse;
                toProto(message: _104.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _104.QueryVoteResponse): _104.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _104.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryVotesRequest;
                fromJSON(object: any): _104.QueryVotesRequest;
                toJSON(message: _104.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_104.QueryVotesRequest>): _104.QueryVotesRequest;
                fromAmino(object: _104.QueryVotesRequestAmino): _104.QueryVotesRequest;
                toAmino(message: _104.QueryVotesRequest): _104.QueryVotesRequestAmino;
                fromAminoMsg(object: _104.QueryVotesRequestAminoMsg): _104.QueryVotesRequest;
                toAminoMsg(message: _104.QueryVotesRequest): _104.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _104.QueryVotesRequestProtoMsg): _104.QueryVotesRequest;
                toProto(message: _104.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _104.QueryVotesRequest): _104.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _104.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryVotesResponse;
                fromJSON(object: any): _104.QueryVotesResponse;
                toJSON(message: _104.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_104.QueryVotesResponse>): _104.QueryVotesResponse;
                fromAmino(object: _104.QueryVotesResponseAmino): _104.QueryVotesResponse;
                toAmino(message: _104.QueryVotesResponse): _104.QueryVotesResponseAmino;
                fromAminoMsg(object: _104.QueryVotesResponseAminoMsg): _104.QueryVotesResponse;
                toAminoMsg(message: _104.QueryVotesResponse): _104.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _104.QueryVotesResponseProtoMsg): _104.QueryVotesResponse;
                toProto(message: _104.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _104.QueryVotesResponse): _104.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _104.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryParamsRequest;
                fromJSON(object: any): _104.QueryParamsRequest;
                toJSON(message: _104.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_104.QueryParamsRequest>): _104.QueryParamsRequest;
                fromAmino(object: _104.QueryParamsRequestAmino): _104.QueryParamsRequest;
                toAmino(message: _104.QueryParamsRequest): _104.QueryParamsRequestAmino;
                fromAminoMsg(object: _104.QueryParamsRequestAminoMsg): _104.QueryParamsRequest;
                toAminoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryParamsRequestProtoMsg): _104.QueryParamsRequest;
                toProto(message: _104.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryParamsRequest): _104.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _104.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryParamsResponse;
                fromJSON(object: any): _104.QueryParamsResponse;
                toJSON(message: _104.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_104.QueryParamsResponse>): _104.QueryParamsResponse;
                fromAmino(object: _104.QueryParamsResponseAmino): _104.QueryParamsResponse;
                toAmino(message: _104.QueryParamsResponse): _104.QueryParamsResponseAmino;
                fromAminoMsg(object: _104.QueryParamsResponseAminoMsg): _104.QueryParamsResponse;
                toAminoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryParamsResponseProtoMsg): _104.QueryParamsResponse;
                toProto(message: _104.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryParamsResponse): _104.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _104.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryDepositRequest;
                fromJSON(object: any): _104.QueryDepositRequest;
                toJSON(message: _104.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_104.QueryDepositRequest>): _104.QueryDepositRequest;
                fromAmino(object: _104.QueryDepositRequestAmino): _104.QueryDepositRequest;
                toAmino(message: _104.QueryDepositRequest): _104.QueryDepositRequestAmino;
                fromAminoMsg(object: _104.QueryDepositRequestAminoMsg): _104.QueryDepositRequest;
                toAminoMsg(message: _104.QueryDepositRequest): _104.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _104.QueryDepositRequestProtoMsg): _104.QueryDepositRequest;
                toProto(message: _104.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _104.QueryDepositRequest): _104.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _104.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryDepositResponse;
                fromJSON(object: any): _104.QueryDepositResponse;
                toJSON(message: _104.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_104.QueryDepositResponse>): _104.QueryDepositResponse;
                fromAmino(object: _104.QueryDepositResponseAmino): _104.QueryDepositResponse;
                toAmino(message: _104.QueryDepositResponse): _104.QueryDepositResponseAmino;
                fromAminoMsg(object: _104.QueryDepositResponseAminoMsg): _104.QueryDepositResponse;
                toAminoMsg(message: _104.QueryDepositResponse): _104.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _104.QueryDepositResponseProtoMsg): _104.QueryDepositResponse;
                toProto(message: _104.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _104.QueryDepositResponse): _104.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _104.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryDepositsRequest;
                fromJSON(object: any): _104.QueryDepositsRequest;
                toJSON(message: _104.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_104.QueryDepositsRequest>): _104.QueryDepositsRequest;
                fromAmino(object: _104.QueryDepositsRequestAmino): _104.QueryDepositsRequest;
                toAmino(message: _104.QueryDepositsRequest): _104.QueryDepositsRequestAmino;
                fromAminoMsg(object: _104.QueryDepositsRequestAminoMsg): _104.QueryDepositsRequest;
                toAminoMsg(message: _104.QueryDepositsRequest): _104.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _104.QueryDepositsRequestProtoMsg): _104.QueryDepositsRequest;
                toProto(message: _104.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _104.QueryDepositsRequest): _104.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _104.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryDepositsResponse;
                fromJSON(object: any): _104.QueryDepositsResponse;
                toJSON(message: _104.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_104.QueryDepositsResponse>): _104.QueryDepositsResponse;
                fromAmino(object: _104.QueryDepositsResponseAmino): _104.QueryDepositsResponse;
                toAmino(message: _104.QueryDepositsResponse): _104.QueryDepositsResponseAmino;
                fromAminoMsg(object: _104.QueryDepositsResponseAminoMsg): _104.QueryDepositsResponse;
                toAminoMsg(message: _104.QueryDepositsResponse): _104.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _104.QueryDepositsResponseProtoMsg): _104.QueryDepositsResponse;
                toProto(message: _104.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _104.QueryDepositsResponse): _104.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _104.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryTallyResultRequest;
                fromJSON(object: any): _104.QueryTallyResultRequest;
                toJSON(message: _104.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_104.QueryTallyResultRequest>): _104.QueryTallyResultRequest;
                fromAmino(object: _104.QueryTallyResultRequestAmino): _104.QueryTallyResultRequest;
                toAmino(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _104.QueryTallyResultRequestAminoMsg): _104.QueryTallyResultRequest;
                toAminoMsg(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _104.QueryTallyResultRequestProtoMsg): _104.QueryTallyResultRequest;
                toProto(message: _104.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _104.QueryTallyResultRequest): _104.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _104.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryTallyResultResponse;
                fromJSON(object: any): _104.QueryTallyResultResponse;
                toJSON(message: _104.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_104.QueryTallyResultResponse>): _104.QueryTallyResultResponse;
                fromAmino(object: _104.QueryTallyResultResponseAmino): _104.QueryTallyResultResponse;
                toAmino(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _104.QueryTallyResultResponseAminoMsg): _104.QueryTallyResultResponse;
                toAminoMsg(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _104.QueryTallyResultResponseProtoMsg): _104.QueryTallyResultResponse;
                toProto(message: _104.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _104.QueryTallyResultResponse): _104.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _103.VoteOption;
            voteOptionToJSON(object: _103.VoteOption): string;
            proposalStatusFromJSON(object: any): _103.ProposalStatus;
            proposalStatusToJSON(object: _103.ProposalStatus): string;
            VoteOption: typeof _103.VoteOption;
            VoteOptionSDKType: typeof _103.VoteOption;
            VoteOptionAmino: typeof _103.VoteOption;
            ProposalStatus: typeof _103.ProposalStatus;
            ProposalStatusSDKType: typeof _103.ProposalStatus;
            ProposalStatusAmino: typeof _103.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _103.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.WeightedVoteOption;
                fromJSON(object: any): _103.WeightedVoteOption;
                toJSON(message: _103.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_103.WeightedVoteOption>): _103.WeightedVoteOption;
                fromAmino(object: _103.WeightedVoteOptionAmino): _103.WeightedVoteOption;
                toAmino(message: _103.WeightedVoteOption): _103.WeightedVoteOptionAmino;
                fromAminoMsg(object: _103.WeightedVoteOptionAminoMsg): _103.WeightedVoteOption;
                toAminoMsg(message: _103.WeightedVoteOption): _103.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _103.WeightedVoteOptionProtoMsg): _103.WeightedVoteOption;
                toProto(message: _103.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _103.WeightedVoteOption): _103.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _103.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Deposit;
                fromJSON(object: any): _103.Deposit;
                toJSON(message: _103.Deposit): unknown;
                fromPartial(object: Partial<_103.Deposit>): _103.Deposit;
                fromAmino(object: _103.DepositAmino): _103.Deposit;
                toAmino(message: _103.Deposit): _103.DepositAmino;
                fromAminoMsg(object: _103.DepositAminoMsg): _103.Deposit;
                toAminoMsg(message: _103.Deposit): _103.DepositAminoMsg;
                fromProtoMsg(message: _103.DepositProtoMsg): _103.Deposit;
                toProto(message: _103.Deposit): Uint8Array;
                toProtoMsg(message: _103.Deposit): _103.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _103.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Proposal;
                fromJSON(object: any): _103.Proposal;
                toJSON(message: _103.Proposal): unknown;
                fromPartial(object: Partial<_103.Proposal>): _103.Proposal;
                fromAmino(object: _103.ProposalAmino): _103.Proposal;
                toAmino(message: _103.Proposal): _103.ProposalAmino;
                fromAminoMsg(object: _103.ProposalAminoMsg): _103.Proposal;
                toAminoMsg(message: _103.Proposal): _103.ProposalAminoMsg;
                fromProtoMsg(message: _103.ProposalProtoMsg): _103.Proposal;
                toProto(message: _103.Proposal): Uint8Array;
                toProtoMsg(message: _103.Proposal): _103.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _103.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.TallyResult;
                fromJSON(object: any): _103.TallyResult;
                toJSON(message: _103.TallyResult): unknown;
                fromPartial(object: Partial<_103.TallyResult>): _103.TallyResult;
                fromAmino(object: _103.TallyResultAmino): _103.TallyResult;
                toAmino(message: _103.TallyResult): _103.TallyResultAmino;
                fromAminoMsg(object: _103.TallyResultAminoMsg): _103.TallyResult;
                toAminoMsg(message: _103.TallyResult): _103.TallyResultAminoMsg;
                fromProtoMsg(message: _103.TallyResultProtoMsg): _103.TallyResult;
                toProto(message: _103.TallyResult): Uint8Array;
                toProtoMsg(message: _103.TallyResult): _103.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _103.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Vote;
                fromJSON(object: any): _103.Vote;
                toJSON(message: _103.Vote): unknown;
                fromPartial(object: Partial<_103.Vote>): _103.Vote;
                fromAmino(object: _103.VoteAmino): _103.Vote;
                toAmino(message: _103.Vote): _103.VoteAmino;
                fromAminoMsg(object: _103.VoteAminoMsg): _103.Vote;
                toAminoMsg(message: _103.Vote): _103.VoteAminoMsg;
                fromProtoMsg(message: _103.VoteProtoMsg): _103.Vote;
                toProto(message: _103.Vote): Uint8Array;
                toProtoMsg(message: _103.Vote): _103.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _103.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.DepositParams;
                fromJSON(object: any): _103.DepositParams;
                toJSON(message: _103.DepositParams): unknown;
                fromPartial(object: Partial<_103.DepositParams>): _103.DepositParams;
                fromAmino(object: _103.DepositParamsAmino): _103.DepositParams;
                toAmino(message: _103.DepositParams): _103.DepositParamsAmino;
                fromAminoMsg(object: _103.DepositParamsAminoMsg): _103.DepositParams;
                toAminoMsg(message: _103.DepositParams): _103.DepositParamsAminoMsg;
                fromProtoMsg(message: _103.DepositParamsProtoMsg): _103.DepositParams;
                toProto(message: _103.DepositParams): Uint8Array;
                toProtoMsg(message: _103.DepositParams): _103.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _103.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.VotingParams;
                fromJSON(object: any): _103.VotingParams;
                toJSON(message: _103.VotingParams): unknown;
                fromPartial(object: Partial<_103.VotingParams>): _103.VotingParams;
                fromAmino(object: _103.VotingParamsAmino): _103.VotingParams;
                toAmino(message: _103.VotingParams): _103.VotingParamsAmino;
                fromAminoMsg(object: _103.VotingParamsAminoMsg): _103.VotingParams;
                toAminoMsg(message: _103.VotingParams): _103.VotingParamsAminoMsg;
                fromProtoMsg(message: _103.VotingParamsProtoMsg): _103.VotingParams;
                toProto(message: _103.VotingParams): Uint8Array;
                toProtoMsg(message: _103.VotingParams): _103.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _103.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.TallyParams;
                fromJSON(object: any): _103.TallyParams;
                toJSON(message: _103.TallyParams): unknown;
                fromPartial(object: Partial<_103.TallyParams>): _103.TallyParams;
                fromAmino(object: _103.TallyParamsAmino): _103.TallyParams;
                toAmino(message: _103.TallyParams): _103.TallyParamsAmino;
                fromAminoMsg(object: _103.TallyParamsAminoMsg): _103.TallyParams;
                toAminoMsg(message: _103.TallyParams): _103.TallyParamsAminoMsg;
                fromProtoMsg(message: _103.TallyParamsProtoMsg): _103.TallyParams;
                toProto(message: _103.TallyParams): Uint8Array;
                toProtoMsg(message: _103.TallyParams): _103.TallyParamsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _103.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Params;
                fromJSON(object: any): _103.Params;
                toJSON(message: _103.Params): unknown;
                fromPartial(object: Partial<_103.Params>): _103.Params;
                fromAmino(object: _103.ParamsAmino): _103.Params;
                toAmino(message: _103.Params): _103.ParamsAmino;
                fromAminoMsg(object: _103.ParamsAminoMsg): _103.Params;
                toAminoMsg(message: _103.Params): _103.ParamsAminoMsg;
                fromProtoMsg(message: _103.ParamsProtoMsg): _103.Params;
                toProto(message: _103.Params): Uint8Array;
                toProtoMsg(message: _103.Params): _103.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _102.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.GenesisState;
                fromJSON(object: any): _102.GenesisState;
                toJSON(message: _102.GenesisState): unknown;
                fromPartial(object: Partial<_102.GenesisState>): _102.GenesisState;
                fromAmino(object: _102.GenesisStateAmino): _102.GenesisState;
                toAmino(message: _102.GenesisState): _102.GenesisStateAmino;
                fromAminoMsg(object: _102.GenesisStateAminoMsg): _102.GenesisState;
                toAminoMsg(message: _102.GenesisState): _102.GenesisStateAminoMsg;
                fromProtoMsg(message: _102.GenesisStateProtoMsg): _102.GenesisState;
                toProto(message: _102.GenesisState): Uint8Array;
                toProtoMsg(message: _102.GenesisState): _102.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _304.MsgClientImpl;
            QueryClientImpl: typeof _285.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _108.QueryProposalRequest): Promise<_108.QueryProposalResponse>;
                proposals(request: _108.QueryProposalsRequest): Promise<_108.QueryProposalsResponse>;
                vote(request: _108.QueryVoteRequest): Promise<_108.QueryVoteResponse>;
                votes(request: _108.QueryVotesRequest): Promise<_108.QueryVotesResponse>;
                params(request: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                deposit(request: _108.QueryDepositRequest): Promise<_108.QueryDepositResponse>;
                deposits(request: _108.QueryDepositsRequest): Promise<_108.QueryDepositsResponse>;
                tallyResult(request: _108.QueryTallyResultRequest): Promise<_108.QueryTallyResultResponse>;
            };
            LCDQueryClient: typeof _264.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _109.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _109.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _109.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _109.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _109.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _109.MsgSubmitProposal;
                    };
                    vote(value: _109.MsgVote): {
                        typeUrl: string;
                        value: _109.MsgVote;
                    };
                    voteWeighted(value: _109.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _109.MsgVoteWeighted;
                    };
                    deposit(value: _109.MsgDeposit): {
                        typeUrl: string;
                        value: _109.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _109.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _109.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _109.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _109.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _109.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _109.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _109.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _109.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _109.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _109.MsgSubmitProposal;
                    };
                    vote(value: _109.MsgVote): {
                        typeUrl: string;
                        value: _109.MsgVote;
                    };
                    voteWeighted(value: _109.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _109.MsgVoteWeighted;
                    };
                    deposit(value: _109.MsgDeposit): {
                        typeUrl: string;
                        value: _109.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _109.MsgSubmitProposal) => _109.MsgSubmitProposalAmino;
                    fromAmino: (object: _109.MsgSubmitProposalAmino) => _109.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _109.MsgVote) => _109.MsgVoteAmino;
                    fromAmino: (object: _109.MsgVoteAmino) => _109.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _109.MsgVoteWeighted) => _109.MsgVoteWeightedAmino;
                    fromAmino: (object: _109.MsgVoteWeightedAmino) => _109.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _109.MsgDeposit) => _109.MsgDepositAmino;
                    fromAmino: (object: _109.MsgDepositAmino) => _109.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _109.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgSubmitProposal;
                fromJSON(object: any): _109.MsgSubmitProposal;
                toJSON(message: _109.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_109.MsgSubmitProposal>): _109.MsgSubmitProposal;
                fromAmino(object: _109.MsgSubmitProposalAmino): _109.MsgSubmitProposal;
                toAmino(message: _109.MsgSubmitProposal): _109.MsgSubmitProposalAmino;
                fromAminoMsg(object: _109.MsgSubmitProposalAminoMsg): _109.MsgSubmitProposal;
                toAminoMsg(message: _109.MsgSubmitProposal): _109.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _109.MsgSubmitProposalProtoMsg): _109.MsgSubmitProposal;
                toProto(message: _109.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _109.MsgSubmitProposal): _109.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _109.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgSubmitProposalResponse;
                fromJSON(object: any): _109.MsgSubmitProposalResponse;
                toJSON(message: _109.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_109.MsgSubmitProposalResponse>): _109.MsgSubmitProposalResponse;
                fromAmino(object: _109.MsgSubmitProposalResponseAmino): _109.MsgSubmitProposalResponse;
                toAmino(message: _109.MsgSubmitProposalResponse): _109.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _109.MsgSubmitProposalResponseAminoMsg): _109.MsgSubmitProposalResponse;
                toAminoMsg(message: _109.MsgSubmitProposalResponse): _109.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _109.MsgSubmitProposalResponseProtoMsg): _109.MsgSubmitProposalResponse;
                toProto(message: _109.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _109.MsgSubmitProposalResponse): _109.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _109.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgVote;
                fromJSON(object: any): _109.MsgVote;
                toJSON(message: _109.MsgVote): unknown;
                fromPartial(object: Partial<_109.MsgVote>): _109.MsgVote;
                fromAmino(object: _109.MsgVoteAmino): _109.MsgVote;
                toAmino(message: _109.MsgVote): _109.MsgVoteAmino;
                fromAminoMsg(object: _109.MsgVoteAminoMsg): _109.MsgVote;
                toAminoMsg(message: _109.MsgVote): _109.MsgVoteAminoMsg;
                fromProtoMsg(message: _109.MsgVoteProtoMsg): _109.MsgVote;
                toProto(message: _109.MsgVote): Uint8Array;
                toProtoMsg(message: _109.MsgVote): _109.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _109.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgVoteResponse;
                fromJSON(_: any): _109.MsgVoteResponse;
                toJSON(_: _109.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_109.MsgVoteResponse>): _109.MsgVoteResponse;
                fromAmino(_: _109.MsgVoteResponseAmino): _109.MsgVoteResponse;
                toAmino(_: _109.MsgVoteResponse): _109.MsgVoteResponseAmino;
                fromAminoMsg(object: _109.MsgVoteResponseAminoMsg): _109.MsgVoteResponse;
                toAminoMsg(message: _109.MsgVoteResponse): _109.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _109.MsgVoteResponseProtoMsg): _109.MsgVoteResponse;
                toProto(message: _109.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _109.MsgVoteResponse): _109.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                typeUrl: string;
                encode(message: _109.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgVoteWeighted;
                fromJSON(object: any): _109.MsgVoteWeighted;
                toJSON(message: _109.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_109.MsgVoteWeighted>): _109.MsgVoteWeighted;
                fromAmino(object: _109.MsgVoteWeightedAmino): _109.MsgVoteWeighted;
                toAmino(message: _109.MsgVoteWeighted): _109.MsgVoteWeightedAmino;
                fromAminoMsg(object: _109.MsgVoteWeightedAminoMsg): _109.MsgVoteWeighted;
                toAminoMsg(message: _109.MsgVoteWeighted): _109.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _109.MsgVoteWeightedProtoMsg): _109.MsgVoteWeighted;
                toProto(message: _109.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _109.MsgVoteWeighted): _109.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                typeUrl: string;
                encode(_: _109.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgVoteWeightedResponse;
                fromJSON(_: any): _109.MsgVoteWeightedResponse;
                toJSON(_: _109.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_109.MsgVoteWeightedResponse>): _109.MsgVoteWeightedResponse;
                fromAmino(_: _109.MsgVoteWeightedResponseAmino): _109.MsgVoteWeightedResponse;
                toAmino(_: _109.MsgVoteWeightedResponse): _109.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _109.MsgVoteWeightedResponseAminoMsg): _109.MsgVoteWeightedResponse;
                toAminoMsg(message: _109.MsgVoteWeightedResponse): _109.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _109.MsgVoteWeightedResponseProtoMsg): _109.MsgVoteWeightedResponse;
                toProto(message: _109.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _109.MsgVoteWeightedResponse): _109.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                typeUrl: string;
                encode(message: _109.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgDeposit;
                fromJSON(object: any): _109.MsgDeposit;
                toJSON(message: _109.MsgDeposit): unknown;
                fromPartial(object: Partial<_109.MsgDeposit>): _109.MsgDeposit;
                fromAmino(object: _109.MsgDepositAmino): _109.MsgDeposit;
                toAmino(message: _109.MsgDeposit): _109.MsgDepositAmino;
                fromAminoMsg(object: _109.MsgDepositAminoMsg): _109.MsgDeposit;
                toAminoMsg(message: _109.MsgDeposit): _109.MsgDepositAminoMsg;
                fromProtoMsg(message: _109.MsgDepositProtoMsg): _109.MsgDeposit;
                toProto(message: _109.MsgDeposit): Uint8Array;
                toProtoMsg(message: _109.MsgDeposit): _109.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                typeUrl: string;
                encode(_: _109.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.MsgDepositResponse;
                fromJSON(_: any): _109.MsgDepositResponse;
                toJSON(_: _109.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_109.MsgDepositResponse>): _109.MsgDepositResponse;
                fromAmino(_: _109.MsgDepositResponseAmino): _109.MsgDepositResponse;
                toAmino(_: _109.MsgDepositResponse): _109.MsgDepositResponseAmino;
                fromAminoMsg(object: _109.MsgDepositResponseAminoMsg): _109.MsgDepositResponse;
                toAminoMsg(message: _109.MsgDepositResponse): _109.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _109.MsgDepositResponseProtoMsg): _109.MsgDepositResponse;
                toProto(message: _109.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _109.MsgDepositResponse): _109.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _108.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryProposalRequest;
                fromJSON(object: any): _108.QueryProposalRequest;
                toJSON(message: _108.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_108.QueryProposalRequest>): _108.QueryProposalRequest;
                fromAmino(object: _108.QueryProposalRequestAmino): _108.QueryProposalRequest;
                toAmino(message: _108.QueryProposalRequest): _108.QueryProposalRequestAmino;
                fromAminoMsg(object: _108.QueryProposalRequestAminoMsg): _108.QueryProposalRequest;
                toAminoMsg(message: _108.QueryProposalRequest): _108.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _108.QueryProposalRequestProtoMsg): _108.QueryProposalRequest;
                toProto(message: _108.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _108.QueryProposalRequest): _108.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _108.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryProposalResponse;
                fromJSON(object: any): _108.QueryProposalResponse;
                toJSON(message: _108.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_108.QueryProposalResponse>): _108.QueryProposalResponse;
                fromAmino(object: _108.QueryProposalResponseAmino): _108.QueryProposalResponse;
                toAmino(message: _108.QueryProposalResponse): _108.QueryProposalResponseAmino;
                fromAminoMsg(object: _108.QueryProposalResponseAminoMsg): _108.QueryProposalResponse;
                toAminoMsg(message: _108.QueryProposalResponse): _108.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _108.QueryProposalResponseProtoMsg): _108.QueryProposalResponse;
                toProto(message: _108.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _108.QueryProposalResponse): _108.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                typeUrl: string;
                encode(message: _108.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryProposalsRequest;
                fromJSON(object: any): _108.QueryProposalsRequest;
                toJSON(message: _108.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_108.QueryProposalsRequest>): _108.QueryProposalsRequest;
                fromAmino(object: _108.QueryProposalsRequestAmino): _108.QueryProposalsRequest;
                toAmino(message: _108.QueryProposalsRequest): _108.QueryProposalsRequestAmino;
                fromAminoMsg(object: _108.QueryProposalsRequestAminoMsg): _108.QueryProposalsRequest;
                toAminoMsg(message: _108.QueryProposalsRequest): _108.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryProposalsRequestProtoMsg): _108.QueryProposalsRequest;
                toProto(message: _108.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryProposalsRequest): _108.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                typeUrl: string;
                encode(message: _108.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryProposalsResponse;
                fromJSON(object: any): _108.QueryProposalsResponse;
                toJSON(message: _108.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_108.QueryProposalsResponse>): _108.QueryProposalsResponse;
                fromAmino(object: _108.QueryProposalsResponseAmino): _108.QueryProposalsResponse;
                toAmino(message: _108.QueryProposalsResponse): _108.QueryProposalsResponseAmino;
                fromAminoMsg(object: _108.QueryProposalsResponseAminoMsg): _108.QueryProposalsResponse;
                toAminoMsg(message: _108.QueryProposalsResponse): _108.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryProposalsResponseProtoMsg): _108.QueryProposalsResponse;
                toProto(message: _108.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryProposalsResponse): _108.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                typeUrl: string;
                encode(message: _108.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVoteRequest;
                fromJSON(object: any): _108.QueryVoteRequest;
                toJSON(message: _108.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_108.QueryVoteRequest>): _108.QueryVoteRequest;
                fromAmino(object: _108.QueryVoteRequestAmino): _108.QueryVoteRequest;
                toAmino(message: _108.QueryVoteRequest): _108.QueryVoteRequestAmino;
                fromAminoMsg(object: _108.QueryVoteRequestAminoMsg): _108.QueryVoteRequest;
                toAminoMsg(message: _108.QueryVoteRequest): _108.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _108.QueryVoteRequestProtoMsg): _108.QueryVoteRequest;
                toProto(message: _108.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _108.QueryVoteRequest): _108.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                typeUrl: string;
                encode(message: _108.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVoteResponse;
                fromJSON(object: any): _108.QueryVoteResponse;
                toJSON(message: _108.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_108.QueryVoteResponse>): _108.QueryVoteResponse;
                fromAmino(object: _108.QueryVoteResponseAmino): _108.QueryVoteResponse;
                toAmino(message: _108.QueryVoteResponse): _108.QueryVoteResponseAmino;
                fromAminoMsg(object: _108.QueryVoteResponseAminoMsg): _108.QueryVoteResponse;
                toAminoMsg(message: _108.QueryVoteResponse): _108.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _108.QueryVoteResponseProtoMsg): _108.QueryVoteResponse;
                toProto(message: _108.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _108.QueryVoteResponse): _108.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                typeUrl: string;
                encode(message: _108.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVotesRequest;
                fromJSON(object: any): _108.QueryVotesRequest;
                toJSON(message: _108.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_108.QueryVotesRequest>): _108.QueryVotesRequest;
                fromAmino(object: _108.QueryVotesRequestAmino): _108.QueryVotesRequest;
                toAmino(message: _108.QueryVotesRequest): _108.QueryVotesRequestAmino;
                fromAminoMsg(object: _108.QueryVotesRequestAminoMsg): _108.QueryVotesRequest;
                toAminoMsg(message: _108.QueryVotesRequest): _108.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _108.QueryVotesRequestProtoMsg): _108.QueryVotesRequest;
                toProto(message: _108.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _108.QueryVotesRequest): _108.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                typeUrl: string;
                encode(message: _108.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryVotesResponse;
                fromJSON(object: any): _108.QueryVotesResponse;
                toJSON(message: _108.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_108.QueryVotesResponse>): _108.QueryVotesResponse;
                fromAmino(object: _108.QueryVotesResponseAmino): _108.QueryVotesResponse;
                toAmino(message: _108.QueryVotesResponse): _108.QueryVotesResponseAmino;
                fromAminoMsg(object: _108.QueryVotesResponseAminoMsg): _108.QueryVotesResponse;
                toAminoMsg(message: _108.QueryVotesResponse): _108.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _108.QueryVotesResponseProtoMsg): _108.QueryVotesResponse;
                toProto(message: _108.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _108.QueryVotesResponse): _108.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _108.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsRequest;
                fromJSON(object: any): _108.QueryParamsRequest;
                toJSON(message: _108.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_108.QueryParamsRequest>): _108.QueryParamsRequest;
                fromAmino(object: _108.QueryParamsRequestAmino): _108.QueryParamsRequest;
                toAmino(message: _108.QueryParamsRequest): _108.QueryParamsRequestAmino;
                fromAminoMsg(object: _108.QueryParamsRequestAminoMsg): _108.QueryParamsRequest;
                toAminoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryParamsRequestProtoMsg): _108.QueryParamsRequest;
                toProto(message: _108.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryParamsRequest): _108.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _108.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryParamsResponse;
                fromJSON(object: any): _108.QueryParamsResponse;
                toJSON(message: _108.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_108.QueryParamsResponse>): _108.QueryParamsResponse;
                fromAmino(object: _108.QueryParamsResponseAmino): _108.QueryParamsResponse;
                toAmino(message: _108.QueryParamsResponse): _108.QueryParamsResponseAmino;
                fromAminoMsg(object: _108.QueryParamsResponseAminoMsg): _108.QueryParamsResponse;
                toAminoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryParamsResponseProtoMsg): _108.QueryParamsResponse;
                toProto(message: _108.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryParamsResponse): _108.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                typeUrl: string;
                encode(message: _108.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryDepositRequest;
                fromJSON(object: any): _108.QueryDepositRequest;
                toJSON(message: _108.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_108.QueryDepositRequest>): _108.QueryDepositRequest;
                fromAmino(object: _108.QueryDepositRequestAmino): _108.QueryDepositRequest;
                toAmino(message: _108.QueryDepositRequest): _108.QueryDepositRequestAmino;
                fromAminoMsg(object: _108.QueryDepositRequestAminoMsg): _108.QueryDepositRequest;
                toAminoMsg(message: _108.QueryDepositRequest): _108.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _108.QueryDepositRequestProtoMsg): _108.QueryDepositRequest;
                toProto(message: _108.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _108.QueryDepositRequest): _108.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                typeUrl: string;
                encode(message: _108.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryDepositResponse;
                fromJSON(object: any): _108.QueryDepositResponse;
                toJSON(message: _108.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_108.QueryDepositResponse>): _108.QueryDepositResponse;
                fromAmino(object: _108.QueryDepositResponseAmino): _108.QueryDepositResponse;
                toAmino(message: _108.QueryDepositResponse): _108.QueryDepositResponseAmino;
                fromAminoMsg(object: _108.QueryDepositResponseAminoMsg): _108.QueryDepositResponse;
                toAminoMsg(message: _108.QueryDepositResponse): _108.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _108.QueryDepositResponseProtoMsg): _108.QueryDepositResponse;
                toProto(message: _108.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _108.QueryDepositResponse): _108.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                typeUrl: string;
                encode(message: _108.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryDepositsRequest;
                fromJSON(object: any): _108.QueryDepositsRequest;
                toJSON(message: _108.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_108.QueryDepositsRequest>): _108.QueryDepositsRequest;
                fromAmino(object: _108.QueryDepositsRequestAmino): _108.QueryDepositsRequest;
                toAmino(message: _108.QueryDepositsRequest): _108.QueryDepositsRequestAmino;
                fromAminoMsg(object: _108.QueryDepositsRequestAminoMsg): _108.QueryDepositsRequest;
                toAminoMsg(message: _108.QueryDepositsRequest): _108.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _108.QueryDepositsRequestProtoMsg): _108.QueryDepositsRequest;
                toProto(message: _108.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _108.QueryDepositsRequest): _108.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                typeUrl: string;
                encode(message: _108.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryDepositsResponse;
                fromJSON(object: any): _108.QueryDepositsResponse;
                toJSON(message: _108.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_108.QueryDepositsResponse>): _108.QueryDepositsResponse;
                fromAmino(object: _108.QueryDepositsResponseAmino): _108.QueryDepositsResponse;
                toAmino(message: _108.QueryDepositsResponse): _108.QueryDepositsResponseAmino;
                fromAminoMsg(object: _108.QueryDepositsResponseAminoMsg): _108.QueryDepositsResponse;
                toAminoMsg(message: _108.QueryDepositsResponse): _108.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _108.QueryDepositsResponseProtoMsg): _108.QueryDepositsResponse;
                toProto(message: _108.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _108.QueryDepositsResponse): _108.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _108.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTallyResultRequest;
                fromJSON(object: any): _108.QueryTallyResultRequest;
                toJSON(message: _108.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_108.QueryTallyResultRequest>): _108.QueryTallyResultRequest;
                fromAmino(object: _108.QueryTallyResultRequestAmino): _108.QueryTallyResultRequest;
                toAmino(message: _108.QueryTallyResultRequest): _108.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _108.QueryTallyResultRequestAminoMsg): _108.QueryTallyResultRequest;
                toAminoMsg(message: _108.QueryTallyResultRequest): _108.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _108.QueryTallyResultRequestProtoMsg): _108.QueryTallyResultRequest;
                toProto(message: _108.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _108.QueryTallyResultRequest): _108.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _108.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryTallyResultResponse;
                fromJSON(object: any): _108.QueryTallyResultResponse;
                toJSON(message: _108.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_108.QueryTallyResultResponse>): _108.QueryTallyResultResponse;
                fromAmino(object: _108.QueryTallyResultResponseAmino): _108.QueryTallyResultResponse;
                toAmino(message: _108.QueryTallyResultResponse): _108.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _108.QueryTallyResultResponseAminoMsg): _108.QueryTallyResultResponse;
                toAminoMsg(message: _108.QueryTallyResultResponse): _108.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _108.QueryTallyResultResponseProtoMsg): _108.QueryTallyResultResponse;
                toProto(message: _108.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _108.QueryTallyResultResponse): _108.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _107.VoteOption;
            voteOptionToJSON(object: _107.VoteOption): string;
            proposalStatusFromJSON(object: any): _107.ProposalStatus;
            proposalStatusToJSON(object: _107.ProposalStatus): string;
            VoteOption: typeof _107.VoteOption;
            VoteOptionSDKType: typeof _107.VoteOption;
            VoteOptionAmino: typeof _107.VoteOption;
            ProposalStatus: typeof _107.ProposalStatus;
            ProposalStatusSDKType: typeof _107.ProposalStatus;
            ProposalStatusAmino: typeof _107.ProposalStatus;
            WeightedVoteOption: {
                typeUrl: string;
                encode(message: _107.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.WeightedVoteOption;
                fromJSON(object: any): _107.WeightedVoteOption;
                toJSON(message: _107.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_107.WeightedVoteOption>): _107.WeightedVoteOption;
                fromAmino(object: _107.WeightedVoteOptionAmino): _107.WeightedVoteOption;
                toAmino(message: _107.WeightedVoteOption): _107.WeightedVoteOptionAmino;
                fromAminoMsg(object: _107.WeightedVoteOptionAminoMsg): _107.WeightedVoteOption;
                toAminoMsg(message: _107.WeightedVoteOption): _107.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _107.WeightedVoteOptionProtoMsg): _107.WeightedVoteOption;
                toProto(message: _107.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _107.WeightedVoteOption): _107.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                typeUrl: string;
                encode(message: _107.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.TextProposal;
                fromJSON(object: any): _107.TextProposal;
                toJSON(message: _107.TextProposal): unknown;
                fromPartial(object: Partial<_107.TextProposal>): _107.TextProposal;
                fromAmino(object: _107.TextProposalAmino): _107.TextProposal;
                toAmino(message: _107.TextProposal): _107.TextProposalAmino;
                fromAminoMsg(object: _107.TextProposalAminoMsg): _107.TextProposal;
                toAminoMsg(message: _107.TextProposal): _107.TextProposalAminoMsg;
                fromProtoMsg(message: _107.TextProposalProtoMsg): _107.TextProposal;
                toProto(message: _107.TextProposal): Uint8Array;
                toProtoMsg(message: _107.TextProposal): _107.TextProposalProtoMsg;
            };
            Deposit: {
                typeUrl: string;
                encode(message: _107.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Deposit;
                fromJSON(object: any): _107.Deposit;
                toJSON(message: _107.Deposit): unknown;
                fromPartial(object: Partial<_107.Deposit>): _107.Deposit;
                fromAmino(object: _107.DepositAmino): _107.Deposit;
                toAmino(message: _107.Deposit): _107.DepositAmino;
                fromAminoMsg(object: _107.DepositAminoMsg): _107.Deposit;
                toAminoMsg(message: _107.Deposit): _107.DepositAminoMsg;
                fromProtoMsg(message: _107.DepositProtoMsg): _107.Deposit;
                toProto(message: _107.Deposit): Uint8Array;
                toProtoMsg(message: _107.Deposit): _107.DepositProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _107.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Proposal;
                fromJSON(object: any): _107.Proposal;
                toJSON(message: _107.Proposal): unknown;
                fromPartial(object: Partial<_107.Proposal>): _107.Proposal;
                fromAmino(object: _107.ProposalAmino): _107.Proposal;
                toAmino(message: _107.Proposal): _107.ProposalAmino;
                fromAminoMsg(object: _107.ProposalAminoMsg): _107.Proposal;
                toAminoMsg(message: _107.Proposal): _107.ProposalAminoMsg;
                fromProtoMsg(message: _107.ProposalProtoMsg): _107.Proposal;
                toProto(message: _107.Proposal): Uint8Array;
                toProtoMsg(message: _107.Proposal): _107.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _107.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.TallyResult;
                fromJSON(object: any): _107.TallyResult;
                toJSON(message: _107.TallyResult): unknown;
                fromPartial(object: Partial<_107.TallyResult>): _107.TallyResult;
                fromAmino(object: _107.TallyResultAmino): _107.TallyResult;
                toAmino(message: _107.TallyResult): _107.TallyResultAmino;
                fromAminoMsg(object: _107.TallyResultAminoMsg): _107.TallyResult;
                toAminoMsg(message: _107.TallyResult): _107.TallyResultAminoMsg;
                fromProtoMsg(message: _107.TallyResultProtoMsg): _107.TallyResult;
                toProto(message: _107.TallyResult): Uint8Array;
                toProtoMsg(message: _107.TallyResult): _107.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _107.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Vote;
                fromJSON(object: any): _107.Vote;
                toJSON(message: _107.Vote): unknown;
                fromPartial(object: Partial<_107.Vote>): _107.Vote;
                fromAmino(object: _107.VoteAmino): _107.Vote;
                toAmino(message: _107.Vote): _107.VoteAmino;
                fromAminoMsg(object: _107.VoteAminoMsg): _107.Vote;
                toAminoMsg(message: _107.Vote): _107.VoteAminoMsg;
                fromProtoMsg(message: _107.VoteProtoMsg): _107.Vote;
                toProto(message: _107.Vote): Uint8Array;
                toProtoMsg(message: _107.Vote): _107.VoteProtoMsg;
            };
            DepositParams: {
                typeUrl: string;
                encode(message: _107.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.DepositParams;
                fromJSON(object: any): _107.DepositParams;
                toJSON(message: _107.DepositParams): unknown;
                fromPartial(object: Partial<_107.DepositParams>): _107.DepositParams;
                fromAmino(object: _107.DepositParamsAmino): _107.DepositParams;
                toAmino(message: _107.DepositParams): _107.DepositParamsAmino;
                fromAminoMsg(object: _107.DepositParamsAminoMsg): _107.DepositParams;
                toAminoMsg(message: _107.DepositParams): _107.DepositParamsAminoMsg;
                fromProtoMsg(message: _107.DepositParamsProtoMsg): _107.DepositParams;
                toProto(message: _107.DepositParams): Uint8Array;
                toProtoMsg(message: _107.DepositParams): _107.DepositParamsProtoMsg;
            };
            VotingParams: {
                typeUrl: string;
                encode(message: _107.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.VotingParams;
                fromJSON(object: any): _107.VotingParams;
                toJSON(message: _107.VotingParams): unknown;
                fromPartial(object: Partial<_107.VotingParams>): _107.VotingParams;
                fromAmino(object: _107.VotingParamsAmino): _107.VotingParams;
                toAmino(message: _107.VotingParams): _107.VotingParamsAmino;
                fromAminoMsg(object: _107.VotingParamsAminoMsg): _107.VotingParams;
                toAminoMsg(message: _107.VotingParams): _107.VotingParamsAminoMsg;
                fromProtoMsg(message: _107.VotingParamsProtoMsg): _107.VotingParams;
                toProto(message: _107.VotingParams): Uint8Array;
                toProtoMsg(message: _107.VotingParams): _107.VotingParamsProtoMsg;
            };
            TallyParams: {
                typeUrl: string;
                encode(message: _107.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.TallyParams;
                fromJSON(object: any): _107.TallyParams;
                toJSON(message: _107.TallyParams): unknown;
                fromPartial(object: Partial<_107.TallyParams>): _107.TallyParams;
                fromAmino(object: _107.TallyParamsAmino): _107.TallyParams;
                toAmino(message: _107.TallyParams): _107.TallyParamsAmino;
                fromAminoMsg(object: _107.TallyParamsAminoMsg): _107.TallyParams;
                toAminoMsg(message: _107.TallyParams): _107.TallyParamsAminoMsg;
                fromProtoMsg(message: _107.TallyParamsProtoMsg): _107.TallyParams;
                toProto(message: _107.TallyParams): Uint8Array;
                toProtoMsg(message: _107.TallyParams): _107.TallyParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _106.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.GenesisState;
                fromJSON(object: any): _106.GenesisState;
                toJSON(message: _106.GenesisState): unknown;
                fromPartial(object: Partial<_106.GenesisState>): _106.GenesisState;
                fromAmino(object: _106.GenesisStateAmino): _106.GenesisState;
                toAmino(message: _106.GenesisState): _106.GenesisStateAmino;
                fromAminoMsg(object: _106.GenesisStateAminoMsg): _106.GenesisState;
                toAminoMsg(message: _106.GenesisState): _106.GenesisStateAminoMsg;
                fromProtoMsg(message: _106.GenesisStateProtoMsg): _106.GenesisState;
                toProto(message: _106.GenesisState): Uint8Array;
                toProtoMsg(message: _106.GenesisState): _106.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _110.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.Module;
                    fromJSON(object: any): _110.Module;
                    toJSON(message: _110.Module): unknown;
                    fromPartial(object: Partial<_110.Module>): _110.Module;
                    fromAmino(object: _110.ModuleAmino): _110.Module;
                    toAmino(message: _110.Module): _110.ModuleAmino;
                    fromAminoMsg(object: _110.ModuleAminoMsg): _110.Module;
                    toAminoMsg(message: _110.Module): _110.ModuleAminoMsg;
                    fromProtoMsg(message: _110.ModuleProtoMsg): _110.Module;
                    toProto(message: _110.Module): Uint8Array;
                    toProtoMsg(message: _110.Module): _110.ModuleProtoMsg;
                };
            };
        }
        const v1: {
            MsgClientImpl: typeof _305.MsgClientImpl;
            QueryClientImpl: typeof _286.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _113.QueryGroupInfoRequest): Promise<_113.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _113.QueryGroupPolicyInfoRequest): Promise<_113.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _113.QueryGroupMembersRequest): Promise<_113.QueryGroupMembersResponse>;
                groupsByAdmin(request: _113.QueryGroupsByAdminRequest): Promise<_113.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _113.QueryGroupPoliciesByGroupRequest): Promise<_113.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _113.QueryGroupPoliciesByAdminRequest): Promise<_113.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _113.QueryProposalRequest): Promise<_113.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _113.QueryProposalsByGroupPolicyRequest): Promise<_113.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _113.QueryVoteByProposalVoterRequest): Promise<_113.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _113.QueryVotesByProposalRequest): Promise<_113.QueryVotesByProposalResponse>;
                votesByVoter(request: _113.QueryVotesByVoterRequest): Promise<_113.QueryVotesByVoterResponse>;
                groupsByMember(request: _113.QueryGroupsByMemberRequest): Promise<_113.QueryGroupsByMemberResponse>;
                tallyResult(request: _113.QueryTallyResultRequest): Promise<_113.QueryTallyResultResponse>;
                groups(request?: _113.QueryGroupsRequest): Promise<_113.QueryGroupsResponse>;
            };
            LCDQueryClient: typeof _265.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _114.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _114.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _114.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _114.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _114.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _114.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _114.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _114.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _114.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _114.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _114.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _114.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _114.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _114.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _114.MsgCreateGroup): {
                        typeUrl: string;
                        value: _114.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _114.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _114.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _114.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _114.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _114.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _114.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _114.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _114.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _114.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _114.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _114.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _114.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _114.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _114.MsgWithdrawProposal;
                    };
                    vote(value: _114.MsgVote): {
                        typeUrl: string;
                        value: _114.MsgVote;
                    };
                    exec(value: _114.MsgExec): {
                        typeUrl: string;
                        value: _114.MsgExec;
                    };
                    leaveGroup(value: _114.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _114.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _114.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _114.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _114.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _114.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _114.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _114.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _114.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _114.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _114.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _114.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _114.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _114.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _114.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _114.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _114.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _114.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _114.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _114.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _114.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _114.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _114.MsgCreateGroup): {
                        typeUrl: string;
                        value: _114.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _114.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _114.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _114.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _114.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _114.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _114.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _114.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _114.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _114.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _114.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _114.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _114.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _114.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _114.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _114.MsgWithdrawProposal;
                    };
                    vote(value: _114.MsgVote): {
                        typeUrl: string;
                        value: _114.MsgVote;
                    };
                    exec(value: _114.MsgExec): {
                        typeUrl: string;
                        value: _114.MsgExec;
                    };
                    leaveGroup(value: _114.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _114.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateGroup) => _114.MsgCreateGroupAmino;
                    fromAmino: (object: _114.MsgCreateGroupAmino) => _114.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateGroupMembers) => _114.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _114.MsgUpdateGroupMembersAmino) => _114.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateGroupAdmin) => _114.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _114.MsgUpdateGroupAdminAmino) => _114.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateGroupMetadata) => _114.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _114.MsgUpdateGroupMetadataAmino) => _114.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateGroupPolicy) => _114.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _114.MsgCreateGroupPolicyAmino) => _114.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _114.MsgCreateGroupWithPolicy) => _114.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _114.MsgCreateGroupWithPolicyAmino) => _114.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateGroupPolicyAdmin) => _114.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _114.MsgUpdateGroupPolicyAdminAmino) => _114.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateGroupPolicyDecisionPolicy) => _114.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _114.MsgUpdateGroupPolicyDecisionPolicyAmino) => _114.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _114.MsgUpdateGroupPolicyMetadata) => _114.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _114.MsgUpdateGroupPolicyMetadataAmino) => _114.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _114.MsgSubmitProposal) => _114.MsgSubmitProposalAmino;
                    fromAmino: (object: _114.MsgSubmitProposalAmino) => _114.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _114.MsgWithdrawProposal) => _114.MsgWithdrawProposalAmino;
                    fromAmino: (object: _114.MsgWithdrawProposalAmino) => _114.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _114.MsgVote) => _114.MsgVoteAmino;
                    fromAmino: (object: _114.MsgVoteAmino) => _114.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _114.MsgExec) => _114.MsgExecAmino;
                    fromAmino: (object: _114.MsgExecAmino) => _114.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _114.MsgLeaveGroup) => _114.MsgLeaveGroupAmino;
                    fromAmino: (object: _114.MsgLeaveGroupAmino) => _114.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _115.VoteOption;
            voteOptionToJSON(object: _115.VoteOption): string;
            proposalStatusFromJSON(object: any): _115.ProposalStatus;
            proposalStatusToJSON(object: _115.ProposalStatus): string;
            proposalExecutorResultFromJSON(object: any): _115.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _115.ProposalExecutorResult): string;
            VoteOption: typeof _115.VoteOption;
            VoteOptionSDKType: typeof _115.VoteOption;
            VoteOptionAmino: typeof _115.VoteOption;
            ProposalStatus: typeof _115.ProposalStatus;
            ProposalStatusSDKType: typeof _115.ProposalStatus;
            ProposalStatusAmino: typeof _115.ProposalStatus;
            ProposalExecutorResult: typeof _115.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _115.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _115.ProposalExecutorResult;
            Member: {
                typeUrl: string;
                encode(message: _115.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Member;
                fromJSON(object: any): _115.Member;
                toJSON(message: _115.Member): unknown;
                fromPartial(object: Partial<_115.Member>): _115.Member;
                fromAmino(object: _115.MemberAmino): _115.Member;
                toAmino(message: _115.Member): _115.MemberAmino;
                fromAminoMsg(object: _115.MemberAminoMsg): _115.Member;
                toAminoMsg(message: _115.Member): _115.MemberAminoMsg;
                fromProtoMsg(message: _115.MemberProtoMsg): _115.Member;
                toProto(message: _115.Member): Uint8Array;
                toProtoMsg(message: _115.Member): _115.MemberProtoMsg;
            };
            MemberRequest: {
                typeUrl: string;
                encode(message: _115.MemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.MemberRequest;
                fromJSON(object: any): _115.MemberRequest;
                toJSON(message: _115.MemberRequest): unknown;
                fromPartial(object: Partial<_115.MemberRequest>): _115.MemberRequest;
                fromAmino(object: _115.MemberRequestAmino): _115.MemberRequest;
                toAmino(message: _115.MemberRequest): _115.MemberRequestAmino;
                fromAminoMsg(object: _115.MemberRequestAminoMsg): _115.MemberRequest;
                toAminoMsg(message: _115.MemberRequest): _115.MemberRequestAminoMsg;
                fromProtoMsg(message: _115.MemberRequestProtoMsg): _115.MemberRequest;
                toProto(message: _115.MemberRequest): Uint8Array;
                toProtoMsg(message: _115.MemberRequest): _115.MemberRequestProtoMsg;
            };
            ThresholdDecisionPolicy: {
                typeUrl: string;
                encode(message: _115.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.ThresholdDecisionPolicy;
                fromJSON(object: any): _115.ThresholdDecisionPolicy;
                toJSON(message: _115.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_115.ThresholdDecisionPolicy>): _115.ThresholdDecisionPolicy;
                fromAmino(object: _115.ThresholdDecisionPolicyAmino): _115.ThresholdDecisionPolicy;
                toAmino(message: _115.ThresholdDecisionPolicy): _115.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _115.ThresholdDecisionPolicyAminoMsg): _115.ThresholdDecisionPolicy;
                toAminoMsg(message: _115.ThresholdDecisionPolicy): _115.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _115.ThresholdDecisionPolicyProtoMsg): _115.ThresholdDecisionPolicy;
                toProto(message: _115.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _115.ThresholdDecisionPolicy): _115.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                typeUrl: string;
                encode(message: _115.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.PercentageDecisionPolicy;
                fromJSON(object: any): _115.PercentageDecisionPolicy;
                toJSON(message: _115.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_115.PercentageDecisionPolicy>): _115.PercentageDecisionPolicy;
                fromAmino(object: _115.PercentageDecisionPolicyAmino): _115.PercentageDecisionPolicy;
                toAmino(message: _115.PercentageDecisionPolicy): _115.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _115.PercentageDecisionPolicyAminoMsg): _115.PercentageDecisionPolicy;
                toAminoMsg(message: _115.PercentageDecisionPolicy): _115.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _115.PercentageDecisionPolicyProtoMsg): _115.PercentageDecisionPolicy;
                toProto(message: _115.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _115.PercentageDecisionPolicy): _115.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                typeUrl: string;
                encode(message: _115.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.DecisionPolicyWindows;
                fromJSON(object: any): _115.DecisionPolicyWindows;
                toJSON(message: _115.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_115.DecisionPolicyWindows>): _115.DecisionPolicyWindows;
                fromAmino(object: _115.DecisionPolicyWindowsAmino): _115.DecisionPolicyWindows;
                toAmino(message: _115.DecisionPolicyWindows): _115.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _115.DecisionPolicyWindowsAminoMsg): _115.DecisionPolicyWindows;
                toAminoMsg(message: _115.DecisionPolicyWindows): _115.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _115.DecisionPolicyWindowsProtoMsg): _115.DecisionPolicyWindows;
                toProto(message: _115.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _115.DecisionPolicyWindows): _115.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                typeUrl: string;
                encode(message: _115.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GroupInfo;
                fromJSON(object: any): _115.GroupInfo;
                toJSON(message: _115.GroupInfo): unknown;
                fromPartial(object: Partial<_115.GroupInfo>): _115.GroupInfo;
                fromAmino(object: _115.GroupInfoAmino): _115.GroupInfo;
                toAmino(message: _115.GroupInfo): _115.GroupInfoAmino;
                fromAminoMsg(object: _115.GroupInfoAminoMsg): _115.GroupInfo;
                toAminoMsg(message: _115.GroupInfo): _115.GroupInfoAminoMsg;
                fromProtoMsg(message: _115.GroupInfoProtoMsg): _115.GroupInfo;
                toProto(message: _115.GroupInfo): Uint8Array;
                toProtoMsg(message: _115.GroupInfo): _115.GroupInfoProtoMsg;
            };
            GroupMember: {
                typeUrl: string;
                encode(message: _115.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GroupMember;
                fromJSON(object: any): _115.GroupMember;
                toJSON(message: _115.GroupMember): unknown;
                fromPartial(object: Partial<_115.GroupMember>): _115.GroupMember;
                fromAmino(object: _115.GroupMemberAmino): _115.GroupMember;
                toAmino(message: _115.GroupMember): _115.GroupMemberAmino;
                fromAminoMsg(object: _115.GroupMemberAminoMsg): _115.GroupMember;
                toAminoMsg(message: _115.GroupMember): _115.GroupMemberAminoMsg;
                fromProtoMsg(message: _115.GroupMemberProtoMsg): _115.GroupMember;
                toProto(message: _115.GroupMember): Uint8Array;
                toProtoMsg(message: _115.GroupMember): _115.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                typeUrl: string;
                encode(message: _115.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.GroupPolicyInfo;
                fromJSON(object: any): _115.GroupPolicyInfo;
                toJSON(message: _115.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_115.GroupPolicyInfo>): _115.GroupPolicyInfo;
                fromAmino(object: _115.GroupPolicyInfoAmino): _115.GroupPolicyInfo;
                toAmino(message: _115.GroupPolicyInfo): _115.GroupPolicyInfoAmino;
                fromAminoMsg(object: _115.GroupPolicyInfoAminoMsg): _115.GroupPolicyInfo;
                toAminoMsg(message: _115.GroupPolicyInfo): _115.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _115.GroupPolicyInfoProtoMsg): _115.GroupPolicyInfo;
                toProto(message: _115.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _115.GroupPolicyInfo): _115.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                typeUrl: string;
                encode(message: _115.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Proposal;
                fromJSON(object: any): _115.Proposal;
                toJSON(message: _115.Proposal): unknown;
                fromPartial(object: Partial<_115.Proposal>): _115.Proposal;
                fromAmino(object: _115.ProposalAmino): _115.Proposal;
                toAmino(message: _115.Proposal): _115.ProposalAmino;
                fromAminoMsg(object: _115.ProposalAminoMsg): _115.Proposal;
                toAminoMsg(message: _115.Proposal): _115.ProposalAminoMsg;
                fromProtoMsg(message: _115.ProposalProtoMsg): _115.Proposal;
                toProto(message: _115.Proposal): Uint8Array;
                toProtoMsg(message: _115.Proposal): _115.ProposalProtoMsg;
            };
            TallyResult: {
                typeUrl: string;
                encode(message: _115.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.TallyResult;
                fromJSON(object: any): _115.TallyResult;
                toJSON(message: _115.TallyResult): unknown;
                fromPartial(object: Partial<_115.TallyResult>): _115.TallyResult;
                fromAmino(object: _115.TallyResultAmino): _115.TallyResult;
                toAmino(message: _115.TallyResult): _115.TallyResultAmino;
                fromAminoMsg(object: _115.TallyResultAminoMsg): _115.TallyResult;
                toAminoMsg(message: _115.TallyResult): _115.TallyResultAminoMsg;
                fromProtoMsg(message: _115.TallyResultProtoMsg): _115.TallyResult;
                toProto(message: _115.TallyResult): Uint8Array;
                toProtoMsg(message: _115.TallyResult): _115.TallyResultProtoMsg;
            };
            Vote: {
                typeUrl: string;
                encode(message: _115.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Vote;
                fromJSON(object: any): _115.Vote;
                toJSON(message: _115.Vote): unknown;
                fromPartial(object: Partial<_115.Vote>): _115.Vote;
                fromAmino(object: _115.VoteAmino): _115.Vote;
                toAmino(message: _115.Vote): _115.VoteAmino;
                fromAminoMsg(object: _115.VoteAminoMsg): _115.Vote;
                toAminoMsg(message: _115.Vote): _115.VoteAminoMsg;
                fromProtoMsg(message: _115.VoteProtoMsg): _115.Vote;
                toProto(message: _115.Vote): Uint8Array;
                toProtoMsg(message: _115.Vote): _115.VoteProtoMsg;
            };
            execFromJSON(object: any): _114.Exec;
            execToJSON(object: _114.Exec): string;
            Exec: typeof _114.Exec;
            ExecSDKType: typeof _114.Exec;
            ExecAmino: typeof _114.Exec;
            MsgCreateGroup: {
                typeUrl: string;
                encode(message: _114.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateGroup;
                fromJSON(object: any): _114.MsgCreateGroup;
                toJSON(message: _114.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_114.MsgCreateGroup>): _114.MsgCreateGroup;
                fromAmino(object: _114.MsgCreateGroupAmino): _114.MsgCreateGroup;
                toAmino(message: _114.MsgCreateGroup): _114.MsgCreateGroupAmino;
                fromAminoMsg(object: _114.MsgCreateGroupAminoMsg): _114.MsgCreateGroup;
                toAminoMsg(message: _114.MsgCreateGroup): _114.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _114.MsgCreateGroupProtoMsg): _114.MsgCreateGroup;
                toProto(message: _114.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _114.MsgCreateGroup): _114.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                typeUrl: string;
                encode(message: _114.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateGroupResponse;
                fromJSON(object: any): _114.MsgCreateGroupResponse;
                toJSON(message: _114.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_114.MsgCreateGroupResponse>): _114.MsgCreateGroupResponse;
                fromAmino(object: _114.MsgCreateGroupResponseAmino): _114.MsgCreateGroupResponse;
                toAmino(message: _114.MsgCreateGroupResponse): _114.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _114.MsgCreateGroupResponseAminoMsg): _114.MsgCreateGroupResponse;
                toAminoMsg(message: _114.MsgCreateGroupResponse): _114.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreateGroupResponseProtoMsg): _114.MsgCreateGroupResponse;
                toProto(message: _114.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateGroupResponse): _114.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                typeUrl: string;
                encode(message: _114.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupMembers;
                fromJSON(object: any): _114.MsgUpdateGroupMembers;
                toJSON(message: _114.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_114.MsgUpdateGroupMembers>): _114.MsgUpdateGroupMembers;
                fromAmino(object: _114.MsgUpdateGroupMembersAmino): _114.MsgUpdateGroupMembers;
                toAmino(message: _114.MsgUpdateGroupMembers): _114.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupMembersAminoMsg): _114.MsgUpdateGroupMembers;
                toAminoMsg(message: _114.MsgUpdateGroupMembers): _114.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupMembersProtoMsg): _114.MsgUpdateGroupMembers;
                toProto(message: _114.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupMembers): _114.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _114.MsgUpdateGroupMembersResponse;
                toJSON(_: _114.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateGroupMembersResponse>): _114.MsgUpdateGroupMembersResponse;
                fromAmino(_: _114.MsgUpdateGroupMembersResponseAmino): _114.MsgUpdateGroupMembersResponse;
                toAmino(_: _114.MsgUpdateGroupMembersResponse): _114.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupMembersResponseAminoMsg): _114.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _114.MsgUpdateGroupMembersResponse): _114.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupMembersResponseProtoMsg): _114.MsgUpdateGroupMembersResponse;
                toProto(message: _114.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupMembersResponse): _114.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                typeUrl: string;
                encode(message: _114.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupAdmin;
                fromJSON(object: any): _114.MsgUpdateGroupAdmin;
                toJSON(message: _114.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_114.MsgUpdateGroupAdmin>): _114.MsgUpdateGroupAdmin;
                fromAmino(object: _114.MsgUpdateGroupAdminAmino): _114.MsgUpdateGroupAdmin;
                toAmino(message: _114.MsgUpdateGroupAdmin): _114.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupAdminAminoMsg): _114.MsgUpdateGroupAdmin;
                toAminoMsg(message: _114.MsgUpdateGroupAdmin): _114.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupAdminProtoMsg): _114.MsgUpdateGroupAdmin;
                toProto(message: _114.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupAdmin): _114.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _114.MsgUpdateGroupAdminResponse;
                toJSON(_: _114.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateGroupAdminResponse>): _114.MsgUpdateGroupAdminResponse;
                fromAmino(_: _114.MsgUpdateGroupAdminResponseAmino): _114.MsgUpdateGroupAdminResponse;
                toAmino(_: _114.MsgUpdateGroupAdminResponse): _114.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupAdminResponseAminoMsg): _114.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _114.MsgUpdateGroupAdminResponse): _114.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupAdminResponseProtoMsg): _114.MsgUpdateGroupAdminResponse;
                toProto(message: _114.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupAdminResponse): _114.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                typeUrl: string;
                encode(message: _114.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupMetadata;
                fromJSON(object: any): _114.MsgUpdateGroupMetadata;
                toJSON(message: _114.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_114.MsgUpdateGroupMetadata>): _114.MsgUpdateGroupMetadata;
                fromAmino(object: _114.MsgUpdateGroupMetadataAmino): _114.MsgUpdateGroupMetadata;
                toAmino(message: _114.MsgUpdateGroupMetadata): _114.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupMetadataAminoMsg): _114.MsgUpdateGroupMetadata;
                toAminoMsg(message: _114.MsgUpdateGroupMetadata): _114.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupMetadataProtoMsg): _114.MsgUpdateGroupMetadata;
                toProto(message: _114.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupMetadata): _114.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _114.MsgUpdateGroupMetadataResponse;
                toJSON(_: _114.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateGroupMetadataResponse>): _114.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _114.MsgUpdateGroupMetadataResponseAmino): _114.MsgUpdateGroupMetadataResponse;
                toAmino(_: _114.MsgUpdateGroupMetadataResponse): _114.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupMetadataResponseAminoMsg): _114.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _114.MsgUpdateGroupMetadataResponse): _114.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupMetadataResponseProtoMsg): _114.MsgUpdateGroupMetadataResponse;
                toProto(message: _114.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupMetadataResponse): _114.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _114.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateGroupPolicy;
                fromJSON(object: any): _114.MsgCreateGroupPolicy;
                toJSON(message: _114.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_114.MsgCreateGroupPolicy>): _114.MsgCreateGroupPolicy;
                fromAmino(object: _114.MsgCreateGroupPolicyAmino): _114.MsgCreateGroupPolicy;
                toAmino(message: _114.MsgCreateGroupPolicy): _114.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _114.MsgCreateGroupPolicyAminoMsg): _114.MsgCreateGroupPolicy;
                toAminoMsg(message: _114.MsgCreateGroupPolicy): _114.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _114.MsgCreateGroupPolicyProtoMsg): _114.MsgCreateGroupPolicy;
                toProto(message: _114.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _114.MsgCreateGroupPolicy): _114.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _114.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _114.MsgCreateGroupPolicyResponse;
                toJSON(message: _114.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_114.MsgCreateGroupPolicyResponse>): _114.MsgCreateGroupPolicyResponse;
                fromAmino(object: _114.MsgCreateGroupPolicyResponseAmino): _114.MsgCreateGroupPolicyResponse;
                toAmino(message: _114.MsgCreateGroupPolicyResponse): _114.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _114.MsgCreateGroupPolicyResponseAminoMsg): _114.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _114.MsgCreateGroupPolicyResponse): _114.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreateGroupPolicyResponseProtoMsg): _114.MsgCreateGroupPolicyResponse;
                toProto(message: _114.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateGroupPolicyResponse): _114.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                typeUrl: string;
                encode(message: _114.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _114.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _114.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_114.MsgUpdateGroupPolicyAdmin>): _114.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _114.MsgUpdateGroupPolicyAdminAmino): _114.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _114.MsgUpdateGroupPolicyAdmin): _114.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupPolicyAdminAminoMsg): _114.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _114.MsgUpdateGroupPolicyAdmin): _114.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupPolicyAdminProtoMsg): _114.MsgUpdateGroupPolicyAdmin;
                toProto(message: _114.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupPolicyAdmin): _114.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _114.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _114.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateGroupPolicyAdminResponse>): _114.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _114.MsgUpdateGroupPolicyAdminResponseAmino): _114.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _114.MsgUpdateGroupPolicyAdminResponse): _114.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupPolicyAdminResponseAminoMsg): _114.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _114.MsgUpdateGroupPolicyAdminResponse): _114.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupPolicyAdminResponseProtoMsg): _114.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _114.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupPolicyAdminResponse): _114.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                typeUrl: string;
                encode(message: _114.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _114.MsgCreateGroupWithPolicy;
                toJSON(message: _114.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_114.MsgCreateGroupWithPolicy>): _114.MsgCreateGroupWithPolicy;
                fromAmino(object: _114.MsgCreateGroupWithPolicyAmino): _114.MsgCreateGroupWithPolicy;
                toAmino(message: _114.MsgCreateGroupWithPolicy): _114.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _114.MsgCreateGroupWithPolicyAminoMsg): _114.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _114.MsgCreateGroupWithPolicy): _114.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _114.MsgCreateGroupWithPolicyProtoMsg): _114.MsgCreateGroupWithPolicy;
                toProto(message: _114.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _114.MsgCreateGroupWithPolicy): _114.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                typeUrl: string;
                encode(message: _114.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _114.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _114.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_114.MsgCreateGroupWithPolicyResponse>): _114.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _114.MsgCreateGroupWithPolicyResponseAmino): _114.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _114.MsgCreateGroupWithPolicyResponse): _114.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _114.MsgCreateGroupWithPolicyResponseAminoMsg): _114.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _114.MsgCreateGroupWithPolicyResponse): _114.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _114.MsgCreateGroupWithPolicyResponseProtoMsg): _114.MsgCreateGroupWithPolicyResponse;
                toProto(message: _114.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _114.MsgCreateGroupWithPolicyResponse): _114.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                typeUrl: string;
                encode(message: _114.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _114.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _114.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_114.MsgUpdateGroupPolicyDecisionPolicy>): _114.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _114.MsgUpdateGroupPolicyDecisionPolicyAmino): _114.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _114.MsgUpdateGroupPolicyDecisionPolicy): _114.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _114.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _114.MsgUpdateGroupPolicyDecisionPolicy): _114.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _114.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _114.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupPolicyDecisionPolicy): _114.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _114.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _114.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateGroupPolicyDecisionPolicyResponse>): _114.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _114.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _114.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _114.MsgUpdateGroupPolicyDecisionPolicyResponse): _114.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _114.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _114.MsgUpdateGroupPolicyDecisionPolicyResponse): _114.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _114.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _114.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupPolicyDecisionPolicyResponse): _114.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                typeUrl: string;
                encode(message: _114.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _114.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _114.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_114.MsgUpdateGroupPolicyMetadata>): _114.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _114.MsgUpdateGroupPolicyMetadataAmino): _114.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _114.MsgUpdateGroupPolicyMetadata): _114.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupPolicyMetadataAminoMsg): _114.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _114.MsgUpdateGroupPolicyMetadata): _114.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupPolicyMetadataProtoMsg): _114.MsgUpdateGroupPolicyMetadata;
                toProto(message: _114.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupPolicyMetadata): _114.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                typeUrl: string;
                encode(_: _114.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _114.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _114.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_114.MsgUpdateGroupPolicyMetadataResponse>): _114.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _114.MsgUpdateGroupPolicyMetadataResponseAmino): _114.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _114.MsgUpdateGroupPolicyMetadataResponse): _114.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _114.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _114.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _114.MsgUpdateGroupPolicyMetadataResponse): _114.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _114.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _114.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _114.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _114.MsgUpdateGroupPolicyMetadataResponse): _114.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                typeUrl: string;
                encode(message: _114.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitProposal;
                fromJSON(object: any): _114.MsgSubmitProposal;
                toJSON(message: _114.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_114.MsgSubmitProposal>): _114.MsgSubmitProposal;
                fromAmino(object: _114.MsgSubmitProposalAmino): _114.MsgSubmitProposal;
                toAmino(message: _114.MsgSubmitProposal): _114.MsgSubmitProposalAmino;
                fromAminoMsg(object: _114.MsgSubmitProposalAminoMsg): _114.MsgSubmitProposal;
                toAminoMsg(message: _114.MsgSubmitProposal): _114.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _114.MsgSubmitProposalProtoMsg): _114.MsgSubmitProposal;
                toProto(message: _114.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _114.MsgSubmitProposal): _114.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                typeUrl: string;
                encode(message: _114.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgSubmitProposalResponse;
                fromJSON(object: any): _114.MsgSubmitProposalResponse;
                toJSON(message: _114.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_114.MsgSubmitProposalResponse>): _114.MsgSubmitProposalResponse;
                fromAmino(object: _114.MsgSubmitProposalResponseAmino): _114.MsgSubmitProposalResponse;
                toAmino(message: _114.MsgSubmitProposalResponse): _114.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _114.MsgSubmitProposalResponseAminoMsg): _114.MsgSubmitProposalResponse;
                toAminoMsg(message: _114.MsgSubmitProposalResponse): _114.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _114.MsgSubmitProposalResponseProtoMsg): _114.MsgSubmitProposalResponse;
                toProto(message: _114.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _114.MsgSubmitProposalResponse): _114.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                typeUrl: string;
                encode(message: _114.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgWithdrawProposal;
                fromJSON(object: any): _114.MsgWithdrawProposal;
                toJSON(message: _114.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_114.MsgWithdrawProposal>): _114.MsgWithdrawProposal;
                fromAmino(object: _114.MsgWithdrawProposalAmino): _114.MsgWithdrawProposal;
                toAmino(message: _114.MsgWithdrawProposal): _114.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _114.MsgWithdrawProposalAminoMsg): _114.MsgWithdrawProposal;
                toAminoMsg(message: _114.MsgWithdrawProposal): _114.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _114.MsgWithdrawProposalProtoMsg): _114.MsgWithdrawProposal;
                toProto(message: _114.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _114.MsgWithdrawProposal): _114.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                typeUrl: string;
                encode(_: _114.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgWithdrawProposalResponse;
                fromJSON(_: any): _114.MsgWithdrawProposalResponse;
                toJSON(_: _114.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_114.MsgWithdrawProposalResponse>): _114.MsgWithdrawProposalResponse;
                fromAmino(_: _114.MsgWithdrawProposalResponseAmino): _114.MsgWithdrawProposalResponse;
                toAmino(_: _114.MsgWithdrawProposalResponse): _114.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _114.MsgWithdrawProposalResponseAminoMsg): _114.MsgWithdrawProposalResponse;
                toAminoMsg(message: _114.MsgWithdrawProposalResponse): _114.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _114.MsgWithdrawProposalResponseProtoMsg): _114.MsgWithdrawProposalResponse;
                toProto(message: _114.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _114.MsgWithdrawProposalResponse): _114.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                typeUrl: string;
                encode(message: _114.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgVote;
                fromJSON(object: any): _114.MsgVote;
                toJSON(message: _114.MsgVote): unknown;
                fromPartial(object: Partial<_114.MsgVote>): _114.MsgVote;
                fromAmino(object: _114.MsgVoteAmino): _114.MsgVote;
                toAmino(message: _114.MsgVote): _114.MsgVoteAmino;
                fromAminoMsg(object: _114.MsgVoteAminoMsg): _114.MsgVote;
                toAminoMsg(message: _114.MsgVote): _114.MsgVoteAminoMsg;
                fromProtoMsg(message: _114.MsgVoteProtoMsg): _114.MsgVote;
                toProto(message: _114.MsgVote): Uint8Array;
                toProtoMsg(message: _114.MsgVote): _114.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                typeUrl: string;
                encode(_: _114.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgVoteResponse;
                fromJSON(_: any): _114.MsgVoteResponse;
                toJSON(_: _114.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_114.MsgVoteResponse>): _114.MsgVoteResponse;
                fromAmino(_: _114.MsgVoteResponseAmino): _114.MsgVoteResponse;
                toAmino(_: _114.MsgVoteResponse): _114.MsgVoteResponseAmino;
                fromAminoMsg(object: _114.MsgVoteResponseAminoMsg): _114.MsgVoteResponse;
                toAminoMsg(message: _114.MsgVoteResponse): _114.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _114.MsgVoteResponseProtoMsg): _114.MsgVoteResponse;
                toProto(message: _114.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _114.MsgVoteResponse): _114.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                typeUrl: string;
                encode(message: _114.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgExec;
                fromJSON(object: any): _114.MsgExec;
                toJSON(message: _114.MsgExec): unknown;
                fromPartial(object: Partial<_114.MsgExec>): _114.MsgExec;
                fromAmino(object: _114.MsgExecAmino): _114.MsgExec;
                toAmino(message: _114.MsgExec): _114.MsgExecAmino;
                fromAminoMsg(object: _114.MsgExecAminoMsg): _114.MsgExec;
                toAminoMsg(message: _114.MsgExec): _114.MsgExecAminoMsg;
                fromProtoMsg(message: _114.MsgExecProtoMsg): _114.MsgExec;
                toProto(message: _114.MsgExec): Uint8Array;
                toProtoMsg(message: _114.MsgExec): _114.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                typeUrl: string;
                encode(message: _114.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgExecResponse;
                fromJSON(object: any): _114.MsgExecResponse;
                toJSON(message: _114.MsgExecResponse): unknown;
                fromPartial(object: Partial<_114.MsgExecResponse>): _114.MsgExecResponse;
                fromAmino(object: _114.MsgExecResponseAmino): _114.MsgExecResponse;
                toAmino(message: _114.MsgExecResponse): _114.MsgExecResponseAmino;
                fromAminoMsg(object: _114.MsgExecResponseAminoMsg): _114.MsgExecResponse;
                toAminoMsg(message: _114.MsgExecResponse): _114.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _114.MsgExecResponseProtoMsg): _114.MsgExecResponse;
                toProto(message: _114.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _114.MsgExecResponse): _114.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                typeUrl: string;
                encode(message: _114.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgLeaveGroup;
                fromJSON(object: any): _114.MsgLeaveGroup;
                toJSON(message: _114.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_114.MsgLeaveGroup>): _114.MsgLeaveGroup;
                fromAmino(object: _114.MsgLeaveGroupAmino): _114.MsgLeaveGroup;
                toAmino(message: _114.MsgLeaveGroup): _114.MsgLeaveGroupAmino;
                fromAminoMsg(object: _114.MsgLeaveGroupAminoMsg): _114.MsgLeaveGroup;
                toAminoMsg(message: _114.MsgLeaveGroup): _114.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _114.MsgLeaveGroupProtoMsg): _114.MsgLeaveGroup;
                toProto(message: _114.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _114.MsgLeaveGroup): _114.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                typeUrl: string;
                encode(_: _114.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.MsgLeaveGroupResponse;
                fromJSON(_: any): _114.MsgLeaveGroupResponse;
                toJSON(_: _114.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_114.MsgLeaveGroupResponse>): _114.MsgLeaveGroupResponse;
                fromAmino(_: _114.MsgLeaveGroupResponseAmino): _114.MsgLeaveGroupResponse;
                toAmino(_: _114.MsgLeaveGroupResponse): _114.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _114.MsgLeaveGroupResponseAminoMsg): _114.MsgLeaveGroupResponse;
                toAminoMsg(message: _114.MsgLeaveGroupResponse): _114.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _114.MsgLeaveGroupResponseProtoMsg): _114.MsgLeaveGroupResponse;
                toProto(message: _114.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _114.MsgLeaveGroupResponse): _114.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                typeUrl: string;
                encode(message: _113.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupInfoRequest;
                fromJSON(object: any): _113.QueryGroupInfoRequest;
                toJSON(message: _113.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_113.QueryGroupInfoRequest>): _113.QueryGroupInfoRequest;
                fromAmino(object: _113.QueryGroupInfoRequestAmino): _113.QueryGroupInfoRequest;
                toAmino(message: _113.QueryGroupInfoRequest): _113.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _113.QueryGroupInfoRequestAminoMsg): _113.QueryGroupInfoRequest;
                toAminoMsg(message: _113.QueryGroupInfoRequest): _113.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _113.QueryGroupInfoRequestProtoMsg): _113.QueryGroupInfoRequest;
                toProto(message: _113.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _113.QueryGroupInfoRequest): _113.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                typeUrl: string;
                encode(message: _113.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupInfoResponse;
                fromJSON(object: any): _113.QueryGroupInfoResponse;
                toJSON(message: _113.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_113.QueryGroupInfoResponse>): _113.QueryGroupInfoResponse;
                fromAmino(object: _113.QueryGroupInfoResponseAmino): _113.QueryGroupInfoResponse;
                toAmino(message: _113.QueryGroupInfoResponse): _113.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _113.QueryGroupInfoResponseAminoMsg): _113.QueryGroupInfoResponse;
                toAminoMsg(message: _113.QueryGroupInfoResponse): _113.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _113.QueryGroupInfoResponseProtoMsg): _113.QueryGroupInfoResponse;
                toProto(message: _113.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _113.QueryGroupInfoResponse): _113.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                typeUrl: string;
                encode(message: _113.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _113.QueryGroupPolicyInfoRequest;
                toJSON(message: _113.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_113.QueryGroupPolicyInfoRequest>): _113.QueryGroupPolicyInfoRequest;
                fromAmino(object: _113.QueryGroupPolicyInfoRequestAmino): _113.QueryGroupPolicyInfoRequest;
                toAmino(message: _113.QueryGroupPolicyInfoRequest): _113.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _113.QueryGroupPolicyInfoRequestAminoMsg): _113.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _113.QueryGroupPolicyInfoRequest): _113.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _113.QueryGroupPolicyInfoRequestProtoMsg): _113.QueryGroupPolicyInfoRequest;
                toProto(message: _113.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _113.QueryGroupPolicyInfoRequest): _113.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                typeUrl: string;
                encode(message: _113.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _113.QueryGroupPolicyInfoResponse;
                toJSON(message: _113.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_113.QueryGroupPolicyInfoResponse>): _113.QueryGroupPolicyInfoResponse;
                fromAmino(object: _113.QueryGroupPolicyInfoResponseAmino): _113.QueryGroupPolicyInfoResponse;
                toAmino(message: _113.QueryGroupPolicyInfoResponse): _113.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _113.QueryGroupPolicyInfoResponseAminoMsg): _113.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _113.QueryGroupPolicyInfoResponse): _113.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _113.QueryGroupPolicyInfoResponseProtoMsg): _113.QueryGroupPolicyInfoResponse;
                toProto(message: _113.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _113.QueryGroupPolicyInfoResponse): _113.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                typeUrl: string;
                encode(message: _113.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupMembersRequest;
                fromJSON(object: any): _113.QueryGroupMembersRequest;
                toJSON(message: _113.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_113.QueryGroupMembersRequest>): _113.QueryGroupMembersRequest;
                fromAmino(object: _113.QueryGroupMembersRequestAmino): _113.QueryGroupMembersRequest;
                toAmino(message: _113.QueryGroupMembersRequest): _113.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _113.QueryGroupMembersRequestAminoMsg): _113.QueryGroupMembersRequest;
                toAminoMsg(message: _113.QueryGroupMembersRequest): _113.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _113.QueryGroupMembersRequestProtoMsg): _113.QueryGroupMembersRequest;
                toProto(message: _113.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _113.QueryGroupMembersRequest): _113.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                typeUrl: string;
                encode(message: _113.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupMembersResponse;
                fromJSON(object: any): _113.QueryGroupMembersResponse;
                toJSON(message: _113.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_113.QueryGroupMembersResponse>): _113.QueryGroupMembersResponse;
                fromAmino(object: _113.QueryGroupMembersResponseAmino): _113.QueryGroupMembersResponse;
                toAmino(message: _113.QueryGroupMembersResponse): _113.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _113.QueryGroupMembersResponseAminoMsg): _113.QueryGroupMembersResponse;
                toAminoMsg(message: _113.QueryGroupMembersResponse): _113.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _113.QueryGroupMembersResponseProtoMsg): _113.QueryGroupMembersResponse;
                toProto(message: _113.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _113.QueryGroupMembersResponse): _113.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                typeUrl: string;
                encode(message: _113.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupsByAdminRequest;
                fromJSON(object: any): _113.QueryGroupsByAdminRequest;
                toJSON(message: _113.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_113.QueryGroupsByAdminRequest>): _113.QueryGroupsByAdminRequest;
                fromAmino(object: _113.QueryGroupsByAdminRequestAmino): _113.QueryGroupsByAdminRequest;
                toAmino(message: _113.QueryGroupsByAdminRequest): _113.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _113.QueryGroupsByAdminRequestAminoMsg): _113.QueryGroupsByAdminRequest;
                toAminoMsg(message: _113.QueryGroupsByAdminRequest): _113.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _113.QueryGroupsByAdminRequestProtoMsg): _113.QueryGroupsByAdminRequest;
                toProto(message: _113.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _113.QueryGroupsByAdminRequest): _113.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                typeUrl: string;
                encode(message: _113.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupsByAdminResponse;
                fromJSON(object: any): _113.QueryGroupsByAdminResponse;
                toJSON(message: _113.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_113.QueryGroupsByAdminResponse>): _113.QueryGroupsByAdminResponse;
                fromAmino(object: _113.QueryGroupsByAdminResponseAmino): _113.QueryGroupsByAdminResponse;
                toAmino(message: _113.QueryGroupsByAdminResponse): _113.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _113.QueryGroupsByAdminResponseAminoMsg): _113.QueryGroupsByAdminResponse;
                toAminoMsg(message: _113.QueryGroupsByAdminResponse): _113.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _113.QueryGroupsByAdminResponseProtoMsg): _113.QueryGroupsByAdminResponse;
                toProto(message: _113.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _113.QueryGroupsByAdminResponse): _113.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                typeUrl: string;
                encode(message: _113.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _113.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _113.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_113.QueryGroupPoliciesByGroupRequest>): _113.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _113.QueryGroupPoliciesByGroupRequestAmino): _113.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _113.QueryGroupPoliciesByGroupRequest): _113.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _113.QueryGroupPoliciesByGroupRequestAminoMsg): _113.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _113.QueryGroupPoliciesByGroupRequest): _113.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _113.QueryGroupPoliciesByGroupRequestProtoMsg): _113.QueryGroupPoliciesByGroupRequest;
                toProto(message: _113.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _113.QueryGroupPoliciesByGroupRequest): _113.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                typeUrl: string;
                encode(message: _113.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _113.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _113.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_113.QueryGroupPoliciesByGroupResponse>): _113.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _113.QueryGroupPoliciesByGroupResponseAmino): _113.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _113.QueryGroupPoliciesByGroupResponse): _113.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _113.QueryGroupPoliciesByGroupResponseAminoMsg): _113.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _113.QueryGroupPoliciesByGroupResponse): _113.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _113.QueryGroupPoliciesByGroupResponseProtoMsg): _113.QueryGroupPoliciesByGroupResponse;
                toProto(message: _113.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _113.QueryGroupPoliciesByGroupResponse): _113.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                typeUrl: string;
                encode(message: _113.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _113.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _113.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_113.QueryGroupPoliciesByAdminRequest>): _113.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _113.QueryGroupPoliciesByAdminRequestAmino): _113.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _113.QueryGroupPoliciesByAdminRequest): _113.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _113.QueryGroupPoliciesByAdminRequestAminoMsg): _113.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _113.QueryGroupPoliciesByAdminRequest): _113.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _113.QueryGroupPoliciesByAdminRequestProtoMsg): _113.QueryGroupPoliciesByAdminRequest;
                toProto(message: _113.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _113.QueryGroupPoliciesByAdminRequest): _113.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                typeUrl: string;
                encode(message: _113.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _113.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _113.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_113.QueryGroupPoliciesByAdminResponse>): _113.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _113.QueryGroupPoliciesByAdminResponseAmino): _113.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _113.QueryGroupPoliciesByAdminResponse): _113.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _113.QueryGroupPoliciesByAdminResponseAminoMsg): _113.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _113.QueryGroupPoliciesByAdminResponse): _113.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _113.QueryGroupPoliciesByAdminResponseProtoMsg): _113.QueryGroupPoliciesByAdminResponse;
                toProto(message: _113.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _113.QueryGroupPoliciesByAdminResponse): _113.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                typeUrl: string;
                encode(message: _113.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProposalRequest;
                fromJSON(object: any): _113.QueryProposalRequest;
                toJSON(message: _113.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_113.QueryProposalRequest>): _113.QueryProposalRequest;
                fromAmino(object: _113.QueryProposalRequestAmino): _113.QueryProposalRequest;
                toAmino(message: _113.QueryProposalRequest): _113.QueryProposalRequestAmino;
                fromAminoMsg(object: _113.QueryProposalRequestAminoMsg): _113.QueryProposalRequest;
                toAminoMsg(message: _113.QueryProposalRequest): _113.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _113.QueryProposalRequestProtoMsg): _113.QueryProposalRequest;
                toProto(message: _113.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _113.QueryProposalRequest): _113.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                typeUrl: string;
                encode(message: _113.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProposalResponse;
                fromJSON(object: any): _113.QueryProposalResponse;
                toJSON(message: _113.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_113.QueryProposalResponse>): _113.QueryProposalResponse;
                fromAmino(object: _113.QueryProposalResponseAmino): _113.QueryProposalResponse;
                toAmino(message: _113.QueryProposalResponse): _113.QueryProposalResponseAmino;
                fromAminoMsg(object: _113.QueryProposalResponseAminoMsg): _113.QueryProposalResponse;
                toAminoMsg(message: _113.QueryProposalResponse): _113.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _113.QueryProposalResponseProtoMsg): _113.QueryProposalResponse;
                toProto(message: _113.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _113.QueryProposalResponse): _113.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                typeUrl: string;
                encode(message: _113.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _113.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _113.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_113.QueryProposalsByGroupPolicyRequest>): _113.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _113.QueryProposalsByGroupPolicyRequestAmino): _113.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _113.QueryProposalsByGroupPolicyRequest): _113.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _113.QueryProposalsByGroupPolicyRequestAminoMsg): _113.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _113.QueryProposalsByGroupPolicyRequest): _113.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _113.QueryProposalsByGroupPolicyRequestProtoMsg): _113.QueryProposalsByGroupPolicyRequest;
                toProto(message: _113.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _113.QueryProposalsByGroupPolicyRequest): _113.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                typeUrl: string;
                encode(message: _113.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _113.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _113.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_113.QueryProposalsByGroupPolicyResponse>): _113.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _113.QueryProposalsByGroupPolicyResponseAmino): _113.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _113.QueryProposalsByGroupPolicyResponse): _113.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _113.QueryProposalsByGroupPolicyResponseAminoMsg): _113.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _113.QueryProposalsByGroupPolicyResponse): _113.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _113.QueryProposalsByGroupPolicyResponseProtoMsg): _113.QueryProposalsByGroupPolicyResponse;
                toProto(message: _113.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _113.QueryProposalsByGroupPolicyResponse): _113.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                typeUrl: string;
                encode(message: _113.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _113.QueryVoteByProposalVoterRequest;
                toJSON(message: _113.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_113.QueryVoteByProposalVoterRequest>): _113.QueryVoteByProposalVoterRequest;
                fromAmino(object: _113.QueryVoteByProposalVoterRequestAmino): _113.QueryVoteByProposalVoterRequest;
                toAmino(message: _113.QueryVoteByProposalVoterRequest): _113.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _113.QueryVoteByProposalVoterRequestAminoMsg): _113.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _113.QueryVoteByProposalVoterRequest): _113.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _113.QueryVoteByProposalVoterRequestProtoMsg): _113.QueryVoteByProposalVoterRequest;
                toProto(message: _113.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _113.QueryVoteByProposalVoterRequest): _113.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                typeUrl: string;
                encode(message: _113.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _113.QueryVoteByProposalVoterResponse;
                toJSON(message: _113.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_113.QueryVoteByProposalVoterResponse>): _113.QueryVoteByProposalVoterResponse;
                fromAmino(object: _113.QueryVoteByProposalVoterResponseAmino): _113.QueryVoteByProposalVoterResponse;
                toAmino(message: _113.QueryVoteByProposalVoterResponse): _113.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _113.QueryVoteByProposalVoterResponseAminoMsg): _113.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _113.QueryVoteByProposalVoterResponse): _113.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _113.QueryVoteByProposalVoterResponseProtoMsg): _113.QueryVoteByProposalVoterResponse;
                toProto(message: _113.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _113.QueryVoteByProposalVoterResponse): _113.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                typeUrl: string;
                encode(message: _113.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVotesByProposalRequest;
                fromJSON(object: any): _113.QueryVotesByProposalRequest;
                toJSON(message: _113.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_113.QueryVotesByProposalRequest>): _113.QueryVotesByProposalRequest;
                fromAmino(object: _113.QueryVotesByProposalRequestAmino): _113.QueryVotesByProposalRequest;
                toAmino(message: _113.QueryVotesByProposalRequest): _113.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _113.QueryVotesByProposalRequestAminoMsg): _113.QueryVotesByProposalRequest;
                toAminoMsg(message: _113.QueryVotesByProposalRequest): _113.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _113.QueryVotesByProposalRequestProtoMsg): _113.QueryVotesByProposalRequest;
                toProto(message: _113.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _113.QueryVotesByProposalRequest): _113.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                typeUrl: string;
                encode(message: _113.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVotesByProposalResponse;
                fromJSON(object: any): _113.QueryVotesByProposalResponse;
                toJSON(message: _113.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_113.QueryVotesByProposalResponse>): _113.QueryVotesByProposalResponse;
                fromAmino(object: _113.QueryVotesByProposalResponseAmino): _113.QueryVotesByProposalResponse;
                toAmino(message: _113.QueryVotesByProposalResponse): _113.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _113.QueryVotesByProposalResponseAminoMsg): _113.QueryVotesByProposalResponse;
                toAminoMsg(message: _113.QueryVotesByProposalResponse): _113.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _113.QueryVotesByProposalResponseProtoMsg): _113.QueryVotesByProposalResponse;
                toProto(message: _113.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _113.QueryVotesByProposalResponse): _113.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                typeUrl: string;
                encode(message: _113.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVotesByVoterRequest;
                fromJSON(object: any): _113.QueryVotesByVoterRequest;
                toJSON(message: _113.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_113.QueryVotesByVoterRequest>): _113.QueryVotesByVoterRequest;
                fromAmino(object: _113.QueryVotesByVoterRequestAmino): _113.QueryVotesByVoterRequest;
                toAmino(message: _113.QueryVotesByVoterRequest): _113.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _113.QueryVotesByVoterRequestAminoMsg): _113.QueryVotesByVoterRequest;
                toAminoMsg(message: _113.QueryVotesByVoterRequest): _113.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _113.QueryVotesByVoterRequestProtoMsg): _113.QueryVotesByVoterRequest;
                toProto(message: _113.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _113.QueryVotesByVoterRequest): _113.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                typeUrl: string;
                encode(message: _113.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryVotesByVoterResponse;
                fromJSON(object: any): _113.QueryVotesByVoterResponse;
                toJSON(message: _113.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_113.QueryVotesByVoterResponse>): _113.QueryVotesByVoterResponse;
                fromAmino(object: _113.QueryVotesByVoterResponseAmino): _113.QueryVotesByVoterResponse;
                toAmino(message: _113.QueryVotesByVoterResponse): _113.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _113.QueryVotesByVoterResponseAminoMsg): _113.QueryVotesByVoterResponse;
                toAminoMsg(message: _113.QueryVotesByVoterResponse): _113.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _113.QueryVotesByVoterResponseProtoMsg): _113.QueryVotesByVoterResponse;
                toProto(message: _113.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _113.QueryVotesByVoterResponse): _113.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                typeUrl: string;
                encode(message: _113.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupsByMemberRequest;
                fromJSON(object: any): _113.QueryGroupsByMemberRequest;
                toJSON(message: _113.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_113.QueryGroupsByMemberRequest>): _113.QueryGroupsByMemberRequest;
                fromAmino(object: _113.QueryGroupsByMemberRequestAmino): _113.QueryGroupsByMemberRequest;
                toAmino(message: _113.QueryGroupsByMemberRequest): _113.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _113.QueryGroupsByMemberRequestAminoMsg): _113.QueryGroupsByMemberRequest;
                toAminoMsg(message: _113.QueryGroupsByMemberRequest): _113.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _113.QueryGroupsByMemberRequestProtoMsg): _113.QueryGroupsByMemberRequest;
                toProto(message: _113.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _113.QueryGroupsByMemberRequest): _113.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                typeUrl: string;
                encode(message: _113.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupsByMemberResponse;
                fromJSON(object: any): _113.QueryGroupsByMemberResponse;
                toJSON(message: _113.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_113.QueryGroupsByMemberResponse>): _113.QueryGroupsByMemberResponse;
                fromAmino(object: _113.QueryGroupsByMemberResponseAmino): _113.QueryGroupsByMemberResponse;
                toAmino(message: _113.QueryGroupsByMemberResponse): _113.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _113.QueryGroupsByMemberResponseAminoMsg): _113.QueryGroupsByMemberResponse;
                toAminoMsg(message: _113.QueryGroupsByMemberResponse): _113.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _113.QueryGroupsByMemberResponseProtoMsg): _113.QueryGroupsByMemberResponse;
                toProto(message: _113.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _113.QueryGroupsByMemberResponse): _113.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                typeUrl: string;
                encode(message: _113.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTallyResultRequest;
                fromJSON(object: any): _113.QueryTallyResultRequest;
                toJSON(message: _113.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_113.QueryTallyResultRequest>): _113.QueryTallyResultRequest;
                fromAmino(object: _113.QueryTallyResultRequestAmino): _113.QueryTallyResultRequest;
                toAmino(message: _113.QueryTallyResultRequest): _113.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _113.QueryTallyResultRequestAminoMsg): _113.QueryTallyResultRequest;
                toAminoMsg(message: _113.QueryTallyResultRequest): _113.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _113.QueryTallyResultRequestProtoMsg): _113.QueryTallyResultRequest;
                toProto(message: _113.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _113.QueryTallyResultRequest): _113.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                typeUrl: string;
                encode(message: _113.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryTallyResultResponse;
                fromJSON(object: any): _113.QueryTallyResultResponse;
                toJSON(message: _113.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_113.QueryTallyResultResponse>): _113.QueryTallyResultResponse;
                fromAmino(object: _113.QueryTallyResultResponseAmino): _113.QueryTallyResultResponse;
                toAmino(message: _113.QueryTallyResultResponse): _113.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _113.QueryTallyResultResponseAminoMsg): _113.QueryTallyResultResponse;
                toAminoMsg(message: _113.QueryTallyResultResponse): _113.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _113.QueryTallyResultResponseProtoMsg): _113.QueryTallyResultResponse;
                toProto(message: _113.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _113.QueryTallyResultResponse): _113.QueryTallyResultResponseProtoMsg;
            };
            QueryGroupsRequest: {
                typeUrl: string;
                encode(message: _113.QueryGroupsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupsRequest;
                fromJSON(object: any): _113.QueryGroupsRequest;
                toJSON(message: _113.QueryGroupsRequest): unknown;
                fromPartial(object: Partial<_113.QueryGroupsRequest>): _113.QueryGroupsRequest;
                fromAmino(object: _113.QueryGroupsRequestAmino): _113.QueryGroupsRequest;
                toAmino(message: _113.QueryGroupsRequest): _113.QueryGroupsRequestAmino;
                fromAminoMsg(object: _113.QueryGroupsRequestAminoMsg): _113.QueryGroupsRequest;
                toAminoMsg(message: _113.QueryGroupsRequest): _113.QueryGroupsRequestAminoMsg;
                fromProtoMsg(message: _113.QueryGroupsRequestProtoMsg): _113.QueryGroupsRequest;
                toProto(message: _113.QueryGroupsRequest): Uint8Array;
                toProtoMsg(message: _113.QueryGroupsRequest): _113.QueryGroupsRequestProtoMsg;
            };
            QueryGroupsResponse: {
                typeUrl: string;
                encode(message: _113.QueryGroupsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.QueryGroupsResponse;
                fromJSON(object: any): _113.QueryGroupsResponse;
                toJSON(message: _113.QueryGroupsResponse): unknown;
                fromPartial(object: Partial<_113.QueryGroupsResponse>): _113.QueryGroupsResponse;
                fromAmino(object: _113.QueryGroupsResponseAmino): _113.QueryGroupsResponse;
                toAmino(message: _113.QueryGroupsResponse): _113.QueryGroupsResponseAmino;
                fromAminoMsg(object: _113.QueryGroupsResponseAminoMsg): _113.QueryGroupsResponse;
                toAminoMsg(message: _113.QueryGroupsResponse): _113.QueryGroupsResponseAminoMsg;
                fromProtoMsg(message: _113.QueryGroupsResponseProtoMsg): _113.QueryGroupsResponse;
                toProto(message: _113.QueryGroupsResponse): Uint8Array;
                toProtoMsg(message: _113.QueryGroupsResponse): _113.QueryGroupsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _112.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.GenesisState;
                fromJSON(object: any): _112.GenesisState;
                toJSON(message: _112.GenesisState): unknown;
                fromPartial(object: Partial<_112.GenesisState>): _112.GenesisState;
                fromAmino(object: _112.GenesisStateAmino): _112.GenesisState;
                toAmino(message: _112.GenesisState): _112.GenesisStateAmino;
                fromAminoMsg(object: _112.GenesisStateAminoMsg): _112.GenesisState;
                toAminoMsg(message: _112.GenesisState): _112.GenesisStateAminoMsg;
                fromProtoMsg(message: _112.GenesisStateProtoMsg): _112.GenesisState;
                toProto(message: _112.GenesisState): Uint8Array;
                toProtoMsg(message: _112.GenesisState): _112.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                typeUrl: string;
                encode(message: _111.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventCreateGroup;
                fromJSON(object: any): _111.EventCreateGroup;
                toJSON(message: _111.EventCreateGroup): unknown;
                fromPartial(object: Partial<_111.EventCreateGroup>): _111.EventCreateGroup;
                fromAmino(object: _111.EventCreateGroupAmino): _111.EventCreateGroup;
                toAmino(message: _111.EventCreateGroup): _111.EventCreateGroupAmino;
                fromAminoMsg(object: _111.EventCreateGroupAminoMsg): _111.EventCreateGroup;
                toAminoMsg(message: _111.EventCreateGroup): _111.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _111.EventCreateGroupProtoMsg): _111.EventCreateGroup;
                toProto(message: _111.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _111.EventCreateGroup): _111.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                typeUrl: string;
                encode(message: _111.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventUpdateGroup;
                fromJSON(object: any): _111.EventUpdateGroup;
                toJSON(message: _111.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_111.EventUpdateGroup>): _111.EventUpdateGroup;
                fromAmino(object: _111.EventUpdateGroupAmino): _111.EventUpdateGroup;
                toAmino(message: _111.EventUpdateGroup): _111.EventUpdateGroupAmino;
                fromAminoMsg(object: _111.EventUpdateGroupAminoMsg): _111.EventUpdateGroup;
                toAminoMsg(message: _111.EventUpdateGroup): _111.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _111.EventUpdateGroupProtoMsg): _111.EventUpdateGroup;
                toProto(message: _111.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _111.EventUpdateGroup): _111.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                typeUrl: string;
                encode(message: _111.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventCreateGroupPolicy;
                fromJSON(object: any): _111.EventCreateGroupPolicy;
                toJSON(message: _111.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_111.EventCreateGroupPolicy>): _111.EventCreateGroupPolicy;
                fromAmino(object: _111.EventCreateGroupPolicyAmino): _111.EventCreateGroupPolicy;
                toAmino(message: _111.EventCreateGroupPolicy): _111.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _111.EventCreateGroupPolicyAminoMsg): _111.EventCreateGroupPolicy;
                toAminoMsg(message: _111.EventCreateGroupPolicy): _111.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _111.EventCreateGroupPolicyProtoMsg): _111.EventCreateGroupPolicy;
                toProto(message: _111.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _111.EventCreateGroupPolicy): _111.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                typeUrl: string;
                encode(message: _111.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventUpdateGroupPolicy;
                fromJSON(object: any): _111.EventUpdateGroupPolicy;
                toJSON(message: _111.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_111.EventUpdateGroupPolicy>): _111.EventUpdateGroupPolicy;
                fromAmino(object: _111.EventUpdateGroupPolicyAmino): _111.EventUpdateGroupPolicy;
                toAmino(message: _111.EventUpdateGroupPolicy): _111.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _111.EventUpdateGroupPolicyAminoMsg): _111.EventUpdateGroupPolicy;
                toAminoMsg(message: _111.EventUpdateGroupPolicy): _111.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _111.EventUpdateGroupPolicyProtoMsg): _111.EventUpdateGroupPolicy;
                toProto(message: _111.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _111.EventUpdateGroupPolicy): _111.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                typeUrl: string;
                encode(message: _111.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventSubmitProposal;
                fromJSON(object: any): _111.EventSubmitProposal;
                toJSON(message: _111.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_111.EventSubmitProposal>): _111.EventSubmitProposal;
                fromAmino(object: _111.EventSubmitProposalAmino): _111.EventSubmitProposal;
                toAmino(message: _111.EventSubmitProposal): _111.EventSubmitProposalAmino;
                fromAminoMsg(object: _111.EventSubmitProposalAminoMsg): _111.EventSubmitProposal;
                toAminoMsg(message: _111.EventSubmitProposal): _111.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _111.EventSubmitProposalProtoMsg): _111.EventSubmitProposal;
                toProto(message: _111.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _111.EventSubmitProposal): _111.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                typeUrl: string;
                encode(message: _111.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventWithdrawProposal;
                fromJSON(object: any): _111.EventWithdrawProposal;
                toJSON(message: _111.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_111.EventWithdrawProposal>): _111.EventWithdrawProposal;
                fromAmino(object: _111.EventWithdrawProposalAmino): _111.EventWithdrawProposal;
                toAmino(message: _111.EventWithdrawProposal): _111.EventWithdrawProposalAmino;
                fromAminoMsg(object: _111.EventWithdrawProposalAminoMsg): _111.EventWithdrawProposal;
                toAminoMsg(message: _111.EventWithdrawProposal): _111.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _111.EventWithdrawProposalProtoMsg): _111.EventWithdrawProposal;
                toProto(message: _111.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _111.EventWithdrawProposal): _111.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                typeUrl: string;
                encode(message: _111.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventVote;
                fromJSON(object: any): _111.EventVote;
                toJSON(message: _111.EventVote): unknown;
                fromPartial(object: Partial<_111.EventVote>): _111.EventVote;
                fromAmino(object: _111.EventVoteAmino): _111.EventVote;
                toAmino(message: _111.EventVote): _111.EventVoteAmino;
                fromAminoMsg(object: _111.EventVoteAminoMsg): _111.EventVote;
                toAminoMsg(message: _111.EventVote): _111.EventVoteAminoMsg;
                fromProtoMsg(message: _111.EventVoteProtoMsg): _111.EventVote;
                toProto(message: _111.EventVote): Uint8Array;
                toProtoMsg(message: _111.EventVote): _111.EventVoteProtoMsg;
            };
            EventExec: {
                typeUrl: string;
                encode(message: _111.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventExec;
                fromJSON(object: any): _111.EventExec;
                toJSON(message: _111.EventExec): unknown;
                fromPartial(object: Partial<_111.EventExec>): _111.EventExec;
                fromAmino(object: _111.EventExecAmino): _111.EventExec;
                toAmino(message: _111.EventExec): _111.EventExecAmino;
                fromAminoMsg(object: _111.EventExecAminoMsg): _111.EventExec;
                toAminoMsg(message: _111.EventExec): _111.EventExecAminoMsg;
                fromProtoMsg(message: _111.EventExecProtoMsg): _111.EventExec;
                toProto(message: _111.EventExec): Uint8Array;
                toProtoMsg(message: _111.EventExec): _111.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                typeUrl: string;
                encode(message: _111.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventLeaveGroup;
                fromJSON(object: any): _111.EventLeaveGroup;
                toJSON(message: _111.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_111.EventLeaveGroup>): _111.EventLeaveGroup;
                fromAmino(object: _111.EventLeaveGroupAmino): _111.EventLeaveGroup;
                toAmino(message: _111.EventLeaveGroup): _111.EventLeaveGroupAmino;
                fromAminoMsg(object: _111.EventLeaveGroupAminoMsg): _111.EventLeaveGroup;
                toAminoMsg(message: _111.EventLeaveGroup): _111.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _111.EventLeaveGroupProtoMsg): _111.EventLeaveGroup;
                toProto(message: _111.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _111.EventLeaveGroup): _111.EventLeaveGroupProtoMsg;
            };
            EventProposalPruned: {
                typeUrl: string;
                encode(message: _111.EventProposalPruned, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.EventProposalPruned;
                fromJSON(object: any): _111.EventProposalPruned;
                toJSON(message: _111.EventProposalPruned): unknown;
                fromPartial(object: Partial<_111.EventProposalPruned>): _111.EventProposalPruned;
                fromAmino(object: _111.EventProposalPrunedAmino): _111.EventProposalPruned;
                toAmino(message: _111.EventProposalPruned): _111.EventProposalPrunedAmino;
                fromAminoMsg(object: _111.EventProposalPrunedAminoMsg): _111.EventProposalPruned;
                toAminoMsg(message: _111.EventProposalPruned): _111.EventProposalPrunedAminoMsg;
                fromProtoMsg(message: _111.EventProposalPrunedProtoMsg): _111.EventProposalPruned;
                toProto(message: _111.EventProposalPruned): Uint8Array;
                toProtoMsg(message: _111.EventProposalPruned): _111.EventProposalPrunedProtoMsg;
            };
        };
    }
    namespace mint {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _116.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _116.Module;
                    fromJSON(object: any): _116.Module;
                    toJSON(message: _116.Module): unknown;
                    fromPartial(object: Partial<_116.Module>): _116.Module;
                    fromAmino(object: _116.ModuleAmino): _116.Module;
                    toAmino(message: _116.Module): _116.ModuleAmino;
                    fromAminoMsg(object: _116.ModuleAminoMsg): _116.Module;
                    toAminoMsg(message: _116.Module): _116.ModuleAminoMsg;
                    fromProtoMsg(message: _116.ModuleProtoMsg): _116.Module;
                    toProto(message: _116.Module): Uint8Array;
                    toProtoMsg(message: _116.Module): _116.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _306.MsgClientImpl;
            QueryClientImpl: typeof _287.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                inflation(request?: _119.QueryInflationRequest): Promise<_119.QueryInflationResponse>;
                annualProvisions(request?: _119.QueryAnnualProvisionsRequest): Promise<_119.QueryAnnualProvisionsResponse>;
            };
            LCDQueryClient: typeof _266.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    updateParams(value: _120.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    updateParams(value: _120.MsgUpdateParams): {
                        typeUrl: string;
                        value: _120.MsgUpdateParams;
                    };
                };
                toJSON: {
                    updateParams(value: _120.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _120.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    updateParams(value: _120.MsgUpdateParams): {
                        typeUrl: string;
                        value: _120.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.mint.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _120.MsgUpdateParams) => _120.MsgUpdateParamsAmino;
                    fromAmino: (object: _120.MsgUpdateParamsAmino) => _120.MsgUpdateParams;
                };
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _120.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpdateParams;
                fromJSON(object: any): _120.MsgUpdateParams;
                toJSON(message: _120.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_120.MsgUpdateParams>): _120.MsgUpdateParams;
                fromAmino(object: _120.MsgUpdateParamsAmino): _120.MsgUpdateParams;
                toAmino(message: _120.MsgUpdateParams): _120.MsgUpdateParamsAmino;
                fromAminoMsg(object: _120.MsgUpdateParamsAminoMsg): _120.MsgUpdateParams;
                toAminoMsg(message: _120.MsgUpdateParams): _120.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _120.MsgUpdateParamsProtoMsg): _120.MsgUpdateParams;
                toProto(message: _120.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _120.MsgUpdateParams): _120.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _120.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.MsgUpdateParamsResponse;
                fromJSON(_: any): _120.MsgUpdateParamsResponse;
                toJSON(_: _120.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_120.MsgUpdateParamsResponse>): _120.MsgUpdateParamsResponse;
                fromAmino(_: _120.MsgUpdateParamsResponseAmino): _120.MsgUpdateParamsResponse;
                toAmino(_: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _120.MsgUpdateParamsResponseAminoMsg): _120.MsgUpdateParamsResponse;
                toAminoMsg(message: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _120.MsgUpdateParamsResponseProtoMsg): _120.MsgUpdateParamsResponse;
                toProto(message: _120.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _120.MsgUpdateParamsResponse): _120.MsgUpdateParamsResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _119.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryParamsRequest;
                fromJSON(_: any): _119.QueryParamsRequest;
                toJSON(_: _119.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_119.QueryParamsRequest>): _119.QueryParamsRequest;
                fromAmino(_: _119.QueryParamsRequestAmino): _119.QueryParamsRequest;
                toAmino(_: _119.QueryParamsRequest): _119.QueryParamsRequestAmino;
                fromAminoMsg(object: _119.QueryParamsRequestAminoMsg): _119.QueryParamsRequest;
                toAminoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryParamsRequestProtoMsg): _119.QueryParamsRequest;
                toProto(message: _119.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryParamsRequest): _119.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _119.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryParamsResponse;
                fromJSON(object: any): _119.QueryParamsResponse;
                toJSON(message: _119.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_119.QueryParamsResponse>): _119.QueryParamsResponse;
                fromAmino(object: _119.QueryParamsResponseAmino): _119.QueryParamsResponse;
                toAmino(message: _119.QueryParamsResponse): _119.QueryParamsResponseAmino;
                fromAminoMsg(object: _119.QueryParamsResponseAminoMsg): _119.QueryParamsResponse;
                toAminoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryParamsResponseProtoMsg): _119.QueryParamsResponse;
                toProto(message: _119.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryParamsResponse): _119.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                typeUrl: string;
                encode(_: _119.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryInflationRequest;
                fromJSON(_: any): _119.QueryInflationRequest;
                toJSON(_: _119.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_119.QueryInflationRequest>): _119.QueryInflationRequest;
                fromAmino(_: _119.QueryInflationRequestAmino): _119.QueryInflationRequest;
                toAmino(_: _119.QueryInflationRequest): _119.QueryInflationRequestAmino;
                fromAminoMsg(object: _119.QueryInflationRequestAminoMsg): _119.QueryInflationRequest;
                toAminoMsg(message: _119.QueryInflationRequest): _119.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _119.QueryInflationRequestProtoMsg): _119.QueryInflationRequest;
                toProto(message: _119.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _119.QueryInflationRequest): _119.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                typeUrl: string;
                encode(message: _119.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryInflationResponse;
                fromJSON(object: any): _119.QueryInflationResponse;
                toJSON(message: _119.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_119.QueryInflationResponse>): _119.QueryInflationResponse;
                fromAmino(object: _119.QueryInflationResponseAmino): _119.QueryInflationResponse;
                toAmino(message: _119.QueryInflationResponse): _119.QueryInflationResponseAmino;
                fromAminoMsg(object: _119.QueryInflationResponseAminoMsg): _119.QueryInflationResponse;
                toAminoMsg(message: _119.QueryInflationResponse): _119.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _119.QueryInflationResponseProtoMsg): _119.QueryInflationResponse;
                toProto(message: _119.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _119.QueryInflationResponse): _119.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                typeUrl: string;
                encode(_: _119.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _119.QueryAnnualProvisionsRequest;
                toJSON(_: _119.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_119.QueryAnnualProvisionsRequest>): _119.QueryAnnualProvisionsRequest;
                fromAmino(_: _119.QueryAnnualProvisionsRequestAmino): _119.QueryAnnualProvisionsRequest;
                toAmino(_: _119.QueryAnnualProvisionsRequest): _119.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _119.QueryAnnualProvisionsRequestAminoMsg): _119.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _119.QueryAnnualProvisionsRequest): _119.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _119.QueryAnnualProvisionsRequestProtoMsg): _119.QueryAnnualProvisionsRequest;
                toProto(message: _119.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _119.QueryAnnualProvisionsRequest): _119.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                typeUrl: string;
                encode(message: _119.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _119.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _119.QueryAnnualProvisionsResponse;
                toJSON(message: _119.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_119.QueryAnnualProvisionsResponse>): _119.QueryAnnualProvisionsResponse;
                fromAmino(object: _119.QueryAnnualProvisionsResponseAmino): _119.QueryAnnualProvisionsResponse;
                toAmino(message: _119.QueryAnnualProvisionsResponse): _119.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _119.QueryAnnualProvisionsResponseAminoMsg): _119.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _119.QueryAnnualProvisionsResponse): _119.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _119.QueryAnnualProvisionsResponseProtoMsg): _119.QueryAnnualProvisionsResponse;
                toProto(message: _119.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _119.QueryAnnualProvisionsResponse): _119.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                encode(message: _118.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Minter;
                fromJSON(object: any): _118.Minter;
                toJSON(message: _118.Minter): unknown;
                fromPartial(object: Partial<_118.Minter>): _118.Minter;
                fromAmino(object: _118.MinterAmino): _118.Minter;
                toAmino(message: _118.Minter): _118.MinterAmino;
                fromAminoMsg(object: _118.MinterAminoMsg): _118.Minter;
                toAminoMsg(message: _118.Minter): _118.MinterAminoMsg;
                fromProtoMsg(message: _118.MinterProtoMsg): _118.Minter;
                toProto(message: _118.Minter): Uint8Array;
                toProtoMsg(message: _118.Minter): _118.MinterProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _118.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Params;
                fromJSON(object: any): _118.Params;
                toJSON(message: _118.Params): unknown;
                fromPartial(object: Partial<_118.Params>): _118.Params;
                fromAmino(object: _118.ParamsAmino): _118.Params;
                toAmino(message: _118.Params): _118.ParamsAmino;
                fromAminoMsg(object: _118.ParamsAminoMsg): _118.Params;
                toAminoMsg(message: _118.Params): _118.ParamsAminoMsg;
                fromProtoMsg(message: _118.ParamsProtoMsg): _118.Params;
                toProto(message: _118.Params): Uint8Array;
                toProtoMsg(message: _118.Params): _118.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _117.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.GenesisState;
                fromJSON(object: any): _117.GenesisState;
                toJSON(message: _117.GenesisState): unknown;
                fromPartial(object: Partial<_117.GenesisState>): _117.GenesisState;
                fromAmino(object: _117.GenesisStateAmino): _117.GenesisState;
                toAmino(message: _117.GenesisState): _117.GenesisStateAmino;
                fromAminoMsg(object: _117.GenesisStateAminoMsg): _117.GenesisState;
                toAminoMsg(message: _117.GenesisState): _117.GenesisStateAminoMsg;
                fromProtoMsg(message: _117.GenesisStateProtoMsg): _117.GenesisState;
                toProto(message: _117.GenesisState): Uint8Array;
                toProtoMsg(message: _117.GenesisState): _117.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _122.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _122.Module;
                    fromJSON(_: any): _122.Module;
                    toJSON(_: _122.Module): unknown;
                    fromPartial(_: Partial<_122.Module>): _122.Module;
                    fromAmino(_: _122.ModuleAmino): _122.Module;
                    toAmino(_: _122.Module): _122.ModuleAmino;
                    fromAminoMsg(object: _122.ModuleAminoMsg): _122.Module;
                    toAminoMsg(message: _122.Module): _122.ModuleAminoMsg;
                    fromProtoMsg(message: _122.ModuleProtoMsg): _122.Module;
                    toProto(message: _122.Module): Uint8Array;
                    toProtoMsg(message: _122.Module): _122.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _307.MsgClientImpl;
            QueryClientImpl: typeof _288.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _126.QueryBalanceRequest): Promise<_126.QueryBalanceResponse>;
                owner(request: _126.QueryOwnerRequest): Promise<_126.QueryOwnerResponse>;
                supply(request: _126.QuerySupplyRequest): Promise<_126.QuerySupplyResponse>;
                nFTs(request: _126.QueryNFTsRequest): Promise<_126.QueryNFTsResponse>;
                nFT(request: _126.QueryNFTRequest): Promise<_126.QueryNFTResponse>;
                class(request: _126.QueryClassRequest): Promise<_126.QueryClassResponse>;
                classes(request?: _126.QueryClassesRequest): Promise<_126.QueryClassesResponse>;
            };
            LCDQueryClient: typeof _267.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _127.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _127.MsgSend): {
                        typeUrl: string;
                        value: _127.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _127.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _127.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _127.MsgSend): {
                        typeUrl: string;
                        value: _127.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _127.MsgSend) => _127.MsgSendAmino;
                    fromAmino: (object: _127.MsgSendAmino) => _127.MsgSend;
                };
            };
            MsgSend: {
                typeUrl: string;
                encode(message: _127.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSend;
                fromJSON(object: any): _127.MsgSend;
                toJSON(message: _127.MsgSend): unknown;
                fromPartial(object: Partial<_127.MsgSend>): _127.MsgSend;
                fromAmino(object: _127.MsgSendAmino): _127.MsgSend;
                toAmino(message: _127.MsgSend): _127.MsgSendAmino;
                fromAminoMsg(object: _127.MsgSendAminoMsg): _127.MsgSend;
                toAminoMsg(message: _127.MsgSend): _127.MsgSendAminoMsg;
                fromProtoMsg(message: _127.MsgSendProtoMsg): _127.MsgSend;
                toProto(message: _127.MsgSend): Uint8Array;
                toProtoMsg(message: _127.MsgSend): _127.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                typeUrl: string;
                encode(_: _127.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.MsgSendResponse;
                fromJSON(_: any): _127.MsgSendResponse;
                toJSON(_: _127.MsgSendResponse): unknown;
                fromPartial(_: Partial<_127.MsgSendResponse>): _127.MsgSendResponse;
                fromAmino(_: _127.MsgSendResponseAmino): _127.MsgSendResponse;
                toAmino(_: _127.MsgSendResponse): _127.MsgSendResponseAmino;
                fromAminoMsg(object: _127.MsgSendResponseAminoMsg): _127.MsgSendResponse;
                toAminoMsg(message: _127.MsgSendResponse): _127.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _127.MsgSendResponseProtoMsg): _127.MsgSendResponse;
                toProto(message: _127.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _127.MsgSendResponse): _127.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                typeUrl: string;
                encode(message: _126.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryBalanceRequest;
                fromJSON(object: any): _126.QueryBalanceRequest;
                toJSON(message: _126.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_126.QueryBalanceRequest>): _126.QueryBalanceRequest;
                fromAmino(object: _126.QueryBalanceRequestAmino): _126.QueryBalanceRequest;
                toAmino(message: _126.QueryBalanceRequest): _126.QueryBalanceRequestAmino;
                fromAminoMsg(object: _126.QueryBalanceRequestAminoMsg): _126.QueryBalanceRequest;
                toAminoMsg(message: _126.QueryBalanceRequest): _126.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _126.QueryBalanceRequestProtoMsg): _126.QueryBalanceRequest;
                toProto(message: _126.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _126.QueryBalanceRequest): _126.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                typeUrl: string;
                encode(message: _126.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryBalanceResponse;
                fromJSON(object: any): _126.QueryBalanceResponse;
                toJSON(message: _126.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_126.QueryBalanceResponse>): _126.QueryBalanceResponse;
                fromAmino(object: _126.QueryBalanceResponseAmino): _126.QueryBalanceResponse;
                toAmino(message: _126.QueryBalanceResponse): _126.QueryBalanceResponseAmino;
                fromAminoMsg(object: _126.QueryBalanceResponseAminoMsg): _126.QueryBalanceResponse;
                toAminoMsg(message: _126.QueryBalanceResponse): _126.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _126.QueryBalanceResponseProtoMsg): _126.QueryBalanceResponse;
                toProto(message: _126.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _126.QueryBalanceResponse): _126.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                typeUrl: string;
                encode(message: _126.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryOwnerRequest;
                fromJSON(object: any): _126.QueryOwnerRequest;
                toJSON(message: _126.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_126.QueryOwnerRequest>): _126.QueryOwnerRequest;
                fromAmino(object: _126.QueryOwnerRequestAmino): _126.QueryOwnerRequest;
                toAmino(message: _126.QueryOwnerRequest): _126.QueryOwnerRequestAmino;
                fromAminoMsg(object: _126.QueryOwnerRequestAminoMsg): _126.QueryOwnerRequest;
                toAminoMsg(message: _126.QueryOwnerRequest): _126.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _126.QueryOwnerRequestProtoMsg): _126.QueryOwnerRequest;
                toProto(message: _126.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _126.QueryOwnerRequest): _126.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                typeUrl: string;
                encode(message: _126.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryOwnerResponse;
                fromJSON(object: any): _126.QueryOwnerResponse;
                toJSON(message: _126.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_126.QueryOwnerResponse>): _126.QueryOwnerResponse;
                fromAmino(object: _126.QueryOwnerResponseAmino): _126.QueryOwnerResponse;
                toAmino(message: _126.QueryOwnerResponse): _126.QueryOwnerResponseAmino;
                fromAminoMsg(object: _126.QueryOwnerResponseAminoMsg): _126.QueryOwnerResponse;
                toAminoMsg(message: _126.QueryOwnerResponse): _126.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _126.QueryOwnerResponseProtoMsg): _126.QueryOwnerResponse;
                toProto(message: _126.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _126.QueryOwnerResponse): _126.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                typeUrl: string;
                encode(message: _126.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QuerySupplyRequest;
                fromJSON(object: any): _126.QuerySupplyRequest;
                toJSON(message: _126.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_126.QuerySupplyRequest>): _126.QuerySupplyRequest;
                fromAmino(object: _126.QuerySupplyRequestAmino): _126.QuerySupplyRequest;
                toAmino(message: _126.QuerySupplyRequest): _126.QuerySupplyRequestAmino;
                fromAminoMsg(object: _126.QuerySupplyRequestAminoMsg): _126.QuerySupplyRequest;
                toAminoMsg(message: _126.QuerySupplyRequest): _126.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _126.QuerySupplyRequestProtoMsg): _126.QuerySupplyRequest;
                toProto(message: _126.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _126.QuerySupplyRequest): _126.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                typeUrl: string;
                encode(message: _126.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QuerySupplyResponse;
                fromJSON(object: any): _126.QuerySupplyResponse;
                toJSON(message: _126.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_126.QuerySupplyResponse>): _126.QuerySupplyResponse;
                fromAmino(object: _126.QuerySupplyResponseAmino): _126.QuerySupplyResponse;
                toAmino(message: _126.QuerySupplyResponse): _126.QuerySupplyResponseAmino;
                fromAminoMsg(object: _126.QuerySupplyResponseAminoMsg): _126.QuerySupplyResponse;
                toAminoMsg(message: _126.QuerySupplyResponse): _126.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _126.QuerySupplyResponseProtoMsg): _126.QuerySupplyResponse;
                toProto(message: _126.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _126.QuerySupplyResponse): _126.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                typeUrl: string;
                encode(message: _126.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryNFTsRequest;
                fromJSON(object: any): _126.QueryNFTsRequest;
                toJSON(message: _126.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_126.QueryNFTsRequest>): _126.QueryNFTsRequest;
                fromAmino(object: _126.QueryNFTsRequestAmino): _126.QueryNFTsRequest;
                toAmino(message: _126.QueryNFTsRequest): _126.QueryNFTsRequestAmino;
                fromAminoMsg(object: _126.QueryNFTsRequestAminoMsg): _126.QueryNFTsRequest;
                toAminoMsg(message: _126.QueryNFTsRequest): _126.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _126.QueryNFTsRequestProtoMsg): _126.QueryNFTsRequest;
                toProto(message: _126.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _126.QueryNFTsRequest): _126.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                typeUrl: string;
                encode(message: _126.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryNFTsResponse;
                fromJSON(object: any): _126.QueryNFTsResponse;
                toJSON(message: _126.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_126.QueryNFTsResponse>): _126.QueryNFTsResponse;
                fromAmino(object: _126.QueryNFTsResponseAmino): _126.QueryNFTsResponse;
                toAmino(message: _126.QueryNFTsResponse): _126.QueryNFTsResponseAmino;
                fromAminoMsg(object: _126.QueryNFTsResponseAminoMsg): _126.QueryNFTsResponse;
                toAminoMsg(message: _126.QueryNFTsResponse): _126.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _126.QueryNFTsResponseProtoMsg): _126.QueryNFTsResponse;
                toProto(message: _126.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _126.QueryNFTsResponse): _126.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                typeUrl: string;
                encode(message: _126.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryNFTRequest;
                fromJSON(object: any): _126.QueryNFTRequest;
                toJSON(message: _126.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_126.QueryNFTRequest>): _126.QueryNFTRequest;
                fromAmino(object: _126.QueryNFTRequestAmino): _126.QueryNFTRequest;
                toAmino(message: _126.QueryNFTRequest): _126.QueryNFTRequestAmino;
                fromAminoMsg(object: _126.QueryNFTRequestAminoMsg): _126.QueryNFTRequest;
                toAminoMsg(message: _126.QueryNFTRequest): _126.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _126.QueryNFTRequestProtoMsg): _126.QueryNFTRequest;
                toProto(message: _126.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _126.QueryNFTRequest): _126.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                typeUrl: string;
                encode(message: _126.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryNFTResponse;
                fromJSON(object: any): _126.QueryNFTResponse;
                toJSON(message: _126.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_126.QueryNFTResponse>): _126.QueryNFTResponse;
                fromAmino(object: _126.QueryNFTResponseAmino): _126.QueryNFTResponse;
                toAmino(message: _126.QueryNFTResponse): _126.QueryNFTResponseAmino;
                fromAminoMsg(object: _126.QueryNFTResponseAminoMsg): _126.QueryNFTResponse;
                toAminoMsg(message: _126.QueryNFTResponse): _126.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _126.QueryNFTResponseProtoMsg): _126.QueryNFTResponse;
                toProto(message: _126.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _126.QueryNFTResponse): _126.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                typeUrl: string;
                encode(message: _126.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryClassRequest;
                fromJSON(object: any): _126.QueryClassRequest;
                toJSON(message: _126.QueryClassRequest): unknown;
                fromPartial(object: Partial<_126.QueryClassRequest>): _126.QueryClassRequest;
                fromAmino(object: _126.QueryClassRequestAmino): _126.QueryClassRequest;
                toAmino(message: _126.QueryClassRequest): _126.QueryClassRequestAmino;
                fromAminoMsg(object: _126.QueryClassRequestAminoMsg): _126.QueryClassRequest;
                toAminoMsg(message: _126.QueryClassRequest): _126.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _126.QueryClassRequestProtoMsg): _126.QueryClassRequest;
                toProto(message: _126.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _126.QueryClassRequest): _126.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                typeUrl: string;
                encode(message: _126.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryClassResponse;
                fromJSON(object: any): _126.QueryClassResponse;
                toJSON(message: _126.QueryClassResponse): unknown;
                fromPartial(object: Partial<_126.QueryClassResponse>): _126.QueryClassResponse;
                fromAmino(object: _126.QueryClassResponseAmino): _126.QueryClassResponse;
                toAmino(message: _126.QueryClassResponse): _126.QueryClassResponseAmino;
                fromAminoMsg(object: _126.QueryClassResponseAminoMsg): _126.QueryClassResponse;
                toAminoMsg(message: _126.QueryClassResponse): _126.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _126.QueryClassResponseProtoMsg): _126.QueryClassResponse;
                toProto(message: _126.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _126.QueryClassResponse): _126.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                typeUrl: string;
                encode(message: _126.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryClassesRequest;
                fromJSON(object: any): _126.QueryClassesRequest;
                toJSON(message: _126.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_126.QueryClassesRequest>): _126.QueryClassesRequest;
                fromAmino(object: _126.QueryClassesRequestAmino): _126.QueryClassesRequest;
                toAmino(message: _126.QueryClassesRequest): _126.QueryClassesRequestAmino;
                fromAminoMsg(object: _126.QueryClassesRequestAminoMsg): _126.QueryClassesRequest;
                toAminoMsg(message: _126.QueryClassesRequest): _126.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _126.QueryClassesRequestProtoMsg): _126.QueryClassesRequest;
                toProto(message: _126.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _126.QueryClassesRequest): _126.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                typeUrl: string;
                encode(message: _126.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.QueryClassesResponse;
                fromJSON(object: any): _126.QueryClassesResponse;
                toJSON(message: _126.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_126.QueryClassesResponse>): _126.QueryClassesResponse;
                fromAmino(object: _126.QueryClassesResponseAmino): _126.QueryClassesResponse;
                toAmino(message: _126.QueryClassesResponse): _126.QueryClassesResponseAmino;
                fromAminoMsg(object: _126.QueryClassesResponseAminoMsg): _126.QueryClassesResponse;
                toAminoMsg(message: _126.QueryClassesResponse): _126.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _126.QueryClassesResponseProtoMsg): _126.QueryClassesResponse;
                toProto(message: _126.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _126.QueryClassesResponse): _126.QueryClassesResponseProtoMsg;
            };
            Class: {
                typeUrl: string;
                encode(message: _125.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.Class;
                fromJSON(object: any): _125.Class;
                toJSON(message: _125.Class): unknown;
                fromPartial(object: Partial<_125.Class>): _125.Class;
                fromAmino(object: _125.ClassAmino): _125.Class;
                toAmino(message: _125.Class): _125.ClassAmino;
                fromAminoMsg(object: _125.ClassAminoMsg): _125.Class;
                toAminoMsg(message: _125.Class): _125.ClassAminoMsg;
                fromProtoMsg(message: _125.ClassProtoMsg): _125.Class;
                toProto(message: _125.Class): Uint8Array;
                toProtoMsg(message: _125.Class): _125.ClassProtoMsg;
            };
            NFT: {
                typeUrl: string;
                encode(message: _125.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _125.NFT;
                fromJSON(object: any): _125.NFT;
                toJSON(message: _125.NFT): unknown;
                fromPartial(object: Partial<_125.NFT>): _125.NFT;
                fromAmino(object: _125.NFTAmino): _125.NFT;
                toAmino(message: _125.NFT): _125.NFTAmino;
                fromAminoMsg(object: _125.NFTAminoMsg): _125.NFT;
                toAminoMsg(message: _125.NFT): _125.NFTAminoMsg;
                fromProtoMsg(message: _125.NFTProtoMsg): _125.NFT;
                toProto(message: _125.NFT): Uint8Array;
                toProtoMsg(message: _125.NFT): _125.NFTProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _124.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.GenesisState;
                fromJSON(object: any): _124.GenesisState;
                toJSON(message: _124.GenesisState): unknown;
                fromPartial(object: Partial<_124.GenesisState>): _124.GenesisState;
                fromAmino(object: _124.GenesisStateAmino): _124.GenesisState;
                toAmino(message: _124.GenesisState): _124.GenesisStateAmino;
                fromAminoMsg(object: _124.GenesisStateAminoMsg): _124.GenesisState;
                toAminoMsg(message: _124.GenesisState): _124.GenesisStateAminoMsg;
                fromProtoMsg(message: _124.GenesisStateProtoMsg): _124.GenesisState;
                toProto(message: _124.GenesisState): Uint8Array;
                toProtoMsg(message: _124.GenesisState): _124.GenesisStateProtoMsg;
            };
            Entry: {
                typeUrl: string;
                encode(message: _124.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Entry;
                fromJSON(object: any): _124.Entry;
                toJSON(message: _124.Entry): unknown;
                fromPartial(object: Partial<_124.Entry>): _124.Entry;
                fromAmino(object: _124.EntryAmino): _124.Entry;
                toAmino(message: _124.Entry): _124.EntryAmino;
                fromAminoMsg(object: _124.EntryAminoMsg): _124.Entry;
                toAminoMsg(message: _124.Entry): _124.EntryAminoMsg;
                fromProtoMsg(message: _124.EntryProtoMsg): _124.Entry;
                toProto(message: _124.Entry): Uint8Array;
                toProtoMsg(message: _124.Entry): _124.EntryProtoMsg;
            };
            EventSend: {
                typeUrl: string;
                encode(message: _123.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventSend;
                fromJSON(object: any): _123.EventSend;
                toJSON(message: _123.EventSend): unknown;
                fromPartial(object: Partial<_123.EventSend>): _123.EventSend;
                fromAmino(object: _123.EventSendAmino): _123.EventSend;
                toAmino(message: _123.EventSend): _123.EventSendAmino;
                fromAminoMsg(object: _123.EventSendAminoMsg): _123.EventSend;
                toAminoMsg(message: _123.EventSend): _123.EventSendAminoMsg;
                fromProtoMsg(message: _123.EventSendProtoMsg): _123.EventSend;
                toProto(message: _123.EventSend): Uint8Array;
                toProtoMsg(message: _123.EventSend): _123.EventSendProtoMsg;
            };
            EventMint: {
                typeUrl: string;
                encode(message: _123.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventMint;
                fromJSON(object: any): _123.EventMint;
                toJSON(message: _123.EventMint): unknown;
                fromPartial(object: Partial<_123.EventMint>): _123.EventMint;
                fromAmino(object: _123.EventMintAmino): _123.EventMint;
                toAmino(message: _123.EventMint): _123.EventMintAmino;
                fromAminoMsg(object: _123.EventMintAminoMsg): _123.EventMint;
                toAminoMsg(message: _123.EventMint): _123.EventMintAminoMsg;
                fromProtoMsg(message: _123.EventMintProtoMsg): _123.EventMint;
                toProto(message: _123.EventMint): Uint8Array;
                toProtoMsg(message: _123.EventMint): _123.EventMintProtoMsg;
            };
            EventBurn: {
                typeUrl: string;
                encode(message: _123.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.EventBurn;
                fromJSON(object: any): _123.EventBurn;
                toJSON(message: _123.EventBurn): unknown;
                fromPartial(object: Partial<_123.EventBurn>): _123.EventBurn;
                fromAmino(object: _123.EventBurnAmino): _123.EventBurn;
                toAmino(message: _123.EventBurn): _123.EventBurnAmino;
                fromAminoMsg(object: _123.EventBurnAminoMsg): _123.EventBurn;
                toAminoMsg(message: _123.EventBurn): _123.EventBurnAminoMsg;
                fromProtoMsg(message: _123.EventBurnProtoMsg): _123.EventBurn;
                toProto(message: _123.EventBurn): Uint8Array;
                toProtoMsg(message: _123.EventBurn): _123.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        namespace module {
            const v1alpha1: {
                Module: {
                    typeUrl: string;
                    encode(_: _128.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _128.Module;
                    fromJSON(_: any): _128.Module;
                    toJSON(_: _128.Module): unknown;
                    fromPartial(_: Partial<_128.Module>): _128.Module;
                    fromAmino(_: _128.ModuleAmino): _128.Module;
                    toAmino(_: _128.Module): _128.ModuleAmino;
                    fromAminoMsg(object: _128.ModuleAminoMsg): _128.Module;
                    toAminoMsg(message: _128.Module): _128.ModuleAminoMsg;
                    fromProtoMsg(message: _128.ModuleProtoMsg): _128.Module;
                    toProto(message: _128.Module): Uint8Array;
                    toProtoMsg(message: _128.Module): _128.ModuleProtoMsg;
                };
            };
        }
        namespace query {
            const v1alpha1: {
                QueryClientImpl: typeof _289.QueryClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    get(request: _129.GetRequest): Promise<_129.GetResponse>;
                    list(request: _129.ListRequest): Promise<_129.ListResponse>;
                };
                GetRequest: {
                    typeUrl: string;
                    encode(message: _129.GetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GetRequest;
                    fromJSON(object: any): _129.GetRequest;
                    toJSON(message: _129.GetRequest): unknown;
                    fromPartial(object: Partial<_129.GetRequest>): _129.GetRequest;
                    fromAmino(object: _129.GetRequestAmino): _129.GetRequest;
                    toAmino(message: _129.GetRequest): _129.GetRequestAmino;
                    fromAminoMsg(object: _129.GetRequestAminoMsg): _129.GetRequest;
                    toAminoMsg(message: _129.GetRequest): _129.GetRequestAminoMsg;
                    fromProtoMsg(message: _129.GetRequestProtoMsg): _129.GetRequest;
                    toProto(message: _129.GetRequest): Uint8Array;
                    toProtoMsg(message: _129.GetRequest): _129.GetRequestProtoMsg;
                };
                GetResponse: {
                    typeUrl: string;
                    encode(message: _129.GetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.GetResponse;
                    fromJSON(object: any): _129.GetResponse;
                    toJSON(message: _129.GetResponse): unknown;
                    fromPartial(object: Partial<_129.GetResponse>): _129.GetResponse;
                    fromAmino(object: _129.GetResponseAmino): _129.GetResponse;
                    toAmino(message: _129.GetResponse): _129.GetResponseAmino;
                    fromAminoMsg(object: _129.GetResponseAminoMsg): _129.GetResponse;
                    toAminoMsg(message: _129.GetResponse): _129.GetResponseAminoMsg;
                    fromProtoMsg(message: _129.GetResponseProtoMsg): _129.GetResponse;
                    toProto(message: _129.GetResponse): Uint8Array;
                    toProtoMsg(message: _129.GetResponse): _129.GetResponseProtoMsg;
                };
                ListRequest: {
                    typeUrl: string;
                    encode(message: _129.ListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ListRequest;
                    fromJSON(object: any): _129.ListRequest;
                    toJSON(message: _129.ListRequest): unknown;
                    fromPartial(object: Partial<_129.ListRequest>): _129.ListRequest;
                    fromAmino(object: _129.ListRequestAmino): _129.ListRequest;
                    toAmino(message: _129.ListRequest): _129.ListRequestAmino;
                    fromAminoMsg(object: _129.ListRequestAminoMsg): _129.ListRequest;
                    toAminoMsg(message: _129.ListRequest): _129.ListRequestAminoMsg;
                    fromProtoMsg(message: _129.ListRequestProtoMsg): _129.ListRequest;
                    toProto(message: _129.ListRequest): Uint8Array;
                    toProtoMsg(message: _129.ListRequest): _129.ListRequestProtoMsg;
                };
                ListRequest_Prefix: {
                    typeUrl: string;
                    encode(message: _129.ListRequest_Prefix, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ListRequest_Prefix;
                    fromJSON(object: any): _129.ListRequest_Prefix;
                    toJSON(message: _129.ListRequest_Prefix): unknown;
                    fromPartial(object: Partial<_129.ListRequest_Prefix>): _129.ListRequest_Prefix;
                    fromAmino(object: _129.ListRequest_PrefixAmino): _129.ListRequest_Prefix;
                    toAmino(message: _129.ListRequest_Prefix): _129.ListRequest_PrefixAmino;
                    fromAminoMsg(object: _129.ListRequest_PrefixAminoMsg): _129.ListRequest_Prefix;
                    toAminoMsg(message: _129.ListRequest_Prefix): _129.ListRequest_PrefixAminoMsg;
                    fromProtoMsg(message: _129.ListRequest_PrefixProtoMsg): _129.ListRequest_Prefix;
                    toProto(message: _129.ListRequest_Prefix): Uint8Array;
                    toProtoMsg(message: _129.ListRequest_Prefix): _129.ListRequest_PrefixProtoMsg;
                };
                ListRequest_Range: {
                    typeUrl: string;
                    encode(message: _129.ListRequest_Range, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ListRequest_Range;
                    fromJSON(object: any): _129.ListRequest_Range;
                    toJSON(message: _129.ListRequest_Range): unknown;
                    fromPartial(object: Partial<_129.ListRequest_Range>): _129.ListRequest_Range;
                    fromAmino(object: _129.ListRequest_RangeAmino): _129.ListRequest_Range;
                    toAmino(message: _129.ListRequest_Range): _129.ListRequest_RangeAmino;
                    fromAminoMsg(object: _129.ListRequest_RangeAminoMsg): _129.ListRequest_Range;
                    toAminoMsg(message: _129.ListRequest_Range): _129.ListRequest_RangeAminoMsg;
                    fromProtoMsg(message: _129.ListRequest_RangeProtoMsg): _129.ListRequest_Range;
                    toProto(message: _129.ListRequest_Range): Uint8Array;
                    toProtoMsg(message: _129.ListRequest_Range): _129.ListRequest_RangeProtoMsg;
                };
                ListResponse: {
                    typeUrl: string;
                    encode(message: _129.ListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.ListResponse;
                    fromJSON(object: any): _129.ListResponse;
                    toJSON(message: _129.ListResponse): unknown;
                    fromPartial(object: Partial<_129.ListResponse>): _129.ListResponse;
                    fromAmino(object: _129.ListResponseAmino): _129.ListResponse;
                    toAmino(message: _129.ListResponse): _129.ListResponseAmino;
                    fromAminoMsg(object: _129.ListResponseAminoMsg): _129.ListResponse;
                    toAminoMsg(message: _129.ListResponse): _129.ListResponseAminoMsg;
                    fromProtoMsg(message: _129.ListResponseProtoMsg): _129.ListResponse;
                    toProto(message: _129.ListResponse): Uint8Array;
                    toProtoMsg(message: _129.ListResponse): _129.ListResponseProtoMsg;
                };
                IndexValue: {
                    typeUrl: string;
                    encode(message: _129.IndexValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.IndexValue;
                    fromJSON(object: any): _129.IndexValue;
                    toJSON(message: _129.IndexValue): unknown;
                    fromPartial(object: Partial<_129.IndexValue>): _129.IndexValue;
                    fromAmino(object: _129.IndexValueAmino): _129.IndexValue;
                    toAmino(message: _129.IndexValue): _129.IndexValueAmino;
                    fromAminoMsg(object: _129.IndexValueAminoMsg): _129.IndexValue;
                    toAminoMsg(message: _129.IndexValue): _129.IndexValueAminoMsg;
                    fromProtoMsg(message: _129.IndexValueProtoMsg): _129.IndexValue;
                    toProto(message: _129.IndexValue): Uint8Array;
                    toProtoMsg(message: _129.IndexValue): _129.IndexValueProtoMsg;
                };
            };
        }
        const v1: {
            TableDescriptor: {
                typeUrl: string;
                encode(message: _130.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.TableDescriptor;
                fromJSON(object: any): _130.TableDescriptor;
                toJSON(message: _130.TableDescriptor): unknown;
                fromPartial(object: Partial<_130.TableDescriptor>): _130.TableDescriptor;
                fromAmino(object: _130.TableDescriptorAmino): _130.TableDescriptor;
                toAmino(message: _130.TableDescriptor): _130.TableDescriptorAmino;
                fromAminoMsg(object: _130.TableDescriptorAminoMsg): _130.TableDescriptor;
                toAminoMsg(message: _130.TableDescriptor): _130.TableDescriptorAminoMsg;
                fromProtoMsg(message: _130.TableDescriptorProtoMsg): _130.TableDescriptor;
                toProto(message: _130.TableDescriptor): Uint8Array;
                toProtoMsg(message: _130.TableDescriptor): _130.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                typeUrl: string;
                encode(message: _130.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.PrimaryKeyDescriptor;
                fromJSON(object: any): _130.PrimaryKeyDescriptor;
                toJSON(message: _130.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_130.PrimaryKeyDescriptor>): _130.PrimaryKeyDescriptor;
                fromAmino(object: _130.PrimaryKeyDescriptorAmino): _130.PrimaryKeyDescriptor;
                toAmino(message: _130.PrimaryKeyDescriptor): _130.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _130.PrimaryKeyDescriptorAminoMsg): _130.PrimaryKeyDescriptor;
                toAminoMsg(message: _130.PrimaryKeyDescriptor): _130.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _130.PrimaryKeyDescriptorProtoMsg): _130.PrimaryKeyDescriptor;
                toProto(message: _130.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _130.PrimaryKeyDescriptor): _130.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                typeUrl: string;
                encode(message: _130.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SecondaryIndexDescriptor;
                fromJSON(object: any): _130.SecondaryIndexDescriptor;
                toJSON(message: _130.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_130.SecondaryIndexDescriptor>): _130.SecondaryIndexDescriptor;
                fromAmino(object: _130.SecondaryIndexDescriptorAmino): _130.SecondaryIndexDescriptor;
                toAmino(message: _130.SecondaryIndexDescriptor): _130.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _130.SecondaryIndexDescriptorAminoMsg): _130.SecondaryIndexDescriptor;
                toAminoMsg(message: _130.SecondaryIndexDescriptor): _130.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _130.SecondaryIndexDescriptorProtoMsg): _130.SecondaryIndexDescriptor;
                toProto(message: _130.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _130.SecondaryIndexDescriptor): _130.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                typeUrl: string;
                encode(message: _130.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.SingletonDescriptor;
                fromJSON(object: any): _130.SingletonDescriptor;
                toJSON(message: _130.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_130.SingletonDescriptor>): _130.SingletonDescriptor;
                fromAmino(object: _130.SingletonDescriptorAmino): _130.SingletonDescriptor;
                toAmino(message: _130.SingletonDescriptor): _130.SingletonDescriptorAmino;
                fromAminoMsg(object: _130.SingletonDescriptorAminoMsg): _130.SingletonDescriptor;
                toAminoMsg(message: _130.SingletonDescriptor): _130.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _130.SingletonDescriptorProtoMsg): _130.SingletonDescriptor;
                toProto(message: _130.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _130.SingletonDescriptor): _130.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _131.StorageType;
            storageTypeToJSON(object: _131.StorageType): string;
            StorageType: typeof _131.StorageType;
            StorageTypeSDKType: typeof _131.StorageType;
            StorageTypeAmino: typeof _131.StorageType;
            ModuleSchemaDescriptor: {
                typeUrl: string;
                encode(message: _131.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ModuleSchemaDescriptor;
                fromJSON(object: any): _131.ModuleSchemaDescriptor;
                toJSON(message: _131.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_131.ModuleSchemaDescriptor>): _131.ModuleSchemaDescriptor;
                fromAmino(object: _131.ModuleSchemaDescriptorAmino): _131.ModuleSchemaDescriptor;
                toAmino(message: _131.ModuleSchemaDescriptor): _131.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _131.ModuleSchemaDescriptorAminoMsg): _131.ModuleSchemaDescriptor;
                toAminoMsg(message: _131.ModuleSchemaDescriptor): _131.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _131.ModuleSchemaDescriptorProtoMsg): _131.ModuleSchemaDescriptor;
                toProto(message: _131.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _131.ModuleSchemaDescriptor): _131.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                typeUrl: string;
                encode(message: _131.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _131.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _131.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_131.ModuleSchemaDescriptor_FileEntry>): _131.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _131.ModuleSchemaDescriptor_FileEntryAmino): _131.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _131.ModuleSchemaDescriptor_FileEntry): _131.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _131.ModuleSchemaDescriptor_FileEntryAminoMsg): _131.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _131.ModuleSchemaDescriptor_FileEntry): _131.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _131.ModuleSchemaDescriptor_FileEntryProtoMsg): _131.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _131.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _131.ModuleSchemaDescriptor_FileEntry): _131.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _132.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Module;
                    fromJSON(_: any): _132.Module;
                    toJSON(_: _132.Module): unknown;
                    fromPartial(_: Partial<_132.Module>): _132.Module;
                    fromAmino(_: _132.ModuleAmino): _132.Module;
                    toAmino(_: _132.Module): _132.ModuleAmino;
                    fromAminoMsg(object: _132.ModuleAminoMsg): _132.Module;
                    toAminoMsg(message: _132.Module): _132.ModuleAminoMsg;
                    fromProtoMsg(message: _132.ModuleProtoMsg): _132.Module;
                    toProto(message: _132.Module): Uint8Array;
                    toProtoMsg(message: _132.Module): _132.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            QueryClientImpl: typeof _290.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                subspaces(request?: _134.QuerySubspacesRequest): Promise<_134.QuerySubspacesResponse>;
            };
            LCDQueryClient: typeof _268.LCDQueryClient;
            QueryParamsRequest: {
                typeUrl: string;
                encode(message: _134.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryParamsRequest;
                fromJSON(object: any): _134.QueryParamsRequest;
                toJSON(message: _134.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_134.QueryParamsRequest>): _134.QueryParamsRequest;
                fromAmino(object: _134.QueryParamsRequestAmino): _134.QueryParamsRequest;
                toAmino(message: _134.QueryParamsRequest): _134.QueryParamsRequestAmino;
                fromAminoMsg(object: _134.QueryParamsRequestAminoMsg): _134.QueryParamsRequest;
                toAminoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _134.QueryParamsRequestProtoMsg): _134.QueryParamsRequest;
                toProto(message: _134.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _134.QueryParamsRequest): _134.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _134.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryParamsResponse;
                fromJSON(object: any): _134.QueryParamsResponse;
                toJSON(message: _134.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_134.QueryParamsResponse>): _134.QueryParamsResponse;
                fromAmino(object: _134.QueryParamsResponseAmino): _134.QueryParamsResponse;
                toAmino(message: _134.QueryParamsResponse): _134.QueryParamsResponseAmino;
                fromAminoMsg(object: _134.QueryParamsResponseAminoMsg): _134.QueryParamsResponse;
                toAminoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _134.QueryParamsResponseProtoMsg): _134.QueryParamsResponse;
                toProto(message: _134.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _134.QueryParamsResponse): _134.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                typeUrl: string;
                encode(_: _134.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySubspacesRequest;
                fromJSON(_: any): _134.QuerySubspacesRequest;
                toJSON(_: _134.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_134.QuerySubspacesRequest>): _134.QuerySubspacesRequest;
                fromAmino(_: _134.QuerySubspacesRequestAmino): _134.QuerySubspacesRequest;
                toAmino(_: _134.QuerySubspacesRequest): _134.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _134.QuerySubspacesRequestAminoMsg): _134.QuerySubspacesRequest;
                toAminoMsg(message: _134.QuerySubspacesRequest): _134.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _134.QuerySubspacesRequestProtoMsg): _134.QuerySubspacesRequest;
                toProto(message: _134.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _134.QuerySubspacesRequest): _134.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                typeUrl: string;
                encode(message: _134.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QuerySubspacesResponse;
                fromJSON(object: any): _134.QuerySubspacesResponse;
                toJSON(message: _134.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_134.QuerySubspacesResponse>): _134.QuerySubspacesResponse;
                fromAmino(object: _134.QuerySubspacesResponseAmino): _134.QuerySubspacesResponse;
                toAmino(message: _134.QuerySubspacesResponse): _134.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _134.QuerySubspacesResponseAminoMsg): _134.QuerySubspacesResponse;
                toAminoMsg(message: _134.QuerySubspacesResponse): _134.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _134.QuerySubspacesResponseProtoMsg): _134.QuerySubspacesResponse;
                toProto(message: _134.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _134.QuerySubspacesResponse): _134.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                typeUrl: string;
                encode(message: _134.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.Subspace;
                fromJSON(object: any): _134.Subspace;
                toJSON(message: _134.Subspace): unknown;
                fromPartial(object: Partial<_134.Subspace>): _134.Subspace;
                fromAmino(object: _134.SubspaceAmino): _134.Subspace;
                toAmino(message: _134.Subspace): _134.SubspaceAmino;
                fromAminoMsg(object: _134.SubspaceAminoMsg): _134.Subspace;
                toAminoMsg(message: _134.Subspace): _134.SubspaceAminoMsg;
                fromProtoMsg(message: _134.SubspaceProtoMsg): _134.Subspace;
                toProto(message: _134.Subspace): Uint8Array;
                toProtoMsg(message: _134.Subspace): _134.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                typeUrl: string;
                encode(message: _133.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ParameterChangeProposal;
                fromJSON(object: any): _133.ParameterChangeProposal;
                toJSON(message: _133.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_133.ParameterChangeProposal>): _133.ParameterChangeProposal;
                fromAmino(object: _133.ParameterChangeProposalAmino): _133.ParameterChangeProposal;
                toAmino(message: _133.ParameterChangeProposal): _133.ParameterChangeProposalAmino;
                fromAminoMsg(object: _133.ParameterChangeProposalAminoMsg): _133.ParameterChangeProposal;
                toAminoMsg(message: _133.ParameterChangeProposal): _133.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _133.ParameterChangeProposalProtoMsg): _133.ParameterChangeProposal;
                toProto(message: _133.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _133.ParameterChangeProposal): _133.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                typeUrl: string;
                encode(message: _133.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.ParamChange;
                fromJSON(object: any): _133.ParamChange;
                toJSON(message: _133.ParamChange): unknown;
                fromPartial(object: Partial<_133.ParamChange>): _133.ParamChange;
                fromAmino(object: _133.ParamChangeAmino): _133.ParamChange;
                toAmino(message: _133.ParamChange): _133.ParamChangeAmino;
                fromAminoMsg(object: _133.ParamChangeAminoMsg): _133.ParamChange;
                toAminoMsg(message: _133.ParamChange): _133.ParamChangeAminoMsg;
                fromProtoMsg(message: _133.ParamChangeProtoMsg): _133.ParamChange;
                toProto(message: _133.ParamChange): Uint8Array;
                toProtoMsg(message: _133.ParamChange): _133.ParamChangeProtoMsg;
            };
        };
    }
    namespace query {
        const v1: {};
    }
    namespace reflection {
        const v1: {
            FileDescriptorsRequest: {
                typeUrl: string;
                encode(_: _136.FileDescriptorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.FileDescriptorsRequest;
                fromJSON(_: any): _136.FileDescriptorsRequest;
                toJSON(_: _136.FileDescriptorsRequest): unknown;
                fromPartial(_: Partial<_136.FileDescriptorsRequest>): _136.FileDescriptorsRequest;
                fromAmino(_: _136.FileDescriptorsRequestAmino): _136.FileDescriptorsRequest;
                toAmino(_: _136.FileDescriptorsRequest): _136.FileDescriptorsRequestAmino;
                fromAminoMsg(object: _136.FileDescriptorsRequestAminoMsg): _136.FileDescriptorsRequest;
                toAminoMsg(message: _136.FileDescriptorsRequest): _136.FileDescriptorsRequestAminoMsg;
                fromProtoMsg(message: _136.FileDescriptorsRequestProtoMsg): _136.FileDescriptorsRequest;
                toProto(message: _136.FileDescriptorsRequest): Uint8Array;
                toProtoMsg(message: _136.FileDescriptorsRequest): _136.FileDescriptorsRequestProtoMsg;
            };
            FileDescriptorsResponse: {
                typeUrl: string;
                encode(message: _136.FileDescriptorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.FileDescriptorsResponse;
                fromJSON(object: any): _136.FileDescriptorsResponse;
                toJSON(message: _136.FileDescriptorsResponse): unknown;
                fromPartial(object: Partial<_136.FileDescriptorsResponse>): _136.FileDescriptorsResponse;
                fromAmino(object: _136.FileDescriptorsResponseAmino): _136.FileDescriptorsResponse;
                toAmino(message: _136.FileDescriptorsResponse): _136.FileDescriptorsResponseAmino;
                fromAminoMsg(object: _136.FileDescriptorsResponseAminoMsg): _136.FileDescriptorsResponse;
                toAminoMsg(message: _136.FileDescriptorsResponse): _136.FileDescriptorsResponseAminoMsg;
                fromProtoMsg(message: _136.FileDescriptorsResponseProtoMsg): _136.FileDescriptorsResponse;
                toProto(message: _136.FileDescriptorsResponse): Uint8Array;
                toProtoMsg(message: _136.FileDescriptorsResponse): _136.FileDescriptorsResponseProtoMsg;
            };
        };
    }
    namespace slashing {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _137.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Module;
                    fromJSON(object: any): _137.Module;
                    toJSON(message: _137.Module): unknown;
                    fromPartial(object: Partial<_137.Module>): _137.Module;
                    fromAmino(object: _137.ModuleAmino): _137.Module;
                    toAmino(message: _137.Module): _137.ModuleAmino;
                    fromAminoMsg(object: _137.ModuleAminoMsg): _137.Module;
                    toAminoMsg(message: _137.Module): _137.ModuleAminoMsg;
                    fromProtoMsg(message: _137.ModuleProtoMsg): _137.Module;
                    toProto(message: _137.Module): Uint8Array;
                    toProtoMsg(message: _137.Module): _137.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _308.MsgClientImpl;
            QueryClientImpl: typeof _291.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                signingInfo(request: _139.QuerySigningInfoRequest): Promise<_139.QuerySigningInfoResponse>;
                signingInfos(request?: _139.QuerySigningInfosRequest): Promise<_139.QuerySigningInfosResponse>;
            };
            LCDQueryClient: typeof _269.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _141.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _141.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _141.MsgUnjail): {
                        typeUrl: string;
                        value: _141.MsgUnjail;
                    };
                    updateParams(value: _141.MsgUpdateParams): {
                        typeUrl: string;
                        value: _141.MsgUpdateParams;
                    };
                };
                toJSON: {
                    unjail(value: _141.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _141.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _141.MsgUnjail;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _141.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    unjail(value: _141.MsgUnjail): {
                        typeUrl: string;
                        value: _141.MsgUnjail;
                    };
                    updateParams(value: _141.MsgUpdateParams): {
                        typeUrl: string;
                        value: _141.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _141.MsgUnjail) => _141.MsgUnjailAmino;
                    fromAmino: (object: _141.MsgUnjailAmino) => _141.MsgUnjail;
                };
                "/cosmos.slashing.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _141.MsgUpdateParams) => _141.MsgUpdateParamsAmino;
                    fromAmino: (object: _141.MsgUpdateParamsAmino) => _141.MsgUpdateParams;
                };
            };
            MsgUnjail: {
                typeUrl: string;
                encode(message: _141.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUnjail;
                fromJSON(object: any): _141.MsgUnjail;
                toJSON(message: _141.MsgUnjail): unknown;
                fromPartial(object: Partial<_141.MsgUnjail>): _141.MsgUnjail;
                fromAmino(object: _141.MsgUnjailAmino): _141.MsgUnjail;
                toAmino(message: _141.MsgUnjail): _141.MsgUnjailAmino;
                fromAminoMsg(object: _141.MsgUnjailAminoMsg): _141.MsgUnjail;
                toAminoMsg(message: _141.MsgUnjail): _141.MsgUnjailAminoMsg;
                fromProtoMsg(message: _141.MsgUnjailProtoMsg): _141.MsgUnjail;
                toProto(message: _141.MsgUnjail): Uint8Array;
                toProtoMsg(message: _141.MsgUnjail): _141.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                typeUrl: string;
                encode(_: _141.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUnjailResponse;
                fromJSON(_: any): _141.MsgUnjailResponse;
                toJSON(_: _141.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_141.MsgUnjailResponse>): _141.MsgUnjailResponse;
                fromAmino(_: _141.MsgUnjailResponseAmino): _141.MsgUnjailResponse;
                toAmino(_: _141.MsgUnjailResponse): _141.MsgUnjailResponseAmino;
                fromAminoMsg(object: _141.MsgUnjailResponseAminoMsg): _141.MsgUnjailResponse;
                toAminoMsg(message: _141.MsgUnjailResponse): _141.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _141.MsgUnjailResponseProtoMsg): _141.MsgUnjailResponse;
                toProto(message: _141.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _141.MsgUnjailResponse): _141.MsgUnjailResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _141.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUpdateParams;
                fromJSON(object: any): _141.MsgUpdateParams;
                toJSON(message: _141.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_141.MsgUpdateParams>): _141.MsgUpdateParams;
                fromAmino(object: _141.MsgUpdateParamsAmino): _141.MsgUpdateParams;
                toAmino(message: _141.MsgUpdateParams): _141.MsgUpdateParamsAmino;
                fromAminoMsg(object: _141.MsgUpdateParamsAminoMsg): _141.MsgUpdateParams;
                toAminoMsg(message: _141.MsgUpdateParams): _141.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _141.MsgUpdateParamsProtoMsg): _141.MsgUpdateParams;
                toProto(message: _141.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _141.MsgUpdateParams): _141.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _141.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.MsgUpdateParamsResponse;
                fromJSON(_: any): _141.MsgUpdateParamsResponse;
                toJSON(_: _141.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_141.MsgUpdateParamsResponse>): _141.MsgUpdateParamsResponse;
                fromAmino(_: _141.MsgUpdateParamsResponseAmino): _141.MsgUpdateParamsResponse;
                toAmino(_: _141.MsgUpdateParamsResponse): _141.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _141.MsgUpdateParamsResponseAminoMsg): _141.MsgUpdateParamsResponse;
                toAminoMsg(message: _141.MsgUpdateParamsResponse): _141.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _141.MsgUpdateParamsResponseProtoMsg): _141.MsgUpdateParamsResponse;
                toProto(message: _141.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _141.MsgUpdateParamsResponse): _141.MsgUpdateParamsResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                typeUrl: string;
                encode(message: _140.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.ValidatorSigningInfo;
                fromJSON(object: any): _140.ValidatorSigningInfo;
                toJSON(message: _140.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_140.ValidatorSigningInfo>): _140.ValidatorSigningInfo;
                fromAmino(object: _140.ValidatorSigningInfoAmino): _140.ValidatorSigningInfo;
                toAmino(message: _140.ValidatorSigningInfo): _140.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _140.ValidatorSigningInfoAminoMsg): _140.ValidatorSigningInfo;
                toAminoMsg(message: _140.ValidatorSigningInfo): _140.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _140.ValidatorSigningInfoProtoMsg): _140.ValidatorSigningInfo;
                toProto(message: _140.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _140.ValidatorSigningInfo): _140.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _140.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.Params;
                fromJSON(object: any): _140.Params;
                toJSON(message: _140.Params): unknown;
                fromPartial(object: Partial<_140.Params>): _140.Params;
                fromAmino(object: _140.ParamsAmino): _140.Params;
                toAmino(message: _140.Params): _140.ParamsAmino;
                fromAminoMsg(object: _140.ParamsAminoMsg): _140.Params;
                toAminoMsg(message: _140.Params): _140.ParamsAminoMsg;
                fromProtoMsg(message: _140.ParamsProtoMsg): _140.Params;
                toProto(message: _140.Params): Uint8Array;
                toProtoMsg(message: _140.Params): _140.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _139.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsRequest;
                fromJSON(_: any): _139.QueryParamsRequest;
                toJSON(_: _139.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_139.QueryParamsRequest>): _139.QueryParamsRequest;
                fromAmino(_: _139.QueryParamsRequestAmino): _139.QueryParamsRequest;
                toAmino(_: _139.QueryParamsRequest): _139.QueryParamsRequestAmino;
                fromAminoMsg(object: _139.QueryParamsRequestAminoMsg): _139.QueryParamsRequest;
                toAminoMsg(message: _139.QueryParamsRequest): _139.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _139.QueryParamsRequestProtoMsg): _139.QueryParamsRequest;
                toProto(message: _139.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _139.QueryParamsRequest): _139.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _139.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryParamsResponse;
                fromJSON(object: any): _139.QueryParamsResponse;
                toJSON(message: _139.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_139.QueryParamsResponse>): _139.QueryParamsResponse;
                fromAmino(object: _139.QueryParamsResponseAmino): _139.QueryParamsResponse;
                toAmino(message: _139.QueryParamsResponse): _139.QueryParamsResponseAmino;
                fromAminoMsg(object: _139.QueryParamsResponseAminoMsg): _139.QueryParamsResponse;
                toAminoMsg(message: _139.QueryParamsResponse): _139.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _139.QueryParamsResponseProtoMsg): _139.QueryParamsResponse;
                toProto(message: _139.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _139.QueryParamsResponse): _139.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                typeUrl: string;
                encode(message: _139.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySigningInfoRequest;
                fromJSON(object: any): _139.QuerySigningInfoRequest;
                toJSON(message: _139.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_139.QuerySigningInfoRequest>): _139.QuerySigningInfoRequest;
                fromAmino(object: _139.QuerySigningInfoRequestAmino): _139.QuerySigningInfoRequest;
                toAmino(message: _139.QuerySigningInfoRequest): _139.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _139.QuerySigningInfoRequestAminoMsg): _139.QuerySigningInfoRequest;
                toAminoMsg(message: _139.QuerySigningInfoRequest): _139.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _139.QuerySigningInfoRequestProtoMsg): _139.QuerySigningInfoRequest;
                toProto(message: _139.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _139.QuerySigningInfoRequest): _139.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                typeUrl: string;
                encode(message: _139.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySigningInfoResponse;
                fromJSON(object: any): _139.QuerySigningInfoResponse;
                toJSON(message: _139.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_139.QuerySigningInfoResponse>): _139.QuerySigningInfoResponse;
                fromAmino(object: _139.QuerySigningInfoResponseAmino): _139.QuerySigningInfoResponse;
                toAmino(message: _139.QuerySigningInfoResponse): _139.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _139.QuerySigningInfoResponseAminoMsg): _139.QuerySigningInfoResponse;
                toAminoMsg(message: _139.QuerySigningInfoResponse): _139.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _139.QuerySigningInfoResponseProtoMsg): _139.QuerySigningInfoResponse;
                toProto(message: _139.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _139.QuerySigningInfoResponse): _139.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                typeUrl: string;
                encode(message: _139.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySigningInfosRequest;
                fromJSON(object: any): _139.QuerySigningInfosRequest;
                toJSON(message: _139.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_139.QuerySigningInfosRequest>): _139.QuerySigningInfosRequest;
                fromAmino(object: _139.QuerySigningInfosRequestAmino): _139.QuerySigningInfosRequest;
                toAmino(message: _139.QuerySigningInfosRequest): _139.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _139.QuerySigningInfosRequestAminoMsg): _139.QuerySigningInfosRequest;
                toAminoMsg(message: _139.QuerySigningInfosRequest): _139.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _139.QuerySigningInfosRequestProtoMsg): _139.QuerySigningInfosRequest;
                toProto(message: _139.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _139.QuerySigningInfosRequest): _139.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                typeUrl: string;
                encode(message: _139.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QuerySigningInfosResponse;
                fromJSON(object: any): _139.QuerySigningInfosResponse;
                toJSON(message: _139.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_139.QuerySigningInfosResponse>): _139.QuerySigningInfosResponse;
                fromAmino(object: _139.QuerySigningInfosResponseAmino): _139.QuerySigningInfosResponse;
                toAmino(message: _139.QuerySigningInfosResponse): _139.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _139.QuerySigningInfosResponseAminoMsg): _139.QuerySigningInfosResponse;
                toAminoMsg(message: _139.QuerySigningInfosResponse): _139.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _139.QuerySigningInfosResponseProtoMsg): _139.QuerySigningInfosResponse;
                toProto(message: _139.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _139.QuerySigningInfosResponse): _139.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _138.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.GenesisState;
                fromJSON(object: any): _138.GenesisState;
                toJSON(message: _138.GenesisState): unknown;
                fromPartial(object: Partial<_138.GenesisState>): _138.GenesisState;
                fromAmino(object: _138.GenesisStateAmino): _138.GenesisState;
                toAmino(message: _138.GenesisState): _138.GenesisStateAmino;
                fromAminoMsg(object: _138.GenesisStateAminoMsg): _138.GenesisState;
                toAminoMsg(message: _138.GenesisState): _138.GenesisStateAminoMsg;
                fromProtoMsg(message: _138.GenesisStateProtoMsg): _138.GenesisState;
                toProto(message: _138.GenesisState): Uint8Array;
                toProtoMsg(message: _138.GenesisState): _138.GenesisStateProtoMsg;
            };
            SigningInfo: {
                typeUrl: string;
                encode(message: _138.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.SigningInfo;
                fromJSON(object: any): _138.SigningInfo;
                toJSON(message: _138.SigningInfo): unknown;
                fromPartial(object: Partial<_138.SigningInfo>): _138.SigningInfo;
                fromAmino(object: _138.SigningInfoAmino): _138.SigningInfo;
                toAmino(message: _138.SigningInfo): _138.SigningInfoAmino;
                fromAminoMsg(object: _138.SigningInfoAminoMsg): _138.SigningInfo;
                toAminoMsg(message: _138.SigningInfo): _138.SigningInfoAminoMsg;
                fromProtoMsg(message: _138.SigningInfoProtoMsg): _138.SigningInfo;
                toProto(message: _138.SigningInfo): Uint8Array;
                toProtoMsg(message: _138.SigningInfo): _138.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                typeUrl: string;
                encode(message: _138.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.ValidatorMissedBlocks;
                fromJSON(object: any): _138.ValidatorMissedBlocks;
                toJSON(message: _138.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_138.ValidatorMissedBlocks>): _138.ValidatorMissedBlocks;
                fromAmino(object: _138.ValidatorMissedBlocksAmino): _138.ValidatorMissedBlocks;
                toAmino(message: _138.ValidatorMissedBlocks): _138.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _138.ValidatorMissedBlocksAminoMsg): _138.ValidatorMissedBlocks;
                toAminoMsg(message: _138.ValidatorMissedBlocks): _138.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _138.ValidatorMissedBlocksProtoMsg): _138.ValidatorMissedBlocks;
                toProto(message: _138.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _138.ValidatorMissedBlocks): _138.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                typeUrl: string;
                encode(message: _138.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.MissedBlock;
                fromJSON(object: any): _138.MissedBlock;
                toJSON(message: _138.MissedBlock): unknown;
                fromPartial(object: Partial<_138.MissedBlock>): _138.MissedBlock;
                fromAmino(object: _138.MissedBlockAmino): _138.MissedBlock;
                toAmino(message: _138.MissedBlock): _138.MissedBlockAmino;
                fromAminoMsg(object: _138.MissedBlockAminoMsg): _138.MissedBlock;
                toAminoMsg(message: _138.MissedBlock): _138.MissedBlockAminoMsg;
                fromProtoMsg(message: _138.MissedBlockProtoMsg): _138.MissedBlock;
                toProto(message: _138.MissedBlock): Uint8Array;
                toProtoMsg(message: _138.MissedBlock): _138.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _142.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Module;
                    fromJSON(object: any): _142.Module;
                    toJSON(message: _142.Module): unknown;
                    fromPartial(object: Partial<_142.Module>): _142.Module;
                    fromAmino(object: _142.ModuleAmino): _142.Module;
                    toAmino(message: _142.Module): _142.ModuleAmino;
                    fromAminoMsg(object: _142.ModuleAminoMsg): _142.Module;
                    toAminoMsg(message: _142.Module): _142.ModuleAminoMsg;
                    fromProtoMsg(message: _142.ModuleProtoMsg): _142.Module;
                    toProto(message: _142.Module): Uint8Array;
                    toProtoMsg(message: _142.Module): _142.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _309.MsgClientImpl;
            QueryClientImpl: typeof _292.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _145.QueryValidatorsRequest): Promise<_145.QueryValidatorsResponse>;
                validator(request: _145.QueryValidatorRequest): Promise<_145.QueryValidatorResponse>;
                validatorDelegations(request: _145.QueryValidatorDelegationsRequest): Promise<_145.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _145.QueryValidatorUnbondingDelegationsRequest): Promise<_145.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _145.QueryDelegationRequest): Promise<_145.QueryDelegationResponse>;
                unbondingDelegation(request: _145.QueryUnbondingDelegationRequest): Promise<_145.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _145.QueryDelegatorDelegationsRequest): Promise<_145.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _145.QueryDelegatorUnbondingDelegationsRequest): Promise<_145.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _145.QueryRedelegationsRequest): Promise<_145.QueryRedelegationsResponse>;
                delegatorValidators(request: _145.QueryDelegatorValidatorsRequest): Promise<_145.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _145.QueryDelegatorValidatorRequest): Promise<_145.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _145.QueryHistoricalInfoRequest): Promise<_145.QueryHistoricalInfoResponse>;
                pool(request?: _145.QueryPoolRequest): Promise<_145.QueryPoolResponse>;
                params(request?: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
            };
            LCDQueryClient: typeof _270.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _147.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _147.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _147.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _147.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _147.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUnbondingDelegation(value: _147.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _147.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _147.MsgCreateValidator): {
                        typeUrl: string;
                        value: _147.MsgCreateValidator;
                    };
                    editValidator(value: _147.MsgEditValidator): {
                        typeUrl: string;
                        value: _147.MsgEditValidator;
                    };
                    delegate(value: _147.MsgDelegate): {
                        typeUrl: string;
                        value: _147.MsgDelegate;
                    };
                    beginRedelegate(value: _147.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _147.MsgBeginRedelegate;
                    };
                    undelegate(value: _147.MsgUndelegate): {
                        typeUrl: string;
                        value: _147.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _147.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _147.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _147.MsgUpdateParams): {
                        typeUrl: string;
                        value: _147.MsgUpdateParams;
                    };
                };
                toJSON: {
                    createValidator(value: _147.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _147.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _147.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _147.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _147.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUnbondingDelegation(value: _147.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateParams(value: _147.MsgUpdateParams): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _147.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _147.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _147.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _147.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _147.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: any): {
                        typeUrl: string;
                        value: _147.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _147.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    createValidator(value: _147.MsgCreateValidator): {
                        typeUrl: string;
                        value: _147.MsgCreateValidator;
                    };
                    editValidator(value: _147.MsgEditValidator): {
                        typeUrl: string;
                        value: _147.MsgEditValidator;
                    };
                    delegate(value: _147.MsgDelegate): {
                        typeUrl: string;
                        value: _147.MsgDelegate;
                    };
                    beginRedelegate(value: _147.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _147.MsgBeginRedelegate;
                    };
                    undelegate(value: _147.MsgUndelegate): {
                        typeUrl: string;
                        value: _147.MsgUndelegate;
                    };
                    cancelUnbondingDelegation(value: _147.MsgCancelUnbondingDelegation): {
                        typeUrl: string;
                        value: _147.MsgCancelUnbondingDelegation;
                    };
                    updateParams(value: _147.MsgUpdateParams): {
                        typeUrl: string;
                        value: _147.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _147.MsgCreateValidator) => _147.MsgCreateValidatorAmino;
                    fromAmino: (object: _147.MsgCreateValidatorAmino) => _147.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _147.MsgEditValidator) => _147.MsgEditValidatorAmino;
                    fromAmino: (object: _147.MsgEditValidatorAmino) => _147.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _147.MsgDelegate) => _147.MsgDelegateAmino;
                    fromAmino: (object: _147.MsgDelegateAmino) => _147.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _147.MsgBeginRedelegate) => _147.MsgBeginRedelegateAmino;
                    fromAmino: (object: _147.MsgBeginRedelegateAmino) => _147.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _147.MsgUndelegate) => _147.MsgUndelegateAmino;
                    fromAmino: (object: _147.MsgUndelegateAmino) => _147.MsgUndelegate;
                };
                "/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation": {
                    aminoType: string;
                    toAmino: (message: _147.MsgCancelUnbondingDelegation) => _147.MsgCancelUnbondingDelegationAmino;
                    fromAmino: (object: _147.MsgCancelUnbondingDelegationAmino) => _147.MsgCancelUnbondingDelegation;
                };
                "/cosmos.staking.v1beta1.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _147.MsgUpdateParams) => _147.MsgUpdateParamsAmino;
                    fromAmino: (object: _147.MsgUpdateParamsAmino) => _147.MsgUpdateParams;
                };
            };
            MsgCreateValidator: {
                typeUrl: string;
                encode(message: _147.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateValidator;
                fromJSON(object: any): _147.MsgCreateValidator;
                toJSON(message: _147.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_147.MsgCreateValidator>): _147.MsgCreateValidator;
                fromAmino(object: _147.MsgCreateValidatorAmino): _147.MsgCreateValidator;
                toAmino(message: _147.MsgCreateValidator): _147.MsgCreateValidatorAmino;
                fromAminoMsg(object: _147.MsgCreateValidatorAminoMsg): _147.MsgCreateValidator;
                toAminoMsg(message: _147.MsgCreateValidator): _147.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _147.MsgCreateValidatorProtoMsg): _147.MsgCreateValidator;
                toProto(message: _147.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _147.MsgCreateValidator): _147.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                typeUrl: string;
                encode(_: _147.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCreateValidatorResponse;
                fromJSON(_: any): _147.MsgCreateValidatorResponse;
                toJSON(_: _147.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_147.MsgCreateValidatorResponse>): _147.MsgCreateValidatorResponse;
                fromAmino(_: _147.MsgCreateValidatorResponseAmino): _147.MsgCreateValidatorResponse;
                toAmino(_: _147.MsgCreateValidatorResponse): _147.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _147.MsgCreateValidatorResponseAminoMsg): _147.MsgCreateValidatorResponse;
                toAminoMsg(message: _147.MsgCreateValidatorResponse): _147.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _147.MsgCreateValidatorResponseProtoMsg): _147.MsgCreateValidatorResponse;
                toProto(message: _147.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _147.MsgCreateValidatorResponse): _147.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                typeUrl: string;
                encode(message: _147.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgEditValidator;
                fromJSON(object: any): _147.MsgEditValidator;
                toJSON(message: _147.MsgEditValidator): unknown;
                fromPartial(object: Partial<_147.MsgEditValidator>): _147.MsgEditValidator;
                fromAmino(object: _147.MsgEditValidatorAmino): _147.MsgEditValidator;
                toAmino(message: _147.MsgEditValidator): _147.MsgEditValidatorAmino;
                fromAminoMsg(object: _147.MsgEditValidatorAminoMsg): _147.MsgEditValidator;
                toAminoMsg(message: _147.MsgEditValidator): _147.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _147.MsgEditValidatorProtoMsg): _147.MsgEditValidator;
                toProto(message: _147.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _147.MsgEditValidator): _147.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                typeUrl: string;
                encode(_: _147.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgEditValidatorResponse;
                fromJSON(_: any): _147.MsgEditValidatorResponse;
                toJSON(_: _147.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_147.MsgEditValidatorResponse>): _147.MsgEditValidatorResponse;
                fromAmino(_: _147.MsgEditValidatorResponseAmino): _147.MsgEditValidatorResponse;
                toAmino(_: _147.MsgEditValidatorResponse): _147.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _147.MsgEditValidatorResponseAminoMsg): _147.MsgEditValidatorResponse;
                toAminoMsg(message: _147.MsgEditValidatorResponse): _147.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _147.MsgEditValidatorResponseProtoMsg): _147.MsgEditValidatorResponse;
                toProto(message: _147.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _147.MsgEditValidatorResponse): _147.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                typeUrl: string;
                encode(message: _147.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgDelegate;
                fromJSON(object: any): _147.MsgDelegate;
                toJSON(message: _147.MsgDelegate): unknown;
                fromPartial(object: Partial<_147.MsgDelegate>): _147.MsgDelegate;
                fromAmino(object: _147.MsgDelegateAmino): _147.MsgDelegate;
                toAmino(message: _147.MsgDelegate): _147.MsgDelegateAmino;
                fromAminoMsg(object: _147.MsgDelegateAminoMsg): _147.MsgDelegate;
                toAminoMsg(message: _147.MsgDelegate): _147.MsgDelegateAminoMsg;
                fromProtoMsg(message: _147.MsgDelegateProtoMsg): _147.MsgDelegate;
                toProto(message: _147.MsgDelegate): Uint8Array;
                toProtoMsg(message: _147.MsgDelegate): _147.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                typeUrl: string;
                encode(_: _147.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgDelegateResponse;
                fromJSON(_: any): _147.MsgDelegateResponse;
                toJSON(_: _147.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_147.MsgDelegateResponse>): _147.MsgDelegateResponse;
                fromAmino(_: _147.MsgDelegateResponseAmino): _147.MsgDelegateResponse;
                toAmino(_: _147.MsgDelegateResponse): _147.MsgDelegateResponseAmino;
                fromAminoMsg(object: _147.MsgDelegateResponseAminoMsg): _147.MsgDelegateResponse;
                toAminoMsg(message: _147.MsgDelegateResponse): _147.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _147.MsgDelegateResponseProtoMsg): _147.MsgDelegateResponse;
                toProto(message: _147.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _147.MsgDelegateResponse): _147.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                typeUrl: string;
                encode(message: _147.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginRedelegate;
                fromJSON(object: any): _147.MsgBeginRedelegate;
                toJSON(message: _147.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_147.MsgBeginRedelegate>): _147.MsgBeginRedelegate;
                fromAmino(object: _147.MsgBeginRedelegateAmino): _147.MsgBeginRedelegate;
                toAmino(message: _147.MsgBeginRedelegate): _147.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _147.MsgBeginRedelegateAminoMsg): _147.MsgBeginRedelegate;
                toAminoMsg(message: _147.MsgBeginRedelegate): _147.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _147.MsgBeginRedelegateProtoMsg): _147.MsgBeginRedelegate;
                toProto(message: _147.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _147.MsgBeginRedelegate): _147.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                typeUrl: string;
                encode(message: _147.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgBeginRedelegateResponse;
                fromJSON(object: any): _147.MsgBeginRedelegateResponse;
                toJSON(message: _147.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_147.MsgBeginRedelegateResponse>): _147.MsgBeginRedelegateResponse;
                fromAmino(object: _147.MsgBeginRedelegateResponseAmino): _147.MsgBeginRedelegateResponse;
                toAmino(message: _147.MsgBeginRedelegateResponse): _147.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _147.MsgBeginRedelegateResponseAminoMsg): _147.MsgBeginRedelegateResponse;
                toAminoMsg(message: _147.MsgBeginRedelegateResponse): _147.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _147.MsgBeginRedelegateResponseProtoMsg): _147.MsgBeginRedelegateResponse;
                toProto(message: _147.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _147.MsgBeginRedelegateResponse): _147.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                typeUrl: string;
                encode(message: _147.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUndelegate;
                fromJSON(object: any): _147.MsgUndelegate;
                toJSON(message: _147.MsgUndelegate): unknown;
                fromPartial(object: Partial<_147.MsgUndelegate>): _147.MsgUndelegate;
                fromAmino(object: _147.MsgUndelegateAmino): _147.MsgUndelegate;
                toAmino(message: _147.MsgUndelegate): _147.MsgUndelegateAmino;
                fromAminoMsg(object: _147.MsgUndelegateAminoMsg): _147.MsgUndelegate;
                toAminoMsg(message: _147.MsgUndelegate): _147.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _147.MsgUndelegateProtoMsg): _147.MsgUndelegate;
                toProto(message: _147.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _147.MsgUndelegate): _147.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                typeUrl: string;
                encode(message: _147.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUndelegateResponse;
                fromJSON(object: any): _147.MsgUndelegateResponse;
                toJSON(message: _147.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_147.MsgUndelegateResponse>): _147.MsgUndelegateResponse;
                fromAmino(object: _147.MsgUndelegateResponseAmino): _147.MsgUndelegateResponse;
                toAmino(message: _147.MsgUndelegateResponse): _147.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _147.MsgUndelegateResponseAminoMsg): _147.MsgUndelegateResponse;
                toAminoMsg(message: _147.MsgUndelegateResponse): _147.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _147.MsgUndelegateResponseProtoMsg): _147.MsgUndelegateResponse;
                toProto(message: _147.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _147.MsgUndelegateResponse): _147.MsgUndelegateResponseProtoMsg;
            };
            MsgCancelUnbondingDelegation: {
                typeUrl: string;
                encode(message: _147.MsgCancelUnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCancelUnbondingDelegation;
                fromJSON(object: any): _147.MsgCancelUnbondingDelegation;
                toJSON(message: _147.MsgCancelUnbondingDelegation): unknown;
                fromPartial(object: Partial<_147.MsgCancelUnbondingDelegation>): _147.MsgCancelUnbondingDelegation;
                fromAmino(object: _147.MsgCancelUnbondingDelegationAmino): _147.MsgCancelUnbondingDelegation;
                toAmino(message: _147.MsgCancelUnbondingDelegation): _147.MsgCancelUnbondingDelegationAmino;
                fromAminoMsg(object: _147.MsgCancelUnbondingDelegationAminoMsg): _147.MsgCancelUnbondingDelegation;
                toAminoMsg(message: _147.MsgCancelUnbondingDelegation): _147.MsgCancelUnbondingDelegationAminoMsg;
                fromProtoMsg(message: _147.MsgCancelUnbondingDelegationProtoMsg): _147.MsgCancelUnbondingDelegation;
                toProto(message: _147.MsgCancelUnbondingDelegation): Uint8Array;
                toProtoMsg(message: _147.MsgCancelUnbondingDelegation): _147.MsgCancelUnbondingDelegationProtoMsg;
            };
            MsgCancelUnbondingDelegationResponse: {
                typeUrl: string;
                encode(_: _147.MsgCancelUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgCancelUnbondingDelegationResponse;
                fromJSON(_: any): _147.MsgCancelUnbondingDelegationResponse;
                toJSON(_: _147.MsgCancelUnbondingDelegationResponse): unknown;
                fromPartial(_: Partial<_147.MsgCancelUnbondingDelegationResponse>): _147.MsgCancelUnbondingDelegationResponse;
                fromAmino(_: _147.MsgCancelUnbondingDelegationResponseAmino): _147.MsgCancelUnbondingDelegationResponse;
                toAmino(_: _147.MsgCancelUnbondingDelegationResponse): _147.MsgCancelUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _147.MsgCancelUnbondingDelegationResponseAminoMsg): _147.MsgCancelUnbondingDelegationResponse;
                toAminoMsg(message: _147.MsgCancelUnbondingDelegationResponse): _147.MsgCancelUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _147.MsgCancelUnbondingDelegationResponseProtoMsg): _147.MsgCancelUnbondingDelegationResponse;
                toProto(message: _147.MsgCancelUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _147.MsgCancelUnbondingDelegationResponse): _147.MsgCancelUnbondingDelegationResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _147.MsgUpdateParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateParams;
                fromJSON(object: any): _147.MsgUpdateParams;
                toJSON(message: _147.MsgUpdateParams): unknown;
                fromPartial(object: Partial<_147.MsgUpdateParams>): _147.MsgUpdateParams;
                fromAmino(object: _147.MsgUpdateParamsAmino): _147.MsgUpdateParams;
                toAmino(message: _147.MsgUpdateParams): _147.MsgUpdateParamsAmino;
                fromAminoMsg(object: _147.MsgUpdateParamsAminoMsg): _147.MsgUpdateParams;
                toAminoMsg(message: _147.MsgUpdateParams): _147.MsgUpdateParamsAminoMsg;
                fromProtoMsg(message: _147.MsgUpdateParamsProtoMsg): _147.MsgUpdateParams;
                toProto(message: _147.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _147.MsgUpdateParams): _147.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _147.MsgUpdateParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.MsgUpdateParamsResponse;
                fromJSON(_: any): _147.MsgUpdateParamsResponse;
                toJSON(_: _147.MsgUpdateParamsResponse): unknown;
                fromPartial(_: Partial<_147.MsgUpdateParamsResponse>): _147.MsgUpdateParamsResponse;
                fromAmino(_: _147.MsgUpdateParamsResponseAmino): _147.MsgUpdateParamsResponse;
                toAmino(_: _147.MsgUpdateParamsResponse): _147.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _147.MsgUpdateParamsResponseAminoMsg): _147.MsgUpdateParamsResponse;
                toAminoMsg(message: _147.MsgUpdateParamsResponse): _147.MsgUpdateParamsResponseAminoMsg;
                fromProtoMsg(message: _147.MsgUpdateParamsResponseProtoMsg): _147.MsgUpdateParamsResponse;
                toProto(message: _147.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _147.MsgUpdateParamsResponse): _147.MsgUpdateParamsResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _146.BondStatus;
            bondStatusToJSON(object: _146.BondStatus): string;
            infractionFromJSON(object: any): _146.Infraction;
            infractionToJSON(object: _146.Infraction): string;
            BondStatus: typeof _146.BondStatus;
            BondStatusSDKType: typeof _146.BondStatus;
            BondStatusAmino: typeof _146.BondStatus;
            Infraction: typeof _146.Infraction;
            InfractionSDKType: typeof _146.Infraction;
            InfractionAmino: typeof _146.Infraction;
            HistoricalInfo: {
                typeUrl: string;
                encode(message: _146.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.HistoricalInfo;
                fromJSON(object: any): _146.HistoricalInfo;
                toJSON(message: _146.HistoricalInfo): unknown;
                fromPartial(object: Partial<_146.HistoricalInfo>): _146.HistoricalInfo;
                fromAmino(object: _146.HistoricalInfoAmino): _146.HistoricalInfo;
                toAmino(message: _146.HistoricalInfo): _146.HistoricalInfoAmino;
                fromAminoMsg(object: _146.HistoricalInfoAminoMsg): _146.HistoricalInfo;
                toAminoMsg(message: _146.HistoricalInfo): _146.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _146.HistoricalInfoProtoMsg): _146.HistoricalInfo;
                toProto(message: _146.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _146.HistoricalInfo): _146.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                typeUrl: string;
                encode(message: _146.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.CommissionRates;
                fromJSON(object: any): _146.CommissionRates;
                toJSON(message: _146.CommissionRates): unknown;
                fromPartial(object: Partial<_146.CommissionRates>): _146.CommissionRates;
                fromAmino(object: _146.CommissionRatesAmino): _146.CommissionRates;
                toAmino(message: _146.CommissionRates): _146.CommissionRatesAmino;
                fromAminoMsg(object: _146.CommissionRatesAminoMsg): _146.CommissionRates;
                toAminoMsg(message: _146.CommissionRates): _146.CommissionRatesAminoMsg;
                fromProtoMsg(message: _146.CommissionRatesProtoMsg): _146.CommissionRates;
                toProto(message: _146.CommissionRates): Uint8Array;
                toProtoMsg(message: _146.CommissionRates): _146.CommissionRatesProtoMsg;
            };
            Commission: {
                typeUrl: string;
                encode(message: _146.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Commission;
                fromJSON(object: any): _146.Commission;
                toJSON(message: _146.Commission): unknown;
                fromPartial(object: Partial<_146.Commission>): _146.Commission;
                fromAmino(object: _146.CommissionAmino): _146.Commission;
                toAmino(message: _146.Commission): _146.CommissionAmino;
                fromAminoMsg(object: _146.CommissionAminoMsg): _146.Commission;
                toAminoMsg(message: _146.Commission): _146.CommissionAminoMsg;
                fromProtoMsg(message: _146.CommissionProtoMsg): _146.Commission;
                toProto(message: _146.Commission): Uint8Array;
                toProtoMsg(message: _146.Commission): _146.CommissionProtoMsg;
            };
            Description: {
                typeUrl: string;
                encode(message: _146.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Description;
                fromJSON(object: any): _146.Description;
                toJSON(message: _146.Description): unknown;
                fromPartial(object: Partial<_146.Description>): _146.Description;
                fromAmino(object: _146.DescriptionAmino): _146.Description;
                toAmino(message: _146.Description): _146.DescriptionAmino;
                fromAminoMsg(object: _146.DescriptionAminoMsg): _146.Description;
                toAminoMsg(message: _146.Description): _146.DescriptionAminoMsg;
                fromProtoMsg(message: _146.DescriptionProtoMsg): _146.Description;
                toProto(message: _146.Description): Uint8Array;
                toProtoMsg(message: _146.Description): _146.DescriptionProtoMsg;
            };
            Validator: {
                typeUrl: string;
                encode(message: _146.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Validator;
                fromJSON(object: any): _146.Validator;
                toJSON(message: _146.Validator): unknown;
                fromPartial(object: Partial<_146.Validator>): _146.Validator;
                fromAmino(object: _146.ValidatorAmino): _146.Validator;
                toAmino(message: _146.Validator): _146.ValidatorAmino;
                fromAminoMsg(object: _146.ValidatorAminoMsg): _146.Validator;
                toAminoMsg(message: _146.Validator): _146.ValidatorAminoMsg;
                fromProtoMsg(message: _146.ValidatorProtoMsg): _146.Validator;
                toProto(message: _146.Validator): Uint8Array;
                toProtoMsg(message: _146.Validator): _146.ValidatorProtoMsg;
            };
            ValAddresses: {
                typeUrl: string;
                encode(message: _146.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ValAddresses;
                fromJSON(object: any): _146.ValAddresses;
                toJSON(message: _146.ValAddresses): unknown;
                fromPartial(object: Partial<_146.ValAddresses>): _146.ValAddresses;
                fromAmino(object: _146.ValAddressesAmino): _146.ValAddresses;
                toAmino(message: _146.ValAddresses): _146.ValAddressesAmino;
                fromAminoMsg(object: _146.ValAddressesAminoMsg): _146.ValAddresses;
                toAminoMsg(message: _146.ValAddresses): _146.ValAddressesAminoMsg;
                fromProtoMsg(message: _146.ValAddressesProtoMsg): _146.ValAddresses;
                toProto(message: _146.ValAddresses): Uint8Array;
                toProtoMsg(message: _146.ValAddresses): _146.ValAddressesProtoMsg;
            };
            DVPair: {
                typeUrl: string;
                encode(message: _146.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DVPair;
                fromJSON(object: any): _146.DVPair;
                toJSON(message: _146.DVPair): unknown;
                fromPartial(object: Partial<_146.DVPair>): _146.DVPair;
                fromAmino(object: _146.DVPairAmino): _146.DVPair;
                toAmino(message: _146.DVPair): _146.DVPairAmino;
                fromAminoMsg(object: _146.DVPairAminoMsg): _146.DVPair;
                toAminoMsg(message: _146.DVPair): _146.DVPairAminoMsg;
                fromProtoMsg(message: _146.DVPairProtoMsg): _146.DVPair;
                toProto(message: _146.DVPair): Uint8Array;
                toProtoMsg(message: _146.DVPair): _146.DVPairProtoMsg;
            };
            DVPairs: {
                typeUrl: string;
                encode(message: _146.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DVPairs;
                fromJSON(object: any): _146.DVPairs;
                toJSON(message: _146.DVPairs): unknown;
                fromPartial(object: Partial<_146.DVPairs>): _146.DVPairs;
                fromAmino(object: _146.DVPairsAmino): _146.DVPairs;
                toAmino(message: _146.DVPairs): _146.DVPairsAmino;
                fromAminoMsg(object: _146.DVPairsAminoMsg): _146.DVPairs;
                toAminoMsg(message: _146.DVPairs): _146.DVPairsAminoMsg;
                fromProtoMsg(message: _146.DVPairsProtoMsg): _146.DVPairs;
                toProto(message: _146.DVPairs): Uint8Array;
                toProtoMsg(message: _146.DVPairs): _146.DVPairsProtoMsg;
            };
            DVVTriplet: {
                typeUrl: string;
                encode(message: _146.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DVVTriplet;
                fromJSON(object: any): _146.DVVTriplet;
                toJSON(message: _146.DVVTriplet): unknown;
                fromPartial(object: Partial<_146.DVVTriplet>): _146.DVVTriplet;
                fromAmino(object: _146.DVVTripletAmino): _146.DVVTriplet;
                toAmino(message: _146.DVVTriplet): _146.DVVTripletAmino;
                fromAminoMsg(object: _146.DVVTripletAminoMsg): _146.DVVTriplet;
                toAminoMsg(message: _146.DVVTriplet): _146.DVVTripletAminoMsg;
                fromProtoMsg(message: _146.DVVTripletProtoMsg): _146.DVVTriplet;
                toProto(message: _146.DVVTriplet): Uint8Array;
                toProtoMsg(message: _146.DVVTriplet): _146.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                typeUrl: string;
                encode(message: _146.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DVVTriplets;
                fromJSON(object: any): _146.DVVTriplets;
                toJSON(message: _146.DVVTriplets): unknown;
                fromPartial(object: Partial<_146.DVVTriplets>): _146.DVVTriplets;
                fromAmino(object: _146.DVVTripletsAmino): _146.DVVTriplets;
                toAmino(message: _146.DVVTriplets): _146.DVVTripletsAmino;
                fromAminoMsg(object: _146.DVVTripletsAminoMsg): _146.DVVTriplets;
                toAminoMsg(message: _146.DVVTriplets): _146.DVVTripletsAminoMsg;
                fromProtoMsg(message: _146.DVVTripletsProtoMsg): _146.DVVTriplets;
                toProto(message: _146.DVVTriplets): Uint8Array;
                toProtoMsg(message: _146.DVVTriplets): _146.DVVTripletsProtoMsg;
            };
            Delegation: {
                typeUrl: string;
                encode(message: _146.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Delegation;
                fromJSON(object: any): _146.Delegation;
                toJSON(message: _146.Delegation): unknown;
                fromPartial(object: Partial<_146.Delegation>): _146.Delegation;
                fromAmino(object: _146.DelegationAmino): _146.Delegation;
                toAmino(message: _146.Delegation): _146.DelegationAmino;
                fromAminoMsg(object: _146.DelegationAminoMsg): _146.Delegation;
                toAminoMsg(message: _146.Delegation): _146.DelegationAminoMsg;
                fromProtoMsg(message: _146.DelegationProtoMsg): _146.Delegation;
                toProto(message: _146.Delegation): Uint8Array;
                toProtoMsg(message: _146.Delegation): _146.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                typeUrl: string;
                encode(message: _146.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.UnbondingDelegation;
                fromJSON(object: any): _146.UnbondingDelegation;
                toJSON(message: _146.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_146.UnbondingDelegation>): _146.UnbondingDelegation;
                fromAmino(object: _146.UnbondingDelegationAmino): _146.UnbondingDelegation;
                toAmino(message: _146.UnbondingDelegation): _146.UnbondingDelegationAmino;
                fromAminoMsg(object: _146.UnbondingDelegationAminoMsg): _146.UnbondingDelegation;
                toAminoMsg(message: _146.UnbondingDelegation): _146.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _146.UnbondingDelegationProtoMsg): _146.UnbondingDelegation;
                toProto(message: _146.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _146.UnbondingDelegation): _146.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                typeUrl: string;
                encode(message: _146.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.UnbondingDelegationEntry;
                fromJSON(object: any): _146.UnbondingDelegationEntry;
                toJSON(message: _146.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_146.UnbondingDelegationEntry>): _146.UnbondingDelegationEntry;
                fromAmino(object: _146.UnbondingDelegationEntryAmino): _146.UnbondingDelegationEntry;
                toAmino(message: _146.UnbondingDelegationEntry): _146.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _146.UnbondingDelegationEntryAminoMsg): _146.UnbondingDelegationEntry;
                toAminoMsg(message: _146.UnbondingDelegationEntry): _146.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _146.UnbondingDelegationEntryProtoMsg): _146.UnbondingDelegationEntry;
                toProto(message: _146.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _146.UnbondingDelegationEntry): _146.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                typeUrl: string;
                encode(message: _146.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.RedelegationEntry;
                fromJSON(object: any): _146.RedelegationEntry;
                toJSON(message: _146.RedelegationEntry): unknown;
                fromPartial(object: Partial<_146.RedelegationEntry>): _146.RedelegationEntry;
                fromAmino(object: _146.RedelegationEntryAmino): _146.RedelegationEntry;
                toAmino(message: _146.RedelegationEntry): _146.RedelegationEntryAmino;
                fromAminoMsg(object: _146.RedelegationEntryAminoMsg): _146.RedelegationEntry;
                toAminoMsg(message: _146.RedelegationEntry): _146.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _146.RedelegationEntryProtoMsg): _146.RedelegationEntry;
                toProto(message: _146.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _146.RedelegationEntry): _146.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                typeUrl: string;
                encode(message: _146.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Redelegation;
                fromJSON(object: any): _146.Redelegation;
                toJSON(message: _146.Redelegation): unknown;
                fromPartial(object: Partial<_146.Redelegation>): _146.Redelegation;
                fromAmino(object: _146.RedelegationAmino): _146.Redelegation;
                toAmino(message: _146.Redelegation): _146.RedelegationAmino;
                fromAminoMsg(object: _146.RedelegationAminoMsg): _146.Redelegation;
                toAminoMsg(message: _146.Redelegation): _146.RedelegationAminoMsg;
                fromProtoMsg(message: _146.RedelegationProtoMsg): _146.Redelegation;
                toProto(message: _146.Redelegation): Uint8Array;
                toProtoMsg(message: _146.Redelegation): _146.RedelegationProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _146.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Params;
                fromJSON(object: any): _146.Params;
                toJSON(message: _146.Params): unknown;
                fromPartial(object: Partial<_146.Params>): _146.Params;
                fromAmino(object: _146.ParamsAmino): _146.Params;
                toAmino(message: _146.Params): _146.ParamsAmino;
                fromAminoMsg(object: _146.ParamsAminoMsg): _146.Params;
                toAminoMsg(message: _146.Params): _146.ParamsAminoMsg;
                fromProtoMsg(message: _146.ParamsProtoMsg): _146.Params;
                toProto(message: _146.Params): Uint8Array;
                toProtoMsg(message: _146.Params): _146.ParamsProtoMsg;
            };
            DelegationResponse: {
                typeUrl: string;
                encode(message: _146.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.DelegationResponse;
                fromJSON(object: any): _146.DelegationResponse;
                toJSON(message: _146.DelegationResponse): unknown;
                fromPartial(object: Partial<_146.DelegationResponse>): _146.DelegationResponse;
                fromAmino(object: _146.DelegationResponseAmino): _146.DelegationResponse;
                toAmino(message: _146.DelegationResponse): _146.DelegationResponseAmino;
                fromAminoMsg(object: _146.DelegationResponseAminoMsg): _146.DelegationResponse;
                toAminoMsg(message: _146.DelegationResponse): _146.DelegationResponseAminoMsg;
                fromProtoMsg(message: _146.DelegationResponseProtoMsg): _146.DelegationResponse;
                toProto(message: _146.DelegationResponse): Uint8Array;
                toProtoMsg(message: _146.DelegationResponse): _146.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                typeUrl: string;
                encode(message: _146.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.RedelegationEntryResponse;
                fromJSON(object: any): _146.RedelegationEntryResponse;
                toJSON(message: _146.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_146.RedelegationEntryResponse>): _146.RedelegationEntryResponse;
                fromAmino(object: _146.RedelegationEntryResponseAmino): _146.RedelegationEntryResponse;
                toAmino(message: _146.RedelegationEntryResponse): _146.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _146.RedelegationEntryResponseAminoMsg): _146.RedelegationEntryResponse;
                toAminoMsg(message: _146.RedelegationEntryResponse): _146.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _146.RedelegationEntryResponseProtoMsg): _146.RedelegationEntryResponse;
                toProto(message: _146.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _146.RedelegationEntryResponse): _146.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                typeUrl: string;
                encode(message: _146.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.RedelegationResponse;
                fromJSON(object: any): _146.RedelegationResponse;
                toJSON(message: _146.RedelegationResponse): unknown;
                fromPartial(object: Partial<_146.RedelegationResponse>): _146.RedelegationResponse;
                fromAmino(object: _146.RedelegationResponseAmino): _146.RedelegationResponse;
                toAmino(message: _146.RedelegationResponse): _146.RedelegationResponseAmino;
                fromAminoMsg(object: _146.RedelegationResponseAminoMsg): _146.RedelegationResponse;
                toAminoMsg(message: _146.RedelegationResponse): _146.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _146.RedelegationResponseProtoMsg): _146.RedelegationResponse;
                toProto(message: _146.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _146.RedelegationResponse): _146.RedelegationResponseProtoMsg;
            };
            Pool: {
                typeUrl: string;
                encode(message: _146.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.Pool;
                fromJSON(object: any): _146.Pool;
                toJSON(message: _146.Pool): unknown;
                fromPartial(object: Partial<_146.Pool>): _146.Pool;
                fromAmino(object: _146.PoolAmino): _146.Pool;
                toAmino(message: _146.Pool): _146.PoolAmino;
                fromAminoMsg(object: _146.PoolAminoMsg): _146.Pool;
                toAminoMsg(message: _146.Pool): _146.PoolAminoMsg;
                fromProtoMsg(message: _146.PoolProtoMsg): _146.Pool;
                toProto(message: _146.Pool): Uint8Array;
                toProtoMsg(message: _146.Pool): _146.PoolProtoMsg;
            };
            ValidatorUpdates: {
                typeUrl: string;
                encode(message: _146.ValidatorUpdates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.ValidatorUpdates;
                fromJSON(object: any): _146.ValidatorUpdates;
                toJSON(message: _146.ValidatorUpdates): unknown;
                fromPartial(object: Partial<_146.ValidatorUpdates>): _146.ValidatorUpdates;
                fromAmino(object: _146.ValidatorUpdatesAmino): _146.ValidatorUpdates;
                toAmino(message: _146.ValidatorUpdates): _146.ValidatorUpdatesAmino;
                fromAminoMsg(object: _146.ValidatorUpdatesAminoMsg): _146.ValidatorUpdates;
                toAminoMsg(message: _146.ValidatorUpdates): _146.ValidatorUpdatesAminoMsg;
                fromProtoMsg(message: _146.ValidatorUpdatesProtoMsg): _146.ValidatorUpdates;
                toProto(message: _146.ValidatorUpdates): Uint8Array;
                toProtoMsg(message: _146.ValidatorUpdates): _146.ValidatorUpdatesProtoMsg;
            };
            QueryValidatorsRequest: {
                typeUrl: string;
                encode(message: _145.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryValidatorsRequest;
                fromJSON(object: any): _145.QueryValidatorsRequest;
                toJSON(message: _145.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_145.QueryValidatorsRequest>): _145.QueryValidatorsRequest;
                fromAmino(object: _145.QueryValidatorsRequestAmino): _145.QueryValidatorsRequest;
                toAmino(message: _145.QueryValidatorsRequest): _145.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _145.QueryValidatorsRequestAminoMsg): _145.QueryValidatorsRequest;
                toAminoMsg(message: _145.QueryValidatorsRequest): _145.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryValidatorsRequestProtoMsg): _145.QueryValidatorsRequest;
                toProto(message: _145.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryValidatorsRequest): _145.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                typeUrl: string;
                encode(message: _145.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryValidatorsResponse;
                fromJSON(object: any): _145.QueryValidatorsResponse;
                toJSON(message: _145.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_145.QueryValidatorsResponse>): _145.QueryValidatorsResponse;
                fromAmino(object: _145.QueryValidatorsResponseAmino): _145.QueryValidatorsResponse;
                toAmino(message: _145.QueryValidatorsResponse): _145.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _145.QueryValidatorsResponseAminoMsg): _145.QueryValidatorsResponse;
                toAminoMsg(message: _145.QueryValidatorsResponse): _145.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryValidatorsResponseProtoMsg): _145.QueryValidatorsResponse;
                toProto(message: _145.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryValidatorsResponse): _145.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                typeUrl: string;
                encode(message: _145.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryValidatorRequest;
                fromJSON(object: any): _145.QueryValidatorRequest;
                toJSON(message: _145.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_145.QueryValidatorRequest>): _145.QueryValidatorRequest;
                fromAmino(object: _145.QueryValidatorRequestAmino): _145.QueryValidatorRequest;
                toAmino(message: _145.QueryValidatorRequest): _145.QueryValidatorRequestAmino;
                fromAminoMsg(object: _145.QueryValidatorRequestAminoMsg): _145.QueryValidatorRequest;
                toAminoMsg(message: _145.QueryValidatorRequest): _145.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _145.QueryValidatorRequestProtoMsg): _145.QueryValidatorRequest;
                toProto(message: _145.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _145.QueryValidatorRequest): _145.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                typeUrl: string;
                encode(message: _145.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryValidatorResponse;
                fromJSON(object: any): _145.QueryValidatorResponse;
                toJSON(message: _145.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_145.QueryValidatorResponse>): _145.QueryValidatorResponse;
                fromAmino(object: _145.QueryValidatorResponseAmino): _145.QueryValidatorResponse;
                toAmino(message: _145.QueryValidatorResponse): _145.QueryValidatorResponseAmino;
                fromAminoMsg(object: _145.QueryValidatorResponseAminoMsg): _145.QueryValidatorResponse;
                toAminoMsg(message: _145.QueryValidatorResponse): _145.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _145.QueryValidatorResponseProtoMsg): _145.QueryValidatorResponse;
                toProto(message: _145.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _145.QueryValidatorResponse): _145.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _145.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _145.QueryValidatorDelegationsRequest;
                toJSON(message: _145.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_145.QueryValidatorDelegationsRequest>): _145.QueryValidatorDelegationsRequest;
                fromAmino(object: _145.QueryValidatorDelegationsRequestAmino): _145.QueryValidatorDelegationsRequest;
                toAmino(message: _145.QueryValidatorDelegationsRequest): _145.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _145.QueryValidatorDelegationsRequestAminoMsg): _145.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _145.QueryValidatorDelegationsRequest): _145.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryValidatorDelegationsRequestProtoMsg): _145.QueryValidatorDelegationsRequest;
                toProto(message: _145.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryValidatorDelegationsRequest): _145.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _145.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _145.QueryValidatorDelegationsResponse;
                toJSON(message: _145.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_145.QueryValidatorDelegationsResponse>): _145.QueryValidatorDelegationsResponse;
                fromAmino(object: _145.QueryValidatorDelegationsResponseAmino): _145.QueryValidatorDelegationsResponse;
                toAmino(message: _145.QueryValidatorDelegationsResponse): _145.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _145.QueryValidatorDelegationsResponseAminoMsg): _145.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _145.QueryValidatorDelegationsResponse): _145.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryValidatorDelegationsResponseProtoMsg): _145.QueryValidatorDelegationsResponse;
                toProto(message: _145.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryValidatorDelegationsResponse): _145.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _145.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _145.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _145.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_145.QueryValidatorUnbondingDelegationsRequest>): _145.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _145.QueryValidatorUnbondingDelegationsRequestAmino): _145.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _145.QueryValidatorUnbondingDelegationsRequest): _145.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _145.QueryValidatorUnbondingDelegationsRequestAminoMsg): _145.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _145.QueryValidatorUnbondingDelegationsRequest): _145.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryValidatorUnbondingDelegationsRequestProtoMsg): _145.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _145.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryValidatorUnbondingDelegationsRequest): _145.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _145.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _145.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _145.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_145.QueryValidatorUnbondingDelegationsResponse>): _145.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _145.QueryValidatorUnbondingDelegationsResponseAmino): _145.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _145.QueryValidatorUnbondingDelegationsResponse): _145.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _145.QueryValidatorUnbondingDelegationsResponseAminoMsg): _145.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _145.QueryValidatorUnbondingDelegationsResponse): _145.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryValidatorUnbondingDelegationsResponseProtoMsg): _145.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _145.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryValidatorUnbondingDelegationsResponse): _145.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                typeUrl: string;
                encode(message: _145.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegationRequest;
                fromJSON(object: any): _145.QueryDelegationRequest;
                toJSON(message: _145.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_145.QueryDelegationRequest>): _145.QueryDelegationRequest;
                fromAmino(object: _145.QueryDelegationRequestAmino): _145.QueryDelegationRequest;
                toAmino(message: _145.QueryDelegationRequest): _145.QueryDelegationRequestAmino;
                fromAminoMsg(object: _145.QueryDelegationRequestAminoMsg): _145.QueryDelegationRequest;
                toAminoMsg(message: _145.QueryDelegationRequest): _145.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _145.QueryDelegationRequestProtoMsg): _145.QueryDelegationRequest;
                toProto(message: _145.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _145.QueryDelegationRequest): _145.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                typeUrl: string;
                encode(message: _145.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegationResponse;
                fromJSON(object: any): _145.QueryDelegationResponse;
                toJSON(message: _145.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_145.QueryDelegationResponse>): _145.QueryDelegationResponse;
                fromAmino(object: _145.QueryDelegationResponseAmino): _145.QueryDelegationResponse;
                toAmino(message: _145.QueryDelegationResponse): _145.QueryDelegationResponseAmino;
                fromAminoMsg(object: _145.QueryDelegationResponseAminoMsg): _145.QueryDelegationResponse;
                toAminoMsg(message: _145.QueryDelegationResponse): _145.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _145.QueryDelegationResponseProtoMsg): _145.QueryDelegationResponse;
                toProto(message: _145.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _145.QueryDelegationResponse): _145.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                typeUrl: string;
                encode(message: _145.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _145.QueryUnbondingDelegationRequest;
                toJSON(message: _145.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_145.QueryUnbondingDelegationRequest>): _145.QueryUnbondingDelegationRequest;
                fromAmino(object: _145.QueryUnbondingDelegationRequestAmino): _145.QueryUnbondingDelegationRequest;
                toAmino(message: _145.QueryUnbondingDelegationRequest): _145.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _145.QueryUnbondingDelegationRequestAminoMsg): _145.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _145.QueryUnbondingDelegationRequest): _145.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _145.QueryUnbondingDelegationRequestProtoMsg): _145.QueryUnbondingDelegationRequest;
                toProto(message: _145.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _145.QueryUnbondingDelegationRequest): _145.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                typeUrl: string;
                encode(message: _145.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _145.QueryUnbondingDelegationResponse;
                toJSON(message: _145.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_145.QueryUnbondingDelegationResponse>): _145.QueryUnbondingDelegationResponse;
                fromAmino(object: _145.QueryUnbondingDelegationResponseAmino): _145.QueryUnbondingDelegationResponse;
                toAmino(message: _145.QueryUnbondingDelegationResponse): _145.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _145.QueryUnbondingDelegationResponseAminoMsg): _145.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _145.QueryUnbondingDelegationResponse): _145.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _145.QueryUnbondingDelegationResponseProtoMsg): _145.QueryUnbondingDelegationResponse;
                toProto(message: _145.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _145.QueryUnbondingDelegationResponse): _145.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                typeUrl: string;
                encode(message: _145.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _145.QueryDelegatorDelegationsRequest;
                toJSON(message: _145.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_145.QueryDelegatorDelegationsRequest>): _145.QueryDelegatorDelegationsRequest;
                fromAmino(object: _145.QueryDelegatorDelegationsRequestAmino): _145.QueryDelegatorDelegationsRequest;
                toAmino(message: _145.QueryDelegatorDelegationsRequest): _145.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _145.QueryDelegatorDelegationsRequestAminoMsg): _145.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _145.QueryDelegatorDelegationsRequest): _145.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryDelegatorDelegationsRequestProtoMsg): _145.QueryDelegatorDelegationsRequest;
                toProto(message: _145.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryDelegatorDelegationsRequest): _145.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                typeUrl: string;
                encode(message: _145.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _145.QueryDelegatorDelegationsResponse;
                toJSON(message: _145.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_145.QueryDelegatorDelegationsResponse>): _145.QueryDelegatorDelegationsResponse;
                fromAmino(object: _145.QueryDelegatorDelegationsResponseAmino): _145.QueryDelegatorDelegationsResponse;
                toAmino(message: _145.QueryDelegatorDelegationsResponse): _145.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _145.QueryDelegatorDelegationsResponseAminoMsg): _145.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _145.QueryDelegatorDelegationsResponse): _145.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryDelegatorDelegationsResponseProtoMsg): _145.QueryDelegatorDelegationsResponse;
                toProto(message: _145.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryDelegatorDelegationsResponse): _145.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                typeUrl: string;
                encode(message: _145.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _145.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _145.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_145.QueryDelegatorUnbondingDelegationsRequest>): _145.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _145.QueryDelegatorUnbondingDelegationsRequestAmino): _145.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _145.QueryDelegatorUnbondingDelegationsRequest): _145.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _145.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _145.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _145.QueryDelegatorUnbondingDelegationsRequest): _145.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _145.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _145.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryDelegatorUnbondingDelegationsRequest): _145.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                typeUrl: string;
                encode(message: _145.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _145.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _145.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_145.QueryDelegatorUnbondingDelegationsResponse>): _145.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _145.QueryDelegatorUnbondingDelegationsResponseAmino): _145.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _145.QueryDelegatorUnbondingDelegationsResponse): _145.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _145.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _145.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _145.QueryDelegatorUnbondingDelegationsResponse): _145.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _145.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _145.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryDelegatorUnbondingDelegationsResponse): _145.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                typeUrl: string;
                encode(message: _145.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryRedelegationsRequest;
                fromJSON(object: any): _145.QueryRedelegationsRequest;
                toJSON(message: _145.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_145.QueryRedelegationsRequest>): _145.QueryRedelegationsRequest;
                fromAmino(object: _145.QueryRedelegationsRequestAmino): _145.QueryRedelegationsRequest;
                toAmino(message: _145.QueryRedelegationsRequest): _145.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _145.QueryRedelegationsRequestAminoMsg): _145.QueryRedelegationsRequest;
                toAminoMsg(message: _145.QueryRedelegationsRequest): _145.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryRedelegationsRequestProtoMsg): _145.QueryRedelegationsRequest;
                toProto(message: _145.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryRedelegationsRequest): _145.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                typeUrl: string;
                encode(message: _145.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryRedelegationsResponse;
                fromJSON(object: any): _145.QueryRedelegationsResponse;
                toJSON(message: _145.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_145.QueryRedelegationsResponse>): _145.QueryRedelegationsResponse;
                fromAmino(object: _145.QueryRedelegationsResponseAmino): _145.QueryRedelegationsResponse;
                toAmino(message: _145.QueryRedelegationsResponse): _145.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _145.QueryRedelegationsResponseAminoMsg): _145.QueryRedelegationsResponse;
                toAminoMsg(message: _145.QueryRedelegationsResponse): _145.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryRedelegationsResponseProtoMsg): _145.QueryRedelegationsResponse;
                toProto(message: _145.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryRedelegationsResponse): _145.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                typeUrl: string;
                encode(message: _145.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _145.QueryDelegatorValidatorsRequest;
                toJSON(message: _145.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_145.QueryDelegatorValidatorsRequest>): _145.QueryDelegatorValidatorsRequest;
                fromAmino(object: _145.QueryDelegatorValidatorsRequestAmino): _145.QueryDelegatorValidatorsRequest;
                toAmino(message: _145.QueryDelegatorValidatorsRequest): _145.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _145.QueryDelegatorValidatorsRequestAminoMsg): _145.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _145.QueryDelegatorValidatorsRequest): _145.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryDelegatorValidatorsRequestProtoMsg): _145.QueryDelegatorValidatorsRequest;
                toProto(message: _145.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryDelegatorValidatorsRequest): _145.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                typeUrl: string;
                encode(message: _145.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _145.QueryDelegatorValidatorsResponse;
                toJSON(message: _145.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_145.QueryDelegatorValidatorsResponse>): _145.QueryDelegatorValidatorsResponse;
                fromAmino(object: _145.QueryDelegatorValidatorsResponseAmino): _145.QueryDelegatorValidatorsResponse;
                toAmino(message: _145.QueryDelegatorValidatorsResponse): _145.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _145.QueryDelegatorValidatorsResponseAminoMsg): _145.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _145.QueryDelegatorValidatorsResponse): _145.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryDelegatorValidatorsResponseProtoMsg): _145.QueryDelegatorValidatorsResponse;
                toProto(message: _145.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryDelegatorValidatorsResponse): _145.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                typeUrl: string;
                encode(message: _145.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _145.QueryDelegatorValidatorRequest;
                toJSON(message: _145.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_145.QueryDelegatorValidatorRequest>): _145.QueryDelegatorValidatorRequest;
                fromAmino(object: _145.QueryDelegatorValidatorRequestAmino): _145.QueryDelegatorValidatorRequest;
                toAmino(message: _145.QueryDelegatorValidatorRequest): _145.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _145.QueryDelegatorValidatorRequestAminoMsg): _145.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _145.QueryDelegatorValidatorRequest): _145.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _145.QueryDelegatorValidatorRequestProtoMsg): _145.QueryDelegatorValidatorRequest;
                toProto(message: _145.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _145.QueryDelegatorValidatorRequest): _145.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                typeUrl: string;
                encode(message: _145.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _145.QueryDelegatorValidatorResponse;
                toJSON(message: _145.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_145.QueryDelegatorValidatorResponse>): _145.QueryDelegatorValidatorResponse;
                fromAmino(object: _145.QueryDelegatorValidatorResponseAmino): _145.QueryDelegatorValidatorResponse;
                toAmino(message: _145.QueryDelegatorValidatorResponse): _145.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _145.QueryDelegatorValidatorResponseAminoMsg): _145.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _145.QueryDelegatorValidatorResponse): _145.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _145.QueryDelegatorValidatorResponseProtoMsg): _145.QueryDelegatorValidatorResponse;
                toProto(message: _145.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _145.QueryDelegatorValidatorResponse): _145.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                typeUrl: string;
                encode(message: _145.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryHistoricalInfoRequest;
                fromJSON(object: any): _145.QueryHistoricalInfoRequest;
                toJSON(message: _145.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_145.QueryHistoricalInfoRequest>): _145.QueryHistoricalInfoRequest;
                fromAmino(object: _145.QueryHistoricalInfoRequestAmino): _145.QueryHistoricalInfoRequest;
                toAmino(message: _145.QueryHistoricalInfoRequest): _145.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _145.QueryHistoricalInfoRequestAminoMsg): _145.QueryHistoricalInfoRequest;
                toAminoMsg(message: _145.QueryHistoricalInfoRequest): _145.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _145.QueryHistoricalInfoRequestProtoMsg): _145.QueryHistoricalInfoRequest;
                toProto(message: _145.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _145.QueryHistoricalInfoRequest): _145.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                typeUrl: string;
                encode(message: _145.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryHistoricalInfoResponse;
                fromJSON(object: any): _145.QueryHistoricalInfoResponse;
                toJSON(message: _145.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_145.QueryHistoricalInfoResponse>): _145.QueryHistoricalInfoResponse;
                fromAmino(object: _145.QueryHistoricalInfoResponseAmino): _145.QueryHistoricalInfoResponse;
                toAmino(message: _145.QueryHistoricalInfoResponse): _145.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _145.QueryHistoricalInfoResponseAminoMsg): _145.QueryHistoricalInfoResponse;
                toAminoMsg(message: _145.QueryHistoricalInfoResponse): _145.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _145.QueryHistoricalInfoResponseProtoMsg): _145.QueryHistoricalInfoResponse;
                toProto(message: _145.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _145.QueryHistoricalInfoResponse): _145.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                typeUrl: string;
                encode(_: _145.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryPoolRequest;
                fromJSON(_: any): _145.QueryPoolRequest;
                toJSON(_: _145.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_145.QueryPoolRequest>): _145.QueryPoolRequest;
                fromAmino(_: _145.QueryPoolRequestAmino): _145.QueryPoolRequest;
                toAmino(_: _145.QueryPoolRequest): _145.QueryPoolRequestAmino;
                fromAminoMsg(object: _145.QueryPoolRequestAminoMsg): _145.QueryPoolRequest;
                toAminoMsg(message: _145.QueryPoolRequest): _145.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _145.QueryPoolRequestProtoMsg): _145.QueryPoolRequest;
                toProto(message: _145.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _145.QueryPoolRequest): _145.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                typeUrl: string;
                encode(message: _145.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryPoolResponse;
                fromJSON(object: any): _145.QueryPoolResponse;
                toJSON(message: _145.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_145.QueryPoolResponse>): _145.QueryPoolResponse;
                fromAmino(object: _145.QueryPoolResponseAmino): _145.QueryPoolResponse;
                toAmino(message: _145.QueryPoolResponse): _145.QueryPoolResponseAmino;
                fromAminoMsg(object: _145.QueryPoolResponseAminoMsg): _145.QueryPoolResponse;
                toAminoMsg(message: _145.QueryPoolResponse): _145.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _145.QueryPoolResponseProtoMsg): _145.QueryPoolResponse;
                toProto(message: _145.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _145.QueryPoolResponse): _145.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _145.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsRequest;
                fromJSON(_: any): _145.QueryParamsRequest;
                toJSON(_: _145.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_145.QueryParamsRequest>): _145.QueryParamsRequest;
                fromAmino(_: _145.QueryParamsRequestAmino): _145.QueryParamsRequest;
                toAmino(_: _145.QueryParamsRequest): _145.QueryParamsRequestAmino;
                fromAminoMsg(object: _145.QueryParamsRequestAminoMsg): _145.QueryParamsRequest;
                toAminoMsg(message: _145.QueryParamsRequest): _145.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _145.QueryParamsRequestProtoMsg): _145.QueryParamsRequest;
                toProto(message: _145.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _145.QueryParamsRequest): _145.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _145.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryParamsResponse;
                fromJSON(object: any): _145.QueryParamsResponse;
                toJSON(message: _145.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_145.QueryParamsResponse>): _145.QueryParamsResponse;
                fromAmino(object: _145.QueryParamsResponseAmino): _145.QueryParamsResponse;
                toAmino(message: _145.QueryParamsResponse): _145.QueryParamsResponseAmino;
                fromAminoMsg(object: _145.QueryParamsResponseAminoMsg): _145.QueryParamsResponse;
                toAminoMsg(message: _145.QueryParamsResponse): _145.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _145.QueryParamsResponseProtoMsg): _145.QueryParamsResponse;
                toProto(message: _145.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _145.QueryParamsResponse): _145.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _144.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.GenesisState;
                fromJSON(object: any): _144.GenesisState;
                toJSON(message: _144.GenesisState): unknown;
                fromPartial(object: Partial<_144.GenesisState>): _144.GenesisState;
                fromAmino(object: _144.GenesisStateAmino): _144.GenesisState;
                toAmino(message: _144.GenesisState): _144.GenesisStateAmino;
                fromAminoMsg(object: _144.GenesisStateAminoMsg): _144.GenesisState;
                toAminoMsg(message: _144.GenesisState): _144.GenesisStateAminoMsg;
                fromProtoMsg(message: _144.GenesisStateProtoMsg): _144.GenesisState;
                toProto(message: _144.GenesisState): Uint8Array;
                toProtoMsg(message: _144.GenesisState): _144.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                typeUrl: string;
                encode(message: _144.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.LastValidatorPower;
                fromJSON(object: any): _144.LastValidatorPower;
                toJSON(message: _144.LastValidatorPower): unknown;
                fromPartial(object: Partial<_144.LastValidatorPower>): _144.LastValidatorPower;
                fromAmino(object: _144.LastValidatorPowerAmino): _144.LastValidatorPower;
                toAmino(message: _144.LastValidatorPower): _144.LastValidatorPowerAmino;
                fromAminoMsg(object: _144.LastValidatorPowerAminoMsg): _144.LastValidatorPower;
                toAminoMsg(message: _144.LastValidatorPower): _144.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _144.LastValidatorPowerProtoMsg): _144.LastValidatorPower;
                toProto(message: _144.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _144.LastValidatorPower): _144.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _143.AuthorizationType;
            authorizationTypeToJSON(object: _143.AuthorizationType): string;
            AuthorizationType: typeof _143.AuthorizationType;
            AuthorizationTypeSDKType: typeof _143.AuthorizationType;
            AuthorizationTypeAmino: typeof _143.AuthorizationType;
            StakeAuthorization: {
                typeUrl: string;
                encode(message: _143.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.StakeAuthorization;
                fromJSON(object: any): _143.StakeAuthorization;
                toJSON(message: _143.StakeAuthorization): unknown;
                fromPartial(object: Partial<_143.StakeAuthorization>): _143.StakeAuthorization;
                fromAmino(object: _143.StakeAuthorizationAmino): _143.StakeAuthorization;
                toAmino(message: _143.StakeAuthorization): _143.StakeAuthorizationAmino;
                fromAminoMsg(object: _143.StakeAuthorizationAminoMsg): _143.StakeAuthorization;
                toAminoMsg(message: _143.StakeAuthorization): _143.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _143.StakeAuthorizationProtoMsg): _143.StakeAuthorization;
                toProto(message: _143.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _143.StakeAuthorization): _143.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                typeUrl: string;
                encode(message: _143.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.StakeAuthorization_Validators;
                fromJSON(object: any): _143.StakeAuthorization_Validators;
                toJSON(message: _143.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_143.StakeAuthorization_Validators>): _143.StakeAuthorization_Validators;
                fromAmino(object: _143.StakeAuthorization_ValidatorsAmino): _143.StakeAuthorization_Validators;
                toAmino(message: _143.StakeAuthorization_Validators): _143.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _143.StakeAuthorization_ValidatorsAminoMsg): _143.StakeAuthorization_Validators;
                toAminoMsg(message: _143.StakeAuthorization_Validators): _143.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _143.StakeAuthorization_ValidatorsProtoMsg): _143.StakeAuthorization_Validators;
                toProto(message: _143.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _143.StakeAuthorization_Validators): _143.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace config {
            const v1: {
                Config: {
                    typeUrl: string;
                    encode(message: _148.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Config;
                    fromJSON(object: any): _148.Config;
                    toJSON(message: _148.Config): unknown;
                    fromPartial(object: Partial<_148.Config>): _148.Config;
                    fromAmino(object: _148.ConfigAmino): _148.Config;
                    toAmino(message: _148.Config): _148.ConfigAmino;
                    fromAminoMsg(object: _148.ConfigAminoMsg): _148.Config;
                    toAminoMsg(message: _148.Config): _148.ConfigAminoMsg;
                    fromProtoMsg(message: _148.ConfigProtoMsg): _148.Config;
                    toProto(message: _148.Config): Uint8Array;
                    toProtoMsg(message: _148.Config): _148.ConfigProtoMsg;
                };
            };
        }
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _149.SignMode;
                signModeToJSON(object: _149.SignMode): string;
                SignMode: typeof _149.SignMode;
                SignModeSDKType: typeof _149.SignMode;
                SignModeAmino: typeof _149.SignMode;
                SignatureDescriptors: {
                    typeUrl: string;
                    encode(message: _149.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SignatureDescriptors;
                    fromJSON(object: any): _149.SignatureDescriptors;
                    toJSON(message: _149.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_149.SignatureDescriptors>): _149.SignatureDescriptors;
                    fromAmino(object: _149.SignatureDescriptorsAmino): _149.SignatureDescriptors;
                    toAmino(message: _149.SignatureDescriptors): _149.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _149.SignatureDescriptorsAminoMsg): _149.SignatureDescriptors;
                    toAminoMsg(message: _149.SignatureDescriptors): _149.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _149.SignatureDescriptorsProtoMsg): _149.SignatureDescriptors;
                    toProto(message: _149.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _149.SignatureDescriptors): _149.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    typeUrl: string;
                    encode(message: _149.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SignatureDescriptor;
                    fromJSON(object: any): _149.SignatureDescriptor;
                    toJSON(message: _149.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_149.SignatureDescriptor>): _149.SignatureDescriptor;
                    fromAmino(object: _149.SignatureDescriptorAmino): _149.SignatureDescriptor;
                    toAmino(message: _149.SignatureDescriptor): _149.SignatureDescriptorAmino;
                    fromAminoMsg(object: _149.SignatureDescriptorAminoMsg): _149.SignatureDescriptor;
                    toAminoMsg(message: _149.SignatureDescriptor): _149.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _149.SignatureDescriptorProtoMsg): _149.SignatureDescriptor;
                    toProto(message: _149.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _149.SignatureDescriptor): _149.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    typeUrl: string;
                    encode(message: _149.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SignatureDescriptor_Data;
                    fromJSON(object: any): _149.SignatureDescriptor_Data;
                    toJSON(message: _149.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_149.SignatureDescriptor_Data>): _149.SignatureDescriptor_Data;
                    fromAmino(object: _149.SignatureDescriptor_DataAmino): _149.SignatureDescriptor_Data;
                    toAmino(message: _149.SignatureDescriptor_Data): _149.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _149.SignatureDescriptor_DataAminoMsg): _149.SignatureDescriptor_Data;
                    toAminoMsg(message: _149.SignatureDescriptor_Data): _149.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _149.SignatureDescriptor_DataProtoMsg): _149.SignatureDescriptor_Data;
                    toProto(message: _149.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _149.SignatureDescriptor_Data): _149.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    typeUrl: string;
                    encode(message: _149.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _149.SignatureDescriptor_Data_Single;
                    toJSON(message: _149.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_149.SignatureDescriptor_Data_Single>): _149.SignatureDescriptor_Data_Single;
                    fromAmino(object: _149.SignatureDescriptor_Data_SingleAmino): _149.SignatureDescriptor_Data_Single;
                    toAmino(message: _149.SignatureDescriptor_Data_Single): _149.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _149.SignatureDescriptor_Data_SingleAminoMsg): _149.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _149.SignatureDescriptor_Data_Single): _149.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _149.SignatureDescriptor_Data_SingleProtoMsg): _149.SignatureDescriptor_Data_Single;
                    toProto(message: _149.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _149.SignatureDescriptor_Data_Single): _149.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    typeUrl: string;
                    encode(message: _149.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _149.SignatureDescriptor_Data_Multi;
                    toJSON(message: _149.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_149.SignatureDescriptor_Data_Multi>): _149.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _149.SignatureDescriptor_Data_MultiAmino): _149.SignatureDescriptor_Data_Multi;
                    toAmino(message: _149.SignatureDescriptor_Data_Multi): _149.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _149.SignatureDescriptor_Data_MultiAminoMsg): _149.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _149.SignatureDescriptor_Data_Multi): _149.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _149.SignatureDescriptor_Data_MultiProtoMsg): _149.SignatureDescriptor_Data_Multi;
                    toProto(message: _149.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _149.SignatureDescriptor_Data_Multi): _149.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _293.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _150.SimulateRequest): Promise<_150.SimulateResponse>;
                getTx(request: _150.GetTxRequest): Promise<_150.GetTxResponse>;
                broadcastTx(request: _150.BroadcastTxRequest): Promise<_150.BroadcastTxResponse>;
                getTxsEvent(request: _150.GetTxsEventRequest): Promise<_150.GetTxsEventResponse>;
                getBlockWithTxs(request: _150.GetBlockWithTxsRequest): Promise<_150.GetBlockWithTxsResponse>;
                txDecode(request: _150.TxDecodeRequest): Promise<_150.TxDecodeResponse>;
                txEncode(request: _150.TxEncodeRequest): Promise<_150.TxEncodeResponse>;
                txEncodeAmino(request: _150.TxEncodeAminoRequest): Promise<_150.TxEncodeAminoResponse>;
                txDecodeAmino(request: _150.TxDecodeAminoRequest): Promise<_150.TxDecodeAminoResponse>;
            };
            LCDQueryClient: typeof _271.LCDQueryClient;
            Tx: {
                typeUrl: string;
                encode(message: _151.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Tx;
                fromJSON(object: any): _151.Tx;
                toJSON(message: _151.Tx): unknown;
                fromPartial(object: Partial<_151.Tx>): _151.Tx;
                fromAmino(object: _151.TxAmino): _151.Tx;
                toAmino(message: _151.Tx): _151.TxAmino;
                fromAminoMsg(object: _151.TxAminoMsg): _151.Tx;
                toAminoMsg(message: _151.Tx): _151.TxAminoMsg;
                fromProtoMsg(message: _151.TxProtoMsg): _151.Tx;
                toProto(message: _151.Tx): Uint8Array;
                toProtoMsg(message: _151.Tx): _151.TxProtoMsg;
            };
            TxRaw: {
                typeUrl: string;
                encode(message: _151.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.TxRaw;
                fromJSON(object: any): _151.TxRaw;
                toJSON(message: _151.TxRaw): unknown;
                fromPartial(object: Partial<_151.TxRaw>): _151.TxRaw;
                fromAmino(object: _151.TxRawAmino): _151.TxRaw;
                toAmino(message: _151.TxRaw): _151.TxRawAmino;
                fromAminoMsg(object: _151.TxRawAminoMsg): _151.TxRaw;
                toAminoMsg(message: _151.TxRaw): _151.TxRawAminoMsg;
                fromProtoMsg(message: _151.TxRawProtoMsg): _151.TxRaw;
                toProto(message: _151.TxRaw): Uint8Array;
                toProtoMsg(message: _151.TxRaw): _151.TxRawProtoMsg;
            };
            SignDoc: {
                typeUrl: string;
                encode(message: _151.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SignDoc;
                fromJSON(object: any): _151.SignDoc;
                toJSON(message: _151.SignDoc): unknown;
                fromPartial(object: Partial<_151.SignDoc>): _151.SignDoc;
                fromAmino(object: _151.SignDocAmino): _151.SignDoc;
                toAmino(message: _151.SignDoc): _151.SignDocAmino;
                fromAminoMsg(object: _151.SignDocAminoMsg): _151.SignDoc;
                toAminoMsg(message: _151.SignDoc): _151.SignDocAminoMsg;
                fromProtoMsg(message: _151.SignDocProtoMsg): _151.SignDoc;
                toProto(message: _151.SignDoc): Uint8Array;
                toProtoMsg(message: _151.SignDoc): _151.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                typeUrl: string;
                encode(message: _151.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SignDocDirectAux;
                fromJSON(object: any): _151.SignDocDirectAux;
                toJSON(message: _151.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_151.SignDocDirectAux>): _151.SignDocDirectAux;
                fromAmino(object: _151.SignDocDirectAuxAmino): _151.SignDocDirectAux;
                toAmino(message: _151.SignDocDirectAux): _151.SignDocDirectAuxAmino;
                fromAminoMsg(object: _151.SignDocDirectAuxAminoMsg): _151.SignDocDirectAux;
                toAminoMsg(message: _151.SignDocDirectAux): _151.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _151.SignDocDirectAuxProtoMsg): _151.SignDocDirectAux;
                toProto(message: _151.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _151.SignDocDirectAux): _151.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                typeUrl: string;
                encode(message: _151.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.TxBody;
                fromJSON(object: any): _151.TxBody;
                toJSON(message: _151.TxBody): unknown;
                fromPartial(object: Partial<_151.TxBody>): _151.TxBody;
                fromAmino(object: _151.TxBodyAmino): _151.TxBody;
                toAmino(message: _151.TxBody): _151.TxBodyAmino;
                fromAminoMsg(object: _151.TxBodyAminoMsg): _151.TxBody;
                toAminoMsg(message: _151.TxBody): _151.TxBodyAminoMsg;
                fromProtoMsg(message: _151.TxBodyProtoMsg): _151.TxBody;
                toProto(message: _151.TxBody): Uint8Array;
                toProtoMsg(message: _151.TxBody): _151.TxBodyProtoMsg;
            };
            AuthInfo: {
                typeUrl: string;
                encode(message: _151.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AuthInfo;
                fromJSON(object: any): _151.AuthInfo;
                toJSON(message: _151.AuthInfo): unknown;
                fromPartial(object: Partial<_151.AuthInfo>): _151.AuthInfo;
                fromAmino(object: _151.AuthInfoAmino): _151.AuthInfo;
                toAmino(message: _151.AuthInfo): _151.AuthInfoAmino;
                fromAminoMsg(object: _151.AuthInfoAminoMsg): _151.AuthInfo;
                toAminoMsg(message: _151.AuthInfo): _151.AuthInfoAminoMsg;
                fromProtoMsg(message: _151.AuthInfoProtoMsg): _151.AuthInfo;
                toProto(message: _151.AuthInfo): Uint8Array;
                toProtoMsg(message: _151.AuthInfo): _151.AuthInfoProtoMsg;
            };
            SignerInfo: {
                typeUrl: string;
                encode(message: _151.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.SignerInfo;
                fromJSON(object: any): _151.SignerInfo;
                toJSON(message: _151.SignerInfo): unknown;
                fromPartial(object: Partial<_151.SignerInfo>): _151.SignerInfo;
                fromAmino(object: _151.SignerInfoAmino): _151.SignerInfo;
                toAmino(message: _151.SignerInfo): _151.SignerInfoAmino;
                fromAminoMsg(object: _151.SignerInfoAminoMsg): _151.SignerInfo;
                toAminoMsg(message: _151.SignerInfo): _151.SignerInfoAminoMsg;
                fromProtoMsg(message: _151.SignerInfoProtoMsg): _151.SignerInfo;
                toProto(message: _151.SignerInfo): Uint8Array;
                toProtoMsg(message: _151.SignerInfo): _151.SignerInfoProtoMsg;
            };
            ModeInfo: {
                typeUrl: string;
                encode(message: _151.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ModeInfo;
                fromJSON(object: any): _151.ModeInfo;
                toJSON(message: _151.ModeInfo): unknown;
                fromPartial(object: Partial<_151.ModeInfo>): _151.ModeInfo;
                fromAmino(object: _151.ModeInfoAmino): _151.ModeInfo;
                toAmino(message: _151.ModeInfo): _151.ModeInfoAmino;
                fromAminoMsg(object: _151.ModeInfoAminoMsg): _151.ModeInfo;
                toAminoMsg(message: _151.ModeInfo): _151.ModeInfoAminoMsg;
                fromProtoMsg(message: _151.ModeInfoProtoMsg): _151.ModeInfo;
                toProto(message: _151.ModeInfo): Uint8Array;
                toProtoMsg(message: _151.ModeInfo): _151.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                typeUrl: string;
                encode(message: _151.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ModeInfo_Single;
                fromJSON(object: any): _151.ModeInfo_Single;
                toJSON(message: _151.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_151.ModeInfo_Single>): _151.ModeInfo_Single;
                fromAmino(object: _151.ModeInfo_SingleAmino): _151.ModeInfo_Single;
                toAmino(message: _151.ModeInfo_Single): _151.ModeInfo_SingleAmino;
                fromAminoMsg(object: _151.ModeInfo_SingleAminoMsg): _151.ModeInfo_Single;
                toAminoMsg(message: _151.ModeInfo_Single): _151.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _151.ModeInfo_SingleProtoMsg): _151.ModeInfo_Single;
                toProto(message: _151.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _151.ModeInfo_Single): _151.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                typeUrl: string;
                encode(message: _151.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.ModeInfo_Multi;
                fromJSON(object: any): _151.ModeInfo_Multi;
                toJSON(message: _151.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_151.ModeInfo_Multi>): _151.ModeInfo_Multi;
                fromAmino(object: _151.ModeInfo_MultiAmino): _151.ModeInfo_Multi;
                toAmino(message: _151.ModeInfo_Multi): _151.ModeInfo_MultiAmino;
                fromAminoMsg(object: _151.ModeInfo_MultiAminoMsg): _151.ModeInfo_Multi;
                toAminoMsg(message: _151.ModeInfo_Multi): _151.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _151.ModeInfo_MultiProtoMsg): _151.ModeInfo_Multi;
                toProto(message: _151.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _151.ModeInfo_Multi): _151.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                typeUrl: string;
                encode(message: _151.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Fee;
                fromJSON(object: any): _151.Fee;
                toJSON(message: _151.Fee): unknown;
                fromPartial(object: Partial<_151.Fee>): _151.Fee;
                fromAmino(object: _151.FeeAmino): _151.Fee;
                toAmino(message: _151.Fee): _151.FeeAmino;
                fromAminoMsg(object: _151.FeeAminoMsg): _151.Fee;
                toAminoMsg(message: _151.Fee): _151.FeeAminoMsg;
                fromProtoMsg(message: _151.FeeProtoMsg): _151.Fee;
                toProto(message: _151.Fee): Uint8Array;
                toProtoMsg(message: _151.Fee): _151.FeeProtoMsg;
            };
            Tip: {
                typeUrl: string;
                encode(message: _151.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Tip;
                fromJSON(object: any): _151.Tip;
                toJSON(message: _151.Tip): unknown;
                fromPartial(object: Partial<_151.Tip>): _151.Tip;
                fromAmino(object: _151.TipAmino): _151.Tip;
                toAmino(message: _151.Tip): _151.TipAmino;
                fromAminoMsg(object: _151.TipAminoMsg): _151.Tip;
                toAminoMsg(message: _151.Tip): _151.TipAminoMsg;
                fromProtoMsg(message: _151.TipProtoMsg): _151.Tip;
                toProto(message: _151.Tip): Uint8Array;
                toProtoMsg(message: _151.Tip): _151.TipProtoMsg;
            };
            AuxSignerData: {
                typeUrl: string;
                encode(message: _151.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AuxSignerData;
                fromJSON(object: any): _151.AuxSignerData;
                toJSON(message: _151.AuxSignerData): unknown;
                fromPartial(object: Partial<_151.AuxSignerData>): _151.AuxSignerData;
                fromAmino(object: _151.AuxSignerDataAmino): _151.AuxSignerData;
                toAmino(message: _151.AuxSignerData): _151.AuxSignerDataAmino;
                fromAminoMsg(object: _151.AuxSignerDataAminoMsg): _151.AuxSignerData;
                toAminoMsg(message: _151.AuxSignerData): _151.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _151.AuxSignerDataProtoMsg): _151.AuxSignerData;
                toProto(message: _151.AuxSignerData): Uint8Array;
                toProtoMsg(message: _151.AuxSignerData): _151.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _150.OrderBy;
            orderByToJSON(object: _150.OrderBy): string;
            broadcastModeFromJSON(object: any): _150.BroadcastMode;
            broadcastModeToJSON(object: _150.BroadcastMode): string;
            OrderBy: typeof _150.OrderBy;
            OrderBySDKType: typeof _150.OrderBy;
            OrderByAmino: typeof _150.OrderBy;
            BroadcastMode: typeof _150.BroadcastMode;
            BroadcastModeSDKType: typeof _150.BroadcastMode;
            BroadcastModeAmino: typeof _150.BroadcastMode;
            GetTxsEventRequest: {
                typeUrl: string;
                encode(message: _150.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GetTxsEventRequest;
                fromJSON(object: any): _150.GetTxsEventRequest;
                toJSON(message: _150.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_150.GetTxsEventRequest>): _150.GetTxsEventRequest;
                fromAmino(object: _150.GetTxsEventRequestAmino): _150.GetTxsEventRequest;
                toAmino(message: _150.GetTxsEventRequest): _150.GetTxsEventRequestAmino;
                fromAminoMsg(object: _150.GetTxsEventRequestAminoMsg): _150.GetTxsEventRequest;
                toAminoMsg(message: _150.GetTxsEventRequest): _150.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _150.GetTxsEventRequestProtoMsg): _150.GetTxsEventRequest;
                toProto(message: _150.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _150.GetTxsEventRequest): _150.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                typeUrl: string;
                encode(message: _150.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GetTxsEventResponse;
                fromJSON(object: any): _150.GetTxsEventResponse;
                toJSON(message: _150.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_150.GetTxsEventResponse>): _150.GetTxsEventResponse;
                fromAmino(object: _150.GetTxsEventResponseAmino): _150.GetTxsEventResponse;
                toAmino(message: _150.GetTxsEventResponse): _150.GetTxsEventResponseAmino;
                fromAminoMsg(object: _150.GetTxsEventResponseAminoMsg): _150.GetTxsEventResponse;
                toAminoMsg(message: _150.GetTxsEventResponse): _150.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _150.GetTxsEventResponseProtoMsg): _150.GetTxsEventResponse;
                toProto(message: _150.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _150.GetTxsEventResponse): _150.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                typeUrl: string;
                encode(message: _150.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.BroadcastTxRequest;
                fromJSON(object: any): _150.BroadcastTxRequest;
                toJSON(message: _150.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_150.BroadcastTxRequest>): _150.BroadcastTxRequest;
                fromAmino(object: _150.BroadcastTxRequestAmino): _150.BroadcastTxRequest;
                toAmino(message: _150.BroadcastTxRequest): _150.BroadcastTxRequestAmino;
                fromAminoMsg(object: _150.BroadcastTxRequestAminoMsg): _150.BroadcastTxRequest;
                toAminoMsg(message: _150.BroadcastTxRequest): _150.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _150.BroadcastTxRequestProtoMsg): _150.BroadcastTxRequest;
                toProto(message: _150.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _150.BroadcastTxRequest): _150.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                typeUrl: string;
                encode(message: _150.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.BroadcastTxResponse;
                fromJSON(object: any): _150.BroadcastTxResponse;
                toJSON(message: _150.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_150.BroadcastTxResponse>): _150.BroadcastTxResponse;
                fromAmino(object: _150.BroadcastTxResponseAmino): _150.BroadcastTxResponse;
                toAmino(message: _150.BroadcastTxResponse): _150.BroadcastTxResponseAmino;
                fromAminoMsg(object: _150.BroadcastTxResponseAminoMsg): _150.BroadcastTxResponse;
                toAminoMsg(message: _150.BroadcastTxResponse): _150.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _150.BroadcastTxResponseProtoMsg): _150.BroadcastTxResponse;
                toProto(message: _150.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _150.BroadcastTxResponse): _150.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                typeUrl: string;
                encode(message: _150.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SimulateRequest;
                fromJSON(object: any): _150.SimulateRequest;
                toJSON(message: _150.SimulateRequest): unknown;
                fromPartial(object: Partial<_150.SimulateRequest>): _150.SimulateRequest;
                fromAmino(object: _150.SimulateRequestAmino): _150.SimulateRequest;
                toAmino(message: _150.SimulateRequest): _150.SimulateRequestAmino;
                fromAminoMsg(object: _150.SimulateRequestAminoMsg): _150.SimulateRequest;
                toAminoMsg(message: _150.SimulateRequest): _150.SimulateRequestAminoMsg;
                fromProtoMsg(message: _150.SimulateRequestProtoMsg): _150.SimulateRequest;
                toProto(message: _150.SimulateRequest): Uint8Array;
                toProtoMsg(message: _150.SimulateRequest): _150.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                typeUrl: string;
                encode(message: _150.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.SimulateResponse;
                fromJSON(object: any): _150.SimulateResponse;
                toJSON(message: _150.SimulateResponse): unknown;
                fromPartial(object: Partial<_150.SimulateResponse>): _150.SimulateResponse;
                fromAmino(object: _150.SimulateResponseAmino): _150.SimulateResponse;
                toAmino(message: _150.SimulateResponse): _150.SimulateResponseAmino;
                fromAminoMsg(object: _150.SimulateResponseAminoMsg): _150.SimulateResponse;
                toAminoMsg(message: _150.SimulateResponse): _150.SimulateResponseAminoMsg;
                fromProtoMsg(message: _150.SimulateResponseProtoMsg): _150.SimulateResponse;
                toProto(message: _150.SimulateResponse): Uint8Array;
                toProtoMsg(message: _150.SimulateResponse): _150.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                typeUrl: string;
                encode(message: _150.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GetTxRequest;
                fromJSON(object: any): _150.GetTxRequest;
                toJSON(message: _150.GetTxRequest): unknown;
                fromPartial(object: Partial<_150.GetTxRequest>): _150.GetTxRequest;
                fromAmino(object: _150.GetTxRequestAmino): _150.GetTxRequest;
                toAmino(message: _150.GetTxRequest): _150.GetTxRequestAmino;
                fromAminoMsg(object: _150.GetTxRequestAminoMsg): _150.GetTxRequest;
                toAminoMsg(message: _150.GetTxRequest): _150.GetTxRequestAminoMsg;
                fromProtoMsg(message: _150.GetTxRequestProtoMsg): _150.GetTxRequest;
                toProto(message: _150.GetTxRequest): Uint8Array;
                toProtoMsg(message: _150.GetTxRequest): _150.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                typeUrl: string;
                encode(message: _150.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GetTxResponse;
                fromJSON(object: any): _150.GetTxResponse;
                toJSON(message: _150.GetTxResponse): unknown;
                fromPartial(object: Partial<_150.GetTxResponse>): _150.GetTxResponse;
                fromAmino(object: _150.GetTxResponseAmino): _150.GetTxResponse;
                toAmino(message: _150.GetTxResponse): _150.GetTxResponseAmino;
                fromAminoMsg(object: _150.GetTxResponseAminoMsg): _150.GetTxResponse;
                toAminoMsg(message: _150.GetTxResponse): _150.GetTxResponseAminoMsg;
                fromProtoMsg(message: _150.GetTxResponseProtoMsg): _150.GetTxResponse;
                toProto(message: _150.GetTxResponse): Uint8Array;
                toProtoMsg(message: _150.GetTxResponse): _150.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                typeUrl: string;
                encode(message: _150.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GetBlockWithTxsRequest;
                fromJSON(object: any): _150.GetBlockWithTxsRequest;
                toJSON(message: _150.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_150.GetBlockWithTxsRequest>): _150.GetBlockWithTxsRequest;
                fromAmino(object: _150.GetBlockWithTxsRequestAmino): _150.GetBlockWithTxsRequest;
                toAmino(message: _150.GetBlockWithTxsRequest): _150.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _150.GetBlockWithTxsRequestAminoMsg): _150.GetBlockWithTxsRequest;
                toAminoMsg(message: _150.GetBlockWithTxsRequest): _150.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _150.GetBlockWithTxsRequestProtoMsg): _150.GetBlockWithTxsRequest;
                toProto(message: _150.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _150.GetBlockWithTxsRequest): _150.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                typeUrl: string;
                encode(message: _150.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.GetBlockWithTxsResponse;
                fromJSON(object: any): _150.GetBlockWithTxsResponse;
                toJSON(message: _150.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_150.GetBlockWithTxsResponse>): _150.GetBlockWithTxsResponse;
                fromAmino(object: _150.GetBlockWithTxsResponseAmino): _150.GetBlockWithTxsResponse;
                toAmino(message: _150.GetBlockWithTxsResponse): _150.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _150.GetBlockWithTxsResponseAminoMsg): _150.GetBlockWithTxsResponse;
                toAminoMsg(message: _150.GetBlockWithTxsResponse): _150.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _150.GetBlockWithTxsResponseProtoMsg): _150.GetBlockWithTxsResponse;
                toProto(message: _150.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _150.GetBlockWithTxsResponse): _150.GetBlockWithTxsResponseProtoMsg;
            };
            TxDecodeRequest: {
                typeUrl: string;
                encode(message: _150.TxDecodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxDecodeRequest;
                fromJSON(object: any): _150.TxDecodeRequest;
                toJSON(message: _150.TxDecodeRequest): unknown;
                fromPartial(object: Partial<_150.TxDecodeRequest>): _150.TxDecodeRequest;
                fromAmino(object: _150.TxDecodeRequestAmino): _150.TxDecodeRequest;
                toAmino(message: _150.TxDecodeRequest): _150.TxDecodeRequestAmino;
                fromAminoMsg(object: _150.TxDecodeRequestAminoMsg): _150.TxDecodeRequest;
                toAminoMsg(message: _150.TxDecodeRequest): _150.TxDecodeRequestAminoMsg;
                fromProtoMsg(message: _150.TxDecodeRequestProtoMsg): _150.TxDecodeRequest;
                toProto(message: _150.TxDecodeRequest): Uint8Array;
                toProtoMsg(message: _150.TxDecodeRequest): _150.TxDecodeRequestProtoMsg;
            };
            TxDecodeResponse: {
                typeUrl: string;
                encode(message: _150.TxDecodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxDecodeResponse;
                fromJSON(object: any): _150.TxDecodeResponse;
                toJSON(message: _150.TxDecodeResponse): unknown;
                fromPartial(object: Partial<_150.TxDecodeResponse>): _150.TxDecodeResponse;
                fromAmino(object: _150.TxDecodeResponseAmino): _150.TxDecodeResponse;
                toAmino(message: _150.TxDecodeResponse): _150.TxDecodeResponseAmino;
                fromAminoMsg(object: _150.TxDecodeResponseAminoMsg): _150.TxDecodeResponse;
                toAminoMsg(message: _150.TxDecodeResponse): _150.TxDecodeResponseAminoMsg;
                fromProtoMsg(message: _150.TxDecodeResponseProtoMsg): _150.TxDecodeResponse;
                toProto(message: _150.TxDecodeResponse): Uint8Array;
                toProtoMsg(message: _150.TxDecodeResponse): _150.TxDecodeResponseProtoMsg;
            };
            TxEncodeRequest: {
                typeUrl: string;
                encode(message: _150.TxEncodeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxEncodeRequest;
                fromJSON(object: any): _150.TxEncodeRequest;
                toJSON(message: _150.TxEncodeRequest): unknown;
                fromPartial(object: Partial<_150.TxEncodeRequest>): _150.TxEncodeRequest;
                fromAmino(object: _150.TxEncodeRequestAmino): _150.TxEncodeRequest;
                toAmino(message: _150.TxEncodeRequest): _150.TxEncodeRequestAmino;
                fromAminoMsg(object: _150.TxEncodeRequestAminoMsg): _150.TxEncodeRequest;
                toAminoMsg(message: _150.TxEncodeRequest): _150.TxEncodeRequestAminoMsg;
                fromProtoMsg(message: _150.TxEncodeRequestProtoMsg): _150.TxEncodeRequest;
                toProto(message: _150.TxEncodeRequest): Uint8Array;
                toProtoMsg(message: _150.TxEncodeRequest): _150.TxEncodeRequestProtoMsg;
            };
            TxEncodeResponse: {
                typeUrl: string;
                encode(message: _150.TxEncodeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxEncodeResponse;
                fromJSON(object: any): _150.TxEncodeResponse;
                toJSON(message: _150.TxEncodeResponse): unknown;
                fromPartial(object: Partial<_150.TxEncodeResponse>): _150.TxEncodeResponse;
                fromAmino(object: _150.TxEncodeResponseAmino): _150.TxEncodeResponse;
                toAmino(message: _150.TxEncodeResponse): _150.TxEncodeResponseAmino;
                fromAminoMsg(object: _150.TxEncodeResponseAminoMsg): _150.TxEncodeResponse;
                toAminoMsg(message: _150.TxEncodeResponse): _150.TxEncodeResponseAminoMsg;
                fromProtoMsg(message: _150.TxEncodeResponseProtoMsg): _150.TxEncodeResponse;
                toProto(message: _150.TxEncodeResponse): Uint8Array;
                toProtoMsg(message: _150.TxEncodeResponse): _150.TxEncodeResponseProtoMsg;
            };
            TxEncodeAminoRequest: {
                typeUrl: string;
                encode(message: _150.TxEncodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxEncodeAminoRequest;
                fromJSON(object: any): _150.TxEncodeAminoRequest;
                toJSON(message: _150.TxEncodeAminoRequest): unknown;
                fromPartial(object: Partial<_150.TxEncodeAminoRequest>): _150.TxEncodeAminoRequest;
                fromAmino(object: _150.TxEncodeAminoRequestAmino): _150.TxEncodeAminoRequest;
                toAmino(message: _150.TxEncodeAminoRequest): _150.TxEncodeAminoRequestAmino;
                fromAminoMsg(object: _150.TxEncodeAminoRequestAminoMsg): _150.TxEncodeAminoRequest;
                toAminoMsg(message: _150.TxEncodeAminoRequest): _150.TxEncodeAminoRequestAminoMsg;
                fromProtoMsg(message: _150.TxEncodeAminoRequestProtoMsg): _150.TxEncodeAminoRequest;
                toProto(message: _150.TxEncodeAminoRequest): Uint8Array;
                toProtoMsg(message: _150.TxEncodeAminoRequest): _150.TxEncodeAminoRequestProtoMsg;
            };
            TxEncodeAminoResponse: {
                typeUrl: string;
                encode(message: _150.TxEncodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxEncodeAminoResponse;
                fromJSON(object: any): _150.TxEncodeAminoResponse;
                toJSON(message: _150.TxEncodeAminoResponse): unknown;
                fromPartial(object: Partial<_150.TxEncodeAminoResponse>): _150.TxEncodeAminoResponse;
                fromAmino(object: _150.TxEncodeAminoResponseAmino): _150.TxEncodeAminoResponse;
                toAmino(message: _150.TxEncodeAminoResponse): _150.TxEncodeAminoResponseAmino;
                fromAminoMsg(object: _150.TxEncodeAminoResponseAminoMsg): _150.TxEncodeAminoResponse;
                toAminoMsg(message: _150.TxEncodeAminoResponse): _150.TxEncodeAminoResponseAminoMsg;
                fromProtoMsg(message: _150.TxEncodeAminoResponseProtoMsg): _150.TxEncodeAminoResponse;
                toProto(message: _150.TxEncodeAminoResponse): Uint8Array;
                toProtoMsg(message: _150.TxEncodeAminoResponse): _150.TxEncodeAminoResponseProtoMsg;
            };
            TxDecodeAminoRequest: {
                typeUrl: string;
                encode(message: _150.TxDecodeAminoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxDecodeAminoRequest;
                fromJSON(object: any): _150.TxDecodeAminoRequest;
                toJSON(message: _150.TxDecodeAminoRequest): unknown;
                fromPartial(object: Partial<_150.TxDecodeAminoRequest>): _150.TxDecodeAminoRequest;
                fromAmino(object: _150.TxDecodeAminoRequestAmino): _150.TxDecodeAminoRequest;
                toAmino(message: _150.TxDecodeAminoRequest): _150.TxDecodeAminoRequestAmino;
                fromAminoMsg(object: _150.TxDecodeAminoRequestAminoMsg): _150.TxDecodeAminoRequest;
                toAminoMsg(message: _150.TxDecodeAminoRequest): _150.TxDecodeAminoRequestAminoMsg;
                fromProtoMsg(message: _150.TxDecodeAminoRequestProtoMsg): _150.TxDecodeAminoRequest;
                toProto(message: _150.TxDecodeAminoRequest): Uint8Array;
                toProtoMsg(message: _150.TxDecodeAminoRequest): _150.TxDecodeAminoRequestProtoMsg;
            };
            TxDecodeAminoResponse: {
                typeUrl: string;
                encode(message: _150.TxDecodeAminoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TxDecodeAminoResponse;
                fromJSON(object: any): _150.TxDecodeAminoResponse;
                toJSON(message: _150.TxDecodeAminoResponse): unknown;
                fromPartial(object: Partial<_150.TxDecodeAminoResponse>): _150.TxDecodeAminoResponse;
                fromAmino(object: _150.TxDecodeAminoResponseAmino): _150.TxDecodeAminoResponse;
                toAmino(message: _150.TxDecodeAminoResponse): _150.TxDecodeAminoResponseAmino;
                fromAminoMsg(object: _150.TxDecodeAminoResponseAminoMsg): _150.TxDecodeAminoResponse;
                toAminoMsg(message: _150.TxDecodeAminoResponse): _150.TxDecodeAminoResponseAminoMsg;
                fromProtoMsg(message: _150.TxDecodeAminoResponseProtoMsg): _150.TxDecodeAminoResponse;
                toProto(message: _150.TxDecodeAminoResponse): Uint8Array;
                toProtoMsg(message: _150.TxDecodeAminoResponse): _150.TxDecodeAminoResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(message: _152.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Module;
                    fromJSON(object: any): _152.Module;
                    toJSON(message: _152.Module): unknown;
                    fromPartial(object: Partial<_152.Module>): _152.Module;
                    fromAmino(object: _152.ModuleAmino): _152.Module;
                    toAmino(message: _152.Module): _152.ModuleAmino;
                    fromAminoMsg(object: _152.ModuleAminoMsg): _152.Module;
                    toAminoMsg(message: _152.Module): _152.ModuleAminoMsg;
                    fromProtoMsg(message: _152.ModuleProtoMsg): _152.Module;
                    toProto(message: _152.Module): Uint8Array;
                    toProtoMsg(message: _152.Module): _152.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _310.MsgClientImpl;
            QueryClientImpl: typeof _294.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _153.QueryCurrentPlanRequest): Promise<_153.QueryCurrentPlanResponse>;
                appliedPlan(request: _153.QueryAppliedPlanRequest): Promise<_153.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _153.QueryUpgradedConsensusStateRequest): Promise<_153.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _153.QueryModuleVersionsRequest): Promise<_153.QueryModuleVersionsResponse>;
                authority(request?: _153.QueryAuthorityRequest): Promise<_153.QueryAuthorityResponse>;
            };
            LCDQueryClient: typeof _272.LCDQueryClient;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _154.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _154.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _154.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _154.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _154.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _154.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _154.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _154.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _154.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _154.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _154.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _154.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _154.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _154.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _154.MsgSoftwareUpgrade) => _154.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _154.MsgSoftwareUpgradeAmino) => _154.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _154.MsgCancelUpgrade) => _154.MsgCancelUpgradeAmino;
                    fromAmino: (object: _154.MsgCancelUpgradeAmino) => _154.MsgCancelUpgrade;
                };
            };
            Plan: {
                typeUrl: string;
                encode(message: _155.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Plan;
                fromJSON(object: any): _155.Plan;
                toJSON(message: _155.Plan): unknown;
                fromPartial(object: Partial<_155.Plan>): _155.Plan;
                fromAmino(object: _155.PlanAmino): _155.Plan;
                toAmino(message: _155.Plan): _155.PlanAmino;
                fromAminoMsg(object: _155.PlanAminoMsg): _155.Plan;
                toAminoMsg(message: _155.Plan): _155.PlanAminoMsg;
                fromProtoMsg(message: _155.PlanProtoMsg): _155.Plan;
                toProto(message: _155.Plan): Uint8Array;
                toProtoMsg(message: _155.Plan): _155.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _155.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.SoftwareUpgradeProposal;
                fromJSON(object: any): _155.SoftwareUpgradeProposal;
                toJSON(message: _155.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_155.SoftwareUpgradeProposal>): _155.SoftwareUpgradeProposal;
                fromAmino(object: _155.SoftwareUpgradeProposalAmino): _155.SoftwareUpgradeProposal;
                toAmino(message: _155.SoftwareUpgradeProposal): _155.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _155.SoftwareUpgradeProposalAminoMsg): _155.SoftwareUpgradeProposal;
                toAminoMsg(message: _155.SoftwareUpgradeProposal): _155.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _155.SoftwareUpgradeProposalProtoMsg): _155.SoftwareUpgradeProposal;
                toProto(message: _155.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _155.SoftwareUpgradeProposal): _155.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                typeUrl: string;
                encode(message: _155.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _155.CancelSoftwareUpgradeProposal;
                toJSON(message: _155.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_155.CancelSoftwareUpgradeProposal>): _155.CancelSoftwareUpgradeProposal;
                fromAmino(object: _155.CancelSoftwareUpgradeProposalAmino): _155.CancelSoftwareUpgradeProposal;
                toAmino(message: _155.CancelSoftwareUpgradeProposal): _155.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _155.CancelSoftwareUpgradeProposalAminoMsg): _155.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _155.CancelSoftwareUpgradeProposal): _155.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _155.CancelSoftwareUpgradeProposalProtoMsg): _155.CancelSoftwareUpgradeProposal;
                toProto(message: _155.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _155.CancelSoftwareUpgradeProposal): _155.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                typeUrl: string;
                encode(message: _155.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.ModuleVersion;
                fromJSON(object: any): _155.ModuleVersion;
                toJSON(message: _155.ModuleVersion): unknown;
                fromPartial(object: Partial<_155.ModuleVersion>): _155.ModuleVersion;
                fromAmino(object: _155.ModuleVersionAmino): _155.ModuleVersion;
                toAmino(message: _155.ModuleVersion): _155.ModuleVersionAmino;
                fromAminoMsg(object: _155.ModuleVersionAminoMsg): _155.ModuleVersion;
                toAminoMsg(message: _155.ModuleVersion): _155.ModuleVersionAminoMsg;
                fromProtoMsg(message: _155.ModuleVersionProtoMsg): _155.ModuleVersion;
                toProto(message: _155.ModuleVersion): Uint8Array;
                toProtoMsg(message: _155.ModuleVersion): _155.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                typeUrl: string;
                encode(message: _154.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSoftwareUpgrade;
                fromJSON(object: any): _154.MsgSoftwareUpgrade;
                toJSON(message: _154.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_154.MsgSoftwareUpgrade>): _154.MsgSoftwareUpgrade;
                fromAmino(object: _154.MsgSoftwareUpgradeAmino): _154.MsgSoftwareUpgrade;
                toAmino(message: _154.MsgSoftwareUpgrade): _154.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _154.MsgSoftwareUpgradeAminoMsg): _154.MsgSoftwareUpgrade;
                toAminoMsg(message: _154.MsgSoftwareUpgrade): _154.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _154.MsgSoftwareUpgradeProtoMsg): _154.MsgSoftwareUpgrade;
                toProto(message: _154.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _154.MsgSoftwareUpgrade): _154.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                typeUrl: string;
                encode(_: _154.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _154.MsgSoftwareUpgradeResponse;
                toJSON(_: _154.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_154.MsgSoftwareUpgradeResponse>): _154.MsgSoftwareUpgradeResponse;
                fromAmino(_: _154.MsgSoftwareUpgradeResponseAmino): _154.MsgSoftwareUpgradeResponse;
                toAmino(_: _154.MsgSoftwareUpgradeResponse): _154.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _154.MsgSoftwareUpgradeResponseAminoMsg): _154.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _154.MsgSoftwareUpgradeResponse): _154.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _154.MsgSoftwareUpgradeResponseProtoMsg): _154.MsgSoftwareUpgradeResponse;
                toProto(message: _154.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _154.MsgSoftwareUpgradeResponse): _154.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                typeUrl: string;
                encode(message: _154.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCancelUpgrade;
                fromJSON(object: any): _154.MsgCancelUpgrade;
                toJSON(message: _154.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_154.MsgCancelUpgrade>): _154.MsgCancelUpgrade;
                fromAmino(object: _154.MsgCancelUpgradeAmino): _154.MsgCancelUpgrade;
                toAmino(message: _154.MsgCancelUpgrade): _154.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _154.MsgCancelUpgradeAminoMsg): _154.MsgCancelUpgrade;
                toAminoMsg(message: _154.MsgCancelUpgrade): _154.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _154.MsgCancelUpgradeProtoMsg): _154.MsgCancelUpgrade;
                toProto(message: _154.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _154.MsgCancelUpgrade): _154.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                typeUrl: string;
                encode(_: _154.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.MsgCancelUpgradeResponse;
                fromJSON(_: any): _154.MsgCancelUpgradeResponse;
                toJSON(_: _154.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_154.MsgCancelUpgradeResponse>): _154.MsgCancelUpgradeResponse;
                fromAmino(_: _154.MsgCancelUpgradeResponseAmino): _154.MsgCancelUpgradeResponse;
                toAmino(_: _154.MsgCancelUpgradeResponse): _154.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _154.MsgCancelUpgradeResponseAminoMsg): _154.MsgCancelUpgradeResponse;
                toAminoMsg(message: _154.MsgCancelUpgradeResponse): _154.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _154.MsgCancelUpgradeResponseProtoMsg): _154.MsgCancelUpgradeResponse;
                toProto(message: _154.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _154.MsgCancelUpgradeResponse): _154.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                typeUrl: string;
                encode(_: _153.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryCurrentPlanRequest;
                fromJSON(_: any): _153.QueryCurrentPlanRequest;
                toJSON(_: _153.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_153.QueryCurrentPlanRequest>): _153.QueryCurrentPlanRequest;
                fromAmino(_: _153.QueryCurrentPlanRequestAmino): _153.QueryCurrentPlanRequest;
                toAmino(_: _153.QueryCurrentPlanRequest): _153.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _153.QueryCurrentPlanRequestAminoMsg): _153.QueryCurrentPlanRequest;
                toAminoMsg(message: _153.QueryCurrentPlanRequest): _153.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _153.QueryCurrentPlanRequestProtoMsg): _153.QueryCurrentPlanRequest;
                toProto(message: _153.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _153.QueryCurrentPlanRequest): _153.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                typeUrl: string;
                encode(message: _153.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryCurrentPlanResponse;
                fromJSON(object: any): _153.QueryCurrentPlanResponse;
                toJSON(message: _153.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_153.QueryCurrentPlanResponse>): _153.QueryCurrentPlanResponse;
                fromAmino(object: _153.QueryCurrentPlanResponseAmino): _153.QueryCurrentPlanResponse;
                toAmino(message: _153.QueryCurrentPlanResponse): _153.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _153.QueryCurrentPlanResponseAminoMsg): _153.QueryCurrentPlanResponse;
                toAminoMsg(message: _153.QueryCurrentPlanResponse): _153.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _153.QueryCurrentPlanResponseProtoMsg): _153.QueryCurrentPlanResponse;
                toProto(message: _153.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _153.QueryCurrentPlanResponse): _153.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                typeUrl: string;
                encode(message: _153.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryAppliedPlanRequest;
                fromJSON(object: any): _153.QueryAppliedPlanRequest;
                toJSON(message: _153.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_153.QueryAppliedPlanRequest>): _153.QueryAppliedPlanRequest;
                fromAmino(object: _153.QueryAppliedPlanRequestAmino): _153.QueryAppliedPlanRequest;
                toAmino(message: _153.QueryAppliedPlanRequest): _153.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _153.QueryAppliedPlanRequestAminoMsg): _153.QueryAppliedPlanRequest;
                toAminoMsg(message: _153.QueryAppliedPlanRequest): _153.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _153.QueryAppliedPlanRequestProtoMsg): _153.QueryAppliedPlanRequest;
                toProto(message: _153.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _153.QueryAppliedPlanRequest): _153.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                typeUrl: string;
                encode(message: _153.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryAppliedPlanResponse;
                fromJSON(object: any): _153.QueryAppliedPlanResponse;
                toJSON(message: _153.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_153.QueryAppliedPlanResponse>): _153.QueryAppliedPlanResponse;
                fromAmino(object: _153.QueryAppliedPlanResponseAmino): _153.QueryAppliedPlanResponse;
                toAmino(message: _153.QueryAppliedPlanResponse): _153.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _153.QueryAppliedPlanResponseAminoMsg): _153.QueryAppliedPlanResponse;
                toAminoMsg(message: _153.QueryAppliedPlanResponse): _153.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _153.QueryAppliedPlanResponseProtoMsg): _153.QueryAppliedPlanResponse;
                toProto(message: _153.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _153.QueryAppliedPlanResponse): _153.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                typeUrl: string;
                encode(message: _153.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _153.QueryUpgradedConsensusStateRequest;
                toJSON(message: _153.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_153.QueryUpgradedConsensusStateRequest>): _153.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _153.QueryUpgradedConsensusStateRequestAmino): _153.QueryUpgradedConsensusStateRequest;
                toAmino(message: _153.QueryUpgradedConsensusStateRequest): _153.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _153.QueryUpgradedConsensusStateRequestAminoMsg): _153.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _153.QueryUpgradedConsensusStateRequest): _153.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _153.QueryUpgradedConsensusStateRequestProtoMsg): _153.QueryUpgradedConsensusStateRequest;
                toProto(message: _153.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _153.QueryUpgradedConsensusStateRequest): _153.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                typeUrl: string;
                encode(message: _153.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _153.QueryUpgradedConsensusStateResponse;
                toJSON(message: _153.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_153.QueryUpgradedConsensusStateResponse>): _153.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _153.QueryUpgradedConsensusStateResponseAmino): _153.QueryUpgradedConsensusStateResponse;
                toAmino(message: _153.QueryUpgradedConsensusStateResponse): _153.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _153.QueryUpgradedConsensusStateResponseAminoMsg): _153.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _153.QueryUpgradedConsensusStateResponse): _153.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _153.QueryUpgradedConsensusStateResponseProtoMsg): _153.QueryUpgradedConsensusStateResponse;
                toProto(message: _153.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _153.QueryUpgradedConsensusStateResponse): _153.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                typeUrl: string;
                encode(message: _153.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryModuleVersionsRequest;
                fromJSON(object: any): _153.QueryModuleVersionsRequest;
                toJSON(message: _153.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_153.QueryModuleVersionsRequest>): _153.QueryModuleVersionsRequest;
                fromAmino(object: _153.QueryModuleVersionsRequestAmino): _153.QueryModuleVersionsRequest;
                toAmino(message: _153.QueryModuleVersionsRequest): _153.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _153.QueryModuleVersionsRequestAminoMsg): _153.QueryModuleVersionsRequest;
                toAminoMsg(message: _153.QueryModuleVersionsRequest): _153.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _153.QueryModuleVersionsRequestProtoMsg): _153.QueryModuleVersionsRequest;
                toProto(message: _153.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _153.QueryModuleVersionsRequest): _153.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                typeUrl: string;
                encode(message: _153.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryModuleVersionsResponse;
                fromJSON(object: any): _153.QueryModuleVersionsResponse;
                toJSON(message: _153.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_153.QueryModuleVersionsResponse>): _153.QueryModuleVersionsResponse;
                fromAmino(object: _153.QueryModuleVersionsResponseAmino): _153.QueryModuleVersionsResponse;
                toAmino(message: _153.QueryModuleVersionsResponse): _153.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _153.QueryModuleVersionsResponseAminoMsg): _153.QueryModuleVersionsResponse;
                toAminoMsg(message: _153.QueryModuleVersionsResponse): _153.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _153.QueryModuleVersionsResponseProtoMsg): _153.QueryModuleVersionsResponse;
                toProto(message: _153.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _153.QueryModuleVersionsResponse): _153.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                typeUrl: string;
                encode(_: _153.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryAuthorityRequest;
                fromJSON(_: any): _153.QueryAuthorityRequest;
                toJSON(_: _153.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_153.QueryAuthorityRequest>): _153.QueryAuthorityRequest;
                fromAmino(_: _153.QueryAuthorityRequestAmino): _153.QueryAuthorityRequest;
                toAmino(_: _153.QueryAuthorityRequest): _153.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _153.QueryAuthorityRequestAminoMsg): _153.QueryAuthorityRequest;
                toAminoMsg(message: _153.QueryAuthorityRequest): _153.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _153.QueryAuthorityRequestProtoMsg): _153.QueryAuthorityRequest;
                toProto(message: _153.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _153.QueryAuthorityRequest): _153.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                typeUrl: string;
                encode(message: _153.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.QueryAuthorityResponse;
                fromJSON(object: any): _153.QueryAuthorityResponse;
                toJSON(message: _153.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_153.QueryAuthorityResponse>): _153.QueryAuthorityResponse;
                fromAmino(object: _153.QueryAuthorityResponseAmino): _153.QueryAuthorityResponse;
                toAmino(message: _153.QueryAuthorityResponse): _153.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _153.QueryAuthorityResponseAminoMsg): _153.QueryAuthorityResponse;
                toAminoMsg(message: _153.QueryAuthorityResponse): _153.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _153.QueryAuthorityResponseProtoMsg): _153.QueryAuthorityResponse;
                toProto(message: _153.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _153.QueryAuthorityResponse): _153.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        namespace module {
            const v1: {
                Module: {
                    typeUrl: string;
                    encode(_: _156.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.Module;
                    fromJSON(_: any): _156.Module;
                    toJSON(_: _156.Module): unknown;
                    fromPartial(_: Partial<_156.Module>): _156.Module;
                    fromAmino(_: _156.ModuleAmino): _156.Module;
                    toAmino(_: _156.Module): _156.ModuleAmino;
                    fromAminoMsg(object: _156.ModuleAminoMsg): _156.Module;
                    toAminoMsg(message: _156.Module): _156.ModuleAminoMsg;
                    fromProtoMsg(message: _156.ModuleProtoMsg): _156.Module;
                    toProto(message: _156.Module): Uint8Array;
                    toProtoMsg(message: _156.Module): _156.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            MsgClientImpl: typeof _311.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _157.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _157.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _157.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _157.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _157.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _157.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _157.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _157.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _157.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _157.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _157.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _157.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _157.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _157.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _157.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _157.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _157.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _157.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _157.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _157.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _157.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _157.MsgCreateVestingAccount) => _157.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _157.MsgCreateVestingAccountAmino) => _157.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _157.MsgCreatePermanentLockedAccount) => _157.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _157.MsgCreatePermanentLockedAccountAmino) => _157.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _157.MsgCreatePeriodicVestingAccount) => _157.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _157.MsgCreatePeriodicVestingAccountAmino) => _157.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                typeUrl: string;
                encode(message: _158.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.BaseVestingAccount;
                fromJSON(object: any): _158.BaseVestingAccount;
                toJSON(message: _158.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_158.BaseVestingAccount>): _158.BaseVestingAccount;
                fromAmino(object: _158.BaseVestingAccountAmino): _158.BaseVestingAccount;
                toAmino(message: _158.BaseVestingAccount): _158.BaseVestingAccountAmino;
                fromAminoMsg(object: _158.BaseVestingAccountAminoMsg): _158.BaseVestingAccount;
                toAminoMsg(message: _158.BaseVestingAccount): _158.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _158.BaseVestingAccountProtoMsg): _158.BaseVestingAccount;
                toProto(message: _158.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _158.BaseVestingAccount): _158.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                typeUrl: string;
                encode(message: _158.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.ContinuousVestingAccount;
                fromJSON(object: any): _158.ContinuousVestingAccount;
                toJSON(message: _158.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_158.ContinuousVestingAccount>): _158.ContinuousVestingAccount;
                fromAmino(object: _158.ContinuousVestingAccountAmino): _158.ContinuousVestingAccount;
                toAmino(message: _158.ContinuousVestingAccount): _158.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _158.ContinuousVestingAccountAminoMsg): _158.ContinuousVestingAccount;
                toAminoMsg(message: _158.ContinuousVestingAccount): _158.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _158.ContinuousVestingAccountProtoMsg): _158.ContinuousVestingAccount;
                toProto(message: _158.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _158.ContinuousVestingAccount): _158.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                typeUrl: string;
                encode(message: _158.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.DelayedVestingAccount;
                fromJSON(object: any): _158.DelayedVestingAccount;
                toJSON(message: _158.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_158.DelayedVestingAccount>): _158.DelayedVestingAccount;
                fromAmino(object: _158.DelayedVestingAccountAmino): _158.DelayedVestingAccount;
                toAmino(message: _158.DelayedVestingAccount): _158.DelayedVestingAccountAmino;
                fromAminoMsg(object: _158.DelayedVestingAccountAminoMsg): _158.DelayedVestingAccount;
                toAminoMsg(message: _158.DelayedVestingAccount): _158.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _158.DelayedVestingAccountProtoMsg): _158.DelayedVestingAccount;
                toProto(message: _158.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _158.DelayedVestingAccount): _158.DelayedVestingAccountProtoMsg;
            };
            Period: {
                typeUrl: string;
                encode(message: _158.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.Period;
                fromJSON(object: any): _158.Period;
                toJSON(message: _158.Period): unknown;
                fromPartial(object: Partial<_158.Period>): _158.Period;
                fromAmino(object: _158.PeriodAmino): _158.Period;
                toAmino(message: _158.Period): _158.PeriodAmino;
                fromAminoMsg(object: _158.PeriodAminoMsg): _158.Period;
                toAminoMsg(message: _158.Period): _158.PeriodAminoMsg;
                fromProtoMsg(message: _158.PeriodProtoMsg): _158.Period;
                toProto(message: _158.Period): Uint8Array;
                toProtoMsg(message: _158.Period): _158.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _158.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.PeriodicVestingAccount;
                fromJSON(object: any): _158.PeriodicVestingAccount;
                toJSON(message: _158.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_158.PeriodicVestingAccount>): _158.PeriodicVestingAccount;
                fromAmino(object: _158.PeriodicVestingAccountAmino): _158.PeriodicVestingAccount;
                toAmino(message: _158.PeriodicVestingAccount): _158.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _158.PeriodicVestingAccountAminoMsg): _158.PeriodicVestingAccount;
                toAminoMsg(message: _158.PeriodicVestingAccount): _158.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _158.PeriodicVestingAccountProtoMsg): _158.PeriodicVestingAccount;
                toProto(message: _158.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _158.PeriodicVestingAccount): _158.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                typeUrl: string;
                encode(message: _158.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.PermanentLockedAccount;
                fromJSON(object: any): _158.PermanentLockedAccount;
                toJSON(message: _158.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_158.PermanentLockedAccount>): _158.PermanentLockedAccount;
                fromAmino(object: _158.PermanentLockedAccountAmino): _158.PermanentLockedAccount;
                toAmino(message: _158.PermanentLockedAccount): _158.PermanentLockedAccountAmino;
                fromAminoMsg(object: _158.PermanentLockedAccountAminoMsg): _158.PermanentLockedAccount;
                toAminoMsg(message: _158.PermanentLockedAccount): _158.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _158.PermanentLockedAccountProtoMsg): _158.PermanentLockedAccount;
                toProto(message: _158.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _158.PermanentLockedAccount): _158.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                typeUrl: string;
                encode(message: _157.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgCreateVestingAccount;
                fromJSON(object: any): _157.MsgCreateVestingAccount;
                toJSON(message: _157.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_157.MsgCreateVestingAccount>): _157.MsgCreateVestingAccount;
                fromAmino(object: _157.MsgCreateVestingAccountAmino): _157.MsgCreateVestingAccount;
                toAmino(message: _157.MsgCreateVestingAccount): _157.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _157.MsgCreateVestingAccountAminoMsg): _157.MsgCreateVestingAccount;
                toAminoMsg(message: _157.MsgCreateVestingAccount): _157.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _157.MsgCreateVestingAccountProtoMsg): _157.MsgCreateVestingAccount;
                toProto(message: _157.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _157.MsgCreateVestingAccount): _157.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                typeUrl: string;
                encode(_: _157.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _157.MsgCreateVestingAccountResponse;
                toJSON(_: _157.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_157.MsgCreateVestingAccountResponse>): _157.MsgCreateVestingAccountResponse;
                fromAmino(_: _157.MsgCreateVestingAccountResponseAmino): _157.MsgCreateVestingAccountResponse;
                toAmino(_: _157.MsgCreateVestingAccountResponse): _157.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _157.MsgCreateVestingAccountResponseAminoMsg): _157.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _157.MsgCreateVestingAccountResponse): _157.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _157.MsgCreateVestingAccountResponseProtoMsg): _157.MsgCreateVestingAccountResponse;
                toProto(message: _157.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _157.MsgCreateVestingAccountResponse): _157.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                typeUrl: string;
                encode(message: _157.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _157.MsgCreatePermanentLockedAccount;
                toJSON(message: _157.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_157.MsgCreatePermanentLockedAccount>): _157.MsgCreatePermanentLockedAccount;
                fromAmino(object: _157.MsgCreatePermanentLockedAccountAmino): _157.MsgCreatePermanentLockedAccount;
                toAmino(message: _157.MsgCreatePermanentLockedAccount): _157.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _157.MsgCreatePermanentLockedAccountAminoMsg): _157.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _157.MsgCreatePermanentLockedAccount): _157.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _157.MsgCreatePermanentLockedAccountProtoMsg): _157.MsgCreatePermanentLockedAccount;
                toProto(message: _157.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _157.MsgCreatePermanentLockedAccount): _157.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                typeUrl: string;
                encode(_: _157.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _157.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _157.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_157.MsgCreatePermanentLockedAccountResponse>): _157.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _157.MsgCreatePermanentLockedAccountResponseAmino): _157.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _157.MsgCreatePermanentLockedAccountResponse): _157.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _157.MsgCreatePermanentLockedAccountResponseAminoMsg): _157.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _157.MsgCreatePermanentLockedAccountResponse): _157.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _157.MsgCreatePermanentLockedAccountResponseProtoMsg): _157.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _157.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _157.MsgCreatePermanentLockedAccountResponse): _157.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                typeUrl: string;
                encode(message: _157.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _157.MsgCreatePeriodicVestingAccount;
                toJSON(message: _157.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_157.MsgCreatePeriodicVestingAccount>): _157.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _157.MsgCreatePeriodicVestingAccountAmino): _157.MsgCreatePeriodicVestingAccount;
                toAmino(message: _157.MsgCreatePeriodicVestingAccount): _157.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _157.MsgCreatePeriodicVestingAccountAminoMsg): _157.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _157.MsgCreatePeriodicVestingAccount): _157.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _157.MsgCreatePeriodicVestingAccountProtoMsg): _157.MsgCreatePeriodicVestingAccount;
                toProto(message: _157.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _157.MsgCreatePeriodicVestingAccount): _157.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                typeUrl: string;
                encode(_: _157.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _157.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _157.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_157.MsgCreatePeriodicVestingAccountResponse>): _157.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _157.MsgCreatePeriodicVestingAccountResponseAmino): _157.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _157.MsgCreatePeriodicVestingAccountResponse): _157.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _157.MsgCreatePeriodicVestingAccountResponseAminoMsg): _157.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _157.MsgCreatePeriodicVestingAccountResponse): _157.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _157.MsgCreatePeriodicVestingAccountResponseProtoMsg): _157.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _157.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _157.MsgCreatePeriodicVestingAccountResponse): _157.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    namespace ics23 {
        const v1: {
            hashOpFromJSON(object: any): _159.HashOp;
            hashOpToJSON(object: _159.HashOp): string;
            lengthOpFromJSON(object: any): _159.LengthOp;
            lengthOpToJSON(object: _159.LengthOp): string;
            HashOp: typeof _159.HashOp;
            HashOpSDKType: typeof _159.HashOp;
            HashOpAmino: typeof _159.HashOp;
            LengthOp: typeof _159.LengthOp;
            LengthOpSDKType: typeof _159.LengthOp;
            LengthOpAmino: typeof _159.LengthOp;
            ExistenceProof: {
                typeUrl: string;
                encode(message: _159.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ExistenceProof;
                fromJSON(object: any): _159.ExistenceProof;
                toJSON(message: _159.ExistenceProof): unknown;
                fromPartial(object: Partial<_159.ExistenceProof>): _159.ExistenceProof;
                fromAmino(object: _159.ExistenceProofAmino): _159.ExistenceProof;
                toAmino(message: _159.ExistenceProof): _159.ExistenceProofAmino;
                fromAminoMsg(object: _159.ExistenceProofAminoMsg): _159.ExistenceProof;
                toAminoMsg(message: _159.ExistenceProof): _159.ExistenceProofAminoMsg;
                fromProtoMsg(message: _159.ExistenceProofProtoMsg): _159.ExistenceProof;
                toProto(message: _159.ExistenceProof): Uint8Array;
                toProtoMsg(message: _159.ExistenceProof): _159.ExistenceProofProtoMsg;
            };
            NonExistenceProof: {
                typeUrl: string;
                encode(message: _159.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.NonExistenceProof;
                fromJSON(object: any): _159.NonExistenceProof;
                toJSON(message: _159.NonExistenceProof): unknown;
                fromPartial(object: Partial<_159.NonExistenceProof>): _159.NonExistenceProof;
                fromAmino(object: _159.NonExistenceProofAmino): _159.NonExistenceProof;
                toAmino(message: _159.NonExistenceProof): _159.NonExistenceProofAmino;
                fromAminoMsg(object: _159.NonExistenceProofAminoMsg): _159.NonExistenceProof;
                toAminoMsg(message: _159.NonExistenceProof): _159.NonExistenceProofAminoMsg;
                fromProtoMsg(message: _159.NonExistenceProofProtoMsg): _159.NonExistenceProof;
                toProto(message: _159.NonExistenceProof): Uint8Array;
                toProtoMsg(message: _159.NonExistenceProof): _159.NonExistenceProofProtoMsg;
            };
            CommitmentProof: {
                typeUrl: string;
                encode(message: _159.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.CommitmentProof;
                fromJSON(object: any): _159.CommitmentProof;
                toJSON(message: _159.CommitmentProof): unknown;
                fromPartial(object: Partial<_159.CommitmentProof>): _159.CommitmentProof;
                fromAmino(object: _159.CommitmentProofAmino): _159.CommitmentProof;
                toAmino(message: _159.CommitmentProof): _159.CommitmentProofAmino;
                fromAminoMsg(object: _159.CommitmentProofAminoMsg): _159.CommitmentProof;
                toAminoMsg(message: _159.CommitmentProof): _159.CommitmentProofAminoMsg;
                fromProtoMsg(message: _159.CommitmentProofProtoMsg): _159.CommitmentProof;
                toProto(message: _159.CommitmentProof): Uint8Array;
                toProtoMsg(message: _159.CommitmentProof): _159.CommitmentProofProtoMsg;
            };
            LeafOp: {
                typeUrl: string;
                encode(message: _159.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.LeafOp;
                fromJSON(object: any): _159.LeafOp;
                toJSON(message: _159.LeafOp): unknown;
                fromPartial(object: Partial<_159.LeafOp>): _159.LeafOp;
                fromAmino(object: _159.LeafOpAmino): _159.LeafOp;
                toAmino(message: _159.LeafOp): _159.LeafOpAmino;
                fromAminoMsg(object: _159.LeafOpAminoMsg): _159.LeafOp;
                toAminoMsg(message: _159.LeafOp): _159.LeafOpAminoMsg;
                fromProtoMsg(message: _159.LeafOpProtoMsg): _159.LeafOp;
                toProto(message: _159.LeafOp): Uint8Array;
                toProtoMsg(message: _159.LeafOp): _159.LeafOpProtoMsg;
            };
            InnerOp: {
                typeUrl: string;
                encode(message: _159.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.InnerOp;
                fromJSON(object: any): _159.InnerOp;
                toJSON(message: _159.InnerOp): unknown;
                fromPartial(object: Partial<_159.InnerOp>): _159.InnerOp;
                fromAmino(object: _159.InnerOpAmino): _159.InnerOp;
                toAmino(message: _159.InnerOp): _159.InnerOpAmino;
                fromAminoMsg(object: _159.InnerOpAminoMsg): _159.InnerOp;
                toAminoMsg(message: _159.InnerOp): _159.InnerOpAminoMsg;
                fromProtoMsg(message: _159.InnerOpProtoMsg): _159.InnerOp;
                toProto(message: _159.InnerOp): Uint8Array;
                toProtoMsg(message: _159.InnerOp): _159.InnerOpProtoMsg;
            };
            ProofSpec: {
                typeUrl: string;
                encode(message: _159.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.ProofSpec;
                fromJSON(object: any): _159.ProofSpec;
                toJSON(message: _159.ProofSpec): unknown;
                fromPartial(object: Partial<_159.ProofSpec>): _159.ProofSpec;
                fromAmino(object: _159.ProofSpecAmino): _159.ProofSpec;
                toAmino(message: _159.ProofSpec): _159.ProofSpecAmino;
                fromAminoMsg(object: _159.ProofSpecAminoMsg): _159.ProofSpec;
                toAminoMsg(message: _159.ProofSpec): _159.ProofSpecAminoMsg;
                fromProtoMsg(message: _159.ProofSpecProtoMsg): _159.ProofSpec;
                toProto(message: _159.ProofSpec): Uint8Array;
                toProtoMsg(message: _159.ProofSpec): _159.ProofSpecProtoMsg;
            };
            InnerSpec: {
                typeUrl: string;
                encode(message: _159.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.InnerSpec;
                fromJSON(object: any): _159.InnerSpec;
                toJSON(message: _159.InnerSpec): unknown;
                fromPartial(object: Partial<_159.InnerSpec>): _159.InnerSpec;
                fromAmino(object: _159.InnerSpecAmino): _159.InnerSpec;
                toAmino(message: _159.InnerSpec): _159.InnerSpecAmino;
                fromAminoMsg(object: _159.InnerSpecAminoMsg): _159.InnerSpec;
                toAminoMsg(message: _159.InnerSpec): _159.InnerSpecAminoMsg;
                fromProtoMsg(message: _159.InnerSpecProtoMsg): _159.InnerSpec;
                toProto(message: _159.InnerSpec): Uint8Array;
                toProtoMsg(message: _159.InnerSpec): _159.InnerSpecProtoMsg;
            };
            BatchProof: {
                typeUrl: string;
                encode(message: _159.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.BatchProof;
                fromJSON(object: any): _159.BatchProof;
                toJSON(message: _159.BatchProof): unknown;
                fromPartial(object: Partial<_159.BatchProof>): _159.BatchProof;
                fromAmino(object: _159.BatchProofAmino): _159.BatchProof;
                toAmino(message: _159.BatchProof): _159.BatchProofAmino;
                fromAminoMsg(object: _159.BatchProofAminoMsg): _159.BatchProof;
                toAminoMsg(message: _159.BatchProof): _159.BatchProofAminoMsg;
                fromProtoMsg(message: _159.BatchProofProtoMsg): _159.BatchProof;
                toProto(message: _159.BatchProof): Uint8Array;
                toProtoMsg(message: _159.BatchProof): _159.BatchProofProtoMsg;
            };
            BatchEntry: {
                typeUrl: string;
                encode(message: _159.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.BatchEntry;
                fromJSON(object: any): _159.BatchEntry;
                toJSON(message: _159.BatchEntry): unknown;
                fromPartial(object: Partial<_159.BatchEntry>): _159.BatchEntry;
                fromAmino(object: _159.BatchEntryAmino): _159.BatchEntry;
                toAmino(message: _159.BatchEntry): _159.BatchEntryAmino;
                fromAminoMsg(object: _159.BatchEntryAminoMsg): _159.BatchEntry;
                toAminoMsg(message: _159.BatchEntry): _159.BatchEntryAminoMsg;
                fromProtoMsg(message: _159.BatchEntryProtoMsg): _159.BatchEntry;
                toProto(message: _159.BatchEntry): Uint8Array;
                toProtoMsg(message: _159.BatchEntry): _159.BatchEntryProtoMsg;
            };
            CompressedBatchProof: {
                typeUrl: string;
                encode(message: _159.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.CompressedBatchProof;
                fromJSON(object: any): _159.CompressedBatchProof;
                toJSON(message: _159.CompressedBatchProof): unknown;
                fromPartial(object: Partial<_159.CompressedBatchProof>): _159.CompressedBatchProof;
                fromAmino(object: _159.CompressedBatchProofAmino): _159.CompressedBatchProof;
                toAmino(message: _159.CompressedBatchProof): _159.CompressedBatchProofAmino;
                fromAminoMsg(object: _159.CompressedBatchProofAminoMsg): _159.CompressedBatchProof;
                toAminoMsg(message: _159.CompressedBatchProof): _159.CompressedBatchProofAminoMsg;
                fromProtoMsg(message: _159.CompressedBatchProofProtoMsg): _159.CompressedBatchProof;
                toProto(message: _159.CompressedBatchProof): Uint8Array;
                toProtoMsg(message: _159.CompressedBatchProof): _159.CompressedBatchProofProtoMsg;
            };
            CompressedBatchEntry: {
                typeUrl: string;
                encode(message: _159.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.CompressedBatchEntry;
                fromJSON(object: any): _159.CompressedBatchEntry;
                toJSON(message: _159.CompressedBatchEntry): unknown;
                fromPartial(object: Partial<_159.CompressedBatchEntry>): _159.CompressedBatchEntry;
                fromAmino(object: _159.CompressedBatchEntryAmino): _159.CompressedBatchEntry;
                toAmino(message: _159.CompressedBatchEntry): _159.CompressedBatchEntryAmino;
                fromAminoMsg(object: _159.CompressedBatchEntryAminoMsg): _159.CompressedBatchEntry;
                toAminoMsg(message: _159.CompressedBatchEntry): _159.CompressedBatchEntryAminoMsg;
                fromProtoMsg(message: _159.CompressedBatchEntryProtoMsg): _159.CompressedBatchEntry;
                toProto(message: _159.CompressedBatchEntry): Uint8Array;
                toProtoMsg(message: _159.CompressedBatchEntry): _159.CompressedBatchEntryProtoMsg;
            };
            CompressedExistenceProof: {
                typeUrl: string;
                encode(message: _159.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.CompressedExistenceProof;
                fromJSON(object: any): _159.CompressedExistenceProof;
                toJSON(message: _159.CompressedExistenceProof): unknown;
                fromPartial(object: Partial<_159.CompressedExistenceProof>): _159.CompressedExistenceProof;
                fromAmino(object: _159.CompressedExistenceProofAmino): _159.CompressedExistenceProof;
                toAmino(message: _159.CompressedExistenceProof): _159.CompressedExistenceProofAmino;
                fromAminoMsg(object: _159.CompressedExistenceProofAminoMsg): _159.CompressedExistenceProof;
                toAminoMsg(message: _159.CompressedExistenceProof): _159.CompressedExistenceProofAminoMsg;
                fromProtoMsg(message: _159.CompressedExistenceProofProtoMsg): _159.CompressedExistenceProof;
                toProto(message: _159.CompressedExistenceProof): Uint8Array;
                toProtoMsg(message: _159.CompressedExistenceProof): _159.CompressedExistenceProofProtoMsg;
            };
            CompressedNonExistenceProof: {
                typeUrl: string;
                encode(message: _159.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.CompressedNonExistenceProof;
                fromJSON(object: any): _159.CompressedNonExistenceProof;
                toJSON(message: _159.CompressedNonExistenceProof): unknown;
                fromPartial(object: Partial<_159.CompressedNonExistenceProof>): _159.CompressedNonExistenceProof;
                fromAmino(object: _159.CompressedNonExistenceProofAmino): _159.CompressedNonExistenceProof;
                toAmino(message: _159.CompressedNonExistenceProof): _159.CompressedNonExistenceProofAmino;
                fromAminoMsg(object: _159.CompressedNonExistenceProofAminoMsg): _159.CompressedNonExistenceProof;
                toAminoMsg(message: _159.CompressedNonExistenceProof): _159.CompressedNonExistenceProofAminoMsg;
                fromProtoMsg(message: _159.CompressedNonExistenceProofProtoMsg): _159.CompressedNonExistenceProof;
                toProto(message: _159.CompressedNonExistenceProof): Uint8Array;
                toProtoMsg(message: _159.CompressedNonExistenceProof): _159.CompressedNonExistenceProofProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _295.MsgClientImpl;
                };
                authz: {
                    v1beta1: _296.MsgClientImpl;
                };
                bank: {
                    v1beta1: _297.MsgClientImpl;
                };
                consensus: {
                    v1: _298.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _299.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _300.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _301.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _302.MsgClientImpl;
                };
                gov: {
                    v1: _303.MsgClientImpl;
                    v1beta1: _304.MsgClientImpl;
                };
                group: {
                    v1: _305.MsgClientImpl;
                };
                mint: {
                    v1beta1: _306.MsgClientImpl;
                };
                nft: {
                    v1beta1: _307.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _308.MsgClientImpl;
                };
                staking: {
                    v1beta1: _309.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _310.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _311.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _37.QueryConfigRequest): Promise<_37.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _41.QueryAccountsRequest): Promise<_41.QueryAccountsResponse>;
                        account(request: _41.QueryAccountRequest): Promise<_41.QueryAccountResponse>;
                        accountAddressByID(request: _41.QueryAccountAddressByIDRequest): Promise<_41.QueryAccountAddressByIDResponse>;
                        params(request?: _41.QueryParamsRequest): Promise<_41.QueryParamsResponse>;
                        moduleAccounts(request?: _41.QueryModuleAccountsRequest): Promise<_41.QueryModuleAccountsResponse>;
                        moduleAccountByName(request: _41.QueryModuleAccountByNameRequest): Promise<_41.QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: _41.Bech32PrefixRequest): Promise<_41.Bech32PrefixResponse>;
                        addressBytesToString(request: _41.AddressBytesToStringRequest): Promise<_41.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _41.AddressStringToBytesRequest): Promise<_41.AddressStringToBytesResponse>;
                        accountInfo(request: _41.QueryAccountInfoRequest): Promise<_41.QueryAccountInfoResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _47.QueryGrantsRequest): Promise<_47.QueryGrantsResponse>;
                        granterGrants(request: _47.QueryGranterGrantsRequest): Promise<_47.QueryGranterGrantsResponse>;
                        granteeGrants(request: _47.QueryGranteeGrantsRequest): Promise<_47.QueryGranteeGrantsResponse>;
                    };
                };
                autocli: {
                    v1: {
                        appOptions(request?: _50.AppOptionsRequest): Promise<_50.AppOptionsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _55.QueryBalanceRequest): Promise<_55.QueryBalanceResponse>;
                        allBalances(request: _55.QueryAllBalancesRequest): Promise<_55.QueryAllBalancesResponse>;
                        spendableBalances(request: _55.QuerySpendableBalancesRequest): Promise<_55.QuerySpendableBalancesResponse>;
                        spendableBalanceByDenom(request: _55.QuerySpendableBalanceByDenomRequest): Promise<_55.QuerySpendableBalanceByDenomResponse>;
                        totalSupply(request?: _55.QueryTotalSupplyRequest): Promise<_55.QueryTotalSupplyResponse>;
                        supplyOf(request: _55.QuerySupplyOfRequest): Promise<_55.QuerySupplyOfResponse>;
                        params(request?: _55.QueryParamsRequest): Promise<_55.QueryParamsResponse>;
                        denomMetadata(request: _55.QueryDenomMetadataRequest): Promise<_55.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _55.QueryDenomsMetadataRequest): Promise<_55.QueryDenomsMetadataResponse>;
                        denomOwners(request: _55.QueryDenomOwnersRequest): Promise<_55.QueryDenomOwnersResponse>;
                        sendEnabled(request: _55.QuerySendEnabledRequest): Promise<_55.QuerySendEnabledResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: _59.ConfigRequest): Promise<_59.ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _66.GetNodeInfoRequest): Promise<_66.GetNodeInfoResponse>;
                            getSyncing(request?: _66.GetSyncingRequest): Promise<_66.GetSyncingResponse>;
                            getLatestBlock(request?: _66.GetLatestBlockRequest): Promise<_66.GetLatestBlockResponse>;
                            getBlockByHeight(request: _66.GetBlockByHeightRequest): Promise<_66.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _66.GetLatestValidatorSetRequest): Promise<_66.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _66.GetValidatorSetByHeightRequest): Promise<_66.GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: _66.ABCIQueryRequest): Promise<_66.ABCIQueryResponse>;
                        };
                    };
                };
                consensus: {
                    v1: {
                        params(request?: _73.QueryParamsRequest): Promise<_73.QueryParamsResponse>;
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _87.QueryParamsRequest): Promise<_87.QueryParamsResponse>;
                        validatorDistributionInfo(request: _87.QueryValidatorDistributionInfoRequest): Promise<_87.QueryValidatorDistributionInfoResponse>;
                        validatorOutstandingRewards(request: _87.QueryValidatorOutstandingRewardsRequest): Promise<_87.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _87.QueryValidatorCommissionRequest): Promise<_87.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _87.QueryValidatorSlashesRequest): Promise<_87.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _87.QueryDelegationRewardsRequest): Promise<_87.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _87.QueryDelegationTotalRewardsRequest): Promise<_87.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _87.QueryDelegatorValidatorsRequest): Promise<_87.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _87.QueryDelegatorWithdrawAddressRequest): Promise<_87.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _87.QueryCommunityPoolRequest): Promise<_87.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _92.QueryEvidenceRequest): Promise<_92.QueryEvidenceResponse>;
                        allEvidence(request?: _92.QueryAllEvidenceRequest): Promise<_92.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _97.QueryAllowanceRequest): Promise<_97.QueryAllowanceResponse>;
                        allowances(request: _97.QueryAllowancesRequest): Promise<_97.QueryAllowancesResponse>;
                        allowancesByGranter(request: _97.QueryAllowancesByGranterRequest): Promise<_97.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _104.QueryProposalRequest): Promise<_104.QueryProposalResponse>;
                        proposals(request: _104.QueryProposalsRequest): Promise<_104.QueryProposalsResponse>;
                        vote(request: _104.QueryVoteRequest): Promise<_104.QueryVoteResponse>;
                        votes(request: _104.QueryVotesRequest): Promise<_104.QueryVotesResponse>;
                        params(request: _104.QueryParamsRequest): Promise<_104.QueryParamsResponse>;
                        deposit(request: _104.QueryDepositRequest): Promise<_104.QueryDepositResponse>;
                        deposits(request: _104.QueryDepositsRequest): Promise<_104.QueryDepositsResponse>;
                        tallyResult(request: _104.QueryTallyResultRequest): Promise<_104.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _108.QueryProposalRequest): Promise<_108.QueryProposalResponse>;
                        proposals(request: _108.QueryProposalsRequest): Promise<_108.QueryProposalsResponse>;
                        vote(request: _108.QueryVoteRequest): Promise<_108.QueryVoteResponse>;
                        votes(request: _108.QueryVotesRequest): Promise<_108.QueryVotesResponse>;
                        params(request: _108.QueryParamsRequest): Promise<_108.QueryParamsResponse>;
                        deposit(request: _108.QueryDepositRequest): Promise<_108.QueryDepositResponse>;
                        deposits(request: _108.QueryDepositsRequest): Promise<_108.QueryDepositsResponse>;
                        tallyResult(request: _108.QueryTallyResultRequest): Promise<_108.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _113.QueryGroupInfoRequest): Promise<_113.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _113.QueryGroupPolicyInfoRequest): Promise<_113.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _113.QueryGroupMembersRequest): Promise<_113.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _113.QueryGroupsByAdminRequest): Promise<_113.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _113.QueryGroupPoliciesByGroupRequest): Promise<_113.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _113.QueryGroupPoliciesByAdminRequest): Promise<_113.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _113.QueryProposalRequest): Promise<_113.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _113.QueryProposalsByGroupPolicyRequest): Promise<_113.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _113.QueryVoteByProposalVoterRequest): Promise<_113.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _113.QueryVotesByProposalRequest): Promise<_113.QueryVotesByProposalResponse>;
                        votesByVoter(request: _113.QueryVotesByVoterRequest): Promise<_113.QueryVotesByVoterResponse>;
                        groupsByMember(request: _113.QueryGroupsByMemberRequest): Promise<_113.QueryGroupsByMemberResponse>;
                        tallyResult(request: _113.QueryTallyResultRequest): Promise<_113.QueryTallyResultResponse>;
                        groups(request?: _113.QueryGroupsRequest): Promise<_113.QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _119.QueryParamsRequest): Promise<_119.QueryParamsResponse>;
                        inflation(request?: _119.QueryInflationRequest): Promise<_119.QueryInflationResponse>;
                        annualProvisions(request?: _119.QueryAnnualProvisionsRequest): Promise<_119.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _126.QueryBalanceRequest): Promise<_126.QueryBalanceResponse>;
                        owner(request: _126.QueryOwnerRequest): Promise<_126.QueryOwnerResponse>;
                        supply(request: _126.QuerySupplyRequest): Promise<_126.QuerySupplyResponse>;
                        nFTs(request: _126.QueryNFTsRequest): Promise<_126.QueryNFTsResponse>;
                        nFT(request: _126.QueryNFTRequest): Promise<_126.QueryNFTResponse>;
                        class(request: _126.QueryClassRequest): Promise<_126.QueryClassResponse>;
                        classes(request?: _126.QueryClassesRequest): Promise<_126.QueryClassesResponse>;
                    };
                };
                orm: {
                    query: {
                        v1alpha1: {
                            get(request: _129.GetRequest): Promise<_129.GetResponse>;
                            list(request: _129.ListRequest): Promise<_129.ListResponse>;
                        };
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _134.QueryParamsRequest): Promise<_134.QueryParamsResponse>;
                        subspaces(request?: _134.QuerySubspacesRequest): Promise<_134.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _139.QueryParamsRequest): Promise<_139.QueryParamsResponse>;
                        signingInfo(request: _139.QuerySigningInfoRequest): Promise<_139.QuerySigningInfoResponse>;
                        signingInfos(request?: _139.QuerySigningInfosRequest): Promise<_139.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _145.QueryValidatorsRequest): Promise<_145.QueryValidatorsResponse>;
                        validator(request: _145.QueryValidatorRequest): Promise<_145.QueryValidatorResponse>;
                        validatorDelegations(request: _145.QueryValidatorDelegationsRequest): Promise<_145.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _145.QueryValidatorUnbondingDelegationsRequest): Promise<_145.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _145.QueryDelegationRequest): Promise<_145.QueryDelegationResponse>;
                        unbondingDelegation(request: _145.QueryUnbondingDelegationRequest): Promise<_145.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _145.QueryDelegatorDelegationsRequest): Promise<_145.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _145.QueryDelegatorUnbondingDelegationsRequest): Promise<_145.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _145.QueryRedelegationsRequest): Promise<_145.QueryRedelegationsResponse>;
                        delegatorValidators(request: _145.QueryDelegatorValidatorsRequest): Promise<_145.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _145.QueryDelegatorValidatorRequest): Promise<_145.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _145.QueryHistoricalInfoRequest): Promise<_145.QueryHistoricalInfoResponse>;
                        pool(request?: _145.QueryPoolRequest): Promise<_145.QueryPoolResponse>;
                        params(request?: _145.QueryParamsRequest): Promise<_145.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _150.SimulateRequest): Promise<_150.SimulateResponse>;
                        getTx(request: _150.GetTxRequest): Promise<_150.GetTxResponse>;
                        broadcastTx(request: _150.BroadcastTxRequest): Promise<_150.BroadcastTxResponse>;
                        getTxsEvent(request: _150.GetTxsEventRequest): Promise<_150.GetTxsEventResponse>;
                        getBlockWithTxs(request: _150.GetBlockWithTxsRequest): Promise<_150.GetBlockWithTxsResponse>;
                        txDecode(request: _150.TxDecodeRequest): Promise<_150.TxDecodeResponse>;
                        txEncode(request: _150.TxEncodeRequest): Promise<_150.TxEncodeResponse>;
                        txEncodeAmino(request: _150.TxEncodeAminoRequest): Promise<_150.TxEncodeAminoResponse>;
                        txDecodeAmino(request: _150.TxDecodeAminoRequest): Promise<_150.TxDecodeAminoResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _153.QueryCurrentPlanRequest): Promise<_153.QueryCurrentPlanResponse>;
                        appliedPlan(request: _153.QueryAppliedPlanRequest): Promise<_153.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _153.QueryUpgradedConsensusStateRequest): Promise<_153.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _153.QueryModuleVersionsRequest): Promise<_153.QueryModuleVersionsResponse>;
                        authority(request?: _153.QueryAuthorityRequest): Promise<_153.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            cosmos: {
                auth: {
                    v1beta1: _254.LCDQueryClient;
                };
                authz: {
                    v1beta1: _255.LCDQueryClient;
                };
                bank: {
                    v1beta1: _256.LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: _257.LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: _258.LCDQueryClient;
                    };
                };
                consensus: {
                    v1: _259.LCDQueryClient;
                };
                distribution: {
                    v1beta1: _260.LCDQueryClient;
                };
                evidence: {
                    v1beta1: _261.LCDQueryClient;
                };
                feegrant: {
                    v1beta1: _262.LCDQueryClient;
                };
                gov: {
                    v1: _263.LCDQueryClient;
                    v1beta1: _264.LCDQueryClient;
                };
                group: {
                    v1: _265.LCDQueryClient;
                };
                mint: {
                    v1beta1: _266.LCDQueryClient;
                };
                nft: {
                    v1beta1: _267.LCDQueryClient;
                };
                params: {
                    v1beta1: _268.LCDQueryClient;
                };
                slashing: {
                    v1beta1: _269.LCDQueryClient;
                };
                staking: {
                    v1beta1: _270.LCDQueryClient;
                };
                tx: {
                    v1beta1: _271.LCDQueryClient;
                };
                upgrade: {
                    v1beta1: _272.LCDQueryClient;
                };
            };
        }>;
    };
}
