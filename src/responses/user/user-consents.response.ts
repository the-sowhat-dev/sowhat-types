import { UserConsentResponse } from "./user-consent.response";

export interface UserConsentsResponse {
  privacyPolicy: UserConsentResponse;
  termOfUsage: UserConsentResponse;
}
