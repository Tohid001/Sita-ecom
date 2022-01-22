import styled from "styled-components";

export const StyledSubfooter = styled.div`
  @media (max-width: 1366px) {
    background: rgba(0, 0, 0, 0.4);
  }

  padding: 15px 0;
  display: flex;
  flex-wrap: wrap;

  & p {
    flex: 0 0 100%;
    text-align: center;
    color: #999;
    font-size: 12px;
    line-height: 26px;
    @media (min-width: 768px) {
      flex: 0 0 50%;
      text-align: start;
    }
    & a {
      color: rgb(239, 74, 35);
    }

    &:nth-child(2) {
      text-align: end;
    }
  }
`;
