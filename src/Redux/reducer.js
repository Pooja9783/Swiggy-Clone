import { DATA_SUCCESS, ADD_TO_CART } from "./actionType";

const initData = {
  data: [],
  cart: [],
};

export const dataReducer = (state = initData, action) => {
  switch (action.type) {
    case DATA_SUCCESS:
      return { ...state, data: [...action.payload] };

    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    default:
      return state;
  }
};
