import { PersonalSalaryRangeEnum } from "../enums/personal-salary-range.enum";

export interface PersonalSalaryRange {
  key: PersonalSalaryRangeEnum;
  label: string;
}

export const PersonalSalaryRanges: PersonalSalaryRange[] = [
  { key: PersonalSalaryRangeEnum.LESS_THAN_20K, label: "Moins de 20 000€" },
  { key: PersonalSalaryRangeEnum.BETWEEN_20K_AND_30K, label: "Entre 20 000€ et 30 000€" },
  { key: PersonalSalaryRangeEnum.BETWEEN_30K_AND_45K, label: "Entre 30 000€ et 45 000€" },
  { key: PersonalSalaryRangeEnum.BETWEEN_45K_AND_65K, label: "Entre 45 000€ et 65 000€" },
  { key: PersonalSalaryRangeEnum.BETWEEN_65K_AND_90K, label: "Entre 65 000€ et 90 000€" },
  { key: PersonalSalaryRangeEnum.MORE_THAN_90K, label: "Plus de 90 000€" },
];

export const getPersonalSalaryRangeLabel = (key: PersonalSalaryRangeEnum | string): string => {
  const range = PersonalSalaryRanges.find(
    (range) => range.key === (key.toUpperCase() as PersonalSalaryRangeEnum),
  );
  return !range ? "Inconnu" : range.label;
};

export const getPersonalSalaryRangeKey = (label: string): PersonalSalaryRangeEnum | null => {
  const range = PersonalSalaryRanges.find((range) => range.label === label);
  return !range ? null : range.key;
};
