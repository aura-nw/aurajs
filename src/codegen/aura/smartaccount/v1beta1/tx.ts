import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
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
  creator?: string;
  /** smart-account address that need update */
  address?: string;
  /** New PubKey using for signature verification of this account */
  public_key?: AnyAmino;
  /** Credentials */
  credentials?: string;
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
export interface MsgRecoverResponse {}
export interface MsgRecoverResponseProtoMsg {
  typeUrl: "/aura.smartaccount.v1beta1.MsgRecoverResponse";
  value: Uint8Array;
}
export interface MsgRecoverResponseAmino {}
export interface MsgRecoverResponseAminoMsg {
  type: "/aura.smartaccount.v1beta1.MsgRecoverResponse";
  value: MsgRecoverResponseAmino;
}
export interface MsgRecoverResponseSDKType {}
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
  publicKey?: Any;
}
export interface MsgActivateAccountProtoMsg {
  typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount";
  value: Uint8Array;
}
export interface MsgActivateAccountAmino {
  /** AccountAddress is the actor who signs the message */
  account_address?: string;
  /** CodeID indicates which wasm binary code is to be used for this contract */
  code_id?: string;
  /** an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt?: string;
  /** InitMsg is the JSON-encoded instantiate message for the contract */
  init_msg?: string;
  /** Public key of smart account */
  public_key?: AnyAmino;
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
  public_key?: AnySDKType;
}
export interface MsgActivateAccountResponse {
  address: string;
}
export interface MsgActivateAccountResponseProtoMsg {
  typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccountResponse";
  value: Uint8Array;
}
export interface MsgActivateAccountResponseAmino {
  address?: string;
}
export interface MsgActivateAccountResponseAminoMsg {
  type: "/aura.smartaccount.v1beta1.MsgActivateAccountResponse";
  value: MsgActivateAccountResponseAmino;
}
export interface MsgActivateAccountResponseSDKType {
  address: string;
}
function createBaseMsgRecover(): MsgRecover {
  return {
    creator: "",
    address: "",
    publicKey: undefined,
    credentials: ""
  };
}
export const MsgRecover = {
  typeUrl: "/aura.smartaccount.v1beta1.MsgRecover",
  encode(message: MsgRecover, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(26).fork()).ldelim();
    }
    if (message.credentials !== "") {
      writer.uint32(34).string(message.credentials);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecover {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecover();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.credentials = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecover {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
      credentials: isSet(object.credentials) ? String(object.credentials) : ""
    };
  },
  toJSON(message: MsgRecover): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.credentials !== undefined && (obj.credentials = message.credentials);
    return obj;
  },
  fromPartial(object: Partial<MsgRecover>): MsgRecover {
    const message = createBaseMsgRecover();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.credentials = object.credentials ?? "";
    return message;
  },
  fromAmino(object: MsgRecoverAmino): MsgRecover {
    const message = createBaseMsgRecover();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.public_key !== undefined && object.public_key !== null) {
      message.publicKey = Any.fromAmino(object.public_key);
    }
    if (object.credentials !== undefined && object.credentials !== null) {
      message.credentials = object.credentials;
    }
    return message;
  },
  toAmino(message: MsgRecover): MsgRecoverAmino {
    const obj: any = {};
    obj.creator = message.creator;
    obj.address = message.address;
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    obj.credentials = message.credentials;
    return obj;
  },
  fromAminoMsg(object: MsgRecoverAminoMsg): MsgRecover {
    return MsgRecover.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecoverProtoMsg): MsgRecover {
    return MsgRecover.decode(message.value);
  },
  toProto(message: MsgRecover): Uint8Array {
    return MsgRecover.encode(message).finish();
  },
  toProtoMsg(message: MsgRecover): MsgRecoverProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.MsgRecover",
      value: MsgRecover.encode(message).finish()
    };
  }
};
function createBaseMsgRecoverResponse(): MsgRecoverResponse {
  return {};
}
export const MsgRecoverResponse = {
  typeUrl: "/aura.smartaccount.v1beta1.MsgRecoverResponse",
  encode(_: MsgRecoverResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecoverResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRecoverResponse {
    return {};
  },
  toJSON(_: MsgRecoverResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRecoverResponse>): MsgRecoverResponse {
    const message = createBaseMsgRecoverResponse();
    return message;
  },
  fromAmino(_: MsgRecoverResponseAmino): MsgRecoverResponse {
    const message = createBaseMsgRecoverResponse();
    return message;
  },
  toAmino(_: MsgRecoverResponse): MsgRecoverResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRecoverResponseAminoMsg): MsgRecoverResponse {
    return MsgRecoverResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRecoverResponseProtoMsg): MsgRecoverResponse {
    return MsgRecoverResponse.decode(message.value);
  },
  toProto(message: MsgRecoverResponse): Uint8Array {
    return MsgRecoverResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoverResponse): MsgRecoverResponseProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.MsgRecoverResponse",
      value: MsgRecoverResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivateAccount(): MsgActivateAccount {
  return {
    accountAddress: "",
    codeId: Long.UZERO,
    salt: new Uint8Array(),
    initMsg: new Uint8Array(),
    publicKey: undefined
  };
}
export const MsgActivateAccount = {
  typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount",
  encode(message: MsgActivateAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.salt.length !== 0) {
      writer.uint32(18).bytes(message.salt);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 3:
          message.codeId = (reader.uint64() as Long);
          break;
        case 2:
          message.salt = reader.bytes();
          break;
        case 5:
          message.initMsg = reader.bytes();
          break;
        case 4:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgActivateAccount {
    return {
      accountAddress: isSet(object.accountAddress) ? String(object.accountAddress) : "",
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(),
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined
    };
  },
  toJSON(message: MsgActivateAccount): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.initMsg !== undefined && (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array()));
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgActivateAccount>): MsgActivateAccount {
    const message = createBaseMsgActivateAccount();
    message.accountAddress = object.accountAddress ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.salt = object.salt ?? new Uint8Array();
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    return message;
  },
  fromAmino(object: MsgActivateAccountAmino): MsgActivateAccount {
    const message = createBaseMsgActivateAccount();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = Long.fromString(object.code_id);
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = bytesFromBase64(object.salt);
    }
    if (object.init_msg !== undefined && object.init_msg !== null) {
      message.initMsg = bytesFromBase64(object.init_msg);
    }
    if (object.public_key !== undefined && object.public_key !== null) {
      message.publicKey = Any.fromAmino(object.public_key);
    }
    return message;
  },
  toAmino(message: MsgActivateAccount): MsgActivateAccountAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
    obj.init_msg = message.initMsg ? base64FromBytes(message.initMsg) : undefined;
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgActivateAccountAminoMsg): MsgActivateAccount {
    return MsgActivateAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateAccountProtoMsg): MsgActivateAccount {
    return MsgActivateAccount.decode(message.value);
  },
  toProto(message: MsgActivateAccount): Uint8Array {
    return MsgActivateAccount.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateAccount): MsgActivateAccountProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccount",
      value: MsgActivateAccount.encode(message).finish()
    };
  }
};
function createBaseMsgActivateAccountResponse(): MsgActivateAccountResponse {
  return {
    address: ""
  };
}
export const MsgActivateAccountResponse = {
  typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccountResponse",
  encode(message: MsgActivateAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgActivateAccountResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: MsgActivateAccountResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<MsgActivateAccountResponse>): MsgActivateAccountResponse {
    const message = createBaseMsgActivateAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: MsgActivateAccountResponseAmino): MsgActivateAccountResponse {
    const message = createBaseMsgActivateAccountResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: MsgActivateAccountResponse): MsgActivateAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: MsgActivateAccountResponseAminoMsg): MsgActivateAccountResponse {
    return MsgActivateAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateAccountResponseProtoMsg): MsgActivateAccountResponse {
    return MsgActivateAccountResponse.decode(message.value);
  },
  toProto(message: MsgActivateAccountResponse): Uint8Array {
    return MsgActivateAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateAccountResponse): MsgActivateAccountResponseProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.MsgActivateAccountResponse",
      value: MsgActivateAccountResponse.encode(message).finish()
    };
  }
};