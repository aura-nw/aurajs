import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../helpers";
/** Params defines the parameters for the aura module. */
export interface Params {
    /** max_supply defines the max supply of aura coin. */
    maxSupply: string;
    excludeCirculatingAddr: string[];
}
/** Params defines the parameters for the aura module. */
export interface ParamsSDKType {
    max_supply: string;
    exclude_circulating_addr: string[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromPartial(object: DeepPartial<Params>): Params;
};
