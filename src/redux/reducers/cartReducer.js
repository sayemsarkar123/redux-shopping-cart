import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/cartAction';
import { store } from './../../store';

const initialState = {
  cart: [],
  store
}

const reducer = (state = initialState, { type, payload: {id, quantity} }) => {
  switch (type) {
    case ADD_TO_CART:
      const deleteDuplicate = state.cart.filter(product => product.id !== id);
      const product = state.store.find(product => product.id === id);
      return {
        ...state,
        cart: [...deleteDuplicate, { ...product, quantity }]
      };
    case DELETE_FROM_CART:
      const remainingProducts = state.cart.filter(product => product.id !== id);
      return {
        ...state,
        cart: remainingProducts
      }
    default:
      return state;
  }
}

export default reducer;