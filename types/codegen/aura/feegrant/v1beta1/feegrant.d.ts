import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** AllowedContractAllowance creates allowance only for specified contract address. */
export interface AllowedContractAllowance {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: Any;
    /** allowed_address are the addresses for which the grantee has the access. */
    allowedAddress: string[];
}
/** AllowedContractAllowance creates allowance only for specified contract address. */
export interface AllowedContractAllowanceSDKType {
    /** allowance can be any of basic and periodic fee allowance. */
    allowance?: AnySDKType;
    /** allowed_address are the addresses for which the grantee has the access. */
    allowed_address: string[];
}
export declare const AllowedContractAllowance: {
    encode(message: AllowedContractAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AllowedContractAllowance;
    fromPartial(object: DeepPartial<AllowedContractAllowance>): AllowedContractAllowance;
};
