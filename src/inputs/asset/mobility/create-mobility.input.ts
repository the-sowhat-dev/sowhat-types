import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";
import { MobilityTypeEnum } from "../../../enums/mobility-type.enum";

export interface CreateMobilityInput {
  name: string;
  type: MobilityTypeEnum;
  currency: AvailableCurrencyEnum;
  value: number;
  gotLoan: boolean;
  loanRepaymentCompleted: boolean;
  iOwnShare: number;
}
