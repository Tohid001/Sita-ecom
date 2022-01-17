import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { GlobalStyles } from "./Global.styled.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
