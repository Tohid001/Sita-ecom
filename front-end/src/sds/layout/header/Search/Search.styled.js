import styled from "styled-components";

export const StyledSeachContainer = styled.div`
  display: block;

  @media (max-width: 1279px) {
    z-index: -1;
    position: fixed;
    top: ${(props) => (props.searchOpen ? "50px" : "-60px")};
    left: 0px;
    right: 0px;

    box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
    padding: 0;
    background: #fff;
    transition: all 400ms ease;
  }

  @media (min-width: 1280px) {
    position: relative;
    top: 0;
    background: transparent;
    transition: none;
    flex: 1 1 auto;
  }
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Search",
}))`
  padding-left: 15px;
  height: 46px;
  background: none;
  border: none;
  padding: 0 40px 0 20px;
  font-weight: normal;
  margin-bottom: 0;
  font-size: 15px;
  outline: none;
  width: 100%;
  font-family: "Trebuchet MS", sans-serif;
  @media (min-width: 1280px) {
    padding: 0 40px 0 20px;
    height: 42px;
    background: #fff;
    border-radius: 4px;
  }
`;

export const StyledSearchButton = styled.button`
  top: 12px;
  opacity: 0.5;
  position: absolute;
  right: 7px;

  border: none;
  background: none;
  @media (min-width: 1280px) {
    top: 10px;
    opacity: 1;
  }
`;
