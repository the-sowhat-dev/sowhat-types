export interface CreateBudgetIncomesAllocationInput {
  name: string;
  theoricalValuePerMonth: number;
  currency: string;
  color: string;
  icon: string;
  note: string | null;
}
