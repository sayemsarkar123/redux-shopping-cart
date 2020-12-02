export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const deleteFromCart = (payload) => ({ type: DELETE_FROM_CART, payload });