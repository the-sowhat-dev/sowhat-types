import { ReportValueResponse } from "./report-value.response";

export interface ReportWealthResponse {
  balanceCheckingAccounts: ReportValueResponse;
  balanceSavingsAccounts: ReportValueResponse;
  balanceAssets: ReportValueResponse;
}
