import { ProfessionEnum } from "../enums/profession.enum";

export interface Profession {
  value: ProfessionEnum;
  label: string;
}

export const ProfessionsList: Profession[] = [
  { value: ProfessionEnum.AGRICULTURE_ENVIRONMENT, label: "l'agriculture et l'environnement" },
  { value: ProfessionEnum.REAL_ESTATE_CONSTRUCTION, label: "l'immobilier et construction" },
  { value: ProfessionEnum.INDUSTRY_ENERGY, label: "l'industrie et les énergies" },
  { value: ProfessionEnum.DIGITAL_TELECOM, label: "le numérique et télécoms" },
  { value: ProfessionEnum.RETAIL_DISTRIBUTION, label: "le commerce et la distribution" },
  { value: ProfessionEnum.TRANSPORT_LOGISTICS, label: "le transport et la logistique" },
  { value: ProfessionEnum.FINANCE_INSURANCE, label: "la finance et l'assurance" },
  { value: ProfessionEnum.HEALTH_SOCIAL, label: "la santé et le social" },
  { value: ProfessionEnum.EDUCATION_RESEARCH, label: "l'éducation et la recherche" },
  { value: ProfessionEnum.PUBLIC_ADMINISTRATION, label: "l'administration publique" },
  { value: ProfessionEnum.MILITARY_SECURITY, label: "l'armée et la sécurité" },
  { value: ProfessionEnum.CATERING_TOURISM, label: "la restauration et le tourisme" },
  { value: ProfessionEnum.CULTURE_LEISURE, label: "la culture et les loisirs" },
  { value: ProfessionEnum.ARTS_MEDIA, label: "les arts et les médias" },
  { value: ProfessionEnum.OTHER_SECTOR, label: "un autre secteur" },
];

export function getProfessionLabel(profession: ProfessionEnum): string {
  const professionDomain = ProfessionsList.find((p) => p.value === profession.toUpperCase());

  if (!professionDomain) {
    return "Inconnu";
  }

  return professionDomain.label;
}

export function getProfessionKey(label: string): ProfessionEnum | null {
  const professionKey = ProfessionsList.find((p) => p.label === label);

  if (!professionKey) {
    return null;
  }

  return professionKey.value;
}
