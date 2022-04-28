import React, { useState, useEffect } from "react";
import "../Style/Navbar.css";
import { DrawerComp } from "./Drawer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
const Navbar = () => {
  const theme = useTheme();
  const getCart = useSelector((state) => state.dataReducer.cart);

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isMatch);
  // console.log(theme);
  let res = JSON.parse(localStorage.getItem("data"));
  // console.log(res.name);

  function logoutHandle() {
    setTimeout(() => {
      localStorage.removeItem("data");
    }, 300);
  }

  return (
    <div className="Navbar">
      <AppBar style={{ background: "white" }} position="static">
        <Toolbar>
          {isMatch ? (
            <>
              <Link to="/">
                <Typography>
                  <img
                    src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png"
                    alt="img"
                    style={{ width: "60px" }}
                  />
                </Typography>
              </Link>
              <DrawerComp />
            </>
          ) : (
            <Grid sx={{ placeItems: "center" }} container>
              <Link to="/">
                <Typography style={{ marginLeft: "100px", display: "flex" }}>
                  <img
                    className="logo"
                    src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png"
                    alt="img"
                    style={{ width: "50px" }}
                  />
                  <h5 className="nav-h5">Location</h5>
                </Typography>
              </Link>
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <div className="right-nav">
                  <Link to="/search">
                    <p>
                      <i className="bi bi-search"></i>search
                    </p>
                  </Link>
                  <p>
                    {" "}
                    <i className="bi bi-tropical-storm">Offers</i>
                  </p>
                  <p>
                    <i className="bi bi-plus-circle-dotted"></i>Help
                  </p>
                  <Link to="/signin">
                    <p>
                      {" "}
                      <i className="bi bi-person"></i>
                      {res && res.name ? res.name : "Signin"}
                    </p>
                  </Link>
                  <Link to="/checkout">
                    <p>
                      {getCart.length > 0 ? (
                        <i className="i">{getCart.length}</i>
                      ) : (
                        <i className="bi bi-bag"></i>
                      )}
                      Cart
                    </p>
                  </Link>
                  {/* <p onClick={logoutHandle}>logout</p> */}
                </div>
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
