import { BankAccountTypeEnum } from "../../../enums/bank-account-type.enum";
import { BankAccountTransactionResponse } from "./bank-account-transaction.response";

export interface BankAccountResponse {
  id: string;
  powensId: number;
  name: string;
  balance: number | null;
  comingBalance: number | null;
  currency: string | null;
  alertThreshold: number;
  type: BankAccountTypeEnum;
  gotLoan: boolean;
  iban: string | null;
  position: number;
  deletedByBank: Date | null;
  transactions: BankAccountTransactionResponse[];
}
