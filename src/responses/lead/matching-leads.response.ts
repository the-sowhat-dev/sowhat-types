import { ProUserLikeLeadResponse } from "../like/pro-user-like-lead.response";
import { ProCommercialOfferLeadResponse } from "../offer/pro-commercial-offer-lead.response";

export interface MatchingLeadsResponse {
  likes: ProUserLikeLeadResponse[];
  offers: ProCommercialOfferLeadResponse[];
}
