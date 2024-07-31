import { BankAccountTransactionCounterpartyResponse } from "./bank-account-transaction-counterparty.response";

export interface BankAccountTransactionExtraDataResponse {
  datetime: Date | null;
  counterparty: BankAccountTransactionCounterpartyResponse | null;
  country: string | null;
}
