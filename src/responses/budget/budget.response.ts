import { BudgetExpensesAllocationResponse } from "./expenses/budget-expenses-allocation.response";
import { BudgetIncomesAllocationResponse } from "./incomes/budget-incomes-allocation.response";

export interface BudgetResponse {
  id: string;
  expenses: BudgetExpensesAllocationResponse[];
  incomes: BudgetIncomesAllocationResponse[];
  unallocatedExpensesTransactionsBalance: number;
  unallocatedIncomesTransactionsBalance: number;
  currency: string;
}
