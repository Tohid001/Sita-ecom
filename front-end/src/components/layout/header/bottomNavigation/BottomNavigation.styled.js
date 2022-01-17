import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledBottomNavigationContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  @media (max-width: 1279px) {
    position: fixed;
    bottom: 0px;
    left: 0;
    right: 0;
    /* width: 100%; */
    /* bottom: 20; */
    height: 61px;
    background: var(--header);
    box-shadow: 0 -4px 4px rgb(0 0 0 / 20%), 0 -1px 0 rgb(255 255 255 / 20%);
  }
  @media (min-width: 1280px) {
    flex: 1 1 auto;
  }
`;

const activeClassName = "nav-item-active";

export const StyledActionContainer = styled(NavLink).attrs({
  activeClassName,
})`
  display: flex;
  flex-direction: column;
  flex: 0 0 20%;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  padding-top: 10px;
  & h5 {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
    @media (min-width: 1280px) {
      color: rgba(255, 255, 255);
      font-size: 15px;
    }
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    padding: 0;
    justify-content: space-around;
  }
  &.${activeClassName} {
    background-color: red;
  }
`;

export const StyledSubheaderContainer = styled(NavLink)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block;
    text-decoration: none;
    margin: ${(props) => (props.span ? "0 5px;" : null)};
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
    &:hover {
      ${(props) =>
        props.span
          ? `
              cursor: auto;
             
            `
          : `
              
              color: var(--iconActiveColor);
            `};
    }
  }
`;
