import { QuestionResponse } from "./question.response";

export interface UserAnswerResponse {
  id: string; // user answer id
  userId: string; // user id
  question: QuestionResponse;
  answer: string; // Revoir le type puisqu'on peut avoir un array de string si c'est un MCQ
}
