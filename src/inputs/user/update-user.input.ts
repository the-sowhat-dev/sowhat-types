export interface UpdateUserInput {
  hasCompletedOnboarding?: boolean;
  expoToken?: string | null; // null if the user wants to unregister the notification
}
