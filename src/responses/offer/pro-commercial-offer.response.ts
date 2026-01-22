import { OfferStatusEnum } from "../../enums";

/**
 * Commercial offer for Pro Platform users = Pros
 */
export interface ProCommercialOfferResponse {
  id: string;
  leadUserId: string;
  message: string;
  status: OfferStatusEnum;
  seenByUser: Date | null;
  sentAt: Date;
  updatedAt: Date;
}
