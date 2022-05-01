import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Restaurants.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
const Restaurants = () => {
  const [value, setValue] = useState([]);
  const dispatch = useDispatch();

  const apiData = useSelector((state) => state.dataReducer.data);
  const ln = apiData.length;

  useEffect(() => {
    dispatch(getData);
  }, []);

  useEffect(() => {
    setValue(apiData);
  });

  const sortData = (m) => {
    if (m === "r") {
      let res = apiData.sort((a, b) => {
        return b.rating - a.rating;
      });
      // console.log(res);
      setValue([...res]);
    } else if (m === "h") {
      let res = apiData.sort((a, b) => {
        return b.rate - a.rate;
      });
      setValue([...res]);
    } else if (m === "l") {
      let res = apiData.sort((a, b) => {
        return a.rate - b.rate;
      });
      setValue([...res]);
    } else if (m === "t") {
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
            <p onClick={() => sortData("all")}>Relevance</p>
            <p onClick={() => sortData("t")}>Delivery Time</p>
            <p onClick={() => sortData("r")}>Rating</p>
            <p onClick={() => sortData("l")}>Cost: Low To High</p>
            <p onClick={() => sortData("h")}>Cost: High To Low</p>
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
