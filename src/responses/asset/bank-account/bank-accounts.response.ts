import { BankAccountResponse } from './bank-account.response';
import { BankAccountBalancesResponse } from './bank-account-balances.response';

export interface BankAccountsResponse {
  accounts: BankAccountResponse[];
  balances: BankAccountBalancesResponse | null;
}
