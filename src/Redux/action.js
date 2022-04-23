import {
  DATA_SUCCESS,
  ADD_TO_CART,
  RMV_DATA,
  INCREMENT_DATA,
  DEL_DATA,
} from "./actionType";
const axios = require("axios");

export const dataSucess = (payload) => ({
  type: DATA_SUCCESS,
  payload: payload,
});

export const addToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});

export const removeData = (item) => {
  return {
    type: RMV_DATA,
    payload: item,
  };
};

export const incrementData = (value) => {
  return {
    type: INCREMENT_DATA,
    payload: value,
  };
};

export const deleteData = (e) => {
  return {
    type: DEL_DATA,
    payload: e,
  };
};

export const getData = (dispatch) => {
  axios
    .get("https://pooja9783.github.io/swiggy-json-data-api/db.json")
    .then((res) => {
      console.log(res.data.data);
      dispatch(dataSucess(res.data.data));
    })
    .catch((err) => console.log(err));
};
