export interface UserAuthenticatedResponse {
  authenticated: boolean;
  errorMessage: string | null;
  hasPincode: boolean;
}
