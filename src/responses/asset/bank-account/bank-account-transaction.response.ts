import { BudgetTypeEnum } from "../../../enums/budget-type.enum";
import { BankAccountTransactionTypeEnum } from "../../../enums/bank-account-transaction-type.enum";
import { BankAccountOriginalTransactionResponse } from "./bank-account-orignal-transaction.response";
import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";

export interface BankAccountTransactionResponse {
  id: string;
  accountId: string;
  applicationDate: Date;
  date: Date;
  value: number | null; // try to fetch the value from the value, formatted_value
  currency: AvailableCurrencyEnum | null; // It is the Currency of the account (but get it from the formated_value)
  name: string;
  originalName: string;
  coming: boolean;
  active: boolean;
  cardNumber: string | null;
  lastUpdate: Date | null;
  deleted: Date | null; // If set, transaction has been deleted from the bank
  type: BankAccountTransactionTypeEnum;
  originalTransaction: BankAccountOriginalTransactionResponse | null; // If the transaction has an original_currency
  country: string | null;
  category: BudgetTypeEnum;
}
