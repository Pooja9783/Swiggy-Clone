import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const getCart = useSelector((state) => state.dataReducer.cart);
  const getId = getCart.map((l) => {
    return l.id;
  });

  const [price, setPrice] = useState(0);
  const total = () => {
    let price = 0;
    getCart.map((ele) => {
      price += ele.foodprice;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
  console.log(price);
  return (
    <div>
      <h1>Cart</h1>
      <div className="cart">
        {getCart.map((e, i) => {
          return (
            <div className="cart-item" key={i}>
              <p>{e.foodname}</p>
              <b>₹{e.foodprice}</b>
              <div style={{ background: "red", width: "100px" }}>
                <span>-</span>
                <span>{e.quantity}</span>
                <span>+</span>
              </div>
            </div>
          );
        })}

        <h3>Subtotal:</h3>
        <p>{price}</p>
        <Link to={`/checkout`}>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
