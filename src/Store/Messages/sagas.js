import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { addMessageAction, updateMessagesAction } from "./actions";
import {
  ADD_MESSAGE_ACTION,
  DELETE_CHAT_MESSAGES_ACTION,
  GET_MESSAGES_ACTION,
} from "./constants";
import faker from "faker";
import { currentUserSelector } from "../Auth/selectors";
import { db } from "../../Services/firebase";

function* addMessageWithFirebase({ payload }) {
  const addMessageToDb = (chatId, messageAuthor, message, fakeMessageId) => {
    db.ref("messages")
      .child(chatId)
      .child(fakeMessageId)
      .set({
        message: message,
        author: messageAuthor,
        id: fakeMessageId,
        time: new Date().toTimeString().split(" ")[0],
      });
  };
  yield call(
    addMessageToDb,
    payload.chatId,
    payload.messageAuthor,
    payload.message,
    payload.fakeMessageId
  );
}

function* deleteMessagesWithFirebase({ payload }) {
  const deleteMessagesFromDb = (chatId) => {
    db.ref("messages").child(chatId).remove();
  };
  yield call(deleteMessagesFromDb, payload.id);
}

function* initMessagesTracking() {
  function getPayloadFromSnapshot(snapshot) {
    const snapshotMessages = [];

    snapshot.forEach((data) => {
      snapshotMessages.push({ [data.key]: data.val() });
    });

    const messages = snapshotMessages.reduce((result, item) => {
      const key = Object.keys(item)[0];
      result[key] = Object.values(item[key]);
      return result;
    }, {});

    return { messages };
  }

  function getPayload() {
    return new Promise((resolve) => {
      db.ref("messages").on("value", (snapshot) => {
        resolve(getPayloadFromSnapshot(snapshot));
      });
    });
  }
  const payload = yield call(getPayload);
  delay(1500);
  yield put(updateMessagesAction(payload));
}

function* addBotMessageWithSagaAction(action) {
  const { chatId, messageAuthor } = action.payload;
  const { displayName } = yield select(currentUserSelector);
  const fakeMessageId = Date.now();

  if (messageAuthor === displayName) {
    yield delay(1500);
    yield put(
      addMessageAction({
        chatId,
        messageAuthor: faker.name.findName(),
        message: faker.lorem.sentence(),
        fakeMessageId,
      })
    );
  }
}

export default function* messageRootSaga() {
  yield takeEvery(ADD_MESSAGE_ACTION, addMessageWithFirebase);
  yield takeEvery(DELETE_CHAT_MESSAGES_ACTION, deleteMessagesWithFirebase);
  yield takeEvery(
    [GET_MESSAGES_ACTION, DELETE_CHAT_MESSAGES_ACTION],
    initMessagesTracking
  );
  // yield takeLatest(ADD_MESSAGE_ACTION, addBotMessageWithSagaAction);
}
