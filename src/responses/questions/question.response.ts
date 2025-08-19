import { QuestionCategoryEnum } from "../../enums/question-category.enum";
import { QuestionTypeEnum } from "../../enums/question-type.enum";
import { QuestionOptionResponse } from "./question-option.response";

export interface QuestionResponse {
  id: string;
  text: string;
  description: string;
  category: QuestionCategoryEnum;
  type: QuestionTypeEnum;
  isRequired: boolean;
  isAccessible: boolean;
  position: number;
  options: QuestionOptionResponse[];
}
