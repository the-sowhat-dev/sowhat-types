import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";
import { MobilityTypeEnum } from "../../../enums/mobility-type.enum";

export interface MobilityResponse {
  id: string;
  name: string;
  type: MobilityTypeEnum;
  value: number;
  currency: AvailableCurrencyEnum;
  position: number;
  gotLoan: boolean;
  loanRepaymentCompleted: boolean;
  iOwnShare: number; // Between 0 and 100
  updatedAt: Date;
  createdAt: Date;
}
