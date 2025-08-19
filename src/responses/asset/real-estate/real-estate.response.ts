import { LoanResponse } from "../bank-account";
import { AssetCoOwnerResponse } from "../asset-co-owner.response";

export interface RealEstateResponse {
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
