import { ReportValueResponse } from "./report-value.response";

export interface ReportBudgetResponse {
  incomes: ReportValueResponse;
  expenses: ReportValueResponse;
  savings: ReportValueResponse;
}
