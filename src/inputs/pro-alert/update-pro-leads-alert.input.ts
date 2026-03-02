import { ProjectNeedEnum } from '../../enums/project-need.enum';
import { FinancialProductEnum } from '../../enums/financial-product.enum';
import { PersonalNetWorthRangeEnum, PersonalSalaryRangeEnum } from '../../enums';

export interface UpdateProLeadsAlertInput {
  id: string;
  name?: string;
  isActive?: boolean;
  minInitialAmount?: number;
  maxInitialAmount?: number;
  needs?: ProjectNeedEnum[];
  financialProducts?: FinancialProductEnum[];
  postalCodes?: string[];
  personalNetWorthRanges?: PersonalNetWorthRangeEnum[];
  personalSalaryRanges?: PersonalSalaryRangeEnum[];
}