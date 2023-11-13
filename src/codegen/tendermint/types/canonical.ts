import { SignedMsgType, signedMsgTypeFromJSON, signedMsgTypeToJSON } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CanonicalBlockID {
  hash: Uint8Array;
  partSetHeader: CanonicalPartSetHeader;
}
export interface CanonicalBlockIDProtoMsg {
  typeUrl: "/tendermint.types.CanonicalBlockID";
  value: Uint8Array;
}
export interface CanonicalBlockIDAmino {
  hash: Uint8Array;
  part_set_header?: CanonicalPartSetHeaderAmino;
}
export interface CanonicalBlockIDAminoMsg {
  type: "/tendermint.types.CanonicalBlockID";
  value: CanonicalBlockIDAmino;
}
export interface CanonicalBlockIDSDKType {
  hash: Uint8Array;
  part_set_header: CanonicalPartSetHeaderSDKType;
}
export interface CanonicalPartSetHeader {
  total: number;
  hash: Uint8Array;
}
export interface CanonicalPartSetHeaderProtoMsg {
  typeUrl: "/tendermint.types.CanonicalPartSetHeader";
  value: Uint8Array;
}
export interface CanonicalPartSetHeaderAmino {
  total: number;
  hash: Uint8Array;
}
export interface CanonicalPartSetHeaderAminoMsg {
  type: "/tendermint.types.CanonicalPartSetHeader";
  value: CanonicalPartSetHeaderAmino;
}
export interface CanonicalPartSetHeaderSDKType {
  total: number;
  hash: Uint8Array;
}
export interface CanonicalProposal {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: Long;
  /** canonicalization requires fixed size encoding here */
  round: Long;
  polRound: Long;
  blockId?: CanonicalBlockID;
  timestamp: Date;
  chainId: string;
}
export interface CanonicalProposalProtoMsg {
  typeUrl: "/tendermint.types.CanonicalProposal";
  value: Uint8Array;
}
export interface CanonicalProposalAmino {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: string;
  /** canonicalization requires fixed size encoding here */
  round: string;
  pol_round: string;
  block_id?: CanonicalBlockIDAmino;
  timestamp?: Date;
  chain_id: string;
}
export interface CanonicalProposalAminoMsg {
  type: "/tendermint.types.CanonicalProposal";
  value: CanonicalProposalAmino;
}
export interface CanonicalProposalSDKType {
  type: SignedMsgType;
  height: Long;
  round: Long;
  pol_round: Long;
  block_id?: CanonicalBlockIDSDKType;
  timestamp: Date;
  chain_id: string;
}
export interface CanonicalVote {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: Long;
  /** canonicalization requires fixed size encoding here */
  round: Long;
  blockId?: CanonicalBlockID;
  timestamp: Date;
  chainId: string;
}
export interface CanonicalVoteProtoMsg {
  typeUrl: "/tendermint.types.CanonicalVote";
  value: Uint8Array;
}
export interface CanonicalVoteAmino {
  /** type alias for byte */
  type: SignedMsgType;
  /** canonicalization requires fixed size encoding here */
  height: string;
  /** canonicalization requires fixed size encoding here */
  round: string;
  block_id?: CanonicalBlockIDAmino;
  timestamp?: Date;
  chain_id: string;
}
export interface CanonicalVoteAminoMsg {
  type: "/tendermint.types.CanonicalVote";
  value: CanonicalVoteAmino;
}
export interface CanonicalVoteSDKType {
  type: SignedMsgType;
  height: Long;
  round: Long;
  block_id?: CanonicalBlockIDSDKType;
  timestamp: Date;
  chain_id: string;
}
function createBaseCanonicalBlockID(): CanonicalBlockID {
  return {
    hash: new Uint8Array(),
    partSetHeader: CanonicalPartSetHeader.fromPartial({})
  };
}
export const CanonicalBlockID = {
  typeUrl: "/tendermint.types.CanonicalBlockID",
  encode(message: CanonicalBlockID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partSetHeader !== undefined) {
      CanonicalPartSetHeader.encode(message.partSetHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalBlockID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalBlockID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.partSetHeader = CanonicalPartSetHeader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CanonicalBlockID {
    return {
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      partSetHeader: isSet(object.partSetHeader) ? CanonicalPartSetHeader.fromJSON(object.partSetHeader) : undefined
    };
  },
  toJSON(message: CanonicalBlockID): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.partSetHeader !== undefined && (obj.partSetHeader = message.partSetHeader ? CanonicalPartSetHeader.toJSON(message.partSetHeader) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CanonicalBlockID>): CanonicalBlockID {
    const message = createBaseCanonicalBlockID();
    message.hash = object.hash ?? new Uint8Array();
    message.partSetHeader = object.partSetHeader !== undefined && object.partSetHeader !== null ? CanonicalPartSetHeader.fromPartial(object.partSetHeader) : undefined;
    return message;
  },
  fromAmino(object: CanonicalBlockIDAmino): CanonicalBlockID {
    return {
      hash: object.hash,
      partSetHeader: object?.part_set_header ? CanonicalPartSetHeader.fromAmino(object.part_set_header) : undefined
    };
  },
  toAmino(message: CanonicalBlockID): CanonicalBlockIDAmino {
    const obj: any = {};
    obj.hash = message.hash;
    obj.part_set_header = message.partSetHeader ? CanonicalPartSetHeader.toAmino(message.partSetHeader) : undefined;
    return obj;
  },
  fromAminoMsg(object: CanonicalBlockIDAminoMsg): CanonicalBlockID {
    return CanonicalBlockID.fromAmino(object.value);
  },
  fromProtoMsg(message: CanonicalBlockIDProtoMsg): CanonicalBlockID {
    return CanonicalBlockID.decode(message.value);
  },
  toProto(message: CanonicalBlockID): Uint8Array {
    return CanonicalBlockID.encode(message).finish();
  },
  toProtoMsg(message: CanonicalBlockID): CanonicalBlockIDProtoMsg {
    return {
      typeUrl: "/tendermint.types.CanonicalBlockID",
      value: CanonicalBlockID.encode(message).finish()
    };
  }
};
function createBaseCanonicalPartSetHeader(): CanonicalPartSetHeader {
  return {
    total: 0,
    hash: new Uint8Array()
  };
}
export const CanonicalPartSetHeader = {
  typeUrl: "/tendermint.types.CanonicalPartSetHeader",
  encode(message: CanonicalPartSetHeader, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalPartSetHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalPartSetHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CanonicalPartSetHeader {
    return {
      total: isSet(object.total) ? Number(object.total) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array()
    };
  },
  toJSON(message: CanonicalPartSetHeader): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<CanonicalPartSetHeader>): CanonicalPartSetHeader {
    const message = createBaseCanonicalPartSetHeader();
    message.total = object.total ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CanonicalPartSetHeaderAmino): CanonicalPartSetHeader {
    return {
      total: object.total,
      hash: object.hash
    };
  },
  toAmino(message: CanonicalPartSetHeader): CanonicalPartSetHeaderAmino {
    const obj: any = {};
    obj.total = message.total;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: CanonicalPartSetHeaderAminoMsg): CanonicalPartSetHeader {
    return CanonicalPartSetHeader.fromAmino(object.value);
  },
  fromProtoMsg(message: CanonicalPartSetHeaderProtoMsg): CanonicalPartSetHeader {
    return CanonicalPartSetHeader.decode(message.value);
  },
  toProto(message: CanonicalPartSetHeader): Uint8Array {
    return CanonicalPartSetHeader.encode(message).finish();
  },
  toProtoMsg(message: CanonicalPartSetHeader): CanonicalPartSetHeaderProtoMsg {
    return {
      typeUrl: "/tendermint.types.CanonicalPartSetHeader",
      value: CanonicalPartSetHeader.encode(message).finish()
    };
  }
};
function createBaseCanonicalProposal(): CanonicalProposal {
  return {
    type: 0,
    height: Long.ZERO,
    round: Long.ZERO,
    polRound: Long.ZERO,
    blockId: undefined,
    timestamp: new Date(),
    chainId: ""
  };
}
export const CanonicalProposal = {
  typeUrl: "/tendermint.types.CanonicalProposal",
  encode(message: CanonicalProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (!message.round.isZero()) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (!message.polRound.isZero()) {
      writer.uint32(32).int64(message.polRound);
    }
    if (message.blockId !== undefined) {
      CanonicalBlockID.encode(message.blockId, writer.uint32(42).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(50).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(58).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.height = (reader.sfixed64() as Long);
          break;
        case 3:
          message.round = (reader.sfixed64() as Long);
          break;
        case 4:
          message.polRound = (reader.int64() as Long);
          break;
        case 5:
          message.blockId = CanonicalBlockID.decode(reader, reader.uint32());
          break;
        case 6:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 7:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CanonicalProposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.ZERO,
      polRound: isSet(object.polRound) ? Long.fromValue(object.polRound) : Long.ZERO,
      blockId: isSet(object.blockId) ? CanonicalBlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON(message: CanonicalProposal): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = (message.round || Long.ZERO).toString());
    message.polRound !== undefined && (obj.polRound = (message.polRound || Long.ZERO).toString());
    message.blockId !== undefined && (obj.blockId = message.blockId ? CanonicalBlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<CanonicalProposal>): CanonicalProposal {
    const message = createBaseCanonicalProposal();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.ZERO;
    message.polRound = object.polRound !== undefined && object.polRound !== null ? Long.fromValue(object.polRound) : Long.ZERO;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? CanonicalBlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: CanonicalProposalAmino): CanonicalProposal {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: Long.fromString(object.height),
      round: Long.fromString(object.round),
      polRound: Long.fromString(object.pol_round),
      blockId: object?.block_id ? CanonicalBlockID.fromAmino(object.block_id) : undefined,
      timestamp: object.timestamp,
      chainId: object.chain_id
    };
  },
  toAmino(message: CanonicalProposal): CanonicalProposalAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round ? message.round.toString() : undefined;
    obj.pol_round = message.polRound ? message.polRound.toString() : undefined;
    obj.block_id = message.blockId ? CanonicalBlockID.toAmino(message.blockId) : undefined;
    obj.timestamp = message.timestamp;
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: CanonicalProposalAminoMsg): CanonicalProposal {
    return CanonicalProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: CanonicalProposalProtoMsg): CanonicalProposal {
    return CanonicalProposal.decode(message.value);
  },
  toProto(message: CanonicalProposal): Uint8Array {
    return CanonicalProposal.encode(message).finish();
  },
  toProtoMsg(message: CanonicalProposal): CanonicalProposalProtoMsg {
    return {
      typeUrl: "/tendermint.types.CanonicalProposal",
      value: CanonicalProposal.encode(message).finish()
    };
  }
};
function createBaseCanonicalVote(): CanonicalVote {
  return {
    type: 0,
    height: Long.ZERO,
    round: Long.ZERO,
    blockId: undefined,
    timestamp: new Date(),
    chainId: ""
  };
}
export const CanonicalVote = {
  typeUrl: "/tendermint.types.CanonicalVote",
  encode(message: CanonicalVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (!message.height.isZero()) {
      writer.uint32(17).sfixed64(message.height);
    }
    if (!message.round.isZero()) {
      writer.uint32(25).sfixed64(message.round);
    }
    if (message.blockId !== undefined) {
      CanonicalBlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(42).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(50).string(message.chainId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCanonicalVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = (reader.int32() as any);
          break;
        case 2:
          message.height = (reader.sfixed64() as Long);
          break;
        case 3:
          message.round = (reader.sfixed64() as Long);
          break;
        case 4:
          message.blockId = CanonicalBlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.chainId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CanonicalVote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      round: isSet(object.round) ? Long.fromValue(object.round) : Long.ZERO,
      blockId: isSet(object.blockId) ? CanonicalBlockID.fromJSON(object.blockId) : undefined,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  toJSON(message: CanonicalVote): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.round !== undefined && (obj.round = (message.round || Long.ZERO).toString());
    message.blockId !== undefined && (obj.blockId = message.blockId ? CanonicalBlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.chainId !== undefined && (obj.chainId = message.chainId);
    return obj;
  },
  fromPartial(object: Partial<CanonicalVote>): CanonicalVote {
    const message = createBaseCanonicalVote();
    message.type = object.type ?? 0;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.round = object.round !== undefined && object.round !== null ? Long.fromValue(object.round) : Long.ZERO;
    message.blockId = object.blockId !== undefined && object.blockId !== null ? CanonicalBlockID.fromPartial(object.blockId) : undefined;
    message.timestamp = object.timestamp ?? undefined;
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: CanonicalVoteAmino): CanonicalVote {
    return {
      type: isSet(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
      height: Long.fromString(object.height),
      round: Long.fromString(object.round),
      blockId: object?.block_id ? CanonicalBlockID.fromAmino(object.block_id) : undefined,
      timestamp: object.timestamp,
      chainId: object.chain_id
    };
  },
  toAmino(message: CanonicalVote): CanonicalVoteAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.round = message.round ? message.round.toString() : undefined;
    obj.block_id = message.blockId ? CanonicalBlockID.toAmino(message.blockId) : undefined;
    obj.timestamp = message.timestamp;
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: CanonicalVoteAminoMsg): CanonicalVote {
    return CanonicalVote.fromAmino(object.value);
  },
  fromProtoMsg(message: CanonicalVoteProtoMsg): CanonicalVote {
    return CanonicalVote.decode(message.value);
  },
  toProto(message: CanonicalVote): Uint8Array {
    return CanonicalVote.encode(message).finish();
  },
  toProtoMsg(message: CanonicalVote): CanonicalVoteProtoMsg {
    return {
      typeUrl: "/tendermint.types.CanonicalVote",
      value: CanonicalVote.encode(message).finish()
    };
  }
};