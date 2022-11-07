import { SectionToFieldCreateNestedManyWithoutFieldItemsInput } from "./SectionToFieldCreateNestedManyWithoutFieldItemsInput";

export type FieldItemCreateInput = {
  fieldType: "SingleLineText" | "Number" | "MultiLineText";
  fieldValue?: string | null;
  sectionToFields?: SectionToFieldCreateNestedManyWithoutFieldItemsInput;
  title: string;
  validationType?: "Email" | "Web" | "Number" | null;
};
