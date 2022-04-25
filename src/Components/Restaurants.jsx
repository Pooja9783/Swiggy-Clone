import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Restaurants.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
const Restaurants = () => {
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData);
  }, []);

  const apiData = useSelector((state) => state.dataReducer.data);

  const ln = apiData.length;

  // ~~~~~~~~~~~~~~~Relevance~~~~~~~~~~~~

  // const relevance = () => {};

  // ~~~~~~~~~~~~~~~Rating~~~~~~~~~~~~~
  const rating = (e) => {
    if (e === "r") {
      let res = apiData.sort((a, b) => {
        return b.rating - a.rating;
      });
      // console.log(res);
      setValue([...res]);
    }
  };
  //~~~~~~~~~~~~~~~~~~High to Low~~~~~~~~~~~~~~~
  const hTol = (m) => {
    if (m === "h") {
      let res = apiData.sort((a, b) => {
        return b.rate - a.rate;
      });
      setValue([...res]);
    } else if (m === "l") {
      let res = apiData.sort((a, b) => {
        return a.rate - b.rate;
      });
      setValue([...res]);
    }
  };

  //~~~~~~~~~~~~~~~~~~Delivery Time~~~~~~~~~~~~~~~
  const deliveryTime = (t) => {
    if (t === "t") {
      let res = apiData.sort((a, b) => {
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
            {apiData.map((ele, i) => {
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
                        <p
                          className="rating"
                          style={{
                            backgroundColor:
                              ele.rating < 4
                                ? ele.rating < 3
                                  ? "red"
                                  : "orange"
                                : "green",
                          }}
                        >
                          ☆ {ele.rating}{" "}
                        </p>{" "}
                        •<p>{ele.time} mins </p> •<p>₹ {ele.rate} for Two</p>
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
