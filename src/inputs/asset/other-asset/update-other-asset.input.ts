export interface UpdateOtherAssetInput {
  id: string;
  name?: string;
  imageUrl?: string | null;
  value?: number;
  currency?: string;
  iOwnShare?: number; // Between 0 and 100
  loanId?: string | null;
}
