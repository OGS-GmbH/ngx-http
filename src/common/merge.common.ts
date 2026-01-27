import { HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpHeadersOption, HttpJsonBodyOption, HttpParamsOption } from "../types/http.type";
import { merge } from "es-toolkit";

/**
 * Merge HTTP headers from different sources
 *
 * Given HTTP headers will be merged in sequential order. If you provide HTTP headers A & B, the output would be A' & B.
 * @remarks This function will take care of the data structure. You can provide either the HTTP header instance or a record. The result will be deterministic.
 *
 * @param headers - Different HTTP headers
 * @returns Merged HTTP headers as instance
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function mergeHttpHeaders (...headers: HttpHeadersOption[]): HttpHeaders {
  let httpHeaderResult: HttpHeaders = new HttpHeaders();

  headers.forEach((currentHeader: HttpHeadersOption): void => {
    if (currentHeader instanceof HttpHeaders) {
      currentHeader.keys().forEach((currentHeaderKey: string): void => {
        /* eslint-disable-next-line @tseslint/no-non-null-assertion */
        const currentHeaderValue: string = currentHeader.get(currentHeaderKey)!;

        httpHeaderResult = httpHeaderResult.append(currentHeaderKey, currentHeaderValue);
      });
    } else {
      Object.keys(currentHeader).forEach((currentHeaderKey: string): void => {
        /* eslint-disable-next-line @tseslint/no-non-null-assertion */
        const currentHeaderValue: string | string[] = currentHeader[ currentHeaderKey ]!;

        if (Array.isArray(currentHeaderValue)) {
          currentHeaderValue.forEach((currentHeaderValueItem: string): void => {
            httpHeaderResult = httpHeaderResult.append(currentHeaderKey, currentHeaderValueItem);
          });

          return;
        }

        httpHeaderResult = httpHeaderResult.append(currentHeaderKey, currentHeaderValue);
      });
    }
  });

  return httpHeaderResult;
}

/**
 * Merge HTTP params from different sources
 *
 * Given HTTP params will be merged in sequential order. If you provide HTTP params A & B, the output would be A' & B.
 * @remarks This function will take care of the data structure. You can provide either the HTTP params instance or a record. The result will be deterministic.
 *
 * @param params - Different HTTP params
 * @returns Merged HTTP params as instance
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function mergeHttpParams (...params: HttpParamsOption[]): HttpParams {
  let httpParamsResult: HttpParams = new HttpParams();

  params.forEach((currentParams: HttpParamsOption): void => {
    if (currentParams instanceof HttpParams) {
      currentParams.keys().forEach((currentParamsKey: string): void => {
        /* eslint-disable-next-line @tseslint/no-non-null-assertion */
        const currentParamsValue: string = currentParams.get(currentParamsKey)!;

        httpParamsResult = httpParamsResult.append(currentParamsKey, currentParamsValue);
      });
    } else {
      Object.keys(currentParams).forEach((currentParamsKey: string): void => {
        /* eslint-disable-next-line @tseslint/no-non-null-assertion */
        const currentParamsValue: string | number | boolean | ReadonlyArray<string | number | boolean> = currentParams[ currentParamsKey ]!;

        if (Array.isArray(currentParamsValue)) {
          currentParamsValue.forEach((currentParamsValueItem: string | number | boolean): void => {
            httpParamsResult = httpParamsResult.append(currentParamsKey, currentParamsValueItem);
          });
        } else
          httpParamsResult = httpParamsResult.append(currentParamsKey, currentParamsValue as string | number | boolean);
      });
    }
  });

  return httpParamsResult;
}

/**
 * Merge HTTP JSON bodies from different sources
 *
 * Given HTTP JSON bodies will be merged in sequential order. If you provide HTTP JSON bodies A & B, the output would be A' & B.
 *
 * @param body - Different HTTP JSON bodies
 * @returns Merged HTTP JSON body
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function mergeHttpJsonBody (...body: HttpJsonBodyOption[]): HttpJsonBodyOption {
  let httpBodyResult: HttpJsonBodyOption = {};

  body.forEach((currentBody: HttpJsonBodyOption): void => {
    httpBodyResult = merge(httpBodyResult, currentBody);
  });

  return httpBodyResult;
}

/**
 * Merge HTTP FormData bodies from different sources
 *
 * Given HTTP FormData bodies will be merged in sequential order. If you provide HTTP FormData bodies A & B, the output would be A' & B.
 *
 * @param body - Different HTTP FormData bodies
 * @returns Merged HTTP FormData body
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function mergeHttpFormDataBody (...body: FormData[]): FormData {
  const httpBodyResult: FormData = new FormData();

  body.forEach((currentBody: FormData): void => {
    currentBody.forEach((value: FormDataEntryValue, key: string): void => {
      httpBodyResult.append(key, value);
    });
  });

  return httpBodyResult;
}

/**
 * Merge HTTP URLSearchParam bodies from different sources
 *
 * Given HTTP URLSearchParam bodies will be merged in sequential order. If you provide HTTP URLSearchParam bodies A & B, the output would be A' & B.
 *
 * @param body - Different HTTP URLSearchParam bodies
 * @returns Merged HTTP URLSearchParam body
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
function mergeHttpUrlSearchParamsBody (...body: URLSearchParams[]): URLSearchParams {
  const httpBodyResult: URLSearchParams = new URLSearchParams();

  body.forEach((currentBody: URLSearchParams): void => {
    currentBody.forEach((value: string, key: string): void => {
      httpBodyResult.append(key, value);
    });
  });

  return httpBodyResult;
}

export {
  mergeHttpParams,
  mergeHttpHeaders,
  mergeHttpJsonBody,
  mergeHttpFormDataBody,
  mergeHttpUrlSearchParamsBody
};
