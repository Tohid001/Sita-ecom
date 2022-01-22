import styled from "styled-components";

export const StyledSubfooter = styled.div`
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
      &:nth-child(1) {
        text-align: start;
      }
      &:nth-child(2) {
        text-align: end;
      }
    }
    & a {
      color: rgb(239, 74, 35);
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1366px) {
    padding: 0 15px;
  }
  @media (max-width: 1366px) {
    background: rgba(0, 0, 0, 0.4);
    margin: 0 -15px;
  }
`;
