import { MaritalStatusEnum } from "../enums/marital-status.enum";

export interface MaritalStatus {
  key: MaritalStatusEnum;
  label: string;
}

export const MartialStatuses: MaritalStatus[] = [
  { key: MaritalStatusEnum.SINGLE, label: "Célibataire" },
  { key: MaritalStatusEnum.COUPLE, label: "En couple" },
  { key: MaritalStatusEnum.PACS, label: "Pacsé(e)" },
  { key: MaritalStatusEnum.MARRIED, label: "Marié(e)" },
  { key: MaritalStatusEnum.DIVORCED, label: "Divorcé(e)" },
  { key: MaritalStatusEnum.WIDOWED, label: "Veuf(ve)" },
  { key: MaritalStatusEnum.DONT_WANT_TO_SAY, label: "Ne souhaite pas répondre" },
];

export function getMaritalStatusLabel(maritalStatus: MaritalStatusEnum | string): string {
  const ms = MartialStatuses.find(
    (ms) => ms.key === (maritalStatus as MaritalStatusEnum).toUpperCase(),
  );

  return !ms ? "Inconnu" : ms.label;
}

export function getMaritalStatusKey(label: string): MaritalStatusEnum | null {
  const ms = MartialStatuses.find((ms) => ms.label === label);
  return !ms ? null : ms.key;
}
