import { AvailableCurrencyEnum } from "../../../enums/available-currency.enum";
import { AvailableCryptocurrencySymbolEnum } from "../../../enums/available-cryptocurrency-symbol.enum";

export interface CryptocurrencyAssetResponse {
  id: string;
  symbol: AvailableCryptocurrencySymbolEnum;
  priceUsd: number | null;
  priceUserCurrency: number | null;
  quantity: number;
  currency: AvailableCurrencyEnum;
  updatedAt: Date;
  createdAt: Date;
}
