import { FieldItemWhereInput } from "./FieldItemWhereInput";
import { FieldItemOrderByInput } from "./FieldItemOrderByInput";

export type FieldItemFindManyArgs = {
  where?: FieldItemWhereInput;
  orderBy?: Array<FieldItemOrderByInput>;
  skip?: number;
  take?: number;
};
