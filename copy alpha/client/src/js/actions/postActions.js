import axios from "axios";
import {
  FETCH_ALL_POST,
  CREAT_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_UPDATE,
} from "../constants/ActionsTypes";

//FETCH_ALL_POST
export const fetch_all_post = () => async (dispatch) => {
  try {
    const res = await axios.get("/posts/getposts");
    console.log(res.data);
    dispatch({
      type: FETCH_ALL_POST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
//CREAT_POST

export const creat_post = (postData) => async (dispatch) => {
  try {
    const res = await axios.post("/posts/creatpost", postData);
    dispatch({
      type: CREAT_POST,
      payload: res.data, //({ msg: "post createD", newPost })
    });
    dispatch(fetch_all_post());
  } catch (error) {
    console.log("error", error);
  }
};

export const editPosts = (_id, postData) => async (dispatch) => {
  try {
    const res = await axios.put(`/posts/editPosts/${_id}`, postData);

    dispatch({
      type: UPDATE_POST,
      payload: res.data, //({ msg: "post createD", newPost })
    });
    dispatch(fetch_all_post());
  } catch (error) {
    console.log("error", error);
  }
};

export const likeupdate = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/posts/likeupdatePost/${id}`);

    dispatch({
      type: LIKE_UPDATE,
      payload: res.data, //({ msg: "post createD", newPost })
    });
    dispatch(fetch_all_post());
  } catch (error) {
    console.log("error", error);
  }
};

export const deletepp = (id) => async (dispatch) => {
  try {
    //  console.log(id, userid);
    const res = await axios.delete(`/posts/deletePosts/${id}`);
    dispatch(fetch_all_post());

    dispatch({
      type: DELETE_POST,
      payload: res.data, //({ msg: "post createD", newPost })
    });
  } catch (error) {
    console.log("error", error);
  }
};
