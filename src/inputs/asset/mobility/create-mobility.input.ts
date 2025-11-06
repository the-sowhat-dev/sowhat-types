export interface CreateMobilityInput {
  name: string;
  imageUrl: string | null;
  value: number;
  currency: string;
  iOwnShare: number;
  loanId: string | null;
}
