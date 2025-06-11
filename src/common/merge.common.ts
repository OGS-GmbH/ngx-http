import { HttpHeaders, HttpParams } from "@angular/common/http";
import { HttpHeadersOption, HttpJsonBodyOption, HttpParamsOption } from "../types/http.type";
import _ from "lodash";

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

function mergeHttpJsonBody (...body: HttpJsonBodyOption[]): HttpJsonBodyOption {
  let httpBodyResult: HttpJsonBodyOption = {};

  body.forEach((currentBody: HttpJsonBodyOption): void => {
    httpBodyResult = _.merge(httpBodyResult, currentBody);
  });

  return httpBodyResult;
}

function mergeHttpFormDataBody (...body: FormData[]): FormData {
  const httpBodyResult: FormData = new FormData();

  body.forEach((currentBody: FormData): void => {
    currentBody.forEach((value: FormDataEntryValue, key: string): void => {
      httpBodyResult.append(key, value);
    });
  });

  return httpBodyResult;
}

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
