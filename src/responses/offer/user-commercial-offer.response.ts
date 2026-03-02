import { ProResponse } from "../pro";
import { OfferStatusEnum } from "../../enums/offer-status.enum";

/**
 * Commercial offer for invstore application users
 */
export interface UserCommercialOfferResponse {
  id: string;
  pro: ProResponse;
  proProfileImageUrl: string | null;
  message: string;
  status: OfferStatusEnum;
  acceptedByUserAt: Date | null;
  rejectedByUserAt: Date | null;
  archivedByUserAt: Date | null;
  seenByUser: Date | null;
  rejectedReason: string | null;
  sentAt: Date;
  updatedAt: Date;
}
