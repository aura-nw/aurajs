import * as _206 from "./aura/aura";
import * as _207 from "./aura/genesis";
import * as _208 from "./aura/query";
import * as _209 from "./aura/tx";
import * as _210 from "./smartaccount/v1beta1/account";
import * as _211 from "./smartaccount/v1beta1/genesis";
import * as _212 from "./smartaccount/v1beta1/params";
import * as _213 from "./smartaccount/v1beta1/query";
import * as _214 from "./smartaccount/v1beta1/tx";
import * as _344 from "./smartaccount/v1beta1/tx.amino";
import * as _345 from "./smartaccount/v1beta1/tx.registry";
import * as _346 from "./smartaccount/v1beta1/query.lcd";
import * as _347 from "./aura/query.rpc.Query";
import * as _348 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _349 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _359 from "./lcd";
import * as _360 from "./rpc.query";
import * as _361 from "./rpc.tx";
export namespace aura {
  export const aura = {
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._347
  };
  export namespace smartaccount {
    export const v1beta1 = {
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._344,
      ..._345,
      ..._346,
      ..._348,
      ..._349
    };
  }
  export const ClientFactory = {
    ..._359,
    ..._360,
    ..._361
  };
}