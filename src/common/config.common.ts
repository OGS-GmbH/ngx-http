import { HttpConfig } from "../types/environment-config.type";

/**
 * Merge HTTP configurations
 *
 * @param baseHttpConfig - Base HTTP configuration
 * @param httpConfig - HTTP configuration, that will overrride the base configuration
 * @returns Merged HTTP configuration
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export const mergeHttpConfig = (baseHttpConfig: HttpConfig, httpConfig: HttpConfig): HttpConfig => ({
  ...baseHttpConfig,
  ...httpConfig
});
