import { GET_CART_ITEMS, GET_ALL_CART_ITEMS } from "../actions/types";

const initialState = [];


function cartReducer(cartItems = initialState, action) {
    const {type, payload} = action;


    switch(type) {
        case GET_ALL_CART_ITEMS:
            return payload;

        case GET_CART_ITEMS:
            return payload;

        default:
            return cartItems;
    }

};

export default cartReducer;