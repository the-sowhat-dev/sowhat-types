export const AI_SUMMARY_TEMPLATE_VERSION = "1";

export interface AiSummaryTemplateResponse {
  version: typeof AI_SUMMARY_TEMPLATE_VERSION;
  synthese: {
    table_rows: [
      { intitule: "CURRENT_SITUATION"; valeur: number }, // note sur 5
      { intitule: "OPTIMISATION_LEVEL"; value: number }, // pourcentage
      { intitule: "PRODUCT"; valeur: string }, // <nom du produit recommandé> (<avantage principal en un mot>)
    ];
  };
  analyse: {
    titre: "Analyse";
    contenu: string;
  };
  recommandations: {
    titre: "Recommandations";
    pistes: { intitule: string; detail: string }[];
    produit_recommande: {
      nom: string;
      avantage_clef: string;
      fonctionnement: string;
      illustration_quantitative: string;
    };
  };
  concretement: {
    titre: "Concrètement";
    avantages: string;
    inconvenients: string;
    recommandations: string;
  };
}
