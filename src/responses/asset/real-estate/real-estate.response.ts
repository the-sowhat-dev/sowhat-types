import { AssetCoOwnerResponse } from '../asset-co-owner.response';

export interface RealEstateResponse {
  id: string;
  userId: string;
  gotLoan: boolean;
  customTitle: string;
  customImage: string | null;
  price: number;
  note: string | null;
  isMainResidence: boolean;
  coOwner: AssetCoOwnerResponse | null;
  createdAt: Date;
  updatedAt: Date;
}
