import { Message, MessageAmino, MessageSDKType } from "./types";
import { Duration } from "../../google/protobuf/duration";
import { EventDataRoundState, EventDataRoundStateAmino, EventDataRoundStateSDKType } from "../types/events";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, toDuration, fromDuration, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
  msg: Message;
  peerId: string;
}
export interface MsgInfoProtoMsg {
  typeUrl: "/tendermint.consensus.MsgInfo";
  value: Uint8Array;
}
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfoAmino {
  msg?: MessageAmino;
  peer_id: string;
}
export interface MsgInfoAminoMsg {
  type: "/tendermint.consensus.MsgInfo";
  value: MsgInfoAmino;
}
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfoSDKType {
  msg: MessageSDKType;
  peer_id: string;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
  duration: string;
  height: Long;
  round: number;
  step: number;
}
export interface TimeoutInfoProtoMsg {
  typeUrl: "/tendermint.consensus.TimeoutInfo";
  value: Uint8Array;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfoAmino {
  duration?: string;
  height: string;
  round: number;
  step: number;
}
export interface TimeoutInfoAminoMsg {
  type: "/tendermint.consensus.TimeoutInfo";
  value: TimeoutInfoAmino;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfoSDKType {
  duration: string;
  height: Long;
  round: number;
  step: number;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
  height: Long;
}
export interface EndHeightProtoMsg {
  typeUrl: "/tendermint.consensus.EndHeight";
  value: Uint8Array;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeightAmino {
  height: string;
}
export interface EndHeightAminoMsg {
  type: "/tendermint.consensus.EndHeight";
  value: EndHeightAmino;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeightSDKType {
  height: Long;
}
export interface WALMessage {
  eventDataRoundState?: EventDataRoundState;
  msgInfo?: MsgInfo;
  timeoutInfo?: TimeoutInfo;
  endHeight?: EndHeight;
}
export interface WALMessageProtoMsg {
  typeUrl: "/tendermint.consensus.WALMessage";
  value: Uint8Array;
}
export interface WALMessageAmino {
  event_data_round_state?: EventDataRoundStateAmino;
  msg_info?: MsgInfoAmino;
  timeout_info?: TimeoutInfoAmino;
  end_height?: EndHeightAmino;
}
export interface WALMessageAminoMsg {
  type: "/tendermint.consensus.WALMessage";
  value: WALMessageAmino;
}
export interface WALMessageSDKType {
  event_data_round_state?: EventDataRoundStateSDKType;
  msg_info?: MsgInfoSDKType;
  timeout_info?: TimeoutInfoSDKType;
  end_height?: EndHeightSDKType;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
  time: Date;
  msg: WALMessage;
}
export interface TimedWALMessageProtoMsg {
  typeUrl: "/tendermint.consensus.TimedWALMessage";
  value: Uint8Array;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessageAmino {
  time?: Date;
  msg?: WALMessageAmino;
}
export interface TimedWALMessageAminoMsg {
  type: "/tendermint.consensus.TimedWALMessage";
  value: TimedWALMessageAmino;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessageSDKType {
  time: Date;
  msg: WALMessageSDKType;
}
function createBaseMsgInfo(): MsgInfo {
  return {
    msg: Message.fromPartial({}),
    peerId: ""
  };
}
export const MsgInfo = {
  typeUrl: "/tendermint.consensus.MsgInfo",
  encode(message: MsgInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.msg !== undefined) {
      Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
    }
    if (message.peerId !== "") {
      writer.uint32(18).string(message.peerId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = Message.decode(reader, reader.uint32());
          break;
        case 2:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgInfo {
    return {
      msg: isSet(object.msg) ? Message.fromJSON(object.msg) : undefined,
      peerId: isSet(object.peerId) ? String(object.peerId) : ""
    };
  },
  toJSON(message: MsgInfo): unknown {
    const obj: any = {};
    message.msg !== undefined && (obj.msg = message.msg ? Message.toJSON(message.msg) : undefined);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },
  fromPartial(object: Partial<MsgInfo>): MsgInfo {
    const message = createBaseMsgInfo();
    message.msg = object.msg !== undefined && object.msg !== null ? Message.fromPartial(object.msg) : undefined;
    message.peerId = object.peerId ?? "";
    return message;
  },
  fromAmino(object: MsgInfoAmino): MsgInfo {
    return {
      msg: object?.msg ? Message.fromAmino(object.msg) : undefined,
      peerId: object.peer_id
    };
  },
  toAmino(message: MsgInfo): MsgInfoAmino {
    const obj: any = {};
    obj.msg = message.msg ? Message.toAmino(message.msg) : undefined;
    obj.peer_id = message.peerId;
    return obj;
  },
  fromAminoMsg(object: MsgInfoAminoMsg): MsgInfo {
    return MsgInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInfoProtoMsg): MsgInfo {
    return MsgInfo.decode(message.value);
  },
  toProto(message: MsgInfo): Uint8Array {
    return MsgInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgInfo): MsgInfoProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.MsgInfo",
      value: MsgInfo.encode(message).finish()
    };
  }
};
function createBaseTimeoutInfo(): TimeoutInfo {
  return {
    duration: Duration.fromPartial({}),
    height: Long.ZERO,
    round: 0,
    step: 0
  };
}
export const TimeoutInfo = {
  typeUrl: "/tendermint.consensus.TimeoutInfo",
  encode(message: TimeoutInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duration !== undefined) {
      Duration.encode(toDuration(message.duration), writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(24).int32(message.round);
    }
    if (message.step !== 0) {
      writer.uint32(32).uint32(message.step);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TimeoutInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeoutInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duration = fromDuration(Duration.decode(reader, reader.uint32()));
          break;
        case 2:
          message.height = (reader.int64() as Long);
          break;
        case 3:
          message.round = reader.int32();
          break;
        case 4:
          message.step = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimeoutInfo {
    return {
      duration: isSet(object.duration) ? String(object.duration) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? Number(object.step) : 0
    };
  },
  toJSON(message: TimeoutInfo): unknown {
    const obj: any = {};
    message.duration !== undefined && (obj.duration = message.duration);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.step !== undefined && (obj.step = Math.round(message.step));
    return obj;
  },
  fromPartial(object: Partial<TimeoutInfo>): TimeoutInfo {
    const message = createBaseTimeoutInfo();
    message.duration = object.duration ?? undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.step = object.step ?? 0;
    return message;
  },
  fromAmino(object: TimeoutInfoAmino): TimeoutInfo {
    return {
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      height: Long.fromString(object.height),
      round: object.round,
      step: object.step
    };
  },
  toAmino(message: TimeoutInfo): TimeoutInfoAmino {
    const obj: any = {};
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round;
    obj.step = message.step;
    return obj;
  },
  fromAminoMsg(object: TimeoutInfoAminoMsg): TimeoutInfo {
    return TimeoutInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: TimeoutInfoProtoMsg): TimeoutInfo {
    return TimeoutInfo.decode(message.value);
  },
  toProto(message: TimeoutInfo): Uint8Array {
    return TimeoutInfo.encode(message).finish();
  },
  toProtoMsg(message: TimeoutInfo): TimeoutInfoProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.TimeoutInfo",
      value: TimeoutInfo.encode(message).finish()
    };
  }
};
function createBaseEndHeight(): EndHeight {
  return {
    height: Long.ZERO
  };
}
export const EndHeight = {
  typeUrl: "/tendermint.consensus.EndHeight",
  encode(message: EndHeight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EndHeight {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndHeight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EndHeight {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  toJSON(message: EndHeight): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<EndHeight>): EndHeight {
    const message = createBaseEndHeight();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },
  fromAmino(object: EndHeightAmino): EndHeight {
    return {
      height: Long.fromString(object.height)
    };
  },
  toAmino(message: EndHeight): EndHeightAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EndHeightAminoMsg): EndHeight {
    return EndHeight.fromAmino(object.value);
  },
  fromProtoMsg(message: EndHeightProtoMsg): EndHeight {
    return EndHeight.decode(message.value);
  },
  toProto(message: EndHeight): Uint8Array {
    return EndHeight.encode(message).finish();
  },
  toProtoMsg(message: EndHeight): EndHeightProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.EndHeight",
      value: EndHeight.encode(message).finish()
    };
  }
};
function createBaseWALMessage(): WALMessage {
  return {
    eventDataRoundState: undefined,
    msgInfo: undefined,
    timeoutInfo: undefined,
    endHeight: undefined
  };
}
export const WALMessage = {
  typeUrl: "/tendermint.consensus.WALMessage",
  encode(message: WALMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventDataRoundState !== undefined) {
      EventDataRoundState.encode(message.eventDataRoundState, writer.uint32(10).fork()).ldelim();
    }
    if (message.msgInfo !== undefined) {
      MsgInfo.encode(message.msgInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.timeoutInfo !== undefined) {
      TimeoutInfo.encode(message.timeoutInfo, writer.uint32(26).fork()).ldelim();
    }
    if (message.endHeight !== undefined) {
      EndHeight.encode(message.endHeight, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): WALMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWALMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventDataRoundState = EventDataRoundState.decode(reader, reader.uint32());
          break;
        case 2:
          message.msgInfo = MsgInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.timeoutInfo = TimeoutInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.endHeight = EndHeight.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WALMessage {
    return {
      eventDataRoundState: isSet(object.eventDataRoundState) ? EventDataRoundState.fromJSON(object.eventDataRoundState) : undefined,
      msgInfo: isSet(object.msgInfo) ? MsgInfo.fromJSON(object.msgInfo) : undefined,
      timeoutInfo: isSet(object.timeoutInfo) ? TimeoutInfo.fromJSON(object.timeoutInfo) : undefined,
      endHeight: isSet(object.endHeight) ? EndHeight.fromJSON(object.endHeight) : undefined
    };
  },
  toJSON(message: WALMessage): unknown {
    const obj: any = {};
    message.eventDataRoundState !== undefined && (obj.eventDataRoundState = message.eventDataRoundState ? EventDataRoundState.toJSON(message.eventDataRoundState) : undefined);
    message.msgInfo !== undefined && (obj.msgInfo = message.msgInfo ? MsgInfo.toJSON(message.msgInfo) : undefined);
    message.timeoutInfo !== undefined && (obj.timeoutInfo = message.timeoutInfo ? TimeoutInfo.toJSON(message.timeoutInfo) : undefined);
    message.endHeight !== undefined && (obj.endHeight = message.endHeight ? EndHeight.toJSON(message.endHeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<WALMessage>): WALMessage {
    const message = createBaseWALMessage();
    message.eventDataRoundState = object.eventDataRoundState !== undefined && object.eventDataRoundState !== null ? EventDataRoundState.fromPartial(object.eventDataRoundState) : undefined;
    message.msgInfo = object.msgInfo !== undefined && object.msgInfo !== null ? MsgInfo.fromPartial(object.msgInfo) : undefined;
    message.timeoutInfo = object.timeoutInfo !== undefined && object.timeoutInfo !== null ? TimeoutInfo.fromPartial(object.timeoutInfo) : undefined;
    message.endHeight = object.endHeight !== undefined && object.endHeight !== null ? EndHeight.fromPartial(object.endHeight) : undefined;
    return message;
  },
  fromAmino(object: WALMessageAmino): WALMessage {
    return {
      eventDataRoundState: object?.event_data_round_state ? EventDataRoundState.fromAmino(object.event_data_round_state) : undefined,
      msgInfo: object?.msg_info ? MsgInfo.fromAmino(object.msg_info) : undefined,
      timeoutInfo: object?.timeout_info ? TimeoutInfo.fromAmino(object.timeout_info) : undefined,
      endHeight: object?.end_height ? EndHeight.fromAmino(object.end_height) : undefined
    };
  },
  toAmino(message: WALMessage): WALMessageAmino {
    const obj: any = {};
    obj.event_data_round_state = message.eventDataRoundState ? EventDataRoundState.toAmino(message.eventDataRoundState) : undefined;
    obj.msg_info = message.msgInfo ? MsgInfo.toAmino(message.msgInfo) : undefined;
    obj.timeout_info = message.timeoutInfo ? TimeoutInfo.toAmino(message.timeoutInfo) : undefined;
    obj.end_height = message.endHeight ? EndHeight.toAmino(message.endHeight) : undefined;
    return obj;
  },
  fromAminoMsg(object: WALMessageAminoMsg): WALMessage {
    return WALMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: WALMessageProtoMsg): WALMessage {
    return WALMessage.decode(message.value);
  },
  toProto(message: WALMessage): Uint8Array {
    return WALMessage.encode(message).finish();
  },
  toProtoMsg(message: WALMessage): WALMessageProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.WALMessage",
      value: WALMessage.encode(message).finish()
    };
  }
};
function createBaseTimedWALMessage(): TimedWALMessage {
  return {
    time: new Date(),
    msg: WALMessage.fromPartial({})
  };
}
export const TimedWALMessage = {
  typeUrl: "/tendermint.consensus.TimedWALMessage",
  encode(message: TimedWALMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.msg !== undefined) {
      WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TimedWALMessage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimedWALMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 2:
          message.msg = WALMessage.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimedWALMessage {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      msg: isSet(object.msg) ? WALMessage.fromJSON(object.msg) : undefined
    };
  },
  toJSON(message: TimedWALMessage): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.msg !== undefined && (obj.msg = message.msg ? WALMessage.toJSON(message.msg) : undefined);
    return obj;
  },
  fromPartial(object: Partial<TimedWALMessage>): TimedWALMessage {
    const message = createBaseTimedWALMessage();
    message.time = object.time ?? undefined;
    message.msg = object.msg !== undefined && object.msg !== null ? WALMessage.fromPartial(object.msg) : undefined;
    return message;
  },
  fromAmino(object: TimedWALMessageAmino): TimedWALMessage {
    return {
      time: object.time,
      msg: object?.msg ? WALMessage.fromAmino(object.msg) : undefined
    };
  },
  toAmino(message: TimedWALMessage): TimedWALMessageAmino {
    const obj: any = {};
    obj.time = message.time;
    obj.msg = message.msg ? WALMessage.toAmino(message.msg) : undefined;
    return obj;
  },
  fromAminoMsg(object: TimedWALMessageAminoMsg): TimedWALMessage {
    return TimedWALMessage.fromAmino(object.value);
  },
  fromProtoMsg(message: TimedWALMessageProtoMsg): TimedWALMessage {
    return TimedWALMessage.decode(message.value);
  },
  toProto(message: TimedWALMessage): Uint8Array {
    return TimedWALMessage.encode(message).finish();
  },
  toProtoMsg(message: TimedWALMessage): TimedWALMessageProtoMsg {
    return {
      typeUrl: "/tendermint.consensus.TimedWALMessage",
      value: TimedWALMessage.encode(message).finish()
    };
  }
};