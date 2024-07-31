import { CreateAssetCoOwnerInput } from "../create-asset-co-owner.input";

export interface CreateRealEstateInput {
  userId: string;
  gotLoan: boolean;
  customTitle: string;
  customImage: string | null;
  price: number;
  note: string | null;
  isMainResidence: boolean;
  coOwner: CreateAssetCoOwnerInput | null;
}
