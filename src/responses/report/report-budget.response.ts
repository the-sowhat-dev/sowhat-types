import { ReportValueResponse } from "./report-value.response";

export interface ReportBudgetResponse {
  incomes: ReportValueResponse;
  internalTransferIncomes: number;
  expenses: ReportValueResponse;
  internalTransferExpenses: number;
  savings: ReportValueResponse;
}
