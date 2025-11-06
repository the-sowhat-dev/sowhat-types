import { FinancialProductOwnedEnum } from "../../enums/financial-product-owned.enum";

export interface UserPersonalSummaryResponse {
  id: string;
  firstName: string | null;
  lastName: string | null;
  commercialEmail: string | null;
  birthYear: number | null;
  childrenNumber: number | null;
  childrenBirthYears: number[] | null;
  maritalStatus: string | null;
  profession: string | null;
  professionDetails: string | null;
  salaryRange: string | null;
  postalCode: string | null;
  loanMonthlyPayment: number | null;
  financialProductsOwned: FinancialProductOwnedEnum[] | null;
}
