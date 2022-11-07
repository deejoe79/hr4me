import { Field } from "@nestjs/graphql";
import { SectionToField } from "../sectionToField/SectionToField";

export type Field = {
  createdAt: Date;
  fieldType?: "SingleLineText" | "Number" | "MultiLineText";
  fieldValue: string | null;
  id: string;
  sectionToFields?: Array<SectionToField>;
  title: string;
  updatedAt: Date;
  validationType?: "Email" | "Web" | "Number" | null;
};
