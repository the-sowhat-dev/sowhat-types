import { PhoneVerificationStatusEnum } from '../../../enums/phone-verification-status.enum';

export interface SendPhoneVerificationResponse {
  smsSent: boolean;
  errorMessage: string | null;
  status: PhoneVerificationStatusEnum;
}