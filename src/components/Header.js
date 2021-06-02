import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import { useCookies } from "react-cookie";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#bfbfbf",
  },

  link: {
    textDecoration: "none",
  },
});

export default function Header(props) {
  const classes = useStyles();
  const [cookies, setCookie, removeCookie] = useCookies(["user-token"]);

  const { username } = props;

  const logout = async () => {
    removeCookie("user-token");
  };

  return (
    <div>
      <Navbar className={classes.navbar} light={true} expand="md">
        <div className="container">
          <NavbarBrand href="/">Dexter Victims</NavbarBrand>
          <Nav navbar>
            <NavbarText>{username}</NavbarText>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="ml-auto" nav caret>
                <PersonIcon />
              </DropdownToggle>
              {username === "" ? (
                <DropdownMenu right>
                  <a className={classes.link} href="/login">
                    <DropdownItem>Login</DropdownItem>
                  </a>
                  <a className={classes.link} href="/register">
                    <DropdownItem>Register</DropdownItem>
                  </a>
                </DropdownMenu>
              ) : (
                <DropdownMenu right>
                  <a href="/login" onClick={logout} className={classes.link}>
                    <DropdownItem>Logout</DropdownItem>
                  </a>
                </DropdownMenu>
              )}
            </UncontrolledDropdown>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}
