import { PhoneVerificationStatusEnum } from '../../../enums/phone-verification-status.enum';

export interface VerifyPhoneCodeResponse {
  verified: boolean;
  errorMessage: string | null;
  status: PhoneVerificationStatusEnum;
}