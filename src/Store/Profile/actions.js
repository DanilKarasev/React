import {
  CHANGE_PROFILE_NAME_ACTION,
  TOGGLE_PROFILE_INFO_ACTION,
} from "./constants";

export const toggleProfileInfoAction = () => ({
  type: TOGGLE_PROFILE_INFO_ACTION,
});

export const changeProfileNameAction = (payload) => ({
  type: CHANGE_PROFILE_NAME_ACTION,
  payload,
});
