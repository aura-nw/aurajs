import { MsgRecover, MsgActivateAccount } from "./tx";
export declare const AminoConverter: {
    "/aura.smartaccount.v1beta1.MsgRecover": {
        aminoType: string;
        toAmino: (message: MsgRecover) => import("./tx").MsgRecoverAmino;
        fromAmino: (object: import("./tx").MsgRecoverAmino) => MsgRecover;
    };
    "/aura.smartaccount.v1beta1.MsgActivateAccount": {
        aminoType: string;
        toAmino: (message: MsgActivateAccount) => import("./tx").MsgActivateAccountAmino;
        fromAmino: (object: import("./tx").MsgActivateAccountAmino) => MsgActivateAccount;
    };
};
