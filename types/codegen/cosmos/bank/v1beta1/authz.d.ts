import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorization {
    spendLimit: Coin[];
    /**
     * allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the
     * granter. If omitted, any recipient is allowed.
     *
     * Since: cosmos-sdk 0.47
     */
    allowList: string[];
}
export interface SendAuthorizationProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization";
    value: Uint8Array;
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationAmino {
    spend_limit: CoinAmino[];
    /**
     * allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the
     * granter. If omitted, any recipient is allowed.
     *
     * Since: cosmos-sdk 0.47
     */
    allow_list?: string[];
}
export interface SendAuthorizationAminoMsg {
    type: "cosmos-sdk/SendAuthorization";
    value: SendAuthorizationAmino;
}
/**
 * SendAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account.
 *
 * Since: cosmos-sdk 0.43
 */
export interface SendAuthorizationSDKType {
    spend_limit: CoinSDKType[];
    allow_list: string[];
}
export declare const SendAuthorization: {
    typeUrl: string;
    encode(message: SendAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SendAuthorization;
    fromJSON(object: any): SendAuthorization;
    toJSON(message: SendAuthorization): unknown;
    fromPartial(object: Partial<SendAuthorization>): SendAuthorization;
    fromAmino(object: SendAuthorizationAmino): SendAuthorization;
    toAmino(message: SendAuthorization): SendAuthorizationAmino;
    fromAminoMsg(object: SendAuthorizationAminoMsg): SendAuthorization;
    toAminoMsg(message: SendAuthorization): SendAuthorizationAminoMsg;
    fromProtoMsg(message: SendAuthorizationProtoMsg): SendAuthorization;
    toProto(message: SendAuthorization): Uint8Array;
    toProtoMsg(message: SendAuthorization): SendAuthorizationProtoMsg;
};
