---
prev: false
next: false
---

# Merge HTTP options

## Headers

HTTP headers can be merged by [`mergeHttpHeaders`](/reference/functions/mergeHttpHeaders).

Take the following code excerpt as an example:

```typescript [example.ts]
import { HttpHeaders } from "@angular/common";
import { mergeHttpHeaders } from "@ogs-gmbh/ngx-http";

const headers = new HttpHeaders()
  .append("headerA", "valueB")
  .append("headerC", "valueD");

const otherHeaders = new HttpHeaders()
  .append("headerE", "valueF")
  .append("headerG", "valueH");

const mergedHeaders = mergeHttpHeaders(
  headers,
  otherHeaders
);

console.log(mergedHeaders);

// `mergedHeaders` now contains:
// headerA: valueB
// headerC: valueD
// headerE: valueF
// headerG: valueH
```

::: tip Signature

Keep in mind, that not only [`HttpHeaders`](https://v18.angular.dev/api/common/http/HttpHeaders) from Angular are supported, but a Record too.

Check the type [`HttpHeadersOption`](/reference/types/HttpHeadersOption) for the allowed parameters.

:::

## Params

By using [`mergeHttpParams`](/reference/functions/mergeHttpParams), you can merge HTTP params.

Here an example:

```typescript [example.ts]
import { HttpParams } from "@angular/common";
import { mergeHttpParams } from "@ogs-gmbh/ngx-http";

const params = new HttpParams()
  .append("paramA", "valueB")
  .append("paramC", "valueD");

const otherParams = new HttpParams()
  .append("paramE", "valueF")
  .append("paramG", "valueH");

const mergedParams = mergeHttpParams(
  headers,
  otherHeaders
);

console.log(mergedParams);

// `mergedHeaders` now contains:
// paramA: valueB
// paramC: valueD
// paramE: valueF
// paramG: valueH
```

::: tip Signature

Keep in mind, that not only [`HttpParams`](https://v18.angular.dev/api/common/http/HttpParams) from Angular are supported, but a Record too.

Check the type [`HttpParamsOption`](/reference/types/HttpParamsOption) for the allowed parameters.

:::

## JSON
A merge of a JSON body can be achieved by using [`mergeHttpJsonBody`](/reference/functions/mergeHttpJsonBody).

Take this as an example:

```typescript [example.ts]
import { mergeHttpJsonBody } from "@ogs-gmbh/ngx-http";

const body = {
  "propertyA": "valueB",
  "propertyC": "valueD"
};

const otherBody = {
  "propertyE": "valueF",
  "propertyG": "valueH"
}

const mergedBody = mergeHttpJsonBody(
  body,
  otherBody
);

console.log(mergedBody);

// `mergedBody` now contains:
// propertyA: valueB
// propertyC: valueD
// propertyE: valueF
// propertyG: valueH
```

## FormData

FormData can also be easily merged by using [`mergeHttpFormDataBody`](/reference/functions/mergeHttpFormDataBody).

Here an example:

```typescript [example.ts]
import { mergeHttpFormDataBody } from "@ogs-gmbh/ngx-http";

const data = new FormData();
data.append("propertyA", "valueB");
data.append("propertyC", "valueD");

const otherData = new FormData();
otherData.append("propertyE", "valueF");
otherData.append("propertyG", "valueH");

const mergedData = mergeHttpFormDataBody(
  data,
  otherData
);

console.log(mergedData);

// `mergedData` now contains:
// propertyA: valueB
// propertyC: valueD
// propertyE: valueF
// propertyG: valueH
```

## URLSearchParams

Even `URLSearchParams` can be merged trough [`mergeHttpUrlSearchParamsBody`](/reference/functions/mergeHttpUrlSearchParamsBody).

See here:

```typescript [example.ts]
import { mergeHttpUrlSearchParamsBody } from "@ogs-gmbh/ngx-http";

const params = new URLSearchParams();
params.append("propertyA", "valueB");
params.append("propertyC", "valueD");

const otherParams = new URLSearchParams();
otherParams.append("propertyE", "valueF");
otherParams.append("propertyG", "valueH");

const mergedParams = mergeHttpUrlSearchParamsBody(
  params,
  otherParams
);

console.log(mergedParams);

// `mergedParams` now contains:
// propertyA: valueB
// propertyC: valueD
// propertyE: valueF
// propertyG: valueH
```

## HTTP configurations

Sometimes, it is common to use shared properties from HTTP connections like `path` in different HTTP-Environments (e.g. dev vs. prod).

In this case, you can also merge [`HttpConfig`](/reference/types/HttpConfig).

This looks like:

```typescript [example.ts]
import { HttpConfig, mergeHttpConfig } from "@ogs-gmbh/ngx-http";

const httpConfig: HttpConfig = {
  protocol: "https",
  host: "ogs.de",
  path: "example"
};

const otherHttpConfig: HttpConfig = {
  host: "dev.ogs.de"
};

const mergedHttpConfig = mergeHttpConfig(
  httpConfig,
  otherHttpConfig
);

console.log(mergedHttpConfig);

// `mergedHttpConfig` now contains:
// protocol: "https"
// host: "dev.ogs.de"
// path: "example"
```
