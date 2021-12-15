import { AUTH } from "./constants";

const initialState = {
  loading: false,
  loggedIn: false,
  userId: null,
  message: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN_WITH_EMAIL.REQUEST:
    case AUTH.REGISTER_WITH_EMAIL.REQUEST:
    case AUTH.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
      };
    case AUTH.LOGIN_WITH_EMAIL.SUCCESS:
    case AUTH.REGISTER_WITH_EMAIL.SUCCESS:
    case AUTH.UPDATE_USER_NAME.SUCCESS:
      return {
        loading: false,
        loggedIn: true,
        userId: action.credential.user.uid,
        message: null,
      };
    case AUTH.LOGIN_WITH_EMAIL.FAILURE:
    case AUTH.REGISTER_WITH_EMAIL.FAILURE:
    case AUTH.LOGOUT.FAILURE:
    case AUTH.UPDATE_USER_NAME.FAILURE:
      return {
        ...state,
        loading: false,
        message: action.error.message,
      };
    case AUTH.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false,
      };
    case AUTH.SYNC_USER:
      return {
        ...state,
        loggedIn: action.user != null,
        user: action.user,
      };
    default:
      return state;
  }
};

export default authReducer;
