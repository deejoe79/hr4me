import { Field as TField } from "../api/field/Field";

export const FIELD_TITLE_FIELD = "title";

export const FieldTitle = (record: TField): string => {
  return record.title || record.id;
};
