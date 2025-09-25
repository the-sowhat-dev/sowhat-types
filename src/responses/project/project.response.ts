import { ProjectPriorityEnum } from "../../enums/project-priority.enum";

export interface ProjectResponse {
  id: string;
  key: string;
  priority: ProjectPriorityEnum;
  title: string;
  note: string | null;
  updatedAt: Date;
  createdAt: Date;
}
