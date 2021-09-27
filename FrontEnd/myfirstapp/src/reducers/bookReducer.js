import { GET_BOOK, GET_BOOKS, GET_ALLBOOKS} from "../actions/types";

const initialState = [];


function bookReducer(books = initialState, action) {
    const {type, payload} = action;


    switch(type) {
        case GET_ALLBOOKS:
            return payload;

        case GET_BOOKS:
            return payload;

        case GET_BOOK:
            return payload;

        default:
            return books;
    }

};

export default bookReducer;