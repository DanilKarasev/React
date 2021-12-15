import {
  loginWithEmailSuccess,
  loginWithEmailFailure,
  registerWithEmailSuccess,
  registerWithEmailFailure,
  syncUser,
  logoutSuccess,
  logoutFailure,
} from "./actions";
import { call, put, takeEvery, fork } from "redux-saga/effects";
import { AUTH } from "./constants";
import firebase from "firebase";

function* loginWithEmailSaga(payload) {
  try {
    const auth = firebase.auth();
    const result = yield call(
      [auth, auth.signInWithEmailAndPassword],
      payload.email,
      payload.password
    );
    yield put(loginWithEmailSuccess(result));
  } catch (error) {
    yield put(loginWithEmailFailure(error));
  }
}

function* registerWithEmailSaga(payload) {
  try {
    const result = yield call(
      [firebase.auth(), firebase.auth().createUserWithEmailAndPassword],
      payload.email,
      payload.password
    );
    yield call(
      firebase.auth().onAuthStateChanged(() => {
        firebase.auth().currentUser.updateProfile({
          displayName: payload.userName,
        });
      })
    );
    yield put(registerWithEmailSuccess(result));
  } catch (error) {
    yield put(registerWithEmailFailure(error));
  }
}

function* logoutSaga() {
  try {
    const data = yield call([firebase.auth(), firebase.auth().signOut]);
    yield put(logoutSuccess(data));
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function* syncUserSaga() {
  function onAuthStateChanged() {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          return null;
        }
      });
    });
  }
  const user = yield call(onAuthStateChanged);

  if (user) {
    yield put(syncUser(user));
  } else {
    yield put(syncUser(null));
  }
}

export default function* authRootSaga() {
  yield fork(syncUserSaga);
  yield takeEvery(AUTH.LOGIN_WITH_EMAIL.REQUEST, loginWithEmailSaga);
  yield takeEvery(AUTH.REGISTER_WITH_EMAIL.REQUEST, registerWithEmailSaga);
  yield takeEvery(AUTH.LOGOUT.REQUEST, logoutSaga);
}
