export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const deleteFromCart = (payload) => ({ type: DELETE_FROM_CART, payload });
export const searchProduct = (payload) => ({ type: SEARCH_PRODUCT, payload });