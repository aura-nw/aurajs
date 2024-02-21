import * as _214 from "./wasm/v1/authz";
import * as _215 from "./wasm/v1/genesis";
import * as _216 from "./wasm/v1/ibc";
import * as _217 from "./wasm/v1/proposal";
import * as _218 from "./wasm/v1/query";
import * as _219 from "./wasm/v1/tx";
import * as _220 from "./wasm/v1/types";
import * as _364 from "./wasm/v1/tx.amino";
import * as _365 from "./wasm/v1/tx.registry";
import * as _366 from "./wasm/v1/query.lcd";
import * as _367 from "./wasm/v1/query.rpc.Query";
import * as _368 from "./wasm/v1/tx.rpc.msg";
import * as _384 from "./lcd";
import * as _385 from "./rpc.query";
import * as _386 from "./rpc.tx";
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
      ..._364,
      ..._365,
      ..._366,
      ..._367,
      ..._368
    };
  }
  export const ClientFactory = {
    ..._384,
    ..._385,
    ..._386
  };
}