import { FactoryProvider } from "@angular/core";
import { HTTP_ENVIRONMENT_TOKEN } from "../tokens/environment.token";
import { HttpConfig } from "../types/environment-config.type";
import { buildHttpConnectionString } from "../public-api";

/**
 * Provide an HTTP configuration by InjectionToken
 *
 * Internally, it uses the `buildHttpConnectionString` function to build the HTTP connection string based on the provided configuration.
 *
 * @param httpConfig - The HTTP configuration
 * @returns A FactoryProvider that simply builds the HTTP configurtion
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export const provideHttpConfig = (httpConfig: HttpConfig): FactoryProvider => ({
  provide: HTTP_ENVIRONMENT_TOKEN,
  useFactory: (): string => buildHttpConnectionString(httpConfig),
  multi: false
});
