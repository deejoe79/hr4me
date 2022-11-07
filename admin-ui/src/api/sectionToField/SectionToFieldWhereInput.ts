import { FieldListRelationFilter } from "../field/FieldListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";

export type SectionToFieldWhereInput = {
  field?: FieldListRelationFilter;
  id?: StringFilter;
  section?: SectionListRelationFilter;
};
