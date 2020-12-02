import { createStore } from "redux";
import reducer from "../reducers/cartReducer";

export const store = createStore(reducer);