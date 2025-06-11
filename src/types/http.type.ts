import { HttpHeaders, HttpParams } from "@angular/common/http";

/**
 * Type is used for additional HTTP Headers in HTTP Client.
 */
export type HttpHeadersOption = HttpHeaders | Record<string, string | string[]>;
/**
 * Type is used for additional HTTP Query Params in HTTP Client.
 */
export type HttpParamsOption = HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
export type HttpJsonBodyOption = {
  [body: string]: string | number | boolean | Array<string | number | boolean> | HttpJsonBodyOption;
};
/**
 * Type is used for additional HTTP Request Manipulation.
 */
export interface HttpOptions<
  HttpBody extends HttpJsonBodyOption | FormData | URLSearchParams,
  HttpHeaders = HttpHeadersOption,
  HttpParams = HttpParamsOption
> {
  headers?: HttpHeaders;
  params?: HttpParams;
  body?: HttpBody;
}
