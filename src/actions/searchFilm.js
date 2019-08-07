import {
  GET_SEARCHED_FILM_REQUEST,
  GET_SEARCHED_FILM
} from "../constants/SearchFilm";

export const getSeachedFilm = (nameFilm, numPage) => ({
  type: GET_SEARCHED_FILM_REQUEST,
  payload: { nameFilm, numPage }
});
export const getNameSearchFilm = name => ({
  type: GET_SEARCHED_FILM,
  payload: name
});
