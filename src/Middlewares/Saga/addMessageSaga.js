import { takeLatest } from "redux-saga/effects";
import { onAddMessageWithSaga } from "../../Store/Messages/actions";

function* addMessageSaga() {
  yield takeLatest("MESSAGES::ADD_MESSAGE_ACTION", onAddMessageWithSaga);
}

export default addMessageSaga;
