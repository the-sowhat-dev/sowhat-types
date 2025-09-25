import { QuestionCategoryEnum } from "../../enums/question-category.enum";
import { QuestionVersionResponse } from "./question-version.response";

export interface QuestionResponse {
  id: string;
  key: string;
  lastVersion: QuestionVersionResponse;
  versions: QuestionVersionResponse[];
  category: QuestionCategoryEnum;
  position: number;
}
