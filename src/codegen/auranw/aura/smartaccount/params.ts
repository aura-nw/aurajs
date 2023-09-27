import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface CodeID {
  /** whitelist code id */
  codeId: Long;
  /** status of code id */
  status: boolean;
}
export interface CodeIDProtoMsg {
  typeUrl: "/auranw.aura.smartaccount.CodeID";
  value: Uint8Array;
}
export interface CodeIDAmino {
  /** whitelist code id */
  code_id: string;
  /** status of code id */
  status: boolean;
}
export interface CodeIDAminoMsg {
  type: "/auranw.aura.smartaccount.CodeID";
  value: CodeIDAmino;
}
export interface CodeIDSDKType {
  code_id: Long;
  status: boolean;
}
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * code_id whitelist indicates which contract can be initialized as smart account
   * using gov proposal for updates
   */
  whitelistCodeId: CodeID[];
  /** list of diable messages for smartaccount */
  disableMsgsList: string[];
  /** limit how much gas can be consumed by the `pre_execute` method */
  maxGasExecute: Long;
}
export interface ParamsProtoMsg {
  typeUrl: "/auranw.aura.smartaccount.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * code_id whitelist indicates which contract can be initialized as smart account
   * using gov proposal for updates
   */
  whitelist_code_id: CodeIDAmino[];
  /** list of diable messages for smartaccount */
  disable_msgs_list: string[];
  /** limit how much gas can be consumed by the `pre_execute` method */
  max_gas_execute: string;
}
export interface ParamsAminoMsg {
  type: "/auranw.aura.smartaccount.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  whitelist_code_id: CodeIDSDKType[];
  disable_msgs_list: string[];
  max_gas_execute: Long;
}
function createBaseCodeID(): CodeID {
  return {
    codeId: Long.UZERO,
    status: false
  };
}
export const CodeID = {
  typeUrl: "/auranw.aura.smartaccount.CodeID",
  encode(message: CodeID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.status === true) {
      writer.uint32(16).bool(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CodeID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodeID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = (reader.uint64() as Long);
          break;
        case 2:
          message.status = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodeID {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      status: isSet(object.status) ? Boolean(object.status) : false
    };
  },
  toJSON(message: CodeID): unknown {
    const obj: any = {};
    message.codeId !== undefined && (obj.codeId = (message.codeId || Long.UZERO).toString());
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
  fromPartial(object: Partial<CodeID>): CodeID {
    const message = createBaseCodeID();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.status = object.status ?? false;
    return message;
  },
  fromAmino(object: CodeIDAmino): CodeID {
    return {
      codeId: Long.fromString(object.code_id),
      status: object.status
    };
  },
  toAmino(message: CodeID): CodeIDAmino {
    const obj: any = {};
    obj.code_id = message.codeId ? message.codeId.toString() : undefined;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: CodeIDAminoMsg): CodeID {
    return CodeID.fromAmino(object.value);
  },
  fromProtoMsg(message: CodeIDProtoMsg): CodeID {
    return CodeID.decode(message.value);
  },
  toProto(message: CodeID): Uint8Array {
    return CodeID.encode(message).finish();
  },
  toProtoMsg(message: CodeID): CodeIDProtoMsg {
    return {
      typeUrl: "/auranw.aura.smartaccount.CodeID",
      value: CodeID.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    whitelistCodeId: [],
    disableMsgsList: [],
    maxGasExecute: Long.UZERO
  };
}
export const Params = {
  typeUrl: "/auranw.aura.smartaccount.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.whitelistCodeId) {
      CodeID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.disableMsgsList) {
      writer.uint32(18).string(v!);
    }
    if (!message.maxGasExecute.isZero()) {
      writer.uint32(24).uint64(message.maxGasExecute);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.whitelistCodeId.push(CodeID.decode(reader, reader.uint32()));
          break;
        case 2:
          message.disableMsgsList.push(reader.string());
          break;
        case 3:
          message.maxGasExecute = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      whitelistCodeId: Array.isArray(object?.whitelistCodeId) ? object.whitelistCodeId.map((e: any) => CodeID.fromJSON(e)) : [],
      disableMsgsList: Array.isArray(object?.disableMsgsList) ? object.disableMsgsList.map((e: any) => String(e)) : [],
      maxGasExecute: isSet(object.maxGasExecute) ? Long.fromValue(object.maxGasExecute) : Long.UZERO
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.whitelistCodeId) {
      obj.whitelistCodeId = message.whitelistCodeId.map(e => e ? CodeID.toJSON(e) : undefined);
    } else {
      obj.whitelistCodeId = [];
    }
    if (message.disableMsgsList) {
      obj.disableMsgsList = message.disableMsgsList.map(e => e);
    } else {
      obj.disableMsgsList = [];
    }
    message.maxGasExecute !== undefined && (obj.maxGasExecute = (message.maxGasExecute || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.whitelistCodeId = object.whitelistCodeId?.map(e => CodeID.fromPartial(e)) || [];
    message.disableMsgsList = object.disableMsgsList?.map(e => e) || [];
    message.maxGasExecute = object.maxGasExecute !== undefined && object.maxGasExecute !== null ? Long.fromValue(object.maxGasExecute) : Long.UZERO;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      whitelistCodeId: Array.isArray(object?.whitelist_code_id) ? object.whitelist_code_id.map((e: any) => CodeID.fromAmino(e)) : [],
      disableMsgsList: Array.isArray(object?.disable_msgs_list) ? object.disable_msgs_list.map((e: any) => e) : [],
      maxGasExecute: Long.fromString(object.max_gas_execute)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.whitelistCodeId) {
      obj.whitelist_code_id = message.whitelistCodeId.map(e => e ? CodeID.toAmino(e) : undefined);
    } else {
      obj.whitelist_code_id = [];
    }
    if (message.disableMsgsList) {
      obj.disable_msgs_list = message.disableMsgsList.map(e => e);
    } else {
      obj.disable_msgs_list = [];
    }
    obj.max_gas_execute = message.maxGasExecute ? message.maxGasExecute.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/auranw.aura.smartaccount.Params",
      value: Params.encode(message).finish()
    };
  }
};