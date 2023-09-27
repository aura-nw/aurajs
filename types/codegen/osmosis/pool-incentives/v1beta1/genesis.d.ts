import { Params, ParamsAmino, ParamsSDKType, DistrInfo, DistrInfoAmino, DistrInfoSDKType, PoolToGauges, PoolToGaugesAmino, PoolToGaugesSDKType } from "./incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params: Params;
    lockableDurations: string[];
    distrInfo?: DistrInfo;
    poolToGauges?: PoolToGauges;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the paramaters of the module. */
    params?: ParamsAmino;
    lockable_durations: string[];
    distr_info?: DistrInfoAmino;
    pool_to_gauges?: PoolToGaugesAmino;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/poolincentives/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    lockable_durations: string[];
    distr_info?: DistrInfoSDKType;
    pool_to_gauges?: PoolToGaugesSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
