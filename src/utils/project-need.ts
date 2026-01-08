import { ProjectNeedEnum } from "../enums/project-need.enum";

export interface ProjectNeed {
  key: ProjectNeedEnum;
  userLabel: string;
  proLabel: string;
}

export const ProjectNeeds: ProjectNeed[] = [
  {
    key: ProjectNeedEnum.WEALTH_ASSESSMENT,
    userLabel:
      "Je n'ai pas d'idée précise, j'aimerais recevoir des conseils et offres adaptés à ma situation.",
    proLabel:
      "Pas d'idée précise, souhaite recevoir des conseils et offres adaptés à sa situation.",
  },
  {
    key: ProjectNeedEnum.INVEST_IN_STOCK_EXCHANGE,
    userLabel: "Je compte me lancer en bourse.",
    proLabel: "Souhaite investir dans la bourse.",
  },
  {
    key: ProjectNeedEnum.PREPARE_RETIREMENT,
    userLabel: "Je pense à l'avenir et souhaite préparer ma retraite.",
    proLabel: "Souhaite préparer sa retraite.",
  },
  {
    key: ProjectNeedEnum.TAX_OPTIMIZATION,
    userLabel: "J'ai besoin de payer moins d'impôts, il faut que je défiscalise.",
    proLabel: "Souhaite optimiser ses impôts.",
  },
  {
    key: ProjectNeedEnum.OPTIMIZE_SAVINGS,
    userLabel:
      "Je suis dynamique et j'aimerais que mon épargne le soit également, qu'elle me rapporte plus.",
    proLabel: "Souhaite optimiser son épargne.",
  },
  {
    key: ProjectNeedEnum.PASS_ON_TO_DESCENDANTS,
    userLabel: "Je dois protéger mes enfants, il est temps de parler transmission.",
    proLabel: "Souhaite protéger ses enfants.",
  },
  {
    key: ProjectNeedEnum.DIVERSIFY_ASSETS,
    userLabel: "J'aimerais savoir comment diversifier mon patrimoine pour réduire les risques.",
    proLabel: "Souhaite diversifier son patrimoine pour réduire les risques.",
  },
  {
    key: ProjectNeedEnum.FUND_REAL_ECONOMY,
    userLabel: "Je veux participer à l'effort collectif par le financement de l'économie réelle.",
    proLabel: "Souhaite participer à l'effort collectif par le financement de l'économie réelle.",
  },
  {
    key: ProjectNeedEnum.SOCIAL_AND_ENVIRONMENTAL_INVESTMENTS,
    userLabel:
      "J'ai envie de donner du sens à mon argent et voudrais en savoir plus sur l'épargne responsable.",
    proLabel: "Souhaite participer à l'épargne responsable.",
  },
  {
    key: ProjectNeedEnum.SAFETY_SAVINGS,
    userLabel: "J'ai peur de l'imprévu et envisage de constituer une épargne de sécurité.",
    proLabel: "Souhaite constituer une épargne de sécurité.",
  },
];

export function getProjectNeedUserLabel(key: ProjectNeedEnum): string {
  const projectNeedLabel = ProjectNeeds.find((need) => need.key === key.toUpperCase());

  if (!projectNeedLabel) {
    return "Inconnu";
  }

  return projectNeedLabel.userLabel;
}

export function getProjectNeedProLabel(key: ProjectNeedEnum): string {
  const projectNeedLabel = ProjectNeeds.find((need) => need.key === key.toUpperCase());

  if (!projectNeedLabel) {
    return "Inconnu";
  }

  return projectNeedLabel.proLabel;
}

export function getProjectNeedKey(label: string): ProjectNeedEnum | null {
  let projectNeedKey = ProjectNeeds.find((need) => need.userLabel === label);

  if (projectNeedKey) {
    return projectNeedKey.key;
  }

  projectNeedKey = ProjectNeeds.find((need) => need.proLabel === label);

  if (!projectNeedKey) {
    return null;
  }

  return projectNeedKey.key;
}
