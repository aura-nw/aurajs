import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRecover, MsgActivateAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/auranw.aura.smartaccount.MsgRecover", MsgRecover], ["/auranw.aura.smartaccount.MsgActivateAccount", MsgActivateAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    recover(value: MsgRecover) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgRecover",
        value: MsgRecover.encode(value).finish()
      };
    },
    activateAccount(value: MsgActivateAccount) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgActivateAccount",
        value: MsgActivateAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    recover(value: MsgRecover) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgRecover",
        value
      };
    },
    activateAccount(value: MsgActivateAccount) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgActivateAccount",
        value
      };
    }
  },
  toJSON: {
    recover(value: MsgRecover) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgRecover",
        value: MsgRecover.toJSON(value)
      };
    },
    activateAccount(value: MsgActivateAccount) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgActivateAccount",
        value: MsgActivateAccount.toJSON(value)
      };
    }
  },
  fromJSON: {
    recover(value: any) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgRecover",
        value: MsgRecover.fromJSON(value)
      };
    },
    activateAccount(value: any) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgActivateAccount",
        value: MsgActivateAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    recover(value: MsgRecover) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgRecover",
        value: MsgRecover.fromPartial(value)
      };
    },
    activateAccount(value: MsgActivateAccount) {
      return {
        typeUrl: "/auranw.aura.smartaccount.MsgActivateAccount",
        value: MsgActivateAccount.fromPartial(value)
      };
    }
  }
};