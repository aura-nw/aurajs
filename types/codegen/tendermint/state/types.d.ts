import { ResponseDeliverTx, ResponseDeliverTxAmino, ResponseDeliverTxSDKType, ResponseEndBlock, ResponseEndBlockAmino, ResponseEndBlockSDKType, ResponseBeginBlock, ResponseBeginBlockAmino, ResponseBeginBlockSDKType } from "../abci/types";
import { ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "../types/validator";
import { ConsensusParams, ConsensusParamsAmino, ConsensusParamsSDKType } from "../types/params";
import { Consensus, ConsensusAmino, ConsensusSDKType } from "../version/types";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../types/types";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponses {
    deliverTxs: ResponseDeliverTx[];
    endBlock?: ResponseEndBlock;
    beginBlock?: ResponseBeginBlock;
}
export interface ABCIResponsesProtoMsg {
    typeUrl: "/tendermint.state.ABCIResponses";
    value: Uint8Array;
}
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponsesAmino {
    deliver_txs: ResponseDeliverTxAmino[];
    end_block?: ResponseEndBlockAmino;
    begin_block?: ResponseBeginBlockAmino;
}
export interface ABCIResponsesAminoMsg {
    type: "/tendermint.state.ABCIResponses";
    value: ABCIResponsesAmino;
}
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponsesSDKType {
    deliver_txs: ResponseDeliverTxSDKType[];
    end_block?: ResponseEndBlockSDKType;
    begin_block?: ResponseBeginBlockSDKType;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
    validatorSet?: ValidatorSet;
    lastHeightChanged: Long;
}
export interface ValidatorsInfoProtoMsg {
    typeUrl: "/tendermint.state.ValidatorsInfo";
    value: Uint8Array;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfoAmino {
    validator_set?: ValidatorSetAmino;
    last_height_changed: string;
}
export interface ValidatorsInfoAminoMsg {
    type: "/tendermint.state.ValidatorsInfo";
    value: ValidatorsInfoAmino;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfoSDKType {
    validator_set?: ValidatorSetSDKType;
    last_height_changed: Long;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
    consensusParams: ConsensusParams;
    lastHeightChanged: Long;
}
export interface ConsensusParamsInfoProtoMsg {
    typeUrl: "/tendermint.state.ConsensusParamsInfo";
    value: Uint8Array;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfoAmino {
    consensus_params?: ConsensusParamsAmino;
    last_height_changed: string;
}
export interface ConsensusParamsInfoAminoMsg {
    type: "/tendermint.state.ConsensusParamsInfo";
    value: ConsensusParamsInfoAmino;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfoSDKType {
    consensus_params: ConsensusParamsSDKType;
    last_height_changed: Long;
}
export interface ABCIResponsesInfo {
    abciResponses?: ABCIResponses;
    height: Long;
}
export interface ABCIResponsesInfoProtoMsg {
    typeUrl: "/tendermint.state.ABCIResponsesInfo";
    value: Uint8Array;
}
export interface ABCIResponsesInfoAmino {
    abci_responses?: ABCIResponsesAmino;
    height: string;
}
export interface ABCIResponsesInfoAminoMsg {
    type: "/tendermint.state.ABCIResponsesInfo";
    value: ABCIResponsesInfoAmino;
}
export interface ABCIResponsesInfoSDKType {
    abci_responses?: ABCIResponsesSDKType;
    height: Long;
}
export interface Version {
    consensus: Consensus;
    software: string;
}
export interface VersionProtoMsg {
    typeUrl: "/tendermint.state.Version";
    value: Uint8Array;
}
export interface VersionAmino {
    consensus?: ConsensusAmino;
    software: string;
}
export interface VersionAminoMsg {
    type: "/tendermint.state.Version";
    value: VersionAmino;
}
export interface VersionSDKType {
    consensus: ConsensusSDKType;
    software: string;
}
export interface State {
    version: Version;
    /** immutable */
    chainId: string;
    initialHeight: Long;
    /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
    lastBlockHeight: Long;
    lastBlockId: BlockID;
    lastBlockTime: Date;
    /**
     * LastValidators is used to validate block.LastCommit.
     * Validators are persisted to the database separately every time they change,
     * so we can query for historical validator sets.
     * Note that if s.LastBlockHeight causes a valset change,
     * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
     * Extra +1 due to nextValSet delay.
     */
    nextValidators?: ValidatorSet;
    validators?: ValidatorSet;
    lastValidators?: ValidatorSet;
    lastHeightValidatorsChanged: Long;
    /**
     * Consensus parameters used for validating blocks.
     * Changes returned by EndBlock and updated after Commit.
     */
    consensusParams: ConsensusParams;
    lastHeightConsensusParamsChanged: Long;
    /** Merkle root of the results from executing prev block */
    lastResultsHash: Uint8Array;
    /** the latest AppHash we've received from calling abci.Commit() */
    appHash: Uint8Array;
}
export interface StateProtoMsg {
    typeUrl: "/tendermint.state.State";
    value: Uint8Array;
}
export interface StateAmino {
    version?: VersionAmino;
    /** immutable */
    chain_id: string;
    initial_height: string;
    /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
    last_block_height: string;
    last_block_id?: BlockIDAmino;
    last_block_time?: Date;
    /**
     * LastValidators is used to validate block.LastCommit.
     * Validators are persisted to the database separately every time they change,
     * so we can query for historical validator sets.
     * Note that if s.LastBlockHeight causes a valset change,
     * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
     * Extra +1 due to nextValSet delay.
     */
    next_validators?: ValidatorSetAmino;
    validators?: ValidatorSetAmino;
    last_validators?: ValidatorSetAmino;
    last_height_validators_changed: string;
    /**
     * Consensus parameters used for validating blocks.
     * Changes returned by EndBlock and updated after Commit.
     */
    consensus_params?: ConsensusParamsAmino;
    last_height_consensus_params_changed: string;
    /** Merkle root of the results from executing prev block */
    last_results_hash: Uint8Array;
    /** the latest AppHash we've received from calling abci.Commit() */
    app_hash: Uint8Array;
}
export interface StateAminoMsg {
    type: "/tendermint.state.State";
    value: StateAmino;
}
export interface StateSDKType {
    version: VersionSDKType;
    chain_id: string;
    initial_height: Long;
    last_block_height: Long;
    last_block_id: BlockIDSDKType;
    last_block_time: Date;
    next_validators?: ValidatorSetSDKType;
    validators?: ValidatorSetSDKType;
    last_validators?: ValidatorSetSDKType;
    last_height_validators_changed: Long;
    consensus_params: ConsensusParamsSDKType;
    last_height_consensus_params_changed: Long;
    last_results_hash: Uint8Array;
    app_hash: Uint8Array;
}
export declare const ABCIResponses: {
    typeUrl: string;
    encode(message: ABCIResponses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponses;
    fromJSON(object: any): ABCIResponses;
    toJSON(message: ABCIResponses): unknown;
    fromPartial(object: Partial<ABCIResponses>): ABCIResponses;
    fromAmino(object: ABCIResponsesAmino): ABCIResponses;
    toAmino(message: ABCIResponses): ABCIResponsesAmino;
    fromAminoMsg(object: ABCIResponsesAminoMsg): ABCIResponses;
    fromProtoMsg(message: ABCIResponsesProtoMsg): ABCIResponses;
    toProto(message: ABCIResponses): Uint8Array;
    toProtoMsg(message: ABCIResponses): ABCIResponsesProtoMsg;
};
export declare const ValidatorsInfo: {
    typeUrl: string;
    encode(message: ValidatorsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorsInfo;
    fromJSON(object: any): ValidatorsInfo;
    toJSON(message: ValidatorsInfo): unknown;
    fromPartial(object: Partial<ValidatorsInfo>): ValidatorsInfo;
    fromAmino(object: ValidatorsInfoAmino): ValidatorsInfo;
    toAmino(message: ValidatorsInfo): ValidatorsInfoAmino;
    fromAminoMsg(object: ValidatorsInfoAminoMsg): ValidatorsInfo;
    fromProtoMsg(message: ValidatorsInfoProtoMsg): ValidatorsInfo;
    toProto(message: ValidatorsInfo): Uint8Array;
    toProtoMsg(message: ValidatorsInfo): ValidatorsInfoProtoMsg;
};
export declare const ConsensusParamsInfo: {
    typeUrl: string;
    encode(message: ConsensusParamsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParamsInfo;
    fromJSON(object: any): ConsensusParamsInfo;
    toJSON(message: ConsensusParamsInfo): unknown;
    fromPartial(object: Partial<ConsensusParamsInfo>): ConsensusParamsInfo;
    fromAmino(object: ConsensusParamsInfoAmino): ConsensusParamsInfo;
    toAmino(message: ConsensusParamsInfo): ConsensusParamsInfoAmino;
    fromAminoMsg(object: ConsensusParamsInfoAminoMsg): ConsensusParamsInfo;
    fromProtoMsg(message: ConsensusParamsInfoProtoMsg): ConsensusParamsInfo;
    toProto(message: ConsensusParamsInfo): Uint8Array;
    toProtoMsg(message: ConsensusParamsInfo): ConsensusParamsInfoProtoMsg;
};
export declare const ABCIResponsesInfo: {
    typeUrl: string;
    encode(message: ABCIResponsesInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponsesInfo;
    fromJSON(object: any): ABCIResponsesInfo;
    toJSON(message: ABCIResponsesInfo): unknown;
    fromPartial(object: Partial<ABCIResponsesInfo>): ABCIResponsesInfo;
    fromAmino(object: ABCIResponsesInfoAmino): ABCIResponsesInfo;
    toAmino(message: ABCIResponsesInfo): ABCIResponsesInfoAmino;
    fromAminoMsg(object: ABCIResponsesInfoAminoMsg): ABCIResponsesInfo;
    fromProtoMsg(message: ABCIResponsesInfoProtoMsg): ABCIResponsesInfo;
    toProto(message: ABCIResponsesInfo): Uint8Array;
    toProtoMsg(message: ABCIResponsesInfo): ABCIResponsesInfoProtoMsg;
};
export declare const Version: {
    typeUrl: string;
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial(object: Partial<Version>): Version;
    fromAmino(object: VersionAmino): Version;
    toAmino(message: Version): VersionAmino;
    fromAminoMsg(object: VersionAminoMsg): Version;
    fromProtoMsg(message: VersionProtoMsg): Version;
    toProto(message: Version): Uint8Array;
    toProtoMsg(message: Version): VersionProtoMsg;
};
export declare const State: {
    typeUrl: string;
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): State;
    fromJSON(object: any): State;
    toJSON(message: State): unknown;
    fromPartial(object: Partial<State>): State;
    fromAmino(object: StateAmino): State;
    toAmino(message: State): StateAmino;
    fromAminoMsg(object: StateAminoMsg): State;
    fromProtoMsg(message: StateProtoMsg): State;
    toProto(message: State): Uint8Array;
    toProtoMsg(message: State): StateProtoMsg;
};
