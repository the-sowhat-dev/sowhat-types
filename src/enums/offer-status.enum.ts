export enum OfferStatusEnum {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  /**
   * @deprecated stop using ARCHIVED in the status (since Feb. 2026)
   */
  ARCHIVED_BY_PRO = "ARCHIVED_BY_PRO",
  /**
   * @deprecated stop using ACCEPTED_THEN_ARCHIVED_BY_USER in the status (since Feb. 2026)
   */
  ACCEPTED_THEN_ARCHIVED_BY_USER = "ACCEPTED_THEN_ARCHIVED_BY_USER",
  /**
   * @deprecated stop using REJECTED_THEN_ARCHIVED_BY_USER in the status (since Feb. 2026)
   */
  REJECTED_THEN_ARCHIVED_BY_USER = "REJECTED_THEN_ARCHIVED_BY_USER",
}
