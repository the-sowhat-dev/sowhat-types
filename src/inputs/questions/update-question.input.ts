import { QuestionCategoryEnum } from "../../enums/question-category.enum";
import { QuestionTypeEnum } from "../../enums/question-type.enum";
import { QuestionOptionInput } from "./question-option.input";

export interface UpdateQuestionInput {
  text?: string;
  description?: string;
  category?: QuestionCategoryEnum;
  type?: QuestionTypeEnum; // Changing the type involves a new version of the question
  isRequired?: boolean;
  isAccessible?: boolean;
  options?: QuestionOptionInput[]; // Changing/Deleting/Creating one of the options' key involves a new version of the question
}
