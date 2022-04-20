import React from "react";
import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  navbar: {
    width: "80%",
    background: "white",
    padding: "10px",
  },
  logo: {
    width: "55px",
  },
}));

const Navbar = () => {
  const getCart = useSelector((state) => state.dataReducer.cart);
  // console.log(getCart.length);
  const classes = useStyles();

  return (
    <div className={classes.navbarX}>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Typography>
            <Link to="/">
              <img
                className={classes.logo}
                src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png"
                alt="img"
              />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <p>
        Location<i className="bi bi-caret-down"></i>
      </p>
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
        <Link to="/checkout">
          <p>
            <i className="bi bi-bag">{getCart.length}</i>Cart
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
