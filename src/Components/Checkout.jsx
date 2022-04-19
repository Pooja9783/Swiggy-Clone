import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/action";

const Checkout = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToCart);
  }, []);
  const getCart = useSelector((state) => state.dataReducer.cart);
  return (
    <div>
      {getCart
        .filter((e) => e.id == `${id}`)
        .map((ele, i) => {
          return (
            <div key={i}>
              <img src={ele.imgfood} alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default Checkout;
