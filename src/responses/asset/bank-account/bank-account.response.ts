import { BankAccountTypeEnum } from "../../../enums/bank-account-type.enum";

export interface BankAccountResponse {
  id: string;
  powensId: number;
  balance: number | null;
  comingBalance: number | null;
  name: string;
  currency: string | null;
  type: BankAccountTypeEnum;
  gotLoan: boolean;
  iban: string | null;
  position: number;
}
