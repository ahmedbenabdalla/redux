import { Data } from "../../Data/Data";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIES,
  UPDATE_MOVIE,
} from "../Constants/actionTypes";

const initialState = {
  Data: Data,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        Data: state.Data.filter((m) => {
          return (
            m.Rating >= payload.rating &&
            m.Title.toLowerCase().includes(payload.title.toLowerCase())
          );
        }),
      };
    case ADD_MOVIE:
      return {
        ...state,
        Data: [...Data, payload],
      };

    case DELETE_MOVIE:
      return {
        ...state,
        Data: state.Data.filter((m) => m.id != payload),
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        Data: [...state.Data.filter((m) => m.id != payload.id), payload],
      };
    default:
      return state;
  }
};
