import * as _0 from "./aura/aura";
import * as _1 from "./aura/genesis";
import * as _2 from "./aura/query";
import * as _3 from "./aura/tx";
import * as _4 from "./feegrant/v1beta1/feegrant";
import * as _5 from "./vesting/v1beta1/tx";
import * as _118 from "./aura/query.rpc.Query";
import * as _196 from "./lcd";
import * as _197 from "./rpc.query";
import * as _198 from "./rpc.tx";
export namespace aura {
  export const aura = { ..._0,
    ..._1,
    ..._2,
    ..._3,
    ..._118
  };
  export namespace feegrant {
    export const v1beta1 = { ..._4
    };
  }
  export namespace vesting {
    export const v1beta1 = { ..._5
    };
  }
  export const ClientFactory = { ..._196,
    ..._197,
    ..._198
  };
}