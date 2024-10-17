import { BudgetIncomesAllocationResponse } from './budget-incomes-allocation.response';

export interface BudgetIncomesAllocationsResponse {
  // e.g. "12-2024"
  id: string;

  allocations: BudgetIncomesAllocationResponse[];
}
