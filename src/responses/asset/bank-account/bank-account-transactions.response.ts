import { TimePaginationResponse } from "../../common/time-pagination.response";
import { BankAccountTransactionResponse } from "./bank-account-transaction.response";

export interface BankAccountTransactionsResponse {
  transactions: BankAccountTransactionResponse[];
  pagination: TimePaginationResponse;
}
