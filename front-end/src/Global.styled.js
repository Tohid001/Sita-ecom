import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", sans-serif;
  
}

@media (max-width: 1279px) {
  body{
  margin-bottom:61px;
  /* position:relative; */
}
  }


&:root{--header:#081621;--iconActiveColor:rgb(235, 52, 131)};
.actionIcon{
  font-size: 20px;
  color:white;
  @media (min-width: 1280px) {
    color: var(--iconActiveColor);
  }
}


 `;
