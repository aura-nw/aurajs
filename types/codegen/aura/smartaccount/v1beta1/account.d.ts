import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * SmartAccount is a smart contract that is capable of initiating txs.
 *
 * This account type is similar to BaseAccount
 */
export interface SmartAccount {
    address: string;
    pubKey?: Any;
    accountNumber: Long;
    sequence: Long;
}
export interface SmartAccountProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.SmartAccount";
    value: Uint8Array;
}
/**
 * SmartAccount is a smart contract that is capable of initiating txs.
 *
 * This account type is similar to BaseAccount
 */
export interface SmartAccountAmino {
    address: string;
    pub_key?: AnyAmino;
    account_number: string;
    sequence: string;
}
export interface SmartAccountAminoMsg {
    type: "/aura.smartaccount.v1beta1.SmartAccount";
    value: SmartAccountAmino;
}
/**
 * SmartAccount is a smart contract that is capable of initiating txs.
 *
 * This account type is similar to BaseAccount
 */
export interface SmartAccountSDKType {
    address: string;
    pub_key?: AnySDKType;
    account_number: Long;
    sequence: Long;
}
export declare const SmartAccount: {
    typeUrl: string;
    encode(message: SmartAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SmartAccount;
    fromJSON(object: any): SmartAccount;
    toJSON(message: SmartAccount): unknown;
    fromPartial(object: Partial<SmartAccount>): SmartAccount;
    fromAmino(object: SmartAccountAmino): SmartAccount;
    toAmino(message: SmartAccount): SmartAccountAmino;
    fromAminoMsg(object: SmartAccountAminoMsg): SmartAccount;
    fromProtoMsg(message: SmartAccountProtoMsg): SmartAccount;
    toProto(message: SmartAccount): Uint8Array;
    toProtoMsg(message: SmartAccount): SmartAccountProtoMsg;
};
