import {GET_REVIEW} from "../actions/types";

const initialState = [];

function userReviewReducer(review = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_REVIEW:
            return payload;

        default:
            return review;
    }

};

export default userReviewReducer;