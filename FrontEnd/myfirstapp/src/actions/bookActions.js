import axios from "axios";
import {GET_BOOKS, GET_ALLBOOKS} from "./types";

export const getAllBooks = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/api/books/getAllBooks");
  dispatch({
    type: GET_ALLBOOKS,
    payload: res.data
  });
};

export const searchBooks = (title) => async dispatch => {
    const res = await axios.get("http://localhost:8081/api/books/searchByTitle/"+title);
    dispatch({
      type: GET_BOOKS,
      payload: res.data
    });
    console.log(res.data);
};