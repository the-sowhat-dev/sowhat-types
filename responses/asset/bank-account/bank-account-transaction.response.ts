import { BankAccountTransactionTypeEnum } from "types";
import { BankAccountTransactionWordingResponse } from "./bank-account-transaction-wording.response";
import { BankAccountOriginalTransactionResponse } from "./bank-account-orignal-transaction.response";
import { BankAccountTransactionExtraDataResponse } from "./bank-account-transaction-extra-data.response";

export interface BankAccountTransactionResponse {
  id: string;
  accountId: string;
  date: Date;
  value: number | null; // try to fetch the value from the value, formatted_value
  currency: string | null; // It is the Currency of the account (but get it from the formated_value)
  wording: BankAccountTransactionWordingResponse;
  coming: boolean;
  active: boolean;
  comment: string | null;
  lastUpdate: Date | null;
  deleted: Date | null; // If set, transaction has been deleted from the bank
  cardNumber: string | null;
  type: BankAccountTransactionTypeEnum;
  new: boolean;
  originalTransaction: BankAccountOriginalTransactionResponse | null; // If the transaction has an original_currency
  extraData: BankAccountTransactionExtraDataResponse;
}
