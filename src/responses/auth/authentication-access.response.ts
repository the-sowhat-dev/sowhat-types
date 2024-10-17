import { AccessTokensResponse } from "./access-tokens.response";

export interface AuthenticationAccessResponse extends AccessTokensResponse {
  userId: string;
  isLogged: boolean;
  hasPincode: boolean;
}
