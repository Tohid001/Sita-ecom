import React from "react";
import { StyledMainFooter } from "./MainFooter.styled";
import { StyledContactContainer } from "./MainFooter.styled";
import { StyledHeader } from "./MainFooter.styled";

function Mainfooter() {
  return (
    <StyledMainFooter>
      <StyledContactContainer>
        <StyledHeader>Support</StyledHeader>
      </StyledContactContainer>
    </StyledMainFooter>
  );
}

export default Mainfooter;
