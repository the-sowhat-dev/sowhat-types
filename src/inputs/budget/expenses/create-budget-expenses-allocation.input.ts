export interface CreateBudgetExpensesAllocationInput {
  name: string;
  icon: string;
  color: string;
  currency: string;
  theoricalValuePerMonth: number;
  bankAccountId: string | null;
}
