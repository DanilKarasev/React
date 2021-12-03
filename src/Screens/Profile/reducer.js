import { TOGGLE_PROFILE_INFO_ACTION } from "../../Store/Profile/constants";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const FadeIn = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`;

const initialState = {
  showProfileInfo: true,
  profileInfo: <FadeIn className={"Animation"}>Some profile info</FadeIn>,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_INFO_ACTION: {
      return {
        ...state,
        showProfileInfo: !state.showProfileInfo,
      };
    }
    default:
      return state;
  }
};
