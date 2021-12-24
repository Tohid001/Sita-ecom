import React from "react";
import {
  StyledHeader,
  StyledHeaderTop,
  StyledHeaderContainer,
} from "./Header.styled";
import Appbar from "../appbar/Appbar";
// import Sidebar from "./sidebar/Sidebar";
// import BottomNavigation from "./bottomNavigation/BottomNavigation.js";

function Header() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderTop>
          <StyledHeaderContainer>
            <Appbar></Appbar>
          </StyledHeaderContainer>
        </StyledHeaderTop>
      </StyledHeader>
    </>
  );
}

export default Header;
