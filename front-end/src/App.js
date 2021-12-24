import React from "react";
import { Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./Global.styled.js";
import Header from "./components/layout/header/header elements/Header.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
    </>
  );
}

export default App;
