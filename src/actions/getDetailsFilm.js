import { GET_DETAILS_FILM } from "../constants/GetDetails";

export const getDetailsFilm = id => ({
  type: GET_DETAILS_FILM,
  payload: id
});
