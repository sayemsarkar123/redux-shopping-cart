import { ADD_TO_CART, DELETE_FROM_CART, SEARCH_PRODUCT } from '../actions/cartAction';
import { store } from './../../store';

const initialState = {
  cart: [],
  filterProducts: [],
  text: '',
  store
}

const reducer = (state = initialState, { type, payload: {id, quantity, text} = {} }) => {
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
      };
    case SEARCH_PRODUCT:
      const filterProducts = text ? state.store.filter(product => new RegExp(text, 'gi').test(product.name)) : [];
      return {
        ...state,
        filterProducts,
        text
      };
    default:
      return state;
  }
}

export default reducer;