import React from "react";
import {
  StyledDeskContainer,
  StyledIconContainer,
  StyledCounter,
} from "./Desk.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingBasket } from "react-icons/md";
function Desk() {
  return (
    <StyledDeskContainer>
      <StyledIconContainer>
        <AiOutlineSearch />
      </StyledIconContainer>
      <StyledIconContainer>
        <MdOutlineShoppingBasket />
        <StyledCounter>0</StyledCounter>
      </StyledIconContainer>
    </StyledDeskContainer>
  );
}

export default Desk;
