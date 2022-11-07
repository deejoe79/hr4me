import { FieldItem as TFieldItem } from "../api/fieldItem/FieldItem";

export const FIELDITEM_TITLE_FIELD = "title";

export const FieldItemTitle = (record: TFieldItem): string => {
  return record.title || record.id;
};
