import { FieldWhereInput } from "./FieldWhereInput";
import { FieldOrderByInput } from "./FieldOrderByInput";

export type FieldFindManyArgs = {
  where?: FieldWhereInput;
  orderBy?: Array<FieldOrderByInput>;
  skip?: number;
  take?: number;
};
