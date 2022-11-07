import { CvWhereUniqueInput } from "../cv/CvWhereUniqueInput";
import { SectionToFieldUpdateManyWithoutSectionsInput } from "./SectionToFieldUpdateManyWithoutSectionsInput";

export type SectionUpdateInput = {
  columnCount?: number;
  cv?: CvWhereUniqueInput | null;
  sectionToFields?: SectionToFieldUpdateManyWithoutSectionsInput;
  sectionType?:
    | "Simple"
    | "TwoFields"
    | "ThreeFields"
    | "FourFields"
    | "FiveFields"
    | null;
  title?: string | null;
};
