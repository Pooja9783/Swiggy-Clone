import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/action";
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
      {getCart.map((ele, i) => {
        return (
          <div key={i}>
            <img src={ele.imgfood} alt="" />
          </div>
        );
      })}
      <Footer />
    </div>
  );
};

export default Checkout;
