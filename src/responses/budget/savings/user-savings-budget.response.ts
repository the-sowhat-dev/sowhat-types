import { BudgetSavingsAllocationResponse } from "./budget-savings-allocation.response";

export interface UserSavingsBudgetResponse {
  /**
   * equal total user's savings, i.e. `sum of savings bank accounts of type SAVING`
   */
  availableSavingsBalance: number;

  /**
   * It is the value diff between the actual totalBalance and the value of the last report
   * If `null`, there's no last report.
   */
  // vsLastMonth: number | null;

  /**
   * Equal `other assets` total balance
   */
  lockedInSavingsBalance: number;

  currency: string;

  allocations: BudgetSavingsAllocationResponse[];
}
