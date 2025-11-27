import { ProfessionEnum } from "../../enums/profession.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";
import { ProfessionStatusEnum } from "../../enums/profession-status.enum";

export interface UpdateUserPersonalSummaryInput {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  commercialEmail?: string | null;
  birthYear?: number | null;
  childrenNumber?: number | null;
  childrenBirthYears?: number[] | null;
  maritalStatus?: string | null;
  salaryRange?: string | null; // e.g. "less_20k", "between_20k_and_30k", "more_than_90k"
  profession?: ProfessionEnum | null;
  professionStatus?: ProfessionStatusEnum | null;
  postalCode?: string | null; // e.g. "06200", "32000", "LIVES_OUTSIDE_FRANCE", null
  loanMonthlyPayment?: number | null;
  financialProductsOwned?: FinancialProductEnum[] | null;
  isMainResidenceOwner?: boolean | null;
  personalNetWorthRange?: string | null;
  grossAnnualHouseholdIncomeRange?: string | null;
}
