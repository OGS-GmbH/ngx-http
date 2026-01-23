import { InjectionToken } from "@angular/core";

/**
 * InjectionToken for which the HTTP-Environment will be provided
 * @readonly
 * @category Dependency Injection
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export const HTTP_ENVIRONMENT_TOKEN: InjectionToken<string> = new InjectionToken<string>("http-environment-token");
