import { CHANGE_PROFILE_NAME_ACTION } from "./constants";

const initialState = {
  showProfileInfo: true,
  profileName: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PROFILE_NAME_ACTION: {
      return {
        ...state,
        profileName: action.payload.profileName,
      };
    }
    default:
      return state;
  }
};
