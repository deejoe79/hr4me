import { SectionToField as TSectionToField } from "../api/sectionToField/SectionToField";

export const SECTIONTOFIELD_TITLE_FIELD = "id";

export const SectionToFieldTitle = (record: TSectionToField): string => {
  return record.id || record.id;
};
