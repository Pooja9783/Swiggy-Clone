import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
function DrawerComp() {
  const [open, setOpen] = useState(false);
  const getCart = useSelector((state) => state.dataReducer.cart);

  return (
    <div>
      <Drawer
        style={{ display: "block" }}
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItemIcon onClick={() => setOpen(false)}>
            <div className="right">
              <Link to="/search">
                <p>
                  <i className="bi bi-search"></i>search
                </p>
              </Link>
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
          </ListItemIcon>
        </List>
      </Drawer>
      <IconButton
        style={{ marginLeft: "auto", color: "#000" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export { DrawerComp };
