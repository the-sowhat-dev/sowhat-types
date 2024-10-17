import { BudgetExpensesAllocationResponse } from './budget-expenses-allocation.response';

export interface BudgetExpensesAllocationsResponse {
  // e.g. "12-2024"
  id: string;

  allocations: BudgetExpensesAllocationResponse[];
}
