import { QuestionCategoryEnum } from "../../enums/question-category.enum";
import { QuestionTypeEnum } from "../../enums/question-type.enum";
import { CreateQuestionOptionInput } from "./create-question-option.input";

export interface CreateQuestionInput {
  text: string;
  description: string;
  category: QuestionCategoryEnum;
  type: QuestionTypeEnum;
  isRequired: boolean;
  isAccessible: boolean;
  position: number;
  options: CreateQuestionOptionInput[];
}
