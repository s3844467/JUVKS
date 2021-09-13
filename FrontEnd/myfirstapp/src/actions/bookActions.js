import axios from "axios";
import {GET_ERRORS, GET_ALLBOOKS} from "./types";

export const getAllBooks = () => async dispatch => {
    const res = await axios.get("http://localhost:8081/api/books/getAllBooks");
    dispatch({
      type: GET_ALLBOOKS,
      payload: res.data
    });
  };