import { LeadResponse } from "../lead/lead.response";
import { ProUserLikeResponse } from "./pro-user-like.response";

export interface ProUserLikeLeadResponse {
  lead: LeadResponse;
  like: ProUserLikeResponse;
}
