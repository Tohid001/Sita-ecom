import React from "react";
import {
  StyledAppBar,
  StyledBrandContainer,
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
        <StyledBrandContainer
          to="/"
          onClick={(event) => event.preventDefault()}
        >
          <StyledLogo src={Logo} />
        </StyledBrandContainer>
        <StyledDesk></StyledDesk>
      </StyledAppBar>
    </>
  );
}

export default Navbar;
