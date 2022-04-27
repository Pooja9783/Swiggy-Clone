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
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
const Navbar = () => {
  const [val, setVal] = useState();
  const theme = useTheme();
  const getCart = useSelector((state) => state.dataReducer.cart);

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isMatch);
  // console.log(theme);
  let res = JSON.parse(localStorage.getItem("data"));

  // console.log(name);

  // useEffect(() => {
  //   const handleLogout = () => {
  //     localStorage.removeItem("data");
  //   };
  // }, []);
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
                  {res !== null ? (
                    <p>{res.name}</p>
                  ) : (
                    <Link to="/login">
                      <p>
                        {" "}
                        <i className="bi bi-person"></i>Sign In
                      </p>
                    </Link>
                  )}
                  <Link to="/checkout">
                    <p>
                      <i className="bi bi-bag">{getCart.length}</i>Cart
                    </p>
                  </Link>

                  {/* <p onClick={handleLogout}>logout</p> */}
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
