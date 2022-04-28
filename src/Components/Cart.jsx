import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeData, deleteData, incrementData } from "../Redux/action";
import "../Style/Cart.css";
const Cart = () => {
  const dispatch = useDispatch();
  const getCart = useSelector((state) => state.dataReducer.cart);
  const [price, setPrice] = useState(0);

  const total = () => {
    let price = 0;
    let total;
    getCart.map((ele) => {
      let res = (price += ele.foodprice);
      return (total = res * ele.quantity);
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
      <div className="cart-data">
        <h1>Cart</h1>

        {getCart.map((e, i) => {
          return (
            <div className="cart-item" key={i}>
              <div className="cart-x">
                <p>{e.foodname}</p>
                <div className="cart">
                  <span
                    onClick={
                      e.quantity <= 1
                        ? () => delData(e.id)
                        : () => removeItem(e)
                    }
                  >
                    -
                  </span>
                  <span>{e.quantity}</span>
                  <span onClick={() => handleAddTOCart(e)}>+</span>
                </div>
                <b>₹{e.foodprice}</b>
              </div>
            </div>
          );
        })}
        <div className="total">
          <h3>Subtotal:</h3>
          <h3>₹ {price}</h3>
        </div>
        <Link to={`/checkout/}`}>
          <button>Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
