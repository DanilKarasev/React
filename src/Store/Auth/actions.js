import { AUTH } from "./constants";

export const loginWithEmail = (email, password) => ({
  type: AUTH.LOGIN_WITH_EMAIL.REQUEST,
  email,
  password,
});

export const loginWithEmailSuccess = (credential) => ({
  type: AUTH.LOGIN_WITH_EMAIL.SUCCESS,
  credential,
});

export const loginWithEmailFailure = (error) => ({
  type: AUTH.LOGIN_WITH_EMAIL.FAILURE,
  error,
});

export const registerWithEmail = (userName, email, password) => ({
  type: AUTH.REGISTER_WITH_EMAIL.REQUEST,
  userName,
  email,
  password,
});

export const registerWithEmailSuccess = (credential) => ({
  type: AUTH.REGISTER_WITH_EMAIL.SUCCESS,
  credential,
});

export const registerWithEmailFailure = (error) => ({
  type: AUTH.REGISTER_WITH_EMAIL.FAILURE,
  error,
});

export const logout = () => ({
  type: AUTH.LOGOUT.REQUEST,
});

export const logoutSuccess = () => ({
  type: AUTH.LOGOUT.SUCCESS,
});

export const logoutFailure = (error) => ({
  type: AUTH.LOGOUT.FAILURE,
  error,
});

export const getUser = () => ({
  type: AUTH.GET_USER.REQUEST,
});

export const getUserResolved = (user) => ({
  type: AUTH.GET_USER.RESOLVED,
  user,
});
