import * as _47 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _47.ScalarType;
    scalarTypeToJSON(object: _47.ScalarType): string;
    ScalarType: typeof _47.ScalarType;
    ScalarTypeSDKType: typeof _47.ScalarType;
    ScalarTypeAmino: typeof _47.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _47.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.InterfaceDescriptor;
        fromJSON(object: any): _47.InterfaceDescriptor;
        toJSON(message: _47.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_47.InterfaceDescriptor>): _47.InterfaceDescriptor;
        fromAmino(object: _47.InterfaceDescriptorAmino): _47.InterfaceDescriptor;
        toAmino(message: _47.InterfaceDescriptor): _47.InterfaceDescriptorAmino;
        fromAminoMsg(object: _47.InterfaceDescriptorAminoMsg): _47.InterfaceDescriptor;
        fromProtoMsg(message: _47.InterfaceDescriptorProtoMsg): _47.InterfaceDescriptor;
        toProto(message: _47.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _47.InterfaceDescriptor): _47.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _47.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.ScalarDescriptor;
        fromJSON(object: any): _47.ScalarDescriptor;
        toJSON(message: _47.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_47.ScalarDescriptor>): _47.ScalarDescriptor;
        fromAmino(object: _47.ScalarDescriptorAmino): _47.ScalarDescriptor;
        toAmino(message: _47.ScalarDescriptor): _47.ScalarDescriptorAmino;
        fromAminoMsg(object: _47.ScalarDescriptorAminoMsg): _47.ScalarDescriptor;
        fromProtoMsg(message: _47.ScalarDescriptorProtoMsg): _47.ScalarDescriptor;
        toProto(message: _47.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _47.ScalarDescriptor): _47.ScalarDescriptorProtoMsg;
    };
};
