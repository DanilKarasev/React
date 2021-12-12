import { CHANGE_PROFILE_NAME_ACTION } from "./constants";

export const changeProfileNameAction = (payload) => ({
  type: CHANGE_PROFILE_NAME_ACTION,
  payload,
});
