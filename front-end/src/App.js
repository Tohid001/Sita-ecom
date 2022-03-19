// import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import GlobalStyles from "./GlobalStyles";
// import Home from "./pages/Home.js";

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="stores" element={<p>stores</p>} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from "react";
import Header from "./Containers/header/Header.jsx";

function App() {
  return <Header></Header>;
}

export default App;
