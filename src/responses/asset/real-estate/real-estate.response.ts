import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";
import { RealEstateTypeEnum } from "../../../enums/real-estate-type.enum";

export interface RealEstateResponse {
  id: string;
  name: string;
  type: RealEstateTypeEnum;
  value: number;
  currency: AvailableCurrencyEnum;
  position: number;
  gotLoan: boolean;
  loanRepaymentCompleted: boolean;
  iOwnShare: number;
  updatedAt: Date;
  createdAt: Date;
}
