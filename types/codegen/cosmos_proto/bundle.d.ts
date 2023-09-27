import * as _32 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _32.ScalarType;
    scalarTypeToJSON(object: _32.ScalarType): string;
    ScalarType: typeof _32.ScalarType;
    ScalarTypeSDKType: typeof _32.ScalarType;
    ScalarTypeAmino: typeof _32.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _32.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.InterfaceDescriptor;
        fromJSON(object: any): _32.InterfaceDescriptor;
        toJSON(message: _32.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_32.InterfaceDescriptor>): _32.InterfaceDescriptor;
        fromAmino(object: _32.InterfaceDescriptorAmino): _32.InterfaceDescriptor;
        toAmino(message: _32.InterfaceDescriptor): _32.InterfaceDescriptorAmino;
        fromAminoMsg(object: _32.InterfaceDescriptorAminoMsg): _32.InterfaceDescriptor;
        fromProtoMsg(message: _32.InterfaceDescriptorProtoMsg): _32.InterfaceDescriptor;
        toProto(message: _32.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _32.InterfaceDescriptor): _32.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _32.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.ScalarDescriptor;
        fromJSON(object: any): _32.ScalarDescriptor;
        toJSON(message: _32.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_32.ScalarDescriptor>): _32.ScalarDescriptor;
        fromAmino(object: _32.ScalarDescriptorAmino): _32.ScalarDescriptor;
        toAmino(message: _32.ScalarDescriptor): _32.ScalarDescriptorAmino;
        fromAminoMsg(object: _32.ScalarDescriptorAminoMsg): _32.ScalarDescriptor;
        fromProtoMsg(message: _32.ScalarDescriptorProtoMsg): _32.ScalarDescriptor;
        toProto(message: _32.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _32.ScalarDescriptor): _32.ScalarDescriptorProtoMsg;
    };
};
