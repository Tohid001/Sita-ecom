import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99;
  background: var(--header);
  box-shadow: ${(props) =>
    props.searchOpen ? "" : "0 5px 5px rgb(0 0 0 / 20%)"};
  transition: box-shadow 400ms ease;

  @media (min-width: 1280px) {
    flex: 0 0 130px;
    display: block;
    position: relative;
    transition: none;
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
  height: 48px;
  background: transparent;
  @media (min-width: 1280px) {
    height: 55px;
  }
`;
