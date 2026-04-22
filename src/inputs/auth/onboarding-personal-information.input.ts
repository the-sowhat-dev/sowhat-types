import { MaritalStatusEnum } from "../../enums/marital-status.enum";

export interface OnboardingPersonalInformationInput {
  firstName: string;
  lastName: string;
  birthYear: number;
  email: string;
  childrenNumber: number;
  childrenBirthYears: number[];
  maritalStatus: MaritalStatusEnum;
  postalCode: string;
  isMainResidenceOwner: boolean;
}
