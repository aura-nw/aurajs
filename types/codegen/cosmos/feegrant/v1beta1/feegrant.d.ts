import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
    /**
     * spend_limit specifies the maximum amount of coins that can be spent
     * by this allowance and will be updated as coins are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spendLimit: Coin[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: Date;
}
export interface BasicAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.BasicAllowance";
    value: Uint8Array;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceAmino {
    /**
     * spend_limit specifies the maximum amount of coins that can be spent
     * by this allowance and will be updated as coins are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spend_limit: CoinAmino[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: string;
}
export interface BasicAllowanceAminoMsg {
    type: "cosmos-sdk/BasicAllowance";
    value: BasicAllowanceAmino;
}
/**
 * BasicAllowance implements Allowance with a one-time grant of coins
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceSDKType {
    spend_limit: CoinSDKType[];
    expiration?: Date;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
    /** basic specifies a struct of `BasicAllowance` */
    basic: BasicAllowance;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period: string;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    periodSpendLimit: Coin[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    periodCanSpend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    periodReset: Date;
}
export interface PeriodicAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.PeriodicAllowance";
    value: Uint8Array;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceAmino {
    /** basic specifies a struct of `BasicAllowance` */
    basic: BasicAllowanceAmino;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period: string;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    period_spend_limit: CoinAmino[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    period_can_spend: CoinAmino[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    period_reset: string;
}
export interface PeriodicAllowanceAminoMsg {
    type: "cosmos-sdk/PeriodicAllowance";
    value: PeriodicAllowanceAmino;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceSDKType {
    basic: BasicAllowanceSDKType;
    period: string;
    period_spend_limit: CoinSDKType[];
    period_can_spend: CoinSDKType[];
    period_reset: Date;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: Any;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowedMessages: string[];
}
export interface AllowedMsgAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance";
    value: Uint8Array;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceAmino {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: AnyAmino;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowed_messages?: string[];
}
export interface AllowedMsgAllowanceAminoMsg {
    type: "cosmos-sdk/AllowedMsgAllowance";
    value: AllowedMsgAllowanceAmino;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceSDKType {
    allowance?: AnySDKType;
    allowed_messages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: Any;
}
export interface GrantProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.Grant";
    value: Uint8Array;
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter?: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee?: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: AnyAmino;
}
export interface GrantAminoMsg {
    type: "cosmos-sdk/Grant";
    value: GrantAmino;
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantSDKType {
    granter: string;
    grantee: string;
    allowance?: AnySDKType;
}
/** AllowedContractAllowance creates allowance only for specified contract address. */
export interface AllowedContractAllowance {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: Any;
    /** allowed_address are the addresses for which the grantee has the access. */
    allowedAddress: string[];
}
export interface AllowedContractAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.AllowedContractAllowance";
    value: Uint8Array;
}
/** AllowedContractAllowance creates allowance only for specified contract address. */
export interface AllowedContractAllowanceAmino {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: AnyAmino;
    /** allowed_address are the addresses for which the grantee has the access. */
    allowed_address?: string[];
}
export interface AllowedContractAllowanceAminoMsg {
    type: "cosmos-sdk/AllowedContractAllowance";
    value: AllowedContractAllowanceAmino;
}
/** AllowedContractAllowance creates allowance only for specified contract address. */
export interface AllowedContractAllowanceSDKType {
    allowance?: AnySDKType;
    allowed_address: string[];
}
export declare const BasicAllowance: {
    typeUrl: string;
    encode(message: BasicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BasicAllowance;
    fromJSON(object: any): BasicAllowance;
    toJSON(message: BasicAllowance): unknown;
    fromPartial(object: Partial<BasicAllowance>): BasicAllowance;
    fromAmino(object: BasicAllowanceAmino): BasicAllowance;
    toAmino(message: BasicAllowance): BasicAllowanceAmino;
    fromAminoMsg(object: BasicAllowanceAminoMsg): BasicAllowance;
    toAminoMsg(message: BasicAllowance): BasicAllowanceAminoMsg;
    fromProtoMsg(message: BasicAllowanceProtoMsg): BasicAllowance;
    toProto(message: BasicAllowance): Uint8Array;
    toProtoMsg(message: BasicAllowance): BasicAllowanceProtoMsg;
};
export declare const PeriodicAllowance: {
    typeUrl: string;
    encode(message: PeriodicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicAllowance;
    fromJSON(object: any): PeriodicAllowance;
    toJSON(message: PeriodicAllowance): unknown;
    fromPartial(object: Partial<PeriodicAllowance>): PeriodicAllowance;
    fromAmino(object: PeriodicAllowanceAmino): PeriodicAllowance;
    toAmino(message: PeriodicAllowance): PeriodicAllowanceAmino;
    fromAminoMsg(object: PeriodicAllowanceAminoMsg): PeriodicAllowance;
    toAminoMsg(message: PeriodicAllowance): PeriodicAllowanceAminoMsg;
    fromProtoMsg(message: PeriodicAllowanceProtoMsg): PeriodicAllowance;
    toProto(message: PeriodicAllowance): Uint8Array;
    toProtoMsg(message: PeriodicAllowance): PeriodicAllowanceProtoMsg;
};
export declare const AllowedMsgAllowance: {
    typeUrl: string;
    encode(message: AllowedMsgAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedMsgAllowance;
    fromJSON(object: any): AllowedMsgAllowance;
    toJSON(message: AllowedMsgAllowance): unknown;
    fromPartial(object: Partial<AllowedMsgAllowance>): AllowedMsgAllowance;
    fromAmino(object: AllowedMsgAllowanceAmino): AllowedMsgAllowance;
    toAmino(message: AllowedMsgAllowance): AllowedMsgAllowanceAmino;
    fromAminoMsg(object: AllowedMsgAllowanceAminoMsg): AllowedMsgAllowance;
    toAminoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceAminoMsg;
    fromProtoMsg(message: AllowedMsgAllowanceProtoMsg): AllowedMsgAllowance;
    toProto(message: AllowedMsgAllowance): Uint8Array;
    toProtoMsg(message: AllowedMsgAllowance): AllowedMsgAllowanceProtoMsg;
};
export declare const Grant: {
    typeUrl: string;
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    fromPartial(object: Partial<Grant>): Grant;
    fromAmino(object: GrantAmino): Grant;
    toAmino(message: Grant): GrantAmino;
    fromAminoMsg(object: GrantAminoMsg): Grant;
    toAminoMsg(message: Grant): GrantAminoMsg;
    fromProtoMsg(message: GrantProtoMsg): Grant;
    toProto(message: Grant): Uint8Array;
    toProtoMsg(message: Grant): GrantProtoMsg;
};
export declare const AllowedContractAllowance: {
    typeUrl: string;
    encode(message: AllowedContractAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedContractAllowance;
    fromJSON(object: any): AllowedContractAllowance;
    toJSON(message: AllowedContractAllowance): unknown;
    fromPartial(object: Partial<AllowedContractAllowance>): AllowedContractAllowance;
    fromAmino(object: AllowedContractAllowanceAmino): AllowedContractAllowance;
    toAmino(message: AllowedContractAllowance): AllowedContractAllowanceAmino;
    fromAminoMsg(object: AllowedContractAllowanceAminoMsg): AllowedContractAllowance;
    toAminoMsg(message: AllowedContractAllowance): AllowedContractAllowanceAminoMsg;
    fromProtoMsg(message: AllowedContractAllowanceProtoMsg): AllowedContractAllowance;
    toProto(message: AllowedContractAllowance): Uint8Array;
    toProtoMsg(message: AllowedContractAllowance): AllowedContractAllowanceProtoMsg;
};
