import { MsgRecover, MsgActivateAccount } from "./tx";
export const AminoConverter = {
  "/auranw.aura.smartaccount.MsgRecover": {
    aminoType: "/auranw.aura.smartaccount.MsgRecover",
    toAmino: MsgRecover.toAmino,
    fromAmino: MsgRecover.fromAmino
  },
  "/auranw.aura.smartaccount.MsgActivateAccount": {
    aminoType: "/auranw.aura.smartaccount.MsgActivateAccount",
    toAmino: MsgActivateAccount.toAmino,
    fromAmino: MsgActivateAccount.fromAmino
  }
};