export interface BatchUpdateBudgetSavingsAllocationInput {
  id: string | null;
  theoricalValuePerMonth?: number;
  balance?: number;
  currency: string;
  position?: number;
  name?: string;
  icon?: string;
  color?: string;
}
