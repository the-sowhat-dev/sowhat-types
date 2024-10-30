export interface UpdateBudgetIncomesAllocationInput {
  id: string;
  name?: string;
  icon?: string;
  color?: string;
  currency?: string;
  theoricalValuePerMonth?: number;
  bankAccountId?: string | null;
}