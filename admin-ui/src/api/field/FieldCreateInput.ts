import { SectionToFieldCreateNestedManyWithoutFieldsInput } from "./SectionToFieldCreateNestedManyWithoutFieldsInput";

export type FieldCreateInput = {
  fieldType: "SingleLineText" | "Number" | "MultiLineText";
  fieldValue?: string | null;
  sectionToFields?: SectionToFieldCreateNestedManyWithoutFieldsInput;
  title: string;
  validationType?: "Email" | "Web" | "Number" | null;
};
