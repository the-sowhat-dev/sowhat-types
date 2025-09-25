import { ProjectKeyEnum } from "../../enums/project-key.enum";

export interface FinancialSummariesFiltersInput {
  offset: number;
  limit: number;
  projectKeys?: ProjectKeyEnum[];
  minTotalSavings?: number;
  maxTotalSavings?: number;
  minTotalCheckings?: number;
  maxTotalCheckings?: number;
  minTotalLoans?: number;
  maxTotalLoans?: number;
  minTotalRealEstates?: number;
  maxTotalRealEstates?: number;
  minTotalMobilities?: number;
  maxTotalMobilities?: number;
}
