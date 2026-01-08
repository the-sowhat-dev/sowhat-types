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
  amfId: string | null;
  oriasId: string | null;
  updatedAt: Date;
  createdAt: Date;
}
