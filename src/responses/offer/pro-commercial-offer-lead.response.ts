import { LeadResponse } from "../lead/lead.response";
import { ProCommercialOfferResponse } from "./pro-commercial-offer.response";

export interface ProCommercialOfferLeadResponse {
  lead: LeadResponse;
  offer: ProCommercialOfferResponse;
}
