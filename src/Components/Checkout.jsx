import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { addToCart } from "../Redux/action";
import "../Style/Checkout.css";
import Footer from "./Footer";
import { removeData, deleteData, incrementData } from "../Redux/action";

const Checkout = () => {
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart);
  }, []);

  const getCart = useSelector((state) => state.dataReducer.cart);
  const handleAddTOCart = (e) => {
    dispatch(incrementData(e));
  };
  const removeItem = (e) => {
    dispatch(removeData(e));
  };

  const delData = (e) => {
    dispatch(deleteData(e));
  };

  const success = () => {
    setTimeout(() => {
      alert("Your Order Placed!!!");
    }, 1000);
  };

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

  return (
    <div>
      <Navbar />
      <div className="checkout">
        <div className="container">
          <div className="content">
            <div className="content-x">
              <div className="login-part">
                <div className="login-one-step">
                  <div className="ac">
                    <h3>Account</h3>
                    <p>
                      To place your order now, log in to your existing account
                      or sign up.
                    </p>
                    <div className="btn">
                      <Link to="/login">
                        <button>Login</button>
                      </Link>
                      <Link to="/signin">
                        <button>Sign Up</button>
                      </Link>
                    </div>
                  </div>

                  <div className="img">
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="address">
                <h3>Select delivery address</h3>
                <p>You have a saved address in this location</p>
                <div className="home-add">
                  <h5>Home</h5>
                  <p>
                    Home 320/16, 4th Floor, Teachers Colony, HSR Layout 5th
                    Sector,
                    <br /> Bengaluru, Karnataka 560034, India
                  </p>
                </div>
              </div>
              <div className="payment">
                <div className="payment-method">
                  <div className="left">
                    <h3>Payment Method :</h3>
                    <p>Wallets</p>
                    <p>Credit</p>
                    <p>Credit/Debit Cards</p>
                    <p>UPI</p>
                    <p>Netbanking</p>
                    <p>Food Cards</p>
                    <p>Pay on Delivery</p>
                  </div>
                  <div className="right">
                    <button onClick={success}>Cash on Delivery</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="data">
              {getCart.map((ele, i) => {
                return (
                  <div key={i} className="card-x">
                    <div className="img">
                      <img src={ele.imgfood} alt="" />
                    </div>
                    <div className="data-add">
                      <p>{ele.foodname}</p>
                      <p>₹ {ele.foodprice}</p>
                      <div className="data-span">
                        <div className="span">
                          <p
                            onClick={
                              ele.quantity <= 1
                                ? () => delData(ele.id)
                                : () => removeItem(ele)
                            }
                          >
                            -
                          </p>
                          <p>{ele.quantity}</p>
                          <p onClick={() => handleAddTOCart(ele)}>+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <hr style={{ height: "1px", color: "black", margin: "20px" }} />

              <div className="charges">
                <p>delivery charges</p>
                <p>free</p>
              </div>

              <div className="total">
                <h3>Subtotal : </h3>
                <h3>₹ {price}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
