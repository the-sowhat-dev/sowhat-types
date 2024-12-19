import { AvailableCurrencyEnum } from "../../enums/available-currency.enum";

export interface UpdateUserInput {
  currency?: AvailableCurrencyEnum;
  consentToBudget?: boolean;
  newTransferIntoDefault?: boolean;
}
