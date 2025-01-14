export interface BatchUpdateBudgetSavingsAllocationInput {
  id: string;
  theoricalValuePerMonth?: number;
  balance?: number;
  currency: string;
  position?: number;
}
