import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface Incentive {
    /** contract address of the smart contract to be incentivized */
    contract: string;
    /** allocations is a slice of denoms and percentages of rewards to be allocated */
    allocations: DecCoin[];
    /** epochs defines the number of remaining epochs for the incentive */
    epochs: number;
    /** start_time of the incentive distribution */
    startTime: Date;
    /** total_gas is the cumulative gas spent by all gas meters of the incentive during the epoch */
    totalGas: Long;
}
export interface IncentiveProtoMsg {
    typeUrl: "/evmos.incentives.v1.Incentive";
    value: Uint8Array;
}
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface IncentiveAmino {
    /** contract address of the smart contract to be incentivized */
    contract?: string;
    /** allocations is a slice of denoms and percentages of rewards to be allocated */
    allocations?: DecCoinAmino[];
    /** epochs defines the number of remaining epochs for the incentive */
    epochs?: number;
    /** start_time of the incentive distribution */
    start_time?: string;
    /** total_gas is the cumulative gas spent by all gas meters of the incentive during the epoch */
    total_gas?: string;
}
export interface IncentiveAminoMsg {
    type: "/evmos.incentives.v1.Incentive";
    value: IncentiveAmino;
}
/**
 * Incentive defines an instance that organizes distribution conditions for a
 * given smart contract
 */
export interface IncentiveSDKType {
    contract: string;
    allocations: DecCoinSDKType[];
    epochs: number;
    start_time: Date;
    total_gas: Long;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeter {
    /** contract is the hex address of the incentivized smart contract */
    contract: string;
    /** participant address that interacts with the incentive */
    participant: string;
    /** cumulative_gas spent during the epoch */
    cumulativeGas: Long;
}
export interface GasMeterProtoMsg {
    typeUrl: "/evmos.incentives.v1.GasMeter";
    value: Uint8Array;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeterAmino {
    /** contract is the hex address of the incentivized smart contract */
    contract?: string;
    /** participant address that interacts with the incentive */
    participant?: string;
    /** cumulative_gas spent during the epoch */
    cumulative_gas?: string;
}
export interface GasMeterAminoMsg {
    type: "/evmos.incentives.v1.GasMeter";
    value: GasMeterAmino;
}
/** GasMeter tracks the cumulative gas spent per participant in one epoch */
export interface GasMeterSDKType {
    contract: string;
    participant: string;
    cumulative_gas: Long;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** contract address to be registered */
    contract: string;
    /** allocations defines the denoms and percentage of rewards to be allocated */
    allocations: DecCoin[];
    /** epochs is the number of remaining epochs for the incentive */
    epochs: number;
}
export interface RegisterIncentiveProposalProtoMsg {
    typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal";
    value: Uint8Array;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposalAmino {
    /** title of the proposal */
    title?: string;
    /** description of the proposal */
    description?: string;
    /** contract address to be registered */
    contract?: string;
    /** allocations defines the denoms and percentage of rewards to be allocated */
    allocations?: DecCoinAmino[];
    /** epochs is the number of remaining epochs for the incentive */
    epochs?: number;
}
export interface RegisterIncentiveProposalAminoMsg {
    type: "/evmos.incentives.v1.RegisterIncentiveProposal";
    value: RegisterIncentiveProposalAmino;
}
/** RegisterIncentiveProposal is a gov Content type to register an incentive */
export interface RegisterIncentiveProposalSDKType {
    title: string;
    description: string;
    contract: string;
    allocations: DecCoinSDKType[];
    epochs: number;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposal {
    /** title of the proposal */
    title: string;
    /** description of the proposal */
    description: string;
    /** contract address of the incentivized smart contract */
    contract: string;
}
export interface CancelIncentiveProposalProtoMsg {
    typeUrl: "/evmos.incentives.v1.CancelIncentiveProposal";
    value: Uint8Array;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposalAmino {
    /** title of the proposal */
    title?: string;
    /** description of the proposal */
    description?: string;
    /** contract address of the incentivized smart contract */
    contract?: string;
}
export interface CancelIncentiveProposalAminoMsg {
    type: "/evmos.incentives.v1.CancelIncentiveProposal";
    value: CancelIncentiveProposalAmino;
}
/** CancelIncentiveProposal is a gov Content type to cancel an incentive */
export interface CancelIncentiveProposalSDKType {
    title: string;
    description: string;
    contract: string;
}
export declare const Incentive: {
    typeUrl: string;
    encode(message: Incentive, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Incentive;
    fromJSON(object: any): Incentive;
    toJSON(message: Incentive): unknown;
    fromPartial(object: Partial<Incentive>): Incentive;
    fromAmino(object: IncentiveAmino): Incentive;
    toAmino(message: Incentive): IncentiveAmino;
    fromAminoMsg(object: IncentiveAminoMsg): Incentive;
    fromProtoMsg(message: IncentiveProtoMsg): Incentive;
    toProto(message: Incentive): Uint8Array;
    toProtoMsg(message: Incentive): IncentiveProtoMsg;
};
export declare const GasMeter: {
    typeUrl: string;
    encode(message: GasMeter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GasMeter;
    fromJSON(object: any): GasMeter;
    toJSON(message: GasMeter): unknown;
    fromPartial(object: Partial<GasMeter>): GasMeter;
    fromAmino(object: GasMeterAmino): GasMeter;
    toAmino(message: GasMeter): GasMeterAmino;
    fromAminoMsg(object: GasMeterAminoMsg): GasMeter;
    fromProtoMsg(message: GasMeterProtoMsg): GasMeter;
    toProto(message: GasMeter): Uint8Array;
    toProtoMsg(message: GasMeter): GasMeterProtoMsg;
};
export declare const RegisterIncentiveProposal: {
    typeUrl: string;
    encode(message: RegisterIncentiveProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterIncentiveProposal;
    fromJSON(object: any): RegisterIncentiveProposal;
    toJSON(message: RegisterIncentiveProposal): unknown;
    fromPartial(object: Partial<RegisterIncentiveProposal>): RegisterIncentiveProposal;
    fromAmino(object: RegisterIncentiveProposalAmino): RegisterIncentiveProposal;
    toAmino(message: RegisterIncentiveProposal): RegisterIncentiveProposalAmino;
    fromAminoMsg(object: RegisterIncentiveProposalAminoMsg): RegisterIncentiveProposal;
    fromProtoMsg(message: RegisterIncentiveProposalProtoMsg): RegisterIncentiveProposal;
    toProto(message: RegisterIncentiveProposal): Uint8Array;
    toProtoMsg(message: RegisterIncentiveProposal): RegisterIncentiveProposalProtoMsg;
};
export declare const CancelIncentiveProposal: {
    typeUrl: string;
    encode(message: CancelIncentiveProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelIncentiveProposal;
    fromJSON(object: any): CancelIncentiveProposal;
    toJSON(message: CancelIncentiveProposal): unknown;
    fromPartial(object: Partial<CancelIncentiveProposal>): CancelIncentiveProposal;
    fromAmino(object: CancelIncentiveProposalAmino): CancelIncentiveProposal;
    toAmino(message: CancelIncentiveProposal): CancelIncentiveProposalAmino;
    fromAminoMsg(object: CancelIncentiveProposalAminoMsg): CancelIncentiveProposal;
    fromProtoMsg(message: CancelIncentiveProposalProtoMsg): CancelIncentiveProposal;
    toProto(message: CancelIncentiveProposal): Uint8Array;
    toProtoMsg(message: CancelIncentiveProposal): CancelIncentiveProposalProtoMsg;
};
