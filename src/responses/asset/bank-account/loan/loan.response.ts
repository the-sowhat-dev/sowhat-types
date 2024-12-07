import { LoanTypeEnum } from "../../../../enums/loan-type.enum";

export interface LoanResponse {
  id: string;
  bankAccountId: string;
  name: string;
  outstandingCapital: number | null;
  totalAmount: number | null;
  availableAmount: number | null;
  rate: number | null;
  type: LoanTypeEnum;
  currency: string;
}
