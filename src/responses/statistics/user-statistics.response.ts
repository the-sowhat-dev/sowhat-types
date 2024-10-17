import { GlobalWealthStatisticsResponse } from "./global-wealth-statistics.response";

export interface UserStatisticsResponse {
  userId: string;
  globalWealth: GlobalWealthStatisticsResponse;
}
