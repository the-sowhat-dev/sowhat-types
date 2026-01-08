import { ProjectNeedEnum } from "../../enums/project-need.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";

export interface GetLeadsQueryInput {
  minInitialAmount?: number;
  maxInitialAmount?: number;

  needs?: ProjectNeedEnum[];
  financialProducts?: FinancialProductEnum[];

  onlyWithoutProduct?: boolean;

  cursor?: string;
  limit?: number;
}
