import { BudgetTypeEnum } from "../../../enums/budget-type.enum";
import { BankAccountTransactionTypeEnum } from "../../../enums/bank-account-transaction-type.enum";
import { BankAccountOriginalTransactionResponse } from "./bank-account-orignal-transaction.response";
import { BudgetIncomesAllocationResponse } from "../../budget/incomes/budget-incomes-allocation.response";
import { BudgetExpensesAllocationResponse } from "../../budget/expenses/budget-expenses-allocation.response";

export interface BankAccountTransactionResponse {
  id: string;
  accountId: string;
  applicationDate: Date;
  date: Date;
  value: number | null; // try to fetch the value from the value, formatted_value
  currency: string | null; // It is the Currency of the account (but get it from the formated_value)
  name: string;
  coming: boolean;
  active: boolean;
  cardNumber: string | null;
  note: string | null;
  lastUpdate: Date | null;
  deleted: Date | null; // If set, transaction has been deleted from the bank
  type: BankAccountTransactionTypeEnum;
  internalTransfer: boolean;
  originalTransaction: BankAccountOriginalTransactionResponse | null; // If the transaction has an original_currency
  country: string | null;
  category: BudgetTypeEnum;
  allocation: BudgetIncomesAllocationResponse | BudgetExpensesAllocationResponse | null;
  allocated: Date | null;
}
