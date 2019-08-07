import { combineReducers } from "redux";
import { DataFilms } from "./FilmsReducer";
import { SearchInfo } from "./SearchingFilmsReducer";
import { DetailsFilm } from "./GetDetails";

export default combineReducers({
  DataFilms,
  SearchInfo,
  DetailsFilm
});
