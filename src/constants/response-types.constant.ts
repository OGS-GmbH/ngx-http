/**
 * A collection of HTTP response types for Angular HttpClient
 *
 * @see https://v18.angular.dev/api/common/http/HttpRequest#responseType
 * @since 1.0.0
 * @author Simon Kovtyk
 * @category Constants
 */
export namespace HttpResponseTypes {
  /**
   * JSON Response Type
   *
   * Expects to get a JSON
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  /* eslint-disable-next-line @tseslint/no-shadow */
  export const JSON: string = "json";
  /**
   * ArrayBuffer Response Type
   *
   * Expects to get a ArrayBuffer
   *
   * @see https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  export const ARRAYBUFFER: string = "arraybuffer";
  /**
   * Blob Response Type
   *
   * Expects to get a ArrayBuffe
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Blob
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  export const BLOB: string = "blob";
  /**
   * Text Response Type
   *
   * Expects to get a ArrayBuffe
   *
   * @since 1.0.0
   * @author Simon Kovtyk
   */
  export const TEXT: string = "text";
}
