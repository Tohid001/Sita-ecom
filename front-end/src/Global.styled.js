import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
 *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Trebuchet MS", sans-serif;
  scroll-behavior:smooth;
  
}

/* html,body{height:100%} */

@media (max-width: 1279px) {
  body {
    margin-bottom: var(--bottomBarClearance);
  }
}

&:root{--header:#081621;
--iconActiveColor:rgb(235, 52, 131);
--vh:${(props) => {
  console.log(props.vh);
  return props.vh;
}};
--bottomBarClearance:${(props) => {
  console.log(props.bottomBarClearance);
  return props.bottomBarClearance;
}};};



.actionIcon{
  font-size: 20px;
  color:white;
  @media (min-width: 1280px) {
    color: var(--iconActiveColor);
  }
}


 `;
