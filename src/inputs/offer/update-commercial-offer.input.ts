import { OfferStatusEnum } from "../../enums/offer-status.enum";

/**
 * @deprecated stop using this input (since Feb. 2026)
 * Use UpdateCommercialOfferAsProInput or UpdateCommercialOfferAsUserInput instead
 */
export interface UpdateCommercialOfferInput {
  id: string;
  message?: string;
  status?: OfferStatusEnum;
  rejectedReason?: string;
  seenByUser?: Date;
}
