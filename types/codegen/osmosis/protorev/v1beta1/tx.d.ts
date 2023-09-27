import { TokenPairArbRoutes, TokenPairArbRoutesAmino, TokenPairArbRoutesSDKType } from "./protorev";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutes {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hotRoutes: TokenPairArbRoutes[];
}
export interface MsgSetHotRoutesProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutes";
    value: Uint8Array;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesAmino {
    /** admin is the account that is authorized to set the hot routes. */
    admin: string;
    /** hot_routes is the list of hot routes to set. */
    hot_routes: TokenPairArbRoutesAmino[];
}
export interface MsgSetHotRoutesAminoMsg {
    type: "osmosis/MsgSetHotRoutes";
    value: MsgSetHotRoutesAmino;
}
/** MsgSetHotRoutes defines the Msg/SetHotRoutes request type. */
export interface MsgSetHotRoutesSDKType {
    admin: string;
    hot_routes: TokenPairArbRoutesSDKType[];
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponse {
}
export interface MsgSetHotRoutesResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetHotRoutesResponse";
    value: Uint8Array;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseAmino {
}
export interface MsgSetHotRoutesResponseAminoMsg {
    type: "osmosis/protorev/set-hot-routes-response";
    value: MsgSetHotRoutesResponseAmino;
}
/** MsgSetHotRoutesResponse defines the Msg/SetHotRoutes response type. */
export interface MsgSetHotRoutesResponseSDKType {
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccount {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developerAccount: string;
}
export interface MsgSetDeveloperAccountProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount";
    value: Uint8Array;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountAmino {
    /** admin is the account that is authorized to set the developer account. */
    admin: string;
    /**
     * developer_account is the account that will receive a portion of the profits
     * from the protorev module.
     */
    developer_account: string;
}
export interface MsgSetDeveloperAccountAminoMsg {
    type: "osmosis/MsgSetDeveloperAccount";
    value: MsgSetDeveloperAccountAmino;
}
/** MsgSetDeveloperAccount defines the Msg/SetDeveloperAccount request type. */
export interface MsgSetDeveloperAccountSDKType {
    admin: string;
    developer_account: string;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponse {
}
export interface MsgSetDeveloperAccountResponseProtoMsg {
    typeUrl: "/osmosis.protorev.v1beta1.MsgSetDeveloperAccountResponse";
    value: Uint8Array;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseAmino {
}
export interface MsgSetDeveloperAccountResponseAminoMsg {
    type: "osmosis/protorev/set-developer-account-response";
    value: MsgSetDeveloperAccountResponseAmino;
}
/**
 * MsgSetDeveloperAccountResponse defines the Msg/SetDeveloperAccount response
 * type.
 */
export interface MsgSetDeveloperAccountResponseSDKType {
}
export declare const MsgSetHotRoutes: {
    typeUrl: string;
    encode(message: MsgSetHotRoutes, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutes;
    fromJSON(object: any): MsgSetHotRoutes;
    toJSON(message: MsgSetHotRoutes): unknown;
    fromPartial(object: Partial<MsgSetHotRoutes>): MsgSetHotRoutes;
    fromAmino(object: MsgSetHotRoutesAmino): MsgSetHotRoutes;
    toAmino(message: MsgSetHotRoutes): MsgSetHotRoutesAmino;
    fromAminoMsg(object: MsgSetHotRoutesAminoMsg): MsgSetHotRoutes;
    toAminoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesAminoMsg;
    fromProtoMsg(message: MsgSetHotRoutesProtoMsg): MsgSetHotRoutes;
    toProto(message: MsgSetHotRoutes): Uint8Array;
    toProtoMsg(message: MsgSetHotRoutes): MsgSetHotRoutesProtoMsg;
};
export declare const MsgSetHotRoutesResponse: {
    typeUrl: string;
    encode(_: MsgSetHotRoutesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetHotRoutesResponse;
    fromJSON(_: any): MsgSetHotRoutesResponse;
    toJSON(_: MsgSetHotRoutesResponse): unknown;
    fromPartial(_: Partial<MsgSetHotRoutesResponse>): MsgSetHotRoutesResponse;
    fromAmino(_: MsgSetHotRoutesResponseAmino): MsgSetHotRoutesResponse;
    toAmino(_: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAmino;
    fromAminoMsg(object: MsgSetHotRoutesResponseAminoMsg): MsgSetHotRoutesResponse;
    toAminoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseAminoMsg;
    fromProtoMsg(message: MsgSetHotRoutesResponseProtoMsg): MsgSetHotRoutesResponse;
    toProto(message: MsgSetHotRoutesResponse): Uint8Array;
    toProtoMsg(message: MsgSetHotRoutesResponse): MsgSetHotRoutesResponseProtoMsg;
};
export declare const MsgSetDeveloperAccount: {
    typeUrl: string;
    encode(message: MsgSetDeveloperAccount, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccount;
    fromJSON(object: any): MsgSetDeveloperAccount;
    toJSON(message: MsgSetDeveloperAccount): unknown;
    fromPartial(object: Partial<MsgSetDeveloperAccount>): MsgSetDeveloperAccount;
    fromAmino(object: MsgSetDeveloperAccountAmino): MsgSetDeveloperAccount;
    toAmino(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAmino;
    fromAminoMsg(object: MsgSetDeveloperAccountAminoMsg): MsgSetDeveloperAccount;
    toAminoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountAminoMsg;
    fromProtoMsg(message: MsgSetDeveloperAccountProtoMsg): MsgSetDeveloperAccount;
    toProto(message: MsgSetDeveloperAccount): Uint8Array;
    toProtoMsg(message: MsgSetDeveloperAccount): MsgSetDeveloperAccountProtoMsg;
};
export declare const MsgSetDeveloperAccountResponse: {
    typeUrl: string;
    encode(_: MsgSetDeveloperAccountResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSetDeveloperAccountResponse;
    fromJSON(_: any): MsgSetDeveloperAccountResponse;
    toJSON(_: MsgSetDeveloperAccountResponse): unknown;
    fromPartial(_: Partial<MsgSetDeveloperAccountResponse>): MsgSetDeveloperAccountResponse;
    fromAmino(_: MsgSetDeveloperAccountResponseAmino): MsgSetDeveloperAccountResponse;
    toAmino(_: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAmino;
    fromAminoMsg(object: MsgSetDeveloperAccountResponseAminoMsg): MsgSetDeveloperAccountResponse;
    toAminoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseAminoMsg;
    fromProtoMsg(message: MsgSetDeveloperAccountResponseProtoMsg): MsgSetDeveloperAccountResponse;
    toProto(message: MsgSetDeveloperAccountResponse): Uint8Array;
    toProtoMsg(message: MsgSetDeveloperAccountResponse): MsgSetDeveloperAccountResponseProtoMsg;
};
