import * as _131 from "../aura/aura";
import * as _132 from "../aura/genesis";
import * as _133 from "../aura/query";
import * as _134 from "../aura/tx";
import * as _224 from "../aura/query.rpc.Query";
import * as _234 from "./lcd";
import * as _235 from "./rpc.query";
import * as _236 from "./rpc.tx";
export namespace auranw {
  export namespace aura {
    export const aura = {
      ..._131,
      ..._132,
      ..._133,
      ..._134,
      ..._224
    };
  }
  export const ClientFactory = {
    ..._234,
    ..._235,
    ..._236
  };
}