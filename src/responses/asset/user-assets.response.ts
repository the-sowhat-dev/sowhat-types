import { MobilityResponse } from "./mobility/mobility.response";
import { OtherAssetResponse } from "./other-asset/other-asset.response";
import { RealEstateResponse } from "./real-estate/real-estate.response";
import { StockExchangeResponse } from "./stock-exchange/stock-exchange.response";
import { CryptocurrencyResponse } from "./cryptocurrency/cryptocurrency.response";

export interface UserAssetsResponse {
  realEstateAssets: RealEstateResponse[];
  mobilityAssets: MobilityResponse[];
  cryptocurrencyAssets: CryptocurrencyResponse[];
  stockExchangeAssets: StockExchangeResponse[];
  otherAssets: OtherAssetResponse[];
}
