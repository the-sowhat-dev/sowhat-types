import { AssetCoOwnerInput } from "../asset-co-owner.input";

export interface CreateOtherAssetInput {
  name: string;
  imageUrl: string | null;
  value: number;
  currency: string;
  coOwner: AssetCoOwnerInput | null;
  loanId: string | null;
}
