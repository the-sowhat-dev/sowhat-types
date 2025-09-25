export interface AnonymousUserResponse {
  id: string;
  clerkId: string;

  totalRealEstatesValue: number;
  totalMobilitiesValue: number;
  totalCryptocurrenciesValue: number;
  totalStockExchangesValue: number;
  totalOtherAssetsValue: number;

  totalCheckingBankAccounts: number; // Number of checking bank accounts
  totalCheckingBankAccountsBalance: number; // Total balance of checking bank accounts

  totalSavingsBankAccounts: number; // Number of savings bank accounts
  totalSavingsBankAccountsBalance: number; // Total balance of savings bank accounts

  totalLoans: number; // Number of loans
  totalLoansBalance: number; // Total balance of loans

  currency: string;
  createdAt: Date;
}
