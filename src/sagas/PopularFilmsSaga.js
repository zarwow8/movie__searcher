import { put, call, takeEvery } from "redux-saga/effects";
import { GET_FILM_FAIL, GET_FILM_SUCCESS } from "../constants/GetFilms";
import { GET_POPULAR_FILM_REQUEST } from "../constants/PopularFilms";

export function* getPopularFilms({ type, payload }) {
  try {
    const data = yield call(
      fetch,
      `https://api.themoviedb.org/3/movie/popular?api_key=8fad618fe12a6ec9b07ad6c2597f2e6f&language=ru&page=${payload}`
    );
    const json = yield call([data, "json"]);
    yield put({ type: GET_FILM_SUCCESS, payload: json });
  } catch (e) {
    yield put({ type: GET_FILM_FAIL, payload: e });
  }
}

export function* watchGetPopularFilms() {
  yield takeEvery(GET_POPULAR_FILM_REQUEST, getPopularFilms);
}
