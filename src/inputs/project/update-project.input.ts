import { ProjectPriorityEnum } from "../../enums/project-priority.enum";

export interface UpdateProjectInput {
  id: string;
  key?: string; // UPPERCASE VALUES OF ProjectKeyEnum
  priority?: ProjectPriorityEnum;
  title?: string;
  note?: string | null;
}
