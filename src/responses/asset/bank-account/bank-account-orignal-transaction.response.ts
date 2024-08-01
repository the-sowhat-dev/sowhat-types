export interface BankAccountOriginalTransactionResponse {
  value: number;
  currency: string;
  commission: number | null;
  commissionCurrency: string | null;
}
