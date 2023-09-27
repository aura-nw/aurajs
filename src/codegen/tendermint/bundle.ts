import * as _8 from "./abci/types";
import * as _9 from "./blockchain/types";
import * as _10 from "./consensus/types";
import * as _11 from "./consensus/wal";
import * as _12 from "./crypto/keys";
import * as _13 from "./crypto/proof";
import * as _14 from "./libs/bits/types";
import * as _15 from "./mempool/types";
import * as _16 from "./p2p/conn";
import * as _17 from "./p2p/pex";
import * as _18 from "./p2p/types";
import * as _19 from "./privval/types";
import * as _20 from "./rpc/grpc/types";
import * as _21 from "./state/types";
import * as _22 from "./statesync/types";
import * as _23 from "./store/types";
import * as _24 from "./types/block";
import * as _25 from "./types/canonical";
import * as _26 from "./types/events";
import * as _27 from "./types/evidence";
import * as _28 from "./types/params";
import * as _29 from "./types/types";
import * as _30 from "./types/validator";
import * as _31 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._8
  };
  export const blockchain = {
    ..._9
  };
  export const consensus = {
    ..._10,
    ..._11
  };
  export const crypto = {
    ..._12,
    ..._13
  };
  export namespace libs {
    export const bits = {
      ..._14
    };
  }
  export const mempool = {
    ..._15
  };
  export const p2p = {
    ..._16,
    ..._17,
    ..._18
  };
  export const privval = {
    ..._19
  };
  export namespace rpc {
    export const grpc = {
      ..._20
    };
  }
  export const state = {
    ..._21
  };
  export const statesync = {
    ..._22
  };
  export const store = {
    ..._23
  };
  export const types = {
    ..._24,
    ..._25,
    ..._26,
    ..._27,
    ..._28,
    ..._29,
    ..._30
  };
  export const version = {
    ..._31
  };
}