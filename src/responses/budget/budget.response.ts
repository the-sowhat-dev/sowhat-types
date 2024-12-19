import { BudgetExpensesAllocationResponse } from "./expenses/budget-expenses-allocation.response";
import { BudgetIncomesAllocationResponse } from "./incomes/budget-incomes-allocation.response";

export interface BudgetResponse {
  id: string;
  expenses: BudgetExpensesAllocationResponse[];
  unallocatedExpensesTransactionsBalance: number;
  internalTransfersExpensesBalance: number;
  incomes: BudgetIncomesAllocationResponse[];
  unallocatedIncomesTransactionsBalance: number;
  internalTransfersIncomesBalance: number;
  currency: string;
}
