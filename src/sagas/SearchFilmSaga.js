import { put, call, takeEvery } from "redux-saga/effects";
import { GET_FILM_FAIL, GET_FILM_SUCCESS } from "../constants/GetFilms";
import { GET_SEARCHED_FILM_REQUEST } from "../constants/SearchFilm";

export function* getSearchFilms(action) {
  try {
    const data = yield call(
      fetch,
      `https://api.themoviedb.org/3/search/movie?api_key=8fad618fe12a6ec9b07ad6c2597f2e6f&language=ru&page=${
        action.payload.numPage
      }&query=${action.payload.nameFilm}`
    );
    const json = yield call([data, "json"]);

    yield put({ type: GET_FILM_SUCCESS, payload: json });
  } catch (e) {
    yield put({ type: GET_FILM_FAIL, payload: e });
  }
}

export function* watchGetSearchFilms() {
  yield takeEvery(GET_SEARCHED_FILM_REQUEST, getSearchFilms);
}
