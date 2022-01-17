import styled from "styled-components";

export const StyledHeader = styled.div`
  background: var(--header);
  box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
  margin-bottom: 15px;
  width: 100%;

  @media (min-width: 1280px) {
    margin-bottom: 30px;
  }
`;

export const StyledHeaderTop = styled.div`
  padding: 0;

  @media (min-width: 1280px) {
    padding: 15px 0;
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  color: white;
  width: 100%;
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 1366px) {
    max-width: 1410px;
  }
`;
