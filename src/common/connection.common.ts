import { HttpConfig } from "../types/environment-config.type";

export const buildHttpConnectionString = (httpConfig: HttpConfig): string => `${ httpConfig.protocol ?? "http" }://${ httpConfig.host ?? "localhost" }${ httpConfig.port ? `:${ httpConfig.port }` : "" }${ httpConfig.path ?? "" }`;
