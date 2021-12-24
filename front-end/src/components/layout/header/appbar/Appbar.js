import React from "react";
import {
  StyledAppBar,
  StyledBrand,
  StyledLogo,
  StyledDesk,
} from "./Appbar.styled.js";
import Burger from "./Burger";
import Logo from "../../../../assets/logo.png";

function Navbar() {
  return (
    <>
      <StyledAppBar>
        <Burger></Burger>
        <StyledBrand to="/">
          <StyledLogo src={Logo} />
        </StyledBrand>
        <StyledDesk></StyledDesk>
      </StyledAppBar>
    </>
  );
}

export default Navbar;
