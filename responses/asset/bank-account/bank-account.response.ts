import { BankAccountTypeEnum } from "types";

export interface BankAccountResponse {
  id: number;
  balance: number | null;
  name: string;
  originalName: string;
  currency: string;
  type: BankAccountTypeEnum;
  gotLoan: boolean;
  iban: string | null;
}
