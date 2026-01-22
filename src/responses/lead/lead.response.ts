import { ProjectNeedEnum } from "../../enums/project-need.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";
import { ProfessionStatusEnum } from "../../enums/profession-status.enum";

export interface LeadResponse {
  userId: string;
  initialAmount: number;
  need: ProjectNeedEnum;
  financialProduct: FinancialProductEnum | null;
  financialProductsOwned: FinancialProductEnum[] | null;
  postalCode: string | null;
  totalOffersReceived: number;
  professionStatus: ProfessionStatusEnum | null;
  birthYear: number | null;
  likedAt: Date | null;
  hasBeenOfferedAt: Date | null;
  updatedAt: Date; // Last updated at of the UserEntity
  createdAt: Date; // Created at of the UserEntity
}
