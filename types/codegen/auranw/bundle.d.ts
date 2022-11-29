import * as _0 from "../aura/aura/aura";
import * as _1 from "../aura/aura/genesis";
export declare namespace auranw {
    namespace aura {
        const aura: {
            GenesisState: {
                encode(message: _1.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.GenesisState;
                fromPartial(object: {
                    params?: {
                        maxSupply?: string;
                        excludeCirculatingAddr?: string[];
                    };
                }): _1.GenesisState;
            };
            Params: {
                encode(message: _0.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _0.Params;
                fromPartial(object: {
                    maxSupply?: string;
                    excludeCirculatingAddr?: string[];
                }): _0.Params;
            };
        };
    }
}
