import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const getCart = useSelector((state) => state.dataReducer.cart);
  //   console.log(getCart.length);
  return (
    <div>
      <h1>Cart</h1>
      <div className="cart">
        {getCart.map((e, i) => {
          return (
            <div className="cart-item" key={i}>
              <p>{e.foodname}</p>
              <p>₹{e.foodprice}</p>
            </div>
          );
        })}
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
