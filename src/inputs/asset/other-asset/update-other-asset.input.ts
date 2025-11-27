import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";

export interface UpdateOtherAssetInput {
  id?: string; // If not provided, a new asset will be created
  name: string;
  value: number;
  currency: AvailableCurrencyEnum;
  gotLoan: boolean;
  loanRepaymentCompleted: boolean;
  iOwnShare: number; // Between 0 and 100
}
