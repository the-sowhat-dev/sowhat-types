import { UserAiSummaryStatusEnum } from "../../enums/user-ai-summary-status.enum";

export interface UserAiSummaryResponse {
  id: string;
  status: UserAiSummaryStatusEnum;
  version: number;
  rawResponse: string | null;
  parsedSummary: string | null;
  updatedAt: Date;
  createdAt: Date;
}
