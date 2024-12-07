import { AssetCoOwnerResponse } from "../asset-co-owner.response";
import { LoanResponse } from "../bank-account/loan/loan.response";

export interface MobilityResponse {
  id: string;
  name: string;
  imageUrl: string | null;
  value: number;
  currency: string;
  loan: LoanResponse | null;
  coOwner: AssetCoOwnerResponse | null;
  updatedAt: Date;
  createdAt: Date;
}
