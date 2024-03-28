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
import * as _253 from "./evm/v1/tx.amino";
import * as _254 from "./feemarket/v1/tx.amino";
import * as _255 from "./evm/v1/tx.registry";
import * as _256 from "./feemarket/v1/tx.registry";
import * as _257 from "./evm/v1/query.lcd";
import * as _258 from "./feemarket/v1/query.lcd";
import * as _259 from "./evm/v1/query.rpc.Query";
import * as _260 from "./feemarket/v1/query.rpc.Query";
import * as _261 from "./evm/v1/tx.rpc.msg";
import * as _262 from "./feemarket/v1/tx.rpc.msg";
import * as _420 from "./lcd";
import * as _421 from "./rpc.query";
import * as _422 from "./rpc.tx";
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
      ..._253,
      ..._255,
      ..._257,
      ..._259,
      ..._261
    };
  }
  export namespace feemarket {
    export const v1 = {
      ..._6,
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._254,
      ..._256,
      ..._258,
      ..._260,
      ..._262
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
    ..._420,
    ..._421,
    ..._422
  };
}