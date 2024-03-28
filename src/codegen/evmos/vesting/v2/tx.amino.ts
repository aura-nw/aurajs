import { MsgCreateClawbackVestingAccount, MsgFundVestingAccount, MsgClawback, MsgUpdateVestingFunder, MsgConvertVestingAccount } from "./tx";
export const AminoConverter = {
  "/evmos.vesting.v2.MsgCreateClawbackVestingAccount": {
    aminoType: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount",
    toAmino: MsgCreateClawbackVestingAccount.toAmino,
    fromAmino: MsgCreateClawbackVestingAccount.fromAmino
  },
  "/evmos.vesting.v2.MsgFundVestingAccount": {
    aminoType: "/evmos.vesting.v2.MsgFundVestingAccount",
    toAmino: MsgFundVestingAccount.toAmino,
    fromAmino: MsgFundVestingAccount.fromAmino
  },
  "/evmos.vesting.v2.MsgClawback": {
    aminoType: "/evmos.vesting.v2.MsgClawback",
    toAmino: MsgClawback.toAmino,
    fromAmino: MsgClawback.fromAmino
  },
  "/evmos.vesting.v2.MsgUpdateVestingFunder": {
    aminoType: "/evmos.vesting.v2.MsgUpdateVestingFunder",
    toAmino: MsgUpdateVestingFunder.toAmino,
    fromAmino: MsgUpdateVestingFunder.fromAmino
  },
  "/evmos.vesting.v2.MsgConvertVestingAccount": {
    aminoType: "/evmos.vesting.v2.MsgConvertVestingAccount",
    toAmino: MsgConvertVestingAccount.toAmino,
    fromAmino: MsgConvertVestingAccount.fromAmino
  }
};