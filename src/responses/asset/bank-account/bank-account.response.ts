import { BankAccountTypeEnum } from '../../../enums/bank-account-type.enum';

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
