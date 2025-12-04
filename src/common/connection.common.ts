import { HttpConfig } from "../types/environment-config.type";

/**
 * Build an HTTP connection string from the given configuration
 *
 * @param httpConfig - The configuration for the HTTP connection
 * @returns HTTP connection string
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export const buildHttpConnectionString = (httpConfig: HttpConfig): string => `${ httpConfig.protocol ?? "http" }://${ httpConfig.host ?? "localhost" }${ httpConfig.port ? `:${ httpConfig.port }` : "" }${ httpConfig.path ?? "" }`;
