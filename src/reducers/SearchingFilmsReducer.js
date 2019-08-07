const initialState = {
  nameFilm: "",
  searchingQuery: false
};

function SearchInfo(state = initialState, action) {
  switch (action.type) {
    case "GET_SEARCHED_FILM":
      return {
        ...state,
        searchingQuery: true,
        nameFilm: action.payload
      };

    default:
      return state;
  }
}

export { SearchInfo };
