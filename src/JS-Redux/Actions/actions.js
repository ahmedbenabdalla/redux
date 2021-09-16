import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIES,
  UPDATE_MOVIE,
} from "../Constants/actionTypes";

export const searchMovies = (title, rating) => {
  return {
    type: SEARCH_MOVIES,
    payload: { title, rating },
  };
};

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    payload: movie,
  };
};
export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: id,
  };
};
export const updateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE,
    payload: movie,
  };
};
