import { SectionToFieldUpdateManyWithoutFieldItemsInput } from "./SectionToFieldUpdateManyWithoutFieldItemsInput";

export type FieldItemUpdateInput = {
  fieldType?: "SingleLineText" | "Number" | "MultiLineText";
  fieldValue?: string | null;
  sectionToFields?: SectionToFieldUpdateManyWithoutFieldItemsInput;
  title?: string;
  validationType?: "Email" | "Web" | "Number" | null;
};
