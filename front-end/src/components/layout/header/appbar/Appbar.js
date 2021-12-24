import React from "react";
import {
  StyledAppBar,
  StyledBrandContainer,
  StyledLogo,
} from "./Appbar.styled.js";
import Burger from "./Burger/Burger.js";
import Logo from "../../../../assets/logo.png";
import Desk from "./desk/Desk";

function Navbar() {
  return (
    <>
      <StyledAppBar>
        <Burger></Burger>
        <StyledBrandContainer
          to="/"
          onClick={(event) => event.preventDefault()}
        >
          <StyledLogo src={Logo} />
        </StyledBrandContainer>
        <Desk></Desk>
      </StyledAppBar>
    </>
  );
}

export default Navbar;
