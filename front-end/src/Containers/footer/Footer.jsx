import React from "react";

import { IconContext } from "react-icons";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import {
  StyledFooter,
  StyledFooterContainer,
  StyledMainFooter,
  StyleMainFooterContainer,
  StyledHeader,
  StyledListContainer,
  StyledListItem,
  StyledOrgInfoBox,
  StyledSocialLinks,
  StyledSubfooter,
} from "./Footer.styled";

function Footer() {
  console.log("footer");
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledMainFooter>
          <StyleMainFooterContainer type="contacts">
            <StyledHeader>Support</StyledHeader>
            <StyledListContainer>
              <StyledListItem to="/contactUs">Contact Us</StyledListItem>
              <StyledListItem to="/faq">FAQ</StyledListItem>
              <StyledListItem to="/termsOfUse">Terms of Use</StyledListItem>
            </StyledListContainer>
          </StyleMainFooterContainer>

          <StyleMainFooterContainer type="aboutUs">
            <StyledHeader>About us</StyledHeader>
            <StyledListContainer>
              <StyledListItem to="/ourStory">Our Story</StyledListItem>
              <StyledListItem to="/team">Team</StyledListItem>
              <StyledListItem to="/privacyPolicy">
                Privacy Policy
              </StyledListItem>
            </StyledListContainer>
          </StyleMainFooterContainer>

          <StyleMainFooterContainer>
            <StyledHeader>Stay Connected</StyledHeader>
            <StyledOrgInfoBox>
              <b>Sitaholic Tech & Engineering Ltd </b>
              <br></br>6th floor, 28 Kazi Nazrul Islam Ave,Navana Zohura Square,
              Dhaka 1000
            </StyledOrgInfoBox>
            <StyledOrgInfoBox>
              <p>
                E-mail:<br></br>
                <span style={{ color: "#ef4a23" }}>mdtohid.sust@gmail.com</span>
              </p>
            </StyledOrgInfoBox>
            <StyledOrgInfoBox type="socialLink">
              <IconContext.Provider value={{ size: "24px", color: "white" }}>
                <StyledSocialLinks>
                  <FaFacebookF />
                </StyledSocialLinks>
                <StyledSocialLinks>
                  <FaYoutube />
                </StyledSocialLinks>
                <StyledSocialLinks>
                  <FiInstagram />
                </StyledSocialLinks>
              </IconContext.Provider>
            </StyledOrgInfoBox>
          </StyleMainFooterContainer>
        </StyledMainFooter>
        <StyledSubfooter>
          <p>
            &copy; 2022 Sitaholic Tech & Engineering Ltd &#x7c; All rights
            reserved
          </p>
          <p>
            Powered By: <a>MTI-LAB</a>
          </p>
        </StyledSubfooter>
      </StyledFooterContainer>
    </StyledFooter>
  );
}

export default Footer;
