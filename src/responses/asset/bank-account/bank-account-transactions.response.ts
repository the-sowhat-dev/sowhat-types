import { PaginationResponse } from "../../common/pagination.response";
import { BankAccountTransactionResponse } from "./bank-account-transaction.response";

export interface BankAccountTransactionsResponse {
  transactions: BankAccountTransactionResponse[];
  pagination: PaginationResponse;
}
