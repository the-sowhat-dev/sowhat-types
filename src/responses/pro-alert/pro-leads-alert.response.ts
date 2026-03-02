import { ProjectNeedEnum } from '../../enums/project-need.enum';
import { FinancialProductEnum } from '../../enums/financial-product.enum';
import { PersonalSalaryRangeEnum } from '../../enums/personal-salary-range.enum';
import { PersonalNetWorthRangeEnum } from '../../enums/personal-net-worth-range.enum';

export interface ProLeadsAlertResponse {
  id: string;
  name: string;
  isActive: boolean;
  minInitialAmount: number;
  maxInitialAmount: number;
  needs: ProjectNeedEnum[];
  financialProducts: FinancialProductEnum[];
  postalCodes: string[];
  personalNetWorthRanges: PersonalNetWorthRangeEnum[];
  personalSalaryRanges: PersonalSalaryRangeEnum[];
}