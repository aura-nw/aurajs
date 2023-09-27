import * as _8 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _8.ScalarType;
    scalarTypeToJSON(object: _8.ScalarType): string;
    ScalarType: typeof _8.ScalarType;
    ScalarTypeSDKType: typeof _8.ScalarType;
    ScalarTypeAmino: typeof _8.ScalarType;
    InterfaceDescriptor: {
        typeUrl: string;
        encode(message: _8.InterfaceDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.InterfaceDescriptor;
        fromJSON(object: any): _8.InterfaceDescriptor;
        toJSON(message: _8.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_8.InterfaceDescriptor>): _8.InterfaceDescriptor;
        fromAmino(object: _8.InterfaceDescriptorAmino): _8.InterfaceDescriptor;
        toAmino(message: _8.InterfaceDescriptor): _8.InterfaceDescriptorAmino;
        fromAminoMsg(object: _8.InterfaceDescriptorAminoMsg): _8.InterfaceDescriptor;
        fromProtoMsg(message: _8.InterfaceDescriptorProtoMsg): _8.InterfaceDescriptor;
        toProto(message: _8.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _8.InterfaceDescriptor): _8.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        typeUrl: string;
        encode(message: _8.ScalarDescriptor, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _8.ScalarDescriptor;
        fromJSON(object: any): _8.ScalarDescriptor;
        toJSON(message: _8.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_8.ScalarDescriptor>): _8.ScalarDescriptor;
        fromAmino(object: _8.ScalarDescriptorAmino): _8.ScalarDescriptor;
        toAmino(message: _8.ScalarDescriptor): _8.ScalarDescriptorAmino;
        fromAminoMsg(object: _8.ScalarDescriptorAminoMsg): _8.ScalarDescriptor;
        fromProtoMsg(message: _8.ScalarDescriptorProtoMsg): _8.ScalarDescriptor;
        toProto(message: _8.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _8.ScalarDescriptor): _8.ScalarDescriptorProtoMsg;
    };
};
