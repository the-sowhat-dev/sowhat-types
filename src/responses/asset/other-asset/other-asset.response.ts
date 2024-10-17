import { AssetCoOwnerResponse } from "../asset-co-owner.response";

export interface OtherAssetResponse {
  id: string;
  name: string;
  imageUrl: string | null;
  value: number;
  currency: string;
  gotLoan: boolean;
  coOwner: AssetCoOwnerResponse | null;
  updatedAt: Date;
  createdAt: Date;
}