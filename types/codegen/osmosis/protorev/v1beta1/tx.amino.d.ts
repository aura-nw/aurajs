import { MsgSetHotRoutes, MsgSetDeveloperAccount } from "./tx";
export declare const AminoConverter: {
    "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
        aminoType: string;
        toAmino: (message: MsgSetHotRoutes) => import("./tx").MsgSetHotRoutesAmino;
        fromAmino: (object: import("./tx").MsgSetHotRoutesAmino) => MsgSetHotRoutes;
    };
    "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
        aminoType: string;
        toAmino: (message: MsgSetDeveloperAccount) => import("./tx").MsgSetDeveloperAccountAmino;
        fromAmino: (object: import("./tx").MsgSetDeveloperAccountAmino) => MsgSetDeveloperAccount;
    };
};
