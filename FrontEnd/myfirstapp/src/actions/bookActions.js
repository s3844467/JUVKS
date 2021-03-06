import axios from "axios";
import {GET_BOOKS, GET_ALLBOOKS, GET_CATEGORIES, GET_ERRORS} from "./types";

export const getAllBooks = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/api/books/getAllBooks");
  dispatch({
    type: GET_ALLBOOKS,
    payload: res.data
  });
};

export const searchBooksTitle = (title) => async dispatch => {
    const res = await axios.get("http://localhost:8081/api/books/searchByTitle/"+title);
    dispatch({
      type: GET_BOOKS,
      payload: res.data
    });
    console.log(res.data);
};

export const searchBooksAuthor = (author) => async dispatch => {
  const res = await axios.get("http://localhost:8081/api/books/searchByAuthor/"+author);
  dispatch({
    type: GET_BOOKS,
    payload: res.data
  });
  console.log(res.data);
};

export const searchBooksIsbn = (isbn) => async dispatch => {
  const res = await axios.get("http://localhost:8081/api/books/searchByIsbn/"+isbn);
  dispatch({
    type: GET_BOOKS,
    payload: res.data
  });
  console.log(res.data);
};

export const searchAllBooks = (query) => async dispatch => {
  const res = await axios.get("http://localhost:8081/api/books/search/"+query);
  dispatch({
    type: GET_BOOKS,
    payload: res.data
  });
  console.log(res.data);
};

export const addBook = (book) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:8081/api/books/addBook", book);
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response
    });
  }
};
export const getAllCategories = () => async dispatch => {
  const res = await axios.get("http://localhost:8081/api/categories/getAllCategories");
  dispatch({
    type: GET_CATEGORIES,
    payload: res.data
  });
};