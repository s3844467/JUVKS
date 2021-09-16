import {GET_CATEGORIES} from "../actions/types";

const initialState = [];


function categoryReducer(category = initialState, action) {
    const {type, payload} = action;


    switch(type) {
    
        case GET_CATEGORIES:
            return payload;
        default:
            return category;
    }

};

export default categoryReducer;