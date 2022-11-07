import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SectionToFieldListRelationFilter } from "../sectionToField/SectionToFieldListRelationFilter";

export type FieldItemWhereInput = {
  fieldType?: "SingleLineText" | "Number" | "MultiLineText";
  fieldValue?: StringNullableFilter;
  id?: StringFilter;
  sectionToFields?: SectionToFieldListRelationFilter;
  title?: StringFilter;
  validationType?: "Email" | "Web" | "Number";
};
