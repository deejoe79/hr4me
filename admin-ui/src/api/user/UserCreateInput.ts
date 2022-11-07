import { CvCreateNestedManyWithoutUsersInput } from "./CvCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  cvs?: CvCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastLoginDate: Date;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  stillAvailable: boolean;
  username: string;
  userType: "JobSeeker" | "Employer";
};
