import styled from "styled-components";

export const StyledFooter = styled.div`
  padding: 0 0 50px;
  width: 100%;
  /* position: fixed;
  bottom: 0; */
  /* left: 0; */
  /* right: 0; */
  margin-top: auto;

  background: var(--header);
  @media (min-width: 768px) {
    padding: 25px 0 0;
    font-size: 14px;
  }
  @media (min-width: 1280px) {
    padding: 0;
    font-size: 16px;
    /* bottom: 0;
    z-index: 10; */
  }
`;

export const StyledFooterContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1366px) {
    max-width: 1320px;
  }
`;

export const StyledMainFooter = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 20px 0 0;
    border-bottom: none;
  }
  @media (max-width: 1279px) {
    font-size: 14px;
    /* padding-top: 50px; */
  }
`;

export const StyledContactContainer = styled.div`
  @media (max-width: 768px) {
    flex: 1 1 100%;
    padding: 0;
    margin-bottom: 10px;
  }
`;
