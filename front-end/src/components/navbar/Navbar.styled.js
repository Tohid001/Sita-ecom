import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: 1280px) {
    flex: 0 0 130px;
    display: block;
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
