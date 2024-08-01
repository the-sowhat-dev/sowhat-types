import { UserStatusEnum } from '../../enums/user-status.enum';

export interface UserResponse {
  id: string;
  clerkId: string;
  firstname: string;
  lastname: string | null;
  email: string | null;
  status: UserStatusEnum;
  createdAt: Date;
  updatedAt: Date;
}
