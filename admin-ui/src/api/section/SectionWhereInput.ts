import { IntFilter } from "../../util/IntFilter";
import { CvWhereUniqueInput } from "../cv/CvWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SectionToFieldListRelationFilter } from "../sectionToField/SectionToFieldListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SectionWhereInput = {
  columnCount?: IntFilter;
  cv?: CvWhereUniqueInput;
  id?: StringFilter;
  sectionToFields?: SectionToFieldListRelationFilter;
  sectionType?:
    | "Simple"
    | "TwoFields"
    | "ThreeFields"
    | "FourFields"
    | "FiveFields";
  title?: StringNullableFilter;
};
