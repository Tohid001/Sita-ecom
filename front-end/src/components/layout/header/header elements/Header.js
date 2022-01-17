import React from "react";
import { UserProvider } from "../Context/HeaderContext";
import {
  StyledHeader,
  StyledHeaderTop,
  StyledHeaderContainer,
} from "./Header.styled";
import Navbar from "../appbar/Appbar";
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
            <Navbar></Navbar>
            <SearchBar></SearchBar>
            <BottomNavigationBar></BottomNavigationBar>
          </StyledHeaderContainer>
        </StyledHeaderTop>
      </StyledHeader>
      {/* <div className="header">
        <div className="headerTop"><div className="headerContainer"></div></div>
      </div> */}
    </UserProvider>
  );
}

export default Header;
