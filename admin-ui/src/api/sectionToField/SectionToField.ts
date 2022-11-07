import { Field } from "../field/Field";
import { Section } from "../section/Section";

export type SectionToField = {
  createdAt: Date;
  field?: Array<Field>;
  id: string;
  section?: Array<Section>;
  updatedAt: Date;
};
