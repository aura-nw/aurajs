import * as _214 from "./wasm/v1/authz";
import * as _215 from "./wasm/v1/genesis";
import * as _216 from "./wasm/v1/ibc";
import * as _217 from "./wasm/v1/proposal";
import * as _218 from "./wasm/v1/query";
import * as _219 from "./wasm/v1/tx";
import * as _220 from "./wasm/v1/types";
import * as _387 from "./wasm/v1/tx.amino";
import * as _388 from "./wasm/v1/tx.registry";
import * as _389 from "./wasm/v1/query.lcd";
import * as _390 from "./wasm/v1/query.rpc.Query";
import * as _391 from "./wasm/v1/tx.rpc.msg";
import * as _429 from "./lcd";
import * as _430 from "./rpc.query";
import * as _431 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._214,
      ..._215,
      ..._216,
      ..._217,
      ..._218,
      ..._219,
      ..._220,
      ..._387,
      ..._388,
      ..._389,
      ..._390,
      ..._391
    };
  }
  export const ClientFactory = {
    ..._429,
    ..._430,
    ..._431
  };
}