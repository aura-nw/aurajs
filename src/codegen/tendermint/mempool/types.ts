import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, isSet } from "../../helpers";
export interface Txs {
  txs: Uint8Array[];
}
export interface TxsProtoMsg {
  typeUrl: "/tendermint.mempool.Txs";
  value: Uint8Array;
}
export interface TxsAmino {
  txs: Uint8Array[];
}
export interface TxsAminoMsg {
  type: "/tendermint.mempool.Txs";
  value: TxsAmino;
}
export interface TxsSDKType {
  txs: Uint8Array[];
}
export interface Message {
  txs?: Txs;
}
export interface MessageProtoMsg {
  typeUrl: "/tendermint.mempool.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  txs?: TxsAmino;
}
export interface MessageAminoMsg {
  type: "/tendermint.mempool.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  txs?: TxsSDKType;
}
function createBaseTxs(): Txs {
  return {
    txs: []
  };
}
export const Txs = {
  typeUrl: "/tendermint.mempool.Txs",
  encode(message: Txs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Txs {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Txs {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: Txs): unknown {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Txs>): Txs {
    const message = createBaseTxs();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: TxsAmino): Txs {
    return {
      txs: Array.isArray(object?.txs) ? object.txs.map((e: any) => e) : []
    };
  },
  toAmino(message: Txs): TxsAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e);
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromAminoMsg(object: TxsAminoMsg): Txs {
    return Txs.fromAmino(object.value);
  },
  fromProtoMsg(message: TxsProtoMsg): Txs {
    return Txs.decode(message.value);
  },
  toProto(message: Txs): Uint8Array {
    return Txs.encode(message).finish();
  },
  toProtoMsg(message: Txs): TxsProtoMsg {
    return {
      typeUrl: "/tendermint.mempool.Txs",
      value: Txs.encode(message).finish()
    };
  }
};
function createBaseMessage(): Message {
  return {
    txs: undefined
  };
}
export const Message = {
  typeUrl: "/tendermint.mempool.Message",
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txs !== undefined) {
      Txs.encode(message.txs, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs = Txs.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Message {
    return {
      txs: isSet(object.txs) ? Txs.fromJSON(object.txs) : undefined
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.txs !== undefined && (obj.txs = message.txs ? Txs.toJSON(message.txs) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.txs = object.txs !== undefined && object.txs !== null ? Txs.fromPartial(object.txs) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    return {
      txs: object?.txs ? Txs.fromAmino(object.txs) : undefined
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.txs = message.txs ? Txs.toAmino(message.txs) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageAminoMsg): Message {
    return Message.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageProtoMsg): Message {
    return Message.decode(message.value);
  },
  toProto(message: Message): Uint8Array {
    return Message.encode(message).finish();
  },
  toProtoMsg(message: Message): MessageProtoMsg {
    return {
      typeUrl: "/tendermint.mempool.Message",
      value: Message.encode(message).finish()
    };
  }
};