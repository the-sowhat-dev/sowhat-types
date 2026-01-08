import { AvailableCurrencyEnum } from "../../enums/available-currency.enum";

export interface UserFinancialSummaryResponse {
  currency: AvailableCurrencyEnum;
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
