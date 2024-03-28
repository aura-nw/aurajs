import { Period, PeriodAmino, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccount {
    /** funder_address specifies the account that will be able to fund the vesting account */
    funderAddress: string;
    /** vesting_address specifies the address that will receive the vesting tokens */
    vestingAddress: string;
    /** enable_gov_clawback specifies whether the governance module can clawback this account */
    enableGovClawback: boolean;
}
export interface MsgCreateClawbackVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount";
    value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccountAmino {
    /** funder_address specifies the account that will be able to fund the vesting account */
    funder_address?: string;
    /** vesting_address specifies the address that will receive the vesting tokens */
    vesting_address?: string;
    /** enable_gov_clawback specifies whether the governance module can clawback this account */
    enable_gov_clawback?: boolean;
}
export interface MsgCreateClawbackVestingAccountAminoMsg {
    type: "/evmos.vesting.v2.MsgCreateClawbackVestingAccount";
    value: MsgCreateClawbackVestingAccountAmino;
}
/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 */
export interface MsgCreateClawbackVestingAccountSDKType {
    funder_address: string;
    vesting_address: string;
    enable_gov_clawback: boolean;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponse {
}
export interface MsgCreateClawbackVestingAccountResponseProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgCreateClawbackVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseAmino {
}
export interface MsgCreateClawbackVestingAccountResponseAminoMsg {
    type: "/evmos.vesting.v2.MsgCreateClawbackVestingAccountResponse";
    value: MsgCreateClawbackVestingAccountResponseAmino;
}
/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 */
export interface MsgCreateClawbackVestingAccountResponseSDKType {
}
/**
 * MsgFundVestingAccount defines a message that enables funding an existing clawback
 * vesting account.
 */
export interface MsgFundVestingAccount {
    /** funder_address specifies the account that funds the vesting account */
    funderAddress: string;
    /** vesting_address specifies the account that receives the funds */
    vestingAddress: string;
    /** start_time defines the time at which the vesting period begins */
    startTime: Date;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockupPeriods: Period[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vestingPeriods: Period[];
}
export interface MsgFundVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgFundVestingAccount";
    value: Uint8Array;
}
/**
 * MsgFundVestingAccount defines a message that enables funding an existing clawback
 * vesting account.
 */
export interface MsgFundVestingAccountAmino {
    /** funder_address specifies the account that funds the vesting account */
    funder_address?: string;
    /** vesting_address specifies the account that receives the funds */
    vesting_address?: string;
    /** start_time defines the time at which the vesting period begins */
    start_time?: string;
    /** lockup_periods defines the unlocking schedule relative to the start_time */
    lockup_periods?: PeriodAmino[];
    /** vesting_periods defines the vesting schedule relative to the start_time */
    vesting_periods?: PeriodAmino[];
}
export interface MsgFundVestingAccountAminoMsg {
    type: "/evmos.vesting.v2.MsgFundVestingAccount";
    value: MsgFundVestingAccountAmino;
}
/**
 * MsgFundVestingAccount defines a message that enables funding an existing clawback
 * vesting account.
 */
export interface MsgFundVestingAccountSDKType {
    funder_address: string;
    vesting_address: string;
    start_time: Date;
    lockup_periods: PeriodSDKType[];
    vesting_periods: PeriodSDKType[];
}
/**
 * MsgFundVestingAccountResponse defines the
 * MsgFundVestingAccount response type.
 */
export interface MsgFundVestingAccountResponse {
}
export interface MsgFundVestingAccountResponseProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgFundVestingAccountResponse";
    value: Uint8Array;
}
/**
 * MsgFundVestingAccountResponse defines the
 * MsgFundVestingAccount response type.
 */
export interface MsgFundVestingAccountResponseAmino {
}
export interface MsgFundVestingAccountResponseAminoMsg {
    type: "/evmos.vesting.v2.MsgFundVestingAccountResponse";
    value: MsgFundVestingAccountResponseAmino;
}
/**
 * MsgFundVestingAccountResponse defines the
 * MsgFundVestingAccount response type.
 */
export interface MsgFundVestingAccountResponseSDKType {
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawback {
    /** funder_address is the address which funded the account */
    funderAddress: string;
    /**
     * account_address is the address of the ClawbackVestingAccount to claw back
     * from.
     */
    accountAddress: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    destAddress: string;
}
export interface MsgClawbackProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgClawback";
    value: Uint8Array;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackAmino {
    /** funder_address is the address which funded the account */
    funder_address?: string;
    /**
     * account_address is the address of the ClawbackVestingAccount to claw back
     * from.
     */
    account_address?: string;
    /**
     * dest_address specifies where the clawed-back tokens should be transferred
     * to. If empty, the tokens will be transferred back to the original funder of
     * the account.
     */
    dest_address?: string;
}
export interface MsgClawbackAminoMsg {
    type: "/evmos.vesting.v2.MsgClawback";
    value: MsgClawbackAmino;
}
/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 */
export interface MsgClawbackSDKType {
    funder_address: string;
    account_address: string;
    dest_address: string;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponse {
    /** coins is the slice of clawed back coins */
    coins: Coin[];
}
export interface MsgClawbackResponseProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgClawbackResponse";
    value: Uint8Array;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseAmino {
    /** coins is the slice of clawed back coins */
    coins?: CoinAmino[];
}
export interface MsgClawbackResponseAminoMsg {
    type: "/evmos.vesting.v2.MsgClawbackResponse";
    value: MsgClawbackResponseAmino;
}
/** MsgClawbackResponse defines the MsgClawback response type. */
export interface MsgClawbackResponseSDKType {
    coins: CoinSDKType[];
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunder {
    /** funder_address is the current funder address of the ClawbackVestingAccount */
    funderAddress: string;
    /** new_funder_address is the new address to replace the existing funder_address */
    newFunderAddress: string;
    /** vesting_address is the address of the ClawbackVestingAccount being updated */
    vestingAddress: string;
}
export interface MsgUpdateVestingFunderProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunder";
    value: Uint8Array;
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunderAmino {
    /** funder_address is the current funder address of the ClawbackVestingAccount */
    funder_address?: string;
    /** new_funder_address is the new address to replace the existing funder_address */
    new_funder_address?: string;
    /** vesting_address is the address of the ClawbackVestingAccount being updated */
    vesting_address?: string;
}
export interface MsgUpdateVestingFunderAminoMsg {
    type: "/evmos.vesting.v2.MsgUpdateVestingFunder";
    value: MsgUpdateVestingFunderAmino;
}
/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 */
export interface MsgUpdateVestingFunderSDKType {
    funder_address: string;
    new_funder_address: string;
    vesting_address: string;
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponse {
}
export interface MsgUpdateVestingFunderResponseProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgUpdateVestingFunderResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponseAmino {
}
export interface MsgUpdateVestingFunderResponseAminoMsg {
    type: "/evmos.vesting.v2.MsgUpdateVestingFunderResponse";
    value: MsgUpdateVestingFunderResponseAmino;
}
/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 */
export interface MsgUpdateVestingFunderResponseSDKType {
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to an eth account */
export interface MsgConvertVestingAccount {
    /** vesting_address is the address of the vesting account to convert */
    vestingAddress: string;
}
export interface MsgConvertVestingAccountProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccount";
    value: Uint8Array;
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to an eth account */
export interface MsgConvertVestingAccountAmino {
    /** vesting_address is the address of the vesting account to convert */
    vesting_address?: string;
}
export interface MsgConvertVestingAccountAminoMsg {
    type: "/evmos.vesting.v2.MsgConvertVestingAccount";
    value: MsgConvertVestingAccountAmino;
}
/** MsgConvertVestingAccount defines a message that enables converting a vesting account to an eth account */
export interface MsgConvertVestingAccountSDKType {
    vesting_address: string;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponse {
}
export interface MsgConvertVestingAccountResponseProtoMsg {
    typeUrl: "/evmos.vesting.v2.MsgConvertVestingAccountResponse";
    value: Uint8Array;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponseAmino {
}
export interface MsgConvertVestingAccountResponseAminoMsg {
    type: "/evmos.vesting.v2.MsgConvertVestingAccountResponse";
    value: MsgConvertVestingAccountResponseAmino;
}
/** MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type. */
export interface MsgConvertVestingAccountResponseSDKType {
}
export declare const MsgCreateClawbackVestingAccount: {
    typeUrl: string;
    encode(message: MsgCreateClawbackVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClawbackVestingAccount;
    fromJSON(object: any): MsgCreateClawbackVestingAccount;
    toJSON(message: MsgCreateClawbackVestingAccount): unknown;
    fromPartial(object: Partial<MsgCreateClawbackVestingAccount>): MsgCreateClawbackVestingAccount;
    fromAmino(object: MsgCreateClawbackVestingAccountAmino): MsgCreateClawbackVestingAccount;
    toAmino(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAmino;
    fromAminoMsg(object: MsgCreateClawbackVestingAccountAminoMsg): MsgCreateClawbackVestingAccount;
    fromProtoMsg(message: MsgCreateClawbackVestingAccountProtoMsg): MsgCreateClawbackVestingAccount;
    toProto(message: MsgCreateClawbackVestingAccount): Uint8Array;
    toProtoMsg(message: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountProtoMsg;
};
export declare const MsgCreateClawbackVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgCreateClawbackVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClawbackVestingAccountResponse;
    fromJSON(_: any): MsgCreateClawbackVestingAccountResponse;
    toJSON(_: MsgCreateClawbackVestingAccountResponse): unknown;
    fromPartial(_: Partial<MsgCreateClawbackVestingAccountResponse>): MsgCreateClawbackVestingAccountResponse;
    fromAmino(_: MsgCreateClawbackVestingAccountResponseAmino): MsgCreateClawbackVestingAccountResponse;
    toAmino(_: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseAmino;
    fromAminoMsg(object: MsgCreateClawbackVestingAccountResponseAminoMsg): MsgCreateClawbackVestingAccountResponse;
    fromProtoMsg(message: MsgCreateClawbackVestingAccountResponseProtoMsg): MsgCreateClawbackVestingAccountResponse;
    toProto(message: MsgCreateClawbackVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgCreateClawbackVestingAccountResponse): MsgCreateClawbackVestingAccountResponseProtoMsg;
};
export declare const MsgFundVestingAccount: {
    typeUrl: string;
    encode(message: MsgFundVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundVestingAccount;
    fromJSON(object: any): MsgFundVestingAccount;
    toJSON(message: MsgFundVestingAccount): unknown;
    fromPartial(object: Partial<MsgFundVestingAccount>): MsgFundVestingAccount;
    fromAmino(object: MsgFundVestingAccountAmino): MsgFundVestingAccount;
    toAmino(message: MsgFundVestingAccount): MsgFundVestingAccountAmino;
    fromAminoMsg(object: MsgFundVestingAccountAminoMsg): MsgFundVestingAccount;
    fromProtoMsg(message: MsgFundVestingAccountProtoMsg): MsgFundVestingAccount;
    toProto(message: MsgFundVestingAccount): Uint8Array;
    toProtoMsg(message: MsgFundVestingAccount): MsgFundVestingAccountProtoMsg;
};
export declare const MsgFundVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgFundVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundVestingAccountResponse;
    fromJSON(_: any): MsgFundVestingAccountResponse;
    toJSON(_: MsgFundVestingAccountResponse): unknown;
    fromPartial(_: Partial<MsgFundVestingAccountResponse>): MsgFundVestingAccountResponse;
    fromAmino(_: MsgFundVestingAccountResponseAmino): MsgFundVestingAccountResponse;
    toAmino(_: MsgFundVestingAccountResponse): MsgFundVestingAccountResponseAmino;
    fromAminoMsg(object: MsgFundVestingAccountResponseAminoMsg): MsgFundVestingAccountResponse;
    fromProtoMsg(message: MsgFundVestingAccountResponseProtoMsg): MsgFundVestingAccountResponse;
    toProto(message: MsgFundVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgFundVestingAccountResponse): MsgFundVestingAccountResponseProtoMsg;
};
export declare const MsgClawback: {
    typeUrl: string;
    encode(message: MsgClawback, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawback;
    fromJSON(object: any): MsgClawback;
    toJSON(message: MsgClawback): unknown;
    fromPartial(object: Partial<MsgClawback>): MsgClawback;
    fromAmino(object: MsgClawbackAmino): MsgClawback;
    toAmino(message: MsgClawback): MsgClawbackAmino;
    fromAminoMsg(object: MsgClawbackAminoMsg): MsgClawback;
    fromProtoMsg(message: MsgClawbackProtoMsg): MsgClawback;
    toProto(message: MsgClawback): Uint8Array;
    toProtoMsg(message: MsgClawback): MsgClawbackProtoMsg;
};
export declare const MsgClawbackResponse: {
    typeUrl: string;
    encode(message: MsgClawbackResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClawbackResponse;
    fromJSON(object: any): MsgClawbackResponse;
    toJSON(message: MsgClawbackResponse): unknown;
    fromPartial(object: Partial<MsgClawbackResponse>): MsgClawbackResponse;
    fromAmino(object: MsgClawbackResponseAmino): MsgClawbackResponse;
    toAmino(message: MsgClawbackResponse): MsgClawbackResponseAmino;
    fromAminoMsg(object: MsgClawbackResponseAminoMsg): MsgClawbackResponse;
    fromProtoMsg(message: MsgClawbackResponseProtoMsg): MsgClawbackResponse;
    toProto(message: MsgClawbackResponse): Uint8Array;
    toProtoMsg(message: MsgClawbackResponse): MsgClawbackResponseProtoMsg;
};
export declare const MsgUpdateVestingFunder: {
    typeUrl: string;
    encode(message: MsgUpdateVestingFunder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateVestingFunder;
    fromJSON(object: any): MsgUpdateVestingFunder;
    toJSON(message: MsgUpdateVestingFunder): unknown;
    fromPartial(object: Partial<MsgUpdateVestingFunder>): MsgUpdateVestingFunder;
    fromAmino(object: MsgUpdateVestingFunderAmino): MsgUpdateVestingFunder;
    toAmino(message: MsgUpdateVestingFunder): MsgUpdateVestingFunderAmino;
    fromAminoMsg(object: MsgUpdateVestingFunderAminoMsg): MsgUpdateVestingFunder;
    fromProtoMsg(message: MsgUpdateVestingFunderProtoMsg): MsgUpdateVestingFunder;
    toProto(message: MsgUpdateVestingFunder): Uint8Array;
    toProtoMsg(message: MsgUpdateVestingFunder): MsgUpdateVestingFunderProtoMsg;
};
export declare const MsgUpdateVestingFunderResponse: {
    typeUrl: string;
    encode(_: MsgUpdateVestingFunderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateVestingFunderResponse;
    fromJSON(_: any): MsgUpdateVestingFunderResponse;
    toJSON(_: MsgUpdateVestingFunderResponse): unknown;
    fromPartial(_: Partial<MsgUpdateVestingFunderResponse>): MsgUpdateVestingFunderResponse;
    fromAmino(_: MsgUpdateVestingFunderResponseAmino): MsgUpdateVestingFunderResponse;
    toAmino(_: MsgUpdateVestingFunderResponse): MsgUpdateVestingFunderResponseAmino;
    fromAminoMsg(object: MsgUpdateVestingFunderResponseAminoMsg): MsgUpdateVestingFunderResponse;
    fromProtoMsg(message: MsgUpdateVestingFunderResponseProtoMsg): MsgUpdateVestingFunderResponse;
    toProto(message: MsgUpdateVestingFunderResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateVestingFunderResponse): MsgUpdateVestingFunderResponseProtoMsg;
};
export declare const MsgConvertVestingAccount: {
    typeUrl: string;
    encode(message: MsgConvertVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertVestingAccount;
    fromJSON(object: any): MsgConvertVestingAccount;
    toJSON(message: MsgConvertVestingAccount): unknown;
    fromPartial(object: Partial<MsgConvertVestingAccount>): MsgConvertVestingAccount;
    fromAmino(object: MsgConvertVestingAccountAmino): MsgConvertVestingAccount;
    toAmino(message: MsgConvertVestingAccount): MsgConvertVestingAccountAmino;
    fromAminoMsg(object: MsgConvertVestingAccountAminoMsg): MsgConvertVestingAccount;
    fromProtoMsg(message: MsgConvertVestingAccountProtoMsg): MsgConvertVestingAccount;
    toProto(message: MsgConvertVestingAccount): Uint8Array;
    toProtoMsg(message: MsgConvertVestingAccount): MsgConvertVestingAccountProtoMsg;
};
export declare const MsgConvertVestingAccountResponse: {
    typeUrl: string;
    encode(_: MsgConvertVestingAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgConvertVestingAccountResponse;
    fromJSON(_: any): MsgConvertVestingAccountResponse;
    toJSON(_: MsgConvertVestingAccountResponse): unknown;
    fromPartial(_: Partial<MsgConvertVestingAccountResponse>): MsgConvertVestingAccountResponse;
    fromAmino(_: MsgConvertVestingAccountResponseAmino): MsgConvertVestingAccountResponse;
    toAmino(_: MsgConvertVestingAccountResponse): MsgConvertVestingAccountResponseAmino;
    fromAminoMsg(object: MsgConvertVestingAccountResponseAminoMsg): MsgConvertVestingAccountResponse;
    fromProtoMsg(message: MsgConvertVestingAccountResponseProtoMsg): MsgConvertVestingAccountResponse;
    toProto(message: MsgConvertVestingAccountResponse): Uint8Array;
    toProtoMsg(message: MsgConvertVestingAccountResponse): MsgConvertVestingAccountResponseProtoMsg;
};
