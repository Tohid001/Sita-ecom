import React from "react";
import { Routes, Route, Router } from "react-router-dom";

import { GlobalStyles } from "./Global.styled.js";
import Header from "./components/layout/header/header elements/Header.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}

export default App;
