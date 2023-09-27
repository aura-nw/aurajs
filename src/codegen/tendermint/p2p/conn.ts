import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface PacketPing {}
export interface PacketPingProtoMsg {
  typeUrl: "/tendermint.p2p.PacketPing";
  value: Uint8Array;
}
export interface PacketPingAmino {}
export interface PacketPingAminoMsg {
  type: "/tendermint.p2p.PacketPing";
  value: PacketPingAmino;
}
export interface PacketPingSDKType {}
export interface PacketPong {}
export interface PacketPongProtoMsg {
  typeUrl: "/tendermint.p2p.PacketPong";
  value: Uint8Array;
}
export interface PacketPongAmino {}
export interface PacketPongAminoMsg {
  type: "/tendermint.p2p.PacketPong";
  value: PacketPongAmino;
}
export interface PacketPongSDKType {}
export interface PacketMsg {
  channelId: number;
  eof: boolean;
  data: Uint8Array;
}
export interface PacketMsgProtoMsg {
  typeUrl: "/tendermint.p2p.PacketMsg";
  value: Uint8Array;
}
export interface PacketMsgAmino {
  channel_id: number;
  eof: boolean;
  data: Uint8Array;
}
export interface PacketMsgAminoMsg {
  type: "/tendermint.p2p.PacketMsg";
  value: PacketMsgAmino;
}
export interface PacketMsgSDKType {
  channel_id: number;
  eof: boolean;
  data: Uint8Array;
}
export interface Packet {
  packetPing?: PacketPing;
  packetPong?: PacketPong;
  packetMsg?: PacketMsg;
}
export interface PacketProtoMsg {
  typeUrl: "/tendermint.p2p.Packet";
  value: Uint8Array;
}
export interface PacketAmino {
  packet_ping?: PacketPingAmino;
  packet_pong?: PacketPongAmino;
  packet_msg?: PacketMsgAmino;
}
export interface PacketAminoMsg {
  type: "/tendermint.p2p.Packet";
  value: PacketAmino;
}
export interface PacketSDKType {
  packet_ping?: PacketPingSDKType;
  packet_pong?: PacketPongSDKType;
  packet_msg?: PacketMsgSDKType;
}
export interface AuthSigMessage {
  pubKey: PublicKey;
  sig: Uint8Array;
}
export interface AuthSigMessageProtoMsg {
  typeUrl: "/tendermint.p2p.AuthSigMessage";
  value: Uint8Array;
}
export interface AuthSigMessageAmino {
  pub_key?: PublicKeyAmino;
  sig: Uint8Array;
}
export interface AuthSigMessageAminoMsg {
  type: "/tendermint.p2p.AuthSigMessage";
  value: AuthSigMessageAmino;
}
export interface AuthSigMessageSDKType {
  pub_key: PublicKeySDKType;
  sig: Uint8Array;
}
function createBasePacketPing(): PacketPing {
  return {};
}
export const PacketPing = {
  typeUrl: "/tendermint.p2p.PacketPing",
  encode(_: PacketPing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketPing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketPing();
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
  fromJSON(_: any): PacketPing {
    return {};
  },
  toJSON(_: PacketPing): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<PacketPing>): PacketPing {
    const message = createBasePacketPing();
    return message;
  },
  fromAmino(_: PacketPingAmino): PacketPing {
    return {};
  },
  toAmino(_: PacketPing): PacketPingAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: PacketPingAminoMsg): PacketPing {
    return PacketPing.fromAmino(object.value);
  },
  fromProtoMsg(message: PacketPingProtoMsg): PacketPing {
    return PacketPing.decode(message.value);
  },
  toProto(message: PacketPing): Uint8Array {
    return PacketPing.encode(message).finish();
  },
  toProtoMsg(message: PacketPing): PacketPingProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.PacketPing",
      value: PacketPing.encode(message).finish()
    };
  }
};
function createBasePacketPong(): PacketPong {
  return {};
}
export const PacketPong = {
  typeUrl: "/tendermint.p2p.PacketPong",
  encode(_: PacketPong, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketPong {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketPong();
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
  fromJSON(_: any): PacketPong {
    return {};
  },
  toJSON(_: PacketPong): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<PacketPong>): PacketPong {
    const message = createBasePacketPong();
    return message;
  },
  fromAmino(_: PacketPongAmino): PacketPong {
    return {};
  },
  toAmino(_: PacketPong): PacketPongAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: PacketPongAminoMsg): PacketPong {
    return PacketPong.fromAmino(object.value);
  },
  fromProtoMsg(message: PacketPongProtoMsg): PacketPong {
    return PacketPong.decode(message.value);
  },
  toProto(message: PacketPong): Uint8Array {
    return PacketPong.encode(message).finish();
  },
  toProtoMsg(message: PacketPong): PacketPongProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.PacketPong",
      value: PacketPong.encode(message).finish()
    };
  }
};
function createBasePacketMsg(): PacketMsg {
  return {
    channelId: 0,
    eof: false,
    data: new Uint8Array()
  };
}
export const PacketMsg = {
  typeUrl: "/tendermint.p2p.PacketMsg",
  encode(message: PacketMsg, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== 0) {
      writer.uint32(8).int32(message.channelId);
    }
    if (message.eof === true) {
      writer.uint32(16).bool(message.eof);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketMsg {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketMsg();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.int32();
          break;
        case 2:
          message.eof = reader.bool();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketMsg {
    return {
      channelId: isSet(object.channelId) ? Number(object.channelId) : 0,
      eof: isSet(object.eof) ? Boolean(object.eof) : false,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: PacketMsg): unknown {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = Math.round(message.channelId));
    message.eof !== undefined && (obj.eof = message.eof);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<PacketMsg>): PacketMsg {
    const message = createBasePacketMsg();
    message.channelId = object.channelId ?? 0;
    message.eof = object.eof ?? false;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketMsgAmino): PacketMsg {
    return {
      channelId: object.channel_id,
      eof: object.eof,
      data: object.data
    };
  },
  toAmino(message: PacketMsg): PacketMsgAmino {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.eof = message.eof;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: PacketMsgAminoMsg): PacketMsg {
    return PacketMsg.fromAmino(object.value);
  },
  fromProtoMsg(message: PacketMsgProtoMsg): PacketMsg {
    return PacketMsg.decode(message.value);
  },
  toProto(message: PacketMsg): Uint8Array {
    return PacketMsg.encode(message).finish();
  },
  toProtoMsg(message: PacketMsg): PacketMsgProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.PacketMsg",
      value: PacketMsg.encode(message).finish()
    };
  }
};
function createBasePacket(): Packet {
  return {
    packetPing: undefined,
    packetPong: undefined,
    packetMsg: undefined
  };
}
export const Packet = {
  typeUrl: "/tendermint.p2p.Packet",
  encode(message: Packet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packetPing !== undefined) {
      PacketPing.encode(message.packetPing, writer.uint32(10).fork()).ldelim();
    }
    if (message.packetPong !== undefined) {
      PacketPong.encode(message.packetPong, writer.uint32(18).fork()).ldelim();
    }
    if (message.packetMsg !== undefined) {
      PacketMsg.encode(message.packetMsg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Packet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packetPing = PacketPing.decode(reader, reader.uint32());
          break;
        case 2:
          message.packetPong = PacketPong.decode(reader, reader.uint32());
          break;
        case 3:
          message.packetMsg = PacketMsg.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Packet {
    return {
      packetPing: isSet(object.packetPing) ? PacketPing.fromJSON(object.packetPing) : undefined,
      packetPong: isSet(object.packetPong) ? PacketPong.fromJSON(object.packetPong) : undefined,
      packetMsg: isSet(object.packetMsg) ? PacketMsg.fromJSON(object.packetMsg) : undefined
    };
  },
  toJSON(message: Packet): unknown {
    const obj: any = {};
    message.packetPing !== undefined && (obj.packetPing = message.packetPing ? PacketPing.toJSON(message.packetPing) : undefined);
    message.packetPong !== undefined && (obj.packetPong = message.packetPong ? PacketPong.toJSON(message.packetPong) : undefined);
    message.packetMsg !== undefined && (obj.packetMsg = message.packetMsg ? PacketMsg.toJSON(message.packetMsg) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Packet>): Packet {
    const message = createBasePacket();
    message.packetPing = object.packetPing !== undefined && object.packetPing !== null ? PacketPing.fromPartial(object.packetPing) : undefined;
    message.packetPong = object.packetPong !== undefined && object.packetPong !== null ? PacketPong.fromPartial(object.packetPong) : undefined;
    message.packetMsg = object.packetMsg !== undefined && object.packetMsg !== null ? PacketMsg.fromPartial(object.packetMsg) : undefined;
    return message;
  },
  fromAmino(object: PacketAmino): Packet {
    return {
      packetPing: object?.packet_ping ? PacketPing.fromAmino(object.packet_ping) : undefined,
      packetPong: object?.packet_pong ? PacketPong.fromAmino(object.packet_pong) : undefined,
      packetMsg: object?.packet_msg ? PacketMsg.fromAmino(object.packet_msg) : undefined
    };
  },
  toAmino(message: Packet): PacketAmino {
    const obj: any = {};
    obj.packet_ping = message.packetPing ? PacketPing.toAmino(message.packetPing) : undefined;
    obj.packet_pong = message.packetPong ? PacketPong.toAmino(message.packetPong) : undefined;
    obj.packet_msg = message.packetMsg ? PacketMsg.toAmino(message.packetMsg) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketAminoMsg): Packet {
    return Packet.fromAmino(object.value);
  },
  fromProtoMsg(message: PacketProtoMsg): Packet {
    return Packet.decode(message.value);
  },
  toProto(message: Packet): Uint8Array {
    return Packet.encode(message).finish();
  },
  toProtoMsg(message: Packet): PacketProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.Packet",
      value: Packet.encode(message).finish()
    };
  }
};
function createBaseAuthSigMessage(): AuthSigMessage {
  return {
    pubKey: PublicKey.fromPartial({}),
    sig: new Uint8Array()
  };
}
export const AuthSigMessage = {
  typeUrl: "/tendermint.p2p.AuthSigMessage",
  encode(message: AuthSigMessage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.sig.length !== 0) {
      writer.uint32(18).bytes(message.sig);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthSigMessage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthSigMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 2:
          message.sig = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthSigMessage {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array()
    };
  },
  toJSON(message: AuthSigMessage): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.sig !== undefined && (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<AuthSigMessage>): AuthSigMessage {
    const message = createBaseAuthSigMessage();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.sig = object.sig ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AuthSigMessageAmino): AuthSigMessage {
    return {
      pubKey: object?.pub_key ? PublicKey.fromAmino(object.pub_key) : undefined,
      sig: object.sig
    };
  },
  toAmino(message: AuthSigMessage): AuthSigMessageAmino {
    const obj: any = {};
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.sig = message.sig;
    return obj;
  },
  fromAminoMsg(object: AuthSigMessageAminoMsg): AuthSigMessage {
    return AuthSigMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthSigMessageProtoMsg): AuthSigMessage {
    return AuthSigMessage.decode(message.value);
  },
  toProto(message: AuthSigMessage): Uint8Array {
    return AuthSigMessage.encode(message).finish();
  },
  toProtoMsg(message: AuthSigMessage): AuthSigMessageProtoMsg {
    return {
      typeUrl: "/tendermint.p2p.AuthSigMessage",
      value: AuthSigMessage.encode(message).finish()
    };
  }
};