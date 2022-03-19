import React, { useContext } from "react";
import { UserContext } from "../../Contexts/HeaderContext.js";
import {
  StyledNavBar,
  StyledBrandContainer,
  StyledLogo,
} from "./Navbar.styled.js";
import { Burger } from "../index.js";
import { Desk } from "../index.js";
import { images } from "../../constants/index.js";

function Navbar() {
  const { dispatch, ...data } = useContext(UserContext);
  return (
    <>
      <StyledNavBar searchOpen={data.searchOpen}>
        <Burger></Burger>
        <StyledBrandContainer
          to="/"
          onClick={(event) => event.preventDefault()}
        >
          <StyledLogo src={images.logo} />
        </StyledBrandContainer>
        <Desk></Desk>
      </StyledNavBar>
    </>
  );
}

export default Navbar;
