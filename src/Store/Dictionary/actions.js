import {
  GET_WORD_DATA_REQUEST,
  GET_WORD_DATA_SUCCESS,
  GET_WORD_DATA_ERROR,
  FETCHED_WORD_DATA,
} from "./constants";
import { put, call } from "redux-saga/effects";
import { DICTIONARY_API } from "../../API";

export const getWordDataRequestAction = () => ({
  type: GET_WORD_DATA_REQUEST,
});

export const getWordDataSuccessAction = (result) => ({
  type: GET_WORD_DATA_SUCCESS,
  wordData: result[0],
});

export const getWordDataErrorAction = (error) => ({
  type: GET_WORD_DATA_ERROR,
  error: error.message,
});

export const fetchWordData = (payload) => ({
  type: FETCHED_WORD_DATA,
  payload,
});

export function* getWordDataWithSaga(action) {
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
