import { FieldItemUpdateManyWithoutSectionToFieldsInput } from "./FieldItemUpdateManyWithoutSectionToFieldsInput";
import { SectionUpdateManyWithoutSectionToFieldsInput } from "./SectionUpdateManyWithoutSectionToFieldsInput";

export type SectionToFieldUpdateInput = {
  field?: FieldItemUpdateManyWithoutSectionToFieldsInput;
  section?: SectionUpdateManyWithoutSectionToFieldsInput;
};
