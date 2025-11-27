import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";
import { BankAccountTypeEnum } from "../../../enums/bank-account-type.enum";
import { BankAccountTransactionResponse } from "./bank-account-transaction.response";

export interface BankAccountResponse {
  id: string;
  powensId: number;
  powensConnectionId: number;
  image: string | null;
  name: string;
  balance: number | null;
  comingBalance: number | null;
  currency: AvailableCurrencyEnum | null;
  alertThreshold: number;
  type: BankAccountTypeEnum;
  iban: string | null;
  deletedByBank: Date | null;
  transactions: BankAccountTransactionResponse[];
}
