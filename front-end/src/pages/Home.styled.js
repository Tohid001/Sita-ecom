import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(calc(var(--vh) * 100) - 61px);
  /* min-height: 100vh; */
  @media (min-width: 1280px) {
    min-height: calc(var(--vh, 1vh) * 100);
  }
`;
