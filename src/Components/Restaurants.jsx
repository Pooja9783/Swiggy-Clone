import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Restaurants.css";
const axios = require("axios");

const Restaurants = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((res) => {
        // console.log(res.data);
        setValue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const ln = value.length;

  // ~~~~~~~~~~~~~~~Rating~~~~~~~~~~~~~
  const rating = (e) => {
    if (e === "r") {
      let res = value.sort((a, b) => {
        return b.rating - a.rating;
      });
      console.log(res);
      setValue([...res]);
    }
  };
  //~~~~~~~~~~~~~~~~~~High to Low~~~~~~~~~~~~~~~
  const hTol = (m) => {
    if (m === "h") {
      let res = value.sort((a, b) => {
        return b.rate - a.rate;
      });
      setValue([...res]);
    } else if (m === "l") {
      let res = value.sort((a, b) => {
        return a.rate - b.rate;
      });
      setValue([...res]);
    }
  };

  //~~~~~~~~~~~~~~~~~~Delivery Time~~~~~~~~~~~~~~~
  const deliveryTime = (t) => {
    if (t === "t") {
      let res = value.sort((a, b) => {
        return a.time - b.time;
      });
      setValue([...res]);
    }
  };
  return (
    <div>
      <div className="restaurants">
        <div className="content">
          <div className="left-content">
            <h2>{ln} restaurants</h2>
          </div>
          <div className="right-content">
            <p>Relevance</p>
            <p onClick={() => deliveryTime("t")}>Delivery Time</p>
            <p onClick={() => rating("r")}>Rating</p>
            <p onClick={() => hTol("l")}>Cost: Low To High</p>
            <p onClick={() => hTol("h")}>Cost: High To Low</p>
            <p>Filters</p>
          </div>
        </div>
        <hr />
        <div className="data">
          <div className="display-data">
            {value.map((ele, i) => {
              return (
                <div key={i} className="card-card">
                  <Link to={`/restaurantdetails/${ele.id}`}>
                    <div className="img">
                      <img src={ele.img} alt="" />;
                    </div>
                    <div className="all-data">
                      <div className="text">
                        <h5>{ele.title}</h5>
                        <p>{ele.type}</p>
                      </div>
                      <div className="flex">
                        <p className="rating">☆ {ele.rating} </p> •
                        <p>{ele.time} mins </p> •<p>₹ {ele.rate} for Two</p>
                      </div>
                      <hr />
                      <p className="coupon">{ele.coupon}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
