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
  acceptedByUserAt: Date | null;
  rejectedByUserAt: Date | null;
  archivedByProAt: Date | null;
  rejectedReason: string | null;
  sentAt: Date;
  updatedAt: Date;
}
