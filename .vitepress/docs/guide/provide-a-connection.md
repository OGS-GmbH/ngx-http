# Provide a connection

## 1. Configure

To configure a HTTP connection, simply follow the [define a connection guide](http://localhost:5173/ngx-http/guide/define-a-connection).

## 2. Provide

Now, you can provide the HTTP connection from the step before. For this purpose, you can use the [`provideHttpConfig`](http://localhost:5173/ngx-http/reference/functions/provideHttpConfig) function.

::: tip Connection-to-string coercion

By providing the HTTP connection, `provideHttpConfig` will internally use the [`buildHttpConnectionString`](http://localhost:5173/ngx-http/reference/functions/buildHttpConnectionString), resulting in a `String`, when implementing it in a step ahead.

:::

As an example, refer to the following code:

```typescript [example.ts]
import { provideHttpConfig } from "@ogs-gmbh/ngx-http";

@NgModule({
  providers: [
    provideHttpConfig(httpConfig)
  ]
})
export class AppModule {}
```

## 3. Usage

When you have provided the HTTP connection, it will now be available by using [`HTTP_ENVIRONMENT_TOKEN`](http://localhost:5173/ngx-http/reference/variables/HTTP_ENVIRONMENT_TOKEN).

```typescript [example.ts]
import { HTTP_ENVIRONMENT_TOKEN } from "@ogs-gmbh/ngx-http";

@Component()
export class AppComponent {
  private readonly _httpEnvironment: string = inject(HTTP_ENVIRONMENT_TOKEN);
}
```
