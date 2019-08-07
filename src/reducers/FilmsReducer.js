import {
  GET_FILM_REQUEST,
  GET_FILM_SUCCESS,
  GET_FILM_FAIL
} from "../constants/GetFilms.js";
import { GET_POPULAR_FILM_REQUEST } from "../constants/PopularFilms";

const initialState = {
  isLoading: false,
  data: [],
  error: ""
};

function DataFilms(state = initialState, action) {
  switch (action.type) {
    case GET_FILM_REQUEST || GET_POPULAR_FILM_REQUEST:
      return { ...state, isLoading: true };
    case GET_FILM_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case GET_FILM_FAIL:
      return { ...state, isLoading: false, error: action.payload.e.message };

    default:
      return state;
  }
}

export { DataFilms };
