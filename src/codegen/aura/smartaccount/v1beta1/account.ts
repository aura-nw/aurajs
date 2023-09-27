import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * SmartAccount is a smart contract that is capable of initiating txs.
 * 
 * This account type is similar to BaseAccount
 */
export interface SmartAccount {
  address: string;
  pubKey: Any;
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
  pub_key: AnySDKType;
  account_number: Long;
  sequence: Long;
}
function createBaseSmartAccount(): SmartAccount {
  return {
    address: "",
    pubKey: Any.fromPartial({}),
    accountNumber: Long.UZERO,
    sequence: Long.UZERO
  };
}
export const SmartAccount = {
  typeUrl: "/aura.smartaccount.v1beta1.SmartAccount",
  encode(message: SmartAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (!message.accountNumber.isZero()) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (!message.sequence.isZero()) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SmartAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSmartAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = (reader.uint64() as Long);
          break;
        case 4:
          message.sequence = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SmartAccount {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      accountNumber: isSet(object.accountNumber) ? Long.fromValue(object.accountNumber) : Long.UZERO,
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
    };
  },
  toJSON(message: SmartAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || Long.UZERO).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<SmartAccount>): SmartAccount {
    const message = createBaseSmartAccount();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? Long.fromValue(object.accountNumber) : Long.UZERO;
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    return message;
  },
  fromAmino(object: SmartAccountAmino): SmartAccount {
    return {
      address: object.address,
      pubKey: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
      accountNumber: Long.fromString(object.account_number),
      sequence: Long.fromString(object.sequence)
    };
  },
  toAmino(message: SmartAccount): SmartAccountAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.account_number = message.accountNumber ? message.accountNumber.toString() : undefined;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SmartAccountAminoMsg): SmartAccount {
    return SmartAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: SmartAccountProtoMsg): SmartAccount {
    return SmartAccount.decode(message.value);
  },
  toProto(message: SmartAccount): Uint8Array {
    return SmartAccount.encode(message).finish();
  },
  toProtoMsg(message: SmartAccount): SmartAccountProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.SmartAccount",
      value: SmartAccount.encode(message).finish()
    };
  }
};