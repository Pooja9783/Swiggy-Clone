import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";
import { Link } from "react-router-dom";
export default function Search() {
  const [search, setSearch] = useState("");
  const [val, setVal] = useState("Search Item...");
  //   console.log(search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData);
  }, []);
  const apiData = useSelector((state) => state.dataReducer.data);

  return (
    <div>
      <input
        style={{ width: "80%" }}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search For Restaurant or Dishes..."
      />
      {apiData
        .filter((food) => {
          if (food == "") {
            return false;
          } else {
            const res = food.title.toLowerCase().includes(search.toLowerCase());
            return res;
          }
        })
        .map((e, i) => {
          return (
            <div key={i} className="search">
              <Link to={`/restaurantdetails/${e.id}`}>
                <p>{e.title}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
