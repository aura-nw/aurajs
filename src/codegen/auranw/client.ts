import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as auranwAuraSmartaccountTxRegistry from "./aura/smartaccount/tx.registry";
import * as auranwAuraSmartaccountTxAmino from "./aura/smartaccount/tx.amino";
export const auranwAminoConverters = {
  ...auranwAuraSmartaccountTxAmino.AminoConverter
};
export const auranwProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...auranwAuraSmartaccountTxRegistry.registry];
export const getSigningAuranwClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...auranwProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...auranwAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAuranwClient = async ({
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
  } = getSigningAuranwClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};