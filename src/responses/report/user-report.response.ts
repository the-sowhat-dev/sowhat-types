import { ReportBudgetResponse } from "./report-budget.response";
import { ReportWealthResponse } from "./report-wealth.response";

export interface UserReportResponse {
  userId: string;
  reportId: string;
  budget: ReportBudgetResponse | null;
  wealth: ReportWealthResponse | null;
  createdAt: Date | null;
}
