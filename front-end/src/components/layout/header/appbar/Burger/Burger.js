import React, { useState } from "react";
import {
  StyledBurgerContainer,
  StyledContainer,
  StyledBar,
} from "./Burger.styled";

function Burger() {
  const [toggled, setToggled] = useState(false);
  return (
    <StyledBurgerContainer>
      <StyledContainer
        toggled={toggled}
        onClick={() => {
          setToggled(!toggled);
        }}
      >
        <StyledBar toggled={toggled} />
      </StyledContainer>
    </StyledBurgerContainer>
  );
}

export default Burger;
