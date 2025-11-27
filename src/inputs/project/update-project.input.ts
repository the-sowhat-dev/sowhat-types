import { ProjectNeedEnum } from "../../enums/project-need.enum";
import { ProjectStatusEnum } from "../../enums/project-status.enum";
import { ProjectOptionEnum } from "../../enums/project-option.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";

export interface UpdateProjectInput {
  id: string;
  status?: ProjectStatusEnum;
  option?: ProjectOptionEnum;
  initialAmount?: number;
  monthlyAmount?: number;
  need?: ProjectNeedEnum;
  financialProduct?: FinancialProductEnum | null;
  note?: string | null;
}
