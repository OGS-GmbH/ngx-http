/**
 * Common HTTP ports
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Constants
 */
export namespace HttpPorts {
  /**
   * Default HTTP port
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   * @category Constants
   */
  export const HTTP_PORT: number = 80;
  /**
   * Default HTTPS port
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   * @category Constants
   */
  export const HTTPS_PORT: number = 443;
  /**
   * Default alternative HTTP port
   * @remarks Use it for example, if default HTTP port is already in use.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   * @category Constants
   */
  export const HTTP_PORT_ALTERNATE: number = 7104;
  /**
   * Default alternative HTTPS port
   * @remarks Use it for example, if default HTTPS port is already in use.
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   * @category Constants
   */
  export const HTTPS_PORT_ALTERNATE: number = 7102;
}
