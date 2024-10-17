import { BudgetOperationResponse } from "../budget-operation.response";

export interface BudgetSavingsAllocationResponse {
  id: string;
  name: string;
  budget: string;
  icon: string;
  color: string;
  theoricalValuePerMonth: number; // À épargner ce mois-ci (en théorie)
  value: number; // Épargne ce mois-ci
  balance: number; // Total épargné pour cette enveloppe depuis le début
  currency: string;
  note: string | null;
  isDefault: boolean;
  operations: BudgetOperationResponse[];
  createdAt: Date;
  updatedAt: Date | null;
}
