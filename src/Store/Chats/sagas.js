import { db } from "../../Services/firebase";
import { call, put, takeEvery } from "redux-saga/effects";
import { updateChatAction } from "./actions";
import {
  ADD_CHAT_ACTION,
  DELETE_CHAT_ACTION,
  GET_CHATS_ACTION,
} from "./constants";

function* addChatSaga({ payload }) {
  const addChatToDb = (id, name) => {
    db.ref("chats").child(id).set({
      id: id,
      name: name,
      avatar: "",
    });
  };
  yield call(addChatToDb, payload.newChatId, payload.newChatName);
}

function* deleteChatSaga({ payload }) {
  const deleteChatFromDb = (id) => {
    db.ref("chats").child(id).remove();
  };
  yield call(deleteChatFromDb, payload.id);
}

function* initChatsTracking() {
  function getPayloadFromSnapshot(snapshot) {
    const snapshotChats = [];

    snapshot.forEach((data) => {
      snapshotChats.push({ [data.key]: data.val() });
    });

    const chats = snapshotChats.reduce(function (result, item) {
      const key = Object.keys(item)[0];
      result[key] = item[key];
      return result;
    }, {});

    return { chats };
  }

  function getPayload() {
    return new Promise((resolve) => {
      db.ref("chats").on("value", (snapshot) => {
        resolve(getPayloadFromSnapshot(snapshot));
      });
    });
  }
  const payload = yield call(getPayload);
  yield put(updateChatAction(payload));
}

export default function* chatsRootSaga() {
  yield takeEvery(DELETE_CHAT_ACTION, deleteChatSaga);
  yield takeEvery(ADD_CHAT_ACTION, addChatSaga);
  yield takeEvery(
    [ADD_CHAT_ACTION, DELETE_CHAT_ACTION, GET_CHATS_ACTION],
    initChatsTracking
  );
}
