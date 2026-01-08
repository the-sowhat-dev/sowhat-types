import { OfferStatus } from "../../enums";

/**
 * Commercial offer for Pro Platform users = Pros
 */
export interface ProCommercialOfferResponse {
  id: string;
  leadUserId: string;
  message: string;
  status: OfferStatus;
  seenByUser: Date | null;
  sendAt: Date;
  updatedAt: Date;
}
