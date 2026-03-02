import { ProfessionStatusEnum } from "../enums/profession-status.enum";

export interface ProfessionStatus {
  key: ProfessionStatusEnum;
  label: string;
}

export const ProfessionStatusList: ProfessionStatus[] = [
  { key: ProfessionStatusEnum.STUDENT, label: "Étudiant" },
  { key: ProfessionStatusEnum.INTERIM, label: "Interim" },
  { key: ProfessionStatusEnum.CIVIL_SERVANT, label: "Fonctionnaire" },
  { key: ProfessionStatusEnum.CDD, label: "Salarié en CDD" },
  { key: ProfessionStatusEnum.CDI, label: "Salarié en CDI" },
  { key: ProfessionStatusEnum.INDEPENDANT, label: "Indépendant" },
  { key: ProfessionStatusEnum.LIBERAL, label: "Profession libérale" },
  { key: ProfessionStatusEnum.COMPANY_DIRECTOR, label: "Chef d'entreprise" },
  { key: ProfessionStatusEnum.RETIRED, label: "Retraité" },
  { key: ProfessionStatusEnum.JOB_SEEKER, label: "En recherche d'emploi" },
  { key: ProfessionStatusEnum.INACTIVE, label: "Sans activité" },
  { key: ProfessionStatusEnum.DONT_WANT_TO_SAY, label: "Ne souhaite pas répondre" },
];

export function getProfessionStatusLabel(professionStatus: ProfessionStatusEnum | string): string {
  const ps = ProfessionStatusList.find(
    (s) => s.key === (professionStatus as ProfessionStatusEnum).toUpperCase(),
  );

  return !ps ? "Inconnu" : ps.label;
}

export function getProfessionStatusKey(label: string): ProfessionStatusEnum | null {
  const ps = ProfessionStatusList.find((s) => s.label === label);
  return !ps ? null : ps.key;
}
