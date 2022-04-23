import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeData, deleteData, incrementData } from "../Redux/action";
import { getData, addToCart } from "../Redux/action";

const Cart = () => {
  const dispatch = useDispatch();
  const getCart = useSelector((state) => state.dataReducer.cart);
  const [price, setPrice] = useState(0);

  const total = () => {
    let price = 0;
    let total;
    getCart.map((ele) => {
      let res = (price += ele.foodprice);
      total = res * ele.quantity;
    });
    setPrice(total);
  };

  useEffect(() => {
    total();
  }, [total]);
  // console.log(price);
  const handleAddTOCart = (e) => {
    dispatch(incrementData(e));
  };
  const removeItem = (e) => {
    dispatch(removeData(e));
  };

  const delData = (e) => {
    dispatch(deleteData(e));
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className="cart">
        {getCart.map((e, i) => {
          return (
            <div className="cart-item" key={i}>
              <p>{e.foodname}</p>
              <b>₹{e.foodprice}</b>
              <div
                style={{
                  background: "gray",
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{ fontSize: "18px" }}
                  onClick={
                    e.quantity <= 1 ? () => delData(e.id) : () => removeItem(e)
                  }
                >
                  -
                </span>
                <span style={{ fontSize: "18px" }}>{e.quantity}</span>
                <span
                  style={{ fontSize: "18px" }}
                  onClick={() => handleAddTOCart(e)}
                >
                  +
                </span>
              </div>
            </div>
          );
        })}

        <h3>Subtotal:</h3>
        <p>{price}</p>
        <Link to={`/checkout/}`}>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
