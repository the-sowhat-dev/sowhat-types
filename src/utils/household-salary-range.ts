import { HouseholdSalaryRangeEnum } from "../enums/household-salary-range.enum";

export interface HouseholdSalaryRange {
  key: HouseholdSalaryRangeEnum;
  label: string;
}

export const HouseholdSalaryRanges: HouseholdSalaryRange[] = [
  { key: HouseholdSalaryRangeEnum.LESS_THAN_30K, label: "Moins de 30 000€" },
  { key: HouseholdSalaryRangeEnum.BETWEEN_30K_AND_50K, label: "Entre 30 000€ et 50 000€" },
  { key: HouseholdSalaryRangeEnum.BETWEEN_50K_AND_80K, label: "Entre 50 000€ et 80 000€" },
  { key: HouseholdSalaryRangeEnum.BETWEEN_80K_AND_120K, label: "Entre 80 000€ et 120 000€" },
  { key: HouseholdSalaryRangeEnum.BETWEEN_120K_AND_180K, label: "Entre 120 000€ et 180 000€" },
  { key: HouseholdSalaryRangeEnum.MORE_THAN_180K, label: "Plus de 180 000€" },
];

export function getHouseholdSalaryRangeLabel(key: HouseholdSalaryRangeEnum | string): string {
  const range = HouseholdSalaryRanges.find(
    (range) => range.key === (key.toUpperCase() as HouseholdSalaryRangeEnum),
  );
  return !range ? "Inconnu" : range.label;
}

export function getHouseholdSalaryRangeKey(label: string): HouseholdSalaryRangeEnum | null {
  const range = HouseholdSalaryRanges.find((range) => range.label === label);
  return !range ? null : range.key;
}
