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
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        return { ...state, cart: [...state.cart, temp] };
      }

    default:
      return state;
  }
};
