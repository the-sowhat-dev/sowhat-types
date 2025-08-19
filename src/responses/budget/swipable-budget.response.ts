import { BudgetExpensesAllocationResponse } from "./expenses/budget-expenses-allocation.response";
import { BudgetIncomesAllocationResponse } from "./incomes/budget-incomes-allocation.response";

export interface SwipableBudgetResponse {
  id: string;
  budgetId: string;
  expensesAllocations: BudgetExpensesAllocationResponse[];
  incomesAllocations: BudgetIncomesAllocationResponse[];
}
