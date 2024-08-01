import { CoOwnerResponse } from './co-owner.response';

export interface UserCoOwnerResponse extends CoOwnerResponse {
  numberOfCoOwnAssets: number;
}
