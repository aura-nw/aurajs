import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClawbackVestingAccount, MsgFundVestingAccount, MsgClawback, MsgUpdateVestingFunder, MsgConvertVestingAccount } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        fundVestingAccount(value: MsgFundVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateVestingFunder(value: MsgUpdateVestingFunder): {
            typeUrl: string;
            value: Uint8Array;
        };
        convertVestingAccount(value: MsgConvertVestingAccount): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        fundVestingAccount(value: MsgFundVestingAccount): {
            typeUrl: string;
            value: MsgFundVestingAccount;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
        updateVestingFunder(value: MsgUpdateVestingFunder): {
            typeUrl: string;
            value: MsgUpdateVestingFunder;
        };
        convertVestingAccount(value: MsgConvertVestingAccount): {
            typeUrl: string;
            value: MsgConvertVestingAccount;
        };
    };
    toJSON: {
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: unknown;
        };
        fundVestingAccount(value: MsgFundVestingAccount): {
            typeUrl: string;
            value: unknown;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: unknown;
        };
        updateVestingFunder(value: MsgUpdateVestingFunder): {
            typeUrl: string;
            value: unknown;
        };
        convertVestingAccount(value: MsgConvertVestingAccount): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        createClawbackVestingAccount(value: any): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        fundVestingAccount(value: any): {
            typeUrl: string;
            value: MsgFundVestingAccount;
        };
        clawback(value: any): {
            typeUrl: string;
            value: MsgClawback;
        };
        updateVestingFunder(value: any): {
            typeUrl: string;
            value: MsgUpdateVestingFunder;
        };
        convertVestingAccount(value: any): {
            typeUrl: string;
            value: MsgConvertVestingAccount;
        };
    };
    fromPartial: {
        createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount): {
            typeUrl: string;
            value: MsgCreateClawbackVestingAccount;
        };
        fundVestingAccount(value: MsgFundVestingAccount): {
            typeUrl: string;
            value: MsgFundVestingAccount;
        };
        clawback(value: MsgClawback): {
            typeUrl: string;
            value: MsgClawback;
        };
        updateVestingFunder(value: MsgUpdateVestingFunder): {
            typeUrl: string;
            value: MsgUpdateVestingFunder;
        };
        convertVestingAccount(value: MsgConvertVestingAccount): {
            typeUrl: string;
            value: MsgConvertVestingAccount;
        };
    };
};
