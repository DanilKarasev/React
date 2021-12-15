import { delay, put, select, takeLatest } from "redux-saga/effects";
import { profileSelector } from "../Profile/selectors";
import { addMessageAction } from "./actions";
import { ADD_MESSAGE_ACTION } from "./constants";
import faker from "faker";

function* onAddMessageWithSagaAction(action) {
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

function* addMessageWithSaga() {
  yield takeLatest(ADD_MESSAGE_ACTION, onAddMessageWithSagaAction);
}

export default addMessageWithSaga;
