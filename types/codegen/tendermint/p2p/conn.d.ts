import { PublicKey, PublicKeyAmino, PublicKeySDKType } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
export interface PacketPing {
}
export interface PacketPingProtoMsg {
    typeUrl: "/tendermint.p2p.PacketPing";
    value: Uint8Array;
}
export interface PacketPingAmino {
}
export interface PacketPingAminoMsg {
    type: "/tendermint.p2p.PacketPing";
    value: PacketPingAmino;
}
export interface PacketPingSDKType {
}
export interface PacketPong {
}
export interface PacketPongProtoMsg {
    typeUrl: "/tendermint.p2p.PacketPong";
    value: Uint8Array;
}
export interface PacketPongAmino {
}
export interface PacketPongAminoMsg {
    type: "/tendermint.p2p.PacketPong";
    value: PacketPongAmino;
}
export interface PacketPongSDKType {
}
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
    channel_id?: number;
    eof?: boolean;
    data?: string;
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
    sig?: string;
}
export interface AuthSigMessageAminoMsg {
    type: "/tendermint.p2p.AuthSigMessage";
    value: AuthSigMessageAmino;
}
export interface AuthSigMessageSDKType {
    pub_key: PublicKeySDKType;
    sig: Uint8Array;
}
export declare const PacketPing: {
    typeUrl: string;
    encode(_: PacketPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketPing;
    fromJSON(_: any): PacketPing;
    toJSON(_: PacketPing): unknown;
    fromPartial(_: Partial<PacketPing>): PacketPing;
    fromAmino(_: PacketPingAmino): PacketPing;
    toAmino(_: PacketPing): PacketPingAmino;
    fromAminoMsg(object: PacketPingAminoMsg): PacketPing;
    fromProtoMsg(message: PacketPingProtoMsg): PacketPing;
    toProto(message: PacketPing): Uint8Array;
    toProtoMsg(message: PacketPing): PacketPingProtoMsg;
};
export declare const PacketPong: {
    typeUrl: string;
    encode(_: PacketPong, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketPong;
    fromJSON(_: any): PacketPong;
    toJSON(_: PacketPong): unknown;
    fromPartial(_: Partial<PacketPong>): PacketPong;
    fromAmino(_: PacketPongAmino): PacketPong;
    toAmino(_: PacketPong): PacketPongAmino;
    fromAminoMsg(object: PacketPongAminoMsg): PacketPong;
    fromProtoMsg(message: PacketPongProtoMsg): PacketPong;
    toProto(message: PacketPong): Uint8Array;
    toProtoMsg(message: PacketPong): PacketPongProtoMsg;
};
export declare const PacketMsg: {
    typeUrl: string;
    encode(message: PacketMsg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PacketMsg;
    fromJSON(object: any): PacketMsg;
    toJSON(message: PacketMsg): unknown;
    fromPartial(object: Partial<PacketMsg>): PacketMsg;
    fromAmino(object: PacketMsgAmino): PacketMsg;
    toAmino(message: PacketMsg): PacketMsgAmino;
    fromAminoMsg(object: PacketMsgAminoMsg): PacketMsg;
    fromProtoMsg(message: PacketMsgProtoMsg): PacketMsg;
    toProto(message: PacketMsg): Uint8Array;
    toProtoMsg(message: PacketMsg): PacketMsgProtoMsg;
};
export declare const Packet: {
    typeUrl: string;
    encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Packet;
    fromJSON(object: any): Packet;
    toJSON(message: Packet): unknown;
    fromPartial(object: Partial<Packet>): Packet;
    fromAmino(object: PacketAmino): Packet;
    toAmino(message: Packet): PacketAmino;
    fromAminoMsg(object: PacketAminoMsg): Packet;
    fromProtoMsg(message: PacketProtoMsg): Packet;
    toProto(message: Packet): Uint8Array;
    toProtoMsg(message: Packet): PacketProtoMsg;
};
export declare const AuthSigMessage: {
    typeUrl: string;
    encode(message: AuthSigMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuthSigMessage;
    fromJSON(object: any): AuthSigMessage;
    toJSON(message: AuthSigMessage): unknown;
    fromPartial(object: Partial<AuthSigMessage>): AuthSigMessage;
    fromAmino(object: AuthSigMessageAmino): AuthSigMessage;
    toAmino(message: AuthSigMessage): AuthSigMessageAmino;
    fromAminoMsg(object: AuthSigMessageAminoMsg): AuthSigMessage;
    fromProtoMsg(message: AuthSigMessageProtoMsg): AuthSigMessage;
    toProto(message: AuthSigMessage): Uint8Array;
    toProtoMsg(message: AuthSigMessage): AuthSigMessageProtoMsg;
};
