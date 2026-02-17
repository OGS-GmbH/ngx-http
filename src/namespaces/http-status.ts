/**
 * Groups the const of the HTTP-Status-Codes as well as the matching Types and Type-Guards
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
 * @since 2.1.0
 * @author Ian Wenneckers
	* @category Namespaces
 */
export namespace HttpStatus {
  /* eslint-disable @tseslint/typedef */
  export const CONTINUE = 100;
  export const SWITCHING_PROTOCOLS = 101;
  export const PROCESSING = 102;
  export const EARLY_HINTS = 103;
  export const OK = 200;
  export const CREATED = 201;
  export const ACCEPTED = 202;
  export const NON_AUTHORITATIVE_INFORMATION = 203;
  export const NO_CONTENT = 204;
  export const RESET_CONTENT = 205;
  export const PARTIAL_CONTENT = 206;
  export const MULTI_STATUS = 207;
  export const ALREADY_REPORTED = 208;
  export const IM_USED = 226;
  export const MULTIPLE_CHOICES = 300;
  export const MOVED_PERMANENTLY = 301;
  export const FOUND = 302;
  export const SEE_OTHER = 303;
  export const NOT_MODIFIED = 304;
  export const USE_PROXY = 305;
  export const TEMPORARY_REDIRECT = 307;
  export const PERMANENT_REDIRECT = 308;
  export const BAD_REQUEST = 400;
  export const UNAUTHORIZED = 401;
  export const PAYMENT_REQUIRED = 402;
  export const FORBIDDEN = 403;
  export const NOT_FOUND = 404;
  export const METHOD_NOT_ALLOWED = 405;
  export const NOT_ACCEPTABLE = 406;
  export const PROXY_AUTHENTICATION_REQUIRED = 407;
  export const REQUEST_TIMEOUT = 408;
  export const CONFLICT = 409;
  export const GONE = 410;
  export const LENGTH_REQUIRED = 411;
  export const PRECONDITION_FAILED = 412;
  export const PAYLOAD_TOO_LARGE = 413;
  export const URI_TOO_LONG = 414;
  export const UNSUPPORTED_MEDIA_TYPE = 415;
  export const RANGE_NOT_SATISFIABLE = 416;
  export const EXPECTATION_FAILED = 417;
  export const IM_A_TEAPOT = 418;
  export const MISDIRECTED_REQUEST = 421;
  export const UNPROCESSABLE_ENTITY = 422;
  export const LOCKED = 423;
  export const FAILED_DEPENDENCY = 424;
  export const TOO_EARLY = 425;
  export const UPGRADE_REQUIRED = 426;
  export const PRECONDITION_REQUIRED = 428;
  export const TOO_MANY_REQUESTS = 429;
  export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
  export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
  export const INTERNAL_SERVER_ERROR = 500;
  export const NOT_IMPLEMENTED = 501;
  export const BAD_GATEWAY = 502;
  export const SERVICE_UNAVAILABLE = 503;
  export const GATEWAY_TIMEOUT = 504;
  export const HTTP_VERSION_NOT_SUPPORTED = 505;
  export const VARIANT_ALSO_NEGOTIATES = 506;
  export const INSUFFICIENT_STORAGE = 507;
  export const LOOP_DETECTED = 508;
  export const NOT_EXTENDED = 510;
  export const NETWORK_AUTHENTICATION_REQUIRED = 511;

  const INFORMATIONAL_CODES = [
    CONTINUE,
    SWITCHING_PROTOCOLS,
    PROCESSING,
    EARLY_HINTS
  ] as const;
  const SUCCESS_CODES = [
    OK,
    CREATED,
    ACCEPTED,
    NON_AUTHORITATIVE_INFORMATION,
    NO_CONTENT,
    RESET_CONTENT,
    PARTIAL_CONTENT,
    MULTI_STATUS,
    ALREADY_REPORTED,
    IM_USED
  ] as const;
  const REDIRECT_CODES = [
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    FOUND,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    TEMPORARY_REDIRECT,
    PERMANENT_REDIRECT
  ] as const;
  const CLIENT_ERROR_CODES = [
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTHENTICATION_REQUIRED,
    REQUEST_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    PAYLOAD_TOO_LARGE,
    URI_TOO_LONG,
    UNSUPPORTED_MEDIA_TYPE,
    RANGE_NOT_SATISFIABLE,
    EXPECTATION_FAILED,
    IM_A_TEAPOT,
    MISDIRECTED_REQUEST,
    UNPROCESSABLE_ENTITY,
    LOCKED,
    FAILED_DEPENDENCY,
    TOO_EARLY,
    UPGRADE_REQUIRED,
    PRECONDITION_REQUIRED,
    TOO_MANY_REQUESTS,
    REQUEST_HEADER_FIELDS_TOO_LARGE,
    UNAVAILABLE_FOR_LEGAL_REASONS
  ] as const;
  const SERVER_ERROR_CODES = [
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    HTTP_VERSION_NOT_SUPPORTED,
    VARIANT_ALSO_NEGOTIATES,
    INSUFFICIENT_STORAGE,
    LOOP_DETECTED,
    NOT_EXTENDED,
    NETWORK_AUTHENTICATION_REQUIRED
  ] as const;
  const CODES = [
    ...INFORMATIONAL_CODES,
    ...SUCCESS_CODES,
    ...REDIRECT_CODES,
    ...CLIENT_ERROR_CODES,
    ...SERVER_ERROR_CODES
  ] as const;
  /* eslint-enable @tseslint/typedef */

  /**
   * Union of all 1xx status codes.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export type InformationalCode = typeof INFORMATIONAL_CODES[number];
  /**
   * Union of all 2xx status codes.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export type SuccessCode = typeof SUCCESS_CODES[number];
  /**
   * Union of all 3xx status codes.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export type RedirectCode = typeof REDIRECT_CODES[number];
  /**
   * Union of all 4xx status codes.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export type ClientErrorCode = typeof CLIENT_ERROR_CODES[number];
  /**
   * Union of all 5xx status codes.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export type ServerErrorCode = typeof SERVER_ERROR_CODES[number];
  /**
   * Union of all HTTP status codes.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export type Code =
    | InformationalCode
    | SuccessCode
    | RedirectCode
    | ClientErrorCode
    | ServerErrorCode;
  /**
   * Checks whether a numeric value is a {@link Code}.
   * @param value - The numeric value to check.
   * @returns `true` if `value` is a {@link Code}; otherwise `false`.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export function isCode (value: number): value is Code {
    return (CODES as readonly number[]).includes(value);
  }
  /**
   * Checks whether a numeric value is a {@link InformationalCode}.
   * @param value - The numeric value to check.
   * @returns `true` if `value` is a {@link InformationalCode}; otherwise `false`.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export function isInformational (value: number): value is InformationalCode {
    return (INFORMATIONAL_CODES as readonly number[]).includes(value);
  }
  /**
   * Checks whether a numeric value is a {@link SuccessCode}.
   * @param value - The numeric value to check.
   * @returns `true` if `value` is a {@link SuccessCode}; otherwise `false`.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export function isSuccess (value: number): value is SuccessCode {
    return (SUCCESS_CODES as readonly number[]).includes(value);
  }
  /**
   * Checks whether a numeric value is a {@link RedirectCode}.
   * @param value - The numeric value to check.
   * @returns `true` if `value` is a {@link RedirectCode}; otherwise `false`.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export function isRedirect (value: number): value is RedirectCode {
    return (REDIRECT_CODES as readonly number[]).includes(value);
  }
  /**
   * Checks whether a numeric value is a {@link ClientErrorCode}.
   * @param value - The numeric value to check.
   * @returns `true` if `value` is a {@link ClientErrorCode}; otherwise `false`.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export function isClientError (value: number): value is ClientErrorCode {
    return (CLIENT_ERROR_CODES as readonly number[]).includes(value);
  }
  /**
   * Checks whether a numeric value is a {@link ServerErrorCode}.
   * @param value - The numeric value to check.
   * @returns `true` if `value` is a {@link ServerErrorCode}; otherwise `false`.
   * @since 2.1.0
   * @author Ian Wenneckers
   */
  export function isServerError (value: number): value is ServerErrorCode {
    return (SERVER_ERROR_CODES as readonly number[]).includes(value);
  }
}
