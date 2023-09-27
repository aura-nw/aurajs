import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * SmartAccount is a smart contract that is capable of initiating txs.
 *
 * This account type is similar to BaseAccount
 */
export interface SmartAccount {
    $typeUrl?: string;
    address: string;
    pubKey: Any;
    accountNumber: bigint;
    sequence: bigint;
}
export interface SmartAccountProtoMsg {
    typeUrl: "/auranw.aura.smartaccount.SmartAccount";
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
    type: "/auranw.aura.smartaccount.SmartAccount";
    value: SmartAccountAmino;
}
/**
 * SmartAccount is a smart contract that is capable of initiating txs.
 *
 * This account type is similar to BaseAccount
 */
export interface SmartAccountSDKType {
    $typeUrl?: string;
    address: string;
    pub_key: AnySDKType;
    account_number: bigint;
    sequence: bigint;
}
export declare const SmartAccount: {
    typeUrl: string;
    encode(message: SmartAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SmartAccount;
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
