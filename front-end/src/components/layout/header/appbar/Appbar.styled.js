import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAppBar = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99;
  background: #081621;
  padding: 0 15px;
  box-shadow: ${(props) =>
    props.searchOpen ? "" : "0 5px 5px rgb(0 0 0 / 20%)"};
  width: 100vw;
  align-items: center;
  justify-content: center;

  @media (min-width: 1279px) {
    flex: 0 0 160px;
    display: block;
    position: relative;
  }
`;

export const StyledBrandContainer = styled(NavLink)`
  display: flex;
  align-items: center;

  justify-content: center;
  width: 90px;
  @media (min-width: 1280px) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const StyledLogo = styled.img`
  width: auto;
  height: 43px;
  background: transparent;
  @media (min-width: 1280px) {
    height: 52px;
  }
`;
