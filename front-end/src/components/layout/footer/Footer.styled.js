import styled from "styled-components";

export const StyledFooter = styled.div`
  /* padding: 0 0 50px; */

  background: var(--header);
  @media (min-width: 768px) {
    padding: 25px 0 0;
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    padding: 50px 0 0;
    font-size: 16px;
  }
`;

export const StyledFooterContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 1366px) {
    margin: auto;
    max-width: 1320px;
  }
`;
