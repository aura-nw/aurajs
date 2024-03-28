import * as _m0 from "protobufjs/minimal";
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccount {
    /** funder is the address of the funder */
    funder: string;
    /** vesting_account is the address of the created vesting account */
    vestingAccount: string;
}
export interface EventCreateClawbackVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v2.EventCreateClawbackVestingAccount";
    value: Uint8Array;
}
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccountAmino {
    /** funder is the address of the funder */
    funder?: string;
    /** vesting_account is the address of the created vesting account */
    vesting_account?: string;
}
export interface EventCreateClawbackVestingAccountAminoMsg {
    type: "/evmos.vesting.v2.EventCreateClawbackVestingAccount";
    value: EventCreateClawbackVestingAccountAmino;
}
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccountSDKType {
    funder: string;
    vesting_account: string;
}
/** EventFundVestingAccount defines the event type for funding a vesting account */
export interface EventFundVestingAccount {
    /** funder is the address of the funder */
    funder: string;
    /** coins to be vested */
    coins: string;
    /** start_time is the time when the coins start to vest */
    startTime: string;
    /** vesting_account is the address of the recipient */
    vestingAccount: string;
}
export interface EventFundVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v2.EventFundVestingAccount";
    value: Uint8Array;
}
/** EventFundVestingAccount defines the event type for funding a vesting account */
export interface EventFundVestingAccountAmino {
    /** funder is the address of the funder */
    funder?: string;
    /** coins to be vested */
    coins?: string;
    /** start_time is the time when the coins start to vest */
    start_time?: string;
    /** vesting_account is the address of the recipient */
    vesting_account?: string;
}
export interface EventFundVestingAccountAminoMsg {
    type: "/evmos.vesting.v2.EventFundVestingAccount";
    value: EventFundVestingAccountAmino;
}
/** EventFundVestingAccount defines the event type for funding a vesting account */
export interface EventFundVestingAccountSDKType {
    funder: string;
    coins: string;
    start_time: string;
    vesting_account: string;
}
/** EventClawback defines the event type for clawback */
export interface EventClawback {
    /** funder is the address of the funder */
    funder: string;
    /** account is the address of the account */
    account: string;
    /** destination is the address of the destination */
    destination: string;
}
export interface EventClawbackProtoMsg {
    typeUrl: "/evmos.vesting.v2.EventClawback";
    value: Uint8Array;
}
/** EventClawback defines the event type for clawback */
export interface EventClawbackAmino {
    /** funder is the address of the funder */
    funder?: string;
    /** account is the address of the account */
    account?: string;
    /** destination is the address of the destination */
    destination?: string;
}
export interface EventClawbackAminoMsg {
    type: "/evmos.vesting.v2.EventClawback";
    value: EventClawbackAmino;
}
/** EventClawback defines the event type for clawback */
export interface EventClawbackSDKType {
    funder: string;
    account: string;
    destination: string;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunder {
    /** funder is the address of the funder */
    funder: string;
    /** account is the address of the account */
    account: string;
    /** new_funder is the address of the new funder */
    newFunder: string;
}
export interface EventUpdateVestingFunderProtoMsg {
    typeUrl: "/evmos.vesting.v2.EventUpdateVestingFunder";
    value: Uint8Array;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunderAmino {
    /** funder is the address of the funder */
    funder?: string;
    /** account is the address of the account */
    account?: string;
    /** new_funder is the address of the new funder */
    new_funder?: string;
}
export interface EventUpdateVestingFunderAminoMsg {
    type: "/evmos.vesting.v2.EventUpdateVestingFunder";
    value: EventUpdateVestingFunderAmino;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunderSDKType {
    funder: string;
    account: string;
    new_funder: string;
}
export declare const EventCreateClawbackVestingAccount: {
    typeUrl: string;
    encode(message: EventCreateClawbackVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateClawbackVestingAccount;
    fromJSON(object: any): EventCreateClawbackVestingAccount;
    toJSON(message: EventCreateClawbackVestingAccount): unknown;
    fromPartial(object: Partial<EventCreateClawbackVestingAccount>): EventCreateClawbackVestingAccount;
    fromAmino(object: EventCreateClawbackVestingAccountAmino): EventCreateClawbackVestingAccount;
    toAmino(message: EventCreateClawbackVestingAccount): EventCreateClawbackVestingAccountAmino;
    fromAminoMsg(object: EventCreateClawbackVestingAccountAminoMsg): EventCreateClawbackVestingAccount;
    fromProtoMsg(message: EventCreateClawbackVestingAccountProtoMsg): EventCreateClawbackVestingAccount;
    toProto(message: EventCreateClawbackVestingAccount): Uint8Array;
    toProtoMsg(message: EventCreateClawbackVestingAccount): EventCreateClawbackVestingAccountProtoMsg;
};
export declare const EventFundVestingAccount: {
    typeUrl: string;
    encode(message: EventFundVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventFundVestingAccount;
    fromJSON(object: any): EventFundVestingAccount;
    toJSON(message: EventFundVestingAccount): unknown;
    fromPartial(object: Partial<EventFundVestingAccount>): EventFundVestingAccount;
    fromAmino(object: EventFundVestingAccountAmino): EventFundVestingAccount;
    toAmino(message: EventFundVestingAccount): EventFundVestingAccountAmino;
    fromAminoMsg(object: EventFundVestingAccountAminoMsg): EventFundVestingAccount;
    fromProtoMsg(message: EventFundVestingAccountProtoMsg): EventFundVestingAccount;
    toProto(message: EventFundVestingAccount): Uint8Array;
    toProtoMsg(message: EventFundVestingAccount): EventFundVestingAccountProtoMsg;
};
export declare const EventClawback: {
    typeUrl: string;
    encode(message: EventClawback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventClawback;
    fromJSON(object: any): EventClawback;
    toJSON(message: EventClawback): unknown;
    fromPartial(object: Partial<EventClawback>): EventClawback;
    fromAmino(object: EventClawbackAmino): EventClawback;
    toAmino(message: EventClawback): EventClawbackAmino;
    fromAminoMsg(object: EventClawbackAminoMsg): EventClawback;
    fromProtoMsg(message: EventClawbackProtoMsg): EventClawback;
    toProto(message: EventClawback): Uint8Array;
    toProtoMsg(message: EventClawback): EventClawbackProtoMsg;
};
export declare const EventUpdateVestingFunder: {
    typeUrl: string;
    encode(message: EventUpdateVestingFunder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateVestingFunder;
    fromJSON(object: any): EventUpdateVestingFunder;
    toJSON(message: EventUpdateVestingFunder): unknown;
    fromPartial(object: Partial<EventUpdateVestingFunder>): EventUpdateVestingFunder;
    fromAmino(object: EventUpdateVestingFunderAmino): EventUpdateVestingFunder;
    toAmino(message: EventUpdateVestingFunder): EventUpdateVestingFunderAmino;
    fromAminoMsg(object: EventUpdateVestingFunderAminoMsg): EventUpdateVestingFunder;
    fromProtoMsg(message: EventUpdateVestingFunderProtoMsg): EventUpdateVestingFunder;
    toProto(message: EventUpdateVestingFunder): Uint8Array;
    toProtoMsg(message: EventUpdateVestingFunder): EventUpdateVestingFunderProtoMsg;
};
