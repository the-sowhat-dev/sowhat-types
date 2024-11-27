import { BankAccountResponse } from "../../asset/bank-account/bank-account.response";
import { BankAccountTransactionResponse } from "../../asset/bank-account/bank-account-transaction.response";

export interface BudgetIncomesAllocationResponse {
  id: string;
  name: string;
  icon: string;
  color: string;
  budget: string; // like "11-2024"
  theoricalValuePerMonth: number;
  isDefault: boolean;
  value: number;
  currency: string;
  position: number;
  transactions: BankAccountTransactionResponse[];
  bankAccount: BankAccountResponse | null;
  updatedAt: Date | null;
  createdAt: Date;
}
