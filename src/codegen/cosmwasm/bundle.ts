import * as _125 from "./wasm/v1/genesis";
import * as _126 from "./wasm/v1/ibc";
import * as _127 from "./wasm/v1/proposal";
import * as _128 from "./wasm/v1/query";
import * as _129 from "./wasm/v1/tx";
import * as _130 from "./wasm/v1/types";
import * as _219 from "./wasm/v1/tx.amino";
import * as _220 from "./wasm/v1/tx.registry";
import * as _221 from "./wasm/v1/query.lcd";
import * as _222 from "./wasm/v1/query.rpc.Query";
import * as _223 from "./wasm/v1/tx.rpc.msg";
import * as _231 from "./lcd";
import * as _232 from "./rpc.query";
import * as _233 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._125,
      ..._126,
      ..._127,
      ..._128,
      ..._129,
      ..._130,
      ..._219,
      ..._220,
      ..._221,
      ..._222,
      ..._223
    };
  }
  export const ClientFactory = {
    ..._231,
    ..._232,
    ..._233
  };
}