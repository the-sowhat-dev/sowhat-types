import { ProjectNeedEnum } from "../../enums/project-need.enum";
import { FinancialProductEnum } from "../../enums/financial-product.enum";

export interface GetLeadsQueryInput {
  // Filters
  minInitialAmount?: number;
  maxInitialAmount?: number;

  needs?: ProjectNeedEnum[];
  financialProducts?: FinancialProductEnum[];

  onlyWithoutProduct?: boolean;

  postalCodes?: string[]; // List of postal codes (first 2 digits)
  onlyOutsideFrance?: boolean; // only with postal code = LIVES_OUTSIDE_FRANCE

  // Sort
  sortBy?: "user_created_at" | "initial_amount";
  sortOrder?: "asc" | "desc";

  // Pagination
  cursor?: string;
  limit?: number;
}
