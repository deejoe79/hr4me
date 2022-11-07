import { FieldItemListRelationFilter } from "../fieldItem/FieldItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";

export type SectionToFieldWhereInput = {
  field?: FieldItemListRelationFilter;
  id?: StringFilter;
  section?: SectionListRelationFilter;
};
