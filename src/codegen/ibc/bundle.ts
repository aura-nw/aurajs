import * as _175 from "./applications/fee/v1/ack";
import * as _176 from "./applications/fee/v1/fee";
import * as _177 from "./applications/fee/v1/genesis";
import * as _178 from "./applications/fee/v1/metadata";
import * as _179 from "./applications/fee/v1/query";
import * as _180 from "./applications/fee/v1/tx";
import * as _181 from "./applications/interchain_accounts/controller/v1/controller";
import * as _182 from "./applications/interchain_accounts/controller/v1/query";
import * as _183 from "./applications/interchain_accounts/controller/v1/tx";
import * as _184 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _185 from "./applications/interchain_accounts/host/v1/host";
import * as _186 from "./applications/interchain_accounts/host/v1/query";
import * as _187 from "./applications/interchain_accounts/v1/account";
import * as _188 from "./applications/interchain_accounts/v1/metadata";
import * as _189 from "./applications/interchain_accounts/v1/packet";
import * as _190 from "./applications/transfer/v1/authz";
import * as _191 from "./applications/transfer/v1/genesis";
import * as _192 from "./applications/transfer/v1/query";
import * as _193 from "./applications/transfer/v1/transfer";
import * as _194 from "./applications/transfer/v1/tx";
import * as _195 from "./applications/transfer/v2/packet";
import * as _196 from "./core/channel/v1/channel";
import * as _197 from "./core/channel/v1/genesis";
import * as _198 from "./core/channel/v1/query";
import * as _199 from "./core/channel/v1/tx";
import * as _200 from "./core/client/v1/client";
import * as _201 from "./core/client/v1/genesis";
import * as _202 from "./core/client/v1/query";
import * as _203 from "./core/client/v1/tx";
import * as _204 from "./core/commitment/v1/commitment";
import * as _205 from "./core/connection/v1/connection";
import * as _206 from "./core/connection/v1/genesis";
import * as _207 from "./core/connection/v1/query";
import * as _208 from "./core/connection/v1/tx";
import * as _209 from "./core/types/v1/genesis";
import * as _210 from "./lightclients/localhost/v2/localhost";
import * as _211 from "./lightclients/solomachine/v2/solomachine";
import * as _212 from "./lightclients/solomachine/v3/solomachine";
import * as _213 from "./lightclients/tendermint/v1/tendermint";
import * as _355 from "./applications/fee/v1/tx.amino";
import * as _356 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _357 from "./applications/transfer/v1/tx.amino";
import * as _358 from "./core/channel/v1/tx.amino";
import * as _359 from "./core/client/v1/tx.amino";
import * as _360 from "./core/connection/v1/tx.amino";
import * as _361 from "./applications/fee/v1/tx.registry";
import * as _362 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _363 from "./applications/transfer/v1/tx.registry";
import * as _364 from "./core/channel/v1/tx.registry";
import * as _365 from "./core/client/v1/tx.registry";
import * as _366 from "./core/connection/v1/tx.registry";
import * as _367 from "./applications/fee/v1/query.lcd";
import * as _368 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _369 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _370 from "./applications/transfer/v1/query.lcd";
import * as _371 from "./core/channel/v1/query.lcd";
import * as _372 from "./core/client/v1/query.lcd";
import * as _373 from "./core/connection/v1/query.lcd";
import * as _374 from "./applications/fee/v1/query.rpc.Query";
import * as _375 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _376 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _377 from "./applications/transfer/v1/query.rpc.Query";
import * as _378 from "./core/channel/v1/query.rpc.Query";
import * as _379 from "./core/client/v1/query.rpc.Query";
import * as _380 from "./core/connection/v1/query.rpc.Query";
import * as _381 from "./applications/fee/v1/tx.rpc.msg";
import * as _382 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _383 from "./applications/transfer/v1/tx.rpc.msg";
import * as _384 from "./core/channel/v1/tx.rpc.msg";
import * as _385 from "./core/client/v1/tx.rpc.msg";
import * as _386 from "./core/connection/v1/tx.rpc.msg";
import * as _426 from "./lcd";
import * as _427 from "./rpc.query";
import * as _428 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._180,
        ..._355,
        ..._361,
        ..._367,
        ..._374,
        ..._381
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._181,
          ..._182,
          ..._183,
          ..._356,
          ..._362,
          ..._368,
          ..._375,
          ..._382
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._184
        };
      }
      export namespace host {
        export const v1 = {
          ..._185,
          ..._186,
          ..._369,
          ..._376
        };
      }
      export const v1 = {
        ..._187,
        ..._188,
        ..._189
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._190,
        ..._191,
        ..._192,
        ..._193,
        ..._194,
        ..._357,
        ..._363,
        ..._370,
        ..._377,
        ..._383
      };
      export const v2 = {
        ..._195
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._196,
        ..._197,
        ..._198,
        ..._199,
        ..._358,
        ..._364,
        ..._371,
        ..._378,
        ..._384
      };
    }
    export namespace client {
      export const v1 = {
        ..._200,
        ..._201,
        ..._202,
        ..._203,
        ..._359,
        ..._365,
        ..._372,
        ..._379,
        ..._385
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._204
      };
    }
    export namespace connection {
      export const v1 = {
        ..._205,
        ..._206,
        ..._207,
        ..._208,
        ..._360,
        ..._366,
        ..._373,
        ..._380,
        ..._386
      };
    }
    export namespace types {
      export const v1 = {
        ..._209
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._210
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._211
      };
      export const v3 = {
        ..._212
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._213
      };
    }
  }
  export const ClientFactory = {
    ..._426,
    ..._427,
    ..._428
  };
}