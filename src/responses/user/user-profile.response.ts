import { AvailableCurrencyEnum } from "../../enums/available-currency.enum";
import { UserStatusEnum } from "../../enums/user-status.enum";

export interface UserProfileResponse {
  id: string;
  currency: AvailableCurrencyEnum;
  status: UserStatusEnum;
  gotPowensUser: boolean;
  expoToken: string | null;
  latestTermsOfUsageVersionConsented: string;
  latestPrivacyPolicyVersionConsented: string;
  createdAt: Date;
  updatedAt: Date;
}
