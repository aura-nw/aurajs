import { MsgRecover, MsgActivateAccount } from "./tx";
export const AminoConverter = {
  "/aura.smartaccount.v1beta1.MsgRecover": {
    aminoType: "/aura.smartaccount.v1beta1.MsgRecover",
    toAmino: MsgRecover.toAmino,
    fromAmino: MsgRecover.fromAmino
  },
  "/aura.smartaccount.v1beta1.MsgActivateAccount": {
    aminoType: "/aura.smartaccount.v1beta1.MsgActivateAccount",
    toAmino: MsgActivateAccount.toAmino,
    fromAmino: MsgActivateAccount.fromAmino
  }
};