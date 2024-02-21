import * as _221 from "./aura/aura";
import * as _222 from "./aura/genesis";
import * as _223 from "./aura/query";
import * as _224 from "./aura/tx";
import * as _225 from "./smartaccount/v1beta1/account";
import * as _226 from "./smartaccount/v1beta1/genesis";
import * as _227 from "./smartaccount/v1beta1/params";
import * as _228 from "./smartaccount/v1beta1/query";
import * as _229 from "./smartaccount/v1beta1/tx";
import * as _369 from "./smartaccount/v1beta1/tx.amino";
import * as _370 from "./smartaccount/v1beta1/tx.registry";
import * as _371 from "./smartaccount/v1beta1/query.lcd";
import * as _372 from "./aura/query.rpc.Query";
import * as _373 from "./smartaccount/v1beta1/query.rpc.Query";
import * as _374 from "./smartaccount/v1beta1/tx.rpc.msg";
import * as _387 from "./lcd";
import * as _388 from "./rpc.query";
import * as _389 from "./rpc.tx";
export namespace aura {
  export const aura = {
    ..._221,
    ..._222,
    ..._223,
    ..._224,
    ..._372
  };
  export namespace smartaccount {
    export const v1beta1 = {
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._229,
      ..._369,
      ..._370,
      ..._371,
      ..._373,
      ..._374
    };
  }
  export const ClientFactory = {
    ..._387,
    ..._388,
    ..._389
  };
}