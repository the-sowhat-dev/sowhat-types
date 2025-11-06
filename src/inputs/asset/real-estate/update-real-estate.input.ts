import { RealEstateTypeEnum } from "../../../enums/real-estate-type.enum";

export interface UpdateRealEstateInput {
  id: string;
  name?: string;
  type?: RealEstateTypeEnum;
  value?: number;
  gotLoan?: boolean;
  loanRepaymentCompleted?: boolean;
  iOwnShare?: number;
}
