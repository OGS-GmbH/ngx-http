import { FactoryProvider } from "@angular/core";
import { HTTP_ENVIRONMENT_TOKEN } from "../tokens/environment.token";
import { HttpConfig } from "../types/environment-config.type";
import { buildHttpConnectionString } from "../public-api";

export const provideHttpConfig = (httpConfig: HttpConfig): FactoryProvider => ({
  provide: HTTP_ENVIRONMENT_TOKEN,
  useFactory: (): string => buildHttpConnectionString(httpConfig),
  multi: false
});
