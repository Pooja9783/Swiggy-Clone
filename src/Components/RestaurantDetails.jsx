import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/RestraurantsDetails.css";

import Navbar from "./Navbar";
const axios = require("axios");

const RestaurantDetails = () => {
  const [value, setValue] = useState([]);
  const { id } = useParams();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((res) => {
        res = res.data;
        setValue(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      {value
        .filter((e) => e.id == `${id}`)
        .map((el, i) => {
          return (
            <div key={i}>
              <div className="details">
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

                {el.food.map((ele, i) => {
                  return (
                    <div>
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
                              <button>Add</button>
                            </div>
                          </div>
                          <hr />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      <div className="cart">
        <h1>Cart Empty</h1>
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2"
          alt=""
        />
        <p>
          Good food is always cooking! Go ahead, order some yummy items from the
          menu.
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetails;
