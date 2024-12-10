import { BankAccountResponse } from "../asset/bank-account/bank-account.response";
import { PowensConnectionStateEnum } from "../../enums/powens-connection-state.enum";

export interface PowensConnectionResponse {
  id: string;
  state: PowensConnectionStateEnum | null;
  errorMessage: string | null;
  accounts: BankAccountResponse[];
}
