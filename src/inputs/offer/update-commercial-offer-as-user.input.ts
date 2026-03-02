export interface UpdateCommercialOfferAsUserInput {
  id: string;
  seenByUserAt?: Date | null;
  rejectedReason?: string | null;
  acceptedByUserAt?: Date | null;
  rejectedByUserAt?: Date | null;
  archivedByUserAt?: Date | null;
}
