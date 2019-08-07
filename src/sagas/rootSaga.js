import { all } from "redux-saga/effects";
import { watchGetPopularFilms } from "./PopularFilmsSaga";
import { watchGetSearchFilms } from "./SearchFilmSaga";
import { watchGetDetailsFilm } from "./GetDetails";

export default function* rootSaga() {
  yield all([
    watchGetPopularFilms(),
    watchGetSearchFilms(),
    watchGetDetailsFilm()
  ]);
}
