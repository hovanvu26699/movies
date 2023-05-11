import { GET_LIST_MOVIE_FEATURED } from "../actionType";

const initialState = {
  listMovie: [],
  detailMovie: {},
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_LIST_MOVIE_FEATURED.HANDLER:
      return {
        ...state,
        listMovie: payload,
      };

    case "MOVIE/getDetailMovie":
      return {
        ...state,
        detailMovie: payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
