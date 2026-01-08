import { ProResponse } from "../pro";
import { OfferStatus } from "../../enums/offer-status.enum";

/**
 * Commercial offer for invstore application users
 */
export interface UserCommercialOfferResponse {
  id: string;
  pro: ProResponse;
  message: string;
  status: OfferStatus;
  seenByUser: Date | null;
  sendAt: Date;
  updatedAt: Date;
}
