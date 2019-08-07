import {
  GET_DETAILS_FILM,
  GET_DETAILS_FILM_SUCCESS,
  GET_DETAILS_FILM_FAIL
} from "../constants/GetDetails";
import { put, call, takeEvery } from "redux-saga/effects";

export function* getDetails({ type, payload }) {
  try {
    const data = yield call(
      fetch,
      `https://api.themoviedb.org/3/movie/${payload}?api_key=8fad618fe12a6ec9b07ad6c2597f2e6f&language=ru`
    );

    const json = yield call([data, "json"]);

    yield put({ type: GET_DETAILS_FILM_SUCCESS, payload: json });
  } catch (e) {
    yield put({ type: GET_DETAILS_FILM_FAIL, payload: e });
  }
}

export function* watchGetDetailsFilm() {
  yield takeEvery(GET_DETAILS_FILM, getDetails);
}
