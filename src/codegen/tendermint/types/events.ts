import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventDataRoundState {
  height: Long;
  round: number;
  step: string;
}
export interface EventDataRoundStateProtoMsg {
  typeUrl: "/tendermint.types.EventDataRoundState";
  value: Uint8Array;
}
export interface EventDataRoundStateAmino {
  height?: string;
  round?: number;
  step?: string;
}
export interface EventDataRoundStateAminoMsg {
  type: "/tendermint.types.EventDataRoundState";
  value: EventDataRoundStateAmino;
}
export interface EventDataRoundStateSDKType {
  height: Long;
  round: number;
  step: string;
}
function createBaseEventDataRoundState(): EventDataRoundState {
  return {
    height: Long.ZERO,
    round: 0,
    step: ""
  };
}
export const EventDataRoundState = {
  typeUrl: "/tendermint.types.EventDataRoundState",
  encode(message: EventDataRoundState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.round !== 0) {
      writer.uint32(16).int32(message.round);
    }
    if (message.step !== "") {
      writer.uint32(26).string(message.step);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): EventDataRoundState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDataRoundState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.round = reader.int32();
          break;
        case 3:
          message.step = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventDataRoundState {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Number(object.round) : 0,
      step: isSet(object.step) ? String(object.step) : ""
    };
  },
  toJSON(message: EventDataRoundState): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = Math.round(message.round));
    message.step !== undefined && (obj.step = message.step);
    return obj;
  },
  fromPartial(object: Partial<EventDataRoundState>): EventDataRoundState {
    const message = createBaseEventDataRoundState();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round ?? 0;
    message.step = object.step ?? "";
    return message;
  },
  fromAmino(object: EventDataRoundStateAmino): EventDataRoundState {
    const message = createBaseEventDataRoundState();
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = object.round;
    }
    if (object.step !== undefined && object.step !== null) {
      message.step = object.step;
    }
    return message;
  },
  toAmino(message: EventDataRoundState): EventDataRoundStateAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round;
    obj.step = message.step;
    return obj;
  },
  fromAminoMsg(object: EventDataRoundStateAminoMsg): EventDataRoundState {
    return EventDataRoundState.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDataRoundStateProtoMsg): EventDataRoundState {
    return EventDataRoundState.decode(message.value);
  },
  toProto(message: EventDataRoundState): Uint8Array {
    return EventDataRoundState.encode(message).finish();
  },
  toProtoMsg(message: EventDataRoundState): EventDataRoundStateProtoMsg {
    return {
      typeUrl: "/tendermint.types.EventDataRoundState",
      value: EventDataRoundState.encode(message).finish()
    };
  }
};