export enum UserStatusEnum {
  // Anonymous, does not have a real account on sowhat (= a simple co-owner with no Clerk ID)
  ANONYMOUS = 'ANONYMOUS',

  // Real user, got a Clerk account.
  // note: Being registered on clerk first is mandatory to be registered on Powens.
  REGISTERED = 'REGISTERED',

  // The user is deleted and can't be used anymore
  DELETED = 'DELETED',

  // The user's email and/or phone are black-listed from the sowhat app
  BLACK_LISTED = 'BLACK_LISTED',
}
