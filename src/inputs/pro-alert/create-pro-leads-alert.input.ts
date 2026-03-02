import { ProjectNeedEnum } from '../../enums/project-need.enum';
import { FinancialProductEnum } from '../../enums/financial-product.enum';
import { PersonalNetWorthRangeEnum, PersonalSalaryRangeEnum } from '../../enums';

export interface CreateProLeadsAlertInput {
  name: string;
  minInitialAmount: number;
  maxInitialAmount: number;
  needs: ProjectNeedEnum[];
  financialProducts: FinancialProductEnum[];
  postalCodes: string[];
  personalNetWorthRanges: PersonalNetWorthRangeEnum[];
  personalSalaryRanges: PersonalSalaryRangeEnum[];
}