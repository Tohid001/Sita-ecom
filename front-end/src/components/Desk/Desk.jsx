import React, { useContext } from "react";
import { UserContext } from "../../Contexts/HeaderContext.js";
import {
  StyledDeskContainer,
  StyledIconContainer,
  StyledCounter,
} from "./Desk.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineShoppingBasket } from "react-icons/md";

function Desk() {
  const { dispatch, ...data } = useContext(UserContext);
  console.log(` search icon ${data.searchOpen}`);
  return (
    <StyledDeskContainer>
      <StyledIconContainer searchOpen={data.searchOpen}>
        <AiOutlineSearch
          onClick={() => {
            dispatch({ type: "setSearchOpen" });
          }}
        />
      </StyledIconContainer>
      <StyledIconContainer>
        <MdOutlineShoppingBasket />
        <StyledCounter>0</StyledCounter>
      </StyledIconContainer>
    </StyledDeskContainer>
  );
}

export default Desk;
