import * as _6 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _6.ScalarType;
    scalarTypeToJSON(object: _6.ScalarType): string;
    ScalarType: typeof _6.ScalarType;
    ScalarTypeSDKType: typeof _6.ScalarTypeSDKType;
    InterfaceDescriptor: {
        encode(message: _6.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.InterfaceDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
        }): _6.InterfaceDescriptor;
    };
    ScalarDescriptor: {
        encode(message: _6.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _6.ScalarDescriptor;
        fromPartial(object: {
            name?: string;
            description?: string;
            fieldType?: _6.ScalarType[];
        }): _6.ScalarDescriptor;
    };
};
