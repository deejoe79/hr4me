import { CvUpdateManyWithoutUsersInput } from "./CvUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  cvs?: CvUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastLoginDate?: Date;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  stillAvailable?: boolean;
  username?: string;
  userType?: "JobSeeker" | "Employer";
};
