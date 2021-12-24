import React from "react";
import { StyledAppBar, StyledLogo, StyledDesk } from "./Appbar.styled.js";
import Burger from "./Burger";

function Navbar() {
  return (
    <>
      <StyledAppBar>
        <Burger></Burger>
        <StyledLogo to="/"></StyledLogo>
        <StyledDesk></StyledDesk>
      </StyledAppBar>
    </>
  );
}

export default Navbar;
