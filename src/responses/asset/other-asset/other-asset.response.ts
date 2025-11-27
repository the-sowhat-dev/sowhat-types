import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";

export interface OtherAssetResponse {
  id: string;
  name: string;
  value: number;
  currency: AvailableCurrencyEnum;
  position: number;
  gotLoan: boolean;
  loanRepaymentCompleted: boolean;
  iOwnShare: number; // Between 0 and 100
  updatedAt: Date;
  createdAt: Date;
}
