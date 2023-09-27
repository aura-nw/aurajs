import { ValidatorPreference, ValidatorPreferenceAmino, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference";
    value: Uint8Array;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceAmino {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreferenceAmino[];
}
export interface MsgSetValidatorSetPreferenceAminoMsg {
    type: "osmosis/valset-pref/MsgSetValidatorSetPreference";
    value: MsgSetValidatorSetPreferenceAmino;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
    delegator: string;
    preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {
}
export interface MsgSetValidatorSetPreferenceResponseProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse";
    value: Uint8Array;
}
export interface MsgSetValidatorSetPreferenceResponseAmino {
}
export interface MsgSetValidatorSetPreferenceResponseAminoMsg {
    type: "osmosis/valsetpref/set-validator-set-preference-response";
    value: MsgSetValidatorSetPreferenceResponseAmino;
}
export interface MsgSetValidatorSetPreferenceResponseSDKType {
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
    /** delegator is the user who is trying to delegate. */
    delegator: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     */
    coin: Coin;
}
export interface MsgDelegateToValidatorSetProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet";
    value: Uint8Array;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetAmino {
    /** delegator is the user who is trying to delegate. */
    delegator: string;
    /**
     * the amount of tokens the user is trying to delegate.
     * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
     * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
     * B, 2osmo to C.
     */
    coin?: CoinAmino;
}
export interface MsgDelegateToValidatorSetAminoMsg {
    type: "osmosis/valset-pref/MsgDelegateToValidatorSet";
    value: MsgDelegateToValidatorSetAmino;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
    delegator: string;
    coin: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {
}
export interface MsgDelegateToValidatorSetResponseProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse";
    value: Uint8Array;
}
export interface MsgDelegateToValidatorSetResponseAmino {
}
export interface MsgDelegateToValidatorSetResponseAminoMsg {
    type: "osmosis/valsetpref/delegate-to-validator-set-response";
    value: MsgDelegateToValidatorSetResponseAmino;
}
export interface MsgDelegateToValidatorSetResponseSDKType {
}
export interface MsgUndelegateFromValidatorSet {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     */
    coin: Coin;
}
export interface MsgUndelegateFromValidatorSetProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet";
    value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetAmino {
    /** delegator is the user who is trying to undelegate. */
    delegator: string;
    /**
     * the amount the user wants to undelegate
     * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
     * ValC
     * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
     * 3osmo from B, 2osmo from C
     */
    coin?: CoinAmino;
}
export interface MsgUndelegateFromValidatorSetAminoMsg {
    type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet";
    value: MsgUndelegateFromValidatorSetAmino;
}
export interface MsgUndelegateFromValidatorSetSDKType {
    delegator: string;
    coin: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {
}
export interface MsgUndelegateFromValidatorSetResponseProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse";
    value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetResponseAmino {
}
export interface MsgUndelegateFromValidatorSetResponseAminoMsg {
    type: "osmosis/valsetpref/undelegate-from-validator-set-response";
    value: MsgUndelegateFromValidatorSetResponseAmino;
}
export interface MsgUndelegateFromValidatorSetResponseSDKType {
}
export interface MsgRedelegateValidatorSet {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet";
    value: Uint8Array;
}
export interface MsgRedelegateValidatorSetAmino {
    /** delegator is the user who is trying to create a validator-set. */
    delegator: string;
    /** list of {valAddr, weight} to delegate to */
    preferences: ValidatorPreferenceAmino[];
}
export interface MsgRedelegateValidatorSetAminoMsg {
    type: "osmosis/valsetpref/redelegate-validator-set";
    value: MsgRedelegateValidatorSetAmino;
}
export interface MsgRedelegateValidatorSetSDKType {
    delegator: string;
    preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {
}
export interface MsgRedelegateValidatorSetResponseProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse";
    value: Uint8Array;
}
export interface MsgRedelegateValidatorSetResponseAmino {
}
export interface MsgRedelegateValidatorSetResponseAminoMsg {
    type: "osmosis/valsetpref/redelegate-validator-set-response";
    value: MsgRedelegateValidatorSetResponseAmino;
}
export interface MsgRedelegateValidatorSetResponseSDKType {
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
    /** delegator is the user who is trying to claim staking rewards. */
    delegator: string;
}
export interface MsgWithdrawDelegationRewardsProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards";
    value: Uint8Array;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsAmino {
    /** delegator is the user who is trying to claim staking rewards. */
    delegator: string;
}
export interface MsgWithdrawDelegationRewardsAminoMsg {
    type: "osmosis/valset-pref/MsgWithdrawDelegationRewards";
    value: MsgWithdrawDelegationRewardsAmino;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
    delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {
}
export interface MsgWithdrawDelegationRewardsResponseProtoMsg {
    typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse";
    value: Uint8Array;
}
export interface MsgWithdrawDelegationRewardsResponseAmino {
}
export interface MsgWithdrawDelegationRewardsResponseAminoMsg {
    type: "osmosis/valsetpref/withdraw-delegation-rewards-response";
    value: MsgWithdrawDelegationRewardsResponseAmino;
}
export interface MsgWithdrawDelegationRewardsResponseSDKType {
}
export declare const MsgSetValidatorSetPreference: {
    typeUrl: string;
    encode(message: MsgSetValidatorSetPreference, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreference;
    fromJSON(object: any): MsgSetValidatorSetPreference;
    toJSON(message: MsgSetValidatorSetPreference): unknown;
    fromPartial(object: Partial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference;
    fromAmino(object: MsgSetValidatorSetPreferenceAmino): MsgSetValidatorSetPreference;
    toAmino(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAmino;
    fromAminoMsg(object: MsgSetValidatorSetPreferenceAminoMsg): MsgSetValidatorSetPreference;
    toAminoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAminoMsg;
    fromProtoMsg(message: MsgSetValidatorSetPreferenceProtoMsg): MsgSetValidatorSetPreference;
    toProto(message: MsgSetValidatorSetPreference): Uint8Array;
    toProtoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceProtoMsg;
};
export declare const MsgSetValidatorSetPreferenceResponse: {
    typeUrl: string;
    encode(_: MsgSetValidatorSetPreferenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse;
    fromJSON(_: any): MsgSetValidatorSetPreferenceResponse;
    toJSON(_: MsgSetValidatorSetPreferenceResponse): unknown;
    fromPartial(_: Partial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse;
    fromAmino(_: MsgSetValidatorSetPreferenceResponseAmino): MsgSetValidatorSetPreferenceResponse;
    toAmino(_: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAmino;
    fromAminoMsg(object: MsgSetValidatorSetPreferenceResponseAminoMsg): MsgSetValidatorSetPreferenceResponse;
    toAminoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAminoMsg;
    fromProtoMsg(message: MsgSetValidatorSetPreferenceResponseProtoMsg): MsgSetValidatorSetPreferenceResponse;
    toProto(message: MsgSetValidatorSetPreferenceResponse): Uint8Array;
    toProtoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseProtoMsg;
};
export declare const MsgDelegateToValidatorSet: {
    typeUrl: string;
    encode(message: MsgDelegateToValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSet;
    fromJSON(object: any): MsgDelegateToValidatorSet;
    toJSON(message: MsgDelegateToValidatorSet): unknown;
    fromPartial(object: Partial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet;
    fromAmino(object: MsgDelegateToValidatorSetAmino): MsgDelegateToValidatorSet;
    toAmino(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAmino;
    fromAminoMsg(object: MsgDelegateToValidatorSetAminoMsg): MsgDelegateToValidatorSet;
    toAminoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAminoMsg;
    fromProtoMsg(message: MsgDelegateToValidatorSetProtoMsg): MsgDelegateToValidatorSet;
    toProto(message: MsgDelegateToValidatorSet): Uint8Array;
    toProtoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetProtoMsg;
};
export declare const MsgDelegateToValidatorSetResponse: {
    typeUrl: string;
    encode(_: MsgDelegateToValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse;
    fromJSON(_: any): MsgDelegateToValidatorSetResponse;
    toJSON(_: MsgDelegateToValidatorSetResponse): unknown;
    fromPartial(_: Partial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse;
    fromAmino(_: MsgDelegateToValidatorSetResponseAmino): MsgDelegateToValidatorSetResponse;
    toAmino(_: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAmino;
    fromAminoMsg(object: MsgDelegateToValidatorSetResponseAminoMsg): MsgDelegateToValidatorSetResponse;
    toAminoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAminoMsg;
    fromProtoMsg(message: MsgDelegateToValidatorSetResponseProtoMsg): MsgDelegateToValidatorSetResponse;
    toProto(message: MsgDelegateToValidatorSetResponse): Uint8Array;
    toProtoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseProtoMsg;
};
export declare const MsgUndelegateFromValidatorSet: {
    typeUrl: string;
    encode(message: MsgUndelegateFromValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet;
    fromJSON(object: any): MsgUndelegateFromValidatorSet;
    toJSON(message: MsgUndelegateFromValidatorSet): unknown;
    fromPartial(object: Partial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet;
    fromAmino(object: MsgUndelegateFromValidatorSetAmino): MsgUndelegateFromValidatorSet;
    toAmino(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAmino;
    fromAminoMsg(object: MsgUndelegateFromValidatorSetAminoMsg): MsgUndelegateFromValidatorSet;
    toAminoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAminoMsg;
    fromProtoMsg(message: MsgUndelegateFromValidatorSetProtoMsg): MsgUndelegateFromValidatorSet;
    toProto(message: MsgUndelegateFromValidatorSet): Uint8Array;
    toProtoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetProtoMsg;
};
export declare const MsgUndelegateFromValidatorSetResponse: {
    typeUrl: string;
    encode(_: MsgUndelegateFromValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse;
    fromJSON(_: any): MsgUndelegateFromValidatorSetResponse;
    toJSON(_: MsgUndelegateFromValidatorSetResponse): unknown;
    fromPartial(_: Partial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse;
    fromAmino(_: MsgUndelegateFromValidatorSetResponseAmino): MsgUndelegateFromValidatorSetResponse;
    toAmino(_: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAmino;
    fromAminoMsg(object: MsgUndelegateFromValidatorSetResponseAminoMsg): MsgUndelegateFromValidatorSetResponse;
    toAminoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAminoMsg;
    fromProtoMsg(message: MsgUndelegateFromValidatorSetResponseProtoMsg): MsgUndelegateFromValidatorSetResponse;
    toProto(message: MsgUndelegateFromValidatorSetResponse): Uint8Array;
    toProtoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseProtoMsg;
};
export declare const MsgRedelegateValidatorSet: {
    typeUrl: string;
    encode(message: MsgRedelegateValidatorSet, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSet;
    fromJSON(object: any): MsgRedelegateValidatorSet;
    toJSON(message: MsgRedelegateValidatorSet): unknown;
    fromPartial(object: Partial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet;
    fromAmino(object: MsgRedelegateValidatorSetAmino): MsgRedelegateValidatorSet;
    toAmino(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAmino;
    fromAminoMsg(object: MsgRedelegateValidatorSetAminoMsg): MsgRedelegateValidatorSet;
    toAminoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAminoMsg;
    fromProtoMsg(message: MsgRedelegateValidatorSetProtoMsg): MsgRedelegateValidatorSet;
    toProto(message: MsgRedelegateValidatorSet): Uint8Array;
    toProtoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetProtoMsg;
};
export declare const MsgRedelegateValidatorSetResponse: {
    typeUrl: string;
    encode(_: MsgRedelegateValidatorSetResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse;
    fromJSON(_: any): MsgRedelegateValidatorSetResponse;
    toJSON(_: MsgRedelegateValidatorSetResponse): unknown;
    fromPartial(_: Partial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse;
    fromAmino(_: MsgRedelegateValidatorSetResponseAmino): MsgRedelegateValidatorSetResponse;
    toAmino(_: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAmino;
    fromAminoMsg(object: MsgRedelegateValidatorSetResponseAminoMsg): MsgRedelegateValidatorSetResponse;
    toAminoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAminoMsg;
    fromProtoMsg(message: MsgRedelegateValidatorSetResponseProtoMsg): MsgRedelegateValidatorSetResponse;
    toProto(message: MsgRedelegateValidatorSetResponse): Uint8Array;
    toProtoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseProtoMsg;
};
export declare const MsgWithdrawDelegationRewards: {
    typeUrl: string;
    encode(message: MsgWithdrawDelegationRewards, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewards;
    fromJSON(object: any): MsgWithdrawDelegationRewards;
    toJSON(message: MsgWithdrawDelegationRewards): unknown;
    fromPartial(object: Partial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards;
    fromAmino(object: MsgWithdrawDelegationRewardsAmino): MsgWithdrawDelegationRewards;
    toAmino(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAmino;
    fromAminoMsg(object: MsgWithdrawDelegationRewardsAminoMsg): MsgWithdrawDelegationRewards;
    toAminoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegationRewardsProtoMsg): MsgWithdrawDelegationRewards;
    toProto(message: MsgWithdrawDelegationRewards): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsProtoMsg;
};
export declare const MsgWithdrawDelegationRewardsResponse: {
    typeUrl: string;
    encode(_: MsgWithdrawDelegationRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse;
    fromJSON(_: any): MsgWithdrawDelegationRewardsResponse;
    toJSON(_: MsgWithdrawDelegationRewardsResponse): unknown;
    fromPartial(_: Partial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse;
    fromAmino(_: MsgWithdrawDelegationRewardsResponseAmino): MsgWithdrawDelegationRewardsResponse;
    toAmino(_: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAmino;
    fromAminoMsg(object: MsgWithdrawDelegationRewardsResponseAminoMsg): MsgWithdrawDelegationRewardsResponse;
    toAminoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawDelegationRewardsResponseProtoMsg): MsgWithdrawDelegationRewardsResponse;
    toProto(message: MsgWithdrawDelegationRewardsResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseProtoMsg;
};
