import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Style/RestraurantsDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getData, addToCart } from "../Redux/action";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RestaurantDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData);
  }, []);
  const apiData = useSelector((state) => state.dataReducer.data);
  const getCart = useSelector((state) => state.dataReducer.cart);
  // console.log(getCart);

  const handleAddTOCart = (e) => {
    dispatch(addToCart(e));
  };
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <div className="details">
            {apiData
              .filter((e) => e.id == `${id}`)
              .map((el, i) => {
                return (
                  <div key={i}>
                    <div className="container-x">
                      <div className="img">
                        <img src={el.img} alt="" />
                      </div>
                      <div className="text-x">
                        <h3>{el.title}</h3>
                        <p>{el.type}</p>
                        <div className="text-y">
                          <div className="block">
                            <p>☆{el.rating} </p> <span>Too Few Ratings</span>
                          </div>
                          <div className="block">
                            <p>{el.time}</p>
                            <span>Delivery Time</span>
                          </div>
                          <div className="block">
                            <p>₹ {el.rate}</p> <span>Cost for two</span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                    {/* Food Data */}
                    <div className="both-content">
                      <div className="flex-item">
                        {el.food.map((ele, i) => {
                          return (
                            <div key={i}>
                              <div className="food">
                                <div className="content-food">
                                  <div className="container-food">
                                    <div className="left-x">
                                      <h3>{ele.foodname}</h3>
                                      <h5>₹{ele.foodprice}</h5>
                                      <p>{ele.fooddes}</p>
                                    </div>
                                    <div className="right-y">
                                      <img src={ele.imgfood} alt="" />
                                      <button
                                        onClick={() => handleAddTOCart(ele)}
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </div>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div className="cart">
                        {getCart.length ? (
                          <Cart />
                        ) : (
                          <div className="cart-data-empty">
                            <h1>Cart Empty</h1>
                            <img
                              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
                              alt=""
                            />
                            <p>
                              Good food is always cooking! Go ahead, order some
                              yummy items from the menu.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                    <Footer />
                  </div>
                );
              })}
          </div>

          <div className="clear-div"></div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
