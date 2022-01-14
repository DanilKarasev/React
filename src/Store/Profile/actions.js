import {
  CHANGE_PROFILE_INFO_ACTION,
  UPDATE_PROFILE_INFO_ACTION,
} from "./constants";

export const changeProfileInfoAction = (newUserName, newPhone, newBio) => ({
  type: CHANGE_PROFILE_INFO_ACTION,
  newUserName,
  newPhone,
  newBio,
});

export const updateProfileInfoAction = (payload) => ({
  type: UPDATE_PROFILE_INFO_ACTION,
  payload,
});
