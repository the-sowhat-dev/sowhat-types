import { AvailableCurrencyEnum, UserStatusEnum } from "../../enums";

export interface UserProfileResponse {
  id: string;
  currency: AvailableCurrencyEnum;
  status: UserStatusEnum;
  numberOfCowners: number;
  gotPowensUser: boolean;
  createdAt: Date;
  updatedAt: Date;
}
