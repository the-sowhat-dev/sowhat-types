import { MobilityResponse } from "./mobility/mobility.response";
import { OtherAssetResponse } from "./other-asset/other-asset.response";
import { RealEstateResponse } from "./real-estate/real-estate.response";
import { UserAssetsBalancesResponse } from "./user-assets-balances.response";
import { CryptocurrencyAssetResponse } from "./cryptocurrency/cryptocurrency-asset.response";

export interface UserAssetsResponse {
  realEstateAssets: RealEstateResponse[];
  mobilityAssets: MobilityResponse[];
  cryptocurrencyAssets: CryptocurrencyAssetResponse[];
  otherAssets: OtherAssetResponse[];
  balances: UserAssetsBalancesResponse;
}
