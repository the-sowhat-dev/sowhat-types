import { ProjectPriorityEnum } from "../../enums/project-priority.enum";

export interface CreateProjectInput {
  key: string; // UPPERCASE VALUES OF ProjectKeyEnum
  priority: ProjectPriorityEnum;
  title: string;
  note: string | null;
}
