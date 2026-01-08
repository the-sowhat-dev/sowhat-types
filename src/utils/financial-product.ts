import { FinancialProductEnum } from "../enums/financial-product.enum";

export interface FinancialProduct {
  key: FinancialProductEnum;
  label: string;
}

export const FinancialProducts: FinancialProduct[] = [
  { key: FinancialProductEnum.LIVRET_A, label: "Livret A" },
  { key: FinancialProductEnum.LDDS, label: "LDDS" },
  { key: FinancialProductEnum.LEP, label: "LEP" },
  { key: FinancialProductEnum.COMPTE_SUR_LIVRET, label: "Compte sur livret" },
  { key: FinancialProductEnum.COMPTE_A_TERME, label: "Compte à terme" },
  { key: FinancialProductEnum.ASSURANCE_VIE, label: "Assurance-vie" },
  { key: FinancialProductEnum.PEA, label: "PEA" },
  { key: FinancialProductEnum.COMPTE_TITRES_ORDINAIRE, label: "CTO" },
  { key: FinancialProductEnum.PER, label: "PER" },
  { key: FinancialProductEnum.EPARGNE_SALARIALE, label: "Épargne salariale" },
  { key: FinancialProductEnum.SCPI, label: "SCPI" },
  { key: FinancialProductEnum.PRIVATE_EQUITY, label: "Private equity" },
  { key: FinancialProductEnum.OTHER, label: "Autre" },
];

export function getFinancialProductLabel(key: FinancialProductEnum): string {
  const financialProductLabel = FinancialProducts.find(
    (product) => product.key === key.toUpperCase(),
  );

  if (!financialProductLabel) {
    return "Inconnu";
  }

  return financialProductLabel.label;
}

export function getFinancialProductKey(label: string): FinancialProductEnum | null {
  const financialProductKey = FinancialProducts.find((product) => product.label === label);

  if (!financialProductKey) {
    return null;
  }

  return financialProductKey.key;
}
