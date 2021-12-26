import React from "react";
import {
  StyledBottomNavigationContainer,
  StyledActionContainer,
  StyledSubheaderContainer,
} from "./BottomNavigation.styled";
import { data } from "./data";
import { IconContext } from "react-icons";

function BottomNavigation() {
  return (
    <StyledBottomNavigationContainer>
      <IconContext.Provider value={{ className: "actionIcon" }}>
        {data.map((value, index) => (
          <StyledActionContainer key={index} to={value.path}>
            <div>{value.icon}</div>
            <div>
              <h5>{value.title}</h5>
              {value.subHeader ? (
                <p>
                  <StyledSubheaderContainer to="/Register">
                    Register
                  </StyledSubheaderContainer>
                  <StyledSubheaderContainer as="span" span>
                    or
                  </StyledSubheaderContainer>
                  <StyledSubheaderContainer to="/Login">
                    Login
                  </StyledSubheaderContainer>
                </p>
              ) : null}
            </div>
          </StyledActionContainer>
        ))}
      </IconContext.Provider>
    </StyledBottomNavigationContainer>
  );
}

export default BottomNavigation;
