import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const auraAminoConverters: {
    "/aura.smartaccount.v1beta1.MsgRecover": {
        aminoType: string;
        toAmino: (message: import("./smartaccount/v1beta1/tx").MsgRecover) => import("./smartaccount/v1beta1/tx").MsgRecoverAmino;
        fromAmino: (object: import("./smartaccount/v1beta1/tx").MsgRecoverAmino) => import("./smartaccount/v1beta1/tx").MsgRecover;
    };
    "/aura.smartaccount.v1beta1.MsgActivateAccount": {
        aminoType: string;
        toAmino: (message: import("./smartaccount/v1beta1/tx").MsgActivateAccount) => import("./smartaccount/v1beta1/tx").MsgActivateAccountAmino;
        fromAmino: (object: import("./smartaccount/v1beta1/tx").MsgActivateAccountAmino) => import("./smartaccount/v1beta1/tx").MsgActivateAccount;
    };
};
export declare const auraProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAuraClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAuraClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
