export interface CreateBudgetIncomesAllocationInput {
  name: string;
  icon: string;
  color: string;
  currency: string;
  theoricalValuePerMonth: number;
  bankAccountId: string | null;
  budgetId?: string | null; // Is optional (? and null) for legacy support on front-end (date: 05/08/2025)
  // Used to duplicate a parent income allocation
  fromParentId?: string | null; // Is optional (? and null) for legacy support on front-end (date: 13/08/2025)
}
