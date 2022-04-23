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

export const deleteData = (data) => {
  return {
    type: DEL_DATA,
    payload: data,
  };
};

let url = "http://localhost:5000/data";
export const getData = (dispatch) => {
  axios
    .get(url)
    .then((res) => {
      // console.log(res.data);
      dispatch(dataSucess(res.data));
    })
    .catch((err) => console.log(err));
};
