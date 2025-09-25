import { AnonymousUserResponse } from "./anonymous-user.response";
import { PaginationResponse } from "../common/pagination.response";

export interface AnonymousUsersResponse {
  users: AnonymousUserResponse[];
  pagination: PaginationResponse;
}
