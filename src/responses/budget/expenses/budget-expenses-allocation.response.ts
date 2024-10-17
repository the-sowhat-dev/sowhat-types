import { BankAccountTransactionResponse } from "../../asset/bank-account/bank-account-transaction.response";

export interface BudgetExpensesAllocationResponse {
  id: string;
  name: string;
  budget: string;
  icon: string;
  color: string;
  theoricalValuePerMonth: number;
  value: number;
  currency: string;
  note: string | null;
  transactions: BankAccountTransactionResponse[];
  updatedAt: Date | null;
  createdAt: Date;
}
