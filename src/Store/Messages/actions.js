import { ADD_MESSAGE_ACTION, DELETE_CHAT_MESSAGES_ACTION } from "./constants";
import { delay, put, select } from "redux-saga/effects";
import { profileSelector } from "../Profile/selectors";
import faker from "faker";

export const addMessageAction = (payload) => ({
  type: ADD_MESSAGE_ACTION,
  payload,
});
export const deleteMessageListAction = (payload) => ({
  type: DELETE_CHAT_MESSAGES_ACTION,
  payload,
});

export function* onAddMessageWithSaga(action) {
  const { chatId, messageAuthor } = action.payload;
  const { profileName } = yield select(profileSelector);

  if (messageAuthor === "ME" || messageAuthor === profileName) {
    yield delay(1500);
    yield put(
      addMessageAction({
        chatId,
        messageAuthor: faker.name.findName(),
        message: faker.lorem.sentence(),
      })
    );
  }
}
