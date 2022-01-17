import styled from "styled-components";

export const StyledBurgerContainer = styled.div`
  display: flex;
  align-items: center;
  width: calc(50% - 45px);
  height: 50px;
  /* left: 0; */
  /* top: 0; */
  /* position: relative; */
  @media (min-width: 1280px) {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: ${(props) => (props.toggled ? "40px" : null)};
  padding: 14px 10px;
  cursor: pointer;
  background: ${(props) => (props.toggled ? "rgba(255, 255, 255, 0.1)" : null)};
  transition: all 300ms ease;
`;

export const StyledBar = styled.span`
  display: block;
  position: relative;
  height: 2px;
  background: white;
  width: 100%;
  transform: ${(props) => (props.toggled ? "translateX(-1px)" : null)};
  background-color: ${(props) => (props.toggled ? "transparent" : "white")};
  transition: all 300ms ease;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    height: 2px;
    background: ${(props) =>
      props.toggled ? "var(--iconActiveColor)" : "white"};
    transition: all 300ms ease;
  }
  &:before {
    transform: ${(props) =>
      props.toggled ? " rotate(135deg)" : "translateY(-6px)"};
  }
  &:after {
    transform: ${(props) =>
      props.toggled ? "rotate(-135deg) " : "translateY(6px)"};
  }
`;

/* & span:nth-child(2) {
    margin: 4px 0;
    display: ${(props) => (props.toggled ? "none" : "block")};
  }
  & span:nth-child(1) {
    transform: ${(props) => (props.toggled ? " rotate(45deg)" : null)};
  }
  & span:nth-child(3) {
    transform: ${(props) => (props.toggled ? " rotate(-45deg)" : null)};
  } */
