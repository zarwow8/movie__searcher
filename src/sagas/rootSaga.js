import { all } from "redux-saga/effects";
import { watchGetPopularFilms } from "./PopularFilmsSaga";
import { watchGetSearchFilms } from "./SearchFilmSaga";
export default function* rootSaga() {
  yield all([watchGetPopularFilms(), watchGetSearchFilms()]);
}
