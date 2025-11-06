import { PaginationResponse } from "../common/pagination.response";
import { ReportResponse } from "./report.response";

export interface ReportsResponse {
  reports: ReportResponse[];
  pagination: PaginationResponse;
}
