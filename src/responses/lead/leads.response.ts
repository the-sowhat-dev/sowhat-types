import { LeadResponse } from "./lead.response";

export interface LeadsResponse {
  items: LeadResponse[];
  nextCursor: string | null;
  total: number;
}
