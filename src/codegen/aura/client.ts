import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as auraSmartaccountV1beta1TxRegistry from "./smartaccount/v1beta1/tx.registry";
import * as auraSmartaccountV1beta1TxAmino from "./smartaccount/v1beta1/tx.amino";
export const auraAminoConverters = {
  ...auraSmartaccountV1beta1TxAmino.AminoConverter
};
export const auraProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...auraSmartaccountV1beta1TxRegistry.registry];
export const getSigningAuraClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...auraProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...auraAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAuraClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningAuraClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};