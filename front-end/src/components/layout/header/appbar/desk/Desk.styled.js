import styled from "styled-components";

export const StyledDeskContainer = styled.div`
  width: calc(50% - 45px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 2px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const StyledIconContainer = styled.div`
  margin-left: 15px;
  position: relative;
  & svg {
    height: 24px;
    width: 24px;
    color: #fff;
  }
  & svg:nth-child(1) {
    color: ${(props) => (props.searchOpen ? "#EF4A23" : "#fff")};
  }
`;

export const StyledCounter = styled.div`
  position: absolute;
  right: -10px;
  top: -6px;
  background: #ef4a23;
  color: #fff;
  border-radius: 20px;
  font-size: 11px;
  line-height: 13px;
  width: 16px;
  text-align: center;
`;
