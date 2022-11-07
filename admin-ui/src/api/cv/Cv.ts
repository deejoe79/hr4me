import { Section } from "../section/Section";
import { User } from "../user/User";

export type Cv = {
  createdAt: Date;
  id: string;
  sections?: Array<Section>;
  updatedAt: Date;
  user?: User | null;
};
