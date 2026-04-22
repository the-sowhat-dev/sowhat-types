import { ProfessionEnum } from "../../enums/profession.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";
import { ProfessionStatusEnum } from "../../enums/profession-status.enum";

export interface OnboardingFinancialInformationInput {
  profession: ProfessionEnum;
  professionStatus: ProfessionStatusEnum;
  personalSalaryRange: string;
  loanMonthlyPayment: number;
  financialProductsOwned: FinancialProductEnum[];
  personalNetWorthRange: string;
  grossAnnualHouseholdIncomeRange: string;
}
