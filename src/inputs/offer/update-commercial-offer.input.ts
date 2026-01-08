import { OfferStatus } from "../../enums/offer-status.enum";

export interface UpdateCommercialOfferInput {
  message?: string;
  status?: OfferStatus;
  seenByUser?: Date;
}
