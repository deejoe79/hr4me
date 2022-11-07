import { SectionToFieldUpdateManyWithoutFieldsInput } from "./SectionToFieldUpdateManyWithoutFieldsInput";

export type FieldUpdateInput = {
  fieldType?: "SingleLineText" | "Number" | "MultiLineText";
  fieldValue?: string | null;
  sectionToFields?: SectionToFieldUpdateManyWithoutFieldsInput;
  title?: string;
  validationType?: "Email" | "Web" | "Number" | null;
};
