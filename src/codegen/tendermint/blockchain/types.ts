import { Block, BlockAmino, BlockSDKType } from "../types/block";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
  height: Long;
}
export interface BlockRequestProtoMsg {
  typeUrl: "/tendermint.blockchain.BlockRequest";
  value: Uint8Array;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestAmino {
  height?: string;
}
export interface BlockRequestAminoMsg {
  type: "/tendermint.blockchain.BlockRequest";
  value: BlockRequestAmino;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestSDKType {
  height: Long;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponse {
  height: Long;
}
export interface NoBlockResponseProtoMsg {
  typeUrl: "/tendermint.blockchain.NoBlockResponse";
  value: Uint8Array;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponseAmino {
  height?: string;
}
export interface NoBlockResponseAminoMsg {
  type: "/tendermint.blockchain.NoBlockResponse";
  value: NoBlockResponseAmino;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponseSDKType {
  height: Long;
}
/** BlockResponse returns block to the requested */
export interface BlockResponse {
  block?: Block;
}
export interface BlockResponseProtoMsg {
  typeUrl: "/tendermint.blockchain.BlockResponse";
  value: Uint8Array;
}
/** BlockResponse returns block to the requested */
export interface BlockResponseAmino {
  block?: BlockAmino;
}
export interface BlockResponseAminoMsg {
  type: "/tendermint.blockchain.BlockResponse";
  value: BlockResponseAmino;
}
/** BlockResponse returns block to the requested */
export interface BlockResponseSDKType {
  block?: BlockSDKType;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequest {}
export interface StatusRequestProtoMsg {
  typeUrl: "/tendermint.blockchain.StatusRequest";
  value: Uint8Array;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequestAmino {}
export interface StatusRequestAminoMsg {
  type: "/tendermint.blockchain.StatusRequest";
  value: StatusRequestAmino;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequestSDKType {}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponse {
  height: Long;
  base: Long;
}
export interface StatusResponseProtoMsg {
  typeUrl: "/tendermint.blockchain.StatusResponse";
  value: Uint8Array;
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponseAmino {
  height?: string;
  base?: string;
}
export interface StatusResponseAminoMsg {
  type: "/tendermint.blockchain.StatusResponse";
  value: StatusResponseAmino;
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponseSDKType {
  height: Long;
  base: Long;
}
export interface Message {
  blockRequest?: BlockRequest;
  noBlockResponse?: NoBlockResponse;
  blockResponse?: BlockResponse;
  statusRequest?: StatusRequest;
  statusResponse?: StatusResponse;
}
export interface MessageProtoMsg {
  typeUrl: "/tendermint.blockchain.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  block_request?: BlockRequestAmino;
  no_block_response?: NoBlockResponseAmino;
  block_response?: BlockResponseAmino;
  status_request?: StatusRequestAmino;
  status_response?: StatusResponseAmino;
}
export interface MessageAminoMsg {
  type: "/tendermint.blockchain.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  block_request?: BlockRequestSDKType;
  no_block_response?: NoBlockResponseSDKType;
  block_response?: BlockResponseSDKType;
  status_request?: StatusRequestSDKType;
  status_response?: StatusResponseSDKType;
}
function createBaseBlockRequest(): BlockRequest {
  return {
    height: Long.ZERO
  };
}
export const BlockRequest = {
  typeUrl: "/tendermint.blockchain.BlockRequest",
  encode(message: BlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockRequest {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  toJSON(message: BlockRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<BlockRequest>): BlockRequest {
    const message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },
  fromAmino(object: BlockRequestAmino): BlockRequest {
    const message = createBaseBlockRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    return message;
  },
  toAmino(message: BlockRequest): BlockRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockRequestAminoMsg): BlockRequest {
    return BlockRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockRequestProtoMsg): BlockRequest {
    return BlockRequest.decode(message.value);
  },
  toProto(message: BlockRequest): Uint8Array {
    return BlockRequest.encode(message).finish();
  },
  toProtoMsg(message: BlockRequest): BlockRequestProtoMsg {
    return {
      typeUrl: "/tendermint.blockchain.BlockRequest",
      value: BlockRequest.encode(message).finish()
    };
  }
};
function createBaseNoBlockResponse(): NoBlockResponse {
  return {
    height: Long.ZERO
  };
}
export const NoBlockResponse = {
  typeUrl: "/tendermint.blockchain.NoBlockResponse",
  encode(message: NoBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NoBlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNoBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NoBlockResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  toJSON(message: NoBlockResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<NoBlockResponse>): NoBlockResponse {
    const message = createBaseNoBlockResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  },
  fromAmino(object: NoBlockResponseAmino): NoBlockResponse {
    const message = createBaseNoBlockResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    return message;
  },
  toAmino(message: NoBlockResponse): NoBlockResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NoBlockResponseAminoMsg): NoBlockResponse {
    return NoBlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: NoBlockResponseProtoMsg): NoBlockResponse {
    return NoBlockResponse.decode(message.value);
  },
  toProto(message: NoBlockResponse): Uint8Array {
    return NoBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: NoBlockResponse): NoBlockResponseProtoMsg {
    return {
      typeUrl: "/tendermint.blockchain.NoBlockResponse",
      value: NoBlockResponse.encode(message).finish()
    };
  }
};
function createBaseBlockResponse(): BlockResponse {
  return {
    block: undefined
  };
}
export const BlockResponse = {
  typeUrl: "/tendermint.blockchain.BlockResponse",
  encode(message: BlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): BlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockResponse {
    return {
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
    };
  },
  toJSON(message: BlockResponse): unknown {
    const obj: any = {};
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BlockResponse>): BlockResponse {
    const message = createBaseBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  },
  fromAmino(object: BlockResponseAmino): BlockResponse {
    const message = createBaseBlockResponse();
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromAmino(object.block);
    }
    return message;
  },
  toAmino(message: BlockResponse): BlockResponseAmino {
    const obj: any = {};
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockResponseAminoMsg): BlockResponse {
    return BlockResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockResponseProtoMsg): BlockResponse {
    return BlockResponse.decode(message.value);
  },
  toProto(message: BlockResponse): Uint8Array {
    return BlockResponse.encode(message).finish();
  },
  toProtoMsg(message: BlockResponse): BlockResponseProtoMsg {
    return {
      typeUrl: "/tendermint.blockchain.BlockResponse",
      value: BlockResponse.encode(message).finish()
    };
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  typeUrl: "/tendermint.blockchain.StatusRequest",
  encode(_: StatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): StatusRequest {
    return {};
  },
  toJSON(_: StatusRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  fromAmino(_: StatusRequestAmino): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  },
  toAmino(_: StatusRequest): StatusRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest {
    return StatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest {
    return StatusRequest.decode(message.value);
  },
  toProto(message: StatusRequest): Uint8Array {
    return StatusRequest.encode(message).finish();
  },
  toProtoMsg(message: StatusRequest): StatusRequestProtoMsg {
    return {
      typeUrl: "/tendermint.blockchain.StatusRequest",
      value: StatusRequest.encode(message).finish()
    };
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    height: Long.ZERO,
    base: Long.ZERO
  };
}
export const StatusResponse = {
  typeUrl: "/tendermint.blockchain.StatusResponse",
  encode(message: StatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (!message.base.isZero()) {
      writer.uint32(16).int64(message.base);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.base = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StatusResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      base: isSet(object.base) ? Long.fromValue(object.base) : Long.ZERO
    };
  },
  toJSON(message: StatusResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.base !== undefined && (obj.base = (message.base || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.base = object.base !== undefined && object.base !== null ? Long.fromValue(object.base) : Long.ZERO;
    return message;
  },
  fromAmino(object: StatusResponseAmino): StatusResponse {
    const message = createBaseStatusResponse();
    if (object.height !== undefined && object.height !== null) {
      message.height = Long.fromString(object.height);
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = Long.fromString(object.base);
    }
    return message;
  },
  toAmino(message: StatusResponse): StatusResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.base = message.base ? message.base.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse {
    return StatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse {
    return StatusResponse.decode(message.value);
  },
  toProto(message: StatusResponse): Uint8Array {
    return StatusResponse.encode(message).finish();
  },
  toProtoMsg(message: StatusResponse): StatusResponseProtoMsg {
    return {
      typeUrl: "/tendermint.blockchain.StatusResponse",
      value: StatusResponse.encode(message).finish()
    };
  }
};
function createBaseMessage(): Message {
  return {
    blockRequest: undefined,
    noBlockResponse: undefined,
    blockResponse: undefined,
    statusRequest: undefined,
    statusResponse: undefined
  };
}
export const Message = {
  typeUrl: "/tendermint.blockchain.Message",
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockRequest !== undefined) {
      BlockRequest.encode(message.blockRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.noBlockResponse !== undefined) {
      NoBlockResponse.encode(message.noBlockResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockResponse !== undefined) {
      BlockResponse.encode(message.blockResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.statusRequest !== undefined) {
      StatusRequest.encode(message.statusRequest, writer.uint32(34).fork()).ldelim();
    }
    if (message.statusResponse !== undefined) {
      StatusResponse.encode(message.statusResponse, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockRequest = BlockRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.noBlockResponse = NoBlockResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.blockResponse = BlockResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.statusRequest = StatusRequest.decode(reader, reader.uint32());
          break;
        case 5:
          message.statusResponse = StatusResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Message {
    return {
      blockRequest: isSet(object.blockRequest) ? BlockRequest.fromJSON(object.blockRequest) : undefined,
      noBlockResponse: isSet(object.noBlockResponse) ? NoBlockResponse.fromJSON(object.noBlockResponse) : undefined,
      blockResponse: isSet(object.blockResponse) ? BlockResponse.fromJSON(object.blockResponse) : undefined,
      statusRequest: isSet(object.statusRequest) ? StatusRequest.fromJSON(object.statusRequest) : undefined,
      statusResponse: isSet(object.statusResponse) ? StatusResponse.fromJSON(object.statusResponse) : undefined
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.blockRequest !== undefined && (obj.blockRequest = message.blockRequest ? BlockRequest.toJSON(message.blockRequest) : undefined);
    message.noBlockResponse !== undefined && (obj.noBlockResponse = message.noBlockResponse ? NoBlockResponse.toJSON(message.noBlockResponse) : undefined);
    message.blockResponse !== undefined && (obj.blockResponse = message.blockResponse ? BlockResponse.toJSON(message.blockResponse) : undefined);
    message.statusRequest !== undefined && (obj.statusRequest = message.statusRequest ? StatusRequest.toJSON(message.statusRequest) : undefined);
    message.statusResponse !== undefined && (obj.statusResponse = message.statusResponse ? StatusResponse.toJSON(message.statusResponse) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.blockRequest = object.blockRequest !== undefined && object.blockRequest !== null ? BlockRequest.fromPartial(object.blockRequest) : undefined;
    message.noBlockResponse = object.noBlockResponse !== undefined && object.noBlockResponse !== null ? NoBlockResponse.fromPartial(object.noBlockResponse) : undefined;
    message.blockResponse = object.blockResponse !== undefined && object.blockResponse !== null ? BlockResponse.fromPartial(object.blockResponse) : undefined;
    message.statusRequest = object.statusRequest !== undefined && object.statusRequest !== null ? StatusRequest.fromPartial(object.statusRequest) : undefined;
    message.statusResponse = object.statusResponse !== undefined && object.statusResponse !== null ? StatusResponse.fromPartial(object.statusResponse) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    const message = createBaseMessage();
    if (object.block_request !== undefined && object.block_request !== null) {
      message.blockRequest = BlockRequest.fromAmino(object.block_request);
    }
    if (object.no_block_response !== undefined && object.no_block_response !== null) {
      message.noBlockResponse = NoBlockResponse.fromAmino(object.no_block_response);
    }
    if (object.block_response !== undefined && object.block_response !== null) {
      message.blockResponse = BlockResponse.fromAmino(object.block_response);
    }
    if (object.status_request !== undefined && object.status_request !== null) {
      message.statusRequest = StatusRequest.fromAmino(object.status_request);
    }
    if (object.status_response !== undefined && object.status_response !== null) {
      message.statusResponse = StatusResponse.fromAmino(object.status_response);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.block_request = message.blockRequest ? BlockRequest.toAmino(message.blockRequest) : undefined;
    obj.no_block_response = message.noBlockResponse ? NoBlockResponse.toAmino(message.noBlockResponse) : undefined;
    obj.block_response = message.blockResponse ? BlockResponse.toAmino(message.blockResponse) : undefined;
    obj.status_request = message.statusRequest ? StatusRequest.toAmino(message.statusRequest) : undefined;
    obj.status_response = message.statusResponse ? StatusResponse.toAmino(message.statusResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageAminoMsg): Message {
    return Message.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageProtoMsg): Message {
    return Message.decode(message.value);
  },
  toProto(message: Message): Uint8Array {
    return Message.encode(message).finish();
  },
  toProtoMsg(message: Message): MessageProtoMsg {
    return {
      typeUrl: "/tendermint.blockchain.Message",
      value: Message.encode(message).finish()
    };
  }
};