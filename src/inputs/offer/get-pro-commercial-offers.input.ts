export interface GetProCommercialOffersInput {
  offset: number;
  limit: number;
  status: "accepted" | "pending" | "rejected" | "archived";
}
