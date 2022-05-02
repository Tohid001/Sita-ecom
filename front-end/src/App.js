// import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";

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
import GlobalStyles from "./GlobalStyles";
import { Footer, Header } from "./Containers";

function App() {
  return (
    <>
      <GlobalStyles /> <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
