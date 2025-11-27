import { AvailableCurrencyEnum } from "../../enums/available-currency.enum";

export interface UserAssetsBalancesResponse {
  total: number;
  realEstate: number;
  mobility: number;
  otherAsset: number;
  cryptocurrency: number;
  currency: AvailableCurrencyEnum;
}
