import { GET_POPULAR_FILM_REQUEST } from "../constants/PopularFilms";

export const getPopularFilms = currentPage => ({
  type: GET_POPULAR_FILM_REQUEST,
  payload: currentPage
});
