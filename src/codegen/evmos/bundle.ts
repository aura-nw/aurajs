import * as _230 from "./epochs/v1/genesis";
import * as _231 from "./epochs/v1/query";
import * as _232 from "./erc20/v1/erc20";
import * as _233 from "./erc20/v1/events";
import * as _234 from "./erc20/v1/genesis";
import * as _235 from "./erc20/v1/query";
import * as _236 from "./erc20/v1/tx";
import * as _237 from "./incentives/v1/genesis";
import * as _238 from "./incentives/v1/incentives";
import * as _239 from "./inflation/v1/genesis";
import * as _240 from "./inflation/v1/inflation";
import * as _241 from "./inflation/v1/query";
import * as _242 from "./inflation/v1/tx";
import * as _243 from "./revenue/v1/events";
import * as _244 from "./revenue/v1/genesis";
import * as _245 from "./revenue/v1/query";
import * as _246 from "./revenue/v1/revenue";
import * as _247 from "./revenue/v1/tx";
import * as _248 from "./vesting/v1/vesting";
import * as _249 from "./vesting/v2/events";
import * as _250 from "./vesting/v2/query";
import * as _251 from "./vesting/v2/tx";
import * as _252 from "./vesting/v2/vesting";
import * as _398 from "./erc20/v1/tx.amino";
import * as _399 from "./inflation/v1/tx.amino";
import * as _400 from "./revenue/v1/tx.amino";
import * as _401 from "./vesting/v2/tx.amino";
import * as _402 from "./erc20/v1/tx.registry";
import * as _403 from "./inflation/v1/tx.registry";
import * as _404 from "./revenue/v1/tx.registry";
import * as _405 from "./vesting/v2/tx.registry";
import * as _406 from "./epochs/v1/query.lcd";
import * as _407 from "./erc20/v1/query.lcd";
import * as _408 from "./inflation/v1/query.lcd";
import * as _409 from "./revenue/v1/query.lcd";
import * as _410 from "./vesting/v2/query.lcd";
import * as _411 from "./epochs/v1/query.rpc.Query";
import * as _412 from "./erc20/v1/query.rpc.Query";
import * as _413 from "./inflation/v1/query.rpc.Query";
import * as _414 from "./revenue/v1/query.rpc.Query";
import * as _415 from "./vesting/v2/query.rpc.Query";
import * as _416 from "./erc20/v1/tx.rpc.msg";
import * as _417 from "./inflation/v1/tx.rpc.msg";
import * as _418 from "./revenue/v1/tx.rpc.msg";
import * as _419 from "./vesting/v2/tx.rpc.msg";
import * as _435 from "./lcd";
import * as _436 from "./rpc.query";
import * as _437 from "./rpc.tx";
export namespace evmos {
  export namespace epochs {
    export const v1 = {
      ..._230,
      ..._231,
      ..._406,
      ..._411
    };
  }
  export namespace erc20 {
    export const v1 = {
      ..._232,
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._398,
      ..._402,
      ..._407,
      ..._412,
      ..._416
    };
  }
  export namespace incentives {
    export const v1 = {
      ..._237,
      ..._238
    };
  }
  export namespace inflation {
    export const v1 = {
      ..._239,
      ..._240,
      ..._241,
      ..._242,
      ..._399,
      ..._403,
      ..._408,
      ..._413,
      ..._417
    };
  }
  export namespace revenue {
    export const v1 = {
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._247,
      ..._400,
      ..._404,
      ..._409,
      ..._414,
      ..._418
    };
  }
  export namespace vesting {
    export const v1 = {
      ..._248
    };
    export const v2 = {
      ..._249,
      ..._250,
      ..._251,
      ..._252,
      ..._401,
      ..._405,
      ..._410,
      ..._415,
      ..._419
    };
  }
  export const ClientFactory = {
    ..._435,
    ..._436,
    ..._437
  };
}