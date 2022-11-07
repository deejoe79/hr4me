import { CvWhereUniqueInput } from "../cv/CvWhereUniqueInput";
import { SectionToFieldCreateNestedManyWithoutSectionsInput } from "./SectionToFieldCreateNestedManyWithoutSectionsInput";

export type SectionCreateInput = {
  columnCount: number;
  cv?: CvWhereUniqueInput | null;
  sectionToFields?: SectionToFieldCreateNestedManyWithoutSectionsInput;
  sectionType?:
    | "Simple"
    | "TwoFields"
    | "ThreeFields"
    | "FourFields"
    | "FiveFields"
    | null;
  title?: string | null;
};
