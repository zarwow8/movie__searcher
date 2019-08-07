import { combineReducers } from "redux";
import { DataFilms } from "./FilmsReducer";
import { SearchInfo } from "./SearchingFilmsReducer";

export default combineReducers({
  DataFilms,
  SearchInfo
});
