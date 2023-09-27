import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const auranwAminoConverters: {
    "/auranw.aura.smartaccount.MsgRecover": {
        aminoType: string;
        toAmino: (message: import("./aura/smartaccount/tx").MsgRecover) => import("./aura/smartaccount/tx").MsgRecoverAmino;
        fromAmino: (object: import("./aura/smartaccount/tx").MsgRecoverAmino) => import("./aura/smartaccount/tx").MsgRecover;
    };
    "/auranw.aura.smartaccount.MsgActivateAccount": {
        aminoType: string;
        toAmino: (message: import("./aura/smartaccount/tx").MsgActivateAccount) => import("./aura/smartaccount/tx").MsgActivateAccountAmino;
        fromAmino: (object: import("./aura/smartaccount/tx").MsgActivateAccountAmino) => import("./aura/smartaccount/tx").MsgActivateAccount;
    };
};
export declare const auranwProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAuranwClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAuranwClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
