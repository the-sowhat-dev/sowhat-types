import { OfferStatusEnum, ProjectNeedEnum } from "../../enums";

export interface ProMatchOfferResponse {
  offer: {
    id: string;
    status: OfferStatusEnum;
    updatedAt: Date;
    archivedByProAt: Date | null;
  };
  lead: {
    id: string; // user id
    birthYear: number | null;
    initialAmount: number | null;
    need: ProjectNeedEnum | null;
    postalCode: string | null;
  };
}
