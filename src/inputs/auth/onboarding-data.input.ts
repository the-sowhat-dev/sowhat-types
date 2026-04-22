import { OnboardingProjectInput } from "./onboarding-project.input";
import { OnboardingPersonalInformationInput } from "./onboarding-personal-information.input";
import { OnboardingFinancialInformationInput } from "./onboarding-financial-information.input";

export interface OnboardingDataInput {
  project: OnboardingProjectInput;
  personalInformation: OnboardingPersonalInformationInput;
  financialInformation: OnboardingFinancialInformationInput;
}
