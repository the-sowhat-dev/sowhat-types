import { BankAccountTypeEnum } from "../../../enums/bank-account-type.enum";
import { SortEnum } from "../../../enums/sort.enum";

export interface FetchBankAccountsListInput {
  filteredByType?: BankAccountTypeEnum[];
  sortedByPosition?: SortEnum;
}
