import { FieldCreateNestedManyWithoutSectionToFieldsInput } from "./FieldCreateNestedManyWithoutSectionToFieldsInput";
import { SectionCreateNestedManyWithoutSectionToFieldsInput } from "./SectionCreateNestedManyWithoutSectionToFieldsInput";

export type SectionToFieldCreateInput = {
  field?: FieldCreateNestedManyWithoutSectionToFieldsInput;
  section?: SectionCreateNestedManyWithoutSectionToFieldsInput;
};
