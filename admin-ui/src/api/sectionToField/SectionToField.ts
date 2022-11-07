import { FieldItem } from "../fieldItem/FieldItem";
import { Section } from "../section/Section";

export type SectionToField = {
  createdAt: Date;
  field?: Array<FieldItem>;
  id: string;
  section?: Array<Section>;
  updatedAt: Date;
};
