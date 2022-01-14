import { UPDATE_PROFILE_INFO_ACTION } from "./constants";

const initialState = {
  profileInfoLoading: true,
  profileInfo: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_INFO_ACTION: {
      return {
        profileInfoLoading: false,
        profileInfo: action.payload,
      };
    }
    default:
      return state;
  }
};
