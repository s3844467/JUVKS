import {GET_REVIEWS, GET_ALLREVIEWS} from "../actions/types";

const initialState = [];

function reviewReducer(reviews = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_ALLREVIEWS:
            return payload;

        case GET_REVIEWS:
            return payload;

        default:
            return reviews;
    }

};

export default reviewReducer;