import { LegalDocumentTypeEnum } from "../../enums/legal-document-type.enum";

export interface LegalDocumentResponse {
  type: LegalDocumentTypeEnum;
  content: string;
  version: string;
}
