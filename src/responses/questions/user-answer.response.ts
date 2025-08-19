import { QuestionResponse } from "./question.response";

export interface UserAnswerResponse {
  id: string; // user answer id
  userId: string; // user id
  question: QuestionResponse;
  answer: string;
}
