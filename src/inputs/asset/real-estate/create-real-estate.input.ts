import { AssetCoOwnerInput } from "../asset-co-owner.input";

export interface CreateRealEstateInput {
  name: string;
  imageUrl: string | null;
  value: number;
  currency: string;
  gotLoan: boolean;
  coOwner: AssetCoOwnerInput | null;
}
