import React from "react";
import "../Style/Navbar.css";
const Navbar = () => {
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
            <i classNames="bi bi-person"></i>Sign In
          </p>
          <p>
            <i className="bi bi-bag"></i>Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
