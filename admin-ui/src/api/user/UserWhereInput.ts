import { CvListRelationFilter } from "../cv/CvListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type UserWhereInput = {
  cvs?: CvListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastLoginDate?: DateTimeFilter;
  lastName?: StringNullableFilter;
  stillAvailable?: BooleanFilter;
  username?: StringFilter;
  userType?: "JobSeeker" | "Employer";
};
