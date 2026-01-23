import { HttpHeaders, HttpParams } from "@angular/common/http";

/**
 * HTTP headers in Angular HttpClient
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Dependency Injection
 */
export type HttpHeadersOption = HttpHeaders | Record<string, string | string[]>;
/**
 * HTTP query params in Angular HttpClient
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Dependency Injection
 */
export type HttpParamsOption = HttpParams | Record<string, string | number | boolean | ReadonlyArray<string | number | boolean>>;
/**
 * HTTP JSON body
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Dependency Injection
 */
export type HttpJsonBodyOption = {
  [body: string]: string | number | boolean | Array<string | number | boolean> | HttpJsonBodyOption;
};
/**
 * HTTP request options
 *
 * @typeParam HttpBody - The body of the HTTP request
 * @typeParam HttpHeaders - The headers of the HTTP request
 * @typeParam HttpParams - The params of the HTTP request
 * @category Dependency Injection
 *
 * @since 1.0.0
 * @author Simon Kovtyk
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
