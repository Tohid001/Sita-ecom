import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledAppBar = styled.div`
  @media (max-width: 1279px) {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 99;
    background: #081621;
    padding: 0 15px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
    width: 100vw;
    align-items: center;
  }
`;

export const StyledLogo = styled(NavLink)`
  @media (max-width: 1279px) {
    width: 90px;
    display: block;
  }
`;

export const StyledDesk = styled.a`
  @media (max-width: 1279px) {
    width: calc(50% - 45px);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 2px;
  }
`;
