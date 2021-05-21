import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#bfbfbf",
  },

  link: {
    textDecoration: "none",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <Navbar className={classes.navbar} light={true} expand="md">
        <div className="container">
          <NavbarBrand href="/">AlBeya</NavbarBrand>
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="ml-auto" nav caret>
                <PersonIcon />
              </DropdownToggle>
              <DropdownMenu right>
                <a className={classes.link} href="/login">
                  <DropdownItem>Login</DropdownItem>
                </a>
                <a className={classes.link} href="/register">
                  <DropdownItem>Register</DropdownItem>
                </a>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}
