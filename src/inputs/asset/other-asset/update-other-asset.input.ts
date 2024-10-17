import { AssetCoOwnerInput } from "../asset-co-owner.input";

export interface UpdateOtherAssetInput {
  id: string;
  name?: string;
  imageUrl?: string | null;
  value?: number;
  currency?: string;
  coOwner?: AssetCoOwnerInput | null;
  gotLoan?: boolean;
}
