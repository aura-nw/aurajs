import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGenerateAccountRequest, QueryGenerateAccountResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.generateAccount = this.generateAccount.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `auranw/aura/smartaccount/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a list of GenerateAccount items. */
  async generateAccount(params: QueryGenerateAccountRequest): Promise<QueryGenerateAccountResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.codeId !== "undefined") {
      options.params.code_id = params.codeId;
    }
    if (typeof params?.salt !== "undefined") {
      options.params.salt = params.salt;
    }
    if (typeof params?.initMsg !== "undefined") {
      options.params.init_msg = params.initMsg;
    }
    if (typeof params?.publicKey !== "undefined") {
      options.params.public_key = params.publicKey;
    }
    const endpoint = `auranw/aura/smartaccount/generate_account`;
    return await this.req.get<QueryGenerateAccountResponseSDKType>(endpoint, options);
  }
}