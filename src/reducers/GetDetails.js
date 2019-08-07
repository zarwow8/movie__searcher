import {
  GET_DETAILS_FILM,
  GET_DETAILS_FILM_SUCCESS,
  GET_DETAILS_FILM_FAIL
} from "../constants/GetDetails";

const initialState = {
  desc: {},
  isLoading: false
};

function DetailsFilm(state = initialState, action) {
  switch (action.type) {
    case GET_DETAILS_FILM:
      return { ...state, isLoading: true };
    case GET_DETAILS_FILM_SUCCESS:
      return { ...state, isLoading: false, desc: action.payload };
    case GET_DETAILS_FILM_FAIL:
      return { ...state, isLoading: false, error: action.payload.e.message };

    default:
      return state;
  }
}

export { DetailsFilm };
