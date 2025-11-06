import { FinancialProductOwnedEnum } from "../../enums/financial-product-owned.enum";

export interface UpdateUserPersonalSummaryInput {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  commercialEmail?: string | null;
  birthYear?: number | null;
  childrenNumber?: number | null;
  childrenBirthYears?: number[] | null;
  maritalStatus?: string | null;
  salaryRange?: string | null; // e.g. "less_20k", "20k_30k", "more_90k"
  profession?: string | null;
  professionDetails?: string | null;
  postalCode?: string | null; // e.g. "06200", "32000", "LIVES_OUTSIDE_FRANCE", null
  loanMonthlyPayment?: number | null;
  financialProductsOwned?: FinancialProductOwnedEnum[] | null;
}
