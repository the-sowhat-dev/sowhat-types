export interface BudgetOperationResponse {
  id: string;
  applicationDate: Date;
  value: number;
  currency: string;
  transactionId: string | null;
  allocationId: string;
}
