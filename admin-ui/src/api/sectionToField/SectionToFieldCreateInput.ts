import { FieldItemCreateNestedManyWithoutSectionToFieldsInput } from "./FieldItemCreateNestedManyWithoutSectionToFieldsInput";
import { SectionCreateNestedManyWithoutSectionToFieldsInput } from "./SectionCreateNestedManyWithoutSectionToFieldsInput";

export type SectionToFieldCreateInput = {
  field?: FieldItemCreateNestedManyWithoutSectionToFieldsInput;
  section?: SectionCreateNestedManyWithoutSectionToFieldsInput;
};
