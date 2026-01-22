export interface AiAdvisorSyntheseResponse {
  note: number; // note sur 5 (décimal autorisé)
  optimisationLevel: number; // pourcentage entier (1..99)
  product: string; // nom du produit recommandé
}
