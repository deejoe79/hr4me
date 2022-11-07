import { Cv } from "../cv/Cv";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  cvs?: Array<Cv>;
  firstName: string | null;
  id: string;
  lastLoginDate: Date;
  lastName: string | null;
  roles: JsonValue;
  stillAvailable: boolean;
  updatedAt: Date;
  username: string;
  userType?: "JobSeeker" | "Employer";
};
