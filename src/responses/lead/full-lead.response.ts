import { ProfessionEnum } from "../../enums/profession.enum";
import { ProjectNeedEnum } from "../../enums/project-need.enum";
import { LeadAiSummaryResponse } from "./lead-ai-summary.response";
import { MaritalStatusEnum } from "../../enums/marital-status.enum";
import { ProfessionStatusEnum } from "../../enums/profession-status.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";
import { AvailableCurrencyEnum } from "../../enums/available-currency.enum";
import { PersonalSalaryRangeEnum } from "../../enums/personal-salary-range.enum";
import { HouseholdSalaryRangeEnum } from "../../enums/household-salary-range.enum";
import { PersonalNetWorthRangeEnum } from "../../enums/personal-net-worth-range.enum";
import { ProCommercialOfferResponse } from "../offer/pro-commercial-offer.response";

export interface FullLeadResponse {
  userId: string;
  updatedAt: Date; // user.updatedAt

  // identity (available only is offer is accepted)
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  phoneNumberVerifiedAt: Date | null;

  // project
  initialAmount: number | null;
  monthlyAmount: number | null;
  need: ProjectNeedEnum | null;
  financialProduct: FinancialProductEnum | null;
  note: string | null;

  // personal
  birthYear: number | null;
  childrenNumber: number | null;
  childrenBirthYears: number[] | null;
  maritalStatus: MaritalStatusEnum | null;
  profession: ProfessionEnum | null;
  professionStatus: ProfessionStatusEnum | null;
  personalSalaryRange: PersonalSalaryRangeEnum | null;
  householdSalaryRange: HouseholdSalaryRangeEnum | null;
  personalNetWorthRange: PersonalNetWorthRangeEnum | null;
  postalCode: string | null;
  loanMonthlyPayment: number | null;
  financialProductsOwned: FinancialProductEnum[] | null;
  isMainResidenceOwner: boolean | null;
  lastPersonalSummaryUpdatedAt: Date;

  // financial
  currency: AvailableCurrencyEnum;
  totalRealEstatesValue: number | null;
  totalMobilitiesValue: number | null;
  totalOtherAssetsValue: number | null;
  totalCryptocurrenciesValue: number | null;
  totalSavingsBankAccounts: number | null;
  totalSavingsBankAccountsBalance: number | null;
  totalCheckingBankAccounts: number | null;
  totalCheckingBankAccountsBalance: number | null;
  totalLoansBankAccounts: number | null;
  totalLoansBankAccountsBalance: number | null;
  lastFinancialSummaryUpdatedAt: Date;

  // ai summary
  aiSummary: LeadAiSummaryResponse | null;

  // offer made by the pro that calling it
  offer: ProCommercialOfferResponse | null;
  totalOffersReceived: number;
  totalOffersAccepted: number;

  // liked at
  likedAt: Date | null;
}
