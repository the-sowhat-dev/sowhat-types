export enum ProStatusEnum {
  ONBOARDING = "ONBOARDING", // Vient de créer son compte                -> Redirigé vers onboarding
  KYC_PENDING = "KYC_PENDING", // 	Onboarding fait, KYC non rempli         -> Profil + formulaire KYC uniquement
  KYC_SUBMITTED = "KYC_SUBMITTED", //	KYC rempli, en attente de validation    -> Profil uniquement (message "en cours de validation")
  VALIDATED = "VALIDATED", //	Validé manuellement, pas encore abonné	-> Profil + page de souscription Stripe
  ACTIVE = "ACTIVE", //	Abonné, paiement OK                     -> Tout le dashboard
  PAUSED = "PAUSED", //	Abonnement en pause                     -> Profil + gestion abonnement
  CANCELLED = "CANCELLED", //	Abonnement annulé                       -> Profil + page de réabonnement
}
