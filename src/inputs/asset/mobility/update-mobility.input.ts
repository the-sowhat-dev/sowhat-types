import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";
import { MobilityTypeEnum } from "../../../enums/mobility-type.enum";

export interface UpdateMobilityInput {
  id: string;
  name?: string;
  type?: MobilityTypeEnum;
  value?: number;
  currency?: AvailableCurrencyEnum;
  iOwnShare?: number; // Between 0 and 100
  gotLoan?: boolean;
  loanRepaymentCompleted?: boolean;
}
