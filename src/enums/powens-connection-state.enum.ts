export enum PowensConnectionStateEnum {
  /**
   * An SCA process must be performed to resume the synchronization process.
   * Synchronization is suspended because we need user consent or SCA to proceed. You should present this error prominently.
   */
  SCA_REQUIRED = "SCARequired",
  /**
   * Synchronization is suspended because we need user consent or SCA to proceed. You should present this error prominently.
   * A web-based authentication process is required using the /webauth endpoint.
   * endpoint /webauth: https://docs.powens.com/api-reference/user-connections/connections#webauthurl-object
   */
  WEBAUTH_REQUIRED = "webauthRequired",
  /**
   * Additional information is needed to resume synchronization, such as an OTP. Connections in this state have a fields property.
   */
  ADDITIONAL_INFORMATION_NEEDED = "additionalInformationNeeded",
  /**
   * User validation is required on a third-party app or device (ex: digital key).
   */
  DECOUPLED = "decoupled",
  /**
   * User validation is being processed on our side. This state is temporary.
   */
  VALIDATING = "validating",
  /**
   * An action is needed on the website by the user, synchronization is blocked.
   * Synchronization failed because the user needs to perform an action directly on the bank website or app (usually, accept new CGUs or similar one-time actions).
   * You should present this error prominently
   */
  ACTION_NEEDED = "actionNeeded",
  /**
   * The password has expired and needs to be changed by the user before the synchronization can be retried.
   * Synchronization failed because the user needs to renew its password on the bank website.
   * You should present this error prominently and prompt the user for his new password afterwards.
   */
  PASSWORD_EXPIRED = "passwordExpired",
  /**
   * The authentication on website has failed and new credentials must be obtained from the user. Connections in this state have a fields property
   * Synchronization failed because the credentials we own are invalid or obsolete.
   * You should present this error prominently
   */
  WRONGPASS = "wrongpass",
  /**
   * The target website or API is temporarily blocking synchronizations due to rate limiting.
   * Synchronization failed because the target website or API is temporarily blocking synchronizations due to rate limiting.
   * We will retry after a delay and connections in this state will be resumed automatically.
   */
  RATE_LIMITING = "rateLimiting",
  /**
   * The connector website or API is unavailable.
   * Synchronization failed because the targeted API or website is temporarily unavailable.
   * We will periodically retry to sync.
   */
  WEBSITE_UNAVAILABLE = "websiteUnavailable",
  /**
   * An internal error has occurred during the synchronization.
   * Synchronization failed because of an error from our side. We monitor errors and do our best to fix them quickly.
   * Connections in this state will be resumed automatically after the error is fixed.
   */
  BUG = "bug",
  /**
   * The source is not supported on the connector
   */
  NOT_SUPPORTED = "notSupported",
}
