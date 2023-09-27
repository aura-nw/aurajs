import * as _206 from "./aura/aura";
import * as _207 from "./aura/genesis";
import * as _208 from "./aura/query";
import * as _209 from "./aura/tx";
import * as _210 from "./smartaccount/v1beta1/account";
import * as _211 from "./smartaccount/v1beta1/genesis";
import * as _212 from "./smartaccount/v1beta1/params";
import * as _213 from "./smartaccount/v1beta1/query";
import * as _214 from "./smartaccount/v1beta1/tx";
import * as _349 from "./smartaccount/v1beta1/tx.amino";
import * as _350 from "./smartaccount/v1beta1/tx.registry";
import * as _351 from "./smartaccount/v1beta1/query.lcd";
import * as _352 from "./aura/query.rpc.Query";
import * as _353 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _354 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _369 from "./lcd";
import * as _370 from "./rpc.query";
import * as _371 from "./rpc.tx";
export namespace aura {
  export const aura = {
    ..._206,
    ..._207,
    ..._208,
    ..._209,
    ..._352
  };
  export namespace smartaccount {
    export const v1beta1 = {
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._349,
      ..._350,
      ..._351,
      ..._353,
      ..._354
    };
  }
  export const ClientFactory = {
    ..._369,
    ..._370,
    ..._371
  };
}