import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  $typeUrl?: string;
  address: string;
  pub_key: AnySDKType;
  account_number: bigint;
  sequence: bigint;
}
function createBaseSmartAccount(): SmartAccount {
  return {
    $typeUrl: "/aura.smartaccount.v1beta1.SmartAccount",
    address: "",
    pubKey: Any.fromPartial({}),
    accountNumber: BigInt(0),
    sequence: BigInt(0)
  };
}
export const SmartAccount = {
  typeUrl: "/aura.smartaccount.v1beta1.SmartAccount",
  encode(message: SmartAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SmartAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.accountNumber = reader.uint64();
          break;
        case 4:
          message.sequence = reader.uint64();
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
      accountNumber: isSet(object.accountNumber) ? BigInt(object.accountNumber.toString()) : BigInt(0),
      sequence: isSet(object.sequence) ? BigInt(object.sequence.toString()) : BigInt(0)
    };
  },
  toJSON(message: SmartAccount): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.accountNumber !== undefined && (obj.accountNumber = (message.accountNumber || BigInt(0)).toString());
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<SmartAccount>): SmartAccount {
    const message = createBaseSmartAccount();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: SmartAccountAmino): SmartAccount {
    return {
      address: object.address,
      pubKey: object?.pub_key ? Any.fromAmino(object.pub_key) : undefined,
      accountNumber: BigInt(object.account_number),
      sequence: BigInt(object.sequence)
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