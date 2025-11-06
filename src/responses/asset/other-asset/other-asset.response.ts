import { LoanResponse } from "../bank-account/loan/loan.response";

export interface OtherAssetResponse {
  id: string;
  name: string;
  imageUrl: string | null;
  value: number;
  currency: string;
  position: number;
  loan: LoanResponse | null;
  iOwnShare: number; // Between 0 and 100
  updatedAt: Date;
  createdAt: Date;
}
