import { Cv as TCv } from "../api/cv/Cv";

export const CV_TITLE_FIELD = "id";

export const CvTitle = (record: TCv): string => {
  return record.id || record.id;
};
