import { BudgetSavingsAllocationResponse } from "./budget-savings-allocation.response";

export interface BudgetSavingsResponse {
  /**
   * e.g. "12-2024"
   */
  id: string;

  currency: string;

  /**
   * equal total user's savings, i.e. `other assets` + `sum of savings bank accounts`
   */
  totalBalance: number;

  /**
   * It is the value diff between the actual totalBalance and the value of the last report
   * If `null`, there's no last report.
   */
  vsLastMonth: number | null;

  /**
   * Equal `other assets` total balance
   */
  lockedInSavingsBalance: number;

  allocations: BudgetSavingsAllocationResponse[];
}
