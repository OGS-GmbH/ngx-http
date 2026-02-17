/**
 * A collection of possible HTTP observe options for Angular HttpClient
 *
 * @see https://v21.angular.dev/api/common/http/HttpClient
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Constants
 */
export namespace HttpObserve {
  /**
   * Observe the HTTP body
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   * @category Constants
   */
  export const BODY: string = "body";
  /**
   * Observe the HTTP events
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   * @category Constants
   */
  export const EVENTS: string = "events";
  /**
   * Observe the HTTP response
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   * @category Constants
   */
  export const RESPONSE: string = "response";
}
