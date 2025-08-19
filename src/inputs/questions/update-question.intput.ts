import { QuestionCategoryEnum } from "../../enums/question-category.enum";
import { QuestionTypeEnum } from "../../enums/question-type.enum";
import { UpdateQuestionOptionInput } from "./update-question-option.input";

export interface UpdateQuestionInput {
  text?: string;
  description?: string;
  category?: QuestionCategoryEnum;
  type?: QuestionTypeEnum;
  isRequired?: boolean;
  isAccessible?: boolean;
  position?: number;
  options?: UpdateQuestionOptionInput[];
}
