import { ProCertificationEnum } from "../../enums/pro/pro-certification.enum";

export interface UpdateProInput {
  clerkId: string;
  firstName?: string | null;
  lastName?: string | null;
  role?: string | null;
  presentation?: string | null;
  companyName?: string | null;
  companyDescription?: string | null;
  certifications?: ProCertificationEnum[] | null;
  sirenId?: string | null;
  oriasId?: string | null;
  regulation?: string | null;
  notificationEmail?: string | null;
}
