import React from "react";
import { UserProvider } from "../../Contexts/HeaderContext.js";
import {
  StyledHeader,
  StyledHeaderTop,
  StyledHeaderContainer,
} from "./Header.styled";
import { Navbar, Search, BottomNavBar } from "../../components/index.js";

function Header() {
  return (
    <UserProvider>
      <StyledHeader>
        <StyledHeaderTop>
          <StyledHeaderContainer>
            <Navbar></Navbar>
            <Search></Search>
            <BottomNavBar></BottomNavBar>
          </StyledHeaderContainer>
        </StyledHeaderTop>
      </StyledHeader>
    </UserProvider>
  );
}

export default Header;
