export interface UpdateBudgetIncomesAllocationInput {
  id: string;
  name?: string;
  icon?: string;
  color?: string;
  currency?: string;
  position?: number;
  theoricalValuePerMonth?: number;
  bankAccountId?: string | null;
}
