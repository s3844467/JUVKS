import axios from "axios";
import {GET_CART_ITEMS, GET_ALL_CART_ITEMS, GET_ERRORS, GET_CART_TOTAL} from "./types";

export const getAllCartItems = () => async dispatch => {
    const res = await axios.get("http://localhost:8083/api/carts/getAllCartItems");
    dispatch({
        type: GET_ALL_CART_ITEMS,
        payload: res.data
    });
};

export const searchUserId = (userId) => async dispatch => {
    const res = await axios.get("http://localhost:8083/api/carts/getCartItemsByUser/"+userId);
    dispatch({
        type: GET_CART_ITEMS,
        payload: res.data
    });
    console.log(res.data);
};

export const addCartItem = (cartItem) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8083/api/carts/addCartItem", cartItem);
    } catch (err) {
        dispatch({
        type: GET_ERRORS,
        payload: err.response
        });
    }
};

export const updateCartItemQuantity = (newQuantityValue, cartItemId) => async dispatch => {
    try {
      await axios.patch("http://localhost:8083/api/carts/updateCartItem/"+cartItemId+"-"+newQuantityValue);
    } catch(err) {}
};

export const deleteCartItem = (cartItemId) => async dispatch => {
    try {
      await axios.delete("http://localhost:8083/api/carts/deleteCartItem/"+cartItemId);
    } catch(err) {}
};

export const getCartTotal = (userId) => async dispatch => {
    const res = await axios.get("http://localhost:8083/api/carts/getCartTotal/"+userId);
    dispatch({
        type: GET_CART_TOTAL,
        payload: res.data
    });
    console.log(res.data);
};