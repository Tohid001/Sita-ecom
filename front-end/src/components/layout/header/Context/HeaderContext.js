import React, { createContext, useReducer, useEffect } from "react";

let Context = null;
const { Provider, Consumer } = (Context = createContext());

const initialState = {
  toggled: false,
  searchOpen: false,
};
const reducer = (state, { type, value }) => {
  switch (type) {
    case "setToggled":
      return { ...state, toggled: !state.toggled };
    case "setSearchOpen":
      return { ...state, searchOpen: !state.searchOpen };
    default:
      return state;
  }
};

function UserProvider(props) {
  console.log("UserProvider is rendered");
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <Provider
      value={{
        ...data,
        dispatch,
      }}
    >
      {props.children}
    </Provider>
  );
}
export { UserProvider, Consumer as UserConsumer, Context as UserContext };
