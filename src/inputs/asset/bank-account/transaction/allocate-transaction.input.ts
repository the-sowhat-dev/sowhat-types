import { BudgetTypeEnum } from "../../../../enums/budget-type.enum";

export interface AllocateTransactionInput {
  transactionId: string;
  allocationId: string | null;
  applicationDate: Date;
  type: BudgetTypeEnum;
}
