import { BankAccountResponse } from "../../asset/bank-account/bank-account.response";
import { BankAccountTransactionResponse } from "../../asset/bank-account/bank-account-transaction.response";

export interface BudgetIncomesAllocationResponse {
  id: string;
  name: string;
  icon: string;
  color: string;
  budget: string;
  theoricalValuePerMonth: number;
  value: number;
  currency: string;
  transactions: BankAccountTransactionResponse[];
  bankAccount: BankAccountResponse | null;
  updatedAt: Date | null;
  createdAt: Date;
}
