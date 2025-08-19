import { BudgetSavingsAllocationResponse } from "./budget-savings-allocation.response";

export interface BudgetSavingsAllocationUpdatedResponse {
  updated: boolean;
  errorMessage: string | null;
  allocation: BudgetSavingsAllocationResponse;
}
