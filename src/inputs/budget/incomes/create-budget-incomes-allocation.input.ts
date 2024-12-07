export interface CreateBudgetIncomesAllocationInput {
  name: string;
  icon: string;
  color: string;
  currency: string;
  theoricalValuePerMonth: number;
  bankAccountId: string | null;
}
