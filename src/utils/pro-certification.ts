import { ProCertificationEnum } from "../enums/pro/pro-certification.enum";

export interface ProCertification {
  key: ProCertificationEnum;
  label: string;
  description: string;
}

export const ProCertifications: ProCertification[] = [
  {
    key: ProCertificationEnum.AMF,
    label: "AMF",
    description:
      "Autorité des Marchés Financiers. Professionnel autorisé à exercer dans le secteur du conseil financier.",
  },
  {
    key: ProCertificationEnum.CIF,
    label: "CIF",
    description:
      "Conseiller en Investissements Financiers. Professionnel autorisé à fournir des conseils en investissement et recommandations de produits financiers.",
  },
  {
    key: ProCertificationEnum.IAS,
    label: "IAS",
    description:
      "Intermédiaire en Assurance. Professionnel autorisé à vendre des produits d'assurance, tels que l'assurance-vie par exemple.",
  },
];

export function getProCertificationByKey(key: ProCertificationEnum): ProCertification | null {
  const proCertification = ProCertifications.find((cert) => cert.key === key.toUpperCase());

  return !proCertification ? null : proCertification;
}

export function getProCertificationByLabelOrDescription(label: string): ProCertification | null {
  const proCertification = ProCertifications.find(
    (cert) => cert.label === label || cert.description === label,
  );

  return !proCertification ? null : proCertification;
}
