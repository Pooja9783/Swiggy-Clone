import { DATA_SUCCESS } from "./actionType";

const initData = {
  data: [],
};

export const dataReducer = (state = initData, action) => {
  switch (action.type) {
    case DATA_SUCCESS:
      return { ...state, data: [...action.payload] };

    default:
      return state;
  }
};
