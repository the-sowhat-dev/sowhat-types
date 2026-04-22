import { PaginationResponse } from "../common/pagination.response";
import { ProMatchOfferResponse } from "./pro-match-offer.response";

export interface ProMatchOfferListResponse {
  items: ProMatchOfferResponse[];
  pagination: PaginationResponse;
}
