import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/action";
import Navbar from "./Navbar";

import Footer from "./Footer";
const Checkout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart);
  }, []);

  const getCart = useSelector((state) => state.dataReducer.cart);
  return (
    <div>
      <Navbar />
      <div className="login">
        <h3>Account</h3>
        <p>
          To place your order now, log in to your existing account or sign up.
        </p>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      <div className="address">
        <h2>Select delivery address</h2>
      </div>
      <div className="payment">
        <h2>Payment</h2>
        <p>Wallets</p>
        <p>Credit</p>
        <p>Credit/Debit Cards</p>
        <p>UPI</p>
        <p>Netbanking</p>
        <p>Food Cards</p>
        <div className="left">
          <p>Pay on Delivery</p>
        </div>
        <div className="right">
          <button>Cash on Delivery</button>
        </div>
      </div>
      <div className="data">
        {getCart.map((ele, i) => {
          return (
            <div key={i}>
              <img src={ele.imgfood} alt="" />
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
