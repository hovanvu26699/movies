import { GET_LIST_MOVIE_FEATURED } from "./actionType";

export const getListFeaturedMovieHandle = (data) => {
  return {
    type: GET_LIST_MOVIE_FEATURED.HANDLER,
    payload: data,
  };
};

export const getDetailMovie = (data) => {
  return {
    type: "MOVIE/getDetailMovie",
    payload: data,
  };
};
