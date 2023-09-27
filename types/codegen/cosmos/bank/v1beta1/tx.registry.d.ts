import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSend, MsgMultiSend, MsgUpdateParams, MsgSetSendEnabled } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        send(value: MsgSend): {
            typeUrl: string;
            value: Uint8Array;
        };
        multiSend(value: MsgMultiSend): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        setSendEnabled(value: MsgSetSendEnabled): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        multiSend(value: MsgMultiSend): {
            typeUrl: string;
            value: MsgMultiSend;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        setSendEnabled(value: MsgSetSendEnabled): {
            typeUrl: string;
            value: MsgSetSendEnabled;
        };
    };
    toJSON: {
        send(value: MsgSend): {
            typeUrl: string;
            value: unknown;
        };
        multiSend(value: MsgMultiSend): {
            typeUrl: string;
            value: unknown;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: unknown;
        };
        setSendEnabled(value: MsgSetSendEnabled): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        send(value: any): {
            typeUrl: string;
            value: MsgSend;
        };
        multiSend(value: any): {
            typeUrl: string;
            value: MsgMultiSend;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        setSendEnabled(value: any): {
            typeUrl: string;
            value: MsgSetSendEnabled;
        };
    };
    fromPartial: {
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
        multiSend(value: MsgMultiSend): {
            typeUrl: string;
            value: MsgMultiSend;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        setSendEnabled(value: MsgSetSendEnabled): {
            typeUrl: string;
            value: MsgSetSendEnabled;
        };
    };
};
