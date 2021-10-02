import axios from "axios";
import {GET_ALLREVIEWS, GET_REVIEWS, GET_REVIEW, GET_ERRORS} from "./types";

export const getAllReviews = () => async dispatch => {
    const res = await axios.get("http://localhost:8082/api/reviews/getAllReviews");
    dispatch({
        type: GET_ALLREVIEWS,
        payload: res.data
    });
};

export const searchReviewsBookId = (bookId) => async dispatch => {
    const res = await axios.get("http://localhost:8082/api/reviews/getReviewsByBookId/"+bookId);
    dispatch({
      type: GET_REVIEWS,
      payload: res.data
    });
    console.log(res.data);
};

export const searchReviewUsernameBookId = (bookId, username) => async dispatch => {
    const res = await axios.get("http://localhost:8082/api/reviews/getReviewsByBookId/"+bookId+"-"+username);
    dispatch({
      type: GET_REVIEW,
      payload: res.data
    });
    console.log(res.data);
};

export const addReview = (review) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8082/api/reviews/addReview", review);
    } catch (err) {
        dispatch({
        type: GET_ERRORS,
        payload: err.response
        });
    }
};