export interface CreateUserCoOwnerInput {
  userId: string;
  customName: string;
  email: string | null;
  phone: string | null;
  customImage: string | null;
}
