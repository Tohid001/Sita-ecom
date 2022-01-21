import React from "react";
import Mainfooter from "./Mainfooter";

import { StyledFooter } from "./Footer.styled";
import { StyledFooterContainer } from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <Mainfooter />
      </StyledFooterContainer>
    </StyledFooter>
  );
}

export default Footer;
