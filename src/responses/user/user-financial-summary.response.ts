import { ProjectNeedEnum } from "../../enums/project-need.enum";

export interface UserFinancialSummaryResponse {
  currency: string;
  projectNeeds: ProjectNeedEnum[];
  totalRealEstatesValue: number | null;
  totalMobilitiesValue: number | null;
  totalOtherAssetsValue: number | null;
  totalCryptocurrenciesValue: number | null;
  totalSavingsAccounts: number | null;
  totalSavingsBalance: number | null;
  totalCheckingAccounts: number | null;
  totalCheckingBalance: number | null;
  totalLoans: number | null;
  totalLoansBalance: number | null;
}
