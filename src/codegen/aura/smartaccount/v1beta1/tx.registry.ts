import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRecover, MsgActivateAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/aura.smartaccount.v1beta1.MsgRecover", MsgRecover], ["/aura.smartaccount.v1beta1.MsgActivateAccount", MsgActivateAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    recover(value: MsgRecover) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgRecover",
        value: MsgRecover.encode(value).finish()
      };
    },
    activateAccount(value: MsgActivateAccount) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount",
        value: MsgActivateAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    recover(value: MsgRecover) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgRecover",
        value
      };
    },
    activateAccount(value: MsgActivateAccount) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount",
        value
      };
    }
  },
  toJSON: {
    recover(value: MsgRecover) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgRecover",
        value: MsgRecover.toJSON(value)
      };
    },
    activateAccount(value: MsgActivateAccount) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount",
        value: MsgActivateAccount.toJSON(value)
      };
    }
  },
  fromJSON: {
    recover(value: any) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgRecover",
        value: MsgRecover.fromJSON(value)
      };
    },
    activateAccount(value: any) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount",
        value: MsgActivateAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    recover(value: MsgRecover) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgRecover",
        value: MsgRecover.fromPartial(value)
      };
    },
    activateAccount(value: MsgActivateAccount) {
      return {
        typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount",
        value: MsgActivateAccount.fromPartial(value)
      };
    }
  }
};