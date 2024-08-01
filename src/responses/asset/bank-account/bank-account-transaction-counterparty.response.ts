import { BankAccountSchemeNameEnum } from '../../../enums/bank-account-scheme-name';

export interface BankAccountTransactionCounterpartyResponse {
  label: string | null;
  accountScheme: BankAccountSchemeNameEnum | null;
  type: string | null;
}
