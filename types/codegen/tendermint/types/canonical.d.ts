import { SignedMsgType } from "./types";
import { Long } from "../../helpers";
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
    blockId: CanonicalBlockID;
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
    block_id: CanonicalBlockIDSDKType;
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
    blockId: CanonicalBlockID;
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
    block_id: CanonicalBlockIDSDKType;
    timestamp: Date;
    chain_id: string;
}
export declare const CanonicalBlockID: {
    typeUrl: string;
    encode(message: CanonicalBlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalBlockID;
    fromJSON(object: any): CanonicalBlockID;
    toJSON(message: CanonicalBlockID): unknown;
    fromPartial(object: Partial<CanonicalBlockID>): CanonicalBlockID;
    fromAmino(object: CanonicalBlockIDAmino): CanonicalBlockID;
    toAmino(message: CanonicalBlockID): CanonicalBlockIDAmino;
    fromAminoMsg(object: CanonicalBlockIDAminoMsg): CanonicalBlockID;
    fromProtoMsg(message: CanonicalBlockIDProtoMsg): CanonicalBlockID;
    toProto(message: CanonicalBlockID): Uint8Array;
    toProtoMsg(message: CanonicalBlockID): CanonicalBlockIDProtoMsg;
};
export declare const CanonicalPartSetHeader: {
    typeUrl: string;
    encode(message: CanonicalPartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalPartSetHeader;
    fromJSON(object: any): CanonicalPartSetHeader;
    toJSON(message: CanonicalPartSetHeader): unknown;
    fromPartial(object: Partial<CanonicalPartSetHeader>): CanonicalPartSetHeader;
    fromAmino(object: CanonicalPartSetHeaderAmino): CanonicalPartSetHeader;
    toAmino(message: CanonicalPartSetHeader): CanonicalPartSetHeaderAmino;
    fromAminoMsg(object: CanonicalPartSetHeaderAminoMsg): CanonicalPartSetHeader;
    fromProtoMsg(message: CanonicalPartSetHeaderProtoMsg): CanonicalPartSetHeader;
    toProto(message: CanonicalPartSetHeader): Uint8Array;
    toProtoMsg(message: CanonicalPartSetHeader): CanonicalPartSetHeaderProtoMsg;
};
export declare const CanonicalProposal: {
    typeUrl: string;
    encode(message: CanonicalProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalProposal;
    fromJSON(object: any): CanonicalProposal;
    toJSON(message: CanonicalProposal): unknown;
    fromPartial(object: Partial<CanonicalProposal>): CanonicalProposal;
    fromAmino(object: CanonicalProposalAmino): CanonicalProposal;
    toAmino(message: CanonicalProposal): CanonicalProposalAmino;
    fromAminoMsg(object: CanonicalProposalAminoMsg): CanonicalProposal;
    fromProtoMsg(message: CanonicalProposalProtoMsg): CanonicalProposal;
    toProto(message: CanonicalProposal): Uint8Array;
    toProtoMsg(message: CanonicalProposal): CanonicalProposalProtoMsg;
};
export declare const CanonicalVote: {
    typeUrl: string;
    encode(message: CanonicalVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CanonicalVote;
    fromJSON(object: any): CanonicalVote;
    toJSON(message: CanonicalVote): unknown;
    fromPartial(object: Partial<CanonicalVote>): CanonicalVote;
    fromAmino(object: CanonicalVoteAmino): CanonicalVote;
    toAmino(message: CanonicalVote): CanonicalVoteAmino;
    fromAminoMsg(object: CanonicalVoteAminoMsg): CanonicalVote;
    fromProtoMsg(message: CanonicalVoteProtoMsg): CanonicalVote;
    toProto(message: CanonicalVote): Uint8Array;
    toProtoMsg(message: CanonicalVote): CanonicalVoteProtoMsg;
};
