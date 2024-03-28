import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfo {
    /** identifier of the epoch */
    identifier: string;
    /** start_time of the epoch */
    startTime: Date;
    /** duration of the epoch */
    duration: string;
    /** current_epoch is the integer identifier of the epoch */
    currentEpoch: Long;
    /** current_epoch_start_time defines the timestamp of the start of the epoch */
    currentEpochStartTime: Date;
    /** epoch_counting_started reflects if the counting for the epoch has started */
    epochCountingStarted: boolean;
    /** current_epoch_start_height of the epoch */
    currentEpochStartHeight: Long;
}
export interface EpochInfoProtoMsg {
    typeUrl: "/evmos.epochs.v1.EpochInfo";
    value: Uint8Array;
}
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfoAmino {
    /** identifier of the epoch */
    identifier?: string;
    /** start_time of the epoch */
    start_time?: string;
    /** duration of the epoch */
    duration?: string;
    /** current_epoch is the integer identifier of the epoch */
    current_epoch?: string;
    /** current_epoch_start_time defines the timestamp of the start of the epoch */
    current_epoch_start_time?: string;
    /** epoch_counting_started reflects if the counting for the epoch has started */
    epoch_counting_started?: boolean;
    /** current_epoch_start_height of the epoch */
    current_epoch_start_height?: string;
}
export interface EpochInfoAminoMsg {
    type: "/evmos.epochs.v1.EpochInfo";
    value: EpochInfoAmino;
}
/**
 * EpochInfo defines the message interface containing the relevant informations about
 * an epoch.
 */
export interface EpochInfoSDKType {
    identifier: string;
    start_time: Date;
    duration: string;
    current_epoch: Long;
    current_epoch_start_time: Date;
    epoch_counting_started: boolean;
    current_epoch_start_height: Long;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
    epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/evmos.epochs.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
    /** epochs is a slice of EpochInfo that defines the epochs in the genesis state */
    epochs?: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/evmos.epochs.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    epochs: EpochInfoSDKType[];
}
export declare const EpochInfo: {
    typeUrl: string;
    encode(message: EpochInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo;
    fromJSON(object: any): EpochInfo;
    toJSON(message: EpochInfo): unknown;
    fromPartial(object: Partial<EpochInfo>): EpochInfo;
    fromAmino(object: EpochInfoAmino): EpochInfo;
    toAmino(message: EpochInfo): EpochInfoAmino;
    fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo;
    fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo;
    toProto(message: EpochInfo): Uint8Array;
    toProtoMsg(message: EpochInfo): EpochInfoProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
