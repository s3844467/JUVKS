import axios from "axios";
import {GET_BOOK, GET_BOOKS, GET_ALLBOOKS, GET_CATEGORIES, GET_ERRORS, GET_USERS} from "./types";

export const getValidatedUsers = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/api/users/getUsersByStatus/validated");
  dispatch({
    type: GET_USERS,
    payload: res.data
  });
};

export const getBLockedUsers = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/users/getUsersByStatus/blocked");
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  };

  export const getPendingUsers = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/users/getUsersByStatus/pending");
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  };

  export const blockUser = (userId) => async dispatch => {
    const res = await axios.post("http://localhost:8080/api/users/blockUser/" + userId);
    dispatch({
      type: GET_ERRORS,
      payload: res.data
    });
  };

  export const unblockUser = (userId) => async dispatch => {
    const res = await axios.post("http://localhost:8080/api/users/unblockUser/" + userId);
    dispatch({
      type: GET_ERRORS,
      payload: res.data
    });
  };

  export const validateUser = (userId) => async dispatch => {
    const res = await axios.post("http://localhost:8080/api/users/validateUser/" + userId);
    dispatch({
      type: GET_ERRORS,
      payload: res.data
    });
  };
