import { BatchUpdateUserAssetInput } from "./batch-update-user-asset.input";

export interface BatchUpdateUserAssetsInput {
  mobilities: BatchUpdateUserAssetInput[];
  realEstates: BatchUpdateUserAssetInput[];
  others: BatchUpdateUserAssetInput[];
}
