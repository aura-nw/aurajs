import { Any, AnySDKType } from "../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
/** AllowedContractAllowance creates allowance only for specified contract address. */

export interface AllowedContractAllowance {
  /** allowance can be any of basic and periodic fee allowance. */
  allowance?: Any;
  /** allowed_address are the addresses for which the grantee has the access. */

  allowedAddress: string[];
}
/** AllowedContractAllowance creates allowance only for specified contract address. */

export interface AllowedContractAllowanceSDKType {
  allowance?: AnySDKType;
  allowed_address: string[];
}

function createBaseAllowedContractAllowance(): AllowedContractAllowance {
  return {
    allowance: undefined,
    allowedAddress: []
  };
}

export const AllowedContractAllowance = {
  encode(message: AllowedContractAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.allowedAddress) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedContractAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedContractAllowance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowance = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.allowedAddress.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<AllowedContractAllowance>): AllowedContractAllowance {
    const message = createBaseAllowedContractAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    message.allowedAddress = object.allowedAddress?.map(e => e) || [];
    return message;
  }

};