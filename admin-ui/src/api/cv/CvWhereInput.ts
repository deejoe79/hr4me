import { StringFilter } from "../../util/StringFilter";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CvWhereInput = {
  id?: StringFilter;
  sections?: SectionListRelationFilter;
  user?: UserWhereUniqueInput;
};
