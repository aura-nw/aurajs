import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGenerateAccountRequest, QueryGenerateAccountResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    generateAccount(params: QueryGenerateAccountRequest): Promise<QueryGenerateAccountResponseSDKType>;
}
