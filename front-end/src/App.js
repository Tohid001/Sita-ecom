import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home.js";

function App() {
  useEffect(() => {
    console.log("app");
    // const element = document.getElementById("bottomBar");
    // console.log(element);
  });
  return (
    <>
      <Router>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="stores" element={<p>stores</p>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
