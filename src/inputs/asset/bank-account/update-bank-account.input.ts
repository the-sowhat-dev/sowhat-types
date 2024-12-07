import { AssetCoOwnerInput } from "../asset-co-owner.input";

export interface UpdateBankAccountInput {
  id: string;
  name?: string;
  alertThreshold?: number;
  position?: number;
  coOwner?: AssetCoOwnerInput | null;
}
