import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRecover, MsgRecoverResponse, MsgActivateAccount, MsgActivateAccountResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  recover(request: MsgRecover): Promise<MsgRecoverResponse>;
  activateAccount(request: MsgActivateAccount): Promise<MsgActivateAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.recover = this.recover.bind(this);
    this.activateAccount = this.activateAccount.bind(this);
  }
  recover(request: MsgRecover): Promise<MsgRecoverResponse> {
    const data = MsgRecover.encode(request).finish();
    const promise = this.rpc.request("aura.smartaccount.v1beta1.Msg", "Recover", data);
    return promise.then(data => MsgRecoverResponse.decode(new BinaryReader(data)));
  }
  activateAccount(request: MsgActivateAccount): Promise<MsgActivateAccountResponse> {
    const data = MsgActivateAccount.encode(request).finish();
    const promise = this.rpc.request("aura.smartaccount.v1beta1.Msg", "ActivateAccount", data);
    return promise.then(data => MsgActivateAccountResponse.decode(new BinaryReader(data)));
  }
}