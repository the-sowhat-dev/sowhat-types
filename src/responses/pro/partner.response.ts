import { ProCertificationEnum } from "../../enums/pro/pro-certification.enum";

export interface PartnerResponse {
  id: string;
  firstname: string | null;
  lastname: string | null;
  role: string | null;
  image: string | null;
  presentation: string | null;
  companyName: string | null;
  companyWebsite: string | null;
  companyImage: string | null;
  companyDescription: string | null;
  sirenId: string | null; // ex: 945009546
  oriasId: string | null; // ex: 25005834
  regulation: string | null; // ex: AMF FP-2023-36
  certifications: ProCertificationEnum[]; // ex: ["AMF","CIF","IAS"]
}
