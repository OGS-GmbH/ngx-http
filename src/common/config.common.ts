import { HttpConfig } from "../types/environment-config.type";

export const mergeHttpConfig = (baseHttpConfig: HttpConfig, httpConfig: HttpConfig): HttpConfig => ({
  ...baseHttpConfig,
  ...httpConfig
});
