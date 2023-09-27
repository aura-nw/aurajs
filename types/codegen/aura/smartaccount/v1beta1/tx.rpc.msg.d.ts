import { Rpc } from "../../../helpers";
import { MsgRecover, MsgRecoverResponse, MsgActivateAccount, MsgActivateAccountResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    recover(request: MsgRecover): Promise<MsgRecoverResponse>;
    activateAccount(request: MsgActivateAccount): Promise<MsgActivateAccountResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    recover(request: MsgRecover): Promise<MsgRecoverResponse>;
    activateAccount(request: MsgActivateAccount): Promise<MsgActivateAccountResponse>;
}
