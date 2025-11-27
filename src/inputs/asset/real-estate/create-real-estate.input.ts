import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";
import { RealEstateTypeEnum } from "../../../enums/real-estate-type.enum";

export interface CreateRealEstateInput {
  name: string;
  type: RealEstateTypeEnum;
  value: number;
  currency: AvailableCurrencyEnum;
  gotLoan: boolean;
  loanRepaymentCompleted: boolean;
  iOwnShare: number;
}
