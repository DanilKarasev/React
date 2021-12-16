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
    case AUTH.GET_USER.REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
      };
    case AUTH.LOGIN_WITH_EMAIL.SUCCESS:
    case AUTH.REGISTER_WITH_EMAIL.SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.credential.user.uid,
        message: null,
      };
    case AUTH.LOGIN_WITH_EMAIL.FAILURE:
    case AUTH.REGISTER_WITH_EMAIL.FAILURE:
    case AUTH.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false,
        message: action.error.message,
      };
    case AUTH.LOGOUT.SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        loggedIn: false,
      };
    case AUTH.GET_USER.RESOLVED:
      return {
        ...state,
        loading: false,
        loggedIn: action.user != null,
        user: action.user,
      };
    default:
      return state;
  }
};

export default authReducer;
