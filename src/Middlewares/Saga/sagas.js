import { takeLatest } from "redux-saga/effects";
import { onAddMessageWithSaga } from "../../Store/Messages/actions";

function* mySaga() {
  yield takeLatest("MESSAGES::ADD_MESSAGE_ACTION", onAddMessageWithSaga);
}

export default mySaga;
