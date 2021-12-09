import {
  CHANGE_PROFILE_NAME_ACTION,
  TOGGLE_PROFILE_INFO_ACTION,
} from "./constants";

const initialState = {
  showProfileInfo: true,
  registerMessage: "Please register first",
  profileName: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_INFO_ACTION: {
      return {
        ...state,
        showProfileInfo: !state.showProfileInfo,
      };
    }
    case CHANGE_PROFILE_NAME_ACTION: {
      return {
        ...state,
        registerMessage: "",
        profileName: action.payload.profileName,
      };
    }
    default:
      return state;
  }
};
