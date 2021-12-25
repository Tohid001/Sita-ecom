import styled from "styled-components";

export const StyledSeachContainer = styled.div`
  padding: 5px 0;
  position: relative;
  @media (max-width: 1279px) {
    display: block;
    position: fixed;
    width: 100%;
    top: ${(props) => (props.searchOpen ? "50px" : "-60px")};
    left: 0px;
    right: 0px;
    box-shadow: 0 5px 5px rgb(0 0 0 / 20%);
    /* margin: 0 -15px 0; */
    padding: 0;
    background: #fff;
    /* z-index: 100; */
    transition: all 400ms ease;
  }
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: "text",
  placeholder: "Search",
}))``;
