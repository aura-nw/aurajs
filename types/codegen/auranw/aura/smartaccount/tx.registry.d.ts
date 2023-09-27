import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRecover, MsgActivateAccount } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        recover(value: MsgRecover): {
            typeUrl: string;
            value: Uint8Array;
        };
        activateAccount(value: MsgActivateAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        recover(value: MsgRecover): {
            typeUrl: string;
            value: MsgRecover;
        };
        activateAccount(value: MsgActivateAccount): {
            typeUrl: string;
            value: MsgActivateAccount;
        };
    };
    toJSON: {
        recover(value: MsgRecover): {
            typeUrl: string;
            value: unknown;
        };
        activateAccount(value: MsgActivateAccount): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        recover(value: any): {
            typeUrl: string;
            value: MsgRecover;
        };
        activateAccount(value: any): {
            typeUrl: string;
            value: MsgActivateAccount;
        };
    };
    fromPartial: {
        recover(value: MsgRecover): {
            typeUrl: string;
            value: MsgRecover;
        };
        activateAccount(value: MsgActivateAccount): {
            typeUrl: string;
            value: MsgActivateAccount;
        };
    };
};
