import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastLoginDate?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  stillAvailable?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  userType?: SortOrder;
};
