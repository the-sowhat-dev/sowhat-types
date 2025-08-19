import { BankAccountTransactionResponse } from "../bank-account-transaction.response";

export interface TransactionAllocatedResponse {
  transaction: BankAccountTransactionResponse;
  allocated: boolean;
  errorMessage: string | null;
}
