export interface BankAccountOriginalTransactionResponse {
  value: number;
  currency: string;
  commission: number;
  commissionCurrency: string | null;
}
