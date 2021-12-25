import React, { useContext } from "react";
import { UserContext } from "../Context/HeaderContext";

import { StyledSeachContainer, StyledInput } from "./Search.styled";

function Search() {
  // console.log("search is rendered");
  const { dispatch, ...data } = useContext(UserContext);
  return (
    <StyledSeachContainer searchOpen={data.searchOpen}>
      <StyledInput />
    </StyledSeachContainer>
  );
}

export default Search;
