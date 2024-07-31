export interface BankAccountBalancesResponse {
  /**
   * total balance for checking type accounts
   */
  checking: number | null;

  /**
   * total incoming balance for checking type accounts
   */
  incomingChecking: number | null;

  /**
   * total balance for savings type accounts
   */
  savings: number | null;

  /**
   * total incoming balance for savings type accounts
   */
  incomingSavings: number | null;

  /**
   * e.g. '€'
   */
  currency: string;
}
