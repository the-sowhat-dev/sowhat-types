import { BudgetTypeEnum } from "../../../../enums/budget-type.enum";

export interface AllocateMultipleTransactionsInput {
  transactionIds: string[];
  allocationId: string | null;
  type: BudgetTypeEnum;
  applicationDate: Date;
  areInternalTransfers: boolean;
}
