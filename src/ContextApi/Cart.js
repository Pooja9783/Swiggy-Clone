import { useState, createContext, useEffect } from "react";
const axios = require("axios");
export const CartContext = createContext();

export const CartContextProvider = () => {
  const [value, setValue] = useState([]);
  const addToCart = (payload) => {};

  return <CartContextProvider value></CartContextProvider>;
};
