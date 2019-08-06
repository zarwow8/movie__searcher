import { GET_SEARCHED_FILM_REQUEST } from "../constants/SearchFilm";

export const getSeachedFilm = nameFilm => ({
  type: GET_SEARCHED_FILM_REQUEST,
  payload: nameFilm
});
