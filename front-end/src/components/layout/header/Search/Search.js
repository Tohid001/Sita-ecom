import React, { useContext } from "react";
import { UserContext } from "../Context/HeaderContext";
import { AiOutlineSearch } from "react-icons/ai";

import {
  StyledSeachContainer,
  StyledInput,
  StyledSearchButton,
} from "./Search.styled";

function Search() {
  // console.log("search is rendered");
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
