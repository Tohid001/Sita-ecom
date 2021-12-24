import styled from "styled-components";

export const StyledHeader = styled.div`
  background: #081621;
  box-shadow: 0 2px 2px rgb(0 0 0 / 10%);
  margin-bottom: 30px;
  position: relative;
  z-index: 100;
  @media (max-width: 1279px) {
    margin-bottom: 15px;
  }
`;

export const StyledHeaderTop = styled.div`
  padding: 15px 0;

  @media (max-width: 1279px) {
    padding: 0;
  }
`;

export const StyledHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 1279px) {
    display: block;
    max-width: 100%;
  }
  @media (min-width: 1280px) {
    max-width: 100%;
  }
`;
