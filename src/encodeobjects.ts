import {EncodeObject} from '@cosmjs/proto-signing';
import {
  MsgClearAdmin,
  MsgExecuteContract,
  MsgInstantiateContract,
  MsgMigrateContract,
  MsgStoreCode,
  MsgUpdateAdmin,
} from 'cosmjs-types/cosmwasm/wasm/v1/tx';

export interface MsgStoreCodeEncodeObject extends EncodeObject {
  readonly typeUrl: '/auranw.aura.wasm.MsgStoreCode';
  readonly value: Partial<MsgStoreCode>;
}

export function isMsgStoreCodeEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgStoreCodeEncodeObject {
  return (encodeObject as MsgStoreCodeEncodeObject).typeUrl === '/auranw.aura.wasm.MsgStoreCode';
}

export interface MsgInstantiateContractEncodeObject extends EncodeObject {
  readonly typeUrl: '/auranw.aura.wasm.MsgInstantiateContract';
  readonly value: Partial<MsgInstantiateContract>;
}

export function isMsgInstantiateContractEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgInstantiateContractEncodeObject {
  return (
    (encodeObject as MsgInstantiateContractEncodeObject).typeUrl ===
    '/auranw.aura.wasm.MsgInstantiateContract'
  );
}

export interface MsgUpdateAdminEncodeObject extends EncodeObject {
  readonly typeUrl: '/auranw.aura.wasm.MsgUpdateAdmin';
  readonly value: Partial<MsgUpdateAdmin>;
}

export function isMsgUpdateAdminEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgUpdateAdminEncodeObject {
  return (encodeObject as MsgUpdateAdminEncodeObject).typeUrl === '/auranw.aura.wasm.MsgUpdateAdmin';
}

export interface MsgClearAdminEncodeObject extends EncodeObject {
  readonly typeUrl: '/auranw.aura.wasm.MsgClearAdmin';
  readonly value: Partial<MsgClearAdmin>;
}

export function isMsgClearAdminEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgClearAdminEncodeObject {
  return (encodeObject as MsgClearAdminEncodeObject).typeUrl === '/auranw.aura.wasm.MsgClearAdmin';
}

export interface MsgMigrateContractEncodeObject extends EncodeObject {
  readonly typeUrl: '/auranw.aura.wasm.MsgMigrateContract';
  readonly value: Partial<MsgMigrateContract>;
}

export function isMsgMigrateEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgMigrateContractEncodeObject {
  return (encodeObject as MsgMigrateContractEncodeObject).typeUrl === '/auranw.aura.wasm.MsgMigrateContract';
}

export interface MsgExecuteContractEncodeObject extends EncodeObject {
  readonly typeUrl: '/auranw.aura.wasm.MsgExecuteContract';
  readonly value: Partial<MsgExecuteContract>;
}

export function isMsgExecuteEncodeObject(
  encodeObject: EncodeObject,
): encodeObject is MsgExecuteContractEncodeObject {
  return (encodeObject as MsgExecuteContractEncodeObject).typeUrl === '/auranw.aura.wasm.MsgExecuteContract';
}
