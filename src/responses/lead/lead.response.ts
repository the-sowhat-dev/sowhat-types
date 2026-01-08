import { ProfessionEnum } from "../../enums/profession.enum";
import { ProjectNeedEnum } from "../../enums/project-need.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";

export interface LeadResponse {
  userId: string;
  initialAmount: number;
  need: ProjectNeedEnum;
  financialProduct: FinancialProductEnum | null;
  profession: ProfessionEnum | null;
  birthYear: number | null;
  updatedAt: Date; // Last updated at of the UserEntity
  createdAt: Date; // Created at of the UserEntity
}
