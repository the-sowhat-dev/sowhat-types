import { TimePaginationInput } from "../../../common/time-pagination.input";

export interface FetchBankAccountTransactionsInput {
  accountId: string;
  pagination: TimePaginationInput;
}
