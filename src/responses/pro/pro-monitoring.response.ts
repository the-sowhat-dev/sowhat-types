import { MonthlyMetricEntry } from "../common/monthly-metric-entry";

export interface ProMonitoringResponse {
  acceptedOffersPerMonth: MonthlyMetricEntry[]; // 12 entries, oldest → newest
  offersSentPerMonth: MonthlyMetricEntry[]; // 12 entries, oldest → newest
  currentMonthlyQuota: number;
}
