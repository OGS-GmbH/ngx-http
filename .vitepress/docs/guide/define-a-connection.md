---
prev: false
next: false
---

# Define a connection

## 1. Configure

First you need to define your HTTP connection. This is done by using [`HttpConfig`](/reference/types/HttpConfig).

```typescript [example.ts]
import { HttpConfig } from "@ogs-gmbh/ngx-http";

const httpConfig: HttpConfig = {
  protocol: "https",
  host: "ogs.de",
  path: "/example"
  // Port can also be set, but is left empty to use 443 HTTP default port
};
```

## 2. Generating the connection string

After defining your HTTP connection, you can use [`buildHttpConnectionString`](/reference/functions/buildHttpConnectionString).

```typescript [example.ts]
import { buildHttpConnectionString } from "@ogs-gmbh/ngx-http";

// Previous code here

const connection: string = buildHttpConnectionString(httpConfig);

// Use connection here
```
