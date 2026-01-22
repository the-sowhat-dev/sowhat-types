import { OfferStatusEnum } from "../../enums/offer-status.enum";

export interface UpdateCommercialOfferInput {
  id: string;
  message?: string;
  status?: OfferStatusEnum;
  seenByUser?: Date;
}
