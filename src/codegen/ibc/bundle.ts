import * as _160 from "./applications/fee/v1/ack";
import * as _161 from "./applications/fee/v1/fee";
import * as _162 from "./applications/fee/v1/genesis";
import * as _163 from "./applications/fee/v1/metadata";
import * as _164 from "./applications/fee/v1/query";
import * as _165 from "./applications/fee/v1/tx";
import * as _166 from "./applications/interchain_accounts/controller/v1/controller";
import * as _167 from "./applications/interchain_accounts/controller/v1/query";
import * as _168 from "./applications/interchain_accounts/controller/v1/tx";
import * as _169 from "./applications/interchain_accounts/genesis/v1/genesis";
import * as _170 from "./applications/interchain_accounts/host/v1/host";
import * as _171 from "./applications/interchain_accounts/host/v1/query";
import * as _172 from "./applications/interchain_accounts/v1/account";
import * as _173 from "./applications/interchain_accounts/v1/metadata";
import * as _174 from "./applications/interchain_accounts/v1/packet";
import * as _175 from "./applications/transfer/v1/authz";
import * as _176 from "./applications/transfer/v1/genesis";
import * as _177 from "./applications/transfer/v1/query";
import * as _178 from "./applications/transfer/v1/transfer";
import * as _179 from "./applications/transfer/v1/tx";
import * as _180 from "./applications/transfer/v2/packet";
import * as _181 from "./core/channel/v1/channel";
import * as _182 from "./core/channel/v1/genesis";
import * as _183 from "./core/channel/v1/query";
import * as _184 from "./core/channel/v1/tx";
import * as _185 from "./core/client/v1/client";
import * as _186 from "./core/client/v1/genesis";
import * as _187 from "./core/client/v1/query";
import * as _188 from "./core/client/v1/tx";
import * as _189 from "./core/commitment/v1/commitment";
import * as _190 from "./core/connection/v1/connection";
import * as _191 from "./core/connection/v1/genesis";
import * as _192 from "./core/connection/v1/query";
import * as _193 from "./core/connection/v1/tx";
import * as _194 from "./core/types/v1/genesis";
import * as _195 from "./lightclients/localhost/v2/localhost";
import * as _196 from "./lightclients/solomachine/v2/solomachine";
import * as _197 from "./lightclients/solomachine/v3/solomachine";
import * as _198 from "./lightclients/tendermint/v1/tendermint";
import * as _312 from "./applications/fee/v1/tx.amino";
import * as _313 from "./applications/interchain_accounts/controller/v1/tx.amino";
import * as _314 from "./applications/transfer/v1/tx.amino";
import * as _315 from "./core/channel/v1/tx.amino";
import * as _316 from "./core/client/v1/tx.amino";
import * as _317 from "./core/connection/v1/tx.amino";
import * as _318 from "./applications/fee/v1/tx.registry";
import * as _319 from "./applications/interchain_accounts/controller/v1/tx.registry";
import * as _320 from "./applications/transfer/v1/tx.registry";
import * as _321 from "./core/channel/v1/tx.registry";
import * as _322 from "./core/client/v1/tx.registry";
import * as _323 from "./core/connection/v1/tx.registry";
import * as _324 from "./applications/fee/v1/query.lcd";
import * as _325 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _326 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _327 from "./applications/transfer/v1/query.lcd";
import * as _328 from "./core/channel/v1/query.lcd";
import * as _329 from "./core/client/v1/query.lcd";
import * as _330 from "./core/connection/v1/query.lcd";
import * as _331 from "./applications/fee/v1/query.rpc.Query";
import * as _332 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _333 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _334 from "./applications/transfer/v1/query.rpc.Query";
import * as _335 from "./core/channel/v1/query.rpc.Query";
import * as _336 from "./core/client/v1/query.rpc.Query";
import * as _337 from "./core/connection/v1/query.rpc.Query";
import * as _338 from "./applications/fee/v1/tx.rpc.msg";
import * as _339 from "./applications/interchain_accounts/controller/v1/tx.rpc.msg";
import * as _340 from "./applications/transfer/v1/tx.rpc.msg";
import * as _341 from "./core/channel/v1/tx.rpc.msg";
import * as _342 from "./core/client/v1/tx.rpc.msg";
import * as _343 from "./core/connection/v1/tx.rpc.msg";
import * as _363 from "./lcd";
import * as _364 from "./rpc.query";
import * as _365 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._312,
        ..._318,
        ..._324,
        ..._331,
        ..._338
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._166,
          ..._167,
          ..._168,
          ..._313,
          ..._319,
          ..._325,
          ..._332,
          ..._339
        };
      }
      export namespace genesis {
        export const v1 = {
          ..._169
        };
      }
      export namespace host {
        export const v1 = {
          ..._170,
          ..._171,
          ..._326,
          ..._333
        };
      }
      export const v1 = {
        ..._172,
        ..._173,
        ..._174
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._314,
        ..._320,
        ..._327,
        ..._334,
        ..._340
      };
      export const v2 = {
        ..._180
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._315,
        ..._321,
        ..._328,
        ..._335,
        ..._341
      };
    }
    export namespace client {
      export const v1 = {
        ..._185,
        ..._186,
        ..._187,
        ..._188,
        ..._316,
        ..._322,
        ..._329,
        ..._336,
        ..._342
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._189
      };
    }
    export namespace connection {
      export const v1 = {
        ..._190,
        ..._191,
        ..._192,
        ..._193,
        ..._317,
        ..._323,
        ..._330,
        ..._337,
        ..._343
      };
    }
    export namespace types {
      export const v1 = {
        ..._194
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v2 = {
        ..._195
      };
    }
    export namespace solomachine {
      export const v2 = {
        ..._196
      };
      export const v3 = {
        ..._197
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._198
      };
    }
  }
  export const ClientFactory = {
    ..._363,
    ..._364,
    ..._365
  };
}