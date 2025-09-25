import { QuestionTypeEnum } from "../../enums/question-type.enum";
import { QuestionOptionResponse } from "./question-option.response";

export interface QuestionVersionResponse {
  id: string;
  version: number;
  text: string;
  description: string;
  type: QuestionTypeEnum;
  isRequired: boolean;
  isAccessible: boolean;
  options: QuestionOptionResponse[] | null; // null if the question is not a MCQ (single/multiple choice)
  createdAt: Date;
  updatedAt: Date;
}
