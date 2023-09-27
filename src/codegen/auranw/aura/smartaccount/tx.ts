import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface MsgRecover {
  /** Sender is the actor who signs the message */
  creator: string;
  /** smart-account address that need update */
  address: string;
  /** New PubKey using for signature verification of this account */
  publicKey: Any;
  /** Credentials */
  credentials: string;
}
export interface MsgRecoverProtoMsg {
  typeUrl: "/auranw.aura.smartaccount.MsgRecover";
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
  type: "/auranw.aura.smartaccount.MsgRecover";
  value: MsgRecoverAmino;
}
export interface MsgRecoverSDKType {
  creator: string;
  address: string;
  public_key: AnySDKType;
  credentials: string;
}
export interface MsgRecoverResponse {}
export interface MsgRecoverResponseProtoMsg {
  typeUrl: "/auranw.aura.smartaccount.MsgRecoverResponse";
  value: Uint8Array;
}
export interface MsgRecoverResponseAmino {}
export interface MsgRecoverResponseAminoMsg {
  type: "/auranw.aura.smartaccount.MsgRecoverResponse";
  value: MsgRecoverResponseAmino;
}
export interface MsgRecoverResponseSDKType {}
export interface MsgActivateAccount {
  /** AccountAddress is the actor who signs the message */
  accountAddress: string;
  /** CodeID indicates which wasm binary code is to be used for this contract */
  codeId: bigint;
  /** an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /** InitMsg is the JSON-encoded instantiate message for the contract */
  initMsg: Uint8Array;
  /** Public key of smart account */
  pubKey: Any;
}
export interface MsgActivateAccountProtoMsg {
  typeUrl: "/auranw.aura.smartaccount.MsgActivateAccount";
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
  type: "/auranw.aura.smartaccount.MsgActivateAccount";
  value: MsgActivateAccountAmino;
}
export interface MsgActivateAccountSDKType {
  account_address: string;
  code_id: bigint;
  salt: Uint8Array;
  init_msg: Uint8Array;
  pub_key: AnySDKType;
}
export interface MsgActivateAccountResponse {
  address: string;
}
export interface MsgActivateAccountResponseProtoMsg {
  typeUrl: "/auranw.aura.smartaccount.MsgActivateAccountResponse";
  value: Uint8Array;
}
export interface MsgActivateAccountResponseAmino {
  address: string;
}
export interface MsgActivateAccountResponseAminoMsg {
  type: "/auranw.aura.smartaccount.MsgActivateAccountResponse";
  value: MsgActivateAccountResponseAmino;
}
export interface MsgActivateAccountResponseSDKType {
  address: string;
}
function createBaseMsgRecover(): MsgRecover {
  return {
    creator: "",
    address: "",
    publicKey: Any.fromPartial({}),
    credentials: ""
  };
}
export const MsgRecover = {
  typeUrl: "/auranw.aura.smartaccount.MsgRecover",
  encode(message: MsgRecover, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecover {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      creator: object.creator,
      address: object.address,
      publicKey: object?.public_key ? Any.fromAmino(object.public_key) : undefined,
      credentials: object.credentials
    };
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
      typeUrl: "/auranw.aura.smartaccount.MsgRecover",
      value: MsgRecover.encode(message).finish()
    };
  }
};
function createBaseMsgRecoverResponse(): MsgRecoverResponse {
  return {};
}
export const MsgRecoverResponse = {
  typeUrl: "/auranw.aura.smartaccount.MsgRecoverResponse",
  encode(_: MsgRecoverResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {};
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
      typeUrl: "/auranw.aura.smartaccount.MsgRecoverResponse",
      value: MsgRecoverResponse.encode(message).finish()
    };
  }
};
function createBaseMsgActivateAccount(): MsgActivateAccount {
  return {
    accountAddress: "",
    codeId: BigInt(0),
    salt: new Uint8Array(),
    initMsg: new Uint8Array(),
    pubKey: Any.fromPartial({})
  };
}
export const MsgActivateAccount = {
  typeUrl: "/auranw.aura.smartaccount.MsgActivateAccount",
  encode(message: MsgActivateAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    if (message.codeId !== BigInt(0)) {
      writer.uint32(24).uint64(message.codeId);
    }
    if (message.salt.length !== 0) {
      writer.uint32(18).bytes(message.salt);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(42).bytes(message.initMsg);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        case 3:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.salt = reader.bytes();
          break;
        case 5:
          message.initMsg = reader.bytes();
          break;
        case 4:
          message.pubKey = Any.decode(reader, reader.uint32());
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
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined
    };
  },
  toJSON(message: MsgActivateAccount): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    message.codeId !== undefined && (obj.codeId = (message.codeId || BigInt(0)).toString());
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.initMsg !== undefined && (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array()));
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgActivateAccount>): MsgActivateAccount {
    const message = createBaseMsgActivateAccount();
    message.accountAddress = object.accountAddress ?? "";
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.salt = object.salt ?? new Uint8Array();
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    return message;
  },
  fromAmino(object: MsgActivateAccountAmino): MsgActivateAccount {
    return {
      accountAddress: object.account_address,
      codeId: BigInt(object.code_id),
      salt: object.salt,
      initMsg: object.init_msg,
      pubKey: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined
    };
  },
  toAmino(message: MsgActivateAccount): MsgActivateAccountAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress;
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.salt = message.salt;
    obj.init_msg = message.initMsg;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
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
      typeUrl: "/auranw.aura.smartaccount.MsgActivateAccount",
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
  typeUrl: "/auranw.aura.smartaccount.MsgActivateAccountResponse",
  encode(message: MsgActivateAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    return {
      address: object.address
    };
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
      typeUrl: "/auranw.aura.smartaccount.MsgActivateAccountResponse",
      value: MsgActivateAccountResponse.encode(message).finish()
    };
  }
};