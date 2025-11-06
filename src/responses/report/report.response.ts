import { ReportBudgetResponse } from "./report-budget.response";
import { ReportWealthResponse } from "./report-wealth.response";

export interface ReportResponse {
  monthId: string; // MM-YYYY
  budget: ReportBudgetResponse | null;
  wealth: ReportWealthResponse | null;
  createdAt: Date | null;
}
