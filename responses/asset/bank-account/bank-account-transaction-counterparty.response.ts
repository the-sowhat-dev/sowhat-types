import { BankAccountSchemeNameEnum } from "types";

export interface BankAccountTransactionCounterpartyResponse {
  label: string | null;
  accountScheme: BankAccountSchemeNameEnum | null;
  type: string | null;
}
