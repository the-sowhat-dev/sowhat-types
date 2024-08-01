import { MobilityTypeEnum } from '../../../enums/mobility-type.enum';
import { CreateAssetCoOwnerInput } from '../create-asset-co-owner.input';
import { CreateAssetDateOfAcquisitionInput } from '../create-asset-date-of-acquisition.input';

export interface CreateMobilityInput {
  userId: string;
  customTitle: string;
  customImage: string | null;
  price: number;
  licenceNumber: string | null;
  dateOfAcquisition: CreateAssetDateOfAcquisitionInput | null;
  mobilityType: MobilityTypeEnum;
  mileage: number | null;
  note: string | null;
  gotLoan: boolean;
  coOwner: CreateAssetCoOwnerInput | null;
}
