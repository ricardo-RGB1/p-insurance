import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./Navbar-styles.js";

const Navbar = ({ toggle }) => {
  
  const toggleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            Prime Insurance
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Services
              </NavLinks>
            </NavItem>{" "}
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
