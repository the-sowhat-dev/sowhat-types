import { ProStatusEnum } from "../../enums/pro/pro-status.enum";
import { ProCertificationEnum } from "../../enums/pro/pro-certification.enum";

export interface ProResponse {
  id: string;
  clerkId: string;
  firstName: string | null;
  lastName: string | null;
  role: string | null;
  presentation: string | null;
  companyImage: string | null;
  companyName: string | null;
  companyDescription: string | null;
  sirenId: string | null;
  oriasId: string | null;
  regulation: string | null;
  certifications: ProCertificationEnum[];
  status: ProStatusEnum;
  notificationEmail: string | null;
  updatedAt: Date;
  createdAt: Date;
}
