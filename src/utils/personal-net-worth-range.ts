import { PersonalNetWorthRangeEnum } from "../enums/personal-net-worth-range.enum";

export interface PersonalNetWorthRange {
  key: PersonalNetWorthRangeEnum;
  label: string;
}

export const PersonalNetWorthRanges: PersonalNetWorthRange[] = [
  { key: PersonalNetWorthRangeEnum.LESS_THAN_100K, label: "Moins de 100 000€" },
  { key: PersonalNetWorthRangeEnum.BETWEEN_100K_AND_200K, label: "Entre 100 000€ et 200 000€" },
  { key: PersonalNetWorthRangeEnum.BETWEEN_200K_AND_500K, label: "Entre 200 000€ et 500 000€" },
  { key: PersonalNetWorthRangeEnum.BETWEEN_500K_AND_1M, label: "Entre 500 000€ et 1 000 000€" },
  { key: PersonalNetWorthRangeEnum.BETWEEN_1M_AND_2M, label: "Entre 1 000 000€ et 2 000 000€" },
  { key: PersonalNetWorthRangeEnum.MORE_THAN_2M, label: "Plus de 2 000 000€" },
];

export function getPersonalNetWorthRangeLabel(key: PersonalNetWorthRangeEnum | string): string {
  const range = PersonalNetWorthRanges.find(
    (range) => range.key === (key.toUpperCase() as PersonalNetWorthRangeEnum),
  );
  return !range ? "Inconnu" : range.label;
}

export function getPersonalNetWorthRangeKey(label: string): PersonalNetWorthRangeEnum | null {
  const range = PersonalNetWorthRanges.find((range) => range.label === label);
  return !range ? null : range.key;
}
