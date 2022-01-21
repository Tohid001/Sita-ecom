import styled from "styled-components";

export const StyledMainFooter = styled.div`
  display: flex;

  @media (max-width: 1279px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 20px 0 0;
    border-bottom: none;
  }
`;

export const StyleMainFooterContainer = styled.div`
  flex: 1 1 100%;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    flex: ${({ type }) => (type === "aboutUs" ? "1 1 50%" : "1 1 25%")};
    padding: ${({ type }) =>
      type === "aboutUs"
        ? 0
        : type === "contacts"
        ? "0 50px 0 0"
        : "0 0 0 50px"};
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

export const StyledContactBox = styled.a`
  display: flex;

  padding: 10px 0;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-decoration: none;
  color: #ef4a23;
  &:hover {
    @media (min-width: 768px) {
      border-color: #ef4a23;
    }
  }
  @media (max-width: 768px) {
    max-width: 300px;
    margin: 0 auto 20px;
  }
  @media (min-width: 768px) {
    width: 100%;
    padding-right: 4px;
  }
`;

export const StyledContactIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px 0 20px;
  margin-right: 20px;
  border-right: 1px solid #333;
`;

export const StyledContactText = styled.div`
  flex-basis: 100%;
  font-weight: normal;
  white-space: nowrap;

  & p {
    margin: 0 0 4px;
    font-size: 12px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.5);
  }

  & h5 {
    color: #ef4a23;
    font-size: 20px;
    line-height: 28px;
    @media (min-width: 768px) {
      border-color: #ef4a23;
      font-size: 20px;
    }
  }
`;

export const StyledAboutBox = styled.ul`
  @media (max-width: 1279px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    text-align: center;
    display: block;
    padding-bottom: 20px;
  }
`;

export const StyledAboutItem = styled.li`
  @media (max-width: 1279px) {
    width: 50%;
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
