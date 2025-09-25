import { QuestionOptionInput } from "./question-option.input";
import { QuestionTypeEnum } from "../../enums/question-type.enum";
import { QuestionCategoryEnum } from "../../enums/question-category.enum";

export interface CreateQuestionInput {
  key: string; // unique key for the question: e.g. "employment_status", "gender", "age", ..
  text: string;
  description: string;
  category: QuestionCategoryEnum;
  type: QuestionTypeEnum;
  isRequired: boolean;
  isAccessible: boolean;
  options: QuestionOptionInput[];
}
