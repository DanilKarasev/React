import { call, put, takeLatest } from "redux-saga/effects";
import { FETCHED_WORD_DATA } from "./constants";
import { DICTIONARY_API } from "../../API";
import {
  getWordDataErrorAction,
  getWordDataRequestAction,
  getWordDataSuccessAction,
} from "./actions";

function* getWordDataWithSaga(action) {
  const { inputWord } = action.payload;
  try {
    yield put(getWordDataRequestAction());
    const result = yield call(() => {
      return fetch(DICTIONARY_API + inputWord).then((result) => {
        if (result.status >= 200 && result.status < 300) {
          return result.json();
        } else {
          throw new Error();
        }
      });
    });
    yield put(getWordDataSuccessAction(result));
  } catch (error) {
    yield put(getWordDataErrorAction(error));
  }
}

function* fetchWordData() {
  yield takeLatest(FETCHED_WORD_DATA, getWordDataWithSaga);
}

export default fetchWordData;
