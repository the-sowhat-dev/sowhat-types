import { AssetCoOwnerResponse } from "../asset-co-owner.response";
import { LoanResponse } from "../bank-account/loan/loan.response";

export interface OtherAssetResponse {
  id: string;
  name: string;
  imageUrl: string | null;
  value: number;
  currency: string;
  position: number;
  loan: LoanResponse | null;
  coOwner: AssetCoOwnerResponse | null;
  updatedAt: Date;
  createdAt: Date;
}
