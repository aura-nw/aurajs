import { MsgRecover, MsgActivateAccount } from "./tx";
export declare const AminoConverter: {
    "/auranw.aura.smartaccount.MsgRecover": {
        aminoType: string;
        toAmino: (message: MsgRecover) => import("./tx").MsgRecoverAmino;
        fromAmino: (object: import("./tx").MsgRecoverAmino) => MsgRecover;
    };
    "/auranw.aura.smartaccount.MsgActivateAccount": {
        aminoType: string;
        toAmino: (message: MsgActivateAccount) => import("./tx").MsgActivateAccountAmino;
        fromAmino: (object: import("./tx").MsgActivateAccountAmino) => MsgActivateAccount;
    };
};
