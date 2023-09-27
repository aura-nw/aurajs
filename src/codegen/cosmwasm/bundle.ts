import * as _199 from "./wasm/v1/authz";
import * as _200 from "./wasm/v1/genesis";
import * as _201 from "./wasm/v1/ibc";
import * as _202 from "./wasm/v1/proposal";
import * as _203 from "./wasm/v1/query";
import * as _204 from "./wasm/v1/tx";
import * as _205 from "./wasm/v1/types";
import * as _344 from "./wasm/v1/tx.amino";
import * as _345 from "./wasm/v1/tx.registry";
import * as _346 from "./wasm/v1/query.lcd";
import * as _347 from "./wasm/v1/query.rpc.Query";
import * as _348 from "./wasm/v1/tx.rpc.msg";
import * as _366 from "./lcd";
import * as _367 from "./rpc.query";
import * as _368 from "./rpc.tx";
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
      ..._344,
      ..._345,
      ..._346,
      ..._347,
      ..._348
    };
  }
  export const ClientFactory = {
    ..._366,
    ..._367,
    ..._368
  };
}