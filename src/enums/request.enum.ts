/**
 * Enumeration of HTTP request status
 *
 * @since 1.0.0
 * @author Simon Kovtyk
 */
export enum HttpRequestStatus {
  /**
   * Status for pending HTTP requests
   */
  PENDING = "PENDING",
  /**
   * Status for success in HTTP requests
   */
  SUCCESS = "SUCCESS",
  /**
   * Status for error in HTTP requests
   */
  ERROR = "ERROR"
}
