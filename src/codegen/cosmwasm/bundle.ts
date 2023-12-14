import * as _199 from "./wasm/v1/authz";
import * as _200 from "./wasm/v1/genesis";
import * as _201 from "./wasm/v1/ibc";
import * as _202 from "./wasm/v1/proposal";
import * as _203 from "./wasm/v1/query";
import * as _204 from "./wasm/v1/tx";
import * as _205 from "./wasm/v1/types";
import * as _339 from "./wasm/v1/tx.amino";
import * as _340 from "./wasm/v1/tx.registry";
import * as _341 from "./wasm/v1/query.lcd";
import * as _342 from "./wasm/v1/query.rpc.Query";
import * as _343 from "./wasm/v1/tx.rpc.msg";
import * as _356 from "./lcd";
import * as _357 from "./rpc.query";
import * as _358 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = {
      ..._199,
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._205,
      ..._339,
      ..._340,
      ..._341,
      ..._342,
      ..._343
    };
  }
  export const ClientFactory = {
    ..._356,
    ..._357,
    ..._358
  };
}