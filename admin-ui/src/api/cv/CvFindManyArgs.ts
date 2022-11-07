import { CvWhereInput } from "./CvWhereInput";
import { CvOrderByInput } from "./CvOrderByInput";

export type CvFindManyArgs = {
  where?: CvWhereInput;
  orderBy?: Array<CvOrderByInput>;
  skip?: number;
  take?: number;
};
