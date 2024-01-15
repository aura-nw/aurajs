import { ResponseDeliverTx, ResponseDeliverTxAmino, ResponseDeliverTxSDKType, ResponseEndBlock, ResponseEndBlockAmino, ResponseEndBlockSDKType, ResponseBeginBlock, ResponseBeginBlockAmino, ResponseBeginBlockSDKType } from "../abci/types";
import { ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "../types/validator";
import { ConsensusParams, ConsensusParamsAmino, ConsensusParamsSDKType } from "../types/params";
import { Consensus, ConsensusAmino, ConsensusSDKType } from "../version/types";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../types/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, toTimestamp, fromTimestamp, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../helpers";
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
  deliver_txs?: ResponseDeliverTxAmino[];
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
  last_height_changed?: string;
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
  last_height_changed?: string;
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
  height?: string;
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
  software?: string;
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
  chain_id?: string;
  initial_height?: string;
  /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
  last_block_height?: string;
  last_block_id?: BlockIDAmino;
  last_block_time?: string;
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
  last_height_validators_changed?: string;
  /**
   * Consensus parameters used for validating blocks.
   * Changes returned by EndBlock and updated after Commit.
   */
  consensus_params?: ConsensusParamsAmino;
  last_height_consensus_params_changed?: string;
  /** Merkle root of the results from executing prev block */
  last_results_hash?: string;
  /** the latest AppHash we've received from calling abci.Commit() */
  app_hash?: string;
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
function createBaseABCIResponses(): ABCIResponses {
  return {
    deliverTxs: [],
    endBlock: undefined,
    beginBlock: undefined
  };
}
export const ABCIResponses = {
  typeUrl: "/tendermint.state.ABCIResponses",
  encode(message: ABCIResponses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deliverTxs) {
      ResponseDeliverTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.endBlock !== undefined) {
      ResponseEndBlock.encode(message.endBlock, writer.uint32(18).fork()).ldelim();
    }
    if (message.beginBlock !== undefined) {
      ResponseBeginBlock.encode(message.beginBlock, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIResponses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deliverTxs.push(ResponseDeliverTx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.endBlock = ResponseEndBlock.decode(reader, reader.uint32());
          break;
        case 3:
          message.beginBlock = ResponseBeginBlock.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIResponses {
    return {
      deliverTxs: Array.isArray(object?.deliverTxs) ? object.deliverTxs.map((e: any) => ResponseDeliverTx.fromJSON(e)) : [],
      endBlock: isSet(object.endBlock) ? ResponseEndBlock.fromJSON(object.endBlock) : undefined,
      beginBlock: isSet(object.beginBlock) ? ResponseBeginBlock.fromJSON(object.beginBlock) : undefined
    };
  },
  toJSON(message: ABCIResponses): unknown {
    const obj: any = {};
    if (message.deliverTxs) {
      obj.deliverTxs = message.deliverTxs.map(e => e ? ResponseDeliverTx.toJSON(e) : undefined);
    } else {
      obj.deliverTxs = [];
    }
    message.endBlock !== undefined && (obj.endBlock = message.endBlock ? ResponseEndBlock.toJSON(message.endBlock) : undefined);
    message.beginBlock !== undefined && (obj.beginBlock = message.beginBlock ? ResponseBeginBlock.toJSON(message.beginBlock) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ABCIResponses>): ABCIResponses {
    const message = createBaseABCIResponses();
    message.deliverTxs = object.deliverTxs?.map(e => ResponseDeliverTx.fromPartial(e)) || [];
    message.endBlock = object.endBlock !== undefined && object.endBlock !== null ? ResponseEndBlock.fromPartial(object.endBlock) : undefined;
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? ResponseBeginBlock.fromPartial(object.beginBlock) : undefined;
    return message;
  },
  fromAmino(object: ABCIResponsesAmino): ABCIResponses {
    const message = createBaseABCIResponses();
    message.deliverTxs = object.deliver_txs?.map(e => ResponseDeliverTx.fromAmino(e)) || [];
    if (object.end_block !== undefined && object.end_block !== null) {
      message.endBlock = ResponseEndBlock.fromAmino(object.end_block);
    }
    if (object.begin_block !== undefined && object.begin_block !== null) {
      message.beginBlock = ResponseBeginBlock.fromAmino(object.begin_block);
    }
    return message;
  },
  toAmino(message: ABCIResponses): ABCIResponsesAmino {
    const obj: any = {};
    if (message.deliverTxs) {
      obj.deliver_txs = message.deliverTxs.map(e => e ? ResponseDeliverTx.toAmino(e) : undefined);
    } else {
      obj.deliver_txs = [];
    }
    obj.end_block = message.endBlock ? ResponseEndBlock.toAmino(message.endBlock) : undefined;
    obj.begin_block = message.beginBlock ? ResponseBeginBlock.toAmino(message.beginBlock) : undefined;
    return obj;
  },
  fromAminoMsg(object: ABCIResponsesAminoMsg): ABCIResponses {
    return ABCIResponses.fromAmino(object.value);
  },
  fromProtoMsg(message: ABCIResponsesProtoMsg): ABCIResponses {
    return ABCIResponses.decode(message.value);
  },
  toProto(message: ABCIResponses): Uint8Array {
    return ABCIResponses.encode(message).finish();
  },
  toProtoMsg(message: ABCIResponses): ABCIResponsesProtoMsg {
    return {
      typeUrl: "/tendermint.state.ABCIResponses",
      value: ABCIResponses.encode(message).finish()
    };
  }
};
function createBaseValidatorsInfo(): ValidatorsInfo {
  return {
    validatorSet: undefined,
    lastHeightChanged: Long.ZERO
  };
}
export const ValidatorsInfo = {
  typeUrl: "/tendermint.state.ValidatorsInfo",
  encode(message: ValidatorsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastHeightChanged.isZero()) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastHeightChanged = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorsInfo {
    return {
      validatorSet: isSet(object.validatorSet) ? ValidatorSet.fromJSON(object.validatorSet) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? Long.fromValue(object.lastHeightChanged) : Long.ZERO
    };
  },
  toJSON(message: ValidatorsInfo): unknown {
    const obj: any = {};
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    message.lastHeightChanged !== undefined && (obj.lastHeightChanged = (message.lastHeightChanged || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ValidatorsInfo>): ValidatorsInfo {
    const message = createBaseValidatorsInfo();
    message.validatorSet = object.validatorSet !== undefined && object.validatorSet !== null ? ValidatorSet.fromPartial(object.validatorSet) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? Long.fromValue(object.lastHeightChanged) : Long.ZERO;
    return message;
  },
  fromAmino(object: ValidatorsInfoAmino): ValidatorsInfo {
    const message = createBaseValidatorsInfo();
    if (object.validator_set !== undefined && object.validator_set !== null) {
      message.validatorSet = ValidatorSet.fromAmino(object.validator_set);
    }
    if (object.last_height_changed !== undefined && object.last_height_changed !== null) {
      message.lastHeightChanged = Long.fromString(object.last_height_changed);
    }
    return message;
  },
  toAmino(message: ValidatorsInfo): ValidatorsInfoAmino {
    const obj: any = {};
    obj.validator_set = message.validatorSet ? ValidatorSet.toAmino(message.validatorSet) : undefined;
    obj.last_height_changed = message.lastHeightChanged ? message.lastHeightChanged.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorsInfoAminoMsg): ValidatorsInfo {
    return ValidatorsInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorsInfoProtoMsg): ValidatorsInfo {
    return ValidatorsInfo.decode(message.value);
  },
  toProto(message: ValidatorsInfo): Uint8Array {
    return ValidatorsInfo.encode(message).finish();
  },
  toProtoMsg(message: ValidatorsInfo): ValidatorsInfoProtoMsg {
    return {
      typeUrl: "/tendermint.state.ValidatorsInfo",
      value: ValidatorsInfo.encode(message).finish()
    };
  }
};
function createBaseConsensusParamsInfo(): ConsensusParamsInfo {
  return {
    consensusParams: ConsensusParams.fromPartial({}),
    lastHeightChanged: Long.ZERO
  };
}
export const ConsensusParamsInfo = {
  typeUrl: "/tendermint.state.ConsensusParamsInfo",
  encode(message: ConsensusParamsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(10).fork()).ldelim();
    }
    if (!message.lastHeightChanged.isZero()) {
      writer.uint32(16).int64(message.lastHeightChanged);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusParamsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusParamsInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastHeightChanged = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusParamsInfo {
    return {
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightChanged: isSet(object.lastHeightChanged) ? Long.fromValue(object.lastHeightChanged) : Long.ZERO
    };
  },
  toJSON(message: ConsensusParamsInfo): unknown {
    const obj: any = {};
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : undefined);
    message.lastHeightChanged !== undefined && (obj.lastHeightChanged = (message.lastHeightChanged || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ConsensusParamsInfo>): ConsensusParamsInfo {
    const message = createBaseConsensusParamsInfo();
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightChanged = object.lastHeightChanged !== undefined && object.lastHeightChanged !== null ? Long.fromValue(object.lastHeightChanged) : Long.ZERO;
    return message;
  },
  fromAmino(object: ConsensusParamsInfoAmino): ConsensusParamsInfo {
    const message = createBaseConsensusParamsInfo();
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    if (object.last_height_changed !== undefined && object.last_height_changed !== null) {
      message.lastHeightChanged = Long.fromString(object.last_height_changed);
    }
    return message;
  },
  toAmino(message: ConsensusParamsInfo): ConsensusParamsInfoAmino {
    const obj: any = {};
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    obj.last_height_changed = message.lastHeightChanged ? message.lastHeightChanged.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusParamsInfoAminoMsg): ConsensusParamsInfo {
    return ConsensusParamsInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ConsensusParamsInfoProtoMsg): ConsensusParamsInfo {
    return ConsensusParamsInfo.decode(message.value);
  },
  toProto(message: ConsensusParamsInfo): Uint8Array {
    return ConsensusParamsInfo.encode(message).finish();
  },
  toProtoMsg(message: ConsensusParamsInfo): ConsensusParamsInfoProtoMsg {
    return {
      typeUrl: "/tendermint.state.ConsensusParamsInfo",
      value: ConsensusParamsInfo.encode(message).finish()
    };
  }
};
function createBaseABCIResponsesInfo(): ABCIResponsesInfo {
  return {
    abciResponses: undefined,
    height: Long.ZERO
  };
}
export const ABCIResponsesInfo = {
  typeUrl: "/tendermint.state.ABCIResponsesInfo",
  encode(message: ABCIResponsesInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.abciResponses !== undefined) {
      ABCIResponses.encode(message.abciResponses, writer.uint32(10).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ABCIResponsesInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseABCIResponsesInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abciResponses = ABCIResponses.decode(reader, reader.uint32());
          break;
        case 2:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ABCIResponsesInfo {
    return {
      abciResponses: isSet(object.abciResponses) ? ABCIResponses.fromJSON(object.abciResponses) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  toJSON(message: ABCIResponsesInfo): unknown {
    const obj: any = {};
    message.abciResponses !== undefined && (obj.abciResponses = message.abciResponses ? ABCIResponses.toJSON(message.abciResponses) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<ABCIResponsesInfo>): ABCIResponsesInfo {
    const message = createBaseABCIResponsesInfo();
    message.abciResponses = object.abciResponses !== undefined && object.abciResponses !== null ? ABCIResponses.fromPartial(object.abciResponses) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },
  fromAmino(object: ABCIResponsesInfoAmino): ABCIResponsesInfo {
    const message = createBaseABCIResponsesInfo();
    if (object.abci_responses !== undefined && object.abci_responses !== null) {
      message.abciResponses = ABCIResponses.fromAmino(object.abci_responses);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    return message;
  },
  toAmino(message: ABCIResponsesInfo): ABCIResponsesInfoAmino {
    const obj: any = {};
    obj.abci_responses = message.abciResponses ? ABCIResponses.toAmino(message.abciResponses) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ABCIResponsesInfoAminoMsg): ABCIResponsesInfo {
    return ABCIResponsesInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ABCIResponsesInfoProtoMsg): ABCIResponsesInfo {
    return ABCIResponsesInfo.decode(message.value);
  },
  toProto(message: ABCIResponsesInfo): Uint8Array {
    return ABCIResponsesInfo.encode(message).finish();
  },
  toProtoMsg(message: ABCIResponsesInfo): ABCIResponsesInfoProtoMsg {
    return {
      typeUrl: "/tendermint.state.ABCIResponsesInfo",
      value: ABCIResponsesInfo.encode(message).finish()
    };
  }
};
function createBaseVersion(): Version {
  return {
    consensus: Consensus.fromPartial({}),
    software: ""
  };
}
export const Version = {
  typeUrl: "/tendermint.state.Version",
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus !== undefined) {
      Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }
    if (message.software !== "") {
      writer.uint32(18).string(message.software);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus = Consensus.decode(reader, reader.uint32());
          break;
        case 2:
          message.software = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Version {
    return {
      consensus: isSet(object.consensus) ? Consensus.fromJSON(object.consensus) : undefined,
      software: isSet(object.software) ? String(object.software) : ""
    };
  },
  toJSON(message: Version): unknown {
    const obj: any = {};
    message.consensus !== undefined && (obj.consensus = message.consensus ? Consensus.toJSON(message.consensus) : undefined);
    message.software !== undefined && (obj.software = message.software);
    return obj;
  },
  fromPartial(object: Partial<Version>): Version {
    const message = createBaseVersion();
    message.consensus = object.consensus !== undefined && object.consensus !== null ? Consensus.fromPartial(object.consensus) : undefined;
    message.software = object.software ?? "";
    return message;
  },
  fromAmino(object: VersionAmino): Version {
    const message = createBaseVersion();
    if (object.consensus !== undefined && object.consensus !== null) {
      message.consensus = Consensus.fromAmino(object.consensus);
    }
    if (object.software !== undefined && object.software !== null) {
      message.software = object.software;
    }
    return message;
  },
  toAmino(message: Version): VersionAmino {
    const obj: any = {};
    obj.consensus = message.consensus ? Consensus.toAmino(message.consensus) : undefined;
    obj.software = message.software;
    return obj;
  },
  fromAminoMsg(object: VersionAminoMsg): Version {
    return Version.fromAmino(object.value);
  },
  fromProtoMsg(message: VersionProtoMsg): Version {
    return Version.decode(message.value);
  },
  toProto(message: Version): Uint8Array {
    return Version.encode(message).finish();
  },
  toProtoMsg(message: Version): VersionProtoMsg {
    return {
      typeUrl: "/tendermint.state.Version",
      value: Version.encode(message).finish()
    };
  }
};
function createBaseState(): State {
  return {
    version: Version.fromPartial({}),
    chainId: "",
    initialHeight: Long.ZERO,
    lastBlockHeight: Long.ZERO,
    lastBlockId: BlockID.fromPartial({}),
    lastBlockTime: new Date(),
    nextValidators: undefined,
    validators: undefined,
    lastValidators: undefined,
    lastHeightValidatorsChanged: Long.ZERO,
    consensusParams: ConsensusParams.fromPartial({}),
    lastHeightConsensusParamsChanged: Long.ZERO,
    lastResultsHash: new Uint8Array(),
    appHash: new Uint8Array()
  };
}
export const State = {
  typeUrl: "/tendermint.state.State",
  encode(message: State, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (!message.initialHeight.isZero()) {
      writer.uint32(112).int64(message.initialHeight);
    }
    if (!message.lastBlockHeight.isZero()) {
      writer.uint32(24).int64(message.lastBlockHeight);
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastBlockTime !== undefined) {
      Timestamp.encode(toTimestamp(message.lastBlockTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.nextValidators !== undefined) {
      ValidatorSet.encode(message.nextValidators, writer.uint32(50).fork()).ldelim();
    }
    if (message.validators !== undefined) {
      ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
    }
    if (message.lastValidators !== undefined) {
      ValidatorSet.encode(message.lastValidators, writer.uint32(66).fork()).ldelim();
    }
    if (!message.lastHeightValidatorsChanged.isZero()) {
      writer.uint32(72).int64(message.lastHeightValidatorsChanged);
    }
    if (message.consensusParams !== undefined) {
      ConsensusParams.encode(message.consensusParams, writer.uint32(82).fork()).ldelim();
    }
    if (!message.lastHeightConsensusParamsChanged.isZero()) {
      writer.uint32(88).int64(message.lastHeightConsensusParamsChanged);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(98).bytes(message.lastResultsHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(106).bytes(message.appHash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): State {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 14:
          message.initialHeight = (reader.int64() as Long);
          break;
        case 3:
          message.lastBlockHeight = (reader.int64() as Long);
          break;
        case 4:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.lastBlockTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.nextValidators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 7:
          message.validators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 8:
          message.lastValidators = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 9:
          message.lastHeightValidatorsChanged = (reader.int64() as Long);
          break;
        case 10:
          message.consensusParams = ConsensusParams.decode(reader, reader.uint32());
          break;
        case 11:
          message.lastHeightConsensusParamsChanged = (reader.int64() as Long);
          break;
        case 12:
          message.lastResultsHash = reader.bytes();
          break;
        case 13:
          message.appHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): State {
    return {
      version: isSet(object.version) ? Version.fromJSON(object.version) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      initialHeight: isSet(object.initialHeight) ? Long.fromValue(object.initialHeight) : Long.ZERO,
      lastBlockHeight: isSet(object.lastBlockHeight) ? Long.fromValue(object.lastBlockHeight) : Long.ZERO,
      lastBlockId: isSet(object.lastBlockId) ? BlockID.fromJSON(object.lastBlockId) : undefined,
      lastBlockTime: isSet(object.lastBlockTime) ? fromJsonTimestamp(object.lastBlockTime) : undefined,
      nextValidators: isSet(object.nextValidators) ? ValidatorSet.fromJSON(object.nextValidators) : undefined,
      validators: isSet(object.validators) ? ValidatorSet.fromJSON(object.validators) : undefined,
      lastValidators: isSet(object.lastValidators) ? ValidatorSet.fromJSON(object.lastValidators) : undefined,
      lastHeightValidatorsChanged: isSet(object.lastHeightValidatorsChanged) ? Long.fromValue(object.lastHeightValidatorsChanged) : Long.ZERO,
      consensusParams: isSet(object.consensusParams) ? ConsensusParams.fromJSON(object.consensusParams) : undefined,
      lastHeightConsensusParamsChanged: isSet(object.lastHeightConsensusParamsChanged) ? Long.fromValue(object.lastHeightConsensusParamsChanged) : Long.ZERO,
      lastResultsHash: isSet(object.lastResultsHash) ? bytesFromBase64(object.lastResultsHash) : new Uint8Array(),
      appHash: isSet(object.appHash) ? bytesFromBase64(object.appHash) : new Uint8Array()
    };
  },
  toJSON(message: State): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.initialHeight !== undefined && (obj.initialHeight = (message.initialHeight || Long.ZERO).toString());
    message.lastBlockHeight !== undefined && (obj.lastBlockHeight = (message.lastBlockHeight || Long.ZERO).toString());
    message.lastBlockId !== undefined && (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastBlockTime !== undefined && (obj.lastBlockTime = message.lastBlockTime.toISOString());
    message.nextValidators !== undefined && (obj.nextValidators = message.nextValidators ? ValidatorSet.toJSON(message.nextValidators) : undefined);
    message.validators !== undefined && (obj.validators = message.validators ? ValidatorSet.toJSON(message.validators) : undefined);
    message.lastValidators !== undefined && (obj.lastValidators = message.lastValidators ? ValidatorSet.toJSON(message.lastValidators) : undefined);
    message.lastHeightValidatorsChanged !== undefined && (obj.lastHeightValidatorsChanged = (message.lastHeightValidatorsChanged || Long.ZERO).toString());
    message.consensusParams !== undefined && (obj.consensusParams = message.consensusParams ? ConsensusParams.toJSON(message.consensusParams) : undefined);
    message.lastHeightConsensusParamsChanged !== undefined && (obj.lastHeightConsensusParamsChanged = (message.lastHeightConsensusParamsChanged || Long.ZERO).toString());
    message.lastResultsHash !== undefined && (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.version = object.version !== undefined && object.version !== null ? Version.fromPartial(object.version) : undefined;
    message.chainId = object.chainId ?? "";
    message.initialHeight = object.initialHeight !== undefined && object.initialHeight !== null ? Long.fromValue(object.initialHeight) : Long.ZERO;
    message.lastBlockHeight = object.lastBlockHeight !== undefined && object.lastBlockHeight !== null ? Long.fromValue(object.lastBlockHeight) : Long.ZERO;
    message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
    message.lastBlockTime = object.lastBlockTime ?? undefined;
    message.nextValidators = object.nextValidators !== undefined && object.nextValidators !== null ? ValidatorSet.fromPartial(object.nextValidators) : undefined;
    message.validators = object.validators !== undefined && object.validators !== null ? ValidatorSet.fromPartial(object.validators) : undefined;
    message.lastValidators = object.lastValidators !== undefined && object.lastValidators !== null ? ValidatorSet.fromPartial(object.lastValidators) : undefined;
    message.lastHeightValidatorsChanged = object.lastHeightValidatorsChanged !== undefined && object.lastHeightValidatorsChanged !== null ? Long.fromValue(object.lastHeightValidatorsChanged) : Long.ZERO;
    message.consensusParams = object.consensusParams !== undefined && object.consensusParams !== null ? ConsensusParams.fromPartial(object.consensusParams) : undefined;
    message.lastHeightConsensusParamsChanged = object.lastHeightConsensusParamsChanged !== undefined && object.lastHeightConsensusParamsChanged !== null ? Long.fromValue(object.lastHeightConsensusParamsChanged) : Long.ZERO;
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: StateAmino): State {
    const message = createBaseState();
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromAmino(object.version);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.initial_height !== undefined && object.initial_height !== null) {
      message.initialHeight = Long.fromString(object.initial_height);
    }
    if (object.last_block_height !== undefined && object.last_block_height !== null) {
      message.lastBlockHeight = Long.fromString(object.last_block_height);
    }
    if (object.last_block_id !== undefined && object.last_block_id !== null) {
      message.lastBlockId = BlockID.fromAmino(object.last_block_id);
    }
    if (object.last_block_time !== undefined && object.last_block_time !== null) {
      message.lastBlockTime = fromTimestamp(Timestamp.fromAmino(object.last_block_time));
    }
    if (object.next_validators !== undefined && object.next_validators !== null) {
      message.nextValidators = ValidatorSet.fromAmino(object.next_validators);
    }
    if (object.validators !== undefined && object.validators !== null) {
      message.validators = ValidatorSet.fromAmino(object.validators);
    }
    if (object.last_validators !== undefined && object.last_validators !== null) {
      message.lastValidators = ValidatorSet.fromAmino(object.last_validators);
    }
    if (object.last_height_validators_changed !== undefined && object.last_height_validators_changed !== null) {
      message.lastHeightValidatorsChanged = Long.fromString(object.last_height_validators_changed);
    }
    if (object.consensus_params !== undefined && object.consensus_params !== null) {
      message.consensusParams = ConsensusParams.fromAmino(object.consensus_params);
    }
    if (object.last_height_consensus_params_changed !== undefined && object.last_height_consensus_params_changed !== null) {
      message.lastHeightConsensusParamsChanged = Long.fromString(object.last_height_consensus_params_changed);
    }
    if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
      message.lastResultsHash = bytesFromBase64(object.last_results_hash);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    return message;
  },
  toAmino(message: State): StateAmino {
    const obj: any = {};
    obj.version = message.version ? Version.toAmino(message.version) : undefined;
    obj.chain_id = message.chainId;
    obj.initial_height = message.initialHeight ? message.initialHeight.toString() : undefined;
    obj.last_block_height = message.lastBlockHeight ? message.lastBlockHeight.toString() : undefined;
    obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : undefined;
    obj.last_block_time = message.lastBlockTime ? Timestamp.toAmino(toTimestamp(message.lastBlockTime)) : undefined;
    obj.next_validators = message.nextValidators ? ValidatorSet.toAmino(message.nextValidators) : undefined;
    obj.validators = message.validators ? ValidatorSet.toAmino(message.validators) : undefined;
    obj.last_validators = message.lastValidators ? ValidatorSet.toAmino(message.lastValidators) : undefined;
    obj.last_height_validators_changed = message.lastHeightValidatorsChanged ? message.lastHeightValidatorsChanged.toString() : undefined;
    obj.consensus_params = message.consensusParams ? ConsensusParams.toAmino(message.consensusParams) : undefined;
    obj.last_height_consensus_params_changed = message.lastHeightConsensusParamsChanged ? message.lastHeightConsensusParamsChanged.toString() : undefined;
    obj.last_results_hash = message.lastResultsHash ? base64FromBytes(message.lastResultsHash) : undefined;
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    return obj;
  },
  fromAminoMsg(object: StateAminoMsg): State {
    return State.fromAmino(object.value);
  },
  fromProtoMsg(message: StateProtoMsg): State {
    return State.decode(message.value);
  },
  toProto(message: State): Uint8Array {
    return State.encode(message).finish();
  },
  toProtoMsg(message: State): StateProtoMsg {
    return {
      typeUrl: "/tendermint.state.State",
      value: State.encode(message).finish()
    };
  }
};