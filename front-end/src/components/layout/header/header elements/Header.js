import React from "react";
import { UserProvider } from "../Context/HeaderContext";
import {
  StyledHeader,
  StyledHeaderTop,
  StyledHeaderContainer,
} from "./Header.styled";
import Appbar from "../appbar/Appbar";
import SearchBar from "../Search/Search";
import BottomNavigationBar from "../bottomNavigation/BottomNavigation";

// import Sidebar from "./sidebar/Sidebar";
// import BottomNavigation from "./bottomNavigation/BottomNavigation.js";

function Header() {
  return (
    <UserProvider>
      <StyledHeader>
        <StyledHeaderTop>
          <StyledHeaderContainer>
            <Appbar></Appbar>
            <SearchBar></SearchBar>
            <BottomNavigationBar></BottomNavigationBar>
          </StyledHeaderContainer>
        </StyledHeaderTop>
      </StyledHeader>
    </UserProvider>
  );
}

export default Header;
