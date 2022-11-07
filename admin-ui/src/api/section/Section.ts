import { Cv } from "../cv/Cv";
import { SectionToField } from "../sectionToField/SectionToField";

export type Section = {
  columnCount: number;
  createdAt: Date;
  cv?: Cv | null;
  id: string;
  sectionToFields?: Array<SectionToField>;
  sectionType?:
    | "Simple"
    | "TwoFields"
    | "ThreeFields"
    | "FourFields"
    | "FiveFields"
    | null;
  title: string | null;
  updatedAt: Date;
};
