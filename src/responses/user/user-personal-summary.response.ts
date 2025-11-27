import { ProfessionEnum, ProfessionStatusEnum } from "../../enums";
import { FinancialProductEnum } from "../../enums/financial-product.enum";

export interface UserPersonalSummaryResponse {
  id: string;
  firstName: string | null;
  lastName: string | null;
  commercialEmail: string | null;
  birthYear: number | null;
  childrenNumber: number | null;
  childrenBirthYears: number[] | null;
  maritalStatus: string | null;
  profession: ProfessionEnum | null;
  professionStatus: ProfessionStatusEnum | null;
  salaryRange: string | null;
  postalCode: string | null;
  loanMonthlyPayment: number | null;
  financialProductsOwned: FinancialProductEnum[] | null;
  isMainResidenceOwner: boolean | null;
  personalNetWorthRange: string | null;
  grossAnnualHouseholdIncomeRange: string | null;
}
