import React, { useState, useContext } from "react";
import { UserContext } from "../../Contexts/HeaderContext.js";
import {
  StyledBurgerContainer,
  StyledContainer,
  StyledBar,
} from "./Burger.styled";

function Burger() {
  const [toggled, setToggled] = useState(false);
  const { dispatch, ...data } = useContext(UserContext);
  // console.log(data);
  return (
    <StyledBurgerContainer>
      <StyledContainer
        toggled={data.toggled}
        onClick={() => {
          dispatch({ type: "setToggled" });
        }}
      >
        <StyledBar toggled={data.toggled} />
      </StyledContainer>
    </StyledBurgerContainer>
  );
}

export default Burger;
