import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgRecover {
    /** Sender is the actor who signs the message */
    creator: string;
    /** smart-account address that need update */
    address: string;
    /** New PubKey using for signature verification of this account */
    publicKey?: Any;
    /** Credentials */
    credentials: string;
}
export interface MsgRecoverProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.MsgRecover";
    value: Uint8Array;
}
export interface MsgRecoverAmino {
    /** Sender is the actor who signs the message */
    creator: string;
    /** smart-account address that need update */
    address: string;
    /** New PubKey using for signature verification of this account */
    public_key?: AnyAmino;
    /** Credentials */
    credentials: string;
}
export interface MsgRecoverAminoMsg {
    type: "/aura.smartaccount.v1beta1.MsgRecover";
    value: MsgRecoverAmino;
}
export interface MsgRecoverSDKType {
    creator: string;
    address: string;
    public_key?: AnySDKType;
    credentials: string;
}
export interface MsgRecoverResponse {
}
export interface MsgRecoverResponseProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.MsgRecoverResponse";
    value: Uint8Array;
}
export interface MsgRecoverResponseAmino {
}
export interface MsgRecoverResponseAminoMsg {
    type: "/aura.smartaccount.v1beta1.MsgRecoverResponse";
    value: MsgRecoverResponseAmino;
}
export interface MsgRecoverResponseSDKType {
}
export interface MsgActivateAccount {
    /** AccountAddress is the actor who signs the message */
    accountAddress: string;
    /** CodeID indicates which wasm binary code is to be used for this contract */
    codeId: Long;
    /** an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /** InitMsg is the JSON-encoded instantiate message for the contract */
    initMsg: Uint8Array;
    /** Public key of smart account */
    pubKey?: Any;
}
export interface MsgActivateAccountProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount";
    value: Uint8Array;
}
export interface MsgActivateAccountAmino {
    /** AccountAddress is the actor who signs the message */
    account_address: string;
    /** CodeID indicates which wasm binary code is to be used for this contract */
    code_id: string;
    /** an arbitrary value provided by the sender. Size can be 1 to 64. */
    salt: Uint8Array;
    /** InitMsg is the JSON-encoded instantiate message for the contract */
    init_msg: Uint8Array;
    /** Public key of smart account */
    pub_key?: AnyAmino;
}
export interface MsgActivateAccountAminoMsg {
    type: "/aura.smartaccount.v1beta1.MsgActivateAccount";
    value: MsgActivateAccountAmino;
}
export interface MsgActivateAccountSDKType {
    account_address: string;
    code_id: Long;
    salt: Uint8Array;
    init_msg: Uint8Array;
    pub_key?: AnySDKType;
}
export interface MsgActivateAccountResponse {
    address: string;
}
export interface MsgActivateAccountResponseProtoMsg {
    typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccountResponse";
    value: Uint8Array;
}
export interface MsgActivateAccountResponseAmino {
    address: string;
}
export interface MsgActivateAccountResponseAminoMsg {
    type: "/aura.smartaccount.v1beta1.MsgActivateAccountResponse";
    value: MsgActivateAccountResponseAmino;
}
export interface MsgActivateAccountResponseSDKType {
    address: string;
}
export declare const MsgRecover: {
    typeUrl: string;
    encode(message: MsgRecover, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecover;
    fromJSON(object: any): MsgRecover;
    toJSON(message: MsgRecover): unknown;
    fromPartial(object: Partial<MsgRecover>): MsgRecover;
    fromAmino(object: MsgRecoverAmino): MsgRecover;
    toAmino(message: MsgRecover): MsgRecoverAmino;
    fromAminoMsg(object: MsgRecoverAminoMsg): MsgRecover;
    fromProtoMsg(message: MsgRecoverProtoMsg): MsgRecover;
    toProto(message: MsgRecover): Uint8Array;
    toProtoMsg(message: MsgRecover): MsgRecoverProtoMsg;
};
export declare const MsgRecoverResponse: {
    typeUrl: string;
    encode(_: MsgRecoverResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecoverResponse;
    fromJSON(_: any): MsgRecoverResponse;
    toJSON(_: MsgRecoverResponse): unknown;
    fromPartial(_: Partial<MsgRecoverResponse>): MsgRecoverResponse;
    fromAmino(_: MsgRecoverResponseAmino): MsgRecoverResponse;
    toAmino(_: MsgRecoverResponse): MsgRecoverResponseAmino;
    fromAminoMsg(object: MsgRecoverResponseAminoMsg): MsgRecoverResponse;
    fromProtoMsg(message: MsgRecoverResponseProtoMsg): MsgRecoverResponse;
    toProto(message: MsgRecoverResponse): Uint8Array;
    toProtoMsg(message: MsgRecoverResponse): MsgRecoverResponseProtoMsg;
};
export declare const MsgActivateAccount: {
    typeUrl: string;
    encode(message: MsgActivateAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateAccount;
    fromJSON(object: any): MsgActivateAccount;
    toJSON(message: MsgActivateAccount): unknown;
    fromPartial(object: Partial<MsgActivateAccount>): MsgActivateAccount;
    fromAmino(object: MsgActivateAccountAmino): MsgActivateAccount;
    toAmino(message: MsgActivateAccount): MsgActivateAccountAmino;
    fromAminoMsg(object: MsgActivateAccountAminoMsg): MsgActivateAccount;
    fromProtoMsg(message: MsgActivateAccountProtoMsg): MsgActivateAccount;
    toProto(message: MsgActivateAccount): Uint8Array;
    toProtoMsg(message: MsgActivateAccount): MsgActivateAccountProtoMsg;
};
export declare const MsgActivateAccountResponse: {
    typeUrl: string;
    encode(message: MsgActivateAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateAccountResponse;
    fromJSON(object: any): MsgActivateAccountResponse;
    toJSON(message: MsgActivateAccountResponse): unknown;
    fromPartial(object: Partial<MsgActivateAccountResponse>): MsgActivateAccountResponse;
    fromAmino(object: MsgActivateAccountResponseAmino): MsgActivateAccountResponse;
    toAmino(message: MsgActivateAccountResponse): MsgActivateAccountResponseAmino;
    fromAminoMsg(object: MsgActivateAccountResponseAminoMsg): MsgActivateAccountResponse;
    fromProtoMsg(message: MsgActivateAccountResponseProtoMsg): MsgActivateAccountResponse;
    toProto(message: MsgActivateAccountResponse): Uint8Array;
    toProtoMsg(message: MsgActivateAccountResponse): MsgActivateAccountResponseProtoMsg;
};
