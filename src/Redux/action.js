import { DATA_SUCCESS } from "./actionType";
const axios = require("axios");

export const dataSucess = (payload) => ({
  type: DATA_SUCCESS,
  payload: payload,
});

export const getData = (dispatch) => {
  axios
    .get("http://localhost:5000/data")
    .then((res) => {
      // console.log(res.data);
      dispatch(dataSucess(res.data));
    })
    .catch((err) => console.log(err));
};
