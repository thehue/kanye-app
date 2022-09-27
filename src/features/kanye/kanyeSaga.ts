import { call, put, takeLatest } from "@redux-saga/core/effects";
import { getKanyeQuote } from "../../api";
import { Data, loadFail, loadSuccess, load } from "./kanyeSlice";

function* handleDataLoad() {
  try {
    const data: Data = yield call(getKanyeQuote);
    yield put(loadSuccess(data));
  } catch (error) {
    if (error instanceof Error) {
      yield put(loadFail(error));
    } else {
      yield put(loadFail(new Error("API 오류")));
    }
  }
}

export function* watchData() {
  yield takeLatest(load, handleDataLoad);
}
