import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAppBar = styled.div`
  flex: 0 0 160px;

  @media (max-width: 1279px) {
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
  }
`;

export const StyledBrandContainer = styled(NavLink)`
  display: flex;

  align-items: center;
  @media (max-width: 1279px) {
    width: 90px;
    justify-content: center;
  }
`;

export const StyledLogo = styled.img`
  width: auto;
  height: 52px;
  background: transparent;
  @media (max-width: 1279px) {
    height: 43px;
  }
`;