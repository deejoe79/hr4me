import { SectionCreateNestedManyWithoutCvsInput } from "./SectionCreateNestedManyWithoutCvsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CvCreateInput = {
  sections?: SectionCreateNestedManyWithoutCvsInput;
  user?: UserWhereUniqueInput | null;
};
