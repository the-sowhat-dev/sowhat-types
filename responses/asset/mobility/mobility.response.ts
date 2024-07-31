import { MobilityTypeEnum } from "types";
import { AssetCoOwnerResponse } from "../asset-co-owner.response";
import { AssetDateOfAcquisitionResponse } from "../asset-date-of-acquisition.response";

export interface MobilityResponse {
  id: string;
  userId: string;
  customImage: string | null;
  customTitle: string;
  price: number;
  licenceNumber: string | null;
  dateOfAcquisition: AssetDateOfAcquisitionResponse | null;
  mobilityType: MobilityTypeEnum;
  mileage: number | null;
  note: string | null;
  gotLoan: boolean;
  coOwner: AssetCoOwnerResponse | null;
  createdAt: Date;
  updatedAt: Date;
}
