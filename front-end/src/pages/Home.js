import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/header elements/Header";
import Footer from "../components/layout/footer/Footer";

import { StyledHome } from "./Home.styled";

function Home() {
  return (
    <>
      <StyledHome>
        <div
          style={{
            position: "sticky",
            top: 0,
          }}
        >
          <Header />
        </div>

        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <p>hdhdhdhdhdhdhdhdh</p>
        <Outlet />
        <div
          style={{
            marginTop: "auto",
          }}
        >
          <Footer />
        </div>
      </StyledHome>
    </>
  );
}

export default Home;
