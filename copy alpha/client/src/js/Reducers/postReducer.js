import {
  FETCH_ALL_POST,
  CREAT_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_UPDATE,
} from "../constants/ActionsTypes";

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_POST:
      return { ...state, posts: payload };
    case DELETE_POST:
      return { ...state, posts: payload };
    case UPDATE_POST:
      return { ...state, posts: payload };
    case CREAT_POST:
      return { state, posts: payload };
    case LIKE_UPDATE:
      return { ...state, posts: payload };

    default:
      return state;
  }
};

export default postReducer;
