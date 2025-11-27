import { AvailableCryptocurrencySymbolEnum } from "../../../enums/available-cryptocurrency-symbol.enum";

export interface UpdateCryptocurrencyAssetInput {
  symbol: AvailableCryptocurrencySymbolEnum;
  quantity: number;
}
