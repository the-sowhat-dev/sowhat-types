export interface BankAccountTransactionWordingResponse {
  original: string;
  stemmed: string;
  simplified: string;
  /**
   * The one that can be edited by the user and update in the transaction by Powens API
   */
  custom: string | null;
}
