import { SectionUpdateManyWithoutCvsInput } from "./SectionUpdateManyWithoutCvsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CvUpdateInput = {
  sections?: SectionUpdateManyWithoutCvsInput;
  user?: UserWhereUniqueInput | null;
};
