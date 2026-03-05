export interface ProMonthlyQuotaResponse {
  limit: number;
  used: number;
  remaining: number;
  month: number;
  year: number;
  resetAt: Date;
}
