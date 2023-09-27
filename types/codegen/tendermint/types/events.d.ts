import { Long } from "../../helpers";
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
    height: string;
    round: number;
    step: string;
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
export declare const EventDataRoundState: {
    typeUrl: string;
    encode(message: EventDataRoundState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDataRoundState;
    fromJSON(object: any): EventDataRoundState;
    toJSON(message: EventDataRoundState): unknown;
    fromPartial(object: Partial<EventDataRoundState>): EventDataRoundState;
    fromAmino(object: EventDataRoundStateAmino): EventDataRoundState;
    toAmino(message: EventDataRoundState): EventDataRoundStateAmino;
    fromAminoMsg(object: EventDataRoundStateAminoMsg): EventDataRoundState;
    fromProtoMsg(message: EventDataRoundStateProtoMsg): EventDataRoundState;
    toProto(message: EventDataRoundState): Uint8Array;
    toProtoMsg(message: EventDataRoundState): EventDataRoundStateProtoMsg;
};
