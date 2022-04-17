import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const cartHandle = (payload) => {
    setCart([...cart, payload]);
    console.log(cart);
  };

  const deleteHandle = (payload) => {
    let res = cart.filter((el) => {
      if (id.title != payload.title) return res;
    });
    setCart([...cart]);
  };

  const coundHandle = (val, pri) => {
    setCount(count + val);
    setTotal(total + pri);
  };

  return (
    <CartContextProvider
      value={{ total, cart, count, cartHandle, deleteHandle, coundHandle }}
    ></CartContextProvider>
  );
};
