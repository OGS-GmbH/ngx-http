/**
 * Describes a HTTP configuration
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export type HttpConfig = {
  /**
   * HTTP protocol, that should be depend on
   *
   * @example "http"
   * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  protocol?: "http" | "https" | undefined;
  /**
   * HTTP host
   *
   * @example "ogs.de"
   * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/host
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  host?: string | undefined;
  /**
   * HTTP port
   *
   * @example 80
   * @see https://developer.mozilla.org/en-US/docs/Web/API/URL/port
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  port?: number | undefined;
  /**
   * HTTP path, that will be added as base path to the ending of the HTTP connection
   *
   * @example "/my-subpath/"
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  path?: string | undefined;
};
