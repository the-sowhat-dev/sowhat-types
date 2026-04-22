import { ProjectNeedEnum } from "../../enums/project-need.enum";
import { ProjectOptionEnum } from "../../enums/project-option.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";

export interface OnboardingProjectInput {
  option: ProjectOptionEnum;
  need: ProjectNeedEnum;
  financialProduct: FinancialProductEnum | null;
  initialValue: number;
  monthlyValue: number;
}
