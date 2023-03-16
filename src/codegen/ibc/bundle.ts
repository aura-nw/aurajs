import * as _94 from "./applications/interchain_accounts/controller/v1/controller";
import * as _95 from "./applications/interchain_accounts/controller/v1/query";
import * as _96 from "./applications/interchain_accounts/host/v1/host";
import * as _97 from "./applications/interchain_accounts/host/v1/query";
import * as _98 from "./applications/interchain_accounts/v1/account";
import * as _99 from "./applications/interchain_accounts/v1/genesis";
import * as _100 from "./applications/interchain_accounts/v1/metadata";
import * as _101 from "./applications/interchain_accounts/v1/packet";
import * as _102 from "./applications/transfer/v1/genesis";
import * as _103 from "./applications/transfer/v1/query";
import * as _104 from "./applications/transfer/v1/transfer";
import * as _105 from "./applications/transfer/v1/tx";
import * as _106 from "./applications/transfer/v2/packet";
import * as _107 from "./core/channel/v1/channel";
import * as _108 from "./core/channel/v1/genesis";
import * as _109 from "./core/channel/v1/query";
import * as _110 from "./core/channel/v1/tx";
import * as _111 from "./core/client/v1/client";
import * as _112 from "./core/client/v1/genesis";
import * as _113 from "./core/client/v1/query";
import * as _114 from "./core/client/v1/tx";
import * as _115 from "./core/commitment/v1/commitment";
import * as _116 from "./core/connection/v1/connection";
import * as _117 from "./core/connection/v1/genesis";
import * as _118 from "./core/connection/v1/query";
import * as _119 from "./core/connection/v1/tx";
import * as _120 from "./core/types/v1/genesis";
import * as _121 from "./lightclients/localhost/v1/localhost";
import * as _122 from "./lightclients/solomachine/v1/solomachine";
import * as _123 from "./lightclients/solomachine/v2/solomachine";
import * as _124 from "./lightclients/tendermint/v1/tendermint";
import * as _195 from "./applications/transfer/v1/tx.amino";
import * as _196 from "./core/channel/v1/tx.amino";
import * as _197 from "./core/client/v1/tx.amino";
import * as _198 from "./core/connection/v1/tx.amino";
import * as _199 from "./applications/transfer/v1/tx.registry";
import * as _200 from "./core/channel/v1/tx.registry";
import * as _201 from "./core/client/v1/tx.registry";
import * as _202 from "./core/connection/v1/tx.registry";
import * as _203 from "./applications/interchain_accounts/controller/v1/query.lcd";
import * as _204 from "./applications/interchain_accounts/host/v1/query.lcd";
import * as _205 from "./applications/transfer/v1/query.lcd";
import * as _206 from "./core/channel/v1/query.lcd";
import * as _207 from "./core/client/v1/query.lcd";
import * as _208 from "./core/connection/v1/query.lcd";
import * as _209 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _210 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _211 from "./applications/transfer/v1/query.rpc.Query";
import * as _212 from "./core/channel/v1/query.rpc.Query";
import * as _213 from "./core/client/v1/query.rpc.Query";
import * as _214 from "./core/connection/v1/query.rpc.Query";
import * as _215 from "./applications/transfer/v1/tx.rpc.msg";
import * as _216 from "./core/channel/v1/tx.rpc.msg";
import * as _217 from "./core/client/v1/tx.rpc.msg";
import * as _218 from "./core/connection/v1/tx.rpc.msg";
import * as _228 from "./lcd";
import * as _229 from "./rpc.query";
import * as _230 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = { ..._94,
          ..._95,
          ..._203,
          ..._209
        };
      }
      export namespace host {
        export const v1 = { ..._96,
          ..._97,
          ..._204,
          ..._210
        };
      }
      export const v1 = { ..._98,
        ..._99,
        ..._100,
        ..._101
      };
    }
    export namespace transfer {
      export const v1 = { ..._102,
        ..._103,
        ..._104,
        ..._105,
        ..._195,
        ..._199,
        ..._205,
        ..._211,
        ..._215
      };
      export const v2 = { ..._106
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = { ..._107,
        ..._108,
        ..._109,
        ..._110,
        ..._196,
        ..._200,
        ..._206,
        ..._212,
        ..._216
      };
    }
    export namespace client {
      export const v1 = { ..._111,
        ..._112,
        ..._113,
        ..._114,
        ..._197,
        ..._201,
        ..._207,
        ..._213,
        ..._217
      };
    }
    export namespace commitment {
      export const v1 = { ..._115
      };
    }
    export namespace connection {
      export const v1 = { ..._116,
        ..._117,
        ..._118,
        ..._119,
        ..._198,
        ..._202,
        ..._208,
        ..._214,
        ..._218
      };
    }
    export namespace types {
      export const v1 = { ..._120
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = { ..._121
      };
    }
    export namespace solomachine {
      export const v1 = { ..._122
      };
      export const v2 = { ..._123
      };
    }
    export namespace tendermint {
      export const v1 = { ..._124
      };
    }
  }
  export const ClientFactory = { ..._228,
    ..._229,
    ..._230
  };
}