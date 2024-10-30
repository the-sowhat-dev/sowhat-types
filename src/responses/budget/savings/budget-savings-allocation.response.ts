import { SavingsMonthlyOperationResponse } from "./savings-monthly-operation.response";

export interface BudgetSavingsAllocationResponse {
  id: string;
  name: string;
  icon: string;
  color: string;
  theoricalValuePerMonth: number; // À épargner ce mois-ci (en théorie)
  balance: number; // Total épargné pour cette enveloppe depuis le début
  currency: string;
  currentMonthlyOperation: SavingsMonthlyOperationResponse | null;
  monthlyOperations: SavingsMonthlyOperationResponse[];
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}
