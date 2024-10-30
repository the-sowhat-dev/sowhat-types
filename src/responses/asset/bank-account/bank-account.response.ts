import { BankAccountTypeEnum } from "../../../enums/bank-account-type.enum";

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
}
