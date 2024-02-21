import * as _0 from "./crypto/v1/ethsecp256k1/keys";
import * as _1 from "./evm/v1/events";
import * as _2 from "./evm/v1/evm";
import * as _3 from "./evm/v1/genesis";
import * as _4 from "./evm/v1/query";
import * as _5 from "./evm/v1/tx";
import * as _6 from "./feemarket/v1/events";
import * as _7 from "./feemarket/v1/feemarket";
import * as _8 from "./feemarket/v1/genesis";
import * as _9 from "./feemarket/v1/query";
import * as _10 from "./feemarket/v1/tx";
import * as _11 from "./types/v1/account";
import * as _12 from "./types/v1/dynamic_fee";
import * as _13 from "./types/v1/indexer";
import * as _14 from "./types/v1/web3";
import * as _230 from "./evm/v1/tx.amino";
import * as _231 from "./feemarket/v1/tx.amino";
import * as _232 from "./evm/v1/tx.registry";
import * as _233 from "./feemarket/v1/tx.registry";
import * as _234 from "./evm/v1/query.lcd";
import * as _235 from "./feemarket/v1/query.lcd";
import * as _236 from "./evm/v1/query.rpc.Query";
import * as _237 from "./feemarket/v1/query.rpc.Query";
import * as _238 from "./evm/v1/tx.rpc.msg";
import * as _239 from "./feemarket/v1/tx.rpc.msg";
import * as _375 from "./lcd";
import * as _376 from "./rpc.query";
import * as _377 from "./rpc.tx";
export namespace ethermint {
  export namespace crypto {
    export namespace v1 {
      export const ethsecp256k1 = {
        ..._0
      };
    }
  }
  export namespace evm {
    export const v1 = {
      ..._1,
      ..._2,
      ..._3,
      ..._4,
      ..._5,
      ..._230,
      ..._232,
      ..._234,
      ..._236,
      ..._238
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._231,
      ..._233,
      ..._235,
      ..._237,
      ..._239
    };
  }
  export namespace types {
    export const v1 = {
      ..._11,
      ..._12,
      ..._13,
      ..._14
    };
  }
  export const ClientFactory = {
    ..._375,
    ..._376,
    ..._377
  };
}