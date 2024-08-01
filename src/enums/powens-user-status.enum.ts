export enum PowensUserStatusEnum {
  // User is registered on Powens and got a powens ID and a unique access token
  REGISTERED = 'REGISTERED',

  // User is currently trying to make a new connection to their bank account (transition state)
  ATTEMPTING_NEW_CONNECTION = 'ATTEMPTING_NEW_CONNECTION',

  // On error in Powens administration console
  ON_ERROR = 'ON_ERROR',

  // Powens administration console deleted the user
  DELETED = 'DELETED',
}
