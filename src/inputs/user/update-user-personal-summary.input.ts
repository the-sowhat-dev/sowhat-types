export interface UpdateUserPersonalSummaryInput {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  commercialEmail?: string | null;
  birthYear?: number | null;
  childrenNumber?: number | null;
  childrenBirthYears?: number[] | null;
  maritalStatus?: string | null;
  profession?: string | null;
  professionDetails?: string | null;
}
