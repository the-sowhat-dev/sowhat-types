import { ProjectNeedEnum } from "../../enums/project-need.enum";
import { ProjectOptionEnum } from "../../enums/project-option.enum";
import { ProjectStatusEnum } from "../../enums/project-status.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";

export interface ProjectResponse {
  id: string;
  status: ProjectStatusEnum;
  option: ProjectOptionEnum;
  initialAmount: number;
  monthlyAmount: number;
  need: ProjectNeedEnum;
  financialProduct: FinancialProductEnum | null;
  note: string | null;
  updatedAt: Date;
  createdAt: Date;
}
