import React from "react";
import { NavLink } from "react-router-dom";
import {
  StyledMainFooter,
  StyleMainFooterContainer,
  StyledHeader,
  StyledContactBox,
  StyledContactIconContainer,
  StyledContactText,
  StyledAboutBox,
  StyledAboutItem,
} from "./MainFooter.styled";
import { IoIosCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";
function Mainfooter() {
  return (
    <StyledMainFooter>
      <IconContext.Provider value={{ color: "white", size: "24px" }}>
        <StyleMainFooterContainer type="contacts">
          <StyledHeader>Support</StyledHeader>
          <StyledContactBox href="tel:01852523079">
            <StyledContactIconContainer>
              <IoIosCall />
            </StyledContactIconContainer>
            <StyledContactText>
              <p>9AM - 7Pm</p>
              <h5>01852523079</h5>
            </StyledContactText>
          </StyledContactBox>
          <StyledContactBox as={NavLink} to="/stores">
            <StyledContactIconContainer>
              <MdLocationOn />
            </StyledContactIconContainer>
            <StyledContactText>
              <p>Store locator</p>
              <h5>Find Our Stores</h5>
            </StyledContactText>
          </StyledContactBox>
        </StyleMainFooterContainer>
      </IconContext.Provider>

      <StyleMainFooterContainer type="aboutUs">
        <StyledHeader>About us</StyledHeader>
        <StyledAboutBox>
          <StyledAboutItem></StyledAboutItem>
        </StyledAboutBox>
      </StyleMainFooterContainer>

      <StyleMainFooterContainer>
        <StyledHeader>Stay Connected</StyledHeader>
      </StyleMainFooterContainer>
    </StyledMainFooter>
  );
}

export default Mainfooter;
