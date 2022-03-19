import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/HeaderContext";
import { AiOutlineSearch } from "react-icons/ai";

import {
  StyledSeachContainer,
  StyledInput,
  StyledSearchButton,
} from "./Search.styled";

function Search() {
  useEffect(() => {
    // console.log("searchEff is called");
  }, []);

  const { dispatch, ...data } = useContext(UserContext);
  return (
    <StyledSeachContainer searchOpen={data.searchOpen}>
      <StyledInput />
      <StyledSearchButton>
        <AiOutlineSearch size={24} />
      </StyledSearchButton>
    </StyledSeachContainer>
  );
}

export default Search;
