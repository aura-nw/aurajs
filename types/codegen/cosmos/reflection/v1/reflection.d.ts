import { FileDescriptorProto, FileDescriptorProtoAmino, FileDescriptorProtoSDKType } from "../../../google/protobuf/descriptor";
import * as _m0 from "protobufjs/minimal";
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequest {
}
export interface FileDescriptorsRequestProtoMsg {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsRequest";
    value: Uint8Array;
}
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequestAmino {
}
export interface FileDescriptorsRequestAminoMsg {
    type: "cosmos-sdk/FileDescriptorsRequest";
    value: FileDescriptorsRequestAmino;
}
/** FileDescriptorsRequest is the Query/FileDescriptors request type. */
export interface FileDescriptorsRequestSDKType {
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponse {
    /** files is the file descriptors. */
    files: FileDescriptorProto[];
}
export interface FileDescriptorsResponseProtoMsg {
    typeUrl: "/cosmos.reflection.v1.FileDescriptorsResponse";
    value: Uint8Array;
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponseAmino {
    /** files is the file descriptors. */
    files: FileDescriptorProtoAmino[];
}
export interface FileDescriptorsResponseAminoMsg {
    type: "cosmos-sdk/FileDescriptorsResponse";
    value: FileDescriptorsResponseAmino;
}
/** FileDescriptorsResponse is the Query/FileDescriptors response type. */
export interface FileDescriptorsResponseSDKType {
    files: FileDescriptorProtoSDKType[];
}
export declare const FileDescriptorsRequest: {
    typeUrl: string;
    encode(_: FileDescriptorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsRequest;
    fromJSON(_: any): FileDescriptorsRequest;
    toJSON(_: FileDescriptorsRequest): unknown;
    fromPartial(_: Partial<FileDescriptorsRequest>): FileDescriptorsRequest;
    fromAmino(_: FileDescriptorsRequestAmino): FileDescriptorsRequest;
    toAmino(_: FileDescriptorsRequest): FileDescriptorsRequestAmino;
    fromAminoMsg(object: FileDescriptorsRequestAminoMsg): FileDescriptorsRequest;
    toAminoMsg(message: FileDescriptorsRequest): FileDescriptorsRequestAminoMsg;
    fromProtoMsg(message: FileDescriptorsRequestProtoMsg): FileDescriptorsRequest;
    toProto(message: FileDescriptorsRequest): Uint8Array;
    toProtoMsg(message: FileDescriptorsRequest): FileDescriptorsRequestProtoMsg;
};
export declare const FileDescriptorsResponse: {
    typeUrl: string;
    encode(message: FileDescriptorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorsResponse;
    fromJSON(object: any): FileDescriptorsResponse;
    toJSON(message: FileDescriptorsResponse): unknown;
    fromPartial(object: Partial<FileDescriptorsResponse>): FileDescriptorsResponse;
    fromAmino(object: FileDescriptorsResponseAmino): FileDescriptorsResponse;
    toAmino(message: FileDescriptorsResponse): FileDescriptorsResponseAmino;
    fromAminoMsg(object: FileDescriptorsResponseAminoMsg): FileDescriptorsResponse;
    toAminoMsg(message: FileDescriptorsResponse): FileDescriptorsResponseAminoMsg;
    fromProtoMsg(message: FileDescriptorsResponseProtoMsg): FileDescriptorsResponse;
    toProto(message: FileDescriptorsResponse): Uint8Array;
    toProtoMsg(message: FileDescriptorsResponse): FileDescriptorsResponseProtoMsg;
};
