import { AiAdvisorResponse, AiAdvisorStatusResponse } from "../user";

export interface LeadAiSummaryResponse {
  status: AiAdvisorStatusResponse | null;
  version: number;
  fullResponse: AiAdvisorResponse | null;
  updatedAt: Date;
}
