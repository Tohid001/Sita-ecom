import styled from "styled-components";

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
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    flex: 1 1 25%;
    padding-right: 50px;
  }
`;

export const StyledHeader = styled.h4`
  color: #fff;
  margin-bottom: 30px;
  font-size: 14px;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 4px;
  line-height: 20px;
  @media (max-width: 768px) {
    margin-bottom: 15px;
    text-align: center;
    font-size: 11px;
  }
`;
