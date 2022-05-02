import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
    padding-right: 10px;
  }
  @media (max-width: 768px) {
    text-align: center;
    display: block;
    padding-bottom: 20px;
  }
`;
//Navlink
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
    /* position: relative; */
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
  cursor: pointer;
  &:hover {
    background: #3749bb;
  }
`;

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
    padding: 15px 15px;
  }
  @media (max-width: 1366px) {
    background: rgba(0, 0, 0, 0.4);
    margin: 0 -15px;
  }
`;
