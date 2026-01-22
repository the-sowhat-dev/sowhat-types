import { AiAdvisorStatusResponse } from "./ai-advisor-status.response";
import { AiAdvisorSyntheseResponse } from "./ai-advisor-synthese.response";

export interface AiAdvisorResponse {
  status: AiAdvisorStatusResponse;
  message?: string; // présent uniquement si status === 'risk_detected'
  synthese?: AiAdvisorSyntheseResponse; // présent si status === 'ok'
  analyse?: string[]; // présent si status === 'ok'
  recommandations?: string[]; // présent si status === 'ok'
  concretement?: string[]; // présent si status === 'ok'
}
