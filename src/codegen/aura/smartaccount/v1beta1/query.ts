import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/aura.smartaccount.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/aura.smartaccount.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/aura.smartaccount.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/aura.smartaccount.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGenerateAccountRequest {
  /** CodeID indicates which wasm binary code is to be used for creating account */
  codeId: Long;
  /** an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /** InitMsg is the JSON-encoded instantiate message for creating account */
  initMsg: Uint8Array;
  /** PubKey of account */
  publicKey: Any;
}
export interface QueryGenerateAccountRequestProtoMsg {
  typeUrl: "/aura.smartaccount.v1beta1.QueryGenerateAccountRequest";
  value: Uint8Array;
}
export interface QueryGenerateAccountRequestAmino {
  /** CodeID indicates which wasm binary code is to be used for creating account */
  code_id: string;
  /** an arbitrary value provided by the sender. Size can be 1 to 64. */
  salt: Uint8Array;
  /** InitMsg is the JSON-encoded instantiate message for creating account */
  init_msg: Uint8Array;
  /** PubKey of account */
  public_key?: AnyAmino;
}
export interface QueryGenerateAccountRequestAminoMsg {
  type: "/aura.smartaccount.v1beta1.QueryGenerateAccountRequest";
  value: QueryGenerateAccountRequestAmino;
}
export interface QueryGenerateAccountRequestSDKType {
  code_id: Long;
  salt: Uint8Array;
  init_msg: Uint8Array;
  public_key: AnySDKType;
}
export interface QueryGenerateAccountResponse {
  address: string;
}
export interface QueryGenerateAccountResponseProtoMsg {
  typeUrl: "/aura.smartaccount.v1beta1.QueryGenerateAccountResponse";
  value: Uint8Array;
}
export interface QueryGenerateAccountResponseAmino {
  address: string;
}
export interface QueryGenerateAccountResponseAminoMsg {
  type: "/aura.smartaccount.v1beta1.QueryGenerateAccountResponse";
  value: QueryGenerateAccountResponseAmino;
}
export interface QueryGenerateAccountResponseSDKType {
  address: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/aura.smartaccount.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/aura.smartaccount.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGenerateAccountRequest(): QueryGenerateAccountRequest {
  return {
    codeId: Long.UZERO,
    salt: new Uint8Array(),
    initMsg: new Uint8Array(),
    publicKey: Any.fromPartial({})
  };
}
export const QueryGenerateAccountRequest = {
  typeUrl: "/aura.smartaccount.v1beta1.QueryGenerateAccountRequest",
  encode(message: QueryGenerateAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.salt.length !== 0) {
      writer.uint32(18).bytes(message.salt);
    }
    if (message.initMsg.length !== 0) {
      writer.uint32(26).bytes(message.initMsg);
    }
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGenerateAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGenerateAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;
        case 2:
          message.salt = reader.bytes();
          break;
        case 3:
          message.initMsg = reader.bytes();
          break;
        case 4:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGenerateAccountRequest {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array(),
      initMsg: isSet(object.initMsg) ? bytesFromBase64(object.initMsg) : new Uint8Array(),
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined
    };
  },
  toJSON(message: QueryGenerateAccountRequest): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.salt !== undefined && (obj.salt = base64FromBytes(message.salt !== undefined ? message.salt : new Uint8Array()));
    message.initMsg !== undefined && (obj.initMsg = base64FromBytes(message.initMsg !== undefined ? message.initMsg : new Uint8Array()));
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGenerateAccountRequest>): QueryGenerateAccountRequest {
    const message = createBaseQueryGenerateAccountRequest();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.salt = object.salt ?? new Uint8Array();
    message.initMsg = object.initMsg ?? new Uint8Array();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    return message;
  },
  fromAmino(object: QueryGenerateAccountRequestAmino): QueryGenerateAccountRequest {
    return {
      codeId: Long.fromString(object.code_id),
      salt: object.salt,
      initMsg: object.init_msg,
      publicKey: object?.public_key ? Any.fromAmino(object.public_key) : undefined
    };
  },
  toAmino(message: QueryGenerateAccountRequest): QueryGenerateAccountRequestAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.salt = message.salt;
    obj.init_msg = message.initMsg;
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGenerateAccountRequestAminoMsg): QueryGenerateAccountRequest {
    return QueryGenerateAccountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGenerateAccountRequestProtoMsg): QueryGenerateAccountRequest {
    return QueryGenerateAccountRequest.decode(message.value);
  },
  toProto(message: QueryGenerateAccountRequest): Uint8Array {
    return QueryGenerateAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGenerateAccountRequest): QueryGenerateAccountRequestProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.QueryGenerateAccountRequest",
      value: QueryGenerateAccountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGenerateAccountResponse(): QueryGenerateAccountResponse {
  return {
    address: ""
  };
}
export const QueryGenerateAccountResponse = {
  typeUrl: "/aura.smartaccount.v1beta1.QueryGenerateAccountResponse",
  encode(message: QueryGenerateAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGenerateAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGenerateAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGenerateAccountResponse {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryGenerateAccountResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryGenerateAccountResponse>): QueryGenerateAccountResponse {
    const message = createBaseQueryGenerateAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryGenerateAccountResponseAmino): QueryGenerateAccountResponse {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryGenerateAccountResponse): QueryGenerateAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryGenerateAccountResponseAminoMsg): QueryGenerateAccountResponse {
    return QueryGenerateAccountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGenerateAccountResponseProtoMsg): QueryGenerateAccountResponse {
    return QueryGenerateAccountResponse.decode(message.value);
  },
  toProto(message: QueryGenerateAccountResponse): Uint8Array {
    return QueryGenerateAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGenerateAccountResponse): QueryGenerateAccountResponseProtoMsg {
    return {
      typeUrl: "/aura.smartaccount.v1beta1.QueryGenerateAccountResponse",
      value: QueryGenerateAccountResponse.encode(message).finish()
    };
  }
};