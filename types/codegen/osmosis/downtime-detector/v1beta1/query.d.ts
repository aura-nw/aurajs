import { Downtime } from "./downtime_duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequest {
    downtime: Downtime;
    recovery: string;
}
export interface RecoveredSinceDowntimeOfLengthRequestProtoMsg {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthRequest";
    value: Uint8Array;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestAmino {
    downtime: Downtime;
    recovery?: string;
}
export interface RecoveredSinceDowntimeOfLengthRequestAminoMsg {
    type: "osmosis/downtimedetector/recovered-since-downtime-of-length-request";
    value: RecoveredSinceDowntimeOfLengthRequestAmino;
}
/**
 * Query for has it been at least $RECOVERY_DURATION units of time,
 * since the chain has been down for $DOWNTIME_DURATION.
 */
export interface RecoveredSinceDowntimeOfLengthRequestSDKType {
    downtime: Downtime;
    recovery: string;
}
export interface RecoveredSinceDowntimeOfLengthResponse {
    succesfullyRecovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseProtoMsg {
    typeUrl: "/osmosis.downtimedetector.v1beta1.RecoveredSinceDowntimeOfLengthResponse";
    value: Uint8Array;
}
export interface RecoveredSinceDowntimeOfLengthResponseAmino {
    succesfully_recovered: boolean;
}
export interface RecoveredSinceDowntimeOfLengthResponseAminoMsg {
    type: "osmosis/downtimedetector/recovered-since-downtime-of-length-response";
    value: RecoveredSinceDowntimeOfLengthResponseAmino;
}
export interface RecoveredSinceDowntimeOfLengthResponseSDKType {
    succesfully_recovered: boolean;
}
export declare const RecoveredSinceDowntimeOfLengthRequest: {
    typeUrl: string;
    encode(message: RecoveredSinceDowntimeOfLengthRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthRequest;
    fromJSON(object: any): RecoveredSinceDowntimeOfLengthRequest;
    toJSON(message: RecoveredSinceDowntimeOfLengthRequest): unknown;
    fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthRequest>): RecoveredSinceDowntimeOfLengthRequest;
    fromAmino(object: RecoveredSinceDowntimeOfLengthRequestAmino): RecoveredSinceDowntimeOfLengthRequest;
    toAmino(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestAmino;
    fromAminoMsg(object: RecoveredSinceDowntimeOfLengthRequestAminoMsg): RecoveredSinceDowntimeOfLengthRequest;
    toAminoMsg(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestAminoMsg;
    fromProtoMsg(message: RecoveredSinceDowntimeOfLengthRequestProtoMsg): RecoveredSinceDowntimeOfLengthRequest;
    toProto(message: RecoveredSinceDowntimeOfLengthRequest): Uint8Array;
    toProtoMsg(message: RecoveredSinceDowntimeOfLengthRequest): RecoveredSinceDowntimeOfLengthRequestProtoMsg;
};
export declare const RecoveredSinceDowntimeOfLengthResponse: {
    typeUrl: string;
    encode(message: RecoveredSinceDowntimeOfLengthResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RecoveredSinceDowntimeOfLengthResponse;
    fromJSON(object: any): RecoveredSinceDowntimeOfLengthResponse;
    toJSON(message: RecoveredSinceDowntimeOfLengthResponse): unknown;
    fromPartial(object: Partial<RecoveredSinceDowntimeOfLengthResponse>): RecoveredSinceDowntimeOfLengthResponse;
    fromAmino(object: RecoveredSinceDowntimeOfLengthResponseAmino): RecoveredSinceDowntimeOfLengthResponse;
    toAmino(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseAmino;
    fromAminoMsg(object: RecoveredSinceDowntimeOfLengthResponseAminoMsg): RecoveredSinceDowntimeOfLengthResponse;
    toAminoMsg(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseAminoMsg;
    fromProtoMsg(message: RecoveredSinceDowntimeOfLengthResponseProtoMsg): RecoveredSinceDowntimeOfLengthResponse;
    toProto(message: RecoveredSinceDowntimeOfLengthResponse): Uint8Array;
    toProtoMsg(message: RecoveredSinceDowntimeOfLengthResponse): RecoveredSinceDowntimeOfLengthResponseProtoMsg;
};
