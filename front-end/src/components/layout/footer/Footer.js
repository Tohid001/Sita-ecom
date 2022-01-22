import React from "react";
import Mainfooter from "./Mainfooter";
import SubFooter from "./SubFooter";

import { StyledFooter } from "./Footer.styled";
import { StyledFooterContainer } from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <Mainfooter />
        <SubFooter />
      </StyledFooterContainer>
    </StyledFooter>
  );
}

export default Footer;
