import { takeEvery } from "redux-saga/effects";
import { getWordDataWithSaga } from "../../Store/Dictionary/actions";
import { FETCHED_WORD_DATA } from "../../Store/Dictionary/constants";

function* watchFetchWordData() {
  yield takeEvery(FETCHED_WORD_DATA, getWordDataWithSaga);
}

export default watchFetchWordData;
