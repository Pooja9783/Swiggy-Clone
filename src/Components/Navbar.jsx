import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const getCart = useSelector((state) => state.dataReducer.cart);
  // console.log(getCart.length);
  return (
    <div className="navbar-a">
      <div className="container-nav">
        <div className="left">
          <img
            src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png"
            alt="img"
          />
          <p>
            Location<i className="bi bi-caret-down"></i>
          </p>
        </div>
        <div className="right">
          <p>
            <i className="bi bi-search"></i>search
          </p>
          <p>
            {" "}
            <i className="bi bi-percent">Offers</i>
          </p>
          <p>
            <i className="bi bi-plus-circle-dotted"></i>Help
          </p>

          <p>
            <Link to="/login">
              {" "}
              <i className="bi bi-person"></i>Sign In
            </Link>
          </p>
          <Link to="/">
            <p>
              <i className="bi bi-bag">{getCart.length}</i>Cart
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
