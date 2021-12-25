import styled from "styled-components";

export const StyledSeachContainer = styled.div`
  display: block;
  position: fixed;
  /* width: 100%; */
  top: ${(props) => (props.searchOpen ? "50px" : "-60px")};
  left: 0px;
  right: 0px;
  box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
  /* margin: 0 -15px 0; */
  padding: 0;
  background: #fff;
  /* z-index: 100; */
  transition: all 400ms ease;

  @media (min-width: 1280px) {
    /* padding: 5px 0; */
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
