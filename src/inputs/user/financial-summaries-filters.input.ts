import { ProjectNeedEnum } from "../../enums/project-need.enum";

export interface FinancialSummariesFiltersInput {
  offset: number;
  limit: number;
  projectNeeds?: ProjectNeedEnum[];
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
