import { AssetCoOwnerInput } from "../asset-co-owner.input";

export interface UpdateRealEstateArgs {
  id: string;
  name?: string;
  imageUrl?: string | null;
  value?: number;
  currency?: string;
  coOwner?: AssetCoOwnerInput | null;
  loanId?: string | null;
}
