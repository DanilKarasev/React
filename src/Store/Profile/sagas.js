import { db } from "../../Services/firebase";
import { call, put, take, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { updateProfileInfoAction } from "./actions";
import firebase from "firebase";
import { AUTH } from "../Auth/constants";
import { CHANGE_PROFILE_INFO_ACTION } from "./constants";

function getPayloadFromSnapshot(snapshot) {
  const snapshotData = [];
  snapshot.forEach((data) => {
    snapshotData.push({ [data.key]: data.val() });
  });

  const profileInfo = snapshotData.reduce(function (result, item) {
    const key = Object.keys(item)[0];
    result[key] = item[key];
    return result;
  }, {});
  return { ...profileInfo };
}

function createEventChannel() {
  const listener = eventChannel((emit) => {
    const userId = firebase.auth().currentUser.uid;
    db.ref("profile")
      .child(userId)
      .on("value", (snapshot) => emit(getPayloadFromSnapshot(snapshot)));
    return () => db.ref("profile").child(userId).off(listener);
  });
  return listener;
}

function* initProfileTrackingSaga() {
  const updateChannel = createEventChannel();
  while (true) {
    const profileInfo = yield take(updateChannel);
    yield put(updateProfileInfoAction(profileInfo));
  }
}

function* updateUserDbSaga(payload) {
  const profileDatabase = (path, payload) => {
    const id = firebase.auth().currentUser.uid;
    firebase.database().ref("profile").child(id).child(path).set(payload);
  };
  console.log(payload.newUserName, payload.newPhone, payload.newBio);
  yield call(profileDatabase, "userName", payload.newUserName);
  yield call(profileDatabase, "phone", payload.newPhone);
  yield call(profileDatabase, "bio", payload.newBio);
}

export default function* profileRootSaga() {
  yield takeEvery(AUTH.GET_USER.RESOLVED, initProfileTrackingSaga);
  yield takeEvery(CHANGE_PROFILE_INFO_ACTION, updateUserDbSaga);
  yield takeEvery(CHANGE_PROFILE_INFO_ACTION, initProfileTrackingSaga);

  // yield fork(initProfileTrackingSaga);
}
