import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledMainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;

  @media (max-width: 1279px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 20px 0 0;
    border-bottom: none;
  }
  @media (min-width: 1366px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const StyleMainFooterContainer = styled.div`
  flex: 0 0 100%;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    flex: 0 0 25%;

    margin-bottom: 0;
  }
`;

export const StyledHeader = styled.h4`
  white-space: nowrap;
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

export const StyledListContainer = styled.ul`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    text-align: center;
    display: block;
    padding-bottom: 20px;
  }
`;

export const StyledListItem = styled(NavLink)`
  text-decoration: none;
  color: #999;
  display: inline-block;
  width: 32%;
  line-height: 20px;

  &:hover {
    color: #ef4a23;
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    flex: 0 0 50%;
    padding: 0 0 15px;
  }
  @media (max-width: 768px) {
    width: auto;
    padding: 0 10px;
    margin-bottom: 10px;
    position: relative;
    &:after {
      content: "";
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 3px;
      background: #666;
      position: absolute;
      right: -4px;
      top: 9px;
    }
  }
`;

export const StyledOrgInfoBox = styled.div`
  color: #666666;
  font-size: 14px;
  line-height: 26px;

  padding-top: ${(props) => props.type === "socialLink" && "10px"};

  @media (max-width: 768px) {
    max-width: 340px;
    margin: 0 auto 10px;
    color: #999;
    text-align: center;
  }
  & b {
    color: #fff;
    font-weight: normal;
    display: inline-block;
    margin-bottom: 5px;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const StyledSocialLinks = styled.a`
  text-decoration: none;

  margin-right: 6px;
  padding: 8px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.1);
  display: inline-block;
`;
