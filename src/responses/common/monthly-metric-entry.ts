export interface MonthlyMetricEntry {
  year: number;
  month: number; // 1–12
  count: number | null; // null = pro didn't exist yet, 0 = existed but zero matches
}
